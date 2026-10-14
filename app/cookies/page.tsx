import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Concesionarios Torres',
  description: 'Política de cookies de Concesionarios Torres. Información sobre el uso de cookies y preferencias.',
};

export default function CookiesPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">Política de Cookies</h1>

      <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Se utilizan para recordar preferencias, mejorar la experiencia del usuario y recopilar información estadística anónima.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">Cookies que utilizamos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies técnicas o esenciales:</strong> Necesarias para el funcionamiento básico del sitio web (navegación, formularios, preferencias de idioma).</li>
            <li><strong>Cookies de análisis:</strong> Nos permiten recopilar datos anónimos sobre cómo los usuarios utilizan el sitio web y así poder mejorarlo.</li>
            <li><strong>Cookies de preferencias:</strong> Permiten recordar configuraciones como el idioma o la región.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">Gestión de cookies</h2>
          <p>Puedes configurar tu navegador para aceptar, rechazar o notificarte cuando reciba cookies. La forma de hacerlo varía según el navegador que utilices (Chrome, Firefox, Safari, Edge, etc.). Si rechazas las cookies técnicas, es posible que algunos servicios o funciones del sitio web no estén disponibles.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">Configurar cookies</h2>
          <p>Puedes gestionar tus preferencias de cookies en este mismo sitio web a través del banner que aparece al acceder o en cualquier momento desde el pie de página.</p>
        </section>
      </div>
    </div>
  );
}