'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-950/85 backdrop-blur-md border-b border-dark-800/60 py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center font-display font-bold text-xl text-white shadow-lg shadow-brand-red/30 group-hover:scale-105 transition-transform">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-lg text-white">CONCESIONARIOS</span>
              <span className="text-xs tracking-widest text-brand-red font-semibold uppercase -mt-1">TORRES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <Link href="/vehiculos" className="hover:text-white transition-colors">Vehículos</Link>
            <Link href="/financiacion" className="hover:text-white transition-colors">Financiación</Link>
            <Link href="/vende-tu-coche" className="hover:text-white transition-colors">Vende tu Coche</Link>
            <Link href="/taller" className="hover:text-white transition-colors">Taller y Postventa</Link>
            <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
            <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href="https://wa.me/34986000000?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20vuestros%20vehículos." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-dark-900 border border-dark-800 hover:border-brand-red transition-all text-sm font-medium"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            <Link 
              href="/contacto" 
              className="flex items-center space-x-2 bg-brand-red hover:bg-brand-redHover text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40"
            >
              <Phone className="w-4 h-4" />
              <span>Pide Cita</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-dark-950/95 backdrop-blur-xl border-b border-dark-800 p-6 space-y-4 shadow-2xl animate-fadeIn">
          <Link 
            href="/vehiculos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-gray-200 hover:text-brand-red transition-colors"
          >
            Vehículos
          </Link>
          <Link 
            href="/financiacion" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-gray-200 hover:text-brand-red transition-colors"
          >
            Financiación
          </Link>
          <Link 
            href="/vende-tu-coche" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-gray-200 hover:text-brand-red transition-colors"
          >
            Vende tu Coche
          </Link>
          <Link 
            href="/taller" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-gray-200 hover:text-brand-red transition-colors"
          >
            Taller y Postventa
          </Link>
          <Link 
            href="/nosotros" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-gray-200 hover:text-brand-red transition-colors"
          >
            Nosotros
          </Link>
          <Link 
            href="/contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-gray-200 hover:text-brand-red transition-colors"
          >
            Contacto
          </Link>
          
          <div className="pt-4 border-t border-dark-800 flex flex-col space-y-3">
            <a 
              href="https://wa.me/34986000000" 
              className="flex items-center justify-center space-x-2 bg-dark-900 border border-dark-800 text-white py-3 rounded-lg font-medium"
            >
              <MessageSquare className="w-5 h-5 text-emerald-500" />
              <span>Contactar por WhatsApp</span>
            </a>
            <Link 
              href="/contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-brand-red text-white py-3 rounded-lg font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>Pedir Cita Previa</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
