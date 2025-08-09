import { NextResponse } from 'next/server';

type OnboardingData = {
  goal: string;
  details?: string;
  focus: string;
  experience?: string;
  strengths?: string[];
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as OnboardingData;

    const encoded = Buffer.from(JSON.stringify(data)).toString('base64');
    const res = NextResponse.json({ ok: true });
    res.cookies.set('om:onboarding', encoded, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
}


