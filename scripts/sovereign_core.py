import os
import json
from typing import Dict, Any, Union, cast
import datetime

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
# GLOBAL S-SOT PATH (ULTRA_TRUTH PERSISTENCE)
ECONOMY_PATH = os.path.join(PROJECT_ROOT, "src/data/token_economy.json")
STATUS_PATH = os.path.join(PROJECT_ROOT, "src/js/sovereign_status.json")
SESSION_LOG_PATH = os.path.join(PROJECT_ROOT, "src/data/history/session_usage.json")

def get_token_economy() -> Dict[str, Any]:
    GOLD_STANDARD = {
        "total_tokens": 59600921.0, 
        "distribution": {"gpu_local": 1878046.0, "deepseek_l3": 27544611.0, "gemini_l4": 30178264.0},
        "expenses_usd": 2.09, "balance_usd": 7.90, "api_requests": 685
    }
    
    if os.path.exists(ECONOMY_PATH):
        try:
            with open(ECONOMY_PATH, 'r') as f:
                data = json.load(f)
                
            # MIGRACIÓN: Si es una lista (formato antiguo/log), destilar a dict
            if isinstance(data, list):
                total = sum(float(item.get("tokens", 0)) for item in data if isinstance(item, dict))
                # Usar distribución base si no existe
                economy: Dict[str, Any] = cast(Dict[str, Any], GOLD_STANDARD.copy())
                economy["total_tokens"] = max(total, float(cast(float, GOLD_STANDARD["total_tokens"])))
                economy["status"] = "MIGRATED_FROM_LIST"
                return economy
                
            if isinstance(data, dict):
                return data
        except Exception as e:
            print(f"⚠️ Error al leer Economy: {e}")
            
    return GOLD_STANDARD

def track_usage(input_tokens: int, output_tokens: int):
    """Registra incremento de uso y sincroniza con Economy y Status UI."""
    usage: Dict[str, Any] = {"in": 0, "out": 0, "requests": 0}
    if os.path.exists(SESSION_LOG_PATH):
        try:
            with open(SESSION_LOG_PATH, 'r') as f:
                loaded_usage = json.load(f)
                if isinstance(loaded_usage, dict):
                    usage.update(loaded_usage)
        except: pass
    
    usage["in"] = int(usage.get("in", 0)) + input_tokens
    usage["out"] = int(usage.get("out", 0)) + output_tokens
    usage["requests"] = int(usage.get("requests", 0)) + 1
    
    with open(SESSION_LOG_PATH, 'w') as f:
        json.dump(usage, f, indent=4)
    
    # ACTUALIZACIÓN MAESTRA (DELTA REAL) - Solo se aplica UNA VEZ por interacción
    delta = int(input_tokens + output_tokens)
    if delta > 0 or input_tokens > 0: 
        _update_master_economy(delta, 1)
    
    _sync_all_views()

def _update_master_economy(delta_tokens: int, delta_requests: int):
    economy = get_token_economy()
    
    # El Master Economy YA es el acumulado. Añadimos SOLO el delta.
    base_tokens = float(economy.get("total_tokens", 59600921.0))
    new_total = base_tokens + delta_tokens
    
    base_requests = int(economy.get("api_requests", 685))
    new_requests = base_requests + delta_requests
    
    base_expenses = float(economy.get("expenses_usd", 2.09))
    cost_inc = (float(delta_tokens) / 1000000.0) * 0.28
    new_expenses = base_expenses + cost_inc
    new_balance = float(economy.get("balance_usd", 7.90)) - cost_inc
    
    # Mantener distribución actual
    dist = economy.get("distribution", {"gpu_local": 1878046.0, "deepseek_l3": 44043920.0, "gemini_l4": 30178264.0})
    
    economy_update = {
        "total_tokens": float(new_total),
        "distribution": dist,
        "expenses_usd": round(float(new_expenses), 5),
        "balance_usd": round(float(new_balance), 5),
        "api_requests": int(new_requests),
        "last_update": datetime.datetime.now().isoformat(),
        "version": "32.5",
        "status": "LIVE_SYNCED"
    }
    
    with open(ECONOMY_PATH, 'w') as f:
        json.dump(economy_update, f, indent=4)

def _sync_all_views():
    """Sincroniza el estado actual con todas las interfaces sin alterar los datos maestro (Handshake Seguro)."""
    economy = get_token_economy()
    session_usage = get_session_usage()
    
    # Usar los valores PERSISTIDOS. El HANDSHAKE llama a esta función.
    current_tokens = float(economy.get("total_tokens", 59600921.0))
    current_expenses = float(economy.get("expenses_usd", 2.09))
    dist = economy.get("distribution", {"gpu_local": 1878046.0, "deepseek_l3": 44043920.0, "gemini_l4": 30178264.0})
    
    # Calcular porcentajes para el HUD
    total_t = current_tokens if current_tokens > 0 else 1
    p1  = float(dist.get("gpu_local", 1878046.0)) / total_t * 100
    p23 = float(dist.get("deepseek_l3", 44043920.0)) / total_t * 100
    p4  = float(dist.get("gemini_l4", 30178264.0)) / total_t * 100
        
    # 1. UI Status (Frontend Dashboard)
    metrics = get_experience_metrics()
    status_update = {
        "scd": int(metrics.get("scd", 100)),
        "aer": int(metrics.get("aer", 100)),
        "si": int(metrics.get("si", 100)),
        "tokens": float(current_tokens),
        "expenses_usd": round(float(current_expenses), 2),
        "offload": round(float(p1 + p23), 1),
        "l1_pct": round(float(p1), 1),
        "l3_pct": round(float(p23), 1),
        "l4_pct": round(float(p4), 1),
        "timestamp": datetime.datetime.now().isoformat(),
        "version": "32.4"
    }
    
    with open(STATUS_PATH, 'w') as f:
        json.dump(status_update, f, indent=4)
        
    # 2. Dynamic Constitution (GEMINI.md Update)
    _update_gemini_constitution(current_tokens)

def _update_gemini_constitution(total_tokens: float):
    gemini_md_path = os.path.join(PROJECT_ROOT, "GEMINI.md")
    if not os.path.exists(gemini_md_path):
        return
        
    try:
        with open(gemini_md_path, 'r') as f:
            lines = f.readlines()
            
        updated = False
        for i, line in enumerate(lines):
            if "Baseline Gold Standard (v32.4)" in line:
                # Reemplazar la línea de métricas (manteniendo el formato)
                lines[i] = f"- **Baseline Gold Standard (v32.4)**: Los valores base de la economía de tokens son **{total_tokens:,.1f} total**. Cualquier desviación significativa debe ser justificada por el motor de razonamiento.\n"
                updated = True
                break
        
        if updated:
            with open(gemini_md_path, 'w') as f:
                f.writelines(lines)
    except Exception as e:
        print(f"⚠️ Error al actualizar GEMINI.md: {e}")

def get_session_usage() -> Dict[str, int]:
    if os.path.exists(SESSION_LOG_PATH):
        try:
            with open(SESSION_LOG_PATH, 'r') as f:
                return json.load(f)
        except: pass
    return {"in": 0, "out": 0, "requests": 0}

def get_experience_metrics() -> Dict[str, int]:
    metrics = {"scd": 100, "aer": 100, "si": 100}
    path = os.path.join(PROJECT_ROOT, "src/data/history/experience_log.json")
    if os.path.exists(path):
        try:
            with open(path, 'r') as f:
                data = json.load(f)
                return data.get("metrics", metrics)
        except: pass
    return metrics

def get_sovereign_version():
    return "32.5"
