import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'
import type { NextRequest } from 'next/server'

export async function POST() {
  try {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })

    const result = await redis.incr('visitas')

    return NextResponse.json({ total: result })
  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })

    const result = await redis.get('visitas') as string | undefined
    const total = result ? parseInt(result, 10) : 0
    return NextResponse.json({ total })
  } catch (error) {
    return NextResponse.json({ total: 0, error: 'Error interno' })
  }
}