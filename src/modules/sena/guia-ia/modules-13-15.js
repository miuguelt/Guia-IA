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
    </div>

    <!-- NUEVOS EJEMPLOS REALES M13 -->
    <div style="margin-top:25px; background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); padding:15px; border-radius:12px;">
      <h4 style="margin-top:0; color:#10b981;">💡 Casos de Uso Reales (Copia estas ideas):</h4>
      <ul style="font-size:0.8rem; line-height:1.6; padding-left:20px;">
        <li><strong>Soporte Automático:</strong> Email de cliente -> IA analiza sentimiento -> Si es enojo, avisa a jefe por WhatsApp; si es duda, redacta borrador.</li>
        <li><strong>Resumen de Reuniones:</strong> Grabación en Zoom -> IA transcribe -> IA extrae compromisos -> Crea tareas en Trello/ClickUp.</li>
        <li><strong>Gestión de Gastos:</strong> Foto de recibo en Telegram -> IA extrae monto y fecha -> Guarda en Google Sheets automáticamente.</li>
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
    <p>Describe un proceso repetitivo de tu oficina que involucre al menos 3 herramientas distintas.</p>
    <textarea class="premium-textarea" placeholder="Ej: Correo -> Excel -> PDF Institucional..."></textarea>
    <div class="reward-tag">+150 XP · Insignia: Arquitecto de Flujos 🔗</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-13" style="width:100%;margin-top:15px;">✅ Enviar Arquitectura</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-12">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-14">Siguiente: Cerebro Digital →</button>
</div>
`,

'module-14': `
<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0) 100%); border-left: 5px solid #10b981;">
  <div class="module-number gamer-badge" style="background:#10b981;color:#fff;">Módulo 14 — Memoria</div>
  <h2 class="module-title glow-text" style="color:#34d399;">🧠 Tu Segundo Cerebro con IA</h2>
  <p class="module-description">Deja de olvidar información crítica. Aprende a usar Notion, Obsidian y la IA para crear un sistema de gestión de conocimiento eterno.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 35 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Pensador Sistémico</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m14-concept">🌐 Red Neural</button>
  <button class="tab-btn" data-tab="m14-tools">🛠️ Herramientas</button>
  <button class="tab-btn" data-tab="m14-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m14-concept" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🕸️</span> El Poder de los Enlaces</h3>
    <p>La mente humana no funciona en carpetas, sino en <b>asociaciones</b>. Un Segundo Cerebro imita esta estructura permitiendo conectar ideas de diferentes meses en un solo clic.</p>
    
    <div id="m14-bio-brain" style="height:350px; background:radial-gradient(circle at center, #111 0%, #000 100%); border-radius:15px; margin:20px 0; border:1px solid #333; position:relative; overflow:hidden;">
       <div id="brain-core" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:60px; height:60px; background:#10b981; border-radius:50%; filter:blur(20px); opacity:0.5; animation: brain-glow 4s infinite alternate;"></div>
       <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:#10b981; font-weight:900; z-index:5; text-shadow:0 0 10px #000;">NÚCLEO MENTAL</div>
       
       <!-- NODOS INTERACTIVOS DINÁMICOS -->
       <div class="brain-node" style="position:absolute; top:20%; left:25%; cursor:pointer;" onclick="window.showToast('Conectado a: Proyecto 2025','success')">
          <div style="width:12px; height:12px; background:#10b981; border-radius:50%; box-shadow:0 0 15px #10b981;"></div>
          <span style="font-size:0.65rem; color:#aaa; margin-left:15px;">Notas de Ley</span>
       </div>
       <div class="brain-node" style="position:absolute; bottom:25%; left:30%; cursor:pointer;" onclick="window.showToast('Conectado a: Referencias','success')">
          <div style="width:12px; height:12px; background:#10b981; border-radius:50%; box-shadow:0 0 15px #10b981;"></div>
          <span style="font-size:0.65rem; color:#aaa; margin-left:15px;">Ideas Radiales</span>
       </div>
       <div class="brain-node" style="position:absolute; top:30%; right:25%; cursor:pointer;" onclick="window.showToast('Conectado a: Tareas Pendientes','success')">
          <div style="width:12px; height:12px; background:#10b981; border-radius:50%; box-shadow:0 0 15px #10b981;"></div>
          <span style="font-size:0.65rem; color:#aaa; margin-left:15px;">Bocetos</span>
       </div>
       
       <svg style="position:absolute; width:100%; height:100%; pointer-events:none;">
          <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" /></linearGradient></defs>
          <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="url(#grad1)" stroke-width="1.5" />
          <line x1="30%" y1="75%" x2="50%" y2="50%" stroke="url(#grad1)" stroke-width="1.5" />
          <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="url(#grad1)" stroke-width="1.5" />
       </svg>
    </div>
    <style>
      @keyframes brain-glow { from { opacity: 0.3; transform: translate(-50%, -50%) scale(1); } to { opacity: 0.7; transform: translate(-50%, -50%) scale(1.3); } }
      .brain-node:hover span { color: #10b981; font-weight: bold; }
    </style>
    <p style="font-size:0.8rem; text-align:center; opacity:0.8; font-style:italic;">Haz clic en los nodos para ver las ramificaciones de tu Segundo Cerebro.</p>

    <!-- NUEVOS EJEMPLOS REALES M14 -->
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:20px;">
       <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.2); padding:15px; border-radius:10px;">
          <h4 style="margin:0 0 8px; color:#3b82f6; font-size:0.9rem;">Ejemplo 1: El Estudiante EA</h4>
          <p style="font-size:0.75rem; opacity:0.8;">Toma notas de clase. Al final, usa <code>[[Examen Final]]</code> en todas las notas relevantes. Obsidian crea un mapa de estudio automático.</p>
       </div>
       <div style="background:rgba(168,85,247,0.05); border:1px solid rgba(168,85,247,0.2); padding:15px; border-radius:10px;">
          <h4 style="margin:0 0 8px; color:#a855f7; font-size:0.9rem;">Ejemplo 2: El Abogado Pro</h4>
          <p style="font-size:0.75rem; opacity:0.8;">Captura leyes en Notion. Al abrir un caso, enlaza las leyes <code>[[Ley 1437]]</code>. Notion AI le resume cómo esa ley aplica al caso actual.</p>
       </div>
    </div>
    <p style="font-size:0.85rem;font-style:italic;text-align:center;opacity:0.7;">Diagrama de Conexiones No Lineales (Mecánica de Red Neural)</p>
  </div>
</div>

<!-- TAB 2: HERRAMIENTAS -->
<div id="m14-tools" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🛠️</span> Tu Arsenal de Memoria</h3>
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px; margin-top:20px;">
      <div class="tool-access-card" style="border: 1px solid rgba(16,185,129,0.3); padding:20px; border-radius:15px; background:rgba(255,255,255,0.02);">
        <h4 style="color:#10b981; margin:0 0 10px;">📓 <a href="https://notion.so" target="_blank" style="color:#10b981; text-decoration:none;">Notion AI</a></h4>
        <p style="font-size:0.8rem;opacity:0.8;">Perfecto para trabajo en equipo. Su IA te ayuda a resumir notas de reuniones y a generar borradores sobre la marcha dentro de tus archivos.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#10b98122;color:#34d399;">Estructura Visual</span>
      </div>
      <div class="tool-access-card" style="border: 1px solid rgba(59,130,246,0.3); padding:20px; border-radius:15px; background:rgba(255,255,255,0.02);">
        <h4 style="color:#3b82f6; margin:0 0 10px;">💎 <a href="https://obsidian.md" target="_blank" style="color:#3b82f6; text-decoration:none;">Obsidian (Soberano)</a></h4>
        <p style="font-size:0.8rem;opacity:0.8;">Cero carpetas. Tú escribes y su IA te trae la info de hace meses justo cuando la necesitas hoy.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#3b82f622;color:#93c5fd;">IA de Autoclasificación</span>
      </div>
    </div>
    
    <div style="margin-top:30px; background:rgba(255,255,255,0.03); padding:20px; border-radius:12px; border:1px solid #444;">
      <h4 style="margin-top:0; color:var(--primary-light);">🌊 El Flujo de Captura Maestro:</h4>
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:15px; margin-top:15px; flex-wrap:wrap;">
        <div style="flex:1; min-width:150px;">
          <strong style="display:block; font-size:0.8rem; color:#10b981;">1. CAPTURAR</strong>
          <p style="font-size:0.75rem; opacity:0.7;">No confíes en tu memoria biológica. Anota todo en una "Bandeja de Entrada" digital inmediatamente.</p>
        </div>
        <div style="flex:1; min-width:150px;">
          <strong style="display:block; font-size:0.8rem; color:#3b82f6;">2. PROCESAR</strong>
          <p style="font-size:0.75rem; opacity:0.7;">Aplica IA para resumir, extraer tareas o clasificar la información capturada una vez al día.</p>
        </div>
        <div style="flex:1; min-width:150px;">
          <strong style="display:block; font-size:0.8rem; color:#a855f7;">3. CONECTAR</strong>
          <p style="font-size:0.75rem; opacity:0.7;">Usa enlaces <code>[[ ]]</code> para unir la nueva nota con proyectos o ideas relacionadas del pasado.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 3: MISIÓN -->
<div id="m14-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🧠</span><span class="exercise-title">Misión 14: Centralización</span></div>
    <div class="preparation-step" style="background: rgba(234,179,8,0.1); border: 1px solid #eab308; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #eab308;">
      <h4 style="margin-top: 0; color: #eab308; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Misión Práctica</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">¡Es hora de conectar tu primer "par de neuronas" digitales!</p>
    </div>
    <div class="mission-instructions" style="background:rgba(234,179,8,0.05);padding:20px;border-radius:12px;border-left:4px solid #eab308;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Instala Obsidian o abre Notion en tu Windows 11.</li>
        <li>Crea una nota sobre un tema (ej: "Mis Vacaciones").</li>
        <li>Crea una conexión con corchetes <code>[[ ]]</code> hacia otra nota (ej: <code>[[Presupuesto 2025]]</code>).</li>
        <li>Escribe abajo qué sentiste al ver que las notas se "unían" sin usar carpetas.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Escribe aquí tu experiencia creando tu primer enlace..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Pensador Sistémico 🧠</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-14" style="width:100%;margin-top:15px;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-13">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-15">Siguiente: Evaluación Final →</button>
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
          <li>Usa <b>Claude</b> para resumir el informe técnico.</li>
          <li>Usa <b>ChatGPT</b> para encontrar la fórmula de Excel de corrección.</li>
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
      <button class="gl-btn gl-btn-primary" style="width:100%;margin-top:20px;background:#eab308;color:#000;" onclick="window.showToast('Algoritmo de Evaluación Analizando...','success')">🚀 Enviar para Calificación por IA</button>
    </div>
  </div>

<!-- TAB 3: GRADO -->
  <div id="m15-grado" class="ag-content">
    <div class="section-card animate-in" style="text-align:center; padding:40px;">
      <div style="font-size:4rem; margin-bottom:20px;">🎓</div>
      <h3>¿Listo para la Graduación?</h3>
      <p>Al completar este módulo, desbloquearás el certificado oficial y aparecerás en el Salón de la Fama.</p>
      <div style="max-width:860px; margin:25px auto 0; text-align:left;">
        <label for="m15-mission-verification" style="display:block; font-weight:700; margin-bottom:6px;">5. Verificación y entrega final</label>
        <textarea id="m15-mission-verification" class="premium-textarea" style="min-height:110px;" placeholder="Explica cómo revisarías la respuesta final, qué dato sensible protegerías y qué siguiente acción tomarías antes de enviarla."></textarea>
      </div>
      <div style="margin-top:30px;">
        <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-15" style="font-size:1.2rem; padding:15px 40px; background: linear-gradient(to right, #eab308, #ca8a04); border:none; color:#000; font-weight:800;">
          ¡CERRAR CICLO Y GRADUARME!
        </button>
    </div>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-14">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-16">SIGUIENTE NIVEL: IA Generativa Pro →</button>
</div>
`
  };

  // Inject safely
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el && !el.querySelector('.module-header')) {
      el.insertAdjacentHTML('afterbegin', html);
    }
  }
  return { init: function(app) { console.log('Initialized modules-13-15.js'); } };
})();
