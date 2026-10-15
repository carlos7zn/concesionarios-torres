import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tasación y Venta de tu Coche',
  description: 'Tasación profesional de tu vehículo en 2 horas. Valoración justa y transparente, pago inmediato. Usa tu coche como parte de pago.',
  openGraph: {
    title: 'Vende tu Coche | Concesionarios Torres',
    description: 'Tasación exprés, valoración justa y pago al momento en Rábade',
    images: ['/opengraph-image'],
  },
}

export default function VendeTuCocheLayout({ children }: { children: React.ReactNode }) {
  return children
}