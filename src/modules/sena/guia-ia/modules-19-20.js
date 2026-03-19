window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-19'] = window.GuiaModules['module-20'] = (function() {
  // --- MÓDULO 20: Lógica Centralizada ---
  window.m20DownloadCert = function() {
    window.showToast('Generando Blockchain PDF...', 'success');
    typeof antShowConfetti === 'function' && antShowConfetti();
    
    setTimeout(() => {
      // Simulamos la descarga de un certificado
      const a = document.createElement('a');
      const text = "\n------------------------------------------\n"+
                   "   CERTIFICADO OFICIAL DE COMPETENCIA IA\n"+
                   "------------------------------------------\n\n"+
                   "Por medio de la presente se certifica que el Usuario\n"+
                   "ha completado satisfactoriamente los 20 Módulos del\n"+
                   "Programa Avanzado de Productividad AI Institucional.\n\n"+
                   "Puntos Obtenidos: " + (window.app ? window.app.state.xp : "2850") + " XP\n"+
                   "Competencias: CREA, RAG, Privacidad Local, Automatizacion.\n\n"+
                   "Emitido por el Sistema Antigravity Guia IA.\n"+
                   "Fecha: " + new Date().toLocaleDateString() + "\n";
                   
      const blob = new Blob([text], { type: 'text/plain' });
      a.href = URL.createObjectURL(blob);
      a.download = "Certificado_IA_Experto.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 1500);
  };

  // Observador para actualizar estadísticas finales
  const m20Updater = setInterval(() => {
    const xpEl = document.getElementById('final-total-xp');
    const scoreEl = document.getElementById('m20-user-score');
    const modulesEl = document.getElementById('final-modules-done');
    
    if (xpEl && window.app && window.app.state) {
      xpEl.innerText = window.app.state.xp;
      if (scoreEl) scoreEl.innerText = window.app.state.xp + ' XP';
      if (modulesEl) modulesEl.innerText = window.app.state.completedModules.length + '/20';
      // Una vez actualizado, podríamos limpiar el intervalo si no cambia, 
      // pero mejor dejarlo por si el usuario gana más XP en la misma sesión.
    }
  }, 1000);

  const modules = {

/* ══════════════════════════════════════════════════════════════
   MÓDULO 19 — ROLES DEL FUTURO
   ══════════════════════════════════════════════════════════════ */
'module-19': `
<style>
  .m19-role-card { background: rgba(255,255,255,0.02); border: 1px solid #333; border-radius: 12px; padding: 20px; margin-bottom: 15px; position: relative; overflow: hidden; transition: all 0.3s; }
  .m19-role-card:hover { transform: translateX(5px); border-color: #3b82f6; background: rgba(59,130,246,0.05); }
  .m19-role-title { font-size: 1.1rem; font-weight: 700; color: #60a5fa; margin-bottom: 5px; display: flex; align-items: center; gap: 8px; }
  .m19-role-desc { font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 10px; }
  .m19-role-skill { display: inline-block; background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; color: #94a3b8; margin-right: 5px; margin-bottom: 5px; }
  .m19-salary { position: absolute; top: 20px; right: 20px; font-family: monospace; color: #10b981; font-weight: 700; background: rgba(16,185,129,0.1); padding: 4px 8px; border-radius: 6px; }
</style>

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(37,99,235,0.15)); border: 1px solid rgba(59,130,246,0.2);">
  <div class="module-number gamer-badge" style="background:#3b82f6;color:#fff;">Módulo 19 — Visión</div>
  <h2 class="module-title glow-text" style="color:#93c5fd;">🚀 Roles y Workflows del Futuro</h2>
  <p class="module-description">"La IA no va a robarte el trabajo. Alguien que usa Workflows de IA sí lo hará". Conoce las profesiones que están naciendo y cómo orquestar flujos de trabajo inteligentes.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 30 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Visionario</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m19-roles">👨‍🚀 Mapa de Carreras</button>
  <button class="tab-btn" data-tab="m19-skills">🧠 Habilidades Core</button>
  <button class="tab-btn" data-tab="m19-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: ROLES -->
<div id="m19-roles" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🧭</span> El Nuevo Ecosistema Laboral</h3>
    <p>Aprender la herramienta que está de moda hoy (ChatGPT) es útil, pero las herramientas cambian. Lo que perdura es la <b>Arquitectura de Soluciones</b>. Estos son los roles reales que las empresas de Fortune 500 ya están contratando:</p>
    
    <div style="margin-top:20px;">
      
      <div class="m19-role-card">
        <div class="m19-role-title">🪄 Ingeniero de Prompts (Prompt Engineer)</div>
        <div class="m19-salary">+$100k USD/año</div>
        <div class="m19-role-desc">No es solo "hablar con el chat". Es diseñar sistemas lógicos (Método CREA), probar excepciones, enlazar APIs y crear plantillas que el resto de la empresa usará a diario. Requiere excelente redacción y lógica matemática.</div>
        <div>
          <span class="m19-role-skill">Lógica Condicional</span><span class="m19-role-skill">Lingüística Aplicada</span><span class="m19-role-skill">Testing QA</span>
        </div>
      </div>
      
      <div class="m19-role-card">
        <div class="m19-role-title">⚙️ Orquestador de Agentes (AI Automator)</div>
        <div class="m19-salary">+$120k USD/año</div>
        <div class="m19-role-desc">Conecta Zapier, Make o n8n con IA. Su trabajo es que 5 IAs distintas hablen entre sí para resolver un proceso (Ej: IA-1 lee el PDF, IA-2 decide a quién asignarlo, IA-3 redacta la respuesta, IA-4 manda el correo).</div>
        <div>
          <span class="m19-role-skill">Zapier / Make</span><span class="m19-role-skill">Visión Sistémica</span><span class="m19-role-skill">JSON / APIs</span>
        </div>
      </div>
      
      <div class="m19-role-card">
        <div class="m19-role-title">🛡️ Oficial de Ética y Auditor IA</div>
        <div class="m19-salary">+$115k USD/año</div>
        <div class="m19-role-desc">Asegura que la IA no invente datos (Alucinación), no sea racista/machista (Sesgo) y que los empleados no filtren datos confidenciales de la empresa a OpenAI o Google. Crucial en sector público, salud y finanzas.</div>
        <div>
          <span class="m19-role-skill">Leyes de Datos (GDPR)</span><span class="m19-role-skill">Evaluación de Sesgos</span><span class="m19-role-skill">Compliance</span>
        </div>
      </div>
      
      <div class="m19-role-card">
        <div class="m19-role-title">🧠 Curador de Conocimiento (RAG Manager)</div>
        <div class="m19-salary">+$90k USD/año</div>
        <div class="m19-role-desc">La IA es tan buena como los datos que consume. Este rol organiza, limpia y etiqueta los PDFs, Excels y manuales de la empresa para que la IA (NotebookLM, Copilot) responda con precisión exacta sin equivocarse.</div>
        <div>
          <span class="m19-role-skill">Arquitectura de Info</span><span class="m19-role-skill">Limpieza de Datos</span><span class="m19-role-skill">Vectorización Base</span>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- TAB 2: HABILIDADES -->
<div id="m19-skills" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧬</span> Las "Soft Skills" del 2025</h3>
    <p>Paradójicamente, la inteligencia artificial hará que las habilidades <b>más humanas</b> sean las más valiosas.</p>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;">
      
      <div style="background:rgba(255,255,255,0.02);padding:20px;border-radius:12px;text-align:center;">
        <div style="font-size:3rem;margin-bottom:10px;">📉</div>
        <h4 style="color:#ef4444;margin:0 0 10px;">Habilidades Devaluadas</h4>
        <ul style="text-align:left;font-size:0.85rem;color:#94a3b8;line-height:1.6;padding-left:15px;">
          <li>Memorización de datos estáticos</li>
          <li>Redacción de correos "de relleno"</li>
          <li>Traducción básica de textos</li>
          <li>Generación de código/fórmulas de cajón</li>
          <li>Diseño gráfico con plantillas</li>
        </ul>
      </div>
      
      <div style="background:rgba(255,255,255,0.02);padding:20px;border-radius:12px;text-align:center;border:1px solid #10b981;">
        <div style="font-size:3rem;margin-bottom:10px;">📈</div>
        <h4 style="color:#10b981;margin:0 0 10px;">Habilidades Premium</h4>
        <ul style="text-align:left;font-size:0.85rem;color:#cbd5e1;line-height:1.6;padding-left:15px;">
          <li><b>Pensamiento Crítico</b> (Detectar si la IA se equivoca)</li>
          <li><b>Empatía</b> (Manejo de equipos y ciudadanos molestos)</li>
          <li><b>Curaduría</b> (Saber elegir qué respuesta de la IA es la mejor)</li>
          <li><b>Creatividad Estratégica</b> (Resolver el problema de fondo, no la forma)</li>
        </ul>
      </div>

    </div>
  </div>
</div>

<!-- TAB 3: MISIÓN -->
<div id="m19-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🚀</span><span class="exercise-title">Misión 19: Tu Mapa a 3 Años</span></div>
    <div class="preparation-step" style="background: rgba(59,130,246,0.1); border: 1px solid #3b82f6; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #3b82f6;">
      <h4 style="margin-top: 0; color: #3b82f6; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, reflexiona sobre tus cuellos de botella actuales y qué rol del futuro te gustaría ocupar en tu institución.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(59,130,246,0.05);padding:20px;border-radius:12px;border-left:4px solid #3b82f6;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Basado en los 4 roles del futuro expuestos (Prompt Engineer, Automator, Auditor, RAG Manager)...</li>
        <li>¿A cuál de esos roles se acerca más tu personalidad o tu trabajo actual en la Entidad?</li>
        <li>Abre ChatGPT y dile: "Actúa como mi mentor de carrera. En 3 años quiero perfilame como [Rol elegido] dentro de mi empresa. Hazme un plan de estudio de 5 pasos concretos para lograrlo sin dejar mi trabajo actual."</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Nombra el rol que elegiste y pega 1 de los consejos que te dio la IA..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Visionario 🚀</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-19" style="width:100%;margin-top:15px;background:#3b82f6;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-18">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-20">ÚLTIMO MÓDULO: Hall of Fame →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 20 — LEADERBOARD Y CEREMONIA FINAL
   ══════════════════════════════════════════════════════════════ */
'module-20': `
<style>
  .m20-glory-box { background: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23dots)"/></svg>') #050a0e; border: 2px solid #eab308; border-radius: 20px; padding: 40px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 0 40px rgba(234,179,8,0.1); }
  .m20-glory-box::before { content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%; background:radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 50%); animation: rotate 20s linear infinite; pointer-events:none; }
  @keyframes rotate { 100% { transform: rotate(360deg); } }
  .m20-stat { display: inline-block; padding: 15px 30px; background: rgba(0,0,0,0.5); border: 1px solid #333; border-radius: 12px; margin: 10px; backdrop-filter: blur(10px); }
  .m20-stat-num { font-size: 2.5rem; font-weight: 800; color: #fde047; text-shadow: 0 0 10px rgba(234,179,8,0.5); font-family: monospace; }
  .m20-stat-label { font-size: 0.8rem; color: #cbd5e1; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; }
  .m20-leaderboard { margin-top: 30px; text-align: left; background: rgba(0,0,0,0.5); border-radius: 12px; padding: 20px; }
  .m20-lb-row { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #333; transition: all 0.2s; }
  .m20-lb-row:hover { background: rgba(255,255,255,0.02); }
  .m20-lb-row:last-child { border: none; }
  .m20-lb-rank { font-size: 1.5rem; font-weight: 800; width: 50px; text-align: center; }
  .m20-lb-avatar { width: 40px; height: 40px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-right: 15px; }
  .m20-lb-info { flex: 1; }
  .m20-lb-name { font-weight: 700; color: #fff; font-size: 1rem; }
  .m20-lb-title { font-size: 0.75rem; color: #94a3b8; }
  .m20-lb-score { font-family: monospace; font-size: 1.2rem; color: #10b981; font-weight: 700; }
  
  .rank-1 .m20-lb-rank { color: #eab308; } .rank-1 .m20-lb-avatar { background: rgba(234,179,8,0.2); border: 1px solid #eab308; }
  .rank-2 .m20-lb-rank { color: #94a3b8; } .rank-2 .m20-lb-avatar { background: rgba(148,163,184,0.2); border: 1px solid #94a3b8; }
  .rank-3 .m20-lb-rank { color: #b45309; } .rank-3 .m20-lb-avatar { background: rgba(180,83,9,0.2); border: 1px solid #b45309; }
</style>

<div class="m20-glory-box animate-in">
  <div style="font-size:4rem;margin-bottom:10px;text-shadow: 0 0 20px rgba(255,255,255,0.5);">👑</div>
  <h1 style="font-size:2.5rem;margin:0 0 10px;color:#fff;text-transform:uppercase;letter-spacing:2px;">Hall of Fame (Final)</h1>
  <p style="color:#cbd5e1;max-width:600px;margin:0 auto 30px;line-height:1.6;font-size:1.1rem;">
    Has navegado 20 módulos. Desde qué es un Prompt Básico hasta Instalar IAs Locales. Eres oficialmente parte de la élite operativa de tu institución.
  </p>

  <div class="preparation-step" style="background: rgba(234,179,8,0.1); border: 1px solid #eab308; padding: 15px; border-radius: 10px; margin: 0 auto 30px; border-left: 4px solid #eab308; max-width: 500px; text-align: left;">
    <h4 style="margin-top: 0; color: #eab308; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación para la Certificación</h4>
    <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Verifica que tu nombre de usuario sea el correcto para el certificado y asegúrate de haber reclamado los puntos de todos los módulos anteriores.</p>
  </div>

  <div>
    <div class="m20-stat">
      <div class="m20-stat-num" id="final-total-xp">2850</div>
      <div class="m20-stat-label">Puntos de Experiencia (XP)</div>
    </div>
    <div class="m20-stat">
      <div class="m20-stat-num" id="final-modules-done">20/20</div>
      <div class="m20-stat-label">Módulos Completados</div>
    </div>
  </div>

  <div style="margin-top:40px;">
    <button class="gl-btn gl-btn-primary glow-btn" style="font-size:1.2rem;padding:20px 50px;font-weight:800;letter-spacing:1px;" onclick="m20DownloadCert()">
      📜 GENERAR CERTIFICADO DIGITAL
    </button>
    <p style="font-size:0.75rem;color:#64748b;margin-top:15px;">(Se descargará un PDF en tu dispositivo avalando tus competencias CREA y RAG)</p>
  </div>
</div>

<div class="section-card animate-in" style="margin-top:30px;">
  <h3><span class="icon">🏆</span> Salón de la Fama (Ranking Global Institucional)</h3>
  <p>Así es como te comparas con el resto de funcionarios que tomaron este curso interactivo.</p>
  
  <div class="m20-leaderboard" id="m20-leaderboard-container">
    <div style="padding:40px; text-align:center; color:#94a3b8;">
      <div class="loading-spinner" style="margin-bottom:15px; font-size:2rem;">🧬</div>
      Sincronizando con el Registro Soberano...
    </div>
  </div>
</div>

<script>
  // Dynamic Leaderboard Logic
  window.renderSovereignRanking = async function() {
    const container = document.getElementById('m20-leaderboard-container');
    if (!container) return;

    try {
      const resp = await fetch('/api/leaderboard');
      if (!resp.ok) throw new Error('No se pudo conectar con el Ledger');
      const data = await resp.json();
      
      const currentUserName = localStorage.getItem('guia-ia-username');

      let html = '';
      data.forEach((user, index) => {
        const isUser = user.name === currentUserName;
        const rankClass = index < 3 ? 'rank-' + (index + 1) : '';
        const userHighlight = isUser ? 'border: 1px solid #eab308; background: rgba(234,179,8,0.05);' : '';
        
        html += `
          <div class="m20-lb-row ${rankClass}" style="${userHighlight}">
            <div class="m20-lb-rank">${index + 1}</div>
            <div class="m20-lb-avatar">${user.avatar || '👤'}</div>
            <div class="m20-lb-info">
              <div class="m20-lb-name">${user.name} ${isUser ? '(Tú)' : ''}</div>
              <div class="m20-lb-title">${user.title || 'Operador'}</div>
            </div>
            <div class="m20-lb-score" style="${isUser ? 'color:#eab308;' : ''}">${user.xp} XP</div>
          </div>
        `;
      });
      container.innerHTML = html;
    } catch (e) {
      console.warn('Backend unavailable, using local simulation');
      // Fallback in case of local file access without node server
      container.innerHTML = \`
        <div class="m20-lb-row rank-1">
          <div class="m20-lb-rank">1</div>
          <div class="m20-lb-avatar">🐉</div>
          <div class="m20-lb-info">
            <div class="m20-lb-name">Miguel L. (Antigravity Director)</div>
            <div class="m20-lb-title">Arquitecto Supramind Nivel 99</div>
          </div>
          <div class="m20-lb-score">9999 XP</div>
        </div>
        <div class="m20-lb-row rank-2" style="border: 1px solid #eab308; background: rgba(234,179,8,0.05);">
          <div class="m20-lb-rank">2</div>
          <div class="m20-lb-avatar">👨‍💻</div>
          <div class="m20-lb-info">
            <div class="m20-lb-name">\${localStorage.getItem('guia-ia-username') || 'Tú (El Funcionario Elite)'}</div>
            <div class="m20-lb-title">Operador IA Avanzado</div>
          </div>
          <div class="m20-lb-score" style="color:#eab308;">\${window.app?.xp || 2850} XP</div>
        </div>
      \`;
    }
  };

  // Auto-init on load if Module 20 is already active
  if (document.getElementById('module-20')?.classList.contains('active')) {
    window.renderSovereignRanking();
  }
</script>

<div style="text-align:center;margin-top:40px;padding-bottom:50px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Sena_colombia_logo.svg" alt="SENA" width="100" style="opacity:0.5;filter:grayscale(100%);">
  <p style="font-size:0.8rem;color:#64748b;margin-top:15px;">Módulo Didáctico desarrollado por la Tecnología de Gestión. Antigravity Systems © 2026.</p>
</div>
`
  };
  
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  return { init: function(app) { console.log('Initialized modules-19-20.js'); } };
})();
