import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${SITE.author} — ${SITE.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(ellipse at 20% 10%, rgba(0,255,170,0.18), transparent 60%), linear-gradient(180deg, #030806 0%, #050a08 100%)',
          color: '#d8f5e7',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28 }}>
          <div
            style={{
              width: 16,
              height: 16,
              background: '#5fff9f',
              borderRadius: 3,
              boxShadow: '0 0 20px #5fff9f',
            }}
          />
          <div>
            Raafat<span style={{ color: '#5fff9f' }}>.os</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            {SITE.author}
          </div>
          <div style={{ fontSize: 36, color: '#5fff9f', marginTop: 16 }}>
            {SITE.jobTitle} · React · TypeScript
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#94b8a3' }}>
          <div>{SITE.location}</div>
          <div>raafat.dev</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
