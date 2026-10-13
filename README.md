# Concesionarios Torres

Sitio web oficial y plataforma digital para **Concesionarios Torres**, concesionario multimarca de referencia en Rábade (Galicia).

## Stack Tecnológico

- **Next.js 14 (App Router)** + TypeScript + Tailwind CSS
- **Lucide React** para iconografía moderna
- Datos de vehículos gestionados en TypeScript local (`data/vehicles.ts`)

## Requisitos Previos

- Node.js (versión 18 o superior recomendada)
- npm o yarn

## Instrucciones de Instalación y Ejecución

1. Clona el repositorio e instala las dependencias:
   ```bash
   git clone https://github.com/carlos7zn/concesionarios-torres.git
   cd concesionarios-torres
   npm install
   ```

2. Ejecuta el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Cómo Personalizar Contenidos y Datos

- **Vehículos y Stock:** Modifica o añade vehículos en `data/vehicles.ts`. Cada vehículo incluye marca, modelo, versión, precio, kilómetros, combustible, transmisión, etiqueta ECO y galería de imágenes.
- **Colores y Estilos:** La paleta de colores y tokens de diseño están definidos en `tailwind.config.js` y `app/globals.css`. El color principal de acento es el rojo deportivo (`#E10600`).
- **Información de Contacto y Horarios:** Actualizable en los componentes de footer (`components/Footer.tsx`) y página de contacto (`app/contacto/page.tsx`).

## Despliegue en Vercel

El proyecto está preparado para desplegarse instantáneamente en **Vercel**:
1. Importa el repositorio `carlos7zn/concesionarios-torres` en tu panel de Vercel.
2. Vercel detectará automáticamente Next.js.
3. Haz clic en **Deploy** y el sitio estará activo en segundos con SSL y CDN global.