import Link from 'next/link';

export default function CreditosImagenes() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">Créditos de Imágenes</h1>
      
      <div className="space-y-8 text-gray-300">
        <div className="bg-dark-900 border border-dark-800 p-6 rounded-lg">
          <h2 className="text-xl font-display font-bold text-white mb-4">CUPRA Formentor</h2>
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="border-b border-dark-800">
                <th className="p-2">Archivo</th>
                <th className="p-2">Nombre en Commons</th>
                <th className="p-2">Autor</th>
                <th className="p-2">Licencia</th>
                <th className="p-2">URL Original</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-800/50">
                <td className="p-2">01.webp</td>
                <td className="p-2">2020 Cupra Formentor VZ2 TSi 4Drive S-A 2.0 Front.jpg</td>
                <td className="p-2">Vauxford</td>
                <td className="p-2">CC BY-SA 4.0</td>
                <td className="p-2">
                  <a href="https://commons.wikimedia.org/wiki/File:2020_Cupra_Formentor_VZ2_TSi_4Drive_S-A_2.0_Front.jpg" target="_blank" rel="noopener noreferrer" className="text-brand-red underline">Ver en Commons</a>
                </td>
              </tr>
              <tr className="border-b border-dark-800/50">
                <td className="p-2">02.webp</td>
                <td className="p-2">2020 Cupra Formentor VZ2 TSi 4Drive S-A 2.0 Rear.jpg</td>
                <td className="p-2">Vauxford</td>
                <td className="p-2">CC BY-SA 4.0</td>
                <td className="p-2">
                  <a href="https://commons.wikimedia.org/wiki/File:2020_Cupra_Formentor_VZ2_TSi_4Drive_S-A_2.0_Rear.jpg" target="_blank" rel="noopener noreferrer" className="text-brand-red underline">Ver en Commons</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-800">
          <h2 className="text-xl font-display font-bold text-white mb-4">Otras Marcas</h2>
          <p className="text-gray-400">
            Para ver los créditos completos de todos los vehículos (Tesla Model Y, Audi Q3 Sportback, Volkswagen Golf GTI, Toyota RAV4, BMW Serie 3, Mercedes-Benz Clase A y Hyundai Tucson), por favor visita el panel de administración o contacta con el equipo de desarrollo.
          </p>
        </div>
      </div>
    </div>
  );
}
