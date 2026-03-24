window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-8'] = window.GuiaModules['module-9'] = window.GuiaModules['module-10'] = (function() {
  // --- MÓDULO 8: Lógica Centralizada ---
  window.m8TransformTone = function() {
    const txt = document.getElementById('m8-orig').value.trim();
    const activeBtn = document.querySelector('.m8-tone.active');
    const tone = activeBtn ? activeBtn.dataset.tone : 'formal';
    if (!txt) { window.showToast('Escribe un texto fuente primero', 'warning'); return; }
    
    const output = document.getElementById('m8-out');
    if (output) {
      output.innerHTML = '<div class="thinking-process-premium"><div class="thinking-header"><span class="pulse-dot"></span><span class="thinking-title">ORQUESTANDO VERSIÓN SOBERANA...</span></div></div>';
    }

    setTimeout(() => {
      const prompt = `Actúa como Experto en Comunicación Estratégica. Transforma este texto inyectando un VECTOR DE IDENTIDAD: ${tone}. 
REGLA DE ORO: Mantén los hechos reales pero eleva el estilo al estándar de alta dirección. 

TEXTO FUENTE:
"${txt}"

VERSIÓN OPTIMIZADA:`;

      if (output) {
        output.innerHTML = '<b style="color:var(--primary-light)">✅ Transformación Soberana Lista:</b><br><br><div style="background:rgba(0,0,0,0.3);padding:15px;border-radius:8px;border:1px solid var(--glass-border);font-family:monospace;font-size:0.85rem;line-height:1.6;color:var(--text-main);">' + prompt + '</div>';
      }
      
      const copyBtn = document.getElementById('m8-out-copy');
      if (copyBtn) {
        copyBtn.style.display = 'block';
        copyBtn.onclick = () => { 
          navigator.clipboard.writeText(prompt); 
          window.showToast('Prompt Maestro Copiado', 'success'); 
          window.app && window.app.addXP(40); 
        };
      }
    }, 1200);
  };

  window.selectM8Tone = function(el) {
    document.querySelectorAll('.m8-tone').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
  };

  const m8DetectiveData = [
    {msg:'"En cumplimiento de lo establecido en el artículo 5 del Decreto 2150 de 1995, se informa al peticionario que la entidad procederá a dar trámite a la solicitud en los términos legales."',correct:'Institucional/Jurídico',opts:['Empático','Ejecutivo','Institucional/Jurídico','Motivador'],exp:'Lenguaje de decreto, referencias legales y tercera persona = tono institucional jurídico.'},
    {msg:'"Entendemos perfectamente tu frustración y nos apena la situación que viviste. Tu caso ya está en manos de nuestro equipo y te mantendremos informado paso a paso."',correct:'Empático',opts:['Empático','Diplomático','Formal','Ejecutivo'],exp:'Primera persona, comprensión emocional y promesa de acompañamiento = tono empático.'},
    {msg:'"3 acciones concretas para esta semana: 1) Revisar contratos vencidos, 2) Notificar a los 4 contratistas, 3) Enviar reporte el viernes antes de las 5pm."',correct:'Ejecutivo',opts:['Motivador','Ejecutivo','Institucional/Jurídico','Empático'],exp:'Bullets con acciones, fechas y responsables sin explicaciones adicionales = tono ejecutivo.'},
    {msg:'"¡Lo logramos! Gracias al esfuerzo de todos, superamos la meta de recaudo. Este es un triunfo del equipo y demuestra que juntos somos imparables."',correct:'Motivador',opts:['Diplomático','Motivador','Formal','Empático'],exp:'Uso de exclamaciones, lenguaje inclusivo ("todos", "juntos") y enfoque en el triunfo = tono motivador.'},
    {msg:'"Agradecemos su interés en el proceso de selección. Aunque su perfil no se ajusta a las necesidades actuales, conservaremos su hoja de vida para futuras vacantes."',correct:'Formal',opts:['Empático','Formal','Ejecutivo','Diplomático'],exp:'Lenguaje estándar, profesional, directo pero con cortesía distante = tono formal.'}
  ];
  let m8Cur = 0, m8Score = 0;
  window.m8Score = 0; 

  window.initM8Detective = function() {
    m8Cur = 0; m8Score = 0;
    renderM8Detective();
  };

  function renderM8Detective() {
    const container = document.getElementById('m8-detective');
    if (!container) return;
    if (m8Cur >= m8DetectiveData.length) {
      container.innerHTML = '<div style="text-align:center;padding:25px;"><span style="font-size:3rem">🕵️</span><h3>¡Detective completado! '+m8Score+'/'+m8DetectiveData.length+'</h3><button class="gl-btn gl-btn-primary" onclick="window.app&&window.app.addXP(window.m8Score*30);this.disabled=true;this.textContent=\'XP Reclamado!\'">Reclamar '+(m8Score*30)+' XP</button></div>';
      return;
    }
    const c = m8DetectiveData[m8Cur];
    container.innerHTML = '<div style="background:rgba(59,130,246,0.05);border:1px solid rgba(59,130,246,0.2);border-radius:12px;padding:20px;"><div style="font-size:0.7rem;opacity:0.6;margin-bottom:10px;">Caso '+(m8Cur+1)+'/'+m8DetectiveData.length+'</div><p style="font-style:italic;margin-bottom:18px;">'+c.msg+'</p><p style="font-weight:700;font-size:0.85rem;margin-bottom:10px;">¿Qué tipo de tono tiene este mensaje?</p>'+c.opts.map(o=>'<div onclick="window.chkM8(this,\''+o+'\')" style="padding:10px 16px;margin:6px 0;border:1px solid var(--border);border-radius:8px;cursor:pointer;font-size:0.85rem;transition:all 0.2s;">'+o+'</div>').join('')+'<div id="m8d-exp" style="display:none;margin-top:12px;padding:12px;background:rgba(59,130,246,0.08);border-radius:8px;font-size:0.82rem;"></div></div>';
  }

  window.chkM8 = function(el, ans) {
    const c = m8DetectiveData[m8Cur];
    document.querySelectorAll('#m8-detective [onclick]').forEach(e => {
      if (e.getAttribute('onclick')?.startsWith('chkM8')) e.style.pointerEvents = 'none';
    });
    if (ans === c.correct) {
      el.style.borderColor = '#10b981';
      el.style.background = 'rgba(16,185,129,0.1)';
      m8Score++;
      window.m8Score = m8Score; 
      window.showToast('+30 XP ¡Correcto!', 'success');
    } else {
      el.style.borderColor = '#ef4444';
      el.style.background = 'rgba(239,68,68,0.08)';
    }
    const exp = document.getElementById('m8d-exp');
    if (exp) {
      exp.style.display = 'block';
      exp.innerHTML = '💡 ' + c.exp + '<br><br><button class="gl-btn small" style="margin-top:8px;" onclick="window.m8Next()">Siguiente →</button>';
    }
  };

  window.m8Next = function() {
    m8Cur++;
    renderM8Detective();
  };

  // --- MÓDULO 9: Lógica Centralizada ---
  const m9CasesData = [
    {data:'La cédula de un ciudadano con su dirección residencial para buscar su expediente.',correct:'NO',why:'Dato personal sensible. Nunca a IAs públicas. Usa el sistema interno de la entidad.'},
    {data:'El texto del Decreto 1083 de 2015 para que la IA lo explique en lenguaje sencillo.',correct:'SÍ',why:'Es normativa pública disponible en internet. Seguro de compartir.'},
    {data:'El presupuesto aprobado y de uso público del Plan de Desarrollo Municipal 2024.',correct:'SÍ',why:'Información pública. Puedes compartirla para análisis, resúmenes o visualizaciones.'},
    {data:'La contraseña de tu correo institucional para que la IA acceda y ordene tu bandeja.',correct:'NO',why:'NUNCA compartas credenciales con ninguna IA ni servicio externo.'},
    {data:'Un texto genérico: "Necesito redactar una política de teletrabajo. ¿Qué secciones debe tener?"',correct:'SÍ',why:'Sin datos personales ni confidenciales. Pregunta conceptual completamente segura.'}
  ];
  let m9Cur = 0, m9Score = 0;
  window.m9Score = 0;

  window.initM9Sim = function() {
    m9Cur = 0; m9Score = 0;
    renderM9Sim();
  };

  function renderM9Sim() {
    const container = document.getElementById('m9-sim');
    if (!container) return;
    if (m9Cur >= m9CasesData.length) {
      container.innerHTML = '<div style="text-align:center;padding:25px;"><span style="font-size:3rem">🛡️</span><h3>¡Protocolo completado! '+m9Score+'/'+m9CasesData.length+'</h3><button class="gl-btn gl-btn-primary" onclick="window.app&&window.app.addXP(window.m9Score*30);this.disabled=true;this.textContent=\'XP Reclamado!\'">Reclamar '+(m9Score*30)+' XP</button></div>';
      return;
    }
    const c = m9CasesData[m9Cur];
    container.innerHTML = `<div style="background:rgba(255,255,255,0.02);border-radius:12px;padding:20px;border:1px solid var(--border)">
      <div style="font-size:0.7rem;opacity:0.6;margin-bottom:10px;">Caso ${m9Cur+1}/${m9CasesData.length}</div>
      <p style="font-size:0.95rem;margin-bottom:20px;border-left:3px solid var(--primary);padding-left:12px;">${c.data}</p>
      <p style="font-weight:700;margin-bottom:12px;">¿Puedo compartirlo con <a href="https://chatgpt.com" target="_blank" style="color:var(--primary); text-decoration:underline;">ChatGPT</a>?</p>
      <div style="display:flex;gap:12px;">
        <button onclick="window.ansM9(this,'SÍ')" class="gl-btn gl-btn-primary" style="flex:1;background:#10b981;">✅ SÍ, es seguro</button>
        <button onclick="window.ansM9(this,'NO')" class="gl-btn" style="flex:1;border-color:#ef4444;color:#ef4444;">🚫 NO, es riesgoso</button>
      </div>
      <div id="m9s-exp" style="display:none;margin-top:14px;padding:12px;border-radius:8px;font-size:0.85rem;"></div>
    </div>`;
  }

  window.ansM9 = function(btn, ans) {
    const c = m9CasesData[m9Cur];
    btn.parentElement.querySelectorAll('button').forEach(b => b.disabled = true);
    const exp = document.getElementById('m9s-exp');
    if (ans === c.correct) {
      m9Score++;
      window.m9Score = m9Score;
      window.showToast('+30 XP ¡Correcto!', 'success');
      if (exp) exp.style.background = 'rgba(16,185,129,0.08)';
    } else {
      window.showToast('Incorrecto', 'error');
      if (exp) exp.style.background = 'rgba(239,68,68,0.08)';
    }
    if (exp) {
      exp.style.display = 'block';
      exp.innerHTML = '💡 ' + c.why + '<br><br><button class="gl-btn small" style="margin-top:8px;" onclick="window.m9Next()">Siguiente →</button>';
    }
  };

  window.m9Next = function() {
    m9Cur++;
    renderM9Sim();
  };

  window.m9EthicQuiz = function(idx) {
    const cases = [
      { q: "¿Es ético usar IA para redactar un acta de una reunión a la que no asististe?", a: false, e: "CRÍTICO: No. La IA no estuvo ahí. Alucinará el contenido. Esto es fraude documental." },
      { q: "¿Puedo subir un archivo con cédulas de ciudadanos para que la IA los ordene?", a: false, e: "PELIGRO: ¡No! Es una violación grave de Habeas Data (Ley 1581). Nunca compartas PII." },
      { q: "¿Es válido usar la IA como 'primer borrador' y luego corregirlo al 100%?", a: true, e: "¡EXCELENTE! Esa es la esencia del trabajo con IA Soberana: humano siempre en control." }
    ];
    const c = cases[idx];
    if (c.a) {
      window.showToast('✅ ' + c.e, 'success');
      window.app && window.app.addXP(40);
    } else {
      window.showToast('⚠️ ' + c.e, 'warning');
    }
  };

  // --- NUEVO: Detective de Alucinaciones (Module 9) ---
  const m9HalluData = [
    {text:'"El Plan de Desarrollo Municipal 2024 fue firmado personalmente por el Papa Francisco en la Plaza de Bolívar."',correct:'firmado personalmente por el Papa Francisco',opts:['2024','Plaza de Bolívar','firmado personalmente por el Papa Francisco'],title:'Caso 1: Un evento improbable'},
    {text:'"Según la Ley 9999 de 2023, todos los funcionarios deben usar corbata de seda obligatoriamente los martes."',correct:'Ley 9999 de 2023',opts:['Ley 9999 de 2023','usar corbata','martes'],title:'Caso 2: Normativa inventada'},
    {text:'"El PIB de la ciudad creció un 450% en el último trimestre gracias al uso de IA en cafeterías."',correct:'450%',opts:['último trimestre','IA en cafeterías','450%'],title:'Caso 3: Estadística absurda'}
  ];
  let m9HCur = 0, m9HScore = 0;
  window.m9HScore = 0;

  window.initM9Hallu = function() {
    m9HCur = 0; m9HScore = 0;
    renderM9Hallu();
  };

  function renderM9Hallu() {
    const box = document.getElementById('m9-hallu-game');
    if (!box) return;
    if (m9HCur >= m9HalluData.length) {
      box.innerHTML = `<div style="text-align:center;padding:15px;"><span style="font-size:2.5rem">🕵️‍♂️</span><h4>¡Análisis Finalizado!</h4><p>Puntaje: ${m9HScore}/${m9HalluData.length}</p><button class="gl-btn gl-btn-primary" onclick="window.app&&window.app.addXP(window.m9HScore*40);this.disabled=true;this.textContent='XP Reclamado!'">Reclamar ${m9HScore*40} XP</button></div>`;
      return;
    }
    const c = m9HalluData[m9HCur];
    box.innerHTML = `<div style="border:1px solid rgba(245,158,11,0.3);background:rgba(245,158,11,0.05);padding:18px;border-radius:12px;">
      <div style="font-size:0.8rem;color:#f59e0b;font-weight:700;margin-bottom:8px;">🕵️ IA DETECTIVE</div>
      <p style="font-size:0.9rem;margin-bottom:15px;">Analiza el siguiente texto y selecciona <b>la alucinación</b> (el dato falso):</p>
      <p style="font-style:italic;background:rgba(0,0,0,0.3);padding:12px;border-radius:8px;margin-bottom:15px;border-left:3px solid #f59e0b;">"${c.text}"</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${c.opts.map(o=>`<button class="gl-btn small hallu-btn" onclick="window.chkM9H(this,'${o}')">${o}</button>`).join('')}
      </div>
      <div id="m9h-exp" style="display:none;margin-top:12px;font-size:0.82rem;padding:8px;border-radius:6px;background:rgba(16,185,129,0.1);"></div>
    </div>`;
  }

  window.chkM9H = function(el, ans) {
    const c = m9HalluData[m9HCur];
    document.querySelectorAll('.hallu-btn').forEach(b => b.disabled = true);
    if (ans === c.correct) {
      el.style.background = '#10b981'; el.style.color = '#fff';
      m9HScore++; window.m9HScore = m9HScore;
      window.showToast('¡Correcto! Identificaste la alucinación.', 'success');
    } else {
      el.style.background = '#ef4444'; el.style.color = '#fff';
      window.showToast('Incorrecto. La alucinación era: ' + c.correct + '.', 'error');
    }
    setTimeout(() => {
      m9HCur++;
      renderM9Hallu();
    }, 1500);
  };

  // --- MÓDULO 10: Lógica Centralizada ---
  const m10Map = {
    chat:{icon:'🤖',tool:'ChatGPT o Gemini',why:'Son los más versátiles para conversación, ideas y consultas rápidas.',link:'https://chatgpt.com'},
    docs:{icon:'📓',tool:'NotebookLM',why:'Diseñado específicamente para analizar tus documentos. Súbelos y hazle preguntas.',link:'https://notebooklm.google.com'},
    write:{icon:'✍️',tool:'Claude o ChatGPT',why:'Claude es superior para redacción formal y documentos largos. ChatGPT es más creativo.',link:'https://claude.ai'},
    data:{icon:'📊',tool:'ChatGPT (Code Interpreter) o Copilot Excel',why:'ChatGPT puede analizar CSV y Excel directamente con la función de análisis de datos.',link:'https://chatgpt.com'},
    images:{icon:'🎨',tool:'Canva IA o MS Designer',why:'Canva para diseño rápido con plantillas. MS Designer para imágenes generativas gratuitas.',link:'https://canva.com'},
    presentation:{icon:'⚡',tool:'Gamma.app',why:'Gamma genera presentaciones completas con diseño y contenido desde un solo prompt.',link:'https://gamma.app'},
    video:{icon:'🎬',tool:'Runway ML o Descript',why:'Runway para generación de video. Descript para edición por texto.',link:'https://runwayml.com'},
    verify:{icon:'🔍',tool:'Perplexity AI',why:'Perplexity busca en internet en tiempo real y cita las fuentes. Ideal para normas.',link:'https://perplexity.ai'},
    translate:{icon:'🌐',tool:'DeepL',why:'La mejor precisión para traducción de documentos formales y técnicos.',link:'https://deepl.com'},
    personal:{icon:'🏠',tool:'ChatGPT o Notion AI',why:'ChatGPT como coach/asistente personal. Notion AI para organizar metas y proyectos.',link:'https://chatgpt.com'}
  };

  window.m10Recommend = function() {
    const input = document.getElementById('m10-rec-input');
    const box = document.getElementById('m10-rec-out');
    if (!input || !box) return;

    const val = input.value.toLowerCase().trim();
    if (!val) {
      window.showToast('Describe tu tarea para consultarle al oráculo', 'warning');
      return;
    }

    // Thinking effect
    box.innerHTML = '<div class="thinking-process-premium"><div class="thinking-header"><span class="pulse-dot"></span><span class="thinking-title">EL ORÁCULO ESTÁ CONSULTANDO LOS REGISTROS SOBERANOS...</span></div></div>';
    box.style.display = 'block';

    setTimeout(() => {
      let r = null;
      
      // Smart Keyword Detection
      if (val.match(/ley|decreto|norma|abogado|juridico|legal|normativa/)) r = m10Map.verify;
      else if (val.match(/excel|datos|presupuesto|cuenta|porcentaje|tabla|estadistica/)) r = m10Map.data;
      else if (val.match(/resumir|leer|pdf|documento|archivo|extenso/)) r = m10Map.docs;
      else if (val.match(/redactar|escribir|correo|acta|texto|informe/)) r = m10Map.write;
      else if (val.match(/imagen|diseño|logo|presentacion|diapositiva|video|animacion/)) {
        if (val.match(/presentacion|slide|diapositiva/)) r = m10Map.presentation;
        else if (val.match(/video/)) r = m10Map.video;
        else r = m10Map.images;
      }
      else if (val.match(/traducir|idioma|ingles/)) r = m10Map.translate;
      else if (val.match(/reunion|acta|entrevista|transcrip/)) r = { name: 'Teams Meet / Otter', desc: 'Transcripción y actas automáticas de tus reuniones.', icon: '🎙️', link: 'https://otter.ai' };
      else if (val.match(/web|app|codigo|boton|formulario/)) r = { name: 'V0 / Bolt.new', desc: 'Genera herramientas internas y apps sin saber programar.', icon: '⚡', link: 'https://v0.dev' };
      else r = m10Map.chat; // Default

      box.innerHTML = `
        <div class="analysis-result-premium animate-in visible" style="border: 1px solid var(--accent); background: rgba(var(--accent-rgb), 0.05);">
          <div class="result-header">
            <span class="status-badge status-high" style="background:var(--accent);">${r.icon} RECOMENDACIÓN DEL ORÁCULO</span>
            <h3 style="color:var(--accent); margin-top:10px;">${r.tool}</h3>
          </div>
          <p style="font-size:0.9rem; margin:15px 0; line-height:1.6; opacity:0.9;">${r.why}</p>
          <div style="display:flex; gap:10px; margin-top:20px;">
            <a href="${r.link}" target="_blank" class="gl-btn gl-btn-primary gl-btn-lux" style="flex:1; text-decoration:none; text-align:center;">
              ⚡ ABRIR ${r.tool.toUpperCase()}
            </a>
            <button class="gl-btn small" onclick="this.closest('.oracle-card').scrollIntoView({behavior:'smooth'})" style="opacity:0.6;">
              Nueva Consulta
            </button>
          </div>
        </div>
      `;
      window.app && window.app.addXP(25);
    }, 1500);
  };

  const modules = {

'module-8': `
<div class="module-header premium-header glass-card">
  <div class="holographic-glare" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%);"></div>
  <div class="gamer-badge" style="background:var(--primary);box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);">Módulo 8 — Comunicación Elite</div>
  <h2 class="module-title glow-text" style="background:linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">✉️ Comunicación Efectiva con IA</h2>
  <p class="module-description" style="font-size: 1.05rem; line-height: 1.6;">Convierte a la IA en tu Jefe de Redacción y Estrategia. Domina el arte de la persuasión digital, adapta tonos institucionales y genera comunicaciones inquebrantables en segundos.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 40 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Comunicador Maestro</span>
  </div>
</div>

<div class="ag-tabs game-tabs premium-tabs-v5" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m8-lab">🧪 Lab: Ghost Writer</button>
  <button class="tab-btn" data-tab="m8-templates">📋 Biblioteca de Prompts</button>
  <button class="tab-btn" data-tab="m8-tools">🧰 Arsenal IA</button>
  <button class="tab-btn" data-tab="m8-game">🎮 Detective Pro</button>
  <button class="tab-btn" data-tab="m8-mission">⚔️ Misión: Operación Link</button>
</div>

<div id="m8-lab" class="ag-content active">
  <div class="section-card glass-card animate-in">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
        <div>
            <h3 style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><span class="icon">🎛️</span> Sovereign Ghost Writer v3.0</h3>
            <p style="color:var(--text-muted); font-size: 0.95rem;">Tu redactor estratégico personal. Inyecta personalidad, ajusta el nivel jerárquico y transforma borradores informales en documentos de alto impacto.</p>
        </div>
        <div class="badge premium-badge" style="background: rgba(59,130,246,0.1); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700;">ACTUALIZADO</div>
    </div>
    
    <!-- Guía Paso a Paso Visual -->
    <div style="display:flex; gap: 15px; margin-bottom: 25px; background:rgba(0,0,0,0.2); border-radius:12px; padding:15px; border:1px solid var(--border-light);">
        <div style="flex:1; text-align:center;">
            <div style="font-size:1.5rem; margin-bottom:5px;">📥</div>
            <div style="font-weight:700; font-size:0.8rem; color:var(--primary-light);">1. Inserta Bruto</div>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">Tu idea o borrador rápido</div>
        </div>
        <div style="color:var(--border-light); align-self:center;">▶</div>
        <div style="flex:1; text-align:center;">
            <div style="font-size:1.5rem; margin-bottom:5px;">🎚️</div>
            <div style="font-weight:700; font-size:0.8rem; color:var(--accent);">2. Calibra Tono</div>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">Elige el vector de impacto</div>
        </div>
        <div style="color:var(--border-light); align-self:center;">▶</div>
        <div style="flex:1; text-align:center;">
            <div style="font-size:1.5rem; margin-bottom:5px;">🚀</div>
            <div style="font-weight:700; font-size:0.8rem; color:var(--success);">3. Transforma</div>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">Copia el prompt maestro</div>
        </div>
    </div>

    <!-- UI Principal -->
    <div style="background:rgba(59,130,246,0.03);border:1px solid rgba(59,130,246,0.15);border-radius:14px;padding:26px;position:relative;overflow:hidden;">
      <div style="margin-bottom:18px;">
        <label class="premium-label-muted" style="margin-bottom:8px; display:inline-block;">TEXTO FUENTE (BRUTO O IDEAS RÁPIDAS)</label>
        <textarea id="m8-orig" class="premium-textarea" placeholder="Pega el borrador... Ej: El presupuesto no alcanza, hay que esperar hasta el próximo mes." style="min-height: 100px; font-size: 0.95rem;"></textarea>
      </div>
      <div style="margin-bottom:18px;">
        <label class="premium-label-muted">VECTOR DE IDENTIDAD (TONO Y ARQUETIPO)</label>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;" id="m8-tone-btns">
          <button class="premium-tab small m8-tone active" data-tone="solemne, institucional y técnico. Usa lenguaje jurídico-administrativo, justificaciones claras y respeto protocolario. Oculta emociones." onclick="window.selectM8Tone(this)">🏛️ Protocolo Estado (Formal)</button>
          <button class="premium-tab small m8-tone" data-tone="cercano, humano y colaborativo. Usa la primera persona del plural, valida las emociones del receptor y fomenta la alianza." onclick="window.selectM8Tone(this)">💙 Empatía Ciudadana (Cálido)</button>
          <button class="premium-tab small m8-tone" data-tone="directo, analítico y minimalista. Prioriza hechos, datos financieros y usa listas con viñetas cortas. Cero ambigüedad." onclick="window.selectM8Tone(this)">🎯 Síntesis Ejecutiva (Estructurado)</button>
          <button class="premium-tab small m8-tone" data-tone="inspirador, proactivo y visionario. Enfócate en soluciones, destaca hitos y lidera a la acción en vez de quejarte." onclick="window.selectM8Tone(this)">🔥 Liderazgo Motivador (Inspirador)</button>
        </div>
      </div>
      <button onclick="window.m8TransformTone()" class="gl-btn gl-btn-primary gl-btn-lux" style="width:100%;margin-top:10px;padding:15px;font-size:1rem;background:var(--accent-gradient) !important;">⚡ EJECUTAR TRANSFORMACIÓN SOBERANA</button>
      <div id="m8-out" class="thinking-process-premium" style="margin-top:18px;min-height:80px;border-style:dashed;border-color:rgba(59,130,246,0.3);background:rgba(0,0,0,0.2);">El prompt optimizado aparecerá aquí con los vectores aplicados...</div>
      <button id="m8-out-copy" class="gl-btn gl-btn-lux small" style="display:none;width:100%;margin-top:10px;background:var(--success) !important;box-shadow:0 0 15px rgba(16,185,129,0.3);">📋 COPIAR PROMPT MAESTRO A PORTAPAPELES</button>
    </div>
  </div>

  <div class="section-card animate-in glass-card" style="margin-top:20px;">
    <h3><span class="icon">🌐</span> Traductor Contextual de Alta Jerarquía</h3>
    <p>Usa IA para traducir documentos manteniendo estrictamente el registro formal de la entidad.</p>
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.1);margin-top:15px;display:flex;flex-direction:column;gap:15px;">
      <div class="prompt-pill" style="border-left: 4px solid var(--primary); font-size: 0.9rem; line-height: 1.6; font-style: italic;">
        "Traduce este documento del español al inglés manteniendo el tono formal, burocrático y técnico de un documento oficial de gobierno. Preserva los términos legales sin simplificarlos a lenguaje de escuela."<br><br>
        [PEGAR TEXTO]
      </div>
      <button class="gl-btn small" style="align-self:flex-start;" onclick="navigator.clipboard.writeText('Traduce este documento del español al inglés manteniendo el tono formal, burocrático y técnico de un documento oficial de gobierno. Preserva los términos legales sin simplificarlos a lenguaje de escuela.

[PEGAR TEXTO]');window.showToast('Prompt Táctico copiado','success');">📋 Copiar Fórmula Traductora</button>
    </div>
  </div>
</div>

<div id="m8-templates" class="ag-content">
  <div class="section-card glass-card animate-in">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
      <div>
        <h3 style="display:flex;align-items:center;gap:10px;margin-bottom:5px;"><span class="icon">📋</span> Biblioteca de Prompts Estratégicos</h3>
        <p style="color:var(--text-muted);font-size:0.95rem;">Plantillas de alto impacto diseñadas para el flujo corporativo y estatal real (PQRs, crisis, comunicaciones oficiales).</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:10px;">
    ${[
      {label:'RESPUESTA A PQR (EMPÁTICA)',icon:'💬',color:'#10b981',text:'Actúa como Profesional Senior de Servicio al Ciudadano. Redacta una respuesta institucional a la siguiente PQR. Tono: empático, claro y resolutivo. Evita términos burocráticos confusos. Proporciona una solución concreta o un paso siguiente tangible. [PEGAR QUEJA]'},
      {label:'SOLICITU DE RECURSOS (DIRECTA)',icon:'💸',color:'#2563eb',text:'Redacta un correo institucional solicitando un aumento del 15% en presupuesto para [ÁREA/PROYECTO]. El correo debe ser muy conciso (150 palabras máx), incluir 3 bullets con el ROI esperado y establecer una fecha límite de análisis. Tono analítico y firme.'},
      {label:'COMUNICADO OFICIAL DE CRISIS',icon:'🚨',color:'#ef4444',text:'Actúa como Director de Comunicaciones de Crisis. Redacta urgentemente un comunicado público sobre [INCIDENTE AMBIENTAL/ETC]. Estructura: 1. Confirmar estado real de los hechos. 2. Acción inmediata tomada. 3. Compromiso a futuro. Tono: Transparente y responsable.'},
      {label:'DELEGACIÓN EJECUTIVA DESDE AUDIO',icon:'📋',color:'#f59e0b',text:'Traduce esta transcripción de audio rápida en un correo de asignación de tareas estructurado. Asigna responsables claramente, define fechas de entrega precisas y categoriza por prioridad (Urgente/Media/Baja). Elimina el relleno. [PEGAR TRANSCRIPCIÓN]'},
      {label:'RESUMEN EJECUTIVO PARA COMITÉ',icon:'📊',color:'#6366f1',text:'Condensa el documento adjunto de 20 páginas en un Executive Summary de 1 página para el Comité Directivo. Destaca visualmente: 3 Métricas Críticas, 2 Cuellos de Botella y 1 Sugerencia de Acción inmediata. [PEGAR INFORME]'},
      {label:'NETWORKING FRÍO (LINKEDIN)',icon:'🤝',color:'#8b5cf6',text:'Necesito conectar profesionalmente con [CARGO] en la empresa [B] para [OBJETIVO]. Escribe un mensaje directo en LinkedIn (máx 4 líneas) que sea genuino, refleje conocimiento de su sector y proponga un paso pequeño de contacto en vez de vender.'}
    ].map(p=>`
    <div class="glass-card prompt-template-card" style="border-left:4px solid ${p.color};padding:22px;background:rgba(255,255,255,0.02);display:flex;flex-direction:column;justify-content:space-between;transition:transform 0.2s;position:relative;overflow:hidden;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
      <div style="position:absolute;top:-10px;right:-10px;font-size:4rem;opacity:0.04;filter:grayscale(100%);pointer-events:none;">${p.icon}</div>
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <span style="font-size:1.2rem;">${p.icon}</span>
          <div style="font-weight:900;font-size:0.8rem;color:${p.color};text-transform:uppercase;letter-spacing:0.5px;">${p.label}</div>
        </div>
        <p style="font-size:0.85rem;margin-bottom:20px;line-height:1.6;color:var(--text-main);opacity:0.9;">"${p.text}"</p>
      </div>
      <button class="gl-btn small" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#fff;" onclick="navigator.clipboard.writeText('${p.text.replace(/'/g,"\'")}');window.showToast('Plantilla Copiada','success');window.app&&window.app.addXP(20);">📋 COPIAR AL PORTAPAPELES</button>
    </div>`).join('')}
    </div>
  </div>
</div>

<div id="m8-tools" class="ag-content">
  <div class="section-card glass-card animate-in">
    <h3><span class="icon">🧰</span> Arsenal de Especialistas en Redacción</h3>
    <p>El maestro sabe a qué IA consultar según la necesidad. No uses ChatGPT para todo.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:25px;">
      ${[
        {icon:'🧠',name:'Claude 3.5 Sonnet',desc:'EL REY DE LA REDACCIÓN Y RESÚMENES. Tonos humanos y fluidos incomparables. Excelente procesando informes extensos en PDF sin perder contexto.',url:'https://claude.ai',badge:'Humanidad',color:'#d97757'},
        {icon:'⚡',name:'ChatGPT (o1)',desc:'Manejador lógico absoluto. Mejor para generar matrices, cruzar datos matemáticos, fórmulas complejas o estructurar informes técnicos muy duros.',url:'https://chatgpt.com',badge:'Estructura',color:'#10b981'},
        {icon:'🌐',name:'DeepL Write',desc:'La herramienta de pulido. Útil cuando quieres escribir las cosas tú mismo, pero necesitas asegurar ortografía perfecta, gramática y variantes de nivel corporativo.',url:'https://www.deepl.com/write',badge:'Pulido',color:'#3b82f6'},
        {icon:'✍️',name:'Hemingway App',desc:'El detector de "paja". Audita si escribes muy complicado o alargas mucho las oraciones (voz pasiva). Simplifica la burocracia visible.',url:'https://hemingwayapp.com',badge:'Claridad',color:'#f59e0b'}
      ].map(t=>`
      <div onclick="window.open('${t.url}','_blank')" class="glass-card" style="padding:22px;cursor:pointer;background:rgba(255,255,255,0.01);border:1px solid rgba(255,255,255,0.05);transition:all 0.3s;" onmouseover="this.style.borderColor='${t.color}88';this.style.background='${t.color}08';this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)';this.style.background='rgba(255,255,255,0.01)';this.style.transform='translateY(0)'">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
            <div style="font-size:2.5rem;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.3));">${t.icon}</div>
            <span style="background:${t.color}22;color:${t.color};padding:4px 12px;border-radius:20px;font-size:0.7rem;font-weight:800;border:1px solid ${t.color}44;">${t.badge}</span>
        </div>
        <h4 style="margin:0 0 8px;color:${t.color};font-weight:800;font-size:1.1rem;">${t.name} <span style="font-size:0.8rem;opacity:0.6;">↗</span></h4>
        <p style="font-size:0.85rem;opacity:0.8;margin-bottom:0;line-height:1.6;">${t.desc}</p>
      </div>`).join('')}
    </div>
    
    <!-- Anatomía Visual -->
    <div class="learning-feedback-box glass-card" style="margin-top:35px; border-left:4px solid #60a5fa; background:rgba(0,0,0,0.3); padding:25px; border-radius:14px;">
      <div style="font-weight:900; color:#60a5fa; font-size:1rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">📢 Analítica: Prompt Débil vs Soberano</div>
      <div style="overflow-x:auto;">
        <table style="width:100%; font-size:0.85rem; border-collapse:collapse; color:#fff;">
          <thead>
            <tr style="border-bottom:2px solid rgba(255,255,255,0.1); text-align:left;">
              <th style="padding:15px; color:#94a3b8; font-weight:800;">Contexto / Misión</th>
              <th style="padding:15px; color:#ef4444; font-weight:800;">❌ Intención Pobre (Muerte por alucinación)</th>
              <th style="padding:15px; color:#10b981; font-weight:800;">✅ Estructura Soberana (Poder y Precisión)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:15px; font-weight:700; color:#e2e8f0; vertical-align:top;">Reportar falla en el sistema a RRHH</td>
              <td style="padding:15px; opacity:0.8; vertical-align:top; border-right:1px solid rgba(255,255,255,0.05); font-style:italic;">"Haz un correo contando que se cayó el internet."</td>
              <td style="padding:15px; color:#a7f3d0; vertical-align:top;">"Actúa como Tech Lead. Crea un reporte ejecutivo de la caída de la WAN. Estructura requerida: 1) Impacto a personal de RRHH, 2) Mitigación y 3) ETA de resolución. Tono corporativo. (300 palabras)."</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:15px; font-weight:700; color:#e2e8f0; vertical-align:top;">Auditar Contratos Administrativos</td>
              <td style="padding:15px; opacity:0.8; vertical-align:top; border-right:1px solid rgba(255,255,255,0.05); font-style:italic;">"Revisa si este contrato está bien hecho."</td>
              <td style="padding:15px; color:#a7f3d0; vertical-align:top;">"Eres Abogado Administrativo. Extrae 3 dependencias penales o posibles fugas de recursos ocultas en este contrato que afecten a la Entidad. Dámelo en formato 'Riesgo / Impacto / Solución'. [PEGAR DOCUMENTO]"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<div id="m8-game" class="ag-content">
  <div class="section-card glass-card animate-in">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div>
        <h3 style="display:flex;align-items:center;gap:12px;margin-bottom:8px;"><span class="icon">🎮</span> Simulador: Detective de Tono Ejecutivo</h3>
        <p style="color:var(--text-muted);font-size:0.95rem;">Audita el nivel estratégico de mensajes corporativos reales. Identifica el vector comunicacional dominante detrás de las palabras.</p>
      </div>
      <div class="pulse-dot" style="background:#8b5cf6;"></div>
    </div>
    <div id="m8-detective" class="thinking-process-premium" style="margin-top:25px;padding:30px;min-height:200px;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);border:1px solid rgba(139,92,246,0.2);border-radius:16px;">
      <button class="gl-btn gl-btn-lux" style="padding:20px 40px;font-size:1.1rem;background:linear-gradient(45deg, #4f46e5, #8b5cf6) !important;box-shadow:0 0 20px rgba(139,92,246,0.4);border-radius:30px;font-weight:800;letter-spacing:1px;" onclick="window.initM8Detective()">⚡ INICIAR ESCÁNER BIOMÉTRICO LINGÜÍSTICO</button>
    </div>
  </div>
</div>

<div id="m8-mission" class="ag-content">
  <div class="exercise-box mission-card glass-card animate-in">
    <div class="hologram-strip"></div>
    <div class="exercise-header" style="justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:15px;">
      <div style="display:flex;align-items:center;gap:15px;">
        <span class="exercise-icon" style="background:rgba(59,130,246,0.1);color:#60a5fa;padding:12px;border-radius:12px;font-size:1.8rem;">🚀</span>
        <div>
          <span class="exercise-title" style="font-size:1.4rem;">Misión: El Redactor Cifrador Maestro</span>
          <div style="font-size:0.9rem;color:var(--text-muted);margin-top:4px;">Ajusta los comunicados más duros sin estresar a tu organización.</div>
        </div>
      </div>
    </div>
    
    <div class="mission-instructions" style="background:rgba(59,130,246,0.03);padding:25px;border-radius:16px;border-left:4px solid var(--accent);margin:25px 0;">
      <strong style="color:var(--primary-light);font-size:1.1rem;display:flex;align-items:center;gap:10px;">📋 Protocolo Aéreo Obligatorio:</strong>
      <ol style="margin-top:18px;font-size:0.95rem;line-height:2.2;opacity:0.95;padding-left:25px;">
        <li style="margin-bottom:10px;"><b>Selección del Problema:</b> Encuentra una respuesta densa o difícil (una reprimenda, despido, negación de solicitud oficial) y pon el concepto bruto.</li>
        <li style="margin-bottom:10px;"><b>Transformación:</b> Usa la pestaña <span style="background:rgba(59,130,246,0.1);padding:4px 8px;border-radius:6px;color:#60a5fa;font-family:monospace;">Lab: Ghost Writer</span> con el Tono: <span style="color:var(--accent);">Ejecutivo (Directo)</span>.</li>
        <li><b>Pegado y Revisión:</b> Copia a Portapapeles la versión final de ChatGPT y valídalo abajo.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" style="min-height:200px;background:rgba(0,0,0,0.4);border:2px solid rgba(255,255,255,0.05);font-size:0.95rem;border-radius:16px;" placeholder="> Pega aquí el output magistral de la IA que te ahorró un conflicto corporativo..."></textarea>
    
    <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; margin-top: 30px; gap: 15px;">
        <div class="reward-tag" style="margin:0;padding:12px 25px;font-weight:800;background:rgba(16,185,129,0.1);border-color:#10b981;color:#10b981;font-size:1rem;">
          <span style="font-size:1.3rem;vertical-align:middle;margin-right:8px;">💎</span> +150 XP GARANTIZADOS
        </div>
        <button class="gl-btn gl-btn-primary gl-btn-lux complete-module-btn" style="padding:15px 35px;background:var(--accent-gradient) !important;font-size:1rem;font-weight:800;border-radius:30px;" data-module="module-8" data-xp="150" onclick="window.showToast('Misión Reportada Exitosamente.','success');setTimeout(()=>{window.app&&window.app.addXP(150);this.disabled=true;this.innerHTML='✓ COMPLECIÓN MAESTRA LOGRADA';this.style.background='var(--success)';},800);">
          🚀 VALIDAR TAREA FINALIZADA
        </button>
    </div>
</div>
</div>`,

'module-9': `
<div class="module-header premium-header glass-card">
  <div class="holographic-glare" style="background: radial-gradient(circle at center, rgba(239, 68, 68, 0.05) 0%, transparent 70%);"></div>
  <div class="gamer-badge" style="background:var(--danger);box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);">Módulo 9 — Sovereign Guard</div>
  <h2 class="module-title glow-text" style="background:linear-gradient(135deg, #ef4444 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">⚖️ Ética y Seguridad Global</h2>
  <p class="module-description">Protege la soberanía de tus datos. Aprende a detectar alucinaciones, mitigar sesgos y establecer protocolos de seguridad inquebrantables.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 35 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Guardián Digital</span>
  </div>
</div>

<div class="ag-tabs game-tabs premium-tabs-v5" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m9-privacy">🔒 Protocolos</button>
  <button class="tab-btn" data-tab="m9-hallucinations">🧠 Escáner de Alucinaciones</button>
  <button class="tab-btn" data-tab="m9-ethics">⚖️ Marco Ciudadano</button>
  <button class="tab-btn" data-tab="m9-game">🎮 Simulador de Riesgos</button>
  <button class="tab-btn" data-tab="m9-mission">⚔️ Misión de Seguridad</button>
</div>

<div id="m9-privacy" class="ag-content active">
  <div class="section-card glass-card animate-in">
    <h3><span class="icon">🔒</span> Semáforo de Soberanía de Datos</h3>
    <p>Antes de interactuar con una IA externa, valida la sensibilidad de tu información.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:25px;">
      <div style="background:rgba(239,68,68,0.03);border:2px solid #ef4444;border-radius:20px;padding:25px;text-align:center;position:relative;">
        <div style="font-size:3rem;margin-bottom:15px;filter:drop-shadow(0 0 10px #ef4444);">🔴</div>
        <div style="font-weight:900;color:#ef4444;font-size:1rem;margin-bottom:15px;letter-spacing:1px;">RESTRICCIÓN TOTAL</div>
        <ul style="font-size:0.8rem;text-align:left;padding-left:15px;opacity:0.9;line-height:2.2;font-family:'JetBrains Mono', monospace;">
          <li>• IDs Ciudadanos / PII</li>
          <li>• Historia Clínica</li>
          <li>• Seguridad Nacional</li>
          <li>• Passwords / Claves API</li>
          <li>• Saldo de Cuentas</li>
        </ul>
      </div>
      <div style="background:rgba(245,158,11,0.03);border:2px solid #f59e0b;border-radius:20px;padding:25px;text-align:center;">
        <div style="font-size:3rem;margin-bottom:15px;filter:drop-shadow(0 0 10px #f59e0b);">🟡</div>
        <div style="font-weight:900;color:#f59e0b;font-size:1rem;margin-bottom:15px;letter-spacing:1px;">ANALIZAR RIESGO</div>
        <ul style="font-size:0.8rem;text-align:left;padding-left:15px;opacity:0.9;line-height:2.2;font-family:'JetBrains Mono', monospace;">
          <li>• Estrategia Institucional</li>
          <li>• Borradores del Despacho</li>
          <li>• Presupuesto No Público</li>
          <li>• Perfiles de funcionarios</li>
          <li>• Datos desidentificados</li>
        </ul>
      </div>
      <div style="background:rgba(16,185,129,0.03);border:2px solid #10b981;border-radius:20px;padding:25px;text-align:center;">
        <div style="font-size:3rem;margin-bottom:15px;filter:drop-shadow(0 0 10px #10b981);">🟢</div>
        <div style="font-weight:900;color:#10b981;font-size:1rem;margin-bottom:15px;letter-spacing:1px;">LIBRE CIRCULACIÓN</div>
        <ul style="font-size:0.8rem;text-align:left;padding-left:15px;opacity:0.9;line-height:2.2;font-family:'JetBrains Mono', monospace;">
          <li>• Leyes y Decretos</li>
          <li>• Preguntas conceptuales</li>
          <li>• Estilo de redacción</li>
          <li>• Normativa Vigente</li>
          <li>• Resúmenes de prensa</li>
        </ul>
      </div>
    </div>
    <div class="info-box important glass-card" style="margin-top:30px;border-left:5px solid #ef4444;background:rgba(239,68,68,0.05);">
      <strong style="color:#ef4444;">🛡️ PROTOCOLO DE CONFIANZA:</strong> Nunca subas al "Cloud" lo que no pondrías en una valla publicitaria frente a la entidad.
    </div>
    <button class="gl-btn gl-btn-lux" style="width:100%;margin-top:20px;background:#ef4444 !important;padding:18px;" onclick="window.app&&window.app.addXP(50);window.showToast('✅ PROTOCOLO DE SEGURIDAD ACTIVADO','success');this.innerHTML='🛡️ GUARDIA ACTIVADA';this.disabled=true;">FIRMAR Y ACTIVAR PROTOCOLO SOBERANO</button>
  </div>
</div>

<div id="m9-hallucinations" class="ag-content">
  <div class="section-card glass-card animate-in">
    <h3><span class="icon">🧠</span> Escáner de Alucinaciones</h3>
    <p>Los modelos de lenguaje son probabilísticos, no deterministas. Pueden "soñar" con total seguridad profesional.</p>
    
    <div id="m9-hallu-game" class="thinking-process-premium" style="margin:25px 0;padding:30px;">
      <button class="gl-btn gl-btn-lux" style="width:100%;padding:15px;" onclick="window.initM9Hallu()">⚡ INICIAR IA DETECTIVE v2.0</button>
    </div>

    <div style="background:rgba(245,158,11,0.05);border:1px solid #f59e0b44;border-radius:16px;padding:25px;margin-top:30px;">
      <div style="font-weight:800;color:#f59e0b;margin-bottom:15px;font-size:1rem;">✅ Técnicas de Auditoría:</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;">
        <div style="opacity:0.9;font-size:0.85rem;line-height:1.6;">
          <b>1. Inferencia Cruzada:</b> Pregunta lo mismo en 3 modelos distintos (<a href="https://chatgpt.com" target="_blank" style="color:#f59e0b; text-decoration:underline;">ChatGPT</a>, <a href="https://claude.ai" target="_blank" style="color:#f59e0b; text-decoration:underline;">Claude</a>, <a href="https://perplexity.ai" target="_blank" style="color:#f59e0b; text-decoration:underline;">Perplexity</a>).
        </div>
        <div style="opacity:0.9;font-size:0.85rem;line-height:1.6;">
          <b>2. Pedir Citación:</b> Exige el enlace oficial o el número de folio/artículo exacto.
        </div>
        <div style="opacity:0.9;font-size:0.85rem;line-height:1.6;">
          <b>3. Prompt Negativo:</b> "Si no encuentras el dato real, responde UNKNOWN. No inventes."
        </div>
      </div>
    </div>
  </div>
</div>

<div id="m9-ethics" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">⚖️</span> Ética en Acción</h3>
    <p>La ética no es solo teoría; es decidir bien bajo presión. Prueba estos escenarios:</p>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:15px;">
      <div class="glass-card" style="padding:12px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem;">1. Resumir acta sin asistir.</span>
        <button class="gl-btn small" onclick="window.m9EthicQuiz(0)">Evaluar</button>
      </div>
      <div class="glass-card" style="padding:12px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem;">2. Ordenar lista de cédulas.</span>
        <button class="gl-btn small" onclick="window.m9EthicQuiz(1)">Evaluar</button>
      </div>
      <div class="glass-card" style="padding:12px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem;">3. Usar como primer borrador.</span>
        <button class="gl-btn small" onclick="window.m9EthicQuiz(2)">Evaluar</button>
      </div>
    </div>
  </div>
</div>

<div id="m9-game" class="ag-content">
  <div class="section-card glass-card animate-in">
    <h3><span class="icon">🎮</span> Simulador de Fugas de Información</h3>
    <p>Pon a prueba tu criterio. ¿Este dato es apto para el entrenamiento de IAs públicas?</p>
    <div id="m9-sim" class="thinking-process-premium" style="margin-top:25px;padding:30px;">
      <button class="gl-btn gl-btn-lux" style="width:100%;padding:20px;" onclick="window.initM9Sim()">⚡ INICIAR PROTOCOLO DE TEST</button>
    </div>
  </div>
</div>

<div id="m9-mission" class="ag-content">
  <div class="exercise-box mission-card glass-card animate-in">
    <div class="holographic-glare" style="background: radial-gradient(circle at center, rgba(239, 68, 68, 0.05) 0%, transparent 70%);"></div>
    <div class="exercise-header"><span class="exercise-icon">🛡️</span><span class="exercise-title">Misión 9: Fortificación Digital</span></div>
    <div class="mission-instructions" style="background:rgba(239,68,68,0.05);padding:25px;border-radius:18px;border-left:5px solid #ef4444;margin:25px 0;">
      <strong style="color:#ef4444;font-size:1.1rem;">🎯 Operación Guardián:</strong>
      <ol style="margin-top:15px;font-size:0.9rem;line-height:2.2;opacity:0.9;">
        <li>Identifica **un proceso de tu área** que maneje datos sensibles.</li>
        <li>Diseña un "Prompt Seguro" que use variables genéricas (ej: [NOMBRE_CIUDADANO]) para evitar fugas.</li>
        <li>Escribe tus 3 reglas de oro para compartir información con la IA.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" style="background:rgba(10,10,20,0.6);" placeholder="Mis Reglas de Oro:&#10;1. &#10;2. &#10;3. "></textarea>
    <!-- Marco Legal Colombiano -->
    <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.25);border-radius:12px;padding:18px;margin-top:18px;">
      <div style="font-weight:800;color:#ef4444;font-size:0.83rem;margin-bottom:12px;">📑 Marco Legal Colombiano que te afecta</div>
      <div style="display:grid;gap:10px;">
        <div style="background:rgba(255,255,255,0.02);border-radius:8px;padding:12px;">
          <div style="font-weight:700;color:#fca5a5;font-size:0.82rem;margin-bottom:4px;">Ley 1581 de 2012 — Habeas Data</div>
          <div style="font-size:0.78rem;color:#94a3b8;line-height:1.5;">Protege los datos personales de ciudadanos. <strong style="color:#e2e8f0;">Prohibe compartir cédulas, historias clínicas o expedientes</strong> con plataformas externas sin consentimiento explícito.</div>
        </div>
        <div style="background:rgba(255,255,255,0.02);border-radius:8px;padding:12px;">
          <div style="font-weight:700;color:#fca5a5;font-size:0.82rem;margin-bottom:4px;">CONPES 3975 de 2019 — Política Nacional de IA</div>
          <div style="font-size:0.78rem;color:#94a3b8;line-height:1.5;">Marco de gobernanza de IA en Colombia. Exige <strong style="color:#e2e8f0;">uso ético y transparente</strong> de la IA en entidades del Estado, con trazabilidad de decisiones automatizadas.</div>
        </div>
        <div style="background:rgba(255,255,255,0.02);border-radius:8px;padding:12px;">
          <div style="font-weight:700;color:#fca5a5;font-size:0.82rem;margin-bottom:4px;">Ley 527 de 1999 — Comercio Electrónico</div>
          <div style="font-size:0.78rem;color:#94a3b8;line-height:1.5;">Regula la validez de documentos digitales. <strong style="color:#e2e8f0;">Un documento generado por IA debe ser revisado y firmado</strong> por el funcionario responsable para tener validez legal.</div>
        </div>
      </div>
    </div>
    <div class="reward-tag" style="margin-top:20px;padding:12px 25px;">+150 XP · MEDALLA: GUARDIÁN SOBERANO 🛡️</div>
    <button class="gl-btn gl-btn-primary gl-btn-lux complete-module-btn" style="width:100%;margin-top:20px;padding:18px;background:var(--accent-gradient) !important;" onclick="window.app&&window.app.addXP(150);this.disabled=true;this.innerHTML='✅ PROTOCOLO FIRMADO — XP TRANSFERIDO'">🛡️ REGISTRAR PROTOCOLO SOBERANO</button>
  </div>
</div>
<div class="module-nav" style="margin-top:40px;">
  <button class="gl-btn" data-goto="module-8">← Volver al Anterior</button>
  <button class="gl-btn gl-btn-primary gl-btn-lux" data-goto="module-10">Siguiente: Arsenal Soberano →</button>
</div>
`,


'module-10': `


<div class="module-header premium-header glass-card">
  <div class="holographic-glare" style="background: radial-gradient(circle at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%);"></div>
  <div class="gamer-badge">Módulo 10 — Arsenal Soberano</div>
  <h2 class="module-title glow-text" style="background:linear-gradient(135deg, #a855f7 0%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">🛠️ El Arsenal de Élite IA</h2>
  <p class="module-description">Selecciona las herramientas que transformarán tu flujo de trabajo. Un ecosistema curado para maximizar tu soberanía digital.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 30 min</span>
    <span class="module-meta-item">💎 100 XP</span>
    <span class="module-meta-item">🏆 Insignia: Arquitecto de Arsenal</span>
  </div>
</div>

<div class="ag-tabs game-tabs premium-tabs-v5" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m10-catalog">🏗️ Arsenal Categorizado</button>
  <button class="tab-btn" data-tab="m10-recommender">🤖 Asistente Holográfico</button>
  <button class="tab-btn" data-tab="m10-mission">⚔️ Misión: Operación Setup</button>
</div>

<div id="m10-catalog" class="ag-content active">
  <div class="section-card glass-card animate-in">
    <h3><span class="icon">🔍</span> Explora tu Futuro Workflow</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:25px;margin-top:25px;">
    ${[
      {cat:'CHAT Y RAZONAMIENTO',tools:[{n:'ChatGPT',icon:'🧠',u:'https://chatgpt.com'},{n:'Claude',icon:'✍️',u:'https://claude.ai'},{n:'Perplexity',icon:'🌐',u:'https://perplexity.ai'}]},
      {cat:'DOCUMENTOS Y ANÁLISIS',tools:[{n:'NotebookLM',icon:'📓',u:'https://notebooklm.google.com'},{n:'Humata',icon:'📄',u:'https://humata.ai'},{n:'ChatPDF',icon:'📎',u:'https://chatpdf.com'}]},
      {cat:'MULTIMEDIA Y DISEÑO',tools:[{n:'Midjourney',icon:'🎨',u:'https://midjourney.com'},{n:'Canva IA',icon:'✨',u:'https://canva.com'},{n:'Runway',icon:'🎬',u:'https://runwayml.com'}]},
      {cat:'AUTOMATIZACIÓN',tools:[{n:'Make.com',icon:'⚙️',u:'https://make.com'},{n:'Zapier',icon:'⚡',u:'https://zapier.com'},{n:'Notion AI',icon:'📘',u:'https://notion.so'}]}
    ].map(c=>`
    <div class="glass-card" style="padding:22px;background:rgba(255,255,255,0.01);">
      <div style="font-weight:900;font-size:0.7rem;color:var(--accent);margin-bottom:15px;letter-spacing:1px;">${c.cat}</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${c.tools.map(t=>`
        <div class="ag-prompt-card" style="padding:12px;cursor:pointer;display:flex;flex-direction:column;gap:5px;border-left-width:2px;" onclick="window.showToast('Accediendo a ${t.n}...','success')">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:1.5rem;">${t.icon}</span>
            <span style="font-weight:600;font-size:0.85rem;opacity:0.9;"><a href="${t.u}" target="_blank" style="color:inherit; text-decoration:underline;">${t.n}</a></span>
          </div>
          <details style="font-size:0.7rem; margin-top:5px; opacity:0.7;">
            <summary style="cursor:pointer; color:var(--accent);">🚀 Primer Paso</summary>
            <p style="margin-top:5px;">Crea cuenta gratis → Prueba este prompt: "Actúa como experto en mi área, ayúdame a optimizar esta tarea..."</p>
          </details>
        </div>`).join('')}
      </div>
    </div>`).join('')}
    </div>
  </div>
</div>

<div id="m10-recommender" class="ag-content">
  <div class="section-card glass-card animate-in">
    <h3 style="display:flex;align-items:center;gap:12px;"><span class="icon">🤖</span> El Oráculo de Herramientas</h3>
    <p>Describe tu cargo o una tarea específica y el oráculo seleccionará tu arsenal ideal.</p>
    <div class="thinking-process-premium" style="margin-top:25px;padding:30px;">
      <textarea id="m10-rec-input" class="premium-textarea" placeholder="Ej: Soy contador y necesito resumir leyes de 50 páginas y automatizar correos de cobro..."></textarea>
      <button onclick="window.m10Recommend()" class="gl-btn gl-btn-primary gl-btn-lux" style="width:100%;margin-top:20px;padding:18px;">⚡ CONSULTAR AL ORÁCULO</button>
      <div id="m10-rec-out" style="margin-top:25px;"></div>
    </div>
  </div>
</div>

<div id="m10-mission" class="ag-content">
  <div class="exercise-box mission-card glass-card animate-in">
    <div class="hologram-strip"></div>
    <div class="exercise-header"><span class="exercise-icon">⚡</span><span class="exercise-title">Misión 10: El Arquitecto del Arsenal</span></div>
    <p style="font-size:1rem;margin-bottom:20px;opacity:0.9;">Es momento de construir tu propio sistema de herramientas con IA.</p>
    <div class="mission-instructions" style="background:rgba(168,85,247,0.05);padding:25px;border-radius:18px;border-left:5px solid var(--secondary);margin:25px 0;">
      <ul style="margin:0;padding-left:15px;font-size:0.9rem;line-height:2.2;opacity:0.9;">
        <li>1. Elige 3 herramientas del catálogo que realmente usarías en tu día a día.</li>
        <li>2. Crea una cuenta en al menos una herramienta que no conocieras antes.</li>
        <li>3. Describe tu "Tríada de Poder": herramienta A, para qué la usarás; herramienta B, para qué la usarás; y herramienta C, para qué la usarás.</li>
      </ul>
    </div>
    <textarea class="premium-textarea" style="background:rgba(20,10,30,0.6);" placeholder="Mi Tríada de Poder:&#10;1. Herramienta A: la usaré para...&#10;2. Herramienta B: la usaré para...&#10;3. Herramienta C: la usaré para..."></textarea>
    <div class="reward-tag" style="margin-top:20px;padding:12px 25px;">+100 XP · RECOMPENSA: INSIGNIA ARQUITECTO IA 🏗️</div>
    <button class="gl-btn gl-btn-primary gl-btn-lux complete-module-btn" style="width:100%;margin-top:20px;padding:18px;" onclick="window.app&&window.app.addXP(100);this.disabled=true;this.innerHTML='✅ ARSENAL REGISTRADO — XP TRANSFERIDO'">🚀 FINALIZAR NIVEL 1</button>
  </div>
</div>
<div class="module-nav" style="margin-top:40px;">
  <button class="gl-btn" data-goto="module-9">← Anterior</button>
  <button class="gl-btn gl-btn-primary gl-btn-lux" data-goto="module-11">Siguiente: Nivel Pro (Análisis Profundo) →</button>
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
  return { init: function(app) { console.log('Initialized modules-8-10.js'); } };
})();
