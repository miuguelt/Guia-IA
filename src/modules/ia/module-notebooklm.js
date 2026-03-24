window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-notebooklm'] = (function() {
/* ═══════════════════════════════════════════
   MÓDULO BONUS: NotebookLM
   Versión Enriquecida — Simulador RAG y Audio Overview
   ═══════════════════════════════════════════ */

  const nlmHTML = `

<div class="m-nlm-container animate-in">
  <div class="module-header premium-header animate-in">
    <div class="badge-titan" style="margin-bottom: 20px;">BONUS TOOL</div>
    <h2 class="module-title text-gradient-primary">📓 <a href="https://notebooklm.google.com" target="_blank" style="color:inherit; text-decoration:none;">NotebookLM:</a> Tu Asistente de Investigación</h2>
    <p class="m-pa-note">Sube hasta 50 documentos (PDFs, PPTs, Enlaces, YouTube) y Google creará un asistente que <strong>solo sabe lo que tú le diste</strong>. Evita alucinaciones citando siempre la página exacta.</p>
    <div class="module-meta" style="margin-top: 20px; display: flex; gap: 20px;">
      <span class="module-meta-item">⏱️ 20 min</span>
      <span class="module-meta-item">💎 150 XP</span>
      <span class="module-meta-item">🏆 Insignia: Investigador Digital</span>
    </div>
  </div>

<div class="m-nlm-hero">
  <h3 style="margin:0 0 8px; color:#f8fafc;">La idea central de NotebookLM</h3>
  <p class="m-nlm-note" style="margin:0;">NotebookLM no sirve para “saber de todo”. Sirve para <strong>pensar mejor con un conjunto cerrado de fuentes</strong>. Cuando lo entiendes así, deja de ser un simple chatbot y se convierte en tu sala de lectura aumentada.</p>
  <div class="m-nlm-chip-row">
    <span class="m-nlm-chip">Fuentes cerradas</span>
    <span class="m-nlm-chip">Citas verificables</span>
    <span class="m-nlm-chip">Resumen multifuente</span>
    <span class="m-nlm-chip">Audio Overview</span>
    <span class="m-nlm-chip">Menos alucinación</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m-nlm-concept">📚 RAG vs Prompting</button>
  <button class="tab-btn" data-tab="m-nlm-decider">🧭 Cuándo Usarlo</button>
  <button class="tab-btn" data-tab="m-nlm-lab">✨ Simulador Notebook</button>
  <button class="tab-btn" data-tab="m-nlm-cases">🧭 Casos Prácticos</button>
  <button class="tab-btn" data-tab="m-nlm-prompts">🧠 Prompts</button>
  <button class="tab-btn" data-tab="m-nlm-antipatterns">🚫 Errores</button>
  <button class="tab-btn" data-tab="m-nlm-estrategia">🎯 Estrategia Real</button>
  <button class="tab-btn" data-tab="m-nlm-mission">🏆 Reto Final</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m-nlm-concept" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🔍</span> ¿Qué es RAG? (Retrieval-Augmented Generation)</h3>
    <p>Piensa en NotebookLM como un estudiante con modelo de *libro abierto*. Si usas ChatGPT normal (Prompting), estás confiando en lo que memorizó hace 2 años y es propenso a inventar cosas (Alucinación). NotebookLM no "inventa", va al PDF que le diste, lee la sección, y te la explica con una cita exacta.</p>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:15px;margin-top:20px;">
      
      <div style="background:rgba(255,255,255,0.03);padding:20px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
        <h4 style="margin:0 0 10px;color:#fbbf24;">🎙️ Audio Overviews (Podcasts)</h4>
        <p style="font-size:0.85rem;color:#cbd5e1;margin:0;">Sube el PDF aburrido del manual de contratación y NotebookLM generará, con un solo clic, un podcast de 10 minutos con dos voces hiperrealistas debatiendo el texto. ¡Tú escuchas en el auto!</p>
      </div>

      <div style="background:rgba(255,255,255,0.03);padding:20px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
        <h4 style="margin:0 0 10px;color:#34d399;">📎 Citas Infalibles</h4>
        <p style="font-size:0.85rem;color:#cbd5e1;margin:0;">No hay cabida a la alucinación. Si le preguntas "¿Cuál es la norma de permisos?", te responde con el texto y un número clickeable. Haces clic y salta a la página exacta del PDF.</p>
      </div>

    </div>
  </div>
</div>

<div id="m-nlm-decider" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧭</span> Cuándo usar NotebookLM y cuándo no</h3>
    <div class="m-nlm-grid-2" style="margin-top:18px;">
      <div class="m-nlm-panel">
        <h4>Úsalo cuando...</h4>
        <p class="m-nlm-note">Tienes PDFs, normas, contratos, manuales, presentaciones, transcripciones o enlaces concretos y necesitas respuestas ancladas a evidencia.</p>
      </div>
      <div class="m-nlm-panel">
        <h4>No es la mejor opción cuando...</h4>
        <p class="m-nlm-note">Necesitas creatividad abierta, brainstorming libre o conocimiento general que no depende de tus fuentes cargadas.</p>
      </div>
      <div class="m-nlm-panel">
        <h4>Se vuelve brillante si...</h4>
        <p class="m-nlm-note">Subes fuentes del mismo tema, haces preguntas comparativas y obligas a que todo quede citado.</p>
      </div>
      <div class="m-nlm-panel">
        <h4>Pierde valor si...</h4>
        <p class="m-nlm-note">Subes documentos desordenados, mezclas temas distintos o pides respuestas vagas sin formato de salida.</p>
      </div>
    </div>
    <div class="m-nlm-grid-3" style="margin-top:16px;">
      <div class="m-nlm-step"><div class="m-nlm-step-badge">1</div><h4 style="margin:0 0 6px; color:#f8fafc;">Define el tema</h4><p class="m-nlm-note" style="margin:0;">Cada cuaderno debe tener una pregunta rectora clara.</p></div>
      <div class="m-nlm-step"><div class="m-nlm-step-badge">2</div><h4 style="margin:0 0 6px; color:#f8fafc;">Curar fuentes</h4><p class="m-nlm-note" style="margin:0;">Pocas fuentes buenas valen más que veinte irrelevantes.</p></div>
      <div class="m-nlm-step"><div class="m-nlm-step-badge">3</div><h4 style="margin:0 0 6px; color:#f8fafc;">Exigir evidencia</h4><p class="m-nlm-note" style="margin:0;">Pide siempre cita, vacío encontrado y punto a revisar.</p></div>
    </div>
  </div>
</div>

<!-- TAB 2: LABORATORIO -->
<div id="m-nlm-lab" class="ag-content">
  <div class="section-card animate-in m-nlm-card">
    <div class="m-nlm-header-bg"></div>
    <h3 style="position:relative; z-index:2; margin-top:0;" class="text-gradient-primary"><span class="icon">✨</span> Simulador: El "Deep Dive"</h3>
    <p class="m-pa-note" style="position:relative; z-index:2; color: #fff;">Haz clic en <b>Generar Podcast</b> o pregunta algo en el chat basado en los documentos pre-cargados a la izquierda.</p>
    
    <div class="m-nlm-layout">
      <!-- Fuentes -->
      <div class="m-nlm-sources">
        <div class="m-nlm-title">📚 Fuentes (3/50)</div>
        
        <div class="m-nlm-source-item" onclick="alert('Fuente 1 seleccionada')">
          <span class="m-nlm-source-icon">📄</span>
          <span class="m-nlm-source-text">Ley_Transparencia_1712.pdf</span>
        </div>
        <div class="m-nlm-source-item" onclick="alert('Fuente 2 seleccionada')">
          <span class="m-nlm-source-icon">📊</span>
          <span class="m-nlm-source-text">Presupuesto_Anual_2024.csv</span>
        </div>
        <div class="m-nlm-source-item" onclick="alert('Fuente 3 seleccionada')">
          <span class="m-nlm-source-icon">🔗</span>
          <span class="m-nlm-source-text">Directiva_Presidencial_03.url</span>
        </div>
        
        <button class="m-nlm-upload-btn" onclick="mNlmAddSource(this)">
          <span>+</span> Añadir fuente falsa
        </button>
        
        <div style="margin-top:20px; font-size:0.75rem; color:#94a3b8; text-align:center;">
          *En la vida real puedes enlazar todo tu <a href="https://drive.google.com" target="_blank" style="color:var(--primary); text-decoration:underline;">Google Drive</a> aquí.*
        </div>
      </div>
      
      <!-- Interfaz Central -->
      <div class="m-nlm-chat">
        
        <!-- Audio Overview -->
        <div class="m-nlm-audio-card">
          <div class="m-nlm-audio-wave" id="nlm-wave"></div>
          <button class="m-nlm-play-btn" id="nlm-play" onclick="mNlmPlayAudio()">▶</button>
          <div class="m-nlm-audio-title" id="nlm-a-title">Generar Audio Overview</div>
          <div class="m-nlm-audio-sub" id="nlm-a-sub">Convierte estos 3 documentos en una charla tipo Podcast</div>
        </div>
        
        <!-- Chat Area -->
        <div class="m-nlm-title" style="margin-bottom:10px;">💬 Chat con tus documentos</div>
        <div class="m-nlm-chat-box" id="nlm-chat-box">
          <div class="m-nlm-msg ai">Hola. He revisado los 3 documentos. Pregúntame sobre Transparencia, Presupuesto 2024 o la Directiva Presidencial.</div>
        </div>
        
        <!-- Input Area -->
        <div class="m-nlm-input-area">
          <input type="text" class="m-nlm-input" id="nlm-input-val" placeholder="Pídele un resumen ejecutivo o haz una pregunta concisa..." onkeydown="if(event.key==='Enter') mNlmChat()">
          <button class="gl-btn" style="background:#fbbf24;color:#000;border:none;padding:10px 15px;border-radius:20px;font-weight:700;" onclick="mNlmChat()">↗</button>
        </div>
        
      </div>
    </div>

  </div>
</div>

<!-- TAB 3: CASOS PRÁCTICOS -->
<div id="m-nlm-cases" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#fbbf24; margin-top:0;">🧭 Tres Formas de Sacarle Valor a NotebookLM</h3>
    <p style="font-size:0.85rem; color:#94a3b8;">NotebookLM brilla cuando tienes fuentes cerradas y necesitas respuestas con trazabilidad. Estos tres casos te muestran exactamente cuándo usarlo.</p>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:18px;">
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#fbbf24; margin-bottom:8px;">CASO 1 · CONSULTA CON CITA</div>
          <h4 style="margin:0 0 8px; color:#e2e8f0;">Consulta con cita exacta</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Úsalo cuando necesites respuestas con trazabilidad y no quieras adivinar.</p>
          <div style="margin: 12px 0; border-top: 1px solid rgba(251,191,36,0.1); padding-top: 10px;">
            <p style="font-size: 0.72rem; color: #fbbf24; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
            <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
              1. Crea un cuaderno y sube tus PDFs.<br>
              2. Haz una pregunta cerrada y puntual.<br>
              3. Abre la cita naranja generada.<br>
              4. Verifica el párrafo resaltado en el origen.
            </div>
          </div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'En base únicamente a las fuentes cargadas, responde esta pregunta con cita exacta de página. Si la información no aparece, dilo de forma explícita y no inventes nada. Pregunta: [ESCRIBE AQUÍ TU DUDA].')">📋 Copiar Prompt del Caso 1</button>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#fbbf24; margin-bottom:8px;">CASO 2 · SÍNTESIS DE VARIAS FUENTES</div>
          <h4 style="margin:0 0 8px; color:#e2e8f0;">Síntesis multifuente</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Ideal para unificar informes o auditorías con documentación repartida.</p>
          <div style="margin: 12px 0; border-top: 1px solid rgba(251,191,36,0.1); padding-top: 10px;">
            <p style="font-size: 0.72rem; color: #fbbf24; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
            <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
              1. Sube al menos 3 fuentes relacionadas.<br>
              2. Pide buscar coincidencias y vacíos.<br>
              3. Solicita un informe en lenguaje simple.<br>
              4. Revisa que cada idea tenga su cita.
            </div>
          </div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'Usa todas las fuentes cargadas para construir un resumen ejecutivo de máximo 200 palabras. Incluye: 1) puntos en común, 2) diferencias o contradicciones, 3) riesgos o vacíos. Cada afirmación importante debe quedar respaldada por una cita.')">📋 Copiar Prompt del Caso 2</button>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#fbbf24; margin-bottom:8px;">CASO 3 · AUDIO OVERVIEW</div>
          <h4 style="margin:0 0 8px; color:#e2e8f0;">Audio Overview</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Útil para estudiar manuales técnicos o informes densos de forma audible.</p>
          <div style="margin: 12px 0; border-top: 1px solid rgba(251,191,36,0.1); padding-top: 10px;">
            <p style="font-size: 0.72rem; color: #fbbf24; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
            <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
              1. Carga la fuente principal sugerida.<br>
              2. Genera el Audio Overview (Podcast).<br>
              3. Escucha el análisis de los locutores.<br>
              4. Anota 3 ideas clave para tu área.
            </div>
          </div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'Después de generar el Audio Overview, resume en 3 viñetas: qué entendiste, qué decisión puedes tomar y qué duda debes revisar de nuevo en el documento original.')">📋 Copiar Prompt del Caso 3</button>
      </div>
    </div>

    <div class="kit-result-box">
      <strong style="color:#86efac;">Cómo saber si lo usaste bien:</strong>
      <div style="margin-top:6px; font-size:0.8rem; color:#cbd5e1; line-height:1.7;">
        Un buen resultado en NotebookLM siempre tiene trazabilidad. Si la respuesta no cita o no puedes abrir la evidencia, vuelve a pedir que fundamente cada afirmación.
      </div>
    </div>
  </div>
</div>

<div id="m-nlm-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#fbbf24; margin-top:0;">🧠 Prompts Maestros para NotebookLM</h3>
    <div class="m-nlm-grid-2" style="margin-top:18px;">
      <div class="m-nlm-panel">
        <h4>Resumen ejecutivo con cita</h4>
        <div class="kit-copyblock">Usa únicamente las fuentes cargadas para construir un resumen ejecutivo de máximo 180 palabras. Incluye: 1) tema central, 2) hallazgos más importantes, 3) riesgo o vacío detectado, 4) siguiente paso recomendado. Cita cada afirmación importante.</div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'Usa únicamente las fuentes cargadas para construir un resumen ejecutivo de máximo 180 palabras. Incluye: 1) tema central, 2) hallazgos más importantes, 3) riesgo o vacío detectado, 4) siguiente paso recomendado. Cita cada afirmación importante.')">📋 Copiar</button>
      </div>
      <div class="m-nlm-panel">
        <h4>Comparar fuentes</h4>
        <div class="kit-copyblock">Compara las fuentes cargadas y sepáralas en tres bloques: coincidencias, contradicciones y vacíos. Para cada punto, indica la fuente o cita que lo respalda.</div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'Compara las fuentes cargadas y sepáralas en tres bloques: coincidencias, contradicciones y vacíos. Para cada punto, indica la fuente o cita que lo respalda.')">📋 Copiar</button>
      </div>
      <div class="m-nlm-panel">
        <h4>Estudio guiado</h4>
        <div class="kit-copyblock">Convierte estas fuentes en una guía de estudio. Necesito: conceptos clave, explanation simple, 5 preguntas de repaso y 3 errores frecuentes de interpretación. Todo respaldado por las fuentes.</div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'Convierte estas fuentes en una guía de estudio. Necesito: conceptos clave, explanation simple, 5 preguntas de repaso y 3 errores frecuentes de interpretación. Todo respaldado por las fuentes.')">📋 Copiar</button>
      </div>
      <div class="m-nlm-panel">
        <h4>Preparar decisión</h4>
        <div class="kit-copyblock">Con base en estas fuentes, dime: 1) qué ya sabemos, 2) qué no sabemos todavía, 3) qué decisión podríamos tomar hoy, 4) qué parte debe verificarse de nuevo en el documento original.</div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'Con base en estas fuentes, dime: 1) qué ya sabemos, 2) qué no sabemos todavía, 3) qué decisión podríamos tomar hoy, 4) qué parte debe verificarse de nuevo en el documento original.')">📋 Copiar</button>
      </div>
    </div>
  </div>
</div>

<div id="m-nlm-antipatterns" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#fbbf24; margin-top:0;">🚫 Errores que hacen que NotebookLM parezca menos útil</h3>
    <div class="m-nlm-grid-3" style="margin-top:18px;">
      <div class="m-nlm-panel"><h4>Subir fuentes mezcladas</h4><p class="m-nlm-note">Un cuaderno con temas distintos genera respuestas confusas y menos profundas.</p></div>
      <div class="m-nlm-panel"><h4>No pedir cita</h4><p class="m-nlm-note">Si no exiges evidencia, desaprovechas su principal ventaja frente a un chat común.</p></div>
      <div class="m-nlm-panel"><h4>Querer creatividad abierta</h4><p class="m-nlm-note">NotebookLM es fuerte en grounding documental, no en exploración libre sin fuentes.</p></div>
      <div class="m-nlm-panel"><h4>No revisar vacíos</h4><p class="m-nlm-note">Lo más valioso a veces no es lo que responde, sino lo que demuestra que falta.</p></div>
      <div class="m-nlm-panel"><h4>Usarlo como lector pasivo</h4><p class="m-nlm-note">No te quedes en el resumen. Pregunta, compara, cuestiona y convierte el audio en acción.</p></div>
      <div class="m-nlm-panel"><h4>No separar cuadernos por objetivo</h4><p class="m-nlm-note">Un cuaderno por problema suele funcionar mejor que un gran repositorio amorfo.</p></div>
    </div>
    <div class="kit-result-box">
      <strong style="color:#86efac;">Señal de buen uso:</strong>
      <div style="margin-top:6px; font-size:0.8rem; color:#cbd5e1; line-height:1.7;">
        Terminas con una respuesta verificable, una cita reutilizable y una mejor comprensión del material, no solo con un resumen bonito.
      </div>
    </div>
  </div>
</div>

<div id="m-nlm-estrategia" class="ag-content">
  <div class="section-card animate-in">
    <!-- Kit Header -->
    <div class="kit-header">
      <div class="kit-badge">🧪 ESTRATEGIA REAL · NotebookLM</div>
      <p class="kit-title">Operación: El Oráculo de Contratación</p>
      <p class="kit-sub">📋 Situación: Tu entidad recibe 3 consultas diarias sobre plazos y cláusulas de contratos. Cada respuesta tarda 40 min buscando en PDFs. Con NotebookLM, la IA lo hace en 30 segundos citando la página exacta.</p>
    </div>

    <!-- Maletín de Activos -->
    <h4 style="color:#f59e0b; margin: 0 0 10px;">🧳 Tu Maletín de Trabajo</h4>
    <div class="kit-assets">

      <div class="kit-asset">
        <span class="kit-asset-icon">📄</span>
        <div class="kit-asset-body">
          <p class="kit-asset-name">Ley 80 de 1993 — Estatuto de Contratación Estatal</p>
          <p class="kit-asset-desc">Documento base real. Sube el PDF directamente a NotebookLM como fuente principal.</p>
        </div>
        <button class="kit-copy-btn" onclick="nlmCopyAsset(this, 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304')">🔗 Copiar URL</button>
      </div>

      <div class="kit-asset">
        <span class="kit-asset-icon">📝</span>
        <div class="kit-asset-body">
          <p class="kit-asset-name">Prompt Maestro #1 — Búsqueda de Cláusulas de Riesgo</p>
          <p class="kit-asset-desc">Descubre términos peligrosos ocultos en contratos largos.</p>
        </div>
        <button class="kit-copy-btn" id="nlm-pm1-btn" onclick="nlmCopyAsset(this, 'Actúa como abogado experto en contratación pública. En base ÚNICAMENTE a los documentos cargados, identifica y lista en una tabla: (1) cláusulas que puedan generar sanciones a la entidad, (2) fechas críticas de obligatorio cumplimiento, (3) responsables nombrados explícitamente. Cita la página exacta de cada hallazgo.')">📋 Copiar Prompt</button>
      </div>

      <div class="kit-asset">
        <span class="kit-asset-icon">📝</span>
        <div class="kit-asset-body">
          <p class="kit-asset-name">Prompt Maestro #2 — Resumen Ejecutivo para el Director</p>
          <p class="kit-asset-desc">Convierte 200 páginas en una sola hoja de decisión.</p>
        </div>
        <button class="kit-copy-btn" id="nlm-pm2-btn" onclick="nlmCopyAsset(this, 'Resume este contrato en un memorando ejecutivo de máximo 3 párrafos. Incluye: (1) objeto del contrato, (2) valor total y forma de pago, (3) los 2 riesgos más importantes. Usa lenguaje directo y no técnico. Cita la fuente de cada dato.')">📋 Copiar Prompt</button>
      </div>

      <div class="kit-asset">
        <span class="kit-asset-icon">🎙️</span>
        <div class="kit-asset-body">
          <p class="kit-asset-name">Audio Overview: Guía de Configuración</p>
          <p class="kit-asset-desc">Cómo generar tu podcast de 10 min sobre el contrato.</p>
        </div>
        <button class="kit-copy-btn" onclick="nlmCopyAsset(this, 'https://notebooklm.google.com → Nuevo Cuaderno → Fuentes → Subir PDF → Panel derecho: Audio Overview → Generar')">📋 Copiar Ruta</button>
      </div>
    </div>

    <!-- Checklist de Pasos -->
    <h4 style="color:#f59e0b; margin: 16px 0 10px;">✅ Ejecuta la Estrategia Paso a Paso</h4>
    <p style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 12px;">Haz clic en cada paso para simular su ejecución y ganar XP.</p>
    
    <ul class="kit-steps" id="nlm-steps">
      <li class="kit-step" onclick="nlmCheckStep(this, 0, 30)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Abre notebooklm.google.com e inicia sesión</p>
          <p class="kit-step-detail">Crea un nuevo cuaderno llamado <b>"Auditoría Contratos 2025"</b>.</p>
          <div class="kit-step-tip">💡 Funciona 100% gratis con tu cuenta personal o Workspace.</div>
        </div>
        <span class="kit-step-xp">+30 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 1, 40)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Sube fuentes críticas (PDF/URL)</p>
          <p class="kit-step-detail">Carga la Ley 80 de Contratación o cualquier manual técnico de tu área.</p>
          <div class="kit-step-tip">💡 NotebookLM puede procesar hasta 500,000 palabras por fuente.</div>
        </div>
        <span class="kit-step-xp">+40 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 2, 50)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Identifica Cláusulas de Riesgo con Prompt Maestro</p>
          <p class="kit-step-detail">Usa el prompt del maletín para encontrar sanciones y fechas críticas.</p>
          <div class="kit-step-tip">💡 Haz clic en las citas naranjas para ver la evidencia en el PDF.</div>
        </div>
        <span class="kit-step-xp">+50 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 3, 60)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Genera y Personaliza el Audio Overview</p>
          <p class="kit-step-detail">Crea la charla tipo podcast entre dos expertos analizando tus fuentes.</p>
          <div class="kit-step-tip">💡 ¡Novedad 2025! Ahora puedes guiar la charla pidiendo temas específicos.</div>
        </div>
        <span class="kit-step-xp">+60 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 4, 70)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Exporta Resumen a Google Docs</p>
          <p class="kit-step-detail">Convierte tus hallazgos en un documento formal con un solo clic.</p>
          <div class="kit-step-tip">💡 Ideal para pasar de la investigación a la acción en segundos.</div>
        </div>
        <span class="kit-step-xp">+70 XP</span>
      </li>
    </ul>

    <div class="kit-xp-total" id="nlm-xp-total">
      <span>🏆 XP Ganado en esta Estrategia</span>
      <span id="nlm-xp-count">0 / 250 XP</span>
    </div>
  </div>
</div>

<div id="m-nlm-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">📓</span><span class="exercise-title">Reto Final: Tu Oráculo Documental</span></div>
    <div class="mission-instructions" style="background:rgba(251,191,36,0.1);padding:20px;border-radius:12px;border-left:4px solid #f59e0b;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Crea un cuaderno nuevo y carga al menos 2 fuentes sobre el mismo tema.</li>
        <li>Responde 3 preguntas con cita exacta de página.</li>
        <li>Genera un resumen ejecutivo unificado de máximo 150-200 palabras.</li>
        <li>Genera también el Audio Overview y anota 3 ideas accionables que sacaste del audio.</li>
      </ol>
    </div>
    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px; color:#cbd5e1; font-size:0.82rem; line-height:1.8; margin-bottom:14px;">
      <b style="color:#fbbf24;">Entregable esperado:</b><br>
      1. Tres respuestas con cita.<br>
      2. Un resumen ejecutivo listo para compartir.<br>
      3. Tres aprendizajes obtenidos del Audio Overview.<br>
      4. Una nota final: qué parte todavía revisarías en el documento original.
    </div>
    <textarea class="premium-textarea" placeholder="Escribe aquí las 3 ideas accionables que sacaste del Audio Overview o la parte del documento que revisarías otra vez..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Investigador Digital 🎓</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-notebooklm" style="width:100%;margin-top:15px;background:#f59e0b;color:#000;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú Bonus</button>
</div>`;


  const nlmInstance = {
    init: function(app) {
      console.log('Initialized module-notebooklm.js');
      const target = document.getElementById('module-notebooklm');
      if (target && !target.querySelector('.module-header')) {
        target.insertAdjacentHTML('afterbegin', nlmHTML);
        setupNlmHandlers(target);
      }
    }
  };

  function setupNlmHandlers(parent) {
      const tabs = parent.querySelectorAll('.tab-btn');
      const contents = parent.querySelectorAll('.ag-content');
      
      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              tabs.forEach(t => t.classList.remove('active'));
              contents.forEach(c => c.classList.remove('active'));
              tab.classList.add('active');
              const targetId = tab.dataset.tab;
              const content = parent.querySelector('#' + targetId);
              if (content) content.classList.add('active');
          });
      });

      window.nlmCopyAsset = function(btn, text) {
        navigator.clipboard.writeText(text).catch(() => {});
        const origText = btn.innerHTML;
        btn.innerHTML = '✅ Copiado';
        btn.style.color = '#fbbf24';
        setTimeout(() => {
          btn.innerHTML = origText;
          btn.style.color = '';
        }, 2000);
        if (window.app) window.app.addXP(5);
      };

      window.nlmCheckStep = function(li, index, xp) {
        if (li.classList.contains('completed')) return;
        li.classList.add('completed');
        li.style.borderLeft = '4px solid #10b981';
        li.style.background = 'rgba(16,185,129,0.05)';
        if (window.app) window.app.addXP(xp);
        
        // Animación de la marca de verificación
        const check = li.querySelector('.kit-step-check');
        if (check) {
          check.style.background = '#10b981';
          check.style.borderColor = '#10b981';
          check.style.color = '#fff';
          check.style.transform = 'scale(1.2)';
        }

        // Actualizar contador total
        const countElem = document.getElementById('nlm-xp-count');
        if (countElem) {
          const current = parseInt(countElem.innerText.split(' / ')[0]) + xp;
          countElem.innerText = current + ' / 250 XP';
        }
      };

      // Simulación de Chat
      window.mNlmChat = function() {
        const input = document.getElementById('nlm-input-val');
        const box = document.getElementById('nlm-chat-box');
        if (!input || !box || input.value.trim() === '') return;

        const uMsg = document.createElement('div');
        uMsg.className = 'm-nlm-msg user';
        uMsg.innerText = input.value;
        box.appendChild(uMsg);
        const q = input.value;
        input.value = '';
        box.scrollTop = box.scrollHeight;

        setTimeout(() => {
          const aiMsg = document.createElement('div');
          aiMsg.className = 'm-nlm-msg ai';
          aiMsg.innerHTML = '<div class="m-nlm-spinner-small"></div> Analizando fuentes...';
          box.appendChild(aiMsg);
          box.scrollTop = box.scrollHeight;

          setTimeout(() => {
            let res = "Basado en los documentos cargados: ";
            if (q.toLowerCase().includes('presupuesto')) {
              res = "El Presupuesto Anual 2024 (fuente 2) indica un total de 667M. Se detecta una desviación crítica en 'Acabados' [pág. 12].";
            } else if (q.toLowerCase().includes('transparencia') || q.toLowerCase().includes('ley')) {
              res = "La Ley 1712 de Transparencia (fuente 1) obliga en su Art. 9 a publicar proactivamente la información contractual [pág. 4].";
            } else {
              res = "He encontrado información relevante en la Directiva 03 sobre la optimización de recursos y la urgencia de contratación [pág. 2].";
            }
            aiMsg.innerHTML = res + " <span class='m-nlm-citation' title='Ver fuente' onclick='alert(\"Abriendo PDF en pág. correlacionada...\")'>[1]</span>";
            box.scrollTop = box.scrollHeight;
            if (window.app) window.app.addXP(20);
          }, 1500);
        }, 500);
      };

      // Simulación Audio
      let playing = false;
      window.mNlmPlayAudio = function() {
        const btn = document.getElementById('nlm-play');
        const wave = document.getElementById('nlm-wave');
        const title = document.getElementById('nlm-a-title');
        
        if (!playing) {
          playing = true;
          btn.innerText = '⏸';
          wave.classList.add('active');
          title.innerText = 'Reproduciendo Audio Overview...';
          if (window.app) window.app.addXP(30);
        } else {
          playing = false;
          btn.innerText = '▶';
          wave.classList.remove('active');
          title.innerText = 'Audio Overview Pausado';
        }
      };
  }

  return nlmInstance;
})();
