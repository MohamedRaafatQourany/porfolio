'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBG() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const handle = (e: MouseEvent) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);
  const tx = (depth: number) =>
    `translate3d(${(mouse.x - 0.5) * depth}px, ${(mouse.y - 0.5) * depth}px, 0)`;
  return (
    <div className="parallax-bg" aria-hidden="true">
      <div className="grid-floor" style={{ transform: tx(20) }} />
      <div className="orb orb-1" style={{ transform: tx(-40) }} />
      <div className="orb orb-2" style={{ transform: tx(60) }} />
      <div className="orb orb-3" style={{ transform: tx(-25) }} />
      <div className="noise" />
      <div className="scanlines" />
      <div className="stars" style={{ transform: tx(10) }}>
        {Array.from({ length: 60 }).map((_, i) => {
          const s = ((i * 37) % 100) / 100;
          const t = ((i * 73) % 100) / 100;
          return (
            <span
              key={i}
              className="star"
              style={{ left: `${s * 100}%`, top: `${t * 100}%`, animationDelay: `${i * 0.1}s` }}
            />
          );
        })}
      </div>
    </div>
  );
}
