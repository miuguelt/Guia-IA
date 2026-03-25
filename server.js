const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 8020;

// ── Persistent DB path (must match Docker volume: /app/data) ──
// DB_PATH priority:
// 1. DB_PATH env var (set in Docker/Coolify to point to the persistent volume: /app/data/leaderboard.db)
// 2. src/data/ fallback for local Linux development (WSL cannot write to /mnt/c/ with native sqlite3)
const DB_PATH = process.env.DB_PATH || path.join(__dirname === '.' ? '' : __dirname, 'src/data/leaderboard.db');


// Ensure data directory exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// ── Admin Token ──
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || crypto.randomBytes(24).toString('hex');

app.use(cors());
app.use(express.json());
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use(express.static(__dirname));

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
            progress_json TEXT DEFAULT '{}',
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Migration: add progress_json if upgrading from old schema
    try {
        await db.exec('ALTER TABLE users ADD COLUMN progress_json TEXT DEFAULT \'{}\'');
    } catch(e) { /* Column already exists */ }

    // Seed initial data only if empty
    const count = await db.get('SELECT COUNT(*) as count FROM users');
    if (count.count === 0) {
        console.log("🧬 Seeding Institutional Registry...");
        const seedData = [
            ['Miguel L. (Antigravity Director)', 9999, 'Arquitecto Supramind Nivel 99', '🐉', 'Nodo Central', 1, '{"completed":["module-1","module-2","module-3","module-4","module-5","module-6","module-7","module-8","module-9","module-10","module-11","module-12","module-13","module-14","module-15","module-16","module-17","module-18","module-19","module-20"],"xp":9999}'],
            ['Elena V. (SENA Regional Antioquia)', 4500, 'Estratega de Datos', '👓', 'Regional Antioquia', 1, '{"completed":["module-1","module-2","module-3","module-4","module-5","module-6","module-7","module-8","module-9"],"xp":4500}'],
            ['Jorge M. (SENA Regional Valle)', 3800, 'Líder en Automatización', '⚙️', 'Regional Valle', 1, '{"completed":["module-1","module-2","module-3","module-4","module-5","module-6","module-7"],"xp":3800}'],
            ['Sofia R. (SENA Regional Atlántico)', 3250, 'Ingeniera de Prompts', '👩‍💻', 'Regional Atlántico', 1, '{"completed":["module-1","module-2","module-3","module-4","module-5","module-6"],"xp":3250}'],
            ['Mario T. (SENA Regional Santander)', 2100, 'Explorador Digital', '🧭', 'Regional Santander', 1, '{"completed":["module-1","module-2","module-3","module-4"],"xp":2100}'],
        ];
        const stmt = await db.prepare('INSERT INTO users (name, xp, title, avatar, entity, is_npc, progress_json) VALUES (?, ?, ?, ?, ?, ?, ?)');
        for (const user of seedData) { await stmt.run(user); }
        await stmt.finalize();
    }
}

// ── Name Generator Helper ──
const generateSovereignName = () => {
    const p = ["Estratega","Operador","Auditor","Visionario","Analista"][Math.floor(Math.random()*5)];
    const r = ["Soberano","de Élite","Antigravity","Céntico","Arcano"][Math.floor(Math.random()*5)];
    const e = ["Nodo Central","Regional SENA","Misión IA","Alfa","Beta"][Math.floor(Math.random()*5)];
    return `${p} ${r} (${e})`;
};

// ════════════════════════════════
//  PUBLIC API ROUTES
// ════════════════════════════════

app.get('/api/leaderboard', async (req, res) => {
    try {
        const leaderboard = await db.all('SELECT id, name, xp, title, avatar, entity, updated_at FROM users ORDER BY xp DESC LIMIT 100');
        res.json(leaderboard);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/leaderboard', async (req, res) => {
    let { name, xp, title, avatar, entity } = req.body;
    if (!name || name.trim() === "" || name === "PARTICIPANTE") name = generateSovereignName();
    try {
        const existing = await db.get('SELECT * FROM users WHERE name = ?', [name]);
        if (existing) {
            // Protect NPCs and only update if new XP is higher (Source of Truth protection)
            const canUpdate = (existing.is_npc === 0) && (xp > (existing.xp || 0));
            if (canUpdate) {
                await db.run('UPDATE users SET xp = ?, title = ?, avatar = ?, entity = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
                    [xp, title, avatar, entity, existing.id]);
            }
            const current = await db.get('SELECT * FROM users WHERE id = ?', [existing.id]);
            res.json({ status: canUpdate ? 'updated' : 'ignored', user: current });
        } else {
            const result = await db.run('INSERT INTO users (name, xp, title, avatar, entity, is_npc) VALUES (?, ?, ?, ?, ?, 0)',
                [name, xp, title, avatar, entity]);
            const newUser = await db.get('SELECT * FROM users WHERE id = ?', [result.lastID]);
            res.json({ status: 'created', user: newUser });
        }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/progress', async (req, res) => {
    let { name, progress_json } = req.body;
    if (!name || name.trim() === "" || name === "PARTICIPANTE") {
        return res.status(400).json({ error: "Invalid username." });
    }
    try {
        const existing = await db.get('SELECT id, xp, is_npc FROM users WHERE name = ?', [name]);
        const jsonStr = JSON.stringify(progress_json);
        const xp = progress_json?.xp ?? 0;
        
        if (existing) {
            if (existing.is_npc !== 0) {
                return res.json({ status: 'ignored', reason: 'NPC protection' });
            }
            // Always save progress_json (modules, competencies, etc.)
            // but only upgrade XP if it's genuinely higher (Source of Truth)
            const newXP = Math.max(xp, existing.xp || 0);
            await db.run(
                'UPDATE users SET progress_json = ?, xp = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
                [jsonStr, newXP, existing.id]
            );
            res.json({ status: 'updated', xp: newXP });
        } else {
            await db.run('INSERT INTO users (name, xp, progress_json, is_npc) VALUES (?, ?, ?, 0)',
                [name, xp, jsonStr]);
            res.json({ status: 'created' });
        }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/progress/:name', async (req, res) => {
    try {
        let name = req.params.name;
        // Universal cleaning for robust matching (removes emojis and collapses spaces)
        const cleanName = name.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu, '').replace(/\s+/g, ' ').trim();
        
        let user = await db.get('SELECT progress_json, xp, title, avatar FROM users WHERE name = ?', [cleanName]);
        
        if (!user && cleanName !== name) {
            user = await db.get('SELECT progress_json, xp, title, avatar FROM users WHERE name = ?', [name]);
        }

        if (user) {
            let progress = {};
            try {
                progress = user.progress_json ? JSON.parse(user.progress_json) : {};
            } catch(e) { progress = {}; }
            
            // Merge standalone DB columns into the progress object
            progress.xp = Math.max(progress.xp || 0, user.xp || 0);
            if (user.title && !progress.title) progress.title = user.title;
            if (user.avatar && !progress.avatar) progress.avatar = user.avatar;
            
            res.json(progress);
        } else {
            res.status(404).json({ error: "No progress found." });
        }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// ════════════════════════════════
//  /ops/ — ADMIN PANEL (HIDDEN)
// ════════════════════════════════

function requireAdmin(req, res, next) {
    const token = req.headers['x-admin-token'] || req.query.token;
    if (!token || token !== ADMIN_TOKEN) {
        return res.status(404).send('Not found'); // Return 404, not 401, to stay hidden
    }
    next();
}

// Admin Panel HTML — served from ops-panel.html (separated to avoid template literal nesting issues)
app.get('/ops/panel', requireAdmin, (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'src/ops-panel.html'));
});



// List all users
app.get('/ops/users', requireAdmin, async (req, res) => {
    try {
        const users = await db.all('SELECT id, name, xp, title, avatar, entity, is_npc, updated_at FROM users ORDER BY xp DESC');
        res.json(users);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// Get full progress of a user
app.get('/ops/users/:id/progress', requireAdmin, async (req, res) => {
    try {
        const user = await db.get('SELECT name, xp, progress_json, updated_at FROM users WHERE id = ?', [req.params.id]);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ ...user, progress: user.progress_json ? JSON.parse(user.progress_json) : {} });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// Edit a user (name, xp, title, avatar, entity)
app.patch('/ops/users/:id', requireAdmin, async (req, res) => {
    const { name, xp, title, avatar, entity } = req.body;
    try {
        await db.run(
            'UPDATE users SET name = COALESCE(?, name), xp = COALESCE(?, xp), title = COALESCE(?, title), avatar = COALESCE(?, avatar), entity = COALESCE(?, entity), updated_at = CURRENT_TIMESTAMP WHERE id = ?',
            [name, xp, title, avatar, entity, req.params.id]
        );
        res.json({ status: 'updated' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// Delete a user
app.delete('/ops/users/:id', requireAdmin, async (req, res) => {
    try {
        await db.run('DELETE FROM users WHERE id = ? AND is_npc = 0', [req.params.id]);
        res.json({ status: 'deleted' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// Bulk delete users
app.post('/ops/users/bulk-delete', requireAdmin, async (req, res) => {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ error: 'No IDs provided' });
    }
    try {
        const placeholders = ids.map(() => '?').join(',');
        await db.run(`DELETE FROM users WHERE id IN (${placeholders}) AND is_npc = 0`, ids);
        res.json({ status: 'deleted', count: ids.length });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// Reset progress (XP to 0, clear progress_json)
app.post('/ops/users/:id/reset', requireAdmin, async (req, res) => {
    try {
        await db.run('UPDATE users SET xp = 0, progress_json = \'{}\', updated_at = CURRENT_TIMESTAMP WHERE id = ?', [req.params.id]);
        res.json({ status: 'reset' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// ════════════════════════════════
//  HEALTH + LOGGING + START
// ════════════════════════════════

app.get('/health', (req, res) => res.send('OK - Antigravity Ledger Online'));

const { updateMetrics } = require('./scripts/update_metrics');

app.use((req, res, next) => {
    console.log(`[REQ] ${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
});

initDB().then(() => {
    const server = app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 Server on http://0.0.0.0:${PORT}`);
        console.log(`🧬 SQLite Registry Active at: ${DB_PATH}`);
        console.log(`🔐 Admin Token: ${ADMIN_TOKEN}`);
        console.log(`🛠️  Admin Panel: http://localhost:${PORT}/ops/panel?token=${ADMIN_TOKEN}`);
        updateMetrics();
        setInterval(updateMetrics, 30000);
    });

    // Graceful Shutdown Protocol
    const shutdown = async () => {
        console.log('\n🛑 Shutdown initiated. Closing server and database...');
        server.close(async () => {
            if (db) {
                await db.close();
                console.log('📦 Database connection closed.');
            }
            console.log('👋 Goodbye.');
            process.exit(0);
        });
        
        // Force exit if closing takes too long
        setTimeout(() => {
            console.error('⚠️ Could not close connections in time, forcing shut down.');
            process.exit(1);
        }, 5000);
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
});
