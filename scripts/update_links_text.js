const fs = require('fs');
const path = require('path');

const toolLinks = {
    "ChatGPT Plus": "https://chatgpt.com",
    "ChatGPT": "https://chatgpt.com",
    "Google Gemini": "https://gemini.google.com",
    "Gemini": "https://gemini.google.com",
    "Claude Pro": "https://claude.ai",
    "Claude": "https://claude.ai",
    "Microsoft Copilot": "https://copilot.microsoft.com",
    "Copilot": "https://copilot.microsoft.com",
    "Perplexity Pro": "https://perplexity.ai",
    "Perplexity": "https://perplexity.ai",
    "Canva Pro": "https://canva.com",
    "Canva": "https://canva.com",
    "Midjourney": "https://midjourney.com",
    "DALL-E 3": "https://chatgpt.com",
    "DALL-E": "https://chatgpt.com",
    "Bolt.new": "https://bolt.new",
    "v0.dev": "https://v0.dev",
    "Replit AI": "https://replit.com",
    "Replit": "https://replit.com",
    "Lovable": "https://lovable.dev",
    "Google NotebookLM": "https://notebooklm.google",
    "NotebookLM": "https://notebooklm.google",
    "Consensus": "https://consensus.app",
    "Whisper": "https://openai.com/research/whisper",
    "Otter.ai Pro": "https://otter.ai",
    "Otter.ai": "https://otter.ai",
    "Otter": "https://otter.ai",
    "CapCut": "https://capcut.com",
    "Clipchamp": "https://clipchamp.com",
    "HeyGen Pro": "https://heygen.com",
    "HeyGen": "https://heygen.com",
    "ElevenLabs Pro": "https://elevenlabs.io",
    "ElevenLabs": "https://elevenlabs.io",
    "Zapier": "https://zapier.com",
    "Make": "https://make.com",
    "IFTTT": "https://ifttt.com",
    "Power Automate": "https://flow.microsoft.com",
    "Notion AI": "https://notion.so/product/ai",
    "Notion": "https://notion.so",
    "Miro AI": "https://miro.com",
    "Miro": "https://miro.com",
    "Slack": "https://slack.com",
    "DeepL": "https://deepl.com",
    "LanguageTool": "https://languagetool.org",
    "Gamma Pro": "https://gamma.app",
    "Gamma": "https://gamma.app",
    "Decktopus": "https://www.decktopus.com",
    "SlidesAI": "https://slidesai.io",
    "Beautiful.ai": "https://beautiful.ai",
    "Microsoft Designer": "https://designer.microsoft.com",
    "Ideogram": "https://ideogram.ai",
    "Leonardo AI": "https://leonardo.ai",
    "Playground AI": "https://playground.com",
    "Remove.bg": "https://remove.bg",
    "LM Studio": "https://lmstudio.ai",
    "Jan.ai": "https://jan.ai",
    "Jan": "https://jan.ai",
    "Ollama": "https://ollama.com",
    "Adobe Firefly": "https://firefly.adobe.com",
    "Stable Diffusion": "https://stability.ai",
    "Descript": "https://descript.com",
    "GitHub Copilot": "https://github.com/features/copilot",
    "Cursor Pro": "https://cursor.sh",
    "Replit Core": "https://replit.com",
    "Google Apps Script": "https://script.google.com",
    "Ley 1581 de 2012": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981",
    "Ley 1712 de 2014": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56888",
    "Decreto 1078 de 2015": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62506",
    "Ley 1755 de 2015": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62413",
    "CONPES 3975 de 2019": "https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3975.pdf",
    "Constitución": "https://www.constitucioncolombia.com/",
    "DeepSeek": "https://chat.deepseek.com",
    "HuggingChat": "https://huggingface.co/chat",
    "Poe": "https://poe.com",
    "Cleanup.pictures": "https://cleanup.pictures",
    "Adobe Podcast": "https://podcast.adobe.com",
    "Hugging Face": "https://huggingface.co",
    "QuillBot": "https://quillbot.com"
};

// Ensure longer keys are processed first so "ChatGPT Plus" matches before "ChatGPT"
const keys = Object.keys(toolLinks).sort((a, b) => b.length - a.length);

const regexTokens = keys.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const toolsPattern = regexTokens.map(t => `(?<![\\w])${t}(?![\\w])`).join('|');
const globalRegex = new RegExp(`(<a\\b[^>]*>[\\s\\S]*?<\\/a>|<[^>]+>)|(${toolsPattern})`, 'gi');

function replaceTextWithLinks(content) {
    return content.replace(globalRegex, (match, ignoreGroup, toolNameGroup) => {
        if (ignoreGroup) {
            // It's inside a tag or an a-tag block, don't modify
            return match;
        }
        if (toolNameGroup) {
            // Find the correct case-sensitive key that matched
            const matchedKey = keys.find(k => k.toLowerCase() === toolNameGroup.toLowerCase());
            if (matchedKey) {
                const url = toolLinks[matchedKey];
                return `<a href="${url}" target="_blank" class="tool-link inline-tool-link" title="Ir a ${matchedKey}">${toolNameGroup}</a>`;
            }
        }
        return match;
    });
}

const folder = __dirname;
const files = fs.readdirSync(folder).filter(f =>
    (f.endsWith('.js') && (f.startsWith('module') || f.startsWith('app'))) ||
    f === 'index.html'
);

let changesCount = 0;

files.forEach(file => {
    const filePath = path.join(folder, file);
    let original = fs.readFileSync(filePath, 'utf8');
    let modified = replaceTextWithLinks(original);

    if (original !== modified) {
        fs.writeFileSync(filePath, modified, 'utf8');
        changesCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Total files modified: ${changesCount}`);
