import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-display font-bold text-brand-red">404</h1>
          <h2 className="text-3xl font-display font-bold text-white">Página no encontrada</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Explora nuestro catálogo de vehículos o vuelve al inicio.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center space-x-2 bg-brand-red hover:bg-brand-redHover text-white px-6 py-3 rounded-xl font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
          <Link 
            href="/vehiculos" 
            className="inline-flex items-center justify-center space-x-2 bg-dark-900 hover:bg-dark-800 border border-dark-800 text-white px-6 py-3 rounded-xl font-medium transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Ver catálogo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
