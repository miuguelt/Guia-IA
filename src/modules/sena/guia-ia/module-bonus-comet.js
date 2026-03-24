window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-bonus-comet'] = (function() {
    /* ══════════════════════════════════════════════════════════════
       MÓDULO BONUS: Comet - Tu Primer Navegador Agente (DNA v32.5)
       Sovereign UI Overhaul (HUD v32.0 - Titan Supreme)
       ══════════════════════════════════════════════════════════════ */
    
    // Global fallback for copyToClipboard to ensure functionality even if app.js loads late
    if (typeof window.copyToClipboard !== 'function') {
        window.copyToClipboard = function(text) {
            navigator.clipboard.writeText(text).then(() => {
                if (window.showToast) window.showToast('Copiado al portapapeles', 'success');
                else console.log('Copiado al portapapeles');
            });
        };
    }
    
    const fHTML = `
<style>
  .m-comet-container {
    --c-primary: #8b5cf6;
    --c-secondary: #06b6d4;
    --c-glow: rgba(139, 92, 246, 0.4);
    --glass: rgba(13, 17, 23, 0.7);
    --glass-border: rgba(255, 255, 255, 0.12);
    --font-main: 'Outfit', sans-serif;
    color: #e2e8f0;
    font-family: var(--font-main);
  }

  .premium-header-mesh {
    position: relative;
    padding: 40px;
    border-radius: 24px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    overflow: hidden;
    margin-bottom: 30px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }

  .premium-header-mesh::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at center, var(--c-glow) 0%, transparent 70%);
    opacity: 0.3;
    animation: meshRotate 20s linear infinite;
    z-index: 0;
  }

  @keyframes meshRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .header-content { position: relative; z-index: 1; }

  .sovereign-tabs {
    display: flex;
    gap: 8px;
    background: rgba(0,0,0,0.3);
    padding: 6px;
    border-radius: 50px;
    border: 1px solid var(--glass-border);
    margin-bottom: 30px;
    overflow-x: auto;
    scrollbar-width: none;
    position: sticky;
    top: 10px;
    z-index: 100;
    backdrop-filter: blur(10px);
  }

  .sovereign-tabs::-webkit-scrollbar { display: none; }

  .sov-tab {
    padding: 10px 20px;
    border: none;
    background: transparent;
    color: #94a3b8;
    font-family: var(--font-main);
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    border-radius: 40px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sov-tab.active {
    background: var(--c-primary);
    color: #fff;
    box-shadow: 0 0 15px var(--c-glow);
  }

  .sovereign-card {
    background: var(--glass);
    backdrop-filter: blur(24px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  .terminal-box {
    background: #09090b;
    border: 1px solid #27272a;
    border-radius: 12px;
    padding: 20px;
    font-family: 'Space Grotesk', monospace;
    font-size: 0.9rem;
    color: var(--c-secondary);
    position: relative;
    overflow: hidden;
  }

  .terminal-box::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%), 
                linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  .scanline {
    width: 100%;
    height: 2px;
    background: rgba(6, 182, 212, 0.1);
    position: absolute;
    top: 0;
    animation: scanMove 3s linear infinite;
  }

  @keyframes scanMove {
    0% { top: 0; }
    100% { top: 100%; }
  }

  .mission-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .mission-step {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    padding: 15px;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .mission-step:hover { transform: translateY(-5px); border-color: var(--c-primary); }

  .btn-sov {
    background: var(--c-primary);
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  }

  .btn-sov:hover { transform: scale(1.02); box-shadow: 0 0 25px var(--c-glow); }
</style>

<div class="m-comet-container animate-in">
  <!-- PREMIUM HEADER -->
  <div class="premium-header-mesh animate-in">
    <div class="header-content">
      <div class="badge-titan" style="background: var(--c-primary); color: #fff; padding: 5px 15px; border-radius: 50px; display: inline-block; font-size: 0.7rem; font-weight: 800; margin-bottom: 15px;">DNA v32.5 • SOVEREIGN AGENT</div>
      <h2 class="glow-text" style="font-size: 2.5rem; margin: 0 0 10px;">🌠 Comet: Tu Primer Navegador Agente</h2>
      <p style="opacity: 0.8; font-size: 1.1rem; max-width: 700px;">Domina el ecosistema agéntico de Perplexity. Transforma tu navegación pasiva en delegación estratégica completa.</p>
      <div style="display: flex; gap: 20px; margin-top: 20px;">
        <span style="font-size: 0.9rem;">⏱️ <b>120 min</b></span>
        <span style="font-size: 0.9rem;">💎 <b>175 XP</b></span>
        <span style="font-size: 0.9rem; color: #fbbf24;">🏆 <b>Badge: Explorador Comet</b></span>
      </div>
    </div>
  </div>

  <!-- SOVEREIGN TABS -->
  <div class="sovereign-tabs">
    <button class="sov-tab active" data-tab="c-hook">🔥 Gancho</button>
    <button class="sov-tab" data-tab="c-theory">🧠 Teoría</button>
    <button class="sov-tab" data-tab="c-install">⚙️ Setup</button>
    <button class="sov-tab" data-tab="c-cases">📂 Casos</button>
    <button class="sov-tab" data-tab="c-prompts">⚡ Prompts</button>
    <button class="sov-tab" data-tab="c-labs">🧪 Labs</button>
    <button class="sov-tab" data-tab="c-risks">🛡️ Riesgos</button>
    <button class="sov-tab" data-tab="c-game">🎮 Desafío</button>
    <button class="sov-tab" data-tab="c-mission">🚀 Misión</button>
  </div>

  <!-- CONTENT SECTIONS -->
  <div id="c-hook" class="ag-content active">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">🚀</span> ¿Por qué Comet cambia todo?</h3>
      <p>Imagina comparar 5 seguros, reservar el mejor, redactar un correo y guardar todo en Sheets. Con Chrome: <b>2 horas</b>. Con Comet: <b>1 prompt</b>.</p>
      <div style="background: rgba(139, 92, 246, 0.1); border: 1px solid var(--c-primary); padding: 20px; border-radius: 16px; margin-top: 25px;">
        <h4 style="color: var(--c-primary); margin: 0 0 10px;">Navegar vs Delegar</h4>
        <p style="font-size: 0.95rem; line-height: 1.6;">Comet no es solo un navegador con chat. Es un <b>Agente Web Autónomo</b>. Entiende el contexto visual, maneja sesiones y ejecuta flujos multi-paso mientras tú te enfocas en la estrategia.</p>
      </div>
    </div>
  </div>

  <div id="c-theory" class="ag-content">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">🧠</span> Arquitectura Agéntica</h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px; margin-top:20px;">
        <div class="glass-card" style="padding:20px; border-top: 4px solid var(--c-primary); background: rgba(255,255,255,0.02);">
          <h4 style="color:var(--c-primary);">El Sidecar (Asistente Vital)</h4>
          <p style="font-size:0.85rem; opacity:0.8;">Tu copiloto inmediato para resumir, extraer datos o responder dudas sin abandonar la pestaña activa.</p>
        </div>
        <div class="glass-card" style="padding:20px; border-top: 4px solid var(--c-secondary); background: rgba(255,255,255,0.02);">
          <h4 style="color:var(--c-secondary);">Background Assistant</h4>
          <p style="font-size:0.85rem; opacity:0.8;">El cerebro en la sombra. Ejecuta misiones complejas en segundo plano mientras utilizas otras apps.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="c-install" class="ag-content">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">⚙️</span> Configuración de Élite</h3>
      <div class="mission-grid">
        <div class="mission-step">
          <div style="color:var(--c-primary); font-weight:800; font-size:1.2rem;">01</div>
          <p style="font-size:0.85rem;">Descarga oficial en <a href="https://comet.perplexity.ai" target="_blank" style="color:var(--c-primary);">comet.perplexity.ai</a>.</p>
        </div>
        <div class="mission-step">
          <div style="color:var(--c-primary); font-weight:800; font-size:1.2rem;">02</div>
          <p style="font-size:0.85rem;">Activa la <b>Memoria Persistente</b> en ajustes para que aprenda tu estilo.</p>
        </div>
        <div class="mission-step">
          <div style="color:var(--c-primary); font-weight:800; font-size:1.2rem;">03</div>
          <p style="font-size:0.85rem;">Conecta <b>Google Workspace</b> para delegar correos y hojas de cálculo.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="c-cases" class="ag-content">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">📂</span> Casos de Uso Soberanos</h3>
      <div class="cases-carousel" style="display:flex; gap:15px; overflow-x:auto; padding-bottom:15px; scrollbar-width: thin; scroll-snap-type: x mandatory;">
        <div class="glass-card" style="min-width:320px; scroll-snap-align: start; padding:25px; border: 1px solid rgba(6, 182, 212, 0.4); background: linear-gradient(145deg, rgba(6,182,212,0.05), rgba(0,0,0,0.5)); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 15px;">
            <h4 style="color:var(--c-secondary); margin: 0; font-size: 1.2rem;">🏢 Corporate Intel</h4>
            <span style="background: rgba(6,182,212,0.2); color: var(--c-secondary); padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold;">DATA EXTRACT</span>
          </div>
          <p style="font-size:0.85rem; margin:0 0 15px; opacity: 0.9;">Comparación automatizada de competencia con generación de reportes ejecutivos en tiempo real.</p>
          <code style="display:block; background:#050505; border: 1px solid #1f2937; padding:15px; font-size:0.75rem; border-radius:10px; color:#10b981; font-family: 'Space Grotesk', monospace; line-height: 1.4;">"Actúa como analista. Investiga los 3 competidores de [Empresa], extrae su pricing oculto y construye una tabla en G-Sheets."</code>
        </div>
        
        <div class="glass-card" style="min-width:320px; scroll-snap-align: start; padding:25px; border: 1px solid rgba(245, 158, 11, 0.4); background: linear-gradient(145deg, rgba(245,158,11,0.05), rgba(0,0,0,0.5)); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 15px;">
            <h4 style="color:#f59e0b; margin: 0; font-size: 1.2rem;">🎓 Academic Sweep</h4>
            <span style="background: rgba(245,158,11,0.2); color: #f59e0b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold;">RESEARCH</span>
          </div>
          <p style="font-size:0.85rem; margin:0 0 15px; opacity: 0.9;">Curaduría autónoma de fuentes (PDFs, papers) para investigación académica profunda y resumida.</p>
          <code style="display:block; background:#050505; border: 1px solid #1f2937; padding:15px; font-size:0.75rem; border-radius:10px; color:#10b981; font-family: 'Space Grotesk', monospace; line-height: 1.4;">"Busca 5 PDFs de 2024 sobre [Tema], resume los hallazgos clave de cada uno y compila las referencias APA."</code>
        </div>
        
        <div class="glass-card" style="min-width:320px; scroll-snap-align: start; padding:25px; border: 1px solid rgba(16, 185, 129, 0.4); background: linear-gradient(145deg, rgba(16,185,129,0.05), rgba(0,0,0,0.5)); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 15px;">
            <h4 style="color:#10b981; margin: 0; font-size: 1.2rem;">👨‍💻 Dev Automator</h4>
            <span style="background: rgba(16,185,129,0.2); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold;">CODE RUNNER</span>
          </div>
          <p style="font-size:0.85rem; margin:0 0 15px; opacity: 0.9;">Análisis de repositorios, resolución de PRs y lectura cruzada de documentación de librerías.</p>
          <code style="display:block; background:#050505; border: 1px solid #1f2937; padding:15px; font-size:0.75rem; border-radius:10px; color:#10b981; font-family: 'Space Grotesk', monospace; line-height: 1.4;">"Lee el PR #42 en GitHub, identifica los fallos de CI/CD basándote en logs, y redacta un fix para el script."</code>
        </div>

        <div class="glass-card" style="min-width:320px; scroll-snap-align: start; padding:25px; border: 1px solid rgba(236, 72, 153, 0.4); background: linear-gradient(145deg, rgba(236,72,153,0.05), rgba(0,0,0,0.5)); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 15px;">
            <h4 style="color:#ec4899; margin: 0; font-size: 1.2rem;">🌍 Travel Broker</h4>
            <span style="background: rgba(236,72,153,0.2); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold;">LOGISTICS</span>
          </div>
          <p style="font-size:0.85rem; margin:0 0 15px; opacity: 0.9;">Orquestación multi-plataforma para reservas y sincronización de itinerarios en calendario.</p>
          <code style="display:block; background:#050505; border: 1px solid #1f2937; padding:15px; font-size:0.75rem; border-radius:10px; color:#10b981; font-family: 'Space Grotesk', monospace; line-height: 1.4;">"Analiza vuelos y Airbnb simultáneamente. Encuentra la ruta más barata a Tokyo y añade eventos a G-Calendar."</code>
        </div>
        
        <div class="glass-card" style="min-width:320px; scroll-snap-align: start; padding:25px; border: 1px solid rgba(139, 92, 246, 0.4); background: linear-gradient(145deg, rgba(139,92,246,0.05), rgba(0,0,0,0.5)); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 15px;">
            <h4 style="color:#8b5cf6; margin: 0; font-size: 1.2rem;">🚀 Growth Hacker</h4>
            <span style="background: rgba(139,92,246,0.2); color: #8b5cf6; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold;">MARKETING</span>
          </div>
          <p style="font-size:0.85rem; margin:0 0 15px; opacity: 0.9;">Inteligencia social, scraping ético de leads y análisis de tendencias para generación de leads.</p>
          <code style="display:block; background:#050505; border: 1px solid #1f2937; padding:15px; font-size:0.75rem; border-radius:10px; color:#10b981; font-family: 'Space Grotesk', monospace; line-height: 1.4;">"Monitorea las tendencias de Twitter sobre [Keywords], filtra el ruido y compila un reporte de leads en Notion."</code>
        </div>
      </div>
    </div>
  </div>

  <div id="c-prompts" class="ag-content">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">⚡</span> Prompt Engineering para Agentes</h3>
      <div style="background:rgba(0,0,0,0.3); padding:20px; border-radius:12px; border:1px solid var(--c-primary);">
        <code style="font-size:1rem; color: #fff;">[MISIÓN] + [OBJETIVIDAD] + [FORMATO] + [CONEXIONES]</code>
      </div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:20px;">
        <button class="sov-tab" style="justify-content:center; background:rgba(255,255,255,0.05);" onclick="window.copyToClipboard('Busca los últimos 5 correos de RRHH en Gmail y prepárame un resumen de acciones pendientes.')">📧 Correo Activo</button>
        <button class="sov-tab" style="justify-content:center; background:rgba(255,255,255,0.05);" onclick="window.copyToClipboard('Analiza este video de YouTube y crea una lista de tareas accionables en Notion.')">🎥 Video a Tareas</button>
      </div>
    </div>
  </div>

  <div id="c-labs" class="ag-content">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">🧪</span> Sovereign Battle Labs</h3>
      <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:20px;">
        <button class="btn-sov" style="font-size:0.7rem; background: #3b82f6;" onclick="window.runCometLab(1)">Lab 01: Fast Search</button>
        <button class="btn-sov" style="font-size:0.7rem; background: #06b6d4;" onclick="window.runCometLab(2)">Lab 02: Data Miner</button>
        <button class="btn-sov" style="font-size:0.7rem; background: #8b5cf6;" onclick="window.runCometLab(3)">Lab 03: Parallel Agent</button>
        <button class="btn-sov" style="font-size:0.7rem; background: #ec4899;" onclick="window.runCometLab(4)">Lab 04: Cross-App Sync</button>
        <button class="btn-sov" style="font-size:0.7rem; background: #f59e0b;" onclick="window.runCometLab(5)">Lab 05: Visual Testing</button>
        <button class="btn-sov" style="font-size:0.7rem; background: #10b981;" onclick="window.runCometLab(6)">Lab 06: Auto-Fixer</button>
      </div>
      <div class="terminal-box">
        <div class="scanline"></div>
        <div id="comet-lab-display">> SISTEMA LISTO PARA SIMULACIÓN...</div>
      </div>
    </div>
  </div>

  <div id="c-risks" class="ag-content">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">🛡️</span> Protocolo de Seguridad</h3>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
        <div style="background:rgba(239, 68, 68, 0.1); border:1px solid #ef4444; padding:20px; border-radius:16px;">
          <h4 style="color:#ef4444; margin:0 0 10px;">CometJacking</h4>
          <p style="font-size:0.8rem; opacity:0.8;">Vulnerabilidad de exfiltración de cookies. <br><b>Defensa:</b> Sesiones aisladas y actualizaciones semanales.</p>
        </div>
        <div style="background:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; padding:20px; border-radius:16px;">
          <h4 style="color:#f59e0b; margin:0 0 10px;">Prompt Injection</h4>
          <p style="font-size:0.8rem; opacity:0.8;">Instrucciones maliciosas ocultas en webs. <br><b>Defensa:</b> HITL (Confirmación humana obligatoria).</p>
        </div>
      </div>
    </div>
  </div>

  <div id="c-game" class="ag-content">
    <div class="sovereign-card animate-in">
      <h3><span class="icon">🎮</span> Desafío de Decisiones</h3>
      <div id="comet-quiz-container">
        <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:15px; border:1px dashed var(--c-primary);">
          <p id="c-quiz-scenario" style="font-size:1.1rem; margin-bottom:20px;"></p>
          <div id="c-quiz-options" style="display:grid; gap:15px;"></div>
        </div>
      </div>
    </div>
  </div>

  <div id="c-mission" class="ag-content">
    <div class="sovereign-card animate-in" style="border: 2px solid var(--c-primary);">
      <h3><span class="icon">🚀</span> Misión: Operación Delegación Total</h3>
      <p>Transforma un flujo de trabajo manual en una misión de agente.</p>
      <div class="mission-grid">
        <div class="mission-step">1. Identifica un problema de búsqueda multi-fuente.</div>
        <div class="mission-step">2. Diseña el prompt agéntico (Misión + Formato).</div>
        <div class="mission-step">3. Ejecuta y valida la trazabilidad de fuentes.</div>
      </div>
      <textarea id="comet-mission-input" class="premium-textarea" style="margin-top:20px; height:120px;" placeholder="Describe tu caso de uso corregido por Comet..."></textarea>
      <button class="btn-sov" style="width:100%; margin-top:20px;" onclick="window.submitCometMission()">✅ FINALIZAR Y RECLAMAR XP</button>
    </div>
  </div>

  <div class="module-nav" style="margin-top:40px;">
    <button class="sov-tab" data-goto="module-modelos-frontera">← Anterior</button>
    <button class="btn-sov" data-goto="module-19">Siguiente: Futuro →</button>
  </div>
</div>
    `;

    const moduleInstance = {
      init: function(app) {
        console.log('Comet Module Overhaul Applied [DNA v32.5]');
        const target = document.getElementById('module-bonus-comet');
        if (target) {
          target.innerHTML = fHTML;
          this.setupHandlers(target);
          this.initQuiz();
        }
      },
      setupHandlers: function(parent) {
        const tabs = parent.querySelectorAll('.sov-tab');
        const contents = parent.querySelectorAll('.ag-content');
        tabs.forEach(t => t.addEventListener('click', () => {
          if(!t.dataset.tab) return;
          tabs.forEach(x => x.classList.remove('active'));
          contents.forEach(x => x.classList.remove('active'));
          t.classList.add('active');
          const target = parent.querySelector('#' + t.dataset.tab);
          if (target) {
            target.classList.add('active');
            target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }));
      },
      initQuiz: function() {
        const scenarios = [
          {
            q: "Comet detecta un formulario de pago en una pestaña secundaria y pide permiso para autocompletar. ¿Cuál es la postura Soberana?",
            o: ["Delegar al 100% para ahorrar tiempo.", "Denegar: nunca delegar información financiera sensible a agentes web.", "Aceptar solo si la web tiene SSL."],
            a: 1,
            feedback: "¡Correcto! La soberanía implica proteger lo crítico."
          },
          {
            q: "Estás comparando 10 proveedores. ¿Cómo aseguras que el agente no esté 'inventando' datos?",
            o: ["Confiar en el modelo Pro interno.", "Solicitar citas y enlaces directos a las fuentes para validación humana.", "Cruzar la info con otro navegador normal."],
            a: 1,
            feedback: "¡Exacto! La trazabilidad es el antídoto contra la alucinación."
          }
        ];
        let current = 0;
        const render = () => {
          const container = document.getElementById('c-quiz-options');
          const scenarioEl = document.getElementById('c-quiz-scenario');
          if (!container) return;
          
          if (current >= scenarios.length) {
            document.getElementById('comet-quiz-container').innerHTML = `
              <div style="text-align:center; padding:40px;">
                <div style="font-size:3rem;">🏆</div>
                <h4 style="color:var(--c-secondary); margin:15px 0;">Criterio Agéntico Validado</h4>
                <p>Has ganado +50 XP por demostrar madurez en delegación.</p>
              </div>`;
            if (window.app) window.app.addXP(50);
            return;
          }
          
          scenarioEl.innerText = scenarios[current].q;
          container.innerHTML = "";
          scenarios[current].o.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = "sov-tab";
            btn.style.width = "100%";
            btn.style.justifyContent = "flex-start";
            btn.style.textAlign = "left";
            btn.innerText = opt;
            btn.onclick = () => {
              if (i === scenarios[current].a) {
                window.showToast(scenarios[current].feedback, 'success');
                current++;
                render();
              } else {
                window.showToast("Riesgo detectado. Elige una opción más segura.", 'error');
              }
            };
            container.appendChild(btn);
          });
        };
        render();
      }
    };

    window.runCometLab = function(id) {
      const display = document.getElementById('comet-lab-display');
      if (!display) return;
      
      const labs = {
        1: [
          "> comet --mode fast-search --deep-research",
          "> analyzing query: 'best enterprise laptops 2025'...",
          "> searching: theverge.com, techradar.com, wirecutter.com",
          "> [AGENT] comparing battery life, performance and price...",
          "> [AGENT] report generated: logic/hardware_audit_v2.json",
          "✅ OPTIMAL HARDWARE IDENTIFIED."
        ],
        2: [
          "> init --miner-mode --background",
          "> targeting: cloud_service_providers_latency",
          "> scraping metrics from AWS, GCP, Azure...",
          "> [ALERT] obfuscation detected at Source A -> applying browser_proxy...",
          "> [AGENT] data extracted and normalized successfully.",
          "> synchronization active -> Google Sheets (KPI_Dashboard)",
          "✅ EXTRACTION COMPLETE."
        ],
        3: [
          "> spawn --orchestrator --n 3 agents",
          "> dispatcher: assigning sub-tasks...",
          "> agent-01 [GMAIL]: summarizing stakeholder feedback (8 threads)",
          "> agent-02 [RESEARCH]: competitors' pricing for Q3 2025",
          "> agent-03 [LINKEDIN]: scraping leads for 'Fintech CTO'",
          "> [SYNC] merging outputs into executive_brief_05.pdf",
          "✅ MULTI-AGENT SWARM FINISHED."
        ],
        4: [
          "> run --workflow cross-app-sync",
          "> connection established: COMET <-> NOTION <-> SLACK",
          "> action: extracting task list from webpage 'project-alpha'",
          "> action: creating database entries in Notion [Workspace_HQ]",
          "> action: notifying team in #ops-updates Slack channel",
          "> [STATUS] all web-actions confirmed and logged.",
          "✅ ECOSYSTEM SYNCED."
        ],
        5: [
          "> invoke vision-agent --target 'dashboard_ui'",
          "> capturing DOM snapshot & canvas state...",
          "> [VISION] analyzing UI hierarchy and visual regressions",
          "> [ALERT] button 'Submit' misaligned (expected padding: 10px, got: 5px)",
          "> extracting precise CSS selectors for failing elements...",
          "> generating visual diff report: ./reports/ui_diff_09.png",
          "✅ VISUAL AUDIT COMPLETE."
        ],
        6: [
          "> spawn auto-remediate --target 'gh-repo-frontend'",
          "> scanning issues... found #128: 'Memory leak in useEffect'",
          "> [AGENT] reading context mapping via AST...",
          "> proposing patch: extracting dependency array & clearing interval",
          "> running local tests: (45/45 passed)",
          "> [GIT] committing patch and opening Pull Request",
          "✅ AUTO-FIX PR MERGED."
        ]
      };

      let i = 0;
      display.innerHTML = '<div class="scanline"></div>';
      const typeNext = () => {
        if (i < labs[id].length) {
          const line = document.createElement('div');
          line.style.borderLeft = "2px solid var(--c-primary)";
          line.style.paddingLeft = "10px";
          line.style.marginBottom = "5px";
          line.style.opacity = "0";
          line.style.transform = "translateX(-10px)";
          line.style.transition = "all 0.3s ease";
          line.textContent = labs[id][i];
          display.appendChild(line);
          setTimeout(() => {
            line.style.opacity = "1";
            line.style.transform = "translateX(0)";
            display.scrollTop = display.scrollHeight;
            i++;
            setTimeout(typeNext, 400);
          }, 50);
        } else {
          if (typeof window.antShowConfetti === 'function') window.antShowConfetti();
        }
      };
      typeNext();
    };

    window.submitCometMission = function() {
      const input = document.getElementById('comet-mission-input');
      if (!input || input.value.length < 20) {
        window.showToast("La reflexión debe ser más profunda para validar el XP.", "error");
        return;
      }
      window.showToast("¡Misión Sincronizada! Badge: Explorador Comet obtenido 🪐", "success");
      if (typeof window.antShowConfetti === 'function') window.antShowConfetti();
    };

    window.GuiaModules['module-bonus-comet'] = moduleInstance;
    return moduleInstance;
})();
