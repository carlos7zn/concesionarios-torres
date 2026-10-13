'use client';

import { useState, useMemo } from 'react';
import { vehicles, brandsList, Vehicle } from '@/data/vehicles';
import VehicleCard from '@/components/VehicleCard';
import { Search, Filter, SlidersHorizontal, RefreshCw } from 'lucide-react';

export default function VehiculosPage() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedBadge, setSelectedBadge] = useState('');
  const [maxPrice, setMaxPrice] = useState(60000);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'km-asc'>('price-asc');

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(v => {
      if (selectedBrand && v.brand !== selectedBrand) return false;
      if (selectedFuel && v.fuel !== selectedFuel) return false;
      if (selectedBadge && v.badge !== selectedBadge) return false;
      if (v.price > maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'km-asc') return a.km - b.km;
      return 0;
    });
  }, [selectedBrand, selectedFuel, selectedBadge, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedBrand('');
    setSelectedFuel('');
    setSelectedBadge('');
    setMaxPrice(60000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-2 block">Catálogo Oficial</span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">Encuentra Tu Vehículo Ideal</h1>
        <p className="text-gray-400 text-sm max-w-2xl">
          Explora nuestro stock certificado en Rábade. Todos nuestros vehículos incluyen garantía oficial, revisión rigurosa y opción de financiación a medida.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 bg-dark-900 border border-dark-800 p-6 rounded-2xl h-fit space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-dark-800">
            <h3 className="font-display font-bold text-white text-base flex items-center space-x-2">
              <Filter className="w-4 h-4 text-brand-red" />
              <span>Filtros de Búsqueda</span>
            </h3>
            <button 
              onClick={resetFilters}
              className="text-xs text-gray-400 hover:text-white flex items-center space-x-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Limpiar</span>
            </button>
          </div>

          {/* Brand Filter */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Marca</label>
            <select 
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-dark-950 border border-dark-800 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-brand-red"
            >
              <option value="">Todas las marcas</option>
              {brandsList.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Fuel Filter */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Combustible</label>
            <select 
              value={selectedFuel}
              onChange={(e) => setSelectedFuel(e.target.value)}
              className="w-full bg-dark-950 border border-dark-800 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-brand-red"
            >
              <option value="">Todos los combustibles</option>
              <option value="Gasolina">Gasolina</option>
              <option value="Diésel">Diésel</option>
              <option value="Híbrido">Híbrido</option>
              <option value="Eléctrico">Eléctrico</option>
            </select>
          </div>

          {/* Badge Filter */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Estado / Condición</label>
            <select 
              value={selectedBadge}
              onChange={(e) => setSelectedBadge(e.target.value)}
              className="w-full bg-dark-950 border border-dark-800 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-brand-red"
            >
              <option value="">Todos los estados</option>
              <option value="KM0">KM0</option>
              <option value="Seminuevo">Seminuevo</option>
              <option value="Ocasión">Ocasión</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              <span>Precio Máx.</span>
              <span className="text-brand-red font-bold">{maxPrice.toLocaleString()} €</span>
            </div>
            <input 
              type="range" 
              min="15000" 
              max="60000" 
              step="2500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-brand-red cursor-pointer"
            />
          </div>

        </div>

        {/* Vehicles Grid & Sort */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Results bar */}
          <div className="bg-dark-900 border border-dark-800 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between text-sm">
            <span className="text-gray-400 mb-2 sm:mb-0">
              Mostrando <strong className="text-white">{filteredVehicles.length}</strong> vehículos disponibles
            </span>

            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-xs">Ordenar por:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-dark-950 border border-dark-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-red"
              >
                <option value="price-asc">Precio: más bajo a más alto</option>
                <option value="price-desc">Precio: más alto a más bajo</option>
                <option value="km-asc">Kilometraje: menor a mayor</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="bg-dark-900 border border-dark-800 p-16 rounded-2xl text-center space-y-4">
              <h3 className="text-xl font-display font-bold text-white">No se encontraron vehículos</h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                No hay ningún vehículo en stock que coincida exactamente con tus filtros actuales. Prueba a restablecer los filtros.
              </p>
              <button 
                onClick={resetFilters}
                className="bg-brand-red hover:bg-brand-redHover text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
              >
                Restablecer Filtros
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
