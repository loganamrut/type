import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Monospace Typeface Generator - Test Coding & Fixed-Width Fonts',
  description:
    'Preview and test monospace and coding typefaces online. Compare programming ligatures, tabular glyph alignment, and technical legibility with live code samples.',
  keywords: [
    'monospace typeface generator',
    'monospace font generator',
    'coding fonts online',
    'fixed width fonts',
    'programming fonts preview',
    'developer typography',
    'code font tester',
    'terminal font generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/monospace-typeface-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/monospace-typeface-generator',
    siteName: 'TypefaceGen',
    title: 'Monospace Typeface Generator - Test Coding & Fixed-Width Fonts',
    description:
      'Preview and test monospace and coding typefaces online. Compare programming ligatures, tabular glyph alignment, and technical legibility with live code samples.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Monospace Typeface Generator - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monospace Typeface Generator - Test Coding & Fixed-Width Fonts',
    description:
      'Preview and test monospace and coding typefaces online with live custom text and CSS export.',
    images: ['/og-image.png'],
  },
};

export default function MonospaceTypefacePage() {
  const breadcrumbs = [
    { label: 'Categories', href: '/' },
    { label: 'Monospace' },
  ];

  const monoFaqs = [
    {
      question: 'What is a monospaced typeface?',
      answer:
        'A monospaced (or fixed-width) typeface is a font where each letter, number, punctuation mark, and whitespace character occupies the exact same horizontal width. Originally invented for mechanical typewriters, monospaced fonts are essential for code editors, terminals, and financial tabular data.',
    },
    {
      question: 'Why are monospaced fonts crucial for programming and data tables?',
      answer:
        'Because character widths are uniform, vertical columns, code indentations, and ASCII art align with mathematical precision. Programmers can quickly identify syntax bugs, missing brackets, or misaligned columns.',
    },
    {
      question: 'What are the most popular open-source monospace fonts?',
      answer:
        'Leading open-source monospaced typefaces include JetBrains Mono, Fira Code, Source Code Pro, Roboto Mono, Inconsolata, and Space Mono. Many include optional programming ligatures for operators like arrow functions (=>) and comparison operators (!==).',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Monospace Typeface Generator - Test Coding & Fixed-Width Fonts"
        pageDescription="Preview and test monospace and coding typefaces online. Compare programming ligatures, tabular glyph alignment, and technical legibility."
        toolName="TypefaceGen Monospace Typeface Generator"
        toolDescription="Preview and test monospace and coding typefaces online. Compare programming ligatures, tabular glyph alignment, and technical legibility."
        url="https://typefacegen.com/monospace-typeface-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Monospace Typeface Generator', item: 'https://typefacegen.com/monospace-typeface-generator' },
        ]}
        faqs={monoFaqs}
        itemList={{
          name: 'Featured Monospace Typefaces',
          description: 'Developer-preferred fixed-width and programming typefaces.',
          items: [
            { name: 'JetBrains Mono', description: 'Monospace font crafted specifically for code legibility.' },
            { name: 'Roboto Mono', description: 'Google geometric monospace with crisp screen rendering.' },
            { name: 'Fira Code', description: 'Monospace typeface with custom programming multi-character ligatures.' },
            { name: 'Source Code Pro', description: 'Adobe open-source monospace designed for UI and terminals.' },
            { name: 'Space Mono', description: 'Eclectic retro-futuristic fixed-width font developed by Colophon.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Monospace Typeface Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test fixed-width typefaces engineered for developers, code editors, financial tables,
          and contemporary brutalist layouts.
        </p>
      </div>

      <TypefaceGenerator initialCategory="monospace" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-4 max-w-4xl text-xs text-zinc-600 leading-relaxed">
        <h2 className="text-lg font-bold text-zinc-950">
          Monospace Typography Mechanics &amp; Code Legibility
        </h2>
        <p>
          In a monospaced typeface, every character occupies an identical horizontal bounding box.
          Modern developer typefaces like <em>JetBrains Mono</em> and <em>Fira Code</em> include programming
          ligatures and distinct character shapes for &apos;0&apos; vs &apos;O&apos; and &apos;1&apos; vs &apos;l&apos; to optimize reading speed.
        </p>
      </section>
    </div>
  );
}
