import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 text-gray-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 rounded-lg bg-brand-red flex items-center justify-center font-display font-bold text-lg text-white shadow-lg">
                T
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-white">CONCESIONARIOS</span>
                <span className="text-[10px] tracking-widest text-brand-red font-semibold uppercase -mt-1">TORRES</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              Tu referente de confianza en Rábade (Galicia) para vehículos nuevos, seminuevos, KM0 y ocasión con la máxima garantía y tasación garantizada.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="inline-flex items-center space-x-1 text-xs text-gray-300 bg-dark-800 px-2.5 py-1 rounded-full border border-dark-700">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                <span>Garantía Oficial</span>
              </span>
              <span className="inline-flex items-center space-x-1 text-xs text-gray-300 bg-dark-800 px-2.5 py-1 rounded-full border border-dark-700">
                <Award className="w-3.5 h-3.5 text-brand-red" />
                <span>+25 Años Experiencia</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 tracking-wide">Navegación</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/vehiculos" className="hover:text-white transition-colors">Catálogo de Vehículos</Link></li>
              <li><Link href="/financiacion" className="hover:text-white transition-colors">Calculadora de Financiación</Link></li>
              <li><Link href="/vende-tu-coche" className="hover:text-white transition-colors">Tasación y Venta</Link></li>
              <li><Link href="/taller" className="hover:text-white transition-colors">Taller y Cita Previa</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto y Ubicación</Link></li>
            </ul>
          </div>

          {/* Col 3: Horarios */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 tracking-wide">Horarios de Apertura</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white block font-medium">Lunes a Viernes</span>
                  <span className="text-gray-400 text-xs">9:00 a 14:00 y 16:00 a 20:00</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white block font-medium">Sábados</span>
                  <span className="text-gray-400 text-xs">10:00 a 14:00 (Tardes con cita previa)</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-500 block font-medium">Domingos y Festivos</span>
                  <span className="text-gray-600 text-xs">Cerrado</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 tracking-wide">Contacto Directo</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Rábade, Galicia, España</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="tel:34986000000" className="hover:text-white transition-colors">+34 986 000 000</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="mailto:carlos.torresgarcia@a.iesriomino.gal" className="hover:text-white transition-colors truncate">carlos.torresgarcia@a.iesriomino.gal</a>
              </li>
            </ul>
            <div className="mt-5">
              <a 
                href="https://wa.me/34986000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors w-full justify-center shadow-lg shadow-emerald-900/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Abrir Chat de WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Concesionarios Torres S.L. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link href="/contacto" className="hover:text-gray-400 transition-colors">Aviso Legal</Link>
            <Link href="/contacto" className="hover:text-gray-400 transition-colors">Política de Privacidad</Link>
            <Link href="/contacto" className="hover:text-gray-400 transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
