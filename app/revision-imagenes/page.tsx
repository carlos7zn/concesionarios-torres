import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Revisión de Imágenes | Concesionarios Torres',
};

const vehicles = [
  { slug: 'cupra-formentor-vz-hybrid', brand: 'CUPRA', model: 'Formentor', version: '1.4 e-HYBRID VZ 245 CV DSG', year: 2023, price: 34900, image: '/images/vehicles/cupra-formentor-vz-hybrid/01.webp', gallery: ['/images/vehicles/cupra-formentor-vz-hybrid/01.webp', '/images/vehicles/cupra-formentor-vz-hybrid/02.webp'], badge: 'Seminuevo', ecoLabel: 'ECO' },
  { slug: 'tesla-model-y-long-range', brand: 'Tesla', model: 'Model Y', version: 'Gran Autonomía AWD Dual Motor', year: 2023, price: 43900, image: '/images/vehicles/tesla-model-y-long-range/01.jpg', gallery: ['/images/vehicles/tesla-model-y-long-range/01.jpg', '/images/vehicles/tesla-model-y-long-range/02.jpg'], badge: 'Ocasión', ecoLabel: '0' },
  { slug: 'audi-q3-sportback-s-line', brand: 'Audi', model: 'Q3 Sportback', version: '35 TDI 150 CV S line S tronic', year: 2022, price: 36500, image: '/images/vehicles/audi-q3-sportback-s-line/01.jpg', gallery: ['/images/vehicles/audi-q3-sportback-s-line/01.jpg', '/images/vehicles/audi-q3-sportback-s-line/02.jpg'], badge: 'Seminuevo', ecoLabel: 'C' },
  { slug: 'volkswagen-golf-gti', brand: 'Volkswagen', model: 'Golf', version: 'GTI 2.0 TSI 245 CV DSG', year: 2023, price: 33900, image: '/images/vehicles/volkswagen-golf-gti/01.jpg', gallery: ['/images/vehicles/volkswagen-golf-gti/01.jpg', '/images/vehicles/volkswagen-golf-gti/02.jpg'], badge: 'Seminuevo', ecoLabel: 'C' },
  { slug: 'toyota-rav4-hybrid', brand: 'Toyota', model: 'RAV4', version: '220H 4x2 Advance', year: 2023, price: 29800, image: '/images/vehicles/toyota-rav4-hybrid/01.jpg', gallery: ['/images/vehicles/toyota-rav4-hybrid/01.jpg', '/images/vehicles/toyota-rav4-hybrid/02.jpg'], badge: 'Seminuevo', ecoLabel: 'ECO' },
  { slug: 'bmw-serie-3-320d', brand: 'BMW', model: 'Serie 3', version: '320d Touring M Sport 190 CV', year: 2022, price: 37900, image: '/images/vehicles/bmw-serie-3-320d/01.jpg', gallery: ['/images/vehicles/bmw-serie-3-320d/01.jpg', '/images/vehicles/bmw-serie-3-320d/02.jpg'], badge: 'Ocasión', ecoLabel: 'ECO' },
  { slug: 'mercedes-benz-a-250e', brand: 'Mercedes-Benz', model: 'Clase A', version: 'A 250 e Sedán Híbrido Enchufable', year: 2023, price: 35500, image: '/images/vehicles/mercedes-benz-a-250e/01.jpg', gallery: ['/images/vehicles/mercedes-benz-a-250e/01.jpg', '/images/vehicles/mercedes-benz-a-250e/02.jpg'], badge: 'KM0', ecoLabel: '0' },
  { slug: 'hyundai-tucson-hybrid', brand: 'Hyundai', model: 'Tucson', version: '1.6 TGDi HEV Klass', year: 2023, price: 27500, image: '/images/vehicles/hyundai-tucson-hybrid/01.jpg', gallery: ['/images/vehicles/hyundai-tucson-hybrid/01.jpg', '/images/vehicles/hyundai-tucson-hybrid/02.jpg'], badge: 'Seminuevo', ecoLabel: 'ECO' },
];

export default function RevisionImagenes() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Revisión Visual de Imágenes</h1>
        <p className="text-gray-400 max-w-2xl">
          Página de revisión interna (noindex) para verificar visualmente que cada vehículo muestra el modelo y generación correctos.
          Haz clic en cada tarjeta para ver la ficha completa.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div key={v.slug} className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden group hover:border-brand-red/50 transition-all">
            <div className="relative h-48 w-full overflow-hidden bg-dark-800">
              <Image
                src={v.image}
                alt={`${v.brand} ${v.model}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {v.badge || 'Seminuevo'}
                </span>
                <span className="bg-dark-950/80 backdrop-blur-md text-white text-xs font-bold rounded-full">
                  Etiqueta {v.ecoLabel || 'ECO'}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold mb-1">
                {v.brand}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-1">
                {v.model} <span className="text-gray-400 font-normal text-sm block sm:inline">{v.version}</span>
              </h3>
              <p className="text-gray-400 text-xs mb-4">{v.year} · {v.price.toLocaleString()} €</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-dark-800">
                <div className="text-2xl font-display font-bold text-white">
                  {v.price.toLocaleString()} €
                </div>
                <a 
                  href={`/vehiculos/${v.slug}`}
                  className="text-sm bg-brand-red hover:bg-brand-redHover text-white px-4 py-2 rounded-xl font-medium transition-all"
                >
                  Ver ficha completa
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
