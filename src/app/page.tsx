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
      {/* Visually hidden but fully crawlable semantic content */}
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

      <section className="sr-content" id="about" aria-label="About Mohammed Raafat">
        <h2>About</h2>
        <p>
          Front-End / Product Engineer at Breadfast, building production-grade web applications and
          dashboards with React and TypeScript. Led the front-end for a Fintech Management System
          end-to-end and helped migrate legacy WordPress dashboards to modern React architecture.
          Freelancing globally on Upwork (Rising Talent · $2000+ earned) delivering performance-focused,
          responsive, and accessible web products.
        </p>
        <ul>
          <li>3+ years of professional software engineering experience</li>
          <li>20+ projects shipped across web and mobile</li>
          <li>10+ freelance clients served worldwide</li>
        </ul>
      </section>

      <section className="sr-content" id="work" aria-label="Selected Work">
        <h2>Selected Work · 2023–2026</h2>
        <ul>
          <li>
            <h3>Raafat Consults</h3>
            <p>Consulting · Web — Marketing site for a consulting practice. Clean typography, smooth section transitions.</p>
            <p>Stack: React, Next.js, CSS Modules</p>
            <a href="https://www.raafatconsults.com" rel="noreferrer">raafatconsults.com</a>
          </li>
          <li>
            <h3>Expandix</h3>
            <p>SaaS · Landing — Brand-forward marketing site for a growth platform. Animated hero and product grid.</p>
            <p>Stack: React, Framer Motion, Tailwind</p>
            <a href="https://www.expandix.net" rel="noreferrer">expandix.net</a>
          </li>
          <li>
            <h3>BD Media</h3>
            <p>Agency · Portfolio — Media agency portfolio with case-study layouts and high-impact reels.</p>
            <p>Stack: React, GSAP, Vite</p>
            <a href="https://www.bdmedia.me" rel="noreferrer">bdmedia.me</a>
          </li>
          <li>
            <h3>Sash &amp; Company</h3>
            <p>E-commerce · Brand — Product-driven storefront with refined motion and crisp imagery.</p>
            <p>Stack: React, Shopify Storefront API, TypeScript</p>
            <a href="https://www.sashandcompany.com" rel="noreferrer">sashandcompany.com</a>
          </li>
          <li>
            <h3>Dr. Badr</h3>
            <p>Healthcare · Booking — Practice site with appointment booking, multilingual content, and patient resources.</p>
            <p>Stack: React, i18n, Node.js</p>
            <a href="https://www.drbadr.com" rel="noreferrer">drbadr.com</a>
          </li>
          <li>
            <h3>Gulf EF</h3>
            <p>Corporate · Bilingual — Bilingual corporate site with RTL support and dynamic CMS-driven content.</p>
            <p>Stack: React, i18n RTL, Headless CMS</p>
            <a href="https://gulf-ef.com" rel="noreferrer">gulf-ef.com</a>
          </li>
        </ul>
      </section>

      <section className="sr-content" id="experience" aria-label="Work Experience">
        <h2>Career Timeline</h2>
        <ol>
          <li>
            <h3>Software Front-End Engineer / Product Engineer — Breadfast</h3>
            <p>Sep 2024 – Present · Cairo, Egypt</p>
            <ul>
              <li>Develop and maintain scalable React applications using modern JS frameworks.</li>
              <li>Led front-end for the Fintech Management System from planning to production.</li>
              <li>Migrated legacy WordPress dashboards to a modern React architecture.</li>
              <li>Worked across Supply Chain and Shopping App squads.</li>
              <li>Performed unit/integration testing, code reviews, and tech grooming.</li>
            </ul>
          </li>
          <li>
            <h3>Sr. Software Support Engineer / Front-End Intern — Breadfast</h3>
            <p>Feb 2024 – Sep 2024 · Egypt</p>
            <ul>
              <li>Built a React.js dashboard solving a daily critical operational issue.</li>
              <li>Authored troubleshooting guides and trained newly hired support engineers.</li>
            </ul>
          </li>
          <li>
            <h3>Freelance Web Developer — Upwork</h3>
            <p>Oct 2023 – Present · Worldwide</p>
            <ul>
              <li>Upwork Rising Talent · $2000+ earnings.</li>
              <li>Custom websites, dashboards, and e-commerce platforms for global clients.</li>
              <li>Front-end (HTML/CSS/JS, React) and integrations with back-end services and APIs.</li>
            </ul>
          </li>
          <li>
            <h3>Software Support Engineer — Breadfast</h3>
            <p>Oct 2022 – Feb 2024 · Cairo, Egypt</p>
            <ul>
              <li>Improved troubleshooting efficiency by 50% with cross-functional teams.</li>
              <li>Reduced support ticket volume by 50% via proactive knowledge bases.</li>
            </ul>
          </li>
          <li>
            <h3>Technical Support Specialist — Vodafone</h3>
            <p>Jul 2020 – Sep 2021 · Cairo, Egypt</p>
          </li>
        </ol>
      </section>

      <section className="sr-content" id="skills" aria-label="Technical Skills">
        <h2>Technical Skills</h2>
        <h3>Core</h3>
        <ul>
          <li>React.js (95%)</li>
          <li>TypeScript (90%)</li>
          <li>JavaScript ES2024 (95%)</li>
          <li>React Native (80%)</li>
        </ul>
        <h3>Frontend</h3>
        <ul>
          <li>HTML5 / CSS3 (95%)</li>
          <li>Tailwind CSS / CSS-in-JS (88%)</li>
          <li>Framer Motion / GSAP (78%)</li>
          <li>Responsive Design / Accessibility (90%)</li>
        </ul>
        <h3>Backend &amp; Tooling</h3>
        <ul>
          <li>Node.js (78%)</li>
          <li>REST APIs (92%)</li>
          <li>Git / CI (88%)</li>
          <li>Datadog / Observability (70%)</li>
        </ul>
        <h3>Certifications</h3>
        <ul>
          <li>Programming with JavaScript</li>
          <li>Front-End Development (React.js)</li>
          <li>Mastering TypeScript — 2024 (Colt Steele)</li>
          <li>Datadog 101 Developer</li>
        </ul>
      </section>

      <section className="sr-content" id="contact" aria-label="Contact Mohammed Raafat">
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href="mailto:mohamedraafatqourany@gmail.com">mohamedraafatqourany@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/mohammedqourany" rel="noreferrer">linkedin.com/in/mohammedqourany</a></li>
          <li>GitHub: <a href="https://github.com/MohamedRaafatQourany" rel="noreferrer">github.com/MohamedRaafatQourany</a></li>
        </ul>
      </section>

      <main id="main">
        <Desktop />
      </main>
    </>
  );
}
