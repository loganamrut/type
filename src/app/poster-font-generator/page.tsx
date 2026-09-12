import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Poster Font Generator - Bold Display Fonts for Posters',
  description:
    'Preview bold, expressive fonts for posters, event flyers, and large-format print. Test 200+ display typefaces with custom text at poster scale. Free CSS export.',
  keywords: [
    'poster font generator',
    'fonts for posters',
    'display font generator',
    'bold font for poster',
    'event poster font',
    'flyer font generator',
    'large format font preview',
    'typography for posters',
    'poster typeface',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/poster-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/poster-font-generator',
    siteName: 'TypefaceGen',
    title: 'Poster Font Generator - Bold Display Fonts for Posters',
    description:
      'Preview bold, expressive fonts for posters, event flyers, and large-format print. Test 200+ display typefaces with custom text at poster scale. Free CSS export.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Poster Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poster Font Generator - Bold Display Fonts for Posters',
    description: 'Preview bold display fonts for posters and event flyers. 200+ typefaces, live custom text — free.',
    images: ['/og-image.png'],
  },
};

export default function PosterFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Poster Fonts' },
  ];

  const faqs = [
    {
      question: 'What are the best fonts for event posters?',
      answer:
        'Impact-driven display typefaces work best for posters — condensed, bold, or expressive. Top choices include: Bebas Neue (ultra-bold condensed sans-serif), Oswald (strong condensed grotesque), Righteous (geometric retro display), Anton (heavy impact style), and Cinzel (classical Roman caps for formal events and cultural posters).',
    },
    {
      question: 'What font size should I use for poster titles?',
      answer:
        'Poster title font sizes depend on viewing distance. For standard A2 (42×59cm) posters viewed at 1–2 metres, title text should be 72pt–150pt. For a 6-sheet billboard viewed at 10+ metres, headline text should be 200pt–300pt. Always proof print at scale before final production to check legibility.',
    },
    {
      question: 'How many fonts should a poster use?',
      answer:
        "The classic typography rule for posters is a maximum of 2 typefaces — one strong display font for headlines and one clean sans-serif for supporting details. A skilled designer can use contrast (weight, size, color) within a single type family (via a variable font) to create visual hierarchy without introducing typographic confusion.",
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Poster Font Generator - Bold Display Fonts for Posters"
        pageDescription="Preview bold, expressive fonts for posters, event flyers, and large-format print. Test display typefaces with custom text at poster scale."
        toolName="TypefaceGen Poster Font Generator"
        toolDescription="Preview bold, expressive display fonts for posters, event flyers, and large-format print with live custom text."
        url="https://typefacegen.com/poster-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Poster Font Generator', item: 'https://typefacegen.com/poster-font-generator' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Fonts for Posters & Event Flyers',
          description: 'High-impact display typefaces for poster design, event promotion, and large-format print.',
          items: [
            { name: 'Bebas Neue', description: 'Iconic ultra-bold condensed sans-serif for concert posters and event banners.' },
            { name: 'Anton', description: 'Heavy, tightly tracked grotesque font with maximum visual impact at large sizes.' },
            { name: 'Oswald', description: 'Condensed sans-serif combining strong presence with excellent readability for poster titles.' },
            { name: 'Cinzel', description: 'Classical Roman all-caps typeface for formal, cultural, and luxury event posters.' },
            { name: 'Righteous', description: 'Retro geometric display font with strong visual personality for creative event posters.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Poster Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Find the perfect font for your next poster, event flyer, or large-format design. Preview 200+
          bold display and expressive typefaces at headline scale with live custom text.
        </p>
      </div>

      <TypefaceGenerator initialCategory="display" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Poster Typography: Hierarchy, Impact & Print Rules</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Great poster typography is engineered for maximum impact at large viewing distances:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">3-Level Hierarchy</h3>
            <p className="text-zinc-600 leading-relaxed">
              Structure your poster text in 3 sizes: Primary headline (largest), secondary details (mid), and fine print (smallest). Guide the viewer's eye from the most important information down.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Contrast & Weight</h3>
            <p className="text-zinc-600 leading-relaxed">
              Pair ultra-bold display text (900 weight) with regular-weight supporting text (400). This weight contrast alone can create stunning typographic hierarchy without needing multiple typefaces.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Print Specs</h3>
            <p className="text-zinc-600 leading-relaxed">
              For print output: use CMYK color, 300 DPI minimum resolution, and embed all fonts in your PDF. Set bleed to 3mm and keep critical text 5mm inside the safe area.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
