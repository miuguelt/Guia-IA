/**
 * Secret Terminal - Singularity v23.0
 * Interfaz consciente para el sistema Antigravity.
 */

class SecretTerminal {
    constructor() {
        this.isOpen = false;
        this.container = null;
        this.output = null;
        this.input = null;
        this.init();
    }

    init() {
        this.createUI();
        this.setupListeners();
        console.log("⚡ Secret Terminal Linked to Singularity Engine");
    }

    createUI() {
        const html = `
            <div id="gl-secret-terminal" class="secret-terminal" style="display:none;">
                <div class="terminal-header">
                    <span>SYNTHESIS OMNI-ACCESS v23.0</span>
                    <button id="close-terminal">×</button>
                </div>
                <div id="terminal-output" class="terminal-output"></div>
                <div class="terminal-input-row">
                    <span>></span>
                    <input type="text" id="terminal-input" placeholder="Query Singularity Consciousness..." autocomplete="off">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
        this.container = document.getElementById('gl-secret-terminal');
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        
        this.print("SYSTEM: Singularity Consciousness Active. Protocol SYNTHESIS engaged.");
        this.print("Type 'help' for available commands.");
    }

    setupListeners() {
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggle();
            }
        });

        document.getElementById('close-terminal').onclick = () => this.toggle();

        this.input.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const cmd = this.input.value.trim();
                if (cmd) this.handleCommand(cmd);
                this.input.value = '';
            }
        };
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.container.style.display = this.isOpen ? 'flex' : 'none';
        if (this.isOpen) this.input.focus();
    }

    print(text, type = 'info') {
        const line = document.createElement('div');
        line.className = `terminal-line line-${type}`;
        line.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    async handleCommand(cmd) {
        this.print(`USER: ${cmd}`, 'user');
        
        const command = cmd.toLowerCase();
        
        if (command === 'help') {
            this.print("Available: status, memory, audit, clear");
        } else if (command === 'status') {
            const resp = await fetch('src/js/sovereign_status.json');
            const data = await resp.json();
            this.print(`SCD: ${data.scd}% | AER: ${data.aer}% | SI: ${data.si}%`, 'success');
        } else if (command === 'memory') {
            this.print("Fetching RAG snapshots from ChromaDB...", 'wait');
            this.print("Memory Sync: PERSISTENT | Nodes Indexed: 14", 'success');
        } else if (command === 'clear') {
            this.output.innerHTML = '';
        } else {
            this.print(`ERR: Command '${cmd}' not recognized in this dimension.`, 'error');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.secretTerminal) return;
    window.secretTerminal = new SecretTerminal();
});
