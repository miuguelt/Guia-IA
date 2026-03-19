const fs = require('fs');
const path = require('path');

const manualLinks = {
    "Whisper (OpenAI)": { name: "Whisper (OpenAI)", url: "https://openai.com/research/whisper" },
    "ChatGPT Code Interpreter": { name: "ChatGPT Code Interpreter", url: "https://chatgpt.com" },
    "Google Apps Script": { name: "Google Apps Script", url: "https://script.google.com" },
    "ChatGPT + PowerPoint": { name: "ChatGPT + PowerPoint", url: "https://chatgpt.com" },
    "ChatGPT para redes sociales": { name: "ChatGPT para redes sociales", url: "https://chatgpt.com" },
    "Copilot en Outlook": { name: "Copilot en Outlook", url: "https://copilot.microsoft.com" },
    "Gemini en Gmail": { name: "Gemini en Gmail", url: "https://gemini.google.com" },
    "Google Workspace con Gemini": { name: "Google Workspace con Gemini", url: "https://workspace.google.com" },
    "Slack + ChatGPT Bot": { name: "Slack + ChatGPT Bot", url: "https://slack.com" },
    "Redacción inteligente": { name: "Redacción inteligente", url: "https://workspace.google.com" },
    "Resumen de hilos": { name: "Resumen de hilos", url: "https://workspace.google.com" },
    "Búsqueda con IA en Gmail": { name: "Búsqueda con IA en Gmail", url: "https://workspace.google.com" },
    "Categorización automática": { name: "Categorización automática", url: "https://workspace.google.com" },
    "ChatGPT Plus": { name: "ChatGPT Plus", url: "https://chatgpt.com" },
    "Claude Pro": { name: "Claude Pro", url: "https://claude.ai" },
    "Perplexity Pro": { name: "Perplexity Pro", url: "https://perplexity.ai" },
    "Google One AI Premium": { name: "Google One AI Premium", url: "https://g.co/g1referral/86ZGSC29" },
    "Midjourney": { name: "Midjourney", url: "https://midjourney.com" },
    "DALL-E 3 (Plus)": { name: "DALL-E 3", url: "https://chatgpt.com" },
    "Adobe Firefly": { name: "Adobe Firefly", url: "https://firefly.adobe.com" },
    "Stable Diffusion (Pro)": { name: "Stable Diffusion", url: "https://stability.ai" },
    "Microsoft 365 Copilot": { name: "Microsoft 365 Copilot", url: "https://copilot.microsoft.com" },
    "Notion AI": { name: "Notion AI", url: "https://notion.so/product/ai" },
    "Canva Pro": { name: "Canva Pro", url: "https://canva.com" },
    "Gamma Pro": { name: "Gamma Pro", url: "https://gamma.app" },
    "ElevenLabs Pro": { name: "ElevenLabs Pro", url: "https://elevenlabs.io" },
    "Descript": { name: "Descript", url: "https://descript.com" },
    "HeyGen Pro": { name: "HeyGen Pro", url: "https://heygen.com" },
    "Otter.ai Pro": { name: "Otter.ai Pro", url: "https://otter.ai" },
    "GitHub Copilot": { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
    "Cursor Pro": { name: "Cursor Pro", url: "https://cursor.sh" },
    "Replit Core": { name: "Replit Core", url: "https://replit.com" }
};

const folder = __dirname;
const files = fs.readdirSync(folder).filter(f => f.endsWith('.js') && (f.startsWith('module') || f.startsWith('app')));

files.forEach(file => {
    let content = fs.readFileSync(path.join(folder, file), 'utf8');
    
    // Some tool names are wrapped in <strong>...</strong> in tables! We should also capture those.
    // Wait, the user specifically mentioned "tool card names". But they also said "herramientas que nombra la guia".
    // I will replace in <div class="tool-card-name">...</div> and <strong>ToolName</strong> if they match our known tools.
    // Let's first focus on tool-card-name:
    content = content.replace(/<div class="tool-card-name">(.*?)<\/div>/g, (match, inner) => {
        // if already a link, skip
        if (inner.includes('<a ')) return match;

        let name = inner;
        let url = "";
        
        if (manualLinks[inner]) {
            url = manualLinks[inner].url;
            name = manualLinks[inner].name;
        } else {
            const m = inner.match(/^(.*?)\s+\((.*?)\)$/);
            if (m && m[2].includes('.')) {
                name = m[1];
                let rawDomain = m[2];
                url = rawDomain.startsWith('http') ? rawDomain : 'https://' + rawDomain;
            } else {
                url = "https://www.google.com/search?q=" + encodeURIComponent(inner + " AI tool");
            }
        }
        
        return `<div class="tool-card-name"><a href="${url}" target="_blank" class="tool-link" title="Ir a ${name}">${name}</a></div>`;
    });
    
    // Let's also find tools in <strong> tags inside tables inside the guide
    content = content.replace(/<strong>(.*?)<\/strong><\/td>/g, (match, inner) => {
        if (inner.includes('<a ')) return match;
        
        let url = "";
        let name = inner;
        if (manualLinks[inner]) {
            url = manualLinks[inner].url;
            name = manualLinks[inner].name;
            return `<strong><a href="${url}" target="_blank" class="tool-link" title="Ir a ${name}">${name}</a></strong></td>`;
        }
        
        // Let's check if the inner text before " (" matches some manual links or something?
        // Let's not overwite all <strong>, only if they are in manualLinks.
        // It's safe to do this only for strict matches in manualLinks.
        return match;
    });

    fs.writeFileSync(path.join(folder, file), content, 'utf8');
    console.log(`Updated ${file}`);
});

// Update styles.css
const cssPath = path.join(folder, 'styles.css');
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    if (!css.includes('.tool-link')) {
        css += `\n/* Estilos para enlaces de herramientas */\n.tool-link {\n    color: inherit;\n    text-decoration: none;\n    transition: color 0.2s, text-decoration 0.2s;\n}\n.tool-link:hover {\n    color: var(--primary-color);\n    text-decoration: underline;\n}\nstrong > .tool-link {\n    color: var(--primary-color);\n}\n`;
        fs.writeFileSync(cssPath, css, 'utf8');
        console.log('Updated styles.css');
    }
}
