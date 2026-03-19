window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-11'] = window.GuiaModules['module-12'] = (function() {
  // --- MÓDULO 11: Lógica Centralizada ---
  window.m11LoadPDF = function() {
    const drop = document.getElementById('m11-drop');
    if (!drop) return;
    drop.classList.add('active');
    drop.innerHTML = '<div class="m11-pdf-icon" style="color:#2563eb;">⚙️</div><h4 style="margin:0;">Procesando 250 páginas...</h4>';
    setTimeout(() => {
      drop.style.display = 'none';
      const chatInterface = document.getElementById('m11-chat-interface');
      if (chatInterface) chatInterface.style.display = 'block';
      window.app && window.app.addXP(20);
    }, 1500);
  };

  window.m11Ask = function() {
    const sel = document.getElementById('m11-query');
    const hist = document.getElementById('m11-chat-history');
    if (!sel || !hist) return;
    
    const qText = sel.options[sel.selectedIndex].text;
    const qVal = sel.value;
    
    hist.innerHTML += '<div class="m11-chat-bubble"><b>Tú:</b> ' + qText + '</div>';
    
    setTimeout(() => {
      let ans = '';
      if(qVal==='q1') ans = 'El eje de Tecnología (Páginas 45-62) se centra en 3 pilares: 1) Digitalización de trámites (meta: 80% al 2026), 2) Capacitación de talento humano, y 3) Modernización de infraestructura cloud.';
      else if(qVal==='q2') ans = 'Según la sección de Riesgos Financieros (Pág 210), el principal riesgo es el recorte de transferencias nacionales, seguido por la fluctuación de la TRM en compras tecnológicas internacionales.';
      else if(qVal==='q3') ans = 'Encontré 4 menciones sobre "teletrabajo":<br>- Pág 12: Como estrategia de bienestar.<br>- Pág 88: Meta de llegar al 30% del personal administrativo.<br>- Pág 140: Presupuesto para dotación de equipos.<br>- Pág 201: Indicador de reducción de huella de carbono.';
      else if(qVal==='q4') ans = 'La Meta 3.1 (Modernización) cuenta con $500M presupuestados y responsables directos (Área TI). La Meta 5.2 (Capacitación en datos) tiene $120M y depende de Talento Humano. Ambas apuntan al Eje Digital, pero operan en diferentes áreas misionales.';
      
      hist.innerHTML += '<div class="m11-chat-bubble ai"><b>Asistente IA:</b> ' + ans + ' <br><br><small style="color:#10b981;">[Fuente: Páginas analizadas en 0.4s]</small></div>';
      hist.scrollTop = hist.scrollHeight;
      window.app && window.app.addXP(10);
    }, 1000);
  };

  const m11QuizData = [
    {sc:"Necesitas saber cuál es la Tasa Representativa del Mercado (TRM) promedio del último mes, pero requieres fuentes oficiales citadas para un informe.",ans:"Perplexity AI",opts:["ChatGPT","NotebookLM","Perplexity AI"],exp:"Perplexity busca en la web en tiempo real y te entrega las fuentes (ej: Banco de la República) asegurando que no haya alucinaciones."},
    {sc:"Tienes 5 PDFs (leyes, decretos y el manual de tu entidad) y necesitas preguntarle a la IA: '¿Con base en estos textos, cuál es el proceso exacto para sancionar a un funcionario?'",ans:"NotebookLM",opts:["DeepSeek","NotebookLM","Perplexity AI"],exp:"NotebookLM es perfecto porque puedes subir múltiples PDFs y la IA crea un 'cerebro' que responde vinculando información SOLO de esos archivos con enlaces a las páginas exactas."},
    {sc:"Necesitas revisar un pliego de licitación de 150 páginas para resumirlo y encontrar inconsistencias lógicas profundas.",ans:"Claude",opts:["Claude","Canva","ChatGPT"],exp:"Claude tiene la 'ventana de contexto' más grande (puede leer cientos de páginas a la vez) y su capacidad de razonamiento lógico supera a ChatGPT para documentos tan largos."}
  ];
  let m11Cur = 0, m11Score = 0;
  window.m11Score = 0; // Expose for global onclick

  window.initM11Quiz = function() {
    m11Cur = 0; m11Score = 0;
    renderM11Quiz();
  };

  function renderM11Quiz() {
    const container = document.getElementById('m11-quiz');
    if (!container) return;
    if (m11Cur >= m11QuizData.length) {
      container.innerHTML = '<div style="text-align:center;padding:30px;"><span style="font-size:3rem">🏆</span><h3>¡Reto completado! Puntos: '+m11Score+'/'+m11QuizData.length+'</h3><button class="gl-btn gl-btn-primary" onclick="window.app&&window.app.addXP(m11Score*30);this.disabled=true;this.textContent=\'XP Reclamado!\'">Reclamar '+(m11Score*30)+' XP</button></div>';
      return;
    }
    const c = m11QuizData[m11Cur];
    container.innerHTML = '<div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:12px;padding:20px;"><div style="font-size:0.7rem;opacity:0.6;margin-bottom:10px;">Escenario '+(m11Cur+1)+'/'+m11QuizData.length+'</div><p style="font-size:0.95rem;font-weight:500;margin-bottom:20px;">'+c.sc+'</p><div style="display:flex;flex-direction:column;gap:10px;">'+c.opts.map(o=>'<button onclick="chkM11(this,\''+o+'\')" class="gl-btn gl-btn-outline" style="text-align:left;">'+o+'</button>').join('')+'</div><div id="m11-exp" style="display:none;margin-top:15px;padding:12px;background:rgba(37,99,235,0.1);border-radius:8px;font-size:0.85rem;"></div></div>';
  }

  window.chkM11 = function(el, ans) {
    const c = m11QuizData[m11Cur];
    el.parentElement.querySelectorAll('button').forEach(b => b.disabled = true);
    if (ans === c.ans) {
      el.style.borderColor = '#10b981';
      el.style.background = 'rgba(16,185,129,0.1)';
      m11Score++;
      window.m11Score = m11Score; // Sync with global
      window.showToast('+30 XP ¡Correcto!', 'success');
    } else {
      el.style.borderColor = '#ef4444';
      el.style.background = 'rgba(239,68,68,0.1)';
    }
    const exp = document.getElementById('m11-exp');
    if (exp) {
      exp.style.display = 'block';
      exp.innerHTML = '💡 ' + c.exp + '<br><br><button class="gl-btn small" style="margin-top:8px;" onclick="m11Next()">Siguiente →</button>';
    }
  };

  window.m11Next = function() {
    m11Cur++;
    renderM11Quiz();
  };

  // --- MÓDULO 12: Lógica Centralizada ---
  let m12PromptRaw = '';
  window.m12GenWBS = function() {
    const proj = document.getElementById('m12-project')?.value.trim();
    if (!proj) { window.showToast('Ingresa el proyecto', 'warning'); return; }
    const time = document.getElementById('m12-time')?.value;
    const team = document.getElementById('m12-team')?.value;
    
    const loader = document.getElementById('m12-wbs-list');
    const outputBox = document.getElementById('m12-wbs-output');
    if (outputBox) outputBox.style.display = 'block';
    if (loader) loader.innerHTML = '<div style="text-align:center;padding:20px;color:#f59e0b;">Analizando dependencias y generando fases... ⚙️</div>';
    
    setTimeout(() => {
      m12PromptRaw = 'Actúa como Project Manager (PMP). Necesito hacer el proyecto: "' + proj + '". Tenemos ' + time + ' y el equipo es: ' + team + '. Divide el proyecto en 4 fases principales. Para cada fase escribe 3 tareas específicas. Entrégalo en formato de lista clara.';
      
      if (loader) {
        loader.innerHTML = `
          <div class="m12-wbs-card">
            <div class="m12-wbs-title">Fase 1: Planificación Inicial</div>
            <div class="m12-subtask">1.1. Reunión de Kick-off y alineación de objetivos</div>
            <div class="m12-subtask">1.2. Aprobación de presupuesto estimado</div>
            <div class="m12-subtask">1.3. Asignación de roles al equipo: ${team}</div>
          </div>
          <div class="m12-wbs-card">
            <div class="m12-wbs-title">Fase 2: Ejecución y Logística</div>
            <div class="m12-subtask">2.1. Contratación de proveedores clave</div>
            <div class="m12-subtask">2.2. Diseño de materiales y comunicaciones</div>
            <div class="m12-subtask">2.3. Verificación de infraestructura técnica</div>
          </div>
          <div class="m12-wbs-card">
            <div class="m12-wbs-title">Fase 3: Control y Pruebas</div>
            <div class="m12-subtask">3.1. Revisión de entregables contra cronograma</div>
            <div class="m12-subtask">3.2. Simulacro o prueba en seco</div>
            <div class="m12-subtask">3.3. Resolución de cuellos de botella finales</div>
          </div>
          <div class="m12-wbs-card">
            <div class="m12-wbs-title">Fase 4: Lanzamiento y Cierre</div>
            <div class="m12-subtask">4.1. Ejecución del proyecto: ${proj}</div>
            <div class="m12-subtask">4.2. Recopilación de métricas e indicadores</div>
            <div class="m12-subtask">4.3. Informe final y lecciones aprendidas</div>
          </div>
          <div style="font-size:0.8rem;margin-top:10px;color:#10b981;">✅ Simulación completada. El prompt maestro ha sido generado.</div>
        `;
      }
      window.app && window.app.addXP(30);
    }, 1200);
  };

  window.m12CopyWBS = function() {
    navigator.clipboard.writeText(m12PromptRaw);
    window.showToast('Prompt maestro copiado ✨', 'success');
  };

  // --- MÓDULO 12: Lógica Sovereign v31.4 ---
  window.m12Tasks = []; 

  window.m12Classify = function() {
    const input = document.getElementById('m12-task-input');
    if (!input) return;
    const rawValue = input.value.trim();
    if (!rawValue) return;

    const tasks = rawValue
      .split(/\n|;/)
      .map(t => t.trim())
      .filter(Boolean);

    if (!tasks.length) return;

    const btn = document.querySelector('.m12-classify-btn');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Analizando...';
      btn.disabled = true;

      setTimeout(() => {
        let added = 0;
        tasks.forEach((task, index) => {
          const classification = window.m12AnalyzeTask(task);
          window.m12Tasks.push({
            text: task,
            q: classification.quadrant,
            reason: classification.reason,
            action: classification.action,
            id: Date.now() + index
          });
          added += 1;
        });

        btn.innerHTML = originalText;
        btn.disabled = false;
        m12RenderTasks();
        window.app && window.app.addXP(added * 10);
        window.showToast(`${added} tarea${added > 1 ? 's clasificadas' : ' clasificada'} correctamente`, 'success');
      }, 350);
    } else {
      tasks.forEach((task, index) => {
        const classification = window.m12AnalyzeTask(task);
        window.m12Tasks.push({
          text: task,
          q: classification.quadrant,
          reason: classification.reason,
          action: classification.action,
          id: Date.now() + index
        });
      });
      m12RenderTasks();
    }

    input.value = '';
  };

  window.m12EscapeHtml = function(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  window.m12NormalizeText = function(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  window.m12AnalyzeTask = function(task) {
    const t = window.m12NormalizeText(task);

    const urgentSignals = ['hoy', 'manana', 'urgente', 'ya', 'inmediato', 'plazo', 'vence', 'vencimiento', 'entrega', 'cierre', 'crisis', 'emergencia', 'bloqueo', 'fallo', 'antes de', 'esta tarde', 'ahora', 'ultimo dia'];
    const importantSignals = ['cliente', 'jefe', 'direccion', 'director', 'gerencia', 'proyecto', 'evaluacion', 'informe', 'presupuesto', 'proveedor', 'pago', 'contrato', 'auditoria', 'estrategia', 'presentacion', 'financiero', 'legal', 'riesgo', 'salud', 'equipo', 'examen', 'final', 'entregable', 'clase', 'universidad', 'trabajo final', 'nota'];
    const personalImportantSignals = ['gimnasio', 'gym', 'ejercicio', 'medico', 'doctor', 'salud', 'terapia', 'descansar', 'dormir', 'almorzar', 'cenar', 'comer', 'familia'];
    const delegableSignals = ['correo', 'correos', 'responder', 'mensajes', 'seguimiento', 'reunion', 'agenda', 'llamada', 'tramite', 'actualizar', 'registrar', 'formato', 'acta'];
    const lowValueSignals = ['youtube', 'redes', 'twitter', 'instagram', 'facebook', 'tiktok', 'revisar noticias', 'curiosear', 'navegar', 'scroll', 'memes'];

    let urgentScore = 0;
    let importantScore = 0;
    let delegableScore = 0;
    let lowValueScore = 0;

    urgentSignals.forEach(word => { if (t.includes(word)) urgentScore += 2; });
    importantSignals.forEach(word => { if (t.includes(word)) importantScore += 2; });
    personalImportantSignals.forEach(word => { if (t.includes(word)) importantScore += 2; });
    delegableSignals.forEach(word => { if (t.includes(word)) delegableScore += 1; });
    lowValueSignals.forEach(word => { if (t.includes(word)) lowValueScore += 2; });

    if (/\b(hoy|manana|antes de|esta tarde|ahora)\b/.test(t)) urgentScore += 2;
    if (/\b(plan|planear|disenar|organizar|investigar|estudiar|mejorar|preparar)\b/.test(t)) importantScore += 2;
    if (/\b(final|entrega final|evaluacion final|examen final|sustentacion)\b/.test(t)) {
      importantScore += 4;
      urgentScore += 1;
    }
    if (/\b(pagar proveedores|cerrar presupuesto|subir evaluacion|enviar informe|entregar presentacion|pagar nomina)\b/.test(t)) {
      importantScore += 4;
    }
    if (/\b(correo urgente|correos urgentes|mensaje urgente|llamada urgente)\b/.test(t)) {
      urgentScore += 2;
    }
    if (/\b(gimnasio|gym|ejercicio|medico|terapia|cenar|almorzar|comer)\b/.test(t) && urgentScore === 0) {
      importantScore += 1;
    }

    let quadrant = 'q4';
    let reason = 'No muestra suficiente impacto ni urgencia para priorizarla ahora.';
    let action = 'Elimínala o déjala para después si sigue siendo relevante.';

    if (lowValueScore >= 2 && importantScore <= 1) {
      quadrant = 'q4';
      reason = 'Se parece más a una distracción o actividad de bajo impacto.';
      action = 'Evítala o déjala fuera de tu bloque de trabajo.';
      return { quadrant, reason, action };
    }

    if (importantScore >= 3 && urgentScore >= 3) {
      quadrant = 'q1';
      reason = 'Combina impacto alto con presión de tiempo o vencimiento cercano.';
      action = 'Hazla hoy y priorízala antes que el resto.';
    } else if (importantScore >= 3) {
      quadrant = 'q2';
      reason = 'Es importante para tus resultados, salud o compromisos, pero no exige reacción inmediata.';
      action = 'Planifícala en agenda con una hora concreta.';
    } else if (urgentScore >= 3 && delegableScore >= 1) {
      quadrant = 'q3';
      reason = 'Requiere atención rápida, pero su valor principal es operativo o delegable.';
      action = 'Delégala, automatízala o resuélvela rápido con un límite de tiempo.';
    } else if (urgentScore >= 3 && importantScore >= 1) {
      quadrant = 'q1';
      reason = 'Tiene urgencia real y un nivel de impacto suficiente para atenderla hoy.';
      action = 'Hazla cuanto antes y evita posponerla.';
    } else if (delegableScore >= 1 && importantScore <= 1) {
      quadrant = 'q3';
      reason = 'Es una tarea operativa o de interrupción que no debería consumir tu mejor tiempo.';
      action = 'Agrúpala, delégala o resuélvela en un bloque corto.';
    } else if (importantScore >= 2) {
      quadrant = 'q2';
      reason = 'Aporta valor y conviene protegerla en tu planificación.';
      action = 'Programa un espacio específico para completarla.';
    }

    return { quadrant, reason, action };
  };

  window.m12AddExampleTask = function(text) {
    const input = document.getElementById('m12-task-input');
    if (!input) return;
    const current = input.value.trim();
    input.value = current ? `${current}\n${text}` : text;
    input.focus();
  };

  window.m12RenderTasks = function() {
    const quadrantLabels = {
      q1: 'Hacer hoy',
      q2: 'Planificar',
      q3: 'Delegar o simplificar',
      q4: 'Eliminar o posponer'
    };

    ['q1','q2','q3','q4'].forEach(q => {
      const container = document.getElementById('m12-' + q + '-content');
      if (!container) return;
      
      const quadrantTasks = window.m12Tasks.filter(t => t.q === q);
      container.innerHTML = quadrantTasks.length
        ? quadrantTasks.map(t => `
          <div class="m12-task-pill animate-in" style="animation-delay: 0.1s;">
            <div class="m12-task-main">
              <div class="m12-task-topline">
                <span class="m12-task-pin">📌</span>
                <span class="m12-task-text">${window.m12EscapeHtml(t.text)}</span>
                <button onclick="m12RemoveTask(${t.id})" class="m12-task-remove" aria-label="Eliminar tarea">×</button>
              </div>
              <div class="m12-task-meta">
                <span class="m12-task-badge">${quadrantLabels[q]}</span>
                <span class="m12-task-reason">${window.m12EscapeHtml(t.reason || '')}</span>
              </div>
              <div class="m12-task-action">${window.m12EscapeHtml(t.action || '')}</div>
            </div>
          </div>
        `).join('')
        : `<div class="m12-empty-state">Sin tareas todavía.</div>`;
    });

    const summary = document.getElementById('m12-summary');
    if (summary) {
      const q1 = window.m12Tasks.filter(t => t.q === 'q1').length;
      const q2 = window.m12Tasks.filter(t => t.q === 'q2').length;
      const q3 = window.m12Tasks.filter(t => t.q === 'q3').length;
      const q4 = window.m12Tasks.filter(t => t.q === 'q4').length;
      summary.innerHTML = `
        <span class="m12-summary-chip danger">Hoy: ${q1}</span>
        <span class="m12-summary-chip success">Planificar: ${q2}</span>
        <span class="m12-summary-chip warning">Delegar: ${q3}</span>
        <span class="m12-summary-chip neutral">Eliminar: ${q4}</span>
      `;
    }
  };

  window.m12RemoveTask = function(id) {
    window.m12Tasks = window.m12Tasks.filter(t => t.id !== id);
    m12RenderTasks();
  };

  window.m12ResetMatrix = function() {
    window.m12Tasks = [];
    m12RenderTasks();
    window.showToast('Matriz reiniciada', 'warning');
  };

  window.m12CopyEisenhowerPrompt = function() {
    if (window.m12Tasks.length === 0) {
      window.showToast('Primero agrega algunas tareas', 'warning');
      return;
    }
    
    const labels = {
      q1: 'Urgente e importante',
      q2: 'Importante y no urgente',
      q3: 'Urgente y delegable',
      q4: 'Baja prioridad'
    };
    const taskList = window.m12Tasks.map(t => `- ${t.text} (${labels[t.q] || t.q}). Motivo: ${t.reason}. Acción sugerida: ${t.action}.`).join('\n');
    const prompt = `Actúa como un experto en productividad y metodología Eisenhower. 
He clasificado las siguientes tareas en mi matriz:
${taskList}

Por favor, analiza mi lista y:
1. Valida si la clasificación es correcta según la metodología.
2. Sugiere un plan de acción para hoy, indicando por cuál tarea debo empezar, cuál debo programar, cuál puedo delegar y cuál conviene eliminar.
3. Motívame con un consejo breve sobre gestión del tiempo.`;

    navigator.clipboard.writeText(prompt);
    window.showToast('Prompt Maestro copiado al portapapeles 🚀', 'success');
    window.app && window.app.addXP(25);
  };

  const modules = {

/* ══════════════════════════════════════════════════════════════
   MÓDULO 11 — ANÁLISIS PROFUNDO CON IA
   ══════════════════════════════════════════════════════════════ */
'module-11': `
<style>
  .m11-drop-zone { border: 2px dashed rgba(16,185,129,0.5); border-radius: 12px; padding: 30px; text-align: center; background: rgba(16,185,129,0.02); transition: all 0.3s; cursor: default; margin-top:15px; }
  .m11-drop-zone.active { border-color: #10b981; background: rgba(16,185,129,0.1); transform: scale(1.02); }
  .m11-pdf-icon { font-size: 3rem; margin-bottom: 15px; color: #10b981; }
  .m11-tool-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 14px; padding: 20px; transition: all 0.25s; }
  .m11-tool-card:hover { border-color: var(--primary); transform: translateY(-3px); }
  .m11-chat-bubble { background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; margin-bottom: 10px; font-size: 0.85rem; }
  .m11-chat-bubble.ai { background: rgba(37,99,235,0.1); border-left: 3px solid #2563eb; }
</style>

<div class="module-header premium-header">
  <div class="module-number gamer-badge">Módulo 11 — Nivel Experto</div>
  <h2 class="module-title glow-text">🕵️ Análisis Profundo (Gestión y Finanzas)</h2>
  <p class="module-description">Domina el análisis de presupuestos, leyes y expedientes masivos. Aprende a chatear con cientos de páginas para extraer datos financieros y estratégicos con precisión quirúrgica.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 45 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Analista Maestro</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m11-lab">🧪 Simulador NotebookLM</button>
  <button class="tab-btn" data-tab="m11-claude-projects">🎭 Claude Projects</button>
  <button class="tab-btn" data-tab="m11-tools">🧰 Motores de Búsqueda</button>
  <button class="tab-btn" data-tab="m11-prompts">📋 Prompts de Análisis</button>
  <button class="tab-btn" data-tab="m11-game">🎮 Juego de Datos</button>
  <button class="tab-btn" data-tab="m11-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: LABORATORIO -->
<div id="m11-lab" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">📑</span> Simulador: Chateando con Documentos</h3>
    <p>Experimenta cómo funciona NotebookLM o Claude al subir un PDF largo.</p>
    
    <div id="m11-drop" class="m11-drop-zone" onclick="m11LoadPDF()">
      <div class="m11-pdf-icon">📄</div>
      <h4 style="margin:0 0 8px;">Plan_Desarrollo_2024_2028.pdf (250 pág.)</h4>
      <p style="font-size:0.8rem;opacity:0.7;margin:0;">Haz clic para "subir" el documento al simulador</p>
    </div>

    <div id="m11-chat-interface" style="display:none;margin-top:20px;border:1px solid #333;border-radius:12px;overflow:hidden;">
      <div style="background:#1a1a2e;padding:12px 18px;border-bottom:1px solid #333;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-weight:700;font-size:0.85rem;">🧠 Documento Conectado (250 págs)</span>
        <span style="font-size:0.7rem;background:#10b981;padding:2px 8px;border-radius:10px;color:#000;">Listo</span>
      </div>
      <div id="m11-chat-history" style="padding:20px;height:250px;overflow-y:auto;background:#0d1117;">
        <div class="m11-chat-bubble ai"><b>Asistente IA:</b> He analizado el "Plan de Desarrollo 2024-2028". El documento contiene 5 ejes estratégicos, 120 metas y un presupuesto proyectado. ¿Qué te gustaría saber?</div>
      </div>
      <div style="padding:15px;background:#1a1a2e;border-top:1px solid #333;display:flex;gap:10px;">
        <select id="m11-query" style="flex:1;padding:10px;background:#050a0e;border:1px solid #444;border-radius:8px;color:#fff;font-size:0.85rem;">
          <option value="q1">Resume el eje estratégico de Tecnología</option>
          <option value="q2">¿Cuáles son los riesgos asociados al presupuesto?</option>
          <option value="q3">Encuentra todas las menciones sobre "teletrabajo"</option>
          <option value="q4">Compara la meta 3.1 con la meta 5.2</option>
        </select>
        <button class="gl-btn gl-btn-primary" onclick="m11Ask()">Preguntar</button>
      </div>
    </div>
    <div class="pista-ia" style="margin-top:20px;">
      💡 <strong>Aplicación Real:</strong> Herramientas como <b>NotebookLM de Google</b> (gratis) hacen exactamente esto. Sube hasta 50 PDFs y haz preguntas cruzadas sobre todos ellos a la vez.
    </div>

  </div>
</div>

<!-- TAB: CLAUDE PROJECTS (NUEVO) -->
<div id="m11-claude-projects" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#f59e0b;">🎭 Claude Projects: Tu Biblioteca Inteligente</h3>
    <p>Mientras que las Gemas son "agentes rápidos", los <b>Proyectos de Claude</b> son bibliotecas de conocimiento. Puedes subir hasta 30 MB de documentos y la IA solo responderá basándose en ellos.</p>
    
    <div style="background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.2); border-radius:12px; padding:20px; margin:20px 0;">
      <h4 style="color:#f59e0b; margin-top:0;">🚀 Ejercicio: El Auditor de Expedientes</h4>
      <p style="font-size:0.85rem;">Crea un Proyecto en Claude para auditar la coherencia entre diferentes documentos de un mismo proceso.</p>
      
      <div style="background:#0d1117; padding:15px; border-radius:8px; margin-bottom:15px;">
        <p style="font-size:0.75rem; font-weight:700; color:#fbd38d;">1. Custom Instructions para el Proyecto</p>
        <div id="m11-claude-inst" style="font-size:0.7rem; color:#8b949e; font-style:italic; margin-bottom:10px;">
          "Actúa como un Auditor Senior de Calidad. Tu objetivo es cruzar la información de todos los documentos subidos a este proyecto. Busca inconsistencias en fechas, nombres y montos entre los diferentes archivos. Si no hay inconsistencias, felicita al equipo. Formato de reporte: [ARCHIVOS ANALIZADOS], [HALLAZGOS CRÍTICOS], [NIVEL DE CUMPLIMIENTO]."
        </div>
        <button class="gl-btn small" style="width:100%; border-color:#f59e0b; color:#f59e0b;" onclick="navigator.clipboard.writeText(document.getElementById('m11-claude-inst').innerText); window.showToast('Instrucciones copiadas','success');">📋 Copiar para Claude</button>
      </div>

      <div class="pista-ia">
        💡 <b>Uso Maestra:</b> Sube el "Manual de Contratación" y el "Pliego de Condiciones" a un mismo Proyecto. Luego pregúntale: "¿El pliego de condiciones cumple con todos los puntos obligatorios del manual?". Claude lo hará en segundos.
      </div>
    </div>
  </div>
</div>
<div id="m11-tools" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧰</span> Tu Arsenal de Investigación</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:15px;margin-top:20px;">
      <div class="m11-tool-card" onclick="window.open('https://notebooklm.google.com','_blank')">
        <h4 style="margin:0 0 8px;color:#2563eb;font-size:1.1rem;">📓 Google NotebookLM</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Sube PDFs, txt o URLs. La IA responde basándose <b>únicamente</b> en tus documentos. Cero alucinaciones.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#2563eb22;color:#60a5fa;">100% Gratis</span>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://perplexity.ai','_blank')">
        <h4 style="margin:0 0 8px;color:#10b981;font-size:1.1rem;">🔍 Perplexity AI</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Motor de búsqueda moderno. Encuentra leyes, noticias y datos fiscales con <b>citas exactas</b> y enlaces a las fuentes.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#10b98122;color:#34d399;">Gratis / Pro</span>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://claude.ai','_blank')">
        <h4 style="margin:0 0 8px;color:#f59e0b;font-size:1.1rem;">🧠 Claude (Anthropic)</h4>
        <p style="font-size:0.8rem;opacity:0.8;">La IA con mayor capacidad de lectura. Sube un libro entero o un contrato largo de 100 páginas y lo analizará perfectamente.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#f59e0b22;color:#fbbf24;">Freemium</span>
      </div>
      <div class="m11-tool-card" onclick="window.open('https://chat.deepseek.com','_blank')">
        <h4 style="margin:0 0 8px;color:#8b5cf6;font-size:1.1rem;">🟣 DeepSeek R1</h4>
        <p style="font-size:0.8rem;opacity:0.8;">Motor de razonamiento lógico. Ideal para cruzar datos financieros, analizar normativas complejas o encontrar errores lógicos.</p>
        <span class="m6-tool-badge" style="margin-top:10px;display:inline-block;padding:4px 10px;background:#8b5cf622;color:#a78bfa;">Gratis</span>
      </div>
    </div>
  </div>
</div>

<!-- TAB 3: PROMPTS -->
<div id="m11-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📋</span> Prompts de Análisis Documental</h3>
    <p>Úsalos en Claude, ChatGPT o NotebookLM después de subir tu documento.</p>
    <div style="display:flex;flex-direction:column;gap:14px;margin-top:20px;">
      ${[
        {tag:'RESUMEN EJECUTIVO',color:'#2563eb',text:'Lee el documento adjunto y elabora un resumen ejecutivo de 1 página estructurado así: 1) Contexto e Importancia, 2) 5 Puntos Clave en bullets, 3) Conclusiones principales, 4) Siguientes pasos o accionables implícitos en el texto.'},
        {tag:'ANÁLISIS DE RIESGOS',color:'#ef4444',text:'Actúa como auditor experto. Analiza este contrato/documento y extrae todos los posibles riesgos legales, operativos o financieros. Crea una tabla con 3 columnas: [Riesgo Detectado] | [Nivel de Gravedad (Alto/Medio/Bajo)] | [Cita o página de referencia original].'},
        {tag:'COMPARACIÓN (Sube 2 PDFs)',color:'#f59e0b',text:'Compara el "Documento A" (Versión anterior) con el "Documento B" (Versión actual). Enumera exactamente qué políticas, cláusulas o números han cambiado. Ignora cambios menores de formato o redacción, céntrate en cambios de fondo y reglas.'},
        {tag:'EXTRACCIÓN DE REQUISITOS',color:'#10b981',text:'Lee estas 50 páginas de pliego de condiciones. Extrae ÚNICAMENTE los requisitos habilitantes (financieros, legales y de experiencia) que debe cumplir un proponente. Preséntalos como una lista de verificación (checklist).'}
      ].map(p=>`
      <div class="ag-prompt-card" style="border-color:${p.color};">
        <div style="font-weight:700;font-size:0.7rem;color:${p.color};margin-bottom:8px;">${p.tag}</div>
        <p style="font-size:0.82rem;margin-bottom:12px;">${p.text}</p>
        <button class="gl-btn small" style="border-color:${p.color};color:${p.color};" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent);window.showToast('Prompt copiado ✨','success');window.app&&window.app.addXP(20);">📋 Copiar</button>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- TAB 4: JUEGO -->
<div id="m11-game" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🎮</span> Investigación Rápida</h3>
    <p>¿Qué herramienta o técnica usarías en estos escenarios laborales?</p>
    <div id="m11-quiz" style="margin-top:20px;">
      <button class="gl-btn gl-btn-primary" style="width:100%" onclick="initM11Quiz()">🔎 Iniciar Reto</button>
    </div>
  </div>
</div>

<!-- TAB 5: MISIÓN -->
<div id="m11-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🕵️</span><span class="exercise-title">Misión 11: El Analista Maestro</span></div>
    <div class="preparation-step" style="background: rgba(37,99,235,0.1); border: 1px solid #2563eb; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #2563eb;">
      <h4 style="margin-top: 0; color: #2563eb; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, abre <b>NotebookLM</b> (notebooklm.google.com) y prepara un documento oficial de tu área (no sensible) en formato PDF.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(37,99,235,0.05);padding:20px;border-radius:12px;border-left:4px solid #2563eb;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Abre <b>NotebookLM</b> (notebooklm.google.com).</li>
        <li>Sube un documento real de tu trabajo (un manual, un decreto, un informe largo) que no sea confidencial.</li>
        <li>Usa el prompt de "Análisis de Riesgos" o "Resumen Ejecutivo".</li>
        <li>Opcional: Prueba la herramienta de "Audio Overview" para que la IA cree un podcast sobre tu documento.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Nombra el documento que subiste y describe brevemente qué extrajo la IA que te sorprendió o te resultó útil..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Analista Maestro 🕵️</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-11" style="width:100%;margin-top:15px;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-10">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-12">Siguiente: Proyectos y Cronogramas →</button>
</div>
`,

/* ══════════════════════════════════════════════════════════════
   MÓDULO 12 — PROYECTOS Y CRONOGRAMAS
   ══════════════════════════════════════════════════════════════ */
'module-12': `
<style>
  .m12-wbs-card { background: rgba(255,255,255,0.02); border: 1px solid #333; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 12px 16px; margin: 8px 0; font-size: 0.85rem; }
  .m12-wbs-title { font-weight: 700; color: #fcd34d; margin-bottom: 4px; }
  .m12-subtask { margin-left: 20px; border-left: 1px solid #444; padding-left: 12px; margin-top: 6px; color: #cbd5e1; }
  .m12-matrix { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
  .m12-quadrant { border-radius: 12px; padding: 15px; min-height: 120px; transition: all 0.2s; }
  .m12-q1 { background: rgba(239,68,68,0.1); border: 1px solid #ef4444; }
  .m12-q2 { background: rgba(16,185,129,0.1); border: 1px solid #10b981; }
  .m12-q3 { background: rgba(245,158,11,0.1); border: 1px solid #f59e0b; }
  .m12-q4 { background: rgba(100,116,139,0.1); border: 1px solid #64748b; }
</style>

<div class="module-header premium-header">
  <div class="module-number gamer-badge">Módulo 12 — Nivel PRO</div>
  <h2 class="module-title glow-text">🚀 Gestión de Proyectos y Diseño</h2>
  <p class="module-description">Del caos a la ejecución visual. Aprende a usar la Ley de Eisenhower para priorizar y la IA para diseñar cronogramas, WBS y presentaciones de impacto.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 35 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Project Manager IA</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m12-lab">🏗️ Creador WBS</button>
  <button class="tab-btn" data-tab="m12-matrix">🧭 Matriz Priorización</button>
  <button class="tab-btn" data-tab="m12-prompts">📋 Prompts Gestión</button>
  <button class="tab-btn" data-tab="m12-mission">⚔️ Misión</button>
</div>

<!-- TAB 1: LABORATORIO WBS -->
<div id="m12-lab" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🏗️</span> Estructura de Desglose de Trabajo (WBS)</h3>
    <p>El primer paso de un proyecto no es el calendario, es definir <b>todas</b> las tareas. La IA es experta en no olvidar ningún detalle.</p>
    
    <div style="background:var(--bg-glass);border:1px solid rgba(245,158,11,0.3);border-radius:14px;padding:22px;margin-top:20px;">
      <label style="font-size:0.75rem;font-weight:700;opacity:0.7;">¿DE QUÉ ES TU PROYECTO O EVENTO?</label>
      <input id="m12-project" type="text" placeholder="Ej: Organizar la feria de servicios al ciudadano 2024..." style="width:100%;margin-top:8px;padding:12px;background:#0d1117;border:1px solid #f59e0b;border-radius:8px;color:#fff;font-size:0.9rem;">
      
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:15px 0;">
        <div>
          <label style="font-size:0.75rem;font-weight:700;opacity:0.7;">TIEMPO TOTAL</label>
          <select id="m12-time" style="width:100%;margin-top:8px;padding:10px;background:#0d1117;border:1px solid #333;border-radius:8px;color:#fff;">
            <option value="1 semana">1 Semana</option>
            <option value="1 mes">1 Mes</option>
            <option value="3 meses">3 Meses</option>
          </select>
        </div>
        <div>
          <label style="font-size:0.75rem;font-weight:700;opacity:0.7;">EQUIPO</label>
          <select id="m12-team" style="width:100%;margin-top:8px;padding:10px;background:#0d1117;border:1px solid #333;border-radius:8px;color:#fff;">
            <option value="yo solo">Yo solo (1 persona)</option>
            <option value="equipo pequeño (3-5 personas)">Equipo Pequeño (3-5)</option>
            <option value="múltiples departamentos">Múltiples áreas</option>
          </select>
        </div>
      </div>
      
      <button onclick="m12GenWBS()" class="gl-btn gl-btn-primary" style="width:100%;background:#f59e0b;color:#000;font-weight:700;">🪄 Autogenerar Estructura (WBS)</button>
    </div>

    <div id="m12-wbs-output" style="display:none;margin-top:20px;">
      <h4 style="margin-bottom:15px;">📑 Propuesta de Desglose Generada:</h4>
      <div id="m12-wbs-list"></div>
      <button class="gl-btn" style="width:100%;margin-top:15px;border-color:#f59e0b;color:#f59e0b;" onclick="m12CopyWBS()">📋 Copiar para pegar en Excel/Project</button>
    </div>
  </div>
</div>

<!-- TAB 2: MATRIZ EISENHOWER + IA [SOVEREIGN v31.4] -->
<div id="m12-matrix" class="ag-content">
  <div class="section-card animate-in" style="background: rgba(13, 17, 23, 0.4); border: 1px solid rgba(255, 255, 255, 0.05);">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h3 style="margin:0;"><span class="icon">🧭</span> Matriz de Priorización Sensitiva</h3>
      <div style="display: flex; gap: 8px;">
        <button class="gl-btn small" style="border-color: #f59e0b; color: #f59e0b;" onclick="m12CopyEisenhowerPrompt()">🚀 Forjar Prompt Maestro</button>
        <button class="gl-btn small" style="opacity: 0.6;" onclick="m12ResetMatrix()">🗑️ Reiniciar</button>
      </div>
    </div>
    
    <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 14px;">
      Escribe una o varias tareas, una por línea o separadas por punto y coma. El sistema analizará plazo, impacto y posibilidad de delegación para ubicarlas con más coherencia.
    </p>

    <div class="m12-helper-row">
      <button class="m12-example-chip" onclick="m12AddExampleTask('Entregar informe financiero al director mañana a las 8 a.m.')">Informe urgente</button>
      <button class="m12-example-chip" onclick="m12AddExampleTask('Planear cronograma del proyecto del próximo mes')">Planificación</button>
      <button class="m12-example-chip" onclick="m12AddExampleTask('Responder correos operativos pendientes')">Correos</button>
      <button class="m12-example-chip" onclick="m12AddExampleTask('Revisar redes sociales')">Distracción</button>
    </div>
    
    <div class="m12-input-group" style="position: relative; margin-bottom: 18px;">
      <textarea id="m12-task-input" placeholder="Ejemplos:
Entregar presentación al jefe mañana
Pagar proveedores esta tarde
Planear auditoría del próximo mes
Responder correos pendientes"
             style="width:100%; min-height: 124px; padding: 16px 20px 68px; resize: vertical; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; color: #fff; font-size: 0.95rem; line-height: 1.55; font-family: inherit; outline: none; transition: all 0.3s;"
             onkeydown="if((event.ctrlKey||event.metaKey)&&event.key==='Enter') m12Classify()"></textarea>
      <button class="gl-btn gl-btn-primary m12-classify-btn" onclick="m12Classify()" 
              style="position: absolute; right: 10px; bottom: 10px; padding: 0 20px; height: 42px; border-radius: 10px; font-weight: 800; font-size: 0.85rem; background: var(--accent-gradient);">
        Clasificar tareas
      </button>
    </div>

    <div class="m12-toolbar">
      <div class="m12-input-tip">Consejo: usa <b>Ctrl + Enter</b> para clasificar más rápido.</div>
      <div id="m12-summary" class="m12-summary"></div>
    </div>

    <style>
      .m12-helper-row { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:14px; }
      .m12-example-chip {
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(255,255,255,0.04);
        color: #cbd5e1;
        border-radius: 999px;
        padding: 8px 12px;
        font-size: 0.76rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .m12-example-chip:hover { background: rgba(99,102,241,0.14); border-color: rgba(99,102,241,0.28); color: #fff; }
      .m12-toolbar { display:flex; justify-content:space-between; align-items:center; gap:14px; margin-bottom: 18px; flex-wrap:wrap; }
      .m12-input-tip { color:#94a3b8; font-size:0.78rem; }
      .m12-summary { display:flex; flex-wrap:wrap; gap:8px; }
      .m12-summary-chip {
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 0.74rem;
        font-weight: 700;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
      }
      .m12-summary-chip.danger { color:#fca5a5; }
      .m12-summary-chip.success { color:#86efac; }
      .m12-summary-chip.warning { color:#fcd34d; }
      .m12-summary-chip.neutral { color:#a5b4fc; }
      .m12-matrix-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; perspective: 1000px; }
      .m12-quadrant-lux { 
        background: rgba(15, 23, 42, 0.6); 
        backdrop-filter: blur(20px); 
        border: 1px solid rgba(255, 255, 255, 0.08); 
        border-radius: 20px; 
        padding: 20px; 
        min-height: 220px; 
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        overflow: hidden;
      }
      .m12-quadrant-lux:hover { transform: translateY(-5px) scale(1.02); border-color: rgba(255,255,255,0.2); }
      
      .m12-q1-lux { border-top: 4px solid #ef4444; }
      .m12-q1-lux:hover { box-shadow: 0 10px 30px rgba(239, 68, 68, 0.2); }
      
      .m12-q2-lux { border-top: 4px solid #10b981; }
      .m12-q2-lux:hover { box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2); }
      
      .m12-q3-lux { border-top: 4px solid #f59e0b; }
      .m12-q3-lux:hover { box-shadow: 0 10px 30px rgba(245, 158, 11, 0.2); }
      
      .m12-q4-lux { border-top: 4px solid #6366f1; }
      .m12-q4-lux:hover { box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2); }
      
      .m12-task-pill { 
        background: rgba(255,255,255,0.05); 
        border: 1px solid rgba(255,255,255,0.1); 
        border-radius: 12px; 
        padding: 12px; 
        margin-bottom: 10px; 
        font-size: 0.8rem; 
        display: block; 
        animation: slideInRight 0.3s ease-out forwards;
      }
      .m12-task-main { display:flex; flex-direction:column; gap:8px; }
      .m12-task-topline { display:flex; align-items:flex-start; gap:8px; }
      .m12-task-text { flex: 1; color: #e2e8f0; line-height:1.45; }
      .m12-task-meta { display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
      .m12-task-badge {
        display:inline-flex;
        align-items:center;
        padding: 4px 8px;
        border-radius: 999px;
        background: rgba(255,255,255,0.06);
        color:#cbd5e1;
        font-size:0.68rem;
        font-weight:800;
        text-transform:uppercase;
        letter-spacing:0.4px;
      }
      .m12-task-reason { color:#94a3b8; font-size:0.72rem; line-height:1.4; }
      .m12-task-action { color:#e2e8f0; font-size:0.74rem; line-height:1.45; }
      .m12-task-remove { background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1.1rem; opacity: 0.4; transition: 0.2s; }
      .m12-task-remove:hover { opacity: 1; transform: scale(1.2); }
      .m12-empty-state {
        color:#64748b;
        font-size:0.8rem;
        border: 1px dashed rgba(255,255,255,0.08);
        border-radius: 12px;
        padding: 14px;
        margin-top: 8px;
      }
      
      @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
      
      .q-icon { font-size: 1.2rem; margin-bottom: 10px; display: block; }
      @media (max-width: 900px) {
        .m12-matrix-grid { grid-template-columns: 1fr; }
      }
    </style>

    <div class="m12-matrix-grid">
      <!-- Q1 -->
      <div class="m12-quadrant-lux m12-q1-lux" id="m12-q1-box">
        <span class="q-icon">🚨</span>
        <h4 style="color:#ef4444; margin:0 0 4px; font-size:0.85rem; font-weight:800; text-transform:uppercase;">1. URGENTE + IMPORTANTE</h4>
        <div style="font-size:0.65rem; color:#94a3b8; font-weight:700; margin-bottom:8px; letter-spacing:0.5px;">PROXIMIDAD: CRISIS / PLAZOS</div>
        <div style="font-size:0.74rem; color:#cbd5e1; margin-bottom:15px;">Haz primero lo que vence pronto o bloquea un resultado importante.</div>
        <div id="m12-q1-content"></div>
      </div>
      
      <!-- Q2 -->
      <div class="m12-quadrant-lux m12-q2-lux" id="m12-q2-box">
        <span class="q-icon">📅</span>
        <h4 style="color:#10b981; margin:0 0 4px; font-size:0.85rem; font-weight:800; text-transform:uppercase;">2. NO URGENTE + IMPORTANTE</h4>
        <div style="font-size:0.65rem; color:#94a3b8; font-weight:700; margin-bottom:8px; letter-spacing:0.5px;">ESTRATEGIA / PRODUCTIVIDAD</div>
        <div style="font-size:0.74rem; color:#cbd5e1; margin-bottom:15px;">Programa estas tareas porque construyen valor, aunque no urjan hoy.</div>
        <div id="m12-q2-content"></div>
      </div>
      
      <!-- Q3 -->
      <div class="m12-quadrant-lux m12-q3-lux" id="m12-q3-box">
        <span class="q-icon">⚡</span>
        <h4 style="color:#f59e0b; margin:0 0 4px; font-size:0.85rem; font-weight:800; text-transform:uppercase;">3. URGENTE + NO IMPORTANTE</h4>
        <div style="font-size:0.65rem; color:#94a3b8; font-weight:700; margin-bottom:8px; letter-spacing:0.5px;">DELEGABLE / INTERRUPCIONES</div>
        <div style="font-size:0.74rem; color:#cbd5e1; margin-bottom:15px;">Atiéndelas rápido o pásalas a otra persona si no requieren tu foco principal.</div>
        <div id="m12-q3-content"></div>
      </div>
      
      <!-- Q4 -->
      <div class="m12-quadrant-lux m12-q4-lux" id="m12-q4-box">
        <span class="q-icon">🌊</span>
        <h4 style="color:#6366f1; margin:0 0 4px; font-size:0.85rem; font-weight:800; text-transform:uppercase;">4. NO URGENTE + NO IMPORT</h4>
        <div style="font-size:0.65rem; color:#94a3b8; font-weight:700; margin-bottom:8px; letter-spacing:0.5px;">ELIMINABLE / DISTRACCIONES</div>
        <div style="font-size:0.74rem; color:#cbd5e1; margin-bottom:15px;">Cuestiónalas antes de invertir tiempo: muchas pueden esperar o desaparecer.</div>
        <div id="m12-q4-content"></div>
      </div>
    </div>

    <div class="pista-ia" style="margin-top:25px; background: rgba(99, 102, 241, 0.05); border: 1px dashed rgba(99, 102, 241, 0.3); padding: 15px; border-radius: 12px;">
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:1.5rem;">💡</span>
        <p style="font-size:0.8rem; margin:0; line-height:1.5;">
          <strong>PRO TIP:</strong> Una vez clasifiques tus tareas, usa el botón <b>"Forjar Prompt Maestro"</b> para que una IA avanzada (como DeepSeek R1) te ayude a optimizar tu agenda diaria con un plan de acción quirúrgico.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- TAB 3: PROMPTS -->
<div id="m12-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📋</span> Prompts de Project Management</h3>
    <p>Plantillas para automatizar tu gestión de proyectos.</p>
    <div style="display:flex;flex-direction:column;gap:14px;margin-top:20px;">
      ${[
        {tag:'CREAR CRONOGRAMA GANTT',color:'#f59e0b',text:'Actúa como Project Manager experto. Crea un cronograma de 4 semanas para [Proyecto]. Incluye en una tabla formato markdown: Fase, Tarea específica, Duración en días, y Dependencia (qué tarea debe terminar antes).'},
        {tag:'ANÁLISIS DE RIESGOS PMP',color:'#ef4444',text:'Para el proyecto de [Tema], identifica los 5 riesgos pre-mortem más probables. Para cada uno indica: Probabilidad (Alta/Media/Baja), Impacto, y un Plan de Mitigación concreto.'},
        {tag:'PLANTILLA DE ACTA DE REUNIÓN',color:'#10b981',text:'Toma estas notas desordenadas de mi reunión: [PEGAR NOTAS]. Conviértelas en un acta profesional. Estructura: 1) Decisiones tomadas, 2) Tareas asignadas (con responsable), 3) Puntos pendientes. Usa formato de bullets limpios.'},
        {tag:'CORREO DE SEGUIMIENTO A EQUIPO',color:'#2563eb',text:'Redacta un correo corto (tono firme pero empático) solicitando estatus a mi equipo sobre el proyecto [Nombre]. Estamos a 3 días de la fecha límite y nadie ha reportado avances. Pide actualización para hoy antes de las 5pm.'}
      ].map(p=>`
      <div class="ag-prompt-card" style="border-color:${p.color};">
        <div style="font-weight:700;font-size:0.7rem;color:${p.color};margin-bottom:8px;">${p.tag}</div>
        <p style="font-size:0.82rem;margin-bottom:12px;">${p.text}</p>
        <button class="gl-btn small" style="border-color:${p.color};color:${p.color};" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent);window.showToast('Prompt copiado ✨','success');window.app&&window.app.addXP(20);">📋 Copiar</button>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- TAB 4: MISIÓN -->
<div id="m12-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🚀</span><span class="exercise-title">Misión 12: El Arquitecto del Tiempo</span></div>
    <div class="preparation-step" style="background: rgba(245,158,11,0.1); border: 1px solid #f59e0b; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #f59e0b;">
      <h4 style="margin-top: 0; color: #f59e0b; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">🛠️ Preparación de la Plataforma</h4>
      <p style="font-size: 0.8rem; margin-bottom: 0; opacity: 0.9;">Antes de iniciar, define un proyecto o evento real que debas realizar este mes para usarlo como base en el generador WBS.</p>
    </div>
    <div class="mission-instructions" style="background:rgba(245,158,11,0.05);padding:20px;border-radius:12px;border-left:4px solid #f59e0b;margin:20px 0;">
      <strong>🎯 Tu Desafío:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Piensa en un proyecto que tengas que realizar este mes (Laboral o Personal).</li>
        <li>Usa el Creador WBS de este módulo para generar el prompt.</li>
        <li>Pégalo en ChatGPT, Claude o Copilot para obtener el desglose completo.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Pega aquí las fases principales generadas por la IA para tu proyecto..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Project Manager IA 🚀</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-12" style="width:100%;margin-top:15px;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn" data-goto="module-11">← Anterior</button>
  <button class="gl-btn gl-btn-primary" data-goto="module-13">Siguiente: Automatización Básica →</button>
</div>
`
  };

  for (const [id, html] of Object.entries(modules)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  return { init: function(app) { console.log('Initialized modules-11-12.js'); } };
})();
