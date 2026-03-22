const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATUS_PATH = path.join(__dirname, '../src/js/sovereign_status.json');
const TELEMETRY_PATH = path.join(__dirname, 'telemetry_engine.py');

function updateMetrics() {
    console.log('🔄 Sincronizando Métricas Soberanas Reales...');
    try {
        // Ejecutar el motor de soberanía real para sincronizar vistas
        const pythonCmd = `python3 -c "import sys; sys.path.append('scripts'); import sovereign_core; sovereign_core._sync_all_views()"`;
        execSync(pythonCmd);
        
        console.log('✅ Status Sync [REAL_TIME_ULTRA_TRUTH]');
    } catch (e) {
        console.error('❌ Telemetry Update [FAILED]:', e.message);
    }
}

if (require.main === module) {
    updateMetrics();
}

module.exports = { updateMetrics };
