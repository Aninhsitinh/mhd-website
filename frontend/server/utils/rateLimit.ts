import type { H3Event } from 'h3'
import { getRequestIP, createError } from 'h3'

interface RateLimitRecord {
  count: number
  resetAt: number
}

const ipBuckets = new Map<string, RateLimitRecord>()

// Periodically clean up expired records every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of ipBuckets.entries()) {
    if (now > record.resetAt) {
      ipBuckets.delete(key)
    }
  }
}, 5 * 60 * 1000)

/**
 * Lightweight in-memory rate limiter per IP address
 * @param event H3Event
 * @param limit Max requests allowed in the given window
 * @param windowMs Time window in milliseconds (default: 60s)
 * @param endpointIdentifier Unique tag for the endpoint
 */
export function checkRateLimit(
  event: H3Event,
  limit: number = 5,
  windowMs: number = 60 * 1000,
  endpointIdentifier: string = 'global'
) {
  const ip = getRequestIP(event, { xForwardedFor: true }) || '127.0.0.1'
  const key = `${endpointIdentifier}:${ip}`
  const now = Date.now()

  let record = ipBuckets.get(key)

  if (!record || now > record.resetAt) {
    record = { count: 1, resetAt: now + windowMs }
    ipBuckets.set(key, record)
    return
  }

  record.count++

  if (record.count > limit) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000)
    throw createError({
      statusCode: 429,
      statusMessage: `Quá nhiều yêu cầu. Vui lòng thử lại sau ${retryAfter} giây.`,
      data: { retryAfter }
    })
  }
}
