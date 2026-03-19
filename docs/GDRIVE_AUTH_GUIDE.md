# Guía para Activar Google Drive en Antigravity

El servidor MCP de Google Drive tiene un error interno al gestionar rutas en Windows que impide que yo inicie la sesión por ti. Sigue estos pasos para solucionarlo:

1. **Obtén tus llaves de Google Cloud**:
   - Ve a [Google Cloud Console](https://console.cloud.google.com/).
   - Crea un proyecto y habilita la **Google Drive API**.
   - Crea credenciales de tipo **OAuth Client ID** (Escritorio).
   - Descarga el JSON y cámbiale el nombre a `gcp-oauth.keys.json`.

2. **Copia el archivo**:
   - Pega ese archivo en: `C:\Users\Miguel\gcp-oauth.keys.json`.

3. **Ejecuta este comando en tu terminal (PowerShell)**:
   ```powershell
   $env:GDRIVE_OAUTH_PATH="C:/Users/Miguel/gcp-oauth.keys.json"; $env:GDRIVE_CREDENTIALS_PATH="C:/Users/Miguel/.gdrive-server-credentials.json"; npx -y @modelcontextprotocol/server-gdrive auth
   ```

4. **Vincula tu cuenta**:
   - Se abrirá tu navegador. Acepta los permisos.
   - Una vez que diga "Credentials saved", vuelve a Antigravity y dale a **Refresh**.

He dejado configurado tu `mcp_config.json` para que busque las credenciales en esa ruta fija y no falle.
