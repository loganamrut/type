import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Typeface for Presentations - Best Fonts for PowerPoint & Slides',
  description:
    'Preview and test the best fonts for presentations, PowerPoint, Google Slides, and Keynote. Find clear, readable typefaces optimized for slide design and projection. Free.',
  keywords: [
    'typeface for presentations',
    'font generator for presentations',
    'powerpoint font generator',
    'google slides font preview',
    'keynote font generator',
    'best fonts for presentations',
    'slide deck fonts',
    'presentation typography',
    'fonts for decks',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/typeface-for-presentations',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/typeface-for-presentations',
    siteName: 'TypefaceGen',
    title: 'Typeface for Presentations - Best Fonts for PowerPoint & Slides',
    description:
      'Preview and test the best fonts for presentations, PowerPoint, Google Slides, and Keynote. Find readable typefaces optimized for slide design and projection. Free.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Typeface for Presentations - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typeface for Presentations - Best Fonts for PowerPoint & Slides',
    description: 'Preview the best fonts for presentations, PowerPoint & Slides. 200+ typefaces, live text — free.',
    images: ['/og-image.png'],
  },
};

export default function TypefaceForPresentationsPage() {
  const breadcrumbs = [
    { label: 'Guides', href: '/' },
    { label: 'For Presentations' },
  ];

  const faqs = [
    {
      question: 'What are the best fonts for professional presentations?',
      answer:
        'Top presentation fonts prioritize legibility at distance (7–15 metres for conference rooms): Inter (neutral, modern, universally legible), Montserrat SemiBold (authoritative geometric sans-serif for executive decks), Source Sans 3 (comfortable body text for data-dense slides), and Raleway (elegant display for creative agency and design presentations). Avoid thin weights below 400 and decorative scripts — they become illegible when projected.',
    },
    {
      question: 'How do I add custom Google Fonts to PowerPoint or Keynote?',
      answer:
        'Download your chosen font from Google Fonts as a .TTF or .OTF file. On Mac: double-click the file and click "Install Font" in Font Book. On Windows: right-click and select "Install for all users." The font will then appear in PowerPoint, Keynote, and Google Slides\' font selector. Note: Google Slides also has a built-in Google Fonts integration — click the font dropdown and search "More fonts" to add Google Fonts directly.',
    },
    {
      question: 'What font size should presentation slides use?',
      answer:
        'Presentation type must be legible from the back of the room. Minimum sizes: Title headlines (36pt–60pt, Bold), section headers (28pt–36pt, SemiBold), body bullets (20pt–24pt, Regular), footnotes/source citations (14pt–16pt). Never go below 18pt for audience-facing body text in a presentation — anything smaller is unreadable beyond the second row.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Typeface for Presentations - Best Fonts for PowerPoint & Slides"
        pageDescription="Preview and test the best fonts for presentations, PowerPoint, Google Slides, and Keynote. Find readable typefaces optimized for slide design and projection."
        toolName="TypefaceGen Presentation Font Studio"
        toolDescription="Preview and test the best typefaces for PowerPoint, Keynote, and Google Slides presentations with live custom text."
        url="https://typefacegen.com/typeface-for-presentations"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Typeface for Presentations', item: 'https://typefacegen.com/typeface-for-presentations' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Fonts for PowerPoint, Keynote & Google Slides',
          description: 'Clear, professional, and projection-optimized typefaces for slide deck presentations.',
          items: [
            { name: 'Montserrat', description: 'Geometric bold sans-serif — widely used in professional executive decks and startup pitch presentations.' },
            { name: 'Inter', description: 'Neutral, highly legible sans-serif that reads clearly at all sizes from title to caption in slides.' },
            { name: 'Source Sans 3', description: "Adobe's body text workhorse — clean and comfortable for text-heavy data and analysis slides." },
            { name: 'Raleway', description: 'Elegant display sans-serif for creative agency, design portfolio, and branded presentation decks.' },
            { name: 'Nunito', description: 'Rounded, friendly sans-serif for educational, community, and consumer-facing slide presentations.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Typeface for Presentations
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test the best fonts for PowerPoint, Google Slides, and Keynote presentations.
          Find typefaces that read clearly projected in conference rooms, on screens, and in virtual calls.
        </p>
      </div>

      <TypefaceGenerator initialCategory="sans-serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Presentation Typography: Rules for Maximum Clarity & Impact</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Slides are consumed differently from documents — these rules ensure your typography works at distance:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Maximum 2 Fonts Per Deck</h3>
            <p className="text-zinc-600 leading-relaxed">
              Use one font for all headings and another for all body text. Consistency across 20+ slides creates visual coherence and professionalism. Contrast using weight and size, not additional typefaces.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Bold Headlines, Regular Body</h3>
            <p className="text-zinc-600 leading-relaxed">
              Set slide titles at 700–800 weight and bullet text at 400–500 weight. The weight contrast guides the audience eye from headline summary to supporting detail naturally without requiring visual search.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">High Contrast Colors</h3>
            <p className="text-zinc-600 leading-relaxed">
              White text on dark (#1a1a2e) or dark text on white (#ffffff) both work. Avoid mid-grey text on light backgrounds — it fails on low-quality projectors. Minimum 7:1 contrast ratio for AAA presentation accessibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
