import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { FAQSection } from '@/components/FAQSection';
import { FAQS_DATA } from '@/lib/faqs-data';
import { JsonLd } from '@/components/JsonLd';
import { HowItWorksMedia } from '@/components/HowItWorksMedia';

const TypefacePairing = dynamic(
  () => import('@/components/TypefacePairing').then((mod) => mod.TypefacePairing),
  {
    loading: () => <div className="h-64 rounded bg-zinc-50 border border-zinc-100 animate-pulse" />,
  }
);

const TypefaceComparison = dynamic(
  () => import('@/components/TypefaceComparison').then((mod) => mod.TypefaceComparison),
  {
    loading: () => <div className="h-64 rounded bg-zinc-50 border border-zinc-100 animate-pulse" />,
  }
);

const TypeScaleTool = dynamic(
  () => import('@/components/TypeScaleTool').then((mod) => mod.TypeScaleTool),
  {
    loading: () => <div className="h-64 rounded bg-zinc-50 border border-zinc-100 animate-pulse" />,
  }
);

export const metadata: Metadata = {
  title: 'Typeface Generator - Preview, Compare & Pair Fonts Online',
  description:
    'Use our free typeface generator to preview, compare, and pair typefaces online. Test custom text with 200+ popular fonts, modular scales, styles, and copy CSS instantly.',
  keywords: [
    'typeface generator',
    'typeface generator online',
    'free typeface generator',
    'online typeface generator',
    'typeface maker',
    'typeface creator',
    'typeface design generator',
    'font and typeface generator',
    'typography generator',
    'typography tool',
    'typeface preview',
    'typeface tester',
    'font preview',
    'font pairing',
    'font pairing generator',
    'typeface pairing',
    'font combination generator',
    'how typeface generator works',
    'how it works typeface generator',
    'online font generator workflow',
    'how typeface generator works video',
    'typeface generator video walkthrough',
    'online typography generator tutorial',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/',
    siteName: 'TypefaceGen',
    title: 'Typeface Generator - Preview, Compare & Pair Fonts Online',
    description:
      'Use our free typeface generator to preview, compare, and pair typefaces online. Test custom text with 200+ popular fonts, modular scales, styles, and copy CSS instantly.',
    images: [
      {
        url: '/images/how-typeface-generator-works.png',
        width: 1200,
        height: 675,
        alt: 'How Typeface Generator Works - Step-by-Step Typography Workflow',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TypefaceGen - Online Typeface Generator & Typography Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typeface Generator - Preview, Compare & Pair Fonts Online',
    description:
      'Use our free typeface generator to preview, compare, and pair typefaces online. Test custom text with 200+ popular fonts, modular scales, styles, and copy CSS instantly.',
    images: ['/images/how-typeface-generator-works.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        type="website"
        pageType="ItemPage"
        pageTitle="Typeface Generator - Preview, Compare & Pair Fonts Online"
        pageDescription="Free online typeface generator to preview, compare, and pair 200+ Google & open-source typefaces with live custom text, modular scales, and instant CSS export."
        url="https://typefacegen.com/"
        toolName="Typeface Generator & Online Typography Studio"
        toolDescription="Free online typeface generator to preview, compare, and pair 200+ Google & open-source typefaces with live custom text, modular scales, and instant CSS export."
        faqs={FAQS_DATA}
        breadcrumbs={[{ name: 'Typeface Generator', item: 'https://typefacegen.com/' }]}
        infographic={{
          url: 'https://typefacegen.com/images/how-typeface-generator-works.png',
          name: 'How the Online Typeface Generator Works Infographic',
          caption: 'How Typeface Generator Works - 4 Step Workflow for Testing, Pairing, and Exporting Web Fonts Online',
          description: 'Visual infographic diagram illustrating the 4-step workflow to preview live custom copy, filter typefaces, customize typographic metrics, and export production CSS.',
          width: 1200,
          height: 675,
        }}
        video={{
          name: 'How the Online Typeface Generator Works - Complete Video Walkthrough',
          description:
            'A comprehensive step-by-step video walkthrough demonstrating how to preview live custom copy, compare 200+ open-source typefaces, fine-tune typography metrics, and export production CSS code on TypefaceGen.',
          thumbnailUrl: [
            'https://typefacegen.com/images/how-typeface-generator-works.png',
            'https://typefacegen.com/videos/how-typeface-generator-works-poster.jpg',
          ],
          uploadDate: '2026-09-18T00:00:00Z',
          duration: 'PT20S',
          contentUrl: 'https://typefacegen.com/videos/how-typeface-generator-works.mp4',
          embedUrl: 'https://typefacegen.com/#how-it-works-video',
          clips: [
            { name: 'Step 1: Enter Live Custom Copy', startOffset: 3, endOffset: 7, url: 'https://typefacegen.com/#step-1' },
            { name: 'Step 2: Filter & Compare Typefaces', startOffset: 7, endOffset: 12, url: 'https://typefacegen.com/#step-2' },
            { name: 'Step 3: Adjust Typographic Metrics', startOffset: 12, endOffset: 16, url: 'https://typefacegen.com/#step-3' },
            { name: 'Step 4: Export Production CSS Code', startOffset: 16, endOffset: 20, url: 'https://typefacegen.com/#step-4' },
          ],
        }}
        howTo={{
          name: 'How to Preview, Test, and Export Typefaces Online with TypefaceGen',
          description: 'A 4-step workflow for previewing custom text across curated open-source typefaces, adjusting typography metrics, and generating production CSS.',
          image: 'https://typefacegen.com/images/how-typeface-generator-works.png',
          steps: [
            { name: 'Enter Real-Time Custom Copy', text: 'Type or paste your headline, brand tagline, or sample paragraph into the live reactive text input bar. All 200+ typeface specimens update instantaneously with zero server lag.' },
            { name: 'Filter & Compare Typefaces', text: 'Filter by category (Serif, Sans-Serif, Display, Monospace, Script) or search by font name. Compare specimens side-by-side to assess contrast and legibility.' },
            { name: 'Fine-Tune Typography Metrics', text: 'Click [Expand] on any specimen card to adjust font-size (12px–96px), variable font weight (100–900), line-height, letter-spacing, and background contrast.' },
            { name: 'Export Production CSS & Unicode', text: 'Click [Copy] for styled Unicode text or [CSS] to export clean production @import font-face declarations and Tailwind classes.' },
          ],
        }}
        itemList={{
          name: 'Top Curated Typefaces',
          description: 'Leading open-source typefaces featured on TypefaceGen.',
          items: [
            { name: 'Inter', description: 'Modern variable sans-serif engineered for maximum legibility on digital screens.' },
            { name: 'Playfair Display', description: 'Transitional high-contrast editorial serif inspired by John Baskerville.' },
            { name: 'JetBrains Mono', description: 'Developer-focused monospace font with increased lowercase height.' },
            { name: 'Lora', description: 'Contemporary serif designed for long-form editorial reading.' },
            { name: 'Montserrat', description: 'Geometric sans-serif inspired by urban typography in Buenos Aires.' },
          ],
        }}
      />

      <div className="space-y-12 sm:space-y-16">
        {/* 1. PRIMARY CORE PRODUCT (ABOVE THE FOLD) */}
        <div id="generator">
          <TypefaceGenerator />
        </div>

        {/* ON-PAGE JUMP NAVIGATION FOR ACCESSIBILITY & GOOGLE SITELINKS */}
        <nav aria-label="Page Sections" className="scroll-touch-x flex items-center gap-2 py-2 text-xs border-y border-zinc-100 bg-zinc-50/70 -mx-4 px-4 sm:mx-0 sm:px-3 sm:rounded-lg">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 shrink-0">
            Quick Nav:
          </span>
          <a href="#generator" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors">
            Generator
          </a>
          <a href="#how-it-works" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors font-medium">
            Video &amp; Guide
          </a>
          <a href="#pairing" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors">
            Pairing Tool
          </a>
          <a href="#comparison" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors">
            Comparison
          </a>
          <a href="#scale" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors">
            Type Scale
          </a>
          <a href="#typography-guide" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors">
            Typography Guide
          </a>
          <a href="#all-generators" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors">
            All Generators
          </a>
          <a href="#faqs" className="shrink-0 px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* 2. HOW IT WORKS: WORKFLOW VIDEO & INFOGRAPHIC STEP-BY-STEP GUIDE */}
        <section id="how-it-works" className="pt-6 border-t border-zinc-200 space-y-6 cv-auto">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Video Walkthrough &amp; Guide
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              How the Online Typeface Generator Works
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Watch our 20-second step-by-step video walkthrough or inspect the workflow diagram below to learn how
              to preview custom copy across 200+ typefaces, adjust typography metrics, and export production CSS.
            </p>
          </div>

          {/* Interactive Media Player (Video Walkthrough & Infographic Switcher) */}
          <HowItWorksMedia />

          {/* 4 In-Depth Step Breakdown Cards for Search Crawlers & Accessibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            <div id="step-1" className="bg-white border border-zinc-200 p-4 rounded-lg space-y-2 hover:border-zinc-400 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-zinc-950 text-white text-xs font-bold flex items-center justify-center font-mono">1</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-semibold">Reactive State</span>
              </div>
              <h3 className="text-sm font-bold text-zinc-950">1. Enter Custom Copy</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Type or paste your headline, tagline, or sample paragraph in the live reactive input box. Every glyph synchronizes across all 200+ typefaces simultaneously with zero server latency.
              </p>
            </div>

            <div id="step-2" className="bg-white border border-zinc-200 p-4 rounded-lg space-y-2 hover:border-zinc-400 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-zinc-950 text-white text-xs font-bold flex items-center justify-center font-mono">2</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">200+ Web Fonts</span>
              </div>
              <h3 className="text-sm font-bold text-zinc-950">2. Filter &amp; Compare</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Filter fonts by category—Serif, Sans-Serif, Display, Monospace, or Script. Compare x-heights, stroke modulation, and legibility side-by-side to choose the best typeface for your project.
              </p>
            </div>

            <div id="step-3" className="bg-white border border-zinc-200 p-4 rounded-lg space-y-2 hover:border-zinc-400 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-zinc-950 text-white text-xs font-bold flex items-center justify-center font-mono">3</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">Optical Controls</span>
              </div>
              <h3 className="text-sm font-bold text-zinc-950">3. Adjust Metrics</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Click Expand on any card to interactively fine-tune font size (12px–96px), variable font weight (100–900), line-height, and letter-spacing with instant browser layout engine rendering.
              </p>
            </div>

            <div id="step-4" className="bg-white border border-zinc-200 p-4 rounded-lg space-y-2 hover:border-zinc-400 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-zinc-950 text-white text-xs font-bold flex items-center justify-center font-mono">4</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold">Code Export</span>
              </div>
              <h3 className="text-sm font-bold text-zinc-950">4. Export CSS &amp; Unicode</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Copy clean production CSS rules with <code>@import</code> font-face links and Tailwind classes, or copy styled Unicode text to paste directly into Instagram, Twitter/X, and design mockups.
              </p>
            </div>
          </div>
        </section>

        {/* 3. TYPEFACE PAIRING GENERATOR SECTION — below fold: content-visibility deferred */}
        <section id="pairing" className="pt-6 border-t border-zinc-200 cv-auto">
          <TypefacePairing />
        </section>

        {/* 4. SIDE-BY-SIDE TYPEFACE INSPECTOR / TESTER — below fold */}
        <section id="comparison" className="pt-6 border-t border-zinc-200 cv-auto">
          <TypefaceComparison initialFontIds={['inter', 'playfair-display', 'newsreader']} />
        </section>

        {/* 5. MODULAR TYPE SCALE CALCULATOR — below fold */}
        <section id="scale" className="pt-6 border-t border-zinc-200 cv-auto">
          <TypeScaleTool />
        </section>

        {/* 6. EDITORIAL & EDUCATIONAL TYPOGRAPHY AUTHORITY — below fold */}
        <section id="typography-guide" className="pt-8 border-t border-zinc-200 space-y-12 cv-auto">
          {/* Header */}
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Understanding Digital Typefaces &amp; Typography
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              Explore the history, technical mechanics, and architectural principles that govern
              effective typography on digital screens.
            </p>
          </div>

          {/* Section 1: What is a Typeface & Typeface vs Font */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="bg-white border border-zinc-200 p-5 rounded-lg space-y-2">
              <h3 className="text-sm font-bold text-zinc-950">
                What Is a Typeface?
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                A <strong>typeface</strong> is the visual identity and overarching artistic design
                of a collection of characters, letters, numerals, and punctuation marks. It represents
                the cohesive aesthetic philosophy conceived by a type designer—dictating proportions,
                terminal shapes, x-height, and stroke modulation.
              </p>
              <p className="text-xs text-zinc-600 leading-relaxed">
                When you speak of <em>Inter</em> or <em>Playfair Display</em>, you are referring to the
                typeface itself, regardless of weight or point size.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 p-5 rounded-lg space-y-2">
              <h3 className="text-sm font-bold text-zinc-950">
                Typeface vs. Font
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                While modern designers frequently use the terms interchangeably:
              </p>
              <ul className="text-xs text-zinc-600 space-y-1 list-disc list-inside">
                <li>
                  <strong className="text-zinc-950">Typeface:</strong> The conceptual design (e.g. <em>Helvetica</em>).
                </li>
                <li>
                  <strong className="text-zinc-950">Font:</strong> The digital file or specific style (e.g. <em>Helvetica Bold 16px</em>).
                </li>
              </ul>
              <p className="text-xs text-zinc-600 leading-relaxed">
                In CSS, <code>font-family</code> designates the typeface, while <code>font-weight</code> and <code>font-size</code> define the active font.
              </p>
            </div>
          </div>

          {/* Section 2: How Typeface Generators Work */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 space-y-4">
            <h3 className="text-sm font-bold text-zinc-950">
              How Modern Typeface Generators Function
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Unlike generic generators that substitute standard Latin characters with decorative Unicode
              mathematical symbols (which break screen readers and accessibility), a professional Typeface Generator
              operates through real browser rendering pipelines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div className="p-3 bg-white rounded border border-zinc-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-zinc-600">01 / State</span>
                <h4 className="font-semibold text-xs text-zinc-950">DOM Text Sync</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Client-side reactive state binds your custom copy across all preview cards with zero server delay.
                </p>
              </div>
              <div className="p-3 bg-white rounded border border-zinc-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-zinc-600">02 / Network</span>
                <h4 className="font-semibold text-xs text-zinc-950">Zero-CLS Lazy Loading</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Web fonts (WOFF2) load on-demand when specimen cards enter your viewport, preserving bandwidth.
                </p>
              </div>
              <div className="p-3 bg-white rounded border border-zinc-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-zinc-600">03 / Layout</span>
                <h4 className="font-semibold text-xs text-zinc-950">CSS Variables</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Optical properties update instantly via CSS rules processed directly by the browser layout engine.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Comparative Typography Classification Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-950">
              Typeface Classifications &amp; Digital Use Cases
            </h3>
            <div className="scroll-touch-x border border-zinc-200 rounded-lg bg-white">
              <table className="w-full min-w-[560px] text-left text-xs">
                <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-950 font-semibold">
                  <tr>
                    <th className="p-3">Category</th>
                    <th className="p-3">Key Traits</th>
                    <th className="p-3">Readability Profile</th>
                    <th className="p-3">Digital Use Case</th>
                    <th className="p-3">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-600">
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-3 font-semibold text-zinc-950">Sans-Serif</td>
                    <td className="p-3">Clean terminals, monolinear stroke weight</td>
                    <td className="p-3">High screen legibility across small sizes</td>
                    <td className="p-3">Websites, mobile apps, UI dashboards</td>
                    <td className="p-3 font-mono text-[11px]">Inter, DM Sans</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-3 font-semibold text-zinc-950">Serif</td>
                    <td className="p-3">Terminal feet, optical stroke modulation</td>
                    <td className="p-3">High horizontal reading flow in long text</td>
                    <td className="p-3">Editorial publications, book copy</td>
                    <td className="p-3 font-mono text-[11px]">Playfair, Newsreader</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-3 font-semibold text-zinc-950">Slab Serif</td>
                    <td className="p-3">Heavy, rectangular block serifs</td>
                    <td className="p-3">High impact, industrial stability</td>
                    <td className="p-3">Headings, tech branding, posters</td>
                    <td className="p-3 font-mono text-[11px]">Roboto Slab, Arvo</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-3 font-semibold text-zinc-950">Monospace</td>
                    <td className="p-3">Uniform character width across all glyphs</td>
                    <td className="p-3">Precise columnar alignment</td>
                    <td className="p-3">Code editors, data tables, terminal</td>
                    <td className="p-3 font-mono text-[11px]">JetBrains Mono, Space Mono</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-3 font-semibold text-zinc-950">Display</td>
                    <td className="p-3">Exaggerated proportions, high personality</td>
                    <td className="p-3">Commanding at &gt;32px; avoid for body copy</td>
                    <td className="p-3">Posters, hero titles, logos</td>
                    <td className="p-3 font-mono text-[11px]">Bricolage Grotesque, Syne</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Internal Links Grid */}
          <div className="pt-4 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">
              Specialized Typography Studios
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <Link
                href="/font-pairing-generator"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Font Pairing Tool</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
              <Link
                href="/font-tester"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Font Tester</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
              <Link
                href="/typography-generator"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Type Scale Tool</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
              <Link
                href="/serif-typeface-generator"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Serif Typefaces</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
              <Link
                href="/sans-serif-typeface-generator"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Sans-Serif</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
              <Link
                href="/display-typeface-generator"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Display Fonts</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
              <Link
                href="/monospace-typeface-generator"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Monospace</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
              <Link
                href="/script-typeface-generator"
                className="p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>Script Fonts</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. ALL GENERATORS HUB — Internal linking + SEO topical authority */}
        <section id="all-generators" className="space-y-6 border-t border-zinc-200 pt-10">
          <div className="space-y-1">
            <h2 className="text-xl font-extrabold tracking-tight text-zinc-950">All Font Generators</h2>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-2xl">
              Specialized typeface generators for every design context — from heading and body fonts
              to social media, print, UI design, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 text-xs">
            {[
              { href: '/heading-font-generator', label: 'Heading Fonts', desc: 'Titles & hero sections' },
              { href: '/body-font-generator', label: 'Body Fonts', desc: 'Paragraphs & articles' },
              { href: '/google-font-generator', label: 'Google Fonts', desc: 'Preview all 200+ fonts' },
              { href: '/font-combination-generator', label: 'Font Combinations', desc: 'Heading + body pairs' },
              { href: '/variable-font-generator', label: 'Variable Fonts', desc: 'Weight axis preview' },
              { href: '/bold-font-generator', label: 'Bold Fonts', desc: 'Heavy & impact type' },
              { href: '/elegant-font-generator', label: 'Elegant Fonts', desc: 'Luxury & refined' },
              { href: '/modern-font-generator', label: 'Modern Fonts', desc: 'Contemporary design' },
              { href: '/minimalist-font-generator', label: 'Minimalist Fonts', desc: 'Clean & understated' },
              { href: '/vintage-font-generator', label: 'Vintage Fonts', desc: 'Retro & classic' },
              { href: '/ui-font-generator', label: 'UI Fonts', desc: 'Apps & interfaces' },
              { href: '/poster-font-generator', label: 'Poster Fonts', desc: 'Event flyers & large format' },
              { href: '/font-generator-for-social-media', label: 'Social Media Fonts', desc: 'Instagram, TikTok & more' },
              { href: '/typeface-for-print', label: 'For Print', desc: 'Books & publishing' },
              { href: '/typeface-for-presentations', label: 'For Presentations', desc: 'PowerPoint & Slides' },
              { href: '/typeface-for-logos', label: 'For Logos', desc: 'Wordmarks & brand identity' },
              { href: '/typeface-for-websites', label: 'For Websites', desc: 'Web & landing pages' },
              { href: '/serif-typeface-generator', label: 'Serif Fonts', desc: 'Editorial & book serifs' },
              { href: '/sans-serif-typeface-generator', label: 'Sans-Serif Fonts', desc: 'Modern grotesques' },
              { href: '/display-typeface-generator', label: 'Display Fonts', desc: 'Expressive display type' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-3 rounded border border-zinc-200 bg-white hover:border-zinc-950 hover:shadow-sm transition-all space-y-0.5"
              >
                <span className="font-semibold text-zinc-950 group-hover:underline underline-offset-2 block leading-tight">
                  {item.label}
                </span>
                <span className="text-zinc-600 text-[11px] leading-tight block">{item.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 8. AUTHORITATIVE FAQ SECTION */}
        <section id="faqs" className="border-t border-zinc-200 pt-8">
          <FAQSection />
        </section>
      </div>
    </>
  );
}
