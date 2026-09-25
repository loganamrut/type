import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Heading Font Generator - Best Fonts for Titles & Headlines',
  description:
    'Preview and test the best heading fonts online. Find bold, expressive typefaces for titles, hero sections, and article headlines. Copy CSS instantly — free.',
  keywords: [
    'heading font generator',
    'fonts for headings',
    'title font generator',
    'headline font generator',
    'best fonts for headings',
    'display heading fonts',
    'hero section fonts',
    'h1 font generator',
    'title typeface preview',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/heading-font-generator/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/heading-font-generator/',
    siteName: 'TypefaceGen',
    title: 'Heading Font Generator - Best Fonts for Titles & Headlines',
    description:
      'Preview and test the best heading fonts online. Find bold, expressive typefaces for titles, hero sections, and article headlines. Copy CSS instantly — free.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Heading Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heading Font Generator - Best Fonts for Titles & Headlines',
    description: 'Preview the best heading and title fonts online. Live custom text, CSS export, and 200+ curated fonts.',
    images: ['/og-image.png'],
  },
};

export default function HeadingFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Heading Fonts' },
  ];

  const faqs = [
    {
      question: 'What makes a good heading font?',
      answer:
        'Great heading fonts are highly legible at large sizes, carry strong personality, and create clear visual hierarchy. Look for typefaces with distinct letterforms, generous x-heights, and strong character spacing. Display serifs like Playfair Display and geometric sans-serifs like Plus Jakarta Sans both excel as heading choices.',
    },
    {
      question: 'What font size should headings use in web design?',
      answer:
        'H1 headings typically range from 32px–72px depending on the context. Hero sections often use 48px–96px. Body-level H2 headings work well at 24px–36px. Use a modular typographic scale (Major Third: 1.25×, or Perfect Fourth: 1.333×) to maintain proportional, harmonious heading sizes throughout your design.',
    },
    {
      question: 'Can I use heading fonts from TypefaceGen commercially?',
      answer:
        'Yes. All typefaces on TypefaceGen are served via Google Fonts and licensed under the SIL Open Font License (OFL 1.1) or Apache 2.0, which permit unlimited commercial use, including embedding in websites, apps, and printed materials without royalty fees.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Heading Font Generator - Best Fonts for Titles & Headlines"
        pageDescription="Preview and test the best heading fonts online. Find bold, expressive typefaces for titles, hero sections, and article headlines."
        toolName="TypefaceGen Heading Font Generator"
        toolDescription="Preview and test the best heading and title fonts online with live custom text and instant CSS export."
        url="https://typefacegen.com/heading-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Heading Font Generator', item: 'https://typefacegen.com/heading-font-generator' },
        ]}
        faqs={faqs}
        howTo={{
          name: 'How to Choose the Best Heading Font',
          description: 'Follow these steps to find and preview the perfect heading typeface for your project.',
          steps: [
            { name: 'Type your headline', text: 'Enter your actual heading text in the live preview editor to see exactly how your title will look in context.' },
            { name: 'Increase font size', text: 'Set the size to 48px–72px to evaluate the font at true heading scale — fine details and personality become visible at large sizes.' },
            { name: 'Filter by style', text: 'Use the Display or Serif category filters to browse the best expressive heading-optimized typefaces.' },
            { name: 'Adjust weight & spacing', text: 'Test bold weights (700–900) with slight negative letter-spacing (-0.02em to -0.04em) to achieve professional, tight headline typography.' },
            { name: 'Copy CSS', text: 'Click the CSS button to copy the complete @import, font-family, and typographic CSS rules ready to paste into your stylesheet.' },
          ],
        }}
        itemList={{
          name: 'Top Heading Fonts for Web & Print',
          description: 'Curated high-impact typefaces optimized for headings, titles, and hero sections.',
          items: [
            { name: 'Playfair Display', description: 'High-contrast editorial serif perfect for magazine and blog headings.' },
            { name: 'Syne', description: 'Avant-garde geometric sans-serif with distinctive wide letterforms for bold headings.' },
            { name: 'Bricolage Grotesque', description: 'Variable display grotesque with expressive character for modern hero headlines.' },
            { name: 'Bebas Neue', description: 'Tall condensed all-caps headline font popular in sports and impact designs.' },
            { name: 'Cinzel', description: 'Classical Roman proportioned heading serif for luxury and authority branding.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Heading Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test the best fonts for headings, titles, and hero sections. Type your headline text
          to see 200+ curated typefaces at display scale. Export CSS in one click.
        </p>
      </div>

      <TypefaceGenerator initialCategory="display" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Choosing Heading Fonts: Visual Hierarchy & Impact</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            The right heading font establishes hierarchy, sets tone, and draws readers into your content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Display & Impact</h3>
            <p className="text-zinc-600 leading-relaxed">
              Large-scale expressive fonts with strong personality. Best for hero sections, campaign posters, and editorial covers. Examples: <em>Bricolage Grotesque</em>, <em>Syne Mono</em>.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Editorial Serif</h3>
            <p className="text-zinc-600 leading-relaxed">
              High-contrast serifs that command attention in articles and landing pages. Examples: <em>Playfair Display</em>, <em>Libre Baskerville</em>, <em>Bodoni Moda</em>.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Geometric Sans</h3>
            <p className="text-zinc-600 leading-relaxed">
              Clean, modern heading fonts for tech, SaaS, and product design. Examples: <em>Plus Jakarta Sans</em>, <em>DM Sans</em>, <em>Space Grotesk</em>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
