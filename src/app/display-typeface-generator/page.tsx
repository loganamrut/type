import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Display Typeface Generator - Preview Bold & Headline Fonts Online',
  description:
    'Preview and test expressive display and editorial typefaces. Craft high-impact hero titles, poster typography, and bold brand identities with live CSS export.',
  keywords: [
    'display typeface generator',
    'display font generator',
    'headline fonts',
    'bold poster fonts',
    'expressive typography',
    'hero title fonts',
    'retro display fonts',
    'creative typography generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/display-typeface-generator/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/display-typeface-generator/',
    siteName: 'TypefaceGen',
    title: 'Display Typeface Generator - Preview Bold & Headline Fonts Online',
    description:
      'Preview and test expressive display and editorial typefaces. Craft high-impact hero titles, poster typography, and bold brand identities with live CSS export.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Display Typeface Generator - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Display Typeface Generator - Preview Bold & Headline Fonts Online',
    description:
      'Preview and test expressive display typefaces with live custom copy and CSS export.',
    images: ['/og-image.png'],
  },
};

export default function DisplayTypefacePage() {
  const breadcrumbs = [
    { label: 'Categories', href: '/' },
    { label: 'Display' },
  ];

  const displayFaqs = [
    {
      question: 'What is a display typeface?',
      answer:
        'A display typeface is a font designed specifically for use at large sizes (typically 32px and above), such as in headlines, posters, packaging, billboards, and brand logotypes. Unlike body text fonts optimized for reading paragraphs, display fonts prioritize visual impact, personality, and artistic expression.',
    },
    {
      question: 'Why should you avoid using display fonts for body copy?',
      answer:
        'Display typefaces frequently feature tight apertures, extreme contrast between thick and thin strokes, or intricate decorative elements. At paragraph text sizes (14px–18px), these stylized traits cause visual fatigue and severe letterform degradation.',
    },
    {
      question: 'How do you effectively pair display typefaces?',
      answer:
        'Pair a high-personality display font with a neutral, highly legible sans-serif (such as Inter, Roboto, or Work Sans) for subheadings and body copy. This allows the display font to command visual attention without competing with paragraph flow.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Display Typeface Generator - Preview Bold & Headline Fonts Online"
        pageDescription="Preview and test expressive display and editorial typefaces. Craft high-impact hero titles, poster typography, and bold brand identities."
        toolName="TypefaceGen Display Typeface Generator"
        toolDescription="Preview and test expressive display and editorial typefaces. Craft high-impact hero titles, poster typography, and bold brand identities."
        url="https://typefacegen.com/display-typeface-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Display Typeface Generator', item: 'https://typefacegen.com/display-typeface-generator' },
        ]}
        faqs={displayFaqs}
        itemList={{
          name: 'Featured Display Typefaces',
          description: 'Expressive headline and poster typefaces on TypefaceGen.',
          items: [
            { name: 'Bebas Neue', description: 'All-caps condensed display powerhouse for punchy headlines.' },
            { name: 'Abril Fatface', description: 'Didone-inspired titling font with extreme stroke contrast.' },
            { name: 'Righteous', description: 'Art Deco geometric display typeface with retro-futuristic styling.' },
            { name: 'Cinzel Decorative', description: 'Classical Roman uppercase font embellished with elegant swashes.' },
            { name: 'Syne', description: 'Artistic geometric typeface designed for cutting-edge cultural branding.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Display Typeface Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Discover expressive and experimental display typefaces crafted for commanding
          hero headlines, posters, packaging, and brand logos.
        </p>
      </div>

      <TypefaceGenerator initialCategory="display" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-4 max-w-4xl text-xs text-zinc-600 leading-relaxed">
        <h2 className="text-lg font-bold text-zinc-950">
          Principles of Display Typography &amp; Visual Impact
        </h2>
        <p>
          Display typefaces break conventions to demand immediate emotional engagement.
          Reserve them for titles and callouts at 32px or larger, tighten tracking slightly (-0.02em to -0.04em),
          and ground them with neutral sans-serif body copy.
        </p>
      </section>
    </div>
  );
}
