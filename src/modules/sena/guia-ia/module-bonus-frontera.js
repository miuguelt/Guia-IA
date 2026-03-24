window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-modelos-frontera'] = (function() {
    /* ══════════════════════════════════════════════════════════════
       MÓDULO BONUS: Modelos de Frontera (DNA v32.5)
       ══════════════════════════════════════════════════════════════ */
    const fHTML = `
<div class="m-frontera-container animate-in" style="--f-primary: #f97316; --f-glow: rgba(249, 115, 22, 0.2);">
  <div class="module-header premium-header animate-in">
    <div class="badge-titan" style="background: var(--f-primary); color: #000; font-weight: 900;">NIVEL PRO: FRONTERA</div>
    <h2 class="module-title glow-text" style="color:#fff;">⚡ Modelos de Frontera: Los Más Poderosos</h2>
    <p class="module-description">Domina el techo tecnológico de la IA. Aprende a elegir entre los gigantes del razonamiento y la escala.</p>
    <div class="module-meta">
      <span class="module-meta-item">⏱️ 45 min</span>
      <span class="module-meta-item">💎 200 XP</span>
      <span class="module-meta-item">🏆 Insignia: Arquitecto de Ecosistemas</span>
    </div>
  </div>

  <div class="ag-tabs game-tabs">
    <button class="tab-btn active" data-tab="f-hook">🔥 La Carrera</button>
    <button class="tab-btn" data-tab="f-theory">🧠 Titanes</button>
    <button class="tab-btn" data-tab="f-map">🗺️ El Mapa</button>
    <button class="tab-btn" data-tab="f-decision">🌳 Decisión</button>
    <button class="tab-btn" data-tab="f-hidden">🔍 Dimensiones</button>
    <button class="tab-btn" data-tab="f-ethics">🛡️ Ética</button>
    <button class="tab-btn" data-tab="f-lab">🧪 Battle Lab</button>
    <button class="tab-btn" data-tab="f-game">🎮 Decisiones</button>
    <button class="tab-btn" data-tab="f-glossary">📖 Glosario</button>
    <button class="tab-btn" data-tab="f-mission">🚀 Misión</button>
  </div>

  <!-- SECCIÓN 1: HOOK -->
  <div id="f-hook" class="ag-content active">
    <div class="section-card animate-in">
      <h3><span class="icon">🚀</span> La Carrera por el Techo</h3>
      <p>Un "Modelo de Frontera" no es simplemente una IA que responde bien; es el límite actual de lo que es posible en razonamiento, multimodalidad y escala masiva.</p>
      <div style="background: var(--f-glow); border: 1px solid var(--f-primary); padding: 15px; border-radius: 12px; margin-top: 20px;">
        <h4 style="color: var(--f-primary); margin: 0 0 10px;">¿Por qué importa hoy?</h4>
        <p style="font-size: 0.9rem; margin: 0;">Porque estamos pasando de IAs que "predicen la siguiente palabra" a modelos que "razonan antes de hablar". En esta frontera, un error de elección significa perder precisión o pagar 10 veces más de lo necesario.</p>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 2: THEORY -->
  <div id="f-theory" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🧠</span> Titanes de la Frontera</h3>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:15px;">
        <div class="glass-card" style="padding:15px; border-top: 3px solid #3b82f6;">
          <h4 style="color:#3b82f6;">GPT-4o / o3-mini (OpenAI)</h4>
          <p style="font-size:0.8rem; opacity:0.8;">El estándar integral. o3-mini lidera en razonamiento rápido para código y matemáticas, mientras 4o es el rey de la multimodalidad y la voz.</p>
        </div>
        <div class="glass-card" style="padding:15px; border-top: 3px solid #f97316;">
          <h4 style="color:#f97316;">Claude 3.7 Sonnet (Anthropic)</h4>
          <p style="font-size:0.8rem; opacity:0.8;">El modelo híbrido definitivo. Permite elegir respuesta estándar o razonamiento extendido. Líder indiscutible en programación, alineación y flujos agénticos.</p>
        </div>
        <div class="glass-card" style="padding:15px; border-top: 3px solid #8b5cf6;">
          <h4 style="color:#8b5cf6;">Gemini 2.0 Flash / Pro (Google)</h4>
          <p style="font-size:0.8rem; opacity:0.8;">El rey del contexto absoluto. Procesa bibliotecas completas (hasta 2M de tokens) e integra búsqueda web y ejecución de código de forma nativa.</p>
        </div>
        <div class="glass-card" style="padding:15px; border-top: 3px solid #10b981;">
          <h4 style="color:#10b981;">DeepSeek R1 / Grok 3</h4>
          <p style="font-size:0.8rem; opacity:0.8;">R1 democratizó el razonamiento transparente extremo con eficiencia sin igual. Grok 3 domina en análisis de datos masivos en tiempo real sin censura restrictiva.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 3: EL MAPA -->
  <div id="f-map" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🗺️</span> La Tabla Periódica de la IA</h3>
      <p>Entiende las sub-familias según su "peso atómico" (potencia):</p>
      <div class="f-periodic-grid" style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-top:15px;">
        <div class="periodic-item" style="background:#ef444422; border:1px solid #ef4444; padding:10px; border-radius:8px; text-align:center;">
          <div style="font-size:1.2rem; font-weight:900;">Fl</div>
          <div style="font-size:0.6rem;">FLASH / HAIKU</div>
          <div style="font-size:0.6rem; opacity:0.6;">Rápido/Barato</div>
        </div>
        <div class="periodic-item" style="background:#3b82f622; border:1px solid #3b82f6; padding:10px; border-radius:8px; text-align:center;">
          <div style="font-size:1.2rem; font-weight:900;">So</div>
          <div style="font-size:0.6rem;">SONNET / PRO</div>
          <div style="font-size:0.6rem; opacity:0.6;">Equilibrado</div>
        </div>
        <div class="periodic-item" style="background:#f9731622; border:1px solid #f97316; padding:10px; border-radius:8px; text-align:center;">
          <div style="font-size:1.2rem; font-weight:900;">Op</div>
          <div style="font-size:0.6rem;">OPUS / ULTRA</div>
          <div style="font-size:0.6rem; opacity:0.6;">Potencia Máxima</div>
        </div>
      </div>
      
      <!-- NUEVO: TABLA COMPARATIVA INTERACTIVA -->
      <div style="margin-top:25px; overflow-x:auto; background:rgba(255,255,255,0.03); border-radius:12px; border:1px solid #444; padding:15px;">
        <h4 style="color:var(--f-primary); margin-top:0; font-size:0.9rem;">📊 Comparativa de Capacidades (2025)</h4>
        <table style="width:100%; font-size:0.75rem; border-collapse:collapse; color:#fff;">
          <tr style="border-bottom:1px solid #444; text-align:left;">
            <th style="padding:8px;">Modelo</th>
            <th style="padding:8px;">Contexto</th>
            <th style="padding:8px;">Razonamiento</th>
            <th style="padding:8px;">Costo</th>
          </tr>
          <tr>
            <td style="padding:8px;">Claude 3.7 Sonnet</td>
            <td style="padding:8px;">⭐⭐⭐⭐ (200k)</td>
            <td style="padding:8px; color:#10b981;">⭐⭐⭐⭐⭐+ (Híbrido)</td>
            <td style="padding:8px;">Medio</td>
          </tr>
          <tr>
            <td style="padding:8px;">OpenAI o3-mini / o1</td>
            <td style="padding:8px;">⭐⭐⭐ (200k)</td>
            <td style="padding:8px; color:#10b981;">⭐⭐⭐⭐⭐</td>
            <td style="padding:8px;">Bajo a Alto</td>
          </tr>
          <tr>
            <td style="padding:8px;">Gemini 2.0 Pro</td>
            <td style="padding:8px; color:#10b981;">⭐⭐⭐⭐⭐ (2M)</td>
            <td style="padding:8px;">⭐⭐⭐⭐</td>
            <td style="padding:8px;">Medio</td>
          </tr>
          <tr>
            <td style="padding:8px;">DeepSeek R1</td>
            <td style="padding:8px;">⭐⭐ (128k)</td>
            <td style="padding:8px; color:#10b981;">⭐⭐⭐⭐⭐</td>
            <td style="padding:8px; color:#10b981;">Muy Bajo</td>
          </tr>
          <tr>
            <td style="padding:8px;">Grok 3</td>
            <td style="padding:8px;">⭐⭐⭐ (128k)</td>
            <td style="padding:8px; color:#10b981;">⭐⭐⭐⭐⭐</td>
            <td style="padding:8px;">Medio</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 4: ÁRBOL DE DECISIÓN -->
  <div id="f-decision" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🌳</span> Árbol de Decisión Soberano</h3>
      <div style="background:rgba(255,255,255,0.02); padding:20px; border-radius:12px; border:1px dashed #444;">
        <ul style="list-style:none; padding:0; margin:0;">
          <li style="margin-bottom:10px;">❓ <b>¿Necesitas procesar 50+ PDFs de una vez o video nativo?</b> → 💎 <b>Gemini 2.0</b></li>
          <li style="margin-bottom:10px;">❓ <b>¿Buscas el mejor en código y flujos agénticos autónomos?</b> → 🛡️ <b>Claude 3.7 Sonnet</b></li>
          <li style="margin-bottom:10px;">❓ <b>¿Necesitas matemáticas complejas o ciencia rápida?</b> → ⚡ <b>o3-mini / o1</b></li>
          <li style="margin-bottom:10px;">❓ <b>¿Quieres razonamiento lógico extremo y gratuito/API barata?</b> → 🧠 <b>DeepSeek R1</b></li>
          <li style="margin-bottom:10px;">❓ <b>¿Buscas análisis de datos masivo con información de hoy?</b> → 🌌 <b>Grok 3</b></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 5: DIMENSIONES OCULTAS -->
  <div id="f-hidden" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🔍</span> Lo que no dicen los Benchmarks</h3>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:15px;">
        <div class="glass-card" style="padding:15px;">
          <h4 style="font-size:0.9rem;">Ventana de Contexto</h4>
          <p style="font-size:0.75rem; opacity:0.8;">No es solo "cuánto lee", sino qué tan bien recuerda lo que está en la mitad del documento (Lost-in-the-Middle).</p>
        </div>
        <div class="glass-card" style="padding:15px;">
          <h4 style="font-size:0.9rem;">Latencia vs Razonamiento</h4>
          <p style="font-size:0.75rem; opacity:0.8;">Un modelo que piensa (CoT) tardará más segundos pero dará una respuesta 10 veces más precisa.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 6: ÉTICA (RECOUP) -->
  <div id="f-ethics" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🛡️</span> El Dilema del Soberano</h3>
      <p>A mayor potencia, mayor responsabilidad. Los modelos de frontera enfrentan desafíos éticos únicos:</p>
      <div style="background:rgba(239, 68, 68, 0.05); border-left: 4px solid #ef4444; padding:15px; border-radius:8px; margin-top:15px;">
        <ul style="font-size:0.9rem; margin:0; padding-left:20px;">
          <li><b>Sesgos de Frontera:</b> Los modelos más potentes pueden ser más sutiles (y peligrosos) al imponer sesgos culturales.</li>
          <li><b>Control vs Autonomía:</b> ¿Hasta dónde permitimos que un agente tome decisiones ejecutivas?</li>
          <li><b>El Coste de la Verdad:</b> La infraestructura para correr estos modelos consume energía masiva. ¿Es sostenible para cada tarea?</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 7: LAB -->
  <div id="f-lab" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🧪</span> Laboratorio: Battle of the Models</h3>
      <p>Simula un duelo de razonamiento entre los modelos más poderosos del planeta frente a un problema complejo.</p>
      
      <div class="f-battle-terminal" style="background:#000; color:#10b981; font-family:monospace; padding:15px; border-radius:8px; margin-top:15px; min-height:150px; border:1px solid #333;">
        <div id="f-battle-output">[SISTEMA] Listo para Benchmarking Soberano...</div>
      </div>

      <button class="gl-btn gl-btn-primary" style="margin-top:15px; width:100%; font-weight:900;" onclick="window.mFronteraBattle()">INICIAR COMPARATIVA</button>
    </div>
  </div>

  <!-- SECCIÓN 8: JUEGO DE LAS DECISIONES (REFINED) -->
  <div id="f-game" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">🎮</span> El Juego de las Decisiones</h3>
      <p>Aplica tu criterio. ¿Qué modelo elegirías para estos escenarios institucionales?</p>
      <div style="display:flex; flex-direction:column; gap:12px; margin-top:15px;">
        <div class="glass-card" style="padding:15px; border:1px solid #444;">
          <p style="font-size:0.85rem; margin:0 0 10px;"><b>Escenario 1:</b> Debes auditar 2,000 folios de licitaciones buscando una cláusula específica.</p>
          <button class="gl-btn gl-btn-small" style="font-size:0.7rem; background:rgba(139, 92, 246, 0.2); border-color:#8b5cf6;" onclick="window.showToast('¡Correcto! Gemini es el rey del contexto masivo.', 'success')">Usar Gemini (2M tokens)</button>
        </div>
        <div class="glass-card" style="padding:15px; border:1px solid #444;">
          <p style="font-size:0.85rem; margin:0 0 10px;"><b>Escenario 2:</b> Redactar una carta diplomática de alto nivel que será revisada por Presidencia.</p>
          <button class="gl-btn gl-btn-small" style="font-size:0.7rem; background:rgba(249, 115, 22, 0.2); border-color:#f97316;" onclick="window.showToast('¡Correcto! Claude tiene el mejor estilo y alineación.', 'success')">Usar Claude 3.5 opus</button>
        </div>
        <div class="glass-card" style="padding:15px; border:1px solid #444;">
          <p style="font-size:0.85rem; margin:0 0 10px;"><b>Escenario 3:</b> Optimizar un script de Python que procesa datos de seguridad nacional.</p>
          <button class="gl-btn gl-btn-small" style="font-size:0.7rem; background:rgba(16, 185, 129, 0.2); border-color:#10b981;" onclick="window.showToast('¡Correcto! Los modelos de razonamiento (R1/o1) son ideales para lógica pura.', 'success')">Usar DeepSeek R1 / o1</button>
        </div>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 9: GLOSARIO (RECOUP) -->
  <div id="f-glossary" class="ag-content">
    <div class="section-card animate-in">
      <h3><span class="icon">📖</span> Glosario de la Frontera</h3>
      <div style="max-height:300px; overflow-y:auto; padding-right:10px;">
        <dl style="font-size:0.85rem; line-height:1.6;">
          <dt style="color:var(--f-primary); font-weight:bold;">Flash / Haiku / 4o-mini</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Modelos de baja latencia. Ideales para tareas repetitivas sencillas o clasificación rápida.</dd>
          
          <dt style="color:var(--f-primary); font-weight:bold;">Sonnet / Pro / o1-preview</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Modelos de rango medio. Capacidad de razonamiento fuerte para el día a día profesional.</dd>
          
          <dt style="color:var(--f-primary); font-weight:bold;">Opus / Ultra / 4o</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Modelos de frontera total. Máxima capacidad de análisis, creatividad y seguimiento de instrucciones complejas.</dd>
          
          <dt style="color:var(--f-primary); font-weight:bold;">Reasoning (R1 / o1 / 3.7 Sonnet)</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Modelos que ejecutan una "cadena de pensamiento" interna (CoT) antes de responder, aumentando masivamente la precisión en tareas complejas.</dd>

          <dt style="color:var(--f-primary); font-weight:bold;">Comportamiento Agéntico (Agentic)</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Cuando la IA no solo responde, sino que planifica, ejecuta, corrige errores y usa herramientas iterativamente sin supervisión constante.</dd>

          <dt style="color:var(--f-primary); font-weight:bold;">Fine-tuning</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Entrenamiento adicional de un modelo base con datos específicos de una entidad para especializarlo.</dd>

          <dt style="color:var(--f-primary); font-weight:bold;">Benchmarks (MMLU / GSM8K)</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Pruebas estándar de la industria para medir la inteligencia y razonamiento de los modelos.</dd>

          <dt style="color:var(--f-primary); font-weight:bold;">RLHF</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">Reinforcement Learning from Human Feedback: Método para alinear la IA con valores humanos.</dd>

          <dt style="color:var(--f-primary); font-weight:bold;">SoTA</dt>
          <dd style="margin-bottom:10px; opacity:0.8;">State of The Art: El nivel más alto de desarrollo alcanzado en investigación de IA en este momento.</dd>
        </dl>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 10: MISIÓN (REFINED) -->
  <div id="f-mission" class="ag-content">
    <div class="exercise-box mission-card animate-in">
      <div class="exercise-header"><span class="exercise-icon">🚀</span><span class="exercise-title">Misión: Arquitecto de Ecosistemas</span></div>
      <p>Vas a construir tu propia <b>"Tríada de Frontera"</b> para un problema real de tu oficina.</p>
      <div style="background:rgba(255,255,255,0.02); padding:15px; border-radius:10px; font-size:0.85rem; margin:15px 0;">
        <ol style="padding-left:20px;">
          <li>Elige un proceso (Ej: Auditoría de nómina).</li>
          <li>Asigna un modelo para **Extraer** (Ej: Gemini).</li>
          <li>Asigna un modelo para **Auditar/Pensar** (Ej: R1).</li>
          <li>Asigna un modelo para **Redactar** (Ej: Claude).</li>
        </ol>
      </div>
      <textarea class="premium-textarea" placeholder="Escribe aquí tu arquitectura: Procesos y modelos elegidos..."></textarea>
      <div class="reward-tag">+200 XP · Insignia: Arquitecto de Ecosistemas ⚡</div>
      <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-modelos-frontera" style="width:100%;margin-top:15px;">✅ Enviar Arquitectura</button>
    </div>
  </div>

  <div class="module-nav">
    <button class="gl-btn" data-goto="module-18">← Anterior</button>
    <button class="gl-btn gl-btn-primary" data-goto="module-bonus-comet">Siguiente: Comet (Agente) →</button>
  </div>
</div>
    `;

    const moduleInstance = {
      init: function(app) {
        console.log('Frontera Module Initialized [DNA v32.5]');
        const target = document.getElementById('module-modelos-frontera');
        if (target && !target.querySelector('.module-header')) {
          target.insertAdjacentHTML('afterbegin', fHTML);
          this.setupHandlers(target);
        }
      },
      setupHandlers: function(parent) {
        const tabs = parent.querySelectorAll('.tab-btn');
        const contents = parent.querySelectorAll('.ag-content');
        tabs.forEach(t => t.addEventListener('click', () => {
          tabs.forEach(x => x.classList.remove('active'));
          contents.forEach(x => x.classList.remove('active'));
          t.classList.add('active');
          const target = parent.querySelector('#' + t.dataset.tab);
          if (target) {
            target.classList.add('active');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }));
      }
    };

    window.mFronteraBattle = function() {
      const output = document.getElementById('f-battle-output');
      if (!output) return;
      
      const logs = [
        "🚀 Iniciando Benchmarking Soberano...",
        "⚖️ Cargando prompt agéntico complejo (código + lógica)...",
        "🧠 o3-mini: Generando 5,000 tokens de razonamiento en 3s... (1.8s)",
        "🛡️ Claude 3.7 Sonnet: Activando modo extended thinking interactivo... (2.1s)",
        "💎 Gemini 2.0: Ingiriendo documentación base de 1.5M tokens... (0.5s)",
        "🧠 DeepSeek R1: Destilando lógica matemática pura asíncrona... (2.4s)",
        "🌌 Grok 3: Validando variables sociales en tiempo real en X... (1.2s)",
        "📊 RESULTADO: Claude en agentes de código, o3-mini en velocidad analítica, Grok 3 en data fresca, DeepSeek R1 en costo-beneficio.",
        "✅ Comparativa finalizada. ¡Elige el Titan según el escenario!"
      ];
      
      let i = 0;
      output.innerHTML = "";
      const interval = setInterval(() => {
        if (i < logs.length) {
          const div = document.createElement('div');
          div.textContent = "> " + logs[i];
          div.style.marginBottom = "5px";
          output.appendChild(div);
          output.scrollTop = output.scrollHeight;
          i++;
        } else {
          clearInterval(interval);
          if (typeof window.antShowConfetti === 'function') window.antShowConfetti();
          if (window.app) window.app.addXP(50);
        }
      }, 600);
    };

    window.GuiaModules = window.GuiaModules || {};
    window.GuiaModules['module-modelos-frontera'] = moduleInstance;
    return moduleInstance;
  })();
