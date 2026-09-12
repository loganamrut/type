import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Bold Font Generator - Heavy & Impact Typefaces Online Free',
  description:
    'Preview bold, heavy, and impact fonts online with live custom text. Test ultra-bold display typefaces at any size, compare weights, and copy CSS instantly — free.',
  keywords: [
    'bold font generator',
    'heavy font generator',
    'impact font generator',
    'bold typeface preview',
    'thick font generator',
    'strong font generator',
    'bold display fonts online',
    'ultra bold font preview',
    'fat font generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/bold-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/bold-font-generator',
    siteName: 'TypefaceGen',
    title: 'Bold Font Generator - Heavy & Impact Typefaces Online Free',
    description:
      'Preview bold, heavy, and impact fonts online with live custom text. Test ultra-bold display typefaces at any size, compare weights, and copy CSS instantly — free.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Bold Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bold Font Generator - Heavy & Impact Typefaces Online Free',
    description: 'Preview bold, heavy, and impact fonts online. Live text, compare weights, CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function BoldFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Bold Fonts' },
  ];

  const faqs = [
    {
      question: 'What is the difference between Bold (700) and Black (900) font weight?',
      answer:
        'Bold weight (700) is the standard emphasis weight used for headings, buttons, and key UI text. Black or Heavy weight (800–900) is the maximum available weight, creating ultra-thick strokes for maximum visual impact in hero sections, poster headlines, and display-scale typography. Extra-Bold (800) sits between Bold and Black, offering strong impact without the extreme density of full Black weight.',
    },
    {
      question: 'Which bold fonts work best for headlines and call-to-action buttons?',
      answer:
        'For headlines: Bebas Neue (ultra-condensed impact), Anton (heavy grotesque), Oswald Bold, Montserrat Black, or Raleway ExtraBold. For CTA buttons and UI: Inter SemiBold (600) or Bold (700) with 0.01em letter-spacing. For sports and gaming: Black Han Sans, Rubik Bold, or Secular One.',
    },
    {
      question: 'How do I test different font weights in TypefaceGen?',
      answer:
        'Expand the Typography Controls panel beneath the text editor and drag the Weight slider to any value between 100 (Thin) and 900 (Black). You can also click preset weight buttons to instantly preview popular weights. All weight variations copy through the CSS export button as specific font-weight values.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Bold Font Generator - Heavy & Impact Typefaces Online Free"
        pageDescription="Preview bold, heavy, and impact fonts online with live custom text. Test ultra-bold display typefaces at any size and copy CSS instantly."
        toolName="TypefaceGen Bold Font Generator"
        toolDescription="Preview bold, heavy, and ultra-bold impact typefaces with live custom text, weight comparison, and instant CSS export."
        url="https://typefacegen.com/bold-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Bold Font Generator', item: 'https://typefacegen.com/bold-font-generator' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Bold & Heavy Impact Fonts',
          description: 'Ultra-bold, heavy, and high-impact typefaces for headlines, posters, and attention-demanding design.',
          items: [
            { name: 'Bebas Neue', description: 'Iconic all-caps condensed heavy font with maximum visual impact for headlines and banners.' },
            { name: 'Anton', description: 'Ultra-bold condensed grotesque with tight letter-spacing for high-impact single-line headlines.' },
            { name: 'Montserrat Black', description: 'Geometric black-weight sans-serif combining authority with contemporary brand identity.' },
            { name: 'Oswald Bold', description: 'Condensed grotesque delivering bold presence in constrained horizontal spaces.' },
            { name: 'Raleway ExtraBold', description: 'Elegant wide sans-serif at maximum weight for expressive yet refined bold headings.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Bold Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview bold, heavy, and ultra-bold impact typefaces with live custom text. Test fonts at Black
          (900) weight, compare across sizes, and copy CSS in one click — completely free.
        </p>
      </div>

      <TypefaceGenerator initialCategory="display" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Font Weight Guide: When to Use Bold, ExtraBold & Black</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Choosing the right weight is as important as choosing the right typeface:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Bold 700 — Standard Emphasis</h3>
            <p className="text-zinc-600 leading-relaxed">
              The default strong weight for headings, buttons, and links. Creates clear hierarchy against Regular (400) body text without overwhelming the design composition.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">ExtraBold 800 — Strong Impact</h3>
            <p className="text-zinc-600 leading-relaxed">
              Ideal for hero section titles and landing page above-the-fold headlines where the heading must compete with hero imagery and command immediate attention.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Black 900 — Maximum Authority</h3>
            <p className="text-zinc-600 leading-relaxed">
              Reserved for single-word or short-phrase statements at large display sizes (64px+). At small sizes, Black weight reduces legibility — use Bold or ExtraBold for body-adjacent contexts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
