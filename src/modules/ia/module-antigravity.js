window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-antigravity'] = (function() {
  /* ═══════════════════════════════════════════
     MÓDULO BONUS: Antigravity AI (Agente Soberano)
     Versión "Titan Supreme" — DNA v31.4 [ULTIMATE]
     ═══════════════════════════════════════════ */
  const agHTML = `
<style>
  :root {
    --ag-primary: #58a6ff;
    --ag-secondary: #00ff88;
    --ag-bg-dark: #0d1117;
    --ag-border: #30363d;
    --ag-glass: rgba(255, 255, 255, 0.05);
    --ag-accent: #f59e0b;
    --ag-pink: #f43f5e;
  }

  .m-ag-container { color: #c9d1d9; font-family: 'Outfit', 'Inter', sans-serif; animation: fadeIn 0.5s ease; padding: 10px; }
  .m-ag-card { 
    background: rgba(22, 27, 34, 0.4); 
    backdrop-filter: blur(20px); 
    border: 1px solid rgba(255, 255, 255, 0.1); 
    border-radius: 16px; 
    padding: 25px; 
    margin-bottom: 20px; 
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
    position: relative; 
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  .m-ag-card:hover { 
    border-color: rgba(88, 166, 255, 0.4); 
    box-shadow: 0 12px 40px rgba(0,0,0,0.5); 
    transform: translateY(-2px);
  }

  /* Roadmap Styling */
  .roadmap-item { opacity: 0; transform: translateY(20px); animation: slideInUp 0.6s forwards; }
  .roadmap-item:nth-child(1) { animation-delay: 0.1s; }
  .roadmap-item:nth-child(2) { animation-delay: 0.2s; }
  .roadmap-item:nth-child(3) { animation-delay: 0.3s; }
  .roadmap-item:nth-child(4) { animation-delay: 0.4s; }
  .roadmap-item:nth-child(5) { animation-delay: 0.5s; }

  @keyframes slideInUp {
    to { opacity: 1; transform: translateY(0); }
  }

  /* Tabs Bar Premium - Usando dna_theme.css */
  .premium-tab { 
    background: none; 
    border: none; 
    padding: 12px 15px; 
    color: rgba(139, 148, 158, 0.7); 
    cursor: pointer; 
    border-bottom: 3px solid transparent; 
    transition: 0.3s; 
    font-weight: 700; 
    white-space: nowrap; 
    font-size: 0.75rem; 
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .premium-tab.active { 
    color: var(--ag-primary); 
    border-bottom-color: var(--ag-primary); 
    background: rgba(88, 166, 255, 0.08); 
    text-shadow: 0 0 10px rgba(88, 166, 255, 0.3);
  }

  .ag-content { display: none; min-height: 450px; }
  .ag-content.active { display: block; animation: slideUp 0.4s ease; }

  @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  /* Componentes Específicos */
  .m-ag-terminal { background: #010409; border: 1px solid var(--ag-border); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; padding: 15px; color: #3fb950; min-height: 180px; overflow-y: auto; margin-top: 15px; box-shadow: inset 0 0 10px rgba(0,0,0,0.5); }
  
  .ag-btn-glow { 
    background: linear-gradient(135deg, #1f6feb 0%, #58a6ff 100%); 
    color: white; border: none; padding: 12px 24px; border-radius: 8px;
    font-weight: 700; cursor: pointer; transition: 0.3s; width: 100%; margin-top: 15px;
    text-transform: uppercase; letter-spacing: 1px; display: block;
  }
  .ag-btn-glow:hover { transform: translateY(-2px); box-shadow: 0 0 20px rgba(88,166,255,0.5); }

  /* Grid Layouts */
  .m-ag-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
  @media (max-width: 768px) { .m-ag-grid-2 { grid-template-columns: 1fr; } }
</style>

<div class="m-ag-container">
  <div class="module-header premium-header" style="border: 1px solid rgba(88,166,255,0.3); background: rgba(88,166,255,0.02);">
    <div class="module-number gamer-badge" style="background:var(--ag-primary);color:#000;">TITAN SUPREME</div>
    <h2 class="module-title glow-text">🛡️ <span style="color:#58a6ff;">Antigravity Academy:</span> El Ojo del Titán</h2>
    <p class="module-description">Construye orquestaciones perfectas y audita tu constitución para la soberanía total.</p>
  </div>

  <div class="ag-tabs">
    <button class="premium-tab active" data-tab="tab-stepbystep">🛤️ Paso a Paso</button>
    <button class="premium-tab" data-tab="tab-concept">📚 Conceptos</button>
    <button class="premium-tab" data-tab="tab-cases">🧭 Casos</button>
    <button class="premium-tab" data-tab="tab-config">🗂️ Configuración</button>
    <button class="premium-tab" data-tab="tab-vguide">🖼️ Guía Visual</button>
    <button class="premium-tab" data-tab="tab-wb">⛓️ Constructor</button>
    <button class="premium-tab" data-tab="tab-audit">🛡️ Auditoría</button>
    <button class="premium-tab" data-tab="tab-handoff">🧬 Handoff</button>
    <button class="premium-tab" data-tab="tab-lab">⚡ Laboratorio</button>
    <button class="premium-tab" data-tab="tab-rgen">🛠️ Generador</button>
    <button class="premium-tab" data-tab="tab-projects">🌐 Proyectos</button>
    <button class="premium-tab" data-tab="tab-ref">📖 Referencia</button>
    <button class="premium-tab" data-tab="tab-workshop">🏆 Reto Final</button>
    <button class="premium-tab" data-tab="tab-estrategia">🎯 Estrategia Real</button>
  </div>

  <!-- CONTENT TABS -->
  <div id="tab-stepbystep" class="ag-content active">
    <div class="m-ag-card animate-in">
        <h3 style="color:var(--ag-primary); display:flex; align-items:center; gap:10px;">
            <span style="background:var(--ag-primary); color:#000; padding:2px 8px; border-radius:4px; font-size:0.7rem;">PRO</span> 
            Ruta de Maestría Antigravity
        </h3>
        <p style="font-size:0.9rem; color:#8b949e;">Sigue estos 5 pasos inmutables para replicar el entorno de un agente soberano de alto rendimiento.</p>
        
        <div class="step-roadmap" style="position:relative; margin-top:30px; padding-left:40px; border-left:2px solid rgba(88,166,255,0.2);">
            
            <!-- Paso 1 -->
            <div class="roadmap-item" style="margin-bottom:30px; position:relative;">
                <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid var(--ag-primary); border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:bold;">1</div>
                <h4 style="margin:0 0 10px; color:#c9d1d9;">Paso 1: El Despertar del Agente</h4>
                <p style="font-size:0.8rem; color:#8b949e;">Entiende que Antigravity no es un chat, es un ejecutor con memoria. No le pidas cosas, asígnale tareas.</p>
                <div style="background:rgba(255,255,255,0.02); padding:12px; border-radius:8px; border:1px solid #333; margin-top:10px;">
                    <code style="color:#79c0ff; font-size:0.75rem;">/task: Analizar estructura del proyecto v2.0</code>
                </div>
                <button class="gl-btn gl-btn-outline" style="margin-top:12px; font-size:0.75rem;" onclick="agkCheck(this, 10, 50)">Marcar como Entendido (+50 XP)</button>
            </div>

            <!-- Paso 2 -->
            <div class="roadmap-item" style="margin-bottom:30px; position:relative;">
                <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:bold;">2</div>
                <h4 style="margin:0 0 10px; color:#c9d1d9;">Paso 2: La Constitución (S-SOT)</h4>
                <p style="font-size:0.8rem; color:#8b949e;">Crea tu archivo <code>GEMINI.md</code> en la raíz. Define quién eres, qué herramientas usas y cuáles son tus "Leyes Inmutables".</p>
                <button class="gl-btn gl-btn-outline" style="margin-top:12px; font-size:0.75rem;" onclick="window.app.navigateTo('tab-config'); agkCheck(this, 11, 100)">Configurar Constitución (+100 XP)</button>
            </div>

            <!-- Paso 3 -->
            <div class="roadmap-item" style="margin-bottom:30px; position:relative;">
                <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:bold;">3</div>
                <h4 style="margin:0 0 10px; color:#c9d1d9;">Paso 3: Conectar el Bridge (MCP)</h4>
                <p style="font-size:0.8rem; color:#8b949e;">Habilita los servidores MCP en tu configuración. Shell para comandos y Search para datos frescos.</p>
                <button class="gl-btn gl-btn-outline" style="margin-top:12px; font-size:0.75rem;" onclick="window.app.navigateTo('tab-mcp'); agkCheck(this, 12, 150)">Probar Herramientas (+150 XP)</button>
            </div>

            <!-- Paso 4 -->
            <div class="roadmap-item" style="margin-bottom:30px; position:relative;">
                <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:bold;">4</div>
                <h4 style="margin:0 0 10px; color:#c9d1d9;">Paso 4: Orquestación y Auditoría</h4>
                <p style="font-size:0.8rem; color:#8b949e;">Antes de ejecutar cambios grandes, audita tus reglas. Usa el comando <code>/audit</code> para prevenir alucinaciones de código.</p>
                <button class="gl-btn gl-btn-outline" style="margin-top:12px; font-size:0.75rem;" onclick="window.app.navigateTo('tab-audit'); agkCheck(this, 13, 200)">Auditar Reglas (+200 XP)</button>
            </div>

            <!-- Paso 5 -->
            <div class="roadmap-item" style="position:relative;">
                <div style="position:absolute; left:-51px; top:0; width:20px; height:20px; background:#161b22; border:2px solid #333; border-radius:50%; z-index:2; display:flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:bold;">5</div>
                <h4 style="margin:0 0 10px; color:#c9d1d9;">Paso 5: Handoff y Cierre</h4>
                <p style="font-size:0.8rem; color:#8b949e;">Documenta todo en el <code>walkthrough.md</code> y transfiere el contexto si es necesario. La soberanía se mantiene con trazabilidad.</p>
                <button class="gl-btn gl-btn-outline" style="margin-top:12px; font-size:0.75rem;" onclick="window.app.navigateTo('tab-handoff'); agkCheck(this, 14, 250)">Finalizar Ciclo (+250 XP)</button>
            </div>
        </div>
    </div>
  </div>

  <div id="tab-concept" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>📚 La Evolución Agéntica</h3>
        <p>Un agente soberano como Antigravity se diferencia de un LLM tradicional por su capacidad de <b>pensamiento sistémico</b>, <b>uso de herramientas</b> y <b>persistencia de reglas</b>. No solo responde: también sigue un método de trabajo.</p>
        <div class="m-ag-grid-2" style="margin-top:20px;">
            <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:10px; border:1px solid #333;">
                <h4 style="color:var(--ag-primary); margin-top:0;">🤖 LLM Tradicional</h4>
                <ul style="font-size:0.8rem; padding-left:20px; color:#8b949e;">
                    <li>Basado solo en Chat.</li>
                    <li>Sin acceso a archivos.</li>
                    <li>No puede ejecutar comandos.</li>
                    <li>Olvida el contexto rápido.</li>
                </ul>
            </div>
            <div style="background:rgba(88,166,255,0.05); padding:15px; border-radius:10px; border:1px solid var(--ag-primary);">
                <h4 style="color:var(--ag-primary); margin-top:0;">🛡️ Agente Soberano</h4>
                <ul style="font-size:0.8rem; padding-left:20px; color:#c9d1d9;">
                    <li>Acceso a MCPs (herramientas).</li>
                    <li>Lectura/Escritura de código.</li>
                    <li>Memoria persistente (CAL-P).</li>
                    <li>Reglas Inmutables (S-SOT).</li>
                </ul>
            </div>
        </div>
        <div style="margin-top:18px; background:rgba(88,166,255,0.05); border:1px solid rgba(88,166,255,0.2); border-radius:10px; padding:15px;">
          <h4 style="margin:0 0 8px; color:#79c0ff;">¿Cuándo sí usar un agente como Antigravity?</h4>
          <div style="font-size:0.8rem; color:#c9d1d9; line-height:1.8;">
            1. Cuando una tarea tiene varias etapas y no quieres repetir instrucciones en cada una.<br>
            2. Cuando necesitas que la IA respete reglas, formato y fuentes autorizadas.<br>
            3. Cuando quieres separar investigación, análisis y ejecución.
          </div>
        </div>
        <div style="margin-top:14px; background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:15px;">
          <h4 style="margin:0 0 8px; color:#c9d1d9;">Ejemplo simple</h4>
          <p style="font-size:0.8rem; color:#8b949e; margin:0;">Tarea normal con chat: “resume este PDF”. Tarea de agente: “lee el PDF, identifica riesgos, clasifícalos por prioridad, y entrega una tabla ejecutiva siguiendo este formato y estas reglas”. Ese salto es lo que enseña este módulo.</p>
        </div>
    </div>
  </div>

  <div id="tab-mcp" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>🔌 MCP: El Model Context Protocol</h3>
        <p>Los MCPs son el puente de comunicación entre el modelo y las herramientas. Gracias a ellos, el agente puede dejar de “imaginar” acciones y pasar a <b>consultar</b>, <b>leer</b>, <b>buscar</b> o <b>ejecutar</b>.</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin-top:16px;">
          <div style="background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#58a6ff;">Shell / Terminal</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Para inspeccionar archivos, correr comandos, validar scripts o revisar un proyecto real.</p>
          </div>
          <div style="background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#58a6ff;">Search / Web</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Para buscar normativa, documentación, estados actuales o validar datos temporales.</p>
          </div>
          <div style="background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#58a6ff;">Files / Workspace</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Para leer, editar y producir entregables con contexto real del proyecto.</p>
          </div>
        </div>
        <div style="margin-top:16px; font-size:0.8rem; color:#c9d1d9; line-height:1.8; background:#0d1117; border:1px solid #30363d; border-radius:10px; padding:14px;">
          <b style="color:#79c0ff;">Regla práctica:</b> si la respuesta depende de un archivo, una web o una acción real, necesitas una herramienta. Si solo depende de redactar o transformar texto ya dado, puede bastar el chat.
        </div>
        <div class="m-ag-terminal" id="terminal-mcp-u">Esperando señal del Bridge...</div>
        <div class="m-ag-grid-2" style="margin-top:20px;">
            <button class="gl-btn gl-btn-outline" onclick="mAgSimT('shell_execute', 'git commit -m \\'Fix sovereignty\\'')">💻 Probar Shell</button>
            <button class="gl-btn gl-btn-outline" onclick="mAgSimT('web_search', 'Brave Search: Current weather')">🔍 Probar Search</button>
        </div>
    </div>
  </div>

  <div id="tab-cases" class="ag-content">
    <div class="m-ag-card animate-in">
      <h3>🧭 Casos Prácticos de un Agente Soberano</h3>
      <p style="font-size:0.85rem; color:#8b949e;">Antigravity tiene sentido cuando necesitas algo más que conversación: reglas, herramientas, memoria y separación de responsabilidades.</p>
      <div class="m-ag-grid-2" style="margin-top:18px;">
        <div style="background:rgba(255,255,255,0.03); padding:16px; border-radius:10px; border:1px solid #333;">
          <div style="font-size:0.72rem; font-weight:800; color:#58a6ff; margin-bottom:8px;">CASO 1 · CONSTITUCIÓN</div>
          <h4 style="margin:0 0 8px; color:#c9d1d9;">Auditar reglas antes de delegar</h4>
          <p style="font-size:0.78rem; color:#8b949e; margin:0 0 10px;">Usa el auditor para validar rol, límites, formato y fuentes permitidas antes de poner al agente a trabajar.</p>
          <div style="font-size:0.75rem; color:#c9d1d9; line-height:1.8;">1. Copia una constitución base.<br>2. Personaliza rol y prohibiciones.<br>3. Pégala en Auditoría.<br>4. Corrige hasta que quede consistente.</div>
          <div style="font-size:0.72rem; color:#79c0ff; margin-top:8px;">Resultado esperado: reglas claras, formato estable y fuentes delimitadas.</div>
          <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px;" onclick="agCopy(this, 'Eres un agente soberano especializado en [AREA]. Reglas inmutables: 1. No inventes datos. 2. Si falta contexto, pregunta antes de responder. 3. Responde siempre con: Resumen, Evidencia, Recomendación. 4. Usa solo las fuentes o archivos permitidos. 5. Si una acción implica riesgo, advierte antes de ejecutarla.')">📋 Copiar Prompt del Caso 1</button>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:16px; border-radius:10px; border:1px solid #333;">
          <div style="font-size:0.72rem; font-weight:800; color:#58a6ff; margin-bottom:8px;">CASO 2 · WORKFLOW</div>
          <h4 style="margin:0 0 8px; color:#c9d1d9;">Encadenar herramientas para revisar documentos</h4>
          <p style="font-size:0.78rem; color:#8b949e; margin:0 0 10px;">Diseña un flujo simple: buscar, leer, resumir y producir hallazgos con salida consistente.</p>
          <div style="font-size:0.75rem; color:#c9d1d9; line-height:1.8;">1. Define la tarea.<br>2. Escoge herramientas del flujo.<br>3. Ordénalas por dependencia.<br>4. Valida la salida de cada etapa.</div>
          <div style="font-size:0.72rem; color:#79c0ff; margin-top:8px;">Resultado esperado: el flujo termina en un entregable, no en pasos inconclusos.</div>
          <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px;" onclick="agCopy(this, 'Tarea: revisar un documento largo. Flujo deseado: 1) localizar archivo o fuente, 2) extraer hallazgos clave, 3) resumir riesgos, 4) entregar salida en tabla con prioridad alta, media y baja. Mantén el mismo formato en todo el proceso.')">📋 Copiar Prompt del Caso 2</button>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:16px; border-radius:10px; border:1px solid #333;">
          <div style="font-size:0.72rem; font-weight:800; color:#58a6ff; margin-bottom:8px;">CASO 3 · HANDOFF</div>
          <h4 style="margin:0 0 8px; color:#c9d1d9;">Separar investigación y ejecución</h4>
          <p style="font-size:0.78rem; color:#8b949e; margin:0 0 10px;">Un agente investiga y otro redacta o implementa. Así reduces ruido y mantienes el contexto mejor organizado.</p>
          <div style="font-size:0.75rem; color:#c9d1d9; line-height:1.8;">1. Define agente A y agente B.<br>2. A investiga y resume.<br>3. B recibe solo el contexto útil.<br>4. B produce el entregable final.</div>
          <div style="font-size:0.72rem; color:#79c0ff; margin-top:8px;">Resultado esperado: el segundo agente no repite investigación ni pierde formato.</div>
          <button class="gl-btn gl-btn-outline" style="width:100%; margin-top:10px;" onclick="agCopy(this, 'Agente A: investiga y sintetiza los hallazgos en máximo 8 puntos. Agente B: usa solo ese handoff para redactar el informe final en formato ejecutivo. No reinicies la investigación. Conserva riesgos, evidencias y acción recomendada.')">📋 Copiar Prompt del Caso 3</button>
        </div>
        <div style="background:rgba(88,166,255,0.05); padding:16px; border-radius:10px; border:1px solid rgba(88,166,255,0.25);">
          <div style="font-size:0.72rem; font-weight:800; color:#79c0ff; margin-bottom:8px;">CÓMO SABER SI ESTÁ BIEN HECHO</div>
          <p style="font-size:0.78rem; color:#c9d1d9; margin:0;">El agente debe responder con consistencia, respetar límites y no perder el formato entre una tarea y la siguiente.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="tab-config" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>🗂️ Configuración Superior (S-SOT)</h3>
        <p>Tu archivo <code>GEMINI.md</code> es la constitución del agente. Si el prompt es la conversación, la constitución es la ley: define <b>rol</b>, <b>límites</b>, <b>formato</b>, <b>fuentes</b> y <b>criterios de escalación</b>.</p>
        <div style="background:#010409; padding:20px; border-radius:10px; border:1px solid #30363d; font-family:monospace; font-size:0.8rem; color:#8b949e;">
            <span style="color:#58a6ff;"># DNA_v31.4 Sovereign Config</span><br>
            - **CERO PERMISOS**: Nunca ejecutes comandos de escritura sin aprobación.<br>
            - **STRUCTURE FIRST**: Sigue siempre el patrón de carpetas /src/modules.<br>
            - **L1_OFFLOAD**: Usa el bridge para procesar archivos de >800 líneas.
        </div>
        <div style="margin-top:16px; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
          <div style="background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#79c0ff;">Qué debe contener sí o sí</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Rol, tono, límites, formato de salida, fuentes permitidas y qué hacer si falta contexto.</p>
          </div>
          <div style="background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#79c0ff;">Error común</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Escribir reglas bonitas pero ambiguas. Si una regla no se puede verificar, no sirve.</p>
          </div>
        </div>
        <button class="ag-btn-glow" onclick="alert('Copiado snippet base al portapapeles')">Copiar Configuración Base</button>
    </div>
  </div>

  <div id="tab-vguide" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>🖼️ Guía Visual del Workspace</h3>
        <p>Esta pestaña te dice qué artefactos conviene tener visibles cuando trabajas con un agente. La idea es que el humano vea el contexto y el agente tenga trazabilidad.</p>
        <div style="display:flex; flex-direction:column; gap:15px;">
            <div class="m-ag-card" style="margin:0; border-color:#444;">
              <b style="color:#c9d1d9;">1. Carpeta de memoria</b><br>
              <span style="font-size:0.8rem; color:#8b949e;">Crea <code>.gemini/antigravity/brain</code> para persistir plantillas, handoffs y estado reutilizable.</span>
            </div>
            <div class="m-ag-card" style="margin:0; border-color:#444;">
              <b style="color:#c9d1d9;">2. Archivo de tarea abierto</b><br>
              <span style="font-size:0.8rem; color:#8b949e;">Mantén visible <code>task.md</code> para saber qué está haciendo el agente y cuál es la siguiente acción.</span>
            </div>
            <div class="m-ag-card" style="margin:0; border-color:#444;">
              <b style="color:#c9d1d9;">3. Registro de avances</b><br>
              <span style="font-size:0.8rem; color:#8b949e;">Usa <code>walkthrough.md</code> para documentar decisiones, cambios y validaciones. Eso evita perder contexto.</span>
            </div>
        </div>
        <div style="margin-top:16px; background:rgba(88,166,255,0.04); border:1px solid rgba(88,166,255,0.18); border-radius:10px; padding:14px; color:#c9d1d9; font-size:0.8rem; line-height:1.8;">
          <b style="color:#79c0ff;">Resultado esperado:</b> si cierras y vuelves mañana, el agente y tú deberían poder retomar el trabajo sin adivinar nada.
        </div>
        <div style="margin-top:14px; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#c9d1d9;">Lo mínimo visible</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Tarea actual, reglas del agente, archivos clave y salida esperada.</p>
          </div>
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#c9d1d9;">Error común</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Tener muchas carpetas y cero rastro de decisiones. Eso rompe continuidad.</p>
          </div>
        </div>
    </div>
  </div>

  <div id="tab-wb" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>⛓️ Constructor de Workflows</h3>
        <p>Un workflow es una secuencia de pasos donde la salida de una herramienta alimenta a la siguiente. Aquí aprendes a pensar como arquitecto del proceso, no solo como usuario del prompt.</p>
        <div id="chain-container-u" style="display:flex; flex-direction:column; gap:10px;">
            <div style="background:#0d1117; padding:12px; border-radius:8px; border-left:4px solid var(--ag-primary);">1. 🔎 <b>grep_search</b>: Buscar bugs</div>
        </div>
        <button class="ag-btn-glow" onclick="mAgAddChainStep()">+ Añadir Eslabón</button>
        <div style="margin-top:16px; font-size:0.8rem; color:#8b949e; line-height:1.8;">
          <b style="color:#c9d1d9;">Patrón útil:</b> localizar → leer → analizar → producir salida. Si un flujo no termina en una salida útil, todavía no está bien diseñado.
        </div>
        <div style="margin-top:14px; background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
          <h4 style="margin:0 0 8px; color:#79c0ff;">Ejemplo de workflow completo</h4>
          <div style="font-size:0.8rem; color:#c9d1d9; line-height:1.8;">
            1. Buscar contratos con una palabra clave.<br>
            2. Leer solo los apartados relevantes.<br>
            3. Extraer cláusulas de riesgo.<br>
            4. Entregar una tabla priorizada con recomendación.
          </div>
        </div>
        <div style="margin-top:14px; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
          <div style="background:rgba(88,166,255,0.04); border:1px solid rgba(88,166,255,0.18); border-radius:10px; padding:14px;">
            <b style="color:#79c0ff;">Buen workflow</b>
            <p style="font-size:0.78rem; color:#c9d1d9; margin:8px 0 0;">Cada eslabón tiene una entrada clara y una salida que alimenta al siguiente.</p>
          </div>
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#c9d1d9;">Mal workflow</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Muchos pasos bonitos, pero ninguno termina en un entregable verificable.</p>
          </div>
        </div>
    </div>
  </div>

  <div id="tab-audit" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>🛡️ Auditoría de Constitución</h3>
        <p>Auditar no es “revisar si suena bien”. Es validar si las reglas realmente controlan el comportamiento del agente. Esta pestaña sirve para detectar vacíos antes de ponerlo en producción.</p>
        <textarea id="audit-area-u" class="premium-textarea" style="height:150px;" placeholder="Pega tus reglas aquí..."></textarea>
        <button class="ag-btn-glow" onclick="mAgAuditRules()">Ejecutar Auditoría</button>
        <div id="audit-res-u" style="margin-top:15px; display:none;"></div>
        <div style="margin-top:16px; background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px; color:#8b949e; font-size:0.8rem; line-height:1.8;">
          Revisa especialmente estas 4 cosas: <b>qué puede hacer</b>, <b>qué no puede hacer</b>, <b>cómo debe responder</b> y <b>qué hace cuando no sabe</b>.
        </div>
        <div style="margin-top:14px; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#c9d1d9;">Checklist rápido</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Rol claro, límites concretos, formato fijo, fuentes definidas y manejo de incertidumbre.</p>
          </div>
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#c9d1d9;">Síntoma de una mala constitución</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Cada respuesta cambia de tono, inventa formato o actúa sin avisar riesgos.</p>
          </div>
        </div>
    </div>
  </div>

  <div id="tab-handoff" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>🧬 Orquestación Multi-Agente</h3>
        <p>El handoff sirve para pasar trabajo entre agentes sin perder el contexto útil. Un agente investiga, el otro implementa o redacta. La clave es transferir lo importante, no todo el ruido.</p>
        <div class="m-ag-grid-2">
            <div id="h-m-u" style="border:2px solid #333; padding:20px; border-radius:12px; text-align:center;">🐙 Manus<br><small id="h-m-st-u">Inactivo</small></div>
            <div id="h-a-u" style="border:2px solid #333; padding:20px; border-radius:12px; text-align:center;">🛡️ Antigravity<br><small id="h-a-st-u">Inactivo</small></div>
        </div>
        <button class="ag-btn-glow" onclick="mAgHandoffPro()">Simular Handoff</button>
        <div style="margin-top:16px; color:#8b949e; font-size:0.8rem; line-height:1.8;">
          <b style="color:#c9d1d9;">Buen handoff:</b> objetivo, hallazgos, riesgos, formato de salida y siguiente acción. <b>Mal handoff:</b> texto largo sin prioridad ni instrucción clara.
        </div>
        <div style="margin-top:14px; background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
          <h4 style="margin:0 0 8px; color:#79c0ff;">Plantilla de handoff útil</h4>
          <div style="font-size:0.8rem; color:#c9d1d9; line-height:1.8;">
            Objetivo: qué debe producir el siguiente agente.<br>
            Hallazgos: qué ya se descubrió.<br>
            Riesgos: qué no debe perderse.<br>
            Formato final: cómo debe verse la salida.<br>
            Siguiente acción: qué tiene que hacer ahora.
          </div>
        </div>
    </div>
  </div>

  <div id="tab-lab" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>⚡ Laboratorio de Alto Rendimiento</h3>
        <p>El laboratorio te muestra un principio importante: hay tareas demasiado grandes o pesadas para tratarlas como simple chat. En esos casos necesitas offload, herramientas o división del trabajo.</p>
        <div class="m-ag-card" style="border-left:4px solid #10b981;">
            <b>Escenario: Indexado Vectorial</b><br>
            <small>Carga 2,000 líneas de código y busca patrones de diseño obsoletos.</small>
            <button class="gl-btn gl-btn-outline" style="margin-top:10px;" onclick="mAgSimT('l1_offload', 'Processing 2048 lines...')">Iniciar</button>
        </div>
        <div style="margin-top:14px; color:#8b949e; font-size:0.8rem; line-height:1.8;">
          Usa esta lógica cuando el contexto sea grande, repetitivo o técnico. La pregunta correcta no es “¿puede responder?”, sino “¿cuál es la mejor arquitectura para procesar esto?”.
        </div>
        <div style="margin-top:14px; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
          <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.25); border-radius:10px; padding:14px;">
            <b style="color:#86efac;">Cuándo usar offload</b>
            <p style="font-size:0.78rem; color:#c9d1d9; margin:8px 0 0;">Cuando el insumo es demasiado grande, cuando el análisis es repetitivo o cuando el tiempo importa.</p>
          </div>
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:14px;">
            <b style="color:#c9d1d9;">Qué validar</b>
            <p style="font-size:0.78rem; color:#8b949e; margin:8px 0 0;">Que el procesamiento grande conserve precisión y termine en una salida utilizable, no solo en “análisis completado”.</p>
          </div>
        </div>
    </div>
  </div>

  <div id="tab-rgen" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>🛠️ Generador de Reglas Inteligentes</h3>
        <p>Si no sabes por dónde empezar, esta pestaña te ayuda a crear una constitución inicial. La idea no es generar magia, sino una <b>primera versión editable</b> de tus reglas.</p>
        <input type="text" class="premium-textarea" placeholder="¿Qué lenguaje usas? (e.g. JavaScript, Python)">
        <button class="ag-btn-glow" onclick="alert('Reglas generadas exitosamente.')">Generar Constitución</button>
        <div style="margin-top:16px; color:#8b949e; font-size:0.8rem; line-height:1.8;">
          Después de generar, siempre revisa: alcance, formato de salida, criterios de riesgo y acciones prohibidas.
        </div>
        <div style="margin-top:14px; background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
          <h4 style="margin:0 0 8px; color:#79c0ff;">Estructura mínima recomendada</h4>
          <div style="font-size:0.8rem; color:#c9d1d9; line-height:1.8;">
            1. Rol y especialidad.<br>
            2. Reglas inmutables.<br>
            3. Formato de salida.<br>
            4. Fuentes válidas.<br>
            5. Prohibiciones.<br>
            6. Qué hacer si falta contexto.
          </div>
        </div>
    </div>
  </div>

  <div id="tab-projects" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>🌐 Ecosistemas de Proyectos</h3>
        <p style="font-size:0.85rem; color:#8b949e; margin-bottom:15px;">Un agente no vive aislado. Esta pestaña te muestra cómo Antigravity convive con otras herramientas o módulos de la guía para resolver problemas complejos.</p>
        <ul style="font-size:0.85rem; line-height:1.8;">
            <li>💎 <b>Gemas (Gemini)</b>: En el módulo de Productividad (Misión Bonus).</li>
            <li>🤖 <b>GPTs (ChatGPT)</b>: En el Módulo 2 (ChatGPT Maestro).</li>
            <li>🎭 <b>Projects (Claude)</b>: En el Módulo 11 (Análisis Profundo).</li>
        </ul>
        <hr style="border:0; border-top:1px solid #333; margin:15px 0;">
        <h4 style="margin:0 0 10px;">✨ Proyectos de Clase Mundial</h4>
        <ul style="font-size:0.8rem; color:#8b949e;">
            <li>🧱 <b>Project Hydra</b>: Automatización de deploys con auditoría visual.</li>
            <li>🚀 <b>Project Orion</b>: Migración masiva de Java a Rust asistida por agentes.</li>
        </ul>
        <div style="margin-top:14px; background:rgba(255,255,255,0.03); border:1px solid #333; border-radius:10px; padding:14px;">
          <b style="color:#79c0ff;">Idea clave</b>
          <p style="font-size:0.78rem; color:#c9d1d9; margin:8px 0 0;">Antigravity no reemplaza otras herramientas. Las coordina. Ese es su valor real dentro del ecosistema.</p>
        </div>
    </div>
  </div>

  <div id="tab-ref" class="ag-content">
    <div class="m-ag-card animate-in">
        <h3>📖 Referencia de Comandos Soberanos</h3>
        <p style="font-size:0.82rem; color:#8b949e;">Usa esta tabla como mapa mental. No son solo comandos: representan tipos de acciones dentro de un flujo de trabajo con agentes.</p>
        <table style="width:100%; font-size:0.8rem; color:#8b949e; border-collapse:collapse;">
            <tr style="border-bottom:1px solid #333;"><th style="padding:10px;text-align:left;">Comando</th><th style="padding:10px;text-align:left;">Función</th></tr>
            <tr><td style="padding:10px;"><code>/task</code></td><td style="padding:10px;">Actualiza el estado de la tarea.</td></tr>
            <tr><td style="padding:10px;"><code>/audit</code></td><td style="padding:10px;">Verifica la integridad de las reglas.</td></tr>
            <tr><td style="padding:10px;"><code>/handoff</code></td><td style="padding:10px;">Transfiere el contexto a otro agente.</td></tr>
            <tr><td style="padding:10px;"><code>/workflow</code></td><td style="padding:10px;">Diseña la secuencia de herramientas antes de ejecutar.</td></tr>
            <tr><td style="padding:10px;"><code>/review</code></td><td style="padding:10px;">Pide hallazgos, riesgos o fallos antes de cerrar una tarea.</td></tr>
        </table>
        <div style="margin-top:14px; color:#8b949e; font-size:0.8rem; line-height:1.8;">
          Si te pierdes, vuelve a esta lógica básica: <b>definir tarea → validar reglas → ejecutar flujo → transferir o cerrar</b>.
        </div>
    </div>
  </div>

  <div id="tab-workshop" class="ag-content">
    <div class="m-ag-card animate-in" style="text-align:center;">
        <h3 style="color:var(--ag-accent);">🏆 Reto Final: Clona al Experto de tu Área</h3>
        <p style="color:#8b949e;">La meta no es solo responder una trivia. La meta es dejar listo un agente reusable para una función real de trabajo.</p>
        <div style="background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.25); border-radius:10px; padding:14px; text-align:left; margin:16px 0; color:#c9d1d9; font-size:0.8rem; line-height:1.8;">
          Entregable esperado:<br>
          1. Una constitución base del agente.<br>
          2. Dos preguntas de prueba reales.<br>
          3. Un criterio claro para validar si respondió como el experto.<br>
          4. Una mejora que le harías después de la primera prueba.
        </div>
        <p style="font-weight:bold;">Pregunta de verificación: ¿Cuál es el archivo principal de reglas inmutables?</p>
        <input type="text" id="ws-ans-u" class="premium-textarea" placeholder="Pista: GEMINI...">
        <button class="ag-btn-glow" onclick="mAgFinalU()">FINALIZAR MAESTRÍA</button>
    </div>
  </div>

  <div id="tab-estrategia" class="ag-content">
    <div class="m-ag-card animate-in">
      <div style="background:linear-gradient(135deg,rgba(88,166,255,0.1),transparent); border:1px solid rgba(88,166,255,0.3); border-radius:10px; padding:16px; margin-bottom:18px;">
        <div style="background:var(--ag-primary); color:#000; padding:3px 12px; border-radius:20px; font-size:0.7rem; font-weight:800; display:inline-block; margin-bottom:8px;">🧪 ESTRATEGIA REAL · Antigravity</div>
        <p style="font-size:1rem; font-weight:800; color:#58a6ff; margin:0 0 6px;">Operación: Clonar al Experto Jurídico</p>
        <p style="font-size:0.82rem; color:#8b949e; margin:0;">📋 Situación: El abogado más experto de tu área está de vacaciones 3 semanas. Construye un GPT personalizado o un agente Antigravity que replique su forma de revisar contratos y responder consultas durante su ausencia.</p>
      </div>

      <h4 style="color:#58a6ff; margin:0 0 12px;">🧳 Tu Maletín: Plantilla GEMINI.md para el Experto Jurídico</h4>
      <div style="margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-size:0.8rem; font-weight:700; color:#c9d1d9;">📝 Plantilla base lista para personalizar</span>
          <button style="background:rgba(88,166,255,0.1); border:1px solid rgba(88,166,255,0.3); color:#58a6ff; padding:5px 12px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer;" onclick="agCopy(this,'gemini_tpl')">📋 Copiar Plantilla</button>
        </div>
        <pre id="ag-gemini-tpl" style="background:#010409; border:1px solid #30363d; border-radius:8px; padding:14px; font-size:0.73rem; color:#3fb950; line-height:1.7; overflow-x:auto; margin:0; white-space:pre-wrap;"># 🧠 AGENTE: Experto Jurídico SENA (Dr. Rol Subrogado)
# Versión: 1.0 | Fecha: 2025

## ROL Y PERSONALIDAD
Eres el Dr. [NOMBRE], abogado especialista en Derecho Administrativo y Contratación Pública colombiana con 15 años de experiencia en el SENA. Tu estilo: directo, citas exactas de artículos, nunca adivinas.

## REGLAS INMUTABLES
1. SIEMPRE cita el artículo exacto de ley (Ley 80/93, Ley 1150/07, Decreto 1082/15).
2. NUNCA emitas concepto definitivo sin antes preguntar el número de contrato y modalidad de selección.
3. Si hay ambiguüedad, pregunta antes de responder con nivel de incertidumbre explicitado.
4. Responde SIEMPRE en formato: (1) Análisis, (2) Fundamento Legal, (3) Recomendación Concreta.

## CONOCIMIENTOS BASE (cargar como archivos)
- Estatuto de Contratación (Ley 80/93): [SUBIR PDF]
- Manual de Contratación SENA 2024: [SUBIR PDF]
- Decreto Único Reglamentario 1082: [SUBIR PDF]

## PROHIBICIONES
- No opinar sobre casos penales o disciplinarios.
- No dar conceptos verbales (siempre por escrito con fecha).
- No comprometerse con plazos sin revisar el expediente.</pre>
      </div>

      <!-- Casos de uso -->
      <h4 style="color:#58a6ff; margin:12px 0 10px;">💬 Prueba el Agente con Estas Preguntas</h4>
      <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(88,166,255,0.04); border:1px solid rgba(88,166,255,0.15); border-radius:8px; padding:10px 14px;">
          <span style="font-size:0.8rem; color:#c9d1d9;">“¿Cuál es el término legal para presentar observaciones al pliego de condiciones?”</span>
          <button style="background:rgba(88,166,255,0.1); border:1px solid rgba(88,166,255,0.25); color:#58a6ff; padding:3px 8px; border-radius:5px; font-size:0.68rem; cursor:pointer;" onclick="agCopy(this, '¿Cuál es el término legal para presentar observaciones al pliego de condiciones? Cita el artículo exacto.')">Copiar</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(88,166,255,0.04); border:1px solid rgba(88,166,255,0.15); border-radius:8px; padding:10px 14px;">
          <span style="font-size:0.8rem; color:#c9d1d9;">“Tenemos un contrato de prestación de servicios vencido. ¿Qué riesgo jurídico corremos si no renovamos?”</span>
          <button style="background:rgba(88,166,255,0.1); border:1px solid rgba(88,166,255,0.25); color:#58a6ff; padding:3px 8px; border-radius:5px; font-size:0.68rem; cursor:pointer;" onclick="agCopy(this, 'Tenemos un contrato de prestación de servicios vencido. ¿Qué riesgo jurídico corremos si no renovamos este contrato? Cita el fundamento legal aplicable.')">Copiar</button>
        </div>
      </div>

      <h4 style="color:#58a6ff; margin:0 0 10px;">✅ Ejecuta la Estrategia</h4>
      <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px;">
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="agkCheck(this,0,40)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#8b949e;"><p style="font-weight:700; font-size:0.85rem; color:#c9d1d9; margin:0 0 4px;">Copia la plantilla y personaliza con el nombre real del experto</p><p style="font-size:0.78rem; margin:0;">Reemplaza <code>[NOMBRE]</code> con el nombre real, ajusta los años de experiencia y la especialidad.</p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+40 XP</span>
        </li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="agkCheck(this,1,50)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#8b949e;"><p style="font-weight:700; font-size:0.85rem; color:#c9d1d9; margin:0 0 4px;">Ve a ChatGPT → My GPTs → Create y pega el rol como System Prompt</p><p style="font-size:0.78rem; margin:0;">En ChatGPT Plus: Menú → My GPTs → Create a GPT → pega el contenido de la plantilla en el campo "Instructions".</p><div style="font-size:0.72rem; background:rgba(88,166,255,0.06); border-left:2px solid #58a6ff; padding:4px 8px; border-radius:0 4px 4px 0; color:#79c0ff; margin-top:6px;">💡 Alternativa gratis: usa Claude.ai o Gemini con el mismo prompt, sin necesidad de plataforma.</div></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+50 XP</span>
        </li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="agkCheck(this,2,60)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#8b949e;"><p style="font-weight:700; font-size:0.85rem; color:#c9d1d9; margin:0 0 4px;">Haz las 2 pruebas del Maletín y verifica el formato de respuesta</p><p style="font-size:0.78rem; margin:0;">El agente debe responder siempre con: <b>(1) Análisis → (2) Fundamento Legal → (3) Recomendación</b>. Si no lo hace, ajusta el System Prompt.</p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+60 XP</span>
        </li>
        <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="agkCheck(this,3,50)">
          <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
          <div style="flex:1; color:#8b949e;"><p style="font-weight:700; font-size:0.85rem; color:#c9d1d9; margin:0 0 4px;">Comparte el link del agente con tu equipo de trabajo</p><p style="font-size:0.78rem; margin:0;">En ChatGPT: "Configure" → "Anyone with the link". Envía el link a al menos una persona de tu área para que lo pruebe.</p></div>
          <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+50 XP</span>
        </li>
      </ul>

      <div style="background:linear-gradient(135deg,#10b981,#059669); color:#fff; border-radius:8px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; margin-top:16px; font-weight:800;">
        <span>🏆 XP Ganado: Estrategia 1</span>
        <span id="ag-xp-count">0 / 200 XP</span>
      </div>

      <!-- Estrategia 2: La Tríada de Proyectos -->
      <div style="margin-top:35px; border-top:1px solid #333; padding-top:25px;">
        <div style="background:linear-gradient(135deg,rgba(245,158,11,0.1),transparent); border:1px solid rgba(245,158,11,0.3); border-radius:10px; padding:16px; margin-bottom:18px;">
          <div style="background:var(--ag-accent); color:#000; padding:3px 12px; border-radius:20px; font-size:0.7rem; font-weight:800; display:inline-block; margin-bottom:8px;">🔥 ESTRATEGIA AVANZADA · La Tríada</div>
          <p style="font-size:1rem; font-weight:800; color:var(--ag-accent); margin:0 0 6px;">Operación: Auditoría Omnipresente (Gemas + Proyectos)</p>
          <p style="font-size:0.82rem; color:#8b949e; margin:0;">📋 Situación: Tienes una licitación de 500 páginas y 3 días para decidir. No confíes en un solo motor. Usa la **Tríada Soberana** para cruzar verdades y detectar inconsistencias que una sola IA pasaría por alto.</p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:20px;">
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:15px;">
            <div style="color:#58a6ff; font-weight:800; font-size:0.75rem; margin-bottom:8px;">💎 GEMINI (Gema de Extracción)</div>
            <p style="font-size:0.7rem; color:#8b949e;"><b>Gema: "Extrator Maestro"</b><br>Sube el PDF y usa la ventana de 2M para extraer TODAS las cifras, fechas y nombres a un JSON o Tabla.</p>
          </div>
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:15px;">
            <div style="color:#10b981; font-weight:800; font-size:0.75rem; margin-bottom:8px;">🤖 CHATGPT (GPT de Lógica)</div>
            <p style="font-size:0.7rem; color:#8b949e;"><b>GPT: "Lógico de Negocios"</b><br>Pega la tabla extraída por Gemini. Pide que analice si los montos cumplen con las fórmulas de rentabilidad de tu empresa.</p>
          </div>
          <div style="background:rgba(255,255,255,0.02); border:1px solid #333; border-radius:10px; padding:15px;">
            <div style="color:#f59e0b; font-weight:800; font-size:0.75rem; margin-bottom:8px;">🎭 CLAUDE (Proyecto de Auditoría)</div>
            <p style="font-size:0.7rem; color:#8b949e;"><b>Project: "Auditor Final"</b><br>Sube la licitación Y el análisis de ChatGPT. Pregunta: "¿Hay alguna inconsistencia entre lo que dice el contrato y el análisis previo?".</p>
          </div>
        </div>

        <button class="ag-btn-glow" style="margin-top:0; background:linear-gradient(135deg,#f59e0b,#d97706);" onclick="mAgHandoffPro(); this.disabled=true; this.textContent='Orquestación Iniciada...'">⚡ SIMULAR ORQUESTACIÓN DE LA TRÍADA</button>
      </div>
    </div>
  </div>

  <div class="module-nav">
    <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú</button>
  </div>
</div>
`;

  return {
    init: function(app) {
      const parent = document.getElementById('module-antigravity');
      if (!parent) return;
      parent.innerHTML = agHTML;

      // Tabs Logic
      const tabs = parent.querySelectorAll('.premium-tab');
      const contents = parent.querySelectorAll('.ag-content');
      tabs.forEach(t => t.addEventListener('click', () => {
        tabs.forEach(x => x.classList.remove('active'));
        contents.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        const target = parent.querySelector('#' + t.dataset.tab);
        if (target) target.classList.add('active');
      }));

      // Kit Antigravity Estrategia Real
      window.agCopy = function(btn, type) {
        let text = type;
        if (type === 'gemini_tpl') text = document.getElementById('ag-gemini-tpl')?.innerText || '';
        navigator.clipboard.writeText(text).catch(() => {});
        const orig = btn.textContent;
        btn.textContent = '✅ Copiado';
        btn.style.color = '#10b981';
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.color = '';
        }, 2500);
        if (app) app.addXP(5);
      };

      let agkDone = new Set();
      let agkXP = 0;
      window.agkCheck = function(el, idx, xp) {
        if (agkDone.has(idx)) return;
        agkDone.add(idx);
        el.style.borderColor = 'rgba(16,185,129,0.4)';
        el.style.background = 'rgba(16,185,129,0.05)';
        const chk = el.querySelector('div');
        if (chk) {
          chk.style.background = '#10b981';
          chk.style.borderColor = '#10b981';
          chk.style.color = '#fff';
        }
        agkXP += xp;
        if (app) app.addXP(xp);
        const c = document.getElementById('ag-xp-count');
        if (c) c.textContent = agkXP + ' / 200 XP';
      };

      // Simulators Logic
      window.mAgSimT = function(tool, cmd) {
        const term = document.getElementById('terminal-mcp-u');
        if (!term) return;
        term.innerHTML = `<span style="color:var(--ag-primary);">[RUN] ${tool}</span>: ${cmd}<br>...`;
        setTimeout(() => {
          term.innerHTML += `<br><span style="color:#3fb950;">[SUCCESS] Agent response received and validated.</span>`;
        }, 1200);
      };

      window.mAgAddChainStep = function() {
        const container = document.getElementById('chain-container-u');
        if (!container) return;
        const div = document.createElement('div');
        div.style = "background:#0d1117; padding:12px; border-radius:8px; border-left:4px solid var(--ag-secondary); animation: slideUp 0.3s ease;";
        div.innerHTML = `${container.children.length + 1}. ⚙️ <b>python_compute</b>: Proceso de datos`;
        container.appendChild(div);
      };

      window.mAgAuditRules = function() {
        const area = document.getElementById('audit-area-u');
        const res = document.getElementById('audit-res-u');
        if (!area || !res) return;
        const val = area.value;
        res.style.display = 'block';
        res.innerHTML = val.includes('DNA') ? '<p style="color:#3fb950;">✅ Constitución sólida. Eres un experto.</p>' : '<p style="color:#f85149;">❌ Error: Falta declaración DNA v31.4.</p>';
      };

      window.mAgHandoffPro = function() {
        const m = document.getElementById('h-m-u');
        const a = document.getElementById('h-a-u');
        const mst = document.getElementById('h-m-st-u');
        const ast = document.getElementById('h-a-st-u');
        if (!m || !a || !mst || !ast) return;

        m.style.borderColor = 'var(--ag-primary)';
        mst.innerText = "🔍 Analizando...";
        setTimeout(() => {
          mst.innerText = "📤 Enviado.";
          m.style.borderColor = '#333';
          a.style.borderColor = 'var(--ag-secondary)';
          ast.innerText = "🛠️ Editando...";
          setTimeout(() => {
            ast.innerText = "✅ Listo.";
            a.style.borderColor = '#333';
            if (app) app.addXP(100);
          }, 1000);
        }, 1500);
      };

      window.mAgFinalU = function() {
        const ans = document.getElementById('ws-ans-u');
        if (!ans) return;
        const v = ans.value.toLowerCase();
        if (v.includes('gemini.md')) {
          alert("¡MAESTRO DEL TITÁN! +450 XP");
          if (app) app.addXP(450);
          document.querySelector('.complete-module-btn')?.click();
        } else {
          alert("Pista: Empieza por G y termina en .md");
        }
      };

      console.log('Antigravity Ultimate v31.4 loaded via init()');
    }
  };
})();
