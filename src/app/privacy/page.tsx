import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy - Zero Tracking Client-Side Architecture',
  description:
    'TypefaceGen Privacy Policy. We do not store, transmit, or monitor your typed text. All typography generation occurs strictly within your browser.',
  keywords: [
    'typefacegen privacy policy',
    'client side privacy',
    'zero tracking typography tool',
    'browser typography privacy',
    'privacy policy',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/privacy/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/privacy/',
    siteName: 'TypefaceGen',
    title: 'Privacy Policy - Zero Tracking Client-Side Architecture',
    description:
      'TypefaceGen Privacy Policy. We do not store, transmit, or monitor your typed text. All typography generation occurs strictly within your browser.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TypefaceGen Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Zero Tracking Client-Side Architecture',
    description:
      'TypefaceGen Privacy Policy. We do not store, transmit, or monitor your typed text. All typography generation occurs strictly within your browser.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [{ label: 'Privacy Policy' }];

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="website"
        pageType="WebPage"
        pageTitle="Privacy Policy - Zero Tracking Client-Side Architecture"
        pageDescription="TypefaceGen Privacy Policy. We do not store, transmit, or monitor your typed text. All typography generation occurs strictly within your browser."
        url="https://typefacegen.com/privacy"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Privacy Policy', item: 'https://typefacegen.com/privacy' },
        ]}
      />

      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Strict Client-Side Privacy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: September 2026
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">1. Zero User Text Storage</h2>
          <p>
            When you enter text into the TypefaceGen editor, that text remains exclusively within your local
            browser&apos;s memory. We do not transmit your input to our servers, we do not log it in any database,
            and we never provide user text to external AI models or data aggregators.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">2. Local Storage Usage</h2>
          <p>
            TypefaceGen utilizes your web browser&apos;s standard <code>localStorage</code> API solely to store your
            personal user interface preferences:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Your theme preference (light or dark mode)</li>
            <li>Your bookmarked &ldquo;Favorites&rdquo; typefaces</li>
            <li>Your active &ldquo;Compare&rdquo; list</li>
          </ul>
          <p className="text-sm">
            This data never leaves your device and can be cleared at any time through your browser settings.
            If your browser disables <code>localStorage</code>, TypefaceGen gracefully falls back to session memory
            without breaking functionality.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">3. Third-Party Font Delivery</h2>
          <p>
            To deliver web font files securely and with low latency, TypefaceGen loads font stylesheets from Google Fonts
            (<code>fonts.googleapis.com</code> and <code>fonts.gstatic.com</code>). Google Fonts may collect standard
            technical telemetry (such as IP addresses and browser user-agents) necessary to serve static font files
            in accordance with Google&apos;s privacy policy. No user text or personal profile data is passed in these requests.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">4. Cookies &amp; Google Analytics 4</h2>
          <p>
            TypefaceGen utilizes Google Analytics 4 (Measurement ID: <code>G-HT87NWEHNT</code>) to gather aggregate,
            anonymized telemetry on page visits, route transitions, and tool performance. This helps us optimize font loading
            speeds and improve interface responsiveness.
          </p>
          <p>
            We implement <strong>Google Consent Mode v2</strong> and IP anonymization. Analytics cookies are only stored
            if you explicitly consent via our cookie banner. If you choose &ldquo;Essential Only&rdquo;, analytics storage is
            denied and no tracking cookies are placed on your device.
          </p>
          <p>
            You can change or revoke your cookie preferences at any time by clicking the &ldquo;Cookie Preferences&rdquo; link
            in our website footer.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">5. Contact</h2>
          <p>
            If you have questions regarding this privacy policy or our client-side architecture, please contact us at{' '}
            <span className="font-mono text-foreground">privacy@typefacegen.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
