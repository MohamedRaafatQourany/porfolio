'use client';

import { useEffect, useState, type ComponentType } from 'react';
import BootScreen from './BootScreen';
import ParallaxBG from './ParallaxBG';
import TopBar from './TopBar';
import Window from './Window';
import Dock, { DesktopIcon } from './Dock';
import { AboutApp, ProjectsApp, ExperienceApp, SkillsApp, TerminalApp, ContactApp, ResumeApp } from './apps';

interface AppDef {
  id: string;
  label: string;
  icon: string;
  component: ComponentType;
  defaultSize: { w: number; h: number };
  defaultPos: { x: number; y: number };
}

const APPS: Record<string, AppDef> = {
  about:      { id: 'about',      label: 'About',    icon: '◉', component: AboutApp,      defaultSize: { w: 720, h: 560 }, defaultPos: { x: 80, y: 80 } },
  projects:   { id: 'projects',   label: 'Work',     icon: '▦', component: ProjectsApp,   defaultSize: { w: 920, h: 620 }, defaultPos: { x: 140, y: 110 } },
  experience: { id: 'experience', label: 'Career',   icon: '⟶', component: ExperienceApp, defaultSize: { w: 720, h: 600 }, defaultPos: { x: 200, y: 140 } },
  skills:     { id: 'skills',     label: 'Skills',   icon: '✦', component: SkillsApp,     defaultSize: { w: 760, h: 580 }, defaultPos: { x: 240, y: 100 } },
  terminal:   { id: 'terminal',   label: 'Terminal', icon: '▶', component: TerminalApp,   defaultSize: { w: 640, h: 420 }, defaultPos: { x: 320, y: 160 } },
  contact:    { id: 'contact',    label: 'Contact',  icon: '✉', component: ContactApp,    defaultSize: { w: 700, h: 460 }, defaultPos: { x: 280, y: 90 } },
  resume:     { id: 'resume',     label: 'Resume',   icon: '⬇', component: ResumeApp,     defaultSize: { w: 500, h: 380 }, defaultPos: { x: 300, y: 120 } },
};

interface OpenWindow {
  id: string;
  appId: string;
  z: number;
  pos: { x: number; y: number };
  size: { w: number; h: number };
  minimized: boolean;
}

export default function Desktop() {
  const [booted, setBooted] = useState(false);
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const [zCounter, setZCounter] = useState(10);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (booted) {
      const t = setTimeout(() => openApp('about'), 200);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booted]);

  const openApp = (appId: string) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.appId === appId);
      const newZ = zCounter + 1;
      setZCounter(newZ);
      setActiveId(appId);
      if (existing) {
        return prev.map((w) => (w.appId === appId ? { ...w, minimized: false, z: newZ } : w));
      }
      const app = APPS[appId];
      const offset = prev.length * 24;
      return [...prev, {
        id: appId, appId, z: newZ,
        pos: { x: app.defaultPos.x + offset, y: app.defaultPos.y + offset },
        size: app.defaultSize,
        minimized: false,
      }];
    });
  };

  const closeWin = (id: string) => setWindows((prev) => prev.filter((w) => w.id !== id));
  const minWin = (id: string) => setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  const focusWin = (id: string) => {
    setZCounter((z) => {
      const newZ = z + 1;
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, z: newZ } : w)));
      setActiveId(id);
      return newZ;
    });
  };

  const dockApps = Object.values(APPS).map((a) => ({ id: a.id, label: a.label, icon: a.icon }));
  const activeWindow = windows.find((w) => w.id === activeId && !w.minimized);
  const activeTitle = activeWindow ? APPS[activeWindow.appId].label : null;

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <ParallaxBG />
      <TopBar activeWindowTitle={activeTitle} />
      <div className="desktop">
        <div className="desk-icons">
          <DesktopIcon label="readme.md" icon="📄" onOpen={() => openApp('about')} />
          <DesktopIcon label="work/" icon="📁" onOpen={() => openApp('projects')} />
          <DesktopIcon label="experience.pdf" icon="📑" onOpen={() => openApp('resume')} />
          <DesktopIcon label="terminal" icon="▶" onOpen={() => openApp('terminal')} />
        </div>
        {windows.map((w) => {
          const App = APPS[w.appId].component;
          return (
            <Window
              key={w.id}
              id={w.id}
              title={APPS[w.appId].label}
              icon={APPS[w.appId].icon}
              initialPos={w.pos}
              initialSize={w.size}
              zIndex={w.z}
              isActive={activeId === w.id}
              isMinimized={w.minimized}
              onFocus={focusWin}
              onClose={closeWin}
              onMinimize={minWin}
            >
              <App />
            </Window>
          );
        })}
      </div>
      <Dock apps={dockApps} onOpen={openApp} openWindows={windows} />
    </>
  );
}
