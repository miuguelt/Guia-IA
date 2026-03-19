/* ============================================
   GUÍA INTERACTIVA DE IA - GUÍA GENERAL
   Application Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  window.app = new GuiaIA();
  window.app.init();
});

class GuiaIA {
  constructor() {
    this.currentModule = 'welcome';
    this.completedModules = new Set();
    this.quizScores = {};
    this.xp = 0;
    this.level = 1;
    this.STORAGE_KEY = 'guia-ia-general';
    this.XP_PER_MODULE = 100;
    this.XP_PER_QUIZ = 50;
    this.modulesRegistry = {
      'module-1': 'src/modules/sena/guia-ia/modules-1-5.js',
      'module-2': 'src/modules/sena/guia-ia/modules-1-5.js',
      'module-3': 'src/modules/sena/guia-ia/modules-1-5.js',
      'module-4': 'src/modules/sena/guia-ia/modules-1-5.js',
      'module-5': 'src/modules/sena/guia-ia/modules-1-5.js',
      'module-6': 'src/modules/sena/guia-ia/modules-6-7.js',
      'module-7': 'src/modules/sena/guia-ia/modules-6-7.js',
      'module-8': 'src/modules/sena/guia-ia/modules-8-10.js',
      'module-9': 'src/modules/sena/guia-ia/modules-8-10.js',
      'module-10': 'src/modules/sena/guia-ia/modules-8-10.js',
      'module-11': 'src/modules/sena/guia-ia/modules-11-12.js',
      'module-12': 'src/modules/sena/guia-ia/modules-11-12.js',
      'module-13': 'src/modules/sena/guia-ia/modules-13-15.js',
      'module-14': 'src/modules/sena/guia-ia/modules-13-15.js',
      'module-15': 'src/modules/sena/guia-ia/modules-13-15.js',
      'module-16': 'src/modules/sena/guia-ia/modules-16-18.js',
      'module-17': 'src/modules/sena/guia-ia/modules-16-18.js',
      'module-18': 'src/modules/sena/guia-ia/modules-16-18.js',
      'module-19': 'src/modules/sena/guia-ia/modules-19-20.js',
      'module-20': 'src/modules/sena/guia-ia/modules-19-20.js',
      'module-21': 'src/modules/sena/guia-ia/module-final.js',
      'module-antigravity': 'src/modules/ia/module-antigravity.js',
      'module-gemini-productivity': 'src/modules/ia/module-gemini-productivity.js',
      'module-teams-meet': 'src/modules/tools/module-teams-meet.js',
      'module-manus': 'src/modules/ia/module-manus.js',
      'module-deepseek': 'src/modules/ia/module-deepseek.js',
      'module-notebooklm': 'src/modules/ia/module-notebooklm.js',
      'module-multimedia-pro': 'src/modules/ia/module-multimedia-pro.js',
      'module-notion': 'src/modules/ia/module-notion.js',
      'module-power-automate': 'src/modules/tools/module-power-automate.js',
      'mini-games': 'src/modules/ia/mini-games.js'
    };
    this.moduleInstances = {}; // New: Store scoped module instances
  }

  async init() {
    // 0. Import Gamification Engine
    try {
      const { gameEngine } = await import('../core/gamification-engine.js');
      this.gameEngine = gameEngine;
    } catch (e) {
      console.error('Error loading GamificationEngine:', e);
    }

    // 1. Initialize core system dependencies (with error handling)
    try {
      this.progressManager = (await import('../core/progress-manager.js')).progressManager;
      this.loadProgress();
    } catch (e) {
      console.error('Error loading ProgressManager:', e);
    }

    // 2. Load dynamic modules
    try {
      await this.loadAllModules();
    } catch (e) {
      console.error('Error loading modules:', e);
    }

    // 3. Setup UI components and event listeners
    this.setupMobileMenu();
    this.setupThemeToggle();
    this.setupNavigation();
    this.setupSearch();
    this.setupScrollProgress();
    this.setupScrollTop();
    this.setupUserProfile();
    this.setupAccordions();
    this.setupTabs();
    this.setupQuizzes();
    this.setupCopyButtons();
    this.setupScrollAnimations();
    this.setupCompleteButtons();
    this.setupSandbox();
    this.setupModule2Builder();
    this.setupCertificate();
    this.setupWorkflowInteractivity();
    this.setupToolRecommender();
    this.setupToolCards();
    this.updateGlobalProgress();
    this.setupProgressiveLocking();
    this.updateXPDashboard();

    // 4. Setup specialization and theme
    this.setupSpecialization();
    this.setupModule2Builder();

    // 5. Setup games observers
    this.setupGamesObservers();

    // 5. Initial navigation
    this.navigateTo(this.currentModule);
  }

  setupGamesObservers() {
    const observer = new MutationObserver(() => {
      // Prompt Battle in Module 2
      const mod2 = document.getElementById('module-2');
      if (mod2 && mod2.classList.contains('active') && !document.getElementById('prompt-battle-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'prompt-battle-wrapper';
        const container = mod2.querySelector('.section-card:last-of-type') || mod2.querySelector('.section-card') || mod2;
        if (container) {
            container.appendChild(wrapper);
            if (window.guiaIAGames && typeof window.guiaIAGames.initPromptBattle === 'function') {
                window.guiaIAGames.initPromptBattle('prompt-battle-wrapper');
            }
        }
      }

      // IA Detective in Module 8 is now integrated directly in the module-8 template logic
      // to avoid race conditions and double-initialization.
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  }

  setupProgressiveLocking() {
      // Re-run whenever progress changes
      window.addEventListener('progressUpdated', () => {
          this.updateNavLockState();
      });
      this.updateNavLockState();
  }
  updateNavLockState() {
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
          const moduleId = item.dataset.module;
          const isCompleted = this.completedModules.has(moduleId);
          
          item.classList.toggle('uncompleted-hint', !isCompleted);
          const icon = item.querySelector('.nav-icon');
          if (icon) {
              if (isCompleted) {
                  icon.classList.add('icon-checked');
              } else {
                  icon.classList.remove('icon-checked');
              }
          }
      });
      this.enforceSystemicLocking();
  }

  enforceSystemicLocking() {
      // Dynamic locking of modules based on progression
      const modules = document.querySelectorAll('.module');
      modules.forEach(mod => {
          const prereqIds = mod.dataset.prereqs ? mod.dataset.prereqs.split(',') : [];
          const isLocked = prereqIds.length > 0 && !prereqIds.every(id => this.completedModules.has(id.trim()));
          
          if (isLocked) {
              mod.classList.add('module-locked');
              // Ensure overlay exists
              if (!mod.querySelector('.module-lock-overlay')) {
                  const overlay = document.createElement('div');
                  overlay.className = 'module-lock-overlay';
                  overlay.innerHTML = `
                      <div class="lock-icon">🔒</div>
                      <div class="lock-message">MÓDULO SOBERANO PROTEGIDO</div>
                      <div class="lock-hint">Completa los protocolos anteriores para desbloquear este acceso.</div>
                      <button class="gl-btn gl-btn-primary gl-btn-lux small-btn" onclick="window.app.navigateTo('welcome')">Revisar Progreso</button>
                  `;
                  mod.appendChild(overlay);
              }
          } else {
              mod.classList.remove('module-locked');
              const overlay = mod.querySelector('.module-lock-overlay');
              if (overlay) overlay.remove();
          }
      });
  }

  async loadAllModules() {
    const loadPromises = Object.keys(this.modulesRegistry).map(id => this.loadModuleDynamic(id));
    await Promise.all(loadPromises);
    console.log('All dynamic modules loaded.');
  }

  // ── Scroll Progress ──
  setupScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }
  // ── Scroll Top Button ──
  setupScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  // ── Persistence ──
  loadProgress() {
    try {
      const data = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
      if (data) {
        this.completedModules = new Set(data.completed || []);
        this.currentModule = data.currentModule || 'welcome';
        this.quizScores = data.quizScores || {};
        this.xp = data.xp || 0;
        this.level = data.level || 1;
        if (data.theme) document.documentElement.setAttribute('data-theme', data.theme);
      }
    } catch (e) {
      console.log('No saved progress found.');
    }
  }

  saveProgress() {
    const data = {
      completed: [...this.completedModules],
      currentModule: this.currentModule,
      quizScores: this.quizScores,
      xp: this.xp,
      level: this.level,
      theme: document.documentElement.getAttribute('data-theme') || 'dark'
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  // ── Gamification ──
  addXP(amount) {
    this.xp += amount;
    this.showToast(`+${amount} XP ganado ✨`, 'success');
    this.checkLevelUp();
    this.updateXPDashboard();
    this.saveProgress();
    this.syncLeaderboard();
  }

  async syncLeaderboard() {
    const name = localStorage.getItem('guia-ia-username') || this.generateSovereignName();
    const data = {
      name: name,
      xp: this.xp,
      title: document.getElementById('levelName')?.textContent || 'Básico',
      avatar: this.xp > 5000 ? '🐉' : (this.xp > 1000 ? '⚡' : '💡'),
      entity: this.specialization === 'institucional' ? 'Regional SENA' : 'Corporativo'
    };

    try {
      const resp = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (resp.ok) {
        const result = await resp.json();
        if (result.name && !localStorage.getItem('guia-ia-username')) {
            localStorage.setItem('guia-ia-username', result.name);
            const nameInput = document.getElementById('userNameProfile');
            if (nameInput) nameInput.value = result.name;
        }
        console.log('🧬 Sovereign Sync Complete');
      }
    } catch (e) {
      console.warn('Offline Mode: Sync deferred');
    }
  }

  generateSovereignName() {
    const prefixes = ["Estratega", "Operador", "Auditor", "Visionario", "Analista"];
    const roles = ["Soberano", "de Élite", "Antigravity", "Céntico", "Arcano"];
    const entities = ["Nodo Central", "Regional SENA", "Misión IA", "Alfa", "Beta"];
    
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const r = roles[Math.floor(Math.random() * roles.length)];
    const e = entities[Math.floor(Math.random() * entities.length)];
    
    return `${p} ${r} (${e})`;
  }

  checkLevelUp() {
    const nextLevelXP = this.level * 500;
    if (this.xp >= nextLevelXP) {
      this.level++;
      if (this.gameEngine) this.gameEngine.spawnLevelUpEffect();
      this.triggerLevelUpEffect();
    }
  }

  triggerLevelUpEffect() {
    const badge = document.getElementById('levelName');
    if (badge) {
      badge.classList.add('level-up-anim');
      setTimeout(() => badge.classList.remove('level-up-anim'), 1000);
    }
    // Optional: play sound or show confetti (simulated with CSS pulse)
  }

  updateXPDashboard() {
    const xpFill = document.getElementById('xpBarFill');
    const xpText = document.getElementById('xpText');
    const levelNum = document.getElementById('levelNum');
    const levelName = document.getElementById('levelName');

    const nextLevelXP = this.level * 500;
    const prevLevelXP = (this.level - 1) * 500;
    const progress = ((this.xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;

    if (xpFill) xpFill.style.width = Math.min(100, progress) + '%';
    if (xpText) xpText.textContent = `${this.xp} / ${nextLevelXP} XP`;
    if (levelNum) levelNum.textContent = `Nivel ${this.level}`;

    if (levelName) {
      levelName.className = 'xp-level-badge'; // Reset
      if (this.level < 3) {
        levelName.textContent = 'Básico';
        levelName.classList.add('level-basic');
      } else if (this.level < 6) {
        levelName.textContent = 'Intermedio';
        levelName.classList.add('level-inter');
      } else if (this.level < 10) {
        levelName.textContent = 'Avanzado';
        levelName.classList.add('level-adv');
      } else {
        levelName.textContent = 'Experto';
        levelName.classList.add('level-exp');
      }

      // 🎖️ NEW: Bio-Specialization Medals
      const medalContainer = document.getElementById('medalContainer') || this.createMedalContainer();
      if (medalContainer) {
          const hasAlcaldiaFocus = document.body.innerText.includes('Alcaldía') && this.completedModules.size > 10;
          const hasGeneralFocus = this.completedModules.size > 15;

          if (hasAlcaldiaFocus && !document.getElementById('medal-institucional')) {
              this.addMedal(medalContainer, '🏛️', 'Estratega Institucional', 'medal-institucional');
          }
          if (hasGeneralFocus && !document.getElementById('medal-empresarial')) {
              this.addMedal(medalContainer, '💼', 'Líder Empresarial', 'medal-empresarial');
          }
      }
    }
  }

  createMedalContainer() {
      const parent = document.querySelector('.xp-dashboard');
      if (!parent) return null;
      const container = document.createElement('div');
      container.id = 'medalContainer';
      container.className = 'medal-container-special';
      container.style.cssText = 'display: flex; gap: 5px; margin-top: 10px; flex-wrap: wrap;';
      parent.appendChild(container);
      return container;
  }

  addMedal(container, emoji, title, id) {
      const medal = document.createElement('div');
      medal.id = id;
      medal.className = 'special-medal animate-in visible';
      medal.title = title;
      medal.innerHTML = `<span style="font-size: 1.2rem;">${emoji}</span>`;
      medal.style.cssText = `
          background: rgba(var(--primary-rgb), 0.2);
          border: 1px solid var(--primary);
          padding: 5px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse-gold 2s infinite;
      `;
      container.appendChild(medal);
      this.showToast(`¡Medalla Ganada: ${title}!`, 'success');
  }

  // ── Navigation ──
  setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.dataset.module;
        if (target) this.navigateTo(target);
      });
    });

    // Navigation buttons (prev/next)
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-goto]');
      if (btn && !btn.classList.contains('nav-item')) { // Avoid double triggering for sidebar items
        this.navigateTo(btn.dataset.goto);
      }
    });

    // Hero start button
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.navigateTo('module-1'));
    }
  }

  navigateTo(moduleId) {
    // Navigation restricted only for certificate if not ready, but allowed if user wants to see it
    if (moduleId === 'certificate' && this.completedModules.size < 20) {
      console.log('Certificado aún no disponible, pero mostramos el avance.');
    }

    // Show advancement message if entering an uncompleted module
    if (moduleId !== 'welcome' && moduleId !== 'certificate' && !this.completedModules.has(moduleId)) {
        this.showToast(`Explorando: ${moduleId}. ¡Completa el reto para ganar XP!`, 'info');
    }

    // Hide all modules
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));

    // Show target module
    const target = document.getElementById(moduleId);
    if (target) {
      target.classList.add('active');
      this.currentModule = moduleId;

      // Update nav active state
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.module === moduleId);
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Close mobile sidebar
      this.closeMobileSidebar();

      // Trigger scroll animations
      setTimeout(() => this.triggerAnimations(), 100);
      // New: Initialize module if it has an init method and hasn't been initialized
      const moduleInstance = window.GuiaModules?.[moduleId];
      if (moduleInstance && typeof moduleInstance.init === 'function') {
        moduleInstance.init(this);
      }


      // Special handling for certificate
      if (moduleId === 'certificate') {
        this.generateCertificate();
      }

      // Dispatch event for other components to react
      window.dispatchEvent(new CustomEvent('moduleNavigated', { detail: { module: moduleId } }));
      
      this.saveProgress();
    }
  }

  async loadModuleDynamic(moduleId) {
    const path = this.modulesRegistry[moduleId];
    if (!path) return null;
    try {
      // Corrected path relative to src/js/app.js
      const module = await import(`../../${path}`);
      
      // Store in our local registry if it's a real ES module with exports
      if (Object.keys(module).length > 0) {
        this.moduleInstances[moduleId] = module;
      }
      
      // Automatic initialization for specific IA modules if they export init
      if (moduleId === 'module-notion' && module.initNotionModule) {
        module.initNotionModule();
      }
      
      return module;
    } catch (e) {
      console.error(`Error loading module ${moduleId} from ${path}`, e);
      return null;
    }
  }

  // ── Prompt Sandbox ──
  setupSandbox() {
    document.body.addEventListener('click', (e) => {
      const testBtn = e.target.closest('#testPromptBtn');
      const clearBtn = e.target.closest('#clearSandboxBtn');
      const applyBtn = e.target.closest('#applyOptimization');

      if (testBtn) {
        e.preventDefault();
        const input = document.getElementById('sandboxInput');
        const output = document.getElementById('sandboxOutput');
        const qualityBar = document.getElementById('promptQualityBar');
        const qualityValue = document.getElementById('promptQualityValue');
        
        if (!input || !output) return;

        const originalText = input.value.trim();
        if (!originalText) {
          window.showToast('Por favor escribe algo primero', 'warning');
          return;
        }

        // Prevent multiple simultaneous analysis
        if (testBtn.disabled) return;
        console.log('--- STARTING PROMPT ANALYSIS ---');
        testBtn.disabled = true;
        testBtn.classList.add('loading');

        // 🧠 Thinking Phase
        output.innerHTML = `
          <div class="thinking-process-premium animate-in visible">
            <div class="thinking-header">
              <span class="pulse-dot"></span>
              <span class="thinking-title">ANTIGRAVITY THOUGHTS</span>
            </div>
            <div class="thinking-steps">
              <div id="think-step-1" class="think-step-item active-step">> [SYNC] Analizando vectores semánticos...</div>
              <div id="think-step-2" class="think-step-item">> [CORE] Evaluando estructura CREA...</div>
              <div id="think-step-3" class="think-step-item">> [RISK] Escaneando ambigüedades...</div>
              <div id="think-step-4" class="think-step-item">> [SYNTH] Generando diagnóstico...</div>
            </div>
          </div>
        `;

        if (qualityBar) qualityBar.style.width = '0%';
        if (qualityValue) qualityValue.textContent = '0%';

        const timeline = [
            { id: 'think-step-2', delay: 300 },
            { id: 'think-step-3', delay: 600 },
            { id: 'think-step-4', delay: 900 }
        ];

        timeline.forEach(step => {
            setTimeout(() => {
                const el = document.getElementById(step.id);
                if (el) {
                    el.classList.add('active-step');
                    const stepNum = parseInt(step.id.split('-').pop());
                    const prev = document.getElementById('think-step-' + (stepNum - 1));
                    if (prev) prev.classList.add('completed-step');
                }
            }, step.delay);
        });

        setTimeout(() => {
          // IMPORTANT: Re-fetch element inside timeout to avoid writing to detached DOM if re-rendered
          const currentOutput = document.getElementById('sandboxOutput');
          const currentQualityBar = document.getElementById('promptQualityBar');
          const currentQualityValue = document.getElementById('promptQualityValue');
          
          if (testBtn) {
            testBtn.disabled = false;
            testBtn.classList.remove('loading');
          }

          if (!currentOutput) {
            console.error('CRITICAL: sandboxOutput not found for rendering results');
            return;
          }

          try {
            const result = this.analyzePromptSovereign(originalText);
            console.log('--- ANALYSIS COMPLETE ---', result);

            // Display Result with Premium Animation
            currentOutput.innerHTML = `
              <div class="analysis-result-premium animate-in visible">
                <div class="result-header">
                  <span class="status-badge ${result.score < 60 ? 'status-low' : (result.score < 100 ? 'status-mid' : 'status-high')}">
                    ${result.score < 60 ? 'Básico' : (result.score < 100 ? 'Intermedio' : 'Maestría')}
                  </span>
                  <h3>${result.score < 100 ? 'Diagnóstico del Copiloto' : '¡Perfecto Alquimista!'}</h3>
                </div>
                
                ${result.score < 100 ? `
                  <ul class="feedback-list">
                    ${result.feedback.map(f => `<li><span class="f-icon">⚠️</span> ${f}</li>`).join('')}
                  </ul>
                ` : `
                  <p class="success-msg">Tu prompt cumple con todos los vectores de la metodología CREA.</p>
                  <div class="xp-bonus-tag animate-bounce">+100 XP</div>
                `}

                <div class="optimized-prompt-box">
                  <div class="box-label">PROPUESTA DE OPTIMIZACIÓN:</div>
                  <pre id="optimizedText">${result.optimized}</pre>
                </div>
                
                <button class="gl-btn gl-btn-primary gl-btn-lux small-btn" id="applyOptimization" type="button" data-optimization="${result.optimized.replace(/"/g, '&quot;')}">
                  🪄 Inyectar Mejora Maestra
                </button>
              </div>
            `;

            if (currentQualityBar) {
              currentQualityBar.style.width = result.score + '%';
              currentQualityBar.style.background = result.score < 50 ? 'var(--danger)' : (result.score < 80 ? 'var(--warning)' : 'var(--success)');
            }
            if (currentQualityValue) currentQualityValue.textContent = result.score + '%';
            
            this.addXP(result.score >= 100 ? 100 : 25, 'Laboratorio de Prompts');
          } catch (err) {
            console.error('Prompt analysis failed:', err);
            currentOutput.innerHTML = '<div class="alert error">Error interno en el procesamiento.</div>';
          }
        }, 1200);
      }

      if (applyBtn) {
        e.preventDefault();
        const optimization = applyBtn.dataset.optimization;
        const input = document.getElementById('sandboxInput');
        if (input && optimization) {
          input.value = optimization;
          window.showToast('Mejora maestra inyectada ✨', 'success');
          // Visual feedback
          const bar = document.getElementById('promptQualityBar');
          const val = document.getElementById('promptQualityValue');
          if (bar) { bar.style.width = '100%'; bar.style.background = 'var(--success)'; }
          if (val) val.textContent = '100%';
          
          // Show optimized success state
          const currentOutput = document.getElementById('sandboxOutput');
          if (currentOutput) {
            currentOutput.innerHTML = `
              <div class="analysis-result-premium success-state animate-in visible">
                <div class="result-header">
                  <span class="status-badge status-high">OPTIMIZADO</span>
                  <h3>Estructura Aplicada</h3>
                </div>
                <p>Has inyectado los vectores de contexto y rol. Tu prompt ahora es de Nivel Maestro.</p>
                <div class="xp-bonus-tag animate-bounce">+50 XP</div>
              </div>
            `;
            this.addXP(50, 'Optimización de Prompt');
          }
        }
      }

      if (clearBtn) {
        e.preventDefault();
        const input = document.getElementById('sandboxInput');
        const output = document.getElementById('sandboxOutput');
        const qualityBar = document.getElementById('promptQualityBar');
        const qualityValue = document.getElementById('promptQualityValue');
        if (input) input.value = '';
        if (output) output.innerHTML = '<div class="empty-state-text">El resultado aparecerá aquí...</div>';
        if (qualityBar) qualityBar.style.width = '0%';
        if (qualityValue) qualityValue.textContent = '0%';
      }
    });
  }

  analyzePromptSovereign(promptText) {
    const text = promptText.toLowerCase();
    const criteria = {
      c: text.length > 40 || /oficina|entidad|departamento|situación|sector/i.test(text),
      r: /eres|actúa|experto|especialista|asistente|redactor/i.test(text),
      e: /necesito|tarea|haz|resume|crea|redacta|genera/i.test(text),
      a: /tabla|lista|formato|tono|puntos|markdown/i.test(text)
    };

    let score = 0;
    let feedback = [];
    if (criteria.c) score += 25; else feedback.push("Falta <b>Contexto</b>");
    if (criteria.r) score += 25; else feedback.push("Falta un <b>Rol</b>");
    if (criteria.e) score += 25; else feedback.push("Falta <b>Ejecución</b>");
    if (criteria.a) score += 25; else feedback.push("Falta <b>Acabado</b>");

    const spec = localStorage.getItem('guia-ia-specialization') || 'institucional';
    const role = spec === 'institucional' ? 'especialista en administración pública' : 'consultor estratégico';
    
    const optimized = `Actúa como un ${role}. 
Contexto: Sector público / Área administrativa. 
Tarea: ${promptText}. 
Instrucción: Genera una respuesta técnica y estructurada.`;

    return { score, feedback, optimized };
  }

  // ── Module 2 Builder ──
  setupModule2Builder() {
    const updateBuilder = () => {
      const spec = localStorage.getItem('guia-ia-specialization') || 'institucional';
      const rolSelect = document.getElementById('builder-rol');
      const taskSelect = document.getElementById('builder-task');
      const previewText = document.getElementById('prompt-preview-text');
      const titleEl = document.querySelector('#m2-lab-builder p');

      if (!rolSelect || !taskSelect || !previewText) return;

      if (titleEl) {
        titleEl.innerText = spec === 'institucional' 
          ? 'Selecciona las piezas para construir una instrucción poderosa diseñada para el sector público.' 
          : 'Selecciona las piezas para construir una instrucción poderosa diseñada para el mundo corporativo.';
      }

      const options = {
        institucional: {
          roles: [
            { val: "Eres un experto en redacción de actos administrativos", label: "Redactor Jurídico" },
            { val: "Actúa como un analista de datos de la oficina de planeación", label: "Analista de Planeación" },
            { val: "Eres un especialista en atención al ciudadano empático", label: "Líder de PQR" },
            { val: "Eres un estratega de comunicación institucional", label: "Comunicador Social" }
          ],
          tasks: [
            { val: "resume este informe de 50 páginas destacando los puntos críticos", label: "Resumir puntos críticos" },
            { val: "redacta una respuesta formal que explique por qué no se puede pavimentar esta semana", label: "Explicar retraso de obra" },
            { val: "crea una tabla comparativa entre el presupuesto 2023 y 2024", label: "Comparar presupuestos" },
            { val: "diseña un guion para un video institucional sobre el avance de metas", label: "Diseñar guion de video" }
          ]
        },
        empresarial: {
          roles: [
            { val: "Eres un estratega de marketing digital experto en ROI", label: "Growth Hacker" },
            { val: "Actúa como un analista financiero de alto nivel", label: "Director Financiero (CFO)" },
            { val: "Eres un experto en optimización de procesos industriales", label: "Gerente de Operaciones" },
            { val: "Actúa como un reclutador de talento tecnológico", label: "Talent Scout" }
          ],
          tasks: [
            { val: "crea una campaña de email marketing para aumentar conversiones", label: "Campaña de Conversión" },
            { val: "analiza este balance general y detecta fugas de capital", label: "Auditoría Financiera" },
            { val: "diseña un roadmap para automatizar el soporte al cliente", label: "Roadmap de Automatización" },
            { val: "redacta una descripción de cargo atractiva para un Desarrollador Senior", label: "Descripción de Vacante" }
          ]
        }
      };

      const current = options[spec] || options.institucional;
      rolSelect.innerHTML = current.roles.map(r => `<option value="${r.val}">${r.label}</option>`).join('');
      taskSelect.innerHTML = current.tasks.map(t => `<option value="${t.val}">${t.label}</option>`).join('');

      const updatePreview = () => {
        previewText.innerText = `${rolSelect.value} para ${taskSelect.value}.`;
      };

      rolSelect.onchange = updatePreview;
      taskSelect.onchange = updatePreview;
      updatePreview();
    };

    setTimeout(updateBuilder, 500);
    window.addEventListener('moduleNavigated', (e) => {
      if (e.detail.module === 'module-2') setTimeout(updateBuilder, 100);
    });
    window.addEventListener('specializationChanged', updateBuilder);
  }

  // ── Specialization ──
  setupSpecialization() {
    const modal = document.getElementById('professionModal');
    const institBtn = document.getElementById('chooseInstitucional');
    const empresBtn = document.getElementById('chooseEmpresarial');
    
    // Load saved specialization
    const savedSpec = localStorage.getItem('guia-ia-specialization');
    if (savedSpec) {
      this.applySpecialization(savedSpec);
    } else {
      // Show modal after a small delay for dramatic effect
      setTimeout(() => {
        if (modal) modal.classList.add('show');
      }, 1000);
    }

    const selectSpec = (spec) => {
      this.applySpecialization(spec);
      localStorage.setItem('guia-ia-specialization', spec);
      if (modal) modal.classList.remove('show');
      this.showToast(`Especialización activada: ${spec === 'institucional' ? 'Estratega Institucional' : 'Líder Empresarial'}`, 'success');
    };

    if (institBtn) institBtn.addEventListener('click', () => selectSpec('institucional'));
    if (empresBtn) empresBtn.addEventListener('click', () => selectSpec('empresarial'));
  }

  applySpecialization(spec) {
    document.body.classList.remove('theme-institucional', 'theme-empresarial');
    document.body.classList.add(`theme-${spec}`);
    this.specialization = spec;
    this.generateCertificate();
    window.dispatchEvent(new CustomEvent('specializationChanged', { detail: { specialization: spec } }));
  }

  // ── Certificate ──
  setupCertificate() {
    const downloadBtn = document.getElementById('downloadCertBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.showToast('Generando certificado premium...', 'info');
        setTimeout(() => window.print(), 500);
      });
    }
  }

  generateCertificate() {
    const nameCert = document.getElementById('userNameCert');
    const dateCert = document.getElementById('certDate');
    const certLogo = document.getElementById('certLogo');
    const certWatermark = document.getElementById('certWatermark');
    
    const savedName = localStorage.getItem('guia-ia-username') || 'PARTICIPANTE';
    const spec = this.specialization || 'institucional';
    
    if (nameCert) nameCert.textContent = savedName.toUpperCase();

    if (certLogo) {
      certLogo.textContent = spec === 'institucional' ? '🏛️ ESTRATEGIA INSTITUCIONAL' : '💼 ESTRATEGIA EMPRESARIAL';
    }
    
    if (certWatermark) {
      certWatermark.textContent = spec === 'institucional' ? 'INSTITUCIONAL' : 'EMPRESARIAL';
    }

    if (dateCert) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      dateCert.textContent = new Date().toLocaleDateString('es-ES', options);
    }
  }

  // ── Tool Cards ──
  setupToolCards() {
    document.body.addEventListener('click', (e) => {
      const card = e.target.closest('.tool-card');
      if (card) {
        const link = card.querySelector('.tool-link');
        // If clicking on the card but not directly on the link, click the link programsmatically
        if (link && !e.target.closest('a')) {
          window.open(link.href, link.getAttribute('target') || '_self');
        }
      }
    });
  }

  // ── User Profile ──
  setupUserProfile() {
    const nameInput = document.getElementById('userNameProfile');
    if (!nameInput) return;

    // Load initial
    const savedName = localStorage.getItem('guia-ia-username') || '';
    nameInput.value = savedName;

    nameInput.addEventListener('input', (e) => {
      const newName = e.target.value;
      localStorage.setItem('guia-ia-username', newName);
      this.generateCertificate();
      this.syncLeaderboard();
    });
  }

  // ── Search Logic ──
  setupSearch() {
    const searchInput = document.getElementById('moduleSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const navItems = document.querySelectorAll('.nav-item');
      const groups = document.querySelectorAll('.nav-group');

      navItems.forEach(item => {
        const label = item.querySelector('.nav-label').textContent.toLowerCase();
        const icon = item.querySelector('.nav-icon').textContent.toLowerCase();
        const matches = label.includes(term) || icon.includes(term);
        item.style.display = matches ? 'flex' : 'none';
      });

      // Hide groups if no items match
      groups.forEach(group => {
        const items = group.querySelectorAll('.nav-item');
        const hasVisible = Array.from(items).some(item => item.style.display !== 'none');
        group.style.display = hasVisible ? 'block' : 'none';
      });
    });
  }

  // ── Theme Toggle ──
  setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      toggle.textContent = next === 'light' ? '🌙' : '☀️';
      this.saveProgress();
    });

    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    toggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }

  // ── Mobile Menu ──
  setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show');
    });

    if (overlay) {
      overlay.addEventListener('click', () => this.closeMobileSidebar());
    }
  }

  closeMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  }

  // ── Accordions ──
  setupAccordions() {
    document.body.addEventListener('click', (e) => {
      const header = e.target.closest('.accordion-header');
      if (header) {
        const accordion = header.closest('.accordion');
        accordion.classList.toggle('open');
      }
    });
  }

  // ── Tabs ──
  setupTabs() {
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (btn) {
        const targetId = btn.dataset.tab;
        const module = btn.closest('.module');
        if (!module) return;

        // Toggle buttons in the same tab group
        const tabGroup = btn.closest('.ag-tabs') || btn.closest('.tabs');
        if (tabGroup) {
          tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Scroll to the top of the tab group so user doesn't get lost
          const yOffset = -80; // Account for fixed header
          const y = tabGroup.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }

        // Toggle panels in the module
        module.querySelectorAll('.ag-content, .tab-panel').forEach(p => {
          if (p.id === targetId) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      }
    });
  }

  // ── Module 20 Interactive Workflow (DEPRECATED - Moved to module-20.js) ──
  setupWorkflowInteractivity() {
    // Moved to src/modules/sena/guia-ia/module-20.js to improve modularity
  }

  // ── Quizzes ──
  setupQuizzes() {
    document.body.addEventListener('click', (e) => {
      const option = e.target.closest('.quiz-option');
      if (option) {
        const quiz = option.closest('.quiz-container');
        if (quiz.dataset.answered === 'true') return;

        const options = quiz.querySelectorAll('.quiz-option');
        options.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');

        const checkBtn = quiz.querySelector('.quiz-btn');
        if (checkBtn) checkBtn.disabled = false;
      }

      if (e.target.classList.contains('quiz-btn')) {
        const quiz = e.target.closest('.quiz-container');
        const selected = quiz.querySelector('.quiz-option.selected');
        if (!selected || quiz.dataset.answered === 'true') return;

        quiz.dataset.answered = 'true';
        const isCorrect = selected.dataset.value === quiz.dataset.correct;
        const feedback = quiz.querySelector('.quiz-feedback');
        const options = quiz.querySelectorAll('.quiz-option');

        options.forEach(o => {
          if (o.dataset.value === quiz.dataset.correct) o.classList.add('correct');
          else if (o.classList.contains('selected')) o.classList.add('incorrect');
        });

        if (feedback) {
          feedback.classList.add('show');
          feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
          feedback.innerHTML = (isCorrect ? '✅ ' : '❌ ') + (isCorrect ? quiz.dataset.correctMsg : quiz.dataset.incorrectMsg);
        }

        e.target.disabled = true;
        if (isCorrect) this.addXP(this.XP_PER_QUIZ);

        const quizId = quiz.dataset.quizId;
        if (quizId) {
          this.quizScores[quizId] = isCorrect ? 1 : 0;
          this.saveProgress();
        }
      }
    });
  }

  // ── Tool Recommender ──
  setupToolRecommender() {
    const data = {
      'pa': {
        title: '🌊 Microsoft Power Automate',
        desc: 'Al usar Office 365, esta es tu mejor opción. Puedes crear flujos que se activan cuando recibes un correo o guardas un archivo.',
        link: 'https://powerautomate.microsoft.com/'
      },
      'zap': {
        title: '⚡ Zapier',
        desc: 'Si necesitas conectar aplicaciones web rápidamente (como Gmail con Notion o Slack), Zapier es el más intuitivo del mercado.',
        link: 'https://zapier.com'
      },
      'mag': {
        title: '🧩 Magical',
        desc: 'Es una extensión de Chrome. Ideal si rellenas muchos formularios repetitivos; Magical "aprende" tus datos y los completa solo.',
        link: 'https://www.getmagical.com/'
      },
      'make': {
        title: '🔗 Make.com',
        desc: 'Para cuando necesites flujos muy complejos con muchas condiciones lógicas. Es visual y muy potente.',
        link: 'https://www.make.com/'
      }
    };

    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.rec-btn');
      if (btn) {
        const tool = btn.dataset.tool;
        const resultDiv = document.getElementById('recommender-result');
        const title = document.getElementById('rec-title');
        const desc = document.getElementById('rec-desc');
        const link = document.getElementById('rec-link');

        if (resultDiv && data[tool]) {
          title.innerHTML = data[tool].title;
          desc.innerHTML = data[tool].desc;
          if (link) link.href = data[tool].link;
          resultDiv.style.display = 'block';
          resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  // ── Copy Buttons ──
  setupCopyButtons() {
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.prompt-copy');
      if (btn) {
        const promptBlock = btn.closest('.prompt-block');
        const content = promptBlock.querySelector('.prompt-content');
        if (!content) return;

        navigator.clipboard.writeText(content.textContent.trim()).then(() => {
          btn.textContent = '✓ Copiado';
          setTimeout(() => btn.textContent = 'Copiar', 2000);
        });
      }
    });
  }

  // ── Complete Module Buttons ──
  setupCompleteButtons() {
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.complete-module-btn');
      if (btn) {
        const moduleId = btn.dataset.module;
        if (this.completedModules.has(moduleId)) {
          this.completedModules.delete(moduleId);
          btn.classList.remove('completed');
          btn.innerHTML = '☐ Marcar módulo como completado';
        } else {
          this.completedModules.add(moduleId);
          this.progressManager.markModuleCompleted(moduleId); // Sync with new manager
          btn.classList.add('completed');
          btn.innerHTML = '✅ Módulo completado';
          const xpReward = parseInt(btn.dataset.xp) || this.XP_PER_MODULE;
          this.addXP(xpReward);
          if (this.gameEngine) this.gameEngine.awardBadge(moduleId);
          this.triggerConfetti();
        }
        this.updateGlobalProgress();
        this.saveProgress();
      }
    });
  }

  triggerConfetti() {
    // Subtle completion effect: fewer particles, shorter burst, softer motion.
    const duration = 1800;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 5;
      this.spawnConfettiParticles(particleCount);
    }, 380);
  }

  spawnConfettiParticles(count) {
    const particles = ['•', '·', '✦'];
    const centerX = window.innerWidth * 0.58;
    const centerY = window.innerHeight * 0.7;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const driftX = (Math.random() - 0.5) * 120;
      const driftY = 120 + Math.random() * 140;
      el.textContent = particles[Math.floor(Math.random() * particles.length)];
      el.className = 'confetti-particle';
      el.style.left = `${centerX + (Math.random() - 0.5) * 260}px`;
      el.style.top = `${centerY + (Math.random() - 0.5) * 80}px`;
      el.style.transform = `translate3d(0, 0, 0) scale(${0.9 + Math.random() * 0.5})`;
      el.style.fontSize = `${8 + Math.random() * 8}px`;
      el.style.position = 'fixed';
      el.style.zIndex = '10001';
      el.style.pointerEvents = 'none';
      el.style.setProperty('--confetti-x', `${driftX}px`);
      el.style.setProperty('--confetti-y', `${-driftY}px`);
      el.style.animationDuration = `${1200 + Math.random() * 700}ms`;
      
      document.body.appendChild(el);
      
      const anim = el.animate([
        { transform: 'translate3d(0, 0, 0) scale(0.9)', opacity: 0 },
        { transform: `translate3d(${driftX * 0.35}px, ${-driftY * 0.35}px, 0) scale(1)`, opacity: 0.5, offset: 0.35 },
        { transform: `translate3d(${driftX}px, ${-driftY}px, 0) scale(0.96)`, opacity: 0 }
      ], {
        duration: 1200 + Math.random() * 700,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
      });

      anim.onfinish = () => el.remove();
    }
  }

  updateGlobalProgress() {
    const total = 20;
    const done = this.completedModules.size;
    const pct = Math.round((done / total) * 100);
    const fill = document.querySelector('.global-progress-fill');
    const text = document.querySelector('.global-progress-text');

    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = pct + '%';
  }

  // ── Scroll Animations ──
  setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
  }

  triggerAnimations() {
    const activeModule = document.querySelector('.module.active');
    if (!activeModule) return;
    activeModule.querySelectorAll('.animate-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }

  // ── Feedback ──
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container') || document.body;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 2rem;
        border-radius: var(--radius-md);
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid ${type === 'success' ? '#10b981' : 'rgba(255, 255, 255, 0.2)'};
        z-index: 10000;
        color: #fff;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        pointer-events: auto;
    `;
    
    const icon = type === 'success' ? '✅' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }
}

// Global Exposure
window.showToast = (msg, type) => {
    if (window.app) {
        window.app.showToast(msg, type);
    } else {
        const temp = new GuiaIA();
        temp.showToast(msg, type);
    }
};

window.antShowConfetti = function() {
    if (window.app) window.app.triggerConfetti();
};

/** ── Módulo 5: Navegación por Niveles ── */
window.m5ShowLevel = function(level) {
    document.querySelectorAll('.ag-content').forEach(d => {
        d.classList.remove('active');
    });
    const target = document.getElementById('m5-level-' + level);
    if (target) {
        target.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.querySelectorAll('.m5-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector('.m5-tab[data-level="' + level + '"]');
    if (activeTab && !activeTab.classList.contains('locked')) activeTab.classList.add('active');
};

window.m5UnlockAndGo = function(level) {
    const tab = document.querySelector('.m5-tab[data-level="' + level + '"]');
    if (tab) {
        tab.classList.remove('locked');
        tab.classList.add('unlocked');
    }
    const progressFill = document.getElementById('m5-progress-fill');
    const progressLabel = document.getElementById('m5-progress-label');
    const totalLevels = 5;
    const pct = Math.round(((level - 1) / totalLevels) * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = 'Nivel ' + level + ' de ' + totalLevels;
    window.m5ShowLevel(level);
};
