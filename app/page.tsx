'use client';

import { useState } from 'react';
import Link from 'next/link';
import { vehicles, brandsList } from '@/data/vehicles';
import VehicleCard from '@/components/VehicleCard';
import { 
  Search, ShieldCheck, Wrench, Banknote, Car, Award, Clock, 
  ArrowRight, CheckCircle2, ChevronDown, Star, Phone, MessageSquare, MapPin, Sparkles 
} from 'lucide-react';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [maxPrice, setMaxPrice] = useState('50000');

  // Financing calculator state
  const [carPrice, setCarPrice] = useState(32000);
  const [downPayment, setDownPayment] = useState(6000);
  const [termMonths, setTermMonths] = useState(60);
  const interestRate = 6.9; // TIN

  const financedAmount = carPrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPayment = 
    financedAmount > 0 
      ? (financedAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termMonths)) / 
        (Math.pow(1 + monthlyInterestRate, termMonths) - 1)
      : 0;

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Qué garantía incluyen los vehículos seminuevos y de ocasión?',
      a: 'Todos nuestros vehículos seminuevos, KM0 y de ocasión cuentan con una garantía oficial de hasta 36 meses, además de haber superado una certificación rigurosa de más de 100 puntos en nuestro taller oficial.'
    },
    {
      q: '¿Puedo financiar la compra de mi coche sin entrada?',
      a: 'Sí, ofrecemos soluciones de financiación flexible 100% a medida, pudiendo financiar el importe total o parcial con cuotas adaptadas a tus necesidades y respuesta en menos de 24 horas.'
    },
    {
      q: '¿Cómo funciona la tasación de mi coche actual si quiero entregarlo como parte de pago?',
      a: 'Es muy sencillo. Puedes rellenar nuestro formulario online con la matrícula y los kilómetros, o visitarnos en Rábade. Tasamos tu vehículo en el acto al mejor valor de mercado y lo descontamos directamente de tu nuevo coche.'
    },
    {
      q: '¿Realizáis entregas de vehículos a domicilio en toda España?',
      a: 'Sí, disponemos de un servicio de transporte especializado para entregar tu nuevo vehículo directamente en la puerta de tu casa en cualquier punto de la península.'
    },
    {
      q: '¿Cuál es el horario de atención y del taller postventa?',
      a: 'Nuestro horario comercial es de lunes a viernes de 9:00 a 14:00 y de 16:00 a 20:00, y sábados de 10:00 a 14:00. El taller oficial abre de lunes a viernes de 8:00 a 18:00.'
    }
  ];

  return (
    <div className="bg-dark-950 text-gray-100">

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90" 
            alt="Concesionarios Torres Hero" 
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-dark-900/90 border border-dark-800 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-red mb-6 uppercase tracking-widest shadow-xl">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Concesionario de Referencia en Rábade, Galicia</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
              Tu próximo coche <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                empieza aquí.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl font-normal leading-relaxed">
              Vehículos nuevos, seminuevos y KM0 de las marcas más prestigiosas. Máxima transparencia, tasación instantánea y financiación a tu medida.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-14">
              <Link 
                href="/vehiculos" 
                className="bg-brand-red hover:bg-brand-redHover text-white px-8 py-4 rounded-xl font-medium text-base transition-all shadow-xl shadow-brand-red/30 flex items-center justify-center space-x-3 group"
              >
                <span>Explorar Vehículos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/34986000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-900/80 hover:bg-dark-900 border border-dark-700 backdrop-blur-md text-white px-8 py-4 rounded-xl font-medium text-base transition-all flex items-center justify-center space-x-3"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="bg-dark-900/90 border border-dark-800 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-4xl">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center space-x-2">
              <Search className="w-4 h-4 text-brand-red" />
              <span>Buscador Rápido de Stock</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Marca</label>
                <select 
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-brand-red"
                >
                  <option value="">Todas las marcas</option>
                  {brandsList.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Combustible</label>
                <select 
                  value={selectedFuel}
                  onChange={(e) => setSelectedFuel(e.target.value)}
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-brand-red"
                >
                  <option value="">Todos los tipos</option>
                  <option value="Gasolina">Gasolina</option>
                  <option value="Diésel">Diésel</option>
                  <option value="Híbrido">Híbrido</option>
                  <option value="Eléctrico">Eléctrico</option>
                </select>
              </div>

              <div className="flex items-end">
                <Link 
                  href={`/vehiculos?brand=${selectedBrand}&fuel=${selectedFuel}`}
                  className="w-full bg-white hover:bg-gray-200 text-dark-950 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Search className="w-4 h-4" />
                  <span>Ver Resultados</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Franja de Confianza (Stats) */}
      <section className="bg-dark-900 border-t border-b border-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">+25</div>
              <div className="text-sm text-gray-400 font-medium">Años de experiencia</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">+5.400</div>
              <div className="text-sm text-gray-400 font-medium">Vehículos entregados</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">98%</div>
              <div className="text-sm text-gray-400 font-medium">Clientes satisfechos</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">36 M</div>
              <div className="text-sm text-gray-400 font-medium">Garantía oficial máxima</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Marquee de Marcas */}
      <section className="py-10 bg-dark-950 overflow-hidden border-b border-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Trabajamos con las mejores marcas del mercado</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-4 opacity-75">
          {['Volkswagen', 'SEAT', 'CUPRA', 'Toyota', 'Peugeot', 'Renault', 'Ford', 'Hyundai', 'BMW', 'Audi', 'Mercedes', 'Tesla'].map((brand, i) => (
            <div key={i} className="text-gray-400 font-display font-bold text-lg sm:text-xl tracking-wider hover:text-white transition-colors px-4 py-2 bg-dark-900/60 rounded-xl border border-dark-800">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Vehículos Destacados */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Stock Exclusivo</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Vehículos Destacados del Mes</h2>
          </div>
          <Link href="/vehiculos" className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-brand-red hover:text-red-400 font-semibold transition-colors">
            <span>Ver catálogo completo ({vehicles.length} disponibles)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.filter(v => v.featured).slice(0, 4).map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      {/* 6. Explora por Categoría */}
      <section className="py-20 bg-dark-900 border-t border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Encuentra tu Estilo</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Explora por Categoría</h2>
            <p className="text-gray-400 text-sm">Seleccionamos cuidadosamente cada categoría para adaptarnos a tu ritmo de vida y necesidades profesionales o familiares.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Nuevos y KM0', subtitle: 'A estrenar con entrega inmediata', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80', badge: 'KM0' },
              { title: 'Seminuevos y Ocasión', subtitle: 'Certificados y revisados 100%', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80', badge: 'Garantía' },
              { title: 'Eléctricos e Híbridos', subtitle: 'Etiqueta ECO y Cero emisiones', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1b?auto=format&fit=crop&w=800&q=80', badge: 'ECO / 0' },
              { title: 'SUV & Crossovers', subtitle: 'Espacio, polivalencia y diseño', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80', badge: 'Popular' },
              { title: 'Deportivos & Compactos', subtitle: 'Emoción y dinamismo al volante', image: 'https://images.unsplash.com/photo-1622227922714-ed25612f0e0c?auto=format&fit=crop&w=800&q=80', badge: 'GTI' },
              { title: 'Berlinas & Familiares', subtitle: 'Confort superior en viajes largos', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80', badge: 'Confort' },
            ].map((cat, idx) => (
              <Link key={idx} href="/vehiculos" className="group relative h-72 rounded-2xl overflow-hidden block shadow-xl border border-dark-800">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                  {cat.badge}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-brand-red transition-colors">{cat.title}</h3>
                  <p className="text-gray-300 text-xs mb-3">{cat.subtitle}</p>
                  <span className="inline-flex items-center space-x-1 text-xs font-semibold text-white group-hover:underline">
                    <span>Ver vehículos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comprar tu coche en 4 pasos */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Proceso Sencillo</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Estrena Coche en 4 Pasos</h2>
          <p className="text-gray-400 text-sm">Diseñamos una experiencia de compra rápida, transparente y totalmente adaptada a ti.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Elige tu vehículo', desc: 'Explora nuestro stock online o ven a visitarnos a nuestras instalaciones en Rábade.' },
            { step: '02', title: 'Pruébalo sin compromiso', desc: 'Agenda una prueba de conducción en carretera con uno de nuestros asesores expertos.' },
            { step: '03', title: 'Financiación a medida', desc: 'Calcula tu cuota y obtén aprobación en menos de 24 horas con condiciones preferentes.' },
            { step: '04', title: 'Entrega en casa o concesionario', desc: 'Llévate tu coche totalmente revisado, matriculado y listo para disfrutar.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-dark-900 border border-dark-800 p-8 rounded-2xl relative group hover:border-brand-red/50 transition-all">
              <div className="text-4xl font-display font-bold text-brand-red mb-4 group-hover:scale-110 transition-transform origin-left">{item.step}</div>
              <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Financiación & Calculadora Interactiva */}
      <section id="financiacion" className="py-20 bg-dark-900 border-t border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-brand-red font-bold block">Financiación Flexible</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Calcula tu Cuota Ideal en Tiempo Real</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Trabajamos con las principales entidades financieras para ofrecerte tipos de interés competitivos, sin letra pequeña y con cuotas totalmente adaptadas a tus ingresos.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>Sin entrada obligatoria (financia hasta el 100%)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>Respuesta y estudio financiero en menos de 24h</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>Opción de cancelación o amortización anticipada</span>
                </li>
              </ul>
            </div>

            {/* Calculator Widget */}
            <div className="lg:col-span-6 bg-dark-950 border border-dark-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center space-x-2">
                <Banknote className="w-5 h-5 text-brand-red" />
                <span>Simulador de Financiación</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Precio del vehículo:</span>
                    <span className="text-white font-bold">{carPrice.toLocaleString()} €</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="80000" 
                    step="1000"
                    value={carPrice}
                    onChange={(e) => setCarPrice(Number(e.target.value))}
                    className="w-full accent-brand-red cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Entrada inicial:</span>
                    <span className="text-white font-bold">{downPayment.toLocaleString()} €</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max={carPrice - 5000} 
                    step="500"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full accent-brand-red cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Plazo (meses):</span>
                    <span className="text-white font-bold">{termMonths} meses</span>
                  </div>
                  <input 
                    type="range" 
                    min="12" 
                    max="96" 
                    step="12"
                    value={termMonths}
                    onChange={(e) => setTermMonths(Number(e.target.value))}
                    className="w-full accent-brand-red cursor-pointer"
                  />
                </div>

                <div className="pt-6 border-t border-dark-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Cuota mensual estimada</span>
                    <span className="text-3xl font-display font-bold text-brand-red">
                      {Math.round(monthlyPayment)} € <span className="text-xs text-gray-400 font-normal">/mes</span>
                    </span>
                    <span className="text-[10px] text-gray-500 block mt-1">TIN {interestRate}% (Orientativo sin compromiso)</span>
                  </div>

                  <Link 
                    href="/contacto" 
                    className="bg-brand-red hover:bg-brand-redHover text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-brand-red/20"
                  >
                    Solicitar Estudio
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Vende tu coche / Tasación */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-dark-900 to-dark-800 border border-dark-700 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 hidden lg:block pointer-events-none">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80" alt="Car" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Tasación Inmediata</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">¿Quieres Vender o Cambiar tu Coche?</h2>
            <p className="text-gray-300 text-sm mb-8">
              Tasamos tu vehículo actual en menos de 10 minutos con la máxima valoración del mercado gallego. Descuéntalo al comprar tu nuevo coche o recíbelo al contado.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('¡Solicitud de tasación enviada con éxito! Nos pondremos en contacto contigo en menos de 2 horas.'); }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Matrícula (ej. 1234 ABC)" 
                required
                className="bg-dark-950 border border-dark-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red"
              />
              <input 
                type="number" 
                placeholder="Kilómetros (ej. 45000)" 
                required
                className="bg-dark-950 border border-dark-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red"
              />
              <button 
                type="submit"
                className="bg-brand-red hover:bg-brand-redHover text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all shadow-lg"
              >
                Tasar Ahora
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. Por qué elegir Torres */}
      <section className="py-20 bg-dark-900 border-t border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Nuestros Valores</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">¿Por qué Elegir Concesionarios Torres?</h2>
            <p className="text-gray-400 text-sm">Más de dos décadas avalan nuestro compromiso con la excelencia, la transparencia y el servicio postventa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Garantía Total Certificada', desc: 'Vehículos revisados exhaustivamente con garantía oficial de hasta 36 meses sin sorpresas.' },
              { icon: CheckCircle2, title: 'Revisión de 100+ Puntos', desc: 'Cada coche pasa rigurosos controles mecánicos y estéticos antes de ponerse a la venta.' },
              { icon: Award, title: 'Transparencia Absoluta', desc: 'Historial de mantenimiento verificado, certificado de kilometraje y ausencia de golpes estructurales.' },
              { icon: Clock, title: 'Entrega Rápida Express', desc: 'Vehículos listos para entrega inmediata con todos los trámites de cambio de titularidad incluidos.' },
              { icon: Phone, title: 'Atención Personalizada', desc: 'Asesores comerciales expertos para ayudarte a elegir el vehículo que de verdad necesitas.' },
              { icon: Wrench, title: 'Taller Propio Postventa', desc: 'Servicio técnico oficial con maquinaria de vanguardia y mecánicos especializados.' },
            ].map((adv, idx) => (
              <div key={idx} className="bg-dark-950 border border-dark-800 p-8 rounded-2xl group hover:border-brand-red/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                  <adv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{adv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Taller y Postventa */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-dark-800">
            <img src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80" alt="Taller Torres" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold block">Servicio Oficial</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Taller y Mantenimiento Postventa</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nuestro compromiso no termina con la venta. Contamos con un taller mecánico e instalaciones equipadas con la última tecnología de diagnosis y personal altamente cualificado.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Revisiones oficiales, neumáticos y alineación</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Vehículo de sustitución disponible bajo reserva</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Horario de taller: Lunes a viernes de 8:00 a 18:00</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link 
                href="/taller" 
                className="inline-flex items-center space-x-3 bg-brand-red hover:bg-brand-redHover text-white px-8 py-4 rounded-xl font-medium text-sm transition-all shadow-lg shadow-brand-red/20"
              >
                <Wrench className="w-4 h-4" />
                <span>Reservar Cita en Taller</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Testimonios */}
      <section className="py-20 bg-dark-900 border-t border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Opiniones Reales</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-gray-400 text-sm">La satisfacción de quienes confían en nosotros es nuestra mejor carta de presentación.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alejandro G.', role: 'Cliente de Ourense', text: 'Compré un CUPRA Formentor seminuevo y el trato fue exquisito desde el primer minuto. Rapidez en la financiación y el coche impecable.', stars: 5 },
              { name: 'María Dolores V.', role: 'Cliente de Lugo', text: 'Excelente servicio de taller y postventa. Me atendieron de urgencia un sábado y solucionaron el problema con total profesionalidad.', stars: 5 },
              { name: 'Roberto M.', role: 'Cliente de Rábade', text: 'Tasaron mi antiguo coche al mejor precio del mercado y en menos de 24 horas ya estaba estrenando mi nuevo Audi Q3. 100% recomendable.', stars: 5 },
            ].map((test, idx) => (
              <div key={idx} className="bg-dark-950 border border-dark-800 p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{test.text}"</p>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base">{test.name}</h4>
                  <span className="text-xs text-gray-500">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Preguntas Frecuentes (FAQ) */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Dudas Resueltas</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-400 text-sm">Todo lo que necesitas saber sobre nuestros vehículos, garantías y procesos de compra.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-display font-semibold hover:text-brand-red transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-brand-red' : 'text-gray-400'}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-dark-800/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 17. CTA Final */}
      <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 border-t border-dark-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Estrena Hoy</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">¿Listo para Estrenar Coche?</h2>
          <p className="text-gray-300 text-base mb-10 max-w-2xl mx-auto">
            Visítanos en Rábade o contáctanos ahora mismo por WhatsApp o teléfono. Nuestros asesores te esperan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/vehiculos" 
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-redHover text-white px-8 py-4 rounded-xl font-medium text-base transition-all shadow-xl shadow-brand-red/30 flex items-center justify-center space-x-2"
            >
              <span>Ver Stock Disponible</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://wa.me/34986000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-dark-900 hover:bg-dark-800 border border-dark-700 text-white px-8 py-4 rounded-xl font-medium text-base transition-all flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5 text-emerald-500" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
