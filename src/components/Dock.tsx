'use client';

import type { ReactNode } from 'react';

export interface DockApp {
  id: string;
  label: string;
  icon: ReactNode;
}

interface DockProps {
  apps: DockApp[];
  onOpen: (id: string) => void;
  openWindows: { appId: string; minimized: boolean }[];
}

export default function Dock({ apps, onOpen, openWindows }: DockProps) {
  return (
    <nav className="dock" aria-label="Application dock">
      <div className="dock-inner">
        {apps.map((a) => {
          const isOpen = openWindows.some((w) => w.appId === a.id && !w.minimized);
          return (
            <button key={a.id} className="dock-item" onClick={() => onOpen(a.id)} title={a.label} aria-label={`Open ${a.label}`}>
              <span className="dock-glyph">{a.icon}</span>
              <span className="dock-label">{a.label}</span>
              {isOpen && <span className="dock-indicator" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function DesktopIcon({ label, icon, onOpen }: { label: string; icon: ReactNode; onOpen: () => void }) {
  return (
    <button className="desk-icon" onDoubleClick={onOpen} onClick={onOpen}>
      <div className="desk-icon-glyph">{icon}</div>
      <div className="desk-icon-label">{label}</div>
    </button>
  );
}
