window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-13'] = window.GuiaModules['module-14'] = window.GuiaModules['module-15'] = (function() {
  const modules = {
'module-13': `
<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168, 85, 247, 0.1)); border-left: 5px solid var(--primary-light);">
  <div class="module-number gamer-badge">Módulo 13 — Orquestación</div>
  <h2 class="module-title glow-text" style="color:var(--primary-light);">🔗 Conectividad y Ecosistemas</h2>
  <p class="module-description">Domina el arte de hacer que las IAs hablen entre sí. De Zapier a la automatización de procesos: construye tu sistema nervioso digital.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 40 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Arquitecto de Flujos</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m13-concept">🧠 El Concepto</button>
  <button class="tab-btn" data-tab="m13-zapier">⚡ Zapier Lab</button>
  <button class="tab-btn" data-tab="m13-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m13-concept" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🔌</span> ¿Por qué Orquestar?</h3>
    <p>Una IA sola es potente, pero una IA conectada a tus herramientas (Correo, Excel, Calendario) es un superpoder. No más copiar y pegar: deja que los datos fluyan.</p>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;">
      <div style="background:rgba(255,255,255,0.02);padding:20px;border-radius:12px;border:1px solid #333;">
        <h4 style="color:#ef4444;margin:0 0 10px;">Tradicional 🐌</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Recibes correo -> Copias texto -> Abres ChatGPT -> Pegas -> Copias respuesta -> Vuelves al correo -> Pegas -> Envias.</p>
      </div>
      <div style="background:rgba(16,185,129,0.05);padding:20px;border-radius:12px;border:1px solid #10b981;">
        <h4 style="color:#10b981;margin:0 0 10px;">Orquestado ⚡</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Recibes correo -> La IA detecta el tema -> Redacta borrador -> El correo te avisa con el borrador listo para apretar "Enviar".</p>
      </div>
    </div>
    
    <!-- NUEVO: RADAR DE CONECTIVIDAD M13 -->
    <div style="margin-top:25px; background:rgba(99,102,241,0.05); border:1px solid rgba(99,102,241,0.2); padding:20px; border-radius:12px;">
      <h4 style="margin-top:0; color:var(--primary-light);">📡 Radar de Herramientas de Orquestación</h4>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:10px;">
        <div style="font-size:0.8rem;"><strong><a href="https://zapier.com" target="_blank" style="color:var(--primary-light);">Zapier</a>:</strong> El rey de la facilidad. +7,000 apps. Ideal para empezar en minutos.</div>
        <div style="font-size:0.8rem;"><strong><a href="https://make.com" target="_blank" style="color:var(--primary-light);">Make.com</a>:</strong> Potencia visual y ahorro. Permite lógica compleja y es más económico.</div>
        <div style="font-size:0.8rem;"><strong><a href="https://n8n.io" target="_blank" style="color:var(--primary-light);">n8n.io</a>:</strong> Soberanía total. Se puede instalar en servidores propios para máxima privacidad.</div>
      </div>
    </div>
    
    <div class="info-note" style="margin-top:20px; background:rgba(99,102,241,0.1); border-left:4px solid var(--primary-light); padding:15px; border-radius:8px;">
      <p style="font-size:0.9rem; margin:0;"><strong>🛠️ Herramientas Líderes:</strong> Recomendamos explorar <a href="https://zapier.com" target="_blank" class="glow-link">Zapier</a> para facilidad extrema o <a href="https://make.com" target="_blank" class="glow-link">Make.com</a> para flujos complejos y económicos.</p>
    </div>
  </div>
</div>

<!-- TAB 2: ZAPIER LAB -->
<div id="m13-zapier" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">⚡</span> Guía: Tu Primera Automatización</h3>
    <p>Sigue estos 5 pasos maestros para conectar cualquier aplicación con IA:</p>
    
    <div class="steps-container" style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">
      <div class="step-item" style="background:rgba(255,255,255,0.03); padding:15px; border-radius:10px; border:1px solid #333; position:relative; overflow:hidden;">
        <div style="position:absolute; right:-10px; top:-10px; font-size:4rem; opacity:0.05; font-weight:900;">1</div>
        <strong style="color:var(--primary-light);">1. El Disparador (Trigger):</strong>
        <p style="font-size:0.85rem; margin:5px 0 0; opacity:0.8;">El evento que inicia todo. Ej: "Cuando llegue un email" o "Cuando se llene un formulario".</p>
      </div>
      
      <div class="step-item" style="background:rgba(255,255,255,0.03); padding:15px; border-radius:10px; border:1px solid #333; position:relative; overflow:hidden;">
        <div style="position:absolute; right:-10px; top:-10px; font-size:4rem; opacity:0.05; font-weight:900;">2</div>
        <strong style="color:var(--primary-light);">2. Conexión de Aplicaciones:</strong>
        <p style="font-size:0.85rem; margin:5px 0 0; opacity:0.8;">Autentica tus cuentas (Gmail, Slack, Notion) de forma segura dentro de la plataforma orquestadora.</p>
      </div>
      
      <div class="step-item" style="background:rgba(255,255,255,0.03); padding:15px; border-radius:10px; border:1px solid #333; position:relative; overflow:hidden;">
        <div style="position:absolute; right:-10px; top:-10px; font-size:4rem; opacity:0.05; font-weight:900;">3</div>
        <strong style="color:var(--primary-light);">3. La Acción de IA:</strong>
        <p style="font-size:0.85rem; margin:5px 0 0; opacity:0.8;">Envía los datos al modelo (GPT-4, Claude) con un prompt específico para procesar la información.</p>
      </div>

      <div class="step-item" style="background:rgba(255,255,255,0.03); padding:15px; border-radius:10px; border:1px solid #333; position:relative; overflow:hidden;">
        <div style="position:absolute; right:-10px; top:-10px; font-size:4rem; opacity:0.05; font-weight:900;">4</div>
        <strong style="color:var(--primary-light);">4. El Mapeo de Datos:</strong>
        <p style="font-size:0.85rem; margin:5px 0 0; opacity:0.8;">Toma la respuesta de la IA y "conéctala" a los campos de destino (ej: columna B de Sheets, cuerpo del Correo).</p>
      </div>

      <div class="step-item" style="background:rgba(255,255,255,0.03); padding:15px; border-radius:10px; border:1px solid #333; position:relative; overflow:hidden;">
        <div style="position:absolute; right:-10px; top:-10px; font-size:4rem; opacity:0.05; font-weight:900;">5. Activación:</div>
        <strong style="color:#10b981;">5. ¡Ready to Zap!</strong>
        <p style="font-size:0.85rem; margin:5px 0 0; opacity:0.8;">Publica tu "Zap" y activa el interruptor. A partir de ahora funciona en segundo plano 24/7.</p>
      </div>
    </div>

    <!-- NUEVOS EJEMPLOS REALES M13 -->
    <div style="margin-top:25px; background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); padding:15px; border-radius:12px;">
      <h4 style="margin-top:0; color:#10b981;">💡 Casos de Uso Reales (Copia estas ideas):</h4>
      <ul style="font-size:0.8rem; line-height:1.6; padding-left:20px;">
        <li><strong>Soporte Automático:</strong> Email de cliente -> IA analiza sentimiento -> Si es enojo, avisa a jefe por WhatsApp; si es duda, redacta borrador.</li>
        <li><strong>Resumen de Reuniones:</strong> Grabación en Zoom -> IA transcribe -> IA extrae compromisos -> Crea tareas en <a href="https://trello.com" target="_blank" style="color:#10b981; text-decoration:underline;">Trello</a>/<a href="https://clickup.com" target="_blank" style="color:#10b981; text-decoration:underline;">ClickUp</a>.</li>
        <li><strong>Gestión de Gastos:</strong> Foto de recibo en Telegram -> IA extrae monto y fecha -> Guarda en <a href="https://sheets.google.com" target="_blank" style="color:#10b981; text-decoration:underline;">Google Sheets</a> automáticamente.</li>
      </ul>
    </div>

    <div class="exercise-box" style="margin-top:20px; border: 2px solid rgba(16,185,129,0.3); background:rgba(0,0,0,0.2); padding:20px; border-radius:12px; position:relative;">
      <h4 style="margin:0 0 15px; color:#10b981; display:flex; align-items:center; gap:10px;">
        <span class="pulse-dot"></span> 🕹️ Simulador de Lógica "If-Then-AI"
      </h4>
      <div id="logic-builder-ui" style="display:flex; flex-direction:column; gap:12px;">
         <div class="logic-row" style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:0.8rem; font-weight:700; color:#888; width:30px;">SI</span>
            <select id="logic-trigger" class="premium-select" style="flex:1; background:#111; border:1px solid #444; color:#fff; padding:5px; border-radius:5px; font-size:0.8rem;">
               <option>Llega un Email</option>
               <option>Nuevo seguidor en X</option>
               <option>Venta en Shopify</option>
            </select>
         </div>
         <div class="logic-row" style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:0.8rem; font-weight:700; color:#888; width:30px;">ENT</span>
            <select id="logic-ai" class="premium-select" style="flex:1; background:#111; border:1px solid #444; color:#fff; padding:5px; border-radius:5px; font-size:0.8rem;">
               <option>IA: Resumir texto</option>
               <option>IA: Detectar Idioma</option>
               <option>IA: Generar Imagen</option>
            </select>
         </div>
         <div class="logic-row" style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:0.8rem; font-weight:700; color:#888; width:30px;">HAZ</span>
            <select id="logic-action" class="premium-select" style="flex:1; background:#111; border:1px solid #444; color:#fff; padding:5px; border-radius:5px; font-size:0.8rem;">
               <option>Enviar a Google Sheets</option>
               <option>Publicar en Slack</option>
               <option>Enviar PDF por correo</option>
            </select>
         </div>
         <button class="gl-btn gl-btn-primary" style="margin-top:10px; font-weight:800; letter-spacing:1px;" onclick="const t=document.getElementById('logic-trigger').value; const a=document.getElementById('logic-ai').value; const ac=document.getElementById('logic-action').value; window.showToast('🔥 Flujo Creado: ' + t + ' → ' + a + ' → ' + ac + '. ¡Esto es orquestación!', 'success')">
           COMPILAR FLUJO
         </button>
      </div>
      <p style="font-size:0.7rem; margin-top:10px; opacity:0.6; text-align:center;">Este es el esquema que usarás en Zapier o Make.</p>
    </div>
  </div>
</div>
      
<!-- TAB 2 finalizado -->

<!-- TAB 3: MISIÓN -->
<div id="m13-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🔥</span><span class="exercise-title">Misión 13: El Arquitecto</span></div>
    <p>Diseña un flujo de automatización lógico. Debe tener: 1 Disparador (ej. Recibir reporte), 1 Acción de IA (ej. Resumir criticidad) y 1 Acción de Salida (ej. Notificar a Telegram).</p>
    <textarea class="premium-textarea" placeholder="Ej: SI recibo un correo con el asunto 'URGENTE', ENTONCES la IA de Zapier resume los puntos clave y los envia a mi Slack personal cada mañana..."></textarea>
    <!-- M13: Tour Visual Mejorado -->
    <div style="margin-top:25px; padding:15px; background:rgba(255,255,255,0.03); border-radius:12px; border:1px solid #333;">
      <h4 style="margin-top:0; color:var(--primary-light); font-size:0.9rem;">🎬 Tour Visual: Zapier en Acción</h4>
      <div style="display:flex; gap:10px; overflow-x:auto; padding:10px 0; scroll-snap-type: x mandatory;">
        <div style="min-width:140px; height:100px; background:#111; border:1px solid var(--primary-light); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column; font-size:0.7rem; scroll-snap-align: center;">
          <span style="font-size:1.8rem;">📥</span>
          <b>1. Trigger</b>
          <small style="opacity:0.6;">Email Entra</small>
        </div>
        <div style="min-width:140px; height:100px; background:#111; border:1px solid #555; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column; font-size:0.7rem; scroll-snap-align: center;">
          <span style="font-size:1.8rem;">🤖</span>
          <b>2. IA</b>
          <small style="opacity:0.6;">Resumir</small>
        </div>
        <div style="min-width:140px; height:100px; background:#111; border:1px solid #555; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column; font-size:0.7rem; scroll-snap-align: center;">
          <span style="font-size:1.8rem;">⚙️</span>
          <b>3. Filtro</b>
          <small style="opacity:0.6;">¿Es Urgente?</small>
        </div>
        <div style="min-width:140px; height:100px; background:#111; border:1px solid var(--success); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column; font-size:0.7rem; scroll-snap-align: center;">
          <span style="font-size:1.8rem;">🚀</span>
          <b>4. Salida</b>
          <small style="opacity:0.6;">Slack / Excel</small>
        </div>
      </div>
      <p style="font-size:0.65rem; color:#94a3b8; margin:10px 0 0;">Desliza para ver el flujo. Cada bloque es personalizable sin escribir una sola línea de código.</p>
    </div>

    <div class="reward-tag" style="margin-top:20px;">+150 XP · Insignia: Arquitecto de Flujos 🔗</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-13" style="width:100%;margin-top:15px;">✅ Enviar Arquitectura</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-12">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-14">Siguiente: Cerebro Digital →</button>
</div>
`,

'module-14': `
<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168, 85, 247, 0.15)); border: 1px solid rgba(99,102,241,0.2); position: relative; overflow: hidden;">
  <div class="glow-bg" style="position:absolute; top:-50%; left:-50%; width:200%; height:200%; background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%); z-index:0; pointer-events:none;"></div>
  <div class="module-number gamer-badge" style="background:#6366f1;color:#fff; position:relative; z-index:1;">Módulo 14 — Nivel Pro</div>
  <h2 class="module-title glow-text" style="color:#a5b4fc; position:relative; z-index:1;">🤖 Agentes de IA: De Chatear a Actuar</h2>
  <p class="module-description" style="position:relative; z-index:1;">"No le pidas que te diga qué hacer, pídele que lo haga por ti". Descubre la diferencia entre un chatbot y un agente que razona, planifica y ejecuta misiones complejas en un ecosistema soberano.</p>
  <div class="module-meta" style="position:relative; z-index:1;">
    <span class="module-meta-item">⏱️ 45 min</span>
    <span class="module-meta-item">💎 200 XP</span>
    <span class="module-meta-item">🏆 Insignia: Orquestador Soberano</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m14-concept">🧠 Concepto</button>
  <button class="tab-btn" data-tab="m14-catalog">📡 Radar</button>
  <button class="tab-btn" data-tab="m14-tree">🌳 Decisión</button>
  <button class="tab-btn" data-tab="m14-dimensions">🌌 Dimensiones</button>
  <button class="tab-btn" data-tab="m14-ethics">🛡️ Ética</button>
  <button class="tab-btn" data-tab="m14-lab">🧪 Simulador</button>
  <button class="tab-btn" data-tab="m14-game">🎮 Desafío</button>
  <button class="tab-btn" data-tab="m14-glossary">📖 Glosario</button>
  <button class="tab-btn" data-tab="m14-mission">🚀 Misión</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m14-concept" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🤔</span> ¿Qué es realmente un Agente?</h3>
    <p style="font-size:0.95rem; font-style:italic; opacity:0.8; margin-bottom:15px; border-left:3px solid #6366f1; padding-left:15px; background: rgba(99,102,241,0.05);">
      "Un chatbot te dice cómo resolver un problema; un agente resuelve el problema por ti mientras tú duermes."
    </p>
    <div style="background:rgba(99,102,241,0.05); padding:20px; border-radius:12px; margin-bottom:25px; border:1px solid rgba(99,102,241,0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
      <p style="font-size:0.85rem; margin:0; line-height:1.5;"><strong>Efecto Agente:</strong> Si tu vuelo se cancela a las 2 AM, un <b>chatbot</b> te dirá 'revisa la web'. Un <b>agente</b> entrará a la base de datos, buscará conexiones, reservará el único asiento disponible y te enviará el pase de abordar al móvil sin que muevas un dedo.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:15px;">
      <div style="background:rgba(255,255,255,0.03);padding:22px;border-radius:16px;border:1px solid rgba(239,68,68,0.2); transition: all 0.3s ease;">
        <h4 style="color:#ef4444;margin:0 0 12px; font-weight:800;">Chatbot Común</h4>
        <p style="font-size:0.85rem;margin:0; opacity:0.8;">Reactivo. Espera tu orden, busca en su memoria y responde. Si le pides "Organiza mi viaje", te da una lista. Tú ejecutas.</p>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:22px;border-radius:16px;border:1px solid rgba(16,185,129,0.3); box-shadow: 0 0 15px rgba(16,185,129,0.1);">
        <h4 style="color:#10b981;margin:0 0 12px; font-weight:800;">Agente de IA</h4>
        <p style="font-size:0.85rem;margin:0; opacity:0.8;">Proactivo. Define pasos, usa herramientas externas (navegador, Excel, API), navega la web y te entrega el resultado final. Él ejecuta.</p>
      </div>
    </div>
    
    <div class="learning-feedback-box" style="margin-top:25px; border: 1px solid rgba(165,180,252,0.2);">
      <div class="learning-feedback-header" style="background: rgba(99,102,241,0.1);"><span>Estructura de un Agente</span></div>
      <p style="font-size:0.85rem;margin-bottom:12px; opacity:0.9;">Un agente usa el ciclo <strong>ReAct (Reason + Act)</strong>:</p>
      <ul style="font-size:0.85rem;padding-left:20px; line-height:1.8;">
        <li><b>Pensamiento:</b> "Necesito comprar un vuelo de Medellín a Bogotá".</li>
        <li><b>Planificación:</b> "1. Buscar en SkyScanner, 2. Comparar precios, 3. Elegir el mejor".</li>
        <li><b>Acción:</b> Abre el navegador y consulta las webs en tiempo real.</li>
        <li><b>Observación:</b> "Encontré uno a $150k en Avianca".</li>
      </ul>
    </div>

    <!-- M14b: Caso de Estudio -->
    <div style="margin-top:25px; background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.25); border-radius:14px; padding:20px;">
      <h4 style="margin-top:0; color:#10b981; font-weight:800;">📚 Caso de Estudio: El Agente Auditor</h4>
      <p style="font-size:0.85rem; line-height:1.6; color:#cbd5e1;">En una oficina de contratación, se implementó un agente que navega automáticamente por el SECOP todos los días a las 6 AM. Busca pliegos que coincidan con la misión de la entidad, los lee, identifica riesgos de plazos y le entrega al director un reporte de 2 párrafos a las 8 AM en su celular. 
      <br><br>
      <strong>Resultado:</strong> El equipo de supervisión ahorró 15 horas semanales de búsqueda manual y nunca más se perdió una oportunidad por falta de tiempo para leer los anexos.</p>
    </div>
  </div>
</div>

<!-- TAB 2: CATÁLOGO -->
<div id="m14-catalog" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📡</span> Radar de Agentes 2025</h3>
    <p>Estas son las plataformas líderes para delegar misiones hoy mismo:</p>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:15px;margin-top:20px;">
      <div class="m11-tool-card" style="border-top:4px solid #3b82f6; background: rgba(59,130,246,0.03);">
        <h4 style="margin:0 0 8px;color:#3b82f6;"><a href="https://www.perplexity.ai" target="_blank" style="color:inherit; text-decoration:underline;">Perplexity (Pro) / Comet</a></h4>
        <p style="font-size:0.8rem;margin:0; opacity:0.8;">El mejor para investigación web. Navega múltiples fuentes en segundos y resume hallazgos con citas reales.</p>
      </div>
      <div class="m11-tool-card" style="border-top:4px solid #6366f1; background: rgba(99,102,241,0.03);">
        <h4 style="margin:0 0 8px;color:#6366f1;"><a href="https://manus.ai" target="_blank" style="color:inherit; text-decoration:underline;">Manus AI</a></h4>
        <p style="font-size:0.8rem;margin:0; opacity:0.8;">"The Web Agent". Un agente universal que puede manejar tu navegador para reservar hoteles, comprar productos o investigar datos técnicos profundos.</p>
      </div>
      <div class="m11-tool-card" style="border-top:4px solid #10b981; background: rgba(16,185,129,0.03);">
        <h4 style="margin:0 0 8px;color:#10b981;"><a href="https://zapier.com/central" target="_blank" style="color:inherit; text-decoration:underline;">Zapier Central</a></h4>
        <p style="font-size:0.8rem;margin:0; opacity:0.8;">Crea agentes que viven en tu Slack o Email y pueden actuar sobre 7,000 aplicaciones vinculadas (CRM, Sheets, SAP).</p>
      </div>
      <div class="m11-tool-card" style="border-top:4px solid #f59e0b; background: rgba(245,158,11,0.03);">
        <h4 style="margin:0 0 8px;color:#f59e0b;"><a href="https://www.cognition.ai" target="_blank" style="color:inherit; text-decoration:underline;">Devin / OpenDevin</a></h4>
        <p style="font-size:0.8rem;margin:0; opacity:0.8;">Agentes especializados en ingeniería. Pueden arreglar bugs en código, desplegar sitios web y aprender nuevas APIs solos.</p>
      </div>
    </div>
    <div class="info-note" style="margin-top:20px; background:rgba(239,68,68,0.05); border-left:4px solid #ef4444; padding:15px; border-radius:8px;">
      <p style="font-size:0.85rem; margin:0;"><strong>⚠️ Riesgo Crítico:</strong> Delegar sin <b>HITL</b> (Human-in-the-Loop) puede causar errores en cadena irreversibles. El agente propone, tú dispones.</p>
    </div>
  </div>
</div>

<!-- TAB 3: ÁRBOL DE DECISIÓN -->
<div id="m14-tree" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🌳</span> ¿Cuándo usar un Agente?</h3>
    <div class="decision-tree" style="margin-top:20px;">
      <div class="decision-step" style="background:rgba(99,102,241,0.1); border:1px solid #6366f1; padding:20px; border-radius:12px; margin-bottom:15px;">
        <h4 style="margin-top:0; color:#a5b4fc;">Paso 1: Complejidad de la Tarea</h4>
        <p style="font-size:0.85rem; margin-bottom:10px;">¿Requiere navegar por varios sitios o consultar múltiples herramientas?</p>
        <div style="display:flex; gap:10px;">
          <span style="background:#10b981; color:#000; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800;">SÍ → USA AGENTE</span>
          <span style="background:#ef4444; color:#fff; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800;">NO → USA CHATBOT</span>
        </div>
      </div>
      <div class="decision-step" style="background:rgba(255,255,255,0.02); border:1px solid #333; padding:20px; border-radius:12px; margin-bottom:15px;">
        <h4 style="margin-top:0; color:#888;">Paso 2: Sensibilidad del Dato</h4>
        <p style="font-size:0.85rem; margin-bottom:10px;">¿La tarea involucra bases de datos con información sensible o crítica?</p>
        <div style="display:flex; gap:10px;">
          <span style="background:#f59e0b; color:#000; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800;">SÍ → AGENTE LOCAL/PRIVADO</span>
          <span style="background:#3b82f6; color:#fff; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800;">NO → AGENTE CLOUD</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 4: DIMENSIONES OCULTAS -->
<div id="m14-dimensions" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🌌</span> Dimensiones Ocultas del Agente</h3>
    <p>Lo que no se ve en el chat, pero determina el éxito de la misión:</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
      <div class="metric-box" style="background:rgba(99,102,241,0.05); padding:20px; border-radius:12px; border:1px solid rgba(99,102,241,0.2);">
        <h4 style="color:#6366f1; margin-top:0;">Costos Fantasmas</h4>
        <p style="font-size:0.8rem; opacity:0.8;">Un agente puede llamar 100 veces a la API en 1 minuto. Sin límites, tu presupuesto puede desaparecer en una "búsqueda infinita".</p>
      </div>
      <div class="metric-box" style="background:rgba(236,72,153,0.05); padding:20px; border-radius:12px; border:1px solid rgba(236,72,153,0.2);">
        <h4 style="color:#ec4899; margin-top:0;">Latencia de Razonamiento</h4>
        <p style="font-size:0.8rem; opacity:0.8;">El agente no responde al instante. "Piensa" y "Actúa". Aprende a valorar la precisión sobre la inmediatez.</p>
      </div>
      <div class="metric-box" style="background:rgba(16,185,129,0.05); padding:20px; border-radius:12px; border:1px solid rgba(16,185,129,0.2);">
        <h4 style="color:#10b981; margin-top:0;">Autonomía vs Control</h4>
        <p style="font-size:0.8rem; opacity:0.8;">Configura el "Checkpoint System": el agente debe mostrarte su plan ANTES de ejecutar acciones irreversibles.</p>
      </div>
      <div class="metric-box" style="background:rgba(245,158,11,0.05); padding:20px; border-radius:12px; border:1px solid rgba(245,158,11,0.2);">
        <h4 style="color:#f59e0b; margin-top:0;">Fuga de Contexto</h4>
        <p style="font-size:0.8rem; opacity:0.8;">En misiones largas, el agente puede "olvidar" la instrucción inicial. Usa memorias externas o instrucciones persistentes.</p>
      </div>
    </div>
  </div>
</div>

<!-- TAB 5: ÉTICA -->
<div id="m14-ethics" class="ag-content">
  <div class="section-card animate-in" style="border-left: 4px solid #ef4444;">
    <h3><span class="icon">🛡️</span> Ética y Soberanía</h3>
    <p>Delegar no es renunciar a la responsabilidad. El dilema de la autonomía:</p>
    <div style="background:rgba(239,68,68,0.05); padding:20px; border-radius:12px; margin-top:20px; border:1px solid rgba(239,68,68,0.2);">
      <h4 style="color:#ef4444; margin-top:0;">El Dilema de la Caja Negra</h4>
      <p style="font-size:0.85rem; line-height:1.6;">Si un agente toma una decisión equivocada en un proceso institucional, ¿quién firma el error? La trazabilidad no es opcional: es tu escudo legal.</p>
      <ul style="font-size:0.8rem; margin-top:10px; opacity:0.8;">
        <li><strong>Transparencia:</strong> El agente debe citar fuentes y registros de navegación.</li>
        <li><strong>Intervención:</strong> Nunca dejes a un agente sin un botón de "STOP".</li>
        <li><strong>Sesgo de Acción:</strong> Los agentes tienden a querer resolver a toda costa, incluso si no tienen datos suficientes.</li>
      </ul>
    </div>
  </div>
</div>

<!-- TAB 6: LABORATORIO -->
<div id="m14-lab" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧪</span> Simulador de Misión</h3>
    <p>Configura el "Cerebro" de tu agente para una tarea institucional antes de que empiece a actuar.</p>
    
    <div class="glass-card" style="padding:20px;margin-top:20px;border:1px dashed rgba(255,255,255,0.2); position:relative; overflow:hidden;">
      <div style="margin-bottom:15px;">
        <label style="display:block;font-size:0.8rem;color:#94a3b8;margin-bottom:5px;">Misión del Agente:</label>
        <select id="m14-mission-select" class="premium-input" style="background:#0f172a;border-color:#334155; color:#fff; width:100%;" onchange="window.updateM14Lab()">
          <option value="audit">Auditar contratos recientes en el SECOP</option>
          <option value="research">Investigar nuevas leyes de IA en Europa</option>
          <option value="support">Responder PQRS de nivel técnico alto</option>
        </select>
      </div>
      
      <div id="m14-lab-display" style="background:rgba(0,0,0,0.5);padding:15px;border-radius:10px; border:1px solid #1e293b; min-height:100px;">
        <div style="color:#10b981;font-family:'Space Mono', monospace;font-size:0.75rem; border-bottom:1px solid #111; padding-bottom:5px; margin-bottom:10px;">[SISTEMA AGENTE ONLINE - KERNEL v3.2]</div>
        <div id="m14-agent-plan" style="margin-top:10px;font-size:0.8rem;line-height:1.6; color:#a5b4fc;">
          Cargando plan de acción...
        </div>
      </div>
      
      <div style="margin-top:15px;display:flex;gap:10px;">
        <button class="gl-btn gl-btn-outline" style="flex:1; font-size:0.75rem;" onclick="window.showToast('Límites ajustados (HITL Activo)', 'info')">Ajustar Límites (HITL)</button>
        <button class="gl-btn gl-btn-primary" style="flex:1; font-size:0.75rem; font-weight:800;" onclick="window.executeM14Lab()">Ejecutar Misión 🔥</button>
      </div>
    </div>
  </div>
</div>

<!-- TAB 7: DESAFÍO (GAME) -->
<div id="m14-game" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🎮</span> El Dilema del Agente</h3>
    <p>Pon a prueba tu criterio de "Arquitecto de Agentes". ¿Qué harías en estas situaciones críticas?</p>
    
    <div class="exercise-box" style="margin-top:20px; background:rgba(255,255,255,0.02); border:1px solid rgba(99,102,241,0.2);">
      <div style="margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:15px;">
        <h4 style="color:#818cf8; margin-bottom:10px;">Escenario 1: El correo explosivo</h4>
        <p style="font-size:0.85rem; opacity:0.9;">Le pides a tu agente que responda a una queja de un cliente. El agente ofrece un descuento del 100% sin consultarte.</p>
        <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px;">
          <button class="gl-btn gl-btn-outline" style="text-align:left; font-size:0.8rem;" onclick="window.showToast('0 XP: El cliente es feliz, comercialmente es un suicidio.', 'warning')">A) Genial, el cliente está feliz.</button>
          <button class="gl-btn gl-btn-outline" style="text-align:left; font-size:0.8rem;" onclick="window.showToast('+30 XP: ¡Correcto! Debiste limitar sus facultades financieras.', 'success')">B) Necesito limitar sus facultades financieras primero.</button>
        </div>
      </div>
      
      <div>
        <h4 style="color:#818cf8; margin-bottom:10px;">Escenario 2: La búsqueda infinita</h4>
        <p style="font-size:0.85rem; opacity:0.9;">Tu agente de investigación lleva 15 minutos navegando por 100 sitios y el costo de API está subiendo desmesuradamente.</p>
        <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px;">
          <button class="gl-btn gl-btn-outline" style="text-align:left; font-size:0.8rem;" onclick="window.showToast('+40 XP: ¡Exacto! Siempre define límites de fuentes o tiempo.', 'success')">A) Detener y ajustar (Máximo 5 fuentes).</button>
          <button class="gl-btn gl-btn-outline" style="text-align:left; font-size:0.8rem;" onclick="window.showToast('10 XP: La calidad es importante, pero el presupuesto manda.', 'warning')">B) Dejar que termine para asegurar calidad.</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 8: GLOSARIO -->
<div id="m14-glossary" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📖</span> Glosario de Autonomía Pro</h3>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-top:20px;">
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">ReAct:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">Ciclo de Razonamiento (Reason) + Acción (Act) que permite a la IA planificar antes de ejecutar.</p>
      </div>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">HITL:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">Human-in-the-Loop. El principio de que un humano debe estar siempre presente para supervisar decisiones críticas.</p>
      </div>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">Tool Use / Call:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">Capacidad de la IA de invocar el uso de calculadoras, navegadores o APIs externas.</p>
      </div>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">MCP:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">Model Context Protocol. Estándar para conectar modelos con datos y herramientas de forma segura.</p>
      </div>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">Auto-GPT / AgentGPT:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">IAs autónomas que crean sus propias sub-tareas para lograr un objetivo de largo plazo.</p>
      </div>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">Vector DB:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">Memoria de largo plazo de un agente (donde guarda los PDFs que lee para recordarlos siempre).</p>
      </div>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">Orquestador:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">Software que gestiona la comunicación entre diferentes agentes para un flujo de trabajo complejo.</p>
      </div>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; border:1px solid #333;">
        <strong style="color:var(--primary-light);">Ghost Writer:</strong>
        <p style="font-size:0.75rem; margin:5px 0 0; opacity:0.7;">Práctica de usar la IA para imitar el tono y estilo de un autor específico para documentos institucionales.</p>
      </div>
    </div>
  </div>
</div>

<!-- TAB 9: MISIÓN -->
<div id="m14-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in" style="background: linear-gradient(135deg, rgba(99,102,241,0.05), rgba(0,0,0,0.5)); border:2px solid rgba(99,102,241,0.3);">
    <div class="exercise-header"><span class="exercise-icon">🚀</span><span class="exercise-title" style="color:#a5b4fc;">Misión 14: Blueprint de Agente</span></div>
    <div class="preparation-step" style="background: rgba(99,102,241,0.1); border: 1px solid #6366f1; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #6366f1;">
      <h4 style="margin-top: 0; color: #6366f1; font-size: 0.9rem;">🛠️ Preparación de la Misión</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Diseña un agente para esa tarea que consume tus mañanas. No busques que la IA te diga cómo hacerla, busca que el agente la resuelva por ti.</p>
    </div>
    <div class="mission-instructions" style="margin-top:20px;">
      <strong style="color:#fff;">🎯 Pasos del Desafío:</strong>
      <ol style="margin-top:10px;font-size:0.85rem;line-height:2; opacity:0.9;">
        <li>Identifica un proceso que use navegador o datos institucionalmente.</li>
        <li>Nombra el agente (ej: "Auditor Secop", "Radar de Normativa").</li>
        <li>Define sus 3 herramientas indispensables.</li>
        <li>Establece el "Límite Soberano" (¿Dónde debe detenerse a pedir permiso?).</li>
      </ol>
    </div>
    <textarea id="m14-mission-text" class="premium-textarea" style="margin-top:15px; min-height:120px;" placeholder="Ej: Mi agente 'Auditor' navegará SECOP II cada mañana, extraerá contratos de mi área y me pedirá permiso antes de enviarlos por correo..."></textarea>
    <div class="reward-tag" style="margin-top:15px; font-weight:800;">+200 XP · Insignia: Orquestador Soberano 🤖</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-14" style="width:100%;margin-top:15px;background: linear-gradient(to right, #6366f1, #a855f7); border:none; font-weight:800; letter-spacing:1px;">✅ DESPLEGAR AGENTE — RECLAMAR INSIGNIA</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-13">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-15">Siguiente: Proyecto Integrador →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 15 — PROYECTO INTEGRADOR FINAL
   ══════════════════════════════════════════════════════════════ */
'module-15': `
<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(234,179,8,0.1) 0%, rgba(0,0,0,0) 100%); border-left: 5px solid #eab308;">
  <div class="module-number gamer-badge" style="background:#eab308;color:#000;">Módulo 15 — EVALUACIÓN FINAL MAX</div>
  <h2 class="module-title glow-text" style="color:#fde047;">🏆 Proyecto Integrador "Centauro"</h2>
  <p class="module-description">El Humano es la estrategia, la IA es el músculo. Demuestra absolutamente todo lo que aprendiste y obtén tu certificación de <b>Operador Avanzado AI</b>.</p>
  <div class="module-meta">
    <span class="module-meta-item" style="color:#eab308">⏱️ 60 min (Evaluación)</span>
    <span class="module-meta-item" style="color:#eab308">💎 500 XP GRANDES</span>
    <span class="module-meta-item" style="color:#eab308">📜 Certificado Desbloqueable</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m15-reto">📜 El Gran Reto</button>
  <button class="tab-btn" data-tab="m15-sandbox">🧪 Verificación Final</button>
  <button class="tab-btn" data-tab="m15-grado">🎓 Graduación</button>
</div>

<!-- TAB 1: EL RETO -->
<div id="m15-reto" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">📜</span> Escenario Final</h3>
    <p>Has recibido un correo con un informe presupuesto de 30 páginas, un Excel con errores y un requerimiento urgente de respuesta jurídica. </p>
    <div style="background:rgba(255,255,255,0.02); padding:20px; border-radius:12px; margin:20px 0; border:1px solid #eab308;">
       <h4 style="color:#eab308; margin-top:0;">Tu Misión Soberana:</h4>
       <ul style="font-size:0.9rem; line-height:1.8;">
          <li>Usa <b><a href="https://claude.ai" target="_blank" style="color:#eab308; text-decoration:underline;">Claude</a></b> para resumir el informe técnico.</li>
          <li>Usa <b><a href="https://chatgpt.com" target="_blank" style="color:#eab308; text-decoration:underline;">ChatGPT</a></b> para encontrar la fórmula de Excel de corrección.</li>
          <li>Aplica el <b>Método CREA</b> para redactar la respuesta final.</li>
          <li>Registra todo en tu <b>Segundo Cerebro</b>.</li>
       </ul>
    </div>
  </div>
</div>

<!-- TAB 2: SANDBOX -->
  <div id="m15-sandbox" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🧪</span> Prueba de Fuego</h3>
      <p>Deja trazabilidad de tu solución: herramienta elegida, estrategia por frente y verificación final.</p>
      <div class="learning-mission-grid" style="display:grid; gap:12px; margin-top:16px;">
        <div>
          <label for="m15-mission-tools" style="display:block; font-weight:700; margin-bottom:6px;">1. Orquestación de herramientas</label>
          <textarea id="m15-mission-tools" class="premium-textarea" style="min-height:90px;" placeholder="Explica qué herramienta usarías para el informe, cuál para Excel y cuál para la respuesta final, con su razón."></textarea>
        </div>
        <div>
          <label for="m15-mission-doc" style="display:block; font-weight:700; margin-bottom:6px;">2. Estrategia documental</label>
          <textarea id="m15-mission-doc" class="premium-textarea" style="min-height:90px;" placeholder="Indica cómo resumirías el informe, qué buscarías y qué riesgo o hallazgo elevarías."></textarea>
        </div>
        <div>
          <label for="m15-mission-excel" style="display:block; font-weight:700; margin-bottom:6px;">3. Corrección de Excel</label>
          <textarea id="m15-mission-excel" class="premium-textarea" style="min-height:90px;" placeholder="Describe la fórmula, transformación o auditoría que aplicarías sobre el archivo con errores."></textarea>
        </div>
        <div>
          <label for="m15-mission-prompt" style="display:block; font-weight:700; margin-bottom:6px;">4. Prompt final con CREA</label>
          <textarea id="m15-mission-prompt" class="premium-textarea" style="min-height:180px;" placeholder="Redacta el prompt final que usarías para producir la respuesta integral con contexto, rol, estructura y acción."></textarea>
        </div>
      </div>
      <div style="background:#0d1117; padding:15px; border-radius:10px; border:1px solid rgba(234,179,8,0.2); margin-top:20px;">
        <h4 style="color:#eab308; margin-top:0;">🛡️ Evaluador Final (Prompt Maestro para Claude)</h4>
        <p style="font-size:0.75rem; opacity:0.8;">Copia este prompt y pégalo en una IA avanzada (Claude 3.5 Sonnet preferiblemente) junto con tu solución para que ella califique tu grado de maestría:</p>
        <div id="m15-centauro-prompt" style="display:none;">
Actúa como un Auditor Master de IA para el Sector Público. Evalúa mi solución al Reto Centauro basándote en:
1. Orquestación: ¿Elegí las herramientas correctas?
2. Seguridad: ¿Cómo manejé los datos sensibles?
3. Método CREA: ¿Mi prompt final es estructuralmente perfecto?
4. Soberanía: ¿Mantuve el control humano (HITL)?

Entrégame una calificación de 1 a 10 y 3 puntos específicos de mejora técnica. Aquí está mi solución:
[PEGAR AQUÍ TU RESPUESTA DEL SANDBOX]
        </div>
        <button class="gl-btn small" style="width:100%; border-color:#eab308; color:#eab308;" onclick="navigator.clipboard.writeText(document.getElementById('m15-centauro-prompt').innerText.trim()); window.showToast('Prompt Maestro copiado ✨','success');">📋 Copiar Prompt de Evaluación Final</button>
      </div>
      <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-15" style="width:100%;margin-top:20px;background:#eab308;color:#000;" onclick="window.m15SimulateEval()">🚀 Enviar para Calificación por IA</button>
      <div id="m15-eval-result"></div>
    </div>
  </div>

<!-- TAB 3: GRADO -->
  <div id="m15-grado" class="ag-content">
    <div class="section-card animate-in" style="text-align:center; padding:40px; border: 2px solid #eab308; background: linear-gradient(135deg, rgba(234,179,8,0.05), rgba(0,0,0,0.8));">
      <div style="font-size:4rem; margin-bottom:20px; filter: drop-shadow(0 0 10px #eab308);">🎓</div>
      <h3 style="color:#fde047; font-size:1.8rem;">¿Listo para la Graduación?</h3>
      <p style="opacity:0.9;">Al completar este módulo, desbloquearás el certificado oficial y formarás parte de la élite de **Operadores Avanzados de IA**.</p>
      
      <!-- NUEVO: CHECKLIST SOBERANO M15 -->
      <div style="max-width:600px; margin:25px auto; text-align:left; background:rgba(255,255,255,0.02); padding:20px; border-radius:12px; border:1px solid rgba(234,179,8,0.3);">
        <h4 style="color:#eab308; margin-top:0;">📋 Checklist del Operador Centauro:</h4>
        <ul style="font-size:0.8rem; line-height:1.6; list-style:none; padding:0;">
          <li style="margin-bottom:8px;">✅ **Estrategia:** Elegí la herramienta por su potencia, no por hábito.</li>
          <li style="margin-bottom:8px;">✅ **Seguridad:** Filtré datos sensibles antes de subirlos a la nube.</li>
          <li style="margin-bottom:8px;">✅ **Verificación:** Revisé el resultado de la IA línea por línea.</li>
          <li>✅ **Soberanía:** El resultado final es 100% mi responsabilidad.</li>
        </ul>
      </div>

      <div style="max-width:860px; margin:25px auto 0; text-align:left;">
        <label for="m15-mission-verification" style="display:block; font-weight:700; margin-bottom:6px;">5. Verificación y entrega final</label>
        <textarea id="m15-mission-verification" class="premium-textarea" style="min-height:110px;" placeholder="Explica cómo revisarías la respuesta final, qué dato sensible protegerías y qué siguiente acción tomarías antes de enviarla."></textarea>
      </div>
      <div style="margin-top:30px;">
        <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-15" style="font-size:1.2rem; padding:18px 50px; background: linear-gradient(to right, #eab308, #ca8a04); border:none; color:#000; font-weight:900; box-shadow: 0 0 20px rgba(234,179,8,0.4); text-transform:uppercase; letter-spacing:2px;">
          ¡CERRAR CICLO Y GRADUARME!
        </button>
      </div>
    </div>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-14">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-16">SIGUIENTE NIVEL: IA Generativa Pro →</button>
</div>
`
  };

  // --- M14 LAB FUNCTIONS ---
  window.updateM14Lab = function() {
    const el = document.getElementById('m14-mission-select');
    if (!el) return;
    const sel = el.value;
    const plan = document.getElementById('m14-agent-plan');
    if(!plan) return;
    if(sel === 'audit') {
      plan.innerHTML = "1. Acceder a portal SECOP.<br>2. Filtrar por fecha y monto >50M.<br>3. Comparar con manual de contratación.<br>4. Generar reporte de alertas.";
    } else if(sel === 'research') {
      plan.innerHTML = "1. Consultar Diario Oficial de la UE.<br>2. Buscar palabras clave (Privacidad, GPU, Ética).<br>3. Traducir al español.<br>4. Resumir impacto para Colombia.";
    } else {
      plan.innerHTML = "1. Leer historial del ciudadano en CRM.<br>2. Consultar base de conocimientos técnica.<br>3. Redactar borrador de respuesta legal.<br>4. Escalar a supervisor humano.";
    }
  };

  window.executeM14Lab = function() {
    const plan = document.getElementById('m14-agent-plan');
    if(!plan) return;
    plan.innerHTML = "<span style='color:#3b82f6;'>Ejecutando paso 1... 🛰️ Navegando web...</span>";
    setTimeout(() => {
      plan.innerHTML = "<span style='color:#10b981;'>✔️ Misión Completada. Reporte generado en el escritorio.</span>";
      if (typeof window.antShowConfetti === 'function') window.antShowConfetti();
    }, 2000);
  };

  window.m15SimulateEval = function() {
    const box = document.getElementById('m15-eval-result');
    if(!box) return;
    box.innerHTML = '<div class="thinking-process-premium"><span class="pulse-dot"></span> Evaluando tu ADN Centauro...</div>';
    setTimeout(() => {
      box.innerHTML = `
        <div class="glass-card animate-in" style="padding:20px; border-top:4px solid #eab308; margin-top:15px;">
          <h4 style="color:#eab308;">🏅 Resultado de Evaluación Pro: 95/100</h4>
          <p style="font-size:0.8rem;"><b>Feedback:</b> Excelente orquestación. Tu prompt CREA es robusto. Recuerda siempre verificar las cifras finales de Excel antes de publicarlas.</p>
          <div style="display:flex; gap:10px; margin-top:15px;">
            <button class="gl-btn small" style="background:#eab308; color:#000; font-weight:800;" onclick="window.antShowConfetti(); window.showToast('¡Graduación Iniciada!','success')">Ver Certificado 📜</button>
          </div>
        </div>
      `;
    }, 2500);
  };

  // Pre-initialize M14
  setTimeout(() => {
    if (typeof window.updateM14Lab === 'function') window.updateM14Lab();
  }, 500);

  // Inject safely
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el && !el.querySelector('.module-header')) {
      el.insertAdjacentHTML('afterbegin', html);
    }
  }
  return { init: function(app) { console.log('Initialized modules-13-15.js'); } };
})();
