import Link from 'next/link';
import Image from 'next/image';
import { Vehicle } from '@/data/vehicles';
import { Gauge, Fuel, Settings, ArrowRight } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden group hover:border-brand-red/50 transition-all duration-300 w-full h-full flex flex-col shadow-xl hover:shadow-2xl hover:shadow-brand-red/10">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-dark-800 flex-shrink-0">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover object-[50%_60%] group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={false}
          placeholder="blur"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-car.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60"></div>

        {/* Badges - absolute positioned on top of image */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5">
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
              {vehicle.badge}
            </span>
            <span className="bg-dark-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-dark-700 whitespace-nowrap">
              Etiqueta {vehicle.ecoLabel}
            </span>
          </div>
          <div className="flex justify-end">
            <span className="bg-dark-950/80 backdrop-blur-md text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-dark-700 whitespace-nowrap">
              {vehicle.year}
            </span>
          </div>
        </div>
      </div>

      {/* Content - flex column with h-full */}
      <div className="p-6 flex flex-col justify-between flex-1 min-h-0">
        <div>
          <div className="text-xs uppercase tracking-widest text-brand-red font-bold mb-1">
            {vehicle.brand}
          </div>
          <h3 className="text-lg font-display font-bold text-white mb-2 line-clamp-2 group-hover:text-brand-red transition-colors min-h-[2.5rem]">
            {vehicle.model} <span className="text-gray-400 font-normal text-sm block sm:inline">{vehicle.version}</span>
          </h3>

          <p className="text-gray-400 text-sm line-clamp-2 overflow-hidden">
            {vehicle.description}
          </p>
        </div>

        <div className="mt-auto pt-4">
          {/* Specs grid - 3 columns, no truncation */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-dark-800 mb-6 text-xs text-gray-300">
            <div className="flex items-center space-x-1.5 min-w-0">
              <Gauge className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="whitespace-nowrap text-ellipsis overflow-hidden">{vehicle.km.toLocaleString()} km</span>
            </div>
            <div className="flex items-center space-x-1.5 min-w-0">
              <Fuel className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="whitespace-nowrap text-ellipsis overflow-hidden">{vehicle.fuel}</span>
            </div>
            <div className="flex items-center space-x-1.5 min-w-0">
              <Settings className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="whitespace-nowrap text-ellipsis overflow-hidden">{vehicle.transmission}</span>
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
