'use client';

import { useState } from 'react';
import { Wrench, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function TallerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-3xl mb-12">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Servicio Oficial Postventa</span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">Taller Mecánico y Mantenimiento Avanzado</h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Cuidamos de tu vehículo con la máxima exigencia. Diagnóstico electrónico de última generación, recambios originales y mecánicos especializados en todas las marcas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-display font-bold text-white">Nuestros Servicios de Taller</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Revisiones periódicas oficiales</strong>
                  <span>Mantenimiento certificado sin perder la garantía del fabricante.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Diagnosis electrónica avanzada</strong>
                  <span>Detección precisa de averías con equipos de última tecnología multimarca.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Neumáticos, frenos y alineación</strong>
                  <span>Primeras marcas y equilibrado computarizado de alta precisión.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Horario de taller</strong>
                  <span>Lunes a viernes de 8:00 a 18:00 ininterrumpidamente.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 bg-dark-900 border border-dark-800 p-8 rounded-3xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-600/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">¡Cita Solicitada con Éxito!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Hemos registrado tu petición de cita previa en el taller. Te llamaremos en breve para confirmar el horario exacto.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-brand-red text-white px-6 py-2.5 rounded-xl text-sm font-medium"
              >
                Reservar otra cita
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">Solicita Cita Previa en Taller</h3>
              
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Nombre y Apellidos *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Tu nombre completo" 
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Tu teléfono" 
                    className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Matrícula *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ej. 1234 ABC" 
                    className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Servicio requerido *</label>
                <select className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red">
                  <option>Revisión periódica / Cambio de aceite</option>
                  <option>Neumáticos y alineación</option>
                  <option>Frenos y suspensión</option>
                  <option>Diagnosis de avería / Testigos</option>
                  <option>ITV previa / Otros</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-semibold py-4 rounded-xl text-sm transition-all shadow-lg shadow-brand-red/20"
              >
                Confirmar Solicitud de Cita
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
