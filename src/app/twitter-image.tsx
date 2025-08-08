/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Omthentic — Speak your truth with confidence';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0B1220 0%, #0F172A 50%, #132033 100%)',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(800px 500px at 70% 30%, rgba(18,214,192,.2), transparent 60%), radial-gradient(900px 600px at 20% 80%, rgba(45,111,255,.22), transparent 60%)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 960 }}>
          <img alt="Omthentic" width={200} height={48} src="https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Logo%20Transparent%20H.svg" />
          <h1 style={{ margin: 0, fontSize: 66, lineHeight: 1.1, color: '#F7FAFC', fontWeight: 800 }}>
            Speak your truth with confidence
          </h1>
          <p style={{ margin: 0, color: '#D6DFEA', fontSize: 26 }}>
            Practice real interview questions with real‑time AI feedback
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}


