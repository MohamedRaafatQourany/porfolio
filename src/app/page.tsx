import type { Metadata } from 'next';
import Desktop from '@/components/Desktop';

export const metadata: Metadata = {
  title: 'Mohammed Raafat — Front-End Engineer · React · TypeScript',
  description:
    'Interactive desktop-style portfolio of Mohammed Raafat, Front-End Engineer at Breadfast. Explore work, experience, skills, and contact channels.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* SEO: visible-but-styled semantic content for crawlers and accessibility */}
      <header className="sr-content">
        <h1>Mohammed Raafat — Front-End Engineer</h1>
        <p>
          React, React Native, and TypeScript engineer based in Cairo, Egypt. Currently building
          production web applications and dashboards at Breadfast. Open to freelance opportunities
          worldwide.
        </p>
        <nav aria-label="Primary">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Desktop />
      </main>
    </>
  );
}
