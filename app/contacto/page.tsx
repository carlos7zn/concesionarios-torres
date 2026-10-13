'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-3xl mb-12">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Estamos a tu Disposición</span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">Contacto y Ubicación</h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Visítanos en nuestras instalaciones en Rábade (Galicia) o envíanos tus consultas a través del formulario o WhatsApp. Te atenderemos de inmediato.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Info & Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-display font-bold text-white">Información de Contacto</h3>
            
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Ubicación</strong>
                  <span>Rábade, Galicia, España</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Teléfono / WhatsApp</strong>
                  <a href="tel:34986000000" className="hover:text-white transition-colors">+34 986 000 000</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Correo Electrónico</strong>
                  <a href="mailto:carlos.torresgarcia@a.iesriomino.gal" className="hover:text-white transition-colors truncate">carlos.torresgarcia@a.iesriomino.gal</a>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-dark-800 space-y-3">
              <h4 className="text-white font-display font-semibold text-sm">Horario Comercial</h4>
              <p className="text-xs text-gray-400">Lunes a viernes: 9:00 a 14:00 y de 16:00 a 20:00</p>
              <p className="text-xs text-gray-400">Sábados: 10:00 a 14:00 (Tardes con cita previa)</p>
              <p className="text-xs text-gray-400">Domingos y festivos: Cerrado</p>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/34986000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-dark-900 border border-dark-800 p-8 rounded-3xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-emerald-600/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Gracias por contactar con Concesionarios Torres. Responderemos a tu consulta a la mayor brevedad posible.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-brand-red text-white px-6 py-2.5 rounded-xl text-sm font-medium"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">Envíanos un Mensaje</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Nombre y Apellidos *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Tu nombre" 
                    className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Tu teléfono" 
                    className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Correo Electrónico *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="tu@email.com" 
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Mensaje o Motivo de Consulta *</label>
                <textarea 
                  rows={4}
                  required 
                  placeholder="Cuéntanos en qué podemos ayudarte..." 
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-semibold py-4 rounded-xl text-sm transition-all shadow-lg shadow-brand-red/20"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
