const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8000;
const DB_PATH = path.join(__dirname, 'src/data/leaderboard.db');

// Ensure data directory exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files from root

let db;

async function initDB() {
    db = await open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            xp INTEGER DEFAULT 0,
            title TEXT,
            avatar TEXT,
            entity TEXT,
            is_npc INTEGER DEFAULT 0,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Seed initial data if empty
    const count = await db.get('SELECT COUNT(*) as count FROM users');
    if (count.count === 0) {
        console.log("🧬 Seeding Institutional Registry...");
        const seedData = [
            ['Miguel L. (Antigravity Director)', 9999, 'Arquitecto Supramind Nivel 99', '🐉', 'Nodo Central', 1],
            ['Elena V. (SENA Regional Antioquia)', 4500, 'Estratega de Datos', '👓', 'Regional Antioquia', 1],
            ['Jorge M. (SENA Regional Valle)', 3800, 'Líder en Automatización', '⚙️', 'Regional Valle', 1],
            ['Sofia R. (SENA Regional Atlántico)', 3250, 'Ingeniera de Prompts', '👩‍💻', 'Regional Atlántico', 1],
            ['Mario T. (SENA Regional Santander)', 2100, 'Explorador Digital', '🧭', 'Regional Santander', 1],
            ['Tú (El Funcionario Elite)', 2850, 'Operador IA Avanzado', '👨‍💻', 'Punto Local', 0]
        ];

        const stmt = await db.prepare('INSERT INTO users (name, xp, title, avatar, entity, is_npc) VALUES (?, ?, ?, ?, ?, ?)');
        for (const user of seedData) {
            await stmt.run(user);
        }
        await stmt.finalize();
    }
}

// Name Generator Helper
const generateSovereignName = () => {
    const prefixes = ["Estratega", "Operador", "Auditor", "Visionario", "Analista"];
    const roles = ["Soberano", "de Élite", "Antigravity", "Céntico", "Arcano"];
    const entities = ["Nodo Central", "Regional SENA", "Misión IA", "Alfa", "Beta"];
    
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const r = roles[Math.floor(Math.random() * roles.length)];
    const e = entities[Math.floor(Math.random() * entities.length)];
    
    return `${p} ${r} (${e})`;
};

// --- API ROUTES ---

// Get Leaderboard
app.get('/api/leaderboard', async (req, res) => {
    try {
        const leaderboard = await db.all('SELECT * FROM users ORDER BY xp DESC LIMIT 100');
        res.json(leaderboard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Post/Sync Score
app.post('/api/leaderboard', async (req, res) => {
    let { name, xp, title, avatar, entity } = req.body;
    
    if (!name || name.trim() === "" || name === "PARTICIPANTE") {
        name = generateSovereignName();
    }

    try {
        // Check if user already exists (by name for this demo, usually would use a token or ID)
        const existing = await db.get('SELECT id FROM users WHERE name = ? AND is_npc = 0', [name]);
        
        if (existing) {
            await db.run(
                'UPDATE users SET xp = ?, title = ?, avatar = ?, entity = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
                [xp, title, avatar, entity, existing.id]
            );
            res.json({ status: 'updated', name });
        } else {
            await db.run(
                'INSERT INTO users (name, xp, title, avatar, entity, is_npc) VALUES (?, ?, ?, ?, ?, 0)',
                [name, xp, title, avatar, entity]
            );
            res.json({ status: 'created', name });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Health check
app.get('/health', (req, res) => res.send('OK - Antigravity Ledger Online'));

const { updateMetrics } = require('./scripts/update_metrics');

app.use((req, res, next) => {
    console.log(`[REQ] ${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
});

initDB().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 [DEB_SYNC_V14] Server on http://0.0.0.0:${PORT}`);
        console.log(`🧬 SQLite Registry Active at: ${DB_PATH}`);
        
        // Start Sovereign Telemetry Loop
        updateMetrics();
        setInterval(updateMetrics, 30000); // 30s Loop
    });
});
