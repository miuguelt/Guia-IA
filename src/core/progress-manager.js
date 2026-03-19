/**
 * ProgressManager.js
 * Manages user progression and module completion status using localStorage.
 */
class ProgressManager {
    constructor() {
        this.STORAGE_KEY = 'guia_ia_progress';
        this.progress = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        try {
            return saved ? JSON.parse(saved) : { completedModules: [], currentLevel: 1 };
        } catch (e) {
            console.error('Error loading progress:', e);
            return { completedModules: [], currentLevel: 1 };
        }
    }

    saveProgress() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progress));
        // Dispatch custom event for UI updates
        window.dispatchEvent(new CustomEvent('progressUpdated', { detail: this.progress }));
    }

    markModuleCompleted(moduleId) {
        if (!this.progress.completedModules.includes(moduleId)) {
            this.progress.completedModules.push(moduleId);
            this.saveProgress();
            return true;
        }
        return false;
    }

    isModuleCompleted(moduleId) {
        return this.progress.completedModules.includes(moduleId);
    }

    isModuleUnlocked(moduleId, prerequisites = []) {
        // Allow all modules to be unlocked for free exploration
        return true;
    }

    getProgress() {
        return this.progress;
    }

    resetProgress() {
        this.progress = { completedModules: [], currentLevel: 1 };
        this.saveProgress();
    }
}

export const progressManager = new ProgressManager();
