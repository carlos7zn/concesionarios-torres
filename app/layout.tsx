import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Preloader from '@/components/Preloader';

export const metadata: Metadata = {
  title: {
    default: 'Concesionarios Torres | Coches Nuevos, Seminuevos y KM0 en Rábade',
    template: '%s | Concesionarios Torres'
  },
  description: 'Concesionario multimarca de referencia en Rábade, Galicia. Vehículos nuevos, seminuevos, KM0 y ocasión, taller oficial y financiación a medida.',
  keywords: ['concesionario', 'coches', 'seminuevos', 'Rábade', 'Galicia', 'Volkswagen', 'Audi', 'BMW', 'Tesla', 'CUPRA'],
  authors: [{ name: 'Concesionarios Torres' }],
  creator: 'Concesionarios Torres',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://concesionarios-torres.vercel.app',
    title: 'Concesionarios Torres | Coches Nuevos y Seminuevos en Rábade',
    description: 'Concesionario multimarca de referencia en Rábade, Galicia. Stock premium con garantía oficial.',
    siteName: 'Concesionarios Torres',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Concesionarios Torres - Coches premium'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concesionarios Torres | Coches Nuevos y Seminuevos',
    description: 'Concesionario multimarca de referencia en Rábade, Galicia',
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Concesionarios Torres",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rábade",
                "addressRegion": "Galicia",
                "addressCountry": "ES"
              },
              "telephone": "+34986000000",
              "email": "carlos.torresgarcia@a.iesriomino.gal",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "14:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "16:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "areaServed": "Galicia"
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-dark-950 text-gray-100 selection:bg-brand-red selection:text-white">
        <Preloader />
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
