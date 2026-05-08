# 500X2 TOURNAMENT | Batallón Supremacy

> “Conquista el mapa. Domina la guerra.”

Portal oficial del torneo competitivo **500X2** de Supremacy 1914. Una plataforma diseñada para la gestión de registros, reportes y estadísticas en tiempo real para la comunidad competitiva de eSports.

## 🚀 Características AAA

- **Animaciones Cinematográficas**: Transiciones fluidas entre páginas y elementos con scroll dinámico usando `Framer Motion`.
- **Estado en Tiempo Real**: Sincronización instantánea de estadísticas y clasificaciones mediante `Firebase Firestore (onSnapshot)`.
- **Interfaz Militar Premium**: Diseño moderno con efectos de glassmorphism, optimizado para una experiencia inmersiva.
- **Micro-interacciones**: Feedback visual y sonoro (clics mecánicos) para mejorar el UX.
- **Seguridad de Interfaz**: Protecciones básicas contra inspección simple de código para mantener la integridad visual.

## 🛠️ Tecnologías

- **Frontend**: React 19 + Vite
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Backend**: Firebase (Firestore)
- **Iconos**: Lucide React

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/elkinalejandro30/500X2-TOURNAMENT.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno (`.env`):
   Crea un archivo `.env` en la raíz con tus credenciales de Firebase:
   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🚢 Despliegue

El proyecto está configurado para desplegarse fácilmente en GitHub Pages:

```bash
npm run deploy
```

---
Desarrollado para la comunidad de **Supremacy 1914**.

