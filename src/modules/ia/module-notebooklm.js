window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-notebooklm'] = (function() {
/* ═══════════════════════════════════════════
   MÓDULO BONUS: NotebookLM
   Versión Enriquecida — Simulador RAG y Audio Overview
   ═══════════════════════════════════════════ */

  const nlmHTML = `
<style>
  .m-nlm-card { background: #fdfbf7; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; position: relative; overflow: hidden; margin-bottom: 20px;}
  .m-nlm-header-bg { position: absolute; top:0; left:0; width:100%; height:80px; background: linear-gradient(180deg, rgba(251,191,36,0.1) 0%, transparent 100%); pointer-events:none; }
  
  .m-nlm-layout { display: flex; gap: 20px; margin-top: 15px; flex-wrap: wrap; }
  
  /* Panel Izquierdo: Fuentes */
  .m-nlm-sources { flex: 1; min-width: 250px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
  .m-nlm-title { font-weight: 700; color: #1e293b; margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between; }
  .m-nlm-source-item { display: flex; align-items: center; gap: 10px; background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 10px; transition: all 0.2s; cursor: pointer;}
  .m-nlm-source-item:hover { border-color: #fbbf24; background: #fffbeb; }
  .m-nlm-source-icon { font-size: 1.5rem; }
  .m-nlm-source-text { font-size: 0.8rem; color: #475569; font-weight: 600; flex: 1; }
  
  /* Botón subir */
  .m-nlm-upload-btn { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; border: 2px dashed #cbd5e1; background: transparent; color: #64748b; padding: 12px; border-radius: 8px; cursor: pointer; transition: 0.2s; font-weight: 600;}
  .m-nlm-upload-btn:hover { border-color: #fbbf24; color: #d97706; background: rgba(251,191,36,0.05); }

  /* Panel Derecho: Audio Overview */
  .m-nlm-chat { flex: 2; min-width: 300px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
  
  .m-nlm-audio-card { background: #1e293b; border-radius: 12px; padding: 20px; color: #fff; text-align: center; margin-bottom: 20px; position:relative; overflow:hidden;}
  .m-nlm-audio-wave { position:absolute; bottom:0; left:0; width:100%; height:30%; background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10 Q 25 20 50 10 T 100 10 L 100 20 L 0 20 Z" fill="rgba(251,191,36,0.3)"/></svg>') repeat-x; background-size: 50% 100%; animation: wave 3s linear infinite; display:none;}
  @keyframes wave { 0% {background-position: 0 0;} 100% {background-position: 100% 0;} }
  
  .m-nlm-play-btn { width: 50px; height: 50px; border-radius: 50%; background: #fbbf24; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; cursor: pointer; font-size: 1.5rem; color: #000; border: none; box-shadow: 0 4px 10px rgba(251,191,36,0.4); transition: transform 0.2s; z-index:2; position:relative;}
  .m-nlm-play-btn:hover { transform: scale(1.1); }
  
  .m-nlm-audio-title { font-weight: 700; font-size: 1.1rem; margin-bottom: 5px; z-index:2; position:relative;}
  .m-nlm-audio-sub { color: #94a3b8; font-size: 0.8rem; z-index:2; position:relative;}
  
  .m-nlm-chat-box { flex: 1; padding: 10px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem;}
  .m-nlm-msg { padding: 12px; border-radius: 8px; max-width: 85%; line-height: 1.5; position:relative;}
  .m-nlm-msg.user { background: #f1f5f9; align-self: flex-end; color: #1e293b; border-bottom-right-radius: 0; }
  .m-nlm-msg.ai { background: #fffbeb; border: 1px solid #fde68a; align-self: flex-start; color: #92400e; border-bottom-left-radius: 0; }
  .m-nlm-citation { display:inline-block; background: #fbbf24; color: #000; font-size: 0.65rem; padding: 1px 6px; border-radius: 10px; margin-left: 5px; cursor:pointer;}
  
  .m-nlm-input-area { display: flex; gap: 10px; margin-top: 15px; border-top: 1px solid #e2e8f0; padding-top: 15px;}
  .m-nlm-input { flex: 1; border: 1px solid #cbd5e1; border-radius: 20px; padding: 10px 15px; outline: none; transition: 0.2s; }
  .m-nlm-input:focus { border-color: #fbbf24; }
</style>

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(251,191,36,0.1), rgba(255,255,255,0.05)); border: 1px solid rgba(251,191,36,0.3);">
  <div class="module-number gamer-badge" style="background:#f59e0b;color:#fff;">BONUS TOOL</div>
  <h2 class="module-title glow-text" style="color:#f59e0b;">📓 NotebookLM: Tu Asistente de Investigación</h2>
  <p class="module-description" style="color:#f8fafc;">Sube hasta 50 documentos (PDFs, PPTs, Enlaces, YouTube) y Google creará un asistente que <strong>solo sabe lo que tú le diste</strong>. Evita alucinaciones citando siempre la página exacta.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 20 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Investigador Digital</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m-nlm-concept">📚 RAG vs Prompting</button>
  <button class="tab-btn" data-tab="m-nlm-lab">✨ Simulador Notebook</button>
  <button class="tab-btn" data-tab="m-nlm-cases">🧭 Casos Prácticos</button>
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

<!-- TAB 2: LABORATORIO -->
<div id="m-nlm-lab" class="ag-content">
  <div class="section-card animate-in m-nlm-card">
    <div class="m-nlm-header-bg"></div>
    <h3 style="position:relative;z-index:2;margin-top:0;color:#1e293b;"><span class="icon">✨</span> Simulador: El "Deep Dive"</h3>
    <p style="font-size:0.85rem;color:#475569;position:relative;z-index:2;">Haz clic en <b>Generar Podcast</b> o pregunta algo en el chat basado en los documentos pre-cargados a la izquierda.</p>
    
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
          *En la vida real puedes enlazar todo tu Drive aquí.*
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

<!-- TAB 3: ESTRATEGIA REAL -->
<div id="m-nlm-cases" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#fbbf24; margin-top:0;">🧭 Tres Formas de Sacarle Valor a NotebookLM</h3>
    <p style="font-size:0.85rem; color:#94a3b8;">NotebookLM brilla cuando tienes fuentes cerradas y necesitas respuestas con trazabilidad. Estos tres casos te muestran exactamente cuándo usarlo.</p>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:18px;">
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#fbbf24; margin-bottom:8px;">CASO 1 · CONSULTA CON CITA</div>
        <h4 style="margin:0 0 8px; color:#e2e8f0;">Responder una duda puntual con página exacta</h4>
        <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Úsalo cuando alguien te pida: "¿Dónde dice eso?" y no quieras responder de memoria.</p>
        <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
          1. Crea un cuaderno.<br>
          2. Sube 1 o 2 PDFs.<br>
          3. Haz una pregunta cerrada.<br>
          4. Abre la cita naranja y verifica el párrafo.
        </div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'En base únicamente a las fuentes cargadas, responde esta pregunta con cita exacta de página. Si la información no aparece, dilo de forma explícita y no inventes nada. Pregunta: [ESCRIBE AQUÍ TU DUDA].')">📋 Copiar Prompt del Caso 1</button>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#fbbf24; margin-bottom:8px;">CASO 2 · SÍNTESIS DE VARIAS FUENTES</div>
        <h4 style="margin:0 0 8px; color:#e2e8f0;">Unificar 3 documentos en un solo resumen ejecutivo</h4>
        <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Ideal para proyectos, auditorías, informes o procesos con documentación repartida.</p>
        <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
          1. Sube 3 fuentes del mismo tema.<br>
          2. Pide coincidencias y contradicciones.<br>
          3. Solicita resumen en lenguaje simple.<br>
          4. Revisa que las conclusiones tengan cita.
        </div>
        <button class="kit-copy-btn" style="margin-top:10px;" onclick="nlmCopyAsset(this, 'Usa todas las fuentes cargadas para construir un resumen ejecutivo de máximo 200 palabras. Incluye: 1) puntos en común, 2) diferencias o contradicciones, 3) riesgos o vacíos. Cada afirmación importante debe quedar respaldada por una cita.')">📋 Copiar Prompt del Caso 2</button>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#fbbf24; margin-bottom:8px;">CASO 3 · AUDIO OVERVIEW</div>
        <h4 style="margin:0 0 8px; color:#e2e8f0;">Convertir un documento denso en una explicación audible</h4>
        <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Muy útil para estudiar normas, manuales técnicos o informes que nadie quiere leer completos.</p>
        <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
          1. Carga la fuente principal.<br>
          2. Genera el Audio Overview.<br>
          3. Escúchalo completo.<br>
          4. Extrae 3 ideas accionables del audio.
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

<!-- TAB 4: ESTRATEGIA REAL -->
<div id="m-nlm-estrategia" class="ag-content">
  <style>
    .kit-header { background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.03)); border: 1px solid rgba(251,191,36,0.4); border-radius: 12px; padding: 20px; margin-bottom: 20px; }
    .kit-badge { background: #f59e0b; color: #000; padding: 3px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 800; display: inline-block; margin-bottom: 8px; }
    .kit-title { font-size: 1.1rem; font-weight: 800; color: #f59e0b; margin: 0 0 6px; }
    .kit-sub { font-size: 0.85rem; color: #94a3b8; margin: 0; }
    .kit-assets { display: flex; flex-direction: column; gap: 10px; margin: 16px 0; }
    .kit-asset { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px 15px; display: flex; align-items: center; gap: 12px; }
    .kit-asset-icon { font-size: 1.4rem; flex-shrink: 0; }
    .kit-asset-body { flex: 1; }
    .kit-asset-name { font-weight: 700; font-size: 0.85rem; color: #e2e8f0; margin: 0 0 2px; }
    .kit-asset-desc { font-size: 0.75rem; color: #64748b; margin: 0; }
    .kit-copy-btn { background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.3); color: #f59e0b; padding: 5px 12px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: 0.2s; }
    .kit-copy-btn:hover { background: rgba(251,191,36,0.25); }
    .kit-copy-btn.copied { background: rgba(16,185,129,0.2); border-color: #10b981; color: #10b981; }
    .kit-steps { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
    .kit-step { display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); cursor: pointer; transition: 0.2s; }
    .kit-step:hover { background: rgba(255,255,255,0.03); }
    .kit-step.done { border-color: rgba(16,185,129,0.4); background: rgba(16,185,129,0.05); }
    .kit-step-check { width: 20px; height: 20px; border: 2px solid #475569; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; margin-top: 2px; transition: 0.2s; }
    .kit-step.done .kit-step-check { background: #10b981; border-color: #10b981; color: #fff; }
    .kit-step-body { flex: 1; }
    .kit-step-title { font-weight: 700; font-size: 0.85rem; color: #e2e8f0; margin: 0 0 4px; }
    .kit-step-detail { font-size: 0.78rem; color: #64748b; margin: 0; line-height: 1.5; }
    .kit-step-tip { font-size: 0.72rem; background: rgba(251,191,36,0.08); border-left: 2px solid #f59e0b; padding: 4px 8px; border-radius: 0 4px 4px 0; color: #fbbf24; margin-top: 6px; }
    .kit-step-xp { font-size: 0.7rem; font-weight: 800; color: #10b981; margin-left: auto; flex-shrink: 0; padding-top: 2px; }
    .kit-copyblock { background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 12px 14px; font-family: monospace; font-size: 0.78rem; color: #a78bfa; line-height: 1.6; white-space: pre-wrap; position: relative; }
    .kit-result-box { background: rgba(16,185,129,0.07); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; padding: 14px; margin-top: 16px; }
    .kit-xp-total { background: linear-gradient(135deg, #10b981, #059669); color: #fff; border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; margin-top: 16px; font-weight: 800; }
  </style>

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
        <button class="kit-copy-btn" onclick="nlmCopyAsset(this, 'notebooklm.google.com → Nuevo Cuaderno → Fuentes → Subir PDF → Panel derecho: Audio Overview → Generar')">📋 Copiar Ruta</button>
      </div>
    </div>

    <!-- Checklist de Pasos -->
    <h4 style="color:#f59e0b; margin: 16px 0 10px;">✅ Ejecuta la Estrategia</h4>
    <ul class="kit-steps" id="nlm-steps">
      <li class="kit-step" onclick="nlmCheckStep(this, 0, 30)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Abre notebooklm.google.com e inicia sesión con tu cuenta Google</p>
          <p class="kit-step-detail">Haz clic en el botón azul "Nuevo cuaderno". Ponle nombre: <b>"Auditoría Contratos 2025"</b>.</p>
          <div class="kit-step-tip">💡 Funciona 100% gratis — no necesitas plan de pago.</div>
        </div>
        <span class="kit-step-xp">+30 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 1, 40)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Sube mínimo 2 documentos de tu entidad como fuentes</p>
          <p class="kit-step-detail">Puede ser un contrato en PDF, el Estatuto de Contratación (URL arriba) o cualquier política interna. O usa el link copiado del Maletín.</p>
          <div class="kit-step-tip">💡 Acepta PDFs, DOCX, TXT, URLs y hasta videos de YouTube.</div>
        </div>
        <span class="kit-step-xp">+40 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 2, 50)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Pega el Prompt Maestro #1 en el chat y analiza los riesgos</p>
          <p class="kit-step-detail">Copia el prompt de búsqueda de cláusulas (botón del Maletín) y pégalo en el campo de chat de NotebookLM. Observa cómo cada respuesta viene acompañada de una <b>cita con número de página</b>.</p>
          <div class="kit-step-tip">💡 Haz clic en la cita naranja para ir directo al párrafo en el PDF.</div>
        </div>
        <span class="kit-step-xp">+50 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 3, 40)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Genera el Resumen Ejecutivo con el Prompt #2</p>
          <p class="kit-step-detail">Usa el Prompt Maestro #2. El resultado debe ser un texto listo para enviárselo directamente a tu jefe sin edición.</p>
          <div class="kit-step-tip">💡 Si el resumen es muy largo, añade: "Hazlo más corto, máximo 150 palabras".</div>
        </div>
        <span class="kit-step-xp">+40 XP</span>
      </li>
      <li class="kit-step" onclick="nlmCheckStep(this, 4, 90)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Genera el Audio Overview del contrato</p>
          <p class="kit-step-detail">En el panel derecho de NotebookLM, busca la sección <b>"Audio Overview"</b> y haz clic en "Generar". Espera 2-3 minutos. Escucha cómo dos locutores analizan tu contrato como un podcast.</p>
          <div class="kit-step-tip">💡 Resultado esperado: audio de 8-12 minutos con tono conversacional y datos del documento.</div>
        </div>
        <span class="kit-step-xp">+90 XP</span>
      </li>
    </ul>

    <div class="kit-xp-total" id="nlm-xp-total">
      <span>🏆 XP Ganado en esta Estrategia</span>
      <span id="nlm-xp-count">0 / 250 XP</span>
    </div>
  </div>
</div>

<!-- TAB 5: RETO FINAL -->
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
</div>

<script>
  // Tabs logic
  setTimeout(() => {
    const parent = document.getElementById('module-notebooklm');
    if(!parent) return;
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
  }, 300);

  // Kit de Estrategia Real
  window.nlmCopyAsset = function(btn, text) {
    navigator.clipboard.writeText(text).catch(() => {});
    btn.textContent = '✅ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = btn.textContent.includes('URL') ? '🔗 Copiar URL' : '📋 Copiar Prompt'; btn.classList.remove('copied'); }, 2500);
    if(window.app) window.app.addXP(5);
  };

  let nlmStepXP = [false, false, false, false, false];
  let nlmTotalXP = 0;
  const nlmStepValues = [30, 40, 50, 40, 90];

  window.nlmCheckStep = function(el, idx, xp) {
    if(nlmStepXP[idx]) return;
    nlmStepXP[idx] = true;
    el.classList.add('done');
    nlmTotalXP += xp;
    if(window.app) window.app.addXP(xp);
    const counter = document.getElementById('nlm-xp-count');
    if(counter) counter.textContent = nlmTotalXP + ' / 250 XP';
    const totalBox = document.getElementById('nlm-xp-total');
    if(totalBox && nlmTotalXP >= 250) totalBox.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
  };

  // Funciones Interactivas
  window.mNlmAddSource = function(btn) {
    const p = btn.parentElement;
    const d = document.createElement('div');
    d.className = 'm-nlm-source-item';
    d.innerHTML = '<span class="m-nlm-source-icon">🌐</span><span class="m-nlm-source-text">Conocimiento_Nuevo.txt</span>';
    p.insertBefore(d, btn);
    btn.innerHTML = '<span>✔️</span> Fuente Agregada';
    btn.style.borderColor = '#10b981';
    btn.style.color = '#10b981';
    if(window.app) window.app.addXP(10);
  };

  window.mNlmPlayAudio = function() {
    const btn = document.getElementById('nlm-play');
    const wave = document.getElementById('nlm-wave');
    const title = document.getElementById('nlm-a-title');
    const sub = document.getElementById('nlm-a-sub');
    
    if(btn.innerText === '▶') {
      btn.innerText = '⏸';
      title.innerText = "Deep Dive en Progreso...";
      sub.innerText = "Simulando voces de los presentadores...";
      wave.style.display = 'block';
      if(window.app) window.app.addXP(25);
    } else {
      btn.innerText = '▶';
      wave.style.display = 'none';
      title.innerText = "Audio Pausado";
    }
  };

  window.mNlmChat = function() {
    const input = document.getElementById('nlm-input-val');
    const box = document.getElementById('nlm-chat-box');
    const val = input.value.trim();
    if(!val) return;
    
    // User message
    box.innerHTML += \`<div class="m-nlm-msg user">\${val}</div>\`;
    input.value = '';
    
    // Scroll
    box.scrollTop = box.scrollHeight;
    
    setTimeout(() => {
      let r = '';
      if(val.toLowerCase().includes('presupuesto') || val.toLowerCase().includes('2024')) {
        r = 'De acuerdo al documento <span class="m-nlm-citation" onclick="alert(\\'Iría a Pág 14 del CSV\\')">2</span>, el presupuesto 2024 asigna mayor capital a infraestructura respecto a 2023. Esto contradice la matriz de la <span class="m-nlm-citation" onclick="alert(\\'Iría al Art. 5\\')">1</span> Ley 1712 que pedía austeridad.';
      } else {
        r = 'Basado en las directrices del documento de Transparencia <span class="m-nlm-citation" onclick="alert(\\'Hiciste click en la cita: Pág 3, Párrafo 2\\')">1</span>, tu entidad debe publicar el extracto en los primeros 5 días hábiles.';
      }
      box.innerHTML += \`<div class="m-nlm-msg ai">\${r}</div>\`;
      box.scrollTop = box.scrollHeight;
      if(window.app) window.app.addXP(15);
    }, 1000);
  };
</script>
`;

  const target = document.getElementById('module-notebooklm');
  if (target) {
    target.innerHTML = nlmHTML;
  }
  return { init: function(app) { console.log('Initialized module-notebooklm.js'); } };
})();
