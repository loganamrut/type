import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Typeface for Websites - Preview & Optimize Web Typography Online',
  description:
    'Test and optimize typefaces for modern websites, web applications, and digital interfaces. Ensure high screen legibility, low CLS, and responsive typography scaling.',
  keywords: [
    'typeface for websites',
    'best web fonts',
    'web typography generator',
    'fonts for web applications',
    'core web vitals fonts',
    'zero cls web fonts',
    'ui fonts preview',
    'responsive typography for websites',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/typeface-for-websites/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/typeface-for-websites/',
    siteName: 'TypefaceGen',
    title: 'Typeface for Websites - Preview & Optimize Web Typography Online',
    description:
      'Test and optimize typefaces for modern websites, web applications, and digital interfaces. Ensure high screen legibility, low CLS, and responsive typography scaling.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Typeface for Websites - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typeface for Websites - Preview & Optimize Web Typography Online',
    description:
      'Test and optimize typefaces for modern websites, web applications, and digital interfaces with live custom copy.',
    images: ['/og-image.png'],
  },
};

export default function TypefaceForWebsitesPage() {
  const breadcrumbs = [
    { label: 'Guides', href: '/' },
    { label: 'For Websites' },
  ];

  const websiteFaqs = [
    {
      question: 'How does typography directly impact Google Core Web Vitals (CLS & LCP)?',
      answer:
        'Unoptimized web fonts cause Cumulative Layout Shift (CLS) when custom fonts swap in over default fallbacks with mismatched metrics. By using modern font-display: swap with size-adjust CSS declarations, or preloading critical fonts, text renders instantly without jumping or displacing page content.',
    },
    {
      question: 'What body text font size and line height is recommended for websites?',
      answer:
        'The modern web standard is a minimum base size of 16px (1.0rem) for body paragraphs, paired with a line-height of 1.5 to 1.65 (24px–26px) and an optimal measure (line length) of 45 to 75 characters per line to ensure effortless reading across mobile and desktop.',
    },
    {
      question: 'What are variable fonts and why are they superior for websites?',
      answer:
        'Variable fonts package an entire family (from Thin 100 to Black 900, plus optical size and slant axes) into a single, compact WOFF2 file. This eliminates multiple HTTP network requests, cuts page weight by up to 70%, and speeds up Largest Contentful Paint (LCP).',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Typeface for Websites - Preview & Optimize Web Typography Online"
        pageDescription="Test and optimize typefaces for modern websites, web applications, and digital interfaces with live custom text and CSS tokens."
        toolName="TypefaceGen Web Typography & Core Web Vitals Studio"
        toolDescription="Test and optimize typefaces for modern websites, web applications, and digital interfaces with live custom text and CSS tokens."
        url="https://typefacegen.com/typeface-for-websites"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Typeface for Websites', item: 'https://typefacegen.com/typeface-for-websites' },
        ]}
        faqs={websiteFaqs}
        itemList={{
          name: 'Top Web & UI Typefaces',
          description: 'High-performance web fonts optimized for Core Web Vitals and low CLS.',
          items: [
            { name: 'Inter', description: 'Screen-optimized grotesque with tall x-height and open apertures.' },
            { name: 'Plus Jakarta Sans', description: 'Contemporary sans-serif designed for modern SaaS web applications.' },
            { name: 'DM Sans', description: 'Geometric sans-serif tuned for high-density dashboard interfaces.' },
            { name: 'Roboto', description: 'High-performance sans-serif with natural reading rhythm across platforms.' },
            { name: 'Lora', description: 'Modern reading serif with calligraphic roots, perfect for blog body text.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Typefaces for Websites &amp; UI
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test typefaces engineered for digital computer screens. Evaluate rendering performance,
          measure responsive type scaling, and copy production CSS declarations.
        </p>
      </div>

      <TypefaceGenerator initialUseCase="website" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-4 max-w-4xl text-xs text-zinc-600 leading-relaxed">
        <h2 className="text-lg font-bold text-zinc-950">
          Core Web Vitals &amp; Screen Typography Best Practices
        </h2>
        <p>
          Prioritize zero cumulative layout shift (CLS) using size-adjusted fallback metrics and <code>font-display: swap</code>.
          Maintain tight line-heights on headings (1.15 to 1.25) and generous line-heights on body copy (1.5 to 1.65).
        </p>
      </section>
    </div>
  );
}
