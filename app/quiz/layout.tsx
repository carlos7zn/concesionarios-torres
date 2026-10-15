import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiz de Cultura del Motor',
  description: 'Pon a prueba tus conocimientos de coches, normas y tecnología automotriz. 8 preguntas aleatorias, explicaciones instantáneas y puntuación final.',
  openGraph: {
    title: 'Quiz | Concesionarios Torres',
    description: '¿Cuánto sabes de coches? Quiz interactivo de 8 preguntas con resultados y explicaciones',
    images: ['/opengraph-image'],
  },
}

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children
}