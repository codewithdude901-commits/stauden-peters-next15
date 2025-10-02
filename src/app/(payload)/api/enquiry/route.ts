import { NextResponse } from 'next/server'
import { z } from 'zod'

// zod schema — match your collection fields
const EnquirySchema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().optional().nullable(),
  notes: z.string().min(1),
  locale: z.string().optional(),
  hp: z.string().optional().default(''), // honeypot
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parse = EnquirySchema.safeParse(body)

    if (!parse.success) {
      return NextResponse.json(
        { error: 'Invalid payload', details: parse.error.format() },
        { status: 400 },
      )
    }

    const data = parse.data

    // Honeypot check: if bots fill it, silently "succeed"
    if (data.hp && data.hp.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    const PAYLOAD_URL = process.env.NEXT_PUBLIC_SITE_URL
    const PAYLOAD_TOKEN = process.env.PAYLOAD_SECRET

    if (!PAYLOAD_URL || !PAYLOAD_TOKEN) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // Map incoming data -> Payload collection fields
    const payloadBody = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone ?? '',
      notes: data.notes,
    }

    const res = await fetch(`${PAYLOAD_URL}/api/formSubmissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PAYLOAD_TOKEN}`,
      },
      body: JSON.stringify(payloadBody),
    })

    const payloadResponse = await res.json().catch(() => null)

    if (!res.ok) {
      console.error('Payload creation failed', res.status, payloadResponse)
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, data: payloadResponse }, { status: 201 })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err?.message ?? 'Unknown error' }, { status: 500 })
  }
}
