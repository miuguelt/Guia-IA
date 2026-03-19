window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['mini-games'] = (function() {
/* ============================================
   INTERACTIVE MINI-GAMES: PROMPT BATTLE & IA DETECTIVE
   ============================================ */

class GuiaIAGames {
  constructor() {
    this.games = {
      promptBattle: {
        id: 'prompt-battle',
        title: '⚔️ Prompt Battle: El Duelo Inicial',
        description: 'Vence al "Mal Prompt" dándole una identidad a la IA (Rol) y una instrucción clara (Tarea).',
        enemies: [
          {
            name: 'Chaos Lord (Oficina)',
            badPrompt: 'Hazme un resumen de la ley de presupuesto.',
            requirements: ['actúa', 'eres', 'como', 'analista', 'experto', 'resumen'],
            solutionHint: 'Empieza con "Actúa como..." o "Eres un experto..." y luego pide el resumen detallado.'
          },
          {
            name: 'El Supervisor Exigente',
            badPrompt: 'Saca la respuesta a ese derecho de petición rápido.',
            requirements: ['actúa', 'eres', 'como', 'jurídico', 'abogado', 'redacta'],
            solutionHint: 'Empieza con "Actúa como abogado..." o "Como asesor jurídico..." y pide que redacte la respuesta.'
          }
        ]
      },
      iaDetective: {
        id: 'ia-detective',
        title: '🕵️ IA Detective: Caza-Alucinaciones',
        description: 'Identifica los datos falsos en los reportes generados por IA.',
        cases: [
          {
            text: 'La Ley 1437 de 2011 establece que los ciudadanos deben pagar por respirar el aire de la alcaldía los domingos.',
            hallucination: 'pagar por respirar el aire',
            feedback: '¡Correcto! Esa es una alucinación absurda. La Ley 1437 es el CPACA (Código de Procedimiento Administrativo).'
          },
          {
            text: 'El Plan de Desarrollo Municipal 2024 fue firmado personalmente por el Papa Francisco en la Plaza de Bolívar.',
            hallucination: 'firmado personalmente por el Papa Francisco',
            feedback: '¡Exacto! El Papa no firma planes municipales. Es una alucinación de autoridad.'
          }
        ]
      },
      dnaAdministrativo: {
        id: 'dna-admin',
        title: '🧬 DNA Administrativo: Ciclo de Soberanía',
        description: 'Ordena el ciclo de vida de una tarea pública para garantizar éxito.',
        challenges: [
          {
            title: 'Licitación de Almuerzos Escolares',
            steps: [
              { id: 'p', label: 'PLANNING: Investigar requisitos legales y crear pliego de condiciones.', type: 'plan' },
              { id: 'e', label: 'EXECUTION: Redactar el contrato y publicarlo en SECOOP.', type: 'exec' },
              { id: 'v', label: 'VERIFICATION: Auditar el cumplimiento y entrega a los niños.', type: 'verif' }
            ]
          }
        ]
      }
    };
  }

  initPromptBattle(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const enemy = this.games.promptBattle.enemies[Math.floor(Math.random() * this.games.promptBattle.enemies.length)];

    container.innerHTML = `
      <div class="game-card prompt-battle-card glass-card animate-in">
        <div class="game-header premium-header" style="margin: -20px -20px 20px -20px; border-radius: 12px 12px 0 0; padding: 15px;">⚔️ PROMPT BATTLE</div>
        <div class="enemy-area">
          <div class="enemy-name">${enemy.name} dice:</div>
          <div class="bad-prompt-bubble">"${enemy.badPrompt}"</div>
        </div>
        <div class="player-area">
          <p>Tu misión: Mejora este prompt asignando un <strong>Rol</strong> inicial y una <strong>Tarea</strong> específica.</p>
          <textarea id="battle-input" placeholder="Escribe tu Super-Prompt aquí..."></textarea>
          <button class="gl-btn gl-btn-primary gl-btn-neon" id="btn-cast-prompt">LANZAR PROMPT MEJORADO</button>
        </div>
        <div id="battle-feedback" class="game-feedback"></div>
      </div>
    `;

    document.getElementById('btn-cast-prompt').addEventListener('click', () => {
      const input = document.getElementById('battle-input').value.toLowerCase();
      const feedback = document.getElementById('battle-feedback');
      
      let score = 0;
      enemy.requirements.forEach(req => {
        if (input.includes(req.toLowerCase().substring(0, 3))) score++;
      });
      if (input.length > 60) score++;

      if (score >= 3) {
        feedback.innerHTML = `<span class="success-text">✨ ¡DERRROTADO! Tu prompt tiene poder institucional. +150 XP y Medalla "Soberanía Administrativa".</span>`;
        window.scoringAgent.addXP(150, `Vencer a ${enemy.name}`);
        window.scoringAgent.unlockMedal('admin_master', 'Soberanía Administrativa', 'Productividad');
      } else {
        feedback.innerHTML = `<span class="error-text">❌ El supervisor no está satisfecho. Tu prompt es demasiado débil. Revisa la pista: ${enemy.solutionHint}</span>`;
      }
    });
  }

  initIADetective(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const caseData = this.games.iaDetective.cases[Math.floor(Math.random() * this.games.iaDetective.cases.length)];

    container.innerHTML = `
      <div class="game-card detective-card animate-in">
        <div class="game-header">🕵️ IA DETECTIVE</div>
        <p>Analiza el siguiente texto y selecciona la <strong>alucinación</strong> (el dato falso):</p>
        <div class="evidence-box">
          "${caseData.text}"
        </div>
        <div class="detective-options" id="detective-btns">
          <!-- Opciones se generarán dinámicamente -->
        </div>
        <div id="detective-feedback" class="game-feedback"></div>
      </div>
    `;

    const btnsContainer = container.querySelector('#detective-btns');
    // Simple heuristic to create options
    const words = caseData.hallucination.split(' ');
    const options = [caseData.hallucination, "2024", "Decreto 123"];
    
    options.sort(() => Math.random() - 0.5).forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'gl-btn';
      btn.textContent = opt;
      btn.dataset.correct = (opt === caseData.hallucination);
      btnsContainer.appendChild(btn);
      
      btn.addEventListener('click', (e) => {
        const isCorrect = e.target.dataset.correct === 'true';
        const feedback = document.getElementById('detective-feedback');
        
        if (isCorrect) {
          feedback.innerHTML = `<span class="success-text">🔍 ¡CASO CERRADO! ${caseData.feedback} +100 XP.</span>`;
          window.scoringAgent.addXP(100, 'Detective de IA Pública');
          window.scoringAgent.unlockMedal('ai_auditor', 'Auditor de Verdad', 'Auditoría');
          container.querySelectorAll('.detective-btn').forEach(b => b.disabled = true);
        } else {
          feedback.innerHTML = `<span class="error-text">❌ Esa información parece verídica. Busca la alucinación técnica.</span>`;
          window.scoringAgent.penalize(10, 'Error de Verificación');
        }
      });
    });
  }

  initDNAAdministrativo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const challenge = this.games.dnaAdministrativo.challenges[0];
    let slots = ['', '', ''];
    const shuffledSteps = [...challenge.steps].sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="game-card dna-admin-card animate-in">
        <div class="game-header">🧬 DNA ADMINISTRATIVO</div>
        <p>Ordena los pasos para la <strong>${challenge.title}</strong>:</p>
        <div class="dna-slots" style="display: flex; gap: 10px; margin: 20px 0;">
          <div class="dna-slot" data-index="0" style="flex:1; height: 60px; border: 2px dashed rgba(255,255,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; padding: 5px; text-align: center;">1. ???</div>
          <div class="dna-slot" data-index="1" style="flex:1; height: 60px; border: 2px dashed rgba(255,255,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; padding: 5px; text-align: center;">2. ???</div>
          <div class="dna-slot" data-index="2" style="flex:1; height: 60px; border: 2px dashed rgba(255,255,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; padding: 5px; text-align: center;">3. ???</div>
        </div>
        <div class="dna-options" style="display: grid; gap: 8px;">
          ${shuffledSteps.map(step => `
            <button class="gl-btn gl-btn-outline" data-id="${step.id}" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 10px; border-radius: 6px; color: #fff; cursor: pointer; font-size: 0.8rem; text-align: left;">${step.label}</button>
          `).join('')}
        </div>
        <button id="btn-verify-dna" class="gl-btn gl-btn-primary" style="margin-top: 20px; width: 100%;" disabled>VERIFICAR FLUJO DNA</button>
        <div id="dna-feedback" class="game-feedback"></div>
      </div>
    `;

    const optBtns = container.querySelectorAll('.dna-btn'); // Adjusted class name for consistency
    const slotEls = container.querySelectorAll('.dna-slot');
    const verifyBtn = container.querySelector('#btn-verify-dna');
    
    if (verifyBtn) {
      verifyBtn.addEventListener('click', () => {
        const isCorrect = slots[0] === 'p' && slots[1] === 'e' && slots[2] === 'v';
        const feedback = container.querySelector('#dna-feedback');
        
        if (isCorrect) {
          feedback.innerHTML = `<span class="success-text">✅ ¡PROCESO PERFECTO! Has orquestado la licitación con éxito. +200 XP.</span>`;
          if (window.scoringAgent) window.scoringAgent.addXP(200, 'Maestro DNA Administrativo');
          verifyBtn.disabled = true;
        } else {
          feedback.innerHTML = `<span class="error-text">❌ El orden es incorrecto. Recuerda: Planificar (Planning) → Ejecutar (Execution) → Verificar (Verification).</span>`;
          setTimeout(() => {
            slots = ['', '', ''];
            slotEls.forEach(s => { s.textContent = (parseInt(s.dataset.index)+1) + '. ???'; s.style.borderColor = ''; });
            optBtns.forEach(b => b.style.display = 'block');
            verifyBtn.disabled = true;
          }, 2000);
        }
      });
    }
  }
}

window.guiaIAGames = new GuiaIAGames();

  return { init: function(app) { console.log('Initialized mini-games.js'); } };
})();