import Link from 'next/link';
import { Vehicle } from '@/data/vehicles';
import { Gauge, Fuel, Settings, ArrowRight, Tag } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden group hover:border-brand-red/50 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-brand-red/10">
      
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-dark-800">
        <img 
          src={vehicle.image} 
          alt={`${vehicle.brand} ${vehicle.model}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {vehicle.badge}
          </span>
          <span className="bg-dark-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-dark-700">
            Etiqueta {vehicle.ecoLabel}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4 bg-dark-950/80 backdrop-blur-md text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-dark-700">
          {vehicle.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-brand-red font-bold mb-1">
            {vehicle.brand}
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
            {vehicle.model} <span className="text-gray-400 font-normal text-sm block sm:inline">{vehicle.version}</span>
          </h3>
          
          <p className="text-gray-400 text-sm line-clamp-2 mb-6">
            {vehicle.description}
          </p>
        </div>

        <div>
          {/* Specs grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-dark-800 mb-6 text-xs text-gray-300">
            <div className="flex items-center space-x-1.5">
              <Gauge className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>{vehicle.km.toLocaleString()} km</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Fuel className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>{vehicle.fuel}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Settings className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>{vehicle.transmission}</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between">
            <div>
              {vehicle.oldPrice && (
                <span className="text-xs text-gray-500 line-through block">
                  {vehicle.oldPrice.toLocaleString()} €
                </span>
              )}
              <span className="text-2xl font-display font-bold text-white">
                {vehicle.price.toLocaleString()} €
              </span>
            </div>

            <Link
              href={`/vehiculos/${vehicle.slug}`}
              className="inline-flex items-center space-x-2 bg-dark-800 hover:bg-brand-red text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all group-hover:bg-brand-red"
            >
              <span>Ver más</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
