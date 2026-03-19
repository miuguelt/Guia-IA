import os

def generate_tree(startpath):
    tree = "├── assets/              # Recursos visuales (Imágenes/Videos)\n"
    tree += "├── src/\n"
    tree += "│   ├── agents/          # Definición de lógica agentic local\n"
    tree += "│   ├── tools/           # Herramientas personalizadas (Python/Bash)\n"
    tree += "│   └── knowledge/       # Base de conocimiento específica de IA\n"
    tree += "├── index.html           # Dashboard interactivo\n"
    tree += "├── Dockerfile           # Infraestructura Soberana\n"
    tree += "├── docker-compose.yml   # Orquestación de Contenedores\n"
    tree += "└── scripts/             # Automatización de inferencia\n"
    return tree

def update_cortex_map():
    path = "/home/miguel/GitHub/Guia IA/CORTEX_MAP.md"
    tree = generate_tree("/home/miguel/GitHub/Guia IA")
    
    with open(path, "r") as f:
        lines = f.readlines()
    
    new_content = []
    in_tree = False
    for line in lines:
        if line.startswith("```text"):
            new_content.append(line)
            new_content.append(tree)
            in_tree = True
        elif line.startswith("```") and in_tree:
            new_content.append(line)
            in_tree = False
        elif not in_tree:
            new_content.append(line)
            
    with open(path, "w") as f:
        f.writelines(new_content)
    print("✅ CORTEX_MAP.md actualizado automáticamente.")

if __name__ == "__main__":
    update_cortex_map()
