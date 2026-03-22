import json
import os
import datetime

class ExperienceEngine:
    def __init__(self, log_path="src/data/history/experience_log.json"):
        self.log_path = log_path
        self.data = self._load_data()

    def _load_data(self):
        if os.path.exists(self.log_path):
            with open(self.log_path, 'r') as f:
                return json.load(f)
        return {"interventions": [], "metrics": {}}

    def log_intervention(self, task_name, success=True, metrics=None):
        entry = {
            "timestamp": datetime.datetime.now().isoformat(),
            "task": task_name,
            "success": success,
            "metrics": metrics or {}
        }
        self.data["interventions"].append(entry)
        self._save()

    def update_metrics(self, scd, aer, si):
        self.data["metrics"] = {
            "scd": scd,
            "aer": aer,
            "si": si,
            "last_update": datetime.datetime.now().isoformat()
        }
        self._save()

    def _save(self):
        with open(self.log_path, 'w') as f:
            json.dump(self.data, f, indent=4)

if __name__ == "__main__":
    # Initial seed for Guia IA
    engine = ExperienceEngine()
    engine.update_metrics(scd=78, aer=92, si=100)
    print("Experience Engine Initialized: SINGULARITY v20.1 Protocol Active")
