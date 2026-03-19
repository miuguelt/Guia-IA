/**
 * Sovereign UI - Singularity v22.0
 * Monitorización en tiempo real de las métricas de la constitución.
 */

class SovereignUI {
    constructor() {
        this.scdEl = document.getElementById('sovScd');
        this.aerEl = document.getElementById('sovAer');
        this.siEl = document.getElementById('sovSi');
        this.tokensEl = document.getElementById('sovTokens');
        this.usdEl = document.getElementById('sovUsd');
        this.init();
    }

    async init() {
        console.log("🧬 Sovereign UI Initialized");
        this.updateMetrics();
        setInterval(() => this.updateMetrics(), 10000); // Polling cada 10s
    }

    async updateMetrics() {
        try {
            const resp = await fetch('src/js/sovereign_status.json?v=' + Date.now());
            if (!resp.ok) return;
            
            const status = await resp.json();
            
            if (this.scdEl) this.animateValue(this.scdEl, status.scd);
            if (this.aerEl) this.animateValue(this.aerEl, status.aer);
            if (this.siEl) this.animateValue(this.siEl, status.si);
            
            if (this.tokensEl && status.tokens) {
                this.tokensEl.innerText = (status.tokens / 1000000).toFixed(1) + ' M';
            }
            if (this.usdEl && status.expenses_usd) {
                this.usdEl.innerText = '$' + status.expenses_usd.toFixed(2);
            }
            
        } catch (e) {
            console.error("Error fetching sovereignty status:", e);
        }
    }

    animateValue(element, value) {
        element.innerText = value + '%';
        element.style.color = value > 80 ? 'var(--accent)' : 'var(--text-warning)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.sovereignUI = new SovereignUI();
});
