import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TypefacePairing } from '@/components/TypefacePairing';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Font Pairing Generator - Free Typography Combinations & Tester',
  description:
    'Generate and preview harmonious font combinations online. Match headings with body text using curated typographic contrast, x-height balance, and exportable CSS.',
  keywords: [
    'font pairing generator',
    'font pairing',
    'typeface pairing',
    'font combination generator',
    'font matcher',
    'typography pairing',
    'heading and body font generator',
    'font pairing tool',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/font-pairing-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/font-pairing-generator',
    siteName: 'TypefaceGen',
    title: 'Font Pairing Generator - Free Typography Combinations & Tester',
    description:
      'Generate and preview harmonious font combinations online. Match headings with body text using curated typographic contrast and exportable CSS.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Font Pairing Generator - TypefaceGen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Pairing Generator - Free Typography Combinations & Tester',
    description:
      'Generate and preview harmonious font combinations online. Match headings with body text using curated typographic contrast and exportable CSS.',
    images: ['/og-image.png'],
  },
};

export default function FontPairingPage() {
  const breadcrumbs = [
    { label: 'Tools', href: '/' },
    { label: 'Font Pairing Generator' },
  ];

  const pairingFaqs = [
    {
      question: 'What is a font pairing generator?',
      answer:
        'A font pairing generator is an interactive design tool that couples two or more complementary typefaces—typically a distinct display or serif typeface for headings and a clean, legible sans-serif for body copy—to create a balanced visual hierarchy with clear cognitive contrast.',
    },
    {
      question: 'How do you choose fonts that pair well together?',
      answer:
        'Harmonious pairings rely on balanced contrast: combining a high-contrast serif (like Playfair Display) with a neutral geometric or neo-grotesque sans-serif (like Inter or Plus Jakarta Sans). You should match optical x-heights so the eye travels smoothly between headings and paragraphs, and avoid pairing two fonts that are almost identical yet subtly clashing.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="ItemPage"
        pageTitle="Font Pairing Generator - Free Typography Combinations & Tester"
        pageDescription="Generate and preview harmonious font combinations online. Match headings with body copy with curated typographic contrast and CSS code."
        toolName="TypefaceGen Font Pairing Generator"
        toolDescription="Generate and preview harmonious font combinations online. Match headings with body copy with curated typographic contrast and CSS code."
        url="https://typefacegen.com/font-pairing-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Font Pairing Generator', item: 'https://typefacegen.com/font-pairing-generator' },
        ]}
        faqs={pairingFaqs}
        howTo={{
          name: 'How to Generate Harmonious Font Pairings with TypefaceGen',
          description: 'A 4-step guide to discovering, evaluating, and exporting complementary heading and body typography systems.',
          steps: [
            { name: 'Choose Heading Typeface', text: 'Select a primary heading font or hit Randomize to discover curated combinations.' },
            { name: 'Contrast with Body Copy', text: 'Pair with an open x-height body font (such as Inter, Lora, or Roboto) for effortless legibility.' },
            { name: 'Test Custom Copy', text: 'Enter your project headline and body paragraph to assess visual balance at scale.' },
            { name: 'Export Pairing CSS', text: 'Click [Copy Pairing CSS] to copy production CSS variables and Google Font imports.' },
          ],
        }}
      />

      {/* Page Header */}
      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Font Pairing Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Generate, test, and swap Heading + Body font combinations with objective typographic rationale.
          Preview your custom copy and copy valid CSS instantly.
        </p>
      </div>

      {/* Interactive Tool */}
      <TypefacePairing isStandalonePage />

      {/* Deep Typographic Guide */}
      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">
            Three Foundational Rules of Font Pairing
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Typographic pairing is rooted in human visual perception and cognitive processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1.5">
            <span className="font-mono text-zinc-400 uppercase text-[10px]">Rule 1</span>
            <h3 className="font-bold text-zinc-950">Establish Contrast</h3>
            <p className="text-zinc-600 leading-relaxed">
              Never pair two fonts that look almost identical. Pair distinct classifications: Serif with Sans, or Display with Neutral.
            </p>
          </div>

          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1.5">
            <span className="font-mono text-zinc-400 uppercase text-[10px]">Rule 2</span>
            <h3 className="font-bold text-zinc-950">Harmonize X-Height</h3>
            <p className="text-zinc-600 leading-relaxed">
              Matching optical x-heights prevents jarring jumps in visual density when moving between headings and paragraphs.
            </p>
          </div>

          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1.5">
            <span className="font-mono text-zinc-400 uppercase text-[10px]">Rule 3</span>
            <h3 className="font-bold text-zinc-950">Assign Visual Roles</h3>
            <p className="text-zinc-600 leading-relaxed">
              One font sets the emotional tone in headings; the other provides effortless scanning across body text.
            </p>
          </div>
        </div>

        {/* Supporting Links */}
        <div className="p-4 bg-zinc-50 border border-zinc-200 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <p className="text-zinc-600">
            Compare typefaces side-by-side or calculate type scales:
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/font-tester"
              className="px-3 py-1.5 bg-zinc-950 text-white rounded font-medium hover:opacity-90"
            >
              Font Tester &rarr;
            </Link>
            <Link
              href="/typography-generator"
              className="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-800 rounded font-medium hover:bg-zinc-50"
            >
              Type Scale &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
