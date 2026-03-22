import os
import subprocess
import sys
import time

def check_gpu():
    try:
        res = subprocess.check_output(["nvidia-smi", "--query-gpu=name,memory.total", "--format=csv,noheader,nounits"])
        print(f"✅ GPU Detectada: {res.decode().strip()}")
        return True
    except:
        print("❌ Error: No se detectó GPU NVIDIA (RTX 4070 requerida).")
        return False

def stop_host_ollama():
    print("🧹 Deteniendo instancia nativa de Ollama (Port 11434 conflict)...")
    try:
        # Intentar detener el servicio en Linux
        subprocess.run(["sudo", "systemctl", "stop", "ollama"], check=True, capture_output=True)
        print("✅ Host Ollama detenido.")
    except:
        print("ℹ️ Host Ollama no detectado o ya detenido.")

def start_docker():
    print("🚀 Iniciando Infraestructura Soberana Docker...")
    try:
        subprocess.run(["docker", "compose", "up", "-d"], check=True)
        print("✅ Contenedores activos.")
        # Asegurar modelo en el contenedor
        print("📥 Asegurando modelo nomic-embed-text en Docker...")
        subprocess.run(["docker", "exec", "antigravity_ollama", "ollama", "pull", "nomic-embed-text"], check=True)
        print("✅ Modelo sincronizado.")
    except Exception as e:
        print(f"❌ Error en despliegue Docker: {e}")

def activate_gpu_persistence():
    print("🔋 Activando GPU Persistence Mode...")
    try:
        subprocess.run(["sudo", "nvidia-smi", "-pm", "1"], check=True)
        print("✅ Persistence Mode habilitado.")
    except:
        print("⚠️ No se pudo activar Persistence Mode (posible falta de privilegios sudo).")

def start_sovereignty_suite():
    print("🧬 Iniciando Suite de Soberanía [v23.0]...")
    # 1. Exportar métricas iniciales
    subprocess.run(["python3", "scripts/sovereign_metrics.py"])
    # 2. Sincronizar RAG
    subprocess.run(["python3", "scripts/sovereign_sync.py"])
    # 3. Lanzar Centinelas en background (persistentes)
    subprocess.Popen(["python3", "scripts/sovereign_guard.py"], stdout=subprocess.DEVNULL)
    subprocess.Popen(["python3", "scripts/sovereign_tuner.py"], stdout=subprocess.DEVNULL)
    print("✅ Centinelas (Sentinel & Tuner) operando en background.")

def main():
    print("🧬 SINGULARITY v23.0 [ASCENSION] - Secuencia de Arranque")
    stop_host_ollama()
    activate_gpu_persistence()
    if check_gpu():
        start_docker()
        start_sovereignty_suite()
        subprocess.run(["python3", "src/experience_engine.py"])
    else:
        print("⚠️ Continuando en modo degradado (Sin GPU Passthrough)...")
        start_docker()
        start_sovereignty_suite()

if __name__ == "__main__":
    main()
