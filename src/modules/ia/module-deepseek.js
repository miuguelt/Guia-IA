/* ═══════════════════════════════════════════
   MÓDULO BONUS: DeepSeek R1 (El Cerebro)
   Versión "Titan Brain" — DNA v32.4
   ═══════════════════════════════════════════ */
window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-deepseek'] = (function() {
  const dseekHTML = `
<div class="m-ds-container" style="--ds-primary: var(--primary); --ds-bg: var(--bg-dark); --ds-border: var(--glass-border);">
  <div class="module-header premium-header">
    <div class="module-number gamer-badge">BONUS: EL CEREBRO DE LA TRÍADA</div>
    <h2 class="module-title glow-text" style="color:var(--primary-light);">🧠 <span style="color:var(--primary);">DeepSeek R1:</span> Inteligencia Pura</h2>
    <p class="module-description">Domina el modelo que rompió el mercado. R1 no solo predice palabras, <b>razona mediante procesos de pensamiento internos</b> antes de responder.</p>
  </div>

  <div class="m-ds-hero glass-card" style="border-color: var(--primary-glow); background: rgba(var(--primary-rgb), 0.05);">
    <h3 style="margin:0 0 8px; color:#fff;">La idea central de DeepSeek R1</h3>
    <p class="m-ds-note" style="margin:0; opacity: 0.9;">DeepSeek R1 brilla cuando la tarea exige <strong>razonamiento secuencial, depuración, contraste de opciones o análisis con varios pasos</strong>. Si solo quieres una respuesta rápida o una redacción simple, a veces es demasiado motor para tan poca carretera.</p>
    <div class="m-ag-chip-row">
      <span class="m-ag-chip">Razonamiento</span>
      <span class="m-ag-chip">Debugging</span>
      <span class="m-ag-chip">Comparación</span>
      <span class="m-ag-chip">Auditoría lógica</span>
      <span class="m-ag-chip">Inferencia local</span>
      <span class="m-ag-chip">CoT</span>
    </div>
  </div>

  <div class="ag-tabs game-tabs">
    <button class="tab-btn active" data-tab="m-ds-arch">🏗️ Arquitectura RL</button>
    <button class="tab-btn" data-tab="m-ds-decider">🧭 Cuándo Usarlo</button>
    <button class="tab-btn" data-tab="m-ds-local">🏠 Inferencia GPU</button>
    <button class="tab-btn" data-tab="m-ds-prompt">✍️ Prompting CoT</button>
    <button class="tab-btn" data-tab="m-ds-lab">⚡ Lab Pensamiento</button>
    <button class="tab-btn" data-tab="m-ds-cases">🧭 Casos Prácticos</button>
    <button class="tab-btn" data-tab="m-ds-prompts">🧠 Prompts Maestros</button>
    <button class="tab-btn" data-tab="m-ds-antipatterns">🚫 Errores</button>
    <button class="tab-btn" data-tab="m-ds-estrategia">🎯 Estrategia Real</button>
    <button class="tab-btn" data-tab="m-ds-mission">🏆 Reto Final</button>
  </div>

  <!-- TAB 1: ARCHITECTURE -->
  <div id="m-ds-arch" class="ag-content active">
    <div class="section-card animate-in">
        <h3>🏗️ Reinforcement Learning & Chain of Thought</h3>
        <p>¿Por qué DeepSeek R1 es diferente? La clave está en cómo fue entrenado: <b>Reinforcement Learning (RL)</b> puro aplicado al razonamiento.</p>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:20px;">
            <div class="m-ds-card">
                <h4 style="color:var(--ds-primary);">RL Puro (Aha! Moment)</h4>
                <p style="font-size:0.85rem; color:#94a3b8;">R1 aprendió a razonar sin datos humanos masivos, simplemente "jugando" a resolver problemas y premiándose al encontrar la lógica correcta.</p>
            </div>
            <div class="m-ds-card">
                <h4 style="color:var(--ds-primary);">Chain of Thought (CoT)</h4>
                <p style="font-size:0.85rem; color:#94a3b8;">El modelo escribe sus dudas y correcciones en un bloque oculto (<code>&lt;thought&gt;</code>) antes de entregarte el resultado final.</p>
            </div>
        </div>
    </div>
  </div>

  <div id="m-ds-decider" class="ag-content">
    <div class="section-card animate-in">
        <h3>🧭 Cuándo usar un modelo de razonamiento</h3>
        <div class="m-ds-grid-2" style="margin-top:18px;">
          <div class="m-ds-panel">
            <h4>Úsalo cuando...</h4>
            <p class="m-ds-note">Debes descomponer un problema, revisar hipótesis, justificar una decisión o encontrar fallos lógicos ocultos.</p>
          </div>
          <div class="m-ds-panel">
            <h4>No es la mejor opción cuando...</h4>
            <p class="m-ds-note">Solo necesitas redactar un texto corto, resumir algo obvio o responder rápido sin mucho análisis.</p>
          </div>
          <div class="m-ds-panel">
            <h4>Se luce especialmente en...</h4>
            <p class="m-ds-note">Código, matemáticas, comparaciones complejas, revisión de procedimientos y problemas con varias restricciones.</p>
          </div>
          <div class="m-ds-panel">
            <h4>Pierde valor si...</h4>
            <p class="m-ds-note">No le das contexto suficiente, no defines criterio de validación o lo usas como si fuera un modelo conversacional genérico.</p>
          </div>
        </div>
        <div class="m-ds-grid-3" style="margin-top:16px;">
          <div class="m-ds-step"><div class="m-ds-step-badge">1</div><h4 style="margin:0 0 6px; color:#fff;">Expón el problema</h4><p class="m-ds-note" style="margin:0;">Qué hay que resolver y qué no debe asumirse.</p></div>
          <div class="m-ds-step"><div class="m-ds-step-badge">2</div><h4 style="margin:0 0 6px; color:#fff;">Pide revisión paso a paso</h4><p class="m-ds-note" style="margin:0;">Obliga a revisar hipótesis, cálculos o ramas de decisión.</p></div>
          <div class="m-ds-step"><div class="m-ds-step-badge">3</div><h4 style="margin:0 0 6px; color:#fff;">Valida el cierre</h4><p class="m-ds-note" style="margin:0;">Siempre termina con prueba, ejemplo o criterio de verificación.</p></div>
        </div>
    </div>
  </div>

  <!-- TAB 2: LOCAL INFERENCE -->
  <div id="m-ds-local" class="ag-content">
    <div class="section-card animate-in">
        <h3>🏠 Inferencia Soberana (Local)</h3>
        <p>Puedes correr DeepSeek R1 en tu propia hardware (RTX 4070) usando Ollama. Esto garantiza privacidad total y cero latencia de servidor.</p>
        <div class="m-ds-terminal" style="height:auto;">
            <div class="m-ds-t-header">INSTALACIÓN OLLAMA</div>
            <div style="padding:15px; font-size:0.85rem;">
                <code style="color:#6366f1;"># Descargar modelo 7B (Optimizado para 12GB RAM)</code><br>
                <code style="color:#fff;">ollama run deepseek-r1:7b</code><br><br>
                <code style="color:#6366f1;"># Descargar modelo 32B (Requiere 24GB VRAM)</code><br>
                <code style="color:#fff;">ollama run deepseek-r1:32b</code>
            </div>
        </div>
    </div>
  </div>

  <!-- TAB 3: PROMPTING -->
  <div id="m-ds-prompt" class="ag-content">
    <div class="section-card animate-in">
        <h3>✍️ Prompting para Modelos de Razonamiento</h3>
        <p>Con R1, los "prompts mágicos" largos ya no son tan necesarios. El modelo prefiere claridad y espacio para pensar.</p>
        <div class="m-ds-card" style="border-style:dashed;">
            <h5 style="margin-top:0;">La Técnica "Let's Think Step by Step"</h5>
            <p style="font-size:0.85rem; color:#94a3b8;">Aunque R1 lo hace por defecto, forzarlo a <b>auditar cada paso</b> mejora la precisión en un 15% en tareas de programación compleja.</p>
            <div style="background:#0f172a; padding:10px; border-radius:6px; font-size:0.75rem; color:#fff;">
                "Resuelve esta paradoja lógica. Antes de dar la respuesta, crea una tabla de posibilidades y descarta las falsas."
            </div>
        </div>
    </div>
  </div>

  <!-- TAB 4: LABORATORIO -->
  <div id="m-ds-lab" class="ag-content">
    <div class="section-card animate-in">
        <h3 style="margin-top:0; color:var(--ds-primary);">⚡ Lab de Pensamiento: Motor R1</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:20px;">Observa en tiempo real cómo la IA deconstruye un problema complejo usando el bloque informativo de razonamiento.</p>
        
        <div class="m-ds-titan-shell">
            <div class="m-ds-t-header" style="justify-content:space-between; display:flex; align-items:center;">
                <div style="font-weight:bold; color:var(--ds-primary); font-size:0.75rem;">DEEPSEEK-R1-TITAN-ENGINE [READY]</div>
                <div id="ds-status-indicator" class="ds-status-idle">IDLE</div>
            </div>
            <div class="m-ds-t-body" id="ds-lab-body">
                <div class="m-ds-thought-line" style="color:#475569;">[PROMPT_AWAIT] Esperando parámetros de razonamiento...</div>
            </div>
        </div>

        <div class="m-ds-controls">
            <div class="m-ds-control-group">
                <label style="display:block; font-size:0.7rem; color:#64748b; margin-bottom:5px; font-weight:700;">SELECCIONAR ESCENARIO</label>
                <select id="ds-scenario" class="ds-premium-select">
                    <option value="math">Problema de Probabilidad (Bayes)</option>
                    <option value="logic">Teoría de Juegos (Prisionero)</option>
                    <option value="code">Optimización de Algoritmo (Python)</option>
                </select>
            </div>
            <button id="ds-run-btn" class="ds-btn-glow-titan" onclick="mDsRunCoT()">
                <span class="btn-icon">⚡</span> INICIAR RAZONAMIENTO
            </button>
        </div>
    </div>
  </div>



  <div id="m-ds-cases" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="color:#818cf8; margin-top:0;">🧭 Cuándo Vale la Pena Usar un Modelo de Razonamiento</h3>
      <p style="font-size:0.85rem; color:#94a3b8;">DeepSeek R1 no es para pedir cualquier cosa. Úsalo cuando tengas que pensar, comparar, depurar o justificar una decisión paso a paso.</p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:18px;">
        <div class="m-ds-card" style="border-top:3px solid #6366f1;">
          <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 1 · DEBUGGING</div>
          <h4 style="margin:0 0 8px; color:#fff;">Encontrar un bug lógico</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Ideal cuando el código corre pero entrega resultados incorrectos y nadie sabe por qué.</p>
          <div style="margin: 12px 0; border-top: 1px solid rgba(99,102,241,0.1); padding-top: 10px;">
            <p style="font-size: 0.72rem; color: #818cf8; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
            <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
              1. Pega el código completo.<br>
              2. Pide revisar la lógica variable por variable.<br>
              3. Solicita las líneas exactas del error.<br>
              4. Compara el resultado con un valor esperado.
            </div>
          </div>
        </div>
        <div class="m-ds-card" style="border-top:3px solid #818cf8;">
          <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 2 · DECISIÓN</div>
          <h4 style="margin:0 0 8px; color:#fff;">Elegir entre varias opciones</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Útil para comparar proveedores, escenarios o alternativas con múltiples variables.</p>
          <div style="margin: 12px 0; border-top: 1px solid rgba(99,102,241,0.1); padding-top: 10px;">
            <p style="font-size: 0.72rem; color: #818cf8; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
            <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
              1. Pega la tabla o lista de opciones.<br>
              2. Define criterios (costo, riesgo, tiempo).<br>
              3. Pide una matriz comparativa detallada.<br>
              4. Exige una recomendación final justificada.
            </div>
          </div>
        </div>
        <div class="m-ds-card" style="border-top:3px solid #10b981;">
          <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 3 · MEJORA</div>
          <h4 style="margin:0 0 8px; color:#fff;">Reescribir un procedimiento</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Funciona bien para instrucciones confusas, procesos ambiguos o reglas poco claras.</p>
          <div style="margin: 12px 0; border-top: 1px solid rgba(99,102,241,0.1); padding-top: 10px;">
            <p style="font-size: 0.72rem; color: #818cf8; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
            <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">
              1. Pega el procedimiento o manual actual.<br>
              2. Pide identificar ambigüedades y huecos.<br>
              3. Solicita una versión optimizada y clara.<br>
              4. Cierra con un checklist de control de calidad.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="m-ds-prompts" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="color:#818cf8; margin-top:0;">🧠 Prompts Maestros para DeepSeek R1</h3>
      <div class="m-ds-grid-2" style="margin-top:18px;">
        <div class="m-ds-panel">
          <h4>Debugging serio</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(99,102,241,0.18); border-radius:10px; padding:12px;">Analiza este código como auditor técnico. Revisa variable por variable, identifica errores lógicos, explica por qué ocurren y entrega versión corregida con criterio de validación.</div>
        </div>
        <div class="m-ds-panel">
          <h4>Comparar opciones</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(99,102,241,0.18); border-radius:10px; padding:12px;">Compara estas alternativas con una matriz de costo, riesgo, tiempo, complejidad y reversibilidad. Luego recomienda una opción y justifica el porqué.</div>
        </div>
        <div class="m-ds-panel">
          <h4>Auditar procedimiento</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(99,102,241,0.18); border-radius:10px; padding:12px;">Lee este procedimiento paso a paso, detecta ambigüedades, puntos de fallo y decisiones mal definidas. Después reescríbelo en una versión más robusta.</div>
        </div>
        <div class="m-ds-panel">
          <h4>Resolver con validación</h4>
          <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(99,102,241,0.18); border-radius:10px; padding:12px;">Resuelve este problema y al final valida tu respuesta con un caso de prueba, chequeo lógico o ejemplo concreto para confirmar que no hay inconsistencias.</div>
        </div>
      </div>
    </div>
  </div>

  <div id="m-ds-antipatterns" class="ag-content">
    <div class="section-card animate-in">
      <h3 style="color:#818cf8; margin-top:0;">🚫 Errores al usar modelos de razonamiento</h3>
      <div class="m-ds-grid-3" style="margin-top:18px;">
        <div class="m-ds-panel"><h4>Pedir demasiado vago</h4><p class="m-ds-note">Sin problema claro, el modelo piensa mucho pero aterriza poco.</p></div>
        <div class="m-ds-panel"><h4>No validar el resultado</h4><p class="m-ds-note">Que razone mejor no significa que nunca se equivoque.</p></div>
        <div class="m-ds-panel"><h4>Usarlo para tareas triviales</h4><p class="m-ds-note">Pierdes tiempo y tokens donde bastaba un modelo más simple.</p></div>
        <div class="m-ds-panel"><h4>No definir criterio</h4><p class="m-ds-note">Si no sabe qué optimizar, el razonamiento puede irse por la rama incorrecta.</p></div>
        <div class="m-ds-panel"><h4>Confundir pensamiento con verdad</h4><p class="m-ds-note">El bloque de razonamiento ayuda, pero no reemplaza una validación externa.</p></div>
        <div class="m-ds-panel"><h4>Olvidar el caso de prueba</h4><p class="m-ds-note">La verificación final es lo que convierte una buena respuesta en una respuesta confiable.</p></div>
      </div>
    </div>
  </div>

  <!-- TAB 5: ESTRATEGIA REAL -->
  <div id="m-ds-estrategia" class="ag-content">
    <div class="section-card animate-in">
      <div class="kit-header" style="background: linear-gradient(135deg, rgba(99,102,241,0.12), transparent); border: 1px solid rgba(99,102,241,0.35); border-radius:12px; padding:18px; margin-bottom:18px;">
        <div style="background:#6366f1; color:#fff; padding:3px 12px; border-radius:20px; font-size:0.7rem; font-weight:800; display:inline-block; margin-bottom:8px;">🧪 ESTRATEGIA REAL · DeepSeek R1</div>
        <p style="font-size:1rem; font-weight:800; color:#818cf8; margin:0 0 6px;">Operación: La Nómina Rota</p>
        <p style="font-size:0.82rem; color:#64748b; margin:0;">📋 Situación: El script de cálculo de nómina de tu área lleva 2 semanas dando valores incorrectos. El programador renunció. DeepSeek R1 usará su motor de razonamiento para encontrar el bug paso a paso, sin adivinar.</p>
      </div>

      <h4 style="color:#818cf8; margin:0 0 10px;">🧳 Tu Maletín de Trabajo</h4>

      <!-- Código con bug -->
      <div style="margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.8rem; font-weight:700; color:#a5b4fc;">💻 Script Python — cálculo_nomina.py (tiene 2 bugs)</span>
          <button class="kit-copy-btn" style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.3); color:#818cf8; padding:5px 12px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer;" onclick="dsCopyCode(this)">📋 Copiar Código</button>
        </div>
        <div class="m-ds-terminal" style="margin:0;">
          <div class="m-ds-t-header"><span style="color:#6366f1;">cálculo_nomina.py</span> <span style="color:#ef4444; font-size:0.7rem;">⚠ 2 errores lógicos</span></div>
          <pre class="m-ds-t-body" id="ds-code-block" style="height:auto; overflow:auto; white-space:pre;">empleados = [
  {"nombre": "Ana Gómez",  "horas": 160, "tarifa": 15000, "horas_extra": 12},
  {"nombre": "Luis Reyes", "horas": 160, "tarifa": 16000, "horas_extra": 0},
  {"nombre": "María Ruiz", "horas": 140, "tarifa": 15000, "horas_extra": 20},
]

SALARIO_MINIMO = 1300000
RECARGO_EXTRA  = 1.25   # Bug #1: debe ser 1.35 (ley colombiana)

def calcular_nomina(emp):
    base = emp["horas"] * emp["tarifa"]
    extras = emp["horas_extra"] * emp["tarifa"] * RECARGO_EXTRA
    total = base + extras
    # Bug #2: descuento salud es 4% (0.04), no 4 (número entero)
    descuento_salud = total * 4
    neto = total - descuento_salud
    return round(neto, 0)

for e in empleados:
    print(f"{e['nombre']:15} → Neto: &#36;{calcular_nomina(e):,.0f}")</pre>
        </div>
      </div>

      <!-- Prompt de diagnóstico -->
      <div style="margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.8rem; font-weight:700; color:#a5b4fc;">📝 Prompt CoT para DeepSeek R1</span>
          <button class="kit-copy-btn" style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.3); color:#818cf8; padding:5px 12px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer;" onclick="dsCopyPrompt(this)">📋 Copiar Prompt</button>
        </div>
        <div class="m-ds-terminal" style="margin:0;">
          <div class="m-ds-t-header" style="color:#a5b4fc;">PROMPT MAESTRO (pegar en chat.deepseek.com)</div>
          <pre class="m-ds-t-body" id="ds-prompt-block" style="height:auto; color:#c4b5fd; white-space:pre-wrap;">Eres auditor de software de nómina colombiana. El siguiente script Python produce valores incorrectos. Antes de responder, razona paso a paso (Chain of Thought): 1) Lee cada variable y su propósito. 2) Verifica la lógica matemática contra la legislación colombiana (Ley 50/90: horas extra diurnas = 125% del valor ordinario, descuento salud = 4%). 3) Identifica TODOS los bugs con el número de línea exacto. 4) Entrega el código corregido. No adivines. Piensa antes de responder.

[PEGAR CÓDIGO AQUÍ]</pre>
        </div>
      </div>

      <!-- Casos de Prueba -->
      <h4 style="color:#818cf8; margin:0 0 8px;">🔍 Valores Esperados (para validar tu corrección)</h4>
      <div style="overflow-x:auto;">
        <table style="width:100%; font-size:0.8rem; border-collapse:collapse; color:#94a3b8;">
          <thead><tr style="border-bottom:1px solid #1e293b;">
            <th style="padding:8px; text-align:left; color:#818cf8;">Empleado</th>
            <th style="padding:8px; text-align:right; color:#ef4444;">Script Roto</th>
            <th style="padding:8px; text-align:right; color:#10b981;">Valor Correcto</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px;">Ana Gómez</td><td style="padding:8px; text-align:right; color:#ef4444;">-$8,304,000</td><td style="padding:8px; text-align:right; color:#10b981;">$2,481,600</td></tr>
            <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px;">Luis Reyes</td><td style="padding:8px; text-align:right; color:#ef4444;">-$9,856,000</td><td style="padding:8px; text-align:right; color:#10b981;">$2,457,600</td></tr>
            <tr><td style="padding:8px;">María Ruiz</td><td style="padding:8px; text-align:right; color:#ef4444;">-$8,550,000</td><td style="padding:8px; text-align:right; color:#10b981;">$2,409,000</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Checklist -->
      <h4 style="color:#818cf8; margin:16px 0 10px;">✅ Ejecuta la Estrategia</h4>
      <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px;" id="ds-steps">
        <li class="kit-step" style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="dsCheck(this,0,25)">
          <div class="kit-step-check" style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Copia el código y el prompt del Maletín</p><p style="font-size:0.78rem; color:#64748b; margin:0;">Usa los botones azules de arriba para copiar ambos al portapapeles.</p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+25 XP</span>
        </li>
        <li class="kit-step" style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="dsCheck(this,1,35)">
          <div class="kit-step-check" style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Ve a chat.deepseek.com y activa el modo "DeepThink (R1)"</p><p style="font-size:0.78rem; color:#64748b; margin:0;">Busca el botón <b>"Deep Think"</b> debajo del campo de chat. Es crucial: sin ese modo, no habrá razonamiento visible.</p><div style="font-size:0.72rem; background:rgba(99,102,241,0.08); border-left:2px solid #6366f1; padding:4px 8px; border-radius:0 4px 4px 0; color:#a5b4fc; margin-top:6px;">💡 Alternativa gratuita: deepseek.com o Ollama con deepseek-r1:7b</div></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+35 XP</span>
        </li>
        <li class="kit-step" style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="dsCheck(this,2,60)">
          <div class="kit-step-check" style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Pega el prompt + el código y observa el bloque «Thinking»</p><p style="font-size:0.78rem; color:#64748b; margin:0;">Verás un bloque gris expandible donde R1 "piensa en voz alta". Lee cómo detecta que <code>4</code> debería ser <code>0.04</code> y que <code>1.25</code> debería ser <code>1.35</code>.</p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+60 XP</span>
        </li>
        <li class="kit-step" style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="dsCheck(this,3,80)">
          <div class="kit-step-check" style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Copia el código corregido y valida los valores de la tabla</p><p style="font-size:0.78rem; color:#64748b; margin:0;">Ejecuta el script corregido (o verifica la lógica mental) contra los valores correctos de la tabla de arriba. ¿Cuadran los $2,481,600 para Ana?</p><div style="font-size:0.72rem; background:rgba(99,102,241,0.08); border-left:2px solid #6366f1; padding:4px 8px; border-radius:0 4px 4px 0; color:#a5b4fc; margin-top:6px;">💡 Resultado esperado: todos los valores netos son positivos y coherentes con el salario mínimo.</div></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+80 XP</span>
        </li>
      </ul>

      <div class="kit-xp-total" id="ds-xp-total">
        <span>🏆 XP Ganado en esta Estrategia</span>
        <span id="ds-xp-count">0 / 200 XP</span>
      </div>
    </div>
  </div>

  <!-- TAB 7: RETO FINAL -->
  <div id="m-ds-mission" class="ag-content">
    <div class="section-card animate-in">
        <h3>🏆 Reto Final: Diagnostica y Corrige</h3>
        <p style="color:#94a3b8;">Demuestra que entendiste cuándo usar razonamiento y cómo validar el resultado, no solo cómo pedir una respuesta.</p>
        <div class="m-ds-card" style="margin-bottom:16px;">
            <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.9;">
              Entregable del reto:<br>
              1. Error detectado o decisión tomada.<br>
              2. Explicación del razonamiento.<br>
              3. Solución corregida o recomendación final.<br>
              4. Validación con un valor esperado, criterio o checklist.
            </div>
        </div>
        <div class="m-ds-card">
            <p>¿Qué tecnología de entrenamiento permite que DeepSeek R1 aprenda a razonar mediante recompensas internas?</p>
            <input type="text" id="ws-val-ds" class="premium-textarea" style="margin-bottom:15px;" placeholder="Pista: R... L...">
            <button class="ds-btn-glow" style="width:100%;" onclick="mDsFinalV()">Finalizar y Reclamar XP</button>
        </div>
    </div>
  </div>

  <div class="module-nav">
    <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú</button>
  </div>
  </div>
`;

  const deepseekInstance = {
    init: function(app) {
      console.log('DeepSeek Titan Brain v31.4 loaded');
      const target = document.getElementById('module-deepseek');
      if (target && !target.querySelector('.module-header')) {
        target.insertAdjacentHTML('afterbegin', dseekHTML);
        setupDeepseekHandlers(target);
      }
    }
  };

  function setupDeepseekHandlers(parent) {
      const tabs = parent.querySelectorAll('.tab-btn');
      const contents = parent.querySelectorAll('.ag-content');
      tabs.forEach(t => t.addEventListener('click', () => {
        if (!t.dataset.tab) return;
        tabs.forEach(x => x.classList.remove('active'));
        contents.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        const targetSelection = parent.querySelector('#' + t.dataset.tab);
        if(targetSelection) targetSelection.classList.add('active');
        
        if (t.dataset.tab === 'm-ds-lab') {
            const body = document.getElementById('ds-lab-body');
            if (body && body.children.length <= 1) {
                 // Reset if fresh
            }
        }
      }));
  }

  // Kit Estrategia Real DeepSeek
  window.dsCopyCode = function(btn) {
    const code = document.getElementById('ds-code-block')?.innerText || '';
    navigator.clipboard.writeText(code).catch(() => {});
    btn.textContent = '✅ Copiado'; btn.style.color = '#10b981';
    setTimeout(() => { btn.textContent = '📋 Copiar Código'; btn.style.color = '#818cf8'; }, 2500);
    if(window.app) window.app.addXP(5);
  };
  window.dsCopyPrompt = function(btn) {
    const prompt = document.getElementById('ds-prompt-block')?.innerText || '';
    navigator.clipboard.writeText(prompt).catch(() => {});
    btn.textContent = '✅ Copiado'; btn.style.color = '#10b981';
    setTimeout(() => { btn.textContent = '📋 Copiar Prompt'; btn.style.color = '#818cf8'; }, 2500);
    if(window.app) window.app.addXP(5);
  };
  let dsStepDone = [false,false,false,false];
  let dsTotalXP = 0;
  const dsStepVals = [25,35,60,80];
  window.dsCheck = function(el, idx, xp) {
    if(dsStepDone[idx]) return;
    dsStepDone[idx] = true;
    el.style.borderColor = 'rgba(16,185,129,0.4)';
    el.style.background = 'rgba(16,185,129,0.05)';
    const chk = el.querySelector('.kit-step-check');
    if(chk) { chk.style.background='#10b981'; chk.style.borderColor='#10b981'; chk.style.color='#fff'; }
    dsTotalXP += xp;
    if(window.app) window.app.addXP(xp);
    const c = document.getElementById('ds-xp-count');
    if(c) c.textContent = dsTotalXP + ' / 200 XP';
  };

  // -- CoT Simulator --
  let dsBusy = false;
  window.mDsRunCoT = () => {
    if(dsBusy) return;
    dsBusy = true;
    
    const body = document.getElementById('ds-lab-body');
    const status = document.getElementById('ds-status-indicator');
    const runBtn = document.getElementById('ds-run-btn');
    const scenario = document.getElementById('ds-scenario').value;
    
    if (status) { status.innerText = 'REASONING...'; status.className = 'ds-status-busy'; }
    if (runBtn) { runBtn.disabled = true; runBtn.innerHTML = '<span class="btn-icon">⏳</span> PENSANDO...'; }
    
    body.innerHTML = '<div class="m-ds-thought-line" style="color:var(--ds-primary); font-weight:bold;">[SYSTEM] Inicializando Kernels de Razonamiento v2.0...</div>' +
                     '<div class="m-ds-thought-line" style="color:#6366f1;">[INFO] Cargando Escenario: ' + scenario + '</div>';

    let thoughts = [];
    if(scenario === 'math') {
        thoughts = [
            "<span style='color:#fff;'>&lt;thought&gt;</span>",
            "Identificando variables: P(A) = 0.3, P(B) = 0.5.",
            "¿Eventos independientes? Asumamos que sí.",
            "Teorema de Bayes: P(A|B) = P(B|A) * P(A) / P(B).",
            "Calculando denominador... Error en el factor beta. Corrigiendo.",
            "Resultado parcial: 0.15. Verificando contra S-SOT.",
            "<span style='color:#fff;'>&lt;/thought&gt;</span>",
            "<b style='color:#fff;'>Respuesta:</b> La probabilidad de intersección es del 15%."
        ];
    } else if(scenario === 'logic') {
        thoughts = [
            "<span style='color:#fff;'>&lt;thought&gt;</span>",
            "Analizando matriz de pagos: Cooperar vs Traicionar.",
            "Si A traiciona y B coopera, A sale libre.",
            "Equilibrio de Nash detectado: Ambos traicionan.",
            "Pero, ¿es esto óptimo socialmente? No.",
            "Rutas de salida: Contrato social o confianza iterada.",
            "<span style='color:#fff;'>&lt;/thought&gt;</span>",
            "<b style='color:#fff;'>Respuesta:</b> Sin comunicación, la traición mutua es el destino racional."
        ];
    } else {
        thoughts = [
            "<span style='color:#fff;'>&lt;thought&gt;</span>",
            "Escaneando bucle for anidado (O(n^2)).",
            "Detectada ineficiencia en búsqueda de Hash.",
            "Propuesta: Reemplazar lista por Set para búsqueda O(1).",
            "Verificando compatibilidad con Python 3.10...",
            "Refactorizando variable 'temp' a 'memo_cache'.",
            "<span style='color:#fff;'>&lt;/thought&gt;</span>",
            "<b style='color:#fff;'>Respuesta:</b> Código optimizado. Rendimiento mejorado en 400%."
        ];
    }

    let i = 0;
    const intv = setInterval(() => {
        if(i < thoughts.length) {
            const div = document.createElement('div');
            div.className = 'm-ds-thought-line';
            div.innerHTML = thoughts[i];
            body.appendChild(div);
            body.scrollTop = body.scrollHeight;
            i++;
        } else {
            clearInterval(intv);
            dsBusy = false;
            if (status) { status.innerText = 'IDLE'; status.className = 'ds-status-idle'; }
            if (runBtn) { runBtn.disabled = false; runBtn.innerHTML = '<span class="btn-icon">⚡</span> INICIAR RAZONAMIENTO'; }
            if(window.app) window.app.addXP(40);
        }
    }, 600);
  };

  window.mDsFinalV = () => {
      const v = document.getElementById('ws-val-ds').value.toLowerCase();
      if(v.includes('reinforcement learning') || v.includes('rl')) {
          alert("¡Cerebro Maestro activado! +150 XP");
          if(window.app) window.app.addXP(150);
          document.querySelector('.complete-module-btn')?.click();
      } else { alert("Pista: Empieza con R... L..."); }
  };
  window.GuiaModules = window.GuiaModules || {};
  window.GuiaModules['module-deepseek'] = deepseekInstance;
  return deepseekInstance;
})();
