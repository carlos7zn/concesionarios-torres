'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Banknote, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinanciacionPage() {
  const [carPrice, setCarPrice] = useState(30000);
  const [downPayment, setDownPayment] = useState(5000);
  const [termMonths, setTermMonths] = useState(60);
  const interestRate = 6.9;

  const financedAmount = carPrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPayment = 
    financedAmount > 0 
      ? (financedAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termMonths)) / 
        (Math.pow(1 + monthlyInterestRate, termMonths) - 1)
      : 0;

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-3xl mb-12">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Soluciones a Medida</span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">Financiación Flexible para tu Nuevo Coche</h1>
        <p className="text-gray-300 text-base leading-relaxed">
          En Concesionarios Torres facilitamos la compra de tu vehículo con planes de financiación personalizados, sin entrada obligatoria y con respuesta en menos de 24 horas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Info */}
        <div className="lg:col-span-6 space-y-8">
          <div className="bg-dark-900 border border-dark-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-display font-bold text-white">Ventajas de nuestra financiación</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Sin entrada inicial obligatoria</strong>
                  <span>Puedes financiar el 100% del importe del vehículo y los gastos asociados.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Estudio rápido en 24h</strong>
                  <span>Sin esperas innecesarias. Evaluamos tu caso con total confidencialidad y agilidad.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Plazos adaptados</strong>
                  <span>Elige cuotas desde 12 hasta 96 meses según tu comodidad y capacidad de pago.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Tipos competitivos</strong>
                  <span>Colaboramos directamente con entidades de primer nivel para ofrecerte el mejor TIN del mercado.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Calculator */}
        <div className="lg:col-span-6 bg-dark-900 border border-dark-800 p-8 rounded-3xl shadow-2xl">
          <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center space-x-2">
            <Banknote className="w-5 h-5 text-brand-red" />
            <span>Simulador de Cuotas</span>
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

            <div className="pt-6 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-400 block">Cuota mensual estimada</span>
                <span className="text-4xl font-display font-bold text-brand-red">
                  {Math.round(monthlyPayment)} € <span className="text-xs text-gray-400 font-normal">/mes</span>
                </span>
                <span className="text-[10px] text-gray-500 block mt-1">TIN {interestRate}% (Simulación orientativa)</span>
              </div>

              <Link 
                href="/contacto" 
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-redHover text-white px-8 py-4 rounded-xl font-medium text-sm transition-all shadow-lg shadow-brand-red/20 text-center"
              >
                Solicitar Estudio Ahora
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
