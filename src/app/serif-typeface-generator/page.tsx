import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Serif Typeface Generator - Preview & Test Serif Fonts Online',
  description:
    'Explore, preview, and test classic, editorial, and modern serif typefaces. Enter custom text and customize weights, tracking, and line heights with live CSS export.',
  keywords: [
    'serif typeface generator',
    'serif font generator',
    'serif fonts online',
    'editorial serif fonts',
    'modern serif fonts',
    'didone fonts',
    'old style serifs',
    'preview serif fonts',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/serif-typeface-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/serif-typeface-generator',
    siteName: 'TypefaceGen',
    title: 'Serif Typeface Generator - Preview & Test Serif Fonts Online',
    description:
      'Explore, preview, and test classic, editorial, and modern serif typefaces. Enter custom text and customize weights, tracking, and line heights with live CSS export.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Serif Typeface Generator - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serif Typeface Generator - Preview & Test Serif Fonts Online',
    description:
      'Explore, preview, and test classic, editorial, and modern serif typefaces with live custom copy and CSS export.',
    images: ['/og-image.png'],
  },
};

export default function SerifTypefacePage() {
  const breadcrumbs = [
    { label: 'Categories', href: '/' },
    { label: 'Serif' },
  ];

  const serifFaqs = [
    {
      question: 'What defines a serif typeface?',
      answer:
        'A serif typeface features decorative projections, feet, or strokes (called serifs) at the terminal ends of character strokes. Historically originating from chisel marks in stone carvings, serifs establish strong horizontal reading flow and rhythm in editorial typography.',
    },
    {
      question: 'When should you use serif fonts in digital design?',
      answer:
        'Serif typefaces excel in long-form editorial publishing, book design, luxury fashion branding, thought leadership blogs, and high-impact hero headings. Modern web serifs like Newsreader, Merriweather, and EB Garamond are specifically hinted for crisp rendering on high-resolution Retina and OLED displays.',
    },
    {
      question: 'What is the difference between Old Style and Didone serifs?',
      answer:
        'Old Style serifs (e.g. Garamond) feature moderate stroke contrast, bracketed serifs, and diagonal stress reflecting handwritten calligraphy. Didone or Modern serifs (e.g. Bodoni) feature extreme vertical contrast with razor-thin horizontal hairlines and unbracketed serifs, projecting elegance and fashion-forward authority.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Serif Typeface Generator - Preview & Test Serif Fonts Online"
        pageDescription="Explore, preview, and test classic, editorial, and modern serif typefaces with live custom text and CSS export."
        toolName="TypefaceGen Serif Typeface Generator"
        toolDescription="Explore, preview, and test classic, editorial, and modern serif typefaces with live custom text and CSS export."
        url="https://typefacegen.com/serif-typeface-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Serif Typeface Generator', item: 'https://typefacegen.com/serif-typeface-generator' },
        ]}
        faqs={serifFaqs}
        itemList={{
          name: 'Featured Serif Typefaces',
          description: 'Popular editorial and book serif fonts available in TypefaceGen.',
          items: [
            { name: 'Playfair Display', description: 'Transitional high-contrast editorial headline serif.' },
            { name: 'Merriweather', description: 'Engineered for exceptional screen reading comfort at body sizes.' },
            { name: 'Lora', description: 'Contemporary serif with warm calligraphic curves.' },
            { name: 'Cinzel', description: 'Classical Roman proportions inspired by first-century inscriptions.' },
            { name: 'Newsreader', description: 'Designed specifically for continuous on-screen editorial reading.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Serif Typeface Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test curated serif typefaces with live custom copy. Compare high-contrast Didones,
          sturdy book serifs, and contemporary editorial optical families.
        </p>
      </div>

      <TypefaceGenerator initialCategory="serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">
            Serif Sub-Classifications &amp; Typographic Anatomy
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            From Renaissance Roman carving to modern publishing Didones:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Old Style</h3>
            <p className="text-zinc-600 leading-relaxed">
              Diagonal stress, bracketed serifs, and moderate stroke contrast. Examples: <em>Cormorant Garamond</em>, <em>Merriweather</em>.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Transitional</h3>
            <p className="text-zinc-600 leading-relaxed">
              Sharper serifs and more pronounced vertical stroke contrast. Examples: <em>Playfair Display</em>, <em>Libre Baskerville</em>.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Didone (Modern)</h3>
            <p className="text-zinc-600 leading-relaxed">
              Extreme vertical stress and unbracketed razor hairlines for luxury editorial identity. Example: <em>Bodoni Moda</em>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
