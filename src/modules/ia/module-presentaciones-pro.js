window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-presentaciones-pro'] = (function() {
/* ═══════════════════════════════════════════
   MÓDULO BONUS: IA para Presentaciones de Alto Impacto
   Versión "Director de Presentaciones" — Presentaciones Pro v1.0
   ═══════════════════════════════════════════ */

  console.log('[Presentaciones Pro] Módulo cargado y ejecutándose');

  // Variables globales del módulo
  let currentTab = 'tab-fundamentos';
  let userXP = 0;
  let userBadges = [];
  
  // Base de datos de herramientas
  const toolsDatabase = [
    { id: 'gamma', name: 'Gamma.app', category: 'slides', cost: 'freemium', score: 4.8, icon: '⚡', url: 'https://gamma.app' },
    { id: 'beautiful-ai', name: 'Beautiful.AI', category: 'slides', cost: 'premium', score: 4.6, icon: '💎', url: 'https://beautiful.ai' },
    { id: 'deckrobot', name: 'DeckRobot', category: 'slides', cost: 'empresarial', score: 4.2, icon: '🤖', url: 'https://deckrobot.com' },
    { id: 'chatgpt', name: 'ChatGPT', category: 'narrative', cost: 'freemium', score: 4.7, icon: '💬', url: 'https://chat.openai.com' },
    { id: 'claude', name: 'Claude', category: 'narrative', cost: 'freemium', score: 4.5, icon: '🧠', url: 'https://claude.ai' },
    { id: 'gemini', name: 'Gemini', category: 'narrative', cost: 'freemium', score: 4.3, icon: '🔷', url: 'https://gemini.google.com' },
    { id: 'dalle', name: 'DALL-E 3', category: 'design', cost: 'credits', score: 4.4, icon: '🖼️', url: 'https://openai.com/dall-e-3' },
    { id: 'midjourney', name: 'Midjourney', category: 'design', cost: 'subscription', score: 4.9, icon: '🎨', url: 'https://midjourney.com' },
    { id: 'canva-ai', name: 'Canva AI', category: 'design', cost: 'freemium', score: 4.2, icon: '✏️', url: 'https://canva.com' },
    { id: 'synthesia', name: 'Synthesia', category: 'avatars', cost: 'premium', score: 4.5, icon: '🎭', url: 'https://synthesia.io' },
    { id: 'heygen', name: 'HeyGen', category: 'avatars', cost: 'subscription', score: 4.3, icon: '📹', url: 'https://heygen.com' },
    { id: 'elevenlabs', name: 'ElevenLabs', category: 'avatars', cost: 'credits', score: 4.7, icon: '🎙️', url: 'https://elevenlabs.io' },
    { id: 'yoodli', name: 'Yoodli', category: 'coaching', cost: 'freemium', score: 4.4, icon: '🎯', url: 'https://yoodli.ai' },
    { id: 'poised', name: 'Poised', category: 'coaching', cost: 'subscription', score: 4.6, icon: '💼', url: 'https://poised.com' },
    { id: 'orai', name: 'Orai', category: 'coaching', cost: 'freemium', score: 4.2, icon: '🗣️', url: 'https://orai.com' }
  ];

  // Funciones del módulo
  function switchTab(tabId) {
    document.querySelectorAll('.ag-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    const tabContent = document.getElementById(tabId);
    if (tabContent) tabContent.classList.add('active');
    
    const tabButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (tabButton) tabButton.classList.add('active');
    
    currentTab = tabId;
    try { localStorage.setItem('presentaciones-pro-last-tab', tabId); } catch(e) {}
  }

  function addXP(points, reason) {
    userXP += points;
    if (window.app && window.app.addXP) window.app.addXP(points);
    if (window.showToast) window.showToast(`+${points} XP: ${reason}`, 'success');
    return userXP;
  }

  function unlockBadge(badgeName) {
    if (!userBadges.includes(badgeName)) {
      userBadges.push(badgeName);
      if (window.showToast) window.showToast(`🏆 Insignia desbloqueada: ${badgeName}`, 'success');
      return true;
    }
    return false;
  }

  // Generador de Prompts
  function generatePresentationPrompt() {
    const type = document.getElementById('prompt-type')?.value || 'executive';
    const audience = document.getElementById('prompt-audience')?.value || 'directivos';
    const duration = document.getElementById('prompt-duration')?.value || '15';
    const goal = document.getElementById('prompt-goal')?.value || 'informar y reportar avances';
    
    const templates = {
      executive: `Eres un experto en comunicación ejecutiva. Crea una presentación de ${duration} minutos para ${audience}. 
      Objetivo: ${goal}. 
      Incluye: 1) Contexto breve, 2) 3-5 puntos clave con datos, 3) Recomendaciones claras, 4) Llamado a acción.`,
      educational: `Eres un instructor experto. Diseña una presentación educativa de ${duration} minutos. 
      Para audiencia: ${audience}. Objetivo: ${goal}.
      Estructura: Introducción, Conceptos clave, Ejemplos prácticos, Ejercicio, Resumen.`,
      persuasive: `Eres un experto en persuasión. Crea una presentación convincente de ${duration} minutos. 
      Audiencia: ${audience}. Objetivo: ${goal}.
      Enfócate en: Problema, Solución, Beneficios, Pruebas, Llamado a acción.`
    };
    
    const prompt = templates[type] || templates.executive;
    const output = document.getElementById('prompt-output');
    if (output) {
      output.innerHTML = `<div style="background:#050a15;border:1px dashed #2563eb;border-radius:10px;padding:18px;margin-top:14px;font-size:0.85rem;color:#bfdbfe;line-height:1.6;">${prompt}</div>
      <button class="gl-btn" style="width:100%;margin-top:10px;" onclick="navigator.clipboard.writeText('${prompt.replace(/'/g, "\\'")}');window.showToast('Prompt copiado ✨','success');addXP(10,'Prompt copiado');">📋 Copiar Prompt</button>`;
    }
    
    addXP(20, 'Prompt generado');
    return prompt;
  }

  // Inicializar eventos
  function initTabEvents() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        switchTab(tabId);
      });
    });
    
    try {
      const lastTab = localStorage.getItem('presentaciones-pro-last-tab');
      if (lastTab && document.getElementById(lastTab)) switchTab(lastTab);
    } catch (e) {}
  }

  // Funciones del Comparador de Herramientas
  function filterTools() {
    const category = document.getElementById('tool-category').value;
    const cost = document.getElementById('tool-cost').value;
    const grid = document.getElementById('tools-grid');
    
    if (!grid) return;
    
    const filteredTools = toolsDatabase.filter(tool => {
      const categoryMatch = category === 'all' || tool.category === category;
      const costMatch = cost === 'all' || tool.cost === cost;
      return categoryMatch && costMatch;
    });
    
    grid.innerHTML = filteredTools.map(tool => `
      <div class="tool-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:15px; transition:all 0.3s;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.2rem;">${tool.icon}</span>
            <h4 style="margin:0; color:#fff;">${tool.name}</h4>
          </div>
          <span style="background:rgba(37,99,235,0.2); color:#60a5fa; padding:4px 8px; border-radius:6px; font-size:0.7rem; font-weight:bold;">${tool.score}/5</span>
        </div>
        <div style="margin-bottom:10px;">
          <span style="background:rgba(255,255,255,0.05); color:#cbd5e1; padding:3px 8px; border-radius:4px; font-size:0.7rem; margin-right:5px;">${tool.category}</span>
          <span style="background:rgba(255,255,255,0.05); color:#cbd5e1; padding:3px 8px; border-radius:4px; font-size:0.7rem;">${tool.cost}</span>
        </div>
        <p style="font-size:0.8rem; color:#94a3b8; margin:0 0 15px;">Herramienta especializada en ${tool.category === 'slides' ? 'diseño de diapositivas' : tool.category === 'narrative' ? 'narrativa y contenido' : tool.category === 'design' ? 'diseño visual' : tool.category === 'avatars' ? 'avatares y voz' : 'coaching de presentación'}.</p>
        <button class="gl-btn" style="width:100%;" onclick="window.open('${tool.url}', '_blank'); addXP(5, 'Herramienta explorada: ${tool.name}');">🔗 Visitar</button>
      </div>
    `).join('');
    
    if (filteredTools.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:#94a3b8;">No se encontraron herramientas con los filtros seleccionados.</div>';
    }
  }
  
  function resetFilters() {
    document.getElementById('tool-category').value = 'all';
    document.getElementById('tool-cost').value = 'all';
    filterTools();
    addXP(10, 'Filtros reiniciados');
  }
  
  function initToolsGrid() {
    const grid = document.getElementById('tools-grid');
    if (grid) {
      filterTools(); // Cargar todas las herramientas inicialmente
    }
  }
  
  // Funciones del Constructor de Presentaciones
  function generatePresentationPlan() {
    const type = document.getElementById('presentation-type').value;
    const duration = document.getElementById('presentation-duration').value;
    const audience = document.getElementById('presentation-audience').value;
    const goal = document.getElementById('presentation-goal').value || 'Informar y persuadir';
    
    const typeNames = {
      executive: 'Ejecutiva',
      educational: 'Educativa',
      persuasive: 'Persuasiva',
      pitch: 'Pitch',
      report: 'Reporte'
    };
    
    const audienceNames = {
      directivos: 'Directivos',
      equipo: 'Equipo',
      clientes: 'Clientes',
      estudiantes: 'Estudiantes',
      inversores: 'Inversores'
    };
    
    const plan = `
      <div style="background:rgba(37,99,235,0.05); border:1px solid rgba(37,99,235,0.2); border-radius:12px; padding:20px; margin-top:20px;">
        <h4 style="color:#60a5fa; margin-top:0;">📋 Plan Generado</h4>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
          <div>
            <h5 style="margin:0 0 5px; color:#cbd5e1; font-size:0.9rem;">Tipo</h5>
            <p style="margin:0; color:#fff; font-weight:bold;">${typeNames[type]}</p>
          </div>
          <div>
            <h5 style="margin:0 0 5px; color:#cbd5e1; font-size:0.9rem;">Duración</h5>
            <p style="margin:0; color:#fff; font-weight:bold;">${duration} minutos</p>
          </div>
          <div>
            <h5 style="margin:0 0 5px; color:#cbd5e1; font-size:0.9rem;">Audiencia</h5>
            <p style="margin:0; color:#fff; font-weight:bold;">${audienceNames[audience]}</p>
          </div>
        </div>
        <div style="margin-top:15px;">
          <h5 style="margin:0 0 5px; color:#cbd5e1; font-size:0.9rem;">Objetivo</h5>
          <p style="margin:0; color:#fff;">${goal}</p>
        </div>
        <div style="margin-top:20px;">
          <h5 style="margin:0 0 10px; color:#cbd5e1; font-size:0.9rem;">Recomendaciones de Herramientas</h5>
          <div style="display:flex; flex-wrap:wrap; gap:10px;">
            <span style="background:rgba(37,99,235,0.2); color:#60a5fa; padding:6px 12px; border-radius:20px; font-size:0.8rem;">Gamma.app</span>
            <span style="background:rgba(16,185,129,0.2); color:#34d399; padding:6px 12px; border-radius:20px; font-size:0.8rem;">ChatGPT</span>
            <span style="background:rgba(245,158,11,0.2); color:#fbbf24; padding:6px 12px; border-radius:20px; font-size:0.8rem;">DALL-E 3</span>
            <span style="background:rgba(139,92,246,0.2); color:#a78bfa; padding:6px 12px; border-radius:20px; font-size:0.8rem;">Yoodli</span>
          </div>
        </div>
        <button class="gl-btn gl-btn-primary" style="margin-top:20px; width:100%;" onclick="addXP(50, 'Plan de presentación generado'); this.disabled=true;">✅ Aplicar Plan (+50 XP)</button>
      </div>
    `;
    
    const output = document.getElementById('presentation-plan-output');
    if (output) {
      output.innerHTML = plan;
      output.style.display = 'block';
    }
    
    addXP(30, 'Plan generado');
  }
  
  // Funciones del Proyecto Final
  function startFinalProject() {
    const projectProgress = document.getElementById('project-progress');
    if (projectProgress) {
      projectProgress.innerHTML = `
        <div style="background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); border-radius:12px; padding:20px;">
          <h4 style="color:#34d399; margin-top:0;">🚀 Proyecto Final - Presentación Ejecutiva</h4>
          <p style="color:#cbd5e1;">Crea una presentación de 10 minutos para convencer a inversores. Sigue estos pasos y marca cada uno al completarlo:</p>
          
          <div id="project-checklist" style="margin-top:20px;">
            <div class="project-step" style="display:flex; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:8px; margin-bottom:10px;">
              <input type="checkbox" id="step1" onchange="updateProjectProgress()" style="margin-right:12px; width:18px; height:18px;">
              <div>
                <h5 style="margin:0 0 5px; color:#fff; font-size:0.9rem;">1. Generar narrativa con IA</h5>
                <p style="margin:0; color:#94a3b8; font-size:0.8rem;">Usa el Generador de Prompts para crear el guión de tu presentación.</p>
              </div>
            </div>
            
            <div class="project-step" style="display:flex; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:8px; margin-bottom:10px;">
              <input type="checkbox" id="step2" onchange="updateProjectProgress()" style="margin-right:12px; width:18px; height:18px;">
              <div>
                <h5 style="margin:0 0 5px; color:#fff; font-size:0.9rem;">2. Diseñar diapositivas</h5>
                <p style="margin:0; color:#94a3b8; font-size:0.8rem;">Usa Gamma.app o Beautiful.AI para crear 10-12 slides visuales.</p>
              </div>
            </div>
            
            <div class="project-step" style="display:flex; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:8px; margin-bottom:10px;">
              <input type="checkbox" id="step3" onchange="updateProjectProgress()" style="margin-right:12px; width:18px; height:18px;">
              <div>
                <h5 style="margin:0 0 5px; color:#fff; font-size:0.9rem;">3. Crear imágenes con IA</h5>
                <p style="margin:0; color:#94a3b8; font-size:0.8rem;">Genera al menos 2 imágenes personalizadas con DALL-E 3 o Midjourney.</p>
              </div>
            </div>
            
            <div class="project-step" style="display:flex; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:8px; margin-bottom:10px;">
              <input type="checkbox" id="step4" onchange="updateProjectProgress()" style="margin-right:12px; width:18px; height:18px;">
              <div>
                <h5 style="margin:0 0 5px; color:#fff; font-size:0.9rem;">4. Practicar entrega</h5>
                <p style="margin:0; color:#94a3b8; font-size:0.8rem;">Usa Yoodli o Poised para ensayar y recibir retroalimentación.</p>
              </div>
            </div>
            
            <div class="project-step" style="display:flex; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:8px; margin-bottom:10px;">
              <input type="checkbox" id="step5" onchange="updateProjectProgress()" style="margin-right:12px; width:18px; height:18px;">
              <div>
                <h5 style="margin:0 0 5px; color:#fff; font-size:0.9rem;">5. Preparar guión final</h5>
                <p style="margin:0; color:#94a3b8; font-size:0.8rem;">Escribe tu guión con notas de tiempo y transiciones.</p>
              </div>
            </div>
          </div>
          
          <div style="margin-top:25px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span style="color:#cbd5e1; font-size:0.9rem;">Progreso del proyecto:</span>
              <span style="color:#34d399; font-weight:bold;" id="project-progress-percent">0%</span>
            </div>
            <div style="height:10px; background:rgba(255,255,255,0.1); border-radius:5px; overflow:hidden;">
              <div id="project-progress-bar" style="width:0%; height:100%; background:#34d399; transition:width 0.5s;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:10px;">
              <span style="color:#94a3b8; font-size:0.8rem;"><span id="project-steps-completed">0</span>/5 pasos completados</span>
              <button class="gl-btn gl-btn-small" onclick="completeAllSteps()" style="padding:6px 12px; font-size:0.8rem;">✅ Marcar todos</button>
            </div>
          </div>
          
          <div style="margin-top:20px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
            <p style="color:#94a3b8; font-size:0.8rem; margin:0 0 10px;">💡 <strong>Consejo:</strong> Cada paso completado te dará 20 XP. Al completar los 5 pasos, podrás finalizar el proyecto y ganar la insignia.</p>
            <button class="gl-btn gl-btn-primary" onclick="completeFinalProject()" style="width:100%; margin-top:10px;" disabled id="final-project-btn">🏆 Completar Proyecto Final (Requiere 100%)</button>
          </div>
        </div>
      `;
      projectProgress.style.display = 'block';
    }
    addXP(30, 'Proyecto final iniciado');
  }
  
  function showProjectTemplate() {
    const template = `
      <div style="background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.2); border-radius:12px; padding:20px; margin-top:20px;">
        <h4 style="color:#fbbf24; margin-top:0;">📋 Plantilla de Presentación Ejecutiva</h4>
        <p style="color:#cbd5e1;">Estructura recomendada para presentación de 10 minutos:</p>
        <ul style="color:#cbd5e1; padding-left:20px; margin:10px 0;">
          <li><strong>Diapositiva 1:</strong> Título y problema (1 min)</li>
          <li><strong>Diapositiva 2-3:</strong> Solución y valor único (2 min)</li>
          <li><strong>Diapositiva 4-5:</strong> Mercado y oportunidad (2 min)</li>
          <li><strong>Diapositiva 6-7:</strong> Equipo y tracción (2 min)</li>
          <li><strong>Diapositiva 8-9:</strong> Modelo de negocio y financiación (2 min)</li>
          <li><strong>Diapositiva 10:</strong> Llamado a acción y cierre (1 min)</li>
        </ul>
        <button class="gl-btn" style="margin-top:10px;" onclick="navigator.clipboard.writeText(this.parentElement.innerText); window.showToast('Plantilla copiada 📋','success');">📋 Copiar Plantilla</button>
      </div>
    `;
    
    const projectProgress = document.getElementById('project-progress');
    if (projectProgress) {
      projectProgress.innerHTML = template;
      projectProgress.style.display = 'block';
    }
  }
  
  function startPresentationSimulation() {
    const type = document.getElementById('sim-type').value;
    const duration = document.getElementById('sim-duration').value;
    const difficulty = document.getElementById('sim-difficulty').value;
    const script = document.getElementById('sim-script').value;
    
    const typeNames = {
      pitch: 'Pitch',
      executive: 'Ejecutiva',
      educational: 'Educativa',
      persuasive: 'Persuasiva'
    };
    
    const difficultyNames = {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
    };
    
    const feedback = {
      beginner: [
        "✅ Excelente claridad en tu mensaje principal.",
        "📊 Considera usar más datos para respaldar tus argumentos.",
        "⏱️ Tu ritmo es adecuado para principiantes.",
        "🎯 Enfócate en un solo mensaje clave por diapositiva."
      ],
      intermediate: [
        "✅ Buen uso de pausas estratégicas.",
        "📈 Incorpora más historias o analogías.",
        "🗣️ Varía tu tono de voz para mantener el interés.",
        "🔗 Mejora las transiciones entre secciones."
      ],
      advanced: [
        "✅ Dominio excepcional del contenido.",
        "🎭 Excelente uso de storytelling emocional.",
        "⚡ Ritmo perfecto para audiencias ejecutivas.",
        "🏆 Considera incorporar elementos de sorpresa."
      ]
    };
    
    const selectedFeedback = feedback[difficulty];
    const randomFeedback = selectedFeedback.sort(() => Math.random() - 0.5).slice(0, 3);
    
    const simulationHTML = `
      <div style="background:rgba(168,85,247,0.05); border:2px solid #a855f7; border-radius:12px; padding:25px; margin-top:20px;">
        <h4 style="color:#a855f7; margin-top:0;">🎤 Simulación en Curso</h4>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
          <div>
            <h5 style="margin:0 0 5px; color:#cbd5e1; font-size:0.9rem;">Tipo</h5>
            <p style="margin:0; color:#fff; font-weight:bold;">${typeNames[type]}</p>
          </div>
          <div>
            <h5 style="margin:0 0 5px; color:#cbd5e1; font-size:0.9rem;">Duración</h5>
            <p style="margin:0; color:#fff; font-weight:bold;">${duration} minutos</p>
          </div>
          <div>
            <h5 style="margin:0 0 5px; color:#cbd5e1; font-size:0.9rem;">Dificultad</h5>
            <p style="margin:0; color:#fff; font-weight:bold;">${difficultyNames[difficulty]}</p>
          </div>
        </div>
        
        <div style="margin-top:20px;">
          <h5 style="margin:0 0 10px; color:#cbd5e1; font-size:0.9rem;">📊 Retroalimentación de IA</h5>
          <ul style="color:#cbd5e1; padding-left:20px; margin:0;">
            ${randomFeedback.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        
        <div style="margin-top:20px;">
          <h5 style="margin:0 0 10px; color:#cbd5e1; font-size:0.9rem;">🎯 Recomendaciones</h5>
          <div style="display:flex; flex-wrap:wrap; gap:10px;">
            <span style="background:rgba(168,85,247,0.2); color:#a855f7; padding:6px 12px; border-radius:20px; font-size:0.8rem;">Practica con Yoodli</span>
            <span style="background:rgba(16,185,129,0.2); color:#34d399; padding:6px 12px; border-radius:20px; font-size:0.8rem;">Graba tu voz</span>
            <span style="background:rgba(245,158,11,0.2); color:#fbbf24; padding:6px 12px; border-radius:20px; font-size:0.8rem;">Usa un espejo</span>
            <span style="background:rgba(37,99,235,0.2); color:#60a5fa; padding:6px 12px; border-radius:20px; font-size:0.8rem;">Timer de ${duration} min</span>
          </div>
        </div>
        
        <div style="margin-top:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="color:#cbd5e1; font-size:0.9rem;">Puntuación de simulación:</span>
            <span style="color:#fbbf24; font-weight:bold;">${difficulty === 'beginner' ? '85' : difficulty === 'intermediate' ? '78' : '92'}/100</span>
          </div>
          <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:4px; margin-top:5px; overflow:hidden;">
            <div style="width:${difficulty === 'beginner' ? '85' : difficulty === 'intermediate' ? '78' : '92'}%; height:100%; background:#a855f7; transition:width 0.5s;"></div>
          </div>
        </div>
        
        <button class="gl-btn gl-btn-primary" style="margin-top:20px; width:100%;" onclick="addXP(40, 'Simulación de presentación completada'); this.disabled=true;">✅ Completar Simulación (+40 XP)</button>
      </div>
    `;
    
    const output = document.getElementById('simulation-output');
    if (output) {
      output.innerHTML = simulationHTML;
      output.style.display = 'block';
    }
    
    addXP(20, 'Simulación iniciada');
  }

  function evaluatePresentationQuality() {
    const criteria = [
      { id: 'clarity', name: 'Claridad del mensaje', weight: 0.3 },
      { id: 'structure', name: 'Estructura lógica', weight: 0.25 },
      { id: 'visuals', name: 'Calidad visual', weight: 0.25 },
      { id: 'engagement', name: 'Capacidad de engagement', weight: 0.2 }
    ];
    
    let selectedCriteria = [];
    let totalScore = 0;
    let maxPossible = 0;
    
    // Leer checkboxes seleccionados
    criteria.forEach(criterion => {
      const checkbox = document.getElementById(`eval-${criterion.id}`);
      if (checkbox && checkbox.checked) {
        selectedCriteria.push(criterion);
        const score = Math.floor(Math.random() * 41) + 60; // 60-100
        totalScore += score * criterion.weight;
        maxPossible += 100 * criterion.weight;
      }
    });
    
    if (selectedCriteria.length === 0) {
      if (window.showToast) window.showToast('⚠️ Selecciona al menos un criterio para evaluar', 'warning');
      return;
    }
    
    const finalScore = Math.round((totalScore / maxPossible) * 100);
    const grade = finalScore >= 90 ? 'Excelente' : finalScore >= 75 ? 'Bueno' : finalScore >= 60 ? 'Aceptable' : 'Necesita mejora';
    const color = finalScore >= 90 ? '#10b981' : finalScore >= 75 ? '#3b82f6' : finalScore >= 60 ? '#f59e0b' : '#ef4444';
    
    // Generar feedback personalizado
    const feedback = {
      clarity: [
        'El mensaje central es claro y fácil de entender.',
        'Considera simplificar el lenguaje técnico.',
        'Añade un resumen ejecutivo al inicio.'
      ],
      structure: [
        'La narrativa fluye de forma lógica.',
        'Reorganiza las secciones para mejorar el flujo.',
        'Incluye transiciones entre temas.'
      ],
      visuals: [
        'Las imágenes apoyan efectivamente el contenido.',
        'Mejora la consistencia de colores y fuentes.',
        'Reduce la densidad de texto en las diapositivas.'
      ],
      engagement: [
        'Incluye elementos interactivos para la audiencia.',
        'Añade historias o casos de estudio.',
        'Considera preguntas retóricas para mantener atención.'
      ]
    };
    
    let feedbackHTML = '';
    selectedCriteria.forEach(criterion => {
      const randomIndex = Math.floor(Math.random() * feedback[criterion.id].length);
      feedbackHTML += `
        <div style="margin-bottom:15px;">
          <strong style="color:#cbd5e1;">${criterion.name}:</strong>
          <p style="color:#94a3b8; margin:5px 0 0 20px;">${feedback[criterion.id][randomIndex]}</p>
        </div>
      `;
    });
    
    const evaluationHTML = `
      <div style="background:rgba(30,41,59,0.7); border-radius:12px; padding:25px; margin-top:20px; border-left:4px solid ${color};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h4 style="color:#fff; margin:0;">📊 Evaluación de Calidad</h4>
          <div style="font-size:2rem; font-weight:bold; color:${color};">${finalScore}/100</div>
        </div>
        
        <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px; margin-bottom:20px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span style="color:#cbd5e1;">Calificación:</span>
            <span style="color:${color}; font-weight:bold;">${grade}</span>
          </div>
          <div style="height:10px; background:rgba(255,255,255,0.1); border-radius:5px; overflow:hidden;">
            <div style="width:${finalScore}%; height:100%; background:${color}; transition:width 1s;"></div>
          </div>
        </div>
        
        <h5 style="color:#fff; margin:0 0 15px;">📝 Recomendaciones específicas:</h5>
        ${feedbackHTML}
        
        <div style="margin-top:20px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1);">
          <p style="color:#94a3b8; margin:0;">✅ Criterios evaluados: ${selectedCriteria.map(c => c.name).join(', ')}</p>
          <p style="color:#94a3b8; margin:5px 0 0;">🎯 Peso ponderado utilizado para el cálculo</p>
        </div>
      </div>
      
      <button class="gl-btn gl-btn-primary" style="margin-top:20px; width:100%;" onclick="addXP(30, 'Evaluación de calidad completada'); this.disabled=true;">
        ✅ Aplicar Recomendaciones (+30 XP)
      </button>
    `;
    
    const output = document.getElementById('evaluation-output');
    if (output) {
      output.innerHTML = evaluationHTML;
      output.style.display = 'block';
    }
    
    addXP(15, 'Evaluación generada');
  }

  let selectedTemplate = 'executive';
  
  function selectTemplate(templateId) {
    selectedTemplate = templateId;
    document.querySelectorAll('.slide-template').forEach(el => {
      el.style.border = '2px solid rgba(255,255,255,0.1)';
      el.style.background = el.style.background.replace('0.3', '0.1');
    });
    
    const selectedEl = document.querySelector(`.slide-template[onclick*="${templateId}"]`);
    if (selectedEl) {
      selectedEl.style.border = '2px solid #fbbf24';
      selectedEl.style.background = selectedEl.style.background.replace('0.1', '0.2');
    }
    
    if (window.showToast) window.showToast(`Plantilla ${templateId} seleccionada`, 'info');
  }
  
  function designSlide() {
    const color = document.getElementById('slide-color').value;
    const density = document.getElementById('slide-density').value;
    const imageStyle = document.getElementById('slide-images').value;
    
    const templateNames = {
      executive: 'Ejecutiva',
      creative: 'Creativa',
      educational: 'Educativa',
      pitch: 'Pitch'
    };
    
    const densityNames = {
      minimal: 'Minimalista',
      balanced: 'Equilibrado',
      detailed: 'Detallado'
    };
    
    const imageNames = {
      realistic: 'Fotografías realistas',
      illustrative: 'Ilustraciones',
      abstract: 'Abstracto/geométrico',
      none: 'Sin imágenes'
    };
    
    const colorNames = {
      '#2563eb': 'Azul Profesional',
      '#10b981': 'Verde Moderno',
      '#f59e0b': 'Ámbar Energético',
      '#8b5cf6': 'Púrpura Creativo'
    };
    
    // Generar recomendaciones de diseño
    const recommendations = {
      executive: [
        'Usa gráficos de barras para datos cuantitativos',
        'Mantén una paleta de colores corporativa',
        'Incluye un resumen ejecutivo al inicio'
      ],
      creative: [
        'Experimenta con layouts asimétricos',
        'Usa animaciones sutiles para transiciones',
        'Combina tipografía moderna con espacios en blanco'
      ],
      educational: [
        'Divide conceptos complejos en múltiples slides',
        'Usa iconos para representar ideas clave',
        'Incluye ejemplos prácticos en cada sección'
      ],
      pitch: [
        'Comienza con un problema impactante',
        'Usa números grandes y bold para estadísticas',
        'Termina con un llamado a la acción claro'
      ]
    };
    
    const slideDesignHTML = `
      <div style="background:rgba(30,41,59,0.7); border-radius:12px; padding:25px; margin-top:20px; border-left:4px solid ${color};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h4 style="color:#fff; margin:0;">🎨 Diseño de Slide Generado</h4>
          <div style="font-size:1.5rem; font-weight:bold; color:${color};">${templateNames[selectedTemplate]}</div>
        </div>
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:20px; margin-bottom:25px;">
          <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px;">
            <div style="font-size:0.8rem; color:#cbd5e1; margin-bottom:5px;">Plantilla</div>
            <div style="font-size:1.2rem; color:#fff; font-weight:bold;">${templateNames[selectedTemplate]}</div>
          </div>
          <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px;">
            <div style="font-size:0.8rem; color:#cbd5e1; margin-bottom:5px;">Color Principal</div>
            <div style="font-size:1.2rem; color:${color}; font-weight:bold;">${colorNames[color]}</div>
          </div>
          <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px;">
            <div style="font-size:0.8rem; color:#cbd5e1; margin-bottom:5px;">Densidad</div>
            <div style="font-size:1.2rem; color:#fff; font-weight:bold;">${densityNames[density]}</div>
          </div>
          <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px;">
            <div style="font-size:0.8rem; color:#cbd5e1; margin-bottom:5px;">Estilo de Imágenes</div>
            <div style="font-size:1.2rem; color:#fff; font-weight:bold;">${imageNames[imageStyle]}</div>
          </div>
        </div>
        
        <h5 style="color:#fff; margin:0 0 15px;">💡 Recomendaciones de diseño:</h5>
        <div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:15px;">
          <ul style="margin:0; padding-left:20px; color:#cbd5e1;">
            ${recommendations[selectedTemplate].map(rec => `<li>${rec}</li>`).join('')}
          </ul>
        </div>
        
        <div style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
          <p style="color:#94a3b8; margin:0 0 10px;">🎯 <strong>Herramientas recomendadas:</strong> ${selectedTemplate === 'executive' ? 'Beautiful.AI + ChatGPT' : selectedTemplate === 'creative' ? 'Gamma + DALL-E' : selectedTemplate === 'educational' ? 'Canva AI + ChatGPT' : 'Gamma + Midjourney'}</p>
          <p style="color:#94a3b8; margin:0;">⏱️ <strong>Tiempo estimado de creación:</strong> ${density === 'minimal' ? '15-20 minutos' : density === 'balanced' ? '25-35 minutos' : '40-50 minutos'}</p>
        </div>
      </div>
      
      <button class="gl-btn gl-btn-primary" style="margin-top:20px; width:100%;" onclick="addXP(40, 'Diseño de slide creado'); this.disabled=true;">
        ✅ Aplicar Diseño (+40 XP)
      </button>
    `;
    
    const output = document.getElementById('slide-design-output');
    if (output) {
      output.innerHTML = slideDesignHTML;
      output.style.display = 'block';
    }
    
    addXP(20, 'Diseño generado');
  }

  function generateProjectPlan() {
    const days = parseInt(document.getElementById('project-days').value) || 7;
    const experience = document.getElementById('project-experience').value;
    const focus = document.getElementById('project-focus').value;
    
    const experienceNames = {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
    };
    
    const focusNames = {
      content: 'Contenido y narrativa',
      design: 'Diseño visual',
      delivery: 'Entrega y práctica',
      balanced: 'Equilibrado'
    };
    
    // Generar hitos basados en días y enfoque
    const milestones = [];
    const totalMilestones = Math.min(days, 7);
    
    for (let i = 1; i <= totalMilestones; i++) {
      const day = Math.ceil((i / totalMilestones) * days);
      let title = '';
      let tools = '';
      
      switch (i) {
        case 1:
          title = 'Definición de objetivos y audiencia';
          tools = 'ChatGPT, Claude';
          break;
        case 2:
          title = 'Investigación y recopilación de datos';
          tools = 'Gemini, Perplexity';
          break;
        case 3:
          title = 'Creación de narrativa y guión';
          tools = 'ChatGPT, Claude, Gamma';
          break;
        case 4:
          title = 'Diseño de slides y visuales';
          tools = 'Gamma, Beautiful.AI, DALL-E';
          break;
        case 5:
          title = 'Revisión y refinamiento';
          tools = 'ChatGPT (crítica), Gamma';
          break;
        case 6:
          title = 'Práctica de entrega';
          tools = 'Yoodli, Poised, Orai';
          break;
        case 7:
          title = 'Preparación final y ajustes';
          tools = 'Todas las herramientas integradas';
          break;
      }
      
      milestones.push({ day, title, tools, completed: false });
    }
    
    // Ajustar según enfoque
    if (focus === 'content') {
      milestones.forEach(m => {
        if (m.title.includes('narrativa') || m.title.includes('guión')) {
          m.tools += ' + ChatGPT avanzado';
        }
      });
    } else if (focus === 'design') {
      milestones.forEach(m => {
        if (m.title.includes('diseño') || m.title.includes('visuales')) {
          m.tools += ' + DALL-E/Midjourney';
        }
      });
    } else if (focus === 'delivery') {
      milestones.forEach(m => {
        if (m.title.includes('práctica') || m.title.includes('entrega')) {
          m.tools += ' + Yoodli premium';
        }
      });
    }
    
    // Generar HTML del plan
    let milestonesHTML = '';
    milestones.forEach((milestone, index) => {
      const isLast = index === milestones.length - 1;
      milestonesHTML += `
        <div style="display:flex; margin-bottom:${isLast ? '0' : '20px'};">
          <div style="width:40px; height:40px; background:${milestone.completed ? '#10b981' : '#3b82f6'}; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; color:#fff; margin-right:15px; flex-shrink:0;">
            ${index + 1}
          </div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h6 style="margin:0 0 5px; color:#fff; font-size:0.9rem;">${milestone.title}</h6>
              <span style="font-size:0.8rem; color:#cbd5e1;">Día ${milestone.day}</span>
            </div>
            <p style="margin:0; color:#94a3b8; font-size:0.8rem;">🛠️ <strong>Herramientas:</strong> ${milestone.tools}</p>
            <div style="display:flex; align-items:center; margin-top:8px;">
              <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                <div style="width:${milestone.completed ? '100' : '0'}%; height:100%; background:#10b981; transition:width 0.5s;"></div>
              </div>
              <button class="gl-btn gl-btn-small" style="margin-left:10px; padding:4px 10px; font-size:0.7rem;" onclick="this.parentElement.parentElement.querySelector('.progress-bar').style.width='100%'; this.disabled=true; addXP(10, 'Hito completado');">✅ Completar</button>
            </div>
          </div>
        </div>
      `;
    });
    
    const planHTML = `
      <div style="background:rgba(30,41,59,0.7); border-radius:12px; padding:25px; margin-top:20px; border-left:4px solid #fbbf24;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h4 style="color:#fff; margin:0;">📅 Plan de Proyecto Generado</h4>
          <div style="font-size:1.2rem; color:#fbbf24; font-weight:bold;">${days} días</div>
        </div>
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-bottom:25px;">
          <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px;">
            <div style="font-size:0.8rem; color:#cbd5e1; margin-bottom:5px;">Nivel de experiencia</div>
            <div style="font-size:1.1rem; color:#fff; font-weight:bold;">${experienceNames[experience]}</div>
          </div>
          <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px;">
            <div style="font-size:0.8rem; color:#cbd5e1; margin-bottom:5px;">Enfoque principal</div>
            <div style="font-size:1.1rem; color:#fff; font-weight:bold;">${focusNames[focus]}</div>
          </div>
          <div style="background:rgba(255,255,255,0.05); border-radius:8px; padding:15px;">
            <div style="font-size:0.8rem; color:#cbd5e1; margin-bottom:5px;">Hitos totales</div>
            <div style="font-size:1.1rem; color:#fff; font-weight:bold;">${totalMilestones}</div>
          </div>
        </div>
        
        <h5 style="color:#fff; margin:0 0 15px;">🗓️ Línea de tiempo del proyecto:</h5>
        <div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:20px;">
          ${milestonesHTML}
        </div>
        
        <div style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
          <p style="color:#94a3b8; margin:0 0 10px;">🎯 <strong>Recomendación:</strong> ${experience === 'beginner' ? 'Dedica más tiempo a la práctica con herramientas de coaching.' : experience === 'intermediate' ? 'Enfócate en integrar múltiples herramientas para flujos más eficientes.' : 'Experimenta con combinaciones avanzadas de herramientas para maximizar impacto.'}</p>
          <p style="color:#94a3b8; margin:0;">⏱️ <strong>Tiempo estimado total:</strong> ${days * (experience === 'beginner' ? 2 : experience === 'intermediate' ? 1.5 : 1)} horas por día</p>
        </div>
      </div>
      
      <button class="gl-btn gl-btn-primary" style="margin-top:20px; width:100%;" onclick="addXP(50, 'Plan de proyecto creado'); this.disabled=true;">
        ✅ Aplicar Plan (+50 XP)
      </button>
    `;
    
    const output = document.getElementById('project-plan-output');
    if (output) {
      output.innerHTML = planHTML;
      output.style.display = 'block';
    }
    
    addXP(25, 'Plan generado');
  }

  // Funciones de gamificación
  function refreshGamification() {
    // Actualizar display de XP
    const xpDisplay = document.getElementById('xp-display');
    if (xpDisplay) xpDisplay.textContent = userXP;
    
    // Actualizar barra de progreso de XP (0-500 XP)
    const xpProgress = document.getElementById('xp-progress');
    if (xpProgress) {
      const progress = Math.min((userXP / 500) * 100, 100);
      xpProgress.style.width = `${progress}%`;
    }
    
    // Actualizar siguiente nivel
    const xpNext = document.getElementById('xp-next');
    if (xpNext) xpNext.textContent = Math.max(500 - userXP, 0);
    
    // Actualizar contador de insignias
    const badgesCount = document.getElementById('badges-count');
    if (badgesCount) badgesCount.textContent = userBadges.length;
    
    // Mostrar insignias desbloqueadas
    userBadges.forEach(badge => {
      const badgeElement = document.getElementById(`badge-${badge.toLowerCase().replace(/\s+/g, '-')}`);
      if (badgeElement) badgeElement.style.display = 'inline';
    });
    
    // Calcular progreso del módulo (8 tareas)
    const completedTasks = Math.min(Math.floor(userXP / 30), 8); // Simplificación
    const moduleProgress = document.getElementById('module-progress');
    const moduleProgressBar = document.getElementById('module-progress-bar');
    const completedTasksElement = document.getElementById('completed-tasks');
    
    if (moduleProgress) moduleProgress.textContent = `${Math.round((completedTasks / 8) * 100)}%`;
    if (moduleProgressBar) moduleProgressBar.style.width = `${(completedTasks / 8) * 100}%`;
    if (completedTasksElement) completedTasksElement.textContent = completedTasks;
    
    if (window.showToast) window.showToast('🎮 Progreso actualizado', 'info');
  }
  
  function resetProgress() {
    if (!confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Se perderán todos los XP e insignias.')) return;
    
    userXP = 0;
    userBadges = [];
    
    try {
      localStorage.removeItem('presentaciones-pro-xp');
      localStorage.removeItem('presentaciones-pro-badges');
    } catch (e) {}
    
    refreshGamification();
    if (window.showToast) window.showToast('🔄 Progreso reiniciado', 'warning');
  }
  
  // Sobrescribir addXP para actualizar gamificación
  const originalAddXP = addXP;
  addXP = function(points, reason) {
    originalAddXP(points, reason);
    refreshGamification();
  };
  
  // Sobrescribir unlockBadge para actualizar gamificación
  const originalUnlockBadge = unlockBadge;
  unlockBadge = function(badgeName) {
    originalUnlockBadge(badgeName);
    refreshGamification();
  };
  
  // Inicializar gamificación al cargar el módulo
  setTimeout(refreshGamification, 100);

  // Funciones del proyecto final interactivo
  function updateProjectProgress() {
    const steps = [1, 2, 3, 4, 5];
    let completed = 0;
    
    steps.forEach(step => {
      const checkbox = document.getElementById(`step${step}`);
      if (checkbox && checkbox.checked) completed++;
    });
    
    const percent = (completed / 5) * 100;
    const progressBar = document.getElementById('project-progress-bar');
    const progressPercent = document.getElementById('project-progress-percent');
    const stepsCompleted = document.getElementById('project-steps-completed');
    const finalButton = document.getElementById('final-project-btn');
    
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressPercent) progressPercent.textContent = `${percent}%`;
    if (stepsCompleted) stepsCompleted.textContent = completed;
    
    if (finalButton) {
      if (percent === 100) {
        finalButton.disabled = false;
        finalButton.textContent = '🏆 Completar Proyecto Final (+200 XP)';
      } else {
        finalButton.disabled = true;
        finalButton.textContent = `🏆 Completar Proyecto Final (Requiere ${100 - percent}% más)`;
      }
    }
    
    // Dar XP por cada paso completado
    steps.forEach(step => {
      const checkbox = document.getElementById(`step${step}`);
      if (checkbox && checkbox.checked && !checkbox.dataset.xpAwarded) {
        addXP(20, `Paso ${step} del proyecto completado`);
        checkbox.dataset.xpAwarded = 'true';
      }
    });
  }
  
  function completeAllSteps() {
    const steps = [1, 2, 3, 4, 5];
    steps.forEach(step => {
      const checkbox = document.getElementById(`step${step}`);
      if (checkbox && !checkbox.checked) {
        checkbox.checked = true;
        checkbox.dataset.xpAwarded = 'true';
      }
    });
    updateProjectProgress();
    if (window.showToast) window.showToast('✅ Todos los pasos marcados como completados', 'success');
  }

  function completeFinalProject() {
    addXP(200, 'Proyecto final completado');
    unlockBadge('Director de Presentaciones');
    if (window.showToast) window.showToast('🏆 ¡Felicidades! Has completado el módulo Presentaciones Pro', 'success');
    
    const projectProgress = document.getElementById('project-progress');
    if (projectProgress) {
      projectProgress.innerHTML = `
        <div style="background:rgba(37,99,235,0.1); border:2px solid #2563eb; border-radius:12px; padding:30px; text-align:center; margin-top:20px;">
          <div style="font-size:3rem; margin-bottom:20px;">🏆</div>
          <h3 style="color:#fff; margin:0 0 10px;">¡Módulo Completado!</h3>
          <p style="color:#cbd5e1; margin:0 0 20px;">Has dominado el arte de crear presentaciones de alto impacto con IA. Ahora eres un Director de Presentaciones certificado.</p>
          <div style="display:inline-flex; align-items:center; gap:10px; background:rgba(255,255,255,0.05); padding:10px 20px; border-radius:20px;">
            <span style="color:#fbbf24;">✨ +200 XP</span>
            <span style="color:#60a5fa;">🏆 Insignia desbloqueada</span>
          </div>
        </div>
      `;
      projectProgress.style.display = 'block';
    }
  }
  
  // Inicialización del módulo
  function initModule(app) {
    console.log('[Presentaciones Pro] initModule() llamado');
    
    // Inyectar HTML del módulo si no está presente
    const target = document.getElementById('module-presentaciones-pro');
    if (target && !target.querySelector('.module-header')) {
      target.insertAdjacentHTML('afterbegin', moduleHTML);
      // Inicializar eventos después de inyectar el HTML
      initTabEvents();
      initToolsGrid();
    } else {
      // Si ya existe el HTML, solo inicializar eventos
      initTabEvents();
      initToolsGrid();
    }
    
    // Exponer funciones globalmente para los botones onclick
    console.log('[Presentaciones Pro] Exponiendo funciones globalmente...');
    window.refreshGamification = refreshGamification;
    window.resetProgress = resetProgress;
    window.addXP = addXP;
    window.unlockBadge = unlockBadge;
    window.completeAllSteps = completeAllSteps;
    window.completeFinalProject = completeFinalProject;
    
    // Funciones adicionales del simulador y constructor
    window.generatePresentationPrompt = generatePresentationPrompt;
    window.generatePresentationPlan = generatePresentationPlan;
    window.selectTemplate = selectTemplate;
    window.designSlide = designSlide;
    window.startPresentationSimulation = startPresentationSimulation;
    window.evaluatePresentationQuality = evaluatePresentationQuality;
    window.generateProjectPlan = generateProjectPlan;
    window.updateProjectProgress = updateProjectProgress;
    window.resetFilters = resetFilters;
    window.startFinalProject = startFinalProject;
    window.showProjectTemplate = showProjectTemplate;
    
    console.log('[Presentaciones Pro] Funciones expuestas:');
    console.log('- refreshGamification:', typeof refreshGamification);
    console.log('- resetProgress:', typeof resetProgress);
    console.log('- addXP:', typeof addXP);
    console.log('- unlockBadge:', typeof unlockBadge);
    console.log('- completeAllSteps:', typeof completeAllSteps);
    console.log('- completeFinalProject:', typeof completeFinalProject);
    
    // Cargar XP guardado
    try {
      const savedXP = localStorage.getItem('presentaciones-pro-xp');
      if (savedXP) userXP = parseInt(savedXP);
      
      const savedBadges = localStorage.getItem('presentaciones-pro-badges');
      if (savedBadges) userBadges = JSON.parse(savedBadges);
    } catch (e) {}
    
    // Guardar XP periódicamente
    setInterval(() => {
      try {
        localStorage.setItem('presentaciones-pro-xp', userXP.toString());
        localStorage.setItem('presentaciones-pro-badges', JSON.stringify(userBadges));
      } catch (e) {}
    }, 5000);
  }

  // HTML del módulo - Versión MVP completa
  const moduleHTML = `

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(37,99,235,0.1), rgba(16,185,129,0.1)); border: 1px solid rgba(37,99,235,0.3);">
  <div class="module-number gamer-badge" style="background:#2563eb;color:#fff;">BONUS: PRESENTACIONES PRO</div>
  <h2 class="module-title glow-text" style="color:#60a5fa;">🎬 IA para Presentaciones de Alto Impacto</h2>
  <p class="module-description" style="color:#cbd5e1;">Aprende el arte de crear presentaciones que enamoran usando IA estratégica. De informe aburrido a diapositivas que persuaden, inspiran y convencen en minutos.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 60 min</span>
    <span class="module-meta-item">💎 200 XP</span>
    <span class="module-meta-item">🏆 Insignia: Director de Presentaciones</span>
  </div>
</div>

<!-- Panel de Gamificación -->
<div id="gamification-panel" style="background: rgba(30,41,59,0.7); border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
    <h3 style="margin:0; color:#fff; font-size:1.1rem;">🎮 Tu Progreso</h3>
    <div style="display:flex; gap:10px;">
      <button class="gl-btn gl-btn-small" onclick="refreshGamification()" style="padding:6px 12px; font-size:0.8rem;">🔄 Actualizar</button>
      <button class="gl-btn gl-btn-small" onclick="resetProgress()" style="padding:6px 12px; font-size:0.8rem; background:rgba(239,68,68,0.2); color:#ef4444;">🗑️ Reiniciar</button>
    </div>
  </div>
  
  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px;">
    <div style="background:rgba(37,99,235,0.1); border-radius:8px; padding:15px;">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <div style="width:40px; height:40px; background:#2563eb; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.2rem;">✨</div>
        <div>
          <div style="font-size:0.8rem; color:#cbd5e1;">XP Total</div>
          <div style="font-size:1.5rem; font-weight:bold; color:#fff;" id="xp-display">0</div>
        </div>
      </div>
      <div style="height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
        <div id="xp-progress" style="width:0%; height:100%; background:#2563eb; transition:width 0.5s;"></div>
      </div>
      <div style="font-size:0.7rem; color:#94a3b8; margin-top:5px;">Siguiente nivel: <span id="xp-next">200</span> XP</div>
    </div>
    
    <div style="background:rgba(16,185,129,0.1); border-radius:8px; padding:15px;">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <div style="width:40px; height:40px; background:#10b981; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.2rem;">🏆</div>
        <div>
          <div style="font-size:0.8rem; color:#cbd5e1;">Insignias</div>
          <div style="font-size:1.5rem; font-weight:bold; color:#fff;" id="badges-count">0</div>
        </div>
      </div>
      <div id="badges-list" style="font-size:0.8rem; color:#94a3b8;">
        <span id="badge-director" style="display:none;">👑 Director de Presentaciones</span>
        <span id="badge-designer" style="display:none;">🎨 Diseñador Visual</span>
        <span id="badge-storyteller" style="display:none;">📖 Storyteller</span>
        <span id="badge-coach" style="display:none;">🎤 Coach de Presentaciones</span>
      </div>
    </div>
    
    <div style="background:rgba(245,158,11,0.1); border-radius:8px; padding:15px;">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <div style="width:40px; height:40px; background:#f59e0b; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.2rem;">📊</div>
        <div>
          <div style="font-size:0.8rem; color:#cbd5e1;">Progreso del Módulo</div>
          <div style="font-size:1.5rem; font-weight:bold; color:#fff;" id="module-progress">0%</div>
        </div>
      </div>
      <div style="height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
        <div id="module-progress-bar" style="width:0%; height:100%; background:#f59e0b; transition:width 0.5s;"></div>
      </div>
      <div style="font-size:0.7rem; color:#94a3b8; margin-top:5px;"><span id="completed-tasks">0</span>/8 tareas completadas</div>
    </div>
  </div>
  
  <div style="margin-top:15px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1);">
    <p style="color:#94a3b8; font-size:0.8rem; margin:0;">💡 <strong>Consejo:</strong> Completa todas las pestañas para desbloquear la insignia "Director de Presentaciones" y ganar 200 XP extra.</p>
  </div>
</div>

<div class="m-pp-hero" style="background: rgba(37,99,235,0.05); border-radius: 16px; padding: 24px; margin: 20px 0; border: 1px solid rgba(37,99,235,0.2);">
  <div style="font-size:0.76rem; font-weight:800; color:#60a5fa; margin-bottom:8px;">MAPA MENTAL DEL MÓDULO</div>
  <h3 style="margin:0 0 8px; color:#fff;">La IA no solo crea diapositivas; diseña experiencias persuasivas.</h3>
  <p style="margin:0; color:#dbe4f0; line-height:1.8;">Piensa estas herramientas como un equipo creativo virtual: generan contenido, diseñan visuales, ensayan contigo y adaptan el mensaje. El secreto no es usar más IA, sino integrarla estratégicamente en cada fase de tu flujo de trabajo.</p>
  <div class="m-pp-chip-row" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;">
    <span class="m-pp-chip" style="background: rgba(37,99,235,0.15); color: #60a5fa; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Narrativa estratégica</span>
    <span class="m-pp-chip" style="background: rgba(16,185,129,0.15); color: #34d399; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Diseño automático</span>
    <span class="m-pp-chip" style="background: rgba(245,158,11,0.15); color: #fbbf24; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Coaching de entrega</span>
    <span class="m-pp-chip" style="background: rgba(139,92,246,0.15); color: #a78bfa; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Personalización</span>
    <span class="m-pp-chip" style="background: rgba(236,72,153,0.15); color: #f9a8d4; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Flujo integrado</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="tab-fundamentos">🧠 Fundamentos</button>
  <button class="tab-btn" data-tab="tab-flujo">🛤️ Flujo de Trabajo</button>
  <button class="tab-btn" data-tab="tab-herramientas">🧰 Mapa de Herramientas</button>
  <button class="tab-btn" data-tab="tab-constructor">🏗️ Constructor</button>
  <button class="tab-btn" data-tab="tab-generador">📝 Generador de Prompts</button>
  <button class="tab-btn" data-tab="tab-simulador">🎤 Simulador de Presentación</button>
  <button class="tab-btn" data-tab="tab-evaluador">📊 Evaluador de Calidad</button>
  <button class="tab-btn" data-tab="tab-proyecto">🏆 Proyecto Final</button>
</div>

<!-- Pestaña 1: Fundamentos -->
<div id="tab-fundamentos" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🧠</span> Fundamentos Estratégicos</h3>
    <p>Establece un marco conceptual claro sobre cómo la IA transforma la creación de presentaciones.</p>
    
    <div style="background:rgba(37,99,235,0.05); border:1px solid rgba(37,99,235,0.2); border-radius:12px; padding:20px; margin:20px 0;">
      <h4 style="color:#60a5fa; margin-top:0;">📊 Transformación con IA</h4>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:15px; margin-top:15px;">
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border-left:4px solid #2563eb;">
          <h5 style="margin:0 0 8px; color:#fff;">🎯 Narrativa</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">De storytelling manual a narrativa generativa adaptativa.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border-left:4px solid #10b981;">
          <h5 style="margin:0 0 8px; color:#fff;">🎨 Diseño</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">De plantillas estáticas a diseño adaptativo automático.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border-left:4px solid #f59e0b;">
          <h5 style="margin:0 0 8px; color:#fff;">🎤 Entrega</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">De presentador solitario a equipo virtual de apoyo.</p>
        </div>
      </div>
    </div>

    <!-- Caso de Estudio -->
    <div style="background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); border-radius:12px; padding:20px; margin:20px 0;">
      <h4 style="color:#34d399; margin-top:0;">📚 Caso de Estudio: De Informe Aburrido a Presentación Impactante</h4>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px; margin-top:15px;">
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px;">
          <h5 style="margin:0 0 10px; color:#fff; font-size:0.9rem;">📄 Situación Inicial</h5>
          <ul style="margin:0; padding-left:20px; color:#cbd5e1; font-size:0.8rem;">
            <li>Informe trimestral de 50 páginas en Word</li>
            <li>Audiencia: Directivos con poco tiempo</li>
            <li>Objetivo: Comunicar resultados y obtener aprobación</li>
            <li>Tiempo disponible: 2 días</li>
          </ul>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px;">
          <h5 style="margin:0 0 10px; color:#fff; font-size:0.9rem;">🤖 Intervención de IA</h5>
          <ul style="margin:0; padding-left:20px; color:#cbd5e1; font-size:0.8rem;">
            <li><strong>ChatGPT:</strong> Extrae puntos clave y crea narrativa</li>
            <li><strong>Gamma:</strong> Genera 15 slides con diseño profesional</li>
            <li><strong>DALL-E:</strong> Crea 3 imágenes personalizadas</li>
            <li><strong>Yoodli:</strong> Analiza y mejora el guión de presentación</li>
          </ul>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px;">
          <h5 style="margin:0 0 10px; color:#fff; font-size:0.9rem;">📈 Resultados</h5>
          <ul style="margin:0; padding-left:20px; color:#cbd5e1; font-size:0.8rem;">
            <li><strong>Tiempo reducido:</strong> De 2 días a 4 horas</li>
            <li><strong>Engagement:</strong> Aprobación unánime del proyecto</li>
            <li><strong>Calidad:</strong> Presentación calificada como "excepcional"</li>
            <li><strong>ROI:</strong> 10x en productividad creativa</li>
          </ul>
        </div>
      </div>
      <div style="margin-top:15px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1);">
        <p style="color:#94a3b8; font-size:0.8rem; margin:0;">🎯 <strong>Conclusión:</strong> La IA no solo aceleró el proceso, sino que transformó un documento técnico en una experiencia persuasiva que logró el objetivo empresarial.</p>
      </div>
    </div>

    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Automatización vs Potenciación:</strong> La IA no solo hace más rápido lo mismo (automatización), sino que permite hacer cosas imposibles antes (potenciación creativa).
    </div>

    <button class="gl-btn gl-btn-primary" style="margin-top:20px;" onclick="addXP(30, 'Fundamentos comprendidos'); this.disabled=true; this.textContent='✅ XP Ganado';">✅ Completar Fundamentos (+30 XP)</button>
  </div>
</div>

<!-- Pestaña 2: Flujo de Trabajo -->
<div id="tab-flujo" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🛤️</span> Flujo de Trabajo Integrado con IA</h3>
    <p>Proceso paso a paso desde la ideación hasta el ensayo, integrando herramientas específicas.</p>
    
    <div style="position:relative; margin-top:30px; padding-left:40px; border-left:2px solid rgba(255,255,255,0.1);">
      <div style="margin-bottom:30px; position:relative;">
        <div style="position:absolute; left:-51px; top:0; width:22px; height:22px; background:#2563eb; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:bold; color: #fff;">1</div>
        <h4 style="margin:0 0 10px; color:#c9d1d9;">Ideación y Estructura</h4>
        <p style="font-size:0.8rem; color:#8b949e;">Define objetivo, audiencia y mensaje central. Herramientas: ChatGPT, Claude, Gemini.</p>
      </div>
      
      <div style="margin-bottom:30px; position:relative;">
        <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#fff;">2</div>
        <h4 style="margin:0 0 10px; color:#c9d1d9;">Creación de Contenido</h4>
        <p style="font-size:0.8rem; color:#8b949e;">Genera texto, puntos clave y narrativa. Herramientas: ChatGPT, Claude, Gemini.</p>
      </div>
      
      <div style="margin-bottom:30px; position:relative;">
        <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#fff;">3</div>
        <h4 style="margin:0 0 10px; color:#c9d1d9;">Diseño Visual</h4>
        <p style="font-size:0.8rem; color:#8b949e;">Crea diapositivas, imágenes y gráficos. Herramientas: Gamma, Beautiful.AI, DALL-E, Midjourney.</p>
      </div>
      
      <div style="margin-bottom:30px; position:relative;">
        <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#fff;">4</div>
        <h4 style="margin:0 0 10px; color:#c9d1d9;">Revisión y Optimización</h4>
        <p style="font-size:0.8rem; color:#8b949e;">Mejora claridad, coherencia y diseño. Herramientas: ChatGPT, Gamma, DeckRobot.</p>
      </div>
      
      <div style="margin-bottom:30px; position:relative;">
        <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#fff;">5</div>
        <h4 style="margin:0 0 10px; color:#c9d1d9;">Ensayo y Entrega</h4>
        <p style="font-size:0.8rem; color:#8b949e;">Practica con coaching de IA. Herramientas: Yoodli, Poised, Orai.</p>
      </div>
    </div>
    
    <!-- Mejores Prácticas -->
    <div style="background:rgba(168,85,247,0.05); border:1px solid rgba(168,85,247,0.2); border-radius:12px; padding:20px; margin:20px 0;">
      <h4 style="color:#a855f7; margin-top:0;">🏆 Mejores Prácticas del Flujo de Trabajo</h4>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:15px; margin-top:15px;">
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px;">
          <h5 style="margin:0 0 8px; color:#fff; font-size:0.9rem;">🎯 Definición Clara</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Invierte tiempo en definir objetivo, audiencia y mensaje central. Un prompt claro genera resultados 10x mejores.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px;">
          <h5 style="margin:0 0 8px; color:#fff; font-size:0.9rem;">🔄 Iteración Rápida</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Genera múltiples versiones con IA, selecciona la mejor y refina. No busques la perfección en el primer intento.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px;">
          <h5 style="margin:0 0 8px; color:#fff; font-size:0.9rem;">🧠 Criterio Humano</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">La IA sugiere, tú decides. Tu experiencia y contexto son insustituibles para ajustar el mensaje.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px;">
          <h5 style="margin:0 0 8px; color:#fff; font-size:0.9rem;">⏱️ Gestión del Tiempo</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Asigna tiempos específicos por fase: 20% ideación, 30% contenido, 30% diseño, 20% ensayo.</p>
        </div>
      </div>
      <div style="margin-top:15px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1);">
        <p style="color:#94a3b8; font-size:0.8rem; margin:0;">🚀 <strong>Consejo avanzado:</strong> Crea plantillas reutilizables de prompts y diseños para proyectos recurrentes, acelerando aún más el proceso.</p>
      </div>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Flujo híbrido:</strong> Combina herramientas de IA con tu criterio humano. La IA genera opciones, tú seleccionas y refinas.
    </div>
    
    <button class="gl-btn gl-btn-primary" style="margin-top:20px;" onclick="addXP(40, 'Flujo de trabajo comprendido'); this.disabled=true; this.textContent='✅ XP Ganado';">✅ Completar Flujo (+40 XP)</button>
  </div>
</div>

<!-- Pestaña 3: Mapa de Herramientas -->
<div id="tab-herramientas" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧰</span> Mapa de Herramientas</h3>
    <p>Compara y selecciona las mejores herramientas de IA para cada fase de tu presentación.</p>
    
    <div style="margin:20px 0;">
      <div style="display:flex; gap:10px; margin-bottom:15px;">
        <select id="tool-category" style="flex:1; padding:10px; background:#1e293b; border:1px solid #334155; border-radius:8px; color:#fff;" onchange="filterTools()">
          <option value="all">Todas las categorías</option>
          <option value="slides">Diseño de Slides</option>
          <option value="narrative">Narrativa</option>
          <option value="design">Diseño Visual</option>
          <option value="avatars">Avatares y Voz</option>
          <option value="coaching">Coaching</option>
        </select>
        <select id="tool-cost" style="flex:1; padding:10px; background:#1e293b; border:1px solid #334155; border-radius:8px; color:#fff;" onchange="filterTools()">
          <option value="all">Todos los costos</option>
          <option value="freemium">Freemium</option>
          <option value="premium">Premium</option>
          <option value="subscription">Suscripción</option>
          <option value="credits">Créditos</option>
          <option value="empresarial">Empresarial</option>
        </select>
        <button class="gl-btn" onclick="resetFilters()" style="padding:10px 15px;">🔄 Reiniciar</button>
      </div>
      
      <div id="tools-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:15px; margin-top:20px;">
        <!-- Las herramientas se cargarán dinámicamente -->
      </div>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Recomendación:</strong> Para proyectos rápidos: Gamma + ChatGPT. Para presentaciones ejecutivas: Beautiful.AI + Claude. Para presentaciones con avatares: Synthesia + ElevenLabs.
    </div>
    
    <button class="gl-btn gl-btn-primary" style="margin-top:20px;" onclick="addXP(50, 'Herramientas comparadas'); this.disabled=true; this.textContent='✅ XP Ganado';">✅ Completar Comparación (+50 XP)</button>
  </div>
</div>

<!-- Pestaña 4: Constructor -->
<div id="tab-constructor" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🏗️</span> Constructor de Presentaciones</h3>
    <p>Diseña tu presentación paso a paso con asistencia de IA.</p>
    
    <div style="margin:20px 0;">
      <div style="background:rgba(37,99,235,0.05); border:1px solid rgba(37,99,235,0.2); border-radius:12px; padding:20px;">
        <h4 style="color:#60a5fa; margin-top:0;">📋 Configuración Inicial</h4>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Tipo de Presentación</label>
            <select id="presentation-type" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
              <option value="executive">Ejecutiva</option>
              <option value="educational">Educativa</option>
              <option value="persuasive">Persuasiva</option>
              <option value="pitch">Pitch</option>
              <option value="report">Reporte</option>
            </select>
          </div>
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Duración (min)</label>
            <input type="number" id="presentation-duration" min="5" max="60" value="15" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
          </div>
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Audiencia</label>
            <select id="presentation-audience" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
              <option value="directivos">Directivos</option>
              <option value="equipo">Equipo</option>
              <option value="clientes">Clientes</option>
              <option value="estudiantes">Estudiantes</option>
              <option value="inversores">Inversores</option>
            </select>
          </div>
        </div>
        
        <div style="margin-top:20px;">
          <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Objetivo Principal</label>
          <textarea id="presentation-goal" rows="3" style="width:100%; padding:10px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff; resize:vertical;" placeholder="Ej: Informar sobre avances del proyecto y solicitar aprobación para la siguiente fase..."></textarea>
        </div>
        
        <button class="gl-btn gl-btn-primary" style="margin-top:15px; width:100%;" onclick="generatePresentationPlan()">🚀 Generar Plan de Presentación</button>
      </div>
      
      <div id="presentation-plan-output" style="margin-top:20px; display:none;">
        <!-- El plan se mostrará aquí -->
      </div>
      
      <!-- Diseñador de Slides -->
      <div style="margin-top:40px; border-top:2px solid rgba(255,255,255,0.1); padding-top:30px;">
        <h4 style="color:#fbbf24; margin-top:0;">🎨 Diseñador de Slides</h4>
        <p style="color:#cbd5e1; font-size:0.9rem;">Selecciona una plantilla y personaliza los elementos visuales de tus diapositivas.</p>
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:15px; margin-top:20px;">
          <div class="slide-template" style="background:rgba(37,99,235,0.1); border:2px solid rgba(37,99,235,0.3); border-radius:12px; padding:20px; text-align:center; cursor:pointer;" onclick="selectTemplate('executive')">
            <div style="font-size:2rem; margin-bottom:10px;">💼</div>
            <h5 style="margin:0 0 8px; color:#fff;">Ejecutiva</h5>
            <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Formal, minimalista, datos destacados</p>
          </div>
          <div class="slide-template" style="background:rgba(16,185,129,0.1); border:2px solid rgba(16,185,129,0.3); border-radius:12px; padding:20px; text-align:center; cursor:pointer;" onclick="selectTemplate('creative')">
            <div style="font-size:2rem; margin-bottom:10px;">🎨</div>
            <h5 style="margin:0 0 8px; color:#fff;">Creativa</h5>
            <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Visual, moderna, impactante</p>
          </div>
          <div class="slide-template" style="background:rgba(245,158,11,0.1); border:2px solid rgba(245,158,11,0.3); border-radius:12px; padding:20px; text-align:center; cursor:pointer;" onclick="selectTemplate('educational')">
            <div style="font-size:2rem; margin-bottom:10px;">📚</div>
            <h5 style="margin:0 0 8px; color:#fff;">Educativa</h5>
            <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Clara, estructurada, didáctica</p>
          </div>
          <div class="slide-template" style="background:rgba(168,85,247,0.1); border:2px solid rgba(168,85,247,0.3); border-radius:12px; padding:20px; text-align:center; cursor:pointer;" onclick="selectTemplate('pitch')">
            <div style="font-size:2rem; margin-bottom:10px;">🚀</div>
            <h5 style="margin:0 0 8px; color:#fff;">Pitch</h5>
            <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Dinámica, persuasiva, llamativa</p>
          </div>
        </div>
        
        <div style="margin-top:30px;">
          <h5 style="color:#fff; margin:0 0 15px;">🎛️ Personalización</h5>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px;">
            <div>
              <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Color Principal</label>
              <select id="slide-color" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
                <option value="#2563eb">Azul Profesional</option>
                <option value="#10b981">Verde Moderno</option>
                <option value="#f59e0b">Ámbar Energético</option>
                <option value="#8b5cf6">Púrpura Creativo</option>
              </select>
            </div>
            <div>
              <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Densidad de Contenido</label>
              <select id="slide-density" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
                <option value="minimal">Minimalista (más visual)</option>
                <option value="balanced">Equilibrado</option>
                <option value="detailed">Detallado (más texto)</option>
              </select>
            </div>
            <div>
              <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Estilo de Imágenes</label>
              <select id="slide-images" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
                <option value="realistic">Fotografías realistas</option>
                <option value="illustrative">Ilustraciones</option>
                <option value="abstract">Abstracto/geométrico</option>
                <option value="none">Sin imágenes</option>
              </select>
            </div>
          </div>
        </div>
        
        <div style="margin-top:30px;">
          <button class="gl-btn gl-btn-primary" style="width:100%;" onclick="designSlide()">✨ Generar Diseño de Slide</button>
        </div>
        
        <div id="slide-design-output" style="margin-top:20px; display:none;">
          <!-- El diseño generado se mostrará aquí -->
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Pestaña 5: Generador de Prompts -->
<div id="tab-generador" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📝</span> Generador de Prompts</h3>
    <p>Crea prompts específicos para cada herramienta de IA.</p>
    
    <div style="margin:20px 0;">
      <div style="background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); border-radius:12px; padding:20px;">
        <h4 style="color:#34d399; margin-top:0;">⚙️ Configuración del Prompt</h4>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Tipo de Prompt</label>
            <select id="prompt-type" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
              <option value="executive">Ejecutivo</option>
              <option value="educational">Educativo</option>
              <option value="persuasive">Persuasivo</option>
            </select>
          </div>
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Audiencia</label>
            <select id="prompt-audience" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
              <option value="directivos">Directivos</option>
              <option value="equipo">Equipo</option>
              <option value="clientes">Clientes</option>
              <option value="estudiantes">Estudiantes</option>
            </select>
          </div>
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Duración (min)</label>
            <input type="number" id="prompt-duration" min="5" max="60" value="15" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
          </div>
        </div>
        
        <div style="margin-top:15px;">
          <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Objetivo</label>
          <input type="text" id="prompt-goal" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;" placeholder="Ej: informar y reportar avances">
        </div>
        
        <button class="gl-btn gl-btn-primary" style="margin-top:15px; width:100%;" onclick="generatePresentationPrompt()">✨ Generar Prompt</button>
      </div>
      
      <div id="prompt-output" style="margin-top:20px;">
        <!-- El prompt se mostrará aquí -->
      </div>
    </div>
  </div>
</div>

<!-- Pestaña 6: Simulador de Presentación -->
<div id="tab-simulador" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🎤</span> Simulador de Presentación</h3>
    <p>Practica tu presentación con retroalimentación de IA en tiempo real.</p>
    
    <div style="margin:20px 0;">
      <div style="background:rgba(168,85,247,0.05); border:1px solid rgba(168,85,247,0.2); border-radius:12px; padding:20px;">
        <h4 style="color:#a855f7; margin-top:0;">🎯 Configuración del Simulador</h4>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Tipo de Presentación</label>
            <select id="sim-type" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
              <option value="pitch">Pitch</option>
              <option value="executive">Ejecutiva</option>
              <option value="educational">Educativa</option>
              <option value="persuasive">Persuasiva</option>
            </select>
          </div>
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Duración (min)</label>
            <input type="number" id="sim-duration" min="1" max="30" value="5" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
          </div>
          <div>
            <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Nivel de Dificultad</label>
            <select id="sim-difficulty" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="advanced">Avanzado</option>
            </select>
          </div>
        </div>
        
        <div style="margin-top:15px;">
          <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Tu Guión (opcional)</label>
          <textarea id="sim-script" rows="3" style="width:100%; padding:10px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff; resize:vertical;" placeholder="Pega aquí tu guión para recibir retroalimentación específica..."></textarea>
        </div>
        
        <button class="gl-btn gl-btn-primary" style="margin-top:15px; width:100%;" onclick="startPresentationSimulation()">🎬 Iniciar Simulación</button>
      </div>
      
      <div id="simulation-output" style="margin-top:20px; display:none;">
        <!-- La simulación se mostrará aquí -->
      </div>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Consejo:</strong> El simulador analiza tu velocidad, claridad, uso de pausas y estructura. Practica al menos 3 veces antes de tu presentación real.
    </div>
    
    <button class="gl-btn gl-btn-primary" style="margin-top:20px;" onclick="addXP(60, 'Simulación completada'); this.disabled=true; this.textContent='✅ XP Ganado';">✅ Completar Simulación (+60 XP)</button>
  </div>
</div>

<!-- Pestaña 7: Evaluador de Calidad -->
<div id="tab-evaluador" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📊</span> Evaluador de Calidad</h3>
    <p>Evalúa la calidad de tu presentación según criterios profesionales de IA.</p>
    
    <div style="margin:20px 0;">
      <div style="background:rgba(14,165,233,0.05); border:1px solid rgba(14,165,233,0.2); border-radius:12px; padding:20px;">
        <h4 style="color:#0ea5e9; margin-top:0;">📈 Criterios de Evaluación</h4>
        <p style="color:#cbd5e1; font-size:0.9rem;">Selecciona los aspectos que deseas evaluar en tu presentación:</p>
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
          <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
              <input type="checkbox" id="criteria-clarity" checked style="width:18px; height:18px;">
              <label for="criteria-clarity" style="color:#fff; font-weight:bold;">Claridad</label>
            </div>
            <p style="color:#94a3b8; font-size:0.8rem; margin:0;">¿El mensaje principal es claro y conciso?</p>
          </div>
          
          <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
              <input type="checkbox" id="criteria-structure" checked style="width:18px; height:18px;">
              <label for="criteria-structure" style="color:#fff; font-weight:bold;">Estructura</label>
            </div>
            <p style="color:#94a3b8; font-size:0.8rem; margin:0;">¿La presentación tiene un flujo lógico?</p>
          </div>
          
          <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
              <input type="checkbox" id="criteria-visuals" checked style="width:18px; height:18px;">
              <label for="criteria-visuals" style="color:#fff; font-weight:bold;">Visuales</label>
            </div>
            <p style="color:#94a3b8; font-size:0.8rem; margin:0;">¿Los elementos visuales apoyan el mensaje?</p>
          </div>
          
          <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
              <input type="checkbox" id="criteria-engagement" checked style="width:18px; height:18px;">
              <label for="criteria-engagement" style="color:#fff; font-weight:bold;">Engagement</label>
            </div>
            <p style="color:#94a3b8; font-size:0.8rem; margin:0;">¿La presentación mantiene el interés?</p>
          </div>
        </div>
        
        <div style="margin-top:20px;">
          <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">URL de tu presentación (opcional)</label>
          <input type="text" id="presentation-url" style="width:100%; padding:10px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;" placeholder="https://gamma.app/... o sube un archivo">
        </div>
        
        <button class="gl-btn gl-btn-primary" style="margin-top:20px; width:100%;" onclick="evaluatePresentationQuality()">📊 Evaluar Calidad</button>
      </div>
      
      <div id="quality-output" style="margin-top:20px; display:none;">
        <!-- Los resultados se mostrarán aquí -->
      </div>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Metricas clave:</strong> Las presentaciones de alto impacto suelen tener claridad >90%, estructura >85%, visuales >80% y engagement >75%.
    </div>
    
    <button class="gl-btn gl-btn-primary" style="margin-top:20px;" onclick="addXP(70, 'Evaluación de calidad completada'); this.disabled=true; this.textContent='✅ XP Ganado';">✅ Completar Evaluación (+70 XP)</button>
  </div>
</div>

<!-- Pestaña 8: Proyecto Final -->
<div id="tab-proyecto" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🏆</span> Proyecto Final</h3>
    <p>Crea una presentación completa usando todo lo aprendido en el módulo.</p>
    
    <div style="margin:20px 0;">
      <div style="background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.2); border-radius:12px; padding:20px;">
        <h4 style="color:#fbbf24; margin-top:0;">🎯 Desafío Final</h4>
        <p style="color:#cbd5e1;">Crea una presentación ejecutiva de 10 minutos para convencer a inversores de financiar un proyecto de IA en tu organización.</p>
        
        <div style="margin-top:20px;">
          <h5 style="color:#fff; margin-bottom:10px;">Requisitos:</h5>
          <ul style="color:#cbd5e1; padding-left:20px; margin:0;">
            <li>Usa al menos 3 herramientas de IA diferentes</li>
            <li>Incluye narrativa generada por IA</li>
            <li>Incluye al menos 2 imágenes generadas por IA</li>
            <li>Prepara un guión de presentación</li>
            <li>Practica con una herramienta de coaching de IA</li>
          </ul>
        </div>
        
        <!-- Planificador de Proyecto -->
        <div style="margin-top:30px; border-top:2px solid rgba(255,255,255,0.1); padding-top:25px;">
          <h5 style="color:#fff; margin-bottom:15px;">📅 Planificador de Proyecto</h5>
          <p style="color:#cbd5e1; font-size:0.9rem;">Genera un plan paso a paso con hitos y herramientas recomendadas.</p>
          
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
            <div>
              <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Días disponibles</label>
              <input type="number" id="project-days" min="1" max="14" value="7" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
            </div>
            <div>
              <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Nivel de experiencia</label>
              <select id="project-experience" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
                <option value="beginner">Principiante</option>
                <option value="intermediate">Intermedio</option>
                <option value="advanced">Avanzado</option>
              </select>
            </div>
            <div>
              <label style="display:block; margin-bottom:5px; color:#cbd5e1; font-size:0.8rem;">Enfoque principal</label>
              <select id="project-focus" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; border-radius:6px; color:#fff;">
                <option value="content">Contenido y narrativa</option>
                <option value="design">Diseño visual</option>
                <option value="delivery">Entrega y práctica</option>
                <option value="balanced">Equilibrado</option>
              </select>
            </div>
          </div>
          
          <button class="gl-btn gl-btn-secondary" style="margin-top:15px; width:100%;" onclick="generateProjectPlan()">📋 Generar Plan de Proyecto</button>
          
          <div id="project-plan-output" style="margin-top:20px; display:none;">
            <!-- El plan se mostrará aquí -->
          </div>
        </div>
        
        <div style="margin-top:20px;">
          <button class="gl-btn gl-btn-primary" onclick="startFinalProject()">🚀 Iniciar Proyecto</button>
          <button class="gl-btn" onclick="showProjectTemplate()" style="margin-left:10px;">📋 Ver Plantilla</button>
        </div>
      </div>
      
      <div id="project-progress" style="margin-top:20px; display:none;">
        <!-- Progreso del proyecto se mostrará aquí -->
      </div>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Consejo final:</strong> La IA es tu equipo creativo, no tu reemplazo. Tu criterio, experiencia y conexión humana son lo que diferencia una buena presentación de una extraordinaria.
    </div>
    
    <button class="gl-btn gl-btn-primary" style="margin-top:20px;" onclick="completeFinalProject(); this.disabled=true; this.textContent='✅ Proyecto Completado';">✅ Completar Proyecto Final (+200 XP)</button>
  </div>
</div>

`;
  // Retornar la instancia del módulo
  console.log('[Presentaciones Pro] Retornando instancia del módulo');
  return {
    html: moduleHTML,
    init: initModule,
    switchTab,
    addXP,
    unlockBadge,
    generatePresentationPrompt,
    filterTools,
    resetFilters,
    initToolsGrid,
    generatePresentationPlan,
    startFinalProject,
    showProjectTemplate,
    completeFinalProject
  };
})();
