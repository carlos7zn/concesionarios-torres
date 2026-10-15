import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculadora de Financiación',
  description: 'Calcula tu cuota mensual para financiar tu coche. Financiación 100% a medida, respuesta en menos de 24 horas.',
  openGraph: {
    title: 'Financiación | Concesionarios Torres',
    description: 'Calcula tu cuota y estrena coche con la mejor financiación',
    images: ['/opengraph-image'],
  },
}

export default function FinanciacionLayout({ children }: { children: React.ReactNode }) {
  return children
}