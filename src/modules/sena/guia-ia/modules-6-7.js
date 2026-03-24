window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-6'] = window.GuiaModules['module-7'] = (function() {
  // --- MÓDULO 6: Lógica Centralizada ---
  window.m6TogglePill = function(el) {
    el.classList.toggle('active');
  };

  window.m6GeneratePrompt = function() {
    const subj = document.getElementById('m6-subject').value.trim();
    if(!subj){ window.showToast('Escribe qué quieres crear primero', 'warning'); return; }
    
    const activePills = document.querySelectorAll('.m6-style-pill.active');
    const stylesArray = Array.from(activePills).map(p => p.dataset.style);
    
    let stylePart = '';
    if (stylesArray.length === 1) {
      stylePart = stylesArray[0] + ', ';
    } else if (stylesArray.length > 1) {
      stylePart = 'combinación de estilos (' + stylesArray.join(' + ') + '), ';
    }

    const use = document.getElementById('m6-use').value;
    const prompt = subj + ', ' + stylePart + use + ', sin texto ni palabras en la imagen, composición profesional, alta calidad.';
    const output = document.getElementById('m6-output');
    if (output) {
      output.innerHTML = '<b style="color:#10b981">✅ Prompt listo para copiar:</b><br><br>' + prompt;
    }
    const copyBtn = document.getElementById('m6-copy-btn');
    if (copyBtn) {
      copyBtn.style.display = 'inline-flex';
      copyBtn.onclick = () => { 
        navigator.clipboard.writeText(prompt); 
        window.showToast('Prompt copiado ✨', 'success'); 
        window.app && window.app.addXP(50); 
      };
    }
  };

  const m6QuizData = [
    {sc:"Tienes 10 minutos para crear un póster de una jornada de vacunación para imprimir y pegar en la alcaldía. Necesitas algo rápido con plantilla.",ans:"Canva",opts:["Canva","Leonardo.ai","Adobe Firefly"],exp:"Canva tiene plantillas de pósters institucionales listas para editar en minutos."},
    {sc:"Necesitas una imagen para el informe anual de la entidad. Debe ser libre de derechos de autor para publicación oficial.",ans:"Adobe Firefly",opts:["ChatGPT","Adobe Firefly","MS Designer"],exp:"Adobe Firefly genera imágenes 100% libres de copyright, ideal para publicaciones oficiales."},
    {sc:"Quieres mejorar tu foto de perfil de LinkedIn para que se vea más profesional sin pagar.",ans:"MS Designer",opts:["Canva Premium","MS Designer","Leonardo.ai"],exp:"MS Designer es gratuito con cuenta Microsoft y tiene edición de fotos con IA integrada."},
    {sc:"Necesitas 20 imágenes artísticas para una campaña de redes sociales con estilo único y personalizado.",ans:"Leonardo.ai",opts:["Leonardo.ai","Canva","Google Slides"],exp:"Leonardo.ai ofrece 150 créditos diarios gratis y múltiples modelos artísticos de alta calidad."}
  ];
  let m6Cur = 0, m6Score = 0;
  window.m6Score = 0; // Expose for global onclick

  window.initM6Game = function() {
    m6Cur = 0; m6Score = 0;
    renderM6Game();
  };

  function renderM6Game() {
    const gameContainer = document.getElementById('m6-game');
    if (!gameContainer) return;
    if (m6Cur >= m6QuizData.length) {
      gameContainer.innerHTML = '<div class="pista-ia" style="text-align:center;padding:30px;"><span style="font-size:3rem">🏆</span><h3>¡Juego completado!</h3><p>Puntuación: '+m6Score+'/'+m6QuizData.length+'</p><button class="gl-btn gl-btn-primary" onclick="window.app&&window.app.addXP(m6Score*20);this.disabled=true;this.textContent=\'XP Reclamado!\'">Reclamar '+(m6Score*20)+' XP</button></div>';
      return;
    }
    const item = m6QuizData[m6Cur];
    gameContainer.innerHTML = '<div style="background:rgba(255,255,255,0.02);border-radius:12px;padding:20px;border:1px solid var(--border)"><div style="font-size:0.7rem;opacity:0.6;margin-bottom:8px;">Pregunta '+(m6Cur+1)+'/'+m6QuizData.length+' · Puntos: '+m6Score+'</div><p style="font-size:0.95rem;font-weight:500;margin-bottom:20px;">'+item.sc+'</p>'+item.opts.map(o=>'<div class="m6-quiz-opt" onclick="window.checkM6(this,\''+o+'\')">'+o+'</div>').join('')+'<div id="m6-exp" style="display:none;margin-top:15px;padding:12px;background:rgba(16,185,129,0.08);border-radius:8px;font-size:0.85rem;"></div></div>';
  }

  window.checkM6 = function(el, ans) {
    const item = m6QuizData[m6Cur];
    document.querySelectorAll('.m6-quiz-opt').forEach(o => o.style.pointerEvents = 'none');
    if (ans === item.ans) { 
      el.classList.add('correct'); 
      m6Score++; 
      window.m6Score = m6Score; // Sync with global
      window.showToast('¡Correcto! ' + item.exp, 'success'); 
    } else { 
      el.classList.add('wrong'); 
      window.showToast('Incorrecto. ' + item.exp, 'error');
    }
    const exp = document.getElementById('m6-exp');
    if (exp) {
      exp.style.display = 'block';
      exp.innerHTML = '💡 ' + item.exp + '<br><br><button class="gl-btn small" style="margin-top:8px;" onclick="window.m6Next()">Siguiente →</button>';
    }
  };

  window.m6Next = function() {
    m6Cur++;
    renderM6Game();
  };

  // --- MÓDULO 7: Lógica Centralizada ---
  window.m7GeneratePrompt = function() {
    const t = document.getElementById('m7-topic').value.trim();
    if(!t){ window.showToast('Escribe el tema primero', 'warning'); return; }
    const aud = document.getElementById('m7-audience').value;
    const durSelect = document.getElementById('m7-duration');
    const slides = durSelect.options[durSelect.selectedIndex].dataset.slides;
    const goal = document.getElementById('m7-goal').value;
    const p = 'Actúa como experto en comunicación estratégica. Crea una presentación de '+slides+' diapositivas sobre: '+t+'. Audiencia: '+aud+'. Objetivo: '+goal+'. Para cada diapositiva incluye: TÍTULO impactante, 3 puntos clave en viñetas, y una sugerencia de imagen o gráfico. Usa lenguaje claro, datos concretos y una narrativa de storytelling. Formato: Slide 1: [Título] / [Puntos] / [Imagen sugerida].';
    const output = document.getElementById('m7-prompt-out');
    if (output) {
      output.innerHTML = '<b style="color:#2563eb">✅ Prompt para <a href="https://gamma.app" target="_blank" style="color:#2563eb; text-decoration:underline;">Gamma</a> / <a href="https://chatgpt.com" target="_blank" style="color:#2563eb; text-decoration:underline;">ChatGPT</a> / <a href="https://claude.ai" target="_blank" style="color:#2563eb; text-decoration:underline;">Claude</a>:</b><br><br>' + p;
    }
    const copyBtn = document.getElementById('m7-copy-here');
    if (copyBtn) {
      copyBtn.style.display = 'block';
      copyBtn.onclick = () => { 
        navigator.clipboard.writeText(p); 
        window.showToast('Prompt copiado ✨', 'success'); 
        window.app && window.app.addXP(40); 
      };
    }
  };

  const m7GameData = [
    {q:"Tienes 90 segundos para convencer al Alcalde de aprobar un proyecto. Elige la diapositiva más efectiva:",
     a:{title:"RESULTADOS DEL PROGRAMA",body:"En el presente período se lograron avances significativos en múltiples componentes del programa que incluyen actividades de diversa índole..."},
     b:{title:"💡 3 Razones para Invertir HOY",body:"✅ Ahorramos $80M en papel | ⏱️ Reducimos 70% el tiempo de respuesta | 🏆 95% satisfacción ciudadana"},
     correct:"b",exp:"La slide B usa datos concretos, emojis para guiar el ojo y una propuesta de valor clara. La IA debe siempre generar slides orientadas a impacto, no a descripción."},
    {q:"Para una capacitación interna, ¿cuál slide genera más aprendizaje?",
     a:{title:"Conceptos Fundamentales de IA",body:"La inteligencia artificial es una rama de la ciencia de la computación que estudia el desarrollo de sistemas capaces de realizar tareas que normalmente requieren inteligencia humana..."},
     b:{title:"🤔 ¿Qué haría la IA en vez de ti?",body:"📧 Redactar 20 correos = 2 min | 📊 Analizar Excel 500 filas = 30 seg | 📝 Crear informe completo = 5 min"},
     correct:"b",exp:"La slide B muestra aplicación práctica inmediata. La gente aprende cuando ve CÓMO le cambia la vida, no con definiciones abstractas."}
  ];
  let m7Cur = 0, m7Score = 0;
  window.m7Score = 0; // Expose for global onclick

  window.initM7Game = function() {
    m7Cur = 0; m7Score = 0;
    renderM7Game();
  };

  function renderM7Game() {
    const container = document.getElementById('m7-game-container');
    if (!container) return;
    if (m7Cur >= m7GameData.length) {
      container.innerHTML = '<div style="text-align:center;padding:30px;"><span style="font-size:3rem">✅</span><h3>¡Completado! Puntuación: '+m7Score+'/'+m7GameData.length+'</h3><button class="gl-btn gl-btn-primary" onclick="window.app&&window.app.addXP(m7Score*40);this.disabled=true;this.textContent=\'XP Reclamado!\'">Reclamar '+(m7Score*40)+' XP</button></div>';
      return;
    }
    const c = m7GameData[m7Cur];
    container.innerHTML = '<p style="font-weight:500;margin-bottom:18px;">'+c.q+'</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;"><div class="m7-slide-preview" onclick="window.pickM7(\'a\')" style="cursor:pointer;"><div class="m7-slide-num">SLIDE A</div><div class="m7-slide-title">'+c.a.title+'</div><div class="m7-slide-body">'+c.a.body+'</div></div><div class="m7-slide-preview" onclick="window.pickM7(\'b\')" style="cursor:pointer;"><div class="m7-slide-num">SLIDE B</div><div class="m7-slide-title">'+c.b.title+'</div><div class="m7-slide-body">'+c.b.body+'</div></div></div><div id="m7-exp" style="display:none;margin-top:15px;padding:12px;background:rgba(37,99,235,0.08);border-radius:8px;font-size:0.85rem;"></div>';
  }

  window.pickM7 = function(pick) {
    const c = m7GameData[m7Cur];
    document.querySelectorAll('.m7-slide-preview').forEach((el, i) => {
      el.style.pointerEvents = 'none';
      const side = (i === 0) ? 'a' : 'b';
      if (side === c.correct) el.style.borderColor = '#10b981';
      else if (side === pick) el.style.borderColor = '#ef4444';
    });
    if (pick === c.correct) { 
      m7Score++; 
      window.m7Score = m7Score; // Sync with global
      window.showToast('+40 XP ¡Correcto! ' + c.exp, 'success'); 
    } else {
      window.showToast('Ups. ' + c.exp, 'error');
    }
    const exp = document.getElementById('m7-exp');
    if (exp) {
      exp.style.display = 'block';
      exp.innerHTML = '💡 ' + c.exp + '<br><br><button class="gl-btn small" style="margin-top:8px;" onclick="window.m7Next()">Siguiente →</button>';
    }
  };

  window.m7Next = function() {
    m7Cur++;
    renderM7Game();
  };

  window.m7Questions = [
    {
      q: "¿Cuál es el error más común al hacer slides con IA?",
      o: ["Poner mucho texto", "Usar colores sobrios", "Poner una sola imagen", "Terminar rápido"],
      a: 0,
      e: "El 'vómito de texto' satura a la audiencia. Menos es más."
    },
    {
      q: "Si la IA te genera una estadística, ¿qué debes hacer?",
      o: ["Publicarla", "Verificar la fuente", "Cambiar el color", "Ignorarla"],
      a: 1,
      e: "Las IAs pueden alucinar números. Siempre valida los datos oficiales."
    },
    {
      q: "¿Qué técnica de diseño ayuda a que el mensaje se entienda en 5 segundos?",
      o: ["Letra pequeña", "1 idea por slide", "Muchos bullets", "Sombras 3D"],
      a: 1,
      e: "Una sola idea por slide garantiza que el mensaje sea captado al instante."
    },
    {
      q: "Al usar Gamma, el paso final recomendado es:",
      o: ["Borrar todo", "Ajustar manualmente", "No cambiar nada", "Tomar foto"],
      a: 1,
      e: "La IA hace el 80%, pero tu toque humano y revisión final son imprescindibles."
    },
    {
      q: "¿Cuál es el mejor tono para una presentación ante directivos?",
      o: ["Infantil", "Ejecutivo y Conciso", "Extenso y Poético", "Informal"],
      a: 1,
      e: "La alta dirección valora el tiempo y los resultados claros."
    }
  ];
  window.m7CurrentQ = 0;

  window.m7StartQuiz = function() {
    window.m7CurrentQ = 0;
    window.renderM7Question();
  };

  window.renderM7Question = function() {
    const cont = document.getElementById('m7-quiz-box');
    if(!cont) return;
    
    if(window.m7CurrentQ >= window.m7Questions.length) {
      cont.innerHTML = '<h4 style="color:#10b981;">🎉 ¡Diseñador Titan Confirmado!</h4><p style="font-size:0.8rem;">Has dominado los principios de diseño con IA.</p>';
      return;
    }
    
    const q = window.m7Questions[window.m7CurrentQ];
    cont.innerHTML = `
      <p style="font-size:0.7rem; color:#666;">Pregunta ${window.m7CurrentQ+1}/5</p>
      <h4 style="margin:5px 0 15px;">${q.q}</h4>
      <div style="display:grid; gap:8px;">
        ${q.o.map((o,i) => `<button class="gl-btn small" onclick="window.m7Answer(${i})">${o}</button>`).join('')}
      </div>
    `;
  };

  window.m7Answer = function(idx) {
    const q = window.m7Questions[window.m7CurrentQ];
    if(idx === q.a) window.showToast('¡Correcto! ' + q.e, 'success');
    else window.showToast('No del todo. ' + q.e, 'error');
    window.m7CurrentQ++;
    window.renderM7Question();
  };

  const modules = {

/* ══════════════════════════════════════════════════════════════
   MÓDULO 6 — IA PARA IMÁGENES Y DISEÑO VISUAL
   ══════════════════════════════════════════════════════════════ */
'module-6': `

<div class="module-header premium-header">
  <div class="module-number gamer-badge">Módulo 6 — Nivel Creativo</div>
  <h2 class="module-title glow-text">🎨 IA para Imágenes y Diseño Visual</h2>
  <p class="module-description">De texto a obra maestra en segundos. Crea portadas, pósters, infografías y material institucional sin ser diseñador.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 45 min</span>
    <span class="module-meta-item">💎 120 XP</span>
    <span class="module-meta-item">🏆 Insignia: Artista Digital</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m6-lab">🪄 Laboratorio</button>
  <button class="tab-btn" data-tab="m6-tools">🧰 Herramientas</button>
  <button class="tab-btn" data-tab="m6-prompts">📋 Prompts Visuales</button>
  <button class="tab-btn" data-tab="m6-quiz">🎮 Juego</button>
  <button class="tab-btn" data-tab="m6-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: LABORATORIO INTERACTIVO -->
<div id="m6-lab" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🪄</span> Generador de Prompts Visuales</h3>
    <p>Construye el prompt perfecto para generar imágenes profesionales. Elige tu objeto, estilo y aplicación.</p>
    <div class="m6-prompt-studio">
      <div style="margin-bottom:18px;">
        <label style="font-size:0.75rem;font-weight:700;opacity:0.7;letter-spacing:1px;">1. ¿QUÉ QUIERES CREAR?</label>
        <input id="m6-subject" type="text" placeholder="Ej: una reunión de equipo, un logo de entidad, un mapa de ciudad..." style="width:100%;margin-top:8px;padding:12px;border-radius:8px;background:#0d1117;border:1px solid #333;color:#fff;font-size:0.9rem;">
      </div>
      <div style="margin-bottom:18px;">
        <label style="font-size:0.75rem;font-weight:700;opacity:0.7;letter-spacing:1px;">2. ESTILO VISUAL</label>
        <div style="margin-top:10px;">
          <span class="m6-style-pill active" data-style="fotorrealista, iluminación de estudio, colores institucionales suaves, 8K" onclick="window.m6TogglePill(this)">📸 Fotorrealista</span>
          <span class="m6-style-pill" data-style="ilustración plana minimalista, paleta de colores gubernamental, estilo corporativo limpio" onclick="window.m6TogglePill(this)">🎯 Corporativo</span>
          <span class="m6-style-pill" data-style="infografía moderna, iconos flat, tipografía sans-serif, fondo blanco, colores primarios" onclick="window.m6TogglePill(this)">📊 Infografía</span>
          <span class="m6-style-pill" data-style="acuarela digital, colores pastel, trazo artístico, ambiente cálido y acogedor" onclick="window.m6TogglePill(this)">🎨 Artístico</span>
          <span class="m6-style-pill" data-style="cyberpunk neon, fondo oscuro, líneas de neón, tecnología futurista" onclick="window.m6TogglePill(this)">⚡ Tecnológico</span>
        </div>
      </div>
      <div style="margin-bottom:18px;">
        <label style="font-size:0.75rem;font-weight:700;opacity:0.7;letter-spacing:1px;">3. APLICACIÓN / USO FINAL</label>
        <select id="m6-use" style="width:100%;margin-top:8px;padding:12px;border-radius:8px;background:#0d1117;border:1px solid #333;color:#fff;">
          <option value="para usar como portada de documento oficial">Portada de documento</option>
          <option value="para publicación en redes sociales institucionales, proporción cuadrada">Redes sociales</option>
          <option value="para imprimir como póster A4, alta resolución">Póster imprimible</option>
          <option value="para usar como fondo de presentación PowerPoint, 16:9">Fondo presentación</option>
          <option value="como miniatura de video institucional para YouTube">Miniatura YouTube</option>
        </select>
      </div>
      <button onclick="window.m6GeneratePrompt()" class="gl-btn gl-btn-primary" style="background:#10b981;width:100%;">🚀 Generar Prompt Visual</button>
      <div id="m6-output" class="m6-output-box">Tu prompt optimizado aparecerá aquí...</div>
      <button id="m6-copy-btn" class="gl-btn" style="display:none;margin-top:12px;width:100%;border-color:#10b981;color:#10b981;">📋 Copiar al portapapeles</button>
    </div>

    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Tip Pro:</strong> Añade siempre "sin texto ni palabras" para evitar letras ilegibles. Las IAs generan imágenes, no tipografía confiable.
    </div>
  </div>
</div>

<!-- TAB 2: HERRAMIENTAS -->
<div id="m6-tools" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧰</span> Arsenal de Diseño con IA</h3>
    <p>Herramientas ordenadas de más fácil a más potente. Empieza por la primera.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:20px;">
      <div style="border:1px solid rgba(var(--primary-rgb),0.3);border-radius:14px;padding:20px;background:rgba(var(--primary-rgb),0.04);">
        <div style="font-size:2rem;margin-bottom:10px;">🎯</div>
        <h4 style="margin:0 0 8px;color:var(--primary);">Canva + Magic Studio</h4>
        <p style="font-size:0.8rem;opacity:0.8;margin-bottom:10px;">El más fácil. Genera imágenes y edita con IA integrada. Perfecto para pósters, banners y redes.</p>
        <div style="font-size:0.7rem;margin-bottom:12px;"><span style="background:rgba(16,185,129,0.2);color:#10b981;padding:3px 8px;border-radius:20px;">✓ Gratis</span> <span style="opacity:0.6;">Plantillas + IA generativa</span></div>
        <a href="https://canva.com" target="_blank" class="m6-tool-badge" style="display:flex;justify-content:center;">Abrir Canva →</a>
      </div>
      <div style="border:1px solid rgba(37,99,235,0.3);border-radius:14px;padding:20px;background:rgba(37,99,235,0.04);">
        <div style="font-size:2rem;margin-bottom:10px;">🖼️</div>
        <h4 style="margin:0 0 8px;color:#2563eb;">Microsoft Designer</h4>
        <p style="font-size:0.8rem;opacity:0.8;margin-bottom:10px;">Gratis con correo Microsoft. USA DALL-E 3. Ideal para material institucional y diseño corporativo.</p>
        <div style="font-size:0.7rem;margin-bottom:12px;"><span style="background:rgba(37,99,235,0.2);color:#2563eb;padding:3px 8px;border-radius:20px;">✓ Gratis</span> <span style="opacity:0.6;">Requiere cuenta Microsoft</span></div>
        <a href="https://designer.microsoft.com" target="_blank" class="m6-tool-badge" style="display:flex;justify-content:center;text-decoration:underline;">Abrir Designer →</a>
      </div>
      <div style="border:1px solid rgba(245,158,11,0.3);border-radius:14px;padding:20px;background:rgba(245,158,11,0.04);">
        <div style="font-size:2rem;margin-bottom:10px;">🌟</div>
        <h4 style="margin:0 0 8px;color:#f59e0b;">Adobe Firefly</h4>
        <p style="font-size:0.8rem;opacity:0.8;margin-bottom:10px;">Para uso comercial seguro. Las imágenes son 100% libres de derechos de autor.</p>
        <div style="font-size:0.7rem;margin-bottom:12px;"><span style="background:rgba(245,158,11,0.2);color:#f59e0b;padding:3px 8px;border-radius:20px;">Freemium</span> <span style="opacity:0.6;">25 créd/mes gratis</span></div>
        <a href="https://firefly.adobe.com" target="_blank" class="m6-tool-badge" style="display:flex;justify-content:center;text-decoration:underline;">Abrir Firefly →</a>
      </div>
      <div style="border:1px solid rgba(139,92,246,0.3);border-radius:14px;padding:20px;background:rgba(139,92,246,0.04);">
        <div style="font-size:2rem;margin-bottom:10px;">🔬</div>
        <h4 style="margin:0 0 8px;color:#8b5cf6;">Leonardo.ai</h4>
        <p style="font-size:0.8rem;opacity:0.8;margin-bottom:10px;">El más potente gratis. Múltiples modelos artísticos. Para portadas de informes y arte institucional.</p>
        <div style="font-size:0.7rem;margin-bottom:12px;"><span style="background:rgba(139,92,246,0.2);color:#8b5cf6;padding:3px 8px;border-radius:20px;">Freemium</span> <span style="opacity:0.6;">150 créditos/día gratis</span></div>
        <a href="https://leonardo.ai" target="_blank" class="m6-tool-badge" style="display:flex;justify-content:center;text-decoration:underline;">Abrir Leonardo →</a>
      </div>
    </div>
    <div class="info-box tip" style="margin-top:24px;">
      <strong>¿Cuál usar?</strong> Para uso diario y redes: <b><a href="https://canva.com" target="_blank" style="color:inherit; text-decoration:underline;">Canva</a></b>. Para documentos oficiales: <b><a href="https://designer.microsoft.com" target="_blank" style="color:inherit; text-decoration:underline;">MS Designer</a></b>. Para arte de calidad: <b><a href="https://leonardo.ai" target="_blank" style="color:inherit; text-decoration:underline;">Leonardo.ai</a></b>.
    </div>
    <!-- M6: Galería de Ejemplo -->
    <div style="margin:20px 0;">
      <h4 style="color:#10b981; font-weight:800; font-size:0.85rem;">🎨 Galería de Ejemplo (Vibras IA)</h4>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap:10px; margin-top:10px;">
        <div style="background:#111; border:1px solid #333; height:100px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column;">
          <span style="font-size:2rem;">🏢</span>
          <small style="font-size:0.6rem; opacity:0.6;">Cyber-Estructura</small>
        </div>
        <div style="background:#111; border:1px solid #333; height:100px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column;">
          <span style="font-size:2rem;">🧑‍💻</span>
          <small style="font-size:0.6rem; opacity:0.6;">Avatar Titan</small>
        </div>
        <div style="background:#111; border:1px solid #333; height:100px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column;">
          <span style="font-size:2rem;">📈</span>
          <small style="font-size:0.6rem; opacity:0.6;">Data-Art</small>
        </div>
      </div>
    </div>

    <div class="learning-feedback-box" style="margin-top:25px; border-color:rgba(16,185,129,0.2);">
      <div class="learning-feedback-header" style="background:rgba(16,185,129,0.1);"><span>🛡️ Tabla de Copyright y Uso Seguro</span></div>
      <div style="overflow-x:auto;">
        <table style="width:100%; font-size:0.75rem; border-collapse:collapse; margin-top:10px; color:#fff;">
          <tr style="border-bottom:1px solid #333; text-align:left;">
            <th style="padding:10px;">Herramienta</th>
            <th style="padding:10px;">Uso Comercial</th>
            <th style="padding:10px;">Checklist</th>
          </tr>
          <tr style="border-bottom:1px solid #222;">
            <td style="padding:10px;">Canva Magic</td>
            <td style="padding:10px; color:#10b981;">✅ Seguro</td>
            <td style="padding:10px;">Perfecto para post de RRSS.</td>
          </tr>
          <tr style="border-bottom:1px solid #222;">
            <td style="padding:10px;">Adobe Firefly</td>
            <td style="padding:10px; color:#10b981;">✅ Ético</td>
            <td style="padding:10px;">Entrenado solo con stock legal.</td>
          </tr>
          <tr style="border-bottom:1px solid #222;">
            <td style="padding:10px;">Midjourney</td>
            <td style="padding:10px; color:#eab308;">⚠️ Plan Pro</td>
            <td style="padding:10px;">Revisar términos de tu plan.</td>
          </tr>
        </table>
      </div>
      <p style="font-size:0.65rem; margin-top:12px; color:#94a3b8;">⚠️ <b>Checklist de Seguridad:</b> ¿Resolución ≥1080p? ¿Sin marcas de agua? ¿Sin rostros de personas reales? ¿Uso aprobado por Comunicaciones?</p>
    </div>
  </div>
</div>

<!-- TAB 3: BIBLIOTECA DE PROMPTS VISUALES -->
<div id="m6-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📋</span> Biblioteca de Prompts Visuales Listos</h3>
    <p>Prompts optimizados y listos para copiar. Categorías: Laboral y Personal.</p>
    <div style="display:flex;flex-direction:column;gap:14px;margin-top:20px;">
      ${[
        {tag:'INSTITUCIONAL',color:'#2563eb',text:'Una reunión de funcionarios en sala de gobierno moderna, estilo fotorrealista, iluminación corporativa cálida, colores azul y blanco institucionales, alta calidad, sin texto en la imagen.'},
        {tag:'COMUNICADO',color:'#10b981',text:'Portada de informe oficial de gestión pública, diseño minimalista corporativo, escudo institucional abstracto, paleta de colores azul marino y dorado, elegante, profesional, sin texto.'},
        {tag:'REDES SOCIALES',color:'#f59e0b',text:'Imagen cuadrada para campaña de salud pública, personas felices y diversas, estilo ilustración plana moderna, colores vibrantes, composición dinámica, sin palabras.'},
        {tag:'PERSONAL — CV',color:'#8b5cf6',text:'Foto de perfil profesional para LinkedIn, fondo difuminado en gradiente azul suave, iluminación facial perfecta, aspecto ejecutivo y confiable, retrato 4K.'},
        {tag:'PERSONAL — REDES',color:'#ef4444',text:'Banner de LinkedIn profesional para perfil de administrador público, ciudad moderna al fondo, degradado azul oscuro a negro, líneas geométricas sutiles, sin texto.'}
      ].map(p=>`
      <div class="ag-prompt-card" style="border-color:${p.color};">
        <div style="font-weight:700;font-size:0.7rem;color:${p.color};margin-bottom:8px;">${p.tag}</div>
        <p style="font-size:0.85rem;margin-bottom:12px;">${p.text}</p>
        <button class="gl-btn small" style="border-color:${p.color};color:${p.color};" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent); window.showToast('Prompt copiado ✨','success'); window.app&&window.app.addXP(20);">📋 Copiar Prompt</button>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- TAB 4: JUEGO — ADIVINA LA HERRAMIENTA -->
<div id="m6-quiz" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🎮</span> Juego: ¿Qué Herramienta Usarías?</h3>
    <p>Lee el escenario y elige la herramienta IA más adecuada. Gana 20 XP por respuesta correcta.</p>
    <div id="m6-game" style="margin-top:20px;">
      <button class="gl-btn gl-btn-primary" style="width:100%" onclick="window.initM6Game()">🎮 Iniciar Juego</button>
    </div>
  </div>
</div>

<!-- TAB 5: MISIÓN -->
<div id="m6-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🎨</span><span class="exercise-title">Misión 6: El Diseñador Institucional</span></div>
    <div class="preparation-step" style="background: rgba(16,185,129,0.1); border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #10b981;">
      <h4 style="margin-top: 0; color: #10b981; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, elige una herramienta de diseño (<a href="https://canva.com" target="_blank" style="color:#10b981; text-decoration:none; font-weight:bold;">Canva</a>, <a href="https://designer.microsoft.com" target="_blank" style="color:#10b981; text-decoration:none; font-weight:bold;">MS Designer</a> o <a href="https://firefly.adobe.com" target="_blank" style="color:#10b981; text-decoration:none; font-weight:bold;">Adobe Firefly</a>) y asegúrate de tener una cuenta activa.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(16,185,129,0.05);padding:20px;border-radius:12px;border-left:4px solid #10b981;margin:20px 0;">
      <strong>🎯 Tu reto (elige el que aplique a tu contexto):</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li><strong>Laboral:</strong> Crea un póster para un evento de tu área (jornada, reunión, campaña). Usa el Generador de Prompts del Lab y luego ve a <a href="https://canva.com" target="_blank" style="color:#10b981; text-decoration:underline;">Canva</a> o <a href="https://designer.microsoft.com" target="_blank" style="color:#10b981; text-decoration:underline;">MS Designer</a>.</li>
        <li><strong>Personal:</strong> Genera una foto de perfil profesional o un banner para LinkedIn usando <a href="https://designer.microsoft.com" target="_blank" style="color:#10b981; text-decoration:underline;">MS Designer</a> o <a href="https://firefly.adobe.com" target="_blank" style="color:#10b981; text-decoration:underline;">Adobe Firefly</a>.</li>
      </ol>
    </div>
    <div class="input-glow-wrapper">
      <textarea id="m6-mission-input" class="premium-textarea" placeholder="Pega aquí el enlace a tu imagen creada, o describe el resultado: qué generaste, qué prompt usaste, qué herramienta elegiste y por qué..."></textarea>
    </div>
    <div class="reward-tag" style="margin-top:15px;">+120 XP · Insignia: Artista Digital 🎨</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-6" style="width:100%;margin-top:15px;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-5">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-7">Siguiente: IA para Presentaciones →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 7 — IA PARA PRESENTACIONES
   ══════════════════════════════════════════════════════════════ */
'module-7': `

<div class="module-header premium-header">
  <div class="module-number gamer-badge">Módulo 7 — Presentaciones IA</div>
  <h2 class="module-title glow-text">📽️ IA para Presentaciones Impactantes</h2>
  <p class="module-description">Genera presentaciones completas —con estructura, contenido e imágenes— en menos de 5 minutos. De informe aburrido a diapositivas que enamoran.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 35 min</span>
    <span class="module-meta-item">💎 120 XP</span>
    <span class="module-meta-item">🏆 Insignia: Orador Digital</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m7-lab">🧪 Constructor</button>
  <button class="tab-btn" data-tab="m7-tools">🧰 Herramientas</button>
  <button class="tab-btn" data-tab="m7-prompts">🎯 Prompts de Presentación</button>
  <button class="tab-btn" data-tab="m7-game">🎮 Simulador</button>
  <button class="tab-btn" data-tab="m7-quiz">🧠 Quiz</button>
  <button class="tab-btn" data-tab="m7-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: CONSTRUCTOR DE ESTRUCTURA -->
<div id="m7-lab" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🏗️</span> Constructor de Estructura Inteligente</h3>
    <p>Genera la estructura narrativa de tu presentación antes de ir a la herramienta IA. Una buena estructura = presentación exitosa.</p>

    <div style="background:rgba(37,99,235,0.05);border:1px solid rgba(37,99,235,0.2);border-radius:14px;padding:22px;margin-top:20px;">
      <div style="margin-bottom:16px;">
        <label style="font-size:0.75rem;font-weight:700;opacity:0.7;">TEMA DE LA PRESENTACIÓN</label>
        <input id="m7-topic" type="text" placeholder="Ej: Logros del Departamento de Talento Humano 2024..." style="width:100%;margin-top:8px;padding:12px;background:#0d1117;border:1px solid #2563eb;border-radius:8px;color:#fff;font-size:0.9rem;">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
        <div>
          <label style="font-size:0.75rem;font-weight:700;opacity:0.7;">AUDIENCIA</label>
          <select id="m7-audience" style="width:100%;margin-top:8px;padding:10px;background:#0d1117;border:1px solid #333;border-radius:8px;color:#fff;">
            <option value="directivos y gerentes de alto nivel">Alta dirección</option>
            <option value="equipo de trabajo y compañeros">Equipo interno</option>
            <option value="comunidad y ciudadanos">Ciudadanos/Comunidad</option>
            <option value="clientes potenciales y socios">Clientes / Socios</option>
            <option value="estudiantes y aprendices">Estudiantes</option>
          </select>
        </div>
        <div>
          <label style="font-size:0.75rem;font-weight:700;opacity:0.7;">DURACIÓN</label>
          <select id="m7-duration" style="width:100%;margin-top:8px;padding:10px;background:#0d1117;border:1px solid #333;border-radius:8px;color:#fff;">
            <option value="5" data-slides="5">5 minutos (5 slides)</option>
            <option value="15" data-slides="10">15 minutos (10 slides)</option>
            <option value="30" data-slides="15">30 minutos (15 slides)</option>
          </select>
        </div>
      </div>
      <div style="margin-bottom:16px;">
        <label style="font-size:0.75rem;font-weight:700;opacity:0.7;">OBJETIVO PRINCIPAL</label>
        <select id="m7-goal" style="width:100%;margin-top:8px;padding:10px;background:#0d1117;border:1px solid #333;border-radius:8px;color:#fff;">
          <option value="informar y reportar avances y logros">Informar / Rendir cuentas</option>
          <option value="convencer y conseguir aprobación de un proyecto">Persuadir / Vender idea</option>
          <option value="capacitar y transferir conocimiento práctico">Capacitar / Enseñar</option>
          <option value="motivar y generar compromiso en el equipo">Motivar al equipo</option>
        </select>
      </div>
      <button onclick="window.m7GeneratePrompt()" class="gl-btn gl-btn-primary" style="width:100%;background:#2563eb;">🚀 Generar Prompt de Presentación</button>
      <div id="m7-prompt-out" style="background:#050a15;border:1px dashed #2563eb;border-radius:10px;padding:18px;margin-top:14px;font-size:0.85rem;color:#bfdbfe;min-height:70px;line-height:1.6;">El prompt estructurado aparecerá aquí...</div>
      <button id="m7-copy-here" class="gl-btn" style="display:none;width:100%;margin-top:10px;border-color:#2563eb;color:#2563eb;">📋 Copiar Prompt</button>
    </div>

    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Flujo recomendado:</strong> 1) Genera el prompt aquí → 2) Pégalo en <a href="https://gamma.app" target="_blank" style="color:#2563eb; text-decoration:underline;">Gamma.app</a> para auto-generar slides → 3) Ajusta imágenes y colores → ¡Listo en 5 min!
    </div>
  </div>
</div>

<!-- TAB 2: HERRAMIENTAS -->
<div id="m7-tools" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧰</span> Las Mejores IAs para Presentaciones</h3>
    <div style="margin-top:20px;">
      <div class="m7-tool-row" onclick="window.open('https://gamma.app','_blank')">
        <span style="font-size:2.5rem;">⚡</span>
        <div style="flex:1;">
          <h4 style="margin:0 0 4px;"><a href="https://gamma.app" target="_blank" style="color:inherit; text-decoration:underline;">Gamma App</a></h4>
          <p style="font-size:0.8rem;opacity:0.8;margin:0;">Escribe el tema y genera presentaciones completas con diseño, contenido e imágenes. La más rápida.</p>
        </div>
        <div style="text-align:right;"><span class="m7-badge-free">GRATIS</span><div style="font-size:0.7rem;margin-top:4px;opacity:0.6;">⭐⭐⭐⭐⭐</div></div>
      </div>
      <div class="m7-tool-row" onclick="window.open('https://beautiful.ai','_blank')">
        <span style="font-size:2.5rem;">💎</span>
        <div style="flex:1;">
          <h4 style="margin:0 0 4px;"><a href="https://beautiful.ai" target="_blank" style="color:inherit; text-decoration:underline;">Beautiful.ai</a></h4>
          <p style="font-size:0.8rem;opacity:0.8;margin:0;">Diseños premium que se autoajustan. Ideal para presentaciones ejecutivas de alta calidad visual.</p>
        </div>
        <div style="text-align:right;"><span style="background:rgba(245,158,11,0.15);color:#f59e0b;padding:3px 10px;border-radius:20px;font-size:0.7rem;">Freemium</span></div>
      </div>
      <div class="m7-tool-row" onclick="window.open('https://www.decktopus.com','_blank')">
        <span style="font-size:2.5rem;">📊</span>
        <div style="flex:1;">
          <h4 style="margin:0 0 4px;"><a href="https://www.decktopus.com" target="_blank" style="color:inherit; text-decoration:underline;">Decktopus AI</a></h4>
          <p style="margin:0;font-size:0.8rem;opacity:0.8;">Generación de diapositivas con un solo clic. Perfecto para propuestas.</p>
        </div>
        <span class="m6-tool-badge" style="background:#10b98122;color:#34d399;">Freemium</span>
      </div>
      <div class="m7-tool-row" onclick="window.open('https://copilot.microsoft.com','_blank')">
        <span style="font-size:2.5rem;">🪟</span>
        <div style="flex:1;">
          <h4 style="margin:0 0 4px;">Copilot en PowerPoint</h4>
          <p style="font-size:0.8rem;opacity:0.8;margin:0;">Si ya usas Microsoft 365, Copilot crea presentaciones desde un documento Word o un prompt. Sin salir de PowerPoint.</p>
        </div>
        <div style="text-align:right;"><span style="background:rgba(37,99,235,0.15);color:#2563eb;padding:3px 10px;border-radius:20px;font-size:0.7rem;">M365 Teams</span></div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 3: PROMPTS LISTOS -->
<div id="m7-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🎯</span> Prompts para Generar Presentaciones Perfectas</h3>
    <p>Copia, adapta y pega en Gamma, ChatGPT o Claude.</p>
    <div style="display:flex;flex-direction:column;gap:14px;margin-top:20px;">
      ${[
        {tag:'INFORME DE GESTIÓN',color:'#2563eb',text:'Actúa como experto en comunicación institucional. Crea una presentación de 8 diapositivas sobre los logros del primer semestre 2024 para presentar al Alcalde. Cada slide debe tener: un título concreto, máximo 4 puntos clave con datos reales (usa placeholders como [DATO]), y un CTA o reflexión final. Tono: profesional pero accesible.'},
        {tag:'PROPUESTA DE PROYECTO',color:'#10b981',text:'Soy gerente de proyectos. Crea una presentación de 6 diapositivas para vender internamente la idea de implementar IA en el área de atención al ciudadano. Incluye: problema actual, solución propuesta, beneficios medibles, plan de implementación en 3 fases, costo-beneficio estimado y próximos pasos. Usa lenguaje persuasivo.'},
        {tag:'CAPACITACIÓN',color:'#f59e0b',text:'Soy capacitador institucional. Genera una presentación de 10 slides para enseñar a funcionarios cómo usar ChatGPT en su trabajo diario. Incluye definición sencilla, 3 casos de uso prácticos, ejercicio interactivo y errores comunes a evitar. Tono: amigable y motivador.'},
        {tag:'USO PERSONAL',color:'#8b5cf6',text:'Necesito una presentación de 5 slides para mi entrevista de trabajo en el cargo de Coordinador de Transformación Digital. Incluye: quién soy, mis logros más relevantes (usa [DATO]), mi visión del cargo, un plan de 90 días y por qué yo soy la mejor opción. Hazla memorable.'}
      ].map(p=>`
      <div class="ag-prompt-card" style="border-color:${p.color};">
        <div style="font-weight:700;font-size:0.7rem;color:${p.color};margin-bottom:8px;">${p.tag}</div>
        <p style="font-size:0.82rem;margin-bottom:12px;">${p.text}</p>
        <button class="gl-btn small" style="border-color:${p.color};color:${p.color};" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent);window.showToast('Prompt copiado ✨','success');window.app&&window.app.addXP(20);">📋 Copiar</button>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- TAB 4: SIMULADOR SLIDE RANKER -->
<div id="m7-game" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🎮</span> Simulador: ¿Cuál Slide es Mejor?</h3>
    <p>Lee el par de diapositivas y decide cuál es más efectiva. Aprende los principios de comunicación visual.</p>
    <div id="m7-game-container" style="margin-top:20px;">
      <button class="gl-btn gl-btn-primary" style="width:100%" onclick="window.initM7Game()">🎮 Iniciar Simulador</button>
    </div>
  </div>
</div>

<!-- TAB 5: MINQUIZ -->
<div id="m7-quiz" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧠</span> Quiz: Domina el Diseño con IA</h3>
    <p>Demuestra tu conocimiento sobre presentaciones con Inteligencia Artificial. Acierta todas las preguntas para sumar XP.</p>
    <div id="m7-quiz-box" style="margin-top:20px;">
      <button class="gl-btn gl-btn-primary" style="width:100%" onclick="window.m7StartQuiz()">🧠 Iniciar Quiz Módulo 7</button>
    </div>
  </div>
</div>

<!-- TAB 6: MISIÓN -->
<div id="m7-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">📽️</span><span class="exercise-title">Misión 7: El Presentador Profesional</span></div>
    <div class="preparation-step" style="background: rgba(37,99,235,0.1); border: 1px solid #2563eb; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #2563eb;">
      <h4 style="margin-top: 0; color: #2563eb; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, abre <b><a href="https://gamma.app" target="_blank" style="color:#2563eb; text-decoration:underline;">Gamma.app</a></b> en tu navegador y ten listo el tema de tu área sobre el cual quieres generar la presentación.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(37,99,235,0.05);padding:20px;border-radius:12px;border-left:4px solid #2563eb;margin:20px 0;">
      <strong>🎯 Elige tu reto:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li><strong>Laboral:</strong> Usa el Constructor de este módulo para generar el prompt, luego ve a <b><a href="https://gamma.app" target="_blank" style="color:#2563eb; text-decoration:underline;">Gamma.app</a></b> y crea una presentación de tu área o proyecto. Descarga o comparte el enlace.</li>
        <li><strong>Personal:</strong> Crea con <a href="https://gamma.app" target="_blank" style="color:#2563eb; text-decoration:underline;">Gamma</a> tu presentación personal para una entrevista o para presentación en LinkedIn (usa el prompt de "Uso Personal" de esta guía).</li>
      </ol>
    </div>
    <div class="input-glow-wrapper">
      <textarea class="premium-textarea" placeholder="Pega el enlace de tu presentación en Gamma o describe: qué hiciste, cuánto tiempo te tomó vs sin IA, y qué destacas de la presentación generada..."></textarea>
    </div>
    <!-- Gamma export guide -->
    <div style="background:rgba(37,99,235,0.08);border:1px solid rgba(37,99,235,0.25);border-radius:12px;padding:16px;margin-top:18px;">
      <div style="font-weight:800;color:#60a5fa;font-size:0.83rem;margin-bottom:10px;">📤 Cómo Exportar tu Presentación de Gamma</div>
      <ol style="font-size:0.8rem;line-height:2;padding-left:18px;color:#cbd5e1;margin:0;">
        <li>En Gamma, haz clic en el botón <strong style="color:#fff">⋯ (Más opciones)</strong> arriba a la derecha</li>
        <li>Selecciona <strong style="color:#fff">Exportar → PowerPoint (.pptx)</strong> o <strong style="color:#fff">PDF</strong></li>
        <li>Para compartir con un enlace: usa <strong style="color:#fff">Compartir → Enlace público</strong></li>
        <li>Para presentar en vivo: abre el modo presentación con el ícono ▷ de pantalla completa</li>
      </ol>
      <div style="background:rgba(239,68,68,0.08);border-radius:8px;padding:10px;margin-top:10px;font-size:0.78rem;color:#fca5a5;">⚠️ <strong>Advertencia estadísticas:</strong> La IA puede inventar datos y porcentajes que suenan reales. Siempre verifica cifras numéricas antes de presentar a directivos o ciudadanos.</div>
    </div>
    <div class="reward-tag" style="margin-top:15px;">+120 XP · Insignia: Orador Digital 📽️</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-7" style="width:100%;margin-top:15px;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-6">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-8">Siguiente: Comunicación Efectiva →</button>
</div>
`
  };

  // Inject modules
  // Inject safely
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el && !el.querySelector('.module-header')) {
      el.insertAdjacentHTML('afterbegin', html);
    }
  }
  return { init: function(app) { console.log('Initialized modules-6-7.js'); } };
})();
