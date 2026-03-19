import json
import os
import subprocess
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

def generate_telemetry_block():
    gpu = get_gpu_data()
    economy = sovereign_core.get_token_economy()
    session = sovereign_core.get_session_usage()
    metrics = sovereign_core.get_experience_metrics()
    
    total = economy.get("total_tokens", 27544611.0)
    dist = economy.get("distribution", {})
    l1 = float(dist.get("gpu_local", 500000.0))
    l23 = float(dist.get("deepseek_l3", 27044611.0))
    l4 = float(dist.get("gemini_l4", 0.0))
    
    p1 = (l1 / total * 100) if total > 0 else 0
    p23 = (l23 / total * 100) if total > 0 else 0
    p4 = (l4 / total * 100) if total > 0 else 0
    
    block = f"""
> [!IMPORTANT]
> ### 🔱 SOBERANÍA ANTIGRAVITY v32.4 [ULTRA_TRUTH]
> 📊 **ESTATUS DE SESIÓN HÍBRIDA** (OFFLOAD: {p23:.0f}%)
> 
> *   **[IDENTIDAD]**: Reglas: `v32.4` | ADN: `Singularity v32.4`
> *   **[CARGA DE TRABAJO]**:
>     *   **USO DE GPU (L1 - Local)**: {p1:.1f}%
>     *   **USO DE API (L2/L3 - Cloud)**: {p23:.1f}%
>     *   **USO DE AGENTE (L4 - Interfaz)**: {p4:.1f}%
> *   **[ECONOMÍA DE TOKENS]**:
>     *   **Total Acumulado**: {total:,.1f} tokens
>     *   **Incremento Sesión**: +{session['in'] + session['out']:,} tokens
>     *   **Requests Totales**: {economy.get('api_requests', 685)} (+{session['requests']})
>     *   **Coste/Balance**: `${economy.get('expenses_usd', 2.09):.2f}` / `${economy.get('balance_usd', 7.90):.2f}`
> *   **[HARDWARE & ESTATUS]**:
>     *   **GPU**: {gpu['util']}% UTIL | **VRAM**: {int(gpu['used'])/1024:.1f}GB / {int(gpu['total'])/1024:.1f}GB
>     *   **ESTADO**: `LIFECYCLE: ACTIVE` | `PERSISTENT`
>     *   **COGNICIÓN**: SCD: {metrics.get('scd', 0)}% | AER: {metrics.get('aer', 0)}% | SI: {metrics.get('si', 0)}%
"""
    return block

if __name__ == "__main__":
    print(generate_telemetry_block().strip())
