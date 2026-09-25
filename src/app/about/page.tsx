import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About - Mission, Technology & Privacy Architecture',
  description:
    'Learn about TypefaceGen, our mission to build the fastest, most useful online typography studio, our privacy-first client-side architecture, and open font licensing.',
  keywords: [
    'about typefacegen',
    'typography studio mission',
    'client-side typography tool',
    'open source font tool',
    'font preview architecture',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/about/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/about/',
    siteName: 'TypefaceGen',
    title: 'About TypefaceGen - Mission, Technology & Privacy Architecture',
    description:
      'Learn about TypefaceGen, our mission to build the fastest, most useful online typography studio, our privacy-first client-side architecture, and open font licensing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TypefaceGen - Mission, Technology & Privacy Architecture',
    description:
      'Learn about TypefaceGen, our mission to build the fastest, most useful online typography studio, our privacy-first client-side architecture, and open font licensing.',
    images: ['/og-image.png'],
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: 'About' }];

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="website"
        pageType="AboutPage"
        pageTitle="About TypefaceGen - Mission, Technology & Privacy Architecture"
        pageDescription="Learn about TypefaceGen, our mission to build the fastest, most useful online typography studio, our privacy-first client-side architecture, and open font licensing."
        url="https://typefacegen.com/about"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'About', item: 'https://typefacegen.com/about' },
        ]}
      />

      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          About TypefaceGen
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          TypefaceGen is a minimal, client-side web typography studio and preview generator.
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-zinc-600 leading-relaxed">
        <section className="space-y-2 bg-white border border-zinc-200 p-5 rounded">
          <h2 className="text-sm font-bold text-zinc-950">What TypefaceGen Does</h2>
          <p>
            TypefaceGen allows designers, developers, and writers to preview custom text across curated open-source
            typefaces with real-time controls for size, weight, line-height, and tracking.
          </p>
          <p>
            You can test Heading + Body font pairings, inspect typefaces side-by-side, calculate modular typography scales,
            and export clean CSS and Tailwind configurations.
          </p>
        </section>

        <section className="space-y-2 bg-white border border-zinc-200 p-5 rounded">
          <h2 className="text-sm font-bold text-zinc-950">100% Client-Side Privacy</h2>
          <p>
            All text typed into TypefaceGen remains strictly inside your browser memory. We never transmit your text
            to any remote server, database, or external AI service.
          </p>
        </section>

        <section className="space-y-2 bg-white border border-zinc-200 p-5 rounded">
          <h2 className="text-sm font-bold text-zinc-950">Open Source Licensing</h2>
          <p>
            All typefaces in TypefaceGen are open-source and licensed under the SIL Open Font License 1.1 or Apache 2.0.
            They are free for personal and commercial use.
          </p>
        </section>
      </div>
    </div>
  );
}
