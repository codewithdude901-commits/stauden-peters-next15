import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const secret = body.secret as string | undefined
    const paths = (body.paths ?? []) as string[]

    if (!secret || secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
    }

    if (!Array.isArray(paths) || paths.length === 0) {
      return NextResponse.json({ ok: false, message: 'No paths provided' }, { status: 400 })
    }

    const results = []

    for (const path of paths) {
      try {
        revalidatePath(path) // ✅ imported function
        // ✅ imported function
        results.push({ path, ok: true })
      } catch (err) {
        results.push({ path, ok: false, error: String(err) })
      }
    }

    return NextResponse.json({ ok: true, results })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
