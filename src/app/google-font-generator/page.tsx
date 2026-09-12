import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Google Font Generator - Preview & Test Google Fonts Online',
  description:
    'Preview and test all popular Google Fonts online with live custom text. Browse 200+ curated Google Fonts, adjust typography settings, and export Google Fonts CSS instantly.',
  keywords: [
    'google font generator',
    'google fonts preview',
    'google fonts tester',
    'test google fonts online',
    'google fonts CSS generator',
    'best google fonts',
    'google fonts finder',
    'free google fonts preview',
    'google web fonts generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/google-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/google-font-generator',
    siteName: 'TypefaceGen',
    title: 'Google Font Generator - Preview & Test Google Fonts Online',
    description:
      'Preview and test all popular Google Fonts online with live custom text. Browse 200+ curated Google Fonts, adjust typography settings, and export Google Fonts CSS instantly.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Google Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Font Generator - Preview & Test Google Fonts Online',
    description: 'Preview and test 200+ popular Google Fonts online with live custom text and CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function GoogleFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Google Fonts' },
  ];

  const faqs = [
    {
      question: 'What are Google Fonts and are they free to use?',
      answer:
        "Google Fonts is an open-source web font platform hosted by Google, offering 1,500+ typefaces licensed under the SIL Open Font License or Apache 2.0. All fonts are completely free for personal and commercial use, including embedding in websites, apps, and printed products with no royalties or licensing fees required.",
    },
    {
      question: 'How do I add a Google Font to my website?',
      answer:
        "Use TypefaceGen to preview any font, then click 'Copy CSS' to get the Google Fonts @import link. Add the @import at the top of your CSS file, then set font-family on your elements. Alternatively, add a <link> tag in your HTML <head> using the URL from Google Fonts API, such as: <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap\" rel=\"stylesheet\">.",
    },
    {
      question: 'Which Google Fonts are most popular in 2024?',
      answer:
        "The most widely used Google Fonts in 2024 include: Inter (used by 5M+ websites), Roboto (Android system font), Open Sans (clean universal sans-serif), Lato (warm humanist sans-serif), Montserrat (geometric branding font), Playfair Display (editorial serif), Poppins (rounded modern geometric), and Raleway (elegant display sans-serif).",
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Google Font Generator - Preview & Test Google Fonts Online"
        pageDescription="Preview and test all popular Google Fonts online with live custom text. Browse 200+ curated Google Fonts and export CSS instantly."
        toolName="TypefaceGen Google Font Generator"
        toolDescription="Preview and test 200+ popular Google Fonts with live custom text, typography controls, and instant Google Fonts CSS export."
        url="https://typefacegen.com/google-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Google Font Generator', item: 'https://typefacegen.com/google-font-generator' },
        ]}
        faqs={faqs}
        howTo={{
          name: 'How to Preview and Use Google Fonts',
          description: 'Find and export the perfect Google Font for your project in minutes.',
          steps: [
            { name: 'Enter your text', text: 'Type your actual content — brand name, headline, or paragraph — into the live preview editor.' },
            { name: 'Browse all Google Fonts', text: 'All 200+ fonts in TypefaceGen are served directly from Google Fonts CDN. Scroll or search by name to find any font.' },
            { name: 'Adjust typography', text: 'Expand typography controls to test different weights, sizes, and letter-spacing to match your design vision.' },
            { name: 'Click Copy CSS', text: "Click the CSS button on any font card to copy the complete Google Fonts @import URL and font-family CSS declarations." },
            { name: 'Paste into your project', text: 'Add the @import to the top of your CSS file, or convert it to a <link> tag in your HTML <head> for better performance.' },
          ],
        }}
        itemList={{
          name: 'Most Popular Google Fonts',
          description: 'Top-ranked and most widely used Google Fonts across millions of websites worldwide.',
          items: [
            { name: 'Inter', description: 'The most popular Google Font — neutral and highly legible at all sizes for interfaces and text.' },
            { name: 'Roboto', description: "Google's default system font for Android and Material Design applications." },
            { name: 'Open Sans', description: 'Universally readable humanist sans-serif used across millions of websites.' },
            { name: 'Montserrat', description: 'Elegant geometric sans-serif widely used in branding, headings, and UI design.' },
            { name: 'Playfair Display', description: 'The most popular editorial serif on Google Fonts for premium blogs and magazines.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Google Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test 200+ popular Google Fonts with live custom text. Type anything, tweak typography
          settings, and export Google Fonts CSS — all in one free tool.
        </p>
      </div>

      <TypefaceGenerator initialCategory="all" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Google Fonts Performance: Loading Best Practices</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Optimize Google Fonts loading for Core Web Vitals and minimal layout shift:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Preconnect</h3>
            <p className="text-zinc-600 leading-relaxed">
              Add <code className="bg-zinc-100 px-1 rounded">{'<link rel="preconnect" href="https://fonts.googleapis.com">'}</code> to establish early CDN connections and reduce font load latency.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">display=swap</h3>
            <p className="text-zinc-600 leading-relaxed">
              Always include <code className="bg-zinc-100 px-1 rounded">display=swap</code> in your Google Fonts URL. This prevents invisible text during font load (FOIT), improving Largest Contentful Paint scores.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Subset Strategically</h3>
            <p className="text-zinc-600 leading-relaxed">
              Request only the weights and subsets you need. <code className="bg-zinc-100 px-1 rounded">wght@400;700</code> loads far faster than the full variable font range for static weight designs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
