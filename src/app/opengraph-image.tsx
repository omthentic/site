/* removed unused eslint-disable */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Omthentic — Speak your truth with confidence';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OGImage() {
  const gradient = 'linear-gradient(135deg, #0B1220 0%, #0F172A 50%, #132033 100%)';
  const pillBg = 'rgba(13, 110, 253, 0.15)';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: gradient,
          position: 'relative',
        }}
      >
        {/* teal/blue orbs */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -60,
            width: 380,
            height: 380,
            borderRadius: 9999,
            filter: 'blur(80px)',
            background: 'radial-gradient(circle at 30% 30%, #19B9D0, transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: 9999,
            filter: 'blur(90px)',
            background: 'radial-gradient(circle at 60% 60%, #2D6FFF, transparent 60%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            width: 960,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img
              alt="Omthentic"
              width={200}
              height={48}
              src="/images/Omthentic Horizontal.svg"
              style={{ display: 'block' }}
            />
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              alignSelf: 'flex-start',
              padding: '8px 14px',
              borderRadius: 9999,
              background: pillBg,
              color: '#E6EEF7',
              fontSize: 22,
            }}
          >
            Speak your truth with confidence
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 72,
              lineHeight: 1.1,
              color: '#F7FAFC',
              fontWeight: 800,
            }}
          >
            Practice real interview questions with AI feedback
          </h1>

          <p
            style={{
              margin: 0,
              color: '#D6DFEA',
              fontSize: 28,
            }}
          >
            Coach‑verified tips • Confidence, clarity & pace scores
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


