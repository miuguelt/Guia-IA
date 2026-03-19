window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-13'] = window.GuiaModules['module-14'] = window.GuiaModules['module-15'] = (function() {
  // --- MÓDULO 13: Lógica Centralizada ---
  window.m13Test = function() {
    const trg = document.getElementById('m13-trigger')?.value;
    const ai = document.getElementById('m13-ai-action')?.value;
    const dst = document.getElementById('m13-dest')?.value;
    const res = document.getElementById('m13-result');
    if (!res) return;
    
    let valid = false;
    let msg = '';
    
    if(trg==='mail' && ai==='extract' && dst==='sheet') { valid=true; msg="¡Flujo Perfecto! Este es el clásico 'Robot Contable'. Te ahorra horas digitalizando facturas a final de mes."; }
    else if(trg==='form' && ai==='draft' && dst==='draft-save') { valid=true; msg="¡Excelente! El 'Robot de Atención'. Lee PQRQs, escribe la respuesta y te la deja en Borradores lista para que tú la apruebes y envíes. Genio."; }
    else if(trg==='time' && ai==='summary' && dst==='whatsapp') { valid=true; msg="¡Muy bien! El 'Robot Asistente Personal'. Recibes por WhatsApp el resumen de tu semana todos los Lunes a las 8 AM."; }
    else { valid=false; msg="Ese flujo funciona, pero no es tan coherente. (Ej: No sumerizas tareas si el trigger es un correo de factura). ¡Prueba las combinaciones lógicas de arriba!"; }
    
    res.style.display = 'block';
    if(valid) {
      res.style.borderColor = '#10b981'; res.style.background = 'rgba(16,185,129,0.1)';
      res.innerHTML = '✅ <b>Lógica Exitosa:</b> ' + msg;
      window.app && window.app.addXP(30);
      typeof antShowConfetti === 'function' && antShowConfetti();
    } else {
      res.style.borderColor = '#ef4444'; res.style.background = 'rgba(239,68,68,0.1)';
      res.innerHTML = '⚠️ <b>Lógica Mixta:</b> ' + msg;
    }
  };

  // --- MÓDULO 14: Lógica Centralizada ---
  window.m14AddTag = function() {
    const input = document.getElementById('m14-tag-input');
    if (!input) return;
    let v = input.value.trim();
    if(!v) return;
    if(!v.startsWith('#')) v = '#'+v;
    const dyn = document.getElementById('m14-dyn-node');
    if (dyn) {
      dyn.textContent = v;
      dyn.style.display = 'block';
      dyn.animate([{opacity:0,transform:'scale(0.5)'}, {opacity:1,transform:'scale(1)'}], 500);
    }
    input.value = '';
    window.app && window.app.addXP(10);
    window.showToast('Nodo agregado a la red neuronal','success');
  };

  // --- MÓDULO 15: Lógica Centralizada ---
  window.m15AnalyzePrompt = function() {
    const input = document.getElementById('m15-test-prompt');
    if (!input) return;
    const text = input.value.toLowerCase();
    if(text.length < 10) { window.showToast('Tu prompt es demasiado corto','warning'); return; }
    
    const feedbackArea = document.getElementById('m15-feedback-area');
    if (feedbackArea) feedbackArea.style.display = 'block';
    
    // Eval logic
    let m1 = Math.min(100, (text.length / 150) * 100); // Length
    let m2 = (text.includes('actúa') || text.includes('eres') || text.includes('rol') || text.includes('asume')) ? 100 : 25; // Role
    let m3 = (text.includes('formato') || text.includes('viñetas') || text.includes('tabla') || text.includes('lista') || text.includes('tono')) ? 100 : 30; // Format
    
    let avg = Math.round((m1 + m2 + m3) / 3);
    
    // Animation
    const m1b = document.getElementById('m15-m1-b');
    const m1t = document.getElementById('m15-m1-t');
    const m2b = document.getElementById('m15-m2-b');
    const m2t = document.getElementById('m15-m2-t');
    const m3b = document.getElementById('m15-m3-b');
    const m3t = document.getElementById('m15-m3-t');

    if(m1b) m1b.style.width = m1 + '%'; 
    if(m1t) m1t.innerText = Math.round(m1)+'/100';
    if(m2b) m2b.style.width = m2 + '%'; 
    if(m2t) m2t.innerText = Math.round(m2)+'/100';
    if(m3b) m3b.style.width = m3 + '%'; 
    if(m3t) m3t.innerText = Math.round(m3)+'/100';
    
    let scoreEl = document.getElementById('m15-score');
    let c = 0;
    if (scoreEl) {
      let int = setInterval(() => {
        c+=5; if(c>=avg) { c=avg; clearInterval(int); }
        scoreEl.innerText = c + '%';
        if(c<50) scoreEl.style.color='#ef4444'; else if(c<80) scoreEl.style.color='#f59e0b'; else scoreEl.style.color='#10b981';
      }, 30);
    }
    
    setTimeout(() => {
      const vd = document.getElementById('m15-verdict');
      const gradBtn = document.getElementById('btn-grad');
      if(vd) {
        if(avg >= 80) {
          vd.innerHTML = '✅ <b>APROBADO CON HONORES:</b> Tu prompt cumple con el método CREA perfectamente. Eres un dictador algorítmico certificado. Pasa a la pestaña Graduación.';
          vd.style.color = '#10b981';
          window.app && window.app.addXP(300);
          typeof antShowConfetti === 'function' && antShowConfetti();
          if (gradBtn) {
            gradBtn.disabled = false;
            gradBtn.className = 'gl-btn gl-btn-primary complete-module-btn glow-btn';
          }
        } else {
          vd.innerHTML = '⚠️ <b>APROBADO BÁSICO:</b> Funciona, pero puede alucinar o no darte el tono exacto. Intenta volver a redactarlo asignando un Rol y pidiendo un Formato específico (ej: "Actúa como Director", "Usa viñetas").';
          vd.style.color = '#f59e0b';
          window.app && window.app.addXP(50);
          if (gradBtn) gradBtn.disabled = false;
        }
      }
    }, 1000);
  };

  const modules = {

/* ══════════════════════════════════════════════════════════════
   MÓDULO 13 — AUTOMATIZACIÓN BÁSICA
   ══════════════════════════════════════════════════════════════ */
'module-13': `
<style>
  .m13-zap-board { background: #0d1117; border: 1px solid var(--border); border-radius: 14px; padding: 25px; margin-top: 20px; position: relative; }
  .m13-step { background: rgba(255,255,255,0.03); border: 2px solid #333; border-radius: 12px; padding: 15px; text-align: center; position: relative; z-index: 2; transition: all 0.3s; }
  .m13-step.trigger { border-color: #f59e0b; box-shadow: 0 4px 15px rgba(245,158,11,0.1); }
  .m13-step.action { border-color: #8b5cf6; box-shadow: 0 4px 15px rgba(139,92,246,0.1); }
  .m13-step:hover { transform: translateY(-5px); }
  .m13-arrow-down { font-size: 2rem; color: #444; margin: 10px 0; text-align: center; line-height: 1; position: relative; z-index: 1; }
  .m13-tool { background: #1a1a2e; padding: 5px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; display: inline-block; margin-bottom: 8px; }
</style>

<div class="module-header premium-header">
  <div class="module-number gamer-badge">Módulo 13 — Nivel PRO</div>
  <h2 class="module-title glow-text">⚡ Automatización de Tareas (No-Code)</h2>
  <p class="module-description">Tener IA está bien, pero poner a la IA a trabajar por ti <b>mientras duermes</b> es el verdadero poder. Aprende lógica de automatización.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 45 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Ingeniero No-Code</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m13-lab">⚙️ Simulador Zapier</button>
  <button class="tab-btn" data-tab="m13-tools">🧰 Automatizadores</button>
  <button class="tab-btn" data-tab="m13-cases">📋 Casos Reales</button>
  <button class="tab-btn" data-tab="m13-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: LABORATORIO ZAP/MAKE -->
<div id="m13-lab" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">⚡</span> Constructor de Flujos Autopilot</h3>
    <p>Todos los automatizadores del mundo (Zapier, Make, Power Automate) funcionan igual: <b>SI PASA ESTO (Trigger) ➡️ ENTONCES HAZ AQUELLO (Action)</b>.</p>
    
    <div class="m13-zap-board">
      
      <!-- Paso 1: Trigger -->
      <div class="m13-step trigger" id="m13-s1">
        <div class="m13-tool" style="color:#fcd34d;background:#78350f;">PASO 1: DETONADOR (Trigger)</div>
        <div style="font-size:0.85rem;margin-bottom:10px;">¿Qué evento inicia la magia?</div>
        <select id="m13-trigger" style="width:100%;padding:10px;background:#050a0e;border:1px solid #f59e0b;border-radius:8px;color:#fff;">
          <option value="mail">Recibo un correo con el asunto "Factura"</option>
          <option value="form">Un ciudadano llena un formulario en línea</option>
          <option value="time">Todos los Lunes a las 8:00 AM</option>
        </select>
      </div>

      <div class="m13-arrow-down">⬇️</div>

      <!-- Paso 2: Acción IA -->
      <div class="m13-step action" id="m13-s2">
        <div class="m13-tool" style="color:#c4b5fd;background:#4c1d95;">PASO 2: MAGIA IA (Action)</div>
        <div style="font-size:0.85rem;margin-bottom:10px;">¿Qué hace ChatGPT con esa info?</div>
        <select id="m13-ai-action" style="width:100%;padding:10px;background:#050a0e;border:1px solid #8b5cf6;border-radius:8px;color:#fff;">
          <option value="extract">Lee el PDF y extrae Total, NIT y Fecha</option>
          <option value="draft">Escribe un borrador de correo respondiendo empáticamente</option>
          <option value="summary">Resume mis tareas pendientes de Trello</option>
        </select>
      </div>

      <div class="m13-arrow-down">⬇️</div>

      <!-- Paso 3: Destino -->
      <div class="m13-step action" id="m13-s3" style="border-color:#10b981;box-shadow:0 4px 15px rgba(16,185,129,0.1);">
        <div class="m13-tool" style="color:#6ee7b7;background:#064e3b;">PASO 3: DESTINO FIN (Action)</div>
        <div style="font-size:0.85rem;margin-bottom:10px;">¿Dónde guardamos el resultado?</div>
        <select id="m13-dest" style="width:100%;padding:10px;background:#050a0e;border:1px solid #10b981;border-radius:8px;color:#fff;">
          <option value="sheet">Añadir fila en Google Sheets / Excel</option>
          <option value="whatsapp">Enviarme un mensaje por WhatsApp o Teams</option>
          <option value="draft-save">Guardar borrador en mi bandeja de Gmail</option>
        </select>
      </div>

      <button class="gl-btn gl-btn-primary" style="width:100%;margin-top:20px;background:#10b981;color:#000;font-weight:700;" onclick="m13Test()">💡 Testear Flujo</button>
      
      <div id="m13-result" style="display:none;margin-top:20px;padding:15px;background:rgba(16,185,129,0.1);border-left:4px solid #10b981;border-radius:8px;font-size:0.85rem;"></div>
    </div>

  </div>
</div>

<!-- TAB 2: HERRAMIENTAS -->
<div id="m13-tools" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧰</span> Plataformas de Automatización</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:15px;margin-top:20px;">
      <div class="m11-tool-card" onclick="window.open('https://zapier.com','_blank')">
        <h4 style="margin:0 0 8px;color:#f97316;font-size:1.1rem;">⚡ Zapier</h4>
        <p style="font-size:0.8rem;opacity:0.8;">El más fácil del mundo. Conecta 5000+ apps. Tiene ChatGPT integrado para insertar "Inteligencia" en el medio de tus procesos.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#f9731622;color:#fdba74;">Freemium | Super Fácil</span>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://make.com','_blank')">
        <h4 style="margin:0 0 8px;color:#a855f7;font-size:1.1rem;">🟣 Make.com</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Más barato y potente que Zapier. Flujos visuales increíbles. Ideal para rutas condicionales (If-this-then-that complejo).</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#a855f722;color:#d8b4fe;">Freemium | Medio</span>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://powerautomate.microsoft.com','_blank')">
        <h4 style="margin:0 0 8px;color:#3b82f6;font-size:1.1rem;">🔵 Power Automate</h4>
        <p style="font-size:0.8rem;opacity:0.8;">El rey corporativo. Si tu entidad usa Office 365, YA LO TIENES. Excelente para aprobar documentos en Teams o SharePoint.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#3b82f622;color:#93c5fd;">Incluido en Office 365</span>
      </div>
    </div>
  </div>
</div>

<!-- TAB 3: PROMPTS -->
<div id="m13-cases" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📋</span> Casos de Uso Prompts</h3>
    <p>¿No sabes cómo automatizar algo? <b>Pregúntale a ChatGPT cómo hacerlo.</b> Usa estos prompts para pedirle el "Tutorial":</p>
    <div style="display:flex;flex-direction:column;gap:14px;margin-top:20px;">
      ${[
        {tag:'TUTORIAL PARA POWER AUTOMATE',color:'#3b82f6',text:'Uso Office 365 en el trabajo. Dame un tutorial paso a paso (clicks exactos) para crear un flujo en Power Automate que: cuando un archivo PDF se suba a cierta carpeta compartida de SharePoint, le avise a mi jefe por un mensaje privado de Teams automáticamente.'},
        {tag:'DISEÑO LÓGICO DE ZAPIER',color:'#f97316',text:'Quiero automatizar mi atención al cliente usando IA. Mi flujo soñado es: [Cliente llena Typeform] -> [ChatGPT escribe respuesta] -> [Gmail manda el correo]. Dime qué herramientas de Zapier usar, qué plan necesito y qué Prompt poner en el módulo intermedio.'},
        {tag:'AUTOMATIZACIÓN PERSONAL',color:'#10b981',text:'Soy un despistado total. Propón 3 ideas de automatización super sencillas gratuitas para mi vida diaria. Uso Google Calendar, Gmail y WhatsApp. Quiero algo que no me tome más de 5 minutos configurar.'}
      ].map(p=>`
      <div class="ag-prompt-card" style="border-color:${p.color};">
        <div style="font-weight:700;font-size:0.7rem;color:${p.color};margin-bottom:8px;">${p.tag}</div>
        <p style="font-size:0.82rem;margin-bottom:12px;">${p.text}</p>
        <button class="gl-btn small" style="border-color:${p.color};color:${p.color};" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent);window.showToast('Prompt copiado ✨','success');window.app&&window.app.addXP(20);">📋 Copiar</button>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- TAB 4: MISIÓN -->
<div id="m13-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">⚡</span><span class="exercise-title">Misión 13: El Arquitecto del Tiempo Libre</span></div>
    <div class="preparation-step" style="background: rgba(139,92,246,0.1); border: 1px solid #8b5cf6; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin-top: 0; color: #8b5cf6; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, haz una lista de 3 tareas repetitivas que te quiten tiempo hoy (ej: bajar facturas, responder dudas genéricas).</p>
    </div>
    <div class="mission-instructions" style="background:rgba(139,92,246,0.05);padding:20px;border-radius:12px;border-left:4px solid #8b5cf6;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Identifica tu "Cuello de Botella": esa tarea que odias hacer cada semana porque es repetitiva ("copy-pastear" datos, bajar facturas, responder dudas genéricas).</li>
        <li>Ve a ChatGPT y usa el prompt 2 de la pestaña anterior, detallando tu necesidad.</li>
        <li>Lee la solución propuesta por la IA.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Nombra la tarea que quieres automatizar y qué plataforma (Zapier/Make/Power) te sugirió la IA..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Ingeniero No-Code ⚙️</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-13" style="width:100%;margin-top:15px;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-12">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-14">Siguiente: Cerebro Digital →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 14 — GESTIÓN DEL CONOCIMIENTO
   ══════════════════════════════════════════════════════════════ */
'module-14': `
<style>
  .m14-brain-graph { width:100%; height:280px; background:#0d1117; border-radius:14px; position:relative; overflow:hidden; border:1px solid #333; margin:20px 0; box-shadow:inset 0 0 50px rgba(0,0,0,0.5); }
  .m14-node { position:absolute; padding:8px 14px; border-radius:30px; font-size:0.75rem; font-weight:700; white-space:nowrap; transition:all 0.3s; cursor:pointer; z-index:2; border:1px solid rgba(255,255,255,0.1); }
  .m14-node:hover { transform:scale(1.1); z-index:10; }
  .m14-n-core { top:50%; left:50%; transform:translate(-50%,-50%); background:#eab308; color:#000; padding:12px 20px; font-size:0.9rem; z-index:5; box-shadow:0 0 20px rgba(234,179,8,0.4); }
  .m14-n1 { top:20%; left:30%; background:rgba(37,99,235,0.2); border-color:#3b82f6; color:#93c5fd; }
  .m14-n2 { top:25%; left:65%; background:rgba(16,185,129,0.2); border-color:#10b981; color:#6ee7b7; }
  .m14-n3 { top:75%; left:25%; background:rgba(239,68,68,0.2); border-color:#ef4444; color:#fca5a5; }
  .m14-n4 { top:70%; left:75%; background:rgba(168,85,247,0.2); border-color:#a855f7; color:#d8b4fe; }
  .m14-line { position:absolute; background:rgba(255,255,255,0.1); height:1px; transform-origin:0 0; z-index:1; }
  .m14-l1 { top:50%; left:30%; width:20%; transform:rotate(20deg); }
  .m14-l2 { top:50%; left:50%; width:20%; transform:rotate(-45deg); }
  .m14-l3 { top:50%; left:50%; width:25%; transform:rotate(120deg); }
  .m14-l4 { top:50%; left:50%; width:25%; transform:rotate(30deg); }

  .m14-comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
  .m14-comp-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 15px; }
  .m14-comp-title { font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
  .m14-step-card { background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.2); border-radius: 12px; padding: 15px; margin-top: 20px; }
</style>

<div class="module-header premium-header">
  <div class="module-number gamer-badge">Módulo 14 — Nivel PRO</div>
  <h2 class="module-title glow-text">🧠 Tu Segundo Cerebro con IA</h2>
  <p class="module-description">Deja de "hacer carpetitas". Usa la IA para crear un sistema de gestión del conocimiento (PKM) que conecte tus ideas y notas automáticamente de por vida.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 30 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Pensador Sistémico</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m14-lab">🕸️ Simulador de Redes</button>
  <button class="tab-btn" data-tab="m14-win11">🪟 Guía Windows 11</button>
  <button class="tab-btn" data-tab="m14-tools">🧰 Apps PKM</button>
  <button class="tab-btn" data-tab="m14-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: LABORATORIO Y EXPLICACIÓN -->
<div id="m14-lab" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🕸️</span> Archivos Basados en Conexiones</h3>
    
    <!-- Analogía Simple -->
    <div class="m14-comparison">
      <div class="m14-comp-card">
        <div class="m14-comp-title">📁 El Sistema Tradicional (Cajas)</div>
        <p style="font-size: 0.75rem; opacity: 0.8; line-height: 1.4;">Guardas un archivo en una sola "caja" (carpeta). Si hablas de <b>Presupuesto</b> de <b>Diciembre</b>, tienes que elegir una carpeta. ¡Si está en una, no está en la otra!</p>
      </div>
      <div class="m14-comp-card" style="border-color: var(--accent);">
        <div class="m14-comp-title" style="color: var(--accent);">🧠 El Segundo Cerebro (Redes)</div>
        <p style="font-size: 0.75rem; opacity: 0.8; line-height: 1.4;">No hay cajas. Hay <b>etiquetas</b> y <b>enlaces</b>. Una nota puede estar conectada a "Presupuesto", "Diciembre" y "Jefe" al mismo tiempo, como tus neuronas.</p>
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-top:25px;">
      <input type="text" id="m14-tag-input" placeholder="Escribe un '#hashtag' (ej: #Leyes, #SENA, #Idea)..." style="flex:1;padding:10px;background:#0d1117;border:1px solid #333;border-radius:8px;color:#fff;font-size:0.85rem;">
      <button class="gl-btn small" style="background:#eab308;color:#000;border:none;" onclick="m14AddTag()">+ Agregar Etiqueta al Cerebro</button>
    </div>

    <div class="m14-brain-graph">
      <div class="m14-line m14-l1"></div><div class="m14-line m14-l2"></div><div class="m14-line m14-l3"></div><div class="m14-line m14-l4"></div>
      <div class="m14-node m14-n-core">MI CEREBRO DIGITAL</div>
      <div class="m14-node m14-n1">#Actas_Equipo</div>
      <div class="m14-node m14-n2">#Contratos_2024</div>
      <div class="m14-node m14-n3">#Ideas_Creativas</div>
      <div class="m14-node m14-n4">#Resúmenes_Libros</div>
      <div id="m14-dyn-node" class="m14-node" style="display:none;top:30%;left:45%;background:rgba(234,179,8,0.2);border-color:#eab308;color:#fde047;"></div>
    </div>
    
    <div class="pista-ia" style="margin-top:15px;">
      <b>💡 El Dilema de la Receta:</b> Imagina que guardas una "Receta de Ensalada" en Windows. ¿La pones en <code>Comida</code> o en <code>Salud</code>? <br>
      En un Segundo Cerebro, solo escribes <code>#Comida</code> y <code>#Salud</code>. Ahora la receta vive en AMBOS mundos sin duplicar archivos.
    </div>
  </div>
</div>

<!-- TAB NEW: GUÍA WINDOWS 11 -->
<div id="m14-win11" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🪟</span> Paso a Paso: Tu Primer Cerebro en Windows</h3>
    <p>Si usas Windows 11 y quieres empezar de cero sin complicaciones, sigue estos pasos:</p>
    
    <div class="m14-step-card">
      <div style="font-weight:700; color:#60a5fa; margin-bottom:8px;">1. Descarga el "Explorador de Neuronas"</div>
      <p style="font-size:0.8rem; opacity:0.9;">Descarga <b>Obsidian</b> (es un programa gratis para Windows como el Bloc de Notas pero inteligente). <br>
      <a href="https://obsidian.md/download" target="_blank" style="color:#60a5fa; text-decoration:underline;">Descargar Obsidian para Windows</a></p>
    </div>

    <div class="m14-step-card" style="border-color: rgba(16,185,129,0.3); background: rgba(16,185,129,0.05);">
      <div style="font-weight:700; color:#10b981; margin-bottom:8px;">2. Crea tu Bóveda (Vault)</div>
      <p style="font-size:0.8rem; opacity:0.9;">Al abrirlo, elige "Crear nueva bóveda". Ponle de nombre "Mi Cerebro" y guárdalo en tu carpeta de <code>Documentos</code>. Verás que es solo una carpeta normal de Windows, pero Obsidian hará la magia.</p>
    </div>

    <div class="m14-step-card" style="border-color: rgba(234,179,8,0.3); background: rgba(234,179,8,0.05);">
      <div style="font-weight:700; color:#eab308; margin-bottom:8px;">3. Tu Primer Enlace Mágico</div>
      <p style="font-size:0.8rem; opacity:0.9;">Escribe una nota que diga: <code>Reunión con [[Juan Pérez]]</code>. Al poner esos corchetes dobles <code>[[ ]]</code>, Obsidian crea automáticamente una "conexión". Si haces click en el nombre, te llevará a una página nueva sobre Juan Pérez.</p>
    </div>

    <div style="background: rgba(255,255,255,0.05); padding:15px; border-radius:12px; margin-top:20px; font-size:0.75rem; border: 1px dashed #444;">
      📌 <b>Para expertos:</b> Pulsa <code>Ctrl + G</code> en Obsidian para ver cómo tus notas se convierten en un mapa de puntos (como el simulador de arriba). ¡Es adictivo!
    </div>
  </div>
</div>

<!-- TAB 2: HERRAMIENTAS -->
<div id="m14-tools" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧰</span> Tu Ecosistema PKM</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:15px;margin-top:20px;">
      <div class="m11-tool-card" onclick="window.open('https://obsidian.md','_blank')">
        <h4 style="margin:0 0 8px;color:#a855f7;font-size:1.1rem;">🟣 Obsidian</h4>
        <p style="font-size:0.8rem;opacity:0.8;">El estándar de oro. 100% privado (offline). Genera ese gráfico visual de nodos con todas tus notas.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#a855f722;color:#d8b4fe;">Gratis | Muy Recomendado</span>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://notion.so','_blank')">
        <h4 style="margin:0 0 8px;color:#e2e8f0;font-size:1.1rem;">⚪ Notion (con IA)</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Excelente para trabajar en equipo. Su IA "Q&A" te permite hacerle preguntas a TODO tu espacio de trabajo.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#e2e8f022;color:#f8fafc;">Freemium</span>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://mem.ai','_blank')">
        <h4 style="margin:0 0 8px;color:#3b82f6;font-size:1.1rem;">🔵 Mem.ai</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Cero carpetas. Tú escribes y su IA te trae la info de hace meses justo cuando la necesitas hoy.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#3b82f622;color:#93c5fd;">IA de Autoclasificación</span>
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
`,

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
    <h3><span class="icon">📜</span> La Asignación Oficial</h3>
    <div class="preparation-step" style="background: rgba(234,179,8,0.1); border: 1px solid #eab308; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #eab308;">
      <h4 style="margin-top: 0; color: #eab308; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Para este reto final, ten a mano el plan de desarrollo, una normativa reciente o un informe de gestión de tu entidad.</p>
    </div>
    <p>Debes resolver una crisis ficticia (o real, si la adaptas) en tu Entidad/Empresa aplicando Inteligencia Artificial en cada fase. Resuélvelo combinando al menos 3 de las herramientas vistas (ej: Perplexity + ChatGPT + Canva).</p>
    
    <div style="background:rgba(255,255,255,0.03);border:1px solid #333;border-radius:12px;padding:20px;margin-top:20px;">
      <h4 style="margin:0 0 10px;color:#fca5a5;">🔥 El Escenario: "Actualización Normativa Crítica"</h4>
      <p style="font-size:0.85rem;line-height:1.6;margin-bottom:15px;color:#cbd5e1;">Se acaba de aprobar una nueva Ley (o resolución de tu sector). Tu jefe te pide para <b>mañana a primera hora</b> lo siguiente:</p>
      
      <ol style="margin:0;padding-left:20px;font-size:0.85rem;line-height:2;color:#e2e8f0;">
        <li><b>Investigación:</b> Un resumen ejecutivo de la ley citando fuentes reales (sin alucinar). <em>[Aplica Mod. 11: Perplexity/NotebookLM]</em></li>
        <li><b>Estructura:</b> Un correo impecable y diplomático informando al equipo sobre estos cambios. <em>[Aplica Mod. 8: Tone Transformer]</em></li>
        <li><b>Visual:</b> Una idea visual gráfica o diagrama con el prompt listo para generar la portada de la presentación. <em>[Aplica Mod. 6: Prompts Visuales]</em></li>
      </ol>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 Tienes que armar el <b>PROMPT MAESTRO</b> para la Tarea #2 (El correo). Si logras armar un prompt usando el método <b>CREA</b> (Contexto, Rol, Especificidad, Acción) pasarás la prueba técnica en la pestaña "Verificación".
    </div>
  </div>
</div>

<!-- TAB 2: SANDBOX REVISOR -->
<div id="m15-sandbox" class="ag-content">
  <div class="section-card animate-in" style="border:1px solid #3b82f6;">
    <div style="background:rgba(59,130,246,0.1);border-radius:12px;padding:20px;">
      <h3 style="margin-top:0;"><span class="icon">🤖</span> Evaluador de Prompt Maestro</h3>
      <p style="font-size:0.85rem;">Pega aquí el <b>PROMPT</b> que usarías en ChatGPT/Claude para resolver la tarea 2 (redactar el correo a tu equipo sobre la ley). El algoritmo analizará la densidad de tu prompt.</p>
      
      <textarea id="m15-test-prompt" class="premium-textarea" style="height:150px;margin-top:15px;" placeholder="Ej: Actúa como Director. Redacta un correo institucional para informar que... Usa un tono... Formato viñetas..."></textarea>
      
      <button class="gl-btn gl-btn-primary" style="width:100%;margin-top:15px;background:#3b82f6;" onclick="m15AnalyzePrompt()">🧠 Someter a Análisis Algorítmico</button>
      
      <div id="m15-feedback-area" style="display:none;margin-top:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <h4 style="margin:0;">Calificación: <span id="m15-score" style="font-size:1.5rem;color:#10b981;">0%</span></h4>
        </div>
        
        <!-- Metrics -->
        <div style="margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:4px;"><span>Longitud y Detalle (Especificidad)</span><span id="m15-m1-t">0/100</span></div>
          <div style="width:100%;background:#333;height:6px;border-radius:3px;"><div id="m15-m1-b" style="height:100%;width:0%;background:#10b981;border-radius:3px;transition:width 1s;"></div></div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:4px;"><span>Asignación de Rol (Tú eres...)</span><span id="m15-m2-t">0/100</span></div>
          <div style="width:100%;background:#333;height:6px;border-radius:3px;"><div id="m15-m2-b" style="height:100%;width:0%;background:#3b82f6;border-radius:3px;transition:width 1s;"></div></div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:4px;"><span>Definición de Formato (Tablas, viñetas)</span><span id="m15-m3-t">0/100</span></div>
          <div style="width:100%;background:#333;height:6px;border-radius:3px;"><div id="m15-m3-b" style="height:100%;width:0%;background:#f59e0b;border-radius:3px;transition:width 1s;"></div></div>
        </div>
        
        <div id="m15-verdict" style="margin-top:15px;padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;font-size:0.85rem;font-weight:700;"></div>
      </div>
    </div>

  </div>
</div>

<!-- TAB 3: GRADUACIÓN -->
<div id="m15-grado" class="ag-content">
  <div class="section-card animate-in" style="text-align:center;padding:40px 20px;border: 1px solid #eab308; background: radial-gradient(circle, rgba(234,179,8,0.1) 0%, rgba(0,0,0,0) 70%);">
    <div style="font-size:5rem;margin-bottom:10px;">🎓</div>
    <h2 style="color:#eab308;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;">Certificación Aprobada</h2>
    <p style="max-width:500px;margin:0 auto 30px;color:#cbd5e1;line-height:1.6;">
      Has superado exitosamente el núcleo de <b>Productividad Personal Corporativa</b> con Inteligencia Artificial. Ya no eres un usuario pasivo; ahora eres un orquestador de herramientas.
    </p>
    
    <div style="background:rgba(0,0,0,0.5);border:1px solid #333;border-radius:12px;padding:20px;display:inline-block;text-align:left;margin-bottom:30px;">
      <h4 style="margin:0 0 10px;border-bottom:1px solid #333;padding-bottom:10px;">📋 Competencias Adquiridas:</h4>
      <ul style="margin:0;padding-left:20px;font-size:0.85rem;line-height:1.8;color:#94a3b8;">
        <li>Ingeniería de Prompts Científica (CREA)</li>
        <li>Evitación de Alucinaciones con RAG (NotebookLM/Perplexity)</li>
        <li>Aceleración de Textos e Imágenes corporativas</li>
        <li>Bases de Automatización Lógica y Gestión del Conocimiento</li>
      </ul>
    </div>
    <br>
    
    <button id="btn-grad" class="gl-btn gl-btn-primary complete-module-btn" data-module="module-15" style="font-size:1.1rem;padding:15px 40px;" disabled>
      🏆 Finalizar Nivel y Reclamar +500 XP
    </button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-14">← Anterior</button>
  <button class="gl-btn" style="background:#475569;color:#fff;" data-goto="module-16">Acceder a Anexos (Módulos Extra) →</button>
</div>
`
  };

  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  return { init: function(app) { console.log('Initialized modules-13-15.js'); } };
})();
