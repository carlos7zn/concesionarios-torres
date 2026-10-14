import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Concesionarios Torres',
  description: 'Política de privacidad y protección de datos de Concesionarios Torres.',
};

export default function PrivacidadPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">Política de Privacidad</h1>

      <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">1. Responsable del Tratamiento</h2>
          <p>Concesionarios Torres S.L., CIF B-XXXXXXX, domicilio en Rábade, Galicia, España. Correo: carlos.torresgarcia@a.iesriomino.gal.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">2. Datos Recogidos</h2>
          <p>Recogemos los datos que nos proporciones al completar formularios de contacto, tasación o cita previa (nombre, email, teléfono, matrícula, kilómetros). Además, usamos un conteo anónimo de visitas web que no almacena datos personales ni direcciones IP.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">3. Finalidad</h2>
          <p>Utilizamos los datos para gestionar tus solicitudes (prueba de conducción, tasación, cita previa), responderte a tus consultas, enviarte información comercial sobre nuestros vehículos y servicios (si has aceptado), y mejorar la experiencia del sitio web.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">4. Conservación</h2>
          <p>Conservamos tus datos durante el tiempo necesario para cumplir con la finalidad para la que se recogieron y mientras exista una relación comercial o un interés legítimo, o según exija la ley.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">5. Derechos</h2>
          <p>Tienes derecho a accutar, rectificar, suprimir, limitar el tratamiento, portabilidad y oponerte al tratamiento de tus datos. Para ejercitarlos, contáctanos en carlos.torresgarcia@a.iesriomino.gal.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">6. Contador Anónimo de Visitas</h2>
          <p>Utilizamos un servicio de conteo anónimo (Upstash Redis) que registra únicamente el número total de visitas al sitio web. No se almacenan ni procesan datos personales ni direcciones IP de los usuarios. Esta información se utiliza exclusivamente para purposes estadísticos y para mejorar nuestra oferta de servicios.</p>
          <p className="mt-2 text-xs text-gray-500">Puedes oponerte a este seguimiento en cualquier momento modificando la configuración de tu navegador.</p>
        </section>
      </div>
    </div>
  );
}