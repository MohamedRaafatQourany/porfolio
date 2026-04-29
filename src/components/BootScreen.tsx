'use client';

import { useEffect, useState } from 'react';

interface BootScreenProps {
  onDone: () => void;
}

export default function BootScreen({ onDone }: BootScreenProps) {
  const [step, setStep] = useState(0);
  const lines = [
    '> initializing Raafat.os v4.26 ...',
    '> loading react.runtime ✓',
    '> loading typescript.engine ✓',
    '> mounting /portfolio  ✓',
    '> establishing secure shell ✓',
    '> welcome, visitor.',
  ];
  useEffect(() => {
    if (step >= lines.length) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep(step + 1), 280);
    return () => clearTimeout(t);
  }, [step, onDone, lines.length]);
  return (
    <div className="boot">
      <div className="boot-inner">
        <div className="boot-logo">
          MR<span style={{ color: 'var(--mx)' }}>/</span>
        </div>
        <div className="boot-lines">
          {lines.slice(0, step).map((l, i) => (
            <div key={i} className="boot-line">{l}</div>
          ))}
          {step < lines.length && <div className="boot-cursor">█</div>}
        </div>
        <div className="boot-bar">
          <div className="boot-bar-fill" style={{ width: `${(step / lines.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
