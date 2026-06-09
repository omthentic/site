import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Omthentic — Aligned authenticity';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OGImage() {
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
            top: -120,
            right: -100,
            width: 460,
            height: 460,
            borderRadius: 9999,
            filter: 'blur(120px)',
            background: 'radial-gradient(circle at 40% 40%, #d4a574, transparent 60%)',
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: 9999,
            filter: 'blur(130px)',
            background: 'radial-gradient(circle at 60% 60%, #8a5a3b, transparent 60%)',
            opacity: 0.35,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            width: 960,
          }}
        >
          <div style={{ display: 'flex', fontSize: 26, letterSpacing: 8, color: '#d4a574' }}>
            ·  Ω  ·  OMTHENTIC
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 80,
              lineHeight: 1.05,
              color: '#f1e6d3',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Aligned authenticity.
          </h1>
          <p
            style={{
              margin: 0,
              color: 'rgba(241,230,211,0.7)',
              fontSize: 30,
            }}
          >
            A house of technologies that close the distance between intention and expression.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
