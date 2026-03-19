/* MÓDULO BONUS: Gemini 2025 - Ecosistema Google Total */
(function() {
  const geminiHTML = `
<style>
  :root { --gm-primary:#8e2de2; --gm-secondary:#4a00e0; --gm-accent:#b388ff; --gm-card:#0b0b15; --gm-border:#221b39; --gm-soft:#94a3b8; }
  .m-gm-container { color:#f1f5f9; font-family:'Inter',sans-serif; }
  .m-gm-card { background:var(--gm-card); border:1px solid var(--gm-border); border-radius:16px; padding:22px; margin-bottom:18px; }
  .premium-tab-gm { background:none; border:none; padding:10px 14px; color:#64748b; cursor:pointer; border-bottom:2px solid transparent; transition:0.3s; font-weight:700; white-space:nowrap; }
  .premium-tab-gm.active { color:var(--gm-accent); border-bottom-color:var(--gm-accent); background:rgba(142,45,226,0.04); }
  .gm-btn-glow { background:linear-gradient(135deg,#8e2de2 0%,#4a00e0 100%); color:#fff; border:none; padding:12px 22px; border-radius:8px; font-weight:700; cursor:pointer; }
  .m-gm-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  .m-gm-grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
  .m-gm-note { font-size:0.79rem; color:var(--gm-soft); line-height:1.7; }
  .m-gm-copy { background:rgba(142,45,226,0.12); border:1px solid rgba(179,136,255,0.28); color:var(--gm-accent); padding:5px 12px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer; }
  .m-gm-meter { height:10px; background:#111; border-radius:5px; overflow:hidden; margin-top:15px; border:1px solid #333; }
  .m-gm-meter-fill { height:100%; width:0%; background:linear-gradient(90deg,#8e2de2,#4a00e0); transition:width 1s ease; }
  .m-gm-hero { background:radial-gradient(circle at top left,rgba(179,136,255,0.18),transparent 45%),linear-gradient(135deg,rgba(142,45,226,0.12),rgba(10,10,20,0.95)); border:1px solid rgba(179,136,255,0.22); border-radius:20px; padding:22px; margin-bottom:18px; }
  .m-gm-chip-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; }
  .m-gm-chip { padding:8px 12px; border-radius:999px; background:rgba(255,255,255,0.04); border:1px solid rgba(179,136,255,0.16); color:#ddd6fe; font-size:0.74rem; font-weight:700; }
  .m-gm-step { position:relative; padding:18px 18px 18px 58px; border-radius:14px; border:1px solid rgba(179,136,255,0.16); background:rgba(255,255,255,0.02); }
  .m-gm-step-badge { position:absolute; left:16px; top:16px; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.74rem; font-weight:800; color:#fff; background:linear-gradient(135deg,#8e2de2,#4a00e0); }
  .m-gm-matrix { display:grid; grid-template-columns:1.2fr 1fr 1fr 1fr; gap:1px; background:rgba(179,136,255,0.18); border-radius:16px; overflow:hidden; margin-top:18px; }
  .m-gm-matrix > div { background:#0a0a14; padding:14px; font-size:0.77rem; line-height:1.6; color:var(--gm-soft); }
  .m-gm-matrix .is-head { background:rgba(142,45,226,0.15); color:#ede9fe; font-weight:800; }
  .m-gm-route { border-radius:16px; padding:18px; border:1px solid rgba(179,136,255,0.16); background:linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)); }
  .m-gm-route h4 { margin:0 0 8px; color:#fff; }
  .m-gm-route-line { font-size:0.78rem; color:#cbd5e1; line-height:1.8; }
  .m-gm-highlight { color:#f5d0fe; font-weight:800; }
  .m-gm-surface { border-radius:16px; padding:16px; border:1px solid rgba(179,136,255,0.14); background:rgba(255,255,255,0.02); min-height:140px; }
  .m-gm-surface-icon { font-size:1.4rem; margin-bottom:10px; }
  .m-gm-mini { font-size:0.72rem; color:#cbd5e1; line-height:1.7; }
  .m-gm-promptbox { background:#070710; border:1px solid #31225e; border-radius:14px; padding:16px; }
  @media (max-width:900px){ .m-gm-grid-2,.m-gm-grid-3 { grid-template-columns:1fr; } }
  @media (max-width:900px){ .m-gm-matrix { grid-template-columns:1fr; } }
</style>

<div class="m-gm-container">
  <div class="module-header premium-header" style="border:1px solid rgba(142,45,226,0.3); background:rgba(142,45,226,0.03);">
    <div class="module-number gamer-badge" style="background:var(--gm-primary);color:#fff;">BONUS: GOOGLE AI TOTAL</div>
    <h2 class="module-title glow-text" style="color:#b388ff;">✨ <span style="color:#8e2de2;">Gemini 2025:</span> Todo El Ecosistema Google</h2>
    <p class="module-description">Este módulo explica Gemini como una capa de inteligencia distribuida en Google: Gemini App, Workspace, Drive, Meet, Docs, Sheets, Gems, AI Studio, Vertex AI y desarrollo.</p>
  </div>

  <div class="m-gm-hero">
    <h3 style="margin:0 0 10px; color:#fff;">La idea central del módulo</h3>
    <p class="m-gm-note" style="margin:0;">Gemini no es una sola pantalla. Es una capa de inteligencia que aparece en distintos productos de Google. Aprenderlo bien no consiste en memorizar funciones, sino en dominar esta pregunta: <span class="m-gm-highlight">¿dónde conviene usar la IA según el contexto, el archivo y el resultado que necesito?</span></p>
    <div class="m-gm-chip-row">
      <span class="m-gm-chip">Pensar</span>
      <span class="m-gm-chip">Redactar</span>
      <span class="m-gm-chip">Analizar datos</span>
      <span class="m-gm-chip">Resumir reuniones</span>
      <span class="m-gm-chip">Crear asistentes</span>
      <span class="m-gm-chip">Automatizar</span>
      <span class="m-gm-chip">Escalar en empresa</span>
    </div>
  </div>

  <div class="ag-tabs game-tabs" style="display:flex; overflow-x:auto; gap:5px; margin-bottom:20px; border-bottom:1px solid #222;">
    <button class="tab-btn premium-tab-gm active" data-tab="m-gm-map">🌐 Mapa</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-decider">🧭 Decisor</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-workspace">💼 Workspace</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-multimodal">🎙️ Multimodal</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-gemas">💎 Gemas</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-build">🧪 AI Studio / Vertex</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-profiles">🧑‍💼 Perfiles</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-flows">⚙️ Flujos</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-ecosystem">🧩 Ecosistema Vivo</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-cases">🧭 Casos Prácticos</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-hidden">⚡ Usos Poco Obvios</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-prompts">🧠 Prompts Maestros</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-architectures">🏗️ Arquitecturas</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-estrategia">🎯 Estrategia Real</button>
    <button class="tab-btn premium-tab-gm" data-tab="m-gm-mission">🏆 Reto Final</button>
  </div>

  <div id="m-gm-map" class="ag-content active">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Gemini no es un chat: es un sistema de puntos de entrada</h3>
      <p class="m-gm-note">La forma correcta de entender Gemini es esta: eliges el punto de entrada según la tarea. Si el trabajo está en Gmail, úsalo allí. Si es una Gema repetitiva, crea la Gema. Si vas a programarlo, prototipa en AI Studio. Si lo vas a escalar en empresa, usa Vertex. El valor no está solo en el modelo, sino en cómo recorre el ecosistema Google sin romper el contexto.</p>
      <div class="m-gm-grid-3" style="margin-top:18px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Gemini App</h4><p class="m-gm-note">Pensar, analizar, resumir, conversar con archivos y resolver rápido.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Workspace</h4><p class="m-gm-note">Usar IA donde ya trabajas: Gmail, Docs, Sheets, Slides, Meet y Drive.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Gemas</h4><p class="m-gm-note">Empaquetar roles, formato y criterio para tareas repetitivas.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">AI Studio</h4><p class="m-gm-note">Prototipar prompts, entradas y salidas antes de programar.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Vertex AI</h4><p class="m-gm-note">Escalar, gobernar, integrar y desplegar en entorno empresarial.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Code Assist / Cloud</h4><p class="m-gm-note">Construir con Gemini, no solo usar Gemini.</p></div>
      </div>
      <div class="m-gm-grid-3" style="margin-top:14px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Search / Chrome</h4><p class="m-gm-note">Investigar, contrastar, aterrizar preguntas y capturar contexto rápido desde navegación.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Android</h4><p class="m-gm-note">Usos móviles, voz, cámara, capturas y productividad en movimiento.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">YouTube / Vids</h4><p class="m-gm-note">Aprender, resumir videos, convertir ideas en guiones y piezas explicativas.</p></div>
      </div>
      <div style="margin-top:16px; background:rgba(255,255,255,0.03); border:1px solid var(--gm-border); border-radius:12px; padding:15px;">
        <p class="m-gm-note" style="margin:0;"><b style="color:#c4b5fd;">Regla mental:</b> si el contexto ya vive dentro del ecosistema Google, no lo saques innecesariamente. Lleva Gemini al contexto, no el contexto a un chat aislado.</p>
      </div>
      <div class="m-gm-grid-3" style="margin-top:16px;">
        <div class="m-gm-step"><div class="m-gm-step-badge">1</div><h4 style="margin:0 0 6px; color:#fff;">Ubica el contexto</h4><p class="m-gm-note" style="margin:0;">¿El trabajo está en correo, documento, tabla, reunión, formulario, video o app?</p></div>
        <div class="m-gm-step"><div class="m-gm-step-badge">2</div><h4 style="margin:0 0 6px; color:#fff;">Elige la transformación</h4><p class="m-gm-note" style="margin:0;">¿Necesitas resumir, redactar, analizar, convertir, clasificar o automatizar?</p></div>
        <div class="m-gm-step"><div class="m-gm-step-badge">3</div><h4 style="margin:0 0 6px; color:#fff;">Decide el destino</h4><p class="m-gm-note" style="margin:0;">¿El resultado termina en entregable humano, en flujo repetible o en sistema escalable?</p></div>
      </div>
    </div>
  </div>

  <div id="m-gm-decider" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Qué producto usar según el objetivo</h3>
      <p class="m-gm-note">Esta es la habilidad más importante del módulo: decidir. Si eliges mal el punto de entrada, Gemini parece normal. Si eliges bien, parece magia porque elimina fricción y conecta piezas del ecosistema.</p>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Si necesitas pensar o explorar</h4>
          <p class="m-gm-note"><b>Usa:</b> Gemini App.</p>
          <p class="m-gm-note">Ideal para empezar desde cero, conversar con varios archivos, pedir opciones, comparar enfoques y aterrizar una estrategia.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Si ya estás produciendo un entregable</h4>
          <p class="m-gm-note"><b>Usa:</b> Docs, Gmail, Slides o Sheets.</p>
          <p class="m-gm-note">No salgas de la herramienta donde ocurre el trabajo. Ahí es donde la IA aporta velocidad con menos fricción.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Si la tarea se repite mucho</h4>
          <p class="m-gm-note"><b>Usa:</b> Gemas.</p>
          <p class="m-gm-note">Convierte un buen criterio en un asistente persistente con tono, estructura y reglas estables.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Si quieres integrar o automatizar</h4>
          <p class="m-gm-note"><b>Usa:</b> AI Studio, API, AppSheet, Apps Script o Vertex.</p>
          <p class="m-gm-note">Aquí Gemini deja de ser un uso personal y empieza a ser una capacidad del sistema.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Si trabajas con datos o BI</h4>
          <p class="m-gm-note"><b>Usa:</b> Sheets, BigQuery, Looker Studio, Vertex.</p>
          <p class="m-gm-note">Empieza simple en Sheets; cuando la escala o gobernanza importen, sube a BigQuery y Vertex.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Si el trabajo está en móvil o cámara</h4>
          <p class="m-gm-note"><b>Usa:</b> Android + Gemini.</p>
          <p class="m-gm-note">Captura fotos, voz, notas rápidas o contexto físico y conviértelo en tareas, reportes o análisis.</p>
        </div>
      </div>
      <div style="margin-top:16px; background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.2); border-radius:12px; padding:15px;">
        <p class="m-gm-note" style="margin:0;"><b style="color:#86efac;">Atajo práctico:</b> primero decide dónde vive el contexto, luego dónde se transformará, y por último dónde se compartirá o escalará.</p>
      </div>
      <div class="m-gm-matrix">
        <div class="is-head">Objetivo</div>
        <div class="is-head">Empieza aquí</div>
        <div class="is-head">Transforma aquí</div>
        <div class="is-head">Escala aquí</div>
        <div><b style="color:#fff;">Responder y comunicar</b><br>Correos, minutas, mensajes, seguimiento.</div>
        <div>Gmail / Meet</div>
        <div>Docs / Gemini App</div>
        <div>Gema / Apps Script</div>
        <div><b style="color:#fff;">Analizar información</b><br>Contratos, PDFs, tablas, reportes.</div>
        <div>Gemini App / Drive</div>
        <div>Sheets / Docs</div>
        <div>Vertex / BigQuery</div>
        <div><b style="color:#fff;">Enseñar o presentar</b><br>Clases, slides, materiales, explicaciones.</div>
        <div>Docs / Classroom</div>
        <div>Slides / Vids / Gemini App</div>
        <div>Gema docente</div>
        <div><b style="color:#fff;">Levantar datos</b><br>Encuestas, leads, solicitudes, captura en campo.</div>
        <div>Forms / Android</div>
        <div>Sheets / Gemini App</div>
        <div>AppSheet / Apps Script</div>
      </div>
    </div>
  </div>

  <div id="m-gm-workspace" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Dónde usar Gemini dentro de Workspace</h3>
      <div class="m-gm-grid-3" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Gmail</h4><p class="m-gm-note">Responder correos difíciles, resumir hilos, cambiar tono, redactar mejor.</p><button class="m-gm-copy" onclick="gmCopy(this,'gmail')">📋 Prompt</button></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Docs</h4><p class="m-gm-note">Minutas, memorandos, informes, borradores y limpieza de redacción.</p><button class="m-gm-copy" onclick="gmCopy(this,'docs')">📋 Prompt</button></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Sheets</h4><p class="m-gm-note">Anomalías, tendencias, tablas, hallazgos y explicaciones de datos.</p><button class="m-gm-copy" onclick="gmCopy(this,'sheets')">📋 Prompt</button></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Slides</h4><p class="m-gm-note">Estructurar presentaciones con mensaje principal por diapositiva.</p><button class="m-gm-copy" onclick="gmCopy(this,'slides')">📋 Prompt</button></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Meet</h4><p class="m-gm-note">Resumen de reunión, acuerdos, responsables y próximos pasos.</p><button class="m-gm-copy" onclick="gmCopy(this,'meet')">📋 Prompt</button></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Drive / Calendar</h4><p class="m-gm-note">Contexto de archivos, continuidad de proyectos y seguimiento de agenda.</p></div>
      </div>
      <div class="m-gm-grid-3" style="margin-top:14px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Forms</h4><p class="m-gm-note">Diseñar formularios, estructurar preguntas y resumir respuestas para detectar patrones.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Classroom</h4><p class="m-gm-note">Apoyo docente, rúbricas, retroalimentación y material de refuerzo más claro.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Drive compartido</h4><p class="m-gm-note">Convertir carpetas llenas de archivos en un contexto accionable para proyectos enteros.</p></div>
      </div>
      <div style="margin-top:16px; background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.2); border-radius:12px; padding:15px;">
        <p class="m-gm-note" style="margin:0;"><b style="color:#86efac;">Resultado esperado:</b> usar Gemini dentro de Workspace debe reducir fricción, no crear más copiar/pegar.</p>
      </div>
      <div class="m-gm-card" style="margin-top:16px;">
        <h4 style="margin:0 0 8px; color:#fff;">Errores comunes en Workspace</h4>
        <ul style="font-size:0.8rem; color:var(--gm-soft); line-height:1.9; padding-left:18px; margin:0;">
          <li>Pedir respuestas genéricas sin dar contexto del correo, documento o tabla.</li>
          <li>Querer una respuesta final cuando todavía falta definir formato, audiencia o tono.</li>
          <li>Usar Gemini para redactar todo desde cero en vez de darle material real para mejorar.</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="m-gm-multimodal" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">La superpotencia de Gemini: unir formatos</h3>
      <p class="m-gm-note">Gemini brilla cuando combina texto, tabla, imagen, audio o video dentro del mismo análisis.</p>
      <div class="m-gm-grid-3" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Texto + PDF</h4><p class="m-gm-note">Contratos, manuales, normas, pliegos y reportes largos.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Tabla + imagen</h4><p class="m-gm-note">Presupuestos, planos, inventarios, evidencia visual y auditorías.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Audio / video</h4><p class="m-gm-note">Reuniones, clases, entrevistas o explicaciones grabadas.</p></div>
      </div>
      <div class="m-gm-card" style="text-align:center; margin-top:16px;">
        <div id="gm-media-preview" style="height:120px; border:2px dashed #444; border-radius:12px; display:flex; align-items:center; justify-content:center; margin-bottom:15px; font-size:2rem;">📁</div>
        <div class="m-gm-meter"><div class="m-gm-meter-fill" id="gm-meter-f"></div></div>
        <div style="font-size:0.7rem; color:#64748b; margin-top:5px;" id="gm-status">Ready to ingest multimodal context...</div>
        <div style="display:flex; gap:10px; justify-content:center; margin-top:14px; flex-wrap:wrap;">
          <button class="gl-btn gl-btn-outline" onclick="mGmSimulate('video')">📹 Video</button>
          <button class="gl-btn gl-btn-outline" onclick="mGmSimulate('code')">📄 Repo</button>
          <button class="gl-btn gl-btn-outline" onclick="mGmSimulate('audio')">🎙️ Audio</button>
        </div>
      </div>
      <pre id="gm-multimodal" style="background:#050510; border:1px solid #31225e; border-radius:10px; padding:14px; font-size:0.74rem; color:#c4b5fd; white-space:pre-wrap; margin:16px 0 0;">Analiza estos insumos como un solo caso. Usa el archivo tabular como evidencia numérica y la imagen/audio/video como evidencia contextual. Dime: 1. Hallazgo principal. 2. Evidencia. 3. Acción recomendada. 4. Dato faltante.</pre>
      <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'multimodal')">📋 Copiar Prompt Multimodal</button>
    </div>
  </div>

  <div id="m-gm-gemas" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Gemas: tu ejército de asistentes especializados</h3>
      <div class="m-gm-grid-3" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Gema Jurídica</h4><p class="m-gm-note">Conceptos, revisión de riesgos, artículos, obligaciones y formato de respuesta.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Gema Analista</h4><p class="m-gm-note">Tablas, anomalías, limpieza de datos y resumen ejecutivo.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Gema Secretario</h4><p class="m-gm-note">Transcripciones, actas, acuerdos y tabla de compromisos.</p></div>
      </div>
      <pre id="gm-gema" style="background:#050510; border:1px solid #31225e; border-radius:10px; padding:14px; font-size:0.74rem; color:#c4b5fd; white-space:pre-wrap; margin:16px 0 0;">Actúa como un asistente especialista en convertir insumos desordenados en entregables listos para enviar. Siempre responde con esta estructura: 1. Resumen ejecutivo. 2. Tabla de puntos clave. 3. Siguiente acción recomendada. Si faltan datos, haz máximo 3 preguntas antes de continuar.</pre>
      <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'gema')">📋 Copiar Prompt Para Crear Gema</button>
    </div>
  </div>

  <div id="m-gm-build" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">AI Studio, API, Vertex y desarrollo</h3>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">AI Studio</h4><p class="m-gm-note">Prototipa prompts, entradas, salidas y flujos antes de llevarlos a código.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Vertex AI</h4><p class="m-gm-note">Escala la solución, controla acceso, integra datos y despliega en entorno empresarial.</p></div>
      </div>
      <div class="m-gm-grid-3" style="margin-top:14px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Apps Script</h4><p class="m-gm-note">Automatizar tareas alrededor de Sheets, Docs, Forms o Gmail con lógica ligera.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">AppSheet</h4><p class="m-gm-note">Llevar procesos de negocio a apps internas sin construir todo desde cero.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">BigQuery / Looker</h4><p class="m-gm-note">Escalar análisis, gobernar datos y presentar inteligencia a equipos completos.</p></div>
      </div>
      <div class="m-gm-card" style="margin-top:16px;">
        <h4 style="margin:0 0 8px; color:#fff;">Cuándo pasar a construir</h4>
        <ul style="font-size:0.8rem; color:var(--gm-soft); line-height:1.9; padding-left:18px; margin:0;">
          <li>Cuando repites la tarea todos los días.</li>
          <li>Cuando ya no quieres copiar/pegar manualmente.</li>
          <li>Cuando quieres conectar Gemini con apps, formularios o datos.</li>
        </ul>
      </div>
      <pre id="gm-build" style="background:#050510; border:1px solid #31225e; border-radius:10px; padding:14px; font-size:0.74rem; color:#c4b5fd; white-space:pre-wrap; margin:16px 0 0;">Quiero convertir esta tarea en una automatización futura. Antes de responder: 1. Identifica entradas. 2. Define procesamiento. 3. Propón salida estructurada. 4. Señala qué parte debe seguir siendo humana. Entrega: Entradas | Lógica | Salida | Riesgo | Próximo paso para API.</pre>
      <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'build')">📋 Copiar Prompt AI Studio</button>
    </div>
  </div>

  <div id="m-gm-profiles" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Cómo usar Gemini según tu perfil profesional</h3>
      <p class="m-gm-note">La mejor forma de sorprenderse con Gemini es verlo desde tu rol. Aquí tienes rutas concretas dentro del ecosistema Google según el tipo de trabajo.</p>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-route">
          <h4>Docente / Formador</h4>
          <div class="m-gm-route-line"><b>Ruta:</b> Docs → Gemini App → Slides → Classroom → Meet</div>
          <div class="m-gm-route-line"><b>Valor:</b> planea, simplifica conceptos, crea material y deja seguimiento académico.</div>
        </div>
        <div class="m-gm-route">
          <h4>Gerente / Coordinador</h4>
          <div class="m-gm-route-line"><b>Ruta:</b> Gmail → Meet → Docs → Sheets → Slides</div>
          <div class="m-gm-route-line"><b>Valor:</b> convierte ruido operativo en prioridades, decisiones y comunicación ejecutiva.</div>
        </div>
        <div class="m-gm-route">
          <h4>Analista / Jurídico</h4>
          <div class="m-gm-route-line"><b>Ruta:</b> Drive → Gemini App → Docs / Sheets → Gema</div>
          <div class="m-gm-route-line"><b>Valor:</b> extrae riesgos, compara fuentes, resume evidencia y estandariza criterios.</div>
        </div>
        <div class="m-gm-route">
          <h4>Soporte / Atención</h4>
          <div class="m-gm-route-line"><b>Ruta:</b> Gmail → Docs → Gema → Forms</div>
          <div class="m-gm-route-line"><b>Valor:</b> responde más rápido, clasifica incidencias y documenta procedimientos.</div>
        </div>
        <div class="m-gm-route">
          <h4>Desarrollador</h4>
          <div class="m-gm-route-line"><b>Ruta:</b> Gemini App → AI Studio → API → Vertex → Cloud</div>
          <div class="m-gm-route-line"><b>Valor:</b> pasa de idea a prototipo y de prototipo a capacidad de producto.</div>
        </div>
        <div class="m-gm-route">
          <h4>Creador / Comunicador</h4>
          <div class="m-gm-route-line"><b>Ruta:</b> Gemini App → Docs → Slides / Vids → YouTube</div>
          <div class="m-gm-route-line"><b>Valor:</b> convierte ideas crudas en guiones, piezas visuales y narrativa reusable.</div>
        </div>
      </div>
      <div style="margin-top:16px; background:rgba(255,255,255,0.03); border:1px solid var(--gm-border); border-radius:12px; padding:15px;">
        <p class="m-gm-note" style="margin:0;"><b style="color:#c4b5fd;">Idea clave:</b> el mismo modelo cambia radicalmente de valor según dónde lo incrustas. Un gerente lo vive en Gmail y Meet; un desarrollador lo vive en AI Studio y Cloud.</p>
      </div>
    </div>
  </div>

  <div id="m-gm-flows" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Flujos completos dentro de Google</h3>
      <p class="m-gm-note">Aquí está el verdadero “wow”: usar varias partes del ecosistema en secuencia para resolver un proceso entero, no solo una tarea suelta.</p>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Flujo 1: Reunión → Acta → Seguimiento</h4>
          <p class="m-gm-note"><b>Meet</b> captura el contexto → <b>Docs</b> formaliza la minuta → <b>Gmail</b> comunica → <b>Calendar/Drive</b> sostiene el seguimiento.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Flujo 2: Tabla → Hallazgo → Presentación</h4>
          <p class="m-gm-note"><b>Sheets</b> detecta anomalías → <b>Gemini App</b> interpreta → <b>Slides</b> lo convierte en mensaje ejecutivo.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Flujo 3: Documento → Gema → Operación diaria</h4>
          <p class="m-gm-note"><b>Drive</b> contiene la base → <b>Gemini App</b> entiende el patrón → <b>Gema</b> convierte esa lógica en asistente reutilizable.</p>
        </div>
        <div class="m-gm-card" style="margin:0;">
          <h4 style="margin:0 0 8px; color:#fff;">Flujo 4: Prueba → API → Escala</h4>
          <p class="m-gm-note"><b>Gemini App</b> prueba rápido → <b>AI Studio</b> refina → <b>API</b> integra → <b>Vertex AI</b> escala y gobierna.</p>
        </div>
      </div>
      <div class="m-gm-grid-3" style="margin-top:14px;">
        <div class="m-gm-step"><div class="m-gm-step-badge">A</div><h4 style="margin:0 0 6px; color:#fff;">Entrada</h4><p class="m-gm-note" style="margin:0;">Define qué dispara el flujo: correo, formulario, archivo, reunión o evento.</p></div>
        <div class="m-gm-step"><div class="m-gm-step-badge">B</div><h4 style="margin:0 0 6px; color:#fff;">Transformación</h4><p class="m-gm-note" style="margin:0;">Decide dónde la IA interpreta, resume, clasifica o genera valor.</p></div>
        <div class="m-gm-step"><div class="m-gm-step-badge">C</div><h4 style="margin:0 0 6px; color:#fff;">Salida</h4><p class="m-gm-note" style="margin:0;">Aterriza el resultado en algo usable: documento, decisión, alerta, app o dashboard.</p></div>
      </div>
      <pre id="gm-flows" style="background:#050510; border:1px solid #31225e; border-radius:10px; padding:14px; font-size:0.74rem; color:#c4b5fd; white-space:pre-wrap; margin:16px 0 0;">Diseña el mejor flujo dentro del ecosistema Google para esta tarea. Indica:
1. Producto donde empieza.
2. Producto donde se transforma el contenido.
3. Producto donde se comunica o comparte.
4. Producto donde escalaría si se vuelve repetitivo.
Entrega el resultado como una secuencia paso a paso.</pre>
      <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'flows')">📋 Copiar Prompt De Flujos</button>
    </div>
  </div>

  <div id="m-gm-ecosystem" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Ecosistema vivo: dónde aparece Gemini en Google</h3>
      <p class="m-gm-note">Piensa esta sección como un mapa de superficies. No todas sirven para lo mismo: algunas son para producir, otras para capturar, otras para analizar y otras para escalar.</p>
      <div class="m-gm-grid-3" style="margin-top:16px;">
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">📧</div>
          <h4 style="margin:0 0 8px; color:#fff;">Gmail</h4>
          <p class="m-gm-mini">Redacción, priorización, tono, respuesta rápida y seguimiento de compromisos.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">📄</div>
          <h4 style="margin:0 0 8px; color:#fff;">Docs</h4>
          <p class="m-gm-mini">Borradores, minutas, consolidación de ideas, informes y documentos listos para circular.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">📊</div>
          <h4 style="margin:0 0 8px; color:#fff;">Sheets</h4>
          <p class="m-gm-mini">Lectura de patrones, anomalías, tablas explicativas, priorización y entendimiento de datos.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">🎞️</div>
          <h4 style="margin:0 0 8px; color:#fff;">Slides / Vids</h4>
          <p class="m-gm-mini">Narrativa, estructura visual, discurso ejecutivo, guiones y secuencias de explicación.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">🎥</div>
          <h4 style="margin:0 0 8px; color:#fff;">Meet / YouTube</h4>
          <p class="m-gm-mini">Resumir, convertir video en aprendizajes, capturar acuerdos y reutilizar conocimiento grabado.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">🗂️</div>
          <h4 style="margin:0 0 8px; color:#fff;">Drive / Forms / Classroom</h4>
          <p class="m-gm-mini">Contexto documental, captura estructurada, docencia, evidencias y seguimiento de procesos.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">📱</div>
          <h4 style="margin:0 0 8px; color:#fff;">Android / Cámara</h4>
          <p class="m-gm-mini">Trabajo en campo, voz, fotos, inspecciones, incidentes y productividad móvil.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">🧪</div>
          <h4 style="margin:0 0 8px; color:#fff;">AI Studio / API</h4>
          <p class="m-gm-mini">Prototipos, pruebas de prompts, estructuración de salidas y primeros pasos hacia integración.</p>
        </div>
        <div class="m-gm-surface">
          <div class="m-gm-surface-icon">🏢</div>
          <h4 style="margin:0 0 8px; color:#fff;">Vertex / Cloud / BigQuery</h4>
          <p class="m-gm-mini">Escalado, gobernanza, seguridad, analítica empresarial y capacidades de producto.</p>
        </div>
      </div>
      <div class="m-gm-card" style="margin-top:16px;">
        <h4 style="margin:0 0 8px; color:#fff;">Cómo leer este mapa</h4>
        <p class="m-gm-note" style="margin:0;">Las superficies de la izquierda y del centro suelen ser de trabajo humano diario. Las del final son de construcción y escala. Si intentas empezar en Vertex cuando todavía no sabes cuál es el flujo correcto en Docs o Sheets, te saltas el aprendizaje más importante.</p>
      </div>
    </div>
  </div>

  <div id="m-gm-cases" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Casos prácticos por tipo de trabajo</h3>
      <div class="m-gm-grid-3" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Contrato largo</h4><p class="m-gm-note"><b>Dónde:</b> Gemini App + Drive. <b>Salida:</b> tabla de riesgos.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Reunión operativa</h4><p class="m-gm-note"><b>Dónde:</b> Meet + Docs. <b>Salida:</b> minuta y compromisos.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Tabla de presupuesto</h4><p class="m-gm-note"><b>Dónde:</b> Sheets + Gemini. <b>Salida:</b> anomalías y alerta ejecutiva.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Correos repetidos</h4><p class="m-gm-note"><b>Dónde:</b> Gmail + Gema. <b>Salida:</b> respuestas consistentes.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Automatización futura</h4><p class="m-gm-note"><b>Dónde:</b> AI Studio + API. <b>Salida:</b> lógica estructurada.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Escala empresarial</h4><p class="m-gm-note"><b>Dónde:</b> Vertex AI. <b>Salida:</b> solución gobernable y estable.</p></div>
      </div>
      <div class="m-gm-grid-3" style="margin-top:14px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Profesor con Classroom</h4><p class="m-gm-note"><b>Dónde:</b> Classroom + Docs + Slides. <b>Salida:</b> clase, rúbrica y apoyo visual.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Ventas y formularios</h4><p class="m-gm-note"><b>Dónde:</b> Forms + Sheets + Gmail. <b>Salida:</b> clasificación de leads y seguimiento.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Inspección en campo</h4><p class="m-gm-note"><b>Dónde:</b> Android + Drive + Gemini. <b>Salida:</b> reporte con foto, hallazgo y acción.</p></div>
      </div>
      <div class="m-gm-card" style="margin-top:16px;">
        <h4 style="margin:0 0 8px; color:#fff;">Señales de que lo estás usando bien</h4>
        <ul style="font-size:0.8rem; color:var(--gm-soft); line-height:1.9; padding-left:18px; margin:0;">
          <li>Terminas con un entregable listo para compartir, no solo con una conversación interesante.</li>
          <li>La IA trabaja donde ya vive la información: correo, documento, tabla, reunión o app.</li>
          <li>Repites menos trabajo manual porque reutilizas Gemas, prompts o flujos estables.</li>
        </ul>
      </div>
      <div class="m-gm-grid-2" style="margin-top:14px;">
        <div class="m-gm-route">
          <h4>Uso invisible pero poderoso</h4>
          <div class="m-gm-route-line">No todo wow es “generar texto”. También hay valor en <b>priorizar</b>, <b>clasificar</b>, <b>convertir formatos</b>, <b>extraer decisiones</b> y <b>dejar listo el siguiente paso</b>.</div>
        </div>
        <div class="m-gm-route">
          <h4>Fórmula de alto impacto</h4>
          <div class="m-gm-route-line"><span class="m-gm-highlight">Contexto real + formato de salida + criterio de calidad</span> = respuestas mucho mejores que un prompt genérico.</div>
        </div>
      </div>
    </div>
  </div>

  <div id="m-gm-hidden" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">15 usos poco obvios que casi nadie aprovecha bien</h3>
      <p class="m-gm-note">Aquí está una de las capas más valiosas del módulo. Muchos usuarios solo piensan en “hacer preguntas”. Estas son formas más maduras y rentables de usar Gemini dentro del ecosistema Google.</p>
      <div class="m-gm-grid-3" style="margin-top:16px;">
        <div class="m-gm-route"><h4>1. Convertir correos en tareas</h4><div class="m-gm-route-line">No responder de inmediato: primero extraer decisión, responsable y urgencia.</div></div>
        <div class="m-gm-route"><h4>2. Traducir tablas a narrativa</h4><div class="m-gm-route-line">Sheets no solo para números: también para explicar qué significan esos números.</div></div>
        <div class="m-gm-route"><h4>3. Extraer criterio experto</h4><div class="m-gm-route-line">Usar una buena sesión de trabajo para convertirla en una Gema reusable.</div></div>
        <div class="m-gm-route"><h4>4. Limpiar reuniones</h4><div class="m-gm-route-line">Separar acuerdos, ruido, ideas, bloqueos y siguientes pasos.</div></div>
        <div class="m-gm-route"><h4>5. Diseñar formularios mejores</h4><div class="m-gm-route-line">Usar Gemini para mejorar preguntas, reducir ambigüedad y captar mejores datos.</div></div>
        <div class="m-gm-route"><h4>6. Crear material docente</h4><div class="m-gm-route-line">Tomar un PDF complejo y convertirlo en una secuencia enseñable con ejemplos.</div></div>
        <div class="m-gm-route"><h4>7. Transformar fotos en reporte</h4><div class="m-gm-route-line">Inspección, evidencia y acción recomendada desde Android o Drive.</div></div>
        <div class="m-gm-route"><h4>8. Hacer pre-auditoría</h4><div class="m-gm-route-line">Detectar faltantes, inconsistencias y señales rojas antes de revisión humana final.</div></div>
        <div class="m-gm-route"><h4>9. Preparar presentaciones ejecutivas</h4><div class="m-gm-route-line">Slides con mensaje por lámina, no solo con viñetas bonitas.</div></div>
        <div class="m-gm-route"><h4>10. Reusar videos</h4><div class="m-gm-route-line">Tomar una clase o reunión grabada y convertirla en resumen, FAQ y checklist.</div></div>
        <div class="m-gm-route"><h4>11. Clasificar leads o solicitudes</h4><div class="m-gm-route-line">Forms + Sheets + Gemini para priorizar atención sin hacerlo a mano.</div></div>
        <div class="m-gm-route"><h4>12. Diseñar copilotos internos</h4><div class="m-gm-route-line">Gemas para equipos concretos: compras, jurídico, soporte, proyectos.</div></div>
        <div class="m-gm-route"><h4>13. Encontrar el “dato faltante”</h4><div class="m-gm-route-line">No solo responder: señalar qué hace falta para decidir mejor.</div></div>
        <div class="m-gm-route"><h4>14. Pasar de hábito a sistema</h4><div class="m-gm-route-line">Cuando un flujo ya funciona, moverlo a Apps Script, API o Vertex.</div></div>
        <div class="m-gm-route"><h4>15. Convertir conocimiento disperso en operación</h4><div class="m-gm-route-line">Drive + Gemini + Gema = criterio institucionalizable.</div></div>
      </div>
      <div class="m-gm-card" style="margin-top:16px;">
        <h4 style="margin:0 0 8px; color:#fff;">Qué tienen en común estos usos</h4>
        <ul style="font-size:0.8rem; color:var(--gm-soft); line-height:1.9; padding-left:18px; margin:0;">
          <li>No parten de “qué prompt uso”, sino de “qué fricción quiero eliminar”.</li>
          <li>Trabajan con contexto real, no con ejemplos vacíos.</li>
          <li>Conectan captura, interpretación y acción en lugar de quedarse en una respuesta suelta.</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="m-gm-prompts" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Prompts maestros por producto Google</h3>
      <p class="m-gm-note">Esta sección no busca darte frases mágicas, sino plantillas de alto nivel para que aprendas a pedir mejor dentro de cada superficie del ecosistema.</p>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-promptbox">
          <h4 style="margin:0 0 8px; color:#fff;">Gmail</h4>
          <pre id="gm-master-gmail" style="background:none; border:none; padding:0; margin:0; white-space:pre-wrap; color:#c4b5fd; font-size:0.74rem;">Lee este correo como si fueras mi jefe de gabinete. Dime:
1. Qué quiere realmente la otra persona.
2. Qué nivel de urgencia tiene.
3. Qué respuesta conviene enviar hoy.
4. Qué decisión o dato falta antes de responder.
Redacta la respuesta en tono profesional y breve.</pre>
          <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'master-gmail')">📋 Copiar</button>
        </div>
        <div class="m-gm-promptbox">
          <h4 style="margin:0 0 8px; color:#fff;">Docs</h4>
          <pre id="gm-master-docs" style="background:none; border:none; padding:0; margin:0; white-space:pre-wrap; color:#c4b5fd; font-size:0.74rem;">Convierte este material en un documento listo para circular. Usa esta estructura:
1. Contexto.
2. Hallazgos clave.
3. Riesgos o vacíos.
4. Recomendación.
5. Siguiente paso.
Escribe claro, elimina relleno y piensa en un lector ocupado.</pre>
          <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'master-docs')">📋 Copiar</button>
        </div>
        <div class="m-gm-promptbox">
          <h4 style="margin:0 0 8px; color:#fff;">Sheets</h4>
          <pre id="gm-master-sheets" style="background:none; border:none; padding:0; margin:0; white-space:pre-wrap; color:#c4b5fd; font-size:0.74rem;">Analiza esta tabla como un analista senior. Necesito:
1. Anomalías.
2. Tendencias.
3. Filas críticas.
4. Dato faltante más importante.
5. Recomendación ejecutiva basada en evidencia.</pre>
          <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'master-sheets')">📋 Copiar</button>
        </div>
        <div class="m-gm-promptbox">
          <h4 style="margin:0 0 8px; color:#fff;">Meet</h4>
          <pre id="gm-master-meet" style="background:none; border:none; padding:0; margin:0; white-space:pre-wrap; color:#c4b5fd; font-size:0.74rem;">Resume esta reunión para ejecución. Separa:
1. Decisiones tomadas.
2. Pendientes.
3. Responsables.
4. Riesgos o bloqueos.
5. Próximo paso sugerido.
No mezcles ideas sueltas con acuerdos formales.</pre>
          <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'master-meet')">📋 Copiar</button>
        </div>
        <div class="m-gm-promptbox">
          <h4 style="margin:0 0 8px; color:#fff;">Gemini App</h4>
          <pre id="gm-master-app" style="background:none; border:none; padding:0; margin:0; white-space:pre-wrap; color:#c4b5fd; font-size:0.74rem;">Actúa como un estratega de trabajo. Con estos archivos o este contexto, ayúdame a decidir:
1. Qué problema real estoy resolviendo.
2. Qué evidencia ya tengo.
3. Qué dato falta.
4. Qué entregable debería producir.
5. En qué producto Google conviene continuar.</pre>
          <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'master-app')">📋 Copiar</button>
        </div>
        <div class="m-gm-promptbox">
          <h4 style="margin:0 0 8px; color:#fff;">AI Studio / Vertex</h4>
          <pre id="gm-master-build" style="background:none; border:none; padding:0; margin:0; white-space:pre-wrap; color:#c4b5fd; font-size:0.74rem;">Quiero convertir este flujo humano en una capacidad de sistema. Diseña:
1. Entrada.
2. Procesamiento.
3. Salida.
4. Control humano.
5. Riesgos.
6. Camino de prueba a producción.
Responde como si fueras arquitecto de solución.</pre>
          <button class="m-gm-copy" style="margin-top:10px;" onclick="gmCopy(this,'master-build')">📋 Copiar</button>
        </div>
      </div>
      <div class="m-gm-card" style="margin-top:16px;">
        <h4 style="margin:0 0 8px; color:#fff;">Patrón común de los buenos prompts</h4>
        <p class="m-gm-note" style="margin:0;">Los más útiles siempre definen <span class="m-gm-highlight">rol</span>, <span class="m-gm-highlight">tipo de salida</span>, <span class="m-gm-highlight">criterio de calidad</span> y <span class="m-gm-highlight">decisión final esperada</span>. Sin esas cuatro piezas, Gemini tiende a responder bonito pero menos útil.</p>
      </div>
    </div>
  </div>

  <div id="m-gm-architectures" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Arquitecturas ejemplo dentro del ecosistema Google</h3>
      <p class="m-gm-note">Estas arquitecturas muestran cómo pensar Gemini como flujo de trabajo y no como pantalla aislada. Son patrones que puedes adaptar a casi cualquier sector.</p>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-route">
          <h4>Arquitectura 1: Gestión ejecutiva</h4>
          <div class="m-gm-route-line"><b>Gmail</b> recibe solicitudes → <b>Meet</b> consolida contexto → <b>Docs</b> formaliza → <b>Sheets</b> prioriza → <b>Slides</b> comunica.</div>
        </div>
        <div class="m-gm-route">
          <h4>Arquitectura 2: Análisis documental</h4>
          <div class="m-gm-route-line"><b>Drive</b> centraliza archivos → <b>Gemini App</b> interpreta → <b>Docs</b> resume → <b>Gema</b> estandariza revisiones futuras.</div>
        </div>
        <div class="m-gm-route">
          <h4>Arquitectura 3: Operación comercial</h4>
          <div class="m-gm-route-line"><b>Forms</b> capta leads → <b>Sheets</b> organiza → <b>Gemini</b> clasifica → <b>Gmail</b> responde → <b>AppSheet</b> operacionaliza.</div>
        </div>
        <div class="m-gm-route">
          <h4>Arquitectura 4: Docencia inteligente</h4>
          <div class="m-gm-route-line"><b>Drive</b> guarda insumos → <b>Gemini App</b> simplifica → <b>Docs</b> prepara guía → <b>Slides</b> enseña → <b>Classroom</b> distribuye.</div>
        </div>
        <div class="m-gm-route">
          <h4>Arquitectura 5: Trabajo de campo</h4>
          <div class="m-gm-route-line"><b>Android</b> captura foto/voz → <b>Drive</b> almacena → <b>Gemini</b> extrae hallazgo → <b>Docs</b> genera reporte → <b>Sheets</b> seguimiento.</div>
        </div>
        <div class="m-gm-route">
          <h4>Arquitectura 6: De piloto a producto</h4>
          <div class="m-gm-route-line"><b>Gemini App</b> prueba valor → <b>AI Studio</b> refina → <b>API</b> integra → <b>Vertex</b> gobierna → <b>BigQuery/Looker</b> mide impacto.</div>
        </div>
      </div>
      <div class="m-gm-grid-3" style="margin-top:14px;">
        <div class="m-gm-step"><div class="m-gm-step-badge">I</div><h4 style="margin:0 0 6px; color:#fff;">Inicio</h4><p class="m-gm-note" style="margin:0;">El flujo arranca donde nace el problema real, no donde te gusta trabajar.</p></div>
        <div class="m-gm-step"><div class="m-gm-step-badge">II</div><h4 style="margin:0 0 6px; color:#fff;">Orquestación</h4><p class="m-gm-note" style="margin:0;">Cada producto hace una parte distinta: captar, interpretar, documentar, comunicar o escalar.</p></div>
        <div class="m-gm-step"><div class="m-gm-step-badge">III</div><h4 style="margin:0 0 6px; color:#fff;">Madurez</h4><p class="m-gm-note" style="margin:0;">El nivel avanzado consiste en pasar de ayuda puntual a capacidad institucional.</p></div>
      </div>
    </div>
  </div>

  <div id="m-gm-estrategia" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Operación: Super-Visión Presupuestal</h3>
      <p class="m-gm-note">Tu objetivo es usar Gemini como analista multimodal dentro del ecosistema Google: tabla, contexto y evidencia visual para producir una decisión ejecutiva.</p>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span style="font-size:0.8rem; font-weight:700; color:#c4b5fd;">📊 CSV de presupuesto con anomalía</span>
        <button class="m-gm-copy" onclick="gmCopy(this,'csv')">📋 Copiar CSV</button>
      </div>
      <pre id="gm-csv" style="background:#0b0b15; border:1px solid #1e1b3a; border-radius:8px; padding:12px; font-size:0.73rem; color:#a78bfa; line-height:1.6; overflow-x:auto; margin:0;">Concepto,Presupuesto_Aprobado,Ejecutado,Diferencia
Excavaciones,45000000,44800000,200000
Cimentación,120000000,119500000,500000
Estructura Metálica,280000000,278000000,2000000
Instalaciones Eléctricas,95000000,94000000,1000000
Acabados Interiores,67000000,148500000,-81500000
Plomería,38000000,37000000,1000000
Pintura y carpintería,22000000,21500000,500000
Total,667000000,743300000,-76300000</pre>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Prompt #1: anomalías</h4><button class="m-gm-copy" onclick="gmCopy(this,'p1')">📋 Copiar</button></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Prompt #2: cruce multimodal</h4><button class="m-gm-copy" onclick="gmCopy(this,'p2')">📋 Copiar</button></div>
      </div>
      <div id="gm-copy-items" style="display:none;">
        <span id="gm-p1">Eres auditor financiero de obra pública. Analiza este presupuesto CSV. Para cada fila: calcula desviación, marca alertas mayores al 10% e identifica la línea de mayor riesgo. Entrega una tabla ordenada.</span>
        <span id="gm-p2">Analiza esta imagen de plano junto con los datos del presupuesto. Dime qué partida genera más alerta, qué evidencia visual la respalda y qué conclusión ejecutiva debe enviarse hoy.</span>
        <span id="gm-gmail">Redacta una respuesta breve, profesional y clara para este correo. Resume primero el problema en una línea, responde con tono ejecutivo y cierra con una siguiente acción concreta. Si falta información, pide solo lo esencial.</span>
        <span id="gm-docs">Convierte estas notas sueltas en un documento profesional con esta estructura: contexto, hallazgos, riesgos, recomendación y siguiente paso. Usa lenguaje claro y elimina redundancias.</span>
        <span id="gm-sheets">Analiza esta tabla y detecta: anomalías, filas críticas, tendencias y datos faltantes. Entrega una tabla breve con Hallazgo | Evidencia | Acción recomendada.</span>
        <span id="gm-slides">Convierte este tema en una presentación de máximo 7 diapositivas. Para cada diapositiva dame: título, idea central y apoyo visual sugerido.</span>
        <span id="gm-meet">Con base en esta reunión, genera: 1. resumen ejecutivo, 2. compromisos con responsables, 3. riesgos o bloqueos, 4. próximos pasos con fecha sugerida.</span>
        <span id="gm-multimodal">Analiza estos insumos como un solo caso. Usa el archivo tabular como evidencia numérica y la imagen/audio/video como evidencia contextual. Dime: 1. Hallazgo principal. 2. Evidencia. 3. Acción recomendada. 4. Dato faltante.</span>
        <span id="gm-gema">Actúa como un asistente especialista en convertir insumos desordenados en entregables listos para enviar. Siempre responde con esta estructura: 1. Resumen ejecutivo. 2. Tabla de puntos clave. 3. Siguiente acción recomendada. Si faltan datos, haz máximo 3 preguntas antes de continuar.</span>
        <span id="gm-build">Quiero convertir esta tarea en una automatización futura. Antes de responder: 1. Identifica entradas. 2. Define procesamiento. 3. Propón salida estructurada. 4. Señala qué parte debe seguir siendo humana. Entrega: Entradas | Lógica | Salida | Riesgo | Próximo paso para API.</span>
        <span id="gm-flows">Diseña el mejor flujo dentro del ecosistema Google para esta tarea. Indica: 1. Producto donde empieza. 2. Producto donde se transforma el contenido. 3. Producto donde se comunica o comparte. 4. Producto donde escalaría si se vuelve repetitivo. Entrega el resultado como una secuencia paso a paso.</span>
        <span id="gm-master-gmail">Lee este correo como si fueras mi jefe de gabinete. Dime: 1. Qué quiere realmente la otra persona. 2. Qué nivel de urgencia tiene. 3. Qué respuesta conviene enviar hoy. 4. Qué decisión o dato falta antes de responder. Redacta la respuesta en tono profesional y breve.</span>
        <span id="gm-master-docs">Convierte este material en un documento listo para circular. Usa esta estructura: 1. Contexto. 2. Hallazgos clave. 3. Riesgos o vacíos. 4. Recomendación. 5. Siguiente paso. Escribe claro, elimina relleno y piensa en un lector ocupado.</span>
        <span id="gm-master-sheets">Analiza esta tabla como un analista senior. Necesito: 1. Anomalías. 2. Tendencias. 3. Filas críticas. 4. Dato faltante más importante. 5. Recomendación ejecutiva basada en evidencia.</span>
        <span id="gm-master-meet">Resume esta reunión para ejecución. Separa: 1. Decisiones tomadas. 2. Pendientes. 3. Responsables. 4. Riesgos o bloqueos. 5. Próximo paso sugerido. No mezcles ideas sueltas con acuerdos formales.</span>
        <span id="gm-master-app">Actúa como un estratega de trabajo. Con estos archivos o este contexto, ayúdame a decidir: 1. Qué problema real estoy resolviendo. 2. Qué evidencia ya tengo. 3. Qué dato falta. 4. Qué entregable debería producir. 5. En qué producto Google conviene continuar.</span>
        <span id="gm-master-build">Quiero convertir este flujo humano en una capacidad de sistema. Diseña: 1. Entrada. 2. Procesamiento. 3. Salida. 4. Control humano. 5. Riesgos. 6. Camino de prueba a producción. Responde como si fueras arquitecto de solución.</span>
        <span id="gm-final">Quiero resolver este caso usando el ecosistema Google completo. Dime: 1. desde qué herramienta empezar, 2. qué parte hacer en Workspace, 3. si conviene una Gema, 4. cuándo pasar a AI Studio o Vertex, 5. cuál sería el entregable final.</span>
      </div>
      <ul style="list-style:none; padding:0; margin:16px 0 0; display:flex; flex-direction:column; gap:8px;">
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="gmCheck(this,0,25)"><div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div><div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Carga el CSV y fija el formato de salida</p><p style="font-size:0.78rem; margin:0;">Evita respuestas genéricas.</p></div><span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+25 XP</span></li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="gmCheck(this,1,40)"><div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div><div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Pega el Prompt #1</p><p style="font-size:0.78rem; margin:0;">La anomalía crítica debe aparecer claramente.</p></div><span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+40 XP</span></li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="gmCheck(this,2,60)"><div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div><div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Cruza tabla con evidencia visual si la tienes</p><p style="font-size:0.78rem; margin:0;">Ese es el verdadero valor multimodal.</p></div><span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+60 XP</span></li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="gmCheck(this,3,75)"><div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div><div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Cierra con recomendación ejecutiva</p><p style="font-size:0.78rem; margin:0;">La IA debe terminar en decisión, no solo en análisis.</p></div><span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+75 XP</span></li>
      </ul>
      <div style="background:linear-gradient(135deg,#10b981,#059669); color:#fff; border-radius:8px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; margin-top:16px; font-weight:800;"><span>🏆 XP Ganado</span><span id="gm-xp-count">0 / 200 XP</span></div>
    </div>
  </div>

  <div id="m-gm-mission" class="ag-content">
    <div class="m-gm-card">
      <h3 style="margin:0 0 10px; color:#fff;">Reto Final: Orquesta Google Completa</h3>
      <p class="m-gm-note">Debes diseñar una ruta completa: qué parte del caso resuelves en Gemini App, cuál dentro de Workspace, cuándo conviene una Gema y cuándo escalarías a AI Studio o Vertex.</p>
      <div class="m-gm-grid-2" style="margin-top:16px;">
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Escenario</h4><p class="m-gm-note">Contrato largo + tabla presupuestal + correos + reunión + necesidad de automatización futura.</p></div>
        <div class="m-gm-card" style="margin:0;"><h4 style="margin:0 0 8px; color:#fff;">Entregable</h4><p class="m-gm-note">Herramienta inicial, flujo por producto Google, entregable final y punto de escalamiento.</p><button class="m-gm-copy" onclick="gmCopy(this,'final')">📋 Copiar Prompt Del Reto</button></div>
      </div>
      <div class="m-gm-card" style="margin-top:16px;">
        <h4 style="margin:0 0 8px; color:#fff;">Para superar el reto debes demostrar</h4>
        <ul style="font-size:0.8rem; color:var(--gm-soft); line-height:1.9; padding-left:18px; margin:0;">
          <li>Que sabes empezar en la herramienta correcta y no por costumbre.</li>
          <li>Que distingues entre uso personal, uso repetible y uso escalable.</li>
          <li>Que conviertes el ecosistema Google en un flujo coherente de principio a fin.</li>
        </ul>
      </div>
      <div class="m-gm-card" style="margin-top:16px;"><p>Chequeo rápido: ¿cuál es la mejor regla mental para elegir dónde usar Gemini dentro de Google?</p><input type="text" id="ws-val-gm" class="premium-textarea" placeholder="Pista: depende del contexto de trabajo"><button class="gm-btn-glow" style="width:100%; margin-top:15px;" onclick="mGmFinalV()">Reclamar Insignia</button></div>
    </div>
  </div>

  <div class="module-nav"><button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú</button></div>
</div>

<script>
  window.gmCopy = function(btn, type) {
    const ids = { csv:'gm-csv', p1:'gm-p1', p2:'gm-p2', gmail:'gm-gmail', docs:'gm-docs', sheets:'gm-sheets', slides:'gm-slides', meet:'gm-meet', multimodal:'gm-multimodal', gema:'gm-gema', build:'gm-build', flows:'gm-flows', 'master-gmail':'gm-master-gmail', 'master-docs':'gm-master-docs', 'master-sheets':'gm-master-sheets', 'master-meet':'gm-master-meet', 'master-app':'gm-master-app', 'master-build':'gm-master-build', final:'gm-final' };
    const text = document.getElementById(ids[type])?.innerText || '';
    navigator.clipboard.writeText(text).catch(() => {});
    const orig = btn.textContent; btn.textContent = '✅ Copiado'; btn.style.color = '#10b981';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2500);
    if (window.app) window.app.addXP(5);
  };
  let gmCheckDone = [false,false,false,false]; let gmTotalXP = 0;
  window.gmCheck = function(el, idx, xp) {
    if (gmCheckDone[idx]) return; gmCheckDone[idx] = true;
    el.style.borderColor='rgba(16,185,129,0.4)'; el.style.background='rgba(16,185,129,0.05)';
    const chk = el.querySelector('div'); if (chk) { chk.style.background='#10b981'; chk.style.borderColor='#10b981'; chk.style.color='#fff'; }
    gmTotalXP += xp; if (window.app) window.app.addXP(xp);
    const c = document.getElementById('gm-xp-count'); if (c) c.textContent = gmTotalXP + ' / 200 XP';
  };
  setTimeout(() => {
    const parent = document.getElementById('module-gemini-productivity'); if (!parent) return;
    const tabs = parent.querySelectorAll('.premium-tab-gm'); const contents = parent.querySelectorAll('.ag-content');
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active')); contents.forEach(x => x.classList.remove('active'));
      t.classList.add('active'); const target = parent.querySelector('#' + t.dataset.tab); if (target) target.classList.add('active');
    }));
  }, 300);
  let gmBusy = false;
  window.mGmSimulate = (type) => {
    if (gmBusy) return; gmBusy = true;
    const preview = document.getElementById('gm-media-preview'); const meter = document.getElementById('gm-meter-f'); const status = document.getElementById('gm-status');
    const icons = { video:'📹', code:'📄', audio:'🎙️' }; preview.innerText = icons[type]; status.innerText = 'Analizando ' + type + ' dentro del stack Gemini...'; meter.style.width = '0%';
    let p = 0; const intv = setInterval(() => { p += 5; meter.style.width = p + '%'; if (p >= 100) { clearInterval(intv); gmBusy = false; status.innerHTML = '<span style="color:#10b981;">✅ Análisis multimodal completo</span>'; if (window.app) window.app.addXP(40); } }, 55);
  };
  window.mGmFinalV = () => {
    const v = document.getElementById('ws-val-gm')?.value.toLowerCase() || '';
    if (v.includes('depende del contexto') || v.includes('no es una sola herramienta') || v.includes('workspace') || v.includes('según la tarea')) {
      alert('¡Maestro del Ecosistema Google! +220 XP'); if (window.app) window.app.addXP(220); document.querySelector('.complete-module-btn')?.click();
    } else { alert('Pista: no se trata de una sola herramienta, sino de elegir el punto de entrada según la tarea.'); }
  };
</script>
`;
  const target = document.getElementById('module-gemini-productivity');
  if (target) target.innerHTML = geminiHTML;
  return { init: function() { console.log('Gemini Ecosistema Google loaded'); } };
})();
