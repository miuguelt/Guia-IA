import os
import json
import requests
import glob

QDRANT_URL = "http://localhost:6333"
COLLECTION_NAME = "antigravity_memory"

def sync_knowledge():
    print(f"🧠 Iniciando Sincronización RAG [QDRANT_SOVEREIGN]")
    ki_files = glob.glob("src/knowledge/distilled/*.md")
    
    if not ki_files:
        print("ℹ️ No hay nuevos KIs para sincronizar.")
        return

    # 1. Verificar/Crear Colección en Qdrant (Dimensión 768 para Nomic)
    try:
        check_col = requests.get(f"{QDRANT_URL}/collections/{COLLECTION_NAME}")
        if check_col.status_code != 200:
            print(f"🏗️ Creando nueva colección: {COLLECTION_NAME}")
            requests.put(
                f"{QDRANT_URL}/collections/{COLLECTION_NAME}",
                json={
                    "vectors": {
                        "size": 768,
                        "distance": "Cosine"
                    }
                }
            )
    except Exception as e:
        print(f"⚠️ Error al conectar con Qdrant: {e}")
        return

    # 2. Inyectar contenido con Embeddings de Nomic
    for ki_path in ki_files:
        with open(ki_path, 'r') as f:
            content = f.read()
            
        ki_id = os.path.basename(ki_path).replace(".md", "")
        
        # Generar Embedding usando Nomic (vía Ollama en Docker)
        print(f"🧬 Generando Embedding [Nomic] para: {ki_id}")
        try:
            embed_res = requests.post(
                "http://localhost:11434/api/embeddings", 
                json={"model": "nomic-embed-text", "prompt": content}
            )
            embedding = embed_res.json().get("embedding")
            
            if not embedding:
                print(f"⚠️ Fallo al generar embedding para {ki_id}.")
                continue

            # Upsert en Qdrant
            payload = {
                "points": [
                    {
                        "id": hash(ki_id) % 2**32, # Qdrant requiere IDs numéricos o UUIDs
                        "vector": embedding,
                        "payload": {
                            "doc_id": ki_id,
                            "source": "ExperienceDistiller",
                            "content": content
                        }
                    }
                ]
            }
            
            res = requests.put(f"{QDRANT_URL}/collections/{COLLECTION_NAME}/points", json=payload)
            if res.status_code == 200:
                print(f"✅ KI Sincronizado en Qdrant: {ki_id}")
            else:
                print(f"⚠️ Error al sincronizar {ki_id}: {res.text}")
        except Exception as e:
            print(f"❌ Fallo de conexión RAG: {e}")

if __name__ == "__main__":
    sync_knowledge()
