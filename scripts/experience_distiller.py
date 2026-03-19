import json
import os
import datetime

class ExperienceDistiller:
    def __init__(self, log_path="src/data/history/experience_log.json", knowledge_dir="src/knowledge/distilled"):
        self.log_path = log_path
        self.knowledge_dir = knowledge_dir
        if not os.path.exists(self.knowledge_dir):
            os.makedirs(self.knowledge_dir)

    def distill(self):
        if not os.path.exists(self.log_path):
            print("⚠️ No hay logs para destilar.")
            return

        with open(self.log_path, 'r') as f:
            data = json.load(f)

        interventions = data.get("interventions", [])
        if not interventions:
            return

        # Agrupar por tareas y éxitos
        summary = {
            "total_tasks": len(interventions),
            "successful": len([i for i in interventions if i['success']]),
            "last_intervention": interventions[-1]['timestamp'],
            "patterns": [i['task'] for i in interventions[-5:]] # Últimos 5 patrones
        }

        self._create_ki(summary)

    def _create_ki(self, summary):
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        ki_filename = f"distilled_knowledge_{timestamp}.md"
        ki_path = os.path.join(self.knowledge_dir, ki_filename)
        
        content = f"""# KI Destilado: Sesión {timestamp}
        
## Resumen de Intervención
- **Total Tareas**: {summary['total_tasks']}
- **Éxito**: {summary['successful']}/{summary['total_tasks']}
- **Última Actividad**: {summary['last_intervention']}

## Patrones Detectados
{chr(10).join([f"- {p}" for p in summary['patterns']])}

## Recomendación Singularity
> Se detecta una evolución constante del set de herramientas. Mantener el enfoque en la automatización de métricas para optimizar el HRI+.
"""
        with open(ki_path, 'w') as f:
            f.write(content)
        print(f"🧠 Conocimiento destilado en: {ki_path}")

if __name__ == "__main__":
    distiller = ExperienceDistiller()
    distiller.distill()
