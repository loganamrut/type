import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Terms of Service & Licensing',
  description:
    'Terms of Service and open-source font licensing information for TypefaceGen. Free for commercial and personal typography workflows.',
  keywords: [
    'terms of service',
    'font licensing',
    'open font license',
    'commercial use fonts',
    'typefacegen terms',
    'typography terms',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/terms/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/terms/',
    siteName: 'TypefaceGen',
    title: 'Terms of Service & Licensing - TypefaceGen',
    description:
      'Terms of Service and open-source font licensing information for TypefaceGen. Free for commercial and personal typography workflows.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TypefaceGen Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Licensing - TypefaceGen',
    description:
      'Terms of Service and open-source font licensing information for TypefaceGen. Free for commercial and personal typography workflows.',
    images: ['/og-image.png'],
  },
};

export default function TermsPage() {
  const breadcrumbs = [{ label: 'Terms of Service' }];

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="website"
        pageType="WebPage"
        pageTitle="Terms of Service & Licensing - TypefaceGen"
        pageDescription="Terms of Service and open-source font licensing information for TypefaceGen. Free for commercial and personal typography workflows."
        url="https://typefacegen.com/terms"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Terms of Service', item: 'https://typefacegen.com/terms' },
        ]}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Terms of Service & Font Licensing
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: September 2026
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">1. Permitted Use</h2>
          <p>
            TypefaceGen is provided free of charge for personal, educational, and commercial design evaluation.
            You are free to use our preview engine, font pairing tool, side-by-side tester, and type scale calculator
            to conceptualize and build your typography systems.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">2. Typeface Intellectual Property & Licensing</h2>
          <p>
            The typefaces previewed on TypefaceGen are the intellectual property of their respective creators,
            foundries, and contributors. They are distributed under independent open-source licenses,
            predominantly the <strong>SIL Open Font License (OFL 1.1)</strong> and the <strong>Apache License 2.0</strong>.
          </p>
          <p>
            TypefaceGen does not sell, sublicense, or claim ownership of any previewed typeface. When incorporating
            a font into your own digital or physical production, please refer to that font&apos;s specific license terms
            via the official license links provided in our interface.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">3. Disclaimer of Warranty</h2>
          <p>
            The service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties
            of any kind. While we endeavor to provide accurate typography metrics and reliable font rendering,
            TypefaceGen makes no warranty regarding absolute typographic precision across all operating system rasterizers.
          </p>
        </section>
      </div>
    </div>
  );
}
