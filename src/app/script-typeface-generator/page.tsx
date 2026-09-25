import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Script Typeface Generator - Preview Cursive & Handwritten Fonts',
  description:
    'Test and preview cursive, calligraphic, and handwritten script typefaces. Perfect for wedding stationery, signature brand marks, quotes, and creative accents.',
  keywords: [
    'script typeface generator',
    'cursive font generator',
    'handwritten fonts online',
    'calligraphy font generator',
    'signature fonts preview',
    'aesthetic cursive fonts',
    'script fonts for bios',
    'font and typeface generator script',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/script-typeface-generator/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/script-typeface-generator/',
    siteName: 'TypefaceGen',
    title: 'Script Typeface Generator - Preview Cursive & Handwritten Fonts',
    description:
      'Test and preview cursive, calligraphic, and handwritten script typefaces. Perfect for wedding stationery, signature brand marks, quotes, and creative accents.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Script Typeface Generator - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Script Typeface Generator - Preview Cursive & Handwritten Fonts',
    description:
      'Test and preview cursive, calligraphic, and handwritten script typefaces with live custom text and CSS export.',
    images: ['/og-image.png'],
  },
};

export default function ScriptTypefacePage() {
  const breadcrumbs = [
    { label: 'Categories', href: '/' },
    { label: 'Script' },
  ];

  const scriptFaqs = [
    {
      question: 'What is a script typeface?',
      answer:
        'A script typeface mimics the fluid, organic strokes of human handwriting, cursive penmanship, or formal calligraphy. They range from formal copperplate styles with flourishing swashes (e.g. Alex Brush, Parisienne) to casual brush pens (e.g. Caveat, Pacifico).',
    },
    {
      question: 'Why should script fonts never be typed in ALL CAPS?',
      answer:
        'Connecting script fonts are designed with specific entry and exit strokes so lowercase letters join seamlessly. Setting all-caps disrupts ligature joins and creates chaotic, illegible word clusters. Capital letters in script fonts should only be used as initial drop caps or sentence starters.',
    },
    {
      question: 'How do you effectively copy and use styled script fonts on social media?',
      answer:
        'Using TypefaceGen’s Copy button on script typefaces automatically copies the text as mathematical script Unicode characters (like 𝒯𝓎𝓅ℯ𝒻𝒶𝒸ℯ), allowing you to paste formatted cursive text directly into Instagram bios, TikTok captions, Discord handles, and Twitter posts.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Script Typeface Generator - Preview Cursive & Handwritten Fonts"
        pageDescription="Test and preview cursive, calligraphic, and handwritten script typefaces with live custom text and CSS export."
        toolName="TypefaceGen Script & Handwritten Typeface Generator"
        toolDescription="Test and preview cursive, calligraphic, and handwritten script typefaces with live custom text and CSS export."
        url="https://typefacegen.com/script-typeface-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Script Typeface Generator', item: 'https://typefacegen.com/script-typeface-generator' },
        ]}
        faqs={scriptFaqs}
        itemList={{
          name: 'Featured Script & Handwritten Typefaces',
          description: 'Cursive, brush, and personal handwritten fonts on TypefaceGen.',
          items: [
            { name: 'Dancing Script', description: 'Lively casual script where letters bounce gently along the baseline.' },
            { name: 'Pacifico', description: 'Original brush script inspired by 1950s American surf culture.' },
            { name: 'Great Vibes', description: 'Flowing connecting script with elegant ascenders and descenders.' },
            { name: 'Sacramento', description: 'Monoline semi-connected script inspired by mid-century hand-lettering.' },
            { name: 'Caveat', description: 'Casual open-loop handwriting font suitable for informal notes and annotations.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Script &amp; Handwritten Typeface Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview fluid, personal, and decorative script typefaces. Enter custom copy and test calligraphic ligatures,
          flowing swashes, and casual handwritten gestures.
        </p>
      </div>

      <TypefaceGenerator initialCategory="script" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-4 max-w-4xl text-xs text-zinc-600 leading-relaxed">
        <h2 className="text-lg font-bold text-zinc-950">
          Script Typography Best Practices &amp; Calligraphy Rules
        </h2>
        <p>
          Never set connecting script fonts in ALL CAPS or track out letter-spacing, as this breaks
          carefully crafted character connections. Pair with clean, neutral sans-serifs for secondary details.
        </p>
      </section>
    </div>
  );
}
