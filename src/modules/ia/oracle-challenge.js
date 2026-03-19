window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-oracle'] = (function() {
/* ============================================
   EL ORÁCULO FRAGMENTADO - RETO FINAL
   ============================================ */

class OracleChallenge {
  constructor() {
    this.scores = {
      rap1: 0,
      rap2: 0,
      rap3: 0,
      rap4: 0
    };
    this.maxPerRap = 300; // Boss challenge

    this.challengeConfig = {
      rap1: {
        id: 'rap1',
        title: 'RAP 1: Arquitectura del Problema',
        desc: 'Identifica la arquitectura correcta (modelo) para procesar 10,000 PDFs legales y responder preguntas sobre ellos.',
        options: [
          { value: 'fine-tuning', text: 'Fine-tuning de un modelo base con los PDFs' },
          { value: 'rag', text: 'RAG (Retrieval-Augmented Generation) con base de datos vectorial', correct: true },
          { value: 'prompt', text: 'Prompt Engineering en ChatGPT copiando los PDFs' }
        ],
        feedbackCorrect: 'Existen demasiados PDFs para procesar en un solo prompt, y el fine-tuning no es ideal para retención de hechos precisos. RAG es la arquitectura correcta.',
        feedbackIncorrect: 'Revisa las limitaciones de contexto de los modelos y el costo del fine-tuning.'
      },
      rap2: {
        id: 'rap2',
        title: 'RAP 2: Ciber-Estructura del Mega-Prompt',
        desc: 'Construye la estructura de un Mega-Prompt encadenado en el orden correcto usando la metodología CREA.',
        options: [
          { value: 'a', text: 'Acción -> Rol -> Contexto -> Especificación' },
          { value: 'b', text: 'Contexto -> Rol -> Especificación -> Acción', correct: true },
          { value: 'c', text: 'Rol -> Contexto -> Acción -> Especificación' }
        ],
        feedbackCorrect: 'El formato CREA da contexto primero para anclar el espacio latente del modelo.',
        feedbackIncorrect: 'Recuerda el acrónimo: CREA.'
      },
      rap3: {
        id: 'rap3',
        title: 'RAP 3: Purga de Alucinación Crítica',
        desc: 'Identifica qué fragmento de esta respuesta generada por IA es una alucinación peligrosa en el contexto de la Ley 1581 (Datos Personales de Colombia):<br><br><i>"La Ley 1581 permite el tratamiento de datos sensibles sin autorización explícita si la empresa publica un aviso de privacidad en su web..."</i>',
        regexValid: /sensibles\s*sin\s*autorizaci[oó]n|sin\s*autorizaci[oó]n\s*expl[ií]cita/i,
        feedbackCorrect: '¡Bien detectado! Los datos sensibles en Colombia REQUIEREN explícitamente autorización previa y expresa.',
        feedbackIncorrect: 'Fallo crítico de diagnóstico. -20 pts.',
        penalty: 20
      },
      rap4: {
        id: 'rap4',
        title: 'RAP 4: Optimización de Flujo Empresarial',
        desc: 'Propón el flujo correcto para automatizar respuestas a correos de PQR (Peticiones, Quejas y Reclamos) usando IA.',
        options: [
          { value: 'a', text: 'Llega correo -> IA redacta respuesta final -> Envío automático al ciudadano' },
          { value: 'b', text: 'Llega correo -> IA clasifica resumen y borrador -> Humano aprueba -> Envío automático', correct: true },
          { value: 'c', text: 'Llega correo -> Envío automático de plantilla genérica -> IA espera a que el humano la lea' }
        ],
        feedbackCorrect: 'El "Human in the loop" es mandatorio en optimización de flujos con impacto ciudadano temprano.',
        feedbackIncorrect: 'Dejar a la IA respondiendo directamente sin supervisión inicial es un riesgo legal enorme.'
      }
    };
  }

  injectIntoDOM(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `<div class="oracle-container">
      <div class="oracle-header">
        <h2 class="neon-text">EL ORÁCULO FRAGMENTADO</h2>
        <p>Decodifica los nodos centrales para obtener tu certificación final.</p>
      </div>
      <div class="oracle-grid">
    `;

    // Render RAP 1
    html += this.renderMultipleChoice(this.challengeConfig.rap1);
    // Render RAP 2
    html += this.renderMultipleChoice(this.challengeConfig.rap2);
    // Render RAP 3 (Input Text)
    html += this.renderTextInput(this.challengeConfig.rap3);
    // Render RAP 4
    html += this.renderMultipleChoice(this.challengeConfig.rap4);

    html += `
      </div>
      <div class="oracle-actions">
        <button id="btn-generate-cert" class="gl-button neon-button" disabled>GENERAR CERTIFICADO DE RANGO</button>
      </div>
    </div>`;

    container.innerHTML = html;
    this.attachListeners();
  }

  renderMultipleChoice(challenge) {
    let opts = challenge.options.map(o => `
      <label class="oracle-radio">
        <input type="radio" name="${challenge.id}" value="${o.correct ? 'correct' : 'incorrect'}">
        <span class="radio-custom"></span>
        <span class="radio-text">${o.text}</span>
      </label>
    `).join('');

    return `
      <div class="oracle-card" id="card-${challenge.id}">
        <h3>${challenge.title}</h3>
        <p>${challenge.desc}</p>
        <div class="oracle-options">
          ${opts}
        </div>
        <button class="gl-button verify-btn" data-target="${challenge.id}">VERIFICAR NODO</button>
        <div class="oracle-feedback" id="feedback-${challenge.id}"></div>
      </div>
    `;
  }

  renderTextInput(challenge) {
    return `
      <div class="oracle-card" id="card-${challenge.id}">
        <h3>${challenge.title}</h3>
        <p>${challenge.desc}</p>
        <div class="oracle-input-container">
          <textarea id="input-${challenge.id}" class="oracle-textarea" placeholder="Escribe el fragmento exacto que es una alucinación..."></textarea>
        </div>
        <button class="gl-button verify-btn-text" data-target="${challenge.id}">DIAGNÓSTICO</button>
        <div class="oracle-feedback" id="feedback-${challenge.id}"></div>
      </div>
    `;
  }

  attachListeners() {
    document.querySelectorAll('.verify-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.dataset.target;
        const selected = document.querySelector(`input[name="${target}"]:checked`);
        const feedbackDiv = document.getElementById(`feedback-${target}`);
        const conf = this.challengeConfig[target];

        if (!selected) {
          window.scoringAgent.showFeedback('Selecciona una opción', 'warning');
          return;
        }

        if (selected.value === 'correct') {
          feedbackDiv.innerHTML = `<span class="success-text">ACceso CONCEDIDO: ${conf.feedbackCorrect}</span>`;
          if (this.scores[target] === 0) {
            this.scores[target] = this.maxPerRap;
            window.scoringAgent.addXP(this.maxPerRap, conf.title);
          }
          btn.disabled = true;
        } else {
          feedbackDiv.innerHTML = `<span class="error-text">ERROR: ${conf.feedbackIncorrect}</span>`;
          window.scoringAgent.showFeedback('Nodo encriptado. Intento fallido.', 'warning');
        }
        this.checkCompletion();
      });
    });

    document.querySelectorAll('.verify-btn-text').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.dataset.target;
        const inputVal = document.getElementById(`input-${target}`).value;
        const feedbackDiv = document.getElementById(`feedback-${target}`);
        const conf = this.challengeConfig[target];

        if (conf.regexValid.test(inputVal)) {
          feedbackDiv.innerHTML = `<span class="success-text">AMENAZA NEUTRALIZADA: ${conf.feedbackCorrect}</span>`;
          if (this.scores[target] === 0) {
            this.scores[target] = this.maxPerRap;
            window.scoringAgent.addXP(this.maxPerRap, conf.title);
          }
          btn.disabled = true;
        } else {
          feedbackDiv.innerHTML = `<span class="error-text">ERROR 404: ${conf.feedbackIncorrect}</span>`;
          window.scoringAgent.penalize(conf.penalty, 'Fallo Crítico de Diagnóstico de Alucinación');
        }
        this.checkCompletion();
      });
    });

    const certBtn = document.getElementById('btn-generate-cert');
    if (certBtn) {
      certBtn.addEventListener('click', () => {
        this.renderRadarCertificate();
      });
    }
  }

  checkCompletion() {
    if (this.scores.rap1 > 0 && this.scores.rap2 > 0 && this.scores.rap3 > 0 && this.scores.rap4 > 0) {
      document.getElementById('btn-generate-cert').disabled = false;
    }
  }

  // Pure Vanilla SVG Radar Chart (Zero-CDN)
  createSVGRadar(scores) {
    const size = 300;
    const center = size / 2;
    const maxVal = this.maxPerRap;
    const radius = 100;
    const angles = [0, Math.PI/2, Math.PI, Math.PI*3/2]; // 4 points (Top, Right, Bottom, Left)
    
    // Map scores to specific RAPs
    const values = [
      Math.min(scores.rap1, maxVal),
      Math.min(scores.rap2, maxVal),
      Math.min(scores.rap4, maxVal), // map 4 to bottom
      Math.min(scores.rap3, maxVal)  // map 3 to left
    ];

    const labels = ['RAP 1\nArquitectura', 'RAP 2\nPrompts', 'RAP 4\nOptimización', 'RAP 3\nAuditoría'];

    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;
    // Background Grid
    for(let r=1; r<=3; r++){
      const cr = radius * (r/3);
      let d = "";
      for(let i=0; i<4; i++){
        const x = center + cr * Math.sin(angles[i]);
        const y = center - cr * Math.cos(angles[i]);
        d += (i===0 ? `M ${x} ${y} ` : `L ${x} ${y} `);
      }
      d += "Z";
      svg += `<path d="${d}" fill="none" stroke="rgba(0,255,0,0.2)" stroke-width="1"/>`;
    }

    // Axes
    for(let i=0; i<4; i++){
      const x = center + radius * Math.sin(angles[i]);
      const y = center - radius * Math.cos(angles[i]);
      svg += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="rgba(0,255,0,0.3)" stroke-width="1"/>`;
      
      // Labels
      const lx = center + (radius + 20) * Math.sin(angles[i]);
      const ly = center - (radius + 20) * Math.cos(angles[i]);
      svg += `<text x="${lx}" y="${ly}" fill="#0f0" font-size="10" text-anchor="middle" dominant-baseline="middle" font-family="monospace">${labels[i]}</text>`;
    }

    // Data polygon
    let d = "";
    for(let i=0; i<4; i++){
      const cr = radius * (values[i] / maxVal);
      const x = center + cr * Math.sin(angles[i]);
      const y = center - cr * Math.cos(angles[i]);
      d += (i===0 ? `M ${x} ${y} ` : `L ${x} ${y} `);
      svg += `<circle cx="${x}" cy="${y}" r="3" fill="#0f0"/>`;
    }
    d += "Z";
    svg += `<path d="${d}" fill="rgba(0,255,0,0.2)" stroke="#0f0" stroke-width="2"/>`;

    svg += `</svg>`;
    return svg;
  }

  renderRadarCertificate() {
    const certPreview = document.getElementById('certificateContent');
    const rank = window.scoringAgent.state.rank;
    const name = localStorage.getItem('guia-ia-username') || 'OPERADOR ANÓNIMO';
    
    const svgChart = this.createSVGRadar(this.scores);

    certPreview.innerHTML = `
      <div class="terminal-cert">
        <div class="cert-stamp-neon">${rank.split(' ')[0]}</div>
        <h1 class="neon-text">CERTIFICADO DE CLASIFICACIÓN</h1>
        <p class="hacker-sub">Agente: <strong>${name}</strong></p>
        <div class="radar-container">
          ${svgChart}
        </div>
        <div class="cert-stats-terminal">
          <p>Pts Energéticos: <span style="color:#0f0;">${window.scoringAgent.state.energyNodes}</span> / 2400</p>
          <p>Clasificación Final: <strong style="color:var(--gl-accent);">${rank}</strong></p>
          <p>ID Registro: ${Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
        </div>
      </div>
    `;
    
    // Scroll to certificate
    certPreview.scrollIntoView({ behavior: 'smooth' });
  }
}

// Ensure init on window load
function initOracle() {
  if (window.oracleChallenge) return;
  window.oracleChallenge = new OracleChallenge();
  
  // Si estamos en la página del proyecto final (Módulo 15)
  const observer = new MutationObserver(() => {
    const mod15 = document.getElementById('module-15');
    if(mod15 && mod15.classList.contains('active')) {
      if(!document.getElementById('oracle-container-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'oracle-container-wrapper';
        mod15.appendChild(wrapper);
        window.oracleChallenge.injectIntoDOM('oracle-container-wrapper');
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
}

if (document.readyState === 'complete') {
  initOracle();
} else {
  window.addEventListener('load', initOracle);
}

  return { init: function(app) { console.log('Initialized oracle-challenge.js'); } };
})();