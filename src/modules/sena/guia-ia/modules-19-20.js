window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-19'] = window.GuiaModules['module-20'] = (function() {
  // --- MÓDULO 20: Lógica Centralizada ---
  window.m20DownloadCert = function() {
    window.showToast('Generando Certificado Premium...', 'success');
    typeof window.antShowConfetti === 'function' && window.antShowConfetti();
    
    setTimeout(() => {
      const userName = localStorage.getItem('guia-ia-username') || 'El Funcionario Elite';
      const xp = (window.app?.xp ?? window.app?.state?.xp ?? 2850);
      const today = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
      
      const certHTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Certificado IA — ${userName}</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:#0f0f23; display:flex; align-items:center; justify-content:center; min-height:100vh; font-family:'Outfit',sans-serif; padding:40px; }
    .cert { max-width:800px; width:100%; background:rgba(13,21,44,0.95); border:2px solid rgba(99,102,241,0.4); border-radius:24px; padding:60px; text-align:center; 
      box-shadow: 0 0 80px rgba(99,102,241,0.2), 0 0 30px rgba(6,182,212,0.1);
      background-image: radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.05) 0%, transparent 50%); }
    .badge { display:inline-block; font-size:0.65rem; font-weight:800; letter-spacing:2px; text-transform:uppercase; color:#818cf8; background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.3); padding:6px 16px; border-radius:20px; margin-bottom:24px; }
    .logo { font-size:4rem; margin-bottom:16px; }
    h1 { font-size:2.2rem; font-weight:900; background:linear-gradient(135deg,#818cf8,#22d3ee); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:8px; }
    .subtitle { font-size:0.9rem; color:#64748b; margin-bottom:40px; }
    .declares { font-size:0.85rem; color:#94a3b8; margin-bottom:10px; }
    .name { font-size:2.4rem; font-weight:800; color:#f1f5f9; margin-bottom:20px; font-family:'Space Grotesk'; }
    .desc { font-size:1rem; color:#cbd5e1; line-height:1.8; max-width:560px; margin:0 auto 32px; }
    .skills { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:40px; }
    .skill { background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.25); padding:6px 14px; border-radius:20px; font-size:0.75rem; font-weight:700; color:#a5b4fc; }
    .stats { display:flex; gap:30px; justify-content:center; margin-bottom:40px; }
    .stat { text-align:center; }
    .stat-n { font-size:1.8rem; font-weight:800; color:#818cf8; }
    .stat-l { font-size:0.7rem; color:#64748b; text-transform:uppercase; letter-spacing:1px; }
    .divider { height:1px; background:linear-gradient(90deg,transparent,rgba(99,102,241,0.3),transparent); margin:30px 0; }
    .footer { font-size:0.75rem; color:#475569; }
    .date { font-size:0.8rem; color:#818cf8; margin-top:8px; }
    @media print { body { background:#fff; } .cert { border-color:#333; box-shadow:none; background:#fff; } .name, h1 { -webkit-text-fill-color: #1e293b !important; } }
  </style>
</head>
<body>
  <div class="cert">
    <div class="badge">🏛️ Antigravity Systems · Certificación Oficial</div>
    <div class="logo">🤖</div>
    <h1>Certificado de Competencia en IA</h1>
    <div class="subtitle">Programa Avanzado de Productividad AI Institucional</div>
    <div class="divider"></div>
    <div class="declares">Se certifica que</div>
    <div class="name">${userName}</div>
    <div class="desc">Ha completado satisfactoriamente los <strong>20 Módulos</strong> del Programa de Inteligencia Artificial aplicada al Sector Público, demostrando competencias en Ingeniería de Prompts, Análisis Documental, Automatización de Procesos, Seguridad de Datos e IA Local.</div>
    <div class="skills">
      <span class="skill">Método CREA</span>
      <span class="skill">RAG Documental</span>
      <span class="skill">Ética IA (Ley 1581)</span>
      <span class="skill">Automatización Zapier</span>
      <span class="skill">IA Local (Ollama)</span>
      <span class="skill">Análisis ROI</span>
    </div>
    <div class="stats">
      <div class="stat"><div class="stat-n">${xp} XP</div><div class="stat-l">Puntos Obtenidos</div></div>
      <div class="stat"><div class="stat-n">20</div><div class="stat-l">Módulos Completados</div></div>
      <div class="stat"><div class="stat-n">100%</div><div class="stat-l">Programa Finalizado</div></div>
    </div>
    <div class="divider"></div>
    <div class="footer">Emitido por el Sistema Antigravity Guia IA · SENA Colombia</div>
    <div class="date">📅 ${today}</div>
  </div>
</body>
</html>`;
      
      const win = window.open('', '_blank');
      if (win) {
        win.document.write(certHTML);
        win.document.close();
      } else {
        const blob = new Blob([certHTML], { type: 'text/html' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'Certificado_IA_Experto.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }, 1500);
  };

  // Ranking Logic
  window.renderSovereignRanking = async function() {
    const container = document.getElementById('m20-leaderboard-container');
    if (!container) return;

    try {
      // Dynamic API URL detection: If served by Live Server (5500), point to Node Backend (8020)
      const API_URL = window.location.port === '5500' ? `http://${window.location.hostname}:8020` : '';
      const resp = await fetch(`${API_URL}/api/leaderboard`);
      if (!resp.ok) throw new Error('No se pudo conectar con el Ledger');
      const data = await resp.json();
      
      const currentUserName = localStorage.getItem('guia-ia-username');

      let htmlContents = '';
      data.forEach((user, index) => {
        const isUser = user.name === currentUserName;
        const rankClass = index < 3 ? 'rank-' + (index + 1) : '';
        const userHighlight = isUser ? 'border: 1px solid #eab308; background: rgba(234,179,8,0.05);' : '';
        
        htmlContents += `
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
      container.innerHTML = htmlContents;
    } catch (e) {
      console.warn('Backend unavailable, using local simulation');
      const currentUserName = localStorage.getItem('guia-ia-username') || 'Tú (El Funcionario Elite)';
      const currentXP = (window.app?.xp ?? window.app?.state?.xp ?? 2850);
      
      container.innerHTML = `
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
            <div class="m20-lb-name">${currentUserName}</div>
            <div class="m20-lb-title">Operador IA Avanzado</div>
          </div>
          <div class="m20-lb-score" style="color:#eab308;">${currentXP} XP</div>
        </div>
      `;
    }
  };

  // Observador para actualizar estadísticas finales
  const m20Updater = setInterval(() => {
    const xpEl = document.getElementById('final-total-xp');
    const scoreEl = document.getElementById('m20-user-score');
    const modulesEl = document.getElementById('final-modules-done');
    const appState = window.app || window.app?.state;
    
    if (xpEl && appState) {
      const currentXP = window.app?.xp || window.app?.state?.xp || 0;
      xpEl.innerText = currentXP;
      if (scoreEl) scoreEl.innerText = currentXP + ' XP';
      if (modulesEl) {
          const done = window.app?.completedModules?.size || window.app?.state?.completedModules?.length || 0;
          modulesEl.innerText = done + '/21';
      }
    }

    if (typeof window.renderCompetencyReport === 'function' && document.getElementById('m20-strongest')) {
      window.renderCompetencyReport();
    }
  }, 1000);

  // M19 Career Path Logic
  window.m19UpdatePath = function() {
    const sel = document.getElementById('m19-role-selector');
    const disp = document.getElementById('m19-path-display');
    if(!sel || !disp) return;
    
    const paths = {
      'prompt': '<b>Rol:</b> Prompt Engineer<br><b>Prompt Maestro:</b> "Actúa como mi mentor. Quiero ser Prompt Engineer... [Ver Misión]"<br><b>Hoja de Ruta:</b> 1. Lógica CREA avanzada, 2. Testing de modelos, 3. Gestión de versiones.',
      'automator': '<b>Rol:</b> Orquestador IA<br><b>Prompt Maestro:</b> "Ayúdame a diseñar un flujo Zapier/Make..."<br><b>Hoja de Ruta:</b> 1. Dominar n8n/Zapier, 2. Manejo de APIs/JSON, 3. Lógica de agentes.',
      'auditor': '<b>Rol:</b> Auditor Ético<br><b>Prompt Maestro:</b> "Analiza este proceso institucional bajo la Ley 1581..."<br><b>Hoja de Ruta:</b> 1. Marco Legal Ético, 2. Detección de Sesgos, 3. Seguridad de Datos.',
      'rag': '<b>Rol:</b> Curador RAG<br><b>Prompt Maestro:</b> "Cómo estructuro mis documentos para NotebookLM..."<br><b>Hoja de Ruta:</b> 1. Arquitectura de Info, 2. Limpieza de Dataset, 3. Vectores/Embeddings.'
    };
    disp.innerHTML = paths[sel.value] || 'Selecciona un rol...';
    window.app && window.app.addXP(10);
  };
  window.m19CopyPlan = function() {
    const disp = document.getElementById('m19-path-display');
    if(!disp) return;
    navigator.clipboard.writeText(disp.innerText);
    window.showToast('Plan de Carrera copiado', 'success');
  };

  const modules = {

/* ══════════════════════════════════════════════════════════════
   MÓDULO 19 — ROLES DEL FUTURO
   ══════════════════════════════════════════════════════════════ */
'module-19': `

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
    <p>Aprender la herramienta que está de moda hoy (<a href="https://chatgpt.com" target="_blank" style="color:var(--primary); text-decoration:underline;">ChatGPT</a>) es útil, pero las herramientas cambian. Lo que perdura es la <b>Arquitectura de Soluciones</b>. Estos son los roles reales que las empresas de Fortune 500 ya están contratando:</p>
    
    <div style="margin-top:20px;">
      
      <div class="m19-role-card">
        <div class="m19-role-title">🪄 Ingeniero de Prompts (Prompt Engineer)</div>
        <div class="m19-salary">+$100k USD/año</div>
        <div class="m19-role-desc">No es solo "hablar con el chat". Es diseñar sistemas lógicos (Método CREA), probar excepciones, enlazar APIs y crear plantillas que el resto de la empresa usará a diario. Requiere excelente redacción y lógica matemática.</div>
        <div>
          <span class="m19-role-skill">Lógica Condicional</span><span class="m19-role-skill">Lingüística Aplicada</span><span class="m19-role-skill">Testing QA</span>
        </div>
        <div style="font-size:0.75rem;color:#6ee7b7;margin-top:10px;padding:8px;background:rgba(16,185,129,0.05);border-radius:8px;">🇨🇴 En Colombia: equivale a <strong>$400M — $500M COP/año</strong> aprox. (TRM ~$4000). Perfiles junior arrancan en $80M — $120M COP para entidades públicas.</div>
      </div>
      
      <div class="m19-role-card">
        <div class="m19-role-title">⚙️ Orquestador de Agentes (AI Automator)</div>
        <div class="m19-salary">+$120k USD/año</div>
        <div class="m19-role-desc">Conecta <a href="https://zapier.com" target="_blank" style="color:#3b82f6; text-decoration:underline;">Zapier</a>, <a href="https://make.com" target="_blank" style="color:#3b82f6; text-decoration:underline;">Make</a> o <a href="https://n8n.io" target="_blank" style="color:#3b82f6; text-decoration:underline;">n8n</a> con IA. Su trabajo es que 5 IAs distintas hablen entre sí para resolver un proceso (Ej: IA-1 lee el PDF, IA-2 decide a quién asignarlo, IA-3 redacta la respuesta, IA-4 manda el correo).</div>
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
        <div class="m19-role-desc">La IA es tan buena como los datos que consume. Este rol organiza, limpia y etiqueta los PDFs, Excels y manuales de la empresa para que la IA (<b><a href="https://notebooklm.google.com" target="_blank" style="color:#3b82f6; text-decoration:underline;">NotebookLM</a></b>, <b><a href="https://copilot.microsoft.com" target="_blank" style="color:#3b82f6; text-decoration:underline;">Copilot</a></b>) responda con precisión exacta sin equivocarse.</div>
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
    
    <div style="background:linear-gradient(135deg, rgba(59,130,246,0.05), rgba(37,99,235,0.05)); border:1px solid rgba(59,130,246,0.2); border-radius:16px; padding:25px; margin-top:25px;">
      <h4 style="color:#60a5fa; margin-top:0;">🗺️ Selector de Career Path IA</h4>
      <p style="font-size:0.85rem; opacity:0.9;">Selecciona un rol para ver tu hoja de ruta sugerida y el prompt para iniciar tu mentoría.</p>
      <div style="display:flex; gap:10px; margin-top:15px;">
        <select id="m19-role-selector" class="game-select" style="flex:1; background:#0d1117; border:1px solid #3b82f6; color:#fff; border-radius:6px; padding:10px;" onchange="window.m19UpdatePath()">
          <option value="prompt">Ingeniero de Prompts</option>
          <option value="automator">Orquestador de Agentes</option>
          <option value="auditor">Auditor de Ética IA</option>
          <option value="rag">Curador de Conocimiento (RAG)</option>
        </select>
        <button class="gl-btn gl-btn-primary small" style="background:#3b82f6;" onclick="window.m19CopyPlan()">📋 Copiar Plan</button>
      </div>
      <div id="m19-path-display" class="m-pa-codebox" style="margin-top:15px; font-size:0.82rem; min-height:100px; border-left:3px solid #60a5fa; padding:15px; background:rgba(0,0,0,0.2); border-radius:8px;">
        Selecciona un rol para ver detalles...
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
  <button class="gl-btn" data-goto="module-bonus-comet">← Anterior (Comet)</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-20">ÚLTIMO MÓDULO: Hall of Fame →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 20 — LEADERBOARD Y CEREMONIA FINAL
   ══════════════════════════════════════════════════════════════ */
'module-20': `

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
      <div class="m20-stat-num" id="final-modules-done">0/21</div>
      <div class="m20-stat-label">Módulos Completados</div>
    </div>
    <div class="m20-stat">
      <div class="m20-stat-num" id="m20-user-score">0 XP</div>
      <div class="m20-stat-label">Dominio Actual</div>
    </div>
  </div>

  <div style="margin-top:40px;">
    <button class="gl-btn gl-btn-primary glow-btn" style="font-size:1.2rem;padding:20px 50px;font-weight:800;letter-spacing:1px;" onclick="window.m20DownloadCert()">
      📜 GENERAR CERTIFICADO DIGITAL
    </button>
    <p style="font-size:0.75rem;color:#64748b;margin-top:15px;">(Se generará un Certificado Premium HTML en tu dispositivo)</p>
  </div>

  <!-- ¿Y ahora qué? — 3 caminos -->
  <div class="section-card animate-in" style="margin-top:40px;background:linear-gradient(135deg, rgba(99,102,241,0.06), rgba(6,182,212,0.06));border:1px solid rgba(99,102,241,0.2);">
    <h3><span class="icon">🚀</span> ¿Y Ahora Qué? 3 Caminos para Continuar</h3>
    <p style="margin-bottom:24px;">Completar esta guía es el punto de partida, no el destino. Aquí tienes 3 rutas concretas según tu situación:</p>
    <div style="display:grid;gap:16px;">
      <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:14px;padding:20px;display:flex;gap:16px;align-items:flex-start;">
        <div style="font-size:2rem;flex-shrink:0;">🏢</div>
        <div>
          <div style="font-weight:800;color:#818cf8;font-size:0.9rem;margin-bottom:6px;">CAMINO 1: Aplicar en tu Entidad Actual</div>
          <div style="font-size:0.82rem;color:#cbd5e1;line-height:1.7;">Propón un <strong style="color:#fff">piloto de IA en tu área</strong> (Ej: automatizar las PQRS o el resumen de informes semanales). Con este certificado y los módulos de ROI, ya tienes los argumentos para llevarle la propuesta a tu jefe. <em>Plazo sugerido: 30 días.</em></div>
        </div>
      </div>
      <div style="background:rgba(6,182,212,0.08);border:1px solid rgba(6,182,212,0.25);border-radius:14px;padding:20px;display:flex;gap:16px;align-items:flex-start;">
        <div style="font-size:2rem;flex-shrink:0;">📚</div>
        <div>
          <div style="font-weight:800;color:#22d3ee;font-size:0.9rem;margin-bottom:6px;">CAMINO 2: Profundizar y Especializarte</div>
          <div style="font-size:0.82rem;color:#cbd5e1;line-height:1.7;">Toma un curso específico de tu área de interés: <a href="https://www.deeplearning.ai" target="_blank" style="color:#22d3ee;">DeepLearning.AI</a> (Agentes, LLMs), <a href="https://platzi.com/ia/" target="_blank" style="color:#22d3ee;">Platzi IA</a> (en español), o el programa de <a href="https://huggingface.co/learn" target="_blank" style="color:#22d3ee;">Hugging Face</a>. <em>Plazo sugerido: 90 días.</em></div>
        </div>
      </div>
      <div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);border-radius:14px;padding:20px;display:flex;gap:16px;align-items:flex-start;">
        <div style="font-size:2rem;flex-shrink:0;">💼</div>
        <div>
          <div style="font-weight:800;color:#fbbf24;font-size:0.9rem;margin-bottom:6px;">CAMINO 3: Pivotar Hacia Roles de IA</div>
          <div style="font-size:0.82rem;color:#cbd5e1;line-height:1.7;">Usa el Módulo 19 para identificar el rol que más te atrajo. Comienza a construir un portafolio en <a href="https://github.com" target="_blank" style="color:#fbbf24;">GitHub</a>, documenta tus proyectos internos y solicita una mentoría en <a href="https://www.linkedin.com" target="_blank" style="color:#fbbf24;">LinkedIn</a>. <em>Plazo sugerido: 6 meses.</em></div>
        </div>
      </div>
    </div>
    <button class="gl-btn" style="margin-top:20px;border-color:#6366f1;color:#818cf8;" onclick="navigator.clipboard.writeText('Actúa como coach de carrera en IA para el sector público colombiano. Completé un programa de 20 módulos de IA (CREA, RAG, automatización, ética, IA local). Mi cargo actual es [tu cargo] en [tu entidad]. Diseñame un plan de 90 días para aplicar IA en mi área y fortalecer mi perfil profesional hacia un rol de [el rol que te interesa del Módulo 19].');window.showToast('Prompt copiado','success');">📋 Copiar Prompt de Plan de Carrera personalizado</button>
  </div>
</div>

<div class="section-card animate-in" style="margin-top:30px;">
  <h3><span class="icon">🧭</span> Reporte Final de Competencias</h3>
  <p>Este cierre ya no mide solo XP. Resume fortalezas, brechas y en qué módulos conviene repasar antes de la fase final.</p>

  <div class="m20-report-grid">
    <div class="m20-report-card">
      <h4>Fortalezas actuales</h4>
      <div id="m20-strongest"></div>
      <p class="m20-report-note">Estas son las competencias donde tu evidencia y tu progreso son más sólidos.</p>
    </div>

    <div class="m20-report-card">
      <h4>Competencias a reforzar</h4>
      <div id="m20-weakest"></div>
      <p class="m20-report-note">No es un fallo; es tu mapa de repaso antes de cerrar el programa.</p>
    </div>

    <div class="m20-report-card">
      <h4>Repaso recomendado</h4>
      <div id="m20-review" class="m20-review-actions"></div>
      <p class="m20-report-note">Vuelve a estos módulos si quieres llegar mejor preparado a Operación Centauro.</p>
    </div>
  </div>
</div>

<div class="section-card animate-in" style="margin-top:30px;">
  <h3><span class="icon">🏆</span> Salón de la Fama (Referencia Motivacional)</h3>
  <p>La comparación con otros usuarios queda como elemento secundario. Lo principal ahora es tu perfil competencial.</p>
  <div class="m20-leaderboard" id="m20-leaderboard-container">
    <div style="padding:40px; text-align:center; color:#94a3b8;">
      <div class="loading-spinner" style="margin-bottom:15px; font-size:2rem;">🧬</div>
      Sincronizando con el Registro Soberano...
    </div>
  </div>
</div>

<div style="text-align:center;margin-top:40px;padding-bottom:50px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Sena_colombia_logo.svg" alt="SENA" width="100" style="opacity:0.5;filter:grayscale(100%);">
  <p style="font-size:0.8rem;color:#64748b;margin-top:15px;">Módulo Didáctico desarrollado por la Tecnología de Gestión. Antigravity Systems © 2026.</p>
</div>
`
  };
  
  // Inject safely
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el && !el.querySelector('.section-card')) {
      el.insertAdjacentHTML('afterbegin', html);
    }
  }
  return { init: function(app) { 
      console.log('Initialized modules-19-20.js'); 
      if (document.getElementById('module-20')?.classList.contains('active')) {
        window.renderSovereignRanking();
        window.renderCompetencyReport?.();
      }
  } };
})();
