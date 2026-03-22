/* ============================================
   GUÍA INTERACTIVA DE IA - GUÍA GENERAL
   Application Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  window.app = new GuiaIA();
  window.app.init();
});

class GuiaIA {
  constructor() {
    this.currentModule = 'welcome';
    this.completedModules = new Set();
    this.quizScores = {};
    this.xp = 0;
    this.level = 1;
    this.STORAGE_KEY = 'guia-ia-general';
      this.XP_PER_MODULE = 100;
      this.XP_PER_QUIZ = 50;
      this.competencyMeta = this.buildCompetencyMeta();
        this.learningConfig = this.buildLearningConfig();
        this.guidedExerciseMap = this.buildGuidedExerciseMap();
        this.toolAidMap = this.buildToolAidMap();
        this.caseStudyMap = this.buildCaseStudyMap();
        this.moduleQuizMap = this.buildModuleQuizMap();
        this.moduleSequence = Array.from({ length: 21 }, (_, index) => `module-${index + 1}`);
        this.competencies = this.createEmptyCompetencies();
      this.evidenceStore = {};
      this.selfAssessments = {};
    this.modulesRegistry = {
      'module-1': 'modules/sena/guia-ia/modules-1-5.js',
      'module-2': 'modules/sena/guia-ia/modules-1-5.js',
      'module-3': 'modules/sena/guia-ia/modules-1-5.js',
      'module-4': 'modules/sena/guia-ia/modules-1-5.js',
      'module-5': 'modules/sena/guia-ia/modules-1-5.js',
      'module-6': 'modules/sena/guia-ia/modules-6-7.js',
      'module-7': 'modules/sena/guia-ia/modules-6-7.js',
      'module-8': 'modules/sena/guia-ia/modules-8-10.js',
      'module-9': 'modules/sena/guia-ia/modules-8-10.js',
      'module-10': 'modules/sena/guia-ia/modules-8-10.js',
      'module-11': 'modules/sena/guia-ia/modules-11-12.js',
      'module-12': 'modules/sena/guia-ia/modules-11-12.js',
      'module-13': 'modules/sena/guia-ia/modules-13-15.js',
      'module-14': 'modules/sena/guia-ia/modules-13-15.js',
      'module-15': 'modules/sena/guia-ia/modules-13-15.js',
      'module-16': 'modules/sena/guia-ia/modules-16-18.js',
      'module-17': 'modules/sena/guia-ia/modules-16-18.js',
      'module-18': 'modules/sena/guia-ia/modules-16-18.js',
      'module-19': 'modules/sena/guia-ia/modules-19-20.js',
      'module-20': 'modules/sena/guia-ia/modules-19-20.js',
      'module-21': 'modules/sena/guia-ia/module-final.js',
      'module-fundamentals': 'modules/sena/guia-ia/modules-1-5.js',
      'module-prompt-hygiene': 'modules/sena/guia-ia/modules-1-5.js',
      'module-verification': 'modules/sena/guia-ia/modules-1-5.js',
      'module-privacy-daily': 'modules/sena/guia-ia/modules-1-5.js',
      'module-personal-ai': 'modules/sena/guia-ia/modules-16-18.js',
      'module-antigravity': 'modules/ia/module-antigravity.js',
      'module-gemini-productivity': 'modules/ia/module-gemini-productivity.js',
      'module-teams-meet': 'modules/tools/module-teams-meet.js',
      'module-manus': 'modules/ia/module-manus.js',
      'module-deepseek': 'modules/ia/module-deepseek.js',
      'module-notebooklm': 'modules/ia/module-notebooklm.js',
      'module-multimedia-pro': 'modules/ia/module-multimedia-pro.js',
      'module-notion': 'modules/ia/module-notion.js',
      'module-power-automate': 'modules/tools/module-power-automate.js',
      'mini-games': 'modules/ia/mini-games.js'
    };
    this.moduleInstances = {}; // New: Store scoped module instances
    this.constitution = ''; // DNA v32.4: Master Constitution
  }

  buildCompetencyMeta() {
    return {
      prompting: { label: 'Prompting', accent: '#6366f1' },
      verification: { label: 'Verificación', accent: '#10b981' },
      communication: { label: 'Comunicación', accent: '#3b82f6' },
      documents: { label: 'Documentos', accent: '#f59e0b' },
      data: { label: 'Datos', accent: '#14b8a6' },
      creativity: { label: 'Creatividad', accent: '#ec4899' },
      automation: { label: 'Automatización', accent: '#8b5cf6' },
      privacy: { label: 'Privacidad', accent: '#ef4444' },
      strategy: { label: 'Estrategia', accent: '#eab308' }
    };
  }

  createEmptyCompetencies() {
    return Object.keys(this.competencyMeta).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
  }

  buildLearningConfig() {
    const cfg = {
      'module-1': {
        title: 'Diagnóstico de uso de IA',
        objective: 'Distinguir qué tareas vale la pena delegar, apoyar o reservar para criterio humano.',
        pitfall: 'Querer usar IA para todo sin revisar riesgos ni valor real.',
        evidencePrompt: 'Describe una tarea real, la decisión de usar o no IA y por qué.',
        checklist: ['Identifico una tarea concreta', 'Justifico por qué la IA ayuda o no', 'Defino el resultado esperado'],
        competencies: { strategy: 14, verification: 6 }
      },
      'module-2': {
        title: 'Primeras iteraciones',
        objective: 'Aprender a mejorar una instrucción a partir de una primera respuesta imperfecta.',
        pitfall: 'Quedarte con el primer prompt sin iterar contexto, rol o formato.',
        evidencePrompt: 'Guarda tu mejor prompt, la herramienta elegida y qué cambiaste para mejorar el resultado.',
        checklist: ['Probé al menos una iteración', 'Ajusté la instrucción', 'Puedo explicar qué mejoró'],
        competencies: { prompting: 16, communication: 4 }
      },
      'module-3': {
        title: 'Rúbrica CREA',
        objective: 'Aplicar CREA como estructura reusable en tareas reales.',
        pitfall: 'Escribir prompts sin contexto, rol, estructura ni acción clara.',
        evidencePrompt: 'Entrega un prompt completo con contexto, rol, estructura y acción.',
        checklist: ['Incluí contexto', 'Definí un rol útil', 'Pedí un formato claro', 'La acción final es específica'],
        competencies: { prompting: 20, verification: 5 }
      },
      'module-4': {
        title: 'Lectura estratégica',
        objective: 'Convertir documentos largos en decisiones, riesgos y siguientes acciones.',
        pitfall: 'Pedir solo resumen y no extraer implicaciones ni acciones.',
        evidencePrompt: 'Resume el documento, señala un riesgo y propone una acción concreta.',
        checklist: ['Hay resumen', 'Hay riesgo', 'Hay acción sugerida', 'Hay referencia o validación'],
        competencies: { documents: 14, verification: 8, communication: 3 }
      },
      'module-5': {
        title: 'Análisis de datos con control',
        objective: 'Pedir fórmulas, limpiezas y explicaciones sin perder validación del resultado.',
        pitfall: 'Copiar una fórmula sin comprobar si realmente resuelve el caso.',
        evidencePrompt: 'Describe el problema de datos, la solución propuesta y cómo la validarías.',
        checklist: ['Describí el problema', 'Propuse fórmula o lógica', 'Definí una forma de validar'],
        competencies: { data: 16, verification: 7, prompting: 2 }
      },
      'module-6': {
        title: 'Creatividad con propósito',
        objective: 'Diseñar prompts visuales orientados a un uso concreto.',
        pitfall: 'Buscar imágenes bonitas pero no funcionales para el contexto.',
        evidencePrompt: 'Especifica qué pieza visual quieres crear, para qué canal y con qué estilo.',
        checklist: ['Hay objetivo visual', 'Hay público o canal', 'Hay restricción clara'],
        competencies: { creativity: 16, communication: 4 }
      },
      'module-7': {
        title: 'Narrativa visual',
        objective: 'Estructurar presentaciones claras y orientadas a decisión.',
        pitfall: 'Llenar diapositivas de texto sin mensaje central.',
        evidencePrompt: 'Define el tema, la audiencia y el objetivo de tu presentación.',
        checklist: ['Tema claro', 'Audiencia definida', 'Objetivo de la presentación'],
        competencies: { communication: 12, creativity: 8 }
      },
      'module-8': {
        title: 'Comunicación adaptable',
        objective: 'Reescribir mensajes según tono, audiencia e intención.',
        pitfall: 'Mantener el mismo tono para ciudadano, jefe y equipo.',
        evidencePrompt: 'Comparte el texto base, el tono elegido y la versión final.',
        checklist: ['Texto base identificado', 'Tono elegido', 'Versión mejorada'],
        competencies: { communication: 18, verification: 4, prompting: 3 }
      },
      'module-9': {
        title: 'Seguridad y juicio',
        objective: 'Decidir qué información sí compartir y qué debe quedarse fuera.',
        pitfall: 'Subir datos sensibles a una IA pública por comodidad.',
        evidencePrompt: 'Explica un caso de dato sensible y qué harías para protegerlo.',
        checklist: ['Identifiqué el riesgo', 'Propuse una alternativa segura', 'Justifiqué la decisión'],
        competencies: { privacy: 18, verification: 7 }
      },
      'module-10': {
        title: 'Selección de herramientas',
        objective: 'Elegir la herramienta adecuada según problema y salida esperada.',
        pitfall: 'Elegir por moda en vez de por tipo de tarea.',
        evidencePrompt: 'Describe una tarea, la herramienta elegida y una alternativa descartada.',
        checklist: ['Definí la tarea', 'Elegí herramienta', 'Expliqué por qué no usé otra'],
        competencies: { strategy: 12, verification: 4, prompting: 4 }
      },
      'module-11': {
        title: 'Análisis profundo con trazabilidad',
        objective: 'Consultar documentos largos con evidencia y criterio.',
        pitfall: 'Responder sin citar fuente o página.',
        evidencePrompt: 'Escribe una pregunta, una respuesta y qué evidencia usarías para validarla.',
        checklist: ['Pregunta clara', 'Respuesta útil', 'Evidencia o fuente'],
        competencies: { documents: 12, verification: 10, strategy: 3 }
      },
      'module-12': {
        title: 'Planificación accionable',
        objective: 'Priorizar y convertir caos operativo en plan.',
        pitfall: 'Confundir urgente con importante.',
        evidencePrompt: 'Comparte tus tareas priorizadas y una acción delegable.',
        checklist: ['Priorización visible', 'Acción inmediata definida', 'Algo delegable o eliminable'],
        competencies: { strategy: 12, automation: 4, verification: 4 }
      },
      'module-13': {
        title: 'Automatización con control',
        objective: 'Diseñar flujos que incluyan entrada, proceso, validación y salida.',
        pitfall: 'Automatizar sin definir excepciones ni revisión humana.',
        evidencePrompt: 'Describe un flujo con trigger, proceso, validación y salida.',
        checklist: ['Hay trigger', 'Hay proceso', 'Hay validación', 'Hay salida'],
        competencies: { automation: 18, strategy: 4, privacy: 2 }
      },
      'module-14': {
        title: 'Segundo cerebro funcional',
        objective: 'Capturar, enlazar y recuperar conocimiento útil.',
        pitfall: 'Acumular notas sin criterio de conexión ni reutilización.',
        evidencePrompt: 'Explica qué notas crearías y cómo las conectarías.',
        checklist: ['Definí notas', 'Definí vínculos', 'Definí uso posterior'],
        competencies: { strategy: 10, documents: 6, prompting: 2 }
      },
      'module-15': {
        title: 'Proyecto integrador',
        objective: 'Resolver un caso combinando documento, datos, redacción y control.',
        pitfall: 'Usar varias herramientas sin un flujo de decisión claro.',
        evidencePrompt: 'Entrega tu estrategia integral, la herramienta elegida y cómo validarías el resultado final.',
        checklist: ['Hay estrategia', 'Hay elección de herramientas', 'Hay validación final'],
        competencies: { prompting: 8, documents: 6, data: 6, verification: 8, strategy: 8 }
      },
      'module-16': {
        title: 'Solución técnica asistida',
        objective: 'Traducir problemas operativos a fórmulas, macros o prototipos útiles.',
        pitfall: 'Confiar en código o fórmulas sin prueba mínima.',
        evidencePrompt: 'Describe el problema técnico, la solución propuesta y cómo la probarías.',
        checklist: ['Problema técnico definido', 'Solución propuesta', 'Prueba mínima'],
        competencies: { data: 10, automation: 8, verification: 6, prompting: 2 }
      },
      'module-17': {
        title: 'Privacidad local aplicada',
        objective: 'Saber cuándo conviene usar IA local y cómo justificarlo.',
        pitfall: 'Pensar que local siempre es mejor, o que nube siempre es aceptable.',
        evidencePrompt: 'Describe un caso de dato sensible y decide entre nube pública, privada o local.',
        checklist: ['Tipo de dato identificado', 'Arquitectura elegida', 'Justificación dada'],
        competencies: { privacy: 18, strategy: 5, verification: 4 }
      },
      'module-18': {
        title: 'Decisión económica',
        objective: 'Justificar licencias premium con ahorro real y adopción.',
        pitfall: 'Calcular ROI sin considerar uso real ni curva de aprendizaje.',
        evidencePrompt: 'Escribe un argumento de ROI usando horas ahorradas y costo estimado.',
        checklist: ['Incluí costo', 'Incluí ahorro', 'Tomé una decisión'],
        competencies: { strategy: 16, verification: 5, automation: 2 }
      },
      'module-19': {
        title: 'Ruta profesional',
        objective: 'Conectar lo aprendido con un rol futuro y una ruta de crecimiento.',
        pitfall: 'Quedarse en inspiración sin plan accionable.',
        evidencePrompt: 'Nombra el rol objetivo, una fortaleza actual y una brecha a cerrar.',
        checklist: ['Rol elegido', 'Fortaleza detectada', 'Brecha detectada', 'Próximo paso'],
        competencies: { strategy: 12, communication: 4, prompting: 2 }
      },
      'module-20': {
        title: 'Cierre por competencias',
        objective: 'Interpretar fortalezas, vacíos y siguiente foco de práctica.',
        pitfall: 'Tomar el XP como sinónimo de dominio real.',
        evidencePrompt: 'Revisa tu reporte y define qué competencia reforzarás primero.',
        checklist: ['Identifiqué una fortaleza', 'Identifiqué una debilidad', 'Elegí un siguiente paso'],
        competencies: { strategy: 10, verification: 6 }
      },
      'module-21': {
        title: 'Operación Centauro',
        objective: 'Integrar búsqueda, generación, privacidad y verificación bajo presión.',
        pitfall: 'Resolver por impulso sin justificar herramienta, seguridad y validación.',
        evidencePrompt: 'Resume tus decisiones en cada fase y qué validaste antes de cerrar.',
        checklist: ['Elegí herramienta con criterio', 'Justifiqué privacidad', 'Definí validación final'],
        competencies: { prompting: 8, verification: 10, privacy: 8, communication: 4, strategy: 5 }
      }
    };
    cfg['module-final'] = cfg['module-21'];
    return cfg;
  }

  buildGuidedExerciseMap() {
    return {
      'module-1': {
        title: 'Diagnóstico de tareas aptas para IA',
        tool: 'ChatGPT, Gemini o Perplexity',
        scenario: 'Vas a revisar tu jornada y separar qué tareas conviene delegar, apoyar o conservar bajo criterio humano.',
        steps: [
          'Haz una lista de 5 tareas reales de tu semana. Incluye una repetitiva, una analítica, una sensible, una creativa y una de atención al ciudadano.',
          'Pega la lista en la herramienta y pide una tabla con tres columnas: tarea, nivel de apoyo con IA y riesgo principal.',
          'Revisa una por una y corrige manualmente cualquier clasificación que ignore privacidad, criterio legal o contexto institucional.',
          'Elige solo 2 tareas para empezar. Define qué entregarías a la IA y qué parte conservarías tú.',
          'Cierra con una regla simple: “usaré IA cuando…” y “no la usaré cuando…”.'
        ],
        observe: [
          'La herramienta debe ayudarte a pensar, no decidir por ti.',
          'Si una tarea incluye datos sensibles o juicio normativo, la IA no debe operar sola.'
        ],
        outcome: 'Comprendes qué tipo de problema sí vale la pena llevar a IA y con qué límites.'
      },
      'module-2': {
        title: 'Primera interacción útil con un modelo generalista',
        tool: 'ChatGPT o Gemini',
        scenario: 'Vas a convertir un borrador pobre en un correo institucional claro.',
        steps: [
          'Escribe un mensaje bruto de 3 líneas sobre una PQRS, un aviso interno o una solicitud de documentos.',
          'Pídele a la IA que lo reescriba en tono respetuoso y claro para un ciudadano.',
          'Haz una segunda iteración pidiendo asunto, saludo, cuerpo breve y cierre con siguiente paso.',
          'Haz una tercera iteración pidiendo versión más corta y una lista de datos que todavía faltan confirmar.',
          'Compara las tres respuestas y anota qué cambió cuando diste más contexto y formato.'
        ],
        observe: [
          'La mejora aparece cuando especificas público, tono y estructura.',
          'Si la salida suena genérica, todavía falta contexto.'
        ],
        outcome: 'Entiendes que la calidad mejora al iterar y no al aceptar la primera respuesta.'
      },
      'module-3': {
        title: 'Construcción de un prompt completo con CREA',
        tool: 'ChatGPT, Claude o Gemini',
        scenario: 'Vas a diseñar un prompt reusable para una tarea que hoy te toma más de una hora.',
        steps: [
          'Define una tarea concreta: por ejemplo resumir un informe, responder un derecho de petición o preparar un acta.',
          'Escribe primero el contexto: qué está pasando, quién usa el resultado y qué restricciones existen.',
          'Define el rol: experto jurídico, analista documental, redactor ejecutivo o el perfil que mejor encaje.',
          'Especifica la estructura del entregable: tabla, bullets, secciones, longitud máxima y tono.',
          'Cierra con la acción exacta y luego prueba el prompt. Ajusta lo que falle en contexto, rol, estructura o acción.'
        ],
        observe: [
          'Si el resultado sale ambiguo, normalmente faltó estructura.',
          'Si inventa demasiado, faltó contexto o una instrucción de verificación.'
        ],
        outcome: 'Dominas un método repetible para crear prompts más precisos y auditables.'
      },
      'module-4': {
        title: 'Lectura estratégica de documentos oficiales',
        tool: 'Perplexity, NotebookLM o Claude',
        scenario: 'Vas a convertir un documento oficial en resumen, riesgo y decisión.',
        steps: [
          'Elige un decreto, manual, informe o circular pública que sí puedas analizar.',
          'Pide a la herramienta un resumen ejecutivo de máximo 6 líneas.',
          'Haz una segunda consulta: “extrae el principal riesgo, la implicación operativa y la acción recomendada”.',
          'Exige soporte: página, cita, sección o enlace exacto de la fuente.',
          'Verifica manualmente al menos un hallazgo abriendo el fragmento original y corrigiendo cualquier exceso de interpretación.'
        ],
        observe: [
          'Un buen análisis documental no termina en resumen; termina en una decisión.',
          'Si no puedes ubicar la fuente, no deberías confiar en el hallazgo.'
        ],
        outcome: 'Aprendes a usar IA para leer más rápido sin perder trazabilidad.'
      },
      'module-5': {
        title: 'Resolución guiada de un problema de Excel o datos',
        tool: 'Excel, Google Sheets y ChatGPT',
        scenario: 'Vas a limpiar o corregir un archivo con ayuda de IA y luego validar el resultado.',
        steps: [
          'Describe el problema en lenguaje natural: columna dañada, duplicados, fechas inconsistentes o fórmula que no funciona.',
          'Pide a la IA una solución concreta: fórmula, pasos de limpieza o criterio de validación.',
          'Aplica la fórmula en un subconjunto pequeño del archivo antes de tocar toda la base.',
          'Compara el resultado esperado contra 3 filas de prueba y anota si hubo error de formato, referencia o interpretación.',
          'Si hay datos sensibles, anonimiza nombres, cédulas o cuentas antes de pegar ejemplos en la IA.'
        ],
        observe: [
          'La fórmula correcta debe pasar una prueba manual, no solo verse elegante.',
          'La privacidad sigue aplicando incluso en ejemplos de Excel.'
        ],
        outcome: 'Comprendes cómo usar IA para acelerar trabajo de datos sin renunciar a la validación.'
      },
      'module-6': {
        title: 'Diseño de un prompt visual funcional',
        tool: 'Canva, Microsoft Designer o Adobe Firefly',
        scenario: 'Vas a crear una pieza visual con propósito institucional y no solo una imagen bonita.',
        steps: [
          'Define la pieza: póster, banner, portada o infografía, y aclara dónde se publicará.',
          'Escribe el objetivo comunicativo: informar, convocar, orientar o reforzar imagen institucional.',
          'Pide a la IA una imagen con sujeto, estilo, paleta, formato y restricciones claras.',
          'Genera dos versiones: una más institucional y otra más persuasiva. Compáralas.',
          'Evalúa si el visual realmente ayuda a entender el mensaje o solo decora.'
        ],
        observe: [
          'La herramienta visual funciona mejor cuando el prompt define propósito, no solo estética.',
          'Si la imagen no sirve para el canal o público, el prompt todavía está flojo.'
        ],
        outcome: 'Aprendes a convertir una necesidad de comunicación en un brief visual claro.'
      },
      'module-7': {
        title: 'Creación guiada de una presentación útil',
        tool: 'Gamma, Canva Presentations o PowerPoint Copilot',
        scenario: 'Vas a pasar de un tema amplio a una presentación breve con narrativa.',
        steps: [
          'Escribe el tema, la audiencia y la decisión que quieres provocar al final de la presentación.',
          'Pide a la IA una estructura de 5 diapositivas: apertura, problema, evidencia, propuesta y cierre.',
          'Lleva esa estructura a Gamma o Canva y genera la primera versión automática.',
          'Revisa slide por slide: elimina texto excesivo, deja una idea central y agrega un dato o visual útil.',
          'Ensaya el cierre y valida si la presentación termina con una acción concreta.'
        ],
        observe: [
          'La herramienta acelera el diseño, pero la claridad narrativa sigue siendo tuya.',
          'Si una diapositiva tiene más de una idea principal, todavía necesita edición.'
        ],
        outcome: 'Comprendes cómo usar IA para estructurar y depurar presentaciones más ejecutivas.'
      },
      'module-8': {
        title: 'Adaptación de tono y audiencia',
        tool: 'ChatGPT o Claude',
        scenario: 'Vas a transformar un mismo mensaje para tres públicos distintos.',
        steps: [
          'Toma un borrador real: comunicado, correo, respuesta a ciudadano o mensaje interno.',
          'Pide una versión formal para alta dirección, otra empática para ciudadanía y otra ejecutiva para equipo interno.',
          'Compara qué cambió en tono, longitud, nivel de detalle y cierre.',
          'Haz una cuarta versión pidiendo que conserve los hechos pero elimine ambigüedad o exceso de dureza.',
          'Define una regla práctica: qué tono usarías según canal y destinatario.'
        ],
        observe: [
          'La misma información necesita estilos distintos según audiencia.',
          'Si cambian los hechos y no solo el tono, la herramienta se desvió.'
        ],
        outcome: 'Aprendes a usar IA para adaptar comunicación sin perder precisión.'
      },
      'module-9': {
        title: 'Protocolo de seguridad antes de usar IA',
        tool: 'Semáforo de riesgo, checklist interno o criterio humano',
        scenario: 'Vas a someter un caso real al filtro de privacidad y alucinaciones antes de enviarlo a una IA.',
        steps: [
          'Escoge un proceso de tu área que maneje documentos, bases o comunicaciones sensibles.',
          'Clasifica cada dato en público, interno, sensible o crítico.',
          'Redacta una versión segura del prompt usando variables o marcadores en vez de datos reales.',
          'Añade una instrucción de verificación: qué fuente, norma o persona debe confirmar la salida.',
          'Cierra con tres reglas de oro que aplicarás siempre antes de usar IA externa.'
        ],
        observe: [
          'Si el prompt expone identificadores o información personal, ya falló el protocolo.',
          'La seguridad no es solo ocultar datos: también es validar la respuesta.'
        ],
        outcome: 'Comprendes cómo blindar datos y decisiones antes de interactuar con una IA pública.'
      },
      'module-10': {
        title: 'Selección consciente de herramientas',
        tool: 'Catálogo del módulo y criterio de elección',
        scenario: 'Vas a construir una tríada de herramientas según tipo de problema.',
        steps: [
          'Elige tres problemas frecuentes de tu trabajo: redactar, buscar, analizar documentos, diseñar o automatizar.',
          'Asigna una herramienta principal a cada problema y una alternativa si la primera falla.',
          'Justifica la elección según entrada, salida esperada, costo y riesgo.',
          'Descarta al menos una herramienta popular explicando por qué no encaja en tu caso.',
          'Resume tu stack ideal en una frase: “uso X para..., Y para..., Z para...”.'
        ],
        observe: [
          'La mejor herramienta depende del problema, no de la fama.',
          'Elegir bien ahorra más tiempo que aprender 20 apps sin criterio.'
        ],
        outcome: 'Aprendes a decidir con método qué herramienta usar en cada tarea.'
      },
      'module-11': {
        title: 'Interrogación profunda de documentos extensos',
        tool: 'NotebookLM o Claude',
        scenario: 'Vas a subir un documento largo y convertirlo en hallazgos verificables.',
        steps: [
          'Carga un PDF o usa el simulador del módulo con una pregunta concreta de negocio o gestión.',
          'Formula una pregunta literal primero: “¿qué dice el documento sobre…?”.',
          'Haz una segunda pregunta inferencial: “¿qué implica esto para el proceso, presupuesto o riesgo?”.',
          'Pide evidencia: página, cita o sección exacta.',
          'Cierra con una decisión: qué harías con ese hallazgo y qué parte confirmarías manualmente.'
        ],
        observe: [
          'Las mejores respuestas salen de preguntas precisas, no de “resúmelo todo”.',
          'Sin evidencia no hay análisis profundo; solo apariencia de análisis.'
        ],
        outcome: 'Comprendes cómo conversar con documentos largos y extraer valor accionable.'
      },
      'module-12': {
        title: 'Planeación con prioridades y criterios',
        tool: 'ChatGPT, Sheets o tu agenda de trabajo',
        scenario: 'Vas a convertir una lista caótica de tareas en un plan manejable.',
        steps: [
          'Haz un dump de 10 pendientes reales de tu semana.',
          'Pide a la IA que los organice por urgencia, impacto y dependencia.',
          'Solicita una versión de plan semanal con bloques de tiempo realistas.',
          'Marca qué tareas puedes delegar a IA, cuáles debes hacer tú y cuáles podrías eliminar.',
          'Ajusta manualmente el plan para que refleje restricciones reales de tu cargo.'
        ],
        observe: [
          'La IA puede ordenar, pero tú debes validar tiempos, dependencias y contexto político u operativo.',
          'Un buen plan no es el más lleno, sino el más ejecutable.'
        ],
        outcome: 'Aprendes a usar IA para priorizar mejor y no solo para listar tareas.'
      },
      'module-13': {
        title: 'Diseño de una automatización simple',
        tool: 'Zapier, Make o esquema manual de flujo',
        scenario: 'Vas a mapear un proceso repetitivo y convertirlo en flujo automatizable.',
        steps: [
          'Escoge un proceso recurrente: recibir formularios, resumir correos, mover datos o notificar tareas.',
          'Escribe el flujo completo: disparador, entrada, transformación, salida y excepción.',
          'Pide a la IA sugerencias de automatización y revisa si omite validaciones humanas importantes.',
          'Define un punto de control humano donde el flujo se detiene si hay error o dato sensible.',
          'Resume el flujo final en una frase operativa fácil de compartir con tu equipo.'
        ],
        observe: [
          'Automatizar no es quitar personas de todo el proceso; es quitar fricción donde sí conviene.',
          'Un flujo sin manejo de excepciones es una automatización peligrosa.'
        ],
        outcome: 'Comprendes cuándo y cómo diseñar automatizaciones simples con control.'
      },
      'module-14': {
        title: 'Construcción de un segundo cerebro mínimo',
        tool: 'Notion, Obsidian, OneNote o tu sistema de notas',
        scenario: 'Vas a crear una estructura simple para capturar y recuperar conocimiento.',
        steps: [
          'Crea cuatro notas: una de proyecto, una de referencia, una de decisión y una de siguiente acción.',
          'Usa la IA para resumir una fuente y convertirla en nota utilizable, no solo en texto bonito.',
          'Conecta las notas con enlaces o etiquetas claras.',
          'Define una rutina de revisión semanal: qué mantienes, qué archivas y qué conviertes en tarea.',
          'Prueba recuperación: busca una decisión tomada y verifica si la encuentras en menos de 30 segundos.'
        ],
        observe: [
          'El valor del segundo cerebro aparece en la recuperación, no en la acumulación.',
          'Si no hay estructura mínima, la IA solo produce más desorden.'
        ],
        outcome: 'Aprendes a usar IA para organizar conocimiento y no solo para generar texto.'
      },
      'module-15': {
        title: 'Integración guiada de varias herramientas',
        tool: 'Claude, ChatGPT, Excel y tu sistema de notas',
        scenario: 'Vas a resolver un caso completo orquestando documento, hoja de cálculo y respuesta final.',
        steps: [
          'Divide el problema en tres frentes: análisis documental, corrección de Excel y redacción de respuesta.',
          'Asigna una herramienta a cada frente y justifica por qué esa herramienta encaja mejor.',
          'Produce un entregable parcial por frente antes de intentar el entregable final.',
          'Usa CREA para consolidar una respuesta única y coherente.',
          'Haz una revisión final de verificación, privacidad y claridad antes de cerrar el caso.'
        ],
        observe: [
          'La integración mejora cuando separas el problema por capas y no cuando todo se resuelve en un solo prompt.',
          'El entregable final debe heredar evidencia de cada herramienta usada.'
        ],
        outcome: 'Comprendes cómo combinar herramientas sin perder control del proceso.'
      },
      'module-16': {
        title: 'De problema operativo a solución técnica',
        tool: 'ChatGPT, Claude, v0.dev o Excel',
        scenario: 'Vas a traducir una necesidad operativa en fórmula, macro o prototipo.',
        steps: [
          'Describe el problema sin jerga técnica: qué quieres que haga el sistema, hoja o app.',
          'Pide una primera solución concreta y exige explicación paso a paso.',
          'Prueba la solución en un caso pequeño o simulado antes de escalarla.',
          'Pregunta a la IA qué riesgos, errores o dependencias tiene su propuesta.',
          'Cierra documentando qué parte quedó lista y qué parte aún requiere soporte técnico real.'
        ],
        observe: [
          'Que la IA produzca código o fórmulas no significa que ya sea seguro implementarlo.',
          'Las pruebas mínimas son parte del aprendizaje, no un extra opcional.'
        ],
        outcome: 'Aprendes a convertir necesidad de negocio en solución técnica validada.'
      },
      'module-17': {
        title: 'Decisión guiada sobre IA local y privacidad',
        tool: 'Ollama y criterio de clasificación de datos',
        scenario: 'Vas a decidir cuándo un caso exige IA local y no nube pública.',
        steps: [
          'Selecciona tres ejemplos: un documento público, una base interna y un archivo sensible.',
          'Clasifica cuál podría ir a nube pública, cuál a entorno privado y cuál debería quedarse local.',
          'Justifica la decisión usando privacidad, costo, capacidad técnica y urgencia.',
          'Si aplica, simula el flujo local con Ollama y anota qué cambia frente a una IA pública.',
          'Define una política corta para tu área: “estos datos sí, estos no, estos solo local”.'
        ],
        observe: [
          'IA local no es una moda; es una decisión de riesgo y gobernanza.',
          'No todo debe ir a local, pero ciertos datos nunca deberían salir de tu entorno.'
        ],
        outcome: 'Comprendes cuándo vale la pena usar IA local y cómo defender esa decisión.'
      },
      'module-18': {
        title: 'Justificación de ROI de una licencia premium',
        tool: 'Calculadora ROI del módulo y ChatGPT Plus',
        scenario: 'Vas a defender con números si una licencia premium se paga sola.',
        steps: [
          'Identifica una tarea o cuello de botella que hoy consuma horas repetitivas del equipo.',
          'Usa la calculadora para estimar ahorro de tiempo y compáralo con el costo de la licencia.',
          'Haz un escenario conservador, uno medio y uno optimista.',
          'Escribe un argumento ejecutivo de 5 líneas para un director: costo, beneficio, riesgo y condición de adopción.',
          'Añade una nota honesta sobre dependencia de capacitación o baja adopción.'
        ],
        observe: [
          'El ROI real no es solo tiempo ahorrado; también incluye adopción y calidad del uso.',
          'Una licencia mal usada puede costar más que no comprarla.'
        ],
        outcome: 'Aprendes a defender compras de IA con criterio económico y operativo.'
      },
      'module-19': {
        title: 'Mapa de desarrollo profesional con IA',
        tool: 'ChatGPT como mentor de carrera',
        scenario: 'Vas a traducir lo aprendido en una ruta profesional concreta.',
        steps: [
          'Elige el rol del futuro que más se parece a tu perfil o al que quieres migrar.',
          'Pide a la IA un plan de 90 días con competencias, práctica y evidencia necesaria.',
          'Contrasta ese plan con los módulos que ya completaste y marca fortalezas y vacíos.',
          'Define un microproyecto real que puedas mostrar como prueba de esa competencia.',
          'Escribe la primera acción que harás esta semana para empezar esa ruta.'
        ],
        observe: [
          'La IA puede ayudarte a diseñar la ruta, pero la evidencia la construyes con práctica real.',
          'Un buen plan de carrera conecta habilidades, proyectos y contexto laboral.'
        ],
        outcome: 'Comprendes cómo convertir el curso en una ruta de crecimiento profesional.'
      },
      'module-20': {
        title: 'Autoevaluación por competencias',
        tool: 'Reporte final del curso y tu evidencia acumulada',
        scenario: 'Vas a leer tu perfil formativo y convertirlo en plan de refuerzo.',
        steps: [
          'Revisa tus competencias fuertes y débiles en el panel final.',
          'Abre la evidencia de dos módulos fuertes y dos débiles para comparar calidad.',
          'Anota qué patrón se repite cuando te va bien: claridad, verificación, estructura o herramienta adecuada.',
          'Elige tres módulos para repasar con criterio de impacto laboral, no por afinidad.',
          'Cierra con un compromiso de mejora: una práctica semanal y un entregable concreto.'
        ],
        observe: [
          'El cierre no es solo una ceremonia; es un diagnóstico.',
          'La evidencia acumulada muestra mejor tu nivel que el XP aislado.'
        ],
        outcome: 'Aprendes a leer tu perfil de competencias y a definir repaso con sentido.'
      },
      'module-21': {
        title: 'Simulación integrada de crisis',
        tool: 'RAG, generación visual y IA local',
        scenario: 'Vas a resolver una crisis institucional usando búsqueda, comunicación y privacidad en secuencia.',
        steps: [
          'En fase 1, formula una consulta RAG específica y revisa si la fuente encontrada realmente responde al problema.',
          'En fase 2, define qué mensaje visual necesita la ciudadanía y qué dato debe aparecer sí o sí.',
          'En fase 3, justifica por qué el archivo sensible obliga a usar IA local y qué revisarías antes de aceptar la respuesta.',
          'Resume por escrito qué herramienta elegiste en cada fase y por qué.',
          'Cierra validando coherencia entre decisión, soporte documental, claridad comunicativa y protección de datos.'
        ],
        observe: [
          'La integración real exige cambiar de herramienta según el tipo de riesgo y salida.',
          'La mejor solución no es la más vistosa; es la más verificable y segura.'
        ],
        outcome: 'Comprendes cómo combinar búsqueda, generación y privacidad en un caso de alto impacto.'
      }
    };
  }

  buildToolAidMap() {
    return {
      'module-1': {
        bestFor: 'Clasificar tareas, detectar oportunidades de apoyo y separar criterio humano de automatización.',
        avoidWhen: 'La tarea depende de datos sensibles, interpretación jurídica final o decisión institucional irreversible.',
        weakExample: '“Haz todo mi trabajo de hoy.”',
        strongExample: '“Clasifica estas 5 tareas en delegable, apoyable o no delegable con IA y explica el riesgo principal de cada una.”',
        verify: ['Comprueba si la clasificación respeta privacidad.', 'Ajusta manualmente cualquier tarea que requiera juicio experto.']
      },
      'module-2': {
        bestFor: 'Primeros correos, borradores y transformaciones rápidas de texto.',
        avoidWhen: 'Esperas una salida excelente sin dar contexto, audiencia ni formato.',
        weakExample: '“Escribe un correo.”',
        strongExample: '“Redacta un correo breve para un ciudadano confirmando radicación de PQRS, tono respetuoso, asunto claro y siguiente paso.”',
        verify: ['Revisa tono y precisión factual.', 'Confirma que no haya datos inventados.']
      },
      'module-3': {
        bestFor: 'Diseñar prompts reutilizables con contexto, rol, estructura y acción.',
        avoidWhen: 'Usas instrucciones vagas o mezclas varias tareas sin estructura.',
        weakExample: '“Resume esto bien.”',
        strongExample: '“Contexto: informe trimestral de PQRS. Rol: analista senior. Estructura: tabla con tendencias, riesgos y acciones. Acción: resume y prioriza hallazgos.”',
        verify: ['Comprueba si cada parte de CREA está presente.', 'Haz una segunda iteración cuando falte precisión.']
      },
      'module-4': {
        bestFor: 'Resumir documentos, extraer riesgos y convertir lectura en decisiones.',
        avoidWhen: 'Te quedas solo con un resumen sin soporte ni acción.',
        weakExample: '“Léete este decreto y dime qué opinas.”',
        strongExample: '“Resume este decreto en 6 líneas, extrae el principal riesgo operativo y cita la sección o página que lo soporta.”',
        verify: ['Abre la fuente original y valida al menos un hallazgo.', 'Confirma que la acción propuesta sí se deriva del documento.']
      },
      'module-5': {
        bestFor: 'Limpiar datos, proponer fórmulas y explicar pasos de Excel o Sheets.',
        avoidWhen: 'Copias fórmulas a toda la base sin probar en un subconjunto.',
        weakExample: '“Dame una fórmula para arreglar Excel.”',
        strongExample: '“Tengo fechas inconsistentes en la columna B y duplicados por cédula. Propón fórmula o pasos de limpieza y explica cómo validar el resultado.”',
        verify: ['Prueba en 3 filas antes de escalar.', 'Anonimiza datos sensibles en ejemplos.']
      },
      'module-6': {
        bestFor: 'Crear briefs visuales claros para piezas institucionales.',
        avoidWhen: 'Pides solo estilo sin definir canal, audiencia u objetivo.',
        weakExample: '“Haz una imagen bonita del evento.”',
        strongExample: '“Crea un póster institucional para jornada de vacunación, formato vertical, tono confiable, colores sobrios, espacio para titular y fecha.”',
        verify: ['Valida si la pieza sirve para el canal real.', 'Confirma que la imagen refuerza el mensaje y no distrae.']
      },
      'module-7': {
        bestFor: 'Estructurar presentaciones y acelerar un primer borrador visual.',
        avoidWhen: 'Delegas toda la narrativa y no revisas claridad slide por slide.',
        weakExample: '“Hazme una presentación sobre el proyecto.”',
        strongExample: '“Estructura una presentación de 5 slides para directivos: problema, evidencia, propuesta, impacto y cierre con decisión.”',
        verify: ['Deja una idea principal por diapositiva.', 'Elimina texto redundante antes de presentar.']
      },
      'module-8': {
        bestFor: 'Ajustar tono, audiencia y claridad de comunicaciones.',
        avoidWhen: 'La herramienta altera hechos en lugar de solo transformar estilo.',
        weakExample: '“Pon esto bonito.”',
        strongExample: '“Reescribe este mensaje para ciudadanía en tono empático, manteniendo exactamente los hechos y cerrando con una acción clara.”',
        verify: ['Compara hechos original vs salida.', 'Revisa si el tono corresponde al público final.']
      },
      'module-9': {
        bestFor: 'Diseñar protocolos seguros antes de usar IA externa.',
        avoidWhen: 'Incluyes PII, secretos, datos clínicos o material contractual sensible.',
        weakExample: '“Te pego esta base completa con cédulas para que la limpies.”',
        strongExample: '“Analiza este patrón de casos usando variables anónimas y sugiere criterios de clasificación sin exponer datos reales.”',
        verify: ['Pasa el caso por semáforo de riesgo.', 'Añade una regla explícita de validación humana.']
      },
      'module-10': {
        bestFor: 'Elegir la herramienta adecuada según problema, entrada y salida esperada.',
        avoidWhen: 'Seleccionas por popularidad y no por ajuste al caso.',
        weakExample: '“Voy a usar ChatGPT para todo.”',
        strongExample: '“Para búsqueda con fuentes usaré Perplexity; para PDFs usaré NotebookLM; para presentaciones usaré Gamma.”',
        verify: ['Define una herramienta principal y una alternativa.', 'Justifica la elección en una frase operativa.']
      },
      'module-11': {
        bestFor: 'Conversar con documentos largos y obtener evidencia localizada.',
        avoidWhen: 'Haces preguntas enormes o ambiguas como “explícamelo todo”.',
        weakExample: '“Resume el PDF completo.”',
        strongExample: '“¿Qué riesgos financieros menciona el documento y en qué páginas aparecen?”',
        verify: ['Exige página o sección.', 'Contrasta el hallazgo con el texto original.']
      },
      'module-12': {
        bestFor: 'Priorizar pendientes y convertir caos operativo en plan semanal.',
        avoidWhen: 'Aceptas un plan que ignora dependencias o tiempos reales.',
        weakExample: '“Ordéname estas tareas.”',
        strongExample: '“Prioriza estas 10 tareas por urgencia e impacto, propone agenda semanal y marca qué delegaría a IA.”',
        verify: ['Ajusta tiempos y dependencias manualmente.', 'Descarta tareas irreales o de bajo valor.']
      },
      'module-13': {
        bestFor: 'Diseñar flujos simples de automatización con control humano.',
        avoidWhen: 'Automatizas procesos sensibles sin excepciones ni validación.',
        weakExample: '“Automatiza todo el proceso.”',
        strongExample: '“Diseña un flujo trigger > clasificación > resumen > validación humana > envío final para correos repetitivos.”',
        verify: ['Incluye punto de control humano.', 'Documenta qué pasa si la entrada llega incompleta.']
      },
      'module-14': {
        bestFor: 'Capturar, resumir y conectar conocimiento reutilizable.',
        avoidWhen: 'Solo acumulas notas sin estructura ni recuperación.',
        weakExample: '“Guarda esto en notas.”',
        strongExample: '“Convierte este texto en nota de referencia con resumen, fuente, decisión asociada y siguiente acción.”',
        verify: ['Prueba recuperación de una nota importante.', 'Mantén enlace entre fuente y decisión.']
      },
      'module-15': {
        bestFor: 'Orquestar varias herramientas en un solo caso complejo.',
        avoidWhen: 'Intentas resolver todo con una sola herramienta o un solo prompt gigante.',
        weakExample: '“Resuélveme todo el caso.”',
        strongExample: '“Divide este caso en análisis documental, corrección de Excel y respuesta ejecutiva; propone herramienta y salida para cada frente.”',
        verify: ['Valida cada frente antes de consolidar.', 'Cierra con revisión de privacidad y coherencia final.']
      },
      'module-16': {
        bestFor: 'Traducir necesidades operativas a fórmulas, macros o prototipos.',
        avoidWhen: 'Llevas código generado a producción sin prueba mínima.',
        weakExample: '“Hazme una app.”',
        strongExample: '“Necesito una interfaz para reportar incidentes en vía pública: campos, flujo básico y validaciones mínimas.”',
        verify: ['Prueba en un caso pequeño.', 'Pide a la IA que explique riesgos o límites de su solución.']
      },
      'module-17': {
        bestFor: 'Decidir cuándo conviene IA local por privacidad o soberanía de datos.',
        avoidWhen: 'Asumes que nube pública sirve también para archivos críticos.',
        weakExample: '“Subiré esta minuta sensible a cualquier chat.”',
        strongExample: '“Clasifica este caso: nube pública, entorno privado o IA local, justificando la decisión por sensibilidad y riesgo.”',
        verify: ['Confirma el nivel de sensibilidad del dato.', 'Evalúa costo y viabilidad técnica de usar local.']
      },
      'module-18': {
        bestFor: 'Defender inversión en licencias premium con argumentos de negocio.',
        avoidWhen: 'Calculas ROI ignorando adopción, capacitación o retrabajo.',
        weakExample: '“Compremos Plus porque sí.”',
        strongExample: '“Con 8 horas semanales automatizables y costo hora estimado, calcula ahorro mensual y redacta argumento ejecutivo de compra.”',
        verify: ['Haz escenario conservador y optimista.', 'Añade riesgo de baja adopción al análisis.']
      },
      'module-19': {
        bestFor: 'Convertir competencias del curso en una ruta profesional concreta.',
        avoidWhen: 'Te quedas en inspiración sin proyecto ni plan accionable.',
        weakExample: '“Quiero trabajar con IA.”',
        strongExample: '“Quiero perfilarme como arquitecto de automatización; diseña un plan de 90 días con habilidades, práctica y entregables.”',
        verify: ['Conecta el plan con evidencia real del curso.', 'Define una primera acción para esta semana.']
      },
      'module-20': {
        bestFor: 'Leer tu diagnóstico final y decidir qué reforzar.',
        avoidWhen: 'Confundes XP con dominio real.',
        weakExample: '“Terminé, ya sé todo.”',
        strongExample: '“Revisa mis competencias más bajas y sugiere tres módulos que debo repetir con una meta concreta.”',
        verify: ['Usa tus evidencias para confirmar fortalezas y vacíos.', 'Elige repaso por impacto laboral, no por gusto.']
      },
      'module-21': {
        bestFor: 'Resolver una crisis usando búsqueda, generación y privacidad de forma integrada.',
        avoidWhen: 'Mantienes la misma herramienta en todas las fases sin mirar riesgo ni salida.',
        weakExample: '“Haré toda la crisis en el mismo chat.”',
        strongExample: '“Usa RAG para protocolo, generador visual para alerta pública e IA local para minuta sensible, justificando cada elección.”',
        verify: ['Comprueba soporte documental en fase 1.', 'Confirma claridad pública en fase 2 y privacidad en fase 3.']
      }
    };
  }

  buildCaseStudyMap() {
    return {
      'module-1': { title: 'Clasificar una semana de trabajo', tool: 'ChatGPT', context: 'Una auxiliar administrativa tiene 12 tareas semanales y no sabe por dónde empezar con IA.', prompt: 'Clasifica estas tareas en delegable, apoyable o no delegable con IA y explica el riesgo principal de cada una.', result: 'Obtiene una tabla priorizada y decide empezar solo por clasificación de correos y borradores.' },
      'module-2': { title: 'Correo de radicación', tool: 'ChatGPT o Gemini', context: 'Debes responder a un ciudadano confirmando que su PQRS fue radicada.', prompt: 'Redacta un correo breve, respetuoso y claro para confirmar la radicación de una PQRS, indicando siguiente paso.', result: 'Sale un correo más claro que el borrador manual y se mejora en una segunda iteración con asunto y cierre.' },
      'module-3': { title: 'Prompt CREA para acta', tool: 'Claude o ChatGPT', context: 'Un equipo necesita convertir una transcripción extensa en acta ejecutiva.', prompt: 'Contexto: reunión de seguimiento. Rol: secretario ejecutivo. Estructura: asistentes, acuerdos, responsables y fechas. Acción: redacta un acta clara.', result: 'El prompt queda reusable y produce un acta con secciones consistentes.' },
      'module-4': { title: 'Riesgo en una circular', tool: 'Perplexity', context: 'Se analiza una circular reciente para identificar impactos operativos.', prompt: 'Resume la circular en 6 líneas, extrae el principal riesgo operativo y cita el apartado que lo soporta.', result: 'La IA entrega un hallazgo útil, pero el usuario valida la fuente antes de usarlo.' },
      'module-5': { title: 'Fecha inconsistente en Excel', tool: 'Excel + ChatGPT', context: 'Un archivo trae varias fechas mezcladas en formatos diferentes.', prompt: 'Tengo fechas en formatos distintos en la columna B. Propón fórmula o pasos para normalizarlas y explica cómo validar el cambio.', result: 'La fórmula funciona en una muestra pequeña y luego se aplica al resto de la base.' },
      'module-6': { title: 'Póster institucional', tool: 'Canva o Designer', context: 'Un área debe convocar a una jornada interna con una pieza visual simple.', prompt: 'Crea un póster institucional vertical para jornada de bienestar, tono confiable, colores sobrios y espacio para fecha y lugar.', result: 'La pieza comunica el evento con mejor claridad que una imagen genérica.' },
      'module-7': { title: 'Presentación ejecutiva de proyecto', tool: 'Gamma', context: 'Debes mostrar avance de un proyecto a directivos en 5 diapositivas.', prompt: 'Estructura una presentación de 5 slides con problema, evidencia, propuesta, impacto y cierre con decisión.', result: 'Se obtiene un primer borrador útil y luego se reduce texto para dejar una idea por slide.' },
      'module-8': { title: 'Mismo mensaje para tres públicos', tool: 'ChatGPT', context: 'Un comunicado debe adaptarse para directivos, ciudadanía y equipo interno.', prompt: 'Reescribe este mensaje en tono ejecutivo, empático y operativo, manteniendo los hechos idénticos.', result: 'El usuario aprende que cambia el tono y la estructura, no el fondo del mensaje.' },
      'module-9': { title: 'Prompt seguro para datos sensibles', tool: 'Checklist de riesgo', context: 'Un proceso maneja PII y se quiere usar IA para resumir casos.', prompt: 'Rediseña este prompt usando variables anónimas y agrega un paso de verificación humana antes del envío final.', result: 'Se protege la información y se fija un protocolo mínimo de uso.' },
      'module-10': { title: 'Tríada de herramientas', tool: 'Catálogo del módulo', context: 'Una persona necesita buscar con fuentes, resumir PDFs y crear slides.', prompt: 'Sugiere la mejor combinación de tres herramientas para búsqueda con fuentes, análisis documental y presentaciones.', result: 'Queda un stack simple y defendible en vez de una lista infinita de apps.' },
      'module-11': { title: 'Pregunta crítica sobre un PDF', tool: 'NotebookLM', context: 'Un informe de 200 páginas debe revisarse por riesgos financieros.', prompt: '¿Qué riesgos financieros menciona este documento y en qué páginas aparecen?', result: 'La respuesta con páginas permite pasar de resumen general a evidencia accionable.' },
      'module-12': { title: 'Agenda semanal realista', tool: 'ChatGPT', context: 'Una líder de área tiene demasiados pendientes y urgencias mezcladas.', prompt: 'Prioriza estas tareas por urgencia e impacto, propone agenda semanal y marca qué puedo delegar a IA.', result: 'El plan inicial mejora, pero se ajusta con dependencias reales del equipo.' },
      'module-13': { title: 'Flujo de correos repetitivos', tool: 'Zapier o Make', context: 'Llegan formularios repetitivos que requieren respuesta estándar y revisión final.', prompt: 'Diseña un flujo trigger > clasificación > resumen > validación humana > envío para estos formularios.', result: 'El flujo queda claro y se evita automatizar la parte crítica sin control.' },
      'module-14': { title: 'Nota útil y recuperable', tool: 'Notion u Obsidian', context: 'Un documento importante debe pasar a una nota que sirva después.', prompt: 'Convierte este texto en una nota con resumen, fuente, decisión y siguiente acción.', result: 'La nota deja de ser archivo muerto y se vuelve insumo para trabajo futuro.' },
      'module-15': { title: 'Caso integrado', tool: 'Claude + ChatGPT + Excel', context: 'Un caso exige leer un informe, corregir un archivo y responder de forma ejecutiva.', prompt: 'Divide el caso en tres frentes, asigna una herramienta a cada uno y describe la salida esperada.', result: 'La orquestación mejora porque cada herramienta resuelve su capa específica.' },
      'module-16': { title: 'Fórmula o prototipo a partir de lenguaje natural', tool: 'ChatGPT o v0', context: 'Un usuario necesita una fórmula compleja o una interfaz simple y no programa.', prompt: 'Traduce esta necesidad operativa a fórmula o interfaz y explica riesgos y validación mínima.', result: 'La IA acelera la solución, pero la prueba sigue siendo obligatoria.' },
      'module-17': { title: 'Decisión nube vs local', tool: 'Ollama', context: 'Se debe resumir un archivo que contiene información contractual sensible.', prompt: 'Clasifica este caso: nube pública, entorno privado o IA local, con justificación por riesgo.', result: 'La decisión termina en IA local porque la sensibilidad supera la conveniencia de la nube.' },
      'module-18': { title: 'Defensa de compra de licencia', tool: 'Calculadora ROI', context: 'Un director pide justificar por qué valdría pagar una licencia premium.', prompt: 'Calcula ahorro mensual con este cuello de botella y redacta un argumento ejecutivo con costo, beneficio y riesgo.', result: 'La justificación mejora cuando incluye adopción y no solo tiempo teórico ahorrado.' },
      'module-19': { title: 'Plan de 90 días', tool: 'ChatGPT como mentor', context: 'Una persona quiere moverse hacia un rol nuevo relacionado con IA.', prompt: 'Diseña un plan de 90 días para perfilarme como [rol], con habilidades, práctica y entregables.', result: 'La ruta se vuelve accionable porque conecta estudio con evidencia.' },
      'module-20': { title: 'Lectura del perfil final', tool: 'Reporte de competencias', context: 'El cierre del curso debe traducirse en una decisión de repaso.', prompt: 'Analiza mis competencias más bajas y sugiere tres módulos para repetir con una meta concreta.', result: 'El usuario deja de ver el cierre como ceremonia y lo usa como diagnóstico.' },
      'module-21': { title: 'Crisis con tres herramientas', tool: 'RAG + visual + IA local', context: 'Hay que resolver una crisis institucional con restricciones de tiempo y privacidad.', prompt: 'Usa una herramienta distinta para protocolo, comunicación pública y documento sensible, justificando cada elección.', result: 'El caso muestra que la mejor estrategia cambia según tipo de salida y riesgo.' }
    };
  }

  buildModuleQuizMap() {
    return {
      'module-1': [
        { q: 'La mejor primera aplicación de IA aquí es:', options: ['Clasificar tareas y detectar oportunidades de apoyo', 'Delegar decisiones legales finales', 'Subir cualquier base completa a la nube'], answer: 0, why: 'Este módulo desarrolla criterio para decidir en qué tareas la IA sí agrega valor.' },
        { q: 'Si una tarea tiene datos sensibles, la regla base es:', options: ['Usarla igual si ahorra tiempo', 'Rediseñar el uso con controles', 'Pedir a la IA que decida sola'], answer: 1, why: 'La privacidad y el control humano deben ir primero.' }
      ],
      'module-2': [
        { q: 'La calidad de una respuesta mejora sobre todo cuando:', options: ['Añades contexto, audiencia y formato', 'Aceptas el primer resultado', 'Usas prompts cada vez más vagos'], answer: 0, why: 'Los modelos responden mejor cuando la intención está bien especificada.' },
        { q: 'Iterar significa:', options: ['Repetir el mismo prompt', 'Ajustar la instrucción según la salida', 'Cambiar de herramienta sin revisar'], answer: 1, why: 'La iteración consiste en mejorar deliberadamente la instrucción.' }
      ],
      'module-3': [
        { q: 'CREA sirve sobre todo para:', options: ['Escribir prompts estructurados y reutilizables', 'Evitar cualquier revisión humana', 'Eliminar el contexto'], answer: 0, why: 'CREA ordena contexto, rol, estructura y acción.' },
        { q: 'Si la salida es ambigua, normalmente faltó:', options: ['Más estructura o precisión', 'Más adornos', 'Cambiar todo el tema'], answer: 0, why: 'La ambigüedad suele venir de pedir sin salida esperada clara.' }
      ],
      'module-4': [
        { q: 'El error más común con documentos es:', options: ['Pedir resumen sin pasar a decisión', 'Validar con la fuente', 'Pedir citas o páginas'], answer: 0, why: 'El objetivo no es solo resumir, sino decidir mejor.' },
        { q: 'Un hallazgo documental es confiable cuando:', options: ['Suena convincente', 'Tiene soporte verificable en la fuente', 'La IA lo afirma con seguridad'], answer: 1, why: 'La trazabilidad manda en análisis documental.' }
      ],
      'module-5': [
        { q: 'Antes de aplicar una fórmula a toda la base debes:', options: ['Probarla en un subconjunto pequeño', 'Pegarla en todas las filas', 'Confiar en que la IA no falla'], answer: 0, why: 'La validación mínima evita escalar errores.' },
        { q: 'Al mostrar ejemplos de Excel a una IA pública debes:', options: ['Incluir datos reales completos', 'Anonimizar lo sensible', 'Enviar capturas con todo visible'], answer: 1, why: 'La privacidad también aplica en muestras y ejemplos.' }
      ],
      'module-6': [
        { q: 'Un buen prompt visual debe incluir:', options: ['Objetivo, canal y restricciones', 'Solo estilo bonito', 'Solo nombre del evento'], answer: 0, why: 'La pieza visual debe responder a una intención real de comunicación.' },
        { q: 'La imagen es útil cuando:', options: ['Refuerza el mensaje del canal real', 'Tiene más efectos', 'Se ve más artística que clara'], answer: 0, why: 'El criterio de éxito es funcionalidad comunicativa.' }
      ],
      'module-7': [
        { q: 'Una presentación mejora cuando:', options: ['Cada slide tiene una idea principal', 'Cada slide tiene más texto', 'Toda la narrativa la decide la herramienta'], answer: 0, why: 'La síntesis sigue siendo responsabilidad humana.' },
        { q: 'La IA en presentaciones sirve mejor para:', options: ['Acelerar borrador y estructura', 'Eliminar revisión humana', 'Reemplazar el objetivo del mensaje'], answer: 0, why: 'La herramienta acelera, pero no sustituye tu intención.' }
      ],
      'module-8': [
        { q: 'Adaptar tono significa:', options: ['Mantener hechos y cambiar estilo según audiencia', 'Cambiar hechos y datos', 'Usar siempre el mismo lenguaje'], answer: 0, why: 'La audiencia cambia el estilo, no la base factual.' },
        { q: 'Si el mensaje final contradice el original, el problema fue:', options: ['Buena creatividad', 'Mala transformación del contenido', 'Exceso de empatía'], answer: 1, why: 'La transformación debe respetar el contenido original.' }
      ],
      'module-9': [
        { q: 'La primera pregunta antes de usar IA debería ser:', options: ['Qué nivel de sensibilidad tiene el dato', 'Qué tan famosa es la herramienta', 'Qué tan rápido responde'], answer: 0, why: 'La clasificación del dato determina el canal y el riesgo.' },
        { q: 'Un prompt seguro para IA pública debe:', options: ['Anonimizar y definir verificación humana', 'Exponer datos reales completos', 'Evitar cualquier contexto'], answer: 0, why: 'La seguridad exige proteger datos y controlar la salida.' }
      ],
      'module-10': [
        { q: 'Elegir herramienta correctamente depende de:', options: ['Problema, entrada, salida y riesgo', 'Moda y popularidad', 'Color de interfaz'], answer: 0, why: 'La herramienta correcta se decide por ajuste al caso.' },
        { q: 'Una buena tríada de herramientas debe:', options: ['Cubrir problemas distintos con criterio', 'Ser la más larga posible', 'Cambiar todos los días'], answer: 0, why: 'El valor está en cubrir bien tus casos recurrentes.' }
      ],
      'module-11': [
        { q: 'La mejor pregunta para documentos largos es:', options: ['Una pregunta concreta con foco y evidencia', 'Resúmelo todo', 'Dime lo importante'], answer: 0, why: 'La precisión de la pregunta mejora el análisis.' },
        { q: 'NotebookLM o Claude agregan más valor cuando:', options: ['Pides páginas o citas concretas', 'No revisas la fuente', 'Les dejas adivinar el contexto'], answer: 0, why: 'La trazabilidad es parte del beneficio principal.' }
      ],
      'module-12': [
        { q: 'Priorizar con IA sirve para:', options: ['Ordenar y clarificar trabajo ejecutable', 'Hacer más tareas sin criterio', 'Eliminar revisión humana'], answer: 0, why: 'La IA ayuda a ordenar, pero tú validas el plan real.' },
        { q: 'Una agenda útil debe considerar:', options: ['Urgencia, impacto y dependencias', 'Solo urgencia', 'Orden alfabético'], answer: 0, why: 'La priorización real combina varias variables.' }
      ],
      'module-13': [
        { q: 'Una automatización sana necesita:', options: ['Trigger, salida y excepciones', 'Solo un disparador', 'Ningún control humano'], answer: 0, why: 'Sin manejo de errores ni validación, el flujo es frágil.' },
        { q: 'El mejor lugar para automatizar es:', options: ['Tareas repetitivas con reglas claras', 'Decisiones jurídicas finales', 'Todo proceso sensible'], answer: 0, why: 'Las tareas estructuradas son el mejor punto de entrada.' }
      ],
      'module-14': [
        { q: 'Un segundo cerebro sirve sobre todo para:', options: ['Recuperar conocimiento útil', 'Acumular texto', 'Guardar archivos sin orden'], answer: 0, why: 'Si no recuperas rápido la información, el sistema no está funcionando.' },
        { q: 'La IA aporta más en PKM cuando:', options: ['Convierte fuentes en notas accionables', 'Duplica notas sin criterio', 'Escribe sin enlazar decisiones'], answer: 0, why: 'El valor está en transformar información en conocimiento reutilizable.' }
      ],
      'module-15': [
        { q: 'En un caso integrado, lo mejor es:', options: ['Separar frentes y asignar herramienta por tarea', 'Resolver todo en una sola herramienta', 'Cambiar de herramienta al azar'], answer: 0, why: 'La orquestación funciona mejor cuando cada herramienta resuelve su capa.' },
        { q: 'El cierre final del caso debe incluir:', options: ['Verificación, privacidad y coherencia', 'Solo el texto bonito', 'Solo rapidez'], answer: 0, why: 'La integración no termina hasta validar resultado y riesgo.' }
      ],
      'module-16': [
        { q: 'Si una IA te genera código o fórmula, lo correcto es:', options: ['Probarlo en un caso pequeño primero', 'Usarlo en producción sin revisar', 'Asumir que ya quedó perfecto'], answer: 0, why: 'Las soluciones técnicas asistidas necesitan prueba mínima.' },
        { q: 'Este módulo enseña principalmente a:', options: ['Traducir problemas a soluciones técnicas', 'Reemplazar desarrollo profesional', 'Evitar documentación'], answer: 0, why: 'La IA ayuda a pasar de necesidad operativa a propuesta técnica.' }
      ],
      'module-17': [
        { q: 'La IA local se justifica especialmente cuando:', options: ['El dato es sensible o crítico', 'La tarea es trivial y pública', 'Quieres una interfaz más bonita'], answer: 0, why: 'La privacidad y soberanía de datos son el principal criterio.' },
        { q: 'Elegir IA local no significa:', options: ['Tomar una decisión de gobernanza', 'Asumir que siempre será la mejor opción', 'Analizar riesgos y datos'], answer: 1, why: 'No todo debe ir a local; se decide por contexto y riesgo.' }
      ],
      'module-18': [
        { q: 'Un ROI serio debe incluir:', options: ['Ahorro, costo, adopción y riesgo', 'Solo horas ideales de ahorro', 'Solo precio de la licencia'], answer: 0, why: 'El retorno real se mueve también por adopción y calidad del uso.' },
        { q: 'Defender una licencia premium implica:', options: ['Argumentar con caso y números', 'Comprar primero y justificar después', 'Comparar solo por fama'], answer: 0, why: 'La compra debe atarse a un cuello de botella concreto.' }
      ],
      'module-19': [
        { q: 'La mejor ruta profesional con IA conecta:', options: ['Motivación, práctica y evidencia', 'Solo inspiración', 'Solo herramientas'], answer: 0, why: 'Una ruta útil necesita competencias, proyecto y evidencia.' },
        { q: 'Un buen plan de 90 días debe terminar en:', options: ['Un entregable o microproyecto', 'Más teoría sin prueba', 'Cambios semanales sin meta'], answer: 0, why: 'La evidencia concreta consolida el aprendizaje.' }
      ],
      'module-20': [
        { q: 'El cierre del curso ahora sirve para:', options: ['Diagnosticar fortalezas y vacíos', 'Solo comparar XP', 'Ignorar módulos débiles'], answer: 0, why: 'La meta es usar el cierre como mapa de repaso.' },
        { q: 'La mejor decisión después del reporte final es:', options: ['Repetir módulos por impacto laboral', 'Escoger al azar', 'No revisar nada'], answer: 0, why: 'El repaso debe ser dirigido por vacíos reales.' }
      ],
      'module-21': [
        { q: 'Operación Centauro evalúa sobre todo:', options: ['Uso integrado de búsqueda, generación y privacidad', 'Solo rapidez de escritura', 'Solo diseño visual'], answer: 0, why: 'La prueba final mide integración con criterio y seguridad.' },
        { q: 'La mejor estrategia en una crisis es:', options: ['Cambiar de herramienta según tipo de salida y riesgo', 'Usar la misma herramienta para todo', 'Ignorar verificación por urgencia'], answer: 0, why: 'La elección de herramienta depende de la fase y del riesgo.' }
      ]
    };
  }

  async init() {
    console.log('🧬 DNA v32.4: System Synchronized [ULTRA_TRUTH]');
    window.ai = window.ai || { triggerThinking: () => console.log('AI Thinking...') };
    
    // 0. Load Constitution First (Primary Source of Truth)
    await this.fetchConstitution();
    try {
      const { gameEngine } = await import('../core/gamification-engine.js');
      this.gameEngine = gameEngine;
    } catch (e) {
      console.error('Error loading GamificationEngine:', e);
    }

    // 1. Initialize core system dependencies
    try {
      this.progressManager = (await import('../core/progress-manager.js')).progressManager;
      this.loadProgress();
    } catch (e) {
      console.error('Error loading ProgressManager:', e);
    }

    // 2. IMMEDIATE UI SETUP (Critical for responsiveness)
    this.setupMobileMenu();
    this.setupThemeToggle();
    this.setupNavigation();
    this.setupQuickActions();
    this.initConstitutionUI();
    this.setupTabs();

    // 3. Background Module Loading (Non-blocking)
    this.loadAllModules().then(() => {
        console.log("Sovereign Modules Synchronized.");
        this.updateNavLockState();
    });

    // 4. Remaining components
    this.setupScrollProgress();
    this.setupScrollTop();
    this.setupUserProfile();
    this.setupAccordions();
    this.setupQuizzes();
    this.setupCopyButtons();
    this.setupScrollAnimations();
    this.setupCompleteButtons();
    this.setupSandbox();
    this.setupModule2Builder();
    this.setupCertificate();
    this.setupWorkflowInteractivity();
    this.setupToolRecommender();
    this.setupToolCards();

    this.updateGlobalProgress();
    this.setupProgressiveLocking();
    this.updateXPDashboard();
    this.updateCompetencyDashboard();
    this.repairLegacyCompletionButtons();
    this.renderPedagogicalLayers(this.currentModule);
    this.setupMiniAssessment();
    this.injectModuleQuiz(this.currentModule);
    this.setupModuleQuiz();
    this.setupSpecialization();
    this.repairSidebar();
    this.setupGamesObservers();

    // 5. Initial navigation
    this.navigateTo(this.currentModule);
  }

  normalizeModuleId(moduleId) {
    return moduleId === 'module-final' ? 'module-21' : moduleId;
  }

  getModuleLabel(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const navItem = document.querySelector(`.nav-item[data-module="${normalized}"] .nav-label`);
    if (navItem) return navItem.textContent.trim();
    if (normalized === 'welcome') return 'Bienvenida';
    if (normalized === 'certificate') return 'Certificado final';
    return normalized;
  }

  getRecommendedModuleId() {
    const current = this.normalizeModuleId(this.currentModule);
    if (current !== 'welcome' && current !== 'certificate' && !this.completedModules.has(current)) {
      return current;
    }

    const pending = this.moduleSequence.find(moduleId => !this.completedModules.has(moduleId));
    return pending || 'certificate';
  }

  getRecommendedModuleMeta(moduleId = this.getRecommendedModuleId()) {
    const normalized = this.normalizeModuleId(moduleId);
    if (normalized === 'certificate') {
      return {
        id: 'certificate',
        title: 'Descarga tu certificado',
        summary: 'Ya completaste la ruta principal. Revisa tu resultado final y descarga la certificacion.',
        eta: '5 min',
        badge: 'Cierre',
        progress: `${this.completedModules.size} de 21 modulos completados`
      };
    }

    const config = this.getLearningConfig(normalized);
    const roughEta = Number.parseInt(normalized.replace('module-', ''), 10) <= 8 ? '15-20 min' : '20-30 min';
    return {
      id: normalized,
      title: config?.title || this.getModuleLabel(normalized),
      summary: config?.objective || 'Siguiente paso recomendado para seguir avanzando sin perderte en el mapa.',
      eta: roughEta,
      badge: this.completedModules.has(normalized) ? 'Reforzar' : 'Siguiente paso',
      progress: `${this.completedModules.size} de 21 modulos completados`
    };
  }






  getLearningConfig(moduleId) {
    return this.learningConfig[this.normalizeModuleId(moduleId)] || null;
  }

  loadProgress() {
    try {
      const data = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
      if (data) {
        this.completedModules = new Set((data.completed || []).map(id => this.normalizeModuleId(id)));
        this.currentModule = this.normalizeModuleId(data.currentModule || 'welcome');
        this.quizScores = data.quizScores || {};
        this.xp = data.xp || 0;
        this.level = data.level || 1;
        this.competencies = { ...this.createEmptyCompetencies(), ...(data.competencies || {}) };
        this.evidenceStore = data.evidenceStore || {};
        this.selfAssessments = data.selfAssessments || {};
        if (data.theme) document.documentElement.setAttribute('data-theme', data.theme);
      }
    } catch (e) {
      console.log('No saved progress found.');
    }
  }

  saveProgress() {
    const data = {
      completed: [...this.completedModules],
      currentModule: this.currentModule,
      quizScores: this.quizScores,
      xp: this.xp,
      level: this.level,
      competencies: this.competencies,
      evidenceStore: this.evidenceStore,
      selfAssessments: this.selfAssessments,
      theme: document.documentElement.getAttribute('data-theme') || 'dark'
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  updateCompetencyDashboard() {
      const container = document.getElementById('competencyDashboard');
      if (!container) return;

      const strongest = Object.entries(this.competencies)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(([key]) => this.competencyMeta[key]?.label)
        .filter(Boolean);

      const competencyBadges = Object.entries(this.competencies)
        .filter(([, value]) => value >= 60)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([key, value]) => ({
          label: this.competencyMeta[key]?.label || key,
          value
        }));

      const nextRoute = this.getSuggestedRoute().slice(0, 3);

      container.innerHTML = `
        <div class="competency-dashboard-title">Competencias</div>
        <div class="competency-dashboard-summary">${strongest.length ? `Fortalezas: ${strongest.join(' · ')}` : 'Completa módulos para construir tu perfil.'}</div>
        <div class="competency-dashboard-grid">
        ${Object.entries(this.competencyMeta).map(([key, meta]) => {
          const value = Math.max(0, Math.min(100, Math.round(this.competencies[key] || 0)));
          return `
            <div class="competency-row">
              <div class="competency-row-header">
                <span>${meta.label}</span>
                <span>${value}%</span>
              </div>
              <div class="competency-track">
                <div class="competency-fill" style="width:${value}%; background:${meta.accent};"></div>
              </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="competency-sidebar-section">
          <div class="competency-sidebar-label">Insignias reales</div>
          <div class="competency-badge-list">
            ${competencyBadges.length
              ? competencyBadges.map(item => `<div class="competency-badge-chip">${item.label} · ${Math.round(item.value)}%</div>`).join('')
              : '<div class="competency-sidebar-empty">Aún no hay competencias consolidadas por encima de 60%.</div>'}
          </div>
        </div>
        <div class="competency-sidebar-section">
          <div class="competency-sidebar-label">Ruta sugerida</div>
          <div class="competency-route-list">
            ${nextRoute.length
              ? nextRoute.map(moduleId => {
                  const nav = document.querySelector(`.nav-item[data-module="${moduleId}"] .nav-label`);
                  const label = nav?.textContent?.trim() || moduleId;
                  return `<button class="gl-btn small competency-route-btn" data-goto="${moduleId}">${label}</button>`;
                }).join('')
              : '<div class="competency-sidebar-empty">Sigue avanzando para obtener una ruta de repaso personalizada.</div>'}
          </div>
        </div>
      `;
    }

  awardCompetencies(moduleId, result) {
    const config = this.getLearningConfig(moduleId);
    if (!config || !result?.awards) return;

    Object.entries(result.awards).forEach(([competency, amount]) => {
      if (typeof this.competencies[competency] !== 'number') return;
      this.competencies[competency] = Math.min(100, this.competencies[competency] + amount);
    });
    this.updateCompetencyDashboard();
  }

  collectModuleEvidence(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const moduleEl = document.getElementById(normalized);
    if (!moduleEl) return { fields: [], reflection: '', text: '' };

    const fields = [];
    moduleEl.querySelectorAll('textarea, input[type="text"], input[type="search"], input[type="number"], select').forEach((el, index) => {
      const raw = el.tagName === 'SELECT'
        ? el.options[el.selectedIndex]?.text?.trim() || ''
        : (el.value || '').trim();
      if (!raw) return;

      const label = el.getAttribute('aria-label')
        || el.getAttribute('placeholder')
        || el.previousElementSibling?.textContent?.trim()
        || `Campo ${index + 1}`;

      fields.push({ id: el.id || `field-${index + 1}`, label, value: raw });
    });

    const text = fields.map(field => `${field.label}: ${field.value}`).join('\n');
    return {
      fields,
      reflection: fields.map(field => field.value).join(' ').trim(),
      text
    };
  }

  evaluateModuleEvidence(moduleId, evidence) {
    const config = this.getLearningConfig(moduleId);
    if (!config) return { valid: true, score: 100, feedback: [], awards: {} };

    const fieldCount = evidence.fields.length;
    const combinedText = evidence.text.toLowerCase();
    const wordCount = combinedText.split(/\s+/).filter(Boolean).length;
    const verificationSignals = ['valid', 'verific', 'revis', 'fuente', 'pagina', 'contraste', 'prueba', 'comprob'];
    const strategySignals = ['porque', 'decid', 'elegi', 'riesgo', 'accion', 'siguiente paso', 'prior'];

    const feedback = [];
    let score = 0;

    if (fieldCount > 0) {
      score += 30;
    } else {
      feedback.push('Falta evidencia escrita del ejercicio.');
    }

    if (wordCount >= 18) {
      score += 25;
    } else {
      feedback.push('Desarrolla un poco más tu respuesta para que se vea el razonamiento.');
    }

    if (verificationSignals.some(signal => combinedText.includes(signal))) {
      score += 20;
    } else {
      feedback.push('Explica cómo validarías o revisarías el resultado.');
    }

    if (strategySignals.some(signal => combinedText.includes(signal))) {
      score += 15;
    } else {
      feedback.push('Incluye una decisión, criterio o siguiente acción.');
    }

    if (fieldCount >= 3) {
      score += 10;
    } else {
      feedback.push('Aporta más de un campo o aspecto del caso para fortalecer la evidencia.');
    }

    const valid = score >= 45;
    const awards = {};
    if (valid) {
      const multiplier = score >= 85 ? 1 : score >= 65 ? 0.75 : 0.5;
      Object.entries(config.competencies || {}).forEach(([key, base]) => {
        awards[key] = Math.max(1, Math.round(base * multiplier));
      });
    }

    return {
      valid,
      score,
      feedback,
      awards
    };
  }

  persistModuleEvidence(moduleId, evidence, evaluation) {
    const normalized = this.normalizeModuleId(moduleId);
    this.evidenceStore[normalized] = {
      moduleId: normalized,
      submittedAt: new Date().toISOString(),
      payload: evidence,
      score: evaluation.score,
      feedback: evaluation.feedback,
      awards: evaluation.awards
    };
  }

  buildChecklistHtml(items = []) {
    if (!items.length) return '';
    return `
      <div class="learning-checklist">
        ${items.map(item => `<div class="learning-check-item">• ${item}</div>`).join('')}
      </div>
    `;
  }

  renderGuidedExerciseList(items = []) {
    return items.map((item, index) => `
      <div class="guided-exercise-step">
        <span class="guided-exercise-step-num">${index + 1}</span>
        <p>${item}</p>
      </div>
    `).join('');
  }

  renderGuidedExerciseCard(moduleId) {
    const config = this.guidedExerciseMap[this.normalizeModuleId(moduleId)];
    if (!config) return '';

    return `
      <div class="section-card guided-exercise-card animate-in visible" data-guided-module="${this.normalizeModuleId(moduleId)}">
        <div class="guided-exercise-head">
          <div>
            <div class="guided-exercise-kicker">Ejercicio guiado</div>
            <h3>${config.title}</h3>
          </div>
          <div class="guided-exercise-tool">${config.tool}</div>
        </div>
        <p class="guided-exercise-scenario">${config.scenario}</p>
        <div class="guided-exercise-grid">
          <div>
            <div class="guided-exercise-label">Paso a paso</div>
            <div class="guided-exercise-steps">${this.renderGuidedExerciseList(config.steps)}</div>
          </div>
          <div>
            <div class="guided-exercise-label">Qué observar</div>
            <div class="guided-exercise-note-list">
              ${config.observe.map(item => `<div class="guided-exercise-note">• ${item}</div>`).join('')}
            </div>
            <div class="guided-exercise-label guided-exercise-label-spaced">Qué deberías comprender</div>
            <div class="guided-exercise-outcome">${config.outcome}</div>
          </div>
        </div>
      </div>
    `;
  }

  injectGuidedExercises(moduleId) {
      const normalized = this.normalizeModuleId(moduleId);
      const moduleEl = document.getElementById(normalized);
      const guidedHtml = this.renderGuidedExerciseCard(normalized);
      if (!moduleEl || !guidedHtml || moduleEl.querySelector('.guided-exercise-card')) return;

      const grid = this.getOrCreatePedagogyContainer(moduleEl);
      if (grid) grid.insertAdjacentHTML('beforeend', guidedHtml);
    }

  renderToolAidCard(moduleId) {
    const aid = this.toolAidMap[this.normalizeModuleId(moduleId)];
    if (!aid) return '';

    return `
      <div class="section-card tool-aid-card animate-in visible" data-tool-aid-module="${this.normalizeModuleId(moduleId)}">
        <div class="tool-aid-head">
          <div>
            <div class="tool-aid-kicker">Uso recomendado</div>
            <h3>Cómo usar bien esta herramienta</h3>
          </div>
        </div>
        <div class="tool-aid-grid">
          <div>
            <div class="tool-aid-label">Úsala para</div>
            <p>${aid.bestFor}</p>
            <div class="tool-aid-label tool-aid-label-spaced">Evítala cuando</div>
            <p>${aid.avoidWhen}</p>
          </div>
          <div>
            <div class="tool-aid-example weak">
              <div class="tool-aid-example-label">Ejemplo débil</div>
              <code>${aid.weakExample}</code>
            </div>
            <div class="tool-aid-example strong">
              <div class="tool-aid-example-label">Ejemplo fuerte</div>
              <code>${aid.strongExample}</code>
            </div>
          </div>
        </div>
        <div class="tool-aid-label tool-aid-label-spaced">Checklist de verificación</div>
        <div class="tool-aid-checks">
          ${aid.verify.map(item => `<div class="tool-aid-check">• ${item}</div>`).join('')}
        </div>
      </div>
    `;
  }

  injectToolAid(moduleId) {
      const normalized = this.normalizeModuleId(moduleId);
      const moduleEl = document.getElementById(normalized);
      const toolAidHtml = this.renderToolAidCard(normalized);
      if (!moduleEl || !toolAidHtml || moduleEl.querySelector('.tool-aid-card')) return;

      const grid = this.getOrCreatePedagogyContainer(moduleEl);
      if (grid) grid.insertAdjacentHTML('beforeend', toolAidHtml);
    }

  renderCaseStudyCard(moduleId) {
    const study = this.caseStudyMap[this.normalizeModuleId(moduleId)];
    if (!study) return '';

    return `
      <div class="section-card case-study-card animate-in visible" data-case-study-module="${this.normalizeModuleId(moduleId)}">
        <div class="case-study-head">
          <div class="case-study-kicker">Caso resuelto</div>
          <h3>${study.title}</h3>
        </div>
        <div class="case-study-meta">${study.tool}</div>
        <div class="case-study-row">
          <div class="case-study-label">Situación</div>
          <p>${study.context}</p>
        </div>
        <div class="case-study-row">
          <div class="case-study-label">Prompt o instrucción útil</div>
          <code>${study.prompt}</code>
        </div>
        <div class="case-study-row">
          <div class="case-study-label">Qué se aprendió</div>
          <p>${study.result}</p>
        </div>
      </div>
    `;
  }

  injectCaseStudy(moduleId) {
      const normalized = this.normalizeModuleId(moduleId);
      const moduleEl = document.getElementById(normalized);
      const caseHtml = this.renderCaseStudyCard(normalized);
      if (!moduleEl || !caseHtml || moduleEl.querySelector('.case-study-card')) return;

      const grid = this.getOrCreatePedagogyContainer(moduleEl);
      if (grid) grid.insertAdjacentHTML('beforeend', caseHtml);
    }

  getMiniAssessmentQuestions(moduleId) {
    const config = this.getLearningConfig(moduleId);
    const aid = this.toolAidMap[this.normalizeModuleId(moduleId)];
    return [
      `Entiendo cuándo usar esta herramienta para ${config?.title?.toLowerCase() || 'este tema'}.`,
      `Podría repetir este flujo sin copiar el ejemplo fuerte literal${aid ? ' y adaptándolo a mi caso' : ''}.`,
      'Me siento capaz de aplicarlo mañana en un caso real de trabajo.'
    ];
  }

  getAssessmentRecommendation(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const evidenceScore = this.evidenceStore[normalized]?.score ?? null;
    const answers = this.selfAssessments[normalized] || {};
    const values = ['q1', 'q2', 'q3'].map(key => Number.isFinite(answers[key]) ? answers[key] : null).filter(v => v !== null);
    const avg = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;

    if (evidenceScore === null && avg === null) {
      return 'Completa primero el ejercicio guiado y responde la mini autoevaluación para obtener una recomendación de repaso.';
    }

    if ((evidenceScore !== null && evidenceScore < 45) || (avg !== null && avg < 0.9)) {
      return 'Repite el caso resuelto y el ejercicio guiado. Luego vuelve a redactar tu evidencia usando el ejemplo fuerte y añade una verificación explícita.';
    }

    if ((evidenceScore !== null && evidenceScore < 70) || (avg !== null && avg < 1.4)) {
      return 'Vas bien, pero todavía conviene hacer una segunda iteración: mejora la estructura de tu respuesta y agrega una decisión o siguiente paso más claro.';
    }

    return 'Buen nivel para este tema. El siguiente paso útil es aplicar la herramienta en un caso real de tu área y guardar esa evidencia como plantilla reusable.';
  }

  getSequentialPrerequisite(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const index = this.moduleSequence.indexOf(normalized);
    return index > 0 ? this.moduleSequence[index - 1] : null;
  }

  isModuleReadyForProgression(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const evidenceScore = this.evidenceStore[normalized]?.score ?? 0;
    const quizScore = this.quizScores[normalized]?.score ?? 0;
    return this.completedModules.has(normalized) && evidenceScore >= 45 && quizScore >= 50;
  }

  canAccessModule(moduleId) {
    return true;
  }

  needsReadinessWarning(moduleId) {
    return false;
  }

  renderModuleQuiz(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const questions = this.moduleQuizMap[normalized];
    if (!questions?.length) return '';
    const score = this.quizScores[normalized]?.score;

    return `
      <div class="section-card module-quiz-card animate-in visible" data-module-quiz="${normalized}">
        <div class="module-quiz-head">
          <div class="module-quiz-kicker">Quiz rápido</div>
          <h3>Comprobación inmediata de comprensión</h3>
        </div>
        <div class="module-quiz-grid">
          ${questions.map((question, index) => `
            <div class="module-quiz-question" data-quiz-question="${normalized}-${index}">
              <p>${index + 1}. ${question.q}</p>
              <div class="module-quiz-options">
                ${question.options.map((option, optionIndex) => `
                  <button type="button" class="module-quiz-option" data-module="${normalized}" data-question-index="${index}" data-option-index="${optionIndex}">${option}</button>
                `).join('')}
              </div>
              <div class="module-quiz-feedback" id="module-quiz-feedback-${normalized}-${index}"></div>
            </div>
          `).join('')}
        </div>
        <div class="module-quiz-summary" id="module-quiz-summary-${normalized}">
          ${typeof score === 'number' ? `Puntaje más reciente: ${score}/100.` : 'Responde las dos preguntas para confirmar comprensión antes de avanzar.'}
        </div>
      </div>
    `;
  }

  injectModuleQuiz(moduleId) {
      const normalized = this.normalizeModuleId(moduleId);
      const moduleEl = document.getElementById(normalized);
      const quizHtml = this.renderModuleQuiz(normalized);
      if (!moduleEl || !quizHtml || moduleEl.querySelector('.module-quiz-card')) return;

      const grid = this.getOrCreatePedagogyContainer(moduleEl);
      if (grid) grid.insertAdjacentHTML('beforeend', quizHtml);
    }

  setupModuleQuiz() {
    if (this._moduleQuizBound) return;
    this._moduleQuizBound = true;

    document.body.addEventListener('click', (event) => {
      const option = event.target.closest('.module-quiz-option');
      if (!option) return;

      const moduleId = this.normalizeModuleId(option.dataset.module);
      const qIndex = parseInt(option.dataset.questionIndex, 10);
      const oIndex = parseInt(option.dataset.optionIndex, 10);
      const questions = this.moduleQuizMap[moduleId];
      const question = questions?.[qIndex];
      if (!question || Number.isNaN(oIndex)) return;

      const wrap = option.closest('.module-quiz-question');
      wrap?.querySelectorAll('.module-quiz-option').forEach(btn => btn.disabled = true);

      const isCorrect = oIndex === question.answer;
      option.classList.add(isCorrect ? 'correct' : 'wrong');
      if (!isCorrect) {
        wrap?.querySelector(`.module-quiz-option[data-option-index="${question.answer}"]`)?.classList.add('correct');
      }

      const feedback = document.getElementById(`module-quiz-feedback-${moduleId}-${qIndex}`);
      if (feedback) {
        feedback.innerHTML = `${isCorrect ? '✅' : '⚠️'} ${question.why}`;
        feedback.classList.add('visible');
      }

      const answers = this.quizScores[moduleId]?.answers || {};
      answers[`q${qIndex + 1}`] = isCorrect ? 1 : 0;
      const total = questions.length;
      const correct = Object.values(answers).reduce((sum, value) => sum + value, 0);
      const score = Math.round((correct / total) * 100);
      this.quizScores[moduleId] = { answers, score };

      if (Object.keys(answers).length === total) {
        const summary = document.getElementById(`module-quiz-summary-${moduleId}`);
        if (summary) {
          summary.textContent = score >= 50
            ? `Quiz aprobado: ${score}/100. Ya tienes la base conceptual para avanzar.`
            : `Quiz por reforzar: ${score}/100. Conviene revisar el caso resuelto y repetir el ejemplo fuerte antes de avanzar.`;
        }
        window.dispatchEvent(new CustomEvent('progressUpdated'));
      }

      this.saveProgress();
    });
  }

  renderMiniAssessment(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const answers = this.selfAssessments[normalized] || {};
    const questions = this.getMiniAssessmentQuestions(normalized);
    const labels = ['No todavía', 'Casi', 'Sí'];

    return `
      <div class="section-card mini-assessment-card animate-in visible" data-mini-assessment-module="${normalized}">
        <div class="mini-assessment-head">
          <div class="mini-assessment-kicker">Mini autoevaluación</div>
          <h3>Comprensión rápida del módulo</h3>
        </div>
        <div class="mini-assessment-questions">
          ${questions.map((question, index) => {
            const key = `q${index + 1}`;
            const selected = Number.isFinite(answers[key]) ? answers[key] : -1;
            return `
              <div class="mini-assessment-question">
                <p>${index + 1}. ${question}</p>
                <div class="mini-assessment-options">
                  ${labels.map((label, value) => `
                    <button
                      type="button"
                      class="mini-assessment-option ${selected === value ? 'active' : ''}"
                      data-module="${normalized}"
                      data-question="${key}"
                      data-value="${value}"
                    >${label}</button>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="mini-assessment-recommendation" id="mini-assessment-reco-${normalized}">
          ${this.getAssessmentRecommendation(normalized)}
        </div>
      </div>
    `;
  }

  injectMiniAssessment(moduleId) {
      const normalized = this.normalizeModuleId(moduleId);
      const moduleEl = document.getElementById(normalized);
      const assessmentHtml = this.renderMiniAssessment(normalized);
      if (!moduleEl || !assessmentHtml || moduleEl.querySelector('.mini-assessment-card')) return;

      const grid = this.getOrCreatePedagogyContainer(moduleEl);
      if (grid) grid.insertAdjacentHTML('beforeend', assessmentHtml);
    }

  getOrCreatePedagogyContainer(moduleEl) {
    let container = moduleEl.querySelector('.pedagogy-zone');
    if (!container) {
      container = document.createElement('div');
      container.className = 'pedagogy-zone animate-in';
      container.innerHTML = `
        <div class="pedagogy-zone-header">
          <h3><span class="icon">🏋️</span> Área de Práctica y Evaluación</h3>
          <p>Aplica la teoría que aprendiste arriba en estos retos interactivos.</p>
        </div>
        <div class="pedagogy-grid"></div>
      `;
      const nav = moduleEl.querySelector('.module-nav');
      if (nav) {
        nav.insertAdjacentElement('beforebegin', container);
      } else {
        moduleEl.appendChild(container);
      }
    }
    return container.querySelector('.pedagogy-grid');
  }

  renderPedagogicalLayers(moduleId) {
    this.renderLearningSignals(moduleId);
    this.injectGuidedExercises(moduleId);
    this.injectToolAid(moduleId);
    this.injectCaseStudy(moduleId);
    this.injectMiniAssessment(moduleId);
  }

  setupMiniAssessment() {
    if (this._miniAssessmentBound) return;
    this._miniAssessmentBound = true;

    document.body.addEventListener('click', (event) => {
      const option = event.target.closest('.mini-assessment-option');
      if (!option) return;

      const moduleId = this.normalizeModuleId(option.dataset.module);
      const question = option.dataset.question;
      const value = parseInt(option.dataset.value, 10);
      if (!moduleId || !question || Number.isNaN(value)) return;

      this.selfAssessments[moduleId] = {
        ...(this.selfAssessments[moduleId] || {}),
        [question]: value
      };

      const group = option.parentElement;
      group?.querySelectorAll('.mini-assessment-option').forEach(btn => btn.classList.remove('active'));
      option.classList.add('active');
      this.refreshMiniAssessment(moduleId);
      this.saveProgress();
    });
  }

  refreshMiniAssessment(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const box = document.getElementById(`mini-assessment-reco-${normalized}`);
    if (box) box.textContent = this.getAssessmentRecommendation(normalized);
  }

  repairLegacyCompletionButtons() {
    document.querySelectorAll('.complete-module-btn').forEach((btn) => {
      if (!btn.dataset.module) {
        const moduleEl = btn.closest('[id^="module-"]');
        if (moduleEl) {
          btn.dataset.module = this.normalizeModuleId(moduleEl.id);
        }
      }

      if (!btn.dataset.xp) {
        btn.dataset.xp = `${this.XP_PER_MODULE}`;
      }

      if (!btn.dataset.module) return;

      const inlineHandler = btn.getAttribute('onclick') || '';
      if (!btn.dataset.legacyFixed && !btn.dataset.module && inlineHandler) return;
      if (!btn.dataset.legacyFixed && inlineHandler.includes('addXP') && !inlineHandler.includes('m3FinalizeModule') && !inlineHandler.includes('finalizeM4Mission')) {
        btn.removeAttribute('onclick');
        btn.dataset.legacyFixed = '1';
      }
    });
  }

  renderLearningSignals(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const config = this.getLearningConfig(normalized);
    const moduleEl = document.getElementById(normalized);
    if (!config || !moduleEl || moduleEl.querySelector('.learning-brief-card')) return;

    const anchor = moduleEl.querySelector('.module-header') || moduleEl.firstElementChild;
    if (!anchor) return;

    const brief = document.createElement('div');
    brief.className = 'section-card learning-brief-card animate-in visible';
    brief.innerHTML = `
      <div class="learning-brief-head">
        <span class="learning-brief-badge">Ruta formativa</span>
        <span class="learning-brief-score">${this.evidenceStore[normalized]?.score ? `${this.evidenceStore[normalized].score}/100` : 'Sin evidencia'}</span>
      </div>
      <div class="learning-brief-grid">
        <div>
          <div class="learning-brief-label">Objetivo</div>
          <p>${config.objective}</p>
        </div>
        <div>
          <div class="learning-brief-label">Error típico</div>
          <p>${config.pitfall}</p>
        </div>
        <div>
          <div class="learning-brief-label">Evidencia esperada</div>
          <p>${config.evidencePrompt}</p>
        </div>
      </div>
      ${this.buildChecklistHtml(config.checklist)}
      <div class="learning-feedback-box" id="learning-feedback-${normalized}">
        ${this.renderEvidenceFeedback(normalized)}
      </div>
    `;
    anchor.insertAdjacentElement('afterend', brief);
  }

  renderEvidenceFeedback(moduleId) {
      const evidence = this.evidenceStore[moduleId];
      const adaptive = this.getAdaptiveGuidance(moduleId);
      if (!evidence) {
        return `
          <div class="learning-feedback-placeholder">Aún no hay evidencia guardada para este módulo.</div>
          <div class="learning-adaptive-message info">${adaptive}</div>
        `;
      }

    const feedbackLines = evidence.feedback?.length
      ? evidence.feedback.map(item => `<div class="learning-feedback-item">• ${item}</div>`).join('')
      : '<div class="learning-feedback-item">• Evidencia sólida. Puedes avanzar.</div>';

      return `
        <div class="learning-feedback-header">
          <span>Última evaluación</span>
          <strong>${evidence.score}/100</strong>
        </div>
        ${feedbackLines}
        <div class="learning-adaptive-message ${evidence.score >= 70 ? 'success' : evidence.score >= 45 ? 'warning' : 'danger'}">${adaptive}</div>
      `;
    }

  refreshLearningFeedback(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const box = document.getElementById(`learning-feedback-${normalized}`);
    if (box) box.innerHTML = this.renderEvidenceFeedback(normalized);
    this.refreshMiniAssessment(normalized);
  }

  getCompetencyReport() {
    const ranked = Object.entries(this.competencies).sort((a, b) => b[1] - a[1]);
    const strongest = ranked.slice(0, 3).map(([key, value]) => ({
      key,
      value,
      label: this.competencyMeta[key]?.label || key
    }));
    const weakest = ranked.slice(-3).reverse().map(([key, value]) => ({
      key,
      value,
      label: this.competencyMeta[key]?.label || key
    }));

      const suggestedReview = weakest.map(item => {
        return Object.entries(this.learningConfig).find(([, config]) => Object.keys(config.competencies || {}).includes(item.key))?.[0];
      }).filter(Boolean).slice(0, 3);

      const targetedReview = this.moduleSequence
        .map(moduleId => {
          const evidenceScore = this.evidenceStore[moduleId]?.score ?? 0;
          const quizScore = this.quizScores[moduleId]?.score ?? 0;
          const self = this.selfAssessments[moduleId] || {};
          const selfValues = Object.values(self).filter(value => Number.isFinite(value));
          const selfAvg = selfValues.length ? selfValues.reduce((sum, value) => sum + value, 0) / selfValues.length : 0;
          const gapScore = (100 - evidenceScore) + (100 - quizScore) + ((2 - selfAvg) * 20);
          return { moduleId, evidenceScore, quizScore, selfAvg, gapScore };
        })
        .filter(item => item.evidenceScore < 70 || item.quizScore < 50 || item.selfAvg < 1.4)
        .sort((a, b) => b.gapScore - a.gapScore)
        .slice(0, 4);

      return { strongest, weakest, suggestedReview, targetedReview };
    }

  getSuggestedRoute() {
    const report = this.getCompetencyReport();
    return report.targetedReview?.map(item => item.moduleId) || [];
  }

  getAdaptiveGuidance(moduleId) {
    const normalized = this.normalizeModuleId(moduleId);
    const evidenceScore = this.evidenceStore[normalized]?.score ?? null;
    const quizScore = this.quizScores[normalized]?.score ?? null;
    const self = this.selfAssessments[normalized] || {};
    const selfValues = Object.values(self).filter(value => Number.isFinite(value));
    const selfAvg = selfValues.length ? selfValues.reduce((sum, value) => sum + value, 0) / selfValues.length : null;

    if (evidenceScore === null && quizScore === null && selfAvg === null) {
      return 'Empieza por el ejercicio guiado, completa la misión y responde el quiz rápido para construir una base real en este tema.';
    }

    if ((evidenceScore !== null && evidenceScore < 45) || (quizScore !== null && quizScore < 50)) {
      return 'Todavía hay una brecha importante: repite el caso resuelto, usa el ejemplo fuerte y deja una evidencia más explícita antes de avanzar.';
    }

    if ((evidenceScore !== null && evidenceScore < 70) || (selfAvg !== null && selfAvg < 1.4)) {
      return 'La base ya existe, pero conviene hacer una segunda iteración: mejora claridad, añade verificación y vuelve a comparar tu salida con el caso resuelto.';
    }

    return 'Buen dominio para este módulo. El siguiente paso útil es aplicar la herramienta en un caso real de tu trabajo y guardar esa versión como plantilla reusable.';
  }

  renderFinalCompetencyReport() {
    const report = this.getCompetencyReport();
    const strongestEl = document.getElementById('m20-strongest');
    const weakestEl = document.getElementById('m20-weakest');
    const reviewEl = document.getElementById('m20-review');
    const scoreEl = document.getElementById('m20-user-score');
    const modulesEl = document.getElementById('final-modules-done');
    const xpEl = document.getElementById('final-total-xp');

    if (xpEl) xpEl.textContent = this.xp;
    if (scoreEl) scoreEl.textContent = `${this.xp} XP`;
    if (modulesEl) modulesEl.textContent = `${this.completedModules.size}/21`;

    if (strongestEl) {
      strongestEl.innerHTML = report.strongest.map(item => `
        <div class="m20-skill-chip strong">
          <span>${item.label}</span>
          <strong>${item.value}%</strong>
        </div>
      `).join('');
    }

    if (weakestEl) {
      weakestEl.innerHTML = report.weakest.map(item => `
        <div class="m20-skill-chip weak">
          <span>${item.label}</span>
          <strong>${item.value}%</strong>
        </div>
      `).join('');
    }

    if (reviewEl) {
        reviewEl.innerHTML = report.targetedReview.length
          ? report.targetedReview.map(item => {
              const nav = document.querySelector(`.nav-item[data-module="${item.moduleId}"] .nav-label`);
              const label = nav?.textContent?.trim() || item.moduleId;
              return `
                <div class="m20-review-module">
                  <div class="m20-review-title">${label}</div>
                  <div class="m20-review-metrics">Evidencia ${item.evidenceScore}/100 · Quiz ${item.quizScore}/100</div>
                  <button class="gl-btn small" data-goto="${item.moduleId}">Reforzar módulo</button>
                </div>
              `;
            }).join('')
          : '<div class="learning-feedback-placeholder">Todavía no hay suficiente evidencia para sugerir repaso específico.</div>';
      }
    }

  repairSidebar() {
    console.log('🛠️ Repairing Sidebar groups...');
    document.querySelectorAll('.nav-group').forEach(group => {
      group.style.display = 'block';
    });
    document.querySelectorAll('.nav-item').forEach(item => {
      item.style.display = 'flex';
      // If it's locked, keep opacity but ensure it's loaded
      if (item.classList.contains('locked')) {
          item.style.opacity = '0.5';
      }
    });
  }

  setupGamesObservers() {
    const observer = new MutationObserver(() => {
      // Prompt Battle in Module 2
      const mod2 = document.getElementById('module-2');
      if (mod2 && mod2.classList.contains('active') && !document.getElementById('prompt-battle-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'prompt-battle-wrapper';
        const container = mod2.querySelector('.section-card:last-of-type') || mod2.querySelector('.section-card') || mod2;
        if (container) {
            container.appendChild(wrapper);
            if (window.guiaIAGames && typeof window.guiaIAGames.initPromptBattle === 'function') {
                window.guiaIAGames.initPromptBattle('prompt-battle-wrapper');
            }
        }
      }

      // IA Detective in Module 8 is now integrated directly in the module-8 template logic
      // to avoid race conditions and double-initialization.
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  }

  setupProgressiveLocking() {
      // Re-run whenever progress changes
      window.addEventListener('progressUpdated', () => {
          this.updateNavLockState();
      });
      this.updateNavLockState();
  }
  updateNavLockState() {
          const navItems = document.querySelectorAll('.nav-item');
          navItems.forEach(item => {
              const moduleId = item.dataset.module;
              const isCompleted = this.completedModules.has(moduleId);
              const canAccess = this.canAccessModule(moduleId);
              const needsReview = this.needsReadinessWarning(moduleId);
              
              item.classList.toggle('uncompleted-hint', !isCompleted);
              item.classList.toggle('completed', isCompleted);
              item.classList.toggle('locked', !canAccess);
              item.classList.toggle('needs-review', canAccess && needsReview);
              item.setAttribute('aria-disabled', String(!canAccess));
              item.title = !canAccess
                ? 'Completa los prerequisitos del mapa para desbloquear este módulo.'
                : (needsReview ? 'Puedes entrar, pero conviene reforzar el módulo anterior antes de seguir.' : '');
          });
          this.enforceSystemicLocking();
      }

    enforceSystemicLocking() {
        // Dynamic locking of modules based on progression
        const modules = document.querySelectorAll('.module');
        modules.forEach(mod => {
              const moduleId = this.normalizeModuleId(mod.id);
              const prereqIds = mod.dataset.prereqs ? mod.dataset.prereqs.split(',') : [];
              const prereqLocked = prereqIds.length > 0 && !prereqIds.every(id => this.completedModules.has(id.trim()));
              const isLocked = prereqLocked;
            
            if (isLocked) {
                mod.classList.add('module-locked');
              // Ensure overlay exists
              if (!mod.querySelector('.module-lock-overlay')) {
                  const overlay = document.createElement('div');
                  overlay.className = 'module-lock-overlay';
                  overlay.innerHTML = `
                          <div class="lock-icon">🔒</div>
                          <div class="lock-message">MÓDULO SOBERANO PROTEGIDO</div>
                        <div class="lock-hint">Completa los prerequisitos del mapa para desbloquear este acceso.</div>
                        <button class="gl-btn gl-btn-primary gl-btn-lux small-btn" onclick="window.app.navigateTo('welcome')">Revisar Progreso</button>
                    `;
                  mod.appendChild(overlay);
              }
          } else {
              mod.classList.remove('module-locked');
              const overlay = mod.querySelector('.module-lock-overlay');
              if (overlay) overlay.remove();
          }
      });
  }

  async loadAllModules() {
    const loadPromises = Object.keys(this.modulesRegistry).map(id => this.loadModuleDynamic(id));
    const results = await Promise.allSettled(loadPromises);
    
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const moduleId = Object.keys(this.modulesRegistry)[index];
        console.warn(`Failed to load module ${moduleId}:`, result.reason);
      }
    });
    console.log('Dynamic modules loading process finished.');
  }

  // ── Scroll Progress ──
  setupScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }
  // ── Scroll Top Button ──
  setupScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  // ── Gamification ──
  addXP(amount) {
    this.xp += amount;
    this.showToast(`+${amount} XP ganado ✨`, 'success');
    this.checkLevelUp();
    this.updateXPDashboard();
    this.updateCompetencyDashboard();
    this.saveProgress();
    this.syncLeaderboard();
  }

  async syncLeaderboard() {
    const name = localStorage.getItem('guia-ia-username') || this.generateSovereignName();
    const data = {
      name: name,
      xp: this.xp,
      title: document.getElementById('levelName')?.textContent || 'Básico',
      avatar: this.xp > 5000 ? '🐉' : (this.xp > 1000 ? '⚡' : '💡'),
      entity: this.specialization === 'institucional' ? 'Regional SENA' : 'Corporativo'
    };

    try {
      const API_URL = window.location.port === '5500' ? `http://${window.location.hostname}:8080` : '';
      const resp = await fetch(`${API_URL}/api/leaderboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (resp.ok) {
        const result = await resp.json();
        if (result.name && !localStorage.getItem('guia-ia-username')) {
            localStorage.setItem('guia-ia-username', result.name);
            const nameInput = document.getElementById('userNameProfile');
            if (nameInput) nameInput.value = result.name;
        }
        console.log('🧬 Sovereign Sync Complete');
      }
    } catch (e) {
      console.warn('Offline Mode: Sync deferred');
    }
  }

  generateSovereignName() {
    const prefixes = ["Estratega", "Operador", "Auditor", "Visionario", "Analista"];
    const roles = ["Soberano", "de Élite", "Antigravity", "Céntico", "Arcano"];
    const entities = ["Nodo Central", "Regional SENA", "Misión IA", "Alfa", "Beta"];
    
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const r = roles[Math.floor(Math.random() * roles.length)];
    const e = entities[Math.floor(Math.random() * entities.length)];
    
    return `${p} ${r} (${e})`;
  }

  checkLevelUp() {
    const nextLevelXP = this.level * 500;
    if (this.xp >= nextLevelXP) {
      this.level++;
      if (this.gameEngine) this.gameEngine.spawnLevelUpEffect();
      this.triggerLevelUpEffect();
    }
  }

  triggerLevelUpEffect() {
    const badge = document.getElementById('levelName');
    if (badge) {
      badge.classList.add('level-up-anim');
      setTimeout(() => badge.classList.remove('level-up-anim'), 1000);
    }
    // Optional: play sound or show confetti (simulated with CSS pulse)
  }

  updateXPDashboard() {
    const xpFill = document.getElementById('xpBarFill');
    const xpText = document.getElementById('xpText');
    const levelNum = document.getElementById('levelNum');
    const levelName = document.getElementById('levelName');

    const nextLevelXP = this.level * 500;
    const prevLevelXP = (this.level - 1) * 500;
    const progress = ((this.xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;

    if (xpFill) xpFill.style.width = Math.min(100, progress) + '%';
    if (xpText) xpText.textContent = `${this.xp} / ${nextLevelXP} XP`;
    if (levelNum) levelNum.textContent = `Nivel ${this.level}`;

    if (levelName) {
      levelName.className = 'xp-level-badge'; // Reset
      if (this.level < 3) {
        levelName.textContent = 'Básico';
        levelName.classList.add('level-basic');
      } else if (this.level < 6) {
        levelName.textContent = 'Intermedio';
        levelName.classList.add('level-inter');
      } else if (this.level < 10) {
        levelName.textContent = 'Avanzado';
        levelName.classList.add('level-adv');
      } else {
        levelName.textContent = 'Experto';
        levelName.classList.add('level-exp');
      }

      /* 🎖️ Removed to save space as requested
      const medalContainer = document.getElementById('medalContainer') || this.createMedalContainer();
      if (medalContainer) {
          const hasAlcaldiaFocus = document.body.innerText.includes('Alcaldía') && this.completedModules.size > 10;
          const hasGeneralFocus = this.completedModules.size > 15;
          const currentProfile = localStorage.getItem('guia-ia-specialization') || 'cotidiano';
          
          if (hasAlcaldiaFocus && !document.getElementById('medal-institucional')) {
              this.addMedal(medalContainer, '🏛️', 'Estratega Institucional', 'medal-institucional');
          }
          if (hasGeneralFocus && !document.getElementById('medal-empresarial')) {
              this.addMedal(medalContainer, '💼', 'Líder Empresarial', 'medal-empresarial');
          }
      }
      */
    }
  }

  createMedalContainer() {
      const parent = document.querySelector('.xp-dashboard');
      if (!parent) return null;
      const container = document.createElement('div');
      container.id = 'medalContainer';
      container.className = 'medal-container-special';
      container.style.cssText = 'display: flex; gap: 5px; margin-top: 10px; flex-wrap: wrap;';
      parent.appendChild(container);
      return container;
  }

  addMedal(container, emoji, title, id) {
      const medal = document.createElement('div');
      medal.id = id;
      medal.className = 'special-medal animate-in visible';
      medal.title = title;
      medal.innerHTML = `<span style="font-size: 1.2rem;">${emoji}</span>`;
      medal.style.cssText = `
          background: rgba(var(--primary-rgb), 0.2);
          border: 1px solid var(--primary);
          padding: 5px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse-gold 2s infinite;
      `;
      container.appendChild(medal);
      this.showToast(`¡Medalla Ganada: ${title}!`, 'success');
  }

  // ── Navigation ──
  setupNavigation() {
        document.body.addEventListener('click', (e) => {
          const item = e.target.closest('.nav-item[data-module]');
          if (!item) return;
          e.preventDefault();
          const target = item.dataset.module;
          if (target === 'constitution') { // Allow direct navigation to constitution
            this.navigateTo(target);
            return;
          }
          if (!this.canAccessModule(target)) {
            this.showToast('Completa primero los prerequisitos del mapa para desbloquear este módulo.', 'warning');
            return;
          }
          if (this.needsReadinessWarning(target)) {
            this.showToast('Puedes entrar, pero conviene reforzar el módulo anterior antes de seguir.', 'info');
          }
          if (target) this.navigateTo(target);
        });

    // Logo / Brand navigation
    const brand = document.querySelector('.header-brand');
    if (brand) {
        brand.style.cursor = 'pointer';
        brand.addEventListener('click', () => this.navigateTo('welcome'));
    }

    // Navigation buttons (prev/next)
        document.body.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-goto]');
          if (btn && !btn.classList.contains('nav-item')) { // Avoid double triggering for sidebar items
            if (!this.canAccessModule(btn.dataset.goto)) {
              this.showToast('Aún no puedes avanzar. Completa primero los prerequisitos del mapa.', 'warning');
              return;
            }
            if (this.needsReadinessWarning(btn.dataset.goto)) {
              this.showToast('Avanzas con advertencia: el módulo anterior aún necesita refuerzo.', 'info');
            }
            this.navigateTo(btn.dataset.goto);
          }
        });

    // Hero start button
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        const target = startBtn.dataset.targetModule || this.getRecommendedModuleId();
        this.navigateTo(target);
      });
    }
  }

  setupQuickActions() {
    const viewMapBtn = document.getElementById('viewMapBtn');

    if (viewMapBtn) {
      viewMapBtn.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          document.querySelector('.sidebar')?.classList.add('open');
          document.querySelector('.sidebar-overlay')?.classList.add('show');
        }
        this.showToast('Mapa completo disponible. Navega por los diferentes niveles.', 'info');
      });
    }
  }


  navigateTo(moduleId) {
    moduleId = this.normalizeModuleId(moduleId);
    // Navigation restricted only for certificate if not ready, but allowed if user wants to see it
    if (moduleId === 'certificate' && this.completedModules.size < 20) {
      console.log('Certificado aún no disponible, pero mostramos el avance.');
    }

    // Show advancement message if entering an uncompleted module
    if (moduleId !== 'welcome' && moduleId !== 'certificate' && !this.completedModules.has(moduleId)) {
        this.showToast(`Explorando: ${moduleId}. ¡Completa el reto para ganar XP!`, 'info');
    }

    // Hide all modules
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));

    // Show target module
    const target = document.getElementById(moduleId);
    if (target) {
      target.classList.add('active');
      this.currentModule = moduleId;


      // Update nav active state
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.module === moduleId);
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Close mobile sidebar
      this.closeMobileSidebar();

      // Trigger scroll animations
      setTimeout(() => this.triggerAnimations(), 100);

      const finalizeModuleRendering = () => {
        try {
          this.repairLegacyCompletionButtons();
          this.renderPedagogicalLayers(moduleId);
          this.injectModuleQuiz(moduleId);
          
          if (moduleId === 'constitution') {
              this.renderConstitutionInModule();
          }
          
          if (moduleId === 'module-20') {
              setTimeout(() => {
              try {
                if (typeof window.renderSovereignRanking === 'function') window.renderSovereignRanking();
                if (typeof window.renderCompetencyReport === 'function') window.renderCompetencyReport();
              } catch (reportError) {
                console.error('Error rendering module 20 reports:', reportError);
              }
            }, 100);
          }
          
          // Ensure new content becomes visible
          setTimeout(() => this.triggerAnimations(), 50);

        } catch (uiError) {
          console.error('Navigation enrichment failed:', uiError);
        }

        // Special handling for certificate
        if (moduleId === 'certificate') {
          this.generateCertificate();
        }

        // Dispatch event for other components to react
        window.dispatchEvent(new CustomEvent('moduleNavigated', { detail: { module: moduleId } }));
        
        this.saveProgress();
      };

      // New: Initialize module if it has an init method
      let moduleInstance = this.moduleInstances[moduleId] || window.GuiaModules?.[moduleId];
      
      if (!moduleInstance && this.modulesRegistry[moduleId]) {
        this.showToast(`Sincronizando módulo: ${moduleId}...`, 'info');
        
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'module-loading-placeholder animate-in';
        loadingOverlay.innerHTML = `
          <div class="glass-card-ultra" style="padding:40px; text-align:center;">
            <div class="spinner" style="margin-bottom:15px; border:3px solid rgba(255,255,255,0.1); border-top:3px solid var(--primary); border-radius:50%; width:30px; height:30px; animation:spin 1s linear infinite; margin:0 auto 15px;"></div>
            <p style="color:var(--text-secondary);">Cargando protocolos de <b>${moduleId}</b>...</p>
          </div>`;
        target.appendChild(loadingOverlay);

        this.loadModuleDynamic(moduleId).then(instance => {
          loadingOverlay.remove();
          if (instance && typeof instance.init === 'function') {
            instance.init(this);
          } else {
            target.innerHTML = `
              <div class="glass-card-ultra" style="padding:40px; text-align:center; border:1px solid rgba(239,68,68,0.3);">
                <h3 style="color:var(--danger); margin-bottom:15px;">⚠️ Fallo de Conexión</h3>
                <p>El módulo <b>${moduleId}</b> no pudo ser verificado. Verifica tu red.</p>
                <button class="gl-btn gl-btn-primary" onclick="location.reload()" style="margin-top:20px;">Reintentar Sincronización</button>
              </div>`;
          }
          finalizeModuleRendering();
        }).catch(err => {
          loadingOverlay.remove();
          console.error(`[App] Error loading ${moduleId}:`, err);
          this.showToast('Falla crítica en carga de módulo', 'error');
          finalizeModuleRendering();
        });
      } else {
        if (moduleInstance && typeof moduleInstance.init === 'function') {
          try {
            moduleInstance.init(this);
          } catch (moduleInitError) {
            console.error(`Error initializing ${moduleId}:`, moduleInitError);
          }
        }
        finalizeModuleRendering();
      }
    }
  }

  async fetchConstitution() {
    try {
      const resp = await fetch('GEMINI.md?v=' + Date.now());
      if (resp.ok) {
        this.constitution = await resp.text();
        console.log('📜 Constitution Sync [SUCCESS]');
      }
    } catch (e) {
      console.error('Constitution Sync [FAILED]:', e);
    }
  }

  async loadModuleDynamic(moduleId) {
    const path = this.modulesRegistry[moduleId];
    if (!path) return null;

    return new Promise((resolve, reject) => {
      // Check if already in window
      if (window.GuiaModules?.[moduleId]) {
        this.moduleInstances[moduleId] = window.GuiaModules[moduleId];
        return resolve(window.GuiaModules[moduleId]);
      }

      const script = document.createElement('script');
      script.src = `src/${path}?v=${Date.now()}`;
      script.async = true;
      
      script.onload = () => {
        const instance = window.GuiaModules?.[moduleId];
        if (instance) {
          this.moduleInstances[moduleId] = instance;
          resolve(instance);
        } else {
          console.warn(`[App] Script loaded but GuiaModules['${moduleId}'] is missing.`);
          resolve(null);
        }
      };

      script.onerror = (err) => {
        console.error(`[App] Failed to load script: ${script.src}`, err);
        reject(err);
      };

      document.head.appendChild(script);
    });
  }

  // ── Prompt Sandbox ──
  setupSandbox() {
    document.body.addEventListener('click', (e) => {
      const testBtn = e.target.closest('#testPromptBtn');
      const clearBtn = e.target.closest('#clearSandboxBtn');
      const applyBtn = e.target.closest('#applyOptimization');

      if (testBtn) {
        e.preventDefault();
        const input = document.getElementById('sandboxInput');
        const output = document.getElementById('sandboxOutput');
        const qualityBar = document.getElementById('promptQualityBar');
        const qualityValue = document.getElementById('promptQualityValue');
        
        if (!input || !output) return;

        const originalText = input.value.trim();
        if (!originalText) {
          window.showToast('Por favor escribe algo primero', 'warning');
          return;
        }

        // Prevent multiple simultaneous analysis
        if (testBtn.disabled) return;
        console.log('--- STARTING PROMPT ANALYSIS ---');
        testBtn.disabled = true;
        testBtn.classList.add('loading');

        // 🧠 Thinking Phase
        output.innerHTML = `
          <div class="thinking-process-premium animate-in visible">
            <div class="thinking-header">
              <span class="pulse-dot"></span>
              <span class="thinking-title">ANTIGRAVITY THOUGHTS</span>
            </div>
            <div class="thinking-steps">
              <div id="think-step-1" class="think-step-item active-step">> [SYNC] Analizando vectores semánticos...</div>
              <div id="think-step-2" class="think-step-item">> [CORE] Evaluando estructura CREA...</div>
              <div id="think-step-3" class="think-step-item">> [RISK] Escaneando ambigüedades...</div>
              <div id="think-step-4" class="think-step-item">> [SYNTH] Generando diagnóstico...</div>
            </div>
          </div>
        `;

        if (qualityBar) qualityBar.style.width = '0%';
        if (qualityValue) qualityValue.textContent = '0%';

        const timeline = [
            { id: 'think-step-2', delay: 300 },
            { id: 'think-step-3', delay: 600 },
            { id: 'think-step-4', delay: 900 }
        ];

        timeline.forEach(step => {
            setTimeout(() => {
                const el = document.getElementById(step.id);
                if (el) {
                    el.classList.add('active-step');
                    const stepNum = parseInt(step.id.split('-').pop());
                    const prev = document.getElementById('think-step-' + (stepNum - 1));
                    if (prev) prev.classList.add('completed-step');
                }
            }, step.delay);
        });

        setTimeout(() => {
          // IMPORTANT: Re-fetch element inside timeout to avoid writing to detached DOM if re-rendered
          const currentOutput = document.getElementById('sandboxOutput');
          const currentQualityBar = document.getElementById('promptQualityBar');
          const currentQualityValue = document.getElementById('promptQualityValue');
          
          if (testBtn) {
            testBtn.disabled = false;
            testBtn.classList.remove('loading');
          }

          if (!currentOutput) {
            console.error('CRITICAL: sandboxOutput not found for rendering results');
            return;
          }

          try {
            const result = this.analyzePromptSovereign(originalText);
            console.log('--- ANALYSIS COMPLETE ---', result);

            // Display Result with Premium Animation
            currentOutput.innerHTML = `
              <div class="analysis-result-premium animate-in visible">
                <div class="result-header">
                  <span class="status-badge ${result.score < 60 ? 'status-low' : (result.score < 100 ? 'status-mid' : 'status-high')}">
                    ${result.score < 60 ? 'Básico' : (result.score < 100 ? 'Intermedio' : 'Maestría')}
                  </span>
                  <h3>${result.score < 100 ? 'Diagnóstico del Copiloto' : '¡Perfecto Alquimista!'}</h3>
                </div>
                
                ${result.score < 100 ? `
                  <ul class="feedback-list">
                    ${result.feedback.map(f => `<li><span class="f-icon">⚠️</span> ${f}</li>`).join('')}
                  </ul>
                ` : `
                  <p class="success-msg">Tu prompt cumple con todos los vectores de la metodología CREA.</p>
                  <div class="xp-bonus-tag animate-bounce">+100 XP</div>
                `}

                <div class="optimized-prompt-box">
                  <div class="box-label">PROPUESTA DE OPTIMIZACIÓN:</div>
                  <pre id="optimizedText">${result.optimized}</pre>
                </div>
                
                <button class="gl-btn gl-btn-primary gl-btn-lux small-btn" id="applyOptimization" type="button" data-optimization="${result.optimized.replace(/"/g, '&quot;')}">
                  🪄 Inyectar Mejora Maestra
                </button>
              </div>
            `;

            if (currentQualityBar) {
              currentQualityBar.style.width = result.score + '%';
              currentQualityBar.style.background = result.score < 50 ? 'var(--danger)' : (result.score < 80 ? 'var(--warning)' : 'var(--success)');
            }
            if (currentQualityValue) currentQualityValue.textContent = result.score + '%';
            
            this.addXP(result.score >= 100 ? 100 : 25, 'Laboratorio de Prompts');
          } catch (err) {
            console.error('Prompt analysis failed:', err);
            currentOutput.innerHTML = '<div class="alert error">Error interno en el procesamiento.</div>';
          }
        }, 1200);
      }

      if (applyBtn) {
        e.preventDefault();
        const optimization = applyBtn.dataset.optimization;
        const input = document.getElementById('sandboxInput');
        if (input && optimization) {
          input.value = optimization;
          window.showToast('Mejora maestra inyectada ✨', 'success');
          // Visual feedback
          const bar = document.getElementById('promptQualityBar');
          const val = document.getElementById('promptQualityValue');
          if (bar) { bar.style.width = '100%'; bar.style.background = 'var(--success)'; }
          if (val) val.textContent = '100%';
          
          // Show optimized success state
          const currentOutput = document.getElementById('sandboxOutput');
          if (currentOutput) {
            currentOutput.innerHTML = `
              <div class="analysis-result-premium success-state animate-in visible">
                <div class="result-header">
                  <span class="status-badge status-high">OPTIMIZADO</span>
                  <h3>Estructura Aplicada</h3>
                </div>
                <p>Has inyectado los vectores de contexto y rol. Tu prompt ahora es de Nivel Maestro.</p>
                <div class="xp-bonus-tag animate-bounce">+50 XP</div>
              </div>
            `;
            this.addXP(50, 'Optimización de Prompt');
          }
        }
      }

      if (clearBtn) {
        e.preventDefault();
        const input = document.getElementById('sandboxInput');
        const output = document.getElementById('sandboxOutput');
        const qualityBar = document.getElementById('promptQualityBar');
        const qualityValue = document.getElementById('promptQualityValue');
        if (input) input.value = '';
        if (output) output.innerHTML = '<div class="empty-state-text">El resultado aparecerá aquí...</div>';
        if (qualityBar) qualityBar.style.width = '0%';
        if (qualityValue) qualityValue.textContent = '0%';
      }
    });
  }

  analyzePromptSovereign(promptText) {
    const text = promptText.toLowerCase();
    const criteria = {
      c: /oficina|entidad|departamento|situación|sector|estamos|contexto|institucional/i.test(text) && text.length > 30,
      r: /eres|actúa|experto|especialista|asistente|redactor|líder|coordinador|analista|audit/i.test(text),
      e: /necesito|tarea|haz|resume|crea|redacta|genera|identifica|analiza|propón/i.test(text),
      a: /tabla|lista|formato|tono|puntos|markdown|csv|viñetas|párrafos|profesional|formal/i.test(text)
    };

    let score = 0;
    let feedback = [];
    
    // C - Contexto
    if (criteria.c) score += 25; 
    else feedback.push("Define mejor el <b>Contexto</b>: ¿En qué oficina estás? ¿Cuál es el objetivo de fondo?");
    
    // R - Rol
    if (criteria.r) score += 25; 
    else feedback.push("Asigna un <b>Rol</b>: Dile a la IA quién debe ser (ej: Experto en Contratación).");
    
    // E - Especificación
    if (criteria.e) score += 25; 
    else feedback.push("Mejora la <b>Especificación</b>: Usa un verbo de acción claro (Resume, Analiza, etc).");
    
    // A - Acabado/Acción
    if (criteria.a) score += 25; 
    else feedback.push("Falta el <b>Acabado</b>: Define el formato de salida (ej: Tabla, Lista de puntos).");

    const spec = localStorage.getItem('guia-ia-specialization') || 'institucional';
    
    // Simple logic to generate an "Optimized" version
    let optimized = "";
    if (score < 100) {
      const rolePrefix = criteria.r ? "" : "Actúa como un Coordinador Administrativo experto en el sector público. ";
      const contextPrefix = criteria.c ? "" : "En el contexto de una oficina gubernamental que busca eficiencia y transparencia, ";
      const actionSuffix = criteria.a ? "" : " Presenta el resultado en una tabla comparativa clara y con tono profesional.";
      
      optimized = `${rolePrefix}${contextPrefix}${promptText}.${actionSuffix}`.replace(/\.\./g, '.');
    } else {
      optimized = promptText + "\n\n(Tu prompt ya es excelente, no requiere optimización inmediata)";
    }

    return { score, feedback, optimized };
  }

  // ── Module 2 Builder ──
  setupModule2Builder() {
    const updateBuilder = () => {
      const spec = localStorage.getItem('guia-ia-specialization') || 'institucional';
      const rolSelect = document.getElementById('builder-rol');
      const taskSelect = document.getElementById('builder-task');
      const previewText = document.getElementById('prompt-preview-text');
      const titleEl = document.querySelector('#m2-lab-builder p');

      if (!rolSelect || !taskSelect || !previewText) return;

      if (titleEl) {
        titleEl.innerText = spec === 'institucional' 
          ? 'Selecciona las piezas para construir una instrucción poderosa diseñada para el sector público.' 
          : 'Selecciona las piezas para construir una instrucción poderosa diseñada para el mundo corporativo.';
      }

      const options = {
        institucional: {
          roles: [
            { val: "Eres un experto en redacción de actos administrativos", label: "Redactor Jurídico" },
            { val: "Actúa como un analista de datos de la oficina de planeación", label: "Analista de Planeación" },
            { val: "Eres un especialista en atención al ciudadano empático", label: "Líder de PQR" },
            { val: "Eres un estratega de comunicación institucional", label: "Comunicador Social" }
          ],
          tasks: [
            { val: "resume este informe de 50 páginas destacando los puntos críticos", label: "Resumir puntos críticos" },
            { val: "redacta una respuesta formal que explique por qué no se puede pavimentar esta semana", label: "Explicar retraso de obra" },
            { val: "crea una tabla comparativa entre el presupuesto 2023 y 2024", label: "Comparar presupuestos" },
            { val: "diseña un guion para un video institucional sobre el avance de metas", label: "Diseñar guion de video" }
          ]
        },
        empresarial: {
          roles: [
            { val: "Eres un estratega de marketing digital experto en ROI", label: "Growth Hacker" },
            { val: "Actúa como un analista financiero de alto nivel", label: "Director Financiero (CFO)" },
            { val: "Eres un experto en optimización de procesos industriales", label: "Gerente de Operaciones" },
            { val: "Actúa como un reclutador de talento tecnológico", label: "Talent Scout" }
          ],
          tasks: [
            { val: "crea una campaña de email marketing para aumentar conversiones", label: "Campaña de Conversión" },
            { val: "analiza este balance general y detecta fugas de capital", label: "Auditoría Financiera" },
            { val: "diseña un roadmap para automatizar el soporte al cliente", label: "Roadmap de Automatización" },
            { val: "redacta una descripción de cargo atractiva para un Desarrollador Senior", label: "Descripción de Vacante" }
          ]
        }
      };

      const current = options[spec] || options.institucional;
      rolSelect.innerHTML = current.roles.map(r => `<option value="${r.val}">${r.label}</option>`).join('');
      taskSelect.innerHTML = current.tasks.map(t => `<option value="${t.val}">${t.label}</option>`).join('');

      const updatePreview = () => {
        previewText.innerText = `${rolSelect.value} para ${taskSelect.value}.`;
      };

      rolSelect.onchange = updatePreview;
      taskSelect.onchange = updatePreview;
      updatePreview();
    };

    setTimeout(updateBuilder, 500);
    window.addEventListener('moduleNavigated', (e) => {
      if (e.detail.module === 'module-2') setTimeout(updateBuilder, 100);
    });
    window.addEventListener('specializationChanged', updateBuilder);
  }

  // ── Specialization ──
  setupSpecialization() {
    const modal = document.getElementById('professionModal');
    const skipBtn = document.getElementById('skipSpecializationBtn');
    const profileIds = [
      'chooseCotidiano', 'chooseAdministrativo', 'chooseDocente', 
      'chooseCoordinador', 'chooseAnalista', 'chooseEmprendedor'
    ];
    
    // Load saved specialization
    const savedSpec = localStorage.getItem('guia-ia-specialization');
    if (savedSpec) {
      this.applySpecialization(savedSpec);
    } else {
      setTimeout(() => {
        if (modal) modal.classList.add('show');
      }, 1000);
    }

    const selectSpec = (id) => {
      const specMap = {
        'chooseCotidiano': 'cotidiano',
        'chooseAdministrativo': 'administrativo',
        'chooseDocente': 'docente',
        'chooseCoordinador': 'coordinador',
        'chooseAnalista': 'analista',
        'chooseEmprendedor': 'emprendedor'
      };
      const specLabels = {
        'cotidiano': 'Usuario Cotidiano',
        'administrativo': 'Personal Administrativo',
        'docente': 'Docente / Educador',
        'coordinador': 'Coordinador / Líder',
        'analista': 'Analista de Datos',
        'emprendedor': 'Emprendedor'
      };
      
      const spec = specMap[id];
      this.applySpecialization(spec);
      localStorage.setItem('guia-ia-specialization', spec);
      if (modal) modal.classList.remove('show');
      this.showToast(`Especialización activada: ${specLabels[spec]}`, 'success');
    };

    profileIds.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', () => selectSpec(id));
    });

    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        this.applySpecialization('administrativo');
        localStorage.setItem('guia-ia-specialization', 'administrativo');
        if (modal) modal.classList.remove('show');
        this.showToast('Ruta general activada. Puedes cambiar el enfoque despues.', 'info');
      });
    }
  }

  applySpecialization(spec) {
    document.body.classList.remove('theme-institucional', 'theme-empresarial');
    document.body.classList.add(`theme-${spec}`);
    this.specialization = spec;
    this.generateCertificate();
    window.dispatchEvent(new CustomEvent('specializationChanged', { detail: { specialization: spec } }));
  }

  // ── Certificate ──
  setupCertificate() {
    const downloadBtn = document.getElementById('downloadCertBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.showToast('Generando certificado premium...', 'info');
        setTimeout(() => window.print(), 500);
      });
    }
  }

  generateCertificate() {
    const nameCert = document.getElementById('userNameCert');
    const dateCert = document.getElementById('certDate');
    const certLogo = document.getElementById('certLogo');
    const certWatermark = document.getElementById('certWatermark');
    
    const savedName = localStorage.getItem('guia-ia-username') || 'PARTICIPANTE';
    const spec = this.specialization || 'cotidiano';
    
    const specTitles = {
      'cotidiano': 'USUARIO COTIDIANO PRO',
      'administrativo': 'EXPERTO ADMINISTRATIVO IA',
      'docente': 'DOCENTE INNOVADOR IA',
      'coordinador': 'LÍDER ESTRATÉGICO IA',
      'analista': 'ANALISTA MÁSTER IA',
      'emprendedor': 'EMPRENDEDOR DE ÉLITE IA'
    };

    if (nameCert) nameCert.textContent = savedName.toUpperCase();

    if (certLogo) {
      certLogo.textContent = specTitles[spec] || 'ARQUITECTO IA';
    }
    
    if (certWatermark) {
      certWatermark.textContent = (specTitles[spec] || 'PRO').split(' ')[0];
    }

    if (dateCert) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      dateCert.textContent = new Date().toLocaleDateString('es-ES', options);
    }
  }

  // ── Tool Cards ──
  setupToolCards() {
    document.body.addEventListener('click', (e) => {
      const card = e.target.closest('.tool-card');
      if (card) {
        const link = card.querySelector('.tool-link');
        // If clicking on the card but not directly on the link, click the link programsmatically
        if (link && !e.target.closest('a')) {
          window.open(link.href, link.getAttribute('target') || '_self');
        }
      }
    });
  }

  // ── User Profile ──
  setupUserProfile() {
    const nameInput = document.getElementById('userNameProfile');
    if (!nameInput) return;

    // Load initial
    const savedName = localStorage.getItem('guia-ia-username') || '';
    nameInput.value = savedName;

    nameInput.addEventListener('input', (e) => {
      const newName = e.target.value;
      localStorage.setItem('guia-ia-username', newName);
      this.generateCertificate();
      this.syncLeaderboard();
    });
  }


  // ── Theme Toggle ──
  setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      document.documentElement.classList.add('theme-transition');
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      toggle.textContent = next === 'light' ? '🌙' : '☀️';
      this.saveProgress();
      
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 500);
    });

    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    toggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }

  // ── Mobile Menu ──
  setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show');
    });

    if (overlay) {
      overlay.addEventListener('click', () => this.closeMobileSidebar());
    }
  }

  closeMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  }

  // ── Accordions ──
  setupAccordions() {
    document.body.addEventListener('click', (e) => {
      const header = e.target.closest('.accordion-header');
      if (header) {
        const accordion = header.closest('.accordion');
        accordion.classList.toggle('open');
      }
    });
  }

  // ── Tabs ──
  setupTabs() {
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (btn) {
        const targetId = btn.dataset.tab;
        if (!targetId) return; // Ignore tabs without data-tab (custom module logic)
        const module = btn.closest('.module');
        if (!module) return;

        // Toggle buttons in the same tab group
        const tabGroup = btn.closest('.ag-tabs') || btn.closest('.tabs');
        if (tabGroup) {
          tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Scroll to the top of the tab group so user doesn't get lost
          const yOffset = -80; // Account for fixed header
          const y = tabGroup.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }

        // Toggle panels in the module
        module.querySelectorAll('.ag-content, .tab-panel').forEach(p => {
          if (p.id === targetId) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      }
    });
  }

  // ── Module 20 Interactive Workflow (DEPRECATED - Moved to module-20.js) ──
  setupWorkflowInteractivity() {
    // Moved to src/modules/sena/guia-ia/module-20.js to improve modularity
  }

  // ── Quizzes ──
  setupQuizzes() {
    document.body.addEventListener('click', (e) => {
      const option = e.target.closest('.quiz-option');
      if (option) {
        const quiz = option.closest('.quiz-container');
        if (quiz.dataset.answered === 'true') return;

        const options = quiz.querySelectorAll('.quiz-option');
        options.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');

        const checkBtn = quiz.querySelector('.quiz-btn');
        if (checkBtn) checkBtn.disabled = false;
      }

      if (e.target.classList.contains('quiz-btn')) {
        const quiz = e.target.closest('.quiz-container');
        if (!quiz) return;
        const selected = quiz.querySelector('.quiz-option.selected');
        if (!selected || quiz.dataset.answered === 'true') return;

        quiz.dataset.answered = 'true';
        const isCorrect = selected.dataset.value === quiz.dataset.correct;
        const feedback = quiz.querySelector('.quiz-feedback');
        const options = quiz.querySelectorAll('.quiz-option');

        options.forEach(o => {
          if (o.dataset.value === quiz.dataset.correct) o.classList.add('correct');
          else if (o.classList.contains('selected')) o.classList.add('incorrect');
        });

        if (feedback) {
          feedback.classList.add('show');
          feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
          feedback.innerHTML = (isCorrect ? '✅ ' : '❌ ') + (isCorrect ? quiz.dataset.correctMsg : quiz.dataset.incorrectMsg);
        }

        e.target.disabled = true;
        if (isCorrect) this.addXP(this.XP_PER_QUIZ);

        const quizId = quiz.dataset.quizId;
        if (quizId) {
          this.quizScores[quizId] = isCorrect ? 1 : 0;
          this.saveProgress();
        }
      }
    });
  }

  // ── Tool Recommender ──
  setupToolRecommender() {
    const data = {
      'pa': {
        title: '🌊 Microsoft Power Automate',
        desc: 'Al usar Office 365, esta es tu mejor opción. Puedes crear flujos que se activan cuando recibes un correo o guardas un archivo.',
        link: 'https://powerautomate.microsoft.com/'
      },
      'zap': {
        title: '⚡ Zapier',
        desc: 'Si necesitas conectar aplicaciones web rápidamente (como Gmail con Notion o Slack), Zapier es el más intuitivo del mercado.',
        link: 'https://zapier.com'
      },
      'mag': {
        title: '🧩 Magical',
        desc: 'Es una extensión de Chrome. Ideal si rellenas muchos formularios repetitivos; Magical "aprende" tus datos y los completa solo.',
        link: 'https://www.getmagical.com/'
      },
      'make': {
        title: '🔗 Make.com',
        desc: 'Para cuando necesites flujos muy complejos con muchas condiciones lógicas. Es visual y muy potente.',
        link: 'https://www.make.com/'
      }
    };

    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.rec-btn');
      if (btn) {
        const tool = btn.dataset.tool;
        const resultDiv = document.getElementById('recommender-result');
        const title = document.getElementById('rec-title');
        const desc = document.getElementById('rec-desc');
        const link = document.getElementById('rec-link');

        if (resultDiv && data[tool]) {
          title.innerHTML = data[tool].title;
          desc.innerHTML = data[tool].desc;
          if (link) link.href = data[tool].link;
          resultDiv.style.display = 'block';
          resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  // ── Copy Buttons ──
  setupCopyButtons() {
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.prompt-copy');
      if (btn) {
        const promptBlock = btn.closest('.prompt-block');
        const content = promptBlock.querySelector('.prompt-content');
        if (!content) return;

        navigator.clipboard.writeText(content.textContent.trim()).then(() => {
          btn.textContent = '✓ Copiado';
          setTimeout(() => btn.textContent = 'Copiar', 2000);
        });
      }
    });
  }

  // ── Complete Module Buttons ──
  setupCompleteButtons() {
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.complete-module-btn');
      if (btn) {
        const moduleId = this.normalizeModuleId(btn.dataset.module);
        if (this.completedModules.has(moduleId)) {
          this.completedModules.delete(moduleId);
          btn.classList.remove('completed');
          btn.innerHTML = '☐ Marcar módulo como completado';
        } else {
          const evidence = this.collectModuleEvidence(moduleId);
          const evaluation = this.evaluateModuleEvidence(moduleId, evidence);
          this.persistModuleEvidence(moduleId, evidence, evaluation);
          this.refreshLearningFeedback(moduleId);

          if (!evaluation.valid) {
            this.showToast('Añade un poco más de evidencia antes de cerrar este módulo.', 'info');
            this.saveProgress();
            return;
          }

          this.completedModules.add(moduleId);
          this.progressManager?.markModuleCompleted(moduleId);
          btn.classList.add('completed');
          btn.innerHTML = '✅ Módulo completado';
          const xpReward = parseInt(btn.dataset.xp) || this.XP_PER_MODULE;
          this.addXP(xpReward);
          this.awardCompetencies(moduleId, evaluation);
          if (this.gameEngine) this.gameEngine.awardBadge(moduleId);
          this.triggerConfetti();
          if (evaluation.feedback.length) {
            this.showToast(`Módulo validado: ${evaluation.score}/100`, 'success');
          }
        }
        this.updateGlobalProgress();
        this.saveProgress();
      }
    });
  }

  triggerConfetti() {
    // Subtle completion effect: fewer particles, shorter burst, softer motion.
    const duration = 1800;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 5;
      this.spawnConfettiParticles(particleCount);
    }, 380);
  }

  spawnConfettiParticles(count) {
    const particles = ['•', '·', '✦'];
    const centerX = window.innerWidth * 0.58;
    const centerY = window.innerHeight * 0.7;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const driftX = (Math.random() - 0.5) * 120;
      const driftY = 120 + Math.random() * 140;
      el.textContent = particles[Math.floor(Math.random() * particles.length)];
      el.className = 'confetti-particle';
      el.style.left = `${centerX + (Math.random() - 0.5) * 260}px`;
      el.style.top = `${centerY + (Math.random() - 0.5) * 80}px`;
      el.style.transform = `translate3d(0, 0, 0) scale(${0.9 + Math.random() * 0.5})`;
      el.style.fontSize = `${8 + Math.random() * 8}px`;
      el.style.position = 'fixed';
      el.style.zIndex = '10001';
      el.style.pointerEvents = 'none';
      el.style.setProperty('--confetti-x', `${driftX}px`);
      el.style.setProperty('--confetti-y', `${-driftY}px`);
      el.style.animationDuration = `${1200 + Math.random() * 700}ms`;
      
      document.body.appendChild(el);
      
      const anim = el.animate([
        { transform: 'translate3d(0, 0, 0) scale(0.9)', opacity: 0 },
        { transform: `translate3d(${driftX * 0.35}px, ${-driftY * 0.35}px, 0) scale(1)`, opacity: 0.5, offset: 0.35 },
        { transform: `translate3d(${driftX}px, ${-driftY}px, 0) scale(0.96)`, opacity: 0 }
      ], {
        duration: 1200 + Math.random() * 700,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
      });

      anim.onfinish = () => el.remove();
    }
  }

  updateGlobalProgress() {
    const total = 21;
    const done = this.completedModules.size;
    const pct = Math.round((done / total) * 100);
    const fill = document.querySelector('.global-progress-fill');
    const text = document.querySelector('.global-progress-text');

    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = pct + '%';

  }

  // ── Scroll Animations ──
  setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
  }

  triggerAnimations() {
    const activeModule = document.querySelector('.module.active');
    if (!activeModule) return;
    activeModule.querySelectorAll('.animate-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }

  // ── Feedback ──
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container') || document.body;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 2rem;
        border-radius: var(--radius-md);
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid ${type === 'success' ? '#10b981' : 'rgba(255, 255, 255, 0.2)'};
        z-index: 10000;
        color: #fff;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        pointer-events: auto;
    `;
    
    const icon = type === 'success' ? '✅' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }

  renderConstitutionInModule() {
    const target = document.getElementById('constitution');
    if (!target) return;
    
    const text = this.constitution || "Sincronizando reglas maestras...";
    target.innerHTML = `
        <div class="module-header glass-card-ultra" style="margin-bottom:30px; text-align:center; padding:40px;">
            <div class="decoder-kicker">SUPRAMIND v32.4</div>
            <h1 class="module-title">Constitución Técnica Guía IA</h1>
            <p class="module-description">Protocolos inmutables de razonamiento y arquitectura para agentes soberanos.</p>
        </div>
        <div class="glass-container-lux" style="padding:20px;">
            <div class="constitution-rich-text">
                ${this.formatConstitution(text)}
            </div>
        </div>
    `;
  }

  formatConstitution(text) {
    return text
      .replace(/^# (.*$)/gm, '<h1 class="const-h1">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="const-h2">$2</h2>')
      .replace(/^> (.*$)/gm, '<blockquote class="const-quote">$1</blockquote>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  // 🧬 ADN Maestro: Visualización de la Constitución v32.4
  initConstitutionUI() {
    const navBtn = document.getElementById('navConstitution');
    const modal = document.getElementById('constitutionModal');
    const closeBtn = document.getElementById('closeConstitutionBtn');
    const content = document.getElementById('constitutionContent');

    if (modal && closeBtn) {
      if (navBtn) {
        navBtn.addEventListener('click', () => {
            // navigateTo handles the state, initConstitutionUI can handle the modal if we want both
            // But let's keep it as a module for better consistency as per the audit
            modal.style.display = 'flex';
            const text = this.constitution || "Cargando reglas maestras...";
            content.innerHTML = this.formatConstitution(text);
        });
      }

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
      });
    }
  }
}

// Global Exposure
window.showToast = (msg, type) => {
    if (window.app) {
        window.app.showToast(msg, type);
    } else {
        const temp = new GuiaIA();
        temp.showToast(msg, type);
    }
};

window.antShowConfetti = function() {
    if (window.app) window.app.triggerConfetti();
};

window.renderCompetencyReport = function() {
    if (window.app) window.app.renderFinalCompetencyReport();
};

/** ── Módulo 5: Navegación por Niveles ── */
window.m5ShowLevel = function(level) {
    document.querySelectorAll('.ag-content').forEach(d => {
        d.classList.remove('active');
    });
    const target = document.getElementById('m5-level-' + level);
    if (target) {
        target.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.querySelectorAll('.m5-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector('.m5-tab[data-level="' + level + '"]');
    if (activeTab && !activeTab.classList.contains('locked')) activeTab.classList.add('active');
};

window.m5UnlockAndGo = function(level) {
    const tab = document.querySelector('.m5-tab[data-level="' + level + '"]');
    if (tab) {
        tab.classList.remove('locked');
        tab.classList.add('unlocked');
    }
    const progressFill = document.getElementById('m5-progress-fill');
    const progressLabel = document.getElementById('m5-progress-label');
    const totalLevels = 5;
    const pct = Math.round(((level - 1) / totalLevels) * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = 'Nivel ' + level + ' de ' + totalLevels;
    window.m5ShowLevel(level);
};
