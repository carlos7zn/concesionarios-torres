import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Preloader from '@/components/Preloader';
import { Analytics } from '@vercel/analytics/next';

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
      url: 'https://concesionarios-torres-pi.vercel.app',
      title: 'Concesionarios Torres | Coches Nuevos y Seminuevos en Rábade',
      description: 'Concesionario multimarca de referencia en Rábade, Galicia. Stock premium con garantía oficial.',
      siteName: 'Concesionarios Torres',
      images: [
        {
          url: '/images/og-image.jpg',
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
      images: ['/images/og-image.jpg']
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
              "url": "https://concesionarios-torres-pi.vercel.app",
              "logo": "https://concesionarios-torres-pi.vercel.app/images/hero.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rábade",
                "addressRegion": "Galicia",
                "addressCountry": "ES"
              },
              "telephone": "+34986000000",
              "email": "info@concesionariostorres.es",
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
              "areaServed": "Galicia",
              "priceRange": "€€"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Qué garantía incluyen los vehículos seminuevos y de ocasión?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Todos nuestros vehículos seminuevos, KM0 y de ocasión cuentan con una garantía oficial de hasta 36 meses, además de haber superado una certificación rigurosa de más de 100 puntos en nuestro taller."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Puedo financiar la compra de mi coche sin entrada?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, ofrecemos soluciones de financiación flexible 100% a medida, pudiendo financiar el importe total o parcial con cuotas adaptadas a tus necesidades y respuesta en menos de 24 horas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo funciona la tasación de mi coche actual si quiero entregarlo como parte de pago?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Es muy sencillo. Puedes rellenar nuestro formulario online con la matrícula y los kilómetros, o visitarnos en Rábade. Tasamos tu vehículo en el acto y lo descontamos directamente de tu nuevo coche."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Realizáis entregas de vehículos a domicilio en toda España?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, disponemos de un servicio de transporte especializado para entregar tu nuevo vehículo directamente en la puerta de tu casa en cualquier punto de la península."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuál es el horario de atención y del taller postventa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nuestro horario comercial es de lunes a viernes de 9:00 a 14:00 y de 16:00 a 20:00, y sábados de 10:00 a 14:00. El taller abre de lunes a viernes de 8:00 a 18:00."
                  }
                }
              ]
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
        <Analytics />
      </body>
    </html>
  );
}
