import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Sans-Serif Typeface Generator - Preview Clean & Modern Sans Fonts',
  description:
    'Test, preview, and compare clean sans-serif typefaces online. Explore neo-grotesque, geometric, and humanist sans fonts optimized for digital screens and web UI.',
  keywords: [
    'sans serif typeface generator',
    'sans serif font generator',
    'modern sans fonts',
    'clean web fonts',
    'geometric sans serif',
    'neo-grotesque fonts',
    'humanist sans',
    'ui typography generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/sans-serif-typeface-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/sans-serif-typeface-generator',
    siteName: 'TypefaceGen',
    title: 'Sans-Serif Typeface Generator - Preview Clean & Modern Sans Fonts',
    description:
      'Test, preview, and compare clean sans-serif typefaces online. Explore neo-grotesque, geometric, and humanist sans fonts optimized for digital screens and web UI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sans-Serif Typeface Generator - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sans-Serif Typeface Generator - Preview Clean & Modern Sans Fonts',
    description:
      'Test, preview, and compare clean sans-serif typefaces online with live custom text and CSS export.',
    images: ['/og-image.png'],
  },
};

export default function SansSerifTypefacePage() {
  const breadcrumbs = [
    { label: 'Categories', href: '/' },
    { label: 'Sans-Serif' },
  ];

  const sansFaqs = [
    {
      question: 'What makes sans-serif fonts ideal for digital UI and mobile screens?',
      answer:
        'Without delicate serifs that can blur on lower-DPI screens or small display viewports, sans-serif fonts maintain crisp character clarity. Their uniform stroke modulation and generous x-heights enhance legibility in mobile apps, dashboards, and navigation systems.',
    },
    {
      question: 'What is the difference between Geometric and Neo-Grotesque sans-serifs?',
      answer:
        'Neo-grotesques (like Inter and Roboto) prioritize neutral objectivity and compact proportion, making them versatile for dense UI data. Geometric sans-serifs (like Plus Jakarta Sans and Outfit) are constructed from perfect circular bowls and sharp angles, giving products a modern, architectural, and design-forward look.',
    },
    {
      question: 'What are the top open-source sans-serif fonts for web development in 2026?',
      answer:
        'The most popular and dependable open-source sans-serifs are Inter, Plus Jakarta Sans, DM Sans, Urbanist, Figtree, Work Sans, and Public Sans. All feature variable font support and extensive Latin character sets.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Sans-Serif Typeface Generator - Preview Clean & Modern Sans Fonts"
        pageDescription="Test, preview, and compare clean sans-serif typefaces online. Explore neo-grotesque, geometric, and humanist sans fonts."
        toolName="TypefaceGen Sans-Serif Typeface Generator"
        toolDescription="Test, preview, and compare clean sans-serif typefaces online. Explore neo-grotesque, geometric, and humanist sans fonts."
        url="https://typefacegen.com/sans-serif-typeface-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Sans-Serif Typeface Generator', item: 'https://typefacegen.com/sans-serif-typeface-generator' },
        ]}
        faqs={sansFaqs}
        itemList={{
          name: 'Featured Sans-Serif Typefaces',
          description: 'Top screen-optimized sans-serif fonts available in TypefaceGen.',
          items: [
            { name: 'Inter', description: 'Industry standard for digital user interfaces with tall x-height.' },
            { name: 'Roboto', description: 'Google signature neo-grotesque typeface balancing geometric and curved shapes.' },
            { name: 'Montserrat', description: 'Geometric sans-serif with wide proportions and architectural clarity.' },
            { name: 'Plus Jakarta Sans', description: 'Modern clean grotesque engineered for enterprise SaaS interfaces.' },
            { name: 'Poppins', description: 'Pure geometric sans-serif based on precise circles and lines.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Sans-Serif Typeface Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Explore and preview minimalist, screen-optimized sans-serif typefaces.
          Filter by neo-grotesque, geometric, and humanist styles with instant responsive previewing.
        </p>
      </div>

      <TypefaceGenerator initialCategory="sans-serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">
            Sans-Serif Classifications &amp; Digital Interfaces
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Understanding the structural DNA of digital screen typography:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Neo-Grotesque</h3>
            <p className="text-zinc-600 leading-relaxed">
              Neutral, objective curves and horizontal terminals. Highly versatile for software UI. Examples: <em>Inter</em>, <em>Roboto</em>.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Geometric</h3>
            <p className="text-zinc-600 leading-relaxed">
              Constructed from circles, squares, and triangles. Architectural clarity and optimism. Examples: <em>Plus Jakarta Sans</em>, <em>Outfit</em>.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Humanist</h3>
            <p className="text-zinc-600 leading-relaxed">
              Open counters and mild stroke contrast for long-form comfort without mechanical stiffness. Example: <em>Work Sans</em>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
