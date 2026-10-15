import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0F',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            width: '140px',
            height: '140px',
            background: '#E10600',
            borderRadius: '22%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <svg width="100" height="100" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="16" height="5" rx="2" fill="white" />
            <rect x="7" y="7" width="6" height="11" rx="2" fill="white" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 700,
            margin: 0,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}
        >
          Concesionarios Torres
        </h1>
        <p
          style={{
            fontSize: '32px',
            fontWeight: 400,
            color: '#9CA3AF',
            margin: 0,
          }}
        >
          Coches nuevos y seminuevos en Rábade
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    }
  )
}