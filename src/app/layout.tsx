import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { SITE } from '@/lib/site';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.author, url: SITE.url }],
  creator: SITE.author,
  publisher: SITE.author,
  applicationName: SITE.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${SITE.author} — ${SITE.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitter,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon', type: 'image/png', sizes: '64x64' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
    shortcut: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050a08' },
    { media: '(prefers-color-scheme: light)', color: '#050a08' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.author,
  alternateName: 'Mohamed Raafat Qourany',
  url: SITE.url,
  image: `${SITE.url}/avatar.png`,
  jobTitle: SITE.jobTitle,
  worksFor: { '@type': 'Organization', name: SITE.company },
  email: `mailto:${SITE.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: [
    'React.js',
    'React Native',
    'TypeScript',
    'JavaScript',
    'REST APIs',
    'Front-End Architecture',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  author: { '@type': 'Person', name: SITE.author },
  inLanguage: 'en-US',
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  mainEntity: {
    '@type': 'Person',
    name: SITE.author,
    identifier: 'mohammedqourany',
    description: SITE.description,
    jobTitle: SITE.jobTitle,
    url: SITE.url,
    image: `${SITE.url}/avatar.png`,
    sameAs: [SITE.github, SITE.linkedin],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Programming with JavaScript' },
      { '@type': 'EducationalOccupationalCredential', name: 'Front-End Development (React.js)' },
      { '@type': 'EducationalOccupationalCredential', name: 'Mastering TypeScript 2024' },
      { '@type': 'EducationalOccupationalCredential', name: 'Datadog 101 Developer' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo, Egypt" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Geist:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <Analytics/>
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="ld-profile"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
