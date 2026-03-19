window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-21'] = (function() {
  let m21State = { s1:false, s2:false, s3:false, s4:false };
  let currentNodeEditing = '';
  let flowState = { ai:'', db:'', out:'' };

  window.m21SetTab = function(step) {
    document.querySelectorAll('.m21-stage-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.m21-stage-content').forEach(c => c.classList.remove('active'));
    
    const btn = document.querySelector(`.m21-stage-btn[data-stage="${step}"]`);
    const content = document.getElementById(`m21-s${step}`);
    if(btn) btn.classList.add('active');
    if(content) content.classList.add('active');
  };

  // Phase 1 (RAG)
  window.m21RunS1 = function() {
    const input = document.getElementById('m21-input-1');
    const box = document.getElementById('m21-chat-1');
    if (!input || !box) return;
    const txt = input.value.toLowerCase();
    if(txt.length < 10) return;
    
    box.innerHTML += `<div class="m21-user-msg">Tú: ${txt}</div>`;
    
    let isGood = txt.includes('actúa') || txt.includes('lista') || txt.includes('resume');
    
    setTimeout(() => {
      if(isGood) {
        box.innerHTML += `<div class="m21-ai-msg">✅ [IA]: Análisis de 5000 PDFs completado.<br>1. El 68% de las quejas (3,400) mencionan "Falla en el portal web".<br>2. El 20% pide "Atención telefónica".<br><span style="color:#10b981;font-weight:700;">[Fase 1 Superada]</span></div>`;
        m21State.s1 = true;
        const phaseBtn = document.querySelector(`.m21-stage-btn[data-stage="1"]`);
        if (phaseBtn) phaseBtn.classList.add('completed');
        setTimeout(() => window.m21SetTab(2), 2000);
      } else {
         box.innerHTML += `<div class="m21-ai-msg">⚠️ [IA]: Tu prompt es muy vago ("${txt}"). Te recomiendo asignarme un ROL y pedirme un formato específico (ej: lista de 3 puntos). Intenta de nuevo.</div>`;
      }
      box.scrollTop = box.scrollHeight;
    }, 800);
  };

  // Phase 2 (Pic)
  window.m21RunS2 = function() {
    const input = document.getElementById('m21-input-2');
    const box = document.getElementById('m21-chat-2');
    if (!input || !box) return;
    const txt = input.value.toLowerCase();
    if(txt.length < 5) return;
    box.innerHTML += `<div class="m21-user-msg">Tú: ${txt}</div>`;
    
    // Simulate generation
    box.innerHTML += `<div class="m21-sys-msg">> Generando Seed Visual... renderizando 40 steps...</div>`;
    box.scrollTop = box.scrollHeight;
    
    setTimeout(() => {
        box.innerHTML += `<div class="m21-ai-msg" style="border-color:#c084fc;">✅ [DALL-E]:<br>
        <div style="background:#334155;width:100%;height:100px;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-top:10px;overflow:hidden;border:1px solid #475569;">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=300" style="object-fit:cover;width:100%;">
        </div>
        <br><span style="color:#10b981;font-weight:700;">[Fase 2 Superada. Imagen Exportada a Marketing]</span></div>`;
        m21State.s2 = true;
        const phaseBtn = document.querySelector(`.m21-stage-btn[data-stage="2"]`);
        if (phaseBtn) phaseBtn.classList.add('completed');
        box.scrollTop = box.scrollHeight;
        setTimeout(() => window.m21SetTab(3), 2500);
    }, 1500);
  };

  // Phase 3 (Ethics)
  window.m21RunS3 = function(isCorrect) {
    const res = document.getElementById('m21-s3-res');
    if (!res) return;
    if(isCorrect) {
      res.innerHTML = '<span style="color:#10b981;">✅ CORRECTO. Instalar una IA Local es la ÚNICA forma de garantizar 100% que los datos de ciudadanos no sean leídos por otras corporaciones o caigan en bases públicas de entrenamiento. ¡Privacidad asegurada!</span>';
      m21State.s3 = true;
      const phaseBtn = document.querySelector(`.m21-stage-btn[data-stage="3"]`);
      if (phaseBtn) phaseBtn.classList.add('completed');
      setTimeout(() => window.m21SetTab(4), 3000);
    } else {
      res.innerHTML = '<span style="color:#ef4444;">❌ ERROR GRAVE DE COMPLIANCE. Enviar datos personales identificables (cédulas) a APIs públicas de EE.UU. viola las políticas de protección de datos de tu Entidad. Intenta de nuevo.</span>';
    }
  };

  // Phase 4 (Make)
  window.m21OpenSelector = function(nodeId) {
    currentNodeEditing = nodeId;
    const modal = document.getElementById('m21-modal');
    if (modal) modal.classList.add('active');
  };
  
  window.m21SelectNode = function(label, type) {
    const modal = document.getElementById('m21-modal');
    if (modal) modal.classList.remove('active');
    if(!type) return; // cancel
    
    const node = document.getElementById(currentNodeEditing);
    if (node) {
      node.innerHTML = label;
      node.classList.add('filled');
    }
    
    if(currentNodeEditing === 'n-ai') flowState.ai = type;
    if(currentNodeEditing === 'n-db') flowState.db = type;
    if(currentNodeEditing === 'n-out') flowState.out = type;
    
    // Check if full
    if(flowState.ai && flowState.db && flowState.out) {
      const verifyBtn = document.getElementById('m21-btn-verify');
      if (verifyBtn) verifyBtn.disabled = false;
    }
  };

  window.m21VerifyFlow = function() {
    const btn = document.getElementById('m21-btn-verify');
    if (!btn) return;
    if(flowState.ai === 'ai' && flowState.db === 'db' && flowState.out === 'out') {
      btn.innerHTML = "✅ FLUJO PERFECTO";
      btn.style.background = "#10b981";
      const phaseBtn = document.querySelector(`.m21-stage-btn[data-stage="4"]`);
      if (phaseBtn) phaseBtn.classList.add('completed');
      
      // TRIGGER WIN
      setTimeout(() => {
        const nav = document.getElementById('m21-nav');
        if (nav) nav.style.display = 'none';
        document.querySelectorAll('.m21-stage-content').forEach(c => c.classList.remove('active'));
        const victory = document.getElementById('m21-victory');
        if (victory) victory.classList.add('active');
        if(window.app) window.app.addXP(500); // Massive XP
      }, 1500);
      
    } else {
      btn.innerHTML = "❌ ORDEN INCORRECTO";
      btn.style.background = "#ef4444";
      setTimeout(() => { btn.innerHTML = "🤖 REINTENTAR COMPILACIÓN"; btn.style.background = "#f59e0b"; }, 2000);
    }
  };

  const finalModuleHTML = `
<style>
  .m21-centauro-card { background: #050a0e; border: 1px solid #10b981; border-radius: 16px; padding: 25px; position: relative; overflow: hidden; }
  .m21-hero-bg { position: absolute; top:0; left:0; width:100%; height:150px; background: linear-gradient(180deg, rgba(16,185,129,0.1) 0%, transparent 100%); pointer-events:none; }
  .m21-stage-nav { display: flex; gap: 10px; margin-bottom: 25px; border-bottom: 1px solid #333; padding-bottom: 15px; overflow-x: auto; }
  .m21-stage-btn { background: rgba(255,255,255,0.05); border: 1px solid #333; color: #94a3b8; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-weight: 700; white-space: nowrap; transition: all 0.3s; }
  .m21-stage-btn.active { background: rgba(16,185,129,0.1); border-color: #10b981; color: #10b981; }
  .m21-stage-btn.completed { background: rgba(59,130,246,0.1); border-color: #3b82f6; color: #60a5fa; }
  .m21-stage-content { display: none; animation: fadeIn 0.4s ease; }
  .m21-stage-content.active { display: block; }
  
  .m21-chat-box { background: #0d1117; border: 1px solid #333; border-radius: 12px; height: 250px; overflow-y: auto; padding: 15px; margin-bottom: 15px; font-family: monospace; font-size: 0.85rem; }
  .m21-sys-msg { color: #f59e0b; margin-bottom: 10px; }
  .m21-ai-msg { color: #60a5fa; border-left: 2px solid #3b82f6; padding-left: 10px; margin-bottom: 15px; }
  .m21-user-msg { color: #cbd5e1; text-align: right; margin-bottom: 15px; }
  
  .m21-prompt-input { width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: monospace; margin-bottom: 10px; }
  .m21-btn-run { background: #10b981; color: #000; font-weight: 800; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; transition: transform 0.1s; }
  .m21-btn-run:active { transform: scale(0.95); }
  
  /* Nodo Visual Zapier */
  .m21-node-grid { display: flex; align-items: center; justify-content: center; gap: 15px; margin: 25px 0; flex-wrap: wrap; }
  .m21-node { width: 100px; height: 100px; border-radius: 16px; border: 2px dashed #475569; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 0.75rem; text-align: center; cursor: pointer; transition: all 0.3s; background:#0d1117; color:#94a3b8;}
  .m21-node:hover { border-color: #60a5fa; background: rgba(59,130,246,0.1); }
  .m21-node.filled { border: 2px solid #10b981; background: rgba(16,185,129,0.1); color: #10b981; font-weight:700;}
  .m21-arrow { color: #475569; font-size: 1.5rem; }
  
  /* Modal Selector Zapier */
  .m21-modal-overlay { position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:999; display:none; align-items:center; justify-content:center; backdrop-filter:blur(4px); }
  .m21-modal-overlay.active { display:flex; }
  .m21-modal { background: #0f172a; border: 1px solid #333; padding: 20px; border-radius: 16px; width: 90%; max-width: 400px; }
  .m21-option { padding: 15px; border: 1px solid #333; border-radius: 8px; margin-bottom: 10px; cursor: pointer; color:#cbd5e1; }
  .m21-option:hover { background: rgba(59,130,246,0.1); border-color:#3b82f6; }
  
  /* Victoria */
  .m21-victory { text-align:center; padding: 40px 10px; }
  .m21-medal-huge { font-size: 5rem; text-shadow: 0 0 30px rgba(234,179,8,0.5); animation: float 3s ease-in-out infinite; }
  @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-15px);} }
</style>

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.2)); border: 1px solid rgba(16,185,129,0.3);">
  <div class="module-number gamer-badge" style="background:#10b981;color:#000;">GRAN RETO FINAL</div>
  <h2 class="module-title glow-text" style="color:#6ee7b7;">🛡️ Operación Centauro</h2>
  <p class="module-description">Una crisis ha golpeado a tu Organización. Se han recibido 5,000 quejas en PDF sobre "Demoras en Trámites". Tu jefe te da 4 horas para analizar, responder y crear un plan de choque automatizado. Usa todo lo que aprendiste.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 15 min</span>
    <span class="module-meta-item">💎 500 XP MASIVOS</span>
    <span class="module-meta-item">🏆 Título: Arquitecto IA</span>
  </div>
</div>

<div class="m21-centauro-card">
  <div class="m21-hero-bg"></div>
  
  <div class="m21-stage-nav" id="m21-nav">
    <button class="m21-stage-btn active" data-stage="1">1. RAG (Investigación)</button>
    <button class="m21-stage-btn" data-stage="2">2. Visual (Campaña)</button>
    <button class="m21-stage-btn" data-stage="3">3. Ética (Privacidad)</button>
    <button class="m21-stage-btn" data-stage="4">4. Autómata (Flujo)</button>
  </div>
  
  <!-- STAGE 1: RAG -->
  <div id="m21-s1" class="m21-stage-content active">
    <h3 style="color:#60a5fa;margin-top:0;">Fase 1: El Analista RAG (NotebookLM)</h3>
    <div class="preparation-step" style="background: rgba(16,185,129,0.1); border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin: 15px 0 20px; border-left: 4px solid #10b981;">
      <h4 style="margin-top: 0; color: #10b981; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Revisa los pilares CREA y los principios de RAG que aprendiste; los necesitarás para orquestar la resolución de esta crisis.</p>
    </div>
    <p style="font-size:0.85rem;color:#cbd5e1;line-height:1.6;">Has subido los 5,000 PDFs al simulador de base documental. Necesitas saber cuál es la queja más repetida. ¡Usa un buen prompt analítico!</p>
    
    <div class="pista-ia" style="margin-bottom:15px;font-size:0.75rem;">
      💡 Pista: Dile a la IA qué rol asumir y qué formato quieres (ej: "Actúa como analista y dime en una lista de 3 puntos...").
    </div>
    
    <div class="m21-chat-box" id="m21-chat-1">
      <div class="m21-sys-msg">[Sistema]: 5,000 PDFs cargados y vectorizados. Esperando consulta del Operador.</div>
    </div>
    
    <textarea class="m21-prompt-input" id="m21-input-1" rows="2" placeholder="Escribe tu prompt RAG aquí..."></textarea>
    <button class="m21-btn-run" onclick="m21RunS1()">▶ Ejecutar Análisis</button>
  </div>
  
  <!-- STAGE 2: VISUAL -->
  <div id="m21-s2" class="m21-stage-content">
    <h3 style="color:#c084fc;margin-top:0;">Fase 2: El Director Creativo (Midjourney)</h3>
    <p style="font-size:0.85rem;color:#cbd5e1;line-height:1.6;">Descubriste que la queja principal es "Falta de claridad en la web". Tu jefe te pide lanzar ya una campaña de redes. Escribe un prompt para generar una imagen hiperrealista de "Un ciudadano sonriendo usando un celular".</p>
    
    <div class="pista-ia" style="margin-bottom:15px;font-size:0.75rem;">
      💡 Pista: Usa el esquema (Sujeto) + (Entorno) + (Cámara/Estilo). Ej: "Fotografía hiperrealista de..." o "--ar 16:9"
    </div>
    
    <div class="m21-chat-box" id="m21-chat-2" style="height:200px;">
      <div class="m21-sys-msg">[Motor DALL-E 3]: Listo para renderizar píxeles.</div>
    </div>
    
    <textarea class="m21-prompt-input" id="m21-input-2" rows="2" placeholder="Prompt visual (Ej: Fotografía 4k de un hombre joven...)"></textarea>
    <button class="m21-btn-run" style="background:#c084fc;" onclick="m21RunS2()">🖼️ Generar Render</button>
  </div>

  <!-- STAGE 3: PRIVACIDAD -->
  <div id="m21-s3" class="m21-stage-content">
    <h3 style="color:#ef4444;margin-top:0;">Fase 3: El Auditor de Riesgos (Ética IA)</h3>
    <p style="font-size:0.85rem;color:#cbd5e1;line-height:1.6;">Vas a mandar respuestas automáticas a los ciudadanos, pero el excel original tiene Nombres, Cédulas y Celulares. El servidor general está bloqueado. ¿Qué modelo de IA usas para procesar esto DENTRO de tu PC sin violar Habeas Data?</p>
    
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:20px;">
      <button class="m21-stage-btn" style="text-align:left;height:auto;white-space:normal;" onclick="m21RunS3(false)">A. ChatGPT Plus (OpenAI) en la Nube corporativa.</button>
      <button class="m21-stage-btn" style="text-align:left;height:auto;white-space:normal;" onclick="m21RunS3(false)">B. Claude 3.5 Sonnet por API pública.</button>
      <button class="m21-stage-btn" style="text-align:left;height:auto;white-space:normal;" onclick="m21RunS3(true)">C. Instalar Ollama localmente y ejecutar Llama3 o DeepSeek Offline.</button>
    </div>
    <div id="m21-s3-res" style="margin-top:15px;font-weight:700;"></div>
  </div>

  <!-- STAGE 4: MAKE/ZAPIER -->
  <div id="m21-s4" class="m21-stage-content">
    <h3 style="color:#f59e0b;margin-top:0;">Fase 4: El Arquitecto Autómata (Zapier/Make)</h3>
    <p style="font-size:0.85rem;color:#cbd5e1;line-height:1.6;">Vamos a automatizar todo. Toca cada nodo vacío y selecciona la herramienta correcta en el orden correcto para crear el flujo: "Entra Email -> Pasa por IA local -> Guarda en Excel -> Envía Respuesta".</p>
    
    <div class="m21-node-grid">
      <div class="m21-node filled">📩<br>1. Gmail<br>(Trigger)</div>
      <div class="m21-arrow">→</div>
      <div class="m21-node" id="n-ai" onclick="m21OpenSelector('n-ai')">?</div>
      <div class="m21-arrow">→</div>
      <div class="m21-node" id="n-db" onclick="m21OpenSelector('n-db')">?</div>
      <div class="m21-arrow">→</div>
      <div class="m21-node" id="n-out" onclick="m21OpenSelector('n-out')">?</div>
    </div>
    
    <div style="text-align:center;">
      <button class="m21-btn-run" style="background:#f59e0b;" id="m21-btn-verify" onclick="m21VerifyFlow()" disabled>🤖 Compilar Flujo</button>
    </div>
  </div>
  
  <!-- VICTORY -->
  <div id="m21-victory" class="m21-stage-content m21-victory">
    <div class="m21-medal-huge">🦾</div>
    <h2 style="color:#10b981;font-size:2rem;margin:10px 0;">¡OPERACIÓN CENTAURO EXITOSA!</h2>
    <p style="color:#cbd5e1;">Has resuelto una crisis organizativa entera sin escribir una sola línea de código, usando RAG, Prompts visuales, Privacidad local y Automatización.</p>
    <div style="font-family:monospace;font-size:2rem;color:#fde047;font-weight:800;margin:20px 0;">+ 500 XP</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-21" style="width:100%;">Reclamar Insignia Dorada: Arquitecto IA</button>
  </div>

</div>

<!-- ZAPIER SELECTOR MODAL -->
<div class="m21-modal-overlay" id="m21-modal">
  <div class="m21-modal">
    <h4 style="color:#fff;margin-top:0;">Selecciona el Módulo Lógico</h4>
    <div class="m21-option" onclick="m21SelectNode('🤖 OpenAI / Ollama', 'ai')">🤖 OpenAI / Llama (Procesar Info)</div>
    <div class="m21-option" onclick="m21SelectNode('📊 Excel / GSheets', 'db')">📊 Excel / Google Sheets (Guardar)</div>
    <div class="m21-option" onclick="m21SelectNode('📤 Gmail (Send)', 'out')">📤 Gmail - Send Email (Responder)</div>
    <div class="m21-option" onclick="m21SelectNode('❌ Cancelar', '')" style="text-align:center;border:none;color:#ef4444;">❌ Cancelar</div>
  </div>
</div>

<div class="module-nav" style="margin-top:30px;">
  <button class="gl-btn" data-goto="module-20">← Volver al Salón de la Fama</button>
</div>
`;

  const target = document.getElementById('module-21');
  if (target) {
    target.innerHTML = finalModuleHTML;
  }
  return { init: function(app) { console.log('M21 Init'); } };
})();
