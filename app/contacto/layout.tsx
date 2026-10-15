import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto y Ubicación',
  description: 'Visítanos en Rábade, Galicia. Tel: +34 986 000 000, WhatsApp disponible. Horario: L-V 9-14 y 16-20, S 10-14. Formulario de contacto.',
  openGraph: {
    title: 'Contacto | Concesionarios Torres',
    description: 'Concesionario en Rábade, Galicia. Teléfono, WhatsApp, email y formulario de contacto',
    images: ['/opengraph-image'],
  },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}