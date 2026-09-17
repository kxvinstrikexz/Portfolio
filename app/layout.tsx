import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kevinsivraj.dev';

export const viewport = {
  themeColor: '#0c0c0c',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kevin Siv Raj M S — Software Developer | Digital Experiences',
    template: '%s | Kevin Siv Raj M S'
  },
  description:
    'Editorial portfolio of Kevin Siv Raj M S — Software Developer specializing in full-stack applications, AI integrations, mobile development (Flutter), system architecture, and thoughtful digital products.',
  keywords: [
    'Kevin Siv Raj M S',
    'Kevin Siv Raj',
    'Software Developer',
    'Full-Stack Developer',
    'AI Engineer',
    'Flutter Developer',
    'System Design',
    'Next.js',
    'TypeScript',
    'Portfolio'
  ],
  authors: [{ name: 'Kevin Siv Raj M S' }],
  creator: 'Kevin Siv Raj M S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Kevin Siv Raj — Software Developer',
    title: 'Kevin Siv Raj M S — Software Developer',
    description:
      'I build useful software, experiment with emerging technology, and turn ideas into working digital products.',
    images: [
      {
        url: '/kevin-portrait-rim.jpg',
        width: 1200,
        height: 1800,
        alt: 'Kevin Siv Raj M S'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Siv Raj M S — Software Developer',
    description:
      'I build useful software, experiment with emerging technology, and turn ideas into working digital products.',
    images: ['/kevin-portrait-rim.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c0c0c] text-[#f5f5f0] antialiased selection:bg-[#fabb02]/25 selection:text-[#ffffff] overflow-x-hidden min-h-screen flex flex-col justify-between relative">
        <Navbar />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
