'use client';

import { vehicles } from '@/data/vehicles';
import VehicleCard from '@/components/VehicleCard';
import Link from 'next/link';

export default function RevisionImagenesClient() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Revisión Visual de Imágenes</h1>
        <p className="text-gray-400 max-w-2xl">
          Página de revisión interna (noindex) para verificar visualmente que cada vehículo muestra el modelo y generación correctos.
          Haz clic en cada tarjeta para ver la ficha completa.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Link key={vehicle.slug} href={`/vehiculos/${vehicle.slug}`}>
            <VehicleCard vehicle={vehicle} />
          </Link>
        ))}
      </div>
    </div>
  );
}
