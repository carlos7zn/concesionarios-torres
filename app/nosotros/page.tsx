import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Nuestra Historia</span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">Más de 25 Años de Pasión por el Automóvil en Galicia</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Fundada en Rabadá, Concesionarios Torres se ha consolidado como el concesionario de referencia gracias a nuestro compromiso inquebrantable con la calidad, la transparencia y la atención cercana al cliente.
        </p>
      </div>

      {/* Image Banner */}
      <div className="rounded-3xl overflow-hidden border border-dark-800 h-[450px] shadow-2xl relative">
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80" alt="Concesionarios Torres Instalaciones" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white">Trayectoria y Confianza</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Miles de clientes satisfechos en toda Galicia avalan nuestra seriedad y profesionalidad en cada transacción de vehículos nuevos y de ocasión.
          </p>
        </div>

        <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white">Certificación Rigurosa</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Cada vehículo de nuestro stock pasa por una exhaustiva revisión de más de 100 puntos en nuestro taller oficial antes de ser puesto a la venta.
          </p>
        </div>

        <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white">Compromiso Postventa</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            No solo te vendemos un coche; te acompañamos durante toda su vida útil con nuestro taller especializado y garantía oficial de hasta 36 meses.
          </p>
        </div>
      </div>

    </div>
  );
}
