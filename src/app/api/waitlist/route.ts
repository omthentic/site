import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    // Basic validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }
    // In a real app, store to your DB or email provider here
    // For demo: log to server console
    console.log('Waitlist signup:', { name, email, ts: new Date().toISOString() });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


