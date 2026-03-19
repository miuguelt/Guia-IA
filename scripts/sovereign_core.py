import json
import os
import datetime
from typing import Dict, Any

PROJECT_ROOT = "/home/miguel/GitHub/Guia IA"
ECONOMY_PATH = os.path.join(PROJECT_ROOT, "src/data/token_economy.json")
STATUS_PATH = os.path.join(PROJECT_ROOT, "src/js/sovereign_status.json")
SESSION_LOG_PATH = os.path.join(PROJECT_ROOT, "src/data/history/session_usage.json")

def get_token_economy() -> Dict[str, Any]:
    if os.path.exists(ECONOMY_PATH):
        try:
            with open(ECONOMY_PATH, 'r') as f:
                return json.load(f)
        except: pass
    return {
        "total_tokens": 27544611.0, 
        "distribution": {"gpu_local": 500000.0, "deepseek_l3": 27044611.0, "gemini_l4": 0.0},
        "expenses_usd": 2.09, "balance_usd": 7.90, "api_requests": 685
    }

def track_usage(input_tokens: int, output_tokens: int):
    """Registra incremento de uso y sincroniza con Economy y Status UI."""
    usage = {"in": 0, "out": 0, "requests": 0}
    if os.path.exists(SESSION_LOG_PATH):
        try:
            with open(SESSION_LOG_PATH, 'r') as f:
                usage = json.load(f)
        except: pass
    
    usage["in"] += input_tokens
    usage["out"] += output_tokens
    usage["requests"] += 1
    
    with open(SESSION_LOG_PATH, 'w') as f:
        json.dump(usage, f, indent=4)
    
    _sync_all_views(usage)

def _sync_all_views(session_usage: Dict[str, int]):
    total_inc = session_usage["in"] + session_usage["out"]
    
    # 1. Base Economy (S-SOT)
    economy = get_token_economy()
    
    base_tokens = 27544611.0
    base_requests = 685
    base_expenses = 2.09
    base_balance = 7.90
    
    current_tokens = float(base_tokens + total_inc)
    current_requests = int(base_requests + session_usage["requests"])
    
    cost_inc = (float(total_inc) / 1000000.0) * 0.28
    current_expenses = float(base_expenses + cost_inc)
    current_balance = float(base_balance - cost_inc)
    
    economy_update = {
        "total_tokens": current_tokens,
        "distribution": economy.get("distribution", {}),
        "expenses_usd": float(round(current_expenses, 5)),
        "balance_usd": float(round(current_balance, 5)),
        "api_requests": current_requests,
        "last_update": datetime.datetime.now().isoformat(),
        "version": "32.4",
        "status": "LIVE_SYNCED"
    }
    
    with open(ECONOMY_PATH, 'w') as f:
        json.dump(economy_update, f, indent=4)
        
    # 2. UI Status (Frontend Dashboard)
    metrics = get_experience_metrics()
    status_update = {
        "scd": int(metrics.get("scd", 100)),
        "aer": int(metrics.get("aer", 100)),
        "si": int(metrics.get("si", 100)),
        "tokens": current_tokens,
        "expenses_usd": float(round(current_expenses, 2)),
        "timestamp": datetime.datetime.now().isoformat(),
        "version": "32.4"
    }
    
    with open(STATUS_PATH, 'w') as f:
        json.dump(status_update, f, indent=4)

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
    return "32.4"
