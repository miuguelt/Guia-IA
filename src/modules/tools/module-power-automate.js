/* ═══════════════════════════════════════════
   MÓDULO BONUS: Power Automate + IA
   Versión Enriquecida — Simulador de Nodos (RPA)
   ═══════════════════════════════════════════ */
window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-power-automate'] = (function() {
  const powerHTML = `

<div class="module-header premium-header">
  <div class="module-number gamer-badge">BONUS: AUTOMATIZACIÓN</div>
  <h2 class="module-title glow-text">🌊 Power Automate: Flujos con IA</h2>
  <p class="module-description">Deja de hacer tareas robóticas. Conecta tus correos de Outlook, archivos de Excel y mensajes de Teams usando la nube de Microsoft 365. Todo programado arrastrando bloques como un rompecabezas.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 25 min</span>
    <span class="module-meta-item">💎 150 XP</span>
    <span class="module-meta-item">🏆 Insignia: RPA Master</span>
  </div>
</div>

<div class="m-pa-hero">
  <h3 class="text-gradient-primary" style="margin:0 0 12px;">La idea central de Power Automate + IA</h3>
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
    
    <div class="m-pa-grid-3" style="margin-top:24px;">
      
      <div class="m-pa-panel-card">
        <h4 class="text-gradient-primary" style="font-size: 1rem;">⚡ Triggers</h4>
        <p class="m-pa-note">Es el evento que despierta al robot. Ejemplos: "Cuando llega un correo nuevo", "Cuando llenan el Formulario Web", "Todos los viernes a las 5PM".</p>
      </div>

      <div class="m-pa-panel-card">
        <h4 class="text-gradient-primary" style="font-size: 1rem;">🧠 Action (Nodo IA)</h4>
        <p class="m-pa-note">Al despertar, hace algo. Puedes agregar un nodo de IA (AI Builder o Copilot) para que lea el PDF adjunto y extraiga la factura y el cobro en texto plano.</p>
      </div>

      <div class="m-pa-panel-card">
        <h4 class="text-gradient-primary" style="font-size: 1rem;">🎯 Output (Destino)</h4>
        <p class="m-pa-note">Inyecta el resultado final (como agregar una fila en Excel) y manda un mensaje de Teams avisando al jefe sin interferencia humana.</p>
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
    <div class="m-pa-grid-3" style="margin-top:24px;">
      <div class="m-pa-step"><div class="m-pa-step-badge">1</div><h4 class="text-gradient-primary">Define el trigger</h4><p class="m-pa-note" style="margin:0;">Qué evento inicia el flujo: correo, formulario, archivo, fecha o aprobación.</p></div>
      <div class="m-pa-step"><div class="m-pa-step-badge">2</div><h4 class="text-gradient-primary">Diseña la lógica</h4><p class="m-pa-note" style="margin:0;">Qué condición, clasificación o lectura de IA debe ocurrir.</p></div>
      <div class="m-pa-step"><div class="m-pa-step-badge">3</div><h4 class="text-gradient-primary">Aterriza la salida</h4><p class="m-pa-note" style="margin:0;">Dónde termina el valor: Teams, Excel, SharePoint, aprobación o alerta.</p></div>
    </div>
  </div>
</div>

<!-- TAB 2: LABORATORIO -->
<div id="m-pa-lab" class="ag-content">
  <div class="section-card animate-in glass-card-premium">
    <h3 class="text-gradient-primary" style="margin-top:0;"><span class="icon">🌊</span> Lienzo de Automatización Visual</h3>
    <p class="m-pa-note">Haz clic en el nodo vacío (➕) para armar una tubería (Pipeline) de automatización y luego ejecútalo para ver el milagro.</p>
    
    <div class="m-pa-flow-container">
      
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
          <div class="m-pa-node-title" style="color:rgba(255,255,255,0.4);">3. Agregar Acción Final</div>
          <div class="m-pa-node-desc">Elige dónde guardar los datos.</div>
        </div>
      </div>
      
      <button class="m-pa-play-btn" id="pa-run-btn" disabled style="opacity:0.3; pointer-events:none;" onclick="mPaRunFlow()">
        ▶ Ejecutar Automatización Total
      </button>

      <!-- Side Panel for choosing action -->
      <div class="m-pa-panel" id="pa-side-panel">
        <div class="text-gradient-primary" style="font-size: 1.1rem; margin-bottom:20px;">Elige la Acción Siguiente</div>
        <div class="m-pa-option" onclick="mPaSelectAction('excel')">
          <div class="m-pa-node-icon excel" style="width:34px;height:34px;font-size:1.1rem;">📊</div>
          <div>
            <div class="font-semibold text-base text-white">Añadir fila a Excel</div>
            <div class="text-sm text-secondary">Guarda el monto en tabla de Gastos M365.</div>
          </div>
        </div>
        <div class="m-pa-option" onclick="mPaSelectAction('teams')">
          <div class="m-pa-node-icon teams" style="width:34px;height:34px;font-size:1.1rem;">🧑‍🤝‍🧑</div>
          <div>
            <div class="font-semibold text-base text-white">Notificar por Teams</div>
            <div class="text-sm text-secondary">Manda mensaje directo a Contabilidad.</div>
          </div>
        </div>
        
        <button class="gl-btn" style="margin-top:auto;" onclick="document.getElementById('pa-side-panel').classList.remove('open')">Cancelar</button>
      </div>

      <!-- Run Overlay Animation -->
      <div class="m-pa-run-overlay" id="pa-overlay">
        <div class="m-pa-spinner"></div>
        <div class="text-gradient-primary" style="font-size: 1.2rem; margin-bottom:8px;">El Bot está trabajando...</div>
        <div id="pa-status-text" style="color:var(--text-secondary); font-size:0.95rem;">Esperando trigger Outlook...</div>
      </div>

    </div>
  </div>
</div>

<!-- TAB 3: CASOS PRÁCTICOS -->
<div id="m-pa-cases" class="ag-content">
  <div class="section-card animate-in">
    <h3 class="text-gradient-primary" style="margin-top:0;">🧭 Tres Automatizaciones con Impacto Real</h3>
    <p class="m-pa-note">La mejor manera de aprender Power Automate es pensar en un trigger, una condición y una acción final. Estos tres casos te enseñan la lógica completa.</p>

    <div class="m-pa-grid-3" style="margin-top:24px;">
      <div class="m-pa-panel-card">
        <div class="badge-titan" style="margin-bottom:12px;">CASO 1 · EMAILS URGENTES</div>
        <h4 style="margin:0 0 10px; color:#fff;">Detectar correos críticos y avisar por Teams</h4>
        <p class="m-pa-note" style="margin-bottom: 12px;">Útil para soporte, PQRS, incidencias o reportes que no pueden esperar.</p>
        <div class="m-pa-codebox">1. Trigger por Outlook.
2. Condición por asunto o prioridad.
3. Publicar alerta en Teams.
4. Archivar lo no urgente.</div>
      </div>
      <div class="m-pa-panel-card">
        <div class="badge-titan" style="margin-bottom:12px;">CASO 2 · FACTURAS</div>
        <h4 style="margin:0 0 10px; color:#fff;">Extraer datos de facturas y guardarlos en Excel</h4>
        <p class="m-pa-note" style="margin-bottom: 12px;">Muy útil para contabilidad, compras o control de gastos repetitivos.</p>
        <div class="m-pa-codebox">1. Correo con adjunto.
2. AI Builder u OCR.
3. Extraer monto, fecha y proveedor.
4. Insertar fila en Excel.</div>
      </div>
      <div class="m-pa-panel-card">
        <div class="badge-titan" style="margin-bottom:12px;">CASO 3 · APROBACIONES</div>
        <h4 style="margin:0 0 10px; color:#fff;">Automatizar solicitudes de permiso o compra</h4>
        <p class="m-pa-note" style="margin-bottom: 12px;">Funciona bien cuando un proceso depende de una decisión rápida y repetitiva.</p>
        <div class="m-pa-codebox">1. Trigger por Forms.
2. Condición por monto o tipo.
3. Enviar aprobación.
4. Notificar decisión y guardar registro.</div>
      </div>
    </div>
  </div>
</div>

<div id="m-pa-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3 class="text-gradient-primary" style="margin-top:0;">🧠 Plantillas mentales para diseñar flujos</h3>
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
    <h3 class="text-gradient-primary" style="margin-top:0;">🚫 Errores caros en automatización</h3>
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
  <div class="section-card animate-in glass-card-premium">
    <div style="background:linear-gradient(135deg,rgba(8,84,199,0.15),transparent); border: 1px solid rgba(8,84,199,0.3); border-radius:12px; padding:20px; margin-bottom:20px; backdrop-filter: blur(10px);">
      <div class="badge-titan" style="margin-bottom:10px;">🧪 ESTRATEGIA REAL · Power Automate</div>
      <p class="text-gradient-primary" style="font-size:1.15rem; margin:0 0 8px;">Operación: El Buzón Inteligente</p>
      <p class="m-pa-note">📋 Situación: Tu área recibe 80 correos diarios de soporte. El 20% son urgentes y se pierden entre el resto. Power Automate detectará los urgentes automáticamente y los pondrá frente a quien corresponde en Teams.</p>
    </div>

    <!-- Mapa del Flujo -->
    <h4 class="text-gradient-primary" style="margin:0 0 15px;">🗺️ Diagrama del Flujo a Construir</h4>
    <div style="background:rgba(0,0,0,0.2); border:1px solid var(--border); border-radius:12px; padding:20px; margin-bottom:20px;">
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-size:0.8rem;">
        <div style="background:#0f62fe; color:#fff; padding:10px 14px; border-radius:8px; text-align:center; min-width:120px; box-shadow: 0 4px 10px rgba(15,98,254,0.3);"><b>📧 TRIGGER</b><br><span style="font-size:0.75rem;">Outlook</span></div>
        <div style="color:var(--text-secondary); font-size:1.2rem; padding:0 4px;">→</div>
        <div style="background:#a972ff; color:#fff; padding:10px 14px; border-radius:8px; text-align:center; min-width:120px; box-shadow: 0 4px 10px rgba(169,114,255,0.3);"><b>🤖 IA</b><br><span style="font-size:0.75rem;">Condition</span></div>
        <div style="color:var(--text-secondary); font-size:1.2rem; padding:0 4px;">→</div>
        <div style="background:#107c41; color:#fff; padding:10px 14px; border-radius:8px; text-align:center; min-width:120px; box-shadow: 0 4px 10px rgba(16,124,65,0.3);"><b>📊 SI</b><br><span style="font-size:0.75rem;">Teams</span></div>
        <div style="color:var(--text-secondary); font-size:1.2rem; padding:0 4px;">→</div>
        <div style="background:#d97706; color:#fff; padding:10px 14px; border-radius:8px; text-align:center; min-width:120px; box-shadow: 0 4px 10px rgba(217,119,6,0.3);"><b>📥 NO</b><br><span style="font-size:0.75rem;">Archivar</span></div>
      </div>
    </div>

    <!-- Payload JSON -->
    <div style="margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span class="text-gradient-primary" style="font-size:0.9rem;">📦 Payload de Prueba — Correo Simulado (JSON)</span>
        <button class="gl-btn-outline" style="padding:6px 14px; font-size:0.75rem;" onclick="paCopy(this,'payload')">📋 Copiar JSON</button>
      </div>
      <pre id="pa-payload" class="m-pa-codebox" style="font-size:0.85rem;">{
  "from": "ciudadano@gmail.com",
  "to": "soporte@entidad.gov.co",
  "subject": "URGENTE: Acueducto cortado en barrio La Esperanza",
  "body": "Llevamos 6 horas sin agua. Mi familia tiene un bebé. Necesitamos respuesta inmediata.",
  "timestamp": "2025-03-18T09:47:00Z",
  "priority": "high"
}</pre>
    </div>

    <!-- Configuración del Trigger -->
    <div style="background:rgba(8,84,199,0.1); border:1px solid rgba(8,84,199,0.3); border-radius:10px; padding:16px; margin-bottom:20px; backdrop-filter: blur(5px);">
      <p class="text-gradient-primary" style="font-size:0.9rem; margin:0 0 10px;">📝 Configuración exacta del Condition (condición)</p>
      <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">
        Campo: <code class="m-pa-codebox" style="padding:3px 8px;">Subject</code>
        &nbsp;|&nbsp; Condición: <code class="m-pa-codebox" style="padding:3px 8px;">contains</code>
        &nbsp;|&nbsp; Valor: <code class="m-pa-codebox" style="padding:3px 8px;">URGENTE</code>
      </div>
      <button class="gl-btn-outline" style="padding:5px 12px; font-size:0.72rem; margin-top:12px;" onclick="paCopy(this,'config')">📋 Copiar configuración</button>
    </div>

    <!-- Checklist -->
    <h4 class="text-gradient-primary" style="margin:0 0 15px;">✅ Ejecuta la Estrategia</h4>
    <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px;">
      <li style="display:flex; gap:15px; padding:16px; border:1px solid rgba(255,255,255,0.08); border-radius:12px; cursor:pointer; background:rgba(255,255,255,0.02); transition: 0.3s;" onclick="paCheck(this,0,25)">
        <div style="width:24px; height:24px; border:2px solid var(--border); border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.75rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:1rem; color:#fff; margin:0 0 6px;">Accede a make.powerautomate.com</p><p class="m-pa-note" style="margin:0;">Haz clic en <b>"+ Crear"</b> → <b>"Flujo de nube automatizado"</b>. Dále nombre: <b>"Filtro Urgente SENA"</b>.</p></div>
        <span class="badge-titan" style="color:#10b981; border-color:rgba(16,185,129,0.3); background:rgba(16,185,129,0.1);">+25 XP</span>
      </li>
      <li style="display:flex; gap:15px; padding:16px; border:1px solid rgba(255,255,255,0.08); border-radius:12px; cursor:pointer; background:rgba(255,255,255,0.02); transition: 0.3s;" onclick="paCheck(this,1,40)">
        <div style="width:24px; height:24px; border:2px solid var(--border); border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.75rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:1rem; color:#fff; margin:0 0 6px;">Configura el Trigger: Outlook (V2)</p><p class="m-pa-note" style="margin:0;">Busca el conector <b>"Office 365 Outlook"</b> → Trigger: <b>"When a new email arrives (V2)"</b>. Carpeta: Bandeja de Entrada.</p><div style="font-size:0.8rem; background:rgba(8,84,199,0.1); border-left:3px solid var(--primary); padding:8px 12px; border-radius:0 6px 6px 0; color:var(--primary-light); margin-top:10px;">💡 No necesitas programar nada. Es arrastrar y soltar.</div></div>
        <span class="badge-titan" style="color:#10b981; border-color:rgba(16,185,129,0.3); background:rgba(16,185,129,0.1);">+40 XP</span>
      </li>
      <li style="display:flex; gap:15px; padding:16px; border:1px solid rgba(255,255,255,0.08); border-radius:12px; cursor:pointer; background:rgba(255,255,255,0.02); transition: 0.3s;" onclick="paCheck(this,2,55)">
        <div style="width:24px; height:24px; border:2px solid var(--border); border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.75rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:1rem; color:#fff; margin:0 0 6px;">Configura la Condición de Alarma</p><p class="m-pa-note" style="margin:0;">Haz clic en <b>"+ Nuevo paso"</b> → busca <b>"Condición"</b>. Usa: <code>Subject / contains / URGENTE</code>. Esto es el cerebro del flujo.</p></div>
        <span class="badge-titan" style="color:#10b981; border-color:rgba(16,185,129,0.3); background:rgba(16,185,129,0.1);">+55 XP</span>
      </li>
      <li style="display:flex; gap:15px; padding:16px; border:1px solid rgba(255,255,255,0.08); border-radius:12px; cursor:pointer; background:rgba(255,255,255,0.02); transition: 0.3s;" onclick="paCheck(this,3,80)">
        <div style="width:24px; height:24px; border:2px solid var(--border); border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.75rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:1rem; color:#fff; margin:0 0 6px;">Acción Final: Notificar por Teams</p><p class="m-pa-note" style="margin:0;">En la rama <b>"Sí"</b> → conector <b>"Microsoft Teams"</b>. Mensaje: <code>"⚠️ Alerta: @{triggerOutputs()?['from']} mandó algo urgente."</code></p></div>
        <span class="badge-titan" style="color:#10b981; border-color:rgba(16,185,129,0.3); background:rgba(16,185,129,0.1);">+80 XP</span>
      </li>
    </ul>

    <div class="glass-card-premium" style="background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%); color:#fff; border-radius:12px; padding:16px 20px; display:flex; align-items:center; justify-content:space-between; margin-top:24px; font-weight:800; box-shadow: 0 8px 24px rgba(99,102,241,0.25); letter-spacing: 0.5px; border: 1px solid rgba(255,255,255,0.15);">
      <span style="text-shadow: 0 1px 2px rgba(0,0,0,0.2); font-size: 0.9rem;">🏆 TOTAL XP GANADO</span>
      <span id="pa-xp-count" class="text-glow-gold" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem;">0 / 200 XP</span>
    </div>
  </div>
</div>

<!-- TAB 5: RETO FINAL -->
<div id="m-pa-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in glass-card-ultra" style="padding: 24px;">
    <div class="exercise-header" style="margin-bottom: 20px;"><span class="exercise-icon" style="background: var(--primary); padding: 8px; border-radius: 10px; box-shadow: 0 0 12px rgba(99,102,241,0.3);">⚡</span><span class="exercise-title" style="font-family: 'Space Grotesk'; font-size: 1.3rem; letter-spacing: 0.5px;">Reto Final: Robot de Oficina</span></div>
    <div class="mission-instructions" style="background:rgba(8,84,199,0.1); padding:24px; border-radius:12px; border-left:4px solid var(--primary); margin:24px 0;">
      <strong class="text-gradient-primary" style="font-size:1.1rem;">🎯 Tu Desafío Real:</strong>
      <ol style="margin-top:14px; font-size:0.95rem; line-height:2; color:var(--text-secondary);">
        <li>Crea un flujo con al menos 3 partes: trigger, condición y acción final.</li>
        <li>Puede ser uno de estos: correo urgente, factura a Excel o aprobación simple.</li>
        <li>Haz una prueba manual con un correo o payload simulado.</li>
        <li>Comprueba que el resultado termina en Teams, Excel o una notificación de aprobación.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Describe el flujo que construirías, cuál sería el trigger, qué condición usarías y cuál sería la acción final..." style="min-height:120px;"></textarea>
    <div class="reward-tag" style="margin-top:20px; background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); color:#10b981;">+150 XP · Insignia: RPA Master 🤖</div>
    <button class="gl-btn btn-titan-primary complete-module-btn animate-pulse" data-module="module-power-automate" style="width:100%; margin-top:24px;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
`;

  const powerAutomateInstance = {
    init: function(app) {
      console.log('[Module] Power Automate initialized');
      const target = document.getElementById('module-power-automate');
      if (target && !target.querySelector('.module-header')) {
        target.insertAdjacentHTML('afterbegin', powerHTML);
        setupPowerAutomateHandlers(target);
      }
    }
  };

  function setupPowerAutomateHandlers(parent) {
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
      node.innerHTML = '<div class="m-pa-node-icon excel">📊</div>' +
        '<div class="m-pa-node-content">' +
          '<div class="m-pa-node-title">3. Insertar Fila (Excel)</div>' +
          '<div class="m-pa-node-desc">Guarda Facturas en "Reporte_Gastos.xlsx"</div>' +
        '</div>';
    } else {
      node.style.borderColor = '#464eb8';
      node.innerHTML = '<div class="m-pa-node-icon teams">🧑‍🤝‍🧑</div>' +
        '<div class="m-pa-node-content">' +
          '<div class="m-pa-node-title">3. Postear Chat (Teams)</div>' +
          '<div class="m-pa-node-desc">Avisa: "Factura procesada con IA"</div>' +
        '</div>';
    }
    
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
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
      status.innerText = "Trigger detectado. Analizando adjuntos...";
      if(window.app) window.app.addXP(20); // Changed XP from 10 to 20 as per instruction
      
      setTimeout(() => {
        status.innerText = "AI Builder: Extrayendo campos clave (Factura #882)...";
        if(window.app) window.app.addXP(10);
        
        setTimeout(() => {
          status.innerText = "Validando reglas de negocio v32.4...";
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
      }, 1500);
    }, 1500);
  };
}


  window.GuiaModules = window.GuiaModules || {};
  window.GuiaModules['module-power-automate'] = powerAutomateInstance;
  return powerAutomateInstance;
})();
