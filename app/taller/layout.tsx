import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taller Mecánico y Mantenimiento',
  description: 'Taller multimarca en Rábade: revisiones oficiales, diagnosis avanzada, neumáticos, frenos. Mecánicos especializados, recambios originales, horario 8:00-18:00.',
  openGraph: {
    title: 'Taller | Concesionarios Torres',
    description: 'Servicio postventa multimarca, diagnosis electrónica, recambios originales',
    images: ['/opengraph-image'],
  },
}

export default function TallerLayout({ children }: { children: React.ReactNode }) {
  return children
}