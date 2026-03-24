import os
import json
import datetime
import subprocess
import sovereign_core

def get_si_metrics(root_path=sovereign_core.PROJECT_ROOT):
    """SI (Structural Integrity): Verifica cumplimiento de Ley Root-Clean."""
    critical_dirs = ["src", "assets"]
    required_tests = ["tests"]
    
    allowed_files = [
        "CORTEX_MAP.md", "GEMINI.md", "Dockerfile", 
        "docker-compose.yml", "index.html", ".dockerignore",
        ".gitignore", "package.json", "package-lock.json",
        "SOVEREIGN_LOG.md", "VERSION.json" # VERSION: 32.5
    ]
    
    root_files = [f for f in os.listdir(root_path) if os.path.isfile(os.path.join(root_path, f))]
    violations = [f for f in root_files if f not in allowed_files and not f.startswith(".")]
    
    si = 100 - (len(violations) * 10)
    return max(0, si)

def get_scd_metrics():
    """SCD (Context Density): Medición de profundidad semántica."""
    cortex_path = os.path.join(sovereign_core.PROJECT_ROOT, "CORTEX_MAP.md")
    if not os.path.exists(cortex_path):
        return 0
    
    with open(cortex_path, 'r') as f:
        content = f.read()
    lines = content.split('\n')
    return min(100, len(lines) * 2)

def update_experience_engine(scd, aer, si):
    try:
        economy = sovereign_core.get_token_economy()
        
        # Guardar estado para el Dashboard (v32.4 Gold)
        status = {
            "scd": scd,
            "aer": aer,
            "si": si,
            "tokens": economy.get("total_tokens", 0),
            "expenses_usd": economy.get("expenses_usd", 0),
            "timestamp": datetime.datetime.now().isoformat(),
            "version": sovereign_core.get_sovereign_version()
        }
        with open(sovereign_core.STATUS_PATH, "w") as f:
            json.dump(status, f, indent=4)
            
        print(f"✅ Métricas Actualizadas (v{sovereign_core.get_sovereign_version()}): SCD={scd}% | AER={aer}% | SI={si}%")
    except Exception as e:
        print(f"❌ Error al actualizar ExperienceEngine: {e}")

def get_aer_metrics():
    """AER (Evolution Rate): Control de colonización v32.4."""
    scripts_path = os.path.join(sovereign_core.PROJECT_ROOT, "scripts")
    if not os.path.exists(scripts_path):
        return 0
    sov_scripts = [f for f in os.listdir(scripts_path) if f.startswith("sovereign_") or f == "telemetry_engine.py"]
    return min(100, 80 + (len(sov_scripts) * 4))

if __name__ == "__main__":
    si = get_si_metrics()
    scd = get_scd_metrics()
    aer = get_aer_metrics()
    update_experience_engine(scd, aer, si)
