'use client';

import { useState } from 'react';
import { Car, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function VendeTuCochePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-3xl mb-12">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Tasación Profesional</span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">Vende o Cambia tu Coche al Mejor Precio</h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Tasamos tu vehículo de forma totalmente transparente y rápida. Consigue una valoración justa basada en el mercado actual o utilízalo como parte de pago para estrenar tu próximo coche.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-display font-bold text-white">¿Cómo funciona nuestro servicio de tasación?</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">1. Formulario rápido online</strong>
                  <span>Indícanos los datos básicos de tu vehículo (matrícula y kilómetros).</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">2. Valoración preliminar en 2 horas</strong>
                  <span>Te contactamos con una estimación de precio muy precisa y competitiva.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">3. Revisión presencial y pago inmediato</strong>
                  <span>Revisamos el coche en nuestras instalaciones de Rábade y formalizamos el pago en el acto.</span>
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
              <h3 className="text-2xl font-display font-bold text-white">¡Solicitud Recibida!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Hemos registrado los datos de tu vehículo correctamente. Un perito especialista se pondrá en contacto contigo en menos de 2 horas.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-brand-red text-white px-6 py-2.5 rounded-xl text-sm font-medium"
              >
                Tasarr otro vehículo
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">Formulario de Tasación Exprés</h3>
              
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Matrícula del vehículo *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ej. 1234 ABC" 
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Kilómetros aproximados *</label>
                  <input 
                    type="number" 
                    required 
                    placeholder="Ej. 65000" 
                    className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Año de matriculación *</label>
                  <input 
                    type="number" 
                    required 
                    placeholder="Ej. 2021" 
                    className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Email de contacto *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="tu@email.com" 
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Teléfono / WhatsApp *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Ej. +34 600 000 000" 
                  className="w-full bg-dark-950 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-semibold py-4 rounded-xl text-sm transition-all shadow-lg shadow-brand-red/20"
              >
                Solicitar Tasación Oficial
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
