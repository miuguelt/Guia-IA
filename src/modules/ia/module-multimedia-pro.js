window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-multimedia-pro'] = (function() {
/* ═══════════════════════════════════════════
   MÓDULO BONUS: Multimedia Pro (Video e Imagen)
   Versión Enriquecida — Prompt Generator y Simulador Visual
   ═══════════════════════════════════════════ */

  const mediaHTML = `
<style>
  .m-mm-hero { background: linear-gradient(135deg, rgba(236,72,153,0.12), rgba(139,92,246,0.08)); border: 1px solid rgba(236,72,153,0.24); border-radius: 18px; padding: 22px; margin-bottom: 22px; }
  .m-mm-chip-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; }
  .m-mm-chip { background: rgba(255,255,255,0.04); border:1px solid rgba(236,72,153,0.22); color:#fbcfe8; border-radius:999px; padding:8px 12px; font-size:0.75rem; font-weight:700; }
  .m-mm-grid-2 { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:16px; }
  .m-mm-grid-3 { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:16px; }
  .m-mm-panel { background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:18px; }
  .m-mm-note { background: rgba(236,72,153,0.08); border-left:3px solid #ec4899; border-radius:10px; padding:12px 14px; color:#fbcfe8; font-size:0.8rem; line-height:1.7; }
  .m-mm-step { display:flex; gap:12px; align-items:flex-start; padding:12px 0; border-top:1px solid rgba(255,255,255,0.05); }
  .m-mm-step:first-child { border-top:none; padding-top:0; }
  .m-mm-step-badge { width:28px; height:28px; border-radius:999px; background:rgba(236,72,153,0.18); border:1px solid rgba(236,72,153,0.35); color:#f9a8d4; display:flex; align-items:center; justify-content:center; font-size:0.78rem; font-weight:800; flex-shrink:0; }
  .m-mm-card { background: #111827; border: 1px solid #374151; border-radius: 12px; padding: 25px; position: relative; overflow: hidden; margin-bottom: 20px;}
  .m-mm-header-bg { position: absolute; top:0; left:0; width:100%; height:80px; background: linear-gradient(180deg, rgba(236,72,153,0.1) 0%, transparent 100%); pointer-events:none; }
  
  .m-mm-prompt-builder { background: #1f2937; border: 1px solid #4b5563; border-radius: 8px; padding: 20px; display: grid; gap: 15px;}
  .m-mm-label { font-size: 0.8rem; color: #9ca3af; font-weight: 700; text-transform: uppercase; margin-bottom: 5px;}
  .m-mm-select { width: 100%; background: #374151; border: 1px solid #4b5563; color: #fff; padding: 10px; border-radius: 6px; outline: none; transition: 0.2s;}
  .m-mm-select:focus { border-color: #ec4899; }
  
  .m-mm-final-prompt { background: #000; padding: 15px; border-radius: 6px; font-family: monospace; color: #a78bfa; font-size: 0.85rem; border: 1px dashed #6b7280; min-height: 50px;}
  
  .m-mm-canvas { width: 100%; height: 300px; background: #030712; border-radius: 8px; margin-top: 20px; border: 1px solid #374151; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow:hidden;}
  
  .m-mm-loader { display: none; flex-direction: column; align-items: center; gap: 10px;}
  .m-mm-loader.active { display: flex; }
  .m-mm-pbar { width: 200px; height: 6px; background: #374151; border-radius: 3px; overflow: hidden;}
  .m-mm-pfill { width: 0%; height: 100%; background: linear-gradient(90deg, #ec4899, #8b5cf6); transition: width 0.1s linear;}
  
  .m-mm-result-img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; opacity: 0; transition: opacity 0.5s;}
  .m-mm-result-img.active { opacity: 1; }
  
  .m-mm-gen-btn { background: linear-gradient(90deg, #ec4899, #8b5cf6); color: #fff; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: 700; transition: transform 0.2s; align-self: center; display: inline-block; margin-top: 15px;}
  .m-mm-gen-btn:hover { transform: scale(1.05); }
  @media (max-width: 900px) { .m-mm-grid-3, .m-mm-grid-2 { grid-template-columns:1fr; } }
  
</style>

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(236,72,153,0.1), rgba(139,92,246,0.1)); border: 1px solid rgba(236,72,153,0.3);">
  <div class="module-number gamer-badge" style="background:#ec4899;color:#fff;">BONUS: CREATIVIDAD</div>
  <h2 class="module-title glow-text" style="color:#f9a8d4;">🎬 Multimedia Pro: Midjourney, DALL-E & Sora</h2>
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
  <button class="tab-btn active" data-tab="m-mm-concept">📚 Anatomía del Prompt</button>
  <button class="tab-btn" data-tab="m-mm-decider">🧭 Cuándo Usarlo</button>
  <button class="tab-btn" data-tab="m-mm-lab">✨ Generador Studio</button>
  <button class="tab-btn" data-tab="m-mm-cases">🧭 Casos Prácticos</button>
  <button class="tab-btn" data-tab="m-mm-prompts">🧠 Prompts Maestros</button>
  <button class="tab-btn" data-tab="m-mm-antipatterns">🚫 Errores</button>
  <button class="tab-btn" data-tab="m-mm-mission">🏆 Reto Final</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m-mm-concept" class="ag-content active">
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
          </select>
        </div>
        <div>
          <div class="m-mm-label">Entorno</div>
          <select id="mm-entorno" class="m-mm-select" onchange="mMmUpdatePrompt()">
            <option value="caminando por las calles lluviosas de Tokio">Calles Lluviosas de Tokio</option>
            <option value="en la cima de una montaña de cristal">Montaña de Cristal</option>
            <option value="en un desierto de arena roja">Desierto Marciano</option>
          </select>
        </div>
        <div>
          <div class="m-mm-label">Iluminación</div>
          <select id="mm-ilum" class="m-mm-select" onchange="mMmUpdatePrompt()">
            <option value="iluminación de neón cyberpunk, reflejos volumétricos">Neon Cyberpunk</option>
            <option value="iluminación dorada del atardecer (Golden Hour)">Golden Hour</option>
            <option value="iluminación de estudio dramática, sombras duras">Studio Drama</option>
          </select>
        </div>
        <div>
          <div class="m-mm-label">Cámara / Estilo</div>
          <select id="mm-camara" class="m-mm-select" onchange="mMmUpdatePrompt()">
            <option value="fotografía hiperrealista, lente 85mm f/1.4, 8k resolution">Fotografía 8K Lente</option>
            <option value="estilo pintura al óleo renacentista, pinceladas gruesas">Pintura al Óleo</option>
            <option value="estilo cómic vintage de los 80s, colores pastel">Cómic 80s</option>
          </select>
        </div>
      </div>
      
      <div>
        <div class="m-mm-label">Tu Prompt Generado (Cópialo para DALL-E)</div>
        <div class="m-mm-final-prompt" id="mm-final-text"></div>
      </div>
      
      <button class="m-mm-gen-btn" onclick="mMmGenerate()">🪄 Generar Render</button>
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
        <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">1. Define el evento.<br>2. Elige formato 16:9 o 1:1.<br>3. Genera 3 variaciones.<br>4. Quédate con la más clara y usable.</div>
        <div style="font-size:0.72rem; color:#f9a8d4; margin-top:8px;">Resultado esperado: una imagen que pueda ir directo a una presentación o publicación.</div>
        <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#ec4899; color:#ec4899;" onclick="mMmCopyPrompt(this, 'Diseña un banner institucional para [NOMBRE DEL EVENTO], estilo limpio y profesional, composición clara, texto no incrustado, iluminación cinematográfica suave, formato horizontal 16:9, alta definición.')">📋 Copiar Prompt del Caso 1</button>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:12px;border:1px solid rgba(236,72,153,0.2);">
        <div style="font-size:0.72rem;font-weight:800;color:#f9a8d4;margin-bottom:8px;">CASO 2 · PRESENTACIÓN</div>
        <h4 style="margin:0 0 8px;color:#fff;">Imagen para diapositiva o portada</h4>
        <p style="font-size:0.78rem;color:#cbd5e1; margin:0 0 10px;">Útil para reforzar presentaciones, informes o propuestas sin depender de bancos de imágenes genéricos.</p>
        <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">1. Define el concepto central.<br>2. Pide una sola escena potente.<br>3. Ajusta color y encuadre.<br>4. Usa la versión final como portada.</div>
        <div style="font-size:0.72rem; color:#f9a8d4; margin-top:8px;">Resultado esperado: una portada visual coherente con el tema, no una imagen genérica.</div>
        <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#ec4899; color:#ec4899;" onclick="mMmCopyPrompt(this, 'Crea una imagen conceptual para una presentación sobre [TEMA], estilo moderno, composición minimalista, foco visual claro, iluminación profesional, lista para portada de diapositiva, formato 16:9.')">📋 Copiar Prompt del Caso 2</button>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:12px;border:1px solid rgba(236,72,153,0.2);">
        <div style="font-size:0.72rem;font-weight:800;color:#f9a8d4;margin-bottom:8px;">CASO 3 · STORYBOARD</div>
        <h4 style="margin:0 0 8px;color:#fff;">Escenas para video corto</h4>
        <p style="font-size:0.78rem;color:#cbd5e1; margin:0 0 10px;">Perfecto para campañas, reels o guiones visuales antes de producir un video.</p>
        <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.8;">1. Define escena 1, 2 y 3.<br>2. Mantén mismo estilo visual.<br>3. Cambia solo acción o encuadre.<br>4. Usa las escenas como storyboard.</div>
        <div style="font-size:0.72rem; color:#f9a8d4; margin-top:8px;">Resultado esperado: tres imágenes coherentes entre sí y útiles para secuenciar un mensaje.</div>
        <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px; border-color:#ec4899; color:#ec4899;" onclick="mMmCopyPrompt(this, 'Genera un storyboard visual de 3 escenas para un video corto sobre [TEMA]. Mantén el mismo estilo artístico, misma paleta de color y coherencia cinematográfica entre las tres escenas.')">📋 Copiar Prompt del Caso 3</button>
      </div>
    </div>
  </div>
</div>

<div id="m-mm-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="margin-top:0;">🧠 Prompts Maestros para producción visual</h3>
    <p style="color:#cbd5e1;">Estas plantillas sirven como punto de partida profesional. Cambia el tema, la audiencia y el tono, pero mantén la lógica.</p>
    <div class="m-mm-grid-2" style="margin-top:18px;">
      <div class="m-mm-card">
        <h4 style="margin-top:0; color:#fff;">Portada de presentación</h4>
        <div style="font-size:0.76rem; color:#f5d0fe; line-height:1.8;" id="mm-master-cover">Crea una imagen conceptual para una presentacion sobre [tema], orientada a [audiencia], con composicion limpia, foco visual unico, estilo moderno y profesional, sin texto incrustado, iluminacion cinematografica suave, formato horizontal 16:9, alta definicion.</div>
        <button class="m-mm-gen-btn" style="width:100%;" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-cover').innerText)">📋 Copiar prompt</button>
      </div>
      <div class="m-mm-card">
        <h4 style="margin-top:0; color:#fff;">Mini campaña institucional</h4>
        <div style="font-size:0.76rem; color:#f5d0fe; line-height:1.8;" id="mm-master-campaign">Disena una escena principal para una campana sobre [tema], con tono [tono], orientada a [publico], paleta coherente con comunicacion institucional, imagen clara y confiable, composicion preparada para usar en banner o post, sin tipografia incrustada, version cuadrada 1:1 y version horizontal 16:9.</div>
        <button class="m-mm-gen-btn" style="width:100%;" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-campaign').innerText)">📋 Copiar prompt</button>
      </div>
      <div class="m-mm-card">
        <h4 style="margin-top:0; color:#fff;">Storyboard de video</h4>
        <div style="font-size:0.76rem; color:#f5d0fe; line-height:1.8;" id="mm-master-storyboard">Genera un storyboard visual de 4 escenas para un video corto sobre [tema]. Mantén mismo estilo cinematografico, misma paleta de color y coherencia de personajes. Escena 1: apertura. Escena 2: problema. Escena 3: solucion. Escena 4: cierre inspirador.</div>
        <button class="m-mm-gen-btn" style="width:100%;" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-storyboard').innerText)">📋 Copiar prompt</button>
      </div>
      <div class="m-mm-card">
        <h4 style="margin-top:0; color:#fff;">Mockup de producto o servicio</h4>
        <div style="font-size:0.76rem; color:#f5d0fe; line-height:1.8;" id="mm-master-mockup">Crea un mockup visual para presentar [producto o servicio], con ambiente realista, composicion elegante, foco en uso practico, iluminacion premium, alto nivel de detalle, aspecto comercial y limpio, listo para propuesta o pieza de venta.</div>
        <button class="m-mm-gen-btn" style="width:100%;" onclick="mMmCopyPrompt(this, document.getElementById('mm-master-mockup').innerText)">📋 Copiar prompt</button>
      </div>
    </div>
  </div>
</div>

<div id="m-mm-antipatterns" class="ag-content">
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
</div>

<div class="module-nav">
  <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú Bonus</button>
</div>

<script>
  setTimeout(() => {
    const parent = document.getElementById('module-multimedia-pro');
    if(!parent) return;
    const tabs = parent.querySelectorAll('.tab-btn');
    const contents = parent.querySelectorAll('.ag-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const targetId = tab.dataset.tab;
            const content = parent.querySelector('#' + targetId);
            if (content) content.classList.add('active');
        });
    });
    
    // Inicializar prompt por defecto
    if(window.mMmUpdatePrompt) window.mMmUpdatePrompt();
  }, 300);

  window.mMmUpdatePrompt = function() {
    const s1 = document.getElementById('mm-sujeto');
    const s2 = document.getElementById('mm-entorno');
    const s3 = document.getElementById('mm-ilum');
    const s4 = document.getElementById('mm-camara');
    if(!s1) return;
    
    const p = \`\${s1.value} \${s2.value}, \${s3.value}, \${s4.value}\`;
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
        
        // Simular imagen basada en el contexto
        if(sujetoP.includes('astronauta')) {
          res.style.background = 'url("https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80") center/cover';
          res.innerText = '';
        } else if(sujetoP.includes('lobo')) {
          res.style.background = 'url("https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80") center/cover'; // Cyber wolf sim
          res.innerText = '\\n\\n(Lobo Cibernético Generado)';
        } else {
          res.style.background = 'url("https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80") center/cover';
          res.innerText = '\\n\\n(Castillo Generado)';
        }
        res.classList.add('active');
        mmIsGen = false;
        if(window.app) window.app.addXP(40);
      }
    }, 150);
  };
</script>
`;

  const target = document.getElementById('module-multimedia-pro');
  if (target) {
    target.innerHTML = mediaHTML;
  }
  return { init: function(app) { console.log('Initialized module-multimedia-pro.js'); } };
})();
