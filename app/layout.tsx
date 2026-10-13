import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Concesionarios Torres | Coches Nuevos, Seminuevos y KM0 en Rabadá, Galicia',
  description: 'Concesionario multimarca de referencia en Rabadá, Galicia. Venta de coches nuevos, seminuevos, KM0 y ocasión, taller oficial y financiación a medida.',
  keywords: ['concesionario', 'coches', 'seminuevos', 'Rabadá', 'Galicia', 'Volkswagen', 'Audi', 'BMW', 'Tesla', 'CUPRA'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-dark-950 text-gray-100 selection:bg-brand-red selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
