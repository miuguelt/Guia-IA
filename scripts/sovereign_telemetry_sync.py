import json
import os
import datetime
import sovereign_core

def sync_telemetry():
    print(f"🧬 Sincronizando Telemetría ULTRA_TRUTH {sovereign_core.get_sovereign_version()}...")
    
    economy = sovereign_core.get_token_economy()
    metrics = sovereign_core.get_experience_metrics()
    
    # Construir Status Unificado para Dashboard
    status = {
        "scd": metrics.get("scd", 100),
        "aer": metrics.get("aer", 100),
        "si": metrics.get("si", 100),
        "tokens": economy.get("total_tokens", 0),
        "expenses_usd": economy.get("expenses_usd", 0),
        "timestamp": datetime.datetime.now().isoformat(),
        "version": sovereign_core.get_sovereign_version()
    }
    
    # Guardar Status (Ruta absoluta desde el core)
    with open(sovereign_core.STATUS_PATH, 'w') as f:
        json.dump(status, f, indent=4)
        
    print(f"✅ Sincronización Exitosa: {status['tokens']:,} tokens | SCD={status['scd']}%")

if __name__ == "__main__":
    sync_telemetry()
