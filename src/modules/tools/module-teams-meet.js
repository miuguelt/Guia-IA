/* ═══════════════════════════════════════════
   MÓDULO BONUS: Teams y Meet con IA
   Versión Enriquecida — Simulador de Videollamada (Copilot)
   ═══════════════════════════════════════════ */
(function() {
  const teamsHTML = `
<style>
  .m-tm-card { background: #1f1f1f; border: 1px solid #333; border-radius: 12px; padding: 15px; position: relative; overflow: hidden; margin-bottom: 20px;}
  .m-tm-hero { background: linear-gradient(135deg, rgba(70,78,184,0.12), rgba(255,255,255,0.03)); border: 1px solid rgba(70,78,184,0.24); border-radius: 14px; padding: 20px; margin-bottom: 20px; }
  .m-tm-chip-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:12px; }
  .m-tm-chip { padding:7px 12px; border-radius:999px; background:rgba(70,78,184,0.08); border:1px solid rgba(70,78,184,0.18); color:#c7d2fe; font-size:0.72rem; font-weight:700; }
  .m-tm-grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
  .m-tm-grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
  .m-tm-panel { background:rgba(255,255,255,0.03); border:1px solid rgba(70,78,184,0.14); border-radius:12px; padding:18px; }
  .m-tm-panel h4 { margin:0 0 8px; color:#fff; }
  .m-tm-note { font-size:0.8rem; color:#cbd5e1; line-height:1.8; }
  .m-tm-step { position:relative; padding:16px 16px 16px 52px; border-radius:12px; border:1px solid rgba(70,78,184,0.16); background:rgba(255,255,255,0.02); }
  .m-tm-step-badge { position:absolute; left:14px; top:14px; width:24px; height:24px; border-radius:50%; background:#464eb8; color:#fff; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:0.72rem; }
  
  .m-tm-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 15px; height: 350px; }
  
  /* Panel de Control (Llamada) */
  .m-tm-call { background: #000; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; position: relative;}
  
  .m-tm-video-grid { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 5px; padding: 5px;}
  .m-tm-person { background: #222; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden;}
  .m-tm-person.active { border: 2px solid #a972ff; }
  .m-tm-avatar { width: 50px; height: 50px; border-radius: 50%; background: #444; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;}
  .m-tm-pname { position: absolute; bottom: 5px; left: 5px; background: rgba(0,0,0,0.6); color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem;}
  
  .m-tm-subtitles { position: absolute; bottom: 60px; left: 10px; right: 10px; text-align: center; font-size: 0.85rem; color: #fff; text-shadow: 1px 1px 2px #000; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 4px; opacity: 0; transition: opacity 0.3s;}
  .m-tm-subtitles.active { opacity: 1; }
  
  .m-tm-controls { height: 50px; background: #292929; display: flex; justify-content: center; align-items: center; gap: 15px; }
  .m-tm-ctrl-btn { width: 35px; height: 35px; border-radius: 50%; background: #444; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; transition: 0.2s; border: none;}
  .m-tm-ctrl-btn:hover { background: #555; }
  .m-tm-ctrl-btn.danger { background: #c5221f; }
  .m-tm-ctrl-btn.copilot { background: linear-gradient(135deg, #a972ff, #0854c7); border:1px solid #a972ff;}
  
  /* Panel de Copilot (Derecha) */
  .m-tm-copilot { background: #1a1a1a; border-radius: 8px; display: flex; flex-direction: column; border: 1px solid #333; }
  .m-tm-cp-header { padding: 10px; border-bottom: 1px solid #333; display: flex; align-items: center; gap: 8px; font-weight: 700; color: #fff; font-size: 0.85rem;}
  .m-tm-cp-logo { font-size: 1.2rem; }
  .m-tm-cp-body { flex: 1; padding: 10px; overflow-y: auto; font-size: 0.8rem; color: #ccc; display: flex; flex-direction: column; gap: 10px;}
  .m-tm-cp-prompt { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; padding: 10px; border-top: 1px solid #333;}
  .m-tm-p-btn { background: #333; color: #fff; border: 1px solid #444; border-radius: 4px; padding: 6px; font-size: 0.7rem; cursor: pointer; transition: 0.2s;}
  .m-tm-p-btn:hover { background: #444; border-color: #a972ff; }
  
  .m-tm-msg { padding: 8px; border-radius: 6px; background: #222; }
  .m-tm-msg-title { color: #a972ff; font-weight: 700; margin-bottom: 5px; display:flex; align-items:center; gap:5px;}
  .m-tm-pulse { width: 8px; height: 8px; background: #a972ff; border-radius: 50%; display: inline-block; animation: pulse 1.5s infinite;}
  
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(169,114,255,0.7); } 70% { box-shadow: 0 0 0 5px rgba(169,114,255,0); } 100% { box-shadow: 0 0 0 0 rgba(169,114,255,0); } }
  @media (max-width:900px){ .m-tm-grid-2,.m-tm-grid-3 { grid-template-columns:1fr; } }
</style>

<div class="module-header premium-header" style="background: linear-gradient(135deg, rgba(70,78,184,0.1), rgba(10,10,10,0.5)); border: 1px solid rgba(70,78,184,0.3);">
  <div class="module-number gamer-badge" style="background:#464eb8;color:#fff;">BONUS: COMUNICACIONES</div>
  <h2 class="module-title glow-text" style="color:#a5b4fc;">📹 Teams y Meet: Minutas en Tiempo Real</h2>
  <p class="module-description" style="color:#f8fafc;">Olvídate de tomar notas mientras hablas. Copilot (Teams) y Gemini (Meet) transcriben la reunión e identifican quién dijo qué, generando automáticamente las tareas y enviándolas al final de la sesión.</p>
  <div class="module-meta">
    <span class="module-meta-item">⏱️ 15 min</span>
    <span class="module-meta-item">💎 100 XP</span>
    <span class="module-meta-item">🏆 Insignia: Facilitador de Sesiones</span>
  </div>
</div>

<div class="m-tm-hero">
  <h3 style="margin:0 0 8px; color:#fff;">La idea central de IA en reuniones</h3>
  <p class="m-tm-note" style="margin:0;">Teams con Copilot y Meet con Gemini no valen solo por “transcribir”. Su valor real está en <strong>convertir conversación en memoria, decisiones, tareas y seguimiento</strong>. Una reunión bien asistida por IA deja menos ambigüedad y menos trabajo invisible después.</p>
  <div class="m-tm-chip-row">
    <span class="m-tm-chip">Transcripción</span>
    <span class="m-tm-chip">Recap</span>
    <span class="m-tm-chip">Action items</span>
    <span class="m-tm-chip">Minutas</span>
    <span class="m-tm-chip">Seguimiento</span>
    <span class="m-tm-chip">Resumen ejecutivo</span>
  </div>
</div>

<div class="ag-tabs game-tabs" style="margin-bottom:28px;">
  <button class="tab-btn active" data-tab="m-tm-concept">📚 El Fin del Secretario</button>
  <button class="tab-btn" data-tab="m-tm-decider">🧭 Cuándo Activarla</button>
  <button class="tab-btn" data-tab="m-tm-lab">✨ Simulador de Llamada</button>
  <button class="tab-btn" data-tab="m-tm-cases">🧭 Casos Prácticos</button>
  <button class="tab-btn" data-tab="m-tm-prompts">🧠 Prompts</button>
  <button class="tab-btn" data-tab="m-tm-antipatterns">🚫 Errores</button>
  <button class="tab-btn" data-tab="m-tm-estrategia">🎯 Estrategia Real</button>
  <button class="tab-btn" data-tab="m-tm-mission">🏆 Reto Final</button>
</div>

<!-- TAB 1: CONCEPTO -->
<div id="m-tm-concept" class="ag-content active">
  <div class="section-card animate-in">
    <h3><span class="icon">🎙️</span> ¿Cómo funciona la IA Asistida en Video?</h3>
    <p>Para que la IA funcione en una reunión virtual, depende de un motor de <strong>Transcripción (Speech-to-Text)</strong>. Cuando enciendes la transcripción, la IA escucha y lee como si fuera un chat grupal gigante. Sobre ese texto es que razona.</p>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:15px;margin-top:20px;">
      
      <div style="background:rgba(255,255,255,0.03);padding:20px;border-radius:12px;border:1px solid rgba(70,78,184,0.3);">
        <h4 style="margin:0 0 10px;color:#a5b4fc;">📝 Recap (Tarde a la Reunión)</h4>
        <p style="font-size:0.85rem;color:#cbd5e1;margin:0;">Llegas 20 minutos tarde. Abres Copilot en Teams y le dices: *"¿De qué me perdí?"*. La IA lee la transcripción de hace 20 mins y te da un resumen privado sin que interrumpas a los demás.</p>
      </div>

      <div style="background:rgba(255,255,255,0.03);padding:20px;border-radius:12px;border:1px solid rgba(16,185,129,0.3);">
        <h4 style="margin:0 0 10px;color:#34d399;">📋 Action Items (Compromisos)</h4>
        <p style="font-size:0.85rem;color:#cbd5e1;margin:0;">Alguien dice: *"Ana, envíame el reporte para el viernes"*. La IA anota en segundo plano. Al final, genera un acta de reunión con la tarea y se la asigna a Ana en Planner de manera automática.</p>
      </div>
      
    </div>
  </div>
</div>

<div id="m-tm-decider" class="ag-content">
  <div class="section-card animate-in">
    <h3><span class="icon">🧭</span> Cuándo vale la pena usar IA en reuniones</h3>
    <div class="m-tm-grid-2" style="margin-top:18px;">
      <div class="m-tm-panel">
        <h4>Úsala cuando...</h4>
        <p class="m-tm-note">Hay decisiones, compromisos, personas ausentes, temas complejos o necesidad de dejar trazabilidad clara.</p>
      </div>
      <div class="m-tm-panel">
        <h4>No alcanza por sí sola cuando...</h4>
        <p class="m-tm-note">La reunión es caótica, la gente no verbaliza responsables o nadie define fechas ni acuerdos concretos.</p>
      </div>
      <div class="m-tm-panel">
        <h4>Se vuelve muy útil si...</h4>
        <p class="m-tm-note">Terminas la sesión con resumen ejecutivo, action items y mensaje de seguimiento listo para enviar.</p>
      </div>
      <div class="m-tm-panel">
        <h4>Pierde valor si...</h4>
        <p class="m-tm-note">Solo acumulas transcripción sin convertirla en decisiones, tareas y responsables verificables.</p>
      </div>
    </div>
    <div class="m-tm-grid-3" style="margin-top:16px;">
      <div class="m-tm-step"><div class="m-tm-step-badge">1</div><h4 style="margin:0 0 6px; color:#fff;">Captura</h4><p class="m-tm-note" style="margin:0;">Activa transcripción y asegúrate de que la conversación quede registrada.</p></div>
      <div class="m-tm-step"><div class="m-tm-step-badge">2</div><h4 style="margin:0 0 6px; color:#fff;">Extrae</h4><p class="m-tm-note" style="margin:0;">Convierte la conversación en acuerdos, responsables, riesgos y próximos pasos.</p></div>
      <div class="m-tm-step"><div class="m-tm-step-badge">3</div><h4 style="margin:0 0 6px; color:#fff;">Acciona</h4><p class="m-tm-note" style="margin:0;">Envía la minuta, alimenta tareas y comparte el resumen con quien decide.</p></div>
    </div>
  </div>
</div>

<!-- TAB 2: LABORATORIO -->
<div id="m-tm-lab" class="ag-content">
  <div class="section-card animate-in m-tm-card">
    
    <div class="m-tm-grid">
      <!-- Llamada -->
      <div class="m-tm-call">
        <div class="m-tm-video-grid">
          <div class="m-tm-person active" id="p-ana">
            <div class="m-tm-avatar" style="background:#10b981;">A</div>
            <div class="m-tm-pname">Ana</div>
          </div>
          <div class="m-tm-person" id="p-carlos">
            <div class="m-tm-avatar" style="background:#f59e0b;">C</div>
            <div class="m-tm-pname">Carlos</div>
          </div>
          <div class="m-tm-person" id="p-user">
            <div class="m-tm-avatar" style="background:#3b82f6;">T</div>
            <div class="m-tm-pname">Tú</div>
          </div>
          <div class="m-tm-person" id="p-inv1">
            <div class="m-tm-avatar" style="background:#6366f1;">J</div>
            <div class="m-tm-pname">Jefe</div>
          </div>
        </div>
        
        <div class="m-tm-subtitles" id="tm-subs">Ana: "Debemos priorizar la migración de la base de datos para esta semana."</div>
        
        <div class="m-tm-controls">
          <button class="m-tm-ctrl-btn">🎤</button>
          <button class="m-tm-ctrl-btn">📹</button>
          <button class="m-tm-ctrl-btn copilot" title="Abrir Copilot" onclick="mTmPlayCall()">🤖</button>
          <button class="m-tm-ctrl-btn danger">📞</button>
        </div>
      </div>
      
      <!-- Panel IACopilot -->
      <div class="m-tm-copilot">
        <div class="m-tm-cp-header">
          <span class="m-tm-cp-logo">✨</span> <span>Copilot para Reuniones</span>
        </div>
        
        <div class="m-tm-cp-body" id="cp-chat">
          <div class="m-tm-msg">
            <div class="m-tm-msg-title"><span class="m-tm-pulse"></span> Escuchando la reunión...</div>
            <div style="color:#888;">Ingresa a la reunión o usa los prompts rápidos abajo para interactuar con la transcripción en vivo.</div>
          </div>
        </div>
        
        <div class="m-tm-cp-prompt">
          <button class="m-tm-p-btn" onclick="mTmCopilotQuery('recap')">¿Qué se ha dicho?</button>
          <button class="m-tm-p-btn" onclick="mTmCopilotQuery('tasks')">Generar Tareas</button>
        </div>
      </div>
      
    </div>
    
  </div>
</div>

<!-- TAB 3: CASOS PRÁCTICOS -->
<div id="m-tm-cases" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#a5b4fc; margin-top:0;">🧭 Tres Escenarios Reales para Usar IA en Reuniones</h3>
    <p style="font-size:0.85rem; color:#94a3b8;">El valor de Teams o Meet con IA no es solo transcribir. Es recuperar decisiones, tareas y contexto sin depender del secretario de turno.</p>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:18px;">
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(70,78,184,0.2); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 1 · RECAP</div>
        <h4 style="margin:0 0 8px; color:#fff;">Llegaste tarde a la reunión</h4>
        <p style="font-size:0.78rem; color:#94a3b8;">Pregunta qué te perdiste y recupera decisiones sin interrumpir al grupo.</p>
        <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">1. Activa transcripción.<br>2. Abre Copilot o alternativa.<br>3. Pregunta "¿Qué me perdí?".<br>4. Pide 3 decisiones clave.</div>
      </div>
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(70,78,184,0.2); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 2 · COMPROMISOS</div>
        <h4 style="margin:0 0 8px; color:#fff;">Nadie tomó minuta</h4>
        <p style="font-size:0.78rem; color:#94a3b8;">Extrae responsables, tareas y fechas de una conversación larga sin releer toda la transcripción.</p>
        <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">1. Copia transcripción.<br>2. Pega prompt de action items.<br>3. Genera tabla.<br>4. Valida responsable y fecha límite.</div>
      </div>
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(70,78,184,0.2); border-radius:12px; padding:16px;">
        <div style="font-size:0.72rem; font-weight:800; color:#a5b4fc; margin-bottom:8px;">CASO 3 · RESUMEN</div>
        <h4 style="margin:0 0 8px; color:#fff;">Necesitas informar a directivos</h4>
        <p style="font-size:0.78rem; color:#94a3b8;">Convierte una reunión de crisis en un mensaje breve y profesional listo para correo o Teams.</p>
        <div style="font-size:0.76rem; color:#cbd5e1; line-height:1.8;">1. Usa la misma transcripción.<br>2. Pega prompt ejecutivo.<br>3. Ajusta tono formal.<br>4. Copia y comparte.</div>
      </div>
    </div>
  </div>
</div>

<div id="m-tm-prompts" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#a5b4fc; margin-top:0;">🧠 Prompts Maestros para reuniones con IA</h3>
    <div class="m-tm-grid-2" style="margin-top:18px;">
      <div class="m-tm-panel">
        <h4>Tabla de compromisos</h4>
        <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(70,78,184,0.18); border-radius:10px; padding:12px;">Genera una tabla con Responsable | Tarea | Fecha límite | Riesgo si no se cumple, usando solo la transcripción de esta reunión.</div>
      </div>
      <div class="m-tm-panel">
        <h4>Resumen ejecutivo</h4>
        <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(70,78,184,0.18); border-radius:10px; padding:12px;">Resume esta reunión en máximo 5 líneas para un directivo ocupado. Incluye qué pasó, qué se decidió y qué sigue.</div>
      </div>
      <div class="m-tm-panel">
        <h4>Recap para quien llegó tarde</h4>
        <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(70,78,184,0.18); border-radius:10px; padding:12px;">Explícame en lenguaje claro qué me perdí hasta ahora, qué decisiones se tomaron y si hay algo que debo responder o validar.</div>
      </div>
      <div class="m-tm-panel">
        <h4>Detección de vacíos</h4>
        <div style="font-size:0.78rem; color:#c4b5fd; line-height:1.7; background:rgba(0,0,0,0.2); border:1px solid rgba(70,78,184,0.18); border-radius:10px; padding:12px;">Analiza esta reunión y dime qué decisiones quedaron ambiguas, qué responsables no quedaron claros y qué preguntas faltó responder.</div>
      </div>
    </div>
  </div>
</div>

<div id="m-tm-antipatterns" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#a5b4fc; margin-top:0;">🚫 Errores que vuelven inútil la IA en reuniones</h3>
    <div class="m-tm-grid-3" style="margin-top:18px;">
      <div class="m-tm-panel"><h4>No activar la transcripción</h4><p class="m-tm-note">Sin texto base, el copiloto tiene muy poco con qué trabajar.</p></div>
      <div class="m-tm-panel"><h4>No verbalizar responsables</h4><p class="m-tm-note">Si nadie dice quién hace qué, la IA no puede inventar buena gobernanza.</p></div>
      <div class="m-tm-panel"><h4>No cerrar fechas</h4><p class="m-tm-note">“Luego lo vemos” produce actas bonitas pero poco accionables.</p></div>
      <div class="m-tm-panel"><h4>Pedir solo resumen</h4><p class="m-tm-note">A veces lo importante no es resumir, sino extraer compromisos y riesgos.</p></div>
      <div class="m-tm-panel"><h4>No revisar el acta</h4><p class="m-tm-note">La IA acelera mucho, pero sigue valiendo la pena una validación rápida del facilitador.</p></div>
      <div class="m-tm-panel"><h4>No convertir salida en seguimiento</h4><p class="m-tm-note">Una buena minuta sin tareas ni mensajes posteriores se enfría demasiado rápido.</p></div>
    </div>
  </div>
</div>

<!-- TAB 4: ESTRATEGIA REAL -->
<div id="m-tm-estrategia" class="ag-content">
  <div class="section-card animate-in">
    <div style="background:linear-gradient(135deg,rgba(70,78,184,0.15),transparent); border:1px solid rgba(70,78,184,0.35); border-radius:12px; padding:18px; margin-bottom:18px;">
      <div style="background:#464eb8; color:#fff; padding:3px 12px; border-radius:20px; font-size:0.7rem; font-weight:800; display:inline-block; margin-bottom:8px;">🧪 ESTRATEGIA REAL · Teams Meet</div>
      <p style="font-size:1rem; font-weight:800; color:#a5b4fc; margin:0 0 6px;">Operación: La Reunión Sin Minuta</p>
      <p style="font-size:0.82rem; color:#94a3b8; margin:0;">📋 Situación: Tu equipo tuvo una reunión de crisis de 45 minutos. Nadie tomó notas. Hay 6 compromisos sin registrar y el lunes preguntan quién se comprometió a qué. Copilot tiene la solución.</p>
    </div>

    <h4 style="color:#a5b4fc; margin:0 0 10px;">🧳 Tu Maletín de Trabajo</h4>

    <!-- Transcripción simulada -->
    <div style="margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span style="font-size:0.8rem; font-weight:700; color:#a5b4fc;">📝 Transcripción real de reunión (para simular)</span>
        <button style="background:rgba(70,78,184,0.15); border:1px solid rgba(70,78,184,0.4); color:#818cf8; padding:5px 12px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer;" onclick="tmCopy(this, 'transcript')">📋 Copiar</button>
      </div>
      <div style="background:#0f0f1a; border:1px solid #1e1e3a; border-radius:8px; padding:14px; font-size:0.78rem; color:#94a3b8; line-height:1.7;" id="tm-transcript">
        <b style="color:#6366f1;">Ana [10:02]:</b> Bien, el servidor 2 colapsó anoche. Perdimos 4 horas de datos de producción.<br>
        <b style="color:#f59e0b;">Carlos [10:04]:</b> Confirmó. El backup no ejecutó. Necesito acceso root para revisar el cron job. Luis, ¿me puedes dar permisos antes del mediodía?<br>
        <b style="color:#10b981;">Luis [10:05]:</b> Hecho. Te lo envío por ticket a las 11:30.<br>
        <b style="color:#6366f1;">Jefe [10:07]:</b> Ok. ¿Quién hace el informe para jurídica?<br>
        <b style="color:#f59e0b;">Carlos [10:08]:</b> Ana puede redactarlo, ella tiene el historial de incidentes.<br>
        <b style="color:#6366f1;">Ana [10:09]:</b> Perfecto. Lo entrego el miércoles a las 3pm.<br>
        <b style="color:#ef4444;">Jefe [10:10]:</b> Bien. Y Marina, necesito que contactes al proveedor de la CDN hoy mismo. Que explique el tiempo de inactividad.<br>
        <b style="color:#a78bfa;">Marina [10:11]:</b> Entendido, lo llamo antes de las 2pm.
      </div>
    </div>

    <!-- Prompts de Copilot -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
      <div style="background:rgba(70,78,184,0.06); border:1px solid rgba(70,78,184,0.2); border-radius:8px; padding:12px;">
        <p style="font-size:0.78rem; font-weight:700; color:#a5b4fc; margin:0 0 6px;">🤖 Prompt #1 — Tabla de Compromisos</p>
        <p style="font-size:0.72rem; color:#64748b; margin:0 0 8px;">Genera el acta completa en formato tabla.</p>
        <button style="background:rgba(70,78,184,0.15); border:1px solid rgba(70,78,184,0.4); color:#818cf8; padding:4px 10px; border-radius:5px; font-size:0.7rem; font-weight:700; cursor:pointer; width:100%;" onclick="tmCopy(this, 'p1')">📋 Copiar Prompt</button>
      </div>
      <div style="background:rgba(70,78,184,0.06); border:1px solid rgba(70,78,184,0.2); border-radius:8px; padding:12px;">
        <p style="font-size:0.78rem; font-weight:700; color:#a5b4fc; margin:0 0 6px;">🤖 Prompt #2 — Resumen de Crisis</p>
        <p style="font-size:0.72rem; color:#64748b; margin:0 0 8px;">Texto ejecutivo de 3 líneas para el director.</p>
        <button style="background:rgba(70,78,184,0.15); border:1px solid rgba(70,78,184,0.4); color:#818cf8; padding:4px 10px; border-radius:5px; font-size:0.7rem; font-weight:700; cursor:pointer; width:100%;" onclick="tmCopy(this, 'p2')">📋 Copiar Prompt</button>
      </div>
    </div>

    <!-- Hidden data for copy -->
    <div id="tm-copy-data" style="display:none;">
      <span id="tm-p1">Lee la siguiente transcripción de una reunión de crisis. Genera una tabla de compromisos con estas columnas: Responsable | Tarea | Fecha Límite | Estado. Saca TODOS los compromisos explícitos mencionados. Transcripción:\n[PEGAR TRANSCRIPCIÓN AQUÍ]</span>
      <span id="tm-p2">En base a esta transcripción, redacta un resumen ejecutivo de máximo 3 líneas para el director técnico explicando: (1) qué sucedió, (2) quién está tomando acción, (3) cuándo se resolverá. Transcripción:\n[PEGAR TRANSCRIPCIÓN AQUÍ]</span>
    </div>

    <!-- Checklist -->
    <h4 style="color:#a5b4fc; margin:0 0 10px;">✅ Ejecuta la Estrategia</h4>
    <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px;">
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="tmCheck(this,0,30)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Activa la transcripción en tu próxima reunión de Teams</p><p style="font-size:0.78rem; color:#64748b; margin:0;">En Teams: Botón <b>"Más acciones" (...)</b> → <b>"Iniciar transcripción"</b>. O en Google Meet: <b>Actividades → Transcripción</b>.</p><div style="font-size:0.72rem; background:rgba(70,78,184,0.08); border-left:2px solid #464eb8; padding:4px 8px; border-radius:0 4px 4px 0; color:#818cf8; margin-top:6px;">💡 No requiere licencia Copilot. La transcripción básica es gratuita en Teams y Meet.</div></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+30 XP</span>
      </li>
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="tmCheck(this,1,40)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Copia la transcripción de muestra del Maletín</p><p style="font-size:0.78rem; color:#64748b; margin:0;">Este texto simula exactamente una reunión real con la que practicarás los prompts. Copia con el botón de arriba.</p></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+40 XP</span>
      </li>
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="tmCheck(this,2,60)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Pega el Prompt #1 en Copilot (Teams) o en ChatGPT/Gemini</p><p style="font-size:0.78rem; color:#64748b; margin:0;">Reemplaza <code>[PEGAR TRANSCRIPCIÓN]</code> con el texto copiado. El resultado esperado es una tabla con 4 compromisos identificados (Carlos, Luis, Ana, Marina).</p><div style="font-size:0.72rem; background:rgba(70,78,184,0.08); border-left:2px solid #464eb8; padding:4px 8px; border-radius:0 4px 4px 0; color:#818cf8; margin-top:6px;">💡 Si no tienes Copilot, usa Gemini o ChatGPT con la transcripción. El resultado es igual de válido.</div></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+60 XP</span>
      </li>
      <li style="display:flex; gap:12px; padding:12px; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer;" onclick="tmCheck(this,3,70)">
        <div style="width:20px; height:20px; border:2px solid #475569; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.65rem; margin-top:2px;">✓</div>
        <div style="flex:1;"><p style="font-weight:700; font-size:0.85rem; color:#e2e8f0; margin:0 0 4px;">Genera el resumen ejecutivo con el Prompt #2 y compártelo</p><p style="font-size:0.78rem; color:#64748b; margin:0;">El texto generado debe ser tan limpio que puedas pegarlo directamente en un correo al director sin editarlo. Si no lo es, añade al prompt: <i>"Más formal y conciso"</i>.</p></div>
        <span style="font-size:0.7rem; font-weight:800; color:#10b981; flex-shrink:0;">+70 XP</span>
      </li>
    </ul>

    <div style="background:linear-gradient(135deg,#10b981,#059669); color:#fff; border-radius:8px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; margin-top:16px; font-weight:800;">
      <span>🏆 XP Ganado en esta Estrategia</span>
      <span id="tm-xp-count">0 / 200 XP</span>
    </div>
  </div>
</div>

<!-- TAB 5: RETO FINAL -->
<div id="m-tm-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <div class="exercise-header"><span class="exercise-icon">📹</span><span class="exercise-title">Reto Final: La Reunión que Nadie Documentó</span></div>
    <div class="mission-instructions" style="background:rgba(70,78,184,0.1);padding:20px;border-radius:12px;border-left:4px solid #464eb8;margin:20px 0;">
      <strong>🎯 Tu Desafío Real:</strong>
      <ol style="margin-top:12px;font-size:0.85rem;line-height:2;">
        <li>Activa la transcripción en una reunión real o usa la transcripción de ejemplo del módulo.</li>
        <li>Genera una tabla de compromisos con responsables y fechas.</li>
        <li>Redacta un resumen ejecutivo de máximo 3 líneas para el director.</li>
        <li>Deja ambos entregables listos para pegar en correo o Teams.</li>
      </ol>
    </div>
    <textarea class="premium-textarea" placeholder="Escribe aquí el mayor riesgo de no documentar una reunión y qué te parece más útil: la tabla de compromisos o el resumen ejecutivo..."></textarea>
    <div class="reward-tag" style="margin-top:15px;">+100 XP · Insignia: Facilitador de Sesiones 🎯</div>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-teams-meet" style="width:100%;margin-top:15px;background:#464eb8;color:#fff;">✅ Misión Completada — Reclamar Insignia</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver al Menú Bonus</button>
</div>

<script>
  // Tabs logic
  setTimeout(() => {
    const parent = document.getElementById('module-teams-meet');
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

  // Teams Estrategia Real
  window.tmCopy = function(btn, type) {
    let text = '';
    if(type === 'transcript') text = document.getElementById('tm-transcript')?.innerText || '';
    else if(type === 'p1') text = document.getElementById('tm-p1')?.innerText || '';
    else if(type === 'p2') text = document.getElementById('tm-p2')?.innerText || '';
    navigator.clipboard.writeText(text).catch(() => {});
    const orig = btn.textContent;
    btn.textContent = '✅ Copiado'; btn.style.color = '#10b981';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2500);
    if(window.app) window.app.addXP(5);
  };
  let tmDone = [false,false,false,false];
  let tmTotalXP = 0;
  window.tmCheck = function(el, idx, xp) {
    if(tmDone[idx]) return;
    tmDone[idx] = true;
    el.style.borderColor = 'rgba(16,185,129,0.4)';
    el.style.background = 'rgba(16,185,129,0.05)';
    const chk = el.querySelector('div');
    if(chk) { chk.style.background='#10b981'; chk.style.borderColor='#10b981'; chk.style.color='#fff'; }
    tmTotalXP += xp;
    if(window.app) window.app.addXP(xp);
    const c = document.getElementById('tm-xp-count');
    if(c) c.textContent = tmTotalXP + ' / 200 XP';
  };

  // Funciones Interactivas
  const dialogs = [
    { p: 'p-ana', txt: 'Bien equipo, la migración es urgente para esta semana.' },
    { p: 'p-carlos', txt: 'Coincido. El servidor 2 está al límite. Me encargo de la limpieza previa.' },
    { p: 'p-inv1', txt: 'Perfecto Carlos. Te doy de plazo hasta el jueves al mediodía.' },
    { p: 'p-carlos', txt: 'Entendido.' },
    { p: 'p-ana', txt: 'Oigan, ¿Alguien sabe si el jefe aprobó el presupuesto adicional?' }
  ];
  
  let callInterval = null;
  let dialogIndex = 0;

  window.mTmPlayCall = function() {
    if(callInterval) return;
    const subs = document.getElementById('tm-subs');
    subs.classList.add('active');
    
    callInterval = setInterval(() => {
      // Remover activos
      document.querySelectorAll('.m-tm-person').forEach(el => el.classList.remove('active'));
      
      const d = dialogs[dialogIndex];
      document.getElementById(d.p).classList.add('active');
      subs.innerText = d.txt;
      
      dialogIndex++;
      if (dialogIndex >= dialogs.length) {
         clearInterval(callInterval);
         setTimeout(() => subs.innerText = "La sala está en silencio...", 2000);
      }
    }, 3000);
  };

  window.mTmCopilotQuery = function(type) {
    const chat = document.getElementById('cp-chat');
    
    const userM = document.createElement('div');
    userM.className = 'm-tm-msg';
    userM.style.borderLeft = '3px solid #ccc';
    userM.innerHTML = type === 'recap' ? "Usuario: Enséñame un resumen de lo hablado hasta ahora." : "Usuario: Lista los compromisos asignados.";
    chat.appendChild(userM);
    chat.scrollTop = chat.scrollHeight;
    
    setTimeout(() => {
      const ai = document.createElement('div');
      ai.className = 'm-tm-msg';
      ai.style.borderLeft = '3px solid #a972ff';
      if(type === 'recap') {
        ai.innerHTML = '<span style="color:#a972ff;font-weight:700;">✨ Resumen:</span><br>Se acordó priorizar la migración de la DB (marcada como urgencia). Luego surgieron dudas financieras pero el enfoque principal es descargar el servidor principal.';
      } else {
        ai.innerHTML = '<span style="color:#a972ff;font-weight:700;">✨ Tareas extraídas:</span><br>- <b>Limpieza del servidor 2</b> (Asignado a: Carlos) [Fecha: Jueves a mediodía].';
      }
      chat.appendChild(ai);
      chat.scrollTop = chat.scrollHeight;
      if(window.app) window.app.addXP(20);
    }, 1500);
  };
</script>
`;

  const target = document.getElementById('module-teams-meet');
  if (target) {
    target.innerHTML = teamsHTML;
  }
})();
