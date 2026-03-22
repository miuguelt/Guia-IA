/* ============================================
   AGENT TRAINING EXPERIENCE - SCORING SYSTEM
   ============================================ */

class ScoringAgent {
  constructor() {
    this.state = new Proxy({
      energyNodes: parseInt(localStorage.getItem('agent-energy')) || 0,
      maxNodes: 2400,
      penalties: parseInt(localStorage.getItem('agent-penalties')) || 0,
      rank: 'Técnico en Observación',
      medals: JSON.parse(localStorage.getItem('agent-medals')) || []
    }, {
      set: (target, prop, value) => {
        target[prop] = value;
        if (prop === 'energyNodes' || prop === 'penalties' || prop === 'medals') {
          this.updateRank();
          this.render();
          this.saveProgress();
        }
        return true;
      }
    });
    
    // Ensure initial rank is calculated
    this.updateRank();

    // Init UI Elements when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initUI());
    } else {
      this.initUI();
    }
  }

  saveProgress() {
    localStorage.setItem('agent-energy', this.state.energyNodes);
    localStorage.setItem('agent-penalties', this.state.penalties);
    localStorage.setItem('agent-rank', this.state.rank);
    localStorage.setItem('agent-medals', JSON.stringify(this.state.medals));
  }

  addXP(amount, reason) {
    if (this.state.energyNodes >= this.state.maxNodes) return;
    this.state.energyNodes = Math.min(this.state.energyNodes + amount, this.state.maxNodes);
    this.showFeedback(`[✓] ALLOCATED +${amount} ENERGÍA: ${reason}`, 'success');
  }

  penalize(amount, reason) {
    this.state.energyNodes = Math.max(0, this.state.energyNodes - amount);
    this.state.penalties += amount;
    this.showFeedback(`[!] PENALTY -${amount} ENERGÍA: ${reason}`, 'danger');
  }

  updateRank() {
    const pts = this.state.energyNodes;
    if (pts < 1000) this.state.rank = 'Técnico en Observación';
    else if (pts < 1600) this.state.rank = 'Operador de Sistemas IA';
    else if (pts < 2200) this.state.rank = 'Arquitecto de Soluciones Generativas';
    else this.state.rank = 'Maestro de la Singularidad (Sovereign)';
  }

  unlockMedal(medalId, medalName, category = 'General') {
    if (this.state.medals.find(m => m.id === medalId)) return;
    
    this.state.medals.push({ id: medalId, name: medalName, category, date: new Date().toISOString() });
    this.showFeedback(`[🏆] MEDALLA DESBLOQUEADA: ${medalName}`, 'success');
    this.triggerMedalEffect();
    this.render();
    this.saveProgress();
  }

  triggerMedalEffect() {
    // Visual celebration for medal
    if (window.antShowConfetti) window.antShowConfetti();
  }

  initUI() {
    // Inject the Feedback Container if it doesn't exist
    if (!document.getElementById('agent-feedback-container')) {
      const container = document.createElement('div');
      container.id = 'agent-feedback-container';
      container.className = 'agent-terminal-overlay';
      document.body.appendChild(container);
    }

    // Attempt to hijack the existing XP dashboard
    this.render();
  }

  render() {
    const xpFill = document.getElementById('xpBarFill');
    const xpText = document.getElementById('xpText');
    const levelNum = document.getElementById('levelNum');
    const levelName = document.getElementById('levelName');

    const progress = (this.state.energyNodes / this.state.maxNodes) * 100;

    if (xpFill) {
      xpFill.style.width = Math.min(100, progress) + '%';
      xpFill.style.background = 'linear-gradient(90deg, #0f0, #00ffcc)'; // Hacker neon green
      xpFill.style.boxShadow = '0 0 10px #0f0';
    }
    if (xpText) xpText.innerHTML = `<span style="color:#0f0;">${this.state.energyNodes}</span> / ${this.state.maxNodes} Nodos`;
    if (levelNum) levelNum.textContent = `Rango: ${this.state.rank.split(' ')[0]}`;
    
    if (levelName) {
      levelName.textContent = this.state.rank;
      levelName.className = 'xp-level-badge level-hacker';
      levelName.style.background = 'rgba(0, 255, 0, 0.1)';
      levelName.style.border = '1px solid #0f0';
      levelName.style.color = '#0f0';
      levelName.style.textShadow = '0 0 5px #0f0';
    }

    this.renderMedals();
  }

  renderMedals() {
    const container = document.getElementById('medals-list');
    if (!container) return;

    container.innerHTML = this.state.medals.map(m => `
      <div class="medal-badge" title="Desbloqueada el ${new Date(m.date).toLocaleDateString()}">
        <span class="medal-icon">🥇</span>
        <span class="medal-name">${m.name}</span>
      </div>
    `).join('');
  }

  showFeedback(msg, type) {
    const container = document.getElementById('agent-feedback-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `terminal-notification notif-${type}`;
    
    // Typewriter effect approach
    notification.innerHTML = `<span class="prompt-symbol">></span> <span class="typing-text"></span>`;
    container.appendChild(notification);

    const txtElement = notification.querySelector('.typing-text');
    let i = 0;
    const speed = 20; // ms per char

    const typeWriter = () => {
      if (i < msg.length) {
        txtElement.innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          notification.classList.add('fade-out');
          setTimeout(() => notification.remove(), 500);
        }, 4000);
      }
    };
    typeWriter();
  }
}

window.scoringAgent = new ScoringAgent();
