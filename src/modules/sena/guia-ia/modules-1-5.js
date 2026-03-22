window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-1'] = window.GuiaModules['module-2'] = window.GuiaModules['module-3'] = window.GuiaModules['module-4'] = window.GuiaModules['module-5'] = 
window.GuiaModules['module-fundamentals'] = window.GuiaModules['module-prompt-hygiene'] = window.GuiaModules['module-verification'] = window.GuiaModules['module-privacy-daily'] = (function() {
/* Modules 1-5 Content Injection — Modularized */

    const modules = {
        'module-1': `
      <div class="module-header premium-header">
        <div class="module-number gamer-badge">Nivel 1: El Despertar</div>
        <h2 class="module-title glow-text">¿Qué es la Inteligencia Artificial?</h2>
        <p class="module-description">Tu viaje comienza aquí. Transforma el caos administrativo con el poder del razonamiento sintético.</p>
        <div class="module-meta">
          <span class="module-meta-item">⏱️ 20 min</span>
          <span class="module-meta-item">💎 100 XP</span>
          <span class="module-meta-item">🏆 Insignia: Explorador IA</span>
        </div>
      </div>

      <div class="ag-tabs game-tabs">
        <button class="tab-btn active" data-tab="m1-lab-intro"><span>🎬</span> Intro</button>
        <button class="tab-btn" data-tab="m1-lab-concept"><span>🧠</span> Concepto</button>
        <button class="tab-btn" data-tab="m1-lab-demo"><span>👁️</span> Demo</button>
        <button class="tab-btn" data-tab="m1-lab-simulator"><span>✨</span> Simulador</button>
        <button class="tab-btn" data-tab="m1-lab-mission"><span>⚔️</span> Misión</button>
      </div>

      <!-- 1. INTRODUCCIÓN NARRATIVA -->
      <div id="m1-lab-intro" class="ag-content active">
        <div class="section-card storytelling animate-in">
          <h3><span class="icon">🏢</span> Crónica de Oficina</h3>
          <p class="narrative-text">"Llegas a las 8:00 AM. Tu escritorio está inundado de 50 correos sin leer, 3 informes por resumir y un Excel que parece un jeroglífico. Sientes que el tiempo te gana... hasta que descubres que tienes un copiloto que nunca duerme."</p>
          <div class="pista-ia">💡 <strong>Tu objetivo:</strong> Aprender a delegar lo aburrido a la IA para enfocarte en lo importante.</div>
        </div>
      </div>

      <!-- 2. CONCEPTO CLAVE -->
      <div id="m1-lab-concept" class="ag-content">
        <div class="section-card animate-in">
          <h3><span class="icon">⚖️</span> La Gran Diferencia</h3>
          <div class="table-responsive">
            <table class="comparison-table">
              <thead><tr><th>Computación Tradicional</th><th>Inteligencia Artificial</th></tr></thead>
              <tbody>
                <tr><td>Sigue reglas rígidas (Si A, entonces B)</td><td>Aprende patrones y contextos</td></tr>
                <tr><td>Tú haces el trabajo sucio</td><td>La IA genera el primer borrador</td></tr>
                <tr><td>Límite: Velocidad de tus dedos</td><td>Límite: Tu creatividad al preguntar</td></tr>
              </tbody>
            </table>
          </div>
          <p class="m-pa-note" style="margin-top: 20px;">La IA es como un <strong>pasante genio</strong> que ha leído toda la biblioteca del mundo pero necesita instrucciones claras.</p>
        </div>
      </div>

      <!-- 3. DEMOSTRACIÓN REAL: WORKFLOW WIZARD -->
      <div id="m1-lab-demo" class="ag-content">
        <div class="section-card animate-in">
          <h3><span class="icon">⚡</span> Solución Paso a Paso: Tu Mañana en 5 Minutos</h3>
          <p>Sigue esta ruta para resolver el caos de la "Crónica de Oficina" de forma inmediata. No necesitas saber técnica, solo saber qué pedir.</p>

          <div class="workflow-wizard" style="margin-top: 30px;">
            <!-- PASO 1: CORREOS -->
            <div class="workflow-step glass-card-premium animate-in" style="--accent-step: var(--primary); margin-bottom: 20px;">
              <div class="step-number-bg">1</div>
              <h4 class="step-title">
                <span class="badge-titan" style="background: var(--primary); color: #fff;">1</span>
                Domar los 50 Correos
              </h4>
              <p class="m-pa-note" style="margin-top: 8px;"><b>El Truco:</b> No leas uno por uno. Copia los asuntos de tus correos y dáselos a la IA.</p>
              <div class="action-box m-pa-panel-card" style="margin: 20px 0;">
                <p class="text-gradient-primary" style="font-size: 0.9rem; margin-bottom: 12px;">🎯 Paso a paso:</p>
                <ol style="font-size: 0.75rem; padding-left: 20px; line-height: 1.6;">
                  <li>Abre tu correo y selecciona los asuntos de los 50 correos pendientes.</li>
                  <li>Pégalos en ChatGPT o Gemini.</li>
                  <li>Usa esta instrucción (Pruébala abajo):</li>
                </ol>
                <div class="prompt-pill m-pa-codebox" style="border-left: 4px solid var(--primary);">
                  "Tengo estos 50 correos pendientes. Organízalos en una lista por importancia: Urgentes (acción hoy), Informativos (leer después) y Spam/Otros. Resume de qué trata el grupo más importante."
                </div>
              </div>
              <button class="gl-btn small" onclick="navigator.clipboard.writeText('Tengo estos 50 correos pendientes. Organízalos en una lista por importancia: Urgentes (acción hoy), Informativos (leer después) y Spam/Otros. Resume de qué trata el grupo más importante.'); window.showToast('Instrucción copiada', 'success');">📋 Copiar esta instrucción</button>
            </div>

            <!-- PASO 2: INFORMES -->
            <div class="workflow-step glass-card-premium animate-in" style="--accent-step: #10b981; margin-bottom: 20px;">
              <div class="step-number-bg">2</div>
              <h4 class="step-title">
                <span class="badge-titan" style="background: #10b981; color: #fff;">2</span>
                Extraer el Jugo de los Informes
              </h4>
              <p class="m-pa-note" style="margin-top: 8px;"><b>El Truco:</b> No resumas "todo". Dile a la IA quién eres para que filtre lo que TE importa.</p>
              <div class="action-box m-pa-panel-card" style="margin: 20px 0;">
                <p class="text-gradient-primary" style="font-size: 0.9rem; margin-bottom: 12px; color: #10b981;">🎯 Paso a paso:</p>
                <ol style="font-size: 0.75rem; padding-left: 20px; line-height: 1.6;">
                  <li>Sube tu PDF de 200 páginas a Claude o Gemini (el ícono del clip 📎).</li>
                  <li>Dile tu cargo (ej: "Soy el coordinador de talento humano").</li>
                  <li>Usa esta instrucción:</li>
                </ol>
                <div class="prompt-pill m-pa-codebox" style="border-left: 4px solid #10b981;">
                  "Analiza este informe y extrae solo los puntos que afectan a mi área. Hazme una lista de las 3 acciones más importantes que debo ejecutar basándome en este documento."
                </div>
              </div>
              <button class="gl-btn small" style="border-color: #10b981; color: #10b981;" onclick="navigator.clipboard.writeText('Analiza este informe y extrae solo los puntos que afectan a mi área. Hazme una lista de las 3 acciones más importantes que debo ejecutar basándome en este documento.'); window.showToast('Instrucción copiada', 'success');">📋 Copiar esta instrucción</button>
            </div>

            <!-- PASO 3: EXCEL -->
            <div class="workflow-step glass-card elegant-transition" style="--accent-step: #f59e0b;">
              <div class="step-number-bg">3</div>
              <h4 class="step-title">
                <span class="step-badge" style="background: #f59e0b;">3</span>
                Descifrar el Jeroglífico (Excel)
              </h4>
              <p style="font-size: 0.85rem; opacity: 0.8;"><b>El Truco:</b> No mires las celdas, mira el problema. Describe lo que quieres lograr.</p>
              <div class="action-box" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p style="font-size: 0.8rem; margin-bottom: 10px; color: #f59e0b;">🎯 <b>Paso a paso:</b></p>
                <ol style="font-size: 0.75rem; padding-left: 20px; line-height: 1.6;">
                  <li>Abre el Excel que no entiendes.</li>
                  <li>Toma una captura de pantalla (Windows+Shift+S) o describe las columnas.</li>
                  <li>Pregunta esto:</li>
                </ol>
                <div class="prompt-pill" style="background: #0d1117; padding: 10px; border-radius: 6px; font-style: italic; font-size: 0.8rem; border-left: 3px solid #f59e0b; margin-top: 10px;">
                  "Mira estos datos de Excel. Explícame qué significan de forma sencilla. Necesito una fórmula para sabere quién gastó más del presupuesto."
                </div>
              </div>
              <button class="gl-btn small" style="border-color: #f59e0b; color: #f59e0b;" onclick="navigator.clipboard.writeText('Mira estos datos de Excel. Explícame qué significan de forma sencilla. Necesito una fórmula para saber quién gastó más del presupuesto.'); window.showToast('Instrucción copiada', 'success');">📋 Copiar esta instrucción</button>
            </div>
          </div>

          <div class="pista-ia" style="margin-top: 30px; background: rgba(var(--primary-rgb), 0.1);">
            🚀 <b>Resultado Final:</b> Has pasado de 8 horas de estrés a 15 minutos de supervisión inteligente. ¡Bienvenido a la era del Copiloto!
          </div>
        </div>
      </div>

      <!-- 4. SIMULADOR INTERACTIVO (NUEVO) -->
      <div id="m1-lab-simulator" class="ag-content">
        <div class="section-card animate-in" style="background: #0d1117; border: 1px solid #30363d;">
          <h3><span class="icon">✨</span> Simulador: El Filtro Mágico</h3>
          <p style="font-size:0.85rem; color:#8b949e;">Haz clic en "Filtrar Bandeja" para ver cómo la IA puede convertir 6 correos caóticos en acciones ordenadas en menos de 1 segundo.</p>
          
          <div style="display:flex; gap:15px; margin-top:20px;">
            <div style="flex:1; background:#161b22; border-radius:8px; padding:15px; border:1px solid #30363d;">
              <h4 style="color:#58a6ff; margin:0 0 10px 0;">Bandeja Desordenada</h4>
              <ul style="list-style:none; padding:0; margin:0; font-size:0.75rem; color:#8b949e; line-height:1.6;" id="m1-inbox-raw">
                <li>💌 [Juan] "Oye, ¿ya viste la nueva de Marvel?"</li>
                <li>🚨 [Jefe] "URGENTE: Cierre financiero a las 3PM"</li>
                <li>📧 [Banco] "Actualice sus datos HOY"</li>
                <li>💌 [Promo] "50% OFF en Pizza"</li>
                <li>🚨 [Prensa] "Crisis en redes, contestar RÁPIDO"</li>
                <li>📧 [RRHH] "Feliz cumpleaños Clara"</li>
              </ul>
            </div>
            
            <div style="display:flex; align-items:center;">
              <button class="gl-btn" style="background:#238636;color:#fff;" onclick="window.m1RunFilter()">Filtrar Bandeja ⚡</button>
            </div>
            
            <div style="flex:1; background:#161b22; border-radius:8px; padding:15px; border:1px solid #30363d;">
              <h4 style="color:#3fb950; margin:0 0 10px 0;">Visión IA</h4>
              <div id="m1-inbox-ai" style="font-size:0.75rem; color:#c9d1d9; font-family:monospace;">Esperando activación...</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 7. MISIÓN DEL MÓDULO -->
      <div id="m1-lab-mission" class="ag-content">
        <div class="exercise-box mission-card animate-in">
          <div class="preparation-step" style="background: rgba(var(--primary-rgb), 0.1); border: 1px solid var(--primary); padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid var(--primary);">
            <h4 style="margin-top: 0; color: var(--primary); font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
            <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, asegúrate de tener una cuenta activa en ChatGPT, Gemini o Perplexity para realizar tus pruebas.</p>
          </div>
          <div class="exercise-header"><span class="exercise-icon">🔥</span><span class="exercise-title">Misión 1: El Diagnóstico</span></div>
          <p>Identifica una tarea que consideres "tu mayor pesadilla" en la oficina.</p>
          <textarea placeholder="Ej: Clasificar manualmente 200 PQRS cada lunes..."></textarea>
          <div class="reward-tag">+60 XP por honestidad operacional</div>
        </div>
        <button class="gl-btn gl-btn-outline complete-module-btn" data-module="module-1">☐ Reclamar Victoria (Insignia)</button>
      </div>

      <div class="module-nav">
        <button class="gl-btn" disabled>← Bloqueado</button>
        <button class="gl-btn gl-btn-primary" data-goto="module-2">Siguiente Nivel: ChatGPT Maestro →</button>
      </div>
        `,
        'module-2': `
      <div class="module-header premium-header">
        <div class="module-number gamer-badge">Nivel 2: Primera Conexión</div>
        <h2 class="module-title glow-text">ChatGPT Maestro</h2>
        <p class="module-description">Activa tu primer "Cerebro Digital" y aprende a comunicarte con la máquina de forma efectiva.</p>
        <div class="module-meta">
          <span class="module-meta-item">⏱️ 30 min</span>
          <span class="module-meta-item">💎 100 XP</span>
          <span class="module-meta-item">🏆 Insignia: Aprendiz de Prompts</span>
        </div>
      </div>

      <div class="ag-tabs game-tabs">
        <button class="tab-btn active" data-tab="m2-lab-onboarding"><span>🔑</span> Acceso</button>
        <button class="tab-btn" data-tab="m2-lab-sandbox"><span>🧪</span> Laboratorio</button>
        <button class="tab-btn" data-tab="m2-lab-builder"><span>🧩</span> Constructor</button>
        <button class="tab-btn" data-tab="m2-lab-simulator"><span>🎭</span> Simulador</button>
        <button class="tab-btn" data-tab="m2-lab-projects"><span>🚀</span> Proyectos</button>
        <button class="tab-btn" data-tab="m2-lab-mission"><span>⚔️</span> Misión</button>
      </div>

      <!-- 1. ACCESO Y MATRIZ DE HERRAMIENTAS -->
      <div id="m2-lab-onboarding" class="ag-content active">
        <div class="section-card storytelling animate-in">
          <h3><span class="icon">🔓</span> Portal de Inicio</h3>
          <p class="narrative-text">"Para invocar a tu asistente, primero debes abrir el portal. Elige tu herramienta según tu necesidad específica."</p>
          
          <div class="tool-matrix-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 25px;">
            <!-- ChatGPT -->
            <div class="tool-access-card holographic-glare" style="background: var(--bg-glass); border: 1px solid rgba(var(--primary-rgb), 0.3); padding: 20px; border-radius: 15px; position: relative;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <span style="font-size: 2rem;">🤖</span>
                <div>
                  <h4 style="margin: 0; color: var(--primary);">ChatGPT</h4>
                  <p style="font-size: 0.75rem; margin: 0; opacity: 0.7;">El Asistente Universal</p>
                </div>
              </div>
              <ul style="font-size: 0.85rem; margin-bottom: 20px; padding-left: 15px;">
                <li>Ideal para lluvia de ideas.</li>
                <li>Excelente redacción creativa.</li>
                <li>Muy intuitivo y fácil de usar.</li>
              </ul>
              <a href="https://chatgpt.com" target="_blank" class="gl-btn gl-btn-primary" style="width: 100%; text-decoration: none; text-align: center; display: block;">Acceder a ChatGPT</a>
            </div>

            <!-- Claude -->
            <div class="tool-access-card holographic-glare" style="background: var(--bg-glass); border: 1px solid rgba(217, 119, 6, 0.3); padding: 20px; border-radius: 15px; position: relative;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <span style="font-size: 2rem;">✍️</span>
                <div>
                  <h4 style="margin: 0; color: #f59e0b;">Claude</h4>
                  <p style="font-size: 0.75rem; margin: 0; opacity: 0.7;">Análisis y Escritura Humana</p>
                </div>
              </div>
              <ul style="font-size: 0.85rem; margin-bottom: 20px; padding-left: 15px;">
                <li>Analiza documentos largos con precisión.</li>
                <li>Tono de voz más natural y menos "robótico".</li>
                <li>Excelente siguiendo instrucciones complejas.</li>
              </ul>
              <a href="https://claude.ai" target="_blank" class="gl-btn" style="width: 100%; border-color: #f59e0b; color: #f59e0b; text-decoration: none; text-align: center; display: block;">Acceder a Claude</a>
            </div>

            <!-- Gemini -->
            <div class="tool-access-card holographic-glare" style="background: var(--bg-glass); border: 1px solid rgba(37, 99, 235, 0.3); padding: 20px; border-radius: 15px; position: relative;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <span style="font-size: 2rem;">♊</span>
                <div>
                  <h4 style="margin: 0; color: #2563eb;">Gemini</h4>
                  <p style="font-size: 0.75rem; margin: 0; opacity: 0.7;">Integración Google Workspace</p>
                </div>
              </div>
              <ul style="font-size: 0.85rem; margin-bottom: 20px; padding-left: 15px;">
                <li>Conexión con Gmail, Docs y Drive.</li>
                <li>Resultados rápidos con fuentes citadas.</li>
                <li>Nativo para tareas multimodales.</li>
              </ul>
              <a href="https://gemini.google.com" target="_blank" class="gl-btn" style="width: 100%; border-color: #2563eb; color: #2563eb; text-decoration: none; text-align: center; display: block;">Acceder a Gemini</a>
            </div>

            <!-- DeepSeek -->
            <div class="tool-access-card holographic-glare" style="background: var(--bg-glass); border: 1px solid rgba(139, 92, 246, 0.3); padding: 20px; border-radius: 15px; position: relative;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <span style="font-size: 2rem;">🟣</span>
                <div>
                  <h4 style="margin: 0; color: #8b5cf6;">DeepSeek (R1)</h4>
                  <p style="font-size: 0.75rem; margin: 0; opacity: 0.7;">Razonamiento Matemático y Lógico</p>
                </div>
              </div>
              <ul style="font-size: 0.85rem; margin-bottom: 20px; padding-left: 15px;">
                <li>Potente en lógica y programación.</li>
                <li>Razonamiento profundo (Chain of Thought).</li>
                <li>Gran desempeño costo/beneficio.</li>
              </ul>
              <a href="https://chat.deepseek.com" target="_blank" class="gl-btn" style="width: 100%; border-color: #8b5cf6; color: #8b5cf6; text-decoration: none; text-align: center; display: block;">Acceder a DeepSeek</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. LABORATORIO (SANDBOX) -->
      <div id="m2-lab-sandbox" class="ag-content">
        <div class="section-card animate-in glass-card">
          <div class="card-header-premium">
            <span class="badge-premium">LAB</span>
            <h3><span class="icon">🧪</span> Laboratorio de Prompts</h3>
            <p>Experimenta aquí antes de ir a las herramientas reales. La IA analizará la calidad de tu instrucción.</p>
          </div>
          
          <div class="sandbox-container-premium">
            <div class="input-glow-wrapper">
              <label class="premium-label">TU PROMPT:</label>
              <textarea id="sandboxInput" class="premium-textarea" placeholder="Escribe aquí tu instrucción... (Ej: Hola, hazme un resumen de este texto)"></textarea>
            </div>
            
            <div class="sandbox-controls">
              <button id="testPromptBtn" class="gl-btn gl-btn-primary gl-btn-lux" type="button">
                <span class="btn-icon">🚀</span> Analizar y Mejorar
              </button>
              <button id="clearSandboxBtn" class="gl-btn gl-btn-danger-soft" type="button">
                <span class="btn-icon">🧹</span> Limpiar
              </button>
            </div>
            
            <div class="quality-gauge-container">
              <div class="gauge-header">
                <span class="gauge-label">POTENCIA DE PROMPT</span>
                <span id="promptQualityValue" class="gauge-value">0%</span>
              </div>
              <div class="gauge-track">
                <div id="promptQualityBar" class="gauge-fill" style="width: 0%"></div>
              </div>
            </div>
            
            <div class="output-premium-wrapper">
              <label class="premium-label-muted">RESULTADO DEL ANÁLISIS:</label>
              <div id="sandboxOutput" class="sandbox-output-display">
                <div class="empty-state-text">El resultado del "Copiloto" aparecerá aquí...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. CONSTRUCTOR DE PROMPTS VISUAL -->
      <div id="m2-lab-builder" class="ag-content">
        <div class="section-card animate-in">
          <h3><span class="icon">🧩</span> Constructor de Prompts Públicos</h3>
          <p>Selecciona las piezas para construir una instrucción poderosa diseñada para el sector público.</p>
          
          <div class="builder-columns" style="display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 20px;">
            <div id="builder-controls-container" class="builder-options" style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; border: 1px solid rgba(16,185,129,0.2);">
              <!-- Will be populated by JS based on specialization -->
              <div id="builder-dynamic-selects">
                <label style="display: block; font-size: 0.8rem; margin-bottom: 8px; opacity: 0.8; font-weight: bold;">1. ELIGE EL ROL</label>
                <select id="builder-rol" class="game-select" data-type="rol" style="width: 100%; padding: 12px; border-radius: 8px; background: #0d1117; color: #fff; border: 1px solid #10b981; margin-bottom: 15px;">
                  <option value="Eres un experto en redacción de actos administrativos">Redactor Jurídico</option>
                  <option value="Actúa como un analista de datos de la oficina de planeación">Analista de Planeación</option>
                  <option value="Eres un especialista en atención al ciudadano empático">Líder de PQR</option>
                  <option value="Eres un estratega de comunicación institucional">Comunicador Social</option>
                </select>

                <label style="display: block; font-size: 0.8rem; margin-bottom: 8px; opacity: 0.8; font-weight: bold;">2. ELIGE LA TAREA</label>
                <select id="builder-task" class="game-select" data-type="task" style="width: 100%; padding: 12px; border-radius: 8px; background: #0d1117; color: #fff; border: 1px solid #10b981;">
                  <option value="resume este informe de 50 páginas destacando los puntos críticos">Resumir puntos críticos</option>
                  <option value="redacta una respuesta formal que explique por qué no se puede pavimentar esta semana">Explicar retraso de obra</option>
                  <option value="crea una tabla comparativa entre el presupuesto 2023 y 2024">Comparar presupuestos</option>
                  <option value="diseña un guion para un video institucional sobre el avance de metas">Diseñar guion de video</option>
                </select>
              </div>
            </div>

            <div class="builder-preview glass-card-premium" style="border: 1px solid var(--primary); padding: 24px; position: relative;">
              <div class="badge-titan" style="margin-bottom: 15px;">PROMPT GENERADO</div>
              <div id="prompt-preview-text" class="m-pa-codebox" style="min-height: 80px;">Cargando configuración...</div>
              <button class="gl-btn gl-btn-primary" style="margin-top: 20px; width: 100%;" onclick="const txt = document.getElementById('prompt-preview-text').innerText; navigator.clipboard.writeText(txt); window.showToast('¡Prompt copiado al portapapeles!', 'success');">📋 Copiar Prompt Maestro</button>
            </div>
          </div>
        </div>

        <div class="section-card animate-in glass-card-premium" style="margin-top: 35px; border: 1px solid rgba(var(--primary-rgb), 0.3);">
          <h3><span class="icon">⚖️</span> Duelo de Titanes: Antes vs Después</h3>
          <p class="narrative-text">Mira cómo cambia el resultado de la IA cuando aplicas lo aprendido en este nivel.</p>
          
          <div class="comparison-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
            <!-- Before -->
            <div class="m-pa-panel-card" style="background: rgba(239,68,68,0.03); border: 1px solid rgba(239,68,68,0.2);">
              <div style="margin-bottom: 15px;">
                <span class="badge-titan" style="background: #ef4444; color: white; border-color: #ef4444;">ANTERIOR</span> <span style="font-size: 0.75rem; font-weight: 800; color: #ef4444;">PROMPT COMÚN</span>
              </div>
              <div style="font-style: italic; font-size: 0.9rem; margin-bottom: 15px; color: #9ca3af;">"Haz un resumen del Plan de Desarrollo Municipal de este año."</div>
              <div style="margin-top: auto; padding-top: 15px; border-top: 1px solid rgba(239,68,68,0.1);">
                <span style="font-size: 0.8rem; font-weight: bold; color: #ef4444;">Efecto:</span>
                <p style="font-size: 0.75rem; margin: 5px 0 0 0; opacity: 0.8; line-height: 1.4;">Un texto plano, largo y poco útil que no destaca indicadores ni facilita la toma de decisiones.</p>
              </div>
            </div>

            <!-- After -->
            <div class="m-pa-panel-card holographic-glare" style="background: rgba(16,185,129,0.03); border: 1px solid rgba(16,185,129,0.3); box-shadow: 0 10px 30px -10px rgba(16,185,129,0.2);">
              <div style="margin-bottom: 15px;">
                <span class="badge-titan" style="background: #10b981; color: white; border-color: #10b981;">NUEVO</span> <span style="font-size: 0.75rem; font-weight: 800; color: #10b981;">PROMPT MAESTRO</span>
              </div>
              <div style="font-style: italic; font-size: 0.9rem; margin-bottom: 15px; color: #fff;">"Actúa como analista senior de planeación. Resume el Plan de Desarrollo Municipal enfocado en los 5 proyectos de infraestructura. Presenta en tabla comparativa: Proyecto, Estado, Presupuesto y KPI."</div>
              <div style="margin-top: auto; padding-top: 15px; border-top: 1px solid rgba(16,185,129,0.1);">
                <span style="font-size: 0.8rem; font-weight: bold; color: #10b981;">Efecto:</span>
                <p style="font-size: 0.75rem; margin: 5px 0 0 0; color: #10b981; line-height: 1.4;">Una tabla lista para ser inyectada en un informe gerencial, con datos precisos y estructura estratégica.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. SIMULADOR DE ROLES (NUEVO) -->
      <div id="m2-lab-simulator" class="ag-content">
        <div class="section-card animate-in" style="background: #0d1117; border: 1px solid #30363d;">
          <h3><span class="icon">🎭</span> Simulador de Rol (System Prompt)</h3>
          <p style="font-size:0.85rem; color:#8b949e;">Aquí comprobarás que la IA no tiene una sola mente. Cambia la personalidad con la que "nace" tu bot y pregúntale lo mismo para ver la diferencia extrema en su tono.</p>
          
          <div style="display:grid; grid-template-columns: 1fr 2fr; gap:15px; margin-top:20px;">
            <div style="background:#161b22; border-radius:8px; padding:15px; border:1px solid #30363d;">
              <h4 style="color:#f59e0b; margin:0 0 10px 0;">Actitud Base</h4>
              <select id="m2-rol-select" class="game-select" style="width:100%; padding:10px; background:#0d1117; border:1px solid #f59e0b; color:#fff; border-radius:6px; margin-bottom:15px;" onchange="window.m2SimulateChat()">
                <option value="corporativo">💼 Robot Corporativo</option>
                <option value="amargado">😠 Empleado Amargado</option>
                <option value="shakespeare">🎭 Poeta del Siglo XVI</option>
              </select>
              
              <div style="font-size:0.75rem; color:#8b949e;">Envía el mensaje: "Buenos días, ¿me ayudas con este reporte?"</div>
              <button class="gl-btn gl-btn-primary" style="width:100%; margin-top:10px; height:35px;" onclick="window.m2SimulateChat()">Enviar Mensaje</button>
            </div>
            
            <div style="background:#000; border-radius:8px; padding:15px; border:1px solid #30363d; display:flex; flex-direction:column; gap:10px;">
               <h4 style="color:#58a6ff; margin:0;">Chat Falso</h4>
               <div style="background:#161b22; padding:10px; border-radius:6px; font-size:0.8rem; color:#8b949e; align-self:flex-end;">"Buenos días, ¿me ayudas con este reporte?"</div>
               <div id="m2-chat-response" style="background:rgba(88,166,255,0.1); border:1px solid #58a6ff; padding:10px; border-radius:6px; font-size:0.8rem; color:#c9d1d9;">(La IA responderá aquí según su rol asignado)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. SUBMÓDULO: PROYECTOS Y GPTS EXCLUSIVO (NUEVO) -->
  <div id="m2-lab-projects" class="ag-content">
    <div class="section-card animate-in glass-card">
      <h3 style="color:#10b981;"><span class="icon">🚀</span> GPTs y Proyectos: Tu Equipo IA</h3>
      <p>Tanto ChatGPT (GPTs) como Claude (Projects) permiten crear versiones personalizadas con sus propios archivos y reglas. Aquí es donde la IA deja de ser generalista y se vuelve especialista en TU oficina.</p>
      
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px; margin:20px 0;">
        <div class="tool-access-card" style="border: 1px solid rgba(16,185,129,0.3); padding:15px; border-radius:12px; background:rgba(255,255,255,0.02);">
          <h4 style="color:#10b981; margin:0 0 10px;">🤖 ChatGPT: GPTs</h4>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0;">Ideal para crear herramientas interactivas que otros puedan usar. Sube tus manuales de procesos y deja que el GPT responda dudas basadas en ellos.</p>
        </div>
        <div class="tool-access-card" style="border: 1px solid rgba(245,158,11,0.3); padding:15px; border-radius:12px; background:rgba(255,255,255,0.02);">
          <h4 style="color:#f59e0b; margin:0 0 10px;">✍️ Claude: Projects</h4>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0;">Perfecto para análisis técnico profundo. Crea un "Proyecto" para cada expediente y adjunta todos los PDFs relacionados para cruzarlos entre sí.</p>
        </div>
      </div>

      <div class="exercise-box" style="border: 1px solid var(--primary); background: rgba(var(--primary-rgb), 0.05); padding: 20px; border-radius: 12px;">
        <h4 style="color:var(--primary); margin-top:0;">📋 Ejercicio de Maestría: El Acta Maestra v31.4</h4>
        <p style="font-size: 0.85rem;">Vamos a configurar un sistema que tome una reunión grabada (transcripción) y la convierta en un acta formal lista para firma.</p>
        
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:15px;">
          <!-- Prompt -->
          <div style="background:#0d1117; padding:15px; border-radius:8px; border-left:4px solid var(--primary);">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span style="font-size:0.75rem; font-weight:bold; color:var(--primary-light);">1. INSTRUCCIONES DEL PROYECTO (Custom Instructions)</span>
              <button class="gl-btn small" onclick="navigator.clipboard.writeText(document.getElementById('m2-p-prompt').innerText); window.showToast('Instrucciones copiadas','success');">📋 Copiar</button>
            </div>
            <p id="m2-p-prompt" style="font-size:0.72rem; color:#8b949e; margin:0; font-style:italic;">
              Actúa como un Secretario Ejecutivo de Alta Gerencia. Tu misión es transformar transcripciones caóticas en actas formales. Sigue este formato: [TÍTULO], [FECHA], [LISTA DE ASISTENTES], [RESUMEN DE TEMAS], [TABLA DE COMPROMISOS: Acción | Responsable | Fecha Límite], [PRÓXIMA CITACIÓN]. Usa lenguaje burocrático profesional pero moderno.
            </p>
          </div>

          <!-- Transcript -->
          <div style="background:#0d1117; padding:15px; border-radius:8px; border-left:4px solid #10b981;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span style="font-size:0.75rem; font-weight:bold; color:#10b981;">2. TRANSCRIPCIÓN DE PRUEBA (Input)</span>
              <button class="gl-btn small" style="border-color:#10b981; color:#10b981;" onclick="navigator.clipboard.writeText(document.getElementById('m2-p-trans').innerText); window.showToast('Transcripción copiada','success');">📋 Copiar</button>
            </div>
            <p id="m2-p-trans" style="font-size:0.72rem; color:#8b949e; margin:0;">
              "Hola a todos. Estamos Carlos, Elena y Diego. El tema es la compra de las 50 computadoras nuevas. Elena dice que el presupuesto subió 5%. Carlos dice que prefiere la marca X. Diego acuerda llamar al proveedor de la marca X mañana. Elena actualizará el Excel de presupuesto el jueves. Yo (Carlos) enviaré la invitación para el próximo viernes a las 10am para el cierre."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div id="m2-lab-mission" class="ag-content">
        <div class="exercise-box mission-card animate-in" style="border-left: 5px solid #10b981;">
          <div class="preparation-step" style="background: rgba(16,185,129,0.1); border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #10b981;">
            <h4 style="margin-top: 0; color: #10b981; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
            <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, asegúrate de haber configurado tu nombre en la sección de Perfil para que tu misión sea personalizada.</p>
          </div>
          <div class="exercise-header"><span class="exercise-icon">🔥</span><span class="exercise-title">Misión 2: El Saludo Institucional</span></div>
          <p>¿Lograste entrar a alguna herramienta? Elige tu favorita y pide: "Redacta un correo corto para un ciudadano avisando que su PQRS fue radicado satisfactoriamente."</p>
          <textarea placeholder="Pega aquí la respuesta que te dio la IA..."></textarea>
          <div class="pista-ia" style="background: rgba(16,185,129,0.1);">💡 <strong>Tip:</strong> Puedes pedirle que use un tono "respetuoso y empático" típico de la administración moderna.</div>
        </div>
        <button class="gl-btn gl-btn-outline complete-module-btn" data-module="module-2" data-xp="100">☐ Misión Cumplida (+100 XP)</button>
      </div>

      <div class="module-nav">
        <button class="gl-btn" data-goto="module-1">← Anterior</button>
        <button class="gl-btn gl-btn-primary" data-goto="module-3" style="background: #10b981;">Siguiente: Método CREA (Elite) →</button>
      </div>
        `,
        'module-3': `

      <div class="module-header premium-header">
        <div class="module-number gamer-badge">Nivel 3: El Alquimista</div>
        <h2 class="module-title glow-text">Prompts Efectivos: Método CREA</h2>
        <p class="module-description">Domina el arte de dar instrucciones de élite. Transforma la IA en tu herramienta de precisión definitiva.</p>
        <div class="module-meta">
          <span class="module-meta-item">⏱️ 40 minutos</span>
          <span class="module-meta-item">💎 150 XP</span>
          <span class="module-meta-item">🏆 Insignia: Alquimista de Prompts Elite</span>
        </div>
      </div>

      <div id="m3-progress-container" class="glass-card-premium" style="padding:15px; margin-bottom:25px; border-radius: 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:0.75rem; font-weight:800; opacity:0.7; letter-spacing:1px; font-family: 'Space Grotesk';">PROGRESO DE ALQUIMIA</span>
          <span id="m3-progress-text" class="badge-titan" style="font-size:0.7rem; padding: 4px 10px;">Nivel 1/5</span>
        </div>
        <div style="height:8px; background:rgba(0,0,0,0.4); border-radius:10px; overflow:hidden; border: 1px solid rgba(255,255,255,0.05);">
          <div id="m3-progress-fill" style="width:20%; height:100%; background:linear-gradient(90deg, var(--primary), var(--secondary)); box-shadow: 0 0 10px var(--primary); transition:width 0.4s ease;"></div>
        </div>
      </div>

      <div class="ag-tabs game-tabs">
        <button class="tab-btn active" data-level="1" id="m3-tab-1" onclick="m3ShowLevel(1)">1. Anatomía<br><small>El Método CREA</small></button>
        <button class="tab-btn locked" data-level="2" id="m3-tab-2" onclick="m3ShowLevel(2)">2. Técnicas<br><small>Elite Prompting</small></button>
        <button class="tab-btn locked" data-level="3" id="m3-tab-3" onclick="m3ShowLevel(3)">3. Biblioteca<br><small>Ejemplos Reales</small></button>
        <button class="tab-btn locked" data-level="4" id="m3-tab-4" onclick="m3ShowLevel(4)">4. Constructor<br><small>Dynamic Builder</small></button>
        <button class="tab-btn locked" data-level="5" id="m3-tab-5" onclick="m3ShowLevel(5)">5. Desafío<br><small>Certificación</small></button>
      </div>

      <!-- NIVEL 1: ANATOMÍA CREA -->
      <div id="m3-level-1" class="ag-content active">
        <div class="section-card animate-in">
          <h3><span class="icon">🏗️</span> La Fórmula Maestra: CREA</h3>
          <p>Un prompt excelente no es suerte, es ingeniería. Desglosa cualquier tarea en estos 4 pilares:</p>
          
          <div class="crea-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-top: 25px;">
            <div class="crea-card glass-card-premium" style="padding: 25px; border-radius: 20px; transition: transform 0.3s ease;">
              <div class="crea-letter" style="color:var(--primary); font-size: 3rem; font-weight: 900; text-shadow: 0 0 15px rgba(99,102,241,0.4);">C</div>
              <h4 style="color:var(--primary); font-family: 'Space Grotesk'; margin: 10px 0;">Contexto</h4>
              <p style="font-size:0.85rem; opacity:0.8; line-height: 1.6;">Explica la situación. ¿Por qué haces esto? ¿Quién leerá el resultado?</p>
              <div class="prompt-pill" style="font-size:0.75rem; background: rgba(99,102,241,0.1); border-color: rgba(99,102,241,0.3);">"Estamos cerrando el trimestre y necesito reportar gastos..."</div>
            </div>
            <div class="crea-card glass-card-premium" style="padding: 25px; border-radius: 20px;">
              <div class="crea-letter" style="color:#10b981; font-size: 3rem; font-weight: 900; text-shadow: 0 0 15px rgba(16,185,129,0.4);">R</div>
              <h4 style="color:#10b981; font-family: 'Space Grotesk'; margin: 10px 0;">Rol</h4>
              <p style="font-size:0.85rem; opacity:0.8; line-height: 1.6;">Asigna una personalidad. Dale un oficio y años de experiencia.</p>
              <div class="prompt-pill" style="font-size:0.75rem; border-color:#10b981; background: rgba(16,185,129,0.1);">"Actúa como un Auditor Senior de la Contraloría..."</div>
            </div>
            <div class="crea-card glass-card-premium" style="padding: 25px; border-radius: 20px;">
              <div class="crea-letter" style="color:#f59e0b; font-size: 3rem; font-weight: 900; text-shadow: 0 0 15px rgba(245,158,11,0.4);">E</div>
              <h4 style="color:#f59e0b; font-family: 'Space Grotesk'; margin: 10px 0;">Especificación</h4>
              <p style="font-size:0.85rem; opacity:0.8; line-height: 1.6;">La tarea concreta. Sé directo y usa verbos de acción fuertes.</p>
              <div class="prompt-pill" style="font-size:0.75rem; border-color:#f59e0b; background: rgba(245,158,11,0.1);">"Identifica 3 irregularidades en este balance contable..."</div>
            </div>
            <div class="crea-card glass-card-premium" style="padding: 25px; border-radius: 20px;">
              <div class="crea-letter" style="color:#ef4444; font-size: 3rem; font-weight: 900; text-shadow: 0 0 15px rgba(239,68,68,0.4);">A</div>
              <h4 style="color:#ef4444; font-family: 'Space Grotesk'; margin: 10px 0;">Acción/Formato</h4>
              <p style="font-size:0.85rem; opacity:0.8; line-height: 1.6;">¿Cómo quieres el resultado? (Tabla, Lista, PDF, Tono formal).</p>
              <div class="prompt-pill" style="font-size:0.75rem; border-color:#ef4444; background: rgba(239,68,68,0.1);">"Dame una tabla Markdown con: Hallazgo, Gravedad y Solución."</div>
            </div>
          </div>
          
          <button class="gl-btn gl-btn-primary" style="width:100%; margin-top:20px;" onclick="m3UnlockLevel(2)">Entendido: Ir a Técnicas de Élite →</button>
        </div>
      </div>

      <!-- NIVEL 2: TÉCNICAS ELITE -->
      <div id="m3-level-2" class="ag-content">
        <div class="section-card animate-in">
          <h3><span class="icon">🚀</span> El Practicante Estrella: Técnicas Avanzadas</h3>
          <p>Imagina a la IA como un practicante nuevo en tu oficina: es rápido e inteligente, pero a veces necesita que lo guíes de formas específicas. Más allá del método CREA, usa estos 3 trucos para "hackear" su mente.</p>
          
          <div class="technique-grid" style="display: grid; gap: 20px; margin-top: 25px;">
            
            <!-- FEW-SHOT -->
            <div class="ag-step-card glass-card-premium animate-in" style="border-left: 4px solid #6366f1; padding: 25px; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h4 style="margin: 0; color: #6366f1; display: flex; align-items: center; gap: 10px;"><span style="font-size: 1.5rem;">🎭</span> Aprendizaje con Ejemplos</h4>
                <div class="ag-badge" style="background: rgba(99,102,241,0.2); color: #6366f1; border: 1px solid #6366f1;">FEW-SHOT</div>
              </div>
              <p style="font-size:0.85rem; opacity:0.9; margin-bottom: 15px;"><strong>El Problema:</strong> Explicar con palabras exactamente cómo quieres el formato de un documento suele ser agotador.<br><strong>La Solución:</strong> En vez de darle tantas reglas, ¡solo muéstrale el resultado que quieres! La IA es increíble imitando patrones.</p>
              <div class="prompt-pill" style="font-size:0.8rem; background: #050510; border-left: 3px solid #6366f1; padding: 12px; border-radius: 8px;">
                <span style="color:#6366f1; font-weight:bold;">Ejemplo Práctico:</span><br>
                <em style="opacity: 0.9;">"Quiero que clasifiques estos correos. Sigue exactamente este formato:<br>
                - Ejemplo 1: [Queja sobre recibo] -> Asignar a Cartera<br>
                - Ejemplo 2: [Solicitud de cita] -> Asignar a Recepción<br>
                Ahora hazlo tú con este nuevo correo: [Mensaje del ciudadano]"</em>
              </div>
            </div>

            <!-- CHAIN-OF-THOUGHT -->
            <div class="ag-step-card glass-card-premium animate-in" style="border-left: 4px solid #10b981; padding: 25px; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h4 style="margin: 0; color: #10b981; display: flex; align-items: center; gap: 10px;"><span style="font-size: 1.5rem;">🧠</span> Pensamiento Paso a Paso</h4>
                <div class="ag-badge" style="background: rgba(16,185,129,0.2); color: #10b981; border: 1px solid #10b981;">CHAIN-OF-THOUGHT</div>
              </div>
              <p style="font-size:0.85rem; opacity:0.9; margin-bottom: 15px;"><strong>El Problema:</strong> A veces le damos un problema de lógica complejo, y por intentar responder rápido, se equivoca.<br><strong>La Solución:</strong> Obligarlo a "pensar en voz alta" con la frase mágica: <strong>"Piensa paso a paso"</strong> para que desmenuce el problema.</p>
              <div class="prompt-pill" style="font-size:0.8rem; background: #050510; border-left: 3px solid #10b981; padding: 12px; border-radius: 8px;">
                <span style="color:#10b981; font-weight:bold;">Ejemplo Práctico:</span><br>
                <em style="opacity: 0.9;">"Tenemos un presupuesto de $1000, gastamos $200 en papelería y devolvimos el 10% de un software que costó $400. Antes de decirme cuánto dinero queda, <strong>piensa paso a paso y desglosa cada cálculo</strong>."</em>
              </div>
            </div>

            <!-- NEGATIVE PROMPTS -->
            <div class="ag-step-card glass-card-premium animate-in" style="border-left: 4px solid #ef4444; padding: 25px; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h4 style="margin: 0; color: #ef4444; display: flex; align-items: center; gap: 10px;"><span style="font-size: 1.5rem;">🚫</span> Lo Prohibido</h4>
                <div class="ag-badge" style="background: rgba(239,68,68,0.2); color: #ef4444; border: 1px solid #ef4444;">NEGATIVE PROMPTS</div>
              </div>
              <p style="font-size:0.85rem; opacity:0.9; margin-bottom: 15px;"><strong>El Problema:</strong> La IA suele pecar de ser "demasiado entusiasta", escribiendo textos muy largos o sonando robótica.<br><strong>La Solución:</strong> Ponerle límites estrictos y decirle explícitamente qué es lo que NO debe hacer. ¡Ráyale la cancha!</p>
              <div class="prompt-pill" style="font-size:0.8rem; background: #050510; border-left: 3px solid #ef4444; padding: 12px; border-radius: 8px;">
                <span style="color:#ef4444; font-weight:bold;">Ejemplo Práctico:</span><br>
                <em style="opacity: 0.9;">"Redacta un correo institucional para los empleados. <strong>Reglas bloqueadas: Prohibido usar palabras complejas como 'desentrañar', prohibido despedirse con 'un cordial saludo', y prohibido exceder los 3 párrafos.</strong>"</em>
              </div>
            </div>

          </div>
          
          <div class="info-box tip" style="margin-top:20px; background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 15px; border-radius: 8px;">
            <strong>Pro Tip:</strong> Combina el método CREA con el Pensamiento Paso a Paso (Chain-of-Thought) para investigar y redactar informes complejos que requieran gran precisión de análisis.
          </div>
          
          <button class="gl-btn gl-btn-primary" style="width:100%; margin-top:25px;" onclick="m3UnlockLevel(3)">Continuar a la Biblioteca →</button>
        </div>
      </div>

      <!-- NIVEL 3: BIBLIOTECA -->
      <div id="m3-level-3" class="ag-content">
        <div class="section-card animate-in">
          <h3><span class="icon">📚</span> Biblioteca de Prompts de Élite</h3>
          <p>Prompts listos para copiar y usar en tu día a día institucional.</p>
          
          <div class="library-container" style="display: flex; flex-direction: column; gap: 20px; margin-top: 25px;">
            <div class="ag-prompt-card glass-card-premium" style="border-left: 4px solid #10b981; padding: 20px;">
              <div style="font-weight:800; font-size:0.75rem; margin-bottom:10px; color:#10b981; font-family: 'Space Grotesk'; letter-spacing:1px;">JURÍDICO</div>
              <p style="font-size:0.9rem; margin-bottom:15px; line-height:1.6; color: #e4e4e7;">"Actúa como abogado experto en derecho administrativo. Revisa este borrador de resolución y señala posibles vicios de legalidad según la Ley 1437. Presenta en lista de puntos críticos."</p>
              <button class="gl-btn small gl-btn-primary" onclick="navigator.clipboard.writeText('Actúa como abogado experto en derecho administrativo. Revisa este borrador de resolución y señala posibles vicios de legalidad según la Ley 1437. Presenta en lista de puntos críticos.'); window.showToast('Prompt Jurídico copiado', 'success');">📋 Copiar Prompt</button>
            </div>
            
            <div class="ag-prompt-card glass-card-premium" style="border-left: 4px solid #f59e0b; padding: 20px;">
              <div style="font-weight:800; font-size:0.75rem; margin-bottom:10px; color:#f59e0b; font-family: 'Space Grotesk'; letter-spacing:1px;">PLANEACIÓN / DATOS</div>
              <p style="font-size:0.9rem; margin-bottom:15px; line-height:1.6; color: #e4e4e7;">"Eres un analista de datos senior. Mira esta tabla de ejecución presupuestal. Identifica los 3 rubros con mayor desviación y sugiere 2 medidas correctivas basadas en eficiencia del gasto."</p>
              <button class="gl-btn small gl-btn-primary" style="background: rgba(245,158,11,0.2); border-color:#f59e0b; color:#f59e0b;" onclick="navigator.clipboard.writeText('Eres un analista de datos senior. Mira esta tabla de ejecución presupuestal. Identifica los 3 rubros con mayor desviación y sugiere 2 medidas correctivas basadas en eficiencia del gasto.'); window.showToast('Prompt de Planeación copiado', 'success');">📋 Copiar Prompt</button>
            </div>
            
            <div class="ag-prompt-card glass-card-premium" style="border-left: 4px solid #6366f1; padding: 20px;">
              <div style="font-weight:800; font-size:0.75rem; margin-bottom:10px; color:#6366f1; font-family: 'Space Grotesk'; letter-spacing:1px;">ATENCIÓN AL CIUDADANO</div>
              <p style="font-size:0.9rem; margin-bottom:15px; line-height:1.6; color: #e4e4e7;">"Actúa como profesional de servicio al ciudadano. Redacta una respuesta a esta PQR usando un tono sumamente empático, resolutivo y profesional. Evita promesas que no podamos cumplir legalmente."</p>
              <button class="gl-btn small gl-btn-primary" style="background: rgba(99,102,241,0.2); border-color:#6366f1; color:#6366f1;" onclick="navigator.clipboard.writeText('Actúa como profesional de servicio al ciudadano. Redacta una respuesta a esta PQR usando un tono sumamente empático, resolutivo y profesional. Evita promesas que no podamos cumplir legalmente.'); window.showToast('Prompt de PQR copiado', 'success');">📋 Copiar Prompt</button>
            </div>
          </div>
          
          <button class="gl-btn gl-btn-primary" style="width:100%; margin-top:20px;" onclick="m3UnlockLevel(4)">Ir al Constructor de Prompts →</button>
        </div>
      </div>

      <!-- NIVEL 4: CONSTRUCTOR -->
      <div id="m3-level-4" class="ag-content">
        <div class="section-card animate-in glass-card">
          <h3><span class="icon">⚡</span> Constructor Dinámico CREA</h3>
          <p>Sincroniza las piezas para generar un prompt de alta potencia al instante.</p>
          
          <div class="builder-columns" style="display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 20px;">
            <div class="builder-options" style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; border: 1px solid rgba(var(--primary-rgb), 0.2);">
              <label class="premium-label">1. ROL (Identidad)</label>
              <select id="m3-builder-role" class="game-select" onchange="m3UpdateBuilder()" style="width:100%; margin-bottom:15px;">
                <option value="Eres un experto en contratación pública">Contratación Pública</option>
                <option value="Actúa como un experto en gestión del talento humano">Talento Humano</option>
                <option value="Eres un analista de presupuesto">Analista de Presupuesto</option>
                <option value="Actúa como un comunicador institucional">Comunicación Institucional</option>
              </select>

              <label class="premium-label">2. CONTEXTO (Situación)</label>
              <select id="m3-builder-context" class="game-select" onchange="m3UpdateBuilder()" style="width:100%; margin-bottom:15px;">
                <option value="Estamos diseñando los pliegos para un nuevo proyecto de infraestructura.">Pliegos de Infraestructura</option>
                <option value="Estamos revisando el clima organizacional después de una reestructuración.">Clima Organizacional</option>
                <option value="Necesitamos optimizar el gasto en papelería y servicios básicos.">Optimización de Gastos</option>
                <option value="Queremos informar a la comunidad sobre los logros de la semana.">Logros de la Semana</option>
              </select>

              <label class="premium-label">3. TAREA (Acción)</label>
              <select id="m3-builder-task" class="game-select" onchange="m3UpdateBuilder()" style="width:100%;">
                <option value="redacta una lista de 5 requisitos técnicos indispensables.">Redactar Requisitos</option>
                <option value="propón 3 estrategias para mejorar la comunicación interna.">Proponer Estrategias</option>
                <option value="identifica 3 áreas de ahorro inmediato sin afectar la operación.">Identificar Ahorro</option>
                <option value="crea un guion para un video de 1 minuto para redes sociales.">Crear Guion Redes</option>
              </select>
            </div>

            <div class="builder-preview glass-card-ultra" style="padding: 24px; margin-top: 24px;">
              <div class="text-sleek-label" style="margin-bottom: 16px;">PROMPT GENERADO (CREA):</div>
              <div id="m3-builder-output" class="glass-card-premium" style="font-size: 1.1rem; font-weight: 500; color: #fff; line-height: 1.7; min-height: 140px; padding: 20px; border-left: 3px solid #f59e0b; position: relative; overflow: hidden; font-family: 'Outfit', sans-serif; background: rgba(255,255,255,0.02);">
                <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, rgba(245,158,11,0.05), transparent); pointer-events: none;"></div>
                <span style="position:relative; z-index:2;">Sincronizando componentes...</span>
              </div>
              <div style="margin-top: 16px;">
                <button class="gl-btn btn-titan-gold" style="width: 100%;" onclick="navigator.clipboard.writeText(document.getElementById('m3-builder-output').innerText); window.showToast('Prompt Maestro copiado', 'success');">📋 Copiar Prompt Maestro</button>
              </div>
            </div>
          </div>
          
          <button class="gl-btn btn-titan-primary animate-pulse" style="width:100%; margin-top:32px;" onclick="m3UnlockLevel(5)">Finalizar y Certificar →</button>
        </div>
      </div>

      <!-- NIVEL 5: CERTIFICACIÓN -->
      <div id="m3-level-5" class="ag-content">
        <div class="section-card animate-in">
          <h3><span class="icon">🏆</span> Certificación: Maestro Alquimista</h3>
          <p>Valida tu dominio de la fórmula CREA para reclamar tu insignia.</p>
          
          <div class="quiz-card">
            <p style="font-weight:bold; margin-bottom:15px;">¿Cuál de estos componentes de CREA define el FORMATO de salida?</p>
            <div class="quiz-options">
              <div class="quiz-option" onclick="m3ValidateQuiz(this, 'n')">Contexto</div>
              <div class="quiz-option" onclick="m3ValidateQuiz(this, 'n')">Especificación</div>
              <div class="quiz-option" onclick="m3ValidateQuiz(this, 'y')">Acción / Formato</div>
            </div>
          </div>
          
          <div id="m3-final-mission" class="exercise-box mission-card" style="margin-top:25px; display:none;">
            <div class="preparation-step" style="background: rgba(99,102,241,0.1); border: 1px solid #6366f1; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #6366f1;">
              <h4 style="margin-top: 0; color: #6366f1; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
              <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, repasa la metodología CREA en la pestaña 'Anatomía' para asegurar que tu prompt cumpla todos los criterios.</p>
            </div>
            <div class="exercise-header"><span class="exercise-icon">🔥</span><span class="exercise-title">Misión 3: El Alquimista Soberano</span></div>
              <p>Documenta una misión completa con CREA para una tarea real de tu oficina y deja claro cómo validarás la salida.</p>
              <div class="learning-mission-grid" style="display:grid; gap:12px; margin-top:16px;">
                <div>
                  <label for="m3-mission-context" style="display:block; font-weight:700; margin-bottom:6px;">1. Contexto y tarea crítica</label>
                  <textarea id="m3-mission-context" placeholder="Explica qué proceso quieres acelerar, quién recibirá el resultado y qué te está frenando hoy."></textarea>
                </div>
                <div>
                  <label for="m3-mission-role" style="display:block; font-weight:700; margin-bottom:6px;">2. Rol y resultado esperado</label>
                  <textarea id="m3-mission-role" placeholder="Define el rol experto que debe asumir la IA y el entregable exacto que esperas."></textarea>
                </div>
                <div>
                  <label for="m3-mission-prompt" style="display:block; font-weight:700; margin-bottom:6px;">3. Prompt final usando CREA</label>
                  <textarea id="m3-mission-prompt" placeholder="Redacta tu prompt final con contexto, rol, estructura y acción."></textarea>
                </div>
                <div>
                  <label for="m3-mission-verification" style="display:block; font-weight:700; margin-bottom:6px;">4. Verificación y mejora</label>
                  <textarea id="m3-mission-verification" placeholder="Indica cómo vas a revisar el resultado, qué error podrías encontrar y qué ajustarías en una segunda iteración."></textarea>
                </div>
              </div>
              <div class="reward-tag">+150 XP y Insignia Crystal Prompt</div>
              <button class="gl-btn gl-btn-primary complete-module-btn" style="width:100%; margin-top:15px;" data-module="module-3" onclick="m3FinalizeModule()">Finalizar Módulo y Reclamar Insignia</button>
            </div>
          </div>
        </div>

      <div class="module-nav">
        <button class="gl-btn" data-goto="module-2">← Anterior</button>
        <button class="gl-btn gl-btn-primary" data-goto="module-4" id="m3-next-btn" style="display:none;">Siguiente: Herramientas del Funcionario →</button>
      </div>
        `,
        'module-4': `
      <div class="module-header premium-header animate-in">
        <div class="module-number gamer-badge luxury">Nivel 4: El Funcionario Digital</div>
        <h2 class="module-title glow-text-luxury">IA para Documentos (Estratégico)</h2>
        <p class="module-description">Domina el arte de procesar expedientes, decretos y reportes masivos con inteligencia artificial de grado institucional.</p>
        <div class="module-meta">
          <span class="module-meta-item">⏱️ 30 min</span>
          <span class="module-meta-item">💎 150 XP</span>
          <span class="module-meta-item">🏆 Insignia: Analista de Documentos Elite</span>
        </div>
      </div>

      <div class="ag-tabs game-tabs luxury-tabs" style="margin-bottom: 30px;">
        <button class="tab-btn active" data-tab="m4-ecosystem"><span>🌐</span> Ecosistema</button>
        <button class="tab-btn" data-tab="m4-simulator"><span>🧪</span> Terminal DNA</button>
        <button class="tab-btn" data-tab="m4-blueprints"><span>💡</span> Blueprint Lab</button>
        <button class="tab-btn" data-tab="m4-mission"><span>⚔️</span> Misión: Scriptum</button>
      </div>

      <!-- 🌐 ECOSISTEMA DE HERRAMIENTAS -->
      <div id="m4-ecosystem" class="ag-content active">
        <div class="section-card animate-in holographic-glare">
          <h3><span class="icon">🚀</span> El Arsenal del Funcionario 4.0</h3>
          <p>Herramientas tácticas para reducir meses de lectura a segundos de análisis estratégico.</p>
          
          <div class="tool-matrix-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 25px;">
             <!-- Tool cards (existing) -->
             <div class="tool-access-card luxury-card" onclick="window.open('https://perplexity.ai', '_blank')">
               <div class="tool-icon-wrapper blue-glow">🔎</div>
               <h4>Perplexity AI</h4>
               <p>Investigación jurídica con fuentes reales.</p>
             </div>
             <div class="tool-access-card luxury-card" onclick="window.open('https://claude.ai', '_blank')">
               <div class="tool-icon-wrapper gold-glow">✍️</div>
               <h4>Claude AI</h4>
               <p>Análisis de expedientes pesados y redacción técnica.</p>
             </div>
          </div>
          
          <!-- Classifier Game Section -->
          <div class="classifier-game glass-card" style="margin-top: 40px;">
             <h4><span class="icon">🎮</span> Mini-Juego: Clasificador Pro</h4>
             <p>Asigna cada tarea a la herramienta IA más eficiente para ganar XP.</p>
             <div class="classifier-items" id="m4-drag-items">
                <div class="drag-item" draggable="true" ondragstart="app.drag(event)" id="drag-1" data-target="perplexity">"¿Decreto de austeridad 2024?"</div>
                <div class="drag-item" draggable="true" ondragstart="app.drag(event)" id="drag-2" data-target="claude">"Resumir este PDF de 80 pág"</div>
                <div class="drag-item" draggable="true" ondragstart="app.drag(event)" id="drag-3" data-target="notebooklm">"Podcast de mis archivos"</div>
             </div>
             <div class="drop-zones">
                <div class="drop-zone" id="perplexity" ondrop="app.drop(event)" ondragover="app.allowDrop(event)"><span>🔎</span> Perplexity</div>
                <div class="drop-zone" id="claude" ondrop="app.drop(event)" ondragover="app.allowDrop(event)"><span>✍️</span> Claude</div>
                <div class="drop-zone" id="notebooklm" ondrop="app.drop(event)" ondragover="app.allowDrop(event)"><span>📚</span> NotebookLM</div>
             </div>
          </div>
        </div>
      </div>

      <div id="m4-simulator" class="ag-content">
        <!-- Auditor Lab (existing logic wrapped) -->
        <div class="section-card animate-in glass-card">
          <div class="card-header-premium">
            <span class="badge-premium">LABORATORIO DE AUDITORÍA</span>
            <h3><span class="icon">🔍</span> Detector de Alucinaciones</h3>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">
            Las IA pueden sufrir de <strong>"alucinaciones"</strong>, es decir, inventar citas, leyes o datos que suenan muy reales pero son completamente falsos. 
            Como funcionario, tu deber es <strong>auditar</strong> el contenido antes de usarlo.
          </p>
          <div class="terminal-container subtle-glass" style="border-radius: 16px; border: 1px solid var(--glass-border); padding: 25px; margin-top: 20px;">
             <p style="font-weight: 700; color: var(--primary-light); margin-bottom: 20px; font-size: 0.85rem; letter-spacing: 0.5px;">
               🎯 INSTRUCCIÓN: Una IA ha resumido un nuevo "Decreto" en 3 puntos. Detecta la <strong>alucinación técnica</strong>.
             </p>
             <div id="m4-audit-screen">
               <div class="audit-challenge-container">
                  <div class="audit-card glass-card subtle-border elegant-transition" onclick="app.checkAudit(this, false)">
                    <strong>#01: Reducción de viáticos:</strong> "Según el decreto de austeridad, los viajes de servidores públicos al exterior deben priorizar clase económica en vuelos de más de 4 horas."
                  </div>
                  <div class="audit-card glass-card-premium animate-in" onclick="app.checkAudit(this, true)" style="margin-bottom: 12px; cursor: pointer;">
                    <strong>#02: Impuesto digital:</strong> "La reforma establece un impuesto del 5% por cada correo electrónico institucional enviado después de las 6:00 PM para desincentivar el trabajo extra."
                  </div>
                  <div class="audit-card glass-card-premium animate-in" onclick="app.checkAudit(this, false)" style="margin-bottom: 12px; cursor: pointer;">
                    <strong>#03: Planta de personal:</strong> "Está prohibida la creación de nuevos cargos en las entidades públicas a menos que exista una viabilidad fiscal previa del Ministerio."
                  </div>
               </div>
               <div id="audit-feedback" class="m-pa-note" style="margin-top: 20px; font-weight: bold;"></div>
             </div>
          </div>
        </div>

        <!-- Comparison Engine Simulator -->
        <div class="section-card animate-in glass-card-premium" style="margin-top: 35px;">
           <h4 class="text-gradient-primary" style="margin-bottom: 20px;"><span class="icon">⚖️</span> Motor de Comparación</h4>
           <div class="comparison-engine" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div class="m-pa-panel-card animate-in">
                 <div class="badge-titan" style="margin-bottom: 10px;">🔎 PERPLEXITY AI · BUSQUEDA</div>
                 <div class="m-pa-codebox" style="color: var(--primary-light);">
                    <span style="opacity: 0.5;">></span> Buscando Decreto_81_2024 EN VIVO...<br>
                    <span style="opacity: 0.5;">></span> Encontrado en portal.gov.co ✅<br>
                    <span style="opacity: 0.5;">></span> Cita: "Art. 1 establece límites..."
                 </div>
              </div>
              <div class="m-pa-panel-card animate-in">
                 <div class="badge-titan" style="margin-bottom: 10px; background: var(--warning); border-color: var(--warning); color: #000;">✍️ CLAUDE AI · SÍNTESIS</div>
                 <div class="m-pa-codebox" style="color: var(--warning);">
                    <span style="opacity: 0.5;">></span> Leyendo 4.500 palabras...<br>
                    <span style="opacity: 0.5;">></span> Hallazgo: Contradicción con Decreto 2023.<br>
                    <span style="opacity: 0.5;">></span> Propuesta: "En virtud de..."
                 </div>
              </div>
           </div>
        </div>
      </div>

      <!-- 💡 BLUEPRINT LAB - NUEVA SECCIÓN -->
      <div id="m4-blueprints" class="ag-content">
         <div class="section-card animate-in glass-card-premium">
            <h3 class="text-gradient-primary"><span class="icon">💡</span> Blueprint Lab: Estructuras Maestras</h3>
            <p class="m-pa-note">Copia estos "Blueprints" para que la IA genere documentos perfectos.</p>
            <div class="blueprint-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px;">
               <div class="m-pa-panel-card" style="text-align: center; cursor: pointer; transition: 0.3s;" onclick="app.showBlueprint('resolution')">
                  <span style="font-size: 2.5rem; display: block; margin-bottom: 10px;">📜</span>
                  <h5 style="margin: 0; color: #fff;">Resolución</h5>
               </div>
               <div class="m-pa-panel-card" style="text-align: center; cursor: pointer; transition: 0.3s;" onclick="app.showBlueprint('memo')">
                  <span style="font-size: 2.5rem; display: block; margin-bottom: 10px;">📧</span>
                  <h5 style="margin: 0; color: #fff;">Memorando</h5>
               </div>
               <div class="m-pa-panel-card" style="text-align: center; cursor: pointer; transition: 0.3s;" onclick="app.showBlueprint('report')">
                  <span style="font-size: 2.5rem; display: block; margin-bottom: 10px;">📊</span>
                  <h5 style="margin: 0; color: #fff;">Acta Técnica</h5>
               </div>
            </div>
            <div id="blueprint-viewer" style="margin-top: 30px; display: none;" class="animate-in">
               <div class="m-pa-panel-card" style="border: 1px solid var(--primary); padding: 0; overflow: hidden;">
                  <div class="code-header" style="background: rgba(var(--primary-rgb), 0.1); padding: 12px 20px; border-bottom: 1px solid var(--primary); display: flex; justify-content: space-between; align-items: center;">
                    <span id="blueprint-title" class="text-gradient-primary" style="font-weight: bold; font-family: 'Space Grotesk';"></span>
                    <button class="gl-btn-outline small" style="padding: 6px 12px;" onclick="app.copyBlueprint()">📋 Copiar</button>
                  </div>
                  <pre id="blueprint-content" class="m-pa-codebox" style="margin: 0; border: none; border-radius: 0; padding: 20px; font-size: 0.9rem; line-height: 1.6;"></pre>
               </div>
            </div>
         </div>
      </div>

      <!-- ⚔️ MISIÓN: SCRIPTUM -->
      <div id="m4-mission" class="ag-content">
        <div class="exercise-box mission-card animate-in glass-card-premium" style="padding: 30px;">
          <div class="preparation-step" style="background: rgba(var(--primary-rgb), 0.1); border: 1px solid var(--primary); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid var(--primary); backdrop-filter: blur(10px);">
            <h4 class="text-gradient-primary" style="margin-top: 0; font-size: 1rem; display: flex; align-items: center; gap: 10px;">🛠️ Preparación de la Plataforma</h4>
            <p class="m-pa-note" style="margin-bottom: 0; color: #fff;">Antes de iniciar, abre Perplexity AI en una pestaña separada y ten a mano el nombre de tu departamento o área.</p>
          </div>
          <div class="exercise-header">
            <span class="exercise-icon">🛡️</span>
            <span class="exercise-title">Operación: Scriptum</span>
          </div>
          <p class="m-pa-note">Tu reto final: Localiza una fuente oficial. Usa <b>Perplexity</b> para encontrar el último decreto de austeridad o una directiva presidencial reciente.</p>
          
          <div class="mission-instructions" style="background: rgba(var(--primary-rgb), 0.05); padding: 24px; border-radius: 12px; border-left: 4px solid var(--primary); margin: 24px 0;">
            <ul style="margin: 0; padding-left: 20px; font-size: 0.95rem; line-height: 2; color: var(--text-secondary);">
              <li>Introduce como prompt en Perplexity: "¿Cuál es el último decreto de austeridad del gasto nacional en Colombia?"</li>
              <li>Verifica que la fuente sea un portal gubernamental (.gov.co).</li>
              <li>Pega el enlace oficial aquí abajo para validar tu investigación.</li>
            </ul>
          </div>

            <div class="learning-mission-grid" style="display:grid; gap:12px; margin-top:20px;">
              <div class="input-glow-wrapper">
                <label for="m4-mission-source" style="display:block; font-weight:700; margin-bottom:6px;">1. Fuente o documento base</label>
                <textarea id="m4-mission-source" placeholder="Pega el enlace .gov.co o describe el documento oficial que analizaste." class="premium-textarea" style="min-height: 90px;"></textarea>
              </div>
              <div class="input-glow-wrapper">
                <label for="m4-mission-summary" style="display:block; font-weight:700; margin-bottom:6px;">2. Resumen ejecutivo</label>
                <textarea id="m4-mission-summary" placeholder="Resume en pocas líneas de qué trata el documento y por qué importa." class="premium-textarea" style="min-height: 100px;"></textarea>
              </div>
              <div class="input-glow-wrapper">
                <label for="m4-mission-risk" style="display:block; font-weight:700; margin-bottom:6px;">3. Riesgo o hallazgo crítico</label>
                <textarea id="m4-mission-risk" placeholder="Describe el principal riesgo, inconsistencia o alerta que detectaste." class="premium-textarea" style="min-height: 90px;"></textarea>
              </div>
              <div class="input-glow-wrapper">
                <label for="m4-mission-action" style="display:block; font-weight:700; margin-bottom:6px;">4. Acción y verificación</label>
                <textarea id="m4-mission-action" placeholder="Explica qué decisión tomarías y cómo verificarías que el hallazgo sí está soportado por la fuente." class="premium-textarea" style="min-height: 100px;"></textarea>
              </div>
            </div>
          
          <div class="reward-tag" style="margin-top: 25px; background: rgba(169, 114, 255, 0.1); border: 1px solid rgba(169, 114, 255, 0.3); color: #a972ff;">+150 XP • Insignia Analista Soberano</div>
          <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-4" style="width: 100%; margin-top: 20px; padding: 16px;" onclick="app.finalizeM4Mission()">Finalizar e Indexar Módulo 4</button>
        </div>
      </div>

      <div class="module-nav">
        <button class="gl-btn luxury" data-goto="module-3">← Anterior</button>
        <button class="gl-btn gl-btn-primary premium-glow" data-goto="module-5">Nivel 5: Maestría en Datos →</button>
      </div>
        `,
        'module-5': `
      <div class="module-header premium-header animate-in">
        <div class="badge-titan" style="margin-bottom: 20px;">Nivel 5: El Analista</div>
        <h2 class="module-title text-gradient-primary">📊 IA para Datos y Excel: Maestría Analítica</h2>
        <p class="m-pa-note">Desde la limpieza básica hasta el análisis predictivo y automatización avanzada con VBA + IA.</p>
        <div class="module-meta" style="margin-top: 20px; display: flex; gap: 20px; font-family: 'Space Grotesk'; font-size: 0.85rem;">
          <span class="module-meta-item">⏱️ 40 min</span>
          <span class="module-meta-item">💎 150 XP</span>
          <span class="module-meta-item">🏆 Insignia: Alquimista de Datos</span>
        </div>
      </div>

      <!-- ══ BARRA DE PROGRESO INTERNA ══ -->
      <div id="m5-progress-container" class="glass-card-premium" style="padding: 24px; margin-bottom: 30px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span class="text-gradient-primary" style="font-weight:700; font-size: 1rem;">Tu Progreso Analítico</span>
          <span id="m5-progress-label" class="badge-titan">Nivel 1 de 5</span>
        </div>
        <div style="background:rgba(255,255,255,0.05); border-radius:20px; height:10px; overflow:hidden; border: 1px solid var(--border);">
          <div id="m5-progress-fill" style="background:linear-gradient(90deg,var(--primary),var(--secondary)); height:100%; width:0%; transition:width 0.6s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 0 15px var(--primary-glow);"></div>
        </div>
      </div>

      <!-- ══ NAVEGACIÓN POR NIVELES ══ -->
      <div id="m5-levels-nav" style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem;">
        <button class="m5-tab active" data-level="1" onclick="m5ShowLevel(1)">🌱 Nivel 1<br><small>Fundamentos</small></button>
        <button class="m5-tab locked" data-level="2" onclick="m5ShowLevel(2)">🧹 Nivel 2<br><small>Limpieza</small></button>
        <button class="m5-tab locked" data-level="3" onclick="m5ShowLevel(3)">🔍 Nivel 3<br><small>Auditoría</small></button>
        <button class="m5-tab locked" data-level="4" onclick="m5ShowLevel(4)">🚀 Nivel 4<br><small>Automatización</small></button>
        <button class="m5-tab locked" data-level="5" onclick="m5ShowLevel(5)">🏆 Nivel 5<br><small>Hito Final</small></button>
      </div>

      <div id="m5-level-1" class="ag-content active animate-in">
        <div class="section-card storytelling" style="border-left-color:var(--primary);">
            <p class="narrative-text">"El caos domina el servidor central. Miles de filas de Excel con errores de formato, nombres duplicados y cifras que no cuadran..."</p>
        </div>
        <button class="quiz-btn" style="width:100%;margin-top:1.5rem;background:linear-gradient(135deg,var(--primary),var(--secondary));" onclick="m5UnlockAndGo(2)">
          ✅ Entendí el flujo → Iniciar Limpieza (Nivel 2)
        </button>
      </div>

      <div id="m5-level-2" class="ag-content animate-in">
        <div class="section-card">
            <h3>🧹 Laboratorio de Limpieza de Datos</h3>
            <p>Mira cómo la IA transforma un "caos" de datos en información estructurada. Modifica los datos o el prompt y prueba el procesamiento.</p>
            
            <div class="cleaning-sim" style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 15px; margin-top: 20px; align-items: stretch;">
              <div style="background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); padding: 15px; border-radius: 8px; display: flex; flex-direction: column;">
                <div style="font-size: 0.7rem; color: #ef4444; font-weight: bold; margin-bottom: 8px;">ENTRADA SUCIA (CSV):</div>
                <textarea id="m5-raw-data" spellcheck="false" style="flex:1; width: 100%; min-height: 100px; background: rgba(0,0,0,0.2); border: 1px solid rgba(239,68,68,0.3); color: #ef4444; font-family: monospace; font-size: 0.75rem; padding: 10px; border-radius: 6px; resize: none; margin-bottom: 10px;">
Nombreee; ID; Fecha
Juan Perez; '123; 01-ene
MAria G; NULL; 1/1/24
; 456; 2024-05-01</textarea>
                <div style="font-size: 0.7rem; color: var(--primary-light); font-weight: bold; margin-bottom: 5px;">INSTRUCCIÓN IA:</div>
                <textarea id="m5-clean-prompt" spellcheck="false" style="width: 100%; height: 60px; background: rgba(0,0,0,0.4); border: 1px solid var(--primary); color: #fff; font-family: monospace; font-size: 0.75rem; padding: 8px; border-radius: 6px; resize: none;">Limpia este CSV: normaliza nombres, convierte fechas y rellena vacíos con 'Desconocido'.</textarea>
              </div>
              
              <div style="display: flex; flex-direction: column; justify-content: center; padding: 10px 0;">
                <button id="m5-btn-clean" class="gl-btn gl-btn-primary" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100px; width: 85px; padding: 10px; border-radius: 12px; border: 1px solid var(--primary-light); box-shadow: 0 0 15px rgba(99,102,241,0.3); transition: all 0.3s ease;" onclick="window.m5ProcessData()">
                  <span style="font-size: 1.8rem; margin-bottom: 5px;">⚡</span>
                  <span style="font-size: 0.7rem; font-weight: bold; text-align: center; text-transform: uppercase;">Limpiar<br>Datos</span>
                </button>
              </div>

              <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); padding: 15px; border-radius: 8px; display: flex; flex-direction: column;">
                <div style="font-size: 0.7rem; color: #10b981; font-weight: bold; margin-bottom: 8px;">SALIDA IA (LIMPIA):</div>
                <div id="m5-clean-output" style="background: rgba(0,0,0,0.3); flex: 1; border-radius: 6px; padding: 10px; font-size: 0.75rem; color: #8b949e; font-family: monospace; overflow-y: auto; border: 1px solid rgba(16,185,129,0.1);">
                  <div style="text-align:center; margin-top:25px; opacity:0.5;">
                    <span style="font-size:2rem; display:block; margin-bottom:10px;">🤖</span>
                    Esperando datos...
                  </div>
                </div>
              </div>
            </div>
        </div>
        <button class="quiz-btn" style="width:100%;margin-top:1.5rem;background:linear-gradient(135deg,var(--primary),var(--secondary));" onclick="m5UnlockAndGo(3)">
          🚀 Continuar a Auditoría (Nivel 3) →
        </button>
      </div>

      <div id="m5-level-3" class="ag-content animate-in">
        <div class="section-card glass-card-premium">
            <div class="card-header-premium" style="margin-bottom: 20px;">
              <div class="badge-titan" style="margin-bottom: 10px;">LABORATORIO SOBERANO</div>
              <h3 class="text-gradient-primary" style="margin: 0;"><span class="icon">🔍</span> Auditoría de Datos v32.1</h3>
            </div>
            <p class="m-pa-note" style="font-size: 1rem; color: #fff;">
              El ojo humano falla ante miles de datos. La IA detecta anomalías estadísticas en nanosegundos. 
              Activa el <b>Sovereign Scan</b> para auditar esta tabla de ejecución presupuestal.
            </p>
            
            <div class="audit-sovereign-panel" style="background: rgba(0,0,0,0.4); border-radius: 16px; padding: 25px; margin-top: 25px; border: 1px solid var(--glass-border); position: relative; overflow: hidden;">
              <div id="m5-audit-scanner" style="position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: var(--accent-gradient); opacity: 0; z-index: 10; pointer-events: none;"></div>
              
              <table style="width: 100%; font-size: 0.9rem; border-collapse: separate; border-spacing: 0 10px;">
                <thead>
                  <tr style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px;">
                    <th style="padding: 10px; text-align: left;">Entidad / Sede</th>
                    <th style="padding: 10px; text-align: left;">Gastos 2023</th>
                    <th style="padding: 10px; text-align: left;">Gastos 2024</th>
                  </tr>
                </thead>
                <tbody id="m5-audit-tbody">
                  <tr class="audit-row-premium" style="background: rgba(255,255,255,0.03); transition: all 0.3s ease;">
                    <td style="padding: 15px; border-radius: 12px 0 0 12px;">📍 Bogotá D.C.</td>
                    <td style="padding: 15px;">$1.200M</td>
                    <td style="padding: 15px; border-radius: 0 12px 12px 0;">$1.250M</td>
                  </tr>
                  <tr id="m5-audit-row-error" class="audit-row-premium" style="background: rgba(255,255,255,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);">
                    <td style="padding: 15px; border-radius: 12px 0 0 12px;">📍 Medellín</td>
                    <td style="padding: 15px;">$900M</td>
                    <td id="m5-error-cell" style="padding: 15px; border-radius: 0 12px 12px 0; font-weight: 700;">$9.000M</td>
                  </tr>
                  <tr class="audit-row-premium" style="background: rgba(255,255,255,0.03); transition: all 0.3s ease;">
                    <td style="padding: 15px; border-radius: 12px 0 0 12px;">📍 Cali</td>
                    <td style="padding: 15px;">$600M</td>
                    <td style="padding: 15px; border-radius: 0 12px 12px 0;">$610M</td>
                  </tr>
                </tbody>
              </table>

              <div id="m5-audit-overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); backdrop-filter: blur(4px); display:flex; align-items:center; justify-content:center; flex-direction:column; gap:15px; z-index:5; border-radius: 16px;">
                 <div class="scan-pulse" style="width: 80px; height: 80px; background: rgba(99, 102, 241, 0.2); border: 2px solid var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; animation: pulse 2s infinite;">🔍</div>
                 <button class="gl-btn gl-btn-primary gl-btn-lux" onclick="window.m5RunSovereignScan(this)">Activar Sovereign Scan ⚡</button>
              </div>
            </div>

            <div id="m5-audit-report" class="animate-in" style="display: none; margin-top: 30px; padding: 24px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.08); backdrop-filter: blur(10px);">
              <div style="display: flex; gap: 20px; align-items: flex-start;">
                <span style="font-size: 2.5rem;">🚨</span>
                <div>
                  <h4 style="color: #ef4444; margin: 0 0 8px;">ANOMALÍA DETECTADA: Error de Magnitud</h4>
                  <p class="m-pa-note" style="color: #fff; margin: 0;">
                    Se ha identificado una inconsistencia estadística en la sede <b>Medellín</b>. El incremento del 900.0% respecto al periodo anterior supera los umbrales institucionales permitidos sin justificación técnica adjunta.
                  </p>
                  <div class="badge-titan" style="margin-top: 15px; background: rgba(169, 114, 255, 0.1); border-color: rgba(169, 114, 255, 0.3); color: #a972ff;">+50 XP • Agente Auditor</div>
                </div>
              </div>
            </div>
        </div>
        <button class="quiz-btn" style="width:100%;margin-top:1.5rem;background:linear-gradient(135deg,var(--primary),var(--secondary));" onclick="m5UnlockAndGo(4)">
          🛠️ Ir a Automatización (Nivel 4) →
        </button>
      </div>

      <div id="m5-level-4" class="ag-content animate-in">
        <div class="section-card">
            <h3>🚀 Automatización con Macros 2.0</h3>
            <p>Ya no necesitas saber programar en VBA. Solo necesitas saber pedirlo.</p>
            
            <div class="vba-generator-box" style="background: #1e1e1e; padding: 20px; border-radius: 8px; border: 1px solid #333; margin-top: 20px;">
              <div style="color: #6366f1; font-size: 0.75rem; margin-bottom: 10px;">Petición a la IA:</div>
              <div style="font-family: monospace; font-size: 0.85rem; color: #fff; margin-bottom: 20px;">
                "Crea una macro en Excel que resalte en rojo todas las celdas de la columna 'Presupuesto' que superen los 5 millones."
              </div>
              <button class="nav-btn small" onclick="this.nextElementSibling.style.display='block'; this.style.display='none';">⚙️ Generar Código</button>
              <div style="display: none;" class="animate-in">
                <pre style="background: #000; padding: 15px; border-radius: 6px; font-size: 0.7rem; color: #10b981; overflow-x: auto;">
Sub ResaltarPresupuesto()
  Dim cell As Range
  For Each cell In Range("B2:B100")
    If cell.Value > 5000000 Then
      cell.Interior.Color = RGB(255, 0, 0)
    End If
  Next cell
End Sub
                </pre>
                <p style="font-size: 0.75rem; color: #aaa; margin-top: 10px;">Copia y pega este código en el editor de VBA (Alt+F11) y listo. 🤖✨</p>
              </div>
            </div>
        </div>
        <button class="quiz-btn" style="width:100%;margin-top:1.5rem;background:linear-gradient(135deg,var(--primary),var(--secondary));" onclick="m5UnlockAndGo(5)">
          🏁 Finalizar Módulo 5 →
        </button>
      </div>

      <div id="m5-level-5" class="ag-content animate-in">
        <div class="section-card">
            <div class="preparation-step" style="background: rgba(245,158,11,0.1); border: 1px solid #f59e0b; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
              <h4 style="margin-top: 0; color: #f59e0b; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
              <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, prepara una base de datos ficticia en Excel con nombres y cuentas bancarias para practicar la censura de datos sensibles.</p>
            </div>
            <h3><span class="icon">🛡️</span> Desafío Final: El Filtro Ético</h3>
            <p>Antes de automatizar y enviar datos a la IA pública, debes proteger la información sensible (PII). Un verdadero Analista de Datos protege la privacidad institucional.</p>
            
            <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 20px; margin-top: 20px; border:1px solid #333;">
              <div style="font-size: 0.8rem; color: #f59e0b; margin-bottom: 10px;"><b>ÓRDEN:</b> Haz clic en las palabras rojizas que sean "Información Sensible" para censurarlas antes de presionar Enviar.</div>
              <div id="m5-leak-text" style="font-family: monospace; font-size: 0.85rem; color: #c9d1d9; line-height: 1.8; padding:15px; background:#161b22; border-radius:6px; user-select:none;">
                La funcionaria <span class="m5-clk" data-sens="1" onclick="this.innerText='******'; this.style.color='#10b981'; this.dataset.done='1';" style="color:#ef4444; cursor:pointer; font-weight:bold; border-bottom:1px dashed #ef4444;">Ana Milena López</span> 
                reportó un error en sus cesantías. El pago se hizo a la cuenta de ahorros 
                <span class="m5-clk" data-sens="1" onclick="this.innerText='******'; this.style.color='#10b981'; this.dataset.done='1';" style="color:#ef4444; cursor:pointer; font-weight:bold; border-bottom:1px dashed #ef4444;">Bancolombia #837-1293-22</span>. 
                Se aprueba reliquidación en el sistema central de <span class="m5-clk" data-sens="0" onclick="window.showToast('Esto NO es sensible','warning')" style="color:#ef4444; cursor:pointer; font-weight:bold; border-bottom:1px dashed #ef4444;">Bogotá</span>.
              </div>
              
              <button class="gl-btn" style="width:100%; margin-top:15px; background:#6366f1; color:#fff;" onclick="window.m5FinalCheck()">Enviar Documento a la IA ☁️</button>
              
              <div id="m5-leak-feedback" style="display:none; margin-top:15px; text-align:center; font-weight:bold;"></div>
            </div>
        </div>

        <div id="m5-victory-panel" class="section-card animate-in glass-card-premium" style="text-align: center; display:none; margin-top:30px; border: 1px solid var(--primary);">
          <div style="font-size: 4rem; margin-bottom: 25px; filter: drop-shadow(0 0 15px var(--primary-glow));">🏆</div>
          <h3 class="text-gradient-primary">Hito Alcanzado: Alquimista de Datos</h3>
          <div class="badge-titan animate-bounce" style="display: inline-block; background: var(--primary); color: #fff; padding: 12px 24px; font-weight: 800; margin-top: 20px; margin-bottom:25px; font-size: 1rem;">
              INSIGNIA: CEREBRO ANALÍTICO
          </div>
          <div class="learning-mission-grid" style="display:grid; gap:12px; text-align:left; margin: 0 auto 20px; max-width: 860px;">
            <div>
              <label for="m5-mission-problem" style="display:block; font-weight:700; margin-bottom:6px;">1. Problema de datos</label>
              <textarea id="m5-mission-problem" class="premium-textarea" style="min-height: 90px;" placeholder="Describe el archivo, el error principal y el impacto operativo del problema."></textarea>
            </div>
            <div>
              <label for="m5-mission-formula" style="display:block; font-weight:700; margin-bottom:6px;">2. Fórmula o enfoque propuesto</label>
              <textarea id="m5-mission-formula" class="premium-textarea" style="min-height: 90px;" placeholder="Escribe la fórmula, prompt o paso técnico que usarías para corregir o analizar la información."></textarea>
            </div>
            <div>
              <label for="m5-mission-result" style="display:block; font-weight:700; margin-bottom:6px;">3. Resultado esperado</label>
              <textarea id="m5-mission-result" class="premium-textarea" style="min-height: 80px;" placeholder="Explica cómo debería verse la salida correcta después de aplicar tu solución."></textarea>
            </div>
            <div>
              <label for="m5-mission-validation" style="display:block; font-weight:700; margin-bottom:6px;">4. Validación y privacidad</label>
              <textarea id="m5-mission-validation" class="premium-textarea" style="min-height: 90px;" placeholder="Indica cómo comprobarías el resultado y qué dato sensible ocultarías antes de usar IA pública."></textarea>
            </div>
          </div>
          <button class="gl-btn gl-btn-primary complete-module-btn" style="width:100%; padding: 16px;" data-module="module-5">✅ Reclamar Victoria Final (+150 XP)</button>
          </div>
        </div>

      <div class="module-nav">
        <button class="gl-btn" data-goto="module-4">← Anterior</button>
        <button class="gl-btn gl-btn-primary" data-goto="module-6">Siguiente: IA para Imágenes →</button>
      </div>
        `
    };

    // --- MODULE 3 ELITE LOGIC ---
    // --- SIMULADORES INTERACTIVOS ---
    window.m1RunFilter = function() {
      const aiView = document.getElementById('m1-inbox-ai');
      if (!aiView) return;
      aiView.innerHTML = '<span style="color:#e3b341;">Analizando entropía...</span>';
      setTimeout(() => {
        aiView.innerHTML = `
          <strong style="color:#ff7b72;">🔥 URGENTE (Acción Inmediata):</strong><br>
          - Cierre financiero (3PM)<br>
          - Crisis de prensa<br><br>
          <strong style="color:#58a6ff;">⚠️ IMPORTANTE (Revisar hoy):</strong><br>
          - Actualización Banco<br><br>
          <strong style="color:#8b949e;">🗑️ DESCARTABLE:</strong><br>
          - Promos, Cumpleaños, Películas
        `;
        if(window.app) window.app.addXP(20);
      }, 800);
    };

    window.m2SimulateChat = function() {
      const resp = document.getElementById('m2-chat-response');
      const rolSelect = document.getElementById('m2-rol-select');
      if (!resp || !rolSelect) return;
      const rol = rolSelect.value;
      
      resp.innerHTML = '<span class="text-gradient-primary">Generando respuesta...</span>';
      
      setTimeout(() => {
        if(rol === 'corporativo') {
          resp.innerHTML = "Buen día. Por supuesto. Sería un placer asistirle en la consolidación de la información de su reporte. Por favor adjunte los anexos correspondientes.";
        } else if(rol === 'amargado') {
          resp.innerHTML = "Mira, apenas son las 8 AM, ni he tomado café y ya me estás mandando cosas. ¿Acaso no leíste el memorando que envié ayer? Deja el archivo en mi bandeja y lo veré cuando tenga tiempo.";
        } else {
          resp.innerHTML = "¡Oh, noble señor del amanecer radiante! Claro que mi pluma está presta a servir a vuestros designios. Dadme los pergaminos de tan magna epopeya y tejeré un reporte que hará llorar de gozo al mismísimo rey.";
        }
        if(window.app) window.app.addXP(20);
      }, 600);
    };

    window.m5RunSovereignScan = function(btn) {
      const overlay = document.getElementById('m5-audit-overlay');
      const scanner = document.getElementById('m5-audit-scanner');
      const errorRow = document.getElementById('m5-audit-row-error');
      const errorCell = document.getElementById('m5-error-cell');
      const report = document.getElementById('m5-audit-report');
      
      if (!overlay || !scanner || !errorRow || !report) return;

      // 1. Start Scan
      btn.disabled = true;
      btn.innerText = 'Escaneando...';
      overlay.style.background = 'rgba(0,0,0,0.2)';
      overlay.querySelector('.scan-pulse').style.borderColor = 'var(--accent)';
      
      scanner.style.opacity = '1';
      scanner.animate([
        { top: '0%' },
        { top: '100%' }
      ], {
        duration: 1500,
        iterations: 2,
        direction: 'alternate',
        easing: 'ease-in-out'
      });

      // 2. Reveal Error
      setTimeout(() => {
        if (overlay) {
          overlay.style.opacity = '0';
          overlay.style.pointerEvents = 'none';
        }
        
        if (errorRow) {
          errorRow.style.background = 'rgba(239, 68, 68, 0.15)';
          errorRow.style.boxShadow = 'inset 0 0 20px rgba(239, 68, 68, 0.2)';
        }
        
        if (errorCell) {
          errorCell.style.color = '#ef4444';
          errorCell.style.textShadow = '0 0 10px rgba(239, 68, 68, 0.5)';
        }
        
        if (report) report.style.display = 'block';
        
        if (window.app) window.app.addXP(50);
        if (window.showToast) window.showToast('¡Anomalía detectada con éxito!', 'success');
      }, 3000);
    };

    window.m5UnlockAndGo = function(level) {
      const nextTab = document.querySelector(`.m5-tab[data-level="${level}"]`);
      if (nextTab) {
        nextTab.classList.remove('locked');
        window.m5ShowLevel(level);
      }
    };

    window.m5ProcessData = function() {
      const rawData = document.getElementById('m5-raw-data').value;
      const prompt = document.getElementById('m5-clean-prompt').value;
      const output = document.getElementById('m5-clean-output');
      const btn = document.getElementById('m5-btn-clean');
      
      if (!rawData || !prompt) return;
      
      btn.innerHTML = '<span class="spin" style="font-size: 1.5rem; display: inline-block; animation: m5Spin 1s linear infinite;">⚙️</span><span style="font-size: 0.6rem; font-weight: bold; margin-top: 5px; text-transform:uppercase; text-align:center;">Procesando</span>';
      btn.style.opacity = '0.7';
      btn.disabled = true;
      output.style.color = '#e3b341';
      output.innerHTML = '<div style="text-align:center; margin-top:25px;"><div class="spin" style="display:inline-block; animation: m5Spin 1s linear infinite; font-size:2rem; margin-bottom:10px;">⚙️</div><br>Estructurando datos...</div>';
      
      if(!document.getElementById('m5-spin-style')) {
        const style = document.createElement('style');
        style.id = 'm5-spin-style';
        style.innerHTML = '@keyframes m5Spin { 100% { transform: rotate(360deg); } }';
        document.head.appendChild(style);
      }
      
      setTimeout(() => {
        let cleanHTML = '';
        if (rawData.includes('Nombreee')) {
          cleanHTML = `Nombre; Documento; Fecha<br>Juan Pérez; 123; 2024-01-01<br>Maria G.; -; 2024-01-01<br>Desconocido; 456; 2024-05-01`;
        } else {
          let lines = rawData.split('\n');
          lines = lines.filter(l => l.trim().length > 0);
          cleanHTML = lines.map(line => line.replace(/;/g, ' | ').replace(/\s+/g, ' ').toUpperCase()).join('<br>');
          cleanHTML += '<br><br><span style="color:#10b981; font-weight:bold;">¡Formateo aplicado! ✔️</span>';
        }
        
        output.style.color = '#10b981';
        output.innerHTML = cleanHTML;
        
        btn.innerHTML = '<span style="font-size: 1.8rem; margin-bottom: 5px;">⚡</span><span style="font-size: 0.7rem; font-weight: bold; text-align: center; text-transform: uppercase;">Limpiar<br>Datos</span>';
        btn.style.opacity = '1';
        btn.disabled = false;
        
        if(window.app && typeof window.app.addXP === 'function') window.app.addXP(30);
        if(window.showToast) window.showToast('¡Limpieza completada con éxito!', 'success');
      }, 1500);
    };

    window.m5FinalCheck = function() {
      const spans = document.querySelectorAll('.m5-clk[data-sens="1"]');
      let allCensored = true;
      spans.forEach(s => { if(s.dataset.done !== '1') allCensored = false; });
      
      const fb = document.getElementById('m5-leak-feedback');
      if (!fb) return;
      fb.style.display = 'block';
      if(allCensored) {
        fb.style.color = '#10b981';
        fb.innerHTML = '¡Datos Sensibles Protegidos! Envío seguro. ✔️';
        const victory = document.getElementById('m5-victory-panel');
        if (victory) victory.style.display = 'block';
        if(window.app) window.app.addXP(50);
        if(window.antShowConfetti) window.antShowConfetti();
      } else {
        fb.style.color = '#ef4444';
        fb.innerHTML = '¡ALERTA DE SEGURIDAD! Has expuesto Identidad o Cuentas Financieras. Censura todo lo rojo y crítico primero. ⚠️';
      }
    };

    window.m3ShowLevel = function(level) {
      const container = document.getElementById('module-3');
      if (!container) return;
      
      const tab = document.getElementById('m3-tab-' + level);
      if (level > 1 && tab && tab.classList.contains('locked')) {
        window.showToast('Completa el nivel anterior primero', 'warning');
        return;
      }
      
      container.querySelectorAll('.ag-content').forEach(c => c.classList.remove('active'));
      container.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      
      const targetLevel = document.getElementById('m3-level-' + level);
      if (targetLevel) targetLevel.classList.add('active');
      if (tab) tab.classList.add('active');
      
      // Update progress
      const progressFill = document.getElementById('m3-progress-fill');
      const progressText = document.getElementById('m3-progress-text');
      if (progressFill) progressFill.style.width = (level / 5 * 100) + '%';
      if (progressText) progressText.innerText = 'Nivel ' + level + '/5';

      // Scroll to top of the tabs
      const tabsNav = container.querySelector('.ag-tabs');
      if (tabsNav) {
        const yOffset = -80;
        const y = tabsNav.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    };

    window.m3UnlockLevel = function(level) {
      const tab = document.getElementById('m3-tab-' + level);
      if (tab) tab.classList.remove('locked');
      window.m3ShowLevel(level);
    };

    window.m3UpdateBuilder = function() {
      const roleEl = document.getElementById('m3-builder-role');
      const contextEl = document.getElementById('m3-builder-context');
      const taskEl = document.getElementById('m3-builder-task');
      const outputEl = document.getElementById('m3-builder-output');
      
      if (!roleEl || !contextEl || !taskEl || !outputEl) return;
      
      const role = roleEl.value;
      const context = contextEl.value;
      const task = taskEl.value;
      
      const output = role + ". " + context + " " + task + " Recuerda pensar paso a paso y usa un tono profesional institucional.";
      outputEl.innerText = output;
    };

    window.m3ValidateQuiz = function(el, type) {
      if (type === 'y') {
        el.classList.add('correct');
        window.showToast('¡Correcto! Desbloqueando misión final.', 'success');
        const mission = document.getElementById('m3-final-mission');
        if (mission) mission.style.display = 'block';
      } else {
        el.classList.add('incorrect');
        setTimeout(() => el.classList.remove('incorrect'), 800);
        window.showToast('Intenta de nuevo. El Formato es la A de Acción.', 'error');
      }
    };

    window.m3FinalizeModule = function() {
      const context = document.getElementById('m3-mission-context')?.value.trim() || '';
      const role = document.getElementById('m3-mission-role')?.value.trim() || '';
      const prompt = document.getElementById('m3-mission-prompt')?.value.trim() || '';
      const verification = document.getElementById('m3-mission-verification')?.value.trim() || '';
      const hasCreaSignals = /contexto|rol|estructura|accion|acción|crea|c:|r:|e:|a:/i.test(prompt);
      if (context.length < 20 || role.length < 15 || prompt.length < 40 || verification.length < 20 || !hasCreaSignals) {
        window.showToast('Completa los cuatro bloques y deja visible tu estructura CREA antes de cerrar el módulo.', 'warning');
        return;
      }
      const nextBtn = document.getElementById('m3-next-btn');
      if (nextBtn) nextBtn.style.display = 'block';
      window.showToast('¡Módulo 3 Completado! +150 XP', 'success');
      if (window.antShowConfetti) window.antShowConfetti();
    };

    // --- MODULE 4 ELITE LOGIC ---
    if (!window.app) window.app = {};
    window.app.checkAudit = function(el, isCorrect) {
      const feedback = document.getElementById('audit-feedback');
      const footer = document.getElementById('audit-footer');
      const cards = document.querySelectorAll('.audit-card');
      if (!feedback) return;

      cards.forEach(c => c.classList.remove('selected-correct', 'selected-incorrect'));

      if (isCorrect) {
        el.classList.add('selected-correct');
        feedback.className = 'audit-feedback-box success';
        feedback.innerHTML = `<strong>✨ ¡ALUCINACIÓN DETECTADA!</strong><br>Excelente criterio. Los decretos presidenciales reglamentan, pero NO pueden crear nuevos impuestos. La IA alucinó un poder legal inexistente.`;
        if (footer) footer.style.display = 'block';
      } else {
        el.classList.add('selected-incorrect');
        feedback.className = 'audit-feedback-box error';
        feedback.innerHTML = `<strong>⚠️ ESTE PUNTO ES REAL.</strong><br>Esta es una medida estándar. Sigue auditando el resumen técnico.`;
      }
    };

    // Classifier Game Logic
    window.app.allowDrop = (e) => e.preventDefault();
    window.app.drag = (e) => e.dataTransfer.setData("text", e.target.id);
    window.app.drop = function(e) {
      e.preventDefault();
      const elId = e.dataTransfer.getData("text");
      const el = document.getElementById(elId);
      const targetId = e.currentTarget.id;
      
      if (el.dataset.target === targetId) {
         e.currentTarget.appendChild(el);
         el.style.background = "rgba(16, 185, 129, 0.3)";
         el.style.cursor = "default";
         el.draggable = false;
         window.showToast("¡Correcto!", "success");
         this.addXP(20);
         
         if (document.getElementById('m4-drag-items').children.length === 0) {
            window.showToast("🏆 ¡Eres un Clasificador Pro!", "success");
            this.addXP(50);
         }
      } else {
         window.showToast("No es la herramienta ideal para esta tarea", "error");
      }
    };

    // Blueprint Lab Logic
    const blueprints = {
       resolution: "Actúa como experto jurídico. Genera resolución administrativa. Estructura: 1. CONSIDERANDO (Motivos legales), 2. RESUELVE (La orden específica), 3. NOTIFÍQUESE. Tono: Formal, neutro.",
       memo: "Actúa como líder de oficina. Genera memorando interno urgente. Objetivo: [Tarea]. Formato: Para/De/Fecha/Asunto. Tono: Ejecutivo y directo.",
       report: "Actúa como analista técnico. Estructura un Acta de Reunión con IA: 1. Asistentes, 2. Orden del día, 3. Compromisos (Tabla), 4. Firma."
    };

    window.app.showBlueprint = function(type) {
       const viewer = document.getElementById('blueprint-viewer');
       const title = document.getElementById('blueprint-title');
       const content = document.getElementById('blueprint-content');
       if (!viewer || !content) return;

       viewer.style.display = 'block';
       title.innerText = type.toUpperCase() + " BLUEPRINT";
       content.innerText = blueprints[type];
    };

    window.app.copyBlueprint = function() {
       const text = document.getElementById('blueprint-content').innerText;
       navigator.clipboard.writeText(text);
       window.showToast("Blueprint copiado al portapapeles ✨", "success");
    };

    window.app.claimM4Reward = function(btn) {
      this.addXP(100);
      window.showToast('¡Criterio de Auditoría Validado! +100 XP', 'success');
      btn.disabled = true;
      btn.innerText = 'Criterio Indexado';
    };

    window.app.finalizeM4Mission = function() {
      const source = document.getElementById('m4-mission-source')?.value.trim() || '';
      const summary = document.getElementById('m4-mission-summary')?.value.trim() || '';
      const risk = document.getElementById('m4-mission-risk')?.value.trim() || '';
      const action = document.getElementById('m4-mission-action')?.value.trim() || '';
      if (!source || !summary || !risk || !action) {
        window.showToast('Debes completar la fuente, el resumen, el hallazgo y el plan de verificación.', 'warning');
        return;
      }
      
      const loweredSource = source.toLowerCase();
      if (!loweredSource.includes('.gov.co') && !/decreto|resolucion|resolución|manual|informe|contrato|expediente/.test(loweredSource)) {
        window.showToast('Incluye un enlace oficial .gov.co o identifica claramente el documento institucional analizado.', 'error');
        return;
      }

      if (action.length < 20 || !/verific|fuente|pagina|página|contraste|revis/i.test(action.toLowerCase())) {
        window.showToast('Explica la acción y cómo verificarías el hallazgo con la fuente.', 'warning');
        return;
      }

      window.showToast('Misión lista para evaluación. Ya puedes cerrar el módulo y reclamar la insignia.', 'success');
    };
    // ----------------------------

    // Inject all modules safely
    for (const [id, html] of Object.entries(modules)) {
        const el = document.getElementById(id);
        if (el && !el.querySelector('.module-header')) {
            el.insertAdjacentHTML('afterbegin', html);
        }
    }
  return { init: function(app) { 
        console.log('Initialized modules-1-5.js'); 
        // Restore m3 levels
        const maxLevel = parseInt(localStorage.getItem('m3-max-level') || 1);
        for(let i=1; i<=maxLevel; i++) {
            const tab = document.getElementById(`m3-tab-${i}`);
            if(tab) tab.classList.remove('locked');
        }
        if (typeof window.m3UpdateBuilder === 'function') window.m3UpdateBuilder();
    } };
})();
