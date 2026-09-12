import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Elegant Font Generator - Luxury & Refined Typefaces Online',
  description:
    'Preview elegant, refined, and luxury typefaces online. Find sophisticated serifs, graceful scripts, and premium display fonts for your high-end design projects. Free.',
  keywords: [
    'elegant font generator',
    'luxury font generator',
    'sophisticated font generator',
    'refined typeface preview',
    'premium font generator',
    'classy font generator',
    'elegant serif fonts',
    'luxury brand fonts',
    'fashion typography generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/elegant-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/elegant-font-generator',
    siteName: 'TypefaceGen',
    title: 'Elegant Font Generator - Luxury & Refined Typefaces Online',
    description:
      'Preview elegant, refined, and luxury typefaces online. Find sophisticated serifs, graceful scripts, and premium display fonts for high-end design projects. Free.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elegant Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Font Generator - Luxury & Refined Typefaces Online',
    description: 'Preview elegant, luxury & refined fonts online. 200+ typefaces, live text, CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function ElegantFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Elegant Fonts' },
  ];

  const faqs = [
    {
      question: 'What typefaces convey elegance and luxury in design?',
      answer:
        'Elegant typefaces share several hallmarks: refined stroke contrast (thin hairlines vs. thick strokes), graceful curves, precise geometric proportions, and optically-balanced letterforms. High-contrast Didone serifs (Bodoni Moda, Playfair Display SC), classic Old Style Romans (Cormorant Garamond at light weight), and calligraphic scripts (Parisienne, Great Vibes) all communicate natural elegance and refinement.',
    },
    {
      question: 'How do luxury fashion brands like Vogue and Chanel use typography?',
      answer:
        "Fashion and luxury brands use typography as a primary identity asset. Vogue uses Bodoni — a high-contrast Didone serif with razor-thin hairlines communicating editorial authority. Chanel uses a proprietary all-caps geometric sans-serif. Common techniques: generous letter-spacing (0.1em–0.3em), uppercase setting, light weights (200–300), and maximum white space — each communicating exclusivity through restraint.",
    },
    {
      question: 'Can free Google Fonts achieve an elegant, luxury aesthetic?',
      answer:
        'Yes. The key is pairing technique and application rather than the font source alone. Cormorant Garamond at Thin (100) weight in all-caps with 0.2em tracking rivals proprietary luxury typography. Playfair Display SC (Small Caps) projects premium authority. The secret: sparse, generous white space and light, refined color palettes (champagne, ivory, deep navy) transform any quality typeface into luxury design.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Elegant Font Generator - Luxury & Refined Typefaces Online"
        pageDescription="Preview elegant, refined, and luxury typefaces online. Find sophisticated serifs, graceful scripts, and premium display fonts for high-end design projects."
        toolName="TypefaceGen Elegant Font Generator"
        toolDescription="Preview elegant, refined, and luxury typefaces with live custom text and instant CSS export for high-end design projects."
        url="https://typefacegen.com/elegant-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Elegant Font Generator', item: 'https://typefacegen.com/elegant-font-generator' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Elegant & Luxury Fonts',
          description: 'Sophisticated, refined, and premium typefaces for luxury branding, fashion, and high-end editorial design.',
          items: [
            { name: 'Cormorant Garamond', description: 'Ultra-refined Old Style serif at thin weight — the gold standard for open-source luxury typography.' },
            { name: 'Playfair Display SC', description: 'High-contrast small-caps editorial serif for premium brand identity and fashion editorial.' },
            { name: 'Bodoni Moda', description: 'Optically-sized Didone serif with razor hairlines communicating luxury fashion authority.' },
            { name: 'Great Vibes', description: 'Graceful calligraphic script for wedding, hospitality, and lifestyle luxury brand applications.' },
            { name: 'Cinzel Decorative', description: 'Ornate Roman display caps with classical majesty for heritage luxury and prestige institutions.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Elegant Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview sophisticated, refined, and luxury typefaces with live custom text. From high-contrast
          Didone serifs to graceful calligraphic scripts — find fonts that communicate elegance.
        </p>
      </div>

      <TypefaceGenerator initialCategory="serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Elegant Typography Techniques: The Language of Luxury</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Elegance in typography is achieved through deliberate restraint and precision:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Thin Weights & Tracking</h3>
            <p className="text-zinc-600 leading-relaxed">
              Light (300) or Thin (100) weights with generous letter-spacing (0.1em–0.25em) and uppercase setting communicate luxury through restraint. Used by Céline, Bottega Veneta, and The Row.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">High Contrast Serifs</h3>
            <p className="text-zinc-600 leading-relaxed">
              Didone serifs (extreme thick-to-thin stroke contrast) are the cornerstone of luxury publishing. Bodoni, Playfair, and Cormorant achieve visual tension between weight extremes that signals sophisticated craftsmanship.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Generous White Space</h3>
            <p className="text-zinc-600 leading-relaxed">
              Luxury typography uses white space as a design element. Large margins, tall line heights (2.0–2.5), and sparse text density signal exclusivity — only brands with something truly premium can afford that much silence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
