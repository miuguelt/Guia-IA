/* ═══════════════════════════════════════════
   MÓDULO BONUS: Power Automate + IA
   Versión Enriquecida — Simulador de Nodos (RPA)
   ═══════════════════════════════════════════ */
(function() {
  const powerHTML = `
<style>
  .m-pa-card { background: #fafafa; border: 1px solid #d1d5db; border-radius: 12px; padding: 25px; position: relative; overflow: hidden; margin-bottom: 20px;}
  .m-pa-header-bg { position: absolute; top:0; left:0; width:100%; height:80px; background: linear-gradient(180deg, rgba(8,84,199,0.1) 0%, transparent 100%); pointer-events:none; }
  .m-pa-hero { background: linear-gradient(135deg, rgba(8,84,199,0.12), rgba(255,255,255,0.04)); border: 1px solid rgba(8,84,199,0.25); border-radius: 14px; padding: 20px; margin-bottom: 20px; }
  .m-pa-chip-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:12px; }
  .m-pa-chip { padding:7px 12px; border-radius:999px; background:rgba(8,84,199,0.08); border:1px solid rgba(8,84,199,0.18); color:#dbeafe; font-size:0.72rem; font-weight:700; }
  .m-pa-grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
  .m-pa-grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
  .m-pa-panel-card { background:rgba(255,255,255,0.03); border:1px solid rgba(8,84,199,0.12); border-radius:12px; padding:18px; }
  .m-pa-panel-card h4 { margin:0 0 8px; color:#e5eefc; }
  .m-pa-note { font-size:0.8rem; color:#cbd5e1; line-height:1.8; }
  .m-pa-step { position:relative; padding:16px 16px 16px 52px; border-radius:12px; border:1px solid rgba(8,84,199,0.14); background:rgba(255,255,255,0.02); }
  .m-pa-step-badge { position:absolute; left:14px; top:14px; width:24px; height:24px; border-radius:50%; background:#0854c7; color:#fff; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:0.72rem; }
  .m-pa-codebox { background:#0a1628; border:1px solid #1e3a5f; border-radius:10px; padding:12px 14px; font-size:0.76rem; color:#93c5fd; line-height:1.7; white-space:pre-wrap; }
  
  .m-pa-flow-container { background: #f3f4f6; border: 1px dashed #9ca3af; border-radius: 8px; padding: 30px; margin-top: 15px; display: flex; flex-direction: column; align-items: center; min-height: 250px; position: relative; }
  
  .m-pa-node { background: #fff; border: 2px solid #e5e7eb; border-radius: 6px; padding: 15px; width: 280px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 15px; z-index: 2; position: relative; margin-bottom: 30px; cursor:pointer; transition: 0.2s;}
  .m-pa-node:hover { border-color: #0854c7; transform: translateY(-2px); box-shadow: 0 8px 15px rgba(8,84,199,0.1); }
  .m-pa-node:last-child { margin-bottom: 0; }
  
  .m-pa-node-icon { width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #fff;}
  .m-pa-node-icon.outlook { background: #0f62fe; }
  .m-pa-node-icon.ai { background: linear-gradient(135deg, #a972ff, #0854c7); }
  .m-pa-node-icon.excel { background: #107c41; }
  .m-pa-node-icon.teams { background: #464eb8; }
  .m-pa-node-icon.add { background: #f9fafb; border: 2px dashed #9ca3af; color: #9ca3af; }
  
  .m-pa-node-content { flex: 1; }
  .m-pa-node-title { font-weight: 700; color: #1f2937; font-size: 0.95rem; margin-bottom: 2px; }
  .m-pa-node-desc { font-size: 0.75rem; color: #6b7280; }
  
  .m-pa-connector { position: absolute; width: 2px; height: 30px; background: #9ca3af; left: 50%; transform: translateX(-50%); top: 100%; z-index: 1;}
  
  .m-pa-panel { position: absolute; right: 0; top: 0; bottom: 0; width: 300px; background: #fff; border-left: 1px solid #d1d5db; box-shadow: -5px 0 15px rgba(0,0,0,0.05); padding: 20px; transform: translateX(100%); transition: 0.3s; z-index: 10; display:flex; flex-direction:column;}
  .m-pa-panel.open { transform: translateX(0); }
  
  .m-pa-option { padding: 12px; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 10px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.2s; }
  .m-pa-option:hover { background: #f3f4f6; border-color: #0854c7; }
  
  .m-pa-play-btn { background: #0854c7; color: #fff; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.2s; margin: 20px auto 0; box-shadow: 0 4px 10px rgba(8,84,199,0.3); }
  .m-pa-play-btn:hover { background: #003e9c; transform: scale(1.05); }
  
  .m-pa-run-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.9); z-index:20; display:none; flex-direction:column; align-items:center; justify-content:center; }
  .m-pa-run-overlay.active { display:flex; }
  .m-pa-spinner { width:40px; height:40px; border:4px solid #e5e7eb; border-top-color:#0854c7; border-radius:50%; animation: spin 1s linear infinite; margin-bottom:15px; }
  @media (max-width:900px){ .m-pa-grid-2,.m-pa-grid-3 { grid-template-columns:1fr; } }
</style>

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(8,84,199,0.1), rgba(255,255,255,0.05)); border: 1px solid rgba(8,84,199,0.3);">
  <div class="module-number gamer-badge" style="background:#0854c7;color:#fff;">BONUS: AUTOMATIZACIÓN</div>
  <h2 class="module-title glow-text" style="color:#0854c7;">🌊 Power Automate: Flujos con IA</h2>
  <p class="module-description" style="color:#1f2937;">Deja de hacer tareas robóticas. Conecta tus correos de Outlook, archivos de Excel y mensajes de Teams usando la nube de Microsoft 365. Todo programado arrastrando bloques como un rompecabezas.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 25 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: RPA Master</span>
  </div>
</div>

<div class="m-pa-hero">
  <h3 style="margin:0 0 8px; color:#e5eefc;">La idea central de Power Automate + IA</h3>
  <p class="m-pa-note" style="margin:0;">Power Automate no consiste en “hacer bots porque sí”. Sirve para <strong>quitar fricción a procesos repetitivos</strong> conectando disparadores, decisiones y salidas en el ecosistema Microsoft. Cuando añades IA, el flujo ya no solo mueve datos: también puede leer, clasificar, resumir y decidir rutas.</p>
  <div class="m-pa-chip-row">
    <span class="m-pa-chip">Triggers</span>
    <span class="m-pa-chip">Condiciones</span>
    <span class="m-pa-chip">Aprobaciones</span>
    <span class="m-pa-chip">Teams</span>
    <span class="m-pa-chip">Excel / SharePoint</span>
    <span class="m-pa-chip">IA + OCR</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m-pa-concept">📚 ¿Qué es RPA?</button>
  <button class="tab-btn" data-tab="m-pa-decider">🧭 Cuándo Automatizar</button>
  <button class="tab-btn" data-tab="m-pa-lab">✨ Simulador de Flujos</button>
  <button class="tab-btn" data-tab="m-pa-cases">🧭 Casos Prácticos</button>
  <button class="tab-btn" data-tab="m-pa-prompts">🧠 Plantillas</button>
  <button class="tab-btn" data-tab="m-pa-antipatterns">🚫 Errores</button>
  <button class="tab-btn" data-tab="m-pa-estrategia">🎯 Estrategia Real</button>
  <button class="tab-btn" data-tab="m-pa-mission">🏆 Reto Final</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m-pa-concept" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🤖</span> RPA: Automatización Robótica de Procesos</h3>
    <p>Piensa en un flujo como un trabajador invisible que vive en tu computadora y que obedece ciegamente un diagrama de flujo (IF -> THEN). Históricamente, hacían tareas "tontas". Hoy, al inyectarles IA, pueden <strong>leer, deducir y tomar decisiones</strong>.</p>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:15px;margin-top:20px;">
      
      <div style="background:rgba(8,84,199,0.05);padding:20px;border-radius:12px;border:1px solid rgba(8,84,199,0.1);">
        <h4 style="margin:0 0 10px;color:#0854c7;">⚡ Triggers (Desencadenadores)</h4>
        <p style="font-size:0.85rem;color:#475569;margin:0;">Es el evento que despierta al robot. Ejemplos: "Cuando llega un correo nuevo", "Cuando llenan el Formulario Web", "Todos los viernes a las 5PM".</p>
      </div>

      <div style="background:rgba(8,84,199,0.05);padding:20px;border-radius:12px;border:1px solid rgba(8,84,199,0.1);">
        <h4 style="margin:0 0 10px;color:#a972ff;">🧠 Action (Acción + Nodo IA)</h4>
        <p style="font-size:0.85rem;color:#475569;margin:0;">Al despertar, hace algo. Puedes agregar un nodo de IA (AI Builder o Copilot) para que lea el PDF adjunto y extraiga la factura y el cobro en texto plano.</p>
      </div>

      <div style="background:rgba(8,84,199,0.05);padding:20px;border-radius:12px;border:1px solid rgba(8,84,199,0.1);">
        <h4 style="margin:0 0 10px;color:#107c41;">🎯 Output (Destino)</h4>
        <p style="font-size:0.85rem;color:#475569;margin:0;">Inyecta el resultado final (como agregar una fila en Excel) y manda un mensaje de Teams avisando al jefe sin interferencia humana.</p>
      </div>

    </div>
  </div>
</div>

<div id="m-pa-decider" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧭</span> Cuándo automatizar y cuándo no</h3>
    <div class="m-pa-grid-2" style="margin-top:18px;">
      <div class="m-pa-panel-card">
        <h4>Sí automatices cuando...</h4>
        <p class="m-pa-note">La tarea se repite mucho, tiene reglas claras y el coste del error es controlable o se puede revisar.</p>
      </div>
      <div class="m-pa-panel-card">
        <h4>No empieces por aquí cuando...</h4>
        <p class="m-pa-note">El proceso todavía cambia cada semana, nadie sabe bien las reglas o depende de juicio humano muy sensible.</p>
      </div>
      <div class="m-pa-panel-card">
        <h4>La IA aporta valor si...</h4>
        <p class="m-pa-note">Hay que leer correos, PDFs, formularios o texto libre para clasificar, extraer o enrutar mejor.</p>
      </div>
      <div class="m-pa-panel-card">
        <h4>La automatización se rompe si...</h4>
        <p class="m-pa-note">No defines excepciones, faltan validaciones o dependes de texto ambiguo sin control de calidad.</p>
      </div>
    </div>
    <div class="m-pa-grid-3" style="margin-top:16px;">
      <div class="m-pa-step"><div class="m-pa-step-badge">1</div><h4 style="margin:0 0 6px; color:#e5eefc;">Define el trigger</h4><p class="m-pa-note" style="margin:0;">Qué evento inicia el flujo: correo, formulario, archivo, fecha o aprobación.</p></div>
      <div class="m-pa-step"><div class="m-pa-step-badge">2</div><h4 style="margin:0 0 6px; color:#e5eefc;">Diseña la lógica</h4><p class="m-pa-note" style="margin:0;">Qué condición, clasificación o lectura de IA debe ocurrir.</p></div>
      <div class="m-pa-step"><div class="m-pa-step-badge">3</div><h4 style="margin:0 0 6px; color:#e5eefc;">Aterriza la salida</h4><p class="m-pa-note" style="margin:0;">Dónde termina el valor: Teams, Excel, SharePoint, aprobación o alerta.</p></div>
    </div>
  </div>
</div>

<!-- TAB 2: LABORATORIO -->
<div id="m-pa-lab" class="ag-content">
  <div class="section-card animate-in m-pa-card">
    <div class="m-pa-header-bg"></div>
    <h3 style="position:relative;z-index:2;margin-top:0;color:#1f2937;"><span class="icon">🌊</span> Lienzo de Automatización Visual</h3>
    <p style="font-size:0.85rem;color:#6b7280;position:relative;z-index:2;">Haz clic en el nodo vacío (➕) para armar una tubería (Pipeline) de automatización y luego ejecútalo para ver el milagro.</p>
    
    <div class="m-pa-flow-container" style="overflow:hidden;">
      
      <!-- Flow Nodes -->
      <div class="m-pa-node" style="border-color:#0f62fe;">
        <div class="m-pa-node-icon outlook">📧</div>
        <div class="m-pa-node-content">
          <div class="m-pa-node-title">1. Trigger (Outlook)</div>
          <div class="m-pa-node-desc">Cuando llega un nuevo email con adjunto PDF.</div>
        </div>
        <div class="m-pa-connector"></div>
      </div>
      
      <div class="m-pa-node" style="border-color:#a972ff;">
        <div class="m-pa-node-icon ai">🧠</div>
        <div class="m-pa-node-content">
          <div class="m-pa-node-title">2. AI Builder (Copilot)</div>
          <div class="m-pa-node-desc">Extraer monto general de la factura en el PDF.</div>
        </div>
        <div class="m-pa-connector"></div>
      </div>
      
      <!-- Empty Slot for user to add -->
      <div class="m-pa-node" id="pa-empty-node" style="border-style:dashed;" onclick="mPaOpenPanel()">
        <div class="m-pa-node-icon add">➕</div>
        <div class="m-pa-node-content">
          <div class="m-pa-node-title" style="color:#9ca3af;">3. Agregar Acción Final</div>
          <div class="m-pa-node-desc">Elige dónde guardar los datos.</div>
        </div>
      </div>
      
      <button class="m-pa-play-btn" id="pa-run-btn" disabled style="opacity:0.5;" onclick="mPaRunFlow()">
        ▶ Ejecutar Automatización Total
      </button>

      <!-- Side Panel for choosing action -->
      <div class="m-pa-panel" id="pa-side-panel">
        <div style="font-weight:700; margin-bottom:15px; color:#1f2937;">Elige la Acción Siguiente</div>
        <div class="m-pa-option" onclick="mPaSelectAction('excel')">
          <div class="m-pa-node-icon excel" style="width:30px;height:30px;font-size:1rem;">📊</div>
          <div>
            <div style="font-weight:600;font-size:0.9rem;color:#1f2937;">Añadir fila a Excel</div>
            <div style="font-size:0.75rem;color:#6b7280;">Guarda el monto en tabla de Gastos M365.</div>
          </div>
        </div>
        <div class="m-pa-option" onclick="mPaSelectAction('teams')">
          <div class="m-pa-node-icon teams" style="width:30px;height:30px;font-size:1rem;">🧑‍🤝‍🧑</div>
          <div>
            <div style="font-weight:600;font-size:0.9rem;color:#1f2937;">Notificar por Teams</div>
            <div style="font-size:0.75rem;color:#6b7280;">Manda mensaje directo a Contabilidad.</div>
          </div>
        </div>
        
        <button class="gl-btn" style="margin-top:auto;" onclick="document.getElementById('pa-side-panel').classList.remove('open')">Cancelar</button>
      </div>

      <!-- Run Overlay Animation -->
      <div class="m-pa-run-overlay" id="pa-overlay">
        <div class="m-pa-spinner"></div>
        <div style="font-weight:700; font-size:1.1rem; color:#0854c7; margin-bottom:5px;">El Bot está trabajando...</div>
        <div id="pa-status-text" style="color:#475569; font-size:0.9rem;">Esperando trigger Outlook...</div>
      </div>

    </div>
  </div>
</div>

<!-- TAB 3: CASOS PRÁCTICOS -->
<div id="m-pa-cases" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#60a5fa; margin-top:0;">🧭 Tres Automatizaciones con Impacto Real</h3>
    <p style="font-size:0.85rem; color:#94a3b8;">La mejor manera de aprender Power Automate es pensar en un trigger, una condición y una acción final. Estos tres casos te enseñan la lógica completa.</p>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:18px;">
      <div style="background:#f8fafc; border:1px solid #dbeafe; border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#2563eb; margin-bottom:8px;">CASO 1 · EMAILS URGENTES</div>
        <h4 style="margin:0 0 8px; color:#1f2937;">Detectar correos críticos y avisar por Teams</h4>
        <p style="font-size:0.78rem; color:#64748b;">Útil para soporte, PQRS, incidencias o reportes que no pueden esperar.</p>
        <div style="font-size:0.76rem; color:#334155; line-height:1.8;">1. Trigger por Outlook.<br>2. Condición por asunto o prioridad.<br>3. Publicar alerta en Teams.<br>4. Archivar lo no urgente.</div>
      </div>
      <div style="background:#f8fafc; border:1px solid #dbeafe; border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#2563eb; margin-bottom:8px;">CASO 2 · FACTURAS</div>
        <h4 style="margin:0 0 8px; color:#1f2937;">Extraer datos de facturas y guardarlos en Excel</h4>
        <p style="font-size:0.78rem; color:#64748b;">Muy útil para contabilidad, compras o control de gastos repetitivos.</p>
        <div style="font-size:0.76rem; color:#334155; line-height:1.8;">1. Correo con adjunto.<br>2. AI Builder u OCR.<br>3. Extraer monto, fecha y proveedor.<br>4. Insertar fila en Excel.</div>
      </div>
      <div style="background:#f8fafc; border:1px solid #dbeafe; border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#2563eb; margin-bottom:8px;">CASO 3 · APROBACIONES</div>
        <h4 style="margin:0 0 8px; color:#1f2937;">Automatizar solicitudes de permiso o compra</h4>
        <p style="font-size:0.78rem; color:#64748b;">Funciona bien cuando un proceso depende de una decisión rápida y repetitiva.</p>
        <div style="font-size:0.76rem; color:#334155; line-height:1.8;">1. Trigger por Forms.<br>2. Condición por monto o tipo.<br>3. Enviar aprobación.<br>4. Notificar decisión y guardar registro.</div>
      </div>
    </div>
  </div>
</div>

<div id="m-pa-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#60a5fa; margin-top:0;">🧠 Plantillas mentales para diseñar flujos</h3>
    <p class="m-pa-note">En Power Automate no usas prompts como en un chat, pero sí conviene trabajar con plantillas conceptuales para diseñar automatizaciones más robustas.</p>
    <div class="m-pa-grid-2" style="margin-top:18px;">
      <div class="m-pa-panel-card">
        <h4>Plantilla 1: Trigger + filtro + alerta</h4>
        <div class="m-pa-codebox">Cuando ocurra [evento], revisa [campo o criterio]. Si cumple [condición], envía [notificación o acción] a [destino]. Si no cumple, registra o archiva.</div>
      </div>
      <div class="m-pa-panel-card">
        <h4>Plantilla 2: Documento + IA + registro</h4>
        <div class="m-pa-codebox">Cuando llegue [archivo o PDF], usa IA para extraer [dato 1, dato 2, dato 3]. Valida [campo crítico]. Luego guarda en [Excel / SharePoint / Dataverse] y notifica el resultado.</div>
      </div>
      <div class="m-pa-panel-card">
        <h4>Plantilla 3: Solicitud + aprobación</h4>
        <div class="m-pa-codebox">Cuando se reciba [solicitud], evalúa [monto / tipo / prioridad]. Si supera [umbral], envía aprobación a [rol]. Si no, resuelve automáticamente y deja trazabilidad.</div>
      </div>
      <div class="m-pa-panel-card">
        <h4>Plantilla 4: Captura + clasificación + enrutamiento</h4>
        <div class="m-pa-codebox">Cuando entre [correo / formulario], clasifica en [categorías]. Según la categoría, dirige a [equipo A / equipo B / cola C] y deja mensaje o registro del motivo.</div>
      </div>
    </div>
  </div>
</div>

<div id="m-pa-antipatterns" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#60a5fa; margin-top:0;">🚫 Errores caros en automatización</h3>
    <div class="m-pa-grid-3" style="margin-top:18px;">
      <div class="m-pa-panel-card"><h4>Automatizar caos</h4><p class="m-pa-note">Si el proceso ya está roto, el flujo solo rompe más rápido.</p></div>
      <div class="m-pa-panel-card"><h4>No pensar en excepciones</h4><p class="m-pa-note">Los flujos fallan por el 10% raro que nadie modeló.</p></div>
      <div class="m-pa-panel-card"><h4>Confiar ciegamente en la IA</h4><p class="m-pa-note">Extraer o clasificar sin validar puede mandar mal el proceso.</p></div>
      <div class="m-pa-panel-card"><h4>No dejar trazabilidad</h4><p class="m-pa-note">Si nadie puede ver qué pasó, el flujo se vuelve caja negra.</p></div>
      <div class="m-pa-panel-card"><h4>Hacer flujos gigantes</h4><p class="m-pa-note">Los buenos flujos suelen ser más simples, modulares y mantenibles.</p></div>
      <div class="m-pa-panel-card"><h4>No medir impacto</h4><p class="m-pa-note">Si no sabes cuánto tiempo ahorra o qué evita, no sabes si vale la pena.</p></div>
    </div>
    <div style="background:rgba(16,185,129,0.07); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:14px; margin-top:16px;">
      <strong style="color:#86efac;">Señal de buen uso:</strong>
      <div style="margin-top:6px; font-size:0.8rem; color:#cbd5e1; line-height:1.7;">
        El flujo termina en una acción útil, deja trazabilidad y reduce trabajo manual sin crear más supervisión de la que elimina.
      </div>
    </div>
  </div>
</div>

<!-- TAB 4: ESTRATEGIA REAL -->
<div id="m-pa-estrategia" class="ag-content">
  <div class="section-card animate-in">
    <div style="background:linear-gradient(135deg,rgba(8,84,199,0.12),transparent); border:1px solid rgba(8,84,199,0.35); border-radius:12px; padding:18px; margin-bottom:18px;">
      <div style="background:#0854c7; color:#fff; padding:3px 12px; border-radius:20px; font-size:0.7rem; font-weight:800; display:inline-block; margin-bottom:8px;">🧪 ESTRATEGIA REAL · Power Automate</div>
      <p style="font-size:1rem; font-weight:800; color:#60a5fa; margin:0 0 6px;">Operación: El Buzón Inteligente</p>
      <p style="font-size:0.82rem; color:#94a3b8; margin:0;">📋 Situación: Tu área recibe 80 correos diarios de soporte. El 20% son urgentes y se pierden entre el resto. Power Automate detectará los urgentes automáticamente y los pondrá frente a quien corresponde en Teams.</p>
    </div>

    <!-- Mapa del Flujo -->
    <h4 style="color:#60a5fa; margin:0 0 10px;">🗺️ Diagrama del Flujo a Construir</h4>
    <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:8px; padding:16px; margin-bottom:16px;">
      <div style="display:flex; align-items:center; gap:0; flex-wrap:wrap; font-size:0.78rem;">
        <div style="background:#0f62fe; color:#fff; padding:8px 12px; border-radius:6px; text-align:center; min-width:110px;"><b>📧 TRIGGER</b><br><span style="font-size:0.7rem;">Correo llega a Outlook</span></div>
        <div style="color:#9ca3af; font-size:1.2rem; padding:0 8px;">→</div>
        <div style="background:#a972ff; color:#fff; padding:8px 12px; border-radius:6px; text-align:center; min-width:110px;"><b>🤖 IA (Condition)</b><br><span style="font-size:0.7rem;">¿Asunto contiene "URGENTE"?</span></div>
        <div style="color:#9ca3af; font-size:1.2rem; padding:0 8px;">→</div>
        <div style="background:#107c41; color:#fff; padding:8px 12px; border-radius:6px; text-align:center; min-width:110px;"><b>📊 SI: ChatBot</b><br><span style="font-size:0.7rem;">Publicar en canal Teams</span></div>
        <div style="color:#9ca3af; font-size:1.2rem; padding:0 8px;">→</div>
        <div style="background:#d97706; color:#fff; padding:8px 12px; border-radius:6px; text-align:center; min-width:110px;"><b>📥 NO: Archivar</b><br><span style="font-size:0.7rem;">Mover a carpeta "Rutina"</span></div>
      </div>
    </div>

    <!-- Payload JSON -->
    <div style="margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span style="font-size:0.8rem; font-weight:700; color:#60a5fa;">📦 Payload de Prueba — Correo Simulado (JSON)</span>
        <button style="background:rgba(8,84,199,0.12); border:1px solid rgba(8,84,199,0.3); color:#60a5fa; padding:5px 12px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer;" onclick="paCopy(this,'payload')">📋 Copiar JSON</button>
      </div>
      <pre id="pa-payload" style="background:#0a1628; border:1px solid #1e3a5f; border-radius:8px; padding:14px; font-size:0.75rem; color:#7dd3fc; line-height:1.6; overflow-x:auto; margin:0;">{
  "from": "ciudadano@gmail.com",
  "to": "soporte@entidad.gov.co",
  "subject": "URGENTE: Acueducto cortado en barrio La Esperanza",
  "body": "Llevamos 6 horas sin agua. Mi familia tiene un bebé. Necesitamos respuesta inmediata.",
  "timestamp": "2025-03-18T09:47:00Z",
  "priority": "high"
}</pre>
    </div>

    <!-- Configuración del Trigger -->
    <div style="background:rgba(8,84,199,0.06); border:1px solid rgba(8,84,199,0.2); border-radius:8px; padding:12px; margin-bottom:16px;">
      <p style="font-size:0.8rem; font-weight:700; color:#60a5fa; margin:0 0 8px;">📝 Configuración exacta del Condition (condición)</p>
      <div style="font-size:0.78rem; color:#94a3b8; line-height:1.7;">
        Campo: <code style="background:#0f172a; padding:2px 6px; border-radius:4px; color:#7dd3fc;">Subject</code>
        &nbsp;|&nbsp; Condición: <code style="background:#0f172a; padding:2px 6px; border-radius:4px; color:#7dd3fc;">contains</code>
        &nbsp;|&nbsp; Valor: <code style="background:#0f172a; padding:2px 6px; border-radius:4px; color:#7dd3fc;">URGENTE</code>
      </div>
      <button style="background:rgba(8,84,199,0.15); border:1px solid rgba(8,84,199,0.4); color:#60a5fa; padding:4px 12px; border-radius:5px; font-size:0.7rem; font-weight:700; cursor:pointer; margin-top:8px;" onclick="paCopy(this,'config')">📋 Copiar configuración</button>
    </div>

    <!-- Checklist -->
    <h4 style="color:#60a5fa; margin:0 0 10px;">✅ Ejecuta la Estrategia</h4>
    <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px;">
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="paCheck(this,0,25)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Accede a make.powerautomate.com con tu cuenta M365</p><p style="font-size:0.78rem; margin:0;">Haz clic en <b>"+ Crear"</b> → <b>"Flujo de nube automatizado"</b>. Dále nombre: <b>"Filtro Urgente SENA"</b>.</p></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+25 XP</span>
      </li>
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="paCheck(this,1,40)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Configura el Trigger: "Cuando llega un email (V2)" de Outlook</p><p style="font-size:0.78rem; margin:0;">Busca el conector <b>"Office 365 Outlook"</b> → Trigger: <b>"When a new email arrives (V2)"</b>. Carpeta: Bandeja de Entrada.</p><div style="font-size:0.72rem; background:rgba(8,84,199,0.08); border-left:2px solid #0854c7; padding:4px 8px; border-radius:0 4px 4px 0; color:#60a5fa; margin-top:6px;">💡 No necesitas programar nada. Es arrastrar y soltar.</div></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+40 XP</span>
      </li>
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="paCheck(this,2,55)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Agrega una "Condición" con la configuración del Maletín</p><p style="font-size:0.78rem; margin:0;">Haz clic en <b>"+ Nuevo paso"</b> → busca <b>"Condición"</b>. Usa la configuración del recuadro azul de arriba (Subject / contains / URGENTE).</p></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+55 XP</span>
      </li>
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="paCheck(this,3,80)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1; color:#94a3b8;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Agrega la acción "Sí": Publicar en canal de Teams</p><p style="font-size:0.78rem; margin:0;">En la rama "SíF" → <b>"Microsoft Teams: Post message in a chat or channel"</b>. Mensaje: <code>"⚠️ URGENTE de: @{triggerOutputs()?['from']} — @{triggerOutputs()?['subject']}"</code>. Guarda y prueba con el JSON del Maletín.</p></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+80 XP</span>
      </li>
    </ul>

    <div style="background:linear-gradient(135deg,#10b981,#059669); color:#fff; border-radius:8px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; margin-top:16px; font-weight:800;">
      <span>🏆 XP Ganado en esta Estrategia</span>
      <span id="pa-xp-count">0 / 200 XP</span>
    </div>
  </div>
</div>

<!-- TAB 5: RETO FINAL -->
<div id="m-pa-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">⚡</span><span class="exercise-title">Reto Final: Robot de Oficina</span></div>
    <div class="mission-instructions" style="background:rgba(8,84,199,0.1);padding:20px;border-radius:12px;border-left:4px solid #0854c7;margin:20px 0;">
      <strong>🎯 Tu Desafío Real:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Crea un flujo con al menos 3 partes: trigger, condición y acción final.</li>
        <li>Puede ser uno de estos: correo urgente, factura a Excel o aprobación simple.</li>
        <li>Haz una prueba manual con un correo o payload simulado.</li>
        <li>Comprueba que el resultado termina en Teams, Excel o una notificación de aprobación.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Describe el flujo que construirías, cuál sería el trigger, qué condición usarías y cuál sería la acción final..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+150 XP · Insignia: RPA Master 🤖</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-power-automate" style="width:100%;margin-top:15px;background:#0854c7;color:#fff;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú Bonus</button>
</div>

<script>
  // Power Automate Estrategia Real
  const paCopyData = {
    payload: document.getElementById('pa-payload')?.innerText || '',
    config: 'Campo: Subject | Contiene | Valor: URGENTE'
  };
  window.paCopy = function(btn, type) {
    const t = type === 'payload' ? (document.getElementById('pa-payload')?.innerText || '') : 'Campo: Subject | Condición: contains | Valor: URGENTE';
    navigator.clipboard.writeText(t).catch(() => {});
    const orig = btn.textContent; btn.textContent = '✅ Copiado'; btn.style.color = '#10b981';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2500);
    if(window.app) window.app.addXP(5);
  };
  let paDone = [false,false,false,false];
  let paTotalXP = 0;
  window.paCheck = function(el, idx, xp) {
    if(paDone[idx]) return; paDone[idx] = true;
    el.style.borderColor = 'rgba(16,185,129,0.4)'; el.style.background = 'rgba(16,185,129,0.05)';
    const chk = el.querySelector('div'); if(chk){ chk.style.background='#10b981'; chk.style.borderColor='#10b981'; chk.style.color='#fff'; }
    paTotalXP += xp; if(window.app) window.app.addXP(xp);
    const c = document.getElementById('pa-xp-count'); if(c) c.textContent = paTotalXP + ' / 200 XP';
  };

  // Tabs logic
  setTimeout(() => {
    const parent = document.getElementById('module-power-automate');
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
  }, 300);

  // Funciones Interactivas
  window.mPaOpenPanel = function() {
    document.getElementById('pa-side-panel').classList.add('open');
  };

  let actionSelected = false;

  window.mPaSelectAction = function(type) {
    document.getElementById('pa-side-panel').classList.remove('open');
    const node = document.getElementById('pa-empty-node');
    const btn = document.getElementById('pa-run-btn');
    
    node.style.borderStyle = 'solid';
    node.onclick = null; // Quitar el panel click
    
    if(type === 'excel') {
      node.style.borderColor = '#107c41';
      node.innerHTML = \`
        <div class="m-pa-node-icon excel">📊</div>
        <div class="m-pa-node-content">
          <div class="m-pa-node-title">3. Insertar Fila (Excel)</div>
          <div class="m-pa-node-desc">Guarda Facturas en 'Reporte_Gastos.xlsx'</div>
        </div>\`;
    } else {
      node.style.borderColor = '#464eb8';
      node.innerHTML = \`
        <div class="m-pa-node-icon teams">🧑‍🤝‍🧑</div>
        <div class="m-pa-node-content">
          <div class="m-pa-node-title">3. Postear Chat (Teams)</div>
          <div class="m-pa-node-desc">Avisa: "Factura procesada con IA"</div>
        </div>\`;
    }
    
    btn.disabled = false;
    btn.style.opacity = '1';
    actionSelected = true;
    if(window.app) window.app.addXP(20);
  };

  window.mPaRunFlow = function() {
    if(!actionSelected) return;
    const overlay = document.getElementById('pa-overlay');
    const status = document.getElementById('pa-status-text');
    
    overlay.classList.add('active');
    status.innerText = "Simulando llegada de Outlook (...2segs)";
    
    setTimeout(() => {
      status.innerText = "AI Builder extrayendo texto del PDF... $500,000 USD detectados";
      if(window.app) window.app.addXP(10);
      
      setTimeout(() => {
        status.innerText = "Impactando aplicación final de M365... Operación Exitosa ✅";
        if(window.app) window.app.addXP(20);
        
        setTimeout(() => {
          overlay.classList.remove('active');
          alert('¡Tubería Completada! El flujo invisible ha ejecutado tu tarea a la perfección leyendo una factura y conectando a ecosistema cerrado y seguro. Has ganado XP.');
        }, 1500);
      }, 1500);
    }, 1500);
  };
</script>
`;

  const target = document.getElementById('module-power-automate');
  if (target) {
    target.innerHTML = powerHTML;
  }
})();
