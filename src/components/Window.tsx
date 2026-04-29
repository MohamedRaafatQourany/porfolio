'use client';

import { useRef, useState, type MouseEvent, type ReactNode } from 'react';

export interface WindowProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  initialPos: { x: number; y: number };
  initialSize: { w: number; h: number };
  zIndex: number;
  onFocus: (id: string) => void;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  isActive: boolean;
  isMinimized: boolean;
}

export default function Window(props: WindowProps) {
  const { id, title, icon, children, initialPos, initialSize, zIndex, onFocus, onClose, onMinimize, isActive, isMinimized } = props;
  const [pos, setPos] = useState(initialPos);
  const [size, setSize] = useState(initialSize);
  const [maximized, setMaximized] = useState(false);
  const [preMaxState, setPreMaxState] = useState<{ pos: typeof pos; size: typeof size } | null>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const startDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (maximized) return;
    onFocus(id);
    const startX = e.clientX, startY = e.clientY;
    const sx = pos.x, sy = pos.y;
    const move = (ev: globalThis.MouseEvent) => {
      setPos({ x: sx + (ev.clientX - startX), y: Math.max(28, sy + (ev.clientY - startY)) });
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  const toggleMax = () => {
    if (maximized && preMaxState) {
      setPos(preMaxState.pos);
      setSize(preMaxState.size);
      setMaximized(false);
    } else {
      setPreMaxState({ pos, size });
      setPos({ x: 16, y: 44 });
      setSize({ w: window.innerWidth - 32, h: window.innerHeight - 92 });
      setMaximized(true);
    }
  };

  if (isMinimized) return null;

  return (
    <section
      className={`os-window ${isActive ? 'active' : ''}`}
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex }}
      onMouseDown={() => onFocus(id)}
      aria-label={title}
    >
      <div className="os-window-titlebar" ref={dragRef} onMouseDown={startDrag} onDoubleClick={toggleMax}>
        <div className="os-window-controls">
          <button className="ctrl close" onClick={(e) => { e.stopPropagation(); onClose(id); }} aria-label="Close window" />
          <button className="ctrl min" onClick={(e) => { e.stopPropagation(); onMinimize(id); }} aria-label="Minimize window" />
          <button className="ctrl max" onClick={(e) => { e.stopPropagation(); toggleMax(); }} aria-label="Maximize window" />
        </div>
        <div className="os-window-title">
          <span className="ico">{icon}</span>
          <span>{title}</span>
        </div>
        <div style={{ width: 60 }} />
      </div>
      <div className="os-window-body">{children}</div>
    </section>
  );
}
