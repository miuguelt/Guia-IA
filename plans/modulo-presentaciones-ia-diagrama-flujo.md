# Diagrama de Flujo del Módulo
## Módulo Bonus: IA para Presentaciones de Alto Impacto

---

## Diagrama de Flujo Principal

```mermaid
flowchart TD
    A[Inicio del Módulo] --> B[Onboarding Diagnóstico]
    B --> C{¿Nuevo o Experiente?}
    
    C -->|Nuevo| D[Ruta Recomendada<br>Pilares 1-5 en orden]
    C -->|Experiente| E[Ruta Personalizada<br>Saltar a pilares relevantes]
    
    D --> F[Pilar 1: Fundamentos Estratégicos]
    E --> G[Selección de Pilar Inicial]
    
    F --> H[Pilar 2: Flujo de Trabajo]
    G --> H
    
    H --> I[Pilar 3: Herramientas Específicas]
    I --> J[Pilar 4: Optimización]
    J --> K[Pilar 5: Presentación y Entrega]
    
    K --> L[Proyecto Final Integral]
    L --> M[Evaluación y Certificación]
    M --> N[Fin del Módulo<br>Insignia: Director de Presentaciones]
    
    %% Rutas alternativas
    F --> O[Componentes Interactivos]
    H --> O
    I --> O
    J --> O
    K --> O
    
    O --> P{¿Continuar aprendizaje?}
    P -->|Sí| Q[Explorar componentes adicionales]
    P -->|No| R[Regresar a flujo principal]
    
    Q --> R
    R --> I
```

---

## Flujo Detallado por Pilar

### Pilar 1: Fundamentos Estratégicos

```mermaid
flowchart TD
    A1[Inicio Pilar 1] --> B1[Video Introductorio<br>Transformación IA en Presentaciones]
    B1 --> C1[Lección 1.1: Narrativa con IA]
    C1 --> D1[Ejercicio: Identificar ejemplos]
    D1 --> E1[Lección 1.2: Diseño con IA]
    E1 --> F1[Ejercicio: Comparativa antes/después]
    F1 --> G1[Lección 1.3: Entrega con IA]
    G1 --> H1[Ejercicio: Estadísticas de impacto]
    H1 --> I1[Lección 1.4: Automatización vs Potenciación]
    I1 --> J1[Ejercicio: Clasificar casos]
    J1 --> K1[Lección 1.5: Ética en IA]
    K1 --> L1[Ejercicio: Caso ético]
    L1 --> M1[Lección 1.6: Selección de Herramientas]
    M1 --> N1[Ejercicio: Matriz de selección]
    N1 --> O1[Quiz Final Pilar 1]
    O1 --> P1{¿Aprobado?}
    P1 -->|Sí| Q1[XP +80<br>Insignia: Estratega IA]
    P1 -->|No| R1[Revisar lecciones<br>Reintentar quiz]
    R1 --> O1
    Q1 --> S1[Fin Pilar 1<br>Continuar a Pilar 2]
```

### Pilar 2: Flujo de Trabajo Integrado

```mermaid
flowchart TD
    A2[Inicio Pilar 2] --> B2[Lección 2.1: Las 5 Fases]
    B2 --> C2[Constructor de Flujo Interactivo]
    C2 --> D2[Guardar flujo personalizado]
    D2 --> E2[Lección 2.2: Fase 1 - Ideación]
    E2 --> F2[Ejercicio: Canvas de ideación]
    F2 --> G2[Lección 2.3: Fase 2 - Contenido]
    G2 --> H2[Ejercicio: Template de estructura]
    H2 --> I2[Lección 2.4: Fase 3 - Diseño]
    I2 --> J2[Ejercicio: Brief de diseño]
    J2 --> K2[Lección 2.5: Fase 4 - Refinamiento]
    K2 --> L2[Ejercicio: Checklist de revisión]
    L2 --> M2[Lección 2.6: Fase 5 - Ensayo]
    M2 --> N2[Ejercicio: Agenda de práctica]
    N2 --> O2[Simulación de planificación completa]
    O2 --> P2{¿Completado?}
    P2 -->|Sí| Q2[XP +90<br>Insignia: Arquitecto de Flujos]
    P2 -->|No| R2[Completar ejercicios pendientes]
    R2 --> O2
    Q2 --> S2[Fin Pilar 2<br>Continuar a Pilar 3]
```

### Pilar 3: Maestría en Herramientas

```mermaid
flowchart TD
    A3[Inicio Pilar 3] --> B3[Panorama de Herramientas]
    B3 --> C3[Comparador Interactivo]
    C3 --> D3{Seleccionar categoría para profundizar}
    
    D3 -->|Generadores de Slides| E3[Gamma, Beautiful.AI, DeckRobot]
    D3 -->|Narrativa y Contenido| F3[ChatGPT, Claude, Gemini]
    D3 -->|Diseño Visual| G3[DALL-E, Midjourney, Canva AI]
    D3 -->|Avatares y Voz| H3[Synthesia, HeyGen, ElevenLabs]
    D3 -->|Coaches de Presentación| I3[Yoodli, Poised, Orai]
    
    E3 --> J3[Tutorial práctico + ejercicio]
    F3 --> J3
    G3 --> J3
    H3 --> J3
    I3 --> J3
    
    J3 --> K3{¿Explorar otra categoría?}
    K3 -->|Sí| D3
    K3 -->|No| L3[Quiz de herramientas]
    
    L3 --> M3{¿Aprobado?}
    M3 -->|Sí| N3[XP +100<br>Insignia: Maestro de Herramientas]
    M3 -->|No| O3[Revisar categorías débiles]
    O3 --> D3
    
    N3 --> P3[Fin Pilar 3<br>Continuar a Pilar 4]
```

### Pilar 4: Optimización y Personalización

```mermaid
flowchart TD
    A4[Inicio Pilar 4] --> B4[Lección 4.1: Prompting Avanzado]
    B4 --> C4[Generador de Prompts Especializados]
    C4 --> D4[Ejercicio: Crear 3 prompts]
    D4 --> E4[Lección 4.2: Edición Iterativa]
    E4 --> F4[Ejercicio: Refinar output IA]
    F4 --> G4[Lección 4.3: Integración de Datos]
    G4 --> H4[Ejercicio: Incorporar datos reales]
    H4 --> I4[Lección 4.4: Branding Corporativo]
    I4 --> J4[Ejercicio: Aplicar branding]
    J4 --> K4[Lección 4.5: Adaptación para Audiencia]
    K4 --> L4[Ejercicio: Adaptar para 2 audiencias]
    L4 --> M4[Evaluador de Calidad Interactivo]
    M4 --> N4[Recibir feedback automatizado]
    N4 --> O4{¿Implementar mejoras?}
    O4 -->|Sí| P4[Aplicar recomendaciones]
    O4 -->|No| Q4[Continuar]
    P4 --> Q4
    Q4 --> R4[XP +80<br>Insignia: Optimizador Creativo]
    R4 --> S4[Fin Pilar 4<br>Continuar a Pilar 5]
```

### Pilar 5: Presentación y Entrega

```mermaid
flowchart TD
    A5[Inicio Pilar 5] --> B5[Lección 5.1: Coaches de IA]
    B5 --> C5[Simulador de Presentación]
    C5 --> D5[Práctica grabada con feedback]
    D5 --> E5{¿Satisfecho con práctica?}
    E5 -->|No| F5[Revisar feedback<br>Practicar nuevamente]
    F5 --> C5
    E5 -->|Sí| G5[Lección 5.2: Lenguaje No Verbal]
    G5 --> H5[Ejercicio: Analizar grabación]
    H5 --> I5[Lección 5.3: Materiales Complementarios]
    I5 --> J5[Ejercicio: Crear handout y Q&A]
    J5 --> K5[Lección 5.4: Evaluación Integral]
    K5 --> L5[Autoevaluación con rúbrica]
    L5 --> M5[Reflexión final del pilar]
    M5 --> N5[XP +50<br>Insignia: Orador Asistido por IA]
    N5 --> O5[Fin Pilar 5<br>Iniciar Proyecto Final]
```

---

## Flujo del Proyecto Final Integral

```mermaid
flowchart TD
    A6[Inicio Proyecto Final] --> B6[Selección de Contexto]
    B6 --> C6[Opción A: Presentación Ejecutiva]
    B6 --> D6[Opción B: Propuesta de Proyecto]
    B6 --> E6[Opción C: Presentación Personal]
    B6 --> F6[Opción D: Capacitación Educativa]
    
    C6 --> G6[Fase 1: Planificación]
    D6 --> G6
    E6 --> G6
    F6 --> G6
    
    G6 --> H6[Usar Constructor de Flujo]
    H6 --> I6[Seleccionar herramientas IA]
    I6 --> J6[Definir parámetros clave]
    J6 --> K6[Fase 2: Creación con IA]
    
    K6 --> L6[Generar contenido/narrativa]
    L6 --> M6[Diseñar slides]
    M6 --> N6[Crear elementos visuales]
    N6 --> O6[Integrar en presentación completa]
    
    O6 --> P6[Fase 3: Optimización]
    P6 --> Q6[Usar Evaluador de Calidad]
    Q6 --> R6[Recibir recomendaciones]
    R6 --> S6[Aplicar mejoras prioritarias]
    S6 --> T6[Refinar presentación]
    
    T6 --> U6[Fase 4: Práctica y Evaluación]
    U6 --> V6[Practicar con Simulador]
    V6 --> W6[Recibir feedback]
    W6 --> X6[Preparar materiales complementarios]
    X6 --> Y6[Autoevaluación final]
    
    Y6 --> Z6[Subir presentación final]
    Z6 --> AA6[Completar rúbrica de evaluación]
    AA6 --> AB6[Escribir reflexión final]
    
    AB6 --> AC6{¿Cumple criterios mínimos?}
    AC6 -->|Sí| AD6[XP +100<br>Proyecto Aprobado]
    AC6 -->|No| AE6[Recibir feedback específico]
    AE6 --> AF6[Implementar mejoras]
    AF6 --> Z6
    
    AD6 --> AG6[Evaluación final del módulo]
    AG6 --> AH6{¿Total XP ≥ 400?}
    AH6 -->|Sí| AI6[Certificación: Director de Presentaciones]
    AH6 -->|No| AJ6[Certificación: Practicante]
    
    AI6 --> AK6[Fin del Módulo<br>Con insignia principal]
    AJ6 --> AK6
```

---

## Flujo de Componentes Interactivos

```mermaid
flowchart TD
    A7[Componentes Interactivos] --> B7[Constructor de Flujo de Trabajo]
    A7 --> C7[Comparador de Herramientas]
    A7 --> D7[Generador de Prompts]
    A7 --> E7[Simulador de Presentación]
    A7 --> F7[Evaluador de Calidad]
    A7 --> G7[Diseñador de Slides]
    A7 --> H7[Planificador de Proyecto]
    
    B7 --> I7[Guardar flujo personal]
    C7 --> J7[Filtrar por categoría/costo]
    D7 --> K7[Exportar prompt a herramienta]
    E7 --> L7[Recibir feedback automático]
    F7 --> M7[Generar plan de mejora]
    G7 --> N7[Exportar especificaciones diseño]
    H7 --> O7[Seguir progreso proyecto]
    
    I7 --> P7[Usar en proyecto final]
    J7 --> Q7[Seleccionar herramientas para proyecto]
    K7 --> R7[Usar en fase de creación]
    L7 --> S7[Mejorar habilidades entrega]
    M7 --> T7[Aplicar en fase de optimización]
    N7 --> U7[Consistencia en diseño]
    O7 --> V7[Completar proyecto paso a paso]
    
    P7 --> W7[Integración con proyecto]
    Q7 --> W7
    R7 --> W7
    S7 --> W7
    T7 --> W7
    U7 --> W7
    V7 --> W7
    
    W7 --> X7[Proyecto Final Completado]
```

---

## Flujo de Gamificación y Progreso

```mermaid
flowchart TD
    A8[Sistema de Gamificación] --> B8[XP por actividades]
    A8 --> C8[Insignias por pilares]
    A8 --> D8[Logros especiales]
    A8 --> E8[Barra de progreso]
    A8 --> F8[Leaderboard opcional]
    
    B8 --> G8[Actividad completada]
    G8 --> H8[+XP asignado]
    H8 --> I8[Actualizar total XP]
    I8 --> J8{¿Nuevo umbral alcanzado?}
    J8 -->|Sí| K8[Desbloquear contenido/insignia]
    J8 -->|No| L8[Continuar]
    
    C8 --> M8[Pilar completado]
    M8 --> N8[Verificar criterios insignia]
    N8 --> O8{¿Cumple criterios?}
    O8 -->|Sí| P8[Otorgar insignia]
    O8 -->|No| Q8[Mostrar progreso hacia insignia]
    
    D8 --> R8[Acción especial realizada]
    R8 --> S8[Verificar logro]
    S8 --> T8{¿Cumple condiciones?}
    T8 -->|Sí| U8[Otorgar logro + XP extra]
    T8 -->|No| V8[Registrar progreso parcial]
    
    E8 --> W8[Calcular % completitud]
    W8 --> X8[Actualizar barra visual]
    X8 --> Y8{¿100% completado?}
    Y8 -->|Sí| Z8[Mostrar celebración]
    Y8 -->|No| AA8[Mostrar próximo hito]
    
    P8 --> AB8[Mostrar en perfil]
    U8 --> AB8
    Z8 --> AB8
    
    AB8 --> AC8[Preparar certificación final]
```

---

## Decision Points y Rutas Alternativas

### Punto de Decisión 1: Experiencia Previa
```
Usuario llega al módulo
│
├──¿Experiencia previa con IA para presentaciones?
│  │
│  ├── Sí → Ruta Acelerada
│  │     ├── Quiz de diagnóstico
│  │     ├── Saltar a pilares con menor puntuación
│  │     └── Enfocarse en componentes avanzados
│  │
│  └── No → Ruta Completa
│        ├── Seguir pilares 1-5 en orden
│        ├── Énfasis en fundamentos
│        └── Tutoriales paso a paso
```

### Punto de Decisión 2: Objetivos de Aprendizaje
```
Usuario define objetivos
│
├──¿Qué quiere lograr?
│  │
│  ├── Crear presentaciones más rápido → Enfasis en Pilar 2-3
│  │
│  ├── Mejorar calidad diseño → Enfasis en Pilar 3-4
│  │
│  ├── Mejorar habilidades de entrega → Enfasis en Pilar 5
│  │
│  └── Entender marco estratégico → Enfasis en Pilar 1
```

### Punto de Decisión 3: Herramientas Disponibles
```
Usuario selecciona herramientas
│
├──¿Qué herramientas tiene acceso?
│  │
│  ├── Solo gratuitas → Filtro en comparador
│  │     ├── Gamma (freemium)
│  │     ├── ChatGPT (gratuito)
│  │     ├── Canva AI (freemium)
│  │