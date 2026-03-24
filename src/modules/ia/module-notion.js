window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-notion'] = (function() {
  /* ═══════════════════════════════════════════
     MÓDULO BONUS: Notion AI (Sovereign Edition)
     Versión 31.4 — Ultra-Simulador Premium
     ═══════════════════════════════════════════ */

  const notionHTML = `

<div class="m-notion-container animate-in">
  <div class="module-header premium-header animate-in">
    <div class="badge-titan" style="margin-bottom: 20px;">BONUS: PRODUCTIVIDAD</div>
    <h2 class="module-title text-gradient-primary">🐘 <a href="https://notion.so" target="_blank" style="color:inherit; text-decoration:none;">Notion AI:</a> El Cerebro Digital</h2>
    <p class="m-pa-note">No uses Notion para guardar notas. Úsalo para que escriban y piensen por ti.</p>
  </div>

  <div class="m-notion-hero">
    <h3 style="margin:0 0 8px; color:#fff;">La idea central de Notion AI</h3>
    <p class="m-notion-note" style="margin:0;"><b><a href="https://www.notion.so/product/ai" target="_blank" style="color:var(--primary); text-decoration:underline;">Notion AI</a></b> no es solo un asistente de escritura. Su verdadero valor aparece cuando combinas <strong>páginas, bases de datos, contexto del workspace y bloques reutilizables</strong> para convertir información dispersa en operación, criterio y memoria institucional.</p>
    <div class="m-notion-chip-row">
      <span class="m-notion-chip">Escritura</span>
      <span class="m-notion-chip">Resúmenes</span>
      <span class="m-notion-chip">Ask Notion</span>
      <span class="m-notion-chip">Bases de datos</span>
      <span class="m-notion-chip">SOPs</span>
      <span class="m-notion-chip">Memoria del equipo</span>
    </div>
  </div>

  <div class="ag-tabs game-tabs" style="margin-bottom:28px;">
    <button class="tab-btn active" data-tab="m-no-stepbystep">🛤️ Paso a Paso</button>
    <button class="tab-btn" data-tab="m-no-editor">🪄 Editor Mágico</button>
    <button class="tab-btn" data-tab="m-no-concept">📚 Conceptos</button>
    <button class="tab-btn" data-tab="m-no-decider">🧭 Cuándo Usarlo</button>
    <button class="tab-btn" data-tab="m-no-db">🗃️ Autofill DB</button>
    <button class="tab-btn" data-tab="m-no-qa">🔎 Ask Notion</button>
    <button class="tab-btn" data-tab="m-no-cases">🧭 Casos Prácticos</button>
    <button class="tab-btn" data-tab="m-no-guided">🥷 Ejercicios Guiados</button>
    <button class="tab-btn" data-tab="m-no-prompts">🧠 Prompts</button>
    <button class="tab-btn" data-tab="m-no-antipatterns">🚫 Errores</button>
    <button class="tab-btn" data-tab="m-no-templates">💎 Plantillas Pro</button>
    <button class="tab-btn" data-tab="m-no-advanced">⚙️ Tips Avanzados</button>
    <button class="tab-btn" data-tab="m-no-mission">🏆 Reto Final</button>
  </div>

  <div class="m-notion-tabs-content">

  <!-- TAB 0: PASO A PASO -->
  <div id="m-no-stepbystep" class="ag-content active">
    <div class="section-card animate-in">
      <h3>🛤️ Ruta de Maestría: Notion AI</h3>
      <p class="m-pa-note">Sigue estos pasos para convertir Notion en tu centro de operaciones inteligente.</p>
      <div class="m-tm-grid-3" style="margin-top:20px;">
        <div class="m-tm-step"><div class="m-tm-step-badge">1</div><h4 style="color:#fff;">Prepara el Espacio</h4><p class="m-notion-note">Crea una página nueva y organiza tus bloques básicos. Sin orden, la IA es menos efectiva.</p></div>
        <div class="m-tm-step"><div class="m-tm-step-badge">2</div><h4 style="color:#fff;">Activa /AI</h4><p class="m-notion-note">Usa la barra espaciadora o <code>/ai</code> para desplegar el menú de comandos en cualquier bloque vacío.</p></div>
        <div class="m-tm-step"><div class="m-tm-step-badge">3</div><h4 style="color:#fff;">Estructura Cruda</h4><p class="m-notion-note">Pega notas sin formato y pide a la IA que las convierta en una minuta o tabla de tareas.</p></div>
      </div>
      <div class="m-tm-grid-3" style="margin-top:16px;">
        <div class="m-tm-step"><div class="m-tm-step-badge">4</div><h4 style="color:#fff;">Bases de Datos</h4><p class="m-notion-note">Configura propiedades de "AI Autofill" para resumir o clasificar feedback automáticamente.</p></div>
        <div class="m-tm-step"><div class="m-tm-step-badge">5</div><h4 style="color:#fff;">Ask Notion</h4><p class="m-notion-note">Usa <code>Ctrl + J</code> para preguntar sobre cualquier duda cruzando datos de todo tu espacio.</p></div>
        <div class="m-tm-step"><div class="m-tm-step-badge">6</div><h4 style="color:#fff;">Audita y Refina</h4><p class="m-notion-note">No aceptes la primera respuesta. Pide tonos diferentes o más detalles para perfeccionar la salida.</p></div>
      </div>
    </div>
  </div>

  <!-- TAB 1: EDITOR MAGICO -->
  <div id="m-no-editor" class="ag-content">
    <div class="m-notion-card animate-in">
      <h3>🎭 Elige tu Escenario:</h3>
      <div class="m-notion-scenarios">
        <div class="scenario-chip active" onclick="mNotionChangeScenario('reunion', this)">🗓️ Minuta Reunión</div>
        <div class="scenario-chip" onclick="mNotionChangeScenario('pitch', this)">🚀 Pitch Startup</div>
        <div class="scenario-chip" onclick="mNotionChangeScenario('draft', this)">📃 Borrador Documento</div>
      </div>

      <div style="margin-bottom:15px; font-size:0.9rem;">
        <span id="notion-title" style="font-weight:800; color:#374151;">Minuta: Lanzamiento Q2</span>
        <div id="notion-context" class="glass-card" style="padding:15px; border-radius:12px; margin-top:10px; font-size:0.85rem; color:#cbd5e1; border:1px dashed rgba(255,255,255,0.1); line-height:1.6;">
          <strong style="color:var(--primary-light);">NOTAS CRUDAS:</strong><br>Presupuesto: 5k usd. Fecha: 15 de Abril. Responsables: Luis (Web), Ana (Catering), Juan (Prensa). Faltan permisos de alcaldía. Necesitamos influencers.
        </div>
      </div>

      <div class="m-notion-editor">
        <div id="notion-block" class="m-notion-block" contenteditable="true" data-placeholder="Presiona Espacio para estructurar la minuta..."></div>
        
        <!-- Menu Flotante AI -->
        <div id="notion-menu" class="m-notion-menu">
          <div style="font-size:0.65rem; color:#9ca3af; padding:4px 12px; font-weight:700;">ACCIONES IA</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('resume')"><span class="icon">✨</span> Resumir y Estructurar</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('checklist')"><span class="icon">✅</span> Crear Checklist</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('brainstorm')"><span class="icon">💡</span> Lluvia de Ideas</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('tone')"><span class="icon">👔</span> Cambiar a Tono Profesional</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('translate')"><span class="icon">🌐</span> Traducir a Inglés</div>
        </div>

        <div class="m-notion-loading" id="notion-loading" style="position:absolute; bottom:15px; right:15px;">
          <div class="m-notion-spinner"></div> <span class="glow-ai">La IA está pensando...</span>
        </div>
      </div>
      
      <p style="font-size:0.75rem; color:#9ca3af; margin-top:12px; text-align:center;">💡 <i>Truco: En Notion, escribe <b>/ai</b> para activar este panel.</i></p>
    </div>
  </div>

  <!-- TAB 2: CONCEPTO -->
  <div id="m-no-concept" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🧠</span> ¿Por qué Notion AI?</h3>
      <p>Notion no es un procesador de texto, es una **Base de Conocimientos Relacional**. La IA de Notion tiene "memoria" de todos tus documentos.</p>
      
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:20px;">
        <div style="background:rgba(169,114,255,0.05); padding:15px; border-radius:12px; border:1px solid rgba(169,114,255,0.2);">
          <h4 style="color:#a972ff; margin-top:0;">📝 Escritura Generativa</h4>
          <p style="font-size:0.8rem;">Escribe borradores, cambia el tono, corrige gramática o alarga párrafos con un clic.</p>
        </div>
        <div style="background:rgba(16,185,129,0.05); padding:15px; border-radius:12px; border:1px solid rgba(16,185,129,0.2);">
          <h4 style="color:#10b981; margin-top:0;">📊 Inteligencia de Datos</h4>
          <p style="font-size:0.8rem;">Extrae automáticamente resúmenes o categorías de tablas gigantes de feedback.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="m-no-decider" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🧭</span> Cuándo usar Notion AI y cuándo no</h3>
      <div class="m-notion-grid-2" style="margin-top:18px;">
        <div class="m-notion-panel">
          <h4>Úsalo cuando...</h4>
          <p class="m-notion-note">Necesitas escribir mejor, estructurar conocimiento, organizar procesos, resumir páginas o consultar información que ya vive dentro de tu espacio.</p>
        </div>
        <div class="m-notion-panel">
          <h4>No es ideal cuando...</h4>
          <p class="m-notion-note">Buscas investigación abierta en internet o respuestas que dependan de fuentes externas no cargadas ni documentadas en el workspace.</p>
        </div>
        <div class="m-notion-panel">
          <h4>Se vuelve muy potente si...</h4>
          <p class="m-notion-note">Conectas notas, tareas, decisiones, feedback y documentación operativa en una sola arquitectura de trabajo.</p>
        </div>
        <div class="m-notion-panel">
          <h4>Pierde valor si...</h4>
          <p class="m-notion-note">El espacio está desordenado, duplicado o lleno de páginas sin criterios claros de uso.</p>
        </div>
      </div>
      <div class="m-notion-grid-3" style="margin-top:16px;">
        <div class="m-notion-step"><div class="m-notion-step-badge">1</div><h4 style="margin:0 0 6px; color:#fff;">Captura</h4><p class="m-notion-note" style="margin:0;">Notas, minutas, feedback, decisiones, SOPs.</p></div>
        <div class="m-notion-step"><div class="m-notion-step-badge">2</div><h4 style="margin:0 0 6px; color:#fff;">Organiza</h4><p class="m-notion-note" style="margin:0;">Bases de datos, propiedades, plantillas y relaciones.</p></div>
        <div class="m-notion-step"><div class="m-notion-step-badge">3</div><h4 style="margin:0 0 6px; color:#fff;">Activa IA</h4><p class="m-notion-note" style="margin:0;">Resume, consulta, clasifica y convierte información en acciones.</p></div>
      </div>
    </div>
  </div>

  <!-- TAB 3: AUTOFILL DB -->
  <div id="m-no-db" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🗃️</span> Inteligencia en Bases de Datos</h3>
      <p>Ahorra horas de trabajo manual. Deja que la IA categorice y extraiga información de cientos de registros al instante.</p>
      
      <div style="background:#0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius:12px; overflow:hidden; margin-top:20px;">
        <table class="m-notion-table" style="border-collapse: separate; border-spacing: 0;">
          <tr>
            <th style="border-top-left-radius: 8px;">Entrada (Feedback)</th>
            <th style="width:140px;">Categoría</th>
            <th class="m-notion-ai-col glow-ai" style="width:180px; border-top-right-radius: 8px;">✨ Sentimiento AI</th>
          </tr>
          <tr>
            <td style="font-size:0.85rem;">"El login falla constantemente en Android."</td>
            <td><span class="m-notion-tag" style="background:rgba(239,68,68,0.1); color:#f87171; border: 1px solid rgba(239,68,68,0.2);">Bug</span></td>
            <td class="m-notion-ai-col" id="db-s-1"></td>
          </tr>
          <tr>
            <td style="font-size:0.85rem;">"Me encantó la nueva interfaz es muy fluida."</td>
            <td><span class="m-notion-tag" style="background:rgba(16,185,129,0.1); color:#10b981; border: 1px solid rgba(16,185,129,0.2);">Felicitación</span></td>
            <td class="m-notion-ai-col" id="db-s-2"></td>
          </tr>
          <tr>
            <td style="font-size:0.85rem;">"¿Cuándo sacarán la versión para iPad?"</td>
            <td><span class="m-notion-tag" style="background:rgba(59,130,246,0.1); color:#60a5fa; border: 1px solid rgba(59,130,246,0.2);">Sugerencia</span></td>
            <td class="m-notion-ai-col" id="db-s-3"></td>
          </tr>
        </table>
      </div>
      
      <div style="text-align:right; margin-top:20px;">
        <button class="gl-btn gl-btn-primary" onclick="mNotionAutofill(this)" id="btn-autofill">🪄 Procesar con Notion AI</button>
      </div>
    </div>
  </div>

  <!-- TAB 4: Q&A ESPACIO -->
  <div id="m-no-qa" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🔎</span> Ask Notion AI</h3>
      <p>Pregunta sobre cualquier dato en tu sistema. La IA busca en todos tus proyectos y reuniones para darte la respuesta exacta.</p>
      
      <div class="m-notion-search-bar" style="margin-top:25px; padding:15px; background:rgba(255,255,255,0.02); border-color:rgba(255,255,255,0.1);">
        <span style="font-size:1.4rem;">✨</span>
        <input type="text" id="notion-qa-input" class="m-notion-search-input" placeholder="Ej: '¿Quién es el encargado del catering?'" onkeydown="if(event.key==='Enter') mNotionSearch()">
        <button class="gl-btn" style="background:#4752c4; padding:8px 20px;" onclick="mNotionSearch()">Consultar</button>
      </div>
      
      <div class="m-notion-loading" id="notion-load-qa" style="margin-top:20px;">
        <div class="m-notion-spinner"></div> Buscando en el cerebro digital...
      </div>
      
      <div id="notion-qa-res" class="animate-in" style="background:rgba(0,0,0,0.2); border:1px solid rgba(169,114,255,0.3); padding:20px; border-radius:12px; display:none; color:#e2e8f0; line-height:1.7; margin-top:20px;"></div>
    </div>
  </div>

  <!-- TAB 5: CASOS PRACTICOS -->
  <div id="m-no-cases" class="ag-content">
    <div class="section-card animate-in" style="background: var(--notion-glass); border: 1px solid var(--notion-border); backdrop-filter: blur(20px); border-radius: 16px; padding: 24px;">
      <h3 style="font-family: var(--font-mono); letter-spacing: -0.5px;"><span class="icon">🧭</span> Casos de Uso Reales (Sovereign Edition)</h3>
      <p style="color: #94a3b8; font-size: 0.9rem;">No limites la IA a corrección ortográfica. Úsala como un socio de pensamiento (Sparring Partner).</p>
      
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-top:20px;">
        
        <!-- CASO 1: REDACCIÓN -->
        <div class="glass-exercise-card" style="background: rgba(169,114,255,0.07); border: 1px solid rgba(169,114,255,0.2); border-radius: 14px; padding: 20px; transition: transform 0.3s ease;">
          <div style="font-size: 0.65rem; font-weight: 800; color: #a972ff; text-transform: uppercase; margin-bottom: 8px; font-family: var(--font-mono);">Nivel: Básico · 5 min</div>
          <h4 style="margin: 0 0 10px; color: #fff; font-family: var(--font-premium);">🧠 El "Ghostwriter" de Minutas</h4>
          <p style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 12px;">Convierte un caos de notas sueltas en una estructura formal compartible en segundos.</p>
          <div style="font-size: 0.75rem; color: #94a3b8; line-height: 1.6; margin-bottom: 15px; border-left: 2px solid #a972ff; padding-left: 10px;">
            1. Pega notas sin formato.<br>
            2. Selecciona texto + <code>/ai</code>.<br>
            3. Prompt: "Extrae acta, accionables y fechas".<br>
            4. <b>Resultado:</b> Documento ejecutivo impecable.
          </div>
          <button class="gl-btn gl-btn-outline" style="width:100%; border-color: #a972ff; color: #a972ff; font-size: 0.75rem;" onclick="mNotionCopyText(this, 'Actúa como un experto en redacción corporativa. Toma estas notas crudas y conviértelas en una minuta estructurada con: Título, Objetivo, Asistentes, Decisiones clave y una Tabla de Tareas con (Responsable, Fecha límite, Estado). Tono ejecutivo y directo.')">📋 Copiar Prompt Maestro</button>
        </div>

        <!-- CASO 2: BASES DE DATOS -->
        <div class="glass-exercise-card" style="background: rgba(16,185,129,0.07); border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 20px;">
          <div style="font-size: 0.65rem; font-weight: 800; color: #10b981; text-transform: uppercase; margin-bottom: 8px; font-family: var(--font-mono);">Nivel: Intermedio · 10 min</div>
          <h4 style="margin: 0 0 10px; color: #fff; font-family: var(--font-premium);">📊 Analista de Feedback 24/7</h4>
          <p style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 12px;">Clasifica cientos de comentarios de clientes automáticamente mediante propiedades de IA.</p>
          <div style="font-size: 0.75rem; color: #94a3b8; line-height: 1.6; margin-bottom: 15px; border-left: 2px solid #10b981; padding-left: 10px;">
            1. Crea base de datos de tickets.<br>
            2. Agrega propiedad "AI Autofill".<br>
            3. Instrucción: "Categoriza por urgencia".<br>
            4. <b>Resultado:</b> Priorización visual instantánea.
          </div>
          <button class="gl-btn gl-btn-outline" style="width:100%; border-color: #10b981; color: #10b981; font-size: 0.75rem;" onclick="mNotionCopyText(this, 'Analiza el contenido de esta entrada y clasifícala en una de estas categorías: [Bug, Sugerencia, Facturación, Felicitación]. Además, asigna un nivel de prioridad del 1 al 5 basado en la frustración del usuario detectada.')">📋 Copiar Configuración AI</button>
        </div>

        <!-- CASO 3: Q&A -->
        <div class="glass-exercise-card" style="background: rgba(59,130,246,0.07); border: 1px solid rgba(59,130,246,0.2); border-radius: 14px; padding: 20px;">
          <div style="font-size: 0.65rem; font-weight: 800; color: #3b82f6; text-transform: uppercase; margin-bottom: 8px; font-family: var(--font-mono);">Nivel: Intermedio · 8 min</div>
          <h4 style="margin: 0 0 10px; color: #fff; font-family: var(--font-premium);">🔍 Oráculo de Conocimiento</h4>
          <p style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 12px;">Busca respuestas complejas cruzando datos de múltiples páginas en milisegundos.</p>
          <div style="font-size: 0.75rem; color: #94a3b8; line-height: 1.6; margin-bottom: 15px; border-left: 2px solid #3b82f6; padding-left: 10px;">
            1. Abre Ask Notion (Ctrl + J).<br>
            2. Pregunta: "¿Quién aprobó el presupuesto?".<br>
            3. La IA cita las fuentes exactas.<br>
            4. <b>Resultado:</b> No más búsqueda manual de archivos.
          </div>
          <button class="gl-btn gl-btn-outline" style="width:100%; border-color: #3b82f6; color: #3b82f6; font-size: 0.75rem;" onclick="mNotionCopyText(this, 'Responder basándote ÚNICAMENTE en la documentación interna de este espacio. Si la información no está disponible, indícame qué documento falta cargar.')">📋 Copiar Prompt de Consulta</button>
        </div>

        <!-- CASO 4: AVANZADO -->
        <div class="glass-exercise-card" style="background: rgba(245,158,11,0.07); border: 1px solid rgba(245,158,11,0.2); border-radius: 14px; padding: 20px;">
          <div style="font-size: 0.65rem; font-weight: 800; color: #f59e0b; text-transform: uppercase; margin-bottom: 8px; font-family: var(--font-mono);">Nivel: Avanzado · 15 min</div>
          <h4 style="margin: 0 0 10px; color: #fff; font-family: var(--font-premium);">🚀 Resumen de Proyecto Dinámico</h4>
          <p style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 12px;">Crea una propiedad que resuma el estado de un proyecto cada vez que cambian las notas.</p>
          <div style="font-size: 0.75rem; color: #94a3b8; line-height: 1.6; margin-bottom: 15px; border-left: 2px solid #f59e0b; padding-left: 10px;">
            1. Usa bloques de sincronización.<br>
            2. Configura IA para "Resumir página".<br>
            3. Vincula con tablero Kanban.<br>
            4. <b>Resultado:</b> Dashboard que se actualiza solo.
          </div>
          <button class="gl-btn gl-btn-outline" style="width:100%; border-color: #f59e0b; color: #f59e0b; font-size: 0.75rem;" onclick="mNotionCopyText(this, 'Genera un resumen ejecutivo de máximo 3 bullets que resuma los avances, riesgos detectados y el porcentaje de completitud estimado basándote en las notas de esta página.')">📋 Copiar Prompt Dashboard</button>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: EJERCICIOS GUIADOS -->
  <div id="m-no-guided" class="ag-content">
    <div class="section-card animate-in" style="background: var(--notion-glass); border: 1px solid var(--notion-border); border-radius: 16px; padding: 24px;">
      <h3 style="font-family: var(--font-mono); color: #a972ff;"><span class="icon">🥷</span> Entrenamiento de Élite: Ejercicios Paso a Paso</h3>
      <p style="color: #94a3b8; font-size: 0.9rem;">Domina Notion IA construyendo sistemas reales desde cero. Haz clic en "Simular" para validar tu progreso.</p>
      
      <div class="m-tm-grid-2" style="margin-top:20px; gap: 20px;">
        <div class="glass-exercise-card" style="padding: 20px; border: 1px solid rgba(169,114,255,0.2); border-radius: 12px; background: rgba(169,114,255,0.05);">
          <h4 style="color: #fff;">🛠️ Ejercicio 1: El CRM Inteligente</h4>
          <p style="font-size: 0.85rem; color: #cbd5e1;">Configura una base de datos que lea correos y asigne sentimientos/prioridades automáticamente.</p>
          <div style="margin: 15px 0; border-top: 1px solid rgba(169,114,255,0.1); padding-top: 10px;">
            <p style="font-size: 0.75rem; color: #a972ff; font-weight: 800; text-transform: uppercase;">Pasos Críticos:</p>
            <ol style="font-size: 0.8rem; color: #94a3b8; padding-left: 20px; line-height: 1.6;">
              <li>Base de Datos "Clientes" + Propiedad "Cuerpo del Correo".</li>
              <li>Añade propiedad <b>AI Autofill</b> -> Opción "Personalizada".</li>
              <li>Prompt: <i>"Extrae la intención (Positivo/Negativo) y el sentimiento."</i></li>
            </ol>
          </div>
          <button class="gl-btn-neon" style="width:100%; border-color:#a972ff; color:#d8b4fe; font-size:0.8rem;" onclick="mNoSimulate(this, 'crm', 40)">▷ Simular Procesamiento CRM (+40 XP)</button>
        </div>

        <div class="glass-exercise-card" style="padding: 20px; border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; background: rgba(16,185,129,0.05);">
          <h4 style="color: #fff;">📚 Ejercicio 2: Wikipedia de Equipo</h4>
          <p style="font-size: 0.85rem; color: #cbd5e1;">Crea un sistema de consulta donde "Ask Notion" sea el buscador de políticas interno.</p>
          <div style="margin: 15px 0; border-top: 1px solid rgba(16,185,129,0.1); padding-top: 10px;">
            <p style="font-size: 0.75rem; color: #10b981; font-weight: 800; text-transform: uppercase;">Pasos Críticos:</p>
            <ol style="font-size: 0.8rem; color: #94a3b8; padding-left: 20px; line-height: 1.6;">
              <li>Carga políticas en "/Wiki-Empresa".</li>
              <li>Usa <code>/ai</code> -> "Crear tabla de contenidos".</li>
              <li>Prueba <b>Ask Notion (Ctrl+J)</b> con preguntas sobre vacaciones.</li>
            </ol>
          </div>
          <button class="gl-btn-neon" style="width:100%; border-color:#10b981; color:#6ee7b7; font-size:0.8rem;" onclick="mNoSimulate(this, 'wiki', 45)">▷ Simular Consulta Wiki (+45 XP)</button>
        </div>
      </div>

      <div class="m-tm-grid-2" style="margin-top:20px; gap: 20px;">
        <div class="glass-exercise-card" style="padding: 20px; border: 1px solid rgba(245,158,11,0.2); border-radius: 12px; background: rgba(245,158,11,0.05);">
          <h4 style="color: #fff;">🧠 Ejercicio 3: Second Brain Architect</h4>
          <p style="font-size: 0.85rem; color: #cbd5e1;">Implementa el sistema P.A.R.A usando propiedades de IA para clasificación de notas.</p>
          <div style="margin: 15px 0; border-top: 1px solid rgba(245,158,11,0.1); padding-top: 10px;">
            <p style="font-size: 0.75rem; color: #f59e0b; font-weight: 800; text-transform: uppercase;">Pasos Críticos:</p>
            <ol style="font-size: 0.8rem; color: #94a3b8; padding-left: 20px; line-height: 1.6;">
              <li>Crea propiedad "Clasificación P.A.R.A" (AI).</li>
              <li>Configura prompt: "Determina si es Proyecto, Área, Recurso o Archivo".</li>
              <li>Vincula notas de voz transcritas a la base principal.</li>
            </ol>
          </div>
          <button class="gl-btn-neon" style="width:100%; border-color:#f59e0b; color:#fde68a; font-size:0.8rem;" onclick="mNoSimulate(this, 'para', 50)">▷ Clasificar con P.A.R.A (+50 XP)</button>
        </div>

        <div class="glass-exercise-card" style="padding: 20px; border: 1px solid rgba(59,130,246,0.2); border-radius: 12px; background: rgba(59,130,246,0.05);">
          <h4 style="color: #fff;">📊 Ejercicio 4: Reportes de Estado Automáticos</h4>
          <p style="font-size: 0.85rem; color: #cbd5e1;">Genera resúmenes ejecutivos que se actualizan solos al cambiar el contenido de la página.</p>
          <div style="margin: 15px 0; border-top: 1px solid rgba(59,130,246,0.1); padding-top: 10px;">
            <p style="font-size: 0.75rem; color: #3b82f6; font-weight: 800; text-transform: uppercase;">Pasos Críticos:</p>
            <ol style="font-size: 0.8rem; color: #94a3b8; padding-left: 20px; line-height: 1.6;">
              <li>Inserta bloque "/AI Resume".</li>
              <li>Configura "Longitud: Breve, Formato: Lista".</li>
              <li>Sincroniza este bloque en tu Dashboard principal.</li>
            </ol>
          </div>
          <button class="gl-btn-neon" style="width:100%; border-color:#3b82f6; color:#93c5fd; font-size:0.8rem;" onclick="mNoSimulate(this, 'summary', 40)">▷ Generar Reporte Dinámico (+40 XP)</button>
        </div>
      </div>
    </div>
  </div>

  <div id="m-no-prompts" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="color:#a972ff; margin-top:0;">🧠 Prompts Maestros para Notion AI</h3>
      <div class="m-notion-grid-2" style="margin-top:18px;">
        <div class="m-notion-panel">
          <h4>Minuta ejecutiva</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.18); border:1px solid rgba(169,114,255,0.18); border-radius:10px; padding:12px;">Convierte estas notas crudas en una minuta ejecutiva con: contexto, decisiones, responsables, fechas y riesgos. Elimina ruido y deja el texto listo para compartir.</div>
          <button class="gl-btn gl-btn-outline" style="margin-top:10px; border-color:#a972ff; color:#a972ff; font-size:0.75rem;" onclick="mNotionCopyText(this, 'Convierte estas notas crudas en una minuta ejecutiva con: contexto, decisiones, responsables, fechas y riesgos. Elimina ruido y deja el texto listo para compartir.')">📋 Copiar</button>
        </div>
        <div class="m-notion-panel">
          <h4>Base de feedback</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.18); border:1px solid rgba(169,114,255,0.18); border-radius:10px; padding:12px;">Analiza esta entrada y clasifícala por categoría, urgencia, tono del usuario y acción sugerida para el equipo.</div>
          <button class="gl-btn gl-btn-outline" style="margin-top:10px; border-color:#a972ff; color:#a972ff; font-size:0.75rem;" onclick="mNotionCopyText(this, 'Analiza esta entrada y clasifícala por categoría, urgencia, tono del usuario y acción sugerida para el equipo.')">📋 Copiar</button>
        </div>
        <div class="m-notion-panel">
          <h4>Ask Notion con criterio</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.18); border:1px solid rgba(169,114,255,0.18); border-radius:10px; padding:12px;">Responde basándote solo en la información del workspace. Si falta contexto, dime qué página, base o documento debo completar.</div>
          <button class="gl-btn gl-btn-outline" style="margin-top:10px; border-color:#a972ff; color:#a972ff; font-size:0.75rem;" onclick="mNotionCopyText(this, 'Responde basándote solo en la información del workspace. Si falta contexto, dime qué página, base o documento debo completar.')">📋 Copiar</button>
        </div>
        <div class="m-notion-panel">
          <h4>Resumen de proyecto</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.18); border:1px solid rgba(169,114,255,0.18); border-radius:10px; padding:12px;">Resume esta página en 5 bullets: avance, bloqueo, decisión pendiente, responsable clave y siguiente paso recomendado.</div>
          <button class="gl-btn gl-btn-outline" style="margin-top:10px; border-color:#a972ff; color:#a972ff; font-size:0.75rem;" onclick="mNotionCopyText(this, 'Resume esta página en 5 bullets: avance, bloqueo, decisión pendiente, responsable clave y siguiente paso recomendado.')">📋 Copiar</button>
        </div>
      </div>
    </div>
  </div>

  <div id="m-no-antipatterns" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="color:#a972ff; margin-top:0;">🚫 Errores comunes con Notion AI</h3>
      <div class="m-notion-grid-3" style="margin-top:18px;">
        <div class="m-notion-panel"><h4>Usarlo solo para escribir bonito</h4><p class="m-notion-note">Eso es útil, pero pequeño comparado con su valor en sistemas de conocimiento y operaciones.</p></div>
        <div class="m-notion-panel"><h4>Workspace desordenado</h4><p class="m-notion-note">Si las páginas están mal nombradas o duplicadas, la IA también se vuelve menos útil.</p></div>
        <div class="m-notion-panel"><h4>No estructurar bases de datos</h4><p class="m-notion-note">Sin propiedades claras, la IA no puede clasificar ni resumir con consistencia.</p></div>
        <div class="m-notion-panel"><h4>Pedir demasiado genérico</h4><p class="m-notion-note">“Mejora esto” produce menos valor que pedir salida, tono y criterio concretos.</p></div>
        <div class="m-notion-panel"><h4>No convertir conocimiento en plantillas</h4><p class="m-notion-note">Si cada página empieza desde cero, pierdes el efecto compuesto del sistema.</p></div>
        <div class="m-notion-panel"><h4>Confundir memoria con verdad</h4><p class="m-notion-note">Si el espacio contiene errores, la IA los reutiliza. El orden editorial sigue importando.</p></div>
      </div>
    </div>
  </div>

  <!-- TAB 6: PLANTILLAS MAESTRAS -->
  <div id="m-no-templates" class="ag-content">
    <div class="section-card animate-in" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.05); backdrop-filter: blur(24px); border-radius: 24px; padding: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 24px;">
        <div>
          <div style="display: inline-block; padding: 4px 10px; background: rgba(169,114,255,0.1); border: 1px solid rgba(169,114,255,0.2); border-radius: 8px; color: #d8b4fe; font-size: 0.65rem; font-weight: 800; letter-spacing: 1px; margin-bottom: 10px; font-family: var(--font-mono);">COLECCIÓN PREMIUM</div>
          <h3 style="font-family: var(--font-premium); font-size: 1.8rem; margin:0; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.1);"><span class="icon">💎</span> Plantillas Pro Sovereign</h3>
          <p style="color: #94a3b8; font-size: 0.95rem; margin-top:8px;">Estructuras operativas de alto rendimiento vitaminadas con IA (Autofill).</p>
        </div>
      </div>
      
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin-top:10px;">
        
        <!-- TEMPLATE 1: SECOND BRAIN -->
        <div class="glass-exercise-card m-template-card" style="background: linear-gradient(145deg, rgba(169,114,255,0.05), rgba(0,0,0,0.2)); border: 1px solid rgba(169,114,255,0.15); border-radius: 16px; padding: 24px; position: relative; overflow: hidden; transition: all 0.4s ease;">
          <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(169,114,255,0.2) 0%, transparent 70%); border-radius: 50%;"></div>
          
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(169,114,255,0.1); border: 1px solid rgba(169,114,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 0 15px rgba(169,114,255,0.2);">🧠</div>
            <div>
              <h4 style="margin: 0 0 4px; color: #fff; font-family: var(--font-premium); font-size: 1.1rem;">Second Brain AI (PARA)</h4>
              <div style="font-size: 0.7rem; color: #a972ff; font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Gestión de Conocimiento</div>
            </div>
          </div>
          
          <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 16px; line-height: 1.5;">Captura todo de forma caótica y deja que la IA clasifique cada nota por proyectos y áreas automáticamente.</p>
          
          <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <div style="font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="color: #a972ff;">⚙️</span> <b>Setup:</b> Propiedad "AI Autofill" (Categoría)
            </div>
            <div style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.6; border-left: 2px solid #a972ff; padding-left: 10px;">
              "Lee la nota y asígnala a Proyectos, Áreas, Recursos o Archivo (P.A.R.A) según su contenido prioritario."
            </div>
          </div>
          
          <div style="display: flex; gap: 10px;">
            <button class="gl-btn gl-btn-outline" style="flex: 1; border-color: rgba(169,114,255,0.3); color: #d8b4fe; font-size: 0.75rem; background: rgba(169,114,255,0.05);" onclick="mNotionCopyText(this, 'Basado en el sistema P.A.R.A de Tiago Forte, analiza esta entrada y determina si es un Proyecto (acción inmediata), un Área (responsabilidad a largo plazo), un Recurso (interés general) o Archivo (completado). Justifica brevemente.')">📋 Copiar Prompt</button>
            <button class="gl-btn" style="width: 40px; padding: 0; background: rgba(169,114,255,0.1); border: 1px solid rgba(169,114,255,0.2); color: #a972ff;" onclick="mNotionPreviewTemplate('para')" title="Ver Estructura">👁️</button>
          </div>
        </div>

        <!-- TEMPLATE 2: PROJECT MANAGER -->
        <div class="glass-exercise-card m-template-card" style="background: linear-gradient(145deg, rgba(16,185,129,0.05), rgba(0,0,0,0.2)); border: 1px solid rgba(16,185,129,0.15); border-radius: 16px; padding: 24px; position: relative; overflow: hidden; transition: all 0.4s ease;">
          <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%); border-radius: 50%;"></div>
          
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 0 15px rgba(16,185,129,0.2);">🚀</div>
            <div>
              <h4 style="margin: 0 0 4px; color: #fff; font-family: var(--font-premium); font-size: 1.1rem;">AI-Project Manager Pro</h4>
              <div style="font-size: 0.7rem; color: #10b981; font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Operaciones Ágiles</div>
            </div>
          </div>
          
          <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 16px; line-height: 1.5;">Genera desgloses de tareas complejos (WBS) y reportes de estado automáticos desde un objetivo simple.</p>
          
          <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <div style="font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="color: #10b981;">⚙️</span> <b>Setup:</b> Botón de IA en Base de Datos
            </div>
            <div style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.6; border-left: 2px solid #10b981; padding-left: 10px;">
              "Toma el objetivo del proyecto y divídelo en 5 hitos con fechas estimadas y riesgos asociados."
            </div>
          </div>
          
          <div style="display: flex; gap: 10px;">
            <button class="gl-btn gl-btn-outline" style="flex: 1; border-color: rgba(16,185,129,0.3); color: #6ee7b7; font-size: 0.75rem; background: rgba(16,185,129,0.05);" onclick="mNotionCopyText(this, 'Actúa como un Senior Project Manager. Desglosa este objetivo en una Estructura de Desglose de Trabajo (EDT/WBS) con tareas específicas, entregables y criterios de éxito. Presentalo en una tabla Markdown lista para exportar.')">📋 Copiar Prompt</button>
            <button class="gl-btn" style="width: 40px; padding: 0; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); color: #10b981;" onclick="mNotionPreviewTemplate('pm')" title="Ver Estructura">👁️</button>
          </div>
        </div>

        <!-- TEMPLATE 3: SMART MEETINGS -->
        <div class="glass-exercise-card m-template-card" style="background: linear-gradient(145deg, rgba(59,130,246,0.05), rgba(0,0,0,0.2)); border: 1px solid rgba(59,130,246,0.15); border-radius: 16px; padding: 24px; position: relative; overflow: hidden; transition: all 0.4s ease;">
          <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%); border-radius: 50%;"></div>
          
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 0 15px rgba(59,130,246,0.2);">📹</div>
            <div>
              <h4 style="margin: 0 0 4px; color: #fff; font-family: var(--font-premium); font-size: 1.1rem;">Smart Meeting Records</h4>
              <div style="font-size: 0.7rem; color: #3b82f6; font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Comunicación Asíncrona</div>
            </div>
          </div>
          
          <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 16px; line-height: 1.5;">De transcripción bruta a acta ejecutiva limpia y sincronizada con tu gestor de tareas en segundos.</p>
          
          <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <div style="font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="color: #3b82f6;">⚙️</span> <b>Setup:</b> Bloque AI de "Resumen"
            </div>
            <div style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.6; border-left: 2px solid #3b82f6; padding-left: 10px;">
              "Busca cada mención de compromisos en las notas y extráela en formato de tarea con un responsable."
            </div>
          </div>
          
          <div style="display: flex; gap: 10px;">
            <button class="gl-btn gl-btn-outline" style="flex: 1; border-color: rgba(59,130,246,0.3); color: #93c5fd; font-size: 0.75rem; background: rgba(59,130,246,0.05);" onclick="mNotionCopyText(this, 'Resume esta transcripción extrayendo: 1. Decisiones ejecutivas, 2. Tareas asignadas, 3. Temas bloqueantes. Formato: Tabla Markdown para importación directa.')">📋 Copiar Prompt</button>
            <button class="gl-btn" style="width: 40px; padding: 0; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); color: #3b82f6;" onclick="mNotionPreviewTemplate('meetings')" title="Ver Estructura">👁️</button>
          </div>
        </div>

        <!-- TEMPLATE 4: CONTENT STUDIO -->
        <div class="glass-exercise-card m-template-card" style="background: linear-gradient(145deg, rgba(245,158,11,0.05), rgba(0,0,0,0.2)); border: 1px solid rgba(245,158,11,0.15); border-radius: 16px; padding: 24px; position: relative; overflow: hidden; transition: all 0.4s ease;">
          <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%); border-radius: 50%;"></div>
          
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 0 15px rgba(245,158,11,0.2);">🤳</div>
            <div>
              <h4 style="margin: 0 0 4px; color: #fff; font-family: var(--font-premium); font-size: 1.1rem;">AI Content Studio</h4>
              <div style="font-size: 0.7rem; color: #f59e0b; font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Máquina de Audiencias</div>
            </div>
          </div>
          
          <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 16px; line-height: 1.5;">De una idea suelta a un ecosistema de contenido multimodal adaptado para <b><a href="https://linkedin.com" target="_blank" style="color:#f59e0b; text-decoration:underline;">LinkedIn</a></b>, <b>X (Twitter)</b> y <b><a href="https://tiktok.com" target="_blank" style="color:#f59e0b; text-decoration:underline;">TikTok</a></b>.</p>
          
          <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <div style="font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="color: #f59e0b;">⚙️</span> <b>Setup:</b> Propiedad "AI Translation"
            </div>
            <div style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.6; border-left: 2px solid #f59e0b; padding-left: 10px;">
              "Reescribe la idea para LinkedIn (tono profesional) y extrae las frases más potentes para X."
            </div>
          </div>
          
          <div style="display: flex; gap: 10px;">
            <button class="gl-btn gl-btn-outline" style="flex: 1; border-color: rgba(245,158,11,0.3); color: #fde68a; font-size: 0.75rem; background: rgba(245,158,11,0.05);" onclick="mNotionCopyText(this, 'Toma esta idea central y genera: 1 post para LinkedIn con hook de 5 líneas, 1 guion corto para TikTok, y 1 gancho para newsletter. Aplica sesgos cognitivos para retener atención.')">📋 Copiar Prompt</button>
            <button class="gl-btn" style="width: 40px; padding: 0; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2); color: #f59e0b;" onclick="mNotionPreviewTemplate('content')" title="Ver Estructura">👁️</button>
          </div>
        </div>
        
        <!-- NEW TEMPLATE: SOVEREIGN DASHBOARD -->
        <div class="glass-exercise-card m-template-card" style="background: linear-gradient(145deg, rgba(236,72,153,0.05), rgba(0,0,0,0.2)); border: 1px solid rgba(236,72,153,0.15); border-radius: 16px; padding: 24px; position: relative; overflow: hidden; transition: all 0.4s ease; grid-column: 1 / -1;">
          <div style="position: absolute; top: -50px; left: 50%; transform: translateX(-50%); width: 250px; height: 100px; background: radial-gradient(ellipse, rgba(236,72,153,0.15) 0%, transparent 70%);"></div>
          
          <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 16px;">
            <div style="width: 56px; height: 56px; border-radius: 16px; background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.3); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; box-shadow: 0 0 25px rgba(236,72,153,0.2); margin-bottom: 12px;">👑</div>
            <div style="font-size: 0.7rem; color: #ec4899; font-family: var(--font-mono); text-transform: uppercase; font-weight: 800; letter-spacing: 2px; margin-bottom: 4px;">SISTEMA MAESTRO</div>
            <h4 style="margin: 0 0 8px; color: #fff; font-family: var(--font-premium); font-size: 1.4rem;">The Sovereign CEO Dashboard</h4>
            <p style="font-size: 0.9rem; color: #cbd5e1; max-width: 600px; line-height: 1.6;">El panel de control definitivo que cruza tareas, notas, finanzas y metas usando Ask Notion y relaciones avanzadas para darte contexto total de tu negocio en una sola pantalla.</p>
          </div>
          
          <div style="display: flex; gap: 15px; justify-content: center; margin-top: 24px;">
            <button class="gl-btn-neon" style="border-color: #ec4899; color: #fbcfe8; font-size: 0.85rem; padding: 12px 24px; box-shadow: 0 0 15px rgba(236,72,153,0.2);" onclick="mNotionPreviewTemplate('ceo')"><span class="icon">✨</span> Inspeccionar Arquitectura Base</button>
          </div>
        </div>

      </div>
      
      <!-- Contenedor Visualizador de Template -->
      <div id="m-notion-template-viewer" style="display: none; margin-top: 30px; background: #0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); opacity: 0; transform: translateY(20px); transition: all 0.4s ease;">
         <div style="background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.05); padding: 12px 20px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
               <div style="width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></div>
               <div style="width: 12px; height: 12px; border-radius: 50%; background: #f59e0b;"></div>
               <div style="width: 12px; height: 12px; border-radius: 50%; background: #10b981;"></div>
               <span id="m-notion-viewer-title" style="margin-left: 15px; font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;">database_architecture.db</span>
            </div>
            <button style="background:none; border:none; color:#94a3b8; cursor:pointer;" onclick="document.getElementById('m-notion-template-viewer').style.opacity='0'; setTimeout(()=> {document.getElementById('m-notion-template-viewer').style.display='none'}, 400);">✖</button>
         </div>
         <div id="m-notion-viewer-content" style="padding: 0; background: #020617; overflow-x: auto;">
            <!-- Contenido dinámico -->
         </div>
      </div>

    </div>
  </div>

  <!-- TAB: TIPS AVANZADOS -->
  <div id="m-no-advanced" class="ag-content">
    <div class="section-card animate-in" style="background: var(--notion-glass); border: 1px solid var(--notion-border); border-radius: 16px; padding: 24px;">
      <h3 style="font-family: var(--font-mono); color: #f59e0b;"><span class="icon">⚙️</span> Configuración Soberana: Tips Avanzados</h3>
      <p style="color: #94a3b8; font-size: 0.9rem;">Hackea tu flujo de trabajo para que Notion IA haga el 80% del esfuerzo operativo.</p>

      <div class="m-tm-grid-3" style="margin-top:20px;">
        <div class="m-notion-panel">
          <h4 style="color: #f59e0b;">🧬 Bloques AI en Plantillas</h4>
          <p class="m-notion-note">Configura una plantilla de Base de Datos que incluya un bloque de IA configurado para "Resumir página". Cada vez que abras una nota de reunión, el resumen se generará con un clic.</p>
        </div>
        <div class="m-notion-panel">
          <h4 style="color: #f59e0b;">🤖 Automatizaciones + IA</h4>
          <p class="m-notion-note">Usa las Automatizaciones de Notion para que: si una tarea se marca como "Completada", la IA genere un reporte de cierre en la propiedad de Comentarios.</p>
        </div>
        <div class="m-notion-panel">
          <h4 style="color: #f59e0b;">🔗 Relaciones e IA</h4>
          <p class="m-notion-note">La IA puede leer datos de páginas relacionales. Si vinculas un Cliente con sus Tickets, puedes pedirle que encuentre patrones de insatisfacción cruzados.</p>
        </div>
      </div>

      <div style="margin-top: 24px; padding: 20px; background: rgba(245,158,11,0.05); border: 1px solid rgba(245,158,11,0.2); border-radius: 12px;">
        <h4 style="color: #fff; margin-top: 0;">💎 El Secreto de las Variables AI:</h4>
        <p style="font-size: 0.85rem; color: #cbd5e1;">En el menú de AI Autofill, puedes usar el signo <code>@</code> para mencionar otras propiedades. Ejemplo:</p>
        <code style="display: block; background: #000; padding: 12px; border-radius: 6px; color: #f59e0b; font-size: 0.8rem; margin-top: 8px;">
          "Actúa como analista financiero. Toma el @Presupuesto y compáralo con el @Gasto_Real. Reporta el ROI y dime si estamos en riesgo."
        </code>
      </div>
    </div>
  </div>

  <!-- TAB 7: RETO FINAL -->
  <div id="m-no-mission" class="ag-content">
    <div class="exercise-box mission-card animate-in" style="background: var(--notion-glass); border: 1px solid var(--notion-border); backdrop-filter: blur(20px); padding: 30px; border-radius: 20px;">
      <div class="exercise-header" style="font-family: var(--font-mono);"><span class="exercise-icon">🏆</span><span class="exercise-title">Misión: Arquitecto de Conocimiento Digital</span></div>
      
      <div class="mission-context" style="margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1);">
        <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;"><strong>Contexto:</strong> Eres el Project Manager de una Startup de IA. Tienes 50 feedback de clientes sin procesar y 3 minutas de reuniones de desarrollo caóticas. Debes usar Notion AI para poner orden.</p>
      </div>

      <div class="mission-instructions" style="background:rgba(169,114,255,0.05); padding:20px; border-radius:16px; border:1px solid rgba(169,114,255,0.2); margin:20px 0;">
        <h4 style="margin-top:0; color:#a972ff; font-family: var(--font-premium);">🎯 Desafío Práctico:</h4>
        <div style="font-size:0.9rem; line-height:1.8; color:#cbd5e1;">
          <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
            <input type="checkbox" id="check-1" style="margin-top: 6px;">
            <label for="check-1">1. Crea "Cerebro Central" -> <code>/ai</code> -> Generar índice: [Lanzamiento Q3, Core Engine].</label>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
            <input type="checkbox" id="check-2" style="margin-top: 6px;">
            <label for="check-2">2. Base de Datos -> AI Autofill de Resumen -> Pegar 3 feedbacks distintos.</label>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
            <input type="checkbox" id="check-3" style="margin-top: 6px;">
            <label for="check-3">3. Ctrl+J (Ask Notion) -> Pregunta: "¿Mayor queja del cliente este mes?".</label>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 10px; font-size: 0.8rem; color: #a972ff; font-weight: 700;">PROMETES TU SOLUCIÓN:</div>
      <textarea class="premium-textarea" placeholder="Pega aquí el enlace de tu página de Notion (o describe cómo estructuraste la solución) para validar..." style="height:120px; background: rgba(0,0,0,0.2); border-color: rgba(255,255,255,0.1); color: #fff;"></textarea>
      
      <div class="reward-tag" style="margin-top:20px; background: rgba(169,114,255,0.1); border: 1px solid #a972ff; padding: 10px; border-radius: 8px; text-align: center; font-weight: 800; color: #a972ff; box-shadow: 0 0 15px rgba(169,114,255,0.2);">
        💎 +500 XP · 🏆 Medalla: ARQUITECTO SOBERANO
      </div>
      <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-notion" style="width:100%; margin-top:20px; background:linear-gradient(90deg, #7c3aed, #a972ff); height:50px; font-weight:700;">FINALIZAR Y RECLAMAR XP</button>
    </div>
  </div>

  <div class="module-nav">
    <button class="gl-btn gl-btn-primary" data-goto="module-13">← Atrás</button>
  </div>
</div>
`;

  const notionInstance = {
    init: function(app) {
      console.log('[Module] Notion AI initialized');
      const target = document.getElementById('module-notion');
      if (target && !target.querySelector('.module-header')) {
        target.insertAdjacentHTML('afterbegin', notionHTML);
        setupNotionHandlers(target);
      }
    }
  };

  function setupNotionHandlers(parent) {
      // Basic tabs handled by app.js, but we can ensure initial state here if needed

      // Scenarios data
      const scenarios = {
        reunion: {
          title: "Minuta: Lanzamiento Q2",
          context: "<strong>Notas Crudas:</strong><br>Presupuesto: 5k usd. Fecha: 15 de Abril. Responsables: Luis (Web), Ana (Catering), Juan (Prensa). Faltan permisos de alcaldía. Necesitamos influencers.",
          placeholder: "Presiona Espacio para estructurar la minuta..."
        },
        pitch: {
          title: "Pitch: AI Health Assistant",
          context: "<strong>Ideas Sueltas:</strong><br>App detecta síntomas. Usa GPT-4. Modelo suscripción $9/mes. Target: personas 30-50 años. Necesitamos $50k inversión inicial para MVP.",
          placeholder: "Presiona Espacio para mejorar el pitch..."
        },
        draft: {
          title: "Borrador: Política de IA",
          context: "<strong>Directrices:</strong><br>Prohibido usar datos sensibles. Transparencia con el cliente. Auditoría semanal. Ética por encima de rapidez.",
          placeholder: "Presiona Espacio para redactar la política..."
        }
      };

      window.mNotionChangeScenario = function(key, btn) {
        const s = scenarios[key];
        const title = document.getElementById('notion-title');
        const ctx = document.getElementById('notion-context');
        const block = document.getElementById('notion-block');
        const btns = parent.querySelectorAll('.scenario-chip');

        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        title.textContent = s.title;
        ctx.innerHTML = s.context;
        block.innerHTML = '';
        block.dataset.placeholder = s.placeholder;
      };

      // Editor Logic
      let menuOpen = false;
      const block = document.getElementById('notion-block');
      const menu = document.getElementById('notion-menu');

      block.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && block.textContent.trim() === '') {
          e.preventDefault();
          menu.style.top = (block.offsetTop + 40) + 'px';
          menu.style.left = block.offsetLeft + 'px';
          menu.classList.add('active');
          menuOpen = true;
        }
      });

      document.addEventListener('click', (e) => {
        if (menuOpen && !e.target.closest('#notion-menu') && e.target !== block) {
          menu.classList.remove('active');
          menuOpen = false;
        }
      });

      window.mNotionExec = function(action) {
        menu.classList.remove('active');
        menuOpen = false;

        const loader = document.getElementById('notion-loading');
        loader.classList.add('active');

        const currentTitle = document.getElementById('notion-title').textContent;

        setTimeout(() => {
          loader.classList.remove('active');
          let res = '<div class="m-notion-result-ai">';
          const checkIcon = '✅';
          const aiIcon = '✨';

          if (action === 'resume') {
            res += '<h4>' + aiIcon + ' Resumen Ejecutivo:</h4><ul>' +
              '<li><b>Evento:</b> ' + currentTitle + '</li>' +
              '<li><b>Hito Clave:</b> Definido para el 15 de Abril.</li>' +
              '<li><b>Presupuesto:</b> $5,000 USD asignados.</li>' +
              '<li><b>Riesgo:</b> Pendiente gestión de permisos legales.</li>' +
              '</ul>';
          } else if (action === 'checklist') {
            res += '<h4>' + checkIcon + ' Plan de Acción Directo:</h4>' +
              '<div style="margin-left:10px;">' +
              '<input type="checkbox" checked disabled style="margin-right:8px;"> Contactar a Luis por el sitio web<br>' +
              '<input type="checkbox" disabled style="margin-right:8px;"> Coordinar menú con Ana<br>' +
              '<input type="checkbox" disabled style="margin-right:8px;"> Enviar nota de prensa (Juan)<br>' +
              '<input type="checkbox" disabled style="margin-right:8px;"> Aplicar a permisos de alcaldía' +
              '</div>';
          } else if (action === 'tone') {
            res += '<h4>' + aiIcon + ' Versión Profesional:</h4>' +
              '<p>Se ha formalizado la propuesta para el proyecto "' + currentTitle + '". El despliegue está programado para mediados de abril, sujeto a la regularización normativa local. Se requiere una inversión inicial de 5k USD para cubrir los rubros operativos básicos.</p>';
          } else if (action === 'brainstorm') {
            res += '<h4>💡 Ideas Creativas Propuestas:</h4>' +
              '<ol>' +
              '<li>Gamificar el registro mediante códigos QR en la ciudad.</li>' +
              '<li>Lanzar una cuenta regresiva interactiva en redes sociales.</li>' +
              '<li>Alianza con micro-influencers del sector tecnológico.</li>' +
              '</ol>';
          } else if (action === 'translate') {
            res += '<h4>🌐 English Translation:</h4>' +
              '<p><i>Draft for: ' + currentTitle + '</i><br>The launch is scheduled for April 15th with a budget of 5k USD. Luis will handle the web development, while Ana manages catering and Juan oversees press relations. Key bottleneck: government permits.</p>';
          }
          res += '</div>';
          block.innerHTML = res;
          if (window.app) window.app.addXP(40);
        }, 1500);
      };

      // Other simulators
      window.mNotionAutofill = function(btn) {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.innerHTML = '⏳ Analizando con <span class="glow-text">LLM...</span>';
        btn.style.opacity = "0.7";

        setTimeout(() => {
          const s1 = document.getElementById('db-s-1');
          const s2 = document.getElementById('db-s-2');
          const s3 = document.getElementById('db-s-3');

          s1.innerHTML = '<span class="m-notion-tag animate-pop" style="background:rgba(239,68,68,0.15);color:#f87171;border:1px solid rgba(239,68,68,0.3);">😡 Crítico</span>';

          setTimeout(() => {
            s2.innerHTML = '<span class="m-notion-tag animate-pop" style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);">😃 Satisfecho</span>';
          }, 400);

          setTimeout(() => {
            s3.innerHTML = '<span class="m-notion-tag animate-pop" style="background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);">😐 Informativo</span>';
          }, 800);

          setTimeout(() => {
            btn.innerHTML = "✅ Base 100% Sincronizada";
            btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
            btn.style.opacity = "1";
            btn.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.4)";
            if (window.app) window.app.addXP(50);
          }, 1200);
        }, 2000);
      };

      window.mNotionSearch = function() {
        const inputElem = document.getElementById('notion-qa-input');
        if (!inputElem) return;
        const input = inputElem.value;
        const loader = document.getElementById('notion-load-qa');
        const res = document.getElementById('notion-qa-res');
        if (input.length < 3) return;

        res.style.display = 'none';
        loader.classList.add('active');
        setTimeout(() => {
          loader.classList.remove('active');
          res.style.display = 'block';
          if (input.toLowerCase().includes('responsable') || input.toLowerCase().includes('quién')) {
            res.innerHTML = "✨ <b>Notion AI:</b><br>Según el documento 'Minuta: Lanzamiento Q2', hay tres responsables principales: Luis (Web), Ana (Catering) y Juan (Prensa).";
          } else {
            res.innerHTML = "✨ <b>Notion AI:</b><br>Basado en tu espacio de trabajo actual, la información más relevante indica que el proyecto de lanzamiento tiene un presupuesto de 5,000 USD.";
          }
          if (window.app) window.app.addXP(25);
        }, 1500);
      };

      window.mNotionCopyText = function(btn, text) {
        navigator.clipboard.writeText(text).catch(() => {});
        const orig = btn.textContent;
        btn.textContent = '✅ Copiado';
        btn.style.color = '#10b981';
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.color = '#a972ff';
        }, 2500);
        if (window.app) window.app.addXP(5);
      };

      window.mNotionPreviewTemplate = function(type) {
        const viewer = document.getElementById('m-notion-template-viewer');
        const content = document.getElementById('m-notion-viewer-content');
        const title = document.getElementById('m-notion-viewer-title');
        
        let html = '';
        let titleText = '';
        
        if (type === 'para') {
          titleText = 'Second_Brain_AI_Database.notion';
          html = `
            <table class="m-notion-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">Aa Nombre (Nota)</th>
                <th style="padding: 12px 16px; text-align: left; color: #a972ff; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">✨ AI Categoría (P.A.R.A)</th>
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">✨ AI Tono/Contexto</th>
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05);"># Fecha</th>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #fff;">Ideas para rediseño web</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);"><span style="background: rgba(169,114,255,0.15); color: #c084fc; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem;">Proyecto</span></td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; font-size: 0.8rem;">Estratégico / Creativo</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #94a3b8; font-size: 0.8rem;">Hoy</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #fff;">Impuestos Q3</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);"><span style="background: rgba(59,130,246,0.15); color: #60a5fa; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem;">Área (Finanzas)</span></td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; font-size: 0.8rem;">Administrativo / Urgente</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #94a3b8; font-size: 0.8rem;">Ayer</td>
              </tr>
            </table>
          `;
        } else if (type === 'pm') {
          titleText = 'Agile_AI_Projects.db';
          html = `
            <table class="m-notion-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">Aa Tarea</th>
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">≡ Estado</th>
                <th style="padding: 12px 16px; text-align: left; color: #10b981; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">✨ Resumen Automático</th>
                <th style="padding: 12px 16px; text-align: left; color: #10b981; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05);">⚡ AI Action (Botón)</th>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #fff;">Crear Landing Page</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);"><span style="background: rgba(245,158,11,0.15); color: #fbbf24; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem;">En Progreso</span></td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">Diseño listo, falta integrar API de pagos (<b><a href="https://stripe.com" target="_blank" style="color:#10b981; text-decoration:underline;">Stripe</a></b>). Riesgo medio.</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);"><button style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); color: #10b981; padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Generar Sub-tareas</button></td>
              </tr>
            </table>
          `;
        } else if (type === 'meetings') {
          titleText = 'Smart_Meeting_Minutes.csv';
          html = `
            <table class="m-notion-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">Aa Reunión</th>
                <th style="padding: 12px 16px; text-align: left; color: #3b82f6; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">✨ Decisiones (AI)</th>
                <th style="padding: 12px 16px; text-align: left; color: #3b82f6; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">✨ Next Steps</th>
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05);">↗️ Vinculación Tareas</th>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #fff;">Kickoff Q2</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">- Budget aprobado: 50k<br>- Lanzamiento movido a Mayo</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">[ ] Crear roadmap (Carlos)<br>[ ] Contratar Dev (Ana)</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);"><span style="color:#60a5fa; font-size:0.8rem;">↗ 2 Tareas creadas</span></td>
              </tr>
            </table>
          `;
        } else if (type === 'content') {
           titleText = 'Omnichannel_Studio.json';
           html = `
            <table class="m-notion-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="padding: 12px 16px; text-align: left; color: #94a3b8; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">Aa Idea Core</th>
                <th style="padding: 12px 16px; text-align: left; color: #f59e0b; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">✨ LinkedIn Versión</th>
                <th style="padding: 12px 16px; text-align: left; color: #f59e0b; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">✨ X Hook</th>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #fff;">La IA no quita trabajos, los transforma.</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">"Hace 10 años, tener Excel era una ventaja. Hoy es el estándar. Con la IA está pasando exactamente lo mismo. El problema no es la herramienta..."</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">"ChatGPT no va a robarte el trabajo. El que sabe usar ChatGPT sí. Abro hilo 🧵:"</td>
              </tr>
            </table>
           `;
        } else if (type === 'ceo') {
           titleText = 'Sovereign_CEO_Nexus.ai';
           html = `
            <div style="padding: 20px; color: #cbd5e1;">
              <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                <div style="flex: 1; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 15px;">
                  <h5 style="color: #ec4899; margin: 0 0 10px; font-family: var(--font-mono); font-size: 0.75rem;">✨ AI RESUMEN GLOBAL</h5>
                  <p style="font-size: 0.85rem; line-height: 1.5; margin: 0;">"Esta semana el progreso general aumentó a 65%. Riesgo detectado en 'Frontend Dev' (2 días de retraso). Finanzas saludables con runway de 18 meses."</p>
                </div>
                <div style="flex: 1; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 15px;">
                  <h5 style="color: #ec4899; margin: 0 0 10px; font-family: var(--font-mono); font-size: 0.75rem;">⚡ AI NEXT BEST ACTION</h5>
                  <p style="font-size: 0.85rem; line-height: 1.5; margin: 0;">"Aprobar la factura pendiente de <b><a href="https://aws.amazon.com" target="_blank" style="color:#ec4899; text-decoration:underline;">AWS</a></b> ($1,200) para evitar corte de servicio y reasignar 1 Dev al equipo Frontend."</p>
                </div>
              </div>
              <div style="background: rgba(236,72,153,0.05); border: 1px dashed rgba(236,72,153,0.2); border-radius: 8px; padding: 20px; text-align: center; color: #fbcfe8; font-size: 0.85rem;">
                <p style="margin: 0;"><b>Relaciones Activas en el Nexus:</b></p>
                <div style="margin-top: 10px; display: flex; justify-content: center; gap: 15px; font-family: var(--font-mono); font-size: 0.7rem;">
                  <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px;">↗ Tareas (58)</span>
                  <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px;">↗ Notas (12)</span>
                  <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px;">↗ Finanzas (Q2)</span>
                  <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px;">↗ Objetivos (OKRs)</span>
                </div>
              </div>
            </div>
           `;
        }

        title.textContent = titleText;
        content.innerHTML = html;
        viewer.style.display = 'block';
        
        // Animación suave de aparición
        requestAnimationFrame(() => {
          viewer.style.opacity = '1';
          viewer.style.transform = 'translateY(0)';
        });
        
        // Efecto scroll
        setTimeout(() => {
          viewer.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 50);
        
        if (window.app) window.app.addXP(10);
      };

      window.mNoSimulate = function(btn, type, xp) {
        if (btn.disabled) return;
        btn.disabled = true;
        const origText = btn.innerHTML;
        btn.innerHTML = '⏳ Simulando...';
        btn.style.opacity = '1';

        setTimeout(() => {
          btn.innerHTML = '✅ Completado';
          btn.style.background = 'rgba(16,185,129,0.2)';
          btn.style.borderColor = '#10b981';
          btn.style.color = '#34d399';
          btn.style.opacity = '1';
          if (window.app) window.app.addXP(xp);
          
          // Efecto de partículas o mensaje de éxito
          const msg = document.createElement('div');
          msg.style.position = 'absolute';
          msg.style.top = '-20px';
          msg.style.left = '50%';
          msg.style.transform = 'translateX(-50%)';
          msg.style.color = '#10b981';
          msg.style.fontSize = '0.7rem';
          msg.style.fontWeight = '800';
          msg.innerText = '+' + xp + ' XP!';
          btn.parentElement.style.position = 'relative';
          btn.parentElement.appendChild(msg);
          
          setTimeout(() => msg.remove(), 2100);
        }, 1500);
      };

  }

  return notionInstance;
})();
