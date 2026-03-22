import sys
import os
import subprocess

# Normalización de paths para ejecución directa o como módulo
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
if SCRIPT_DIR not in sys.path: sys.path.insert(0, SCRIPT_DIR)
if PROJECT_ROOT not in sys.path: sys.path.insert(0, PROJECT_ROOT)

try:
    # Intento de importación estilo paquete (preferido por IDEs)
    from scripts import sovereign_core
except (ImportError, ValueError):
    # Fallback para ejecución directa
    import sovereign_core

def get_gpu_data():
    try:
        output = subprocess.check_output([
            "nvidia-smi", 
            "--query-gpu=utilization.gpu,memory.used,memory.total", 
            "--format=csv,noheader,nounits"
        ]).decode().strip().split(",")
        return {
            "util": output[0].strip(),
            "used": output[1].strip(),
            "total": output[2].strip()
        }
    except:
        return {"util": "0", "used": "0", "total": "8000"}

import datetime

def ensure_synced():
    """Asegura que el contexto esté sincronizado al menos una vez por día o sesión."""
    session_flag = os.path.join(PROJECT_ROOT, "src/data/history/.handshake_done")
    today = datetime.datetime.now().date().isoformat()
    
    if os.environ.get("IN_HANDSHAKE") == "1":
        return

    needs_sync = True
    if os.path.exists(session_flag):
        try:
            with open(session_flag, 'r') as f:
                last_sync_data = f.read().strip()
                if last_sync_data.startswith(today):
                    needs_sync = False
        except:
            pass

    if needs_sync:
        try:
            # Ejecutar handshake de forma silenciosa con guardia para evitar recursión
            script_path = os.path.join(SCRIPT_DIR, "sovereign_handshake.py")
            env = os.environ.copy()
            env["IN_HANDSHAKE"] = "1"
            subprocess.run([sys.executable, script_path], capture_output=True, env=env)
            
            with open(session_flag, 'w') as f:
                f.write(datetime.datetime.now().isoformat())
        except Exception as e:
            print(f"⚠️ Lazy-Sync failed: {e}")

def generate_telemetry_block():
    ensure_synced()
    gpu = get_gpu_data()
    economy = sovereign_core.get_token_economy()
    session = sovereign_core.get_session_usage()
    metrics = sovereign_core.get_experience_metrics()
    
    total = economy.get("total_tokens", 76100230.0)
    dist = economy.get("distribution", {})
    l1 = float(dist.get("gpu_local", 1878046.0))
    l23 = float(dist.get("deepseek_l3", 44043920.0))
    l4 = float(dist.get("gemini_l4", 30178264.0))
    
    p1 = (l1 / total * 100) if total > 0 else 0
    p23 = (l23 / total * 100) if total > 0 else 0
    p4 = (l4 / total * 100) if total > 0 else 0
    
    block = f"""
> [!IMPORTANT]
> ### 🔱 SOBERANÍA ANTIGRAVITY v32.5 [ULTRA_TRUTH]
> 📊 **ESTATUS DE SESIÓN HÍBRIDA** (OFFLOAD: {p1 + p23:.1f}%)
> 
> *   **[IDENTIDAD]**: Reglas: `v32.5` | ADN: `Singularity v32.5`
> *   **[CARGA DE TRABAJO]**:
>     *   **USO DE GPU (L1 - Local)**: {p1:.1f}%
>     *   **USO DE API (L2/L3 - Cloud)**: {p23:.1f}%
>     *   **USO DE AGENTE (L4 - Interfaz)**: {p4:.1f}%
> *   **[ECONOMÍA DE TOKENS]**:
>     *   **Total Acumulado**: {total:,.1f} tokens
>     *   **Incremento Sesión**: +{session['in'] + session['out']:,} tokens
>     *   **Requests Totales**: {economy.get('api_requests', 687)} (+{session['requests']})
>     *   **Coste/Balance**: `${economy.get('expenses_usd', 2.09):.2f}` / `${economy.get('balance_usd', 7.90):.2f}`
> *   **[HARDWARE & ESTATUS]**:
>     *   **GPU**: {gpu['util']}% UTIL | **VRAM**: {int(gpu['used'])/1024:.1f}GB / {int(gpu['total'])/1024:.1f}GB
>     *   **ESTADO**: `LIFECYCLE: ACTIVE` | `PERSISTENT`
>     *   **COGNICIÓN**: SCD: {metrics.get('scd', 0)}% | AER: {metrics.get('aer', 0)}% | SI: {metrics.get('si', 0)}%
"""
    return block

if __name__ == "__main__":
    print(generate_telemetry_block().strip())
