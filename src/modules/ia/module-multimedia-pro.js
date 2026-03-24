window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-multimedia-pro'] = (function() {
/* ═══════════════════════════════════════════
   MÓDULO BONUS: Multimedia Pro (Video e Imagen)
   Versión Enriquecida — Prompt Generator y Simulador Visual
   ═══════════════════════════════════════════ */

  const mediaHTML = `

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(236,72,153,0.1), rgba(139,92,246,0.1)); border: 1px solid rgba(236,72,153,0.3);">
  <div class="module-number gamer-badge" style="background:#ec4899;color:#fff;">BONUS: CREATIVIDAD</div>
  <h2 class="module-title glow-text" style="color:#f9a8d4;">🎬 Multimedia Pro: <a href="https://midjourney.com" target="_blank" style="color:inherit; text-decoration:none;">Midjourney</a>, <a href="https://openai.com/dall-e-3" target="_blank" style="color:inherit; text-decoration:none;">DALL-E</a> & <a href="https://openai.com/sora" target="_blank" style="color:inherit; text-decoration:none;">Sora</a></h2>
  <p class="module-description" style="color:#cbd5e1;">Aprende el arte de "Prompt Engineering" visual. Para producir arte de calidad comercial, necesitas enseñarle a la IA parámetros de lentes de cámara, estilos de luz y dirección de arte.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 15 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: Director de Arte</span>
  </div>
</div>

<div class="m-mm-hero">
  <div style="font-size:0.76rem; font-weight:800; color:#f9a8d4; margin-bottom:8px;">MAPA MENTAL DEL MÓDULO</div>
  <h3 style="margin:0 0 8px; color:#fff;">La IA visual no es solo para “crear arte”; es una fábrica rápida de activos de comunicación.</h3>
  <p style="margin:0; color:#dbe4f0; line-height:1.8;">Piensa estas herramientas como un estudio creativo comprimido: idean conceptos, exploran variaciones, generan storyboards, ayudan a vender ideas y aceleran la preproducción. El secreto no es “escribir más palabras”, sino dirigir composición, intención, audiencia y formato final.</p>
  <div class="m-mm-chip-row">
    <span class="m-mm-chip">Portadas y banners</span>
    <span class="m-mm-chip">Storyboards y guiones visuales</span>
    <span class="m-mm-chip">Mockups de campañas</span>
    <span class="m-mm-chip">Frames para video</span>
    <span class="m-mm-chip">Exploración creativa rápida</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m-mm-tools">🌐 Mapa de Herramientas</button>
  <button class="tab-btn" data-tab="m-mm-chooser">🎯 Decisor de Herramientas</button>
  <button class="tab-btn" data-tab="m-mm-concept">📚 Anatomía del Prompt</button>
  <button class="tab-btn" data-tab="m-mm-decider">🧭 Cuándo Usarlo</button>
  <button class="tab-btn" data-tab="m-mm-lab">✨ Generador Studio</button>
  <button class="tab-btn" data-tab="m-mm-cases">🧭 Casos Prácticos</button>
  <button class="tab-btn" data-tab="m-mm-prompts">🧠 Prompts Maestros</button>
  <button class="tab-btn" data-tab="m-mm-quality">📊 Evaluación de Calidad</button>
  <button class="tab-btn" data-tab="m-mm-antipatterns">🚫 Errores</button>
  <button class="tab-btn" data-tab="m-mm-estrategia">🎯 Estrategia Real</button>
  <button class="tab-btn" data-tab="m-mm-mission">🏆 Reto Final</button>
</div>

<!-- TAB 0: MAPA DE HERRAMIENTAS -->
<div id="m-mm-tools" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🌐</span> Mapa de Herramientas: Midjourney, DALL-E & Sora</h3>
    <p>Cada herramienta de IA visual tiene fortalezas distintas. Elegir la correcta multiplica tus resultados.</p>
    
    <div style="background:rgba(236,72,153,0.05); border:1px solid rgba(236,72,153,0.2); border-radius:12px; padding:20px; margin:20px 0;">
      <h4 style="color:#f9a8d4; margin-top:0;">📊 Comparativa Rápida</h4>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:15px; margin-top:15px;">
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border-left:4px solid #8b5cf6;">
          <h5 style="margin:0 0 8px; color:#fff;">🎨 <a href="https://midjourney.com" target="_blank" style="color:inherit; text-decoration:underline;">Midjourney</a></h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0 0 10px;"><b>Fuerte en:</b> Arte conceptual, estilos artísticos, composición creativa</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0 0 5px;"><b>Parámetros clave:</b> --ar, --style, --seed, --chaos</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0 0 5px;"><b>Mejor para:</b> Portadas, ilustraciones, concept art</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0;"><b>Costo:</b> Suscripción mensual</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border-left:4px solid #10b981;">
          <h5 style="margin:0 0 8px; color:#fff;">🖼️ <a href="https://openai.com/dall-e-3" target="_blank" style="color:inherit; text-decoration:underline;">DALL-E 3</a> (<a href="https://chat.openai.com" target="_blank" style="color:inherit; text-decoration:underline;">ChatGPT</a>)</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0 0 10px;"><b>Fuerte en:</b> Comprensión de contexto, texto en imágenes, fotorealismo</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0 0 5px;"><b>Parámetros clave:</b> Estilo, calidad, tamaño, prompt detallado</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0 0 5px;"><b>Mejor para:</b> Mockups, banners, imágenes con texto</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0;"><b>Costo:</b> Créditos o suscripción ChatGPT Plus</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:8px; border-left:4px solid #3b82f6;">
          <h5 style="margin:0 0 8px; color:#fff;">🎬 <a href="https://openai.com/sora" target="_blank" style="color:inherit; text-decoration:underline;">Sora</a> (OpenAI)</h5>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0 0 10px;"><b>Fuerte en:</b> Video realista, narrativa visual, movimiento natural</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0 0 5px;"><b>Parámetros clave:</b> Duración, estilo, movimiento, cámara</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0 0 5px;"><b>Mejor para:</b> Storyboards, clips promocionales, animaciones</p>
          <p style="font-size:0.75rem; color:#94a3b8; margin:0;"><b>Costo:</b> Por uso (cuando esté disponible)</p>
        </div>
      </div>
    </div>

    <div style="margin:25px 0;">
      <h4 style="color:#f9a8d4;">🎯 Regla de Elección Rápida</h4>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:15px;">
        <div style="background:rgba(16,185,129,0.05); padding:15px; border-radius:8px;">
          <div style="color:#10b981; font-weight:700; margin-bottom:8px;">ELIGE MIDJOURNEY SI...</div>
          <ul style="font-size:0.8rem; color:#cbd5e1; margin:0; padding-left:18px;">
            <li>Necesitas arte con estilo distintivo (pintura, ilustración)</li>
            <li>Quieres control total sobre composición y parámetros</li>
            <li>Estás creando portadas, arte conceptual o piezas artísticas</li>
            <li>No necesitas texto preciso en la imagen</li>
          </ul>
        </div>
        <div style="background:rgba(59,130,246,0.05); padding:15px; border-radius:8px;">
          <div style="color:#3b82f6; font-weight:700; margin-bottom:8px;">ELIGE DALL-E 3 SI...</div>
          <ul style="font-size:0.8rem; color:#cbd5e1; margin:0; padding-left:18px;">
            <li>Necesitas imágenes con texto legible y preciso</li>
            <li>Quieres fotorealismo o mockups de productos</li>
            <li>Estás creando banners, infografías o material institucional</li>
            <li>Prefieres trabajar dentro de <a href="https://chat.openai.com" target="_blank" style="color:inherit; text-decoration:underline;">ChatGPT</a> / <a href="https://copilot.microsoft.com" target="_blank" style="color:inherit; text-decoration:underline;">Copilot</a></li>
          </ul>
        </div>
        <div style="background:rgba(139,92,246,0.05); padding:15px; border-radius:8px; grid-column: span 2;">
          <div style="color:#8b5cf6; font-weight:700; margin-bottom:8px;">ELIGE SORA (CUANDO DISPONIBLE) SI...</div>
          <ul style="font-size:0.8rem; color:#cbd5e1; margin:0; padding-left:18px;">
            <li>Necesitas video en lugar de imágenes estáticas</li>
            <li>Quieres narrar una historia con movimiento</li>
            <li>Estás creando storyboards animados o clips promocionales</li>
            <li>Tu proyecto requiere secuencias temporales</li>
          </ul>
        </div>
      </div>
    </div>

    <div style="background:rgba(236,72,153,0.05); border:1px solid rgba(236,72,153,0.2); border-radius:12px; padding:20px; margin-top:20px;">
      <h4 style="color:#f9a8d4; margin-top:0;">💡 Consejo Profesional</h4>
      <p style="font-size:0.85rem; color:#cbd5e1; margin:0;">No intentes dominar todas las herramientas a la vez. Elige <b>una</b> según tu necesidad principal, domínala, y luego expande. La mayoría de proyectos solo necesitan 1-2 herramientas bien usadas, no 5 usadas mediocremente.</p>
      <button class="gl-btn gl-btn-outline" style="margin-top:15px; border-color:#ec4899; color:#ec4899;" onclick="mMmCopyPrompt(this, 'Herramienta recomendada: [MIDJOURNEY/DALL-E/SORA] porque necesito [ARTE CONCEPTUAL/FOTOREALISMO/VIDEO] para [TIPO DE PROYECTO]. Parámetros clave a usar: [LISTA].')">📋 Copiar Plantilla de Decisión</button>
    </div>
  </div>
</div>

<!-- TAB 1: DECISOR DE HERRAMIENTAS -->
<div id="m-mm-chooser" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🎯</span> Decisor de Herramientas: ¿Cuál Usar?</h3>
    <p>Responde estas preguntas clave para elegir la herramienta correcta. Cada respuesta te lleva a una recomendación específica.</p>
    
    <div class="m-mm-chooser-quiz">
      <div class="m-mm-quiz-step active" id="step-1">
        <h4 class="m-mm-chooser-title">1. ¿Qué tipo de resultado necesitas?</h4>
        <div class="m-mm-options">
          <button class="m-mm-option-btn" data-next="step-2" data-value="arte">🎨 Arte conceptual / Ilustración</button>
          <button class="m-mm-option-btn" data-next="step-2" data-value="foto">🖼️ Imagen fotorealista / Mockup</button>
          <button class="m-mm-option-btn" data-next="step-2" data-value="video">🎬 Video / Animación</button>
          <button class="m-mm-option-btn" data-next="step-2" data-value="texto">📝 Imagen con texto preciso</button>
        </div>
      </div>
      
      <div class="m-mm-quiz-step" id="step-2">
        <h4 class="m-mm-chooser-title">2. ¿Cuál es el nivel de control que necesitas?</h4>
        <div class="m-mm-options">
          <button class="m-mm-option-btn" data-next="step-3" data-value="alto">🎛️ Alto control (parámetros técnicos)</button>
          <button class="m-mm-option-btn" data-next="step-3" data-value="medio">⚙️ Control medio (estilos predefinidos)</button>
          <button class="m-mm-option-btn" data-next="step-3" data-value="bajo">✨ Fácil y rápido (menos configuración)</button>
        </div>
        <button class="gl-btn gl-btn-outline" style="margin-top:20px;" onclick="mMmChooserBack(1)">← Volver atrás</button>
      </div>
      
      <div class="m-mm-quiz-step" id="step-3">
        <h4 class="m-mm-chooser-title">3. ¿Para qué canal es el contenido?</h4>
        <div class="m-mm-options">
          <button class="m-mm-option-btn" data-next="result" data-value="redes">📱 Redes sociales / Web</button>
          <button class="m-mm-option-btn" data-next="result" data-value="presentacion">📊 Presentación / Informe</button>
          <button class="m-mm-option-btn" data-next="result" data-value="video">🎥 Video / Motion graphics</button>
          <button class="m-mm-option-btn" data-next="result" data-value="impreso">🖨️ Material impreso / Banner</button>
        </div>
        <button class="gl-btn gl-btn-outline" style="margin-top:20px;" onclick="mMmChooserBack(2)">← Volver atrás</button>
      </div>
      
      <div class="m-mm-quiz-step" id="result">
        <div class="m-mm-result-container">
          <span class="m-mm-result-badge">Resultado Inteligente</span>
          <h3 id="chooser-result">Calculando recomendación...</h3>
          <div id="chooser-details">Responde las preguntas para obtener tu recomendación personalizada.</div>
          <button class="m-mm-gen-btn" style="margin-top:25px;" onclick="mMmChooserReset()">🔄 Reiniciar Decisor</button>
        </div>
        <button class="gl-btn gl-btn-outline" style="margin-top:20px;" onclick="mMmChooserBack(3)">← Volver atrás</button>
      </div>
    </div>
    
    <div style="margin-top:40px;">
      <h4 class="m-mm-kicker">📋 Flujo de Decisión Rápida</h4>
      <div class="m-mm-chooser-flow">
        <div class="m-mm-flow-card">
          <div class="m-mm-flow-label" style="color:#ec4899;">SI NECESITAS...</div>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Arte con estilo único → <b>Midjourney</b></p>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:5px 0;">Mockups con texto → <b>DALL-E 3</b></p>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Video narrativo → <b>Sora</b></p>
        </div>
        <div class="m-mm-flow-card">
          <div class="m-mm-flow-label" style="color:#8b5cf6;">SI TIENES...</div>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Presupuesto limitado → <b>DALL-E (créditos)</b></p>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:5px 0;">Tiempo limitado → <b>Herramienta más simple</b></p>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Requisitos específicos → <b>Midjourney (control)</b></p>
        </div>
        <div class="m-mm-flow-card">
          <div class="m-mm-flow-label" style="color:#3b82f6;">SI TU PROYECTO ES...</div>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Interno / rápido → <b>Cualquiera</b></p>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:5px 0;">Externo / profesional → <b>Midjourney / DALL-E Pro</b></p>
          <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">Experimental / prueba → <b>Gratuita primero</b></p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 2: CONCEPTO -->
<div id="m-mm-concept" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">📷</span> La Fórmula Secreta de Midjourney / DALL-E</h3>
    <p>Si escribes "Un perro lindo", obtendrás algo de aspecto barato (Stock). Si escribes con parámetros de Director de Fotografía, obtendrás arte de 10,000 USD.</p>
    
    <div style="background:#1f2937; padding:15px; border-radius:8px; border-left:4px solid #ec4899; margin:20px 0;">
      <h4 style="margin:0 0 10px;color:#f9a8d4;">Fórmula Estándar:</h4>
      <p style="font-family:monospace; color:#a78bfa; font-size:0.9rem; margin:0;">[Sujeto Principal] + [Entorno/Acción] + [Estilo de Arte] + [Iluminación] + [Cámara/Lente]</p>
    </div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
      <div style="background:rgba(255,255,255,0.03);padding:15px;border-radius:8px;">
        <div style="color:#ec4899; font-weight:700; margin-bottom:5px;">💡 Iluminación Mágica</div>
        <div style="font-size:0.8rem; color:#cbd5e1;">Usa términos como: <i>Cinematic Lighting, Volumetric Light, Neon Glow, Golden Hour.</i></div>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:15px;border-radius:8px;">
        <div style="color:#8b5cf6; font-weight:700; margin-bottom:5px;">🎥 Lentes (Estilo Realista)</div>
        <div style="font-size:0.8rem; color:#cbd5e1;">Usa términos como: <i>Shot on 35mm lens, f/1.8 aperture, DSLR, hyper-detailed, IMAX 70mm.</i></div>
      </div>
    </div>
    <div class="m-mm-note" style="margin-top:18px;">Fórmula práctica: primero define la intención del activo visual, luego la escena, después el tono y por último el acabado técnico. El orden importa porque evita prompts llenos de adjetivos sin dirección.</div>
  </div>
</div>

<div id="m-mm-decider" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="margin-top:0;">🧭 Cuándo usar IA visual y cuándo no</h3>
    <p style="color:#cbd5e1;">Estas herramientas brillan en exploración, ideación y preproducción. No sustituyen por completo el diseño profesional cuando hay identidad de marca estricta o piezas finales altamente reguladas.</p>
    <div class="m-mm-grid-3" style="margin-top:18px;">
      <div class="m-mm-panel">
        <div style="font-size:0.72rem; font-weight:800; color:#f9a8d4; margin-bottom:8px;">SÍ</div>
        <h4 style="margin:0 0 8px; color:#fff;">Explorar conceptos</h4>
        <p style="margin:0; font-size:0.8rem; color:#cbd5e1;">Úsala para visualizar ideas rápido antes de producir con equipo, presupuesto o tiempos formales.</p>
      </div>
      <div class="m-mm-panel">
        <div style="font-size:0.72rem; font-weight:800; color:#f9a8d4; margin-bottom:8px;">SÍ</div>
        <h4 style="margin:0 0 8px; color:#fff;">Producir piezas internas</h4>
        <p style="margin:0; font-size:0.8rem; color:#cbd5e1;">Ideal para slides, banners, mini campañas, material educativo o prototipos visuales.</p>
      </div>
      <div class="m-mm-panel">
        <div style="font-size:0.72rem; font-weight:800; color:#f9a8d4; margin-bottom:8px;">NO SOLO</div>
        <h4 style="margin:0 0 8px; color:#fff;">Marca, legal o consistencia crítica</h4>
        <p style="margin:0; font-size:0.8rem; color:#cbd5e1;">Si el activo exige fidelidad exacta, aprobación legal o identidad cerrada, úsala como borrador y termina con diseño humano.</p>
      </div>
    </div>
    <div class="m-mm-card" style="margin-top:18px;">
      <h4 style="margin-top:0; color:#fff;">Flujo simple para producir algo útil</h4>
      <div class="m-mm-step">
        <div class="m-mm-step-badge">1</div>
        <div><b style="color:#fff;">Define el objetivo.</b><div style="font-size:0.8rem; color:#cbd5e1;">No empieces con estilo, empieza con para qué servirá la pieza.</div></div>
      </div>
      <div class="m-mm-step">
        <div class="m-mm-step-badge">2</div>
        <div><b style="color:#fff;">Elige formato y audiencia.</b><div style="font-size:0.8rem; color:#cbd5e1;">16:9, 1:1, vertical, miniatura, portada o storyboard cambian por completo el prompt.</div></div>
      </div>
      <div class="m-mm-step">
        <div class="m-mm-step-badge">3</div>
        <div><b style="color:#fff;">Genera variaciones y compara.</b><div style="font-size:0.8rem; color:#cbd5e1;">El valor está en iterar rápido hasta encontrar una dirección visual defendible.</div></div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 2: LABORATORIO -->
<div id="m-mm-lab" class="ag-content">
  <div class="section-card animate-in m-mm-card">
    <div class="m-mm-header-bg"></div>
    <h3 style="position:relative;z-index:2;margin-top:0;color:#f8fafc;"><span class="icon">🎨</span> Simulador: Estudio de Render</h3>
    <p style="font-size:0.85rem;color:#cbd5e1;position:relative;z-index:2;">Selecciona los parámetros fotográficos. Observa cómo cambia la estructura del Prompt y genera la imagen final (Simulado).</p>
    
    <div class="m-mm-prompt-builder">
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
        <div>
          <div class="m-mm-label">Sujeto y Acción</div>
          <select id="mm-sujeto" class="m-mm-select" onchange="mMmUpdatePrompt()">
            <option value="Un astronauta">Un astronauta</option>
            <option value="Un lobo cibernético">Un lobo cibernético</option>
            <option value="Un castillo flotante">Un castillo flotante</option>
            <option value="Una ciudad flotante futurista">Ciudad Flotante Futurista</option>
            <option value="Un dragón de cristal">Dragón de Cristal</option>
            <option value="Un científico en laboratorio">Científico en Laboratorio</option>
          </select>
        </div>
        <div>
          <div class="m-mm-label">Entorno</div>
          <select id="mm-entorno" class="m-mm-select" onchange="mMmUpdatePrompt()">
            <option value="caminando por las calles lluviosas de Tokio">Calles Lluviosas de Tokio</option>
            <option value="en la cima de una montaña de cristal">Montaña de Cristal</option>
            <option value="en un desierto de arena roja">Desierto Marciano</option>
            <option value="en una estación espacial orbital">Estación Espacial</option>
            <option value="en un bosque bioluminiscente">Bosque Bioluminiscente</option>
            <option value="en una biblioteca antigua infinita">Biblioteca Antigua</option>
          </select>
        </div>
        <div>
          <div class="m-mm-label">Iluminación</div>
          <select id="mm-ilum" class="m-mm-select" onchange="mMmUpdatePrompt()">
            <option value="iluminación de neón cyberpunk, reflejos volumétricos">Neon Cyberpunk</option>
            <option value="iluminación dorada del atardecer (Golden Hour)">Golden Hour</option>
            <option value="iluminación de estudio dramática, sombras duras">Studio Drama</option>
            <option value="iluminación de luna llena, tonos azules fríos">Luna Llena Azul</option>
            <option value="iluminación de laboratorio, luz clínica blanca">Luz de Laboratorio</option>
            <option value="iluminación mágica, partículas flotantes luminosas">Iluminación Mágica</option>
          </select>
        </div>
        <div>
          <div class="m-mm-label">Cámara / Estilo</div>
          <select id="mm-camara" class="m-mm-select" onchange="mMmUpdatePrompt()">
            <option value="fotografía hiperrealista, lente 85mm f/1.4, 8k resolution">Fotografía 8K Lente</option>
            <option value="estilo pintura al óleo renacentista, pinceladas gruesas">Pintura al Óleo</option>
            <option value="estilo cómic vintage de los 80s, colores pastel">Cómic 80s</option>
            <option value="arte conceptual digital, estilo de videojuego">Arte Conceptual</option>
            <option value="fotografía de moda editorial, iluminación profesional">Fotografía Editorial</option>
            <option value="ilustración vectorial plana, colores vibrantes">Ilustración Vectorial</option>
          </select>
        </div>
      </div>
      
      <div style="margin-top:20px;">
        <div class="m-mm-label">🎛️ Parámetros Avanzados (Opcional)</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:12px; margin-top:10px;">
          <div>
            <div class="m-mm-label-small">Formato</div>
            <select id="mm-formato" class="m-mm-select-small" onchange="mMmUpdatePrompt()">
              <option value="">Sin formato específico</option>
              <option value=", formato 16:9">16:9 (Horizontal)</option>
              <option value=", formato 1:1">1:1 (Cuadrado)</option>
              <option value=", formato 9:16">9:16 (Vertical)</option>
              <option value=", formato panorámico 21:9">21:9 (Panorámico)</option>
            </select>
          </div>
          <div>
            <div class="m-mm-label-small">Calidad</div>
            <select id="mm-calidad" class="m-mm-select-small" onchange="mMmUpdatePrompt()">
              <option value="">Calidad estándar</option>
              <option value=", ultra HD">Ultra HD</option>
              <option value=", 8k resolution">8K Resolution</option>
              <option value=", detalle extremo">Detalle Extremo</option>
            </select>
          </div>
          <div>
            <div class="m-mm-label-small">Herramienta</div>
            <select id="mm-herramienta" class="m-mm-select-small" onchange="mMmUpdatePrompt()">
              <option value="">Sin herramienta específica</option>
              <option value=", estilo Midjourney v6">Midjourney v6</option>
              <option value=", estilo DALL-E 3">DALL-E 3</option>
              <option value=", estilo Stable Diffusion"><a href="https://stability.ai" target="_blank" style="color:inherit;">Stable Diffusion</a></option>
            </select>
          </div>
        </div>
      </div>
      
      <div style="margin-top:25px;">
        <div class="m-mm-label">📋 Tu Prompt Generado (Cópialo para cualquier herramienta)</div>
        <div class="m-mm-final-prompt" id="mm-final-text"></div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="m-mm-gen-btn" onclick="mMmGenerate()">🪄 Generar Render</button>
          <button class="gl-btn gl-btn-outline" style="border-color:#10b981; color:#10b981;" onclick="mMmCopyPrompt(this, document.getElementById('mm-final-text').innerText)">📋 Copiar Prompt</button>
          <button class="gl-btn gl-btn-outline" style="border-color:#8b5cf6; color:#8b5cf6;" onclick="mMmSavePrompt()">💾 Guardar Plantilla</button>
        </div>
      </div>
    </div>
    
    <!-- Canvas de Resultado -->
    <div class="m-mm-canvas">
      <div style="color:#6b7280; font-size:2rem; position:absolute; z-index:1;">🖼️</div>
      
      <div class="m-mm-loader" id="mm-loader">
        <div style="color:#ec4899;font-weight:700;margin-bottom:5px;">Sintetizando Imagen...</div>
        <div class="m-mm-pbar"><div class="m-mm-pfill" id="mm-pfill"></div></div>
      </div>
      
      <div id="mm-result" class="m-mm-result-img" style="background:#2dd4bf;display:flex;align-items:center;justify-content:center;color:#000;font-weight:700;font-size:1.5rem;text-align:center;padding:20px;">
        (Imagen Generada)
      </div>
    </div>

  </div>
</div>

<!-- TAB 3: CASOS PRÁCTICOS -->
<div id="m-mm-cases" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧭</span> Tres Usos Reales de IA Visual</h3>
    <p>La utilidad no está solo en "crear algo bonito". Está en producir piezas visuales listas para comunicar, vender, presentar o explicar.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:14px;margin-top:18px;">
      <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:12px;border:1px solid rgba(236,72,153,0.2);">
        <div style="font-size:0.72rem;font-weight:800;color:#f9a8d4;margin-bottom:8px;">CASO 1 · PIEZA INSTITUCIONAL</div>
        <h4 style="margin:0 0 8px;color:#fff;">Banner para curso o evento</h4>
        <p style="font-size:0.78rem;color:#cbd5e1; margin:0 0 10px;">Genera una portada visual para clases, campañas o convocatorias.</p>
        <div style="margin: 12px 0; border-top: 1px solid rgba(236,72,153,0.1); padding-top: 10px;">
          <p style="font-size: 0.72rem; color: #f9a8d4; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
          <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">
            1. Define el objetivo del evento.<br>
            2. Elige el formato (16:9 para web, 1:1 para post).<br>
            3. Usa el generador para armar tu prompt base.<br>
            4. Genera y elige la versión más limpia.
          </div>
        </div>
        <div style="font-size:0.72rem; color:#f9a8d4; margin-top:8px;">Resultado esperado: una imagen que pueda ir directo a una publicación.</div>
        <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#ec4899; color:#ec4899;" onclick="mMmCopyPrompt(this, 'Diseña un banner institucional para [NOMBRE DEL EVENTO], estilo limpio y profesional, composición clara, texto no incrustado, iluminación cinematográfica suave, formato horizontal 16:9, alta definición.')">📋 Copiar Prompt del Caso 1</button>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:12px;border:1px solid rgba(236,72,153,0.2);">
        <div style="font-size:0.72rem;font-weight:800;color:#f9a8d4;margin-bottom:8px;">CASO 2 · PRESENTACIÓN</div>
        <h4 style="margin:0 0 8px;color:#fff;">Imagen para diapositiva</h4>
        <p style="font-size:0.78rem;color:#cbd5e1; margin:0 0 10px;">Útil para reforzar presentaciones, informes o propuestas profesionales.</p>
        <div style="margin: 12px 0; border-top: 1px solid rgba(236,72,153,0.1); padding-top: 10px;">
          <p style="font-size: 0.72rem; color: #f9a8d4; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
          <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">
            1. Define el concepto central de la diapositiva.<br>
            2. Pide una escena conceptual minimalista.<br>
            3. Asegura que haya espacio para texto (negativo).<br>
            4. Exporta en alta definición (HD).
          </div>
        </div>
        <div style="font-size:0.72rem; color:#f9a8d4; margin-top:8px;">Resultado esperado: una portada visual coherente con el tema.</div>
        <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#ec4899; color:#ec4899;" onclick="mMmCopyPrompt(this, 'Crea una imagen conceptual para una presentación sobre [TEMA], estilo moderno, composición minimalista, foco visual claro, iluminación profesional, lista para portada de diapositiva, formato 16:9.')">📋 Copiar Prompt del Caso 2</button>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:12px;border:1px solid rgba(236,72,153,0.2);">
        <div style="font-size:0.72rem;font-weight:800;color:#f9a8d4;margin-bottom:8px;">CASO 3 · STORYBOARD</div>
        <h4 style="margin:0 0 8px;color:#fff;">Escenas para video corto</h4>
        <p style="font-size:0.78rem;color:#cbd5e1; margin:0 0 10px;">Perfecto para campañas, reels o guiones visuales antes de producir.</p>
        <div style="margin: 12px 0; border-top: 1px solid rgba(236,72,153,0.1); padding-top: 10px;">
          <p style="font-size: 0.72rem; color: #f9a8d4; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Guía de Ejecución:</p>
          <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">
            1. Describe la secuencia (inicio, nudo, desenlace).<br>
            2. Mantén la misma paleta de colores en el prompt.<br>
            3. Cambia solo la acción del sujeto.<br>
            4. Ordena las imágenes en un visor de diapositivas.
          </div>
        </div>
        <div style="font-size:0.72rem; color:#f9a8d4; margin-top:8px;">Resultado esperado: tres imágenes coherentes para secuenciar un mensaje.</div>
        <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#ec4899; color:#ec4899;" onclick="mMmCopyPrompt(this, 'Genera un storyboard visual de 3 escenas para un video corto sobre [TEMA]. Mantén el mismo estilo artístico, misma paleta de color y coherencia cinematográfica entre las tres escenas.')">📋 Copiar Prompt del Caso 3</button>
      </div>
    </div>
  </div>
</div>

<div id="m-mm-prompts" class="ag-content">
  <div class="section-card animate-in m-mm-master-shell">
    <div class="m-mm-master-intro">
      <div>
        <div class="m-mm-kicker">Biblioteca premium</div>
        <h3 style="margin:0; color:#fff;">🧠 Prompts Maestros para producción visual</h3>
      </div>
      <div class="m-mm-master-tip">Cambia tema, audiencia y tono. Conserva intención, formato y dirección de arte.</div>
    </div>
    <p class="m-mm-master-copy">Cada plantilla ya viene pensada para producir piezas útiles, no imágenes genéricas. Están escritas para comunicar mejor en contextos de presentación, campaña, video y venta.</p>
    <div class="m-mm-grid-2 m-mm-master-grid" style="margin-top:18px;">
      <div class="m-mm-card m-mm-master-card">
        <div class="m-mm-master-top">
          <span class="m-mm-master-badge">Presentaciones</span>
          <span class="m-mm-master-format">16:9</span>
        </div>
        <h4 class="m-mm-master-title">Portada de presentación</h4>
        <p class="m-mm-master-desc">Para abrir clases, propuestas o informes con una imagen fuerte y limpia.</p>
        <div class="m-mm-master-prompt" id="mm-master-cover">Crea una imagen conceptual para una presentacion sobre [tema], orientada a [audiencia], con composicion limpia, foco visual unico, estilo moderno y profesional, sin texto incrustado, iluminacion cinematografica suave, formato horizontal 16:9, alta definicion.</div>
        <button class="m-mm-gen-btn m-mm-master-btn" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-cover').innerText)">📋 Copiar prompt</button>
      </div>
      <div class="m-mm-card m-mm-master-card">
        <div class="m-mm-master-top">
          <span class="m-mm-master-badge">Institucional</span>
          <span class="m-mm-master-format">1:1 + 16:9</span>
        </div>
        <h4 class="m-mm-master-title">Mini campaña institucional</h4>
        <p class="m-mm-master-desc">Útil para banners, convocatorias, piezas internas o comunicación pública.</p>
        <div class="m-mm-master-prompt" id="mm-master-campaign">Disena una escena principal para una campana sobre [tema], con tono [tono], orientada a [publico], paleta coherente con comunicacion institucional, imagen clara y confiable, composicion preparada para usar en banner o post, sin tipografia incrustada, version cuadrada 1:1 y version horizontal 16:9.</div>
        <button class="m-mm-gen-btn m-mm-master-btn" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-campaign').innerText)">📋 Copiar prompt</button>
      </div>
      <div class="m-mm-card m-mm-master-card">
        <div class="m-mm-master-top">
          <span class="m-mm-master-badge">Video</span>
          <span class="m-mm-master-format">4 escenas</span>
        </div>
        <h4 class="m-mm-master-title">Storyboard de video</h4>
        <p class="m-mm-master-desc">Sirve para preproducción rápida, reels, campañas o guiones visuales.</p>
        <div class="m-mm-master-prompt" id="mm-master-storyboard">Genera un storyboard visual de 4 escenas para un video corto sobre [tema]. Mantén mismo estilo cinematografico, misma paleta de color y coherencia de personajes. Escena 1: apertura. Escena 2: problema. Escena 3: solucion. Escena 4: cierre inspirador.</div>
        <button class="m-mm-gen-btn m-mm-master-btn" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-storyboard').innerText)">📋 Copiar prompt</button>
      </div>
      <div class="m-mm-card m-mm-master-card">
        <div class="m-mm-master-top">
          <span class="m-mm-master-badge">Comercial</span>
          <span class="m-mm-master-format">Alta fidelidad</span>
        </div>
        <h4 class="m-mm-master-title">Mockup de producto o servicio</h4>
        <p class="m-mm-master-desc">Pensado para propuestas, fichas de venta o validación visual temprana.</p>
        <div class="m-mm-master-prompt" id="mm-master-mockup">Crea un mockup visual para presentar [producto o servicio], con ambiente realista, composicion elegante, foco en uso practico, iluminacion premium, alto nivel de detalle, aspecto comercial y limpio, listo para propuesta o pieza de venta.</div>
        <button class="m-mm-gen-btn m-mm-master-btn" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-mockup').innerText)">📋 Copiar prompt</button>
      </div>
    </div>
  </div>
</div>

<!-- TAB 8: EVALUACIÓN DE CALIDAD -->
<div id="m-mm-quality" class="ag-content">
  <div class="section-card animate-in">
    <div class="kit-header">
      <div class="kit-badge">🔍 EVALUACIÓN DE CALIDAD · Multimedia Pro</div>
      <p class="kit-title">Sistema de Calificación para Imágenes Generadas por IA</p>
      <p class="kit-sub">📊 Aprende a evaluar la calidad de tus imágenes generadas por IA usando criterios profesionales. Esta herramienta te ayuda a identificar áreas de mejora y optimizar tus prompts para obtener resultados de mayor calidad.</p>
    </div>

    <div class="m-mm-grid-2" style="margin-top: 20px;">
      <div class="m-mm-card">
        <h4 style="margin: 0 0 10px; color: #fff;">🎯 Criterios de Evaluación</h4>
        <div class="quality-criteria">
          <div class="quality-criterion">
            <span class="quality-icon">🎨</span>
            <div class="quality-body">
              <p class="quality-name">Coherencia Estilística</p>
              <p class="quality-desc">¿El estilo visual es consistente en toda la imagen?</p>
            </div>
            <div class="quality-slider">
              <input type="range" min="0" max="10" value="5" class="quality-range" data-criterion="style">
              <span class="quality-value">5/10</span>
            </div>
          </div>
          <div class="quality-criterion">
            <span class="quality-icon">👁️</span>
            <div class="quality-body">
              <p class="quality-name">Composición Visual</p>
              <p class="quality-desc">¿La disposición de elementos es equilibrada y atractiva?</p>
            </div>
            <div class="quality-slider">
              <input type="range" min="0" max="10" value="5" class="quality-range" data-criterion="composition">
              <span class="quality-value">5/10</span>
            </div>
          </div>
          <div class="quality-criterion">
            <span class="quality-icon">💡</span>
            <div class="quality-body">
              <p class="quality-name">Iluminación y Sombras</p>
              <p class="quality-desc">¿La iluminación es realista y coherente?</p>
            </div>
            <div class="quality-slider">
              <input type="range" min="0" max="10" value="5" class="quality-range" data-criterion="lighting">
              <span class="quality-value">5/10</span>
            </div>
          </div>
          <div class="quality-criterion">
            <span class="quality-icon">🎭</span>
            <div class="quality-body">
              <p class="quality-name">Expresión y Emoción</p>
              <p class="quality-desc">¿La imagen transmite la emoción o mensaje deseado?</p>
            </div>
            <div class="quality-slider">
              <input type="range" min="0" max="10" value="5" class="quality-range" data-criterion="emotion">
              <span class="quality-value">5/10</span>
            </div>
          </div>
          <div class="quality-criterion">
            <span class="quality-icon">🔍</span>
            <div class="quality-body">
              <p class="quality-name">Detalle y Textura</p>
              <p class="quality-desc">¿Los detalles son nítidos y las texturas realistas?</p>
            </div>
            <div class="quality-slider">
              <input type="range" min="0" max="10" value="5" class="quality-range" data-criterion="detail">
              <span class="quality-value">5/10</span>
            </div>
          </div>
          <div class="quality-criterion">
            <span class="quality-icon">🎯</span>
            <div class="quality-body">
              <p class="quality-name">Cumplimiento del Brief</p>
              <p class="quality-desc">¿La imagen cumple con el objetivo del prompt?</p>
            </div>
            <div class="quality-slider">
              <input type="range" min="0" max="10" value="5" class="quality-range" data-criterion="brief">
              <span class="quality-value">5/10</span>
            </div>
          </div>
        </div>
      </div>

      <div class="m-mm-card">
        <h4 style="margin: 0 0 10px; color: #fff;">📊 Resultado de Evaluación</h4>
        <div class="quality-result">
          <div class="quality-score">
            <div class="quality-score-circle">
              <span class="quality-score-value" id="quality-total">50</span>
              <span class="quality-score-label">/100</span>
            </div>
            <div class="quality-score-text">
              <p class="quality-score-title">Puntuación Total</p>
              <p class="quality-score-desc">Calidad General de la Imagen</p>
            </div>
          </div>
          
          <div class="quality-breakdown">
            <h5 style="margin: 15px 0 10px; color: #fff;">Desglose por Criterio</h5>
            <div class="quality-bars">
              <div class="quality-bar">
                <span class="quality-bar-label">Estilo</span>
                <div class="quality-bar-container">
                  <div class="quality-bar-fill" style="width: 50%; background: #ec4899;"></div>
                </div>
                <span class="quality-bar-value">5/10</span>
              </div>
              <div class="quality-bar">
                <span class="quality-bar-label">Composición</span>
                <div class="quality-bar-container">
                  <div class="quality-bar-fill" style="width: 50%; background: #8b5cf6;"></div>
                </div>
                <span class="quality-bar-value">5/10</span>
              </div>
              <div class="quality-bar">
                <span class="quality-bar-label">Iluminación</span>
                <div class="quality-bar-container">
                  <div class="quality-bar-fill" style="width: 50%; background: #10b981;"></div>
                </div>
                <span class="quality-bar-value">5/10</span>
              </div>
              <div class="quality-bar">
                <span class="quality-bar-label">Emoción</span>
                <div class="quality-bar-container">
                  <div class="quality-bar-fill" style="width: 50%; background: #f59e0b;"></div>
                </div>
                <span class="quality-bar-value">5/10</span>
              </div>
              <div class="quality-bar">
                <span class="quality-bar-label">Detalle</span>
                <div class="quality-bar-container">
                  <div class="quality-bar-fill" style="width: 50%; background: #3b82f6;"></div>
                </div>
                <span class="quality-bar-value">5/10</span>
              </div>
              <div class="quality-bar">
                <span class="quality-bar-label">Brief</span>
                <div class="quality-bar-container">
                  <div class="quality-bar-fill" style="width: 50%; background: #ef4444;"></div>
                </div>
                <span class="quality-bar-value">5/10</span>
              </div>
            </div>
          </div>
          
          <div class="quality-feedback">
            <h5 style="margin: 15px 0 10px; color: #fff;">📝 Recomendaciones de Mejora</h5>
            <div class="quality-feedback-text" id="quality-feedback">
              <p>• <strong>Coherencia Estilística:</strong> Asegúrate de especificar un estilo consistente en tu prompt (ej: "estilo anime", "fotorealista", "ilustración vectorial").</p>
              <p>• <strong>Composición:</strong> Usa términos como "regla de tercios", "enfoque central" o "composición dinámica" para guiar la disposición.</p>
              <p>• <strong>Iluminación:</strong> Agrega términos como "iluminación suave", "luz dorada" o "sombras dramáticas" para mayor realismo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quality-actions" style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
      <button class="gl-btn gl-btn-primary" onclick="mMmEvaluateQuality()" style="background: linear-gradient(90deg, #10b981, #3b82f6);">
        🔄 Evaluar Nueva Imagen
      </button>
      <button class="gl-btn gl-btn-outline" onclick="mMmSaveQualityReport()" style="margin-left: 10px; border-color: #ec4899; color: #ec4899;">
        💾 Guardar Reporte
      </button>
      <button class="gl-btn gl-btn-outline" onclick="mMmResetQuality()" style="margin-left: 10px; border-color: #8b5cf6; color: #8b5cf6;">
        🔄 Reiniciar Evaluación
      </button>
    </div>

    <div class="quality-tips" style="margin-top: 20px; padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 8px; border-left: 4px solid #ec4899;">
      <h5 style="margin: 0 0 8px; color: #fff;">💡 Consejos para Mejorar la Calidad</h5>
      <ul style="margin: 0; font-size: 0.85rem; color: #cbd5e1;">
        <li><strong>Especificidad:</strong> Mientras más específico sea tu prompt, más control tendrás sobre el resultado.</li>
        <li><strong>Referencias visuales:</strong> Usa términos como "en el estilo de [artista]" o "similar a [película]" para guiar el estilo.</li>
        <li><strong>Parámetros técnicos:</strong> Incluye "--ar 16:9", "--v 6.0" (Midjourney) o "8k, photorealistic" para mayor calidad.</li>
        <li><strong>Iteración:</strong> No te conformes con la primera versión. Genera variaciones y ajusta el prompt.</li>
      </ul>
    </div>
  </div>
</div>

<div id="m-mm-estrategia" class="ag-content">
  <div class="section-card animate-in">
    <div class="kit-header">
      <div class="kit-badge">🧪 ESTRATEGIA REAL · Multimedia Pro</div>
      <p class="kit-title">Operación: Identidad de Evento Institucional</p>
      <p class="kit-sub">📋 Situación: Necesitas crear todo el material visual para el "Congreso IA 2025" de tu entidad. Un diseñador tardaría 3 días en los bocetos. Con IA, tendrás 10 direcciones de arte en 15 minutos.</p>
    </div>

    <h4 style="color:#ec4899; margin: 20px 0 10px;">🧳 Maletín de Activos Visuales</h4>
    <div class="kit-assets">
      <div class="kit-asset">
        <span class="kit-asset-icon">🎨</span>
        <div class="kit-asset-body">
          <p class="kit-asset-name">Prompt Maestro: Portada de Congreso</p>
          <p class="kit-asset-desc">Estilo corporativo-futurista de alta gama.</p>
        </div>
        <button class="kit-copy-btn" onclick="mMmCopyPrompt(this, 'Diseño de portada para Congreso de IA, estilo minimalista corporativo, paleta azul cobalto y plata, iluminación volumétrica, 8k, composición de espacio negativo para texto, formato 16:9.')">📋 Copiar Prompt</button>
      </div>
    </div>

    <h4 style="color:#ec4899; margin: 20px 0 10px;">✅ Ejecuta la Estrategia Paso a Paso</h4>
    <ul class="kit-steps" id="mm-steps">
      <li class="kit-step" onclick="mMmCheckStep(this, 0, 40)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Genera el Concepto Base en el Simulador</p>
          <p class="kit-step-detail">Usa la pestaña "Generador Studio" para mezclar los parámetros de iluminación y lente.</p>
        </div>
        <span class="kit-step-xp">+40 XP</span>
      </li>
      <li class="kit-step" onclick="mMmCheckStep(this, 1, 50)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Refina el Prompt con el "Maletín de Activos"</p>
          <p class="kit-step-detail">Copia el prompt maestro y pégalo en DALL-E 3 o Midjourney.</p>
        </div>
        <span class="kit-step-xp">+50 XP</span>
      </li>
      <li class="kit-step" onclick="mMmCheckStep(this, 2, 60)">
        <div class="kit-step-check">✓</div>
        <div class="kit-step-body">
          <p class="kit-step-title">Crea variaciones de Storyboard</p>
          <p class="kit-step-detail">Pide 3 variaciones manteniendo la consistencia de personajes (Seed/Referencia).</p>
        </div>
        <span class="kit-step-xp">+60 XP</span>
      </li>
    </ul>
    
    <div class="kit-xp-total" id="mm-xp-total">
      <span>🏆 XP de Estrategia Multimedia</span>
      <span id="mm-xp-count">0 / 150 XP</span>
    </div>
  </div>
</div>
  <div class="section-card animate-in">
    <h3 style="margin-top:0;">🚫 Errores comunes al usar IA visual</h3>
    <div class="m-mm-grid-3" style="margin-top:18px;">
      <div class="m-mm-panel">
        <h4 style="margin:0 0 8px; color:#fff;">Pedir “algo bonito”</h4>
        <p style="margin:0; font-size:0.8rem; color:#cbd5e1;">La estética sin intención produce imágenes llamativas pero inútiles para comunicar.</p>
      </div>
      <div class="m-mm-panel">
        <h4 style="margin:0 0 8px; color:#fff;">No pensar en formato final</h4>
        <p style="margin:0; font-size:0.8rem; color:#cbd5e1;">Una portada, una miniatura y una historia vertical necesitan composiciones distintas.</p>
      </div>
      <div class="m-mm-panel">
        <h4 style="margin:0 0 8px; color:#fff;">Aceptar la primera versión</h4>
        <p style="margin:0; font-size:0.8rem; color:#cbd5e1;">El verdadero poder está en iterar: cambiar encuadre, tono, luz y jerarquía visual.</p>
      </div>
    </div>
    <div class="m-mm-note" style="margin-top:18px;">Señal de buen uso: la pieza ayuda a entender, vender o presentar algo mejor. Señal de mal uso: la imagen se ve vistosa, pero nadie sabría para qué sirve dentro del proyecto.</div>
  </div>
</div>

<!-- TAB 4: RETO FINAL -->
<div id="m-mm-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">🎬</span><span class="exercise-title">Reto Final: Campaña Visual Express</span></div>
    <div class="mission-instructions" style="background:rgba(236,72,153,0.1);padding:20px;border-radius:12px;border-left:4px solid #ec4899;margin:20px 0;">
      <strong>🎯 Tu Desafío Real:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Define una campaña, evento, curso o mensaje que necesite una imagen principal.</li>
        <li>Arma el prompt en la pestaña "Generador Studio".</li>
        <li>Genera 3 variaciones en Copilot, ChatGPT o tu herramienta visual favorita.</li>
        <li>Escoge una versión final y justifica por qué comunica mejor.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Describe el objetivo de la campaña, el prompt que usarías y qué criterio aplicarías para escoger la imagen final..." ></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: Director de Arte 🎨</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-multimedia-pro" style="width:100%;margin-top:15px;background:linear-gradient(90deg, #ec4899, #8b5cf6);color:#fff;border:none;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
`;

  const mediaInstance = {
    init: function(app) {
      console.log('[Module] Multimedia Pro initialized');
      const target = document.getElementById('module-multimedia-pro');
      if (target && !target.querySelector('.module-header')) {
        target.insertAdjacentHTML('afterbegin', mediaHTML);
        setupMediaHandlers(target);
      }
    }
  };

  function setupMediaHandlers(parent) {
    if(window.mMmUpdatePrompt) window.mMmUpdatePrompt();

  window.mMmUpdatePrompt = function() {
    const s1 = document.getElementById('mm-sujeto');
    const s2 = document.getElementById('mm-entorno');
    const s3 = document.getElementById('mm-ilum');
    const s4 = document.getElementById('mm-camara');
    const f1 = document.getElementById('mm-formato');
    const f2 = document.getElementById('mm-calidad');
    const f3 = document.getElementById('mm-herramienta');
    if(!s1) return;
    
    let p = s1.value + ' ' + s2.value + ', ' + s3.value + ', ' + s4.value;
    
    // Agregar parámetros avanzados si tienen valor
    if (f1 && f1.value) p += f1.value;
    if (f2 && f2.value) p += f2.value;
    if (f3 && f3.value) p += f3.value;
    
    document.getElementById('mm-final-text').innerText = p;
  };

  let mmIsGen = false;
  window.mMmCopyPrompt = function(btn, text) {
    navigator.clipboard.writeText(text).catch(() => {});
    const orig = btn.textContent;
    btn.textContent = '✅ Copiado';
    btn.style.color = '#10b981';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.color = '#ec4899';
    }, 2500);
    if(window.app) window.app.addXP(5);
  };

  window.mMmSavePrompt = function() {
    const promptText = document.getElementById('mm-final-text').innerText;
    if (!promptText || promptText.trim() === '') return;
    
    // Simular guardado en localStorage
    const savedPrompts = JSON.parse(localStorage.getItem('mm_saved_prompts') || '[]');
    savedPrompts.push({
      text: promptText,
      date: new Date().toISOString().split('T')[0]
    });
    
    // Mantener solo los últimos 10
    if (savedPrompts.length > 10) savedPrompts.shift();
    
    localStorage.setItem('mm_saved_prompts', JSON.stringify(savedPrompts));
    
    // Mostrar notificación
    const btn = event?.target || document.querySelector('[onclick="mMmSavePrompt()"]');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = '💾 Guardado';
      btn.style.color = '#8b5cf6';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.color = '#8b5cf6';
      }, 2000);
    }
    
    if(window.app) window.app.addXP(10);
    alert('✅ Prompt guardado en tu historial local. Puedes acceder a él más tarde.');
  };
    window.mMmGenerate = function() {
      if(mmIsGen) return;
      mmIsGen = true;
      
      const loader = document.getElementById('mm-loader');
      const fill = document.getElementById('mm-pfill');
      const res = document.getElementById('mm-result');
      const sujetoP = document.getElementById('mm-sujeto').value;
      
      res.classList.remove('active');
      loader.classList.add('active');
      fill.style.width = '0%';
      
      let p = 0;
      const intv = setInterval(() => {
        p += 10;
        fill.style.width = p + '%';
        
        if(p >= 100) {
          clearInterval(intv);
          loader.classList.remove('active');
          
          if(sujetoP.includes('astronauta')) {
            res.style.background = 'url("https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80") center/cover'; // via Unsplash (https://unsplash.com)
            res.innerText = '';
          } else if(sujetoP.includes('lobo')) {
            res.style.background = 'url("https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80") center/cover';
            res.innerText = '\n\n(Lobo Cibernético Generado)';
          } else {
            res.style.background = 'url("https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80") center/cover';
            res.innerText = '\n\n(Castillo Generado)';
          }
          res.classList.add('active');
          mmIsGen = false;
          if(window.app) window.app.addXP(40);
        }
      }, 150);
    };

    window.mMmCheckStep = function(li, index, xp) {
      if (li.classList.contains('completed')) return;
      li.classList.add('completed');
      li.style.borderLeft = '4px solid #ec4899';
      li.style.background = 'rgba(236,72,153,0.05)';
      if (window.app) window.app.addXP(xp);
      
      const check = li.querySelector('.kit-step-check');
      if (check) {
        check.style.background = '#ec4899';
        check.style.borderColor = '#ec4899';
        check.style.color = '#fff';
      }

      const countElem = document.getElementById('mm-xp-count');
      if (countElem) {
        const current = parseInt(countElem.innerText.split(' / ')[0]) + xp;
        countElem.innerText = current + ' / 150 XP';
      }
    };

    // Funciones para el Decisor de Herramientas
    window.mMmChooserBack = function(step) {
      document.querySelectorAll('.m-mm-quiz-step').forEach(el => el.style.display = 'none');
      document.getElementById(`step-${step}`).style.display = 'block';
    };

    window.mMmChooserReset = function() {
      document.querySelectorAll('.m-mm-quiz-step').forEach(el => el.style.display = 'none');
      document.getElementById('step-1').style.display = 'block';
      document.getElementById('chooser-result').innerHTML = 'Responde las preguntas para obtener tu recomendación personalizada.';
      document.getElementById('chooser-details').innerHTML = '';
    };

    // Inicializar botones del decisor
    setTimeout(() => {
      document.querySelectorAll('.m-mm-option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const nextStep = this.getAttribute('data-next');
          const value = this.getAttribute('data-value');
          
          // Guardar selección
          if (!window.mMmChooserSelections) window.mMmChooserSelections = {};
          const step = this.closest('.m-mm-quiz-step').id.replace('step-', '');
          window.mMmChooserSelections[`step${step}`] = value;
          
          // Mostrar siguiente paso
          document.querySelectorAll('.m-mm-quiz-step').forEach(el => el.style.display = 'none');
          
          if (nextStep === 'result') {
            document.getElementById('result').style.display = 'block';
            generateRecommendation();
          } else {
            document.getElementById(nextStep).style.display = 'block';
          }
        });
      });
    }, 100);

    function generateRecommendation() {
      if (!window.mMmChooserSelections) return;
      
      const s1 = window.mMmChooserSelections.step1;
      const s2 = window.mMmChooserSelections.step2;
      const s3 = window.mMmChooserSelections.step3;
      
      let tool = 'DALL-E 3';
      let reason = 'Versátil para la mayoría de casos';
      let tips = 'Usa prompts detallados y especifica estilo y formato.';
      
      // Lógica de recomendación
      if (s1 === 'arte') {
        tool = 'Midjourney';
        reason = 'Excelente para arte conceptual, ilustraciones y estilos artísticos distintivos.';
        tips = 'Usa parámetros como --ar para proporciones, --style para estilos, y --seed para consistencia.';
      } else if (s1 === 'video') {
        tool = 'Sora (cuando disponible)';
        reason = 'Especializado en generación de video realista y narrativa visual.';
        tips = 'Describe movimiento, cámara y secuencia temporal en tu prompt.';
      } else if (s1 === 'texto') {
        tool = 'DALL-E 3';
        reason = 'La mejor comprensión de texto y capacidad para integrarlo en imágenes.';
        tips = 'Especifica el texto exacto y su ubicación en la composición.';
      } else if (s1 === 'foto') {
        if (s2 === 'alto') {
          tool = 'Midjourney';
          reason = 'Ofrece control avanzado sobre parámetros fotográficos para fotorealismo.';
          tips = 'Usa términos como "photorealistic, 85mm lens, f/1.8, 8k resolution".';
        } else {
          tool = 'DALL-E 3';
          reason = 'Fotorealismo de alta calidad con menos configuración técnica.';
          tips = 'Especifica "photorealistic, professional photography, studio lighting".';
        }
      }
      
      // Ajustar por canal
      if (s3 === 'impreso' && tool === 'Midjourney') {
        tips += ' Usa --ar con proporciones específicas para impresión (ej: --ar 3:2).';
      } else if (s3 === 'redes' && tool === 'DALL-E 3') {
        tips += ' Especifica formato vertical o cuadrado para redes sociales.';
      } else if (s3 === 'video') {
        tool = 'Sora (cuando disponible)';
        reason = 'Ideal para contenido en movimiento y narrativa visual.';
      }
      
      document.getElementById('chooser-result').innerHTML = `
        <div style="font-size:1.3rem; color:#f9a8d4; margin-bottom:10px;">${tool}</div>
        <div style="font-size:0.9rem; color:#cbd5e1;">${reason}</div>
      `;
      
      document.getElementById('chooser-details').innerHTML = `
        <p><b>💡 Consejos:</b> ${tips}</p>
        <p><b>🎯 Parámetros clave:</b> ${getKeyParameters(tool)}</p>
        <p><b>⏱️ Tiempo estimado:</b> ${getEstimatedTime(tool, s2)}</p>
      `;
      
      // Agregar XP por completar el decisor
      if (window.app) window.app.addXP(25);
    }
    
    function getKeyParameters(tool) {
      if (tool.includes('Midjourney')) return '--ar (aspect ratio), --style, --seed, --chaos, --quality';
      if (tool.includes('DALL-E')) return 'style, quality, size, detailed prompt';
      if (tool.includes('Sora')) return 'duration, motion, camera, style, sequence';
      return 'Consulta la documentación oficial';
    }
    
    function getEstimatedTime(tool, controlLevel) {
      if (controlLevel === 'alto') return '15-30 min (configuración avanzada)';
      if (controlLevel === 'medio') return '5-15 min (configuración moderada)';
      return '2-5 min (rápido)';
    }

    // ============================================
    // FUNCIONES DE EVALUACIÓN DE CALIDAD
    // ============================================
    
    window.mMmEvaluateQuality = function() {
      // Obtener valores de los sliders
      const criteria = ['style', 'composition', 'lighting', 'emotion', 'detail', 'brief'];
      let totalScore = 0;
      let breakdown = {};
      
      criteria.forEach(criterion => {
        const slider = document.querySelector(`.quality-range[data-criterion="${criterion}"]`);
        if (slider) {
          const value = parseInt(slider.value);
          breakdown[criterion] = value;
          totalScore += value;
        }
      });
      
      // Calcular puntuación total (0-100)
      const maxScore = criteria.length * 10;
      const percentage = Math.round((totalScore / maxScore) * 100);
      
      // Actualizar puntuación total
      const totalElement = document.getElementById('quality-total');
      if (totalElement) totalElement.textContent = percentage;
      
      // Actualizar barras de desglose
      criteria.forEach(criterion => {
        const value = breakdown[criterion];
        const bar = document.querySelector(`.quality-bar:nth-child(${criteria.indexOf(criterion) + 1}) .quality-bar-fill`);
        const barValue = document.querySelector(`.quality-bar:nth-child(${criteria.indexOf(criterion) + 1}) .quality-bar-value`);
        
        if (bar) bar.style.width = `${value * 10}%`;
        if (barValue) barValue.textContent = `${value}/10`;
      });
      
      // Actualizar valores de los sliders
      criteria.forEach(criterion => {
        const slider = document.querySelector(`.quality-range[data-criterion="${criterion}"]`);
        const valueElement = slider?.parentElement.querySelector('.quality-value');
        if (valueElement) valueElement.textContent = `${slider.value}/10`;
      });
      
      // Generar feedback personalizado
      generateQualityFeedback(breakdown, percentage);
      
      // Agregar XP por completar evaluación
      if (window.app) window.app.addXP(15);
    };
    
    function generateQualityFeedback(breakdown, totalScore) {
      const feedbackElement = document.getElementById('quality-feedback');
      if (!feedbackElement) return;
      
      let feedbackHTML = '';
      
      // Feedback basado en criterios bajos
      if (breakdown.style < 5) {
        feedbackHTML += '<p>• <strong>Coherencia Estilística:</strong> Especifica un estilo claro en tu prompt (ej: "estilo anime", "fotorealista", "ilustración vectorial"). Usa referencias visuales como "en el estilo de [artista]" para mayor consistencia.</p>';
      }
      
      if (breakdown.composition < 5) {
        feedbackHTML += '<p>• <strong>Composición:</strong> Usa términos como "regla de tercios", "enfoque central", "composición dinámica" o "espacio negativo" para guiar la disposición de elementos.</p>';
      }
      
      if (breakdown.lighting < 5) {
        feedbackHTML += '<p>• <strong>Iluminación:</strong> Agrega términos específicos como "iluminación suave", "luz dorada", "sombras dramáticas", "iluminación de estudio" o "luz natural" para mayor realismo.</p>';
      }
      
      if (breakdown.emotion < 5) {
        feedbackHTML += '<p>• <strong>Expresión y Emoción:</strong> Describe la emoción deseada (ej: "atmósfera misteriosa", "tono alegre", "ambiente sereno"). Usa adjetivos emocionales en tu prompt.</p>';
      }
      
      if (breakdown.detail < 5) {
        feedbackHTML += '<p>• <strong>Detalle y Textura:</strong> Especifica "alto detalle", "texturas realistas", "8k resolution", "ultra detailed" o "intricate details" para mejorar la nitidez.</p>';
      }
      
      if (breakdown.brief < 5) {
        feedbackHTML += '<p>• <strong>Cumplimiento del Brief:</strong> Asegúrate de que tu prompt incluya todos los elementos requeridos. Divide objetivos complejos en prompts más simples y específicos.</p>';
      }
      
      // Feedback general basado en puntuación total
      if (totalScore >= 80) {
        feedbackHTML += '<p>• <strong>Excelente trabajo:</strong> Tu prompt está bien estructurado y produce imágenes de alta calidad. Considera experimentar con estilos más avanzados o combinaciones creativas.</p>';
      } else if (totalScore >= 60) {
        feedbackHTML += '<p>• <strong>Buen resultado:</strong> La imagen cumple con los requisitos básicos. Para mejorar, agrega más especificidad en iluminación, composición o referencias estilísticas.</p>';
      } else {
        feedbackHTML += '<p>• <strong>Área de mejora:</strong> Revisa la especificidad de tu prompt. Agrega más detalles sobre estilo, composición, iluminación y propósito. Considera usar prompts más largos y descriptivos.</p>';
      }
      
      // Consejos generales
      feedbackHTML += '<p>• <strong>Iteración:</strong> No te conformes con la primera versión. Genera variaciones y ajusta el prompt basado en los resultados.</p>';
      feedbackHTML += '<p>• <strong>Parámetros técnicos:</strong> Incluye parámetros específicos como "--ar 16:9", "--v 6.0" (Midjourney) o "photorealistic, 8k" para mayor control.</p>';
      
      feedbackElement.innerHTML = feedbackHTML;
    }
    
    window.mMmSaveQualityReport = function() {
      // Obtener datos de evaluación
      const criteria = ['style', 'composition', 'lighting', 'emotion', 'detail', 'brief'];
      let report = {
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString(),
        scores: {},
        total: 0
      };
      
      criteria.forEach(criterion => {
        const slider = document.querySelector(`.quality-range[data-criterion="${criterion}"]`);
        if (slider) {
          report.scores[criterion] = parseInt(slider.value);
          report.total += parseInt(slider.value);
        }
      });
      
      report.totalPercentage = Math.round((report.total / (criteria.length * 10)) * 100);
      
      // Simular guardado en localStorage
      const savedReports = JSON.parse(localStorage.getItem('mm_quality_reports') || '[]');
      savedReports.push(report);
      
      // Mantener solo los últimos 5 reportes
      if (savedReports.length > 5) savedReports.shift();
      
      localStorage.setItem('mm_quality_reports', JSON.stringify(savedReports));
      
      // Mostrar notificación
      alert(`✅ Reporte de calidad guardado.\nPuntuación: ${report.totalPercentage}/100\nPuedes acceder a tus reportes anteriores en cualquier momento.`);
      
      // Agregar XP por guardar reporte
      if (window.app) window.app.addXP(10);
    };
    
    window.mMmResetQuality = function() {
      // Resetear todos los sliders a 5
      const sliders = document.querySelectorAll('.quality-range');
      sliders.forEach(slider => {
        slider.value = 5;
        const valueElement = slider.parentElement.querySelector('.quality-value');
        if (valueElement) valueElement.textContent = '5/10';
      });
      
      // Resetear barras
      const bars = document.querySelectorAll('.quality-bar-fill');
      bars.forEach(bar => bar.style.width = '50%');
      
      // Resetear valores de barras
      const barValues = document.querySelectorAll('.quality-bar-value');
      barValues.forEach(barValue => barValue.textContent = '5/10');
      
      // Resetear puntuación total
      const totalElement = document.getElementById('quality-total');
      if (totalElement) totalElement.textContent = '50';
      
      // Resetear feedback
      const feedbackElement = document.getElementById('quality-feedback');
      if (feedbackElement) {
        feedbackElement.innerHTML = `
          <p>• <strong>Coherencia Estilística:</strong> Asegúrate de especificar un estilo consistente en tu prompt (ej: "estilo anime", "fotorealista", "ilustración vectorial").</p>
          <p>• <strong>Composición:</strong> Usa términos como "regla de tercios", "enfoque central" o "composición dinámica" para guiar la disposición.</p>
          <p>• <strong>Iluminación:</strong> Agrega términos como "iluminación suave", "luz dorada" o "sombras dramáticas" para mayor realismo.</p>
        `;
      }
    };
    
    // Inicializar eventos de los sliders
    document.addEventListener('DOMContentLoaded', function() {
      const sliders = document.querySelectorAll('.quality-range');
      sliders.forEach(slider => {
        slider.addEventListener('input', function() {
          const valueElement = this.parentElement.querySelector('.quality-value');
          if (valueElement) valueElement.textContent = `${this.value}/10`;
        });
      });
    });

  }

  window.GuiaModules = window.GuiaModules || {};
  window.GuiaModules['module-multimedia-pro'] = mediaInstance;
  return mediaInstance;
})();
