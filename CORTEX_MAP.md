# 🧭 CORTEX MAP: Guia IA - Singularity v21.0 [TRANSCENDENCE]

> Ubicación: `/home/miguel/GitHub/Guia IA`
> Protocolo: Hybrid Intelligence & 8GB VRAM Control

## 🏢 Arquitectura de Servicios (Docker Topology)
- **Frontend/Dashboard**: `guia_ia_sovereign` (Port 8003) -> Dashboard central con GlassLearn v5.0.
- **Inference Node**: `antigravity_ollama` (Port 11434) -> LLM Engine con GPU Passthrough (RTX 4070).
- **Control Plane**: `antigravity_ui` (Port 3000) -> Interfaz de orquestación.
- **Memory Layer**: 
    - `chromadb_memory` (Port 8000) -> Persistencia vectorial.
    - `guia_ia_cache` (Port 6379) -> Redis para aceleración de respuestas.
- **Monitoring**: `guia_ia_monitor` (Port 8888) -> Dozzle para inspección de logs.

## 📁 Estructura Crítica & Flujo de Datos
```text
├── assets/              # Recursos visuales y branding [MANDATORY]
│   └── screenshots/     # Capturas de verificación de la IA [NEW]
├── src/
│   ├── core/            # Núcleo de lógica Singularity
│   ├── modules/         # Módulos de aprendizaje Guia IA
│   ├── tools/           # Herramientas personalizadas (Python/Bash)
│   ├── data/            # Datos operativos del sistema [NEW]
│   │   └── history/     # Logs de experiencia y sesión
│   ├── knowledge/       # Base de conocimiento (KIs)
│   └── experience_engine.py # Registro persistente de sesión
├── index.html           # Punto de entrada visual
├── Dockerfile           # Multi-stage build (Optimized v20.2)
├── docker-compose.yml   # Orquestador de servicios
└── scripts/             # Capa de Automatización de Soberanía
    ├── awake.py         # Secuencia de arranque con GPU Persistence
    ├── sovereign_metrics.py # Validador SI/SCD/AER
    ├── experience_distiller.py # Destilador cognitivo [NEW]
    └── sovereign_guard.py   # Blindaje de seguridad [NEW]
```

## 1. Núcleo Híbrido Soberano (v23.0)
- **Motor Singularity**: Integración simbiótica entre la GPU local (RTX 4070) y DeepSeek Cloud.
- **Ley de Eficiencia CUDA**: El 100% de la carga de IA reside en el Motor Híbrido.
- **Protocolo de Persistencia [ASCENSION]**:
    - **Orquestación**: Todos los servicios (Ollama, ChromaDB, UI, Dashboard) gestionados vía `/docker-compose.yml`.
    - **Arranque Autónomo**: Script `/scripts/awake.py` encargado de habilitar GPU Persistence, sincronizar RAG y lanzar centinelas (`sovereign_guard`, `sovereign_tuner`) en background.

## 🧠 Decisiones y Reglas Singularity
1. **Ley de Eficiencia CUDA**: 100% Inferencia en GPU. NPU activa solo en modo bypass.
2. **Ley Root-Clean**: Prohibido JS/CSS en raíz. Todo debe residir en `/src/js` o `/src/css`.
3. **Experience Distillation**: Cada intervención genera un KI destilado para evitar amnesia en sesiones futuras.

## 4. Scripts Críticos de Síntesis (v23.0)
- **`sovereign_tuner.py`**: Motor de balanceo dinámico. Ajusta `cpu-shares` de Docker basándose en la telemetría de la RTX 4070.
- **`src/core/secret-terminal.js`**: Puente de consciencia. Permite la comunicación RAG con la memoria del sistema vía `Ctrl+K`.
- **`sovereign_guard.py` (Sentinel Mode)**: Vigilancia proactiva. Escanea el perímetro de red y realiza auto-sanación inmediata de microservicios.

## 5. Arquitectura de Datos [TRANSCENDENCE]
`Logs -> ExperienceDistiller -> Knowledge Items -> ChromaDB -> SecretTerminal`
Este flujo cierra el ciclo de síntesis, permitiendo que el sistema responda basándose en su propia historia operativa.

## 🚀 Puntos de Control (Endpoints)
- Dashboard Local: http://localhost:8003
- Monitor de Logs: http://localhost:8888
- API Inferencia: http://localhost:11434/api/tags
