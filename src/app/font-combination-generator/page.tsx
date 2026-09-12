import React from 'react';
import type { Metadata } from 'next';
import { TypefacePairing } from '@/components/TypefacePairing';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Font Combination Generator - Perfect Font Pair Finder Online',
  description:
    'Find perfect font combinations and pairings online. Discover harmonious heading + body font pairs with live preview and CSS export. Free font combination generator.',
  keywords: [
    'font combination generator',
    'font pair generator',
    'font pairing generator',
    'best font combinations',
    'font duo generator',
    'heading and body font combinations',
    'google font combinations',
    'type pairing tool',
    'font harmony generator',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/font-combination-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/font-combination-generator',
    siteName: 'TypefaceGen',
    title: 'Font Combination Generator - Perfect Font Pair Finder Online',
    description:
      'Find perfect font combinations and pairings online. Discover harmonious heading + body font pairs with live preview and CSS export. Free font combination generator.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Font Combination Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Combination Generator - Perfect Font Pair Finder Online',
    description: 'Find perfect font combinations and pairings online. Live preview, CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function FontCombinationGeneratorPage() {
  const breadcrumbs = [
    { label: 'Tools', href: '/font-pairing-generator' },
    { label: 'Font Combinations' },
  ];

  const faqs = [
    {
      question: 'What is the rule of thumb for pairing fonts?',
      answer:
        'The most reliable font pairing principle is contrast through complementary opposites: pair a high-contrast serif heading font with a low-contrast sans-serif body font, or a geometric sans-serif headline with a humanist serif for body. Avoid pairing two very similar fonts (both geometric sans-serifs with similar proportions) — they compete without complementing. Contrast in style (serif + sans), weight, or proportion creates visual harmony.',
    },
    {
      question: 'What are the most popular font combinations in 2024?',
      answer:
        'Top font combinations in 2024: (1) Playfair Display + Source Sans 3 — editorial authority meets readable clarity. (2) Montserrat + Merriweather — geometric boldness with warm serif body. (3) Space Grotesk + Inter — tech-forward pair with excellent UI legibility. (4) Cormorant Garamond + Raleway — refined luxury editorial pairing. (5) Bricolage Grotesque + DM Sans — expressive display with neutral interface complement.',
    },
    {
      question: 'How many fonts should a website or brand use?',
      answer:
        'Professional design systems recommend 2 typeface families maximum: one for headings/display (with multiple weights), one for body/UI text. Adding a third monospace font for code or data tables is acceptable. More than 3 typefaces creates visual noise, slows page load, and signals amateur design. The most admired brands (Apple, Linear, Vercel, Notion) consistently use 1–2 typefaces exclusively.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="ItemPage"
        pageTitle="Font Combination Generator - Perfect Font Pair Finder Online"
        pageDescription="Find perfect font combinations and pairings online. Discover harmonious heading + body font pairs with live preview and CSS export."
        toolName="TypefaceGen Font Combination Generator"
        toolDescription="Find perfect font combinations and pairings with live heading+body preview, contrast validation, and complete CSS export."
        url="https://typefacegen.com/font-combination-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Font Combination Generator', item: 'https://typefacegen.com/font-combination-generator' },
        ]}
        faqs={faqs}
        howTo={{
          name: 'How to Find the Perfect Font Combination',
          description: 'A step-by-step guide to pairing fonts harmoniously for any design project.',
          steps: [
            { name: 'Select your heading font', text: 'Choose a display or expressive typeface for your headline. Consider the personality it needs to project — editorial authority, modern tech, warm approachability, or luxury elegance.' },
            { name: 'Select your body font', text: 'Pick a complementary sans-serif or serif for body text. It should contrast with the heading in style (e.g. serif heading + sans body) but share proportional harmony.' },
            { name: 'Preview the combination', text: 'Use the live pairing preview to see both fonts rendered together at heading and body sizes, assessing visual contrast, weight balance, and personality harmony.' },
            { name: 'Test your actual content', text: 'Enter your real headline and body copy text to evaluate the pairing in your specific context — generic preview text rarely reveals real compatibility issues.' },
            { name: 'Export the CSS', text: 'Copy the complete Google Fonts import URL and CSS font-family declarations for both fonts — ready to drop directly into your stylesheet.' },
          ],
        }}
        itemList={{
          name: 'Best Font Combinations & Pairings',
          description: 'Harmonious heading + body font pairings curated for web design, branding, and digital products.',
          items: [
            { name: 'Playfair Display + Source Sans 3', description: 'Classic editorial pairing — high-contrast serif heading meets clean, readable sans body.' },
            { name: 'Montserrat + Merriweather', description: 'Authoritative geometric bold headline with warm book serif body for approachable brand authority.' },
            { name: 'Space Grotesk + Inter', description: 'Modern tech pairing — expressive grotesque heading with the most legible UI sans-serif body.' },
            { name: 'Cormorant Garamond + Raleway', description: 'Ultra-refined luxury editorial combination for premium brand and fashion design projects.' },
            { name: 'Bricolage Grotesque + DM Sans', description: 'Expressive variable display heading with neutral, adaptable sans-serif body complement.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Font Combination Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Discover harmonious font combinations and pairings with live preview. Select heading and body
          typefaces, see them render together at real scale, and export the complete CSS instantly.
        </p>
      </div>

      <TypefacePairing />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Font Pairing Science: Contrast, Harmony & Hierarchy</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Great font combinations are based on measurable principles, not guesswork:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Contrast Strategy</h3>
            <p className="text-zinc-600 leading-relaxed">
              Pair typefaces that differ meaningfully in at least one dimension: style (serif vs. sans), weight (heavy heading vs. light body), width (condensed headline vs. extended body), or optical size (display font vs. text font).
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Proportional Harmony</h3>
            <p className="text-zinc-600 leading-relaxed">
              Fonts with similar x-heights, cap heights, and stroke rhythms pair more naturally. If two fonts feel "from the same era" they likely share proportional DNA — a good basis for a balanced pairing.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Super Family Pairing</h3>
            <p className="text-zinc-600 leading-relaxed">
              The safest combination: use a type "super family" with both serif and sans-serif variants. Source Serif + Source Sans, Merriweather + Merriweather Sans, or IBM Plex Serif + IBM Plex Sans always harmonize perfectly — they share the same design DNA.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
