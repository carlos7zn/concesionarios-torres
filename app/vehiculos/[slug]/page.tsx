import { vehicles } from '@/data/vehicles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Gauge, Fuel, Settings, Calendar, ShieldCheck, CheckCircle2, 
  ArrowLeft, Phone, MessageSquare, Share2, MapPin 
} from 'lucide-react';
import VehicleCard from '@/components/VehicleCard';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return vehicles.map((v) => ({
    slug: v.slug,
  }));
}

export default function VehicleDetailPage({ params }: PageProps) {
  const vehicle = vehicles.find(v => v.slug === params.slug);

  if (!vehicle) {
    notFound();
  }

  const similarVehicles = vehicles.filter(v => v.id !== vehicle.id && v.brand === vehicle.brand).slice(0, 3);

  const whatsappText = encodeURIComponent(`Hola, me interesa el vehículo ${vehicle.brand} ${vehicle.model} (${vehicle.version}) de ${vehicle.price.toLocaleString()} € visto en vuestra web.`);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Back button */}
      <div className="mb-8">
        <Link href="/vehiculos" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Gallery & Specs */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden border border-dark-800 bg-dark-900 shadow-2xl h-[400px] sm:h-[500px] relative">
            <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {vehicle.badge}
              </span>
              <span className="bg-dark-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-dark-700">
                Etiqueta {vehicle.ecoLabel}
              </span>
            </div>
          </div>

          {/* Description & Overview */}
          <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-display font-bold text-white">Descripción General</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              {vehicle.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-dark-800">
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800">
                <span className="text-xs text-gray-500 block mb-1">Kilometraje</span>
                <span className="text-white font-bold text-lg">{vehicle.km.toLocaleString()} km</span>
              </div>
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800">
                <span className="text-xs text-gray-500 block mb-1">Año</span>
                <span className="text-white font-bold text-lg">{vehicle.year}</span>
              </div>
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800">
                <span className="text-xs text-gray-500 block mb-1">Combustible</span>
                <span className="text-white font-bold text-lg">{vehicle.fuel}</span>
              </div>
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800">
                <span className="text-xs text-gray-500 block mb-1">Potencia</span>
                <span className="text-white font-bold text-lg">{vehicle.hp} CV</span>
              </div>
            </div>
          </div>

          {/* Equipment & Features */}
          <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-display font-bold text-white">Equipamiento Destacado</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vehicle.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-dark-950 p-4 rounded-xl border border-dark-800">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="text-gray-200 text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Pricing & CTA Card */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl shadow-2xl sticky top-28 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-red font-bold">{vehicle.brand}</span>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">{vehicle.model}</h1>
              <p className="text-gray-400 text-xs mb-6">{vehicle.version}</p>

              <div className="flex items-baseline space-x-3 pb-6 border-b border-dark-800">
                <span className="text-4xl font-display font-bold text-white">
                  {vehicle.price.toLocaleString()} €
                </span>
                {vehicle.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {vehicle.oldPrice.toLocaleString()} €
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 text-xs text-gray-400">
              <div className="flex items-center justify-between py-2 border-b border-dark-800/60">
                <span>Transmisión</span>
                <span className="text-white font-medium">{vehicle.transmission}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-dark-800/60">
                <span>Garantía oficial</span>
                <span className="text-white font-medium">Hasta 36 meses</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-dark-800/60">
                <span>Ubicación</span>
                <span className="text-white font-medium">Concesionario Rabadá</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <a 
                href={`https://wa.me/34986000000?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-6 rounded-xl text-sm transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Reservar / Consultar por WhatsApp</span>
              </a>

              <Link 
                href="/contacto"
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-semibold py-4 px-6 rounded-xl text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-red/20"
              >
                <Phone className="w-5 h-5" />
                <span>Solicitar Prueba de Conducción</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-dark-800 text-center">
              <span className="text-[11px] text-gray-500 block">
                Financiación disponible desde {Math.round(vehicle.price / 72)} €/mes. Sujeto a aprobación financiera.
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Similar vehicles */}
      {similarVehicles.length > 0 && (
        <div className="mt-20 pt-16 border-t border-dark-800">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Vehículos Similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarVehicles.map(veh => (
              <VehicleCard key={veh.id} vehicle={veh} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
