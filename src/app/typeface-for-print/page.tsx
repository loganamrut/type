import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Typeface for Print - Best Fonts for Print Design & Publishing',
  description:
    'Preview and test the best typefaces for print design, magazines, books, and publishing. Find high-resolution print-optimized serifs and display fonts. Free CSS export.',
  keywords: [
    'typeface for print',
    'print font generator',
    'fonts for print design',
    'book typography fonts',
    'magazine font generator',
    'print publishing fonts',
    'editorial print typefaces',
    'best fonts for printing',
    'high resolution print fonts',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/typeface-for-print',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/typeface-for-print',
    siteName: 'TypefaceGen',
    title: 'Typeface for Print - Best Fonts for Print Design & Publishing',
    description:
      'Preview and test the best typefaces for print design, magazines, books, and publishing. Find print-optimized serifs and display fonts. Free CSS export.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Typeface for Print - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typeface for Print - Best Fonts for Print Design & Publishing',
    description: 'Preview typefaces for print, magazines, books & publishing. 200+ fonts, live text, CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function TypefaceForPrintPage() {
  const breadcrumbs = [
    { label: 'Guides', href: '/' },
    { label: 'For Print' },
  ];

  const faqs = [
    {
      question: 'What are the best fonts for print design and publishing?',
      answer:
        "Print typography demands fonts that perform beautifully at 300 DPI+ resolution on paper. Top print-optimized choices: Merriweather (engineered for excellent print reproduction), Garamond-family serifs (Cormorant Garamond, EB Garamond — classical book typography for 500+ years), Libre Baskerville (transitional clarity in print), and Playfair Display for high-impact editorial magazine headline applications.",
    },
    {
      question: 'What font size should I use for print body text?',
      answer:
        "Print body text is measured in points (pt) rather than pixels. Standard ranges: Books (9–11pt), Magazines (9–12pt), Newspapers (8–10pt), Annual Reports (10–12pt), Legal documents (10–12pt). The equivalent pixel conversion is 1pt = 1.333px at 96 DPI screen, but in print at 300 DPI, a 10pt font renders far more crisply than 13px on screen.",
    },
    {
      question: 'What is the difference between screen fonts and print fonts?',
      answer:
        "Screen fonts are optimized for pixel grid rendering at 72–227 PPI — they feature generous x-heights, open apertures, and reduced stroke contrast to survive imperfect pixel rendering. Print fonts at 300–600 DPI can utilize finer stroke details, higher contrast, tighter spacing, and more delicate serifs — features that would disappear on screen but read beautifully in ink on paper.",
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Typeface for Print - Best Fonts for Print Design & Publishing"
        pageDescription="Preview and test the best typefaces for print design, magazines, books, and publishing. Find high-resolution print-optimized serifs and display fonts."
        toolName="TypefaceGen Print Typography Studio"
        toolDescription="Preview and test print-optimized typefaces for books, magazines, and publishing with live custom text and CSS export."
        url="https://typefacegen.com/typeface-for-print"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Typeface for Print', item: 'https://typefacegen.com/typeface-for-print' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Typefaces for Print Design',
          description: 'Classic and contemporary typefaces optimized for high-resolution print production and publishing.',
          items: [
            { name: 'EB Garamond', description: 'Faithful digital revival of Garamond — the gold standard for book and academic publishing typography.' },
            { name: 'Cormorant Garamond', description: 'Exquisitely refined Old Style serif perfect for luxury print publications and editorial design.' },
            { name: 'Libre Baskerville', description: 'Transitional serif with crisp stroke contrast optimized for both screen and print production.' },
            { name: 'Merriweather', description: 'Engineered for readability across both print and digital contexts — workhorse editorial serif.' },
            { name: 'Playfair Display', description: 'High-contrast Transitional serif ideal for magazine covers, chapter titles, and print display typography.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Typeface for Print
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test typefaces for books, magazines, annual reports, and print publications.
          Find classical serifs and high-contrast display fonts that shine at 300 DPI resolution on paper.
        </p>
      </div>

      <TypefaceGenerator initialCategory="serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Print Typography Specifications: Key Rules for Press-Ready Files</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Production-ready print files require specific technical standards:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Resolution & DPI</h3>
            <p className="text-zinc-600 leading-relaxed">
              Minimum 300 DPI for body text, 600 DPI for fine detail and thin-stroke display type. Use vector type (PDF/EPS) wherever possible to eliminate resolution constraints entirely.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">CMYK Color Mode</h3>
            <p className="text-zinc-600 leading-relaxed">
              Convert all black body text to Rich Black (C:0 M:0 Y:0 K:100) for crisp single-ink printing. Use Rich Black (C:60 M:50 Y:40 K:100) only for large display headings and solid fills — not for small body text.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Font Embedding</h3>
            <p className="text-zinc-600 leading-relaxed">
              Always embed or outline all fonts when exporting PDFs for print. Unembedded fonts are substituted by the printer with system defaults, destroying typography. Use "Export PDF/X-4" in InDesign or Acrobat for verified embedding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
