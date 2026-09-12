import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TypefaceComparison } from '@/components/TypefaceComparison';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Font Tester - Compare & Test Typefaces Online Side-by-Side',
  description:
    'Free online font tester and typeface comparison tool. Inspect 2 to 4 typefaces simultaneously with synchronized custom text, weight testing, and glyph matrices.',
  keywords: [
    'font tester',
    'typeface tester',
    'compare fonts',
    'font preview',
    'online font tester',
    'typeface comparison',
    'test fonts side by side',
    'web font tester',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/font-tester',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/font-tester',
    siteName: 'TypefaceGen',
    title: 'Font Tester - Compare & Test Typefaces Online Side-by-Side',
    description:
      'Free online font tester and typeface comparison tool. Inspect 2 to 4 typefaces simultaneously with synchronized custom text, weight testing, and glyph matrices.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Font Tester & Comparison - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Tester - Compare & Test Typefaces Online Side-by-Side',
    description:
      'Free online font tester and typeface comparison tool. Inspect 2 to 4 typefaces simultaneously with synchronized custom text, weight testing, and glyph matrices.',
    images: ['/og-image.png'],
  },
};

export default function FontTesterPage() {
  const breadcrumbs = [
    { label: 'Tools', href: '/' },
    { label: 'Font Tester' },
  ];

  const testerFaqs = [
    {
      question: 'What is a font tester?',
      answer:
        'A font tester is an interactive typography inspector that allows you to compare multiple font families side-by-side. You can type custom words, pangrams, or numbers to inspect character geometry, ascender heights, descenders, and legibility under identical conditions.',
    },
    {
      question: 'How do I test font legibility?',
      answer:
        'Inspect key disambiguation glyphs: capital I vs lowercase l vs number 1; capital O vs number 0; and open vs closed apertures on letters like e, c, and s. A high-legibility typeface maintains distinct shapes across all characters even at small font sizes.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        toolName="TypefaceGen Font Tester & Comparison"
        toolDescription="Inspect 2 to 4 typefaces simultaneously with synchronized custom text, weight testing, and glyph matrices."
        url="https://typefacegen.com/font-tester"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Font Tester', item: 'https://typefacegen.com/font-tester' },
        ]}
        faqs={testerFaqs}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Font Tester &amp; Comparison
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Compare up to 4 typefaces side-by-side with synchronized text input.
          Inspect optical proportions, weights, glyph details, and screen rendering.
        </p>
      </div>

      <TypefaceComparison isStandalonePage />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">
            What to Scrutinize When Testing Typefaces
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Four key anatomical checkpoints to evaluate before selecting a typeface for production:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">1. Apertures &amp; Counters</h3>
            <p className="text-zinc-600 leading-relaxed">
              Examine openings in &apos;c&apos;, &apos;e&apos;, and &apos;s&apos;. Wide, open apertures prevent letters from filling in or blurring at small sizes.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">2. Glyphic Disambiguation</h3>
            <p className="text-zinc-600 leading-relaxed">
              Test &apos;Il1&apos; and &apos;0O&apos;. Distinct letter shapes prevent confusion in software interfaces and data-heavy layouts.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">3. Ascender Clearances</h3>
            <p className="text-zinc-600 leading-relaxed">
              Verify how high &apos;d&apos;, &apos;h&apos;, &apos;l&apos; reach and how low &apos;g&apos;, &apos;y&apos; descend to determine comfortable line-height.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">4. Stroke Weight Balance</h3>
            <p className="text-zinc-600 leading-relaxed">
              Check how thin hairlines render across standard screens to ensure strokes do not vanish.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
