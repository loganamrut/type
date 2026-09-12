import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Body Font Generator - Best Readable Fonts for Body Text',
  description:
    'Find and preview the most readable body text fonts online. Test serif and sans-serif typefaces for articles, blogs, and apps at paragraph sizes. Free CSS export.',
  keywords: [
    'body font generator',
    'body text font generator',
    'best fonts for body text',
    'readable fonts for websites',
    'paragraph font generator',
    'fonts for articles',
    'text font preview',
    'web body typeface',
    'readable typeface generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/body-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/body-font-generator',
    siteName: 'TypefaceGen',
    title: 'Body Font Generator - Best Readable Fonts for Body Text',
    description:
      'Find and preview the most readable body text fonts online. Test serif and sans-serif typefaces for articles, blogs, and apps at paragraph sizes. Free CSS export.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Body Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Font Generator - Best Readable Fonts for Body Text',
    description: 'Preview the most readable body fonts online. Live paragraph-scale preview and CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function BodyFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Body Fonts' },
  ];

  const faqs = [
    {
      question: 'What is the best font size for body text on the web?',
      answer:
        'The ideal body text size for web reading is 16px–18px for desktop and 15px–16px for mobile. Going below 14px significantly reduces readability, especially for older users. Use 1.5–1.7 line-height (leading) to maximize legibility in paragraph text, particularly on smaller screens.',
    },
    {
      question: 'Are serif or sans-serif fonts better for body text?',
      answer:
        'Both work well on modern high-DPI screens. Sans-serif fonts like Inter, Source Sans 3, and Nunito are clean and neutral for UI-dense apps and digital interfaces. Humanist serifs like Merriweather, Lora, and Newsreader provide excellent reading rhythm and are widely preferred for long-form editorial and blog content.',
    },
    {
      question: 'What is x-height and why does it matter for body fonts?',
      answer:
        'X-height refers to the height of lowercase letters (specifically "x") relative to the cap height. A generous x-height (like that of Inter or Roboto) increases legibility at small sizes because lowercase letterforms appear larger and more open, reducing the eye strain associated with dense paragraph text.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Body Font Generator - Best Readable Fonts for Body Text"
        pageDescription="Find and preview the most readable body text fonts online. Test serif and sans-serif typefaces for articles, blogs, and apps at paragraph sizes."
        toolName="TypefaceGen Body Font Generator"
        toolDescription="Preview and compare the most readable body text fonts online with live paragraph-scale preview and instant CSS export."
        url="https://typefacegen.com/body-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Body Font Generator', item: 'https://typefacegen.com/body-font-generator' },
        ]}
        faqs={faqs}
        howTo={{
          name: 'How to Choose the Best Body Text Font',
          description: 'A step-by-step guide for selecting the most readable typeface for your body copy.',
          steps: [
            { name: 'Enter a paragraph', text: 'Paste a sample paragraph of your actual content (60–80 words) into the preview editor to evaluate readability realistically.' },
            { name: 'Set to 16–18px', text: 'Test the font at actual body text size (16px or 18px) rather than heading scale to judge true readability.' },
            { name: 'Set line-height to 1.6', text: 'A line-height of 1.5–1.7 dramatically improves reading flow in long paragraphs — adjust the slider to compare.' },
            { name: 'Filter for Serif or Sans-Serif', text: 'Use category filters to narrow to humanist sans-serif or text-optimized serif fonts ideal for paragraphs.' },
            { name: 'Export Google Fonts CSS', text: 'Click the CSS export button to get the @import link and complete font-stack CSS ready to paste into your stylesheet.' },
          ],
        }}
        itemList={{
          name: 'Most Readable Body Text Fonts',
          description: 'Top-rated typefaces for body copy, articles, and long-form reading on web and mobile.',
          items: [
            { name: 'Inter', description: 'Neutral, highly legible grotesque designed specifically for screen interfaces at all sizes.' },
            { name: 'Merriweather', description: 'High-x-height serif engineered for comfortable long-form reading on all screen densities.' },
            { name: 'Source Sans 3', description: "Adobe's humanist sans-serif optimized for paragraph-level body text readability." },
            { name: 'Lora', description: 'Warm calligraphic-influenced serif with balanced contrast ideal for editorial body copy.' },
            { name: 'Nunito', description: 'Rounded, friendly sans-serif with excellent legibility for UI text and article bodies.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Body Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview the most readable body text fonts at real paragraph sizes. Paste your content and compare
          hundreds of web-optimized typefaces designed for articles, blogs, and digital interfaces.
        </p>
      </div>

      <TypefaceGenerator initialCategory="sans-serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Body Font Readability: Key Metrics & Best Practices</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Readability is determined by more than just font choice — size, line-height, and measure all interact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Optimal Size</h3>
            <p className="text-zinc-600 leading-relaxed">
              16px–18px for desktop, 15px–16px mobile. Never below 14px for body copy. Use <em>rem</em> units to respect browser accessibility settings.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Line Height</h3>
            <p className="text-zinc-600 leading-relaxed">
              1.5–1.7× the font size. Tighter spacing (1.3–1.4) for UI labels and captions. Looser (1.8+) for narrow single-column editorial layouts.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Line Length (Measure)</h3>
            <p className="text-zinc-600 leading-relaxed">
              45–75 characters per line is the optimal reading measure. Use <em>max-width: 65ch</em> in CSS to enforce comfortable line lengths for body text.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
