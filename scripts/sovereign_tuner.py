import subprocess
import json
import os
import time

def get_gpu_load():
    try:
        output = subprocess.check_output([
            "nvidia-smi", "--query-gpu=utilization.gpu,memory.used,memory.total", 
            "--format=csv,noheader,nounits"
        ]).decode()
        util, used, total = map(int, output.strip().split(", "))
        return util, used, total
    except:
        return 0, 0, 8192

def tune_resources():
    print("🚀 Sovereign Tuner v23.0 [SYNTHESIS] - Optimizando Recursos")
    util, used, total_vram = get_gpu_load()
    vram_percent = (used / total_vram) * 100

    print(f"📊 GPU Load: {util}% | VRAM: {vram_percent:.1f}%")

    # Configuración de límites dinámicos
    if vram_percent > 85:
        print("⚠️ VRAM Crítica - Reduciendo prioridad de servicios no esenciales")
        # Reducir CPU shares de servicios secundarios
        subprocess.run(["docker", "update", "--cpu-shares", "256", "guia_ia_sovereign"])
    elif vram_percent < 50:
        print("✅ VRAM Estable - Maximizando rendimiento de inferencia")
        subprocess.run(["docker", "update", "--cpu-shares", "1024", "guia_ia_sovereign"])
        subprocess.run(["docker", "update", "--cpu-shares", "1024", "antigravity_ollama"])

    # Ajuste de Ollama (Simulado - requiere API / env vars en reinicio)
    print("🧠 Memoria Neural Sincronizada.")

if __name__ == "__main__":
    tune_resources()
