import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '630px',
          width: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2D4A3E',
          color: '#FAFAF7',
          fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -160,
            width: 420,
            height: 420,
            background: 'rgba(74, 124, 95, 0.35)',
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -140,
            bottom: -200,
            width: 520,
            height: 520,
            background: 'rgba(74, 124, 95, 0.22)',
            borderRadius: 9999,
          }}
        />

        <div style={{ padding: 64, textAlign: 'center' }}>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -0.5, fontFamily: 'Georgia' }}>
            La Montecchia Green
          </div>
          <div style={{ fontSize: 26, marginTop: 16, opacity: 0.95 }}>
            Lounge Bar Restaurant · Selvazzano Dentro (PD)
          </div>
          <div style={{ fontSize: 22, marginTop: 10, opacity: 0.9 }}>
            Open to everyone · Golf della Montecchia
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

