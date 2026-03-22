window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-16'] = window.GuiaModules['module-17'] = window.GuiaModules['module-18'] = window.GuiaModules['module-personal-ai'] = (function() {
  // --- MÓDULO 16: Lógica Centralizada ---
  window.m16GenFormula = function() {
    const val = document.getElementById('m16-excel-req')?.value;
    const res = document.getElementById('m16-formula-result');
    if (!res) return;
    
    let f = '';
    if(val==='q1') f = '<span style="color:#f59e0b;">=SUMAR.SI</span>(A:A; "Bogotá"; C:C)';
    else if(val==='q2') f = '<span style="color:#f59e0b;">=BUSCARV</span>(E2; Empleados!A:D; 2; FALSO)';
    else if(val==='q3') f = '<span style="color:#f59e0b;">=SI</span>(A1 < HOY(); "VENCIDO"; "A TIEMPO")<br><br><span style="font-family:sans-serif;font-size:0.8rem;color:#cbd5e1;">(La IA además te diría: Para ponerlo en rojo automáticamente, ve a Formato Condicional > Resaltar reglas > Texto que contiene "VENCIDO")</span>';
    else if(val==='q4') f = '<span style="color:#d8b4fe;">Sub</span> LimpiarHoja()<br>&nbsp;&nbsp;ActiveSheet.Cells.ClearContents<br>&nbsp;&nbsp;MsgBox "¡Datos borrados con éxito!"<br><span style="color:#d8b4fe;">End Sub</span>';
    
    res.innerHTML = '⚙️ Generando...';
    res.style.display = 'block';
    setTimeout(() => {
      res.innerHTML = f;
      window.app && window.app.addXP(15);
    }, 500);
  };

  window.m16SimulateBolt = function(btn) {
    if (!btn) return;
    btn.disabled = true;
    const textArea = document.getElementById('m16-typing');
    if (!textArea) return;
    
    const code = [
      "<br>> npm install react-chartjs-2 tailwindcss lucide-react",
      "<br>> Generando componentes UI...",
      "<br><span style='color:#fcd34d'>export default function</span> Dashboard() {",
      "<br>&nbsp;&nbsp;<span style='color:#fcd34d'>return</span> (",
      "<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=\"p-8 bg-slate-900 min-h-screen\"&gt;",
      "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Panel de Control PQRs&lt;/h1&gt;",
      "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;PieChart data={datosAbiertos} /&gt;",
      "<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;",
      "<br>&nbsp;&nbsp;);",
      "<br>}<br>",
      "<br><span style='color:#10b981'>> ✅ COMPILACIÓN EXITOSA. App Desplegada.</span>"
    ];
    
    let i = 0;
    textArea.innerHTML = '';
    const cursor = document.getElementById('m16-c');
    
    let interval = setInterval(() => {
      textArea.innerHTML += code[i];
      i++;
      if(i >= code.length) { 
        clearInterval(interval); 
        if (cursor) cursor.style.display = 'none';
        window.app && window.app.addXP(20);
        window.showToast('Simulación Completada: App lista','success');
      }
    }, 400);
  };

  // --- MÓDULO 17: Lógica Centralizada ---
  window.m17Simulate = function(cmd) {
    const trm = document.getElementById('m17-term-txt');
    if (!trm) return;
    trm.innerHTML = '> ollama ' + cmd + '<br><span style="color:#64748b;">pulling manifest...<br>downloading model 100% [==============================] 2.0/2.0 GB</span><br><br>';
    
    setTimeout(() => {
      trm.innerHTML += '<span style="color:#eab308;">>>> Envía un mensaje (Ctrl+d para salir)</span><br>';
      trm.innerHTML += '> Analiza los salarios del Anexo 1...<br>';
    }, 1000);
    
    setTimeout(() => {
      trm.innerHTML += '<br><span style="color:#10b981;">[Modelo Local]: Analizando localmente sin red... El salario mayor es $15.000.000. No se enviaron datos externos.</span>';
      window.app && window.app.addXP(20);
    }, 2200);
  };

  // --- MÓDULO 18: Lógica Centralizada ---
  window.m18FormatCOP = function(value) {
    return '$' + new Intl.NumberFormat('es-CO').format(Math.round(value)) + ' COP';
  };

  window.m18Calc = function() {
    const hoursInput = document.getElementById('m18-hours');
    const automationInput = document.getElementById('m18-automation');
    const hourlyRateInput = document.getElementById('m18-rate');
    const licensesInput = document.getElementById('m18-licenses');
    const licenseCostInput = document.getElementById('m18-license-cost');

    const hVal = document.getElementById('m18-h-val');
    const aVal = document.getElementById('m18-a-val');
    const rVal = document.getElementById('m18-r-val');
    const lVal = document.getElementById('m18-l-val');
    const cVal = document.getElementById('m18-c-val');

    const savVal = document.getElementById('m18-sav');
    const dinVal = document.getElementById('m18-din');
    const monthCostVal = document.getElementById('m18-month-cost');
    const netVal = document.getElementById('m18-net');
    const roiVal = document.getElementById('m18-roi-val');
    const paybackVal = document.getElementById('m18-payback');
    const verdictVal = document.getElementById('m18-verdict');
    const verdictNoteVal = document.getElementById('m18-verdict-note');
    const verdictBadge = document.getElementById('m18-verdict-badge');
    const summaryTitle = document.getElementById('m18-summary-title');
    const summaryText = document.getElementById('m18-summary-text');
    const breakEvenVal = document.getElementById('m18-break-even');
    const resultBox = document.getElementById('m18-res');

    if (!hoursInput || !automationInput || !hourlyRateInput || !licensesInput || !licenseCostInput) return;

    const weeklyHours = parseInt(hoursInput.value, 10);
    const automationRate = parseInt(automationInput.value, 10);
    const hourlyRate = parseInt(hourlyRateInput.value, 10);
    const licenses = parseInt(licensesInput.value, 10);
    const licenseCost = parseInt(licenseCostInput.value, 10);

    const monthlyHours = weeklyHours * 4;
    const savedHours = Math.round((monthlyHours * automationRate) / 100);
    const grossValue = savedHours * hourlyRate * licenses;
    const monthlyCost = licenseCost * licenses;
    const netValue = grossValue - monthlyCost;
    const roiPercent = monthlyCost > 0 ? Math.round((netValue / monthlyCost) * 100) : 0;
    const paybackDays = grossValue > 0 ? Math.max(1, Math.round((monthlyCost / grossValue) * 30)) : 30;
    const breakEvenHours = hourlyRate > 0 ? Math.ceil(monthlyCost / hourlyRate) : 0;

    if (hVal) hVal.innerText = weeklyHours;
    if (aVal) aVal.innerText = automationRate + '%';
    if (rVal) rVal.innerText = '$' + new Intl.NumberFormat('es-CO').format(hourlyRate);
    if (lVal) lVal.innerText = licenses;
    if (cVal) cVal.innerText = '$' + new Intl.NumberFormat('es-CO').format(licenseCost);
    if (savVal) savVal.innerText = savedHours;
    if (dinVal) dinVal.innerText = window.m18FormatCOP(grossValue);
    if (monthCostVal) monthCostVal.innerText = window.m18FormatCOP(monthlyCost);
    if (netVal) netVal.innerText = (netValue < 0 ? '- ' : '') + window.m18FormatCOP(Math.abs(netValue));
    if (roiVal) roiVal.innerText = roiPercent + '%';
    if (paybackVal) paybackVal.innerText = paybackDays + ' días';
    if (breakEvenVal) breakEvenVal.innerText = breakEvenHours + ' h/mes';

    if (verdictVal && verdictNoteVal && verdictBadge && summaryTitle && summaryText && resultBox) {
      resultBox.className = 'm18-result-box';
      verdictBadge.className = 'm18-verdict-badge';

      if (netValue <= 0) {
        resultBox.classList.add('is-poor');
        verdictBadge.classList.add('is-poor');
        verdictBadge.innerText = 'No conviene';
        verdictVal.innerText = 'ROI insuficiente';
        verdictNoteVal.innerText = 'Con estos valores, la licencia cuesta más de lo que recupera. Así como está, no se justifica.';
        summaryTitle.innerText = 'Decisión sugerida: no comprar todavía';
        summaryText.innerText = 'Primero sube la adopción, concentra casos de uso repetitivos o prueba con menos licencias para llegar al punto de equilibrio.';
      } else if (roiPercent < 100) {
        resultBox.classList.add('is-fair');
        verdictBadge.classList.add('is-fair');
        verdictBadge.innerText = 'Caso ajustado';
        verdictVal.innerText = 'ROI moderado';
        verdictNoteVal.innerText = 'La licencia sí aporta valor, pero el margen todavía es estrecho y requiere disciplina de uso.';
        summaryTitle.innerText = 'Decisión sugerida: piloto controlado';
        summaryText.innerText = 'Conviene empezar con pocas licencias y medir tareas muy concretas para asegurar que el ahorro se mantenga mes a mes.';
      } else if (roiPercent < 300) {
        resultBox.classList.add('is-strong');
        verdictBadge.classList.add('is-strong');
        verdictBadge.innerText = 'Conviene';
        verdictVal.innerText = 'ROI sólido';
        verdictNoteVal.innerText = 'La inversión se recupera con claridad y deja un ahorro neto visible para justificar la compra.';
        summaryTitle.innerText = 'Decisión sugerida: aprobar compra';
        summaryText.innerText = 'Este escenario ya soporta una justificación financiera razonable para uso individual o por célula de trabajo.';
      } else {
        resultBox.classList.add('is-excellent');
        verdictBadge.classList.add('is-excellent');
        verdictBadge.innerText = 'Muy rentable';
        verdictVal.innerText = 'ROI sobresaliente';
        verdictNoteVal.innerText = 'La licencia tiene un retorno muy alto y libera tiempo valioso de forma consistente.';
        summaryTitle.innerText = 'Decisión sugerida: escalar al equipo';
        summaryText.innerText = 'El caso financiero es fuerte. Ya puedes defender compra por varias licencias o ampliación a un equipo completo.';
      }
    }
  };

  // Autostart ROI calc if element exists
  const m18Check = setInterval(() => {
    if (document.getElementById('m18-hours')) {
      window.m18Calc();
      clearInterval(m18Check);
    }
  }, 500);

  const modules = {

/* ══════════════════════════════════════════════════════════════
   MÓDULO 16 — IA PARA CÓDIGO Y NO-CODE
   ══════════════════════════════════════════════════════════════ */
'module-16': `

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(37,99,235,0.1), rgba(29,78,216,0.15)); border: 1px solid rgba(37,99,235,0.2);">
  <div class="module-number gamer-badge" style="background:#2563eb;color:#fff;">Módulo 16 — Nivel Experto</div>
  <h2 class="module-title glow-text" style="color:#60a5fa;">🧑‍💻 IA para Código, Trámites y Ventas</h2>
  <p class="module-description">No necesitas ser programador para automatizar procesos. La IA traduce tus ideas en software, fórmulas de Excel y embudos de ventas ultra-efectivos.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 40 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Desarrollador Ciudadano</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m16-excel">📊 Experto en Excel</button>
  <button class="tab-btn" data-tab="m16-ventas">🤝 Trámites y Ventas</button>
  <button class="tab-btn" data-tab="m16-nocode">🔮 Generadores de Apps</button>
  <button class="tab-btn" data-tab="m16-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: EXCEL / SHEETS -->
<div id="m16-excel" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">📈</span> El Fin de Buscar Fórmulas en Google</h3>
    <p>Simplemente escríbele a ChatGPT lo que quieres que pase con tus celdas, y él te dará la fórmula exacta (incluso Macros completas).</p>
    
    <div style="background:rgba(255,255,255,0.02);padding:20px;border-radius:12px;margin-top:20px;border:1px solid #10b981;">
      <h4 style="margin:0 0 10px;color:#10b981;">🧪 Laboratorio: Autogenerador de Excel</h4>
      <p style="font-size:0.8rem;margin-bottom:15px;opacity:0.8;">Escribe lo que necesitas resolver en lenguaje natural y mira cómo la IA lo traduce a código Excel/Sheets de inmediato.</p>
      
      <div style="display:flex;gap:10px;">
        <select id="m16-excel-req" style="flex:1;padding:12px;background:#050a0e;border:1px solid #333;border-radius:8px;color:#fff;font-size:0.85rem;">
          <option value="q1">Sumar la columna Ingresos (C) SOLO si la ciudad (A) es 'Bogotá'</option>
          <option value="q2">Quiero buscar el número de cédula de E2 en la hoja 'Empleados' y traer el nombre</option>
          <option value="q3">Si la fecha en A1 ya pasó, pon 'VENCIDO' en rojo, sino 'A TIEMPO'</option>
          <option value="q4">Macro VBA: Haz un botón que borre todo el contenido de la hoja activa</option>
        </select>
        <button class="gl-btn gl-btn-primary" style="background:#10b981;color:#000;font-weight:700;" onclick="m16GenFormula()">Traducir</button>
      </div>

      <div id="m16-formula-result" style="display:none;margin-top:15px;padding:15px;background:#1a1a2e;border-left:4px solid #3b82f6;border-radius:8px;font-family:monospace;font-size:0.9rem;color:#93c5fd;"></div>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 <b>Prompt Maestro para Excel:</b> "Actúa como experto en Excel avanzado. Tengo mi base de datos en [Rango]. La columna A tiene [Dato] y la B [Dato]. Necesito una fórmula que [Tu Objetivo]. Explícame paso a paso cómo aplicarla."
    </div>

  </div>
</div>

<!-- TAB 2: TRÁMITES Y VENTAS -->
<div id="m16-ventas" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🤝</span> Optimización de Trámites y Ventas</h3>
    <p>La IA no solo suma números, redacta procesos. Usa estos prompts especializados para agilizar la gestión pública y cerrar acuerdos efectivos.</p>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;">
      <div style="background:rgba(255,255,255,0.02);padding:15px;border-radius:12px;border:1px solid #3b82f6;">
        <h4 style="color:#60a5fa;margin-top:0;">📋 Simplificación de Trámites</h4>
        <p style="font-size:0.8rem;opacity:0.8;">"Resume este manual de 50 páginas sobre [Trámite], identifica 3 pasos redundantes y propón un flujo digital automatizado para el ciudadano."</p>
      </div>
      <div style="background:rgba(255,255,255,0.02);padding:15px;border-radius:12px;border:1px solid #10b981;">
        <h4 style="color:#10b981;margin-top:0;">💰 Persuasión y Ventas</h4>
        <p style="font-size:0.8rem;opacity:0.8;">"Redacta un mensaje de LinkedIn altamente personalizado para [Cargo] de [Entidad], ofreciendo [Servicio] basado en su necesidad de [Problema]."</p>
      </div>
    </div>
  </div>
</div>

<!-- TAB 2: NO-CODE (BOLT) -->
<div id="m16-nocode" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🔮</span> Generadores Universitarios (Apps enteras en 1 clic)</h3>
    <p>Herramientas como <b>Bolt.new</b> o <b>v0.dev</b> están revolucionando el mundo. Tú escribes "Quiero una app para registrar visitas que tenga un formulario y una tabla gráfica", y la IA programa toda la app del lado del navegador frente a tus ojos.</p>
    
    <div class="m16-code-window">
      <div class="m16-code-header">
        <div class="m16-dot r"></div><div class="m16-dot y"></div><div class="m16-dot g"></div>
        <span style="margin-left:10px;font-size:0.75rem;color:#64748b;">Bolt.new — Escribiendo App V1.0</span>
      </div>
      <div class="m16-code-body">
        <span style="color:#10b981;">> user:</span> crea un dashboard institucional para PQRs. Que tenga botones para "Responder", "Derivar" y gráficas de torta.<br>
        <span style="color:#8b5cf6;">> ai:</span> ¡Entendido! Creando arquitectura React + Tailwind...<br>
        <span id="m16-typing"></span><span class="m16-cursor" id="m16-c"></span>
      </div>
    </div>
    <div style="text-align:center;margin-top:15px;">
      <button class="gl-btn gl-btn-primary" onclick="m16SimulateBolt(this)">⚡ Ejecutar Simulación IA</button>
    </div>

    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:20px;">
      <div class="m11-tool-card" onclick="window.open('https://bolt.new','_blank')">
        <h4 style="margin:0 0 5px;color:#fcd34d;">Bolt.new</h4>
        <p style="font-size:0.75rem;margin:0;">Sitios web y apps web completas (funcionales y con backend simulado).</p>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://v0.dev','_blank')">
        <h4 style="margin:0 0 5px;color:#cbd5e1;">v0 by Vercel</h4>
        <p style="font-size:0.75rem;margin:0;">El mejor diseñador UI del mundo. Dile cómo quieres que se vea una pantalla y te da el código exacto.</p>
      </div>
    </div>
  </div>
</div>

<!-- TAB 3: MISIÓN -->
<div id="m16-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🧑‍💻</span><span class="exercise-title">Misión 16: El Hacker Sin Código</span></div>
    <div class="preparation-step" style="background: rgba(37,99,235,0.1); border: 1px solid #2563eb; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #2563eb;">
      <h4 style="margin-top: 0; color: #2563eb; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, prepara un problema real de Excel (fórmula que no te sale) o una idea de app institucional sencilla.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(37,99,235,0.05);padding:20px;border-radius:12px;border-left:4px solid #2563eb;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Identifica tu peor dolor de cabeza en Excel (ese archivo gigante que siempre da errores).</li>
        <li>Abre ChatGPT o Claude y usa el "Prompt Maestro" descrito en la primera pestaña para pedirle una macro (VBA) o fórmula compleja que lo solucione todo con un clic.</li>
        <li>(Nivel Dios): Prueba entrar a <b>V0.dev</b> y pídele que diseñe "Una interfaz de una app del Gobierno para reportar huecos en la calle". Mira cómo la dibuja en segundos.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="¿Qué fórmula compleja o herramienta lograste crear con ayuda de la IA sin tener que programar?..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Desarrollador Ciudadano 👨‍💻</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-16" style="width:100%;margin-top:15px;background:#2563eb;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-15">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-17">Siguiente: Privacidad Local →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 17 — IA LOCAL Y PRIVADA (OLLAMA)
   ══════════════════════════════════════════════════════════════ */
'module-17': `

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.15)); border: 1px solid rgba(16,185,129,0.2);">
  <div class="module-number gamer-badge" style="background:#10b981;color:#000;">Módulo 17 — Nivel Ciberseguridad</div>
  <h2 class="module-title glow-text" style="color:#6ee7b7;">🛡️ Privacidad Local (Ollama)</h2>
  <p class="module-description">Ejecuta inteligencia artificial sin necesidad de internet. Si tienes datos críticos, confidenciales o históricos del Estado, jamás deben ir a ChatGPT. Pon la IA en tu propia máquina.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 35 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Guardián de Datos</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m17-concept">🔒 Por qué Local</button>
  <button class="tab-btn" data-tab="m17-lab">⚙️ Terminal Ollama</button>
  <button class="tab-btn" data-tab="m17-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m17-concept" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🏦</span> Privacidad por Diseño (El Cortafuegos)</h3>
    <p>Cuando usas ChatGPT, toda la info viaja a los servidores de OpenAI (EE.UU.). Si analizas un <b>Expediente Médico</b> o <b>Información Tributaria</b>, estás vulnerando leyes de protección de datos (Habeas Data).</p>
    
    <div class="m17-arch">
      <div class="m17-box" style="border-color:#3b82f6;background:rgba(59,130,246,0.1);">
        <div style="font-size:2rem;">💻</div>
        <div style="font-weight:700;margin-top:5px;font-size:0.85rem;">Tu PC Físico</div>
      </div>
      <div class="m17-arrow">↔️</div>
      <div class="m17-box" style="border-color:#10b981;background:rgba(16,185,129,0.1);">
        <div style="font-size:2rem;">🦙</div>
        <div style="font-weight:700;margin-top:5px;font-size:0.85rem;">Ollama (El Motor)</div>
      </div>
      <div class="m17-arrow">↔️</div>
      <div class="m17-box" style="border-color:#eab308;background:rgba(234,179,8,0.1);">
        <div style="font-size:2rem;">🧠</div>
        <div style="font-weight:700;margin-top:5px;font-size:0.85rem;">Llama 3 / DeepSeek</div>
      </div>
    </div>

    <div style="text-align:center;color:#ef4444;font-weight:700;font-size:1.1rem;margin:20px 0;">
      ❌ INTERNET DESCONECTADO ❌<br><small style="color:#94a3b8;font-weight:400;">La IA responde igual, los datos NUNCA salen de tu máquina.</small>
    </div>
    
  </div>
</div>

<!-- TAB 2: LABORATORIO OLLAMA -->
<div id="m17-lab" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🛠️</span> Ejecutando una IA en tu Terminal</h3>
    <p>Instalar <b>Ollama</b> (ollama.com) es tan fácil como instalar Chrome. Una vez instalado, abres la consola y llamas al modelo que quieras. Pruébalo en esta simulación:</p>
    
    <div style="display:flex;gap:10px;margin-top:15px;">
      <button class="gl-btn gl-btn-outline" style="flex:1" onclick="m17Simulate('run llama3.2')">💻 Cargar Llama 3.2</button>
      <button class="gl-btn gl-btn-outline" style="flex:1" onclick="m17Simulate('run deepseek-r1')">💻 Cargar DeepSeek</button>
    </div>

    <div class="m17-terminal">
      <div id="m17-term-txt">> Esperando comando...</div>
      <div class="m16-cursor" id="m17-c"></div>
    </div>
    
    <div class="pista-ia" style="margin-top:20px;">
      💡 <b>¿No te gusta la pantalla negra?</b> No hay problema. Instalas <b>AnythingLLM</b> o <b>Chatbox</b>, lo conectas a tu Ollama local, y tendrás tu propio "ChatGPT Privado" con interfaz hermosa, gratis y seguro.
    </div>

  </div>
</div>

<!-- TAB 3: MISIÓN -->
<div id="m17-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🛡️</span><span class="exercise-title">Misión 17: Oficial de Privacidad</span></div>
    <div class="preparation-step" style="background: rgba(16,185,129,0.1); border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #10b981;">
      <h4 style="margin-top: 0; color: #10b981; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, verifica si tu equipo cuenta con permisos de administrador o si usarás el simulador de terminal de este módulo.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(16,185,129,0.05);padding:20px;border-radius:12px;border-left:4px solid #10b981;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Identifica un conjunto de datos en tu área que (por ley) sea clasificado o sensible (Ej: Base de datos de ciudadanos, historias clínicas, PQR con cédulas).</li>
        <li>Imagina que necesitas que la IA lo resuma. ¿Qué harías? Si tu respuesta es "subírselo a ChatGPT", repruebas la misión corporativa vital.</li>
        <li>Si tu computadora de trabajo tiene más de 8GB de RAM, entra a Ollama.com y descarga el instalador.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Nombra qué tipo de información NUNCA enviarías a la nube comercial de OpenAI..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Guardián de Datos 🛡️</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-17" style="width:100%;margin-top:15px;background:#10b981;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-16">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-18">Siguiente: Modelos Premium →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 18 — ANÁLISIS ROI MODELOS PREMIUM
   ══════════════════════════════════════════════════════════════ */
'module-18': `

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(124,58,237,0.15)); border: 1px solid rgba(139,92,246,0.2);">
  <div class="module-number gamer-badge" style="background:#8b5cf6;color:#fff;">Módulo 18 — Impacto Económico</div>
  <h2 class="module-title glow-text" style="color:#c4b5fd;">💰 ROI y Modelos Premium</h2>
  <p class="module-description">¿Vale la pena pagar $20 dólares al mes por ChatGPT Plus o Claude Pro? Analicemos el Retorno de Inversión (ROI) y justifiquemos licencias ante los jefes.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 30 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Negociador IA</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m18-roi">📈 Calculadora de ROI</button>
  <button class="tab-btn" data-tab="m18-prompts">🧠 Prompts Expertos</button>
  <button class="tab-btn" data-tab="m18-vs">⚖️ Gratis vs Plus</button>
  <button class="tab-btn" data-tab="m18-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: CALCULADORA -->
<div id="m18-roi" class="ag-content active">
  <div class="section-card animate-in m18-royalty-card">
    <h3><span class="icon">💼</span> Calculadora de Retorno (Justificación Corporativa)</h3>
    <p>Evalúa si una licencia premium realmente se paga sola. Ajusta horas, nivel de automatización, costo/hora y número de licencias para obtener un escenario más realista.</p>
    
    <div style="background:rgba(255,255,255,0.02);padding:22px;border-radius:16px;margin:20px 0;">
      <div class="m18-roi-grid-2" style="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;">
        <div style="background:rgba(0,0,0,0.2);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <label style="font-size:0.8rem;color:#cbd5e1;font-weight:700;display:block;">Horas operativas por semana</label>
          <input type="range" id="m18-hours" min="1" max="30" value="8" style="width:100%;margin:14px 0 8px;accent-color:#8b5cf6;" oninput="m18Calc()">
          <div style="font-size:1rem;color:#c4b5fd;font-weight:700;"><span id="m18-h-val">8</span> h/semana</div>
        </div>

        <div style="background:rgba(0,0,0,0.2);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <label style="font-size:0.8rem;color:#cbd5e1;font-weight:700;display:block;">Porcentaje automatizable</label>
          <input type="range" id="m18-automation" min="10" max="90" step="5" value="45" style="width:100%;margin:14px 0 8px;accent-color:#8b5cf6;" oninput="m18Calc()">
          <div style="font-size:1rem;color:#c4b5fd;font-weight:700;"><span id="m18-a-val">45%</span> del trabajo repetitivo</div>
        </div>

        <div style="background:rgba(0,0,0,0.2);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <label style="font-size:0.8rem;color:#cbd5e1;font-weight:700;display:block;">Costo hora estimado (COP)</label>
          <input type="range" id="m18-rate" min="12000" max="80000" step="1000" value="25000" style="width:100%;margin:14px 0 8px;accent-color:#8b5cf6;" oninput="m18Calc()">
          <div style="font-size:1rem;color:#c4b5fd;font-weight:700;"><span id="m18-r-val">$25.000</span> por hora</div>
        </div>

        <div style="background:rgba(0,0,0,0.2);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <label style="font-size:0.8rem;color:#cbd5e1;font-weight:700;display:block;">Número de licencias</label>
          <input type="range" id="m18-licenses" min="1" max="20" value="1" style="width:100%;margin:14px 0 8px;accent-color:#8b5cf6;" oninput="m18Calc()">
          <div style="font-size:1rem;color:#c4b5fd;font-weight:700;"><span id="m18-l-val">1</span> licencia(s)</div>
        </div>
      </div>

      <div style="margin-top:16px;background:rgba(0,0,0,0.2);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
        <label style="font-size:0.8rem;color:#cbd5e1;font-weight:700;display:block;">Costo mensual por licencia (COP)</label>
        <input type="range" id="m18-license-cost" min="40000" max="200000" step="5000" value="85000" style="width:100%;margin:14px 0 8px;accent-color:#8b5cf6;" oninput="m18Calc()">
        <div style="font-size:1rem;color:#c4b5fd;font-weight:700;"><span id="m18-c-val">$85.000</span> por licencia/mes</div>
      </div>
      
      <div id="m18-res" class="m18-result-box is-strong" style="margin-top:20px;padding:20px;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.45);border-radius:16px;">
        <div class="m18-roi-grid-4" style="display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));gap:12px;margin-bottom:18px;">
          <div style="background:rgba(255,255,255,0.04);padding:14px;border-radius:12px;">
            <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">HORAS RECUPERADAS</div>
            <div style="font-size:1.2rem;color:#fff;font-weight:800;margin-top:6px;"><span id="m18-sav">14</span> h/mes</div>
          </div>
          <div style="background:rgba(255,255,255,0.04);padding:14px;border-radius:12px;">
            <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">VALOR BRUTO</div>
            <div style="font-size:1.2rem;color:#fff;font-weight:800;margin-top:6px;"><span id="m18-din">$350.000 COP</span></div>
          </div>
          <div style="background:rgba(255,255,255,0.04);padding:14px;border-radius:12px;">
            <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">COSTO MENSUAL</div>
            <div style="font-size:1.2rem;color:#fff;font-weight:800;margin-top:6px;"><span id="m18-month-cost">$85.000 COP</span></div>
          </div>
          <div style="background:rgba(255,255,255,0.04);padding:14px;border-radius:12px;">
            <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">GANANCIA NETA</div>
            <div style="font-size:1.2rem;color:#fff;font-weight:800;margin-top:6px;"><span id="m18-net">$265.000 COP</span></div>
          </div>
        </div>

        <div class="m18-roi-grid-verdict" style="display:grid;grid-template-columns:1.2fr 0.8fr;gap:14px;align-items:stretch;">
          <div style="background:rgba(255,255,255,0.04);padding:16px;border-radius:12px;">
            <div id="m18-verdict-badge" class="m18-verdict-badge is-strong">Conviene</div>
            <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">DICTAMEN</div>
            <div id="m18-verdict" style="font-size:1.35rem;font-weight:800;color:#c4b5fd;margin:8px 0;">ROI sólido</div>
            <div id="m18-verdict-note" style="font-size:0.88rem;line-height:1.55;color:#e2e8f0;">La inversión se recupera con claridad y deja un ahorro neto visible para justificar la compra.</div>
            <div class="m18-summary-note">
              <div id="m18-summary-title" style="font-size:0.84rem;font-weight:800;color:#fff;">Decisión sugerida: aprobar compra</div>
              <div id="m18-summary-text" style="font-size:0.82rem;line-height:1.5;color:#cbd5e1;margin-top:6px;">Este escenario ya soporta una justificación financiera razonable para uso individual o por célula de trabajo.</div>
            </div>
          </div>
          <div style="background:rgba(255,255,255,0.04);padding:16px;border-radius:12px;display:flex;flex-direction:column;justify-content:center;gap:10px;">
            <div>
              <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">ROI MENSUAL</div>
              <div style="font-size:1.25rem;font-weight:800;color:#fff;"><span id="m18-roi-val">312%</span></div>
            </div>
            <div>
              <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">RECUPERACIÓN</div>
              <div style="font-size:1.25rem;font-weight:800;color:#fff;"><span id="m18-payback">7 días</span></div>
            </div>
            <div>
              <div style="font-size:0.72rem;color:#94a3b8;font-weight:700;">PUNTO DE EQUILIBRIO</div>
              <div style="font-size:1.25rem;font-weight:800;color:#fff;"><span id="m18-break-even">4 h/mes</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 2: PROMPTS EXPERTOS -->
<div id="m18-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧠</span> Ingeniería de Prompts Nivel Senior</h3>
    <p>Para justificar un ROI alto, debes usar prompts que la versión gratuita no logre resolver bien. Aquí es donde entra el <b>Razonamiento Multinivel</b>.</p>
    
    <div style="background:rgba(0,0,0,0.3);padding:20px;border-radius:12px;border:1px dashed #8b5cf6;">
      <h4 style="color:#c4b5fd;">🧪 Laboratorio: Prompt o1/o3 (Deep Reasoning)</h4>
      <p style="font-size:0.85rem;">Copia este esquema para problemas que parecen imposibles:</p>
      <div style="background:#0d1117;padding:15px;border-radius:8px;font-family:monospace;font-size:0.8rem;border-left:4px solid #8b5cf6;">
        "Actúa como consultor estratégico. Tengo este problema complejo: [Describir]. Antes de darme la solución, genera un árbol de 3 hipótesis posibles, evalúa los riesgos de cada una y luego selecciona la más eficiente en costo/tiempo bajo estas restricciones: [Restricciones]."
      </div>
      <button class="gl-btn small" style="margin-top:10px;" onclick="navigator.clipboard.writeText('Actúa como consultor estratégico. Tengo este problema complejo: [Describir]. Antes de darme la solución, genera un árbol de 3 hipótesis posibles, evalúa los riesgos de cada una y luego selecciona la más eficiente en costo/tiempo bajo estas restricciones: [Restricciones].');window.showToast('Prompt Senior copiado','success');">📋 Copiar Prompt Senior</button>
    </div>
  </div>
</div>

<!-- TAB 2: GRATIS VS PRO -->
<div id="m18-vs" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">⚖️</span> Evaluando la Inversión</h3>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;">
      
      <div style="border:1px solid #475569;border-radius:12px;padding:20px;background:#0f172a;">
        <h4 style="text-align:center;color:#94a3b8;border-bottom:1px solid #333;padding-bottom:10px;margin-top:0;">ChatGPT/Claude GRATIS</h4>
        <ul style="padding-left:15px;font-size:0.85rem;color:#cbd5e1;line-height:1.8;">
          <li>Límites estrictos de mensajes (te cortan a mitad del trabajo).</li>
          <li>No tienen razonamiento profundo (ej: o1, o3-mini) o está muy capado.</li>
          <li>No pueden generar imágenes directas.</li>
          <li><b>Veredicto:</b> Excelente para consultas diarias y tareas esporádicas.</li>
        </ul>
      </div>

      <div style="border:2px solid #8b5cf6;border-radius:12px;padding:20px;background:rgba(139,92,246,0.05);position:relative;">
        <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:#8b5cf6;color:#fff;padding:2px 10px;border-radius:10px;font-size:0.75rem;font-weight:700;">$20/mes</div>
        <h4 style="text-align:center;color:#c4b5fd;border-bottom:1px solid #8b5cf6;padding-bottom:10px;margin-top:0;">Cuentas PLUS / PRO</h4>
        <ul style="padding-left:15px;font-size:0.85rem;color:#cbd5e1;line-height:1.8;">
          <li>Construcción de <b>Bots Personalizados (GPTs)</b> con tu propia base documental.</li>
          <li>Subida ilimitada de hojas de Excel enormes (Data Analysis avanzado).</li>
          <li>No te abandonan a las 4 P.M. cuando más las necesitas.</li>
          <li><b>Veredicto:</b> Obligatoria si tu trabajo implica procesamiento de datos pesados constante.</li>
        </ul>
        <button class="gl-btn small" style="width:100%;margin-top:10px;background:#8b5cf6;border:none;" onclick="window.app&&window.app.addXP(20);this.disabled=true;this.innerText='💡 Entendido'">Marcar como Revisado</button>
      </div>

    </div>
  </div>
</div>

<!-- TAB 3: MISIÓN -->
<div id="m18-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">💰</span><span class="exercise-title">Misión 18: El ROI Institucional</span></div>
    <div class="preparation-step" style="background: rgba(139,92,246,0.1); border: 1px solid #8b5cf6; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin-top: 0; color: #8b5cf6; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, estima tu salario por hora (aproximado) o el de tu equipo para realizar un cálculo de ROI realista.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(139,92,246,0.05);padding:20px;border-radius:12px;border-left:4px solid #8b5cf6;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Identifica un cuello de botella en tu área en el que inviertan más de 20 horas humanas a la semana.</li>
        <li>Si tuvieras una licencia Pro (ChatGPT Plus), ¿crees que podrías automatizar el 50% construyendo un GPT personalizado?</li>
        <li>Redacta en un par de líneas cómo "venderías" la idea de pagar esa licencia a tus directores usando el argumento de ahorro en dinero/tiempo.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Escribe tu argumento de ROI aquí..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Negociador IA 💰</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-18" style="width:100%;margin-top:15px;background:#8b5cf6;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-17">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-19">Siguiente: Cierre y Leaderboard →</button>
</div>
`
  };

  // Inject safely
  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el && !el.querySelector('.module-header')) {
      el.insertAdjacentHTML('afterbegin', html);
    }
  }
  return { init: function(app) { console.log('Initialized modules-16-18.js'); } };
})();
