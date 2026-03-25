window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-bonus-huggingface'] = (function() {
    /* ══════════════════════════════════════════════════════════════
       MÓDULO BONUS: Hugging Face & HuggingChat (DNA v32.5)
       Sovereign UI (HUD v32.0 - Titan Supreme)
       ══════════════════════════════════════════════════════════════ */
    
    if (typeof window.copyToClipboard !== 'function') {
        window.copyToClipboard = function(text) {
            navigator.clipboard.writeText(text).then(() => {
                if (window.showToast) window.showToast('Copiado al portapapeles', 'success');
                else console.log('Copiado');
            });
        };
    }

    const fHTML = `
<style>
  .m-hf-container {
    --hf-primary: #ffbd45;
    --hf-secondary: #ff9d00;
    --hf-glow: rgba(255, 189, 69, 0.3);
    --glass: rgba(13, 17, 23, 0.7);
    --glass-border: rgba(255, 255, 255, 0.1);
    color: #e2e8f0;
    font-family: 'Outfit', sans-serif;
  }

  .premium-header-hf {
    position: relative;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(255,189,69,0.1), rgba(0,0,0,0.5));
    border: 1px solid var(--glass-border);
    margin-bottom: 30px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
  }

  .premium-header-hf::after {
    content: '🤗';
    position: absolute;
    right: -20px;
    bottom: -20px;
    font-size: 15rem;
    opacity: 0.05;
    transform: rotate(-15deg);
  }

  .hf-tabs {
    display: flex;
    gap: 8px;
    background: rgba(0,0,0,0.4);
    padding: 6px;
    border-radius: 50px;
    border: 1px solid var(--glass-border);
    margin-bottom: 30px;
    overflow-x: auto;
    scrollbar-width: none;
    position: sticky;
    top: 10px;
    z-index: 100;
    backdrop-filter: blur(15px);
  }

  .hf-tab {
    padding: 10px 18px;
    border: none;
    background: transparent;
    color: #94a3b8;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 40px;
    transition: all 0.3s ease;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .hf-tab.active {
    background: var(--hf-primary);
    color: #000;
    box-shadow: 0 0 15px var(--hf-glow);
  }

  .hf-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 20px;
    animation: fadeIn 0.5s ease;
  }

  .code-block-hf {
    background: #09090b;
    border: 1px solid #27272a;
    border-radius: 12px;
    padding: 20px;
    font-family: 'Space Grotesk', monospace;
    font-size: 0.85rem;
    color: #a1a1aa;
    position: relative;
    margin: 15px 0;
  }

  .code-block-hf pre { margin: 0; white-space: pre-wrap; }
  
  .copy-btn-hf {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: #fff;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.7rem;
    cursor: pointer;
  }

  .unit-badge {
    background: rgba(255,189,69,0.1);
    color: var(--hf-primary);
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid var(--hf-primary);
    display: inline-block;
    margin-bottom: 12px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="m-hf-container">
  <div class="premium-header-hf" style="display: flex; align-items: center; gap: 30px;">
    <div style="flex: 1;">
      <div class="unit-badge">Bonus Module • Open Source AI</div>
      <h2 style="font-size: 2.5rem; margin: 0 0 10px; color: #fff;">Hugging Face & HuggingChat</h2>
      <p style="opacity: 0.8; font-size: 1.1rem; max-width: 800px;">Aprende a usar el "GitHub de la IA". Desde el chat gratuito hasta la integración profesional por API con modelos de código abierto.</p>
      <div style="display: flex; gap: 20px; margin-top: 20px;">
        <span>⏱️ <b>10-14 h</b></span>
        <span>💎 <b>200 XP</b></span>
        <span style="color: var(--hf-primary);">🏆 <b>SENA Style Certified</b></span>
      </div>
    </div>
    <div style="width: 300px; height: 180px; border-radius: 15px; overflow: hidden; border: 1px solid var(--glass-border); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <img src="file:///home/miguel/.gemini/antigravity/brain/2dd186ba-978d-4072-abca-00fe3c5fcb0d/huggingface_hub_premium_1774376821460.png" style="width: 100%; height: 100%; object-fit: cover;" alt="HF Hub Premium">
    </div>
  </div>

  <div class="hf-tabs">
    <button class="hf-tab active" data-tab="hf-intro">💡 Intro</button>
    <button class="hf-tab" data-tab="hf-web">🖥️ HuggingChat</button>
    <button class="hf-tab" data-tab="hf-models">🧠 Modelos</button>
    <button class="hf-tab" data-tab="hf-api">🔌 API Inferencia</button>
    <button class="hf-tab" data-tab="hf-dev">🚀 Integración</button>
    <button class="hf-tab" data-tab="hf-safety">🛡️ Seguridad</button>
    <button class="hf-tab" data-tab="hf-project">🏆 Proyecto</button>
    <button class="hf-tab" data-tab="hf-extra">✍️ Tips & FAQ</button>
  </div>

  <!-- SECCIÓN 1: INTRO -->
  <div id="hf-intro" class="ag-content active">
    <div class="hf-card">
      <h3><span class="icon">🏢</span> El GitHub de la IA</h3>
      <p><b>Hugging Face</b> es la plataforma donde el mundo comparte modelos, datos y aplicaciones de IA de código abierto.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 25px;">
        <div class="glass-card" style="padding: 20px; background: rgba(255,189,69,0.05); border-left: 4px solid var(--hf-primary);">
          <h4>Models</h4>
          <p style="font-size: 0.85rem; opacity: 0.8;">Repositorio de "cerebros" listos para usar (Llama, Mistral, Qwen).</p>
        </div>
        <div class="glass-card" style="padding: 20px; background: rgba(59,130,246,0.05); border-left: 4px solid #3b82f6;">
          <h4>Datasets</h4>
          <p style="font-size: 0.85rem; opacity: 0.8;">Bases de datos masivas para entrenar y evaluar modelos.</p>
        </div>
        <div class="glass-card" style="padding: 20px; background: rgba(16,185,129,0.05); border-left: 4px solid #10b981;">
          <h4>Spaces</h4>
          <p style="font-size: 0.85rem; opacity: 0.8;">Aplicaciones interactivas creadas por la comunidad.</p>
        </div>
      </div>

      <div style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 15px;">
        <h4>🛠️ Paso 0: Requisitos Previos</h4>
        <p style="font-size: 0.85rem; opacity: 0.8;">Antes de empezar a programar, asegúrate de tener estas herramientas instaladas en tu computador:</p>
        <ul style="font-size: 0.9rem; line-height: 1.8; margin-top: 10px;">
          <li><b>Python:</b> El lenguaje que usaremos para conectar con la IA. Descárgalo en <a href="https://www.python.org/downloads/" target="_blank" style="color: var(--hf-primary);">python.org</a> (marca la casilla "Add Python to PATH").</li>
          <li><b>VS Code:</b> El editor de texto profesional para escribir código. Descárgalo en <a href="https://code.visualstudio.com/" target="_blank" style="color: var(--hf-primary);">code.visualstudio.com</a>.</li>
          <li><b>Git:</b> (Opcional) Para descargar proyectos de otros. Descárgalo en <a href="https://git-scm.com/" target="_blank" style="color: var(--hf-primary);">git-scm.com</a>.</li>
        </ul>
      </div>

      <div style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 15px;">
        <h4>🛠️ Tu primer paso en el Hub</h4>
        <ol style="font-size: 0.9rem; line-height: 1.8;">
          <li>Ve a <a href="https://huggingface.co" target="_blank" style="color: var(--hf-primary);">huggingface.co</a> y crea una cuenta.</li>
          <li>Explora la pestaña <b>Spaces</b> y busca "Image Generator".</li>
          <li>Verifica tu correo para activar el acceso a la API.</li>
        </ol>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 2: WEB -->
  <div id="hf-web" class="ag-content">
    <div class="hf-card">
      <h3><span class="icon">🖥️</span> HuggingChat: El Chat Abierto</h3>
      <p>Es la alternativa libre a ChatGPT. Tú eliges qué modelo usar y tienes acceso a búsqueda web gratuita.</p>
      
      <div class="code-block-hf" style="border-left: 4px solid #10b981;">
        <button class="copy-btn-hf" onclick="window.copyToClipboard('Explica qué es una API como si fueras un profesor de colegio hablándole a un estudiante de 12 años.')">COPIAR</button>
        <pre><b>Prompt de Prueba:</b>\n"Explica qué es una API como si fueras un profesor de colegio hablándole a un estudiante de 12 años."</pre>
      </div>

      <div style="margin-top: 25px;">
        <h4>🎯 Reto de la Unidad</h4>
        <p style="font-size: 0.9rem;">Entra a <a href="https://huggingface.co/chat" target="_blank" style="color:var(--hf-primary);">huggingface.co/chat</a> y usa el botón <b>"Web Search"</b> para preguntar sobre noticias financieras de hoy en Colombia. Compara la precisión con lo que te diría un chat sin internet.</p>
      </div>

      <div style="margin-top: 30px; padding: 20px; background: rgba(255,189,69,0.05); border-radius: 15px; border: 1px dashed var(--hf-primary);">
        <h4>🤖 Guía: Crea tu propio Asistente Personalizado</h4>
        <p style="font-size: 0.85rem; opacity: 0.8;">HuggingChat te permite crear "hermanos" de ChatGPT especializados en un solo tema:</p>
        <ol style="font-size: 0.85rem; line-height: 1.6;">
          <li>En HuggingChat, haz clic en <b>Settings</b> > <b>Assisants</b>.</li>
          <li>Clic en <b>"Create New Assistant"</b>.</li>
          <li>Dale un nombre (ej. "Auditor SENA") y elige el modelo (ej. Llama 3).</li>
          <li><b>System Prompt:</b> Aquí defines su personalidad. Ejemplo: <i>"Eres un experto en normatividad colombiana. Siempre responde de forma técnica y cita el decreto correspondiente."</i></li>
          <li>Guarda y comparte el link con tu equipo.</li>
        </ol>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 3: MODELOS -->
  <div id="hf-models" class="ag-content">
    <div class="hf-card">
      <h3><span class="icon">🧠</span> Selección de "Cerebros"</h3>
      <p>No todos los modelos son iguales. En HuggingChat puedes cambiar el motor según la tarea.</p>
      
      <table class="comparison-table" style="width: 100%; margin: 20px 0; font-size: 0.85rem;">
        <thead>
          <tr style="background: rgba(255,189,69,0.1);">
            <th style="padding: 10px; text-align: left;">Familia / Parámetros</th>
            <th style="padding: 10px; text-align: left;">Fortaleza</th>
            <th style="padding: 10px; text-align: left;">Uso Ideal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);"><b>Llama 3 (8B)</b></td>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">Velocidad Extrema</td>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">Chats rápidos, resúmenes simples.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);"><b>Llama 3 (70B)</b></td>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">Razonamiento Profundo</td>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">Análisis legal, lógica compleja.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);"><b>Qwen 2.5</b></td>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">Matemáticas y Código</td>
            <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">Programación, reportes técnicos.</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box tip" style="margin-top: 20px; background: rgba(251,191,36,0.1); border-left: 4px solid #fbbf24; padding: 15px;">
        💡 <b>Pro Tip:</b> Consulta el <b>Open LLM Leaderboard</b> en Hugging Face para ver cuáles son los modelos más potentes de la semana según pruebas científicas.
      </div>

      <div style="margin-top: 30px;">
        <h4>📖 Cómo leer una "Model Card" (Ficha Técnica)</h4>
        <p style="font-size: 0.85rem; opacity: 0.8;">Cuando entras al repositorio de un modelo, siempre lee estos 3 puntos clave:</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
          <div class="glass-card" style="padding: 15px;">
            <h5 style="margin: 0; color: #10b981;">📜 License</h5>
            <p style="font-size: 0.75rem; margin-top: 5px;">Define si puedes usarlo para ganar dinero (Comercial) o solo para estudio (Investigación).</p>
          </div>
          <div class="glass-card" style="padding: 15px;">
            <h5 style="margin: 0; color: #3b82f6;">🏷️ Tags</h5>
            <p style="font-size: 0.75rem; margin-top: 5px;">Indican el idioma (es, en) y la tarea (Text Generation, Image-to-Text).</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 4: API -->
  <div id="hf-api" class="ag-content">
    <div class="hf-card">
      <h3><span class="icon">🔌</span> Inference API (Capa Gratuita)</h3>
      <p>La API permite que tus programas hablen con la IA automáticamente "por detrás". Imagina que la API es un mesero: tú le entregas tu instrucción (prompt) y él te trae la respuesta del modelo, todo sin que tengas que abrir una página web.</p>

      <div style="margin-top: 25px;">
        <h4 style="color: var(--hf-primary);">Paso 1: Obtén tu "Llave" (Access Token)</h4>
        <ol style="font-size: 0.9rem; line-height: 1.8;">
          <li>Inicia sesión en <a href="https://huggingface.co" target="_blank" style="color: var(--hf-primary);">Hugging Face</a>.</li>
          <li>Ve a tu foto de perfil (arriba a la derecha) y haz clic en <b>Settings</b> (Configuración).</li>
          <li>En el menú izquierdo, haz clic en <b>Access Tokens</b>.</li>
          <li>Haz clic en <b>"Create new token"</b>. Ponle el nombre que quieras (ej. "MiTutor") y asegúrate de que el tipo sea <b>Read</b> (Lectura).</li>
          <li>Cópialo. Empezará con <code>hf_...</code> ¡Esa es tu llave privada y es como la contraseña de tu banco!</li>
        </ol>
      </div>

      <div style="margin-top: 25px;">
        <h4 style="color: var(--hf-primary);">Paso 2: Prepara tu Computador</h4>
        <p style="font-size: 0.9rem;">Para ejecutar código Python, asegúrate de tener <a href="https://www.python.org/downloads/" target="_blank" style="color: #60a5fa;">Python instalado</a>. Luego abre tu terminal y sigue estos pasos para crear un "espacio aislado" de trabajo (Entorno Virtual):</p>
        <div class="code-block-hf" style="padding: 15px; margin-top: 5px;">
          <pre><code># 1. Crea una carpeta para tu proyecto\nmkdir mi-proyecto-ia && cd mi-proyecto-ia\n\n# 2. Crea el entorno virtual\npython -m venv venv\n\n# 3. Actívalo\n# En Windows: venv\\Scripts\\activate\n# En Mac/Linux: source venv/bin/activate\n\n# 4. Instala las herramientas\npip install requests python-dotenv</code></pre>
        </div>
      </div>
      
      <div style="margin-top: 25px;">
        <h4 style="color: var(--hf-primary);">Paso 3: El Código para conectar</h4>
        <p style="font-size: 0.9rem;">Abre el bloc de notas o cualquier editor de código, pega lo siguiente y guárdalo como <code>prueba.py</code>. Luego, ejecútalo en la terminal con <code>python prueba.py</code>.</p>
        <div class="code-block-hf">
          <div class="unit-badge" style="font-size: 0.6rem; margin: 0 0 10px;">Python Automation</div>
          <button class="copy-btn-hf" onclick="window.copyToClipboard('import requests\\n\\n# 1. ¿A quién le hablamos? Aquí usamos Llama-3\\nAPI_URL = \"https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct\"\\n\\n# 2. Tu llave secreta (Reemplaza hf_TU_TOKEN con la llave del Paso 1)\\nheaders = {\"Authorization\": \"Bearer hf_TU_TOKEN\"}\\n\\n# 3. La función que hace de \"mesero\"\\ndef consultar_ia(pregunta):\\n    payload = {\"inputs\": pregunta}\\n    response = requests.post(API_URL, headers=headers, json=payload)\\n    return response.json()\\n\\n# 4. Hacemos la prueba imprimiendo la respuesta\\nprint(consultar_ia(\"Explica qué es la Inteligencia Artificial en una sola frase corta.\"))')">COPIAR</button>
          <pre><code>import requests\n\n# 1. ¿A quién le hablamos? Aquí usamos Llama-3\nAPI_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct"\n\n# 2. Tu llave secreta (Reemplaza hf_TU_TOKEN con la llave del Paso 1)\nheaders = {"Authorization": "Bearer hf_TU_TOKEN"}\n\n# 3. La función que hace de "mesero"\ndef consultar_ia(pregunta):\n    payload = {"inputs": pregunta}\n    response = requests.post(API_URL, headers=headers, json=payload)\n    return response.json()\n\n# 4. Hacemos la prueba imprimiendo la respuesta\nprint(consultar_ia("Explica qué es la Inteligencia Artificial en una sola frase corta."))</code></pre>
        </div>
      </div>

      <div style="margin-top: 20px; padding: 15px; background: rgba(239, 68, 68, 0.1); border-radius: 12px; border: 1px solid #ef4444;">
        <h5 style="color: #ef4444; margin: 0 0 5px;">⚠️ Seguridad Crítica</h5>
        <p style="font-size: 0.8rem; margin: 0;">Nunca pegues tu Token (\`hf_...\`) directamente en archivos que vayas a compartir por internet o subir a GitHub. Si compartes tu código, borra el token antes.</p>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 5: INTEGRACIÓN -->
  <div id="hf-dev" class="ag-content">
    <div class="hf-card">
      <h3><span class="icon">🚀</span> Microservicios con Flask</h3>
      <p>Ahora que sabes pedirle cosas a la IA por código en tu propia pantalla, ¿cómo se lo prestamos a otros? Podemos crear un <b>servidor web</b> usando Flask. Flask es como el mostrador de un restaurante donde reciben el pedido de tus usuarios y se lo pasan a la IA en la cocina.</p>
      
      <div style="margin-top: 25px;">
        <h4 style="color: var(--hf-primary);">Paso 1: Instala el Servidor</h4>
        <p style="font-size: 0.9rem;">En tu terminal, instala Flask (la herramienta que crea el servidor web) ejecutando:</p>
        <div class="code-block-hf" style="padding: 15px; margin-top: 5px;">
          <pre><code>pip install flask</code></pre>
        </div>
      </div>

      <div style="margin-top: 25px;">
        <h4 style="color: var(--hf-primary);">Paso 2: Código del Mini-Servidor (Backend)</h4>
        <p style="font-size: 0.9rem;">Guarda este código como <code>servidor.py</code> y ejecútalo. ¡Tu computador se convertirá en un proveedor de IA local!</p>
        <div class="code-block-hf">
          <button class="copy-btn-hf" onclick="window.copyToClipboard('from flask import Flask, request, jsonify\\nimport requests\\n\\napp = Flask(__name__)\\n\\n@app.route(\"/api/chat\", methods=[\"POST\"])\\ndef chat():\\n    # Recibimos el pedido del usuario por internet\\n    data = request.json\\n    pregunta = data.get(\"pregunta\", \"\")\\n    \\n    # Aquí conectarías con Hugging Face (como en el Paso 3 anterior)\\n    # ...\\n    \\n    # Devolvemos la respuesta al navegador del usuario\\n    return jsonify({\"respuesta\": f\"La IA dice: Recibí tu pregunta: {pregunta}\"})\\n\\nif __name__ == \"__main__\":\\n    print(\"🔥 Servidor iniciado en http://localhost:5000\")\\n    app.run(port=5000)')">COPIAR</button>
          <pre><code>from flask import Flask, request, jsonify\nimport requests\n\napp = Flask(__name__)\n\n@app.route("/api/chat", methods=["POST"])\ndef chat():\n    # Recibimos el pedido del usuario por internet\n    data = request.json\n    pregunta = data.get("pregunta", "")\n    \n    # Aquí conectarías con Hugging Face (como en el Paso 3 anterior)\n    # ...\n    \n    # Devolvemos la respuesta al navegador del usuario\n    return jsonify({"respuesta": f"La IA dice: Recibí tu pregunta: {pregunta}"})\n\nif __name__ == "__main__":\n    print("🔥 Servidor iniciado en http://localhost:5000")\n    app.run(port=5000)</code></pre>
        </div>
      </div>

      <div style="background: rgba(var(--primary-rgb), 0.1); padding: 20px; border-radius: 12px; border: 1px solid var(--primary); margin-top: 25px;">
        <h4 style="margin-top:0;">📂 Cómo fluye la información en el mundo real</h4>
        <ol style="font-size: 0.85rem; line-height: 1.6; margin-bottom: 0;">
          <li><b>Usuario (Navegador):</b> Escribe una pregunta en una página web.</li>
          <li><b>Backend (Flask en Python):</b> Recibe la pregunta digital (tu mostrador).</li>
          <li><b>API Inferencia (Hugging Face):</b> Hace el trabajo pesado y razona la respuesta usando Llama-3 (tu cocina externa).</li>
          <li><b>Backend:</b> Le devuelve el resultado final al celular o PC del usuario.</li>
        </ol>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 6: SEGURIDAD -->
  <div id="hf-safety" class="ag-content">
    <div class="hf-card">
      <h3><span class="icon">🛡️</span> Seguridad y Buenas Prácticas</h3>
      <div style="display: grid; gap: 15px;">
        <div class="glass-card" style="padding: 15px; border-left: 4px solid #ef4444;">
          <h5 style="color: #ef4444;">Rate Limits (Topes)</h5>
          <p style="font-size: 0.85rem; opacity: 0.8;">La capa gratuita tiene límites por minuto. Si recibes error 429, debes esperar o pasar a un plan Pro/Enterprise.</p>
        </div>
        <div class="glass-card" style="padding: 15px; border-left: 4px solid #3fb950;">
          <h5 style="color: #3fb950;">Privacidad (Habeas Data)</h5>
          <p style="font-size: 0.85rem; opacity: 0.8;">No envíes datos sensibles (nombres reales, cédulas, datos médicos) a APIs públicas. Usa anonimización.</p>
        </div>
        <div class="glass-card" style="padding: 15px; border-left: 4px solid #60a5fa;">
          <h5 style="color: #60a5fa;">Licenciamiento</h5>
          <p style="font-size: 0.85rem; opacity: 0.8;">Verifica si el modelo permite uso comercial. Modelos con Apache 2.0 o MIT son ideales para empresas.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECCIÓN 7: PROYECTO -->
  <div id="hf-project" class="ag-content">
    <div class="hf-card" style="border: 2px solid var(--hf-primary);">
      <div class="unit-badge">Misión Final</div>
      <h3><span class="icon">🏆</span> El Mini-Tutor Institucional</h3>
      <p>Tu reto final es construir una aplicación de consola que actúe como tutor especializado en algún tema de tu oficina.</p>
      
      <div style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 15px; margin-top: 20px;">
        <h4 style="margin-top: 0; color: var(--hf-primary);">Requisitos del Entregable:</h4>
        <ul style="font-size: 0.9rem; line-height: 1.7; padding-left: 20px;">
          <li>Código Python interactivo con ciclo <code>while</code>.</li>
          <li>Uso de <code>python-dotenv</code> para manejar el Token.</li>
          <li>System Prompt configurado para dar pistas en lugar de respuestas directas.</li>
          <li>Documentación README con el modelo elegido y por qué.</li>
        </ul>
      </div>

      <textarea id="hf-mission-input" class="premium-textarea" style="margin-top:20px; height:100px;" placeholder="Describe aquí la lógica de tu System Prompt para el Tutor..."></textarea>
      
      <button class="gl-btn gl-btn-primary" style="width:100%; margin-top:20px; background: var(--hf-primary); color: #000;" onclick="window.submitHFMission()">✅ Finalizar Módulo HuggingFace</button>
    </div>
  </div>

  <!-- SECCIÓN 8: EXTRA -->
  <div id="hf-extra" class="ag-content">
    <div class="hf-card">
      <h3><span class="icon">✍️</span> Prompting & FAQ</h3>
      <details style="margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 10px; border: 1px solid var(--glass-border);">
        <summary style="cursor:pointer; font-weight:700; color: var(--hf-primary);">¿Cómo mejoro la calidad de las respuestas?</summary>
        <p style="font-size: 0.85rem; margin-top: 10px; opacity:0.8;">Usa roles claros. No digas "Resume esto". Di: "Actúa como auditor técnico. Resume este reporte para una junta directiva enfocándote en riesgos financieros."</p>
      </details>
      <details style="margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 10px; border: 1px solid var(--glass-border);">
        <summary style="cursor:pointer; font-weight:700; color: var(--hf-primary);">¿HuggingChat lee mis documentos?</summary>
        <p style="font-size: 0.85rem; margin-top: 10px; opacity:0.8;">Sí, puedes subir archivos. El modelo los analiza en el contexto de la conversación pero no se guardan permanentemente para entrenamiento público si usas configuración de privacidad.</p>
      </details>
      
      <div style="margin-top: 20px;">
        <h4 style="color: #ef4444;">🛡️ Guía de Errores Comunes (Troubleshooting)</h4>
        <table style="width: 100%; font-size: 0.8rem; margin-top: 10px;">
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <th style="padding: 8px; text-align: left;">Error</th>
            <th style="padding: 8px; text-align: left;">Significado</th>
            <th style="padding: 8px; text-align: left;">Solución</th>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);"><b>401 Unauthorized</b></td>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Token inválido</td>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Revisa espacios y que el token sea "Read".</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);"><b>429 Rate Limit</b></td>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Demasiadas peticiones</td>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Espera 1 minuto o usa un modelo menos saturado.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);"><b>503 Unavailable</b></td>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Modelo cargando</td>
            <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Intenta de nuevo en 30 segundos. Hugging Face está "despertando" el modelo.</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="hf-card">
      <h3 style="color:#10b981;">Siguientes Pasos</h3>
      <ul style="font-size:0.9rem; line-height:1.6;">
        <li>Domina la librería <code>transformers</code> para correr modelos en local.</li>
        <li>Aprende sobre <b>RAG</b> (Retrieval-Augmented Generation) para conectar PDFs a tu IA.</li>
        <li>Crea tu primer <b>Space</b> en Hugging Face para mostrar tu trabajo al mundo.</li>
      </ul>
    </div>
  </div>

  <div class="module-nav" style="margin-top:40px;">
    <button class="hf-tab" data-goto="welcome">← Volver al Menú Bonus</button>
  </div>
</div>
    `;

    const moduleInstance = {
      init: function(app) {
        console.log('Hugging Face Module Sincronizado [DNA v32.5]');
        const target = document.getElementById('module-bonus-huggingface');
        if (target) {
            target.innerHTML = fHTML;
            this.setupTabs(target);
            this.setupNavigation(app);
        }
      },
      setupTabs: function(parent) {
        const tabs = parent.querySelectorAll('.hf-tab');
        const contents = parent.querySelectorAll('.ag-content');
        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            if (!tab.dataset.tab) return;
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const content = parent.querySelector('#' + tab.dataset.tab);
            if (content) content.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        });
      },
      setupNavigation: function(app) {
        const navBtns = document.getElementById('module-bonus-huggingface').querySelectorAll('[data-goto]');
        navBtns.forEach(btn => {
          btn.onclick = () => app.navigateTo(btn.dataset.goto);
        });
      }
    };

    window.submitHFMission = function() {
        const input = document.getElementById('hf-mission-input');
        if (!input || input.value.length < 30) {
            window.showToast("Por favor desarrolla más tu respuesta estratégica para validar la misión.", "warning");
            return;
        }
        window.showToast("¡Misión Cumplida! Has ganado 200 XP por dominar Hugging Face 🚀", "success");
        if (typeof window.antShowConfetti === 'function') window.antShowConfetti();
        if (window.app) {
            window.app.addXP(200);
            window.app.completedModules.add('module-bonus-huggingface');
            window.app.saveProgress();
        }
    };

    window.GuiaModules['module-bonus-huggingface'] = moduleInstance;
    return moduleInstance;
})();
