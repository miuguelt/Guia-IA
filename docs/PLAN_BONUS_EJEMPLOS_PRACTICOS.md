# Plan de Enriquecimiento de Modulos Bonus

## Objetivo
Convertir cada modulo bonus en una guia accionable donde la persona:

- entienda para que sirve la herramienta;
- vea al menos 3 casos de uso reales;
- pueda replicarlos paso a paso;
- cierre con un reto completo, autocontenido y verificable.

## Modulos Analizados

1. Antigravity AI
2. Gemini 2025
3. Teams y Meet con IA
4. Manus AI
5. DeepSeek R1
6. NotebookLM
7. Multimedia Pro
8. Notion AI
9. Power Automate + IA

## Diagnostico General

### Lo bueno que ya existe

- Casi todos los modulos ya tienen una seccion de "Estrategia Real".
- Ya hay tono practico, kits de trabajo, prompts y checklists en varios bonus.
- La interfaz ya soporta bien bloques tipo maletin, pasos y recompensas.
- Gemini, DeepSeek, NotebookLM, Teams/Meet, Manus y Power Automate ya tienen una base reutilizable.

### Lo que falta para que la guia sea realmente didactica

- No todos los modulos tienen 3 ejemplos claros por herramienta.
- En varios casos hay una sola estrategia fuerte, pero no una progresion de basico -> intermedio -> aplicado.
- Algunos pasos dependen de que la persona "ya sepa" donde hacer clic.
- Faltan criterios de resultado esperado: que debe pasar si el ejercicio salio bien.
- Faltan retos finales autocontenidos con insumos, prompt, salida esperada y criterios de evaluacion.
- Hay modulos muy conceptuales o muy simulados, pero no siempre aterrizados a una tarea laboral concreta.

## Estructura Recomendada para Todos los Modulos

Cada modulo bonus deberia seguir la misma arquitectura:

1. Para que sirve en una frase.
2. Cuando conviene usarla y cuando no.
3. Tres ejemplos practicos:
   - Ejemplo 1: uso basico y rapido.
   - Ejemplo 2: uso productivo del trabajo real.
   - Ejemplo 3: uso avanzado o transversal con otra herramienta.
4. Paso a paso replicable:
   - donde entrar;
   - que opcion tocar;
   - que prompt o insumo pegar;
   - que resultado deberia verse.
5. Errores comunes.
6. Reto final con:
   - contexto;
   - archivos o texto de entrada;
   - instrucciones exactas;
   - entregable esperado;
   - checklist de validacion.

## Plantilla de Produccion por Ejemplo

Cada ejemplo deberia escribirse con este formato:

### Nombre del ejemplo

- Objetivo: que va a lograr la persona.
- Nivel: basico, intermedio o avanzado.
- Duracion: 5, 10 o 15 minutos.
- Necesitas: cuenta, archivo, prompt, licencia o alternativa gratis.
- Paso a paso: 5 a 8 pasos maximo.
- Resultado esperado: como se ve una salida correcta.
- Error comun: que suele salir mal.
- Variacion: como adaptarlo a otro contexto.

## Plan por Modulo

## 1. Antigravity AI

### Diagnostico

- Tiene buen contenido conceptual y de identidad del agente.
- Tiene simuladores y una estrategia avanzada.
- Le falta bajar el modulo a ejercicios replicables por tipo de herramienta del agente.

### Ejemplos a anadir

#### Ejemplo 1. Auditar reglas de un agente

- Objetivo: entender como definir reglas inmutables.
- Insumo: una plantilla corta de `GEMINI.md`.
- Paso a paso:
  1. Copiar una constitucion base.
  2. Reemplazar rol, prohibiciones y formato de salida.
  3. Pegarla en el auditor del modulo.
  4. Revisar si faltan reglas criticas.
  5. Corregir y volver a validar.
- Resultado esperado: constitucion con rol, limites, formato de respuesta y fuentes permitidas.

#### Ejemplo 2. Construir un workflow de agente para revisar documentos

- Objetivo: mostrar la utilidad de encadenar herramientas.
- Flujo: buscar archivo -> resumir -> generar hallazgos -> guardar salida.
- Paso a paso:
  1. Definir tarea.
  2. Elegir 3 herramientas del flujo.
  3. Ordenarlas.
  4. Ejecutar simulacion.
  5. Revisar el resultado por etapa.

#### Ejemplo 3. Handoff entre agente investigador y agente ejecutor

- Objetivo: mostrar trabajo multiagente.
- Caso: un agente investiga una norma y otro redacta el informe.
- Paso a paso:
  1. Preparar la consulta.
  2. Separar responsabilidades.
  3. Transferir contexto.
  4. Validar que el segundo agente no reinicie desde cero.

### Reto propuesto

- Nombre: "Clona al experto de tu area".
- Entregable: constitucion del agente + 2 pruebas + criterio de validacion.
- Debe incluir:
  - plantilla editable;
  - 5 preguntas de prueba;
  - checklist de calidad del agente;
  - version corta para ChatGPT, Gemini o Claude.

## 2. Gemini 2025

### Diagnostico

- Es de los modulos mas fuertes.
- Ya tiene una estrategia real potente.
- Falta separar usos por capacidad: contexto largo, multimodalidad y Gemas.

### Ejemplos a anadir

#### Ejemplo 1. Analizar un PDF largo sin partirlo en trozos

- Caso: manual interno o contrato de 100+ paginas.
- Paso a paso:
  1. Entrar a Gemini.
  2. Adjuntar PDF.
  3. Pegar prompt de extraccion de hallazgos.
  4. Pedir tabla de riesgos.
  5. Confirmar datos clave.
- Resultado esperado: tabla con pagina, hallazgo y recomendacion.

#### Ejemplo 2. Analizar imagen + tabla + texto en una sola conversacion

- Caso: presupuesto y plano.
- Paso a paso:
  1. Subir CSV.
  2. Subir imagen.
  3. Pegar prompt multimodal.
  4. Pedir conclusion tecnica.
  5. Compartir salida.

#### Ejemplo 3. Crear una Gema secretaria de actas

- Caso: convertir audio o notas caoticas en acta.
- Paso a paso:
  1. Ir a Gemas.
  2. Crear una nueva.
  3. Pegar instrucciones.
  4. Probar con transcripcion de muestra.
  5. Ajustar formato final.

### Reto propuesto

- Nombre: "Audita un proceso con contexto largo".
- Insumos: PDF, tabla CSV y prompt.
- Entregable: resumen ejecutivo + tabla de riesgos + recomendacion en 5 lineas.

## 3. Teams y Meet con IA

### Diagnostico

- Tiene buena narrativa de utilidad inmediata.
- Falta convertirlo en un modulo de repeticion guiada con varios escenarios.

### Ejemplos a anadir

#### Ejemplo 1. Llegar tarde a una reunion y ponerse al dia

- Paso a paso:
  1. Activar transcripcion.
  2. Abrir Copilot o alternativa.
  3. Preguntar "que me perdi".
  4. Extraer 3 decisiones clave.

#### Ejemplo 2. Generar compromisos y responsables

- Paso a paso:
  1. Copiar una transcripcion modelo.
  2. Pegar prompt de action items.
  3. Convertir salida en tabla.
  4. Verificar responsable y fecha.

#### Ejemplo 3. Redactar resumen ejecutivo para directivos

- Paso a paso:
  1. Usar la misma transcripcion.
  2. Pegar prompt de resumen.
  3. Ajustar tono formal.
  4. Exportar a correo o Teams.

### Reto propuesto

- Nombre: "La reunion que nadie documento".
- Insumos: transcripcion completa de una reunion de crisis.
- Entregable: minuta, tabla de compromisos, mensaje ejecutivo de 3 lineas.

## 4. Manus AI

### Diagnostico

- Explica bien computer use y navegacion autonoma.
- El enfoque de vigilancia normativa ya funciona.
- Falta mostrar 3 familias de tareas: monitoreo, investigacion competitiva y rastreo documental.

### Ejemplos a anadir

#### Ejemplo 1. Monitorear una web oficial

- Caso: Diario Oficial o SECOP.
- Paso a paso:
  1. Entrar a la herramienta.
  2. Pegar prompt de vigilancia.
  3. Definir palabras clave.
  4. Pedir tabla de novedades.

#### Ejemplo 2. Investigar tendencias de una industria

- Caso: que dicen usuarios o expertos de una tecnologia.
- Paso a paso:
  1. Dar objetivo de investigacion.
  2. Indicar fuentes preferidas.
  3. Pedir 5 hallazgos con evidencia.
  4. Pedir resumen ejecutivo.

#### Ejemplo 3. Extraer datos de varios sitios y compararlos

- Caso: precios, convocatorias o programas.
- Paso a paso:
  1. Dar lista de URLs.
  2. Definir campos a extraer.
  3. Pedir tabla comparativa.
  4. Pedir recomendacion final.

### Reto propuesto

- Nombre: "Radar semanal de tu sector".
- Entregable: brief con 5 novedades, enlace fuente, impacto y accion sugerida.

## 5. DeepSeek R1

### Diagnostico

- Ya tiene muy buen caso de debugging.
- Falta abrir el abanico mas alla de codigo.
- Conviene enseñar cuando usar razonamiento y cuando no.

### Ejemplos a anadir

#### Ejemplo 1. Encontrar un bug logico

- Mantener el caso de nomina.
- Anadir salida esperada y validacion mas visible.

#### Ejemplo 2. Resolver una decision con varias condiciones

- Caso: elegir proveedor segun costo, tiempo y riesgo.
- Paso a paso:
  1. Pegar tabla.
  2. Pedir criterios.
  3. Pedir razonamiento paso a paso.
  4. Validar recomendacion.

#### Ejemplo 3. Mejorar un procedimiento escrito

- Caso: procedimiento administrativo confuso.
- Paso a paso:
  1. Pegar proceso actual.
  2. Pedir deteccion de ambiguedades.
  3. Pedir version corregida.
  4. Pedir checklist de control.

### Reto propuesto

- Nombre: "Diagnostica y corrige".
- Entregable: error detectado, explicacion del razonamiento, solucion corregida y validacion.

## 6. NotebookLM

### Diagnostico

- Ya esta muy cerca del formato ideal.
- Tiene buen kit, prompts y checklist.
- Solo falta ampliar a 3 usos bien diferenciados.

### Ejemplos a anadir

#### Ejemplo 1. Resolver preguntas citando paginas

- Caso: consultar una norma o manual.
- Paso a paso:
  1. Crear cuaderno.
  2. Subir 2 documentos.
  3. Hacer una pregunta puntual.
  4. Abrir la cita.

#### Ejemplo 2. Crear resumen ejecutivo de varios documentos

- Caso: 3 PDFs de un mismo proyecto.
- Paso a paso:
  1. Cargar fuentes.
  2. Pedir resumen unificado.
  3. Pedir riesgos y responsables.
  4. Validar con citas.

#### Ejemplo 3. Generar Audio Overview de un documento complejo

- Paso a paso:
  1. Crear notebook.
  2. Cargar fuente.
  3. Generar audio.
  4. Escuchar y extraer 3 ideas accionables.

### Reto propuesto

- Nombre: "Tu oraculo documental".
- Entregable: respuesta a 3 preguntas con cita + resumen ejecutivo + audio overview.

## 7. Multimedia Pro

### Diagnostico

- Es el modulo mas debil en aplicacion laboral real.
- Tiene buen simulador de prompt visual, pero falta utilidad concreta.
- Necesita pasar de "arte bonito" a "produccion util".

### Ejemplos a anadir

#### Ejemplo 1. Crear una imagen institucional

- Caso: banner para curso, evento o campaña.
- Paso a paso:
  1. Definir objetivo visual.
  2. Elegir sujeto, estilo y formato.
  3. Generar prompt.
  4. Ajustar iteracion 2.

#### Ejemplo 2. Crear piezas para redes o presentaciones

- Caso: carrusel o portada.
- Paso a paso:
  1. Definir tono.
  2. Pedir 3 variaciones.
  3. Escoger la mejor.
  4. Adaptar a formato 16:9 o 1:1.

#### Ejemplo 3. Crear storyboard para video

- Caso: video corto explicativo.
- Paso a paso:
  1. Definir escena 1, 2 y 3.
  2. Generar prompts visuales.
  3. Unificar estilo.
  4. Exportar narrativa visual.

### Reto propuesto

- Nombre: "Campana visual express".
- Entregable: prompt maestro, 3 imagenes objetivo, criterio de seleccion y version final.

## 8. Notion AI

### Diagnostico

- Tiene buen simulador del editor.
- Falta una estrategia real comparable a la de los modulos mas fuertes.
- Necesita mas foco en flujos cotidianos: redactar, estructurar y consultar conocimiento.

### Ejemplos a anadir

#### Ejemplo 1. Convertir notas crudas en minuta

- Paso a paso:
  1. Crear pagina.
  2. Pegar notas.
  3. Usar `/ai`.
  4. Pedir estructura.
  5. Revisar responsables.

#### Ejemplo 2. Clasificar feedback en una base de datos

- Paso a paso:
  1. Crear tabla.
  2. Agregar 5 comentarios.
  3. Usar autofill AI.
  4. Validar categoria y sentimiento.

#### Ejemplo 3. Buscar respuestas en el espacio de trabajo

- Paso a paso:
  1. Cargar documentos de referencia.
  2. Ir a Ask Notion.
  3. Hacer pregunta concreta.
  4. Validar si responde con contexto correcto.

### Reto propuesto

- Nombre: "Base de conocimiento viva".
- Entregable: una pagina estructurada, una base con 5 registros clasificados y 3 consultas respondidas.

## 9. Power Automate + IA

### Diagnostico

- Tiene muy buena base de explicacion y un caso real util.
- Le falta mostrar mas diversidad de automatizaciones.
- Conviene separar trigger, condicion, accion y salida en usos distintos.

### Ejemplos a anadir

#### Ejemplo 1. Detectar correos urgentes y avisar por Teams

- Mantener el ejemplo actual como caso base.

#### Ejemplo 2. Extraer datos de una factura y guardarlos en Excel

- Paso a paso:
  1. Trigger por email con adjunto.
  2. AI Builder u OCR.
  3. Extraer monto, proveedor y fecha.
  4. Guardar en tabla.

#### Ejemplo 3. Automatizar aprobaciones

- Caso: solicitud de permiso o compra.
- Paso a paso:
  1. Trigger por Forms.
  2. Condicion por monto o tipo.
  3. Enviar aprobacion.
  4. Notificar decision.

### Reto propuesto

- Nombre: "Robot de oficina".
- Entregable: flujo con trigger, condicion y accion final; captura o descripcion del resultado esperado.

## Prioridad de Implementacion

### Fase 1. Modulos con base fuerte y retorno rapido

1. Gemini 2025
2. DeepSeek R1
3. NotebookLM
4. Power Automate + IA
5. Teams y Meet con IA

### Fase 2. Modulos que necesitan aterrizaje pedagogico adicional

6. Notion AI
7. Manus AI
8. Antigravity AI
9. Multimedia Pro

## Orden de Construccion Dentro de Cada Modulo

1. Crear bloque "Casos de uso reales".
2. Anadir 3 tarjetas de ejemplos.
3. Anadir para cada ejemplo:
   - objetivo;
   - insumos;
   - pasos;
   - resultado esperado.
4. Cerrar con "Reto final".
5. Agregar boton de copiar prompt, copiar insumo y checklist de validacion.

## Regla Editorial Recomendada

Cada bonus debe responder estas 5 preguntas sin dejar huecos:

1. Que problema real resuelve esta herramienta.
2. Que necesito para usarla.
3. Como la pruebo en menos de 10 minutos.
4. Como se veria un buen resultado.
5. Como la aplico a mi trabajo o estudio.

## Criterios de Calidad del Nuevo Contenido

- Cada ejemplo debe poder hacerse sin explicacion externa.
- Debe incluir alternativa gratuita o equivalente si la herramienta es paga.
- Debe tener al menos un prompt listo para copiar.
- Debe indicar si el resultado esperado es tabla, resumen, imagen, audio o flujo.
- Debe decir que hacer si la salida sale mal.

## Siguiente Paso Recomendado

Producir primero un "patron maestro" en 1 modulo, idealmente `Gemini 2025` o `NotebookLM`, y luego replicar la misma estructura en los otros 8 bonus para mantener consistencia visual y pedagogica.
