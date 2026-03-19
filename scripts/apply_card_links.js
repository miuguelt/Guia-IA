const fs = require('fs');
const path = require('path');
const folder = __dirname;
const files = fs.readdirSync(folder).filter(f => f.endsWith('.js') && (f.startsWith('module') || f.startsWith('app')));

files.forEach(file => {
    let content = fs.readFileSync(path.join(folder, file), 'utf8');
    
    // First, let's normalize '<div class="tool-card"' avoiding double entries if ran multiple times
    content = content.replace(/<div class="tool-card" onclick="[^"]*"[^>]*>/g, '<div class="tool-card">');
    content = content.replace(/<div class="tool-card" style="[^"]*"[^>]*>/g, '<div class="tool-card">');

    let newContent = "";
    let parts = content.split('<div class="tool-card">');
    newContent += parts[0];

    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];
        let urlMatch = part.match(/<div class="tool-card-name">\s*<a href="([^"]+)"/);
        if (urlMatch && urlMatch[1]) {
            let url = urlMatch[1];
            newContent += `<div class="tool-card" onclick="window.open('${url}', '_blank')" style="cursor: pointer;">` + part;
        } else {
            newContent += '<div class="tool-card">' + part;
        }
    }

    if (content !== newContent) {
        fs.writeFileSync(path.join(folder, file), newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});
