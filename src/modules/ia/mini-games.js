window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['mini-games'] = window.GuiaModules['module-20'] = (function() {
  const modules = {
    'module-20': `
      <div class="m20-glory-box animate-in">
        <div style="font-size:4rem;margin-bottom:10px;text-shadow: 0 0 20px rgba(255,255,255,0.5);">👑</div>
        <h1 style="font-size:2.5rem;margin:0 0 10px;color:#fff;text-transform:uppercase;letter-spacing:2px;">Centro de Excelencia Soberana</h1>
        <p style="color:#cbd5e1;max-width:600px;margin:0 auto 30px;line-height:1.6;font-size:1.1rem;">
          Felicidades. Has completado la ruta técnica de la Guía IA. Esta es tu zona de certificación, práctica avanzada y ranking global.
        </p>

        <div class="ag-tabs game-tabs" style="margin-bottom:40px; justify-content:center;">
          <button class="tab-btn active" data-tab="m20-hall">🏆 Hall of Fame</button>
          <button class="tab-btn" data-tab="m20-games">🎮 Juegos de Poder</button>
          <button class="tab-btn" data-tab="m20-report-tab">🧭 Reporte Final</button>
        </div>

        <!-- TAB 1: HALL OF FAME -->
        <div id="m20-hall" class="ag-content active">
          <div class="preparation-step" style="background: rgba(234,179,8,0.1); border: 1px solid #eab308; padding: 15px; border-radius: 10px; margin: 0 auto 30px; border-left: 4px solid #eab308; max-width: 500px; text-align: left;">
            <h4 style="margin-top: 0; color: #eab308; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">📜 Tu Grado Ético</h4>
            <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Descarga tu certificado y verifica tu posición en el ranking de la entidad.</p>
          </div>

          <div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap;">
            <div class="m20-stat">
              <div class="m20-stat-num" id="final-total-xp">2850</div>
              <div class="m20-stat-label">Puntos Totales</div>
            </div>
            <div class="m20-stat">
              <div class="m20-stat-num" id="final-modules-done">0/21</div>
              <div class="m20-stat-label">Módulos</div>
            </div>
            <div class="m20-stat">
              <div class="m20-stat-num" id="m20-user-score">0 XP</div>
              <div class="m20-stat-label">Dominio</div>
            </div>
          </div>

          <div style="margin-top:40px;">
            <button class="gl-btn gl-btn-primary glow-btn" style="font-size:1.2rem;padding:20px 50px;font-weight:800;letter-spacing:1px;" onclick="window.m20DownloadCert()">
              📜 GENERAR CERTIFICADO DIGITAL
            </button>
          </div>

          <div class="section-card animate-in" style="margin-top:50px; text-align:left;">
            <h3><span class="icon">🏆</span> Ranking de Soberanía (Nacional)</h3>
            <div class="m20-leaderboard" id="m20-leaderboard-container">
              <div style="padding:40px; text-align:center; color:#94a3b8;">
                <div class="loading-spinner" style="margin-bottom:15px; font-size:2rem;">🧬</div>
                Sincronizando con el Registro Soberano...
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: GAMES -->
        <div id="m20-games" class="ag-content">
          <div class="m20-games-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:25px; text-align:left;">
            <div id="m20-battle-container"></div>
            <div id="m20-detective-container"></div>
            <div id="m20-dna-container"></div>
          </div>
        </div>

        <!-- TAB 3: REPORT -->
        <div id="m20-report-tab" class="ag-content">
          <div class="section-card" style="text-align:left;">
            <h3><span class="icon">🧭</span> Mapa de Competencias Adquiridas</h3>
            <div class="m20-report-grid">
              <div class="m20-report-card">
                <h4>Fortalezas</h4>
                <div id="m20-strongest"></div>
              </div>
              <div class="m20-report-card">
                <h4>A Reforzar</h4>
                <div id="m20-weakest"></div>
              </div>
              <div class="m20-report-card">
                <h4>Repaso</h4>
                <div id="m20-review" class="m20-review-actions"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  };

  class GuiaIAGames {
    constructor() {
      this.games = {
        promptBattle: {
          id: 'prompt-battle',
          title: '⚔️ Prompt Battle: El Duelo Final',
          description: 'Demuestra tu mando institucional mejorando prompts deficientes.',
          enemies: [
            {
              name: 'Chaos Lord (Oficina)',
              badPrompt: 'Hazme un resumen de la ley de presupuesto.',
              requirements: ['actúa', 'eres', 'como', 'analista', 'experto'],
              solutionHint: 'Empieza con "Actúa como analista..." o "Como experto en finanzas..."'
            }
          ]
        },
        iaDetective: {
          id: 'ia-detective',
          title: '🕵️ IA Detective: Caza-Alucinaciones',
          description: 'Identifica datos falsos en reportes oficiales.',
          cases: [
            {
              text: 'La Circular 003 de 2024 obliga a todos los funcionarios a tomar 5 litros de café antes de las 8am.',
              hallucination: '5 litros de café',
              feedback: '¡Exacto! Esa instrucción es absurda y es una alucinación de datos.'
            }
          ]
        },
        dnaAdministrativo: {
          id: 'dna-admin',
          title: '🧬 DNA Administrativo: Ciclo de Vida',
          description: 'Ordena la ejecución de un proceso público inteligente.',
          challenges: [
            {
              title: 'Adquisición de Laptops con IA',
              steps: [
                { id: 'p', label: 'PLANNING: Definir especificaciones técnicas y presupuesto.', type: 'plan' },
                { id: 'e', label: 'EXECUTION: Abrir licitación y evaluar proveedores.', type: 'exec' },
                { id: 'v', label: 'VERIFICATION: Verificar entrega y rendimiento de hardware.', type: 'verif' }
              ]
            }
          ]
        }
      };
    }

    initPromptBattle(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const enemy = this.games.promptBattle.enemies[0];
      container.innerHTML = `
        <div class="game-card glass-card animate-in" style="padding:20px; border:1px solid rgba(255,255,255,0.1); border-radius:16px; background:rgba(255,255,255,0.02);">
          <div style="font-weight:800; color:#818cf8; margin-bottom:15px; display:flex; align-items:center; gap:8px;">⚔️ PROMPT BATTLE</div>
          <div style="background:rgba(239,68,68,0.1); padding:12px; border-radius:8px; margin-bottom:15px; font-size:0.85rem; border-left:3px solid #ef4444;">
            <strong>Misión:</strong> Mejora el prompt: "${enemy.badPrompt}"
          </div>
          <textarea id="battle-input-m20" class="premium-textarea" placeholder="Escribe tu prompt mejorado aquí..." style="height:100px; margin-bottom:15px;"></textarea>
          <button class="gl-btn gl-btn-primary small" style="width:100%;" onclick="window.guiaIAGames.checkBattle()">LANZAR ATAQUE LÓGICO</button>
          <div id="battle-feedback-m20" style="margin-top:10px; font-size:0.85rem;"></div>
        </div>
      `;
    }

    checkBattle() {
      const input = document.getElementById('battle-input-m20').value.toLowerCase();
      const fb = document.getElementById('battle-feedback-m20');
      let score = 0;
      ['actúa', 'eres', 'como', 'analista', 'experto'].forEach(req => { if (input.includes(req)) score++; });
      if (score >= 2) {
        fb.innerHTML = '<span style="color:#10b981;">✨ ¡Soberanía Demostrada! +100 XP.</span>';
        window.app?.addXP(100, 'Maestro del Prompt (M20)');
      } else {
        fb.innerHTML = '<span style="color:#ef4444;">❌ El prompt sigue siendo débil. Falta el ROL.</span>';
      }
    }

    initIADetective(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const c = this.games.iaDetective.cases[0];
      container.innerHTML = `
        <div class="game-card glass-card animate-in" style="padding:20px; border:1px solid rgba(255,255,255,0.1); border-radius:16px; background:rgba(255,255,255,0.02);">
          <div style="font-weight:800; color:#22d3ee; margin-bottom:15px;">🕵️ IA DETECTIVE</div>
          <p style="font-size:0.85rem; color:#94a3b8;">${c.text}</p>
          <button class="gl-btn small" style="margin-right:10px;" onclick="window.guiaIAGames.checkDetective(true)">Es Alucinación</button>
          <button class="gl-btn small" onclick="window.guiaIAGames.checkDetective(false)">Es Real</button>
          <div id="det-feedback-m20" style="margin-top:10px; font-size:0.85rem;"></div>
        </div>
      `;
    }

    checkDetective(isHallucination) {
      const fb = document.getElementById('det-feedback-m20');
      if (isHallucination) {
        fb.innerHTML = '<span style="color:#10b981;">🔍 ¡Correcto! Sabes detectar inconsistencias. +50 XP.</span>';
        window.app?.addXP(50, 'Auditor de Verdad (M20)');
      } else {
        fb.innerHTML = '<span style="color:#ef4444;">❌ Error de verificación. Analiza bien el texto.</span>';
      }
    }

    initDNAAdministrativo(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = `
        <div class="game-card glass-card animate-in" style="padding:20px; border:1px solid rgba(255,255,255,0.1); border-radius:16px; background:rgba(255,255,255,0.02);">
          <div style="font-weight:800; color:#fbbf24; margin-bottom:15px;">🧬 DNA ADMIN</div>
          <p style="font-size:0.85rem; color:#94a3b8;">Fase actual: Ejecución de Procesos.</p>
          <div style="display:flex; gap:8px;">
            <button class="gl-btn small" onclick="window.showToast('Planning OK', 'success')">Plan</button>
            <button class="gl-btn small" onclick="window.showToast('Execution OK', 'success')">Exec</button>
            <button class="gl-btn small" onclick="window.showToast('Verification OK', 'success')">Verif</button>
          </div>
        </div>
      `;
    }
  }

  window.guiaIAGames = new GuiaIAGames();

  // --- Certification Logic ---
  window.m20DownloadCert = function() {
    window.showToast('Generando Certificado...', 'success');
    typeof window.antShowConfetti === 'function' && window.antShowConfetti();
    setTimeout(() => {
      const userName = localStorage.getItem('guia-ia-username') || 'Funcionario Elite';
      const xp = window.app?.xp || 2850;
      const cert = `<html><body style="background:#0f172a; color:#fff; font-family:'Outfit', sans-serif; display:flex; align-items:center; justify-content:center; min-height:100vh; text-align:center; padding:50px;">
        <div style="border:2px solid #818cf8; padding:60px; border-radius:24px; max-width:600px; background:rgba(255,255,255,0.02);">
          <div style="font-size:0.7rem; color:#818cf8; text-transform:uppercase; letter-spacing:2px; margin-bottom:20px;">Antigravity Systems · Certificación Oficial</div>
          <h1 style="font-size:2.5rem; margin-bottom:10px;">CERTIFICADO DE COMPETENCIA IA</h1>
          <p style="color:#94a3b8;">Se otorga a:</p>
          <h2 style="font-size:2.2rem; color:#f8fafc; margin:20px 0;">${userName}</h2>
          <p style="margin-bottom:30px; line-height:1.6;">Por completar exitosamente los 20 módulos del programa de Inteligencia Artificial aplicada al sector público.</p>
          <div style="font-size:1.5rem; font-weight:800; color:#818cf8;">${xp} XP ACUMULADOS</div>
          <div style="margin-top:40px; color:#475569; font-size:0.8rem;">Emitido el ${new Date().toLocaleDateString()}</div>
        </div>
      </body></html>`;
      const win = window.open('', '_blank');
      if (win) { win.document.write(cert); win.document.close(); }
      else window.showToast('Habilita las ventanas emergentes', 'error');
    }, 1000);
  };

  const m20Updater = setInterval(() => {
    const xpEl = document.getElementById('final-total-xp');
    const appState = window.app || window.app?.state;
    if (xpEl && appState && appState.isInitialSyncComplete !== false) {
      const currentXP = appState.xp || 0;
      xpEl.innerText = currentXP;
      if (document.getElementById('m20-user-score')) document.getElementById('m20-user-score').innerText = currentXP + ' XP';
      if (document.getElementById('final-modules-done')) {
        const done = appState.completedModules?.size || appState.state?.completedModules?.length || 0;
        document.getElementById('final-modules-done').innerText = done + '/21';
      }
      if (typeof window.renderCompetencyReport === 'function' && document.getElementById('m20-strongest')) {
        window.renderCompetencyReport();
      }
    }
  }, 2000);

  // Injection Logic
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  return {
    init: function(app) {
      console.log('Module 20 (Consolidated) Initialized');
      if (document.getElementById('m20-leaderboard-container')) {
        window.renderSovereignRanking?.();
      }
      
      // Initialize games
      window.guiaIAGames.initPromptBattle('m20-battle-container');
      window.guiaIAGames.initIADetective('m20-detective-container');
      window.guiaIAGames.initDNAAdministrativo('m20-dna-container');

      // Tab switching
      const container = document.getElementById('module-20');
      if (container) {
        container.querySelectorAll('.tab-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            container.querySelectorAll('.ag-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId)?.classList.add('active');
          });
        });
      }
    }
  };
})();