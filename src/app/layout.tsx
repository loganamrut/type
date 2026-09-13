import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

// Next.js font optimization: Only Inter is needed for global UI
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://typefacegen.com'),
  title: {
    default: 'Typeface Generator - Preview, Compare & Pair Fonts Online',
    template: '%s | TypefaceGen',
  },
  description:
    'Free typeface generator to preview, compare, and pair 200+ fonts online. Test custom text, modular scales, and copy CSS instantly.',
  keywords: [
    'typeface generator',
    'typeface generator online',
    'free typeface generator',
    'online typeface generator',
    'typeface maker',
    'typeface creator',
    'typography generator',
    'font preview',
    'font tester',
    'font pairing generator',
    'typeface pairing',
    'modular type scale',
  ],
  authors: [{ name: 'TypefaceGen Editorial Team' }],
  creator: 'TypefaceGen',
  publisher: 'TypefaceGen',
  alternates: {
    canonical: 'https://typefacegen.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/',
    siteName: 'TypefaceGen',
    title: 'Typeface Generator - Preview, Compare & Pair Fonts Online',
    description:
      'Explore, preview, compare, and pair open-source typefaces with live custom text, modular scales, and CSS export.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TypefaceGen - Online Typeface Generator and Typography Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typeface Generator - Preview, Compare & Pair Fonts Online',
    description:
      'Explore, preview, compare, and pair open-source typefaces with live custom text, modular scales, and CSS export.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon-precomposed.png' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'Design & Developer Tools',
  classification: 'Online Typography & Typeface Studio',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-typefacegen-live',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      'msvalidate.01': [process.env.NEXT_PUBLIC_BING_VERIFICATION || 'bing-verification-typefacegen'],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} bg-white text-zinc-950`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-zinc-950">
        {/*
          Google Consent Mode v2 — executes before any tracking scripts
        */}
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              var storedConsent = null;
              try { storedConsent = localStorage.getItem('typefacegen_consent'); } catch(e) {}
              var isGranted = storedConsent === 'granted';

              gtag('consent', 'default', {
                'analytics_storage': isGranted ? 'granted' : 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        {/*
          GA4 deferred loader: Loads on first user interaction or idle delay.
          Zero render-blocking, zero impact on mobile LCP/FCP, full GA4 tracking intact.
        */}
        <Script
          id="ga4-deferred"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              function loadGA4() {
                if (window.__ga4Init) return;
                window.__ga4Init = true;
                var script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HT87NWEHNT';
                script.async = true;
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-HT87NWEHNT', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              }

              var interactionEvents = ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'];
              function onInteraction() {
                loadGA4();
                interactionEvents.forEach(function(ev) {
                  window.removeEventListener(ev, onInteraction);
                });
              }
              interactionEvents.forEach(function(ev) {
                window.addEventListener(ev, onInteraction, { passive: true, once: true });
              });
              setTimeout(loadGA4, 3500);
            `,
          }}
        />
        <AnalyticsTracker />
        <Header />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
