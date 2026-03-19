---
description: Ruta de solución para recuperación de errores del agente AI (Antigravity)
---

# 🛠️ Ruta de Recuperación Automatizada [RELIANCE v31.4]

Este flujo debe ejecutarse SIEMPRE que el agente (Antigravity) encuentre un error de tipo "Agent terminated due to error" o fallos intermitentes en la API.

## Pasos de Recuperación

1. **Verificación de Estado (Health Check)**:
   - **Bridge Pulse**: Ejecutar `system_orchestrator(action="list_containers")` para asegurar que el Hub Neural está activo.
   - Leer el archivo `app.js` y `styles.css` para verificar las últimas líneas modificadas.
   - Confimar que el código no quedó truncado en archivos de >50 líneas.

2. **Reinicio de Contexto & Compresión L1**:
   - Si la API MCP falla, no reintentar más de 2 veces.
   - Activar inmediatamente el **Offload L1** via `analyze_gpu` para resúmenes de contexto masivos.
   - Pasar inmediatamente a la generación local (Antigravity Native) manteniendo los estándares de diseño previos.

3. **Guardado Incremental & Snapshots**:
   - Dividir tareas grandes en sub-tareas (max 50 líneas por edit).
   - Realizar un `memory_writer` por cada sección lógica completada para persistir el progreso en `memory.json`.

4. **Sincronización de Memoria (CAL-P)**:
   - Recuperar el último estado desde `system_orchestrator(action="read_memory")`.
   - Informar al USUARIO sobre el punto exacto de recuperación.

## Prevención de Regresiones
- NUNCA sobrescribir archivos completos tras un error.
- Usar siempre `grep_search` para localizar etiquetas de cierre antes de insertar código.

// turbo-all

