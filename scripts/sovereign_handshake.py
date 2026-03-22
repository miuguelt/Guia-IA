#!/usr/bin/env python3
"""
🧬> ### 🔱 SOBERANÍA ANTIGRAVITY v32.5 [ULTRA_TRUTH]
Script de arranque obligatorio para sincronizar el contexto con la realidad fisica.
Ejecutar al inicio de CADA nueva conversacion o sesión de trabajo.

Uso: python3 scripts/sovereign_handshake.py
"""
import sys
import os

# Normalización de paths para ejecución directa o como módulo
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
if SCRIPT_DIR not in sys.path: sys.path.insert(0, SCRIPT_DIR)
if PROJECT_ROOT not in sys.path: sys.path.insert(0, PROJECT_ROOT)

try:
    # Intento de importación estilo paquete (preferido por IDEs)
    from scripts import sovereign_core
    from scripts import telemetry_engine
except (ImportError, ValueError):
    # Fallback para ejecución directa
    import sovereign_core
    import telemetry_engine

if __name__ == "__main__":
    print("*   **[IDENTIDAD]**: Reglas: `v32.5` | ADN: `Singularity v32.5` — Iniciando sincronización...")
    
    # 1. Sincronizar vistas con el estado actual
    sovereign_core._sync_all_views()
    
    # 2. RESET DE SESIÓN (NUEVA CONVERSACIÓN)
    session_file = os.path.join(PROJECT_ROOT, "src/data/history/session_usage.json")
    with open(session_file, 'w') as f:
        import json
        json.dump({"in": 0, "out": 0, "requests": 0}, f, indent=4)
    print("📈 Contador de Sesión Reiniciado (0 tokens)")

    # 3. Asegurar copia física para compatibilidad (Windows/WSL)
    global_path = "/home/miguel/.gemini/antigravity/token_economy.json"
    local_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../src/data/token_economy.json")
    if os.path.exists(global_path):
        import shutil
        shutil.copy2(global_path, local_path)
        print("📁 S-SOT Local Sincronizado (Copia Física)")
    
    # 3. Generar y mostrar el bloque de telemetría
    block = telemetry_engine.generate_telemetry_block()
    print(block.strip())
    print("")
    print("✅ HANDSHAKE COMPLETO — Contexto sincronizado con S-SOT v32.5")
