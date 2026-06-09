import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Omthentic — Aligned authenticity';
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
          background: '#100806',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(800px 500px at 70% 30%, rgba(212,165,116,.22), transparent 60%), radial-gradient(900px 600px at 20% 80%, rgba(138,90,59,.20), transparent 60%)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 960 }}>
          <div style={{ display: 'flex', fontSize: 24, letterSpacing: 8, color: '#d4a574' }}>
            ·  Ω  ·  OMTHENTIC
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 72,
              lineHeight: 1.05,
              color: '#f1e6d3',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Aligned authenticity.
          </h1>
          <p style={{ margin: 0, color: 'rgba(241,230,211,0.7)', fontSize: 28 }}>
            Closing the distance between intention and expression.
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
