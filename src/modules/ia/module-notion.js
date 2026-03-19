window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-notion'] = (function() {
  /* ═══════════════════════════════════════════
     MÓDULO BONUS: Notion AI (Sovereign Edition)
     Versión 31.4 — Ultra-Simulador Premium
     ═══════════════════════════════════════════ */

  const notionHTML = `
<style>
  :root {
    --notion-bg: #ffffff;
    --notion-text: #374151;
    --notion-accent: #a972ff;
    --notion-glass: rgba(255, 255, 255, 0.7);
    --notion-border: rgba(0, 0, 0, 0.1);
  }

  .m-notion-container {
    perspective: 1000px;
    margin-bottom: 30px;
    color: var(--notion-text);
  }

  .m-notion-card {
    background: var(--notion-bg);
    border: 1px solid var(--notion-border);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }

  /* Editor Magic */
  .m-notion-editor {
    border: 1px solid var(--notion-border);
    border-radius: 8px;
    padding: 20px;
    min-height: 200px;
    position: relative;
    background: #fff;
    cursor: text;
  }

  .m-notion-block {
    min-height: 1.5em;
    outline: none;
  }

  .m-notion-block:empty::before {
    content: attr(data-placeholder);
    color: #9ca3af;
  }

  /* Scenario chips */
  .m-notion-scenarios {
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
  }

  .scenario-chip {
    padding: 6px 14px;
    border-radius: 20px;
    background: #f3f4f6;
    font-size: 0.8rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.2s;
  }

  .scenario-chip.active {
    background: #eff6ff;
    color: #2563eb;
    border-color: #bfdbfe;
    font-weight: 700;
  }

  /* Floating Menu AI */
  .m-notion-menu {
    position: absolute;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    width: 240px;
    z-index: 100;
    display: none;
    padding: 8px;
  }

  .m-notion-menu.active {
    display: block;
    animation: popIn 0.2s ease;
  }

  @keyframes popIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  .m-notion-menu-item {
    padding: 8px 12px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: 0.2s;
  }

  .m-notion-menu-item:hover {
    background: #f9fafb;
  }

  .m-notion-menu-item .icon { font-size: 1.1rem; }

  /* AI Results Formats */
  .m-notion-result-ai {
    background: #fbfaff;
    border-left: 3px solid #a972ff;
    padding: 15px;
    margin-top: 10px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }

  .m-notion-result-ai h4 { margin-top: 0; color: #7c3aed; }

  /* DB Simulation */
  .m-notion-table { width: 100%; border-collapse: collapse; }
  .m-notion-table th, .m-notion-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }
  .m-notion-tag { padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; }

  /* Loading AI */
  .m-notion-loading {
    display: none;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    color: #4b5563;
  }

  .m-notion-loading.active { display: flex; }

  .m-notion-spinner {
    width: 16px; height: 16px;
    border: 2px solid #e5e7eb;
    border-top-color: #a972ff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
</style>

<div class="m-notion-container">
  <div class="module-header premium-header" style="background: rgba(169,114,255,0.02);">
    <div class="module-number gamer-badge" style="background:#a972ff;color:#fff;">BONUS: PRODUCTIVIDAD</div>
    <h2 class="module-title glow-text" style="color:#7c3aed;">🐘 Notion AI: El Cerebro Digital</h2>
    <p class="module-description">No uses Notion para guardar notas. Úsalo para que escriban y piensen por ti.</p>
  </div>

  <div class="ag-tabs game-tabs" style="margin-bottom:28px;">
    <button class="tab-btn active" data-tab="m-no-editor">🪄 Editor Mágico</button>
    <button class="tab-btn" data-tab="m-no-concept">📚 Conceptos</button>
    <button class="tab-btn" data-tab="m-no-db">🗃️ Autofill DB</button>
    <button class="tab-btn" data-tab="m-no-qa">🔎 Ask Notion</button>
    <button class="tab-btn" data-tab="m-no-cases">🧭 Casos Prácticos</button>
    <button class="tab-btn" data-tab="m-no-mission">🏆 Reto Final</button>
  </div>

  <!-- TAB 1: EDITOR MAGICO -->
  <div id="m-no-editor" class="ag-content active">
    <div class="m-notion-card animate-in">
      <h3>🎭 Elige tu Escenario:</h3>
      <div class="m-notion-scenarios">
        <div class="scenario-chip active" onclick="mNotionChangeScenario('reunion', this)">🗓️ Minuta Reunión</div>
        <div class="scenario-chip" onclick="mNotionChangeScenario('pitch', this)">🚀 Pitch Startup</div>
        <div class="scenario-chip" onclick="mNotionChangeScenario('draft', this)">📃 Borrador Documento</div>
      </div>

      <div style="margin-bottom:15px; font-size:0.9rem;">
        <span id="notion-title" style="font-weight:800; color:#374151;">Minuta: Lanzamiento Q2</span>
        <div id="notion-context" style="background:#f9fafb; padding:12px; border-radius:8px; margin-top:8px; font-size:0.8rem; color:#6b7280; border:1px dashed #d1d5db;">
          <strong>Notas Crudas:</strong><br>Presupuesto: 5k usd. Fecha: 15 de Abril. Responsables: Luis (Web), Ana (Catering), Juan (Prensa). Faltan permisos de alcaldía. Necesitamos influencers.
        </div>
      </div>

      <div class="m-notion-editor">
        <div id="notion-block" class="m-notion-block" contenteditable="true" data-placeholder="Presiona Espacio para estructurar la minuta..."></div>
        
        <!-- Menu Flotante AI -->
        <div id="notion-menu" class="m-notion-menu">
          <div style="font-size:0.65rem; color:#9ca3af; padding:4px 12px; font-weight:700;">ACCIONES IA</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('resume')"><span class="icon">✨</span> Resumir y Estructurar</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('checklist')"><span class="icon">✅</span> Crear Checklist</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('brainstorm')"><span class="icon">💡</span> Lluvia de Ideas</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('tone')"><span class="icon">👔</span> Cambiar a Tono Profesional</div>
          <div class="m-notion-menu-item" onclick="mNotionExec('translate')"><span class="icon">🌐</span> Traducir a Inglés</div>
        </div>

        <div class="m-notion-loading" id="notion-loading" style="position:absolute; bottom:15px; right:15px;">
          <div class="m-notion-spinner"></div> <span class="glow-ai">La IA está pensando...</span>
        </div>
      </div>
      
      <p style="font-size:0.75rem; color:#9ca3af; margin-top:12px; text-align:center;">💡 <i>Truco: En Notion, escribe <b>/ai</b> para activar este panel.</i></p>
    </div>
  </div>

  <!-- TAB 2: CONCEPTO -->
  <div id="m-no-concept" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🧠</span> ¿Por qué Notion AI?</h3>
      <p>Notion no es un procesador de texto, es una **Base de Conocimientos Relacional**. La IA de Notion tiene "memoria" de todos tus documentos.</p>
      
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:20px;">
        <div style="background:rgba(169,114,255,0.05); padding:15px; border-radius:12px; border:1px solid rgba(169,114,255,0.2);">
          <h4 style="color:#a972ff; margin-top:0;">📝 Escritura Generativa</h4>
          <p style="font-size:0.8rem;">Escribe borradores, cambia el tono, corrige gramática o alarga párrafos con un clic.</p>
        </div>
        <div style="background:rgba(16,185,129,0.05); padding:15px; border-radius:12px; border:1px solid rgba(16,185,129,0.2);">
          <h4 style="color:#10b981; margin-top:0;">📊 Inteligencia de Datos</h4>
          <p style="font-size:0.8rem;">Extrae automáticamente resúmenes o categorías de tablas gigantes de feedback.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 3: AUTOFILL DB -->
  <div id="m-no-db" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🗃️</span> Inteligencia en Bases de Datos</h3>
      <p>Ahorra horas de trabajo manual. Deja que la IA categorice y extraiga información de cientos de registros al instante.</p>
      
      <div style="background:#0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius:12px; overflow:hidden; margin-top:20px;">
        <table class="m-notion-table" style="border-collapse: separate; border-spacing: 0;">
          <tr>
            <th style="border-top-left-radius: 8px;">Entrada (Feedback)</th>
            <th style="width:140px;">Categoría</th>
            <th class="m-notion-ai-col glow-ai" style="width:180px; border-top-right-radius: 8px;">✨ Sentimiento AI</th>
          </tr>
          <tr>
            <td style="font-size:0.85rem;">"El login falla constantemente en Android."</td>
            <td><span class="m-notion-tag" style="background:rgba(239,68,68,0.1); color:#f87171; border: 1px solid rgba(239,68,68,0.2);">Bug</span></td>
            <td class="m-notion-ai-col" id="db-s-1"></td>
          </tr>
          <tr>
            <td style="font-size:0.85rem;">"Me encantó la nueva interfaz es muy fluida."</td>
            <td><span class="m-notion-tag" style="background:rgba(16,185,129,0.1); color:#10b981; border: 1px solid rgba(16,185,129,0.2);">Felicitación</span></td>
            <td class="m-notion-ai-col" id="db-s-2"></td>
          </tr>
          <tr>
            <td style="font-size:0.85rem;">"¿Cuándo sacarán la versión para iPad?"</td>
            <td><span class="m-notion-tag" style="background:rgba(59,130,246,0.1); color:#60a5fa; border: 1px solid rgba(59,130,246,0.2);">Sugerencia</span></td>
            <td class="m-notion-ai-col" id="db-s-3"></td>
          </tr>
        </table>
      </div>
      
      <div style="text-align:right; margin-top:20px;">
        <button class="gl-btn gl-btn-primary" onclick="mNotionAutofill(this)" id="btn-autofill">🪄 Procesar con Notion AI</button>
      </div>
    </div>
  </div>

  <!-- TAB 4: Q&A ESPACIO -->
  <div id="m-no-qa" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🔎</span> Ask Notion AI</h3>
      <p>Pregunta sobre cualquier dato en tu sistema. La IA busca en todos tus proyectos y reuniones para darte la respuesta exacta.</p>
      
      <div class="m-notion-search-bar" style="margin-top:25px; padding:15px; background:rgba(255,255,255,0.02); border-color:rgba(255,255,255,0.1);">
        <span style="font-size:1.4rem;">✨</span>
        <input type="text" id="notion-qa-input" class="m-notion-search-input" placeholder="Ej: '¿Quién es el encargado del catering?'" onkeydown="if(event.key==='Enter') mNotionSearch()">
        <button class="gl-btn" style="background:#4752c4; padding:8px 20px;" onclick="mNotionSearch()">Consultar</button>
      </div>
      
      <div class="m-notion-loading" id="notion-load-qa" style="margin-top:20px;">
        <div class="m-notion-spinner"></div> Buscando en el cerebro digital...
      </div>
      
      <div id="notion-qa-res" class="animate-in" style="background:rgba(0,0,0,0.2); border:1px solid rgba(169,114,255,0.3); padding:20px; border-radius:12px; display:none; color:#e2e8f0; line-height:1.7; margin-top:20px;"></div>
    </div>
  </div>

  <div id="m-no-cases" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🧭</span> Tres Usos de Notion AI que Sí Ahorran Tiempo</h3>
      <p>Notion AI vale la pena cuando ya tienes información dentro del workspace y quieres estructurar, clasificar o consultar sin empezar desde cero.</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:18px;">
        <div style="background:rgba(169,114,255,0.05); border:1px solid rgba(169,114,255,0.2); border-radius:12px; padding:16px;">
          <div style="font-size:0.72rem; font-weight:800; color:#a972ff; margin-bottom:8px;">CASO 1 · REDACCIÓN</div>
          <h4 style="margin:0 0 8px; color:#e2e8f0;">Convertir notas crudas en minuta</h4>
          <p style="font-size:0.78rem; color:#cbd5e1; margin:0 0 10px;">Pega ideas sueltas y usa `/ai` para estructurar una página lista para compartir.</p>
          <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">1. Crea una página.<br>2. Pega notas caóticas.<br>3. Usa `/ai` o menú contextual.<br>4. Pide minuta con responsables y próximos pasos.</div>
          <div style="font-size:0.72rem; color:#c4b5fd; margin-top:8px;">Resultado esperado: acta o minuta sin reescribir todo a mano.</div>
          <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#a972ff; color:#a972ff;" onclick="mNotionCopyText(this, 'Convierte estas notas crudas en una minuta profesional. Usa esta estructura: objetivo, asistentes, puntos tratados, decisiones y próximos pasos con responsable. Mantén tono claro y ejecutivo.')">📋 Copiar Prompt del Caso 1</button>
        </div>
        <div style="background:rgba(169,114,255,0.05); border:1px solid rgba(169,114,255,0.2); border-radius:12px; padding:16px;">
          <div style="font-size:0.72rem; font-weight:800; color:#a972ff; margin-bottom:8px;">CASO 2 · BASES</div>
          <h4 style="margin:0 0 8px; color:#e2e8f0;">Clasificar feedback o tickets</h4>
          <p style="font-size:0.78rem; color:#cbd5e1; margin:0 0 10px;">Deja que Notion categorice, etiquete sentimiento y convierta tablas simples en tableros útiles.</p>
          <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">1. Crea una base.<br>2. Agrega 5 comentarios o tickets.<br>3. Usa autofill AI.<br>4. Revisa si categoría y sentimiento quedaron coherentes.</div>
          <div style="font-size:0.72rem; color:#c4b5fd; margin-top:8px;">Resultado esperado: la tabla ya se puede filtrar por tipo de problema o urgencia.</div>
          <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#a972ff; color:#a972ff;" onclick="mNotionCopyText(this, 'Clasifica cada registro en una categoría útil para gestión. Además, asigna sentimiento: positivo, neutro o crítico. Si detectas una falla repetida, márcala como prioritaria.')">📋 Copiar Prompt del Caso 2</button>
        </div>
        <div style="background:rgba(169,114,255,0.05); border:1px solid rgba(169,114,255,0.2); border-radius:12px; padding:16px;">
          <div style="font-size:0.72rem; font-weight:800; color:#a972ff; margin-bottom:8px;">CASO 3 · BÚSQUEDA</div>
          <h4 style="margin:0 0 8px; color:#e2e8f0;">Preguntar al espacio de trabajo</h4>
          <p style="font-size:0.78rem; color:#cbd5e1; margin:0 0 10px;">Busca responsables, decisiones y datos dispersos sin abrir cinco páginas distintas.</p>
          <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">1. Ten páginas y bases relacionadas.<br>2. Abre Ask Notion.<br>3. Haz una pregunta concreta.<br>4. Confirma si la respuesta realmente sale del workspace.</div>
          <div style="font-size:0.72rem; color:#c4b5fd; margin-top:8px;">Resultado esperado: respuesta precisa, contextual y lista para actuar.</div>
          <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#a972ff; color:#a972ff;" onclick="mNotionCopyText(this, 'Responde usando únicamente la información existente en este workspace. Si la respuesta no está clara, indica qué página o base debería consultarse primero en lugar de inventar.')">📋 Copiar Prompt del Caso 3</button>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 6: RETO FINAL -->
  <div id="m-no-mission" class="ag-content">
    <div class="exercise-box mission-card animate-in">
      <div class="exercise-header"><span class="exercise-icon">📝</span><span class="exercise-title">Reto Final: Base de Conocimiento Viva</span></div>
      <div class="mission-instructions" style="background:rgba(169,114,255,0.05); padding:25px; border-radius:16px; border:1px solid rgba(169,114,255,0.2); margin:20px 0;">
        <h4 style="margin-top:0; color:#a972ff;">🎯 Objetivo de Hoy:</h4>
        <ul style="margin-top:15px; font-size:0.9rem; line-height:1.8; color:#cbd5e1;">
          <li>Crea una página estructurada con IA.</li>
          <li>Construye una base simple con 5 registros y clasifícala con IA.</li>
          <li>Haz 3 consultas útiles con Ask Notion sobre ese mismo espacio.</li>
        </ul>
      </div>
      <textarea class="premium-textarea" placeholder="Escribe qué página crearías, qué base clasificarías y qué 3 preguntas útiles harías a Notion AI..." style="height:120px;"></textarea>
      <div class="reward-tag" style="margin-top:20px;">💎 +150 XP · 🏆 Insignia: Arquitecto del Conocimiento</div>
      <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-notion" style="width:100%; margin-top:20px; background:linear-gradient(90deg, #7c3aed, #a972ff); height:50px; font-weight:700;">FINALIZAR Y RECLAMAR XP</button>
    </div>
  </div>

  <div class="module-nav">
    <button class="gl-btn gl-btn-primary" data-goto="module-13">← Atrás</button>
  </div>
</div>
`;

  return {
    init: function(app) {
      const parent = document.getElementById('module-notion');
      if (!parent) return;
      parent.innerHTML = notionHTML;

      // Tabs logic
      const tabs = parent.querySelectorAll('.tab-btn');
      const contents = parent.querySelectorAll('.ag-content');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));
          tab.classList.add('active');
          const target = parent.querySelector('#' + tab.dataset.tab);
          if (target) target.classList.add('active');
        });
      });

      // Scenarios data
      const scenarios = {
        reunion: {
          title: "Minuta: Lanzamiento Q2",
          context: "<strong>Notas Crudas:</strong><br>Presupuesto: 5k usd. Fecha: 15 de Abril. Responsables: Luis (Web), Ana (Catering), Juan (Prensa). Faltan permisos de alcaldía. Necesitamos influencers.",
          placeholder: "Presiona Espacio para estructurar la minuta..."
        },
        pitch: {
          title: "Pitch: AI Health Assistant",
          context: "<strong>Ideas Sueltas:</strong><br>App detecta síntomas. Usa GPT-4. Modelo suscripción $9/mes. Target: personas 30-50 años. Necesitamos $50k inversión inicial para MVP.",
          placeholder: "Presiona Espacio para mejorar el pitch..."
        },
        draft: {
          title: "Borrador: Política de IA",
          context: "<strong>Directrices:</strong><br>Prohibido usar datos sensibles. Transparencia con el cliente. Auditoría semanal. Ética por encima de rapidez.",
          placeholder: "Presiona Espacio para redactar la política..."
        }
      };

      window.mNotionChangeScenario = function(key, btn) {
        const s = scenarios[key];
        const title = document.getElementById('notion-title');
        const ctx = document.getElementById('notion-context');
        const block = document.getElementById('notion-block');
        const btns = parent.querySelectorAll('.scenario-chip');

        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        title.textContent = s.title;
        ctx.innerHTML = s.context;
        block.innerHTML = '';
        block.dataset.placeholder = s.placeholder;
      };

      // Editor Logic
      let menuOpen = false;
      const block = document.getElementById('notion-block');
      const menu = document.getElementById('notion-menu');

      block.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && block.textContent.trim() === '') {
          e.preventDefault();
          menu.style.top = (block.offsetTop + 40) + 'px';
          menu.style.left = block.offsetLeft + 'px';
          menu.classList.add('active');
          menuOpen = true;
        }
      });

      document.addEventListener('click', (e) => {
        if (menuOpen && !e.target.closest('#notion-menu') && e.target !== block) {
          menu.classList.remove('active');
          menuOpen = false;
        }
      });

      window.mNotionExec = function(action) {
        menu.classList.remove('active');
        menuOpen = false;

        const loader = document.getElementById('notion-loading');
        loader.classList.add('active');

        const currentTitle = document.getElementById('notion-title').textContent;

        setTimeout(() => {
          loader.classList.remove('active');
          let res = '<div class="m-notion-result-ai">';
          const checkIcon = '✅';
          const aiIcon = '✨';

          if (action === 'resume') {
            res += '<h4>' + aiIcon + ' Resumen Ejecutivo:</h4><ul>' +
              '<li><b>Evento:</b> ' + currentTitle + '</li>' +
              '<li><b>Hito Clave:</b> Definido para el 15 de Abril.</li>' +
              '<li><b>Presupuesto:</b> $5,000 USD asignados.</li>' +
              '<li><b>Riesgo:</b> Pendiente gestión de permisos legales.</li>' +
              '</ul>';
          } else if (action === 'checklist') {
            res += '<h4>' + checkIcon + ' Plan de Acción Directo:</h4>' +
              '<div style="margin-left:10px;">' +
              '<input type="checkbox" checked disabled style="margin-right:8px;"> Contactar a Luis por el sitio web<br>' +
              '<input type="checkbox" disabled style="margin-right:8px;"> Coordinar menú con Ana<br>' +
              '<input type="checkbox" disabled style="margin-right:8px;"> Enviar nota de prensa (Juan)<br>' +
              '<input type="checkbox" disabled style="margin-right:8px;"> Aplicar a permisos de alcaldía' +
              '</div>';
          } else if (action === 'tone') {
            res += '<h4>' + aiIcon + ' Versión Profesional:</h4>' +
              '<p>Se ha formalizado la propuesta para el proyecto "' + currentTitle + '". El despliegue está programado para mediados de abril, sujeto a la regularización normativa local. Se requiere una inversión inicial de 5k USD para cubrir los rubros operativos básicos.</p>';
          } else if (action === 'brainstorm') {
            res += '<h4>💡 Ideas Creativas Propuestas:</h4>' +
              '<ol>' +
              '<li>Gamificar el registro mediante códigos QR en la ciudad.</li>' +
              '<li>Lanzar una cuenta regresiva interactiva en redes sociales.</li>' +
              '<li>Alianza con micro-influencers del sector tecnológico.</li>' +
              '</ol>';
          } else if (action === 'translate') {
            res += '<h4>🌐 English Translation:</h4>' +
              '<p><i>Draft for: ' + currentTitle + '</i><br>The launch is scheduled for April 15th with a budget of 5k USD. Luis will handle the web development, while Ana manages catering and Juan oversees press relations. Key bottleneck: government permits.</p>';
          }
          res += '</div>';
          block.innerHTML = res;
          if (app) app.addXP(40);
        }, 1500);
      };

      // Other simulators
      window.mNotionAutofill = function(btn) {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.innerHTML = '⏳ Analizando con <span class="glow-text">LLM...</span>';
        btn.style.opacity = "0.7";

        setTimeout(() => {
          const s1 = document.getElementById('db-s-1');
          const s2 = document.getElementById('db-s-2');
          const s3 = document.getElementById('db-s-3');

          s1.innerHTML = '<span class="m-notion-tag animate-pop" style="background:rgba(239,68,68,0.15);color:#f87171;border:1px solid rgba(239,68,68,0.3);">😡 Crítico</span>';

          setTimeout(() => {
            s2.innerHTML = '<span class="m-notion-tag animate-pop" style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);">😃 Satisfecho</span>';
          }, 400);

          setTimeout(() => {
            s3.innerHTML = '<span class="m-notion-tag animate-pop" style="background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);">😐 Informativo</span>';
          }, 800);

          setTimeout(() => {
            btn.innerHTML = "✅ Base 100% Sincronizada";
            btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
            btn.style.opacity = "1";
            btn.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.4)";
            if (app) app.addXP(50);
          }, 1200);
        }, 2000);
      };

      window.mNotionSearch = function() {
        const inputElem = document.getElementById('notion-qa-input');
        if (!inputElem) return;
        const input = inputElem.value;
        const loader = document.getElementById('notion-load-qa');
        const res = document.getElementById('notion-qa-res');
        if (input.length < 3) return;

        res.style.display = 'none';
        loader.classList.add('active');
        setTimeout(() => {
          loader.classList.remove('active');
          res.style.display = 'block';
          if (input.toLowerCase().includes('responsable') || input.toLowerCase().includes('quién')) {
            res.innerHTML = "✨ <b>Notion AI:</b><br>Según el documento 'Minuta: Lanzamiento Q2', hay tres responsables principales: Luis (Web), Ana (Catering) y Juan (Prensa).";
          } else {
            res.innerHTML = "✨ <b>Notion AI:</b><br>Basado en tu espacio de trabajo actual, la información más relevante indica que el proyecto de lanzamiento tiene un presupuesto de 5,000 USD.";
          }
          if (app) app.addXP(25);
        }, 1500);
      };

      window.mNotionCopyText = function(btn, text) {
        navigator.clipboard.writeText(text).catch(() => {});
        const orig = btn.textContent;
        btn.textContent = '✅ Copiado';
        btn.style.color = '#10b981';
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.color = '#a972ff';
        }, 2500);
        if (app) app.addXP(5);
      };

      console.log('Initialized module-notion.js with V31.4 Sovereign Engine');
    }
  };
})();
