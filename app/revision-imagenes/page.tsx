import type { Metadata } from 'next';
import RevisionImagenesClient from './RevisionImagenesClient';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Revisión de Imágenes | Concesionarios Torres',
};

export default function RevisionImagenes() {
  return <RevisionImagenesClient />;
}
