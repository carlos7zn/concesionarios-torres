'use client';

import { motion } from 'framer-motion';

const brands = [
  'Volkswagen', 'SEAT', 'CUPRA', 'Toyota', 'Peugeot', 'Renault', 'Ford', 
  'Hyundai', 'Kia', 'BMW', 'Audi', 'Mercedes-Benz', 'Tesla'
];

export default function BrandMarquee() {
  return (
    <div className="relative overflow-hidden bg-dark-900/50 border-y border-dark-800 py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex space-x-12"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 60,
            ease: 'linear'
          }
        }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex-shrink-0 flex items-center">
            <span className="text-gray-500 font-display font-bold text-lg uppercase tracking-wider hover:text-white transition-colors">
              {brand}
            </span>
            <div className="w-px h-6 bg-dark-800 mx-12" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
