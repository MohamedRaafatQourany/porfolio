'use client';

import { useEffect, useState } from 'react';

interface TopBarProps {
  activeWindowTitle: string | null;
}

export default function TopBar({ activeWindowTitle }: TopBarProps) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(t);
  }, []);
  const date = now?.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }) ?? '';
  const time = now?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) ?? '';
  return (
    <div className="topbar" role="banner">
      <div className="topbar-left">
        <div className="logo-dot" />
        <span className="brand">
          Raafat<span style={{ color: 'var(--mx)' }}>.os</span>
        </span>
        <span className="active-app">{activeWindowTitle || 'Finder'}</span>
      </div>
      <div className="topbar-right">
        <span className="status">
          <span className="status-dot" /> Available for hire
        </span>
        <span className="sep" />
        <span>v4.26</span>
        <span className="sep" />
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
