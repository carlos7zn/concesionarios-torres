'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-xl border-t border-dark-800 p-4 shadow-2xl animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-300">
            Utilizamos cookies técnicas y de análisis para mejorar tu experiencia en nuestro sitio web. 
            Al hacer clic en &quot;Aceptas&quot;, consentes el uso de todas las cookies. Puedes{' '}
            <Link href="/cookies" className="text-brand-red hover:underline font-medium">
              configurar preferencias
            </Link>.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleReject}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-dark-700 rounded-lg hover:bg-dark-800 transition-colors"
          >
            Rechazar
          </button>
          <button 
            onClick={handleAccept}
            className="px-5 py-2 text-sm bg-brand-red hover:bg-brand-redHover text-white rounded-lg font-medium transition-colors shadow-lg shadow-brand-red/20"
          >
            Acepta
          </button>
        </div>
      </div>
    </div>
  );
}