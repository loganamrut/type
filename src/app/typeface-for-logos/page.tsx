import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Typeface for Logos - Preview & Test Wordmark Fonts Online',
  description:
    'Discover and test the best typefaces for logos, brand identity, and wordmarks. Enter your brand name to preview typography styles, letterform quirks, and scalability.',
  keywords: [
    'typeface for logos',
    'logo fonts preview',
    'wordmark font generator',
    'brand identity typography',
    'best fonts for logos',
    'test logo font online',
    'free logo typeface preview',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/typeface-for-logos',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/typeface-for-logos',
    siteName: 'TypefaceGen',
    title: 'Typeface for Logos - Preview & Test Wordmark Fonts Online',
    description:
      'Discover and test the best typefaces for logos, brand identity, and wordmarks. Enter your brand name to preview typography styles, letterform quirks, and scalability.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Typeface for Logos - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typeface for Logos - Preview & Test Wordmark Fonts Online',
    description:
      'Discover and test the best typefaces for logos, brand identity, and wordmarks with live custom text.',
    images: ['/og-image.png'],
  },
};

export default function TypefaceForLogosPage() {
  const breadcrumbs = [
    { label: 'Guides', href: '/' },
    { label: 'For Logos' },
  ];

  const logoFaqs = [
    {
      question: 'What typefaces are best suited for brand logos and wordmarks?',
      answer:
        'Geometric sans-serifs (such as Plus Jakarta Sans, Outfit, and Syne) communicate modernity and tech authority. High-contrast Didone serifs (like Bodoni Moda and Cinzel) convey luxury and editorial prestige. Display grotesques (like Bricolage and Space Grotesk) bring expressive, contemporary personality.',
    },
    {
      question: 'How do you test if a typeface will scale well as a logo?',
      answer:
        'Test your wordmark at three crucial sizes: a 16px favicon/app icon, a 120px mobile website header, and a large billboard scale. Ensure counters and thin hairlines remain discernible without closing up or vanishing at micro resolutions.',
    },
    {
      question: 'Can open-source SIL OFL fonts be used commercially for logos?',
      answer:
        'Yes. All fonts curated on TypefaceGen are licensed under the SIL Open Font License (OFL 1.1) or Apache 2.0, permitting commercial use, vector modification, and logo trademark registration without licensing royalties.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Typeface for Logos - Preview & Test Wordmark Fonts Online"
        pageDescription="Discover and test the best typefaces for logos, brand identity, and wordmarks with live custom text and optical inspection."
        toolName="TypefaceGen Logo & Wordmark Typeface Studio"
        toolDescription="Discover and test the best typefaces for logos, brand identity, and wordmarks with live custom text and optical inspection."
        url="https://typefacegen.com/typeface-for-logos"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Typeface for Logos', item: 'https://typefacegen.com/typeface-for-logos' },
        ]}
        faqs={logoFaqs}
        itemList={{
          name: 'Top Typefaces for Logos & Brand Identity',
          description: 'High-impact open-source wordmark and logotype fonts on TypefaceGen.',
          items: [
            { name: 'Montserrat', description: 'Clean geometric sans-serif ideal for modern tech branding.' },
            { name: 'Cinzel', description: 'Classical Roman uppercase proportions for luxury and heritage logos.' },
            { name: 'Bebas Neue', description: 'Tall condensed sans-serif for bold sports and entertainment marks.' },
            { name: 'Playfair Display', description: 'High-contrast serif projecting premium boutique elegance.' },
            { name: 'Syne', description: 'Distinctive avant-garde geometric letterforms for creative studios.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Typefaces for Logos &amp; Identity
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Test your company or project name across iconic display, geometric, and serif typefaces.
          Evaluate character quirks, optical balance, and vector scalability in real time.
        </p>
      </div>

      <TypefaceGenerator initialUseCase="logo" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-4 max-w-4xl text-xs text-zinc-600 leading-relaxed">
        <h2 className="text-lg font-bold text-zinc-950">
          Logo Typography Considerations &amp; Vector Scalability
        </h2>
        <p>
          A wordmark relies on letterforms to convey brand personality. Seek unique character bowls
          or spurs, verify legibility at 16px favicon sizes, and test custom letter-spacing to establish balance.
        </p>
      </section>
    </div>
  );
}
