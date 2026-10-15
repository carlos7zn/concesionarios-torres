import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#E10600',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10%',
        }}
      >
        <svg width="144" height="144" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="16" height="5" rx="2" fill="white" />
          <rect x="7" y="7" width="6" height="11" rx="2" fill="white" />
        </svg>
      </div>
    ),
    {
      width: 180,
      height: 180,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    }
  )
}
