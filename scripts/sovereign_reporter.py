import os
import subprocess

def generate_report():
    # VERSION: 32.5 - Este reporter es una redirección al Master Block unificado
    script_path = os.path.join(os.path.dirname(__file__), "telemetry_engine.py")
    subprocess.run(["python3", script_path])

if __name__ == "__main__":
    generate_report()
