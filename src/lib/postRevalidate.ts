// payload/utils/postRevalidate.ts
const NEXT_REVALIDATE_URL =
  (process.env.NEXT_REVALIDATE_URL || 'http://localhost:3000').replace(/\/$/, '')
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET
const REVALIDATE_ENDPOINT = `${NEXT_REVALIDATE_URL}/api/revalidate`

/**
 * Trigger Next.js on-demand ISR for one or more paths.
 * Safe for use inside Payload hooks.
 */
export async function postRevalidate(paths: string[]): Promise<void> {
  if (!paths?.length) return

  const body = JSON.stringify({ secret: REVALIDATE_SECRET, paths })
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)

  try {
    const res = await fetch(REVALIDATE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      signal: controller.signal,
    })

    if (!res.ok) {
      // simple one-time retry on server error
      if (res.status >= 500) {
        const retry = await fetch(REVALIDATE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        })
        if (!retry.ok) {
          console.warn('postRevalidate retry failed', retry.status)
        }
      } else {
        console.warn('postRevalidate non-OK response', res.status)
      }
    }
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      console.warn('postRevalidate aborted (timeout)')
    } else {
      console.error('postRevalidate failed', err)
    }
  } finally {
    clearTimeout(timeout)
  }
}
