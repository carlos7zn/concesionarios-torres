import Link from 'next/link';
import Image from 'next/image';
import { Vehicle } from '@/data/vehicles';
import { Gauge, Fuel, Settings, ArrowRight, Tag } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden group hover:border-brand-red/50 transition-all duration-300 w-full h-full flex flex-col shadow-xl hover:shadow-2xl hover:shadow-brand-red/10">
      <div className="relative h-full w-full overflow-hidden bg-dark-800">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          placeholder="blur"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-car.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60"></div>

        {/* Badges - properly separated */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5">
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
              {vehicle.badge}
            </span>
            <span className="bg-dark-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-dark-700">
              Etiqueta {vehicle.ecoLabel}
            </span>
          </div>
          <div className="flex justify-end">
            <span className="bg-dark-950/80 backdrop-blur-md text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-dark-700">
              {vehicle.year}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div className="min-h-[120px]">
          <div className="text-xs uppercase tracking-widest text-brand-red font-bold mb-1">
            {vehicle.brand}
          </div>
          <h3 className="text-lg font-display font-bold text-white mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
            {vehicle.model} <span className="text-gray-400 font-normal text-sm block sm:inline">{vehicle.version}</span>
          </h3>

          <p className="text-gray-400 text-sm line-clamp-2 mb-6 min-h-[3rem]">
            {vehicle.description}
          </p>
        </div>

        <div className="mt-auto">
          {/* Specs grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-dark-800 mb-6 text-xs text-gray-300">
            <div className="flex items-center space-x-1.5 min-w-0">
              <Gauge className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="whitespace-nowrap truncate">{vehicle.km.toLocaleString()} km</span>
            </div>
            <div className="flex items-center space-x-1.5 min-w-0">
              <Fuel className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="truncate">{vehicle.fuel}</span>
            </div>
            <div className="flex items-center space-x-1.5 min-w-0">
              <Settings className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="truncate">{vehicle.transmission}</span>
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
              className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-redHover text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-brand-red/20"
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
