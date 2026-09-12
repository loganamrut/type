import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Modern Font Generator - Contemporary Typefaces for Design',
  description:
    'Preview clean, contemporary, and modern typefaces for web and brand design. Discover geometric sans-serifs, variable fonts, and modern display typefaces. Free CSS export.',
  keywords: [
    'modern font generator',
    'contemporary font generator',
    'modern typeface preview',
    'clean font generator',
    'geometric sans-serif generator',
    'modern design fonts',
    'contemporary typography generator',
    'modern web fonts',
    'trendy font generator 2024',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/modern-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/modern-font-generator',
    siteName: 'TypefaceGen',
    title: 'Modern Font Generator - Contemporary Typefaces for Design',
    description:
      'Preview clean, contemporary, and modern typefaces for web and brand design. Discover geometric sans-serifs, variable fonts, and modern display typefaces. Free.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Modern Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Font Generator - Contemporary Typefaces for Design',
    description: 'Preview clean, modern, and contemporary fonts online. 200+ typefaces, live text, CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function ModernFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Modern Fonts' },
  ];

  const faqs = [
    {
      question: 'What defines a modern typeface in contemporary design?',
      answer:
        'Modern typefaces in contemporary design are characterized by: geometric precision (circular bowls, strict optical consistency), minimal stroke contrast, high x-heights for screen legibility, generous letter-spacing, and support for variable font axes allowing infinite weight/width customization. They project clarity, sophistication, and forward-thinking brand identity.',
    },
    {
      question: 'What are the most popular modern fonts in 2024?',
      answer:
        'The most popular modern fonts in 2024 include: Inter (used by Linear, Vercel, Notion), Plus Jakarta Sans (Shopify, Figma communities), DM Sans (Google Material You projects), Satoshi (emerging standard for startup landing pages), Space Grotesk (tech and developer tools), and Bricolage Grotesque (expressive editorial and agency websites).',
    },
    {
      question: 'What is the difference between modern and contemporary typefaces?',
      answer:
        '"Modern" in typography classically refers to Didone fonts (Bodoni, Walbaum) featuring extreme stroke contrast with vertical axis. In everyday design language, "modern" typically means contemporary, clean, and minimalist — geometric sans-serifs designed for current aesthetics. "Contemporary" fonts are simply those designed and trending in the present design period (2018–2024).',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Modern Font Generator - Contemporary Typefaces for Design"
        pageDescription="Preview clean, contemporary, and modern typefaces for web and brand design. Discover geometric sans-serifs, variable fonts, and modern display typefaces."
        toolName="TypefaceGen Modern Font Generator"
        toolDescription="Preview clean, contemporary, and modern typefaces for web design, branding, and digital products with live custom text."
        url="https://typefacegen.com/modern-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Modern Font Generator', item: 'https://typefacegen.com/modern-font-generator' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Most Popular Modern Fonts',
          description: 'Clean, geometric, and contemporary typefaces trending in 2024 web and brand design.',
          items: [
            { name: 'Plus Jakarta Sans', description: 'Clean geometric sans-serif with humanist touches, popular across modern SaaS and startup brands.' },
            { name: 'DM Sans', description: 'Low-contrast geometric sans-serif with optical size mastery for modern design systems.' },
            { name: 'Space Grotesk', description: 'Contemporary grotesque with subtle geometric quirks — widely used in tech and developer tools.' },
            { name: 'Outfit', description: 'Geometric sans-serif combining Futura precision with modern interface-optimized proportions.' },
            { name: 'Bricolage Grotesque', description: 'Variable display grotesque with expressive energy for contemporary agency and editorial sites.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Modern Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview clean, geometric, and contemporary typefaces built for modern web design and branding.
          Find the fonts powering today&apos;s leading startups, SaaS products, and creative studios.
        </p>
      </div>

      <TypefaceGenerator initialCategory="sans-serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">2024 Modern Typography Trends in Web Design</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            The characteristics defining contemporary modern typography:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Variable Fonts</h3>
            <p className="text-zinc-600 leading-relaxed">
              Single font files containing infinite weight and width variations. One variable font replaces an entire 8-weight family, dramatically reducing page load time while enabling fluid responsive weight transitions.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Editorial Maximalism</h3>
            <p className="text-zinc-600 leading-relaxed">
              Counter to minimal design — oversized headline type at 96px–200vw, experimental word-stacking, and bold color contrast typographic compositions emerging in agency and fashion editorial sites.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Optical Sizing</h3>
            <p className="text-zinc-600 leading-relaxed">
              Modern variable fonts with <code className="bg-zinc-100 px-1 rounded">opsz</code> axis adjust stroke weight and spacing automatically by font-size, maintaining optical harmony from caption (8px) to billboard (120px).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
