/* ═══════════════════════════════════════════
   MÓDULO BONUS: DeepSeek R1 (El Cerebro)
   Versión "Titan Brain" — DNA v31.4
   ═══════════════════════════════════════════ */
(function() {
  const dseekHTML = `
<style>
  :root {
    --ds-primary: #6366f1;
    --ds-secondary: #818cf8;
    --ds-bg: #030712;
    --ds-border: #1e293b;
  }

  .m-ds-container { color: #f1f5f9; font-family: 'Inter', sans-serif; }
  .m-ds-card { background: var(--ds-bg); border: 1px solid var(--ds-border); border-radius: 16px; padding: 25px; margin-bottom: 20px; position: relative; overflow: hidden; }
  .m-ds-header-bg { position: absolute; top:0; left:0; width:100%; height:120px; background: linear-gradient(180deg, rgba(99,102,241,0.1) 0%, transparent 100%); pointer-events:none; }

  /* Tabs Bar */
  .premium-tab-ds { background: none; border: none; padding: 10px 15px; color: #64748b; cursor: pointer; border-bottom: 2px solid transparent; transition: 0.3s; font-weight: 600; white-space: nowrap; }
  .premium-tab-ds.active { color: var(--ds-primary); border-bottom-color: var(--ds-primary); }

  /* CoT Simulator */
  .m-ds-terminal { background: #000; border: 1px solid var(--ds-border); border-radius: 12px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; overflow: hidden; margin-top: 20px; }
  .m-ds-t-header { background: #0f172a; padding: 10px 15px; border-bottom: 1px solid var(--ds-border); display: flex; justify-content: space-between; align-items: center; }
  .m-ds-t-body { padding: 15px; height: 280px; overflow-y: auto; line-height: 1.6; color: #94a3b8; }
  
  .m-ds-thought-block { background: rgba(99,102,241,0.05); border-left: 3px solid var(--ds-primary); padding: 12px; margin: 10px 0; border-radius: 0 8px 8px 0; }
  .m-ds-thought-line { opacity: 0; transform: translateY(5px); animation: dsFadeIn 0.3s forwards; margin-bottom: 5px; }
  @keyframes dsFadeIn { to { opacity: 1; transform: translateY(0); } }

  .ds-btn-glow { 
    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); 
    color: white; border: none; padding: 12px 24px; border-radius: 8px;
    font-weight: 700; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 15px rgba(99,102,241,0.3);
  }
  .ds-btn-glow:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(99,102,241,0.5); }
</style>

<div class="m-ds-container">
  <div class="module-header premium-header" style="border: 1px solid rgba(99,102,241,0.3); background: rgba(99,102,241,0.02);">
    <div class="module-number gamer-badge" style="background:var(--ds-primary);color:#fff;">BONUS: EL CEREBRO DE LA TRÍADA</div>
    <h2 class="module-title glow-text" style="color:#818cf8;">🧠 <span style="color:#6366f1;">DeepSeek R1:</span> Inteligencia Pura</h2>
    <p class="module-description">Domina el modelo que rompió el mercado. R1 no solo predice palabras, <b>razona mediante procesos de pensamiento internos</b> antes de responder.</p>
  </div>

  <div class="ag-tabs game-tabs" style="display:flex; overflow-x:auto; gap:5px; margin-bottom:20px; border-bottom:1px solid #1e293b;">
    <button class="tab-btn premium-tab-ds active" data-tab="m-ds-arch">🏗️ Arquitectura RL</button>
    <button class="tab-btn premium-tab-ds" data-tab="m-ds-local">🏠 Inferencia GPU</button>
    <button class="tab-btn premium-tab-ds" data-tab="m-ds-prompt">✍️ Prompting CoT</button>
    <button class="tab-btn premium-tab-ds" data-tab="m-ds-lab">⚡ Lab Pensamiento</button>
    <button class="tab-btn premium-tab-ds" data-tab="m-ds-cases">🧭 Casos Prácticos</button>
    <button class="tab-btn premium-tab-ds" data-tab="m-ds-estrategia">🎯 Estrategia Real</button>
    <button class="tab-btn premium-tab-ds" data-tab="m-ds-mission">🏆 Reto Final</button>
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
        <h3 style="margin-top:0;">⚡ Simulador de Cadena de Pensamiento</h3>
        <p style="font-size:0.85rem; color:#94a3b8;">Observa cómo R1 deconstruye un problema matemático complejo.</p>
        
        <div class="m-ds-terminal">
            <div class="m-ds-t-header">
                <div style="font-weight:bold; color:var(--ds-primary);">DEEPSEEK-R1 ENGINE [ON]</div>
            </div>
            <div class="m-ds-t-body" id="ds-lab-body">
                <div style="color:#64748b;">Esperando prompt de razonamiento...</div>
            </div>
        </div>
        <div style="margin-top:15px; display:flex; gap:10px;">
            <select id="ds-scenario" class="premium-textarea" style="height:45px; width:250px;">
                <option value="math">Problema de Probabilidad</option>
                <option value="logic">El Dilema del Prisionero</option>
                <option value="code">Refactorización de Código</option>
            </select>
            <button class="ds-btn-glow" onclick="mDsRunCoT()">Iniciar Razonamiento</button>
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
          <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">1. Pega el código.<br>2. Pide revisar variable por variable.<br>3. Solicita líneas exactas del error.<br>4. Compara con un valor esperado.</div>
        </div>
        <div class="m-ds-card" style="border-top:3px solid #818cf8;">
          <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 2 · DECISIÓN</div>
          <h4 style="margin:0 0 8px; color:#fff;">Elegir entre varias opciones con criterios</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Útil para comparar proveedores, escenarios o alternativas cuando hay varias variables al tiempo.</p>
          <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">1. Pega la tabla.<br>2. Define costo, riesgo y tiempo.<br>3. Pide matriz comparativa.<br>4. Exige recomendación justificada.</div>
        </div>
        <div class="m-ds-card" style="border-top:3px solid #10b981;">
          <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 3 · MEJORA</div>
          <h4 style="margin:0 0 8px; color:#fff;">Reescribir un procedimiento confuso</h4>
          <p style="font-size:0.78rem; color:#94a3b8; margin:0 0 10px;">Funciona bien para instrucciones mal redactadas, procesos ambiguos o reglas poco claras.</p>
          <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">1. Pega el procedimiento actual.<br>2. Pide ambigüedades y huecos.<br>3. Solicita versión mejorada.<br>4. Cierra con checklist de control.</div>
        </div>
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

      <div style="background:linear-gradient(135deg,#10b981,#059669); color:#fff; border-radius:8px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; margin-top:16px; font-weight:800;">
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

<script>
  // -- Tabs logic --
  setTimeout(() => {
    const parent = document.getElementById('module-deepseek');
    if(!parent) return;
    const tabs = parent.querySelectorAll('.premium-tab-ds');
    const contents = parent.querySelectorAll('.ag-content');
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      contents.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const target = parent.querySelector('#' + t.dataset.tab);
      if(target) target.classList.add('active');
    }));
  }, 500);

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
    const scenario = document.getElementById('ds-scenario').value;
    body.innerHTML = '<div style="color:var(--ds-primary);">[SYSTEM] Inicializando Kernels de Razonamiento v2.0...</div>';

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
</script>
`;
  const target = document.getElementById('module-deepseek');
  if (target) { target.innerHTML = dseekHTML; }
  return { init: function() { console.log('DeepSeek Titan Brain v31.4 loaded'); } };
})();
