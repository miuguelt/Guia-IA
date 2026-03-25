window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-19'] = (function() {
  // --- MÓDULO 19: Lógica ---
  
  // M19 Career Path Logic
  window.m19UpdatePath = function() {
    const sel = document.getElementById('m19-role-selector');
    const disp = document.getElementById('m19-path-display');
    if(!sel || !disp) return;
    
    const paths = {
      'prompt': '<b>Rol:</b> Prompt Engineer<br><b>Prompt Maestro:</b> "Actúa como mi mentor. Quiero ser Prompt Engineer..."<br><b>Hoja de Ruta:</b> 1. Lógica CREA avanzada, 2. Testing de modelos.',
      'automator': '<b>Rol:</b> Orquestador IA<br><b>Prompt Maestro:</b> "Ayúdame a diseñar un flujo Zapier/Make..."<br><b>Hoja de Ruta:</b> 1. Dominar n8n/Zapier, 2. Manejo de APIs/JSON.',
      'auditor': '<b>Rol:</b> Auditor Ético<br><b>Prompt Maestro:</b> "Analiza este proceso institucional..."<br><b>Hoja de Ruta:</b> 1. Marco Legal Ético, 2. Detección de Sesgos.',
      'rag': '<b>Rol:</b> Curador RAG<br><b>Prompt Maestro:</b> "Cómo estructuro mis documentos..."<br><b>Hoja de Ruta:</b> 1. Arquitectura de Info, 2. Limpieza de Dataset.'
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
    'module-19': `
      <div class="module-header premium-header">
        <div class="module-number gamer-badge">Módulo 19 — Visión</div>
        <h2 class="module-title glow-text">🚀 Roles y Workflows del Futuro</h2>
        <p class="module-description">Conoce las profesiones que están naciendo y cómo orquestar flujos de trabajo inteligentes.</p>
      </div>

      <div class="ag-tabs game-tabs">
        <button class="tab-btn active" data-tab="m19-roles">👨‍🚀 Mapa de Carreras</button>
        <button class="tab-btn" data-tab="m19-skills">🧠 Habilidades</button>
        <button class="tab-btn" data-tab="m19-mission">⚔️ Misión</button>
      </div>

      <div id="m19-roles" class="ag-content active">
        <div class="section-card animate-in">
          <h3><span class="icon">🧭</span> El Nuevo Ecosistema</h3>
          <div class="m19-role-card">
            <div class="m19-role-title">🪄 Ingeniero de Prompts</div>
            <p>Diseña sistemas lógicos y plantillas institucionales.</p>
          </div>
          <div class="m19-role-card">
            <div class="m19-role-title">⚙️ Orquestador de Agentes</div>
            <p>Conecta herramientas con IA para automatizar procesos.</p>
          </div>
        </div>
      </div>

      <div id="m19-skills" class="ag-content">
        <div class="section-card animate-in">
          <h3>🧠 Habilidades Core</h3>
          <p>El pensamiento crítico y la empatía son las nuevas ventajas competitivas.</p>
          <div style="margin-top:20px;">
            <select id="m19-role-selector" class="game-select" onchange="window.m19UpdatePath()">
              <option value="prompt">Prompt Engineer</option>
              <option value="automator">AI Automator</option>
            </select>
            <div id="m19-path-display" class="m-pa-codebox" style="margin-top:15px; padding:15px; background:rgba(0,0,0,0.2); border-left:3px solid #3b82f6;">
              Seleccione un rol...
            </div>
          </div>
        </div>
      </div>

      <div id="m19-mission" class="ag-content">
        <div class="exercise-box mission-card animate-in">
          <h3>🚀 Misión 19: Tu Mapa</h3>
          <p>Define tu rol ideal y crea un plan de estudio.</p>
          <textarea class="premium-textarea" placeholder="Escribe tu elección..."></textarea>
          <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-19" style="width:100%; margin-top:15px;">✅ Misión Completada</button>
        </div>
      </div>

      <div class="module-nav">
        <button class="gl-btn" data-goto="module-18">← Anterior</button>
        <button class="gl-btn gl-btn-primary" data-goto="module-20">ÚLTIMO MÓDULO →</button>
      </div>
    `
  };

  // Inject
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  return { init: function(app) { console.log('Initialized module-19'); } };
})();
