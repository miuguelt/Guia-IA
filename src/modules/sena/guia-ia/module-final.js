/* 
   ================================================================
   MÓDULO FINAL: OPERACIÓN CENTAURO (EL EXAMEN FINAL)
   ================================================================
   Este es el módulo de integración total. Combina RAG, Generación,
   Análisis y Ética en una simulación de crisis real.
*/

window.GuiaModules = window.GuiaModules || {};
window.GuiaModules['module-final'] = window.GuiaModules['module-21'] = (function() {
    
    // Logic for the Final Exam
    const centauroState = { step: 1, xp: 0 };

    function centauroSyncPhaseTrack(step) {
        document.querySelectorAll('.centauro-phase-chip').forEach((chip, index) => {
            chip.classList.toggle('is-active', index === (step - 1));
            chip.classList.toggle('is-complete', index < (step - 1));
        });
    }
    
    window.centauroNext = function(nextStep) {
        const current = document.querySelector('.centauro-step.active');
        if (current) current.classList.remove('active');
        
        const next = document.getElementById(`centauro-step-${nextStep}`);
        if (next) {
            next.classList.add('active');
            centauroState.step = nextStep;
            centauroSyncPhaseTrack(nextStep);
            window.showToast(`Fase ${nextStep} activada`, 'info');
        }
    };

    window.centauroProcessRAG = function() {
        const input = document.getElementById('rag-query').value;
        if (!input) return window.showToast('Ingresa una consulta RAG', 'warning');
        
        const output = document.getElementById('rag-output');
        output.innerHTML = `
            <div class="centauro-loader-box">
                <div class="centauro-spinner"></div>
                <span>🧬 Escaneando base de datos institucional (RAG)...</span>
            </div>
        `;
        
        setTimeout(() => {
            output.innerHTML = `
                <div class="centauro-result-ai is-success animate-in">
                    <div class="centauro-result-header">
                        <span class="centauro-result-icon">✅</span>
                        <strong>Hallazgo RAG: Nivel 3 Confirmado</strong>
                    </div>
                    <p>Según el <strong>Decreto 1072</strong>, el protocolo de emergencia ante inundaciones exige activación inmediata de nivel 3.</p>
                    <div class="centauro-sources">
                        <span class="centauro-source-chip">📄 Manual_Emergencias_2024.pdf</span>
                        <span class="centauro-source-chip">📄 Ley_80_Contratacion.doc</span>
                    </div>
                </div>
            `;
            centauroState.xp += 100;
            if(window.app && window.app.addXP) window.app.addXP(100);
            document.getElementById('centauro-btn-1').style.display = 'block';
        }, 1500);
    };

    window.centauroGenVisuals = function() {
        const btn = document.getElementById('gen-btn');
        btn.disabled = true;
        btn.innerText = 'Generando Asset...';
        
        setTimeout(() => {
            const container = document.getElementById('visual-output');
            container.innerHTML = `
                <div class="centauro-visual-asset animate-in">
                    <div class="centauro-visual-frame">
                        <div class="centauro-visual-overlay"></div>
                        <span class="centauro-visual-icon glow-text">🚨</span>
                        <h4>ALERTA ROJA: INUNDACIÓN</h4>
                        <p>Evacue la sede costera inmediatamente. Siga rutas verdes.</p>
                    </div>
                    <div class="centauro-visual-meta">
                        <span class="centauro-meta-badge">✅ Optimizado para Móvil (RRSS)</span>
                        <span class="centauro-meta-badge">✅ Contraste Institucional AAA</span>
                    </div>
                </div>
            `;
            centauroState.xp += 100;
            if(window.app && window.app.addXP) window.app.addXP(100);
            document.getElementById('centauro-btn-2').style.display = 'block';
        }, 2000);
    };

    window.centauroLocalSim = function() {
        const log = document.getElementById('local-ai-log');
        log.innerHTML += '<div class="centauro-term-line">> Iniciando instancia local segura de <a href="https://www.deepseek.com" target="_blank" style="color:inherit; text-decoration:underline;">DeepSeek</a>...</div>';
        setTimeout(() => { log.innerHTML += '<div class="centauro-term-line">> Cargando matriz de pesos quantificada (4bit)...</div>'; }, 500);
        setTimeout(() => { log.innerHTML += '<div class="centauro-term-line">> Analizando tokens sensibles en entorno aislado...</div>'; }, 1200);
        setTimeout(() => { 
            log.innerHTML += `
                <div class="centauro-term-success animate-in">
                    <span class="centauro-term-icon">🔒</span>
                    <div>
                        <strong class="glow-text" style="color:#10b981;">[SISTEMA AISLADO] Respuesta generada privada</strong>
                        <p>No se detectan cláusulas predatorias. El riesgo legal es mitigado. Protocolo de confidencialidad al 100%.</p>
                    </div>
                </div>
            `; 
            centauroState.xp += 200;
            if(window.app && window.app.addXP) window.app.addXP(200);
            document.getElementById('centauro-btn-3').style.display = 'block';
        }, 2000);
    };

    window.centauroFinalReport = function() {
        const report = document.getElementById('final-report-output');
        report.innerHTML = '<div class="thinking-process-premium"><span class="pulse-dot"></span> Consolidando bitácora de misión...</div>';
        setTimeout(() => {
            report.innerHTML = `
                <div class="glass-card animate-in" style="padding:20px; border:2px solid #eab308; background:rgba(0,0,0,0.5);">
                    <h4 style="color:#eab308;">✅ REPORTE SOBERANO GENERADO</h4>
                    <p style="font-size:0.8rem;"><b>Fase 1 (RAG):</b> Protocolo de Emergencia Nivel 3 Validado.<br><b>Fase 2 (Visual):</b> Artefacto de Alerta para RRSS Generado.<br><b>Fase 3 (Privacidad):</b> Minuta Protegida via IA Local.</p>
                    <div style="background:#111; padding:10px; border-radius:8px; margin-top:10px; font-size:0.75rem;">
                        <strong style="color:#10b981;">Prompt de Auditoría Senior (Úsalo en Claude):</strong><br>
                        "Actúa como Supervisor General de IA. Evalúa mi desempeño en la 'Operación Centauro' basándote en la trazabilidad de mis decisiones y mi uso de la Tríada Soberana. ¿Qué riesgos omití?"
                    </div>
                </div>
            `;
            if(typeof window.antShowConfetti === 'function') window.antShowConfetti();
        }, 1500);
    };

    const modules = {
'module-final': `

<div class="module-header premium-header glass-card centauro-hero">
    <div class="centauro-hero-topline">
        <div class="gamer-badge centauro-badge">MISIÓN DE ÉLITE</div>
        <div class="centauro-status-pill">Simulación activa</div>
    </div>
    <h2 class="module-title glow-text centauro-hero-title">🔱 Operación Centauro</h2>
    <p class="centauro-hero-copy">La prueba máxima de soberanía. Debes gestionar una crisis institucional usando búsqueda, generación, privacidad y verificación bajo presión.</p>
    <div class="centauro-hero-grid">
        <div class="centauro-hero-card">
            <span class="centauro-hero-label">Objetivo</span>
            <strong>Responder con criterio</strong>
            <p>No basta resolver rápido. Debes justificar herramienta, riesgo y evidencia.</p>
        </div>
        <div class="centauro-hero-card">
            <span class="centauro-hero-label">Error típico</span>
            <strong>Improvisar por impulso</strong>
            <p>Elegir una sola IA para todo, sin revisar privacidad, precisión ni formato.</p>
        </div>
        <div class="centauro-hero-card">
            <span class="centauro-hero-label">Entrega esperada</span>
            <strong>Decisión defendible</strong>
            <p>Resume qué hiciste en cada fase y qué validaste antes de cerrar.</p>
        </div>
    </div>
</div>

<div class="centauro-command-bar">
    <div class="centauro-phase-track" aria-label="Progreso de fases">
        <div class="centauro-phase-chip is-active"><span>01</span> Reconocimiento</div>
        <div class="centauro-phase-chip"><span>02</span> Comunicación</div>
        <div class="centauro-phase-chip"><span>03</span> Privacidad</div>
        <div class="centauro-phase-chip centauro-phase-chip-final"><span>04</span> Cierre</div>
    </div>
    <div class="centauro-brief">
        <span class="centauro-brief-label">Ventana crítica</span>
        <strong>15 minutos simulados</strong>
        <p>El caso exige decidir rápido, pero con trazabilidad mínima.</p>
    </div>
</div>

<!-- FASE 1: RAG (Búsqueda) -->
<div id="centauro-step-1" class="centauro-step active">
    <div class="section-card animate-in centauro-card">
        <div class="centauro-card-header">
            <div>
                <span class="centauro-kicker">Fase 1</span>
                <h3><span class="icon">🔍</span> Reconocimiento con RAG</h3>
            </div>
            <div class="centauro-risk-badge">Riesgo: precisión normativa</div>
        </div>
        <p class="centauro-situation"><b>Situación:</b> Se reporta inundación en la sede costera. Necesitas ubicar el protocolo oficial de contratación de emergencia sin leer 500 páginas de manuales.</p>
        <div class="learning-feedback-box centauro-rubric">
          <div class="learning-feedback-header"><span>Rúbrica de Centauro</span><strong>Fase 1</strong></div>
          <div class="learning-feedback-item">• Elige una consulta específica y verificable.</div>
          <div class="learning-feedback-item">• Busca evidencia o fuente para sustentar la decisión.</div>
        </div>
        <div class="centauro-layout">
            <div class="centauro-panel centauro-panel-main">
                <label class="centauro-panel-label">Auditoría RAG institucional</label>
                <input type="text" id="rag-query" class="premium-input centauro-input" placeholder="¿Cuál es el protocolo de contratación ante emergencia?">
                <button class="gl-btn gl-btn-primary centauro-action" onclick="window.centauroProcessRAG()">Ejecutar búsqueda aumentada</button>
                <div id="rag-output" class="centauro-output"></div>
            </div>
            <aside class="centauro-panel centauro-panel-side">
                <div class="centauro-side-title">Checklist mínimo</div>
                <ul class="centauro-checklist">
                    <li>Consulta concreta</li>
                    <li>Fuente citada</li>
                    <li>Decisión trazable</li>
                </ul>
            </aside>
        </div>
        <div class="centauro-nav" id="centauro-btn-1">
            <button class="gl-btn-neon centauro-next" onclick="window.centauroNext(2)">Avanzar a fase 2: comunicación</button>
        </div>
    </div>
</div>

<!-- FASE 2: GENERACIÓN (Visual) -->
<div id="centauro-step-2" class="centauro-step">
    <div class="section-card animate-in centauro-card">
        <div class="centauro-card-header">
            <div>
                <span class="centauro-kicker">Fase 2</span>
                <h3><span class="icon">🎨</span> Alerta ciudadana</h3>
            </div>
            <div class="centauro-risk-badge">Riesgo: mensaje ambiguo</div>
        </div>
        <p class="centauro-situation"><b>Situación:</b> Necesitas publicar una alerta visual clara en redes sociales oficiales en menos de 2 minutos.</p>
        <div class="learning-feedback-box centauro-rubric">
          <div class="learning-feedback-header"><span>Rúbrica de Centauro</span><strong>Fase 2</strong></div>
          <div class="learning-feedback-item">• La salida debe ser visualmente atractiva, directa y apta para RRSS.</div>
          <div class="learning-feedback-item">• Usa la IA generativa de imagen/diseño con prompt arquitectónico.</div>
        </div>
        <div class="centauro-layout">
            <div class="centauro-panel centauro-panel-main">
                <div id="visual-output" class="centauro-output centauro-visual-preview">
                    <div class="centauro-placeholder">
                        <span>🛰️</span>
                        <p>Genera un activo visual breve, oficial y entendible en móvil.</p>
                    </div>
                </div>
                <button id="gen-btn" class="gl-btn gl-btn-primary centauro-action" onclick="window.centauroGenVisuals()">Generar asset visual soberano</button>
            </div>
            <aside class="centauro-panel centauro-panel-side">
                <div class="centauro-side-title">Qué debe contener</div>
                <ul class="centauro-checklist">
                    <li>Acción inmediata</li>
                    <li>Tono institucional</li>
                    <li>Lectura en 5 segundos</li>
                </ul>
            </aside>
        </div>
        <div class="centauro-nav" id="centauro-btn-2">
            <button class="gl-btn-neon centauro-next" onclick="window.centauroNext(3)">Avanzar a fase 3: privacidad</button>
        </div>
    </div>
</div>

<!-- FASE 3: LOCAL AI (Seguridad) -->
<div id="centauro-step-3" class="centauro-step">
    <div class="section-card animate-in centauro-card">
        <div class="centauro-card-header">
            <div>
                <span class="centauro-kicker">Fase 3</span>
                <h3><span class="icon">🔒</span> Análisis de minuta con IA local</h3>
            </div>
            <div class="centauro-risk-badge">Riesgo: fuga de datos</div>
        </div>
        <p class="centauro-situation"><b>Situación:</b> Tienes una minuta de contrato con datos sensibles. No puedes subirla a IAs públicas en la nube. Debes procesarla en tu instancia local.</p>
        <div class="learning-feedback-box centauro-rubric">
          <div class="learning-feedback-header"><span>Rúbrica de Centauro</span><strong>Fase 3</strong></div>
          <div class="learning-feedback-item">• Justifica por qué la privacidad obliga a usar IA local.</div>
          <div class="learning-feedback-item">• Define qué revisarías antes de aceptar la respuesta.</div>
        </div>
        <div class="centauro-layout">
            <div class="centauro-panel centauro-panel-main">
                <div id="local-ai-log" class="centauro-output centauro-terminal">
                    <div>> Esperando ejecución local segura...</div>
                </div>
                <button class="gl-btn-neon centauro-action" onclick="window.centauroLocalSim()">Procesar con <a href="https://ollama.com" target="_blank" style="color:inherit; text-decoration:underline;">Ollama</a> / Local Bot</button>
            </div>
            <aside class="centauro-panel centauro-panel-side">
                <div class="centauro-side-title">Verificación final</div>
                <ul class="centauro-checklist">
                    <li>Privacidad del insumo</li>
                    <li>Riesgo legal residual</li>
                    <li>Revisión humana final</li>
                </ul>
            </aside>
        </div>
        <div class="centauro-nav" id="centauro-btn-3">
             <button class="gl-btn-neon centauro-next" onclick="window.centauroNext(4)">Avanzar a fase 4: Cierre y Reporte</button>
        </div>
    </div>
</div>

<!-- FASE 4: REPORTE Y CIERRE -->
<div id="centauro-step-4" class="centauro-step">
    <div class="section-card animate-in centauro-card">
        <div class="centauro-card-header">
            <div>
                <span class="centauro-kicker">Fase 4</span>
                <h3><span class="icon">📜</span> Cierre de Misión y Reporte</h3>
            </div>
            <div class="centauro-risk-badge">Certificación Final</div>
        </div>
        <p class="centauro-situation"><b>Situación:</b> La crisis ha sido controlada. Debes consolidar tu bitácora de decisiones para la posteridad institucional.</p>
        
        <div class="centauro-layout">
            <div class="centauro-panel centauro-panel-main">
                <div id="final-report-output" class="centauro-output">
                    <div class="centauro-placeholder">
                        <span>📝</span>
                        <p>Haz clic para consolidar tu bitácora de decisiones finales.</p>
                    </div>
                </div>
                <button class="gl-btn gl-btn-primary centauro-action" onclick="window.centauroFinalReport()">Consolidar Informe Centauro</button>
            </div>
            <aside class="centauro-panel centauro-panel-side">
                <div class="centauro-side-title">Reflexión Final</div>
                <ul class="centauro-checklist">
                    <li>Validación ética</li>
                    <li>Registro Soberano</li>
                    <li>Feedback de IA</li>
                </ul>
            </aside>
        </div>

        <div class="centauro-nav" id="centauro-btn-4" style="margin-top:25px;">
             <div class="important-box centauro-finish-box">
                <strong>✅ ENTRENAMIENTO COMPLETADO</strong>
                <p style="font-size:0.8rem;">Has demostrado dominio sobre las 4 capas de la IA moderna: Búsqueda, Generación, Seguridad y Reporte.</p>
             </div>
             <textarea class="premium-textarea centauro-reflection" id="centauro-reflection" placeholder="Resume tus decisiones finales: ¿Qué aprendiste sobre la soberanía de datos en esta crisis?"></textarea>
             <button class="gl-btn gl-btn-primary complete-module-btn centauro-complete" data-module="module-21" data-xp="500" style="background:#eab308; color:#000; font-weight:900;">🏆 OBTENER CERTIFICACIÓN CENTAURO (+500 XP)</button>
        </div>
    </div>
</div>
`
    };

    // Inject content safely
    const el = document.getElementById('module-21');
    if (el && !el.querySelector('.centauro-header')) {
        el.insertAdjacentHTML('afterbegin', modules['module-final']);
    }

    return { 
        init: function() {
            centauroSyncPhaseTrack(1);
            console.log('Operación Centauro Online');
        }
    };
})();
