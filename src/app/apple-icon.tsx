import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#050a08',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            width: 22,
            height: 22,
            background: '#5fff9f',
            borderRadius: '50%',
            boxShadow: '0 0 16px #5fff9f',
          }}
        />
        <span
          style={{
            color: '#d8f5e7',
            fontSize: 64,
            fontWeight: 800,
            fontFamily: 'sans-serif',
            letterSpacing: -2,
          }}
        >
          R<span style={{ color: '#5fff9f' }}>.os</span>
        </span>
      </div>
    ),
    { ...size },
  );
}
