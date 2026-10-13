'use client';

import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34986000000?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20vuestros%20vehículos."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat de WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-bounce"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-medium pl-0 group-hover:pl-2">
        ¡Escríbenos!
      </span>
    </a>
  );
}
