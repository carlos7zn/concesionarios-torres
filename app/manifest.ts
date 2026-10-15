export default function manifest() {
  return {
    name: 'Concesionarios Torres',
    short_name: 'Torres',
    description: 'Concesionario multimarca de referencia en Rábade, Galicia',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0F',
    theme_color: '#E10600',
    orientation: 'portrait-primary',
    scope: '/',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}