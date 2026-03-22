const express = require('express');
const path = require('path');
const app = express();
const PORT = 8002;

app.use('/src', express.static(path.join(__dirname, 'src')));
app.use(express.static(__dirname));

app.use((req, res, next) => {
    console.log(`[TEST] ${req.method} ${req.url}`);
    next();
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Test server running on http://0.0.0.0:${PORT}`);
});