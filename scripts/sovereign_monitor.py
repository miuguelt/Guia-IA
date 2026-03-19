import subprocess
import time
import os

def get_vram_usage():
    try:
        output = subprocess.check_output(["nvidia-smi", "--query-gpu=memory.used", "--format=csv,noheader,nounits"])
        return int(output.decode().strip())
    except:
        return 0

def monitor():
    print("📊 Monitor de Soberanía Activo [SINGULARITY]")
    limit = 6400  # 80% de 8GB
    
    while True:
        vram = get_vram_usage()
        status = "NORMAL" if vram < limit else "WARNING"
        print(f"VRAM: {vram}MB / 8000MB | Status: {status}")
        
        if status == "WARNING":
            print("⚠️ Alerta: El uso de VRAM excede el límite constitucional del 80%.")
            
        time.sleep(10)

if __name__ == "__main__":
    monitor()
