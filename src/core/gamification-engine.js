/**
 * GamificationEngine.js
 * Core engine for the game-like educational experience.
 */
class GamificationEngine {
    constructor() {
        this.POINTS = {
            READING: 10,
            EXERCISE: 30,
            MISSION: 60,
            CHALLENGE: 100
        };
        this.BADGES = {
            'module-1': { id: 'm1_explorer', name: 'Explorador IA', icon: '🚀' },
            'module-2': { id: 'm2_prompt', name: 'Aprendiz de Prompts', icon: '💬' },
            'module-3': { id: 'm3_master', name: 'Arquitecto CREA', icon: '🏗️' },
            'module-4': { id: 'm4_admin', name: 'Gestor Documental', icon: '📄' },
            'module-5': { id: 'm5_data', name: 'Analista de Datos', icon: '📊' }
        };
    }

    calculateTotalXP(progress) {
        let total = 0;
        // Base module completion
        total += (progress.completedModules?.length || 0) * 100;
        // Todo: Add granular XP from activities
        return total;
    }

    awardBadge(moduleId) {
        const badge = this.BADGES[moduleId];
        if (badge) {
            this.triggerBadgeAnimation(badge);
            return badge;
        }
        return null;
    }

    triggerBadgeAnimation(badge) {
        const toast = document.createElement('div');
        toast.className = 'badge-toast animate-in';
        toast.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-info">
                <span class="badge-title">¡Insignia Ganada!</span>
                <span class="badge-name">${badge.name}</span>
            </div>
        `;
        document.getElementById('toast-container')?.appendChild(toast);
        setTimeout(() => toast.remove(), 5000);
    }

    spawnLevelUpEffect() {
        const overlay = document.createElement('div');
        overlay.className = 'level-up-overlay';
        overlay.innerHTML = `
            <div class="level-up-content">
                <h1 class="glow-text">¡NUEVO NIVEL!</h1>
                <div class="confetti-cannon"></div>
            </div>
        `;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.remove(), 3000);
    }
}

export const gameEngine = new GamificationEngine();
