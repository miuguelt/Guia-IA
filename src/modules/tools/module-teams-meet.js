/* ═══════════════════════════════════════════
   MÓDULO BONUS: Teams y Meet con IA
   Versión Enriquecida — Simulador de Videollamada (Copilot)
   ═══════════════════════════════════════════ */
window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-teams-meet'] = (function() {
  const teamsHTML = `

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
  <button class="tab-btn" data-tab="m-tm-stepbystep">⚙️ Activar y Descargar</button>
  <button class="tab-btn" data-tab="m-tm-antipatterns">🚫 Errores</button>
  <button class="tab-btn" data-tab="m-tm-estrategia">🎯 Estrategia Real</button>
  <button class="tab-btn" data-tab="m-tm-gemas">💎 Gemas Especializadas</button>
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

<div id="m-tm-stepbystep" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#a5b4fc; margin-top:0;">⚙️ Guía Práctica: Activar y Descargar Transcripciones</h3>
    <div class="m-tm-grid-2" style="margin-top:18px;">
      
      <!-- TEAMS -->
      <div style="background:rgba(70,78,184,0.06); border:1px solid rgba(70,78,184,0.3); border-radius:12px; padding:18px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
          <div style="background:#5B5FC7; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:1.1rem;">T</div>
          <h4 style="margin:0; color:#fff;">Microsoft Teams</h4>
        </div>
        
        <p style="font-size:0.8rem; font-weight:bold; color:#a5b4fc; margin-bottom:4px;">▶️ Cómo Activarla en 2026</p>
        <ol style="font-size:0.8rem; color:#cbd5e1; padding-left:20px; margin-top:0; line-height:1.6; margin-bottom:16px;">
          <li>Durante la reunión, clic en <strong>"Más" (...)</strong>.</li>
          <li><strong>"Grabar y transcribir"</strong> → <strong>"Iniciar transcripción"</strong>.</li>
          <li>Idioma: <strong>Español</strong>.</li>
        </ol>

        <p style="font-size:0.8rem; font-weight:bold; color:#a5b4fc; margin-bottom:4px;">📥 Cómo Descargarla</p>
        <ol style="font-size:0.8rem; color:#cbd5e1; padding-left:20px; margin-top:0; line-height:1.6;">
          <li>Ve al <strong>Chat de la reunión</strong> o <strong>Calendario</strong>.</li>
          <li>Pestaña <strong>"Grabaciones y transcripciones"</strong>.</li>
          <li>Descargar como <strong>.docx (Word)</strong>.</li>
        </ol>
      </div>

      <!-- MEET -->
      <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.3); border-radius:12px; padding:18px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
          <div style="background:#0F9D58; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:1.1rem;">M</div>
          <h4 style="margin:0; color:#fff;">Google Meet</h4>
        </div>
        
        <p style="font-size:0.8rem; font-weight:bold; color:#34d399; margin-bottom:4px;">▶️ Cómo Activarla en 2026</p>
        <ol style="font-size:0.8rem; color:#cbd5e1; padding-left:20px; margin-top:0; line-height:1.6; margin-bottom:16px;">
          <li>Clic en <strong>"Actividades"</strong> (formas geométricas).</li>
          <li><strong>"Transcripciones"</strong> → <strong>"Iniciar"</strong>.</li>
        </ol>

        <p style="font-size:0.8rem; font-weight:bold; color:#34d399; margin-bottom:4px;">📥 Cómo Descargarla</p>
        <ol style="font-size:0.8rem; color:#cbd5e1; padding-left:20px; margin-top:0; line-height:1.6;">
          <li>El organizador recibe un <strong>Google Doc</strong> por correo.</li>
          <li>También vive en Drive en <strong>"Meet Recordings"</strong>.</li>
        </ol>
      </div>
    
    </div>
  </div>
</div>

<div id="m-tm-antipatterns" class="ag-content">
  <div class="section-card animate-in">
    <h3 style="color:#a5b4fc; margin-top:0;">🚫 Errores Comunes</h3>
    <div class="m-tm-grid-3" style="margin-top:18px;">
      <div class="m-tm-panel"><h4>No activar transcripción</h4><p class="m-tm-note">Sin texto, no hay IA funcional.</p></div>
      <div class="m-tm-panel"><h4>Silencio de compromisos</h4><p class="m-tm-note">Debes decir quién hace qué en voz alta.</p></div>
      <div class="m-tm-panel"><h4>Ignorar el acta final</h4><p class="m-tm-note">La IA ayuda, el humano valida.</p></div>
    </div>
  </div>
</div>

<div id="m-tm-estrategia" class="ag-content">
  <div class="section-card animate-in">
    <div style="background:rgba(70,78,184,0.15); border:1px solid rgba(70,78,184,0.35); border-radius:12px; padding:18px; margin-bottom:18px;">
      <p style="font-size:1rem; font-weight:800; color:#a5b4fc; margin:0 0 6px;">🧪 ESTRATEGIA: La Reunión Sin Minuta</p>
      <p style="font-size:0.82rem; color:#94a3b8; margin:0;">Copia la transcripción de muestra abajo y usa los prompts para practicar.</p>
    </div>

    <!-- Transcripción simulada -->
    <div style="margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span style="font-size:0.8rem; font-weight:700; color:#a5b4fc;">📝 Transcripción de Muestra</span>
        <button class="m-tm-btn-lite" onclick="tmCopy(this, 'transcript')">📋 Copiar</button>
      </div>
      <div style="background:#0f0f1a; border:1px solid #1e1e3a; border-radius:8px; padding:14px; font-size:0.78rem; color:#94a3b8;" id="tm-transcript">
        <b>Ana:</b> El servidor colapsó. Luis, ¿me das acceso root?<br><b>Luis:</b> Claro, a las 11:30.<br><b>Carlos:</b> Yo hago el reporte el miércoles.<br><b>Jefe:</b> Ok. Marina, llama al proveedor de CDN hoy.
      </div>
    </div>

    <!-- Prompts -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
      <button class="m-tm-p-lite" onclick="tmCopy(this, 'p1')">📋 Prompt: Tabla de Tareas</button>
      <button class="m-tm-p-lite" onclick="tmCopy(this, 'p2')">📋 Prompt: Resumen Directivo</button>
    </div>

    <div id="tm-copy-data" style="display:none;">
      <span id="tm-p1">Lee esta transcripción y genera una tabla con: Responsable | Tarea | Fecha Límite | Riesgo.</span>
      <span id="tm-p2">Resume esta crisis en 3 líneas: qué pasó, quién actúa y cuándo se resuelve.</span>
    </div>
  </div>
</div>

<div id="m-tm-gemas" class="ag-content">
  <div class="section-card animate-in">
    <div class="m-tm-gem-shell">
      <div class="m-tm-gem-header">
        <div>
          <div class="m-tm-gem-kicker">💎 Gema especializada</div>
          <h4 class="m-tm-gem-title">Actas y Reuniones Ejecutivas</h4>
          <p class="m-tm-gem-lead">Diseñada para convertir transcripciones caóticas en minutas claras, decisiones verificables y seguimiento accionable.</p>
        </div>
        <div class="m-tm-gem-badges">
          <span class="m-tm-gem-badge">Acta formal</span>
          <span class="m-tm-gem-badge">Resumen directivo</span>
          <span class="m-tm-gem-badge">Tabla de compromisos</span>
        </div>
      </div>

      <div class="m-tm-grid-3" style="margin-top:18px;">
        <div class="m-tm-gem-mini">
          <span class="m-tm-gem-mini-label">Entrada ideal</span>
          <p>Transcripción, notas sueltas o chat de reunión con nombres, fechas y decisiones parciales.</p>
        </div>
        <div class="m-tm-gem-mini">
          <span class="m-tm-gem-mini-label">Qué corrige</span>
          <p>Ambigüedad, tareas sin dueño, acuerdos escondidos y ruido que suele contaminar las minutas.</p>
        </div>
        <div class="m-tm-gem-mini">
          <span class="m-tm-gem-mini-label">Salida esperada</span>
          <p>Resumen ejecutivo, acuerdos, riesgos, pendientes y tabla de seguimiento lista para compartir.</p>
        </div>
      </div>

      <div class="m-tm-gem-prompt-box">
        <div class="m-tm-gem-prompt-top">
          <span class="m-tm-gem-prompt-label">Prompt inmutable para Gemini</span>
          <button class="m-tm-btn-lite" onclick="tmCopy(this, 'gem-prompt')">📋 Copiar prompt</button>
        </div>
        <div id="tm-gem-prompt" class="m-tm-gem-prompt-text">Actúa como Analista Senior de Actas y Reuniones Ejecutivas. Tu trabajo es transformar transcripciones, notas o audios transcritos en un acta profesional, precisa y accionable.

Reglas obligatorias:
1. No inventes hechos, decisiones, fechas ni responsables.
2. Si falta un dato crítico, marca "No definido en la reunión".
3. Diferencia claramente entre decisión tomada, propuesta y tarea pendiente.
4. Identifica responsables por nombre propio; si no existe responsable explícito, escribe "Responsable no asignado".
5. Resume con lenguaje ejecutivo, concreto y sin relleno.
6. Elimina muletillas, repeticiones y ruido conversacional.
7. Conserva riesgos, bloqueos, dependencias y fechas límite mencionadas.

Formato de salida obligatorio:
## Resumen ejecutivo
- Objetivo de la reunión
- Decisiones clave
- Riesgos o bloqueos

## Acta estructurada
| Tema | Acuerdo o decisión | Responsable | Fecha compromiso | Estado/Observación |

## Pendientes abiertos
Lista solo lo que quedó sin cerrar.

## Próximos pasos
Enumera acciones en orden de prioridad.

Antes de responder, valida que cada acción tenga dueño, verbo y plazo. Si alguno falta, repórtalo al final en una sección llamada "Vacíos por definir".</div>
      </div>

      <div class="m-tm-gem-actions">
        <button class="m-tm-p-lite" onclick="tmCopy(this, 'gem-command-1')">📋 Comando: convertir a minuta</button>
        <button class="m-tm-p-lite" onclick="tmCopy(this, 'gem-command-2')">📋 Comando: extraer tareas</button>
        <button class="m-tm-p-lite" onclick="tmCopy(this, 'gem-command-3')">📋 Comando: resumen para jefe</button>
      </div>

      <div class="m-tm-gem-tip">
        <strong>Uso real:</strong> primero pega la transcripción completa, luego pide una segunda pasada solo para revisar vacíos, responsables y fechas antes de compartir el acta final.
      </div>
    </div>

    <div style="display:none;">
      <span id="tm-gem-command-1">Convierte esta transcripción en una minuta formal siguiendo tu formato obligatorio. Prioriza acuerdos, responsables y fechas.</span>
      <span id="tm-gem-command-2">Extrae únicamente los compromisos de esta reunión en una tabla con Responsable | Acción | Fecha límite | Riesgo por incumplimiento.</span>
      <span id="tm-gem-command-3">Resume esta reunión para dirección en máximo 6 viñetas: objetivo, decisiones, bloqueos, riesgos y siguientes pasos.</span>
    </div>
  </div>
</div>

<div id="m-tm-mission" class="ag-content">
  <div class="exercise-box mission-card animate-in">
    <h3>🏆 Misión Final</h3>
    <p>Aplica la IA en tu próxima reunión. ¿Qué te resultó más útil: la tabla o el resumen?</p>
    <textarea class="premium-textarea" placeholder="Tu reflexión aquí..."></textarea>
    <button class="gl-btn gl-btn-primary complete-module-btn" data-module="module-teams-meet" style="width:100%;margin-top:15px;">✅ Misión Completada</button>
  </div>
</div>

<div class="module-nav">
  <button class="gl-btn gl-btn-primary" data-goto="welcome">← Volver</button>
</div>

<!-- ESTILOS LOCALES PARA EL MODULO -->
<style>
.m-tm-p-lite { background:rgba(70,78,184,0.1); border:1px solid rgba(70,78,184,0.3); color:#a5b4fc; padding:10px; border-radius:8px; cursor:pointer; font-size:0.75rem; text-align:left; }
.m-tm-btn-lite { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; padding:4px 8px; border-radius:6px; font-size:0.7rem; cursor:pointer; }
</style>
`;

  const teamsInstance = {
    init: function(app) {
      console.log('[Module] Teams & Meet initialized - Sincronía v32.5');
      const target = document.getElementById('module-teams-meet');
      if (target && !target.querySelector('.module-header')) {
        target.insertAdjacentHTML('afterbegin', teamsHTML);
        if(app && typeof app.triggerAnimations === 'function') {
            setTimeout(() => app.triggerAnimations(), 100);
        }
      }
    }
  };

  // Helper copy function globalized for simple onclicks
  window.tmCopy = function(btn, type) {
    let text = document.getElementById('tm-' + type)?.innerText || '';
    navigator.clipboard.writeText(text).then(() => {
        const o = btn.textContent; btn.textContent = '✅';
        setTimeout(() => btn.textContent = o, 1500);
    });
  };

  // --- SIMULATION LOGIC ---
  let simulationInterval = null;
  const simulationSteps = [
    { id: 'ana', text: 'Ana: "Debemos priorizar la migración de la base de datos para esta semana."' },
    { id: 'carlos', text: 'Carlos: "¿Y qué pasará con el soporte de legacy? No podemos dejarlo así."' },
    { id: 'ana', text: 'Ana: "Luis dice que a las 11:30 nos da acceso root para el cambio."' },
    { id: 'inv1', text: 'Jefe: "Marina, lo más importante es que llames al proveedor de CDN hoy."' },
    { id: 'user', text: 'Tú: "Entendido, ya tengo la lista de tareas pendientes."' }
  ];

  window.mTmPlayCall = function() {
    const btn = document.querySelector('.m-tm-ctrl-btn.copilot');
    const subs = document.getElementById('tm-subs');
    if (simulationInterval) {
      clearInterval(simulationInterval);
      simulationInterval = null;
      btn.classList.remove('active');
      subs.classList.remove('active');
      document.querySelectorAll('.m-tm-person').forEach(p => p.classList.remove('active'));
      return;
    }

    btn.classList.add('active');
    subs.classList.add('active');
    let step = 0;

    const runStep = () => {
      const data = simulationSteps[step];
      document.querySelectorAll('.m-tm-person').forEach(p => p.classList.remove('active'));
      const speaker = document.getElementById(`p-${data.id}`);
      if (speaker) speaker.classList.add('active');
      subs.innerText = data.text;
      
      step = (step + 1) % simulationSteps.length;
    };

    runStep();
    simulationInterval = setInterval(runStep, 3500);
  };

  window.mTmCopilotQuery = function(type) {
    const chat = document.getElementById('cp-chat');
    if (!chat) return;

    const msg = document.createElement('div');
    msg.className = 'm-tm-msg animate-in';
    
    if (type === 'recap') {
      msg.innerHTML = `
        <div class="m-tm-msg-title">✨ Resumen del Copilot</div>
        <div style="color:#d1fae5;">Se ha discutido la prioridad de la migración de DB. El acceso root será a las 11:30. El Jefe solicitó llamar al CDN hoy.</div>
      `;
    } else {
      msg.innerHTML = `
        <div class="m-tm-msg-title">✅ Tareas Identificadas</div>
        <ul style="margin:5px 0 0 15px; padding:0; color:#d1fae5;">
          <li>Llamar proveedor CDN (Responsable: Marina)</li>
          <li>Acceso Root a las 11:30 (Luis)</li>
          <li>Reporte el miércoles (Carlos)</li>
        </ul>
      `;
    }

    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  };

  window.GuiaModules = window.GuiaModules || {};
  window.GuiaModules['module-teams-meet'] = teamsInstance;
  return teamsInstance;
})();
