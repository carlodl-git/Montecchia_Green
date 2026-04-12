/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'La Montecchia Green — Bistrot & Eventi al Golf della Montecchia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background:
            'linear-gradient(135deg, #1f3a2d 0%, #2d4a3e 55%, #4e6a57 100%)',
          color: '#F7F3EA',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: '#C4D68B',
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#C4D68B',
              fontFamily: 'Helvetica, Arial, sans-serif',
            }}
          >
            La Montecchia Green
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            Bistrot &amp; Eventi
          </div>
          <div
            style={{
              fontSize: 40,
              lineHeight: 1.15,
              color: 'rgba(247,243,234,0.88)',
              maxWidth: 900,
            }}
          >
            Nel verde del Golf della Montecchia, a 10 minuti da Padova.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: 'rgba(247,243,234,0.75)',
            fontFamily: 'Helvetica, Arial, sans-serif',
          }}
        >
          <div>Via Montecchia 12 · Selvazzano Dentro (PD)</div>
          <div>lamontecchiagreen.it</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
