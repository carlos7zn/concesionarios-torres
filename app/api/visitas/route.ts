import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'
import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

const BOT_PATTERNS = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /preview/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /whatsapp/i,
  /telegrambot/i,
  /discordbot/i,
  /slackbot/i,
  /googlebot/i,
  /bingbot/i,
  /yandexbot/i,
  /duckduckbot/i,
  /baiduspider/i,
  /semrushbot/i,
  /ahrefsbot/i,
  /mj12bot/i,
  /dotbot/i,
  /uptimerobot/i,
  /pingdom/i,
  /monitor/i,
  /check/i,
  /health/i,
  /scan/i,
  /audit/i,
]

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false
  return BOT_PATTERNS.some(pattern => pattern.test(userAgent))
}

function getRedis() {
  return Redis.fromEnv()
}

export async function POST(request: NextRequest) {
  try {
    const userAgent = request.headers.get('user-agent')
    
    // Ignore bots
    if (isBot(userAgent)) {
      return NextResponse.json({ total: 0, skipped: true })
    }

    const redis = getRedis()
    const result = await redis.incr('visitas:total')

    return NextResponse.json(
      { total: result },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    )
  } catch (error) {
    console.error('Error incrementing visits:', error)
    return NextResponse.json(
      { error: 'Error interno' }, 
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    )
  }
}

export async function GET() {
  try {
    const redis = getRedis()
    const result = await redis.get('visitas:total') as string | undefined
    const total = result ? parseInt(result, 10) : 0

    return NextResponse.json(
      { total },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    )
  } catch (error) {
    console.error('Error getting visits:', error)
    return NextResponse.json(
      { total: 0, error: 'Error interno' },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    )
  }
}