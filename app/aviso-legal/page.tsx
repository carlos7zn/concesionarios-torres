import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | Concesionarios Torres',
  description: 'Aviso legal de Concesionarios Torres. Información sobre identidad, responsabilidad, enlaces y políticas.',
};

export default function AvisoLegalPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">Aviso Legal</h1>
      
      <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">1. Identificación</h2>
          <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa al usuario de que este sitio web pertenece a Concesionarios Torres S.L., con CIF B-XXXXXXX y domicilio social en Rábade, Galicia, España. Teléfono: +34 986 000 000. Correo: carlos.torresgarcia@a.iesriomino.gal.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">2. Objeto</h2>
          <p>El presente aviso legal tiene como objetivo regular el uso del sitio web www.concesionarios-torres.com y los servicios que se prestan a través del mismo, así como las condiciones de uso de la información contenida en él.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">3. Responsabilidad</h2>
          <p>Concesionarios Torres no garantiza la utilidad, exactitud, fiabilidad, utilidad o actualidad de los contenidos de su sitio web, ni la posibilidad de acceso continuado y uninterrupted del servicio. Tampoco se responsabiliza de los daños y perjuicios que puedan derivarse del uso de esta página web o de los servicios en ella ofertados.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">4. Enlaces</h2>
          <p>El sitio web puede contener enlaces a otras páginas web de terceros. Concesionarios Torres no se responsabiliza del contenido, políticas de privacidad o prácticas de dichos terceros.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">5. Propiedad Intelectual</h2>
          <p>Todos los derechos de propiedad intelectual sobre los contenidos de este sitio web (textos, imágenes, diseños, logotipos, software, etc.) son de titularidad de Concesionarios Torres S.L. Queda prohibida la reproducción, distribución, comunicación pública o transformación sin autorización previa por escrito.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-white mb-3">6. Legislación Aplicable</h2>
          <p>El presente aviso legal se rige por la legislación española aplicable en materia de servicios de la sociedad de la información, comercio electrónico, protección de datos y propiedad intelectual.</p>
        </section>
      </div>
    </div>
  );
}