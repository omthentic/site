import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Omthentic Blog';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0B1220',
            padding: '80px',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(circle at 25% 25%, #0D9488 0%, transparent 50%), radial-gradient(circle at 75% 75%, #F59E0B 0%, transparent 50%)',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Title */}
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: 32,
                maxWidth: '900px',
              }}
            >
              {title}
            </div>

            {/* Brand */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginTop: 48,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: '#0D9488',
                }}
              />
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  color: '#0D9488',
                }}
              >
                Omthentic
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}

