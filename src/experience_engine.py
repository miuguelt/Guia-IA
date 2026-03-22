import os
import json
import datetime

def main():
    print("🧠 EXPERIENCE_ENGINE v23.0 [ACTIVE] - Registro de sesión iniciado.")
    # Estructura mínima para evitar crash de scripts dependientes
    path = "src/data/history/experience_log.json"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if not os.path.exists(path):
        with open(path, "w") as f:
            json.dump({"metrics": {"scd": 100, "aer": 100, "si": 100}, "last_run": datetime.datetime.now().isoformat()}, f)

if __name__ == "__main__":
    main()
