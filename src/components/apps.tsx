'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';

export interface Project {
  name: string;
  url: string;
  tag: string;
  desc: string;
  stack: string[];
  hue: number;
}

export const PROJECTS: Project[] = [
  { name: 'Raafat Consults', url: 'https://www.raafatconsults.com', tag: 'Consulting · Web', desc: 'Marketing site for a consulting practice. Clean typography, smooth section transitions.', stack: ['React', 'Next.js', 'CSS Modules'], hue: 140 },
  { name: 'Expandix', url: 'https://www.expandix.net', tag: 'SaaS · Landing', desc: 'Brand-forward marketing site for a growth platform. Animated hero and product grid.', stack: ['React', 'Framer Motion', 'Tailwind'], hue: 165 },
  { name: 'BD Media', url: 'https://www.bdmedia.me', tag: 'Agency · Portfolio', desc: 'Media agency portfolio with case-study layouts and high-impact reels.', stack: ['React', 'GSAP', 'Vite'], hue: 110 },
  { name: 'Sash & Company', url: 'https://www.sashandcompany.com', tag: 'E-commerce · Brand', desc: 'Product-driven storefront with refined motion and crisp imagery.', stack: ['React', 'Shopify Storefront', 'TS'], hue: 180 },
  { name: 'Dr. Badr', url: 'https://www.drbadr.com', tag: 'Healthcare · Booking', desc: 'Practice site with appointment booking, multilingual content, and patient resources.', stack: ['React', 'i18n', 'Node'], hue: 200 },
  { name: 'Gulf EF', url: 'https://gulf-ef.com', tag: 'Corporate · Bilingual', desc: 'Bilingual corporate site with RTL support and dynamic CMS-driven content.', stack: ['React', 'i18n RTL', 'Headless CMS'], hue: 90 },
];

export function AboutApp() {
  return (
    <article className="app about" id="about">
      <div className="about-hero">
        <div className="avatar">
          <div className="avatar-ring" />
          <div className="avatar-inner">MR</div>
        </div>
        <div className="about-meta">
          <h2 className="about-name">Mohammed Raafat</h2>
          <p className="about-role">Front-End/Product Engineer · React · React Native · TypeScript</p>
          <p className="about-loc">📍 Cairo, Egypt &nbsp;·&nbsp; 🌐 Available worldwide</p>
          <div className="about-tags">
            <span className="tag">React.js</span>
            <span className="tag">React Native</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Node.js</span>
            <span className="tag">REST APIs</span>
          </div>
        </div>
      </div>
      <div className="about-body">
        <p>
          Front-End Engineer building production-grade web applications and dashboards
          with React and TypeScript. I led the front-end for a Fintech Management System end-to-end, and
          helped migrate legacy WordPress dashboards to modern React architecture.
        </p>
        <p>
          Background in technical support and operations gives me a sharp problem-solving instinct and a
          business-first mindset. I also freelance globally on <b>Upwork</b> (Rising Talent · 2000+ USD earned), Khamsat and other freelance networks,
          delivering performance-focused, responsive, accessible web products.
        </p>
        <div className="about-stats">
          <div className="stat"><div className="stat-num">3+</div><div className="stat-label">years experience</div></div>
          <div className="stat"><div className="stat-num">20+</div><div className="stat-label">projects shipped</div></div>
          <div className="stat"><div className="stat-num">+10</div><div className="stat-label">freelance clients</div></div>
          <div className="stat"><div className="stat-num">∞</div><div className="stat-label">cups of coffee</div></div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <a className="proj-card" href={p.url} target="_blank" rel="noreferrer">
      <div className="proj-thumb" style={{ ['--ph' as string]: p.hue } as React.CSSProperties}>
        <div className="proj-thumb-grid" />
        <div className="proj-thumb-glow" />
        <div className="proj-thumb-mark">{p.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</div>
        <div className="proj-thumb-url">{p.url.replace(/^https?:\/\//, '')}</div>
      </div>
      <div className="proj-info">
        <div className="proj-row">
          <h3 className="proj-name">{p.name}</h3>
          <div className="proj-arrow">↗</div>
        </div>
        <div className="proj-tag">{p.tag}</div>
        <p className="proj-desc">{p.desc}</p>
        <div className="proj-stack">
          {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </a>
  );
}

export function ProjectsApp() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Consulting · Web', 'SaaS · Landing', 'Agency · Portfolio', 'E-commerce · Brand', 'Healthcare · Booking', 'Corporate · Bilingual'];
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);
  return (
    <div className="app projects" id="work">
      <div className="proj-toolbar">
        <div className="proj-toolbar-title">Selected Work · 2023–2026</div>
        <div className="proj-filters">
          {filters.map((f) => (
            <button key={f} className={`fchip ${filter === f ? 'on' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
      </div>
      <div className="proj-grid">
        {visible.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </div>
  );
}

const EXPERIENCE = [
  { co: 'Breadfast', role: 'Software Front End Engineer/Product Engineer', date: 'Sep 2024 — Present', loc: 'Cairo, Egypt', bullets: [
    'Develop and maintain scalable React applications using modern JS frameworks.',
    'Led front-end for the Fintech Management System from planning to production.',
    'Migrated legacy WordPress dashboards to a modern React architecture.',
    'Worked across Supply Chain and Shopping App squads.',
    'Performed unit/integration testing, code reviews, and tech grooming.',
  ]},
  { co: 'Breadfast', role: 'Sr. Software Support Engineer / FE Intern', date: 'Feb 2024 — Sep 2024', loc: 'Egypt', bullets: [
    'Acted as team expert and delegate for the direct manager.',
    'Built a React.js dashboard solving a daily critical operational issue.',
    'Authored troubleshooting guides and trained newly hired support engineers.',
  ]},
  { co: 'Breadfast', role: 'Software Support Engineer', date: 'Oct 2022 — Feb 2024', loc: 'Cairo, Egypt', bullets: [
    'Improved troubleshooting efficiency by 50% with cross-functional teams.',
    'Reduced support ticket volume by 50% via proactive knowledge bases.',
    'Drove a 15% reduction in critical bugs through bug triage and prioritization.',
  ]},
  { co: 'Upwork', role: 'Freelance Web Developer', date: 'Oct 2023 — Present', loc: 'Worldwide', bullets: [
    'Upwork Rising Talent · $2000+ earnings.',
    'Custom websites, dashboards, and e-commerce platforms for global clients.',
    'Front-end (HTML/CSS/JS, React) and integrations with back-end services & APIs.',
  ]},
  { co: 'Breadfast', role: 'Customer Experience Specialist', date: 'Dec 2021 — Oct 2022', loc: 'Cairo, Egypt', bullets: [
    'Handled customer inquiries and complaints; investigated fraud cases.',
    'Covered shift leads and reported to branch/quality.',
  ]},
  { co: 'MRSOOL', role: 'CX & Operations Specialist', date: 'Sep 2021 — Jan 2022', loc: 'Egypt', bullets: [
    'Investigated fraud cases and managed live operations.',
    'Identified ways to improve customer experience.',
  ]},
  { co: 'Vodafone', role: 'Technical Support Specialist', date: 'Jul 2020 — Sep 2021', loc: 'Cairo, Egypt', bullets: [
    'Configured CPE, static IPs, and network components.',
    'Troubleshot connection issues and escalated to L2 teams.',
  ]},
];

export function ExperienceApp() {
  return (
    <div className="app experience" id="experience">
      <div className="exp-header">
        <h2 className="exp-title">Career Timeline</h2>
        <p className="exp-sub">2020 → present · 6 years across CX, support, and engineering</p>
      </div>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="tl-row">
            <div className="tl-rail">
              <div className="tl-dot" />
              {i < EXPERIENCE.length - 1 && <div className="tl-line" />}
            </div>
            <div className="tl-card">
              <div className="tl-card-head">
                <h3 className="tl-co">{e.co}</h3>
                <div className="tl-date">{e.date}</div>
              </div>
              <div className="tl-role">{e.role}</div>
              <div className="tl-loc">{e.loc}</div>
              <ul className="tl-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SKILLS = [
  { group: 'Core', items: [
    { name: 'React.js', level: 80 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'React Native', level: 80 },
  ]},
  { group: 'Frontend', items: [
    { name: 'HTML5 / CSS3', level: 85 },
    { name: 'Tailwind / CSS-in-JS', level: 80 },
    { name: 'Responsive', level: 80 },
  ]},
  { group: 'Backend & Tooling', items: [
    { name: 'Node.js', level: 35 },
    { name: 'REST APIs', level: 80 },
  ]},
];

const CERTS = [
  'Programming with JavaScript',
  'Front-End Development (React.js)',
  'Mastering TypeScript — 2024 (Colt Steele)',
  'Windows Server 2012: Installation & Configuration',
  'Datadog 101 Developer',
  'Claude 101',
  'Claude Code'
];

export function SkillsApp() {
  return (
    <div className="app skills" id="skills">
      <div className="sk-grid">
        {SKILLS.map((g) => (
          <div key={g.group} className="sk-group">
            <h3 className="sk-group-title">{g.group}</h3>
            {g.items.map((s) => (
              <div key={s.name} className="sk-row">
                <div className="sk-label"><span>{s.name}</span><span className="sk-num">{s.level}</span></div>
                <div className="sk-bar"><div className="sk-fill" style={{ width: `${s.level}%` }} /></div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="sk-cert">
        <h3 className="sk-cert-title">Certifications</h3>
        <div className="sk-cert-list">
          {CERTS.map((c) => <div key={c} className="sk-cert-item">▸ {c}</div>)}
        </div>
      </div>
    </div>
  );
}

interface TermLine { kind: 'sys' | 'in' | 'out'; text: string; }

export function TerminalApp() {
  const [history, setHistory] = useState<TermLine[]>([
    { kind: 'sys', text: 'raafat-shell · v4.26 · type `help` to begin' },
  ]);
  const [input, setInput] = useState('');
  const inRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => { inRef.current?.focus(); }, []);
  useEffect(() => { bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight }); }, [history]);

  const exec = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out = (text: string) => setHistory((h) => [...h, { kind: 'in', text: raw }, { kind: 'out', text }]);
    if (!cmd) return;
    if (cmd === 'help') return out('Available: whoami · skills · projects · contact · clear · social · ascii');
    if (cmd === 'whoami') return out('mohammed raafat — front-end engineer @ breadfast. react · typescript · node.');
    if (cmd === 'skills') return out('react · react native · typescript · node · rest apis · ci · observability');
    if (cmd === 'projects') return out(PROJECTS.map((p) => `• ${p.name.padEnd(22)} ${p.url}`).join('\n'));
    if (cmd === 'contact') return out('mohamedraafatqourany@gmail.com  ·  +20 110 123 4258  ·  linkedin.com/in/mohammedqourany');
    if (cmd === 'social') return out('linkedin: mohammedqourany\ngithub: MohamedRaafatQourany');
    if (cmd === 'ascii') return out('  __  __ ____\n |  \\/  |  _ \\\n | |\\/| | |_) |\n |_|  |_|_|\n');
    if (cmd === 'clear') return setHistory([]);
    out(`command not found: ${cmd}`);
  };

  const submit = (e: FormEvent) => { e.preventDefault(); exec(input); setInput(''); };

  return (
    <div className="app terminal" onClick={() => inRef.current?.focus()}>
      <div className="term-body" ref={bodyRef}>
        {history.map((l, i) => (
          <div key={i} className={`term-line term-${l.kind}`}>
            {l.kind === 'in' && <span className="term-prompt">guest@raafat ~ $ </span>}
            <span style={{ whiteSpace: 'pre-wrap' }}>{l.text}</span>
          </div>
        ))}
        <form onSubmit={submit} className="term-line term-input">
          <span className="term-prompt">guest@raafat ~ $ </span>
          <input ref={inRef} value={input} onChange={(e) => setInput(e.target.value)} autoComplete="off" spellCheck="false" />
        </form>
      </div>
    </div>
  );
}

export function ContactApp() {
  return (
    <div className="app contact" id="contact">
      <div className="contact-intro">
        <h2 className="ci-title">Let's build something.</h2>
        <p className="ci-sub">Open a channel — pick whichever works best for you.</p>
      </div>
      <div className="contact-cards">
        <a className="contact-card" href="mailto:mohamedraafatqourany@gmail.com">
          <div className="cc-icon">✉</div>
          <div className="cc-label">email</div>
          <div className="cc-val">mohamedraafatqourany@gmail.com</div>
        </a>
        <a className="contact-card" href="tel:+201101234258">
          <div className="cc-icon">☏</div>
          <div className="cc-label">phone</div>
          <div className="cc-val">+20 110 123 4258</div>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/in/mohammedqourany" target="_blank" rel="noreferrer">
          <div className="cc-icon">in</div>
          <div className="cc-label">linkedin</div>
          <div className="cc-val">/in/mohammedqourany</div>
        </a>
        <a className="contact-card" href="https://github.com/MohamedRaafatQourany/" target="_blank" rel="noreferrer">
          <div className="cc-icon">⎇</div>
          <div className="cc-label">github</div>
          <div className="cc-val">/MohamedRaafatQourany</div>
        </a>
      </div>
      <div className="consult-block">
        <div className="consult-header">
          <div className="consult-icon">📅</div>
          <div>
            <div className="consult-title">Book a Free Consultation</div>
            <div className="consult-sub">30-min call · No commitment · Remote or async</div>
          </div>
        </div>
        <p className="consult-desc">
          Have a project in mind? Need a second opinion on your front-end architecture?
          Let's talk — pick a time and we'll figure out how I can help.
        </p>
        <a
          className="consult-btn"
          href="mailto:mohamedraafatqourany@gmail.com?subject=Consultation%20Request&body=Hi%20Mohammed%2C%0A%0AI%27d%20like%20to%20book%20a%20consultation.%0A%0AProject%20overview%3A%0A%0ABest%20time%20to%20reach%20me%3A"
        >
          Book via Email <span className="consult-arrow">↗</span>
        </a>
      </div>
    </div>
  );
}

export function ResumeApp() {
  const resumeUrl = '/experience.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'experience.pdf';
    link.click();
  };

  return (
    <div className="app resume" id="resume">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1.5rem', padding: '2rem' }}>
        <div style={{ fontSize: '4rem' }}>📄</div>
        <h2 style={{ margin: 0 }}>Download Resume</h2>
        <p style={{ margin: 0, opacity: 0.7, textAlign: 'center' }}>Get a copy of my latest resume in PDF format.</p>
        <button
          onClick={handleDownload}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            border: 'none',
            background: '#fff',
            color: '#000',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ⬇ Download PDF
        </button>
      </div>
    </div>
  );
}
