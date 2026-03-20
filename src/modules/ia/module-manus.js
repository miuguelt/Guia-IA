/* ═══════════════════════════════════════════
   MÓDULO BONUS: Manus AI (Agente Investigador)
   Versión "Titan Investigator" — DNA v31.4
   ═══════════════════════════════════════════ */
(function() {
  const manusHTML = `
<style>
  :root {
    --ma-primary: #f43f5e;
    --ma-secondary: #fb7185;
    --ma-bg: #09090b;
    --ma-border: #27272a;
  }

  .m-ma-container { color: #e4e4e7; font-family: 'Inter', sans-serif; }
  .m-ma-card { background: var(--ma-bg); border: 1px solid var(--ma-border); border-radius: 16px; padding: 25px; margin-bottom: 20px; position: relative; overflow: hidden; }
  .m-ma-header-bg { position: absolute; top:0; left:0; width:100%; height:100px; background: linear-gradient(180deg, rgba(244,63,94,0.1) 0%, transparent 100%); pointer-events:none; }
  .m-ma-hero { background: linear-gradient(135deg, rgba(244,63,94,0.12), rgba(251,113,133,0.05)); border: 1px solid rgba(244,63,94,0.26); border-radius: 18px; padding: 22px; margin-bottom: 22px; }
  .m-ma-chip-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; }
  .m-ma-chip { background: rgba(255,255,255,0.04); border: 1px solid rgba(244,63,94,0.22); color:#fecdd3; border-radius:999px; padding:8px 12px; font-size:0.75rem; font-weight:700; }
  .m-ma-grid-3 { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:15px; }
  .m-ma-panel { background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:18px; }
  .m-ma-note { background: rgba(244,63,94,0.08); border-left:3px solid var(--ma-primary); border-radius:10px; padding:12px 14px; color:#fda4af; font-size:0.8rem; line-height:1.7; }
  .m-ma-step { display:flex; gap:12px; align-items:flex-start; padding:12px 0; border-top:1px solid rgba(255,255,255,0.05); }
  .m-ma-step:first-child { border-top:none; padding-top:0; }
  .m-ma-step-badge { width:28px; height:28px; border-radius:999px; background:rgba(244,63,94,0.18); border:1px solid rgba(244,63,94,0.35); color:#fb7185; display:flex; align-items:center; justify-content:center; font-size:0.78rem; font-weight:800; flex-shrink:0; }

  /* Tabs Bar */
  .premium-tab-ma { background: none; border: none; padding: 10px 15px; color: #71717a; cursor: pointer; border-bottom: 2px solid transparent; transition: 0.3s; font-weight: 600; white-space: nowrap; }
  .premium-tab-ma.active { color: var(--ma-primary); border-bottom-color: var(--ma-primary); }

  /* Agent UI */
  .m-ma-agent-window { border: 1px solid var(--ma-border); border-radius: 12px; background: #000; overflow: hidden; margin-top: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  .m-ma-win-header { background: #18181b; padding: 10px 15px; border-bottom: 1px solid var(--ma-border); display: flex; justify-content: space-between; align-items: center; }
  
  .m-ma-viewport { display: grid; grid-template-columns: 1fr 280px; height: 350px; }
  .m-ma-browser-view { background: #fff; position: relative; border-right: 1px solid var(--ma-border); overflow: hidden; }
  .m-ma-logs-view { background: #09090b; padding: 15px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #a1a1aa; }
  
  .m-ma-thought { display: flex; gap: 8px; margin-bottom: 10px; opacity: 0; transform: translateX(-10px); transition: 0.4s; }
  .m-ma-thought.show { opacity: 1; transform: translateX(0); }
  .m-ma-t-icon { color: var(--ma-primary); font-weight: bold; }

  /* Grid 2 */
  .m-ma-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
  @media (max-width: 900px) { .m-ma-grid-3 { grid-template-columns:1fr; } }
  @media (max-width: 768px) { .m-ma-grid { grid-template-columns: 1fr; } }

  .ma-btn-glow { 
    background: linear-gradient(135deg, #f43f5e 0%, #fb7185 100%); 
    color: white; border: none; padding: 12px 24px; border-radius: 8px;
    font-weight: 700; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 15px rgba(244,63,94,0.3);
  }
  .ma-btn-glow:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(244,63,94,0.5); }
</style>

<div class="m-ma-container">
  <div class="module-header premium-header" style="border: 1px solid rgba(244,63,94,0.3); background: rgba(244,63,94,0.02);">
    <div class="module-number gamer-badge" style="background:var(--ma-primary);color:#fff;">BONUS: INVESTIGADOR SOBERANO</div>
    <h2 class="module-title glow-text" style="color:#fb7185;">🐙 <span style="color:#f43f5e;">Manus AI:</span> El Oráculo Digital</h2>
    <p class="module-description">Domina el arte de la investigación autónoma. Manus no solo busca, <b>navega, extrae y sintetiza</b> el conocimiento del mundo real.</p>
  </div>

  <div class="m-ma-hero">
    <div style="font-size:0.76rem; font-weight:800; color:#fb7185; margin-bottom:8px;">MAPA MENTAL DEL MÓDULO</div>
    <h3 style="margin:0 0 8px; color:#fff;">Manus sirve cuando el trabajo no cabe en una sola respuesta.</h3>
    <p style="margin:0; color:#d4d4d8; line-height:1.8;">Si necesitas abrir varias fuentes, verificar hallazgos, comparar páginas, extraer tablas o dejar un entregable listo, un agente navegador tiene ventaja sobre un chat tradicional. La idea no es pedir "investiga esto" y confiar ciegamente, sino diseñar la tarea para que el agente recorra el camino correcto.</p>
    <div class="m-ma-chip-row">
      <span class="m-ma-chip">Navega sitios reales</span>
      <span class="m-ma-chip">Lee PDFs y tablas</span>
      <span class="m-ma-chip">Compara varias fuentes</span>
      <span class="m-ma-chip">Devuelve evidencia usable</span>
      <span class="m-ma-chip">Ideal para vigilancia e investigación</span>
    </div>
  </div>

  <div class="ag-tabs game-tabs" style="display:flex; overflow-x:auto; gap:5px; margin-bottom:20px; border-bottom:1px solid #27272a;">
    <button class="tab-btn premium-tab-ma active" data-tab="m-ma-vision">🔱 Vision &amp; Use</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-decider">🧭 Cuándo Usarlo</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-social">🔍 Social Intel</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-finance">📊 Finanzas Pro</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-lab">🐙 Simulador</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-cases">🧭 Casos Prácticos</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-prompts">🧠 Prompts</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-antipatterns">🚫 Errores</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-estrategia">🎯 Estrategia Real</button>
    <button class="tab-btn premium-tab-ma" data-tab="m-ma-mission">🏆 Reto Final</button>
  </div>

  <!-- TAB 1: COMPUTER USE VISION -->
  <div id="m-ma-vision" class="ag-content active">
    <div class="section-card animate-in">
        <h3>🖱️ El Salto a la Visión de Computador</h3>
        <p>Manus pertenece a una nueva clase de modelos que pueden "ver" la interfaz de usuario. No dependen solo de código HTML, sino de la disposición visual de los botones.</p>
        <div class="m-ma-grid">
            <div class="m-ma-card">
                <h4 style="color:var(--ma-primary);">👁️ Interpretación Visual</h4>
                <p style="font-size:0.85rem; color:#a1a1aa;">El agente toma capturas de pantalla constantes y localiza coordenadas (x, y) de cada botón.</p>
            </div>
            <div class="m-ma-card">
                <h4 style="color:var(--ma-primary);">🧠 Razonamiento Espacial</h4>
                <p style="font-size:0.85rem; color:#a1a1aa;">Si el botón "Login" no está en el código, Manus lo busca visualmente por su forma y color.</p>
            </div>
        </div>
        <div class="m-ma-note" style="margin-top:18px;">La lección clave: Manus no reemplaza tu criterio. Tú defines objetivo, límites, fuentes válidas y formato de salida. El agente ejecuta la parte tediosa: abrir, revisar, filtrar y consolidar.</div>
    </div>
  </div>

  <div id="m-ma-decider" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="margin-top:0;">🧭 Cuándo vale la pena usar Manus</h3>
      <p style="color:#a1a1aa;">La mejor decisión no es usar el agente siempre, sino activarlo cuando hay navegación real, varias fuentes o evidencia dispersa.</p>
      <div class="m-ma-grid-3" style="margin-top:18px;">
        <div class="m-ma-panel">
          <div style="font-size:0.72rem; font-weight:800; color:#fb7185; margin-bottom:8px;">SÍ</div>
          <h4 style="margin:0 0 8px; color:#fff;">Investigación con fuentes vivas</h4>
          <p style="margin:0; font-size:0.8rem; color:#a1a1aa;">Cuando hay que abrir páginas, seguir enlaces, descargar documentos y devolver hallazgos verificables.</p>
        </div>
        <div class="m-ma-panel">
          <div style="font-size:0.72rem; font-weight:800; color:#fb7185; margin-bottom:8px;">SÍ</div>
          <h4 style="margin:0 0 8px; color:#fff;">Comparativas y monitoreo</h4>
          <p style="margin:0; font-size:0.8rem; color:#a1a1aa;">Úsalo para rastrear cambios, nuevas publicaciones, convocatorias, precios, regulaciones o señales competitivas.</p>
        </div>
        <div class="m-ma-panel">
          <div style="font-size:0.72rem; font-weight:800; color:#fb7185; margin-bottom:8px;">NO SIEMPRE</div>
          <h4 style="margin:0 0 8px; color:#fff;">Preguntas simples o ideación</h4>
          <p style="margin:0; font-size:0.8rem; color:#a1a1aa;">Si solo quieres una explicación, lluvia de ideas o resumen corto, un chat normal será más rápido y barato.</p>
        </div>
      </div>
      <div class="m-ma-card" style="margin-top:18px;">
        <h4 style="margin-top:0; color:#fff;">Ruta de decisión rápida</h4>
        <div class="m-ma-step">
          <div class="m-ma-step-badge">1</div>
          <div><b style="color:#fff;">Pregunta si hace falta navegar.</b><div style="font-size:0.8rem; color:#a1a1aa;">Si la tarea exige entrar a sitios o abrir documentos, Manus gana puntos.</div></div>
        </div>
        <div class="m-ma-step">
          <div class="m-ma-step-badge">2</div>
          <div><b style="color:#fff;">Define evidencia mínima.</b><div style="font-size:0.8rem; color:#a1a1aa;">Pide enlace, fecha, cita o tabla. Sin eso, el resultado queda bonito pero débil.</div></div>
        </div>
        <div class="m-ma-step">
          <div class="m-ma-step-badge">3</div>
          <div><b style="color:#fff;">Cierra con un formato útil.</b><div style="font-size:0.8rem; color:#a1a1aa;">Tabla, boletín, checklist o informe ejecutivo. No solo “hazme un resumen”.</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 2: SOCIAL INTEL -->
  <div id="m-ma-social" class="ag-content">
    <div class="section-card animate-in">
        <h3>🔍 Inteligencia Social Autónoma</h3>
        <p>Manus puede navegar redes sociales para detectar tendencias antes de que lleguen a las noticias corporativas.</p>
        <div class="m-ma-card" style="border-style:dashed;">
            <h5>Ejemplo de Tarea:</h5>
            <p style="font-size:0.85rem; font-style:italic;">"Entra a X (Twitter), busca qué dicen los ingenieros de IA sobre el nuevo motor de Mistral y hazme un resumen de los 5 puntos más técnicos."</p>
            <button class="ma-btn-glow" style="font-size:0.75rem; padding:8px 16px;" onclick="mMaSimScenario('social')">Ver Proceso</button>
        </div>
    </div>
  </div>

  <!-- TAB 3: FINANZAS PRO -->
  <div id="m-ma-finance" class="ag-content">
    <div class="section-card animate-in">
        <h3>📊 Análisis Financiero de Nivel 2</h3>
        <p>Manus es experto en extraer datos de PDFs complejos de reportes financieros (10-K, 10-Q) que bloquearían a un ChatBot normal.</p>
        <div class="m-ma-grid">
            <div class="m-ma-card">
                <b style="color:#10b981;">Extraer Tablas</b>
                <p style="font-size:0.8rem; color:#a1a1aa;">Convierte imágenes de reportes anuales en CSVs listos para análisis.</p>
            </div>
            <div class="m-ma-card">
                <b style="color:#10b981;">Sintetizar Riesgos</b>
                <p style="font-size:0.8rem; color:#a1a1aa;">Busca palabras clave en la sección de "Riesgos" de documentos legales.</p>
            </div>
        </div>
        <button class="ma-btn-glow" style="width:100%; margin-top:15px;" onclick="mMaSimScenario('finance')">Simular Análisis Financiero</button>
    </div>
  </div>

  <!-- TAB 4: LABORATORIO -->
  <div id="m-ma-lab" class="ag-content">
    <div class="section-card animate-in">
        <h3 style="margin-top:0;">🐙 Hands-On: El Oráculo en Acción</h3>
        <p style="font-size:0.85rem; color:#a1a1aa;">Observa la orquestación visual en tiempo real.</p>
        
        <div class="m-ma-agent-window">
            <div class="m-ma-win-header">
                <div style="font-weight:bold; color:var(--ma-primary); font-size:0.8rem;">MANUS AGENT [ACTIVE]</div>
                <div style="font-size:0.7rem; color:#52525b;" id="ma-win-url">https://investor.nvidia.com</div>
            </div>
            <div class="m-ma-viewport">
                <div class="m-ma-browser-view" id="ma-browser-v">
                    <div style="display:flex; height:100%; align-items:center; justify-content:center; color:#18181b; font-weight:700; text-align:center;">
                        Ready for Investigation...
                    </div>
                </div>
                <div class="m-ma-logs-view" id="ma-logs-v">
                    <div style="color:var(--ma-primary);">// Init Manus Engine...</div>
                </div>
            </div>
        </div>
        <div style="margin-top:15px; display:flex; gap:10px;">
            <input type="text" id="ma-input-v" class="premium-textarea" style="height:45px;" placeholder="Pide una investigación...">
            <button class="ma-btn-glow" onclick="mMaRunAgent()">Ejecutar</button>
        </div>
    </div>
  </div>

  <div id="m-ma-cases" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="color:#fb7185; margin-top:0;">🧭 Tres Tareas Donde un Agente Navegador Marca Diferencia</h3>
      <p style="font-size:0.85rem; color:#a1a1aa;">Manus tiene más valor cuando no basta con responder desde memoria: hay que abrir sitios, revisar contenido y devolver un resultado estructurado.</p>
      <div class="m-ma-grid" style="margin-top:18px;">
        <div class="m-ma-card">
          <div style="font-size:0.72rem; font-weight:800; color:#fb7185; margin-bottom:8px;">CASO 1 · MONITOREO</div>
          <h4 style="margin:0 0 8px; color:#fff;">Vigilar una web oficial</h4>
          <p style="font-size:0.78rem; color:#a1a1aa;">Diario Oficial, SECOP, convocatorias o portales regulatorios.</p>
          <div style="font-size:0.76rem; color:#d4d4d8; line-height:1.8; margin-top:10px;">1. Elige una fuente oficial.<br>2. Define palabras clave.<br>3. Pide extracción en tabla.<br>4. Exige fecha y enlace por hallazgo.</div>
          <div style="font-size:0.72rem; color:#fb7185; margin-top:8px;">Resultado esperado: boletín semanal con novedades accionables.</div>
        </div>
        <div class="m-ma-card">
          <div style="font-size:0.72rem; font-weight:800; color:#fb7185; margin-bottom:8px;">CASO 2 · INVESTIGACIÓN</div>
          <h4 style="margin:0 0 8px; color:#fff;">Rastrear tendencias y evidencia</h4>
          <p style="font-size:0.78rem; color:#a1a1aa;">Sirve para comparar qué dicen expertos, medios o usuarios sobre un tema nuevo.</p>
          <div style="font-size:0.76rem; color:#d4d4d8; line-height:1.8; margin-top:10px;">1. Formula una pregunta concreta.<br>2. Limita el universo de fuentes.<br>3. Separa hechos, opiniones y señales.<br>4. Pide conclusiones con soporte.</div>
          <div style="font-size:0.72rem; color:#fb7185; margin-top:8px;">Resultado esperado: panorama con hallazgos, desacuerdos y riesgos.</div>
        </div>
        <div class="m-ma-card">
          <div style="font-size:0.72rem; font-weight:800; color:#fb7185; margin-bottom:8px;">CASO 3 · COMPARATIVA</div>
          <h4 style="margin:0 0 8px; color:#fff;">Extraer datos de varios sitios y consolidarlos</h4>
          <p style="font-size:0.78rem; color:#a1a1aa;">Ideal para tablas comparativas de precios, convocatorias, programas o normativas.</p>
          <div style="font-size:0.76rem; color:#d4d4d8; line-height:1.8; margin-top:10px;">1. Define columnas comparables.<br>2. Indica fuentes permitidas.<br>3. Pide homogeneizar unidades.<br>4. Cierra con una recomendación razonada.</div>
          <div style="font-size:0.72rem; color:#fb7185; margin-top:8px;">Resultado esperado: tabla lista para presentar y defender.</div>
        </div>
      </div>
    </div>
  </div>

  <div id="m-ma-prompts" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="margin-top:0;">🧠 Prompts Maestros para Manus</h3>
      <p style="color:#a1a1aa;">Un buen prompt para un agente navegador define objetivo, fuentes, criterio de relevancia y formato de salida. Aquí tienes plantillas reutilizables.</p>
      <div class="m-ma-grid" style="margin-top:18px;">
        <div class="m-ma-card">
          <h4 style="margin-top:0; color:#fff;">Monitor regulatorio</h4>
          <p style="font-size:0.78rem; color:#a1a1aa;">Para vigilar novedades en una fuente oficial.</p>
          <div style="font-size:0.76rem; color:#fecdd3; line-height:1.8;" id="ma-prompt-monitor">Navega estas fuentes: [URL 1], [URL 2]. Busca novedades publicadas en los ultimos 7 dias relacionadas con [tema]. Para cada hallazgo entrega: titulo, fecha, enlace, entidad emisora, resumen de 2 lineas e impacto potencial para [area]. Si no encuentras resultados, indicalo con la fecha exacta de revision.</div>
          <button class="ma-btn-glow" style="width:100%; margin-top:12px;" onclick="maCopy(this, 'prompt_monitor')">📋 Copiar prompt</button>
        </div>
        <div class="m-ma-card">
          <h4 style="margin-top:0; color:#fff;">Investigación competitiva</h4>
          <p style="font-size:0.78rem; color:#a1a1aa;">Para contrastar productos, actores o tendencias.</p>
          <div style="font-size:0.76rem; color:#fecdd3; line-height:1.8;" id="ma-prompt-compare">Investiga como se esta moviendo el tema [tema] en estas fuentes: [lista]. Separa resultados en: hechos verificables, opiniones recurrentes, riesgos, oportunidades y preguntas abiertas. Incluye enlaces por hallazgo y cierra con una recomendacion para una persona que toma decisiones.</div>
          <button class="ma-btn-glow" style="width:100%; margin-top:12px;" onclick="maCopy(this, 'prompt_compare')">📋 Copiar prompt</button>
        </div>
      </div>
      <div class="m-ma-card">
        <h4 style="margin-top:0; color:#fff;">Extracción desde varias páginas</h4>
        <p style="font-size:0.78rem; color:#a1a1aa;">Para construir una tabla consolidada.</p>
        <div style="font-size:0.76rem; color:#fecdd3; line-height:1.8;" id="ma-prompt-table">Abre estas paginas: [urls]. Extrae la informacion de [campos]. Normaliza formatos de fecha, moneda y nombres. Entrega una tabla Markdown con columnas [columnas]. Marca con "no visible" los datos que no aparezcan y agrega una observacion final con los huecos encontrados.</div>
        <button class="ma-btn-glow" style="width:100%; margin-top:12px;" onclick="maCopy(this, 'prompt_table')">📋 Copiar prompt</button>
      </div>
    </div>
  </div>

  <div id="m-ma-antipatterns" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="margin-top:0;">🚫 Errores que arruinan una investigación con agentes</h3>
      <div class="m-ma-grid-3" style="margin-top:18px;">
        <div class="m-ma-panel">
          <h4 style="margin:0 0 8px; color:#fff;">Pedir “investiga” sin límites</h4>
          <p style="margin:0; font-size:0.8rem; color:#a1a1aa;">Sin fuentes, rango de tiempo ni formato, el agente se dispersa y devuelve algo difícil de validar.</p>
        </div>
        <div class="m-ma-panel">
          <h4 style="margin:0 0 8px; color:#fff;">No exigir evidencia</h4>
          <p style="margin:0; font-size:0.8rem; color:#a1a1aa;">Si no pides enlaces, fechas o citas, no podrás defender el resultado ante otra persona.</p>
        </div>
        <div class="m-ma-panel">
          <h4 style="margin:0 0 8px; color:#fff;">Delegar la decisión final</h4>
          <p style="margin:0; font-size:0.8rem; color:#a1a1aa;">El agente ayuda a reunir señales; la priorización y el juicio siguen siendo tuyos.</p>
        </div>
      </div>
      <div class="m-ma-note" style="margin-top:18px;">Señal de buen uso: cuando el resultado te ahorra navegación manual y deja un entregable verificable. Señal de mal uso: cuando recibes un texto bonito pero no sabes de dónde salió.</div>
    </div>
  </div>

  <!-- TAB 6: ESTRATEGIA REAL -->
  <div id="m-ma-estrategia" class="ag-content">
    <div class="section-card animate-in">
      <div style="background:linear-gradient(135deg,rgba(244,63,94,0.12),transparent); border:1px solid rgba(244,63,94,0.35); border-radius:12px; padding:18px; margin-bottom:18px;">
        <div style="background:var(--ma-primary); color:#fff; padding:3px 12px; border-radius:20px; font-size:0.7rem; font-weight:800; display:inline-block; margin-bottom:8px;">🧪 ESTRATEGIA REAL · Manus AI</div>
        <p style="font-size:1rem; font-weight:800; color:#fb7185; margin:0 0 6px;">Operación: El Vigía del Diario Oficial</p>
        <p style="font-size:0.82rem; color:#a1a1aa; margin:0;">📋 Situación: Tu entidad necesita saber el mismo día en que salen nuevas resoluciones o sanciones del DIAN o el Diario Oficial. Manus navegará automáticamente y te entregará un resumen ejecutivo.</p>
      </div>

      <h4 style="color:#fb7185; margin:0 0 10px;">🧳 Tu Maletín de Trabajo</h4>

      <!-- URLs de monitoreo -->
      <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(244,63,94,0.05); border:1px solid rgba(244,63,94,0.2); border-radius:8px; padding:10px 14px;">
          <div><p style="font-size:0.8rem; font-weight:700; color:#fb7185; margin:0 0 2px;">🔗 Diario Oficial Colombia</p><p style="font-size:0.72rem; color:#71717a; margin:0;">Fuente oficial de resoluciones y decretos.</p></div>
          <button style="background:rgba(244,63,94,0.1); border:1px solid rgba(244,63,94,0.3); color:#fb7185; padding:4px 10px; border-radius:5px; font-size:0.7rem; font-weight:700; cursor:pointer;" onclick="maCopy(this,'https://www.diarioficial.gov.co')">🔗 Copiar URL</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(244,63,94,0.05); border:1px solid rgba(244,63,94,0.2); border-radius:8px; padding:10px 14px;">
          <div><p style="font-size:0.8rem; font-weight:700; color:#fb7185; margin:0 0 2px;">🔗 SECOP II (Licitaciones SENA)</p><p style="font-size:0.72rem; color:#71717a; margin:0;">Portal de contratación pública en tiempo real.</p></div>
          <button style="background:rgba(244,63,94,0.1); border:1px solid rgba(244,63,94,0.3); color:#fb7185; padding:4px 10px; border-radius:5px; font-size:0.7rem; font-weight:700; cursor:pointer;" onclick="maCopy(this,'https://www.secop.gov.co')">🔗 Copiar URL</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(244,63,94,0.05); border:1px solid rgba(244,63,94,0.2); border-radius:8px; padding:10px 14px;">
          <div><p style="font-size:0.8rem; font-weight:700; color:#fb7185; margin:0 0 2px;">🔗 SENA — Convocatorias Vigentes</p><p style="font-size:0.72rem; color:#71717a; margin:0;">Becas, formación y concursos activos del SENA.</p></div>
          <button style="background:rgba(244,63,94,0.1); border:1px solid rgba(244,63,94,0.3); color:#fb7185; padding:4px 10px; border-radius:5px; font-size:0.7rem; font-weight:700; cursor:pointer;" onclick="maCopy(this,'https://www.sena.edu.co/es-co/Ciudadanos/Paginas/convocatoriasVigentes.aspx')">🔗 Copiar URL</button>
        </div>
      </div>

      <!-- Configuración del Agente -->
      <div style="margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.8rem; font-weight:700; color:#fb7185;">🤖 Instrucción del Agente (para Manus o GPT-4o)</span>
          <button style="background:rgba(244,63,94,0.1); border:1px solid rgba(244,63,94,0.3); color:#fb7185; padding:5px 12px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer;" onclick="maCopy(this,'agent_prompt')" id="ma-agent-btn">📋 Copiar Instrucción</button>
        </div>
        <div id="ma-agent-prompt" style="background:#130a0e; border:1px solid #3f1720; border-radius:8px; padding:14px; font-size:0.78rem; color:#fda4af; line-height:1.7;">
          Eres un asistente de vigilancia normativa para una entidad pública colombiana. Tu tarea es:
          <br>1. Navegar al Diario Oficial (https://www.diarioficial.gov.co) y buscar cualquier resolución nueva publicada hoy.
          <br>2. Filtrar las que mencionen 'SENA', 'educación para el trabajo' o 'contratación' en su título.
          <br>3. Para cada resultado relevante: extrae el número de resolución, la fecha, el emisor y un resumen de 2 líneas de lo que ordena.
          <br>4. Entrega el resultado en una tabla Markdown con 4 columnas: N° Resolución | Fecha | Emisor | Resumen.
          <br>Si no hay resultados hoy, indícalo con la fecha exacta de tu última búsqueda.
        </div>
      </div>

      <h4 style="color:#fb7185; margin:0 0 10px;">✅ Ejecuta la Estrategia</h4>
      <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px;">
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="maCheck(this,0,30)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#a1a1aa;"><p style="font-weight:700; font-size:0.85rem; color:#e4e4e7; margin:0 0 4px;">Accede a manus.im y crea una cuenta (lista de espera o prueba direct)</p><p style="font-size:0.78rem; margin:0;">Alternativa inmediata: usa <b>OpenAI GPT-4o con capacidad de búsqueda web</b> o <b>Perplexity AI</b> que son equivalentes y están disponibles hoy.</p><div style="font-size:0.72rem; background:rgba(244,63,94,0.08); border-left:2px solid #f43f5e; padding:4px 8px; border-radius:0 4px 4px 0; color:#fb7185; margin-top:6px;">💡 Perplexity.ai es gratis y puede navegar websits ahora mismo.</div></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+30 XP</span>
        </li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="maCheck(this,1,50)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#a1a1aa;"><p style="font-weight:700; font-size:0.85rem; color:#e4e4e7; margin:0 0 4px;">Copia la instrucción del agente y pégala en Manus o Perplexity</p><p style="font-size:0.78rem; margin:0;">La instrucción está diseñada para que el agente navegue, filtre y formatee sin que tengas que hacer nada más.</p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+50 XP</span>
        </li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="maCheck(this,2,70)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#a1a1aa;"><p style="font-weight:700; font-size:0.85rem; color:#e4e4e7; margin:0 0 4px;">Observa cómo Manus/Perplexity navega el sitio paso a paso</p><p style="font-size:0.78rem; margin:0;">Verás los "pasos de pensamiento" donde el agente abre URL, lee contenido, filtra registros y redacta el resumen. Eso es lo que aprendiste en el módulo: <b>Computer Use + visión.</b></p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+70 XP</span>
        </li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="maCheck(this,3,50)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#a1a1aa;"><p style="font-weight:700; font-size:0.85rem; color:#e4e4e7; margin:0 0 4px;">Configura una tarea recurrente: "Haz esto todos los lunes a las 8AM"</p><p style="font-size:0.78rem; margin:0;">En Manus, puedes programar tareas recurrentes. Goal: recibir cada semana el boletín de normativa nueva sin mover un solo dedo.</p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+50 XP</span>
        </li>
      </ul>

      <div style="background:linear-gradient(135deg,#10b981,#059669); color:#fff; border-radius:8px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; margin-top:16px; font-weight:800;">
        <span>🏆 XP Ganado en esta Estrategia</span>
        <span id="ma-xp-count">0 / 200 XP</span>
      </div>
    </div>
  </div>

  <!-- TAB 7: RETO FINAL -->
  <div id="m-ma-mission" class="ag-content">
    <div class="section-card animate-in">
        <h3>🏆 Reto Final: Radar Semanal de tu Sector</h3>
        <p style="color:#a1a1aa;">El reto consiste en construir un mini sistema de vigilancia: fuentes, consulta, hallazgos y acción sugerida.</p>
        <div class="m-ma-card" style="margin-bottom:16px;">
          <div style="font-size:0.8rem; color:#e4e4e7; line-height:1.9;">
            Entregable esperado:<br>
            1. Cinco novedades encontradas.<br>
            2. Fuente o enlace de cada una.<br>
            3. Impacto para tu área.<br>
            4. Acción sugerida para la semana.
          </div>
        </div>
        <div class="m-ma-card">
            <p>1. ¿Cómo se llama el concepto de IA que permite mover el ratón y ver la pantalla como un humano?</p>
            <input type="text" id="ws-val-ma" class="premium-textarea" placeholder="Pista: C... U... Vision">
            <button class="ma-btn-glow" style="width:100%; margin-top:15px;" onclick="mMaFinalV()">Finalizar Misión</button>
        </div>
    </div>
  </div>

  <div class="module-nav">
    <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú</button>
  </div>
</div>

<script>
  // Manus Estrategia Real
  window.maCopy = function(btn, type) {
    let text = type;
    if(type === 'agent_prompt') text = document.getElementById('ma-agent-prompt')?.innerText || '';
    if(type === 'prompt_monitor') text = document.getElementById('ma-prompt-monitor')?.innerText || '';
    if(type === 'prompt_compare') text = document.getElementById('ma-prompt-compare')?.innerText || '';
    if(type === 'prompt_table') text = document.getElementById('ma-prompt-table')?.innerText || '';
    navigator.clipboard.writeText(text).catch(() => {});
    const orig = btn.textContent; btn.textContent = '✅ Copiado'; btn.style.color = '#10b981';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2500);
    if(window.app) window.app.addXP(5);
  };
  let maCDone = [false,false,false,false]; let maCXP = 0;
  window.maCheck = function(el, idx, xp) {
    if(maCDone[idx]) return; maCDone[idx] = true;
    el.style.borderColor='rgba(16,185,129,0.4)'; el.style.background='rgba(16,185,129,0.05)';
    const chk=el.querySelector('div'); if(chk){chk.style.background='#10b981';chk.style.borderColor='#10b981';chk.style.color='#fff';}
    maCXP+=xp; if(window.app) window.app.addXP(xp);
    const c=document.getElementById('ma-xp-count'); if(c) c.textContent=maCXP+' / 200 XP';
  };

  // -- Tabs logic --
  setTimeout(() => {
    const parent = document.getElementById('module-manus');
    if(!parent) return;
    const tabs = parent.querySelectorAll('.premium-tab-ma');
    const contents = parent.querySelectorAll('.ag-content');
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      contents.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const target = parent.querySelector('#' + t.dataset.tab);
      if(target) target.classList.add('active');
    }));
  }, 500);

  // -- Simulator --
  let maBusy = false;
  window.mMaRunAgent = () => {
    if(maBusy) return;
    maBusy = true;
    const logs = document.getElementById('ma-logs-v');
    const browser = document.getElementById('ma-browser-v');
    const urlBar = document.getElementById('ma-win-url');
    
    logs.innerHTML = '';
    browser.innerHTML = '<div style="color:#000; padding:20px;">Cargando motor de navegación...</div>';
    
    const steps = [
        { t: "[SEARCH]", m: "Buscando 'NVIDIA Annual Report 2024'...", url: "google.com" },
        { t: "[ACTION]", m: "Entrando en portal de inversores...", url: "investor.nvidia.com" },
        { t: "[VISION]", m: "Identificada tabla de ingresos Q4...", url: "investor.nvidia.com" },
        { t: "[EXTRACT]", m: "Extrayendo $22.1B en ingresos...", url: "investor.nvidia.com" },
        { t: "[FINISH]", m: "Análisis completado.", url: "done" }
    ];

    let i = 0;
    const intv = setInterval(() => {
        if(i < steps.length) {
            const d = document.createElement('div');
            d.className = 'm-ma-thought';
            d.innerHTML = \`<span class="m-ma-t-icon">\${steps[i].t}</span> \${steps[i].m}\`;
            logs.appendChild(d);
            setTimeout(() => d.classList.add('show'), 10);
            
            urlBar.innerText = steps[i].url;
            browser.innerHTML = \`<div style="color:#18181b; padding:20px;">
                <h4 style="margin:0;">Sitio: \${steps[i].url}</h4>
                <p style="font-size:0.8rem;">Manus está analizando esta zona visual...</p>
                <div style="width:10px; height:10px; background:red; border-radius:50%; position:relative; top:\${Math.random()*50}px; left:\${Math.random()*50}px;"></div>
            </div>\`;

            logs.scrollTop = logs.scrollHeight;
            i++;
        } else {
            clearInterval(intv);
            maBusy = false;
            if(window.app) window.app.addXP(50);
        }
    }, 1200);
  };

  window.mMaSimScenario = (s) => {
      alert("Cambiando a escenario: " + s + ". Ve a la pestaña 'Simulador' para ejecutar.");
      document.querySelector('[data-tab="m-ma-lab"]').click();
  };

  window.mMaFinalV = () => {
      const v = document.getElementById('ws-val-ma').value.toLowerCase();
      if(v.includes('computer use')) {
          alert("¡Correcto! Eres un Analista Soberano. +200 XP");
          if(window.app) window.app.addXP(200);
          document.querySelector('.complete-module-btn')?.click();
      } else { alert("Pista: Empieza con C y tiene 'Use'"); }
  };
</script>
`;
  const target = document.getElementById('module-manus');
  if (target) { target.innerHTML = manusHTML; }
  return { init: function() { console.log('Manus Titan Investigator v31.4 loaded'); } };
})();
