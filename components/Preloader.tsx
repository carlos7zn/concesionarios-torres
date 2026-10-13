'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-dark-950 flex items-center justify-center"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-2xl bg-brand-red flex items-center justify-center font-display font-bold text-3xl text-white shadow-2xl shadow-brand-red/30 mx-auto"
            >
              T
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-2"
            >
              <h2 className="font-display font-bold text-2xl text-white tracking-wider">CONCESIONARIOS</h2>
              <p className="text-brand-red font-semibold uppercase tracking-widest text-sm">TORRES</p>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-0.5 bg-brand-red mx-auto rounded-full w-32"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
