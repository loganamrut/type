import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Vintage Font Generator - Retro & Classic Typefaces Online',
  description:
    'Preview retro, vintage, and classic typefaces online. Find old-school serif, slab, script, and display fonts for your nostalgic design projects. Free CSS export.',
  keywords: [
    'vintage font generator',
    'retro font generator',
    'old style font generator',
    'vintage typeface preview',
    'classic font generator',
    'old school fonts online',
    'retro typography generator',
    'vintage design fonts',
    'antique font generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/vintage-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/vintage-font-generator',
    siteName: 'TypefaceGen',
    title: 'Vintage Font Generator - Retro & Classic Typefaces Online',
    description:
      'Preview retro, vintage, and classic typefaces online. Find old-school serif, slab, script, and display fonts for nostalgic design projects. Free CSS export.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vintage Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vintage Font Generator - Retro & Classic Typefaces Online',
    description: 'Preview retro, vintage & classic fonts online. 200+ typefaces, live custom text, CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function VintageFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Vintage Fonts' },
  ];

  const faqs = [
    {
      question: 'What makes a font look vintage or retro?',
      answer:
        'Vintage fonts typically feature characteristics from pre-digital typography eras: uneven stroke weights, ink traps, tapered terminals, slab serifs, condensed proportions, or letterpress-style irregularities. Old Style serifs (influenced by Garamond or Caslon), slab serifs (inspired by Victorian wood type), and hand-drawn scripts all read as authentically "vintage."',
    },
    {
      question: 'What are the best vintage fonts for logos and branding?',
      answer:
        'Top vintage fonts for branding include: Playfair Display (transitional editorial), Cinzel (Roman stone-cut authority), Ultra (heavy slab for vintage product labels), Abril Fatface (bold Didone display for heritage packaging), Caudex (old-style book elegance), and Josefin Slab (geometric 1920s geometric-slab). Each communicates a different era of vintage authority.',
    },
    {
      question: 'How do I create a vintage typography style in CSS?',
      answer:
        'Combine a vintage typeface with: letter-spacing: 0.05em–0.15em (generous tracking on caps), text-transform: uppercase (for formal vintage gravitas), a muted, warm color palette (#4a3728, #c4a35a), and optional CSS text-shadow for letterpress depth effect: text-shadow: 1px 1px 0 rgba(0,0,0,0.15). Add all-caps small-caps styling with font-variant-caps: small-caps for secondary text.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Vintage Font Generator - Retro & Classic Typefaces Online"
        pageDescription="Preview retro, vintage, and classic typefaces online. Find old-school serif, slab, script, and display fonts for nostalgic design projects."
        toolName="TypefaceGen Vintage Font Generator"
        toolDescription="Preview retro, vintage, and classic typefaces with live custom text and instant CSS export."
        url="https://typefacegen.com/vintage-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Vintage Font Generator', item: 'https://typefacegen.com/vintage-font-generator' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Vintage & Retro Fonts',
          description: 'Curated retro, antique, and vintage-inspired typefaces for nostalgic design projects.',
          items: [
            { name: 'Playfair Display', description: 'Transitional serif with elegant high-contrast stroke variation evoking 18th-century printing.' },
            { name: 'Cinzel', description: 'Roman inscription typeface inspired by classical stone-carving traditions.' },
            { name: 'Josefin Slab', description: '1920s geometric slab-serif combining Art Deco elegance with retro typography charm.' },
            { name: 'Abril Fatface', description: 'Bold Didone-inspired display font evoking Victorian-era commercial typography.' },
            { name: 'Cormorant Garamond', description: 'Ultra-refined Old Style serif faithful to Claude Garamond\'s 16th-century letterforms.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Vintage Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview retro, classic, and vintage-inspired typefaces with live custom text. From Victorian slab
          serifs to Art Deco geometric display fonts — find the perfect old-school aesthetic.
        </p>
      </div>

      <TypefaceGenerator initialCategory="serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Vintage Typography Eras: Identifying Retro Styles</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Each vintage typography era carries distinct visual signatures:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Victorian (1837–1901)</h3>
            <p className="text-zinc-600 leading-relaxed">
              Heavy slab serifs, ornate display wood type, and expressive fat-face designs. Characterized by maximum weight contrast and decorative excess.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Art Deco (1920s–1940s)</h3>
            <p className="text-zinc-600 leading-relaxed">
              Geometric precision, elongated letterforms, strong horizontals, and stylized luxury. Think Josefin Sans, Poiret One, Cinzel for contemporary Art Deco revival typography.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Mid-Century (1950s–1970s)</h3>
            <p className="text-zinc-600 leading-relaxed">
              Helvetica-era Modernism and psychedelic display letterforms. Characterized by optical precision (Swiss style) or expressive hand-lettered counter-culture aesthetics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
