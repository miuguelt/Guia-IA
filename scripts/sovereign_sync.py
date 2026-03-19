import os
import json
import requests
import glob

CHROMA_URL = "http://localhost:8000/api/v1"

def sync_knowledge():
    print("🧠 Iniciando Sincronización RAG [OMNIPRESENCE]")
    ki_files = glob.glob("src/knowledge/distilled/*.md")
    
    if not ki_files:
        print("ℹ️ No hay nuevos KIs para sincronizar.")
        return

    # 1. Verificar/Crear Colección
    try:
        requests.post(f"{CHROMA_URL}/collections", json={"name": "antigravity_memory"})
    except:
        pass # Colección probablemente ya existe

    # 2. Inyectar contenido
    for ki_path in ki_files:
        with open(ki_path, 'r') as f:
            content = f.read()
            
        ki_id = os.path.basename(ki_path).replace(".md", "")
        
        # Simulación de embedding (ChromaDB suele requerir embeddings o usar su default)
        # Nota: Aquí usamos la API simplificada para propósitos de demostración.
        payload = {
            "ids": [ki_id],
            "metadatas": [{"source": "ExperienceDistiller", "protocol": "Singularity_v22.0"}],
            "documents": [content]
        }
        
        try:
            res = requests.post(f"{CHROMA_URL}/collections/antigravity_memory/add", json=payload)
            if res.status_code == 201 or res.status_code == 200:
                print(f"✅ KI Sincronizado: {ki_id}")
            else:
                print(f"⚠️ Error al sincronizar {ki_id}: {res.text}")
        except Exception as e:
            print(f"❌ Fallo de conexión con ChromaDB: {e}")

if __name__ == "__main__":
    sync_knowledge()
