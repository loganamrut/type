import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { FAQSection } from '@/components/FAQSection';
import { FAQS_DATA } from '@/lib/faqs-data';
import { JsonLd } from '@/components/JsonLd';

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
    images: ['/og-image.png'],
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
        howTo={{
          name: 'How to Preview and Test Typefaces Online with TypefaceGen',
          description: 'A 4-step workflow for previewing custom text across curated open-source typefaces and generating production CSS.',
          steps: [
            { name: 'Enter Custom Copy', text: 'Type or paste your headline, tagline, or sample paragraph into the live reactive text editor.' },
            { name: 'Filter & Search', text: 'Filter by category (Serif, Sans-Serif, Display, Monospace, Script) or search by font name.' },
            { name: 'Adjust Typography Metrics', text: 'Click [Expand] to fine-tune font size, weight, line-height, letter spacing, and canvas background.' },
            { name: 'Copy & Export Code', text: 'Click [Copy] for styled Unicode or [CSS] to export clean @import rules and Tailwind classes.' },
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
        <TypefaceGenerator />

        {/* 2. TYPEFACE PAIRING GENERATOR SECTION — below fold: content-visibility deferred */}
        <section className="pt-6 border-t border-zinc-200 cv-auto">
          <TypefacePairing />
        </section>

        {/* 3. SIDE-BY-SIDE TYPEFACE INSPECTOR / TESTER — below fold */}
        <section className="pt-6 border-t border-zinc-200 cv-auto">
          <TypefaceComparison initialFontIds={['inter', 'playfair-display', 'newsreader']} />
        </section>

        {/* 4. MODULAR TYPE SCALE CALCULATOR — below fold */}
        <section className="pt-6 border-t border-zinc-200 cv-auto">
          <TypeScaleTool />
        </section>

        {/* 5. EDITORIAL & EDUCATIONAL TYPOGRAPHY AUTHORITY — below fold */}
        <section className="pt-8 border-t border-zinc-200 space-y-12 cv-auto">
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

        {/* 6. ALL GENERATORS HUB — Internal linking + SEO topical authority */}
        <section className="space-y-6 border-t border-zinc-200 pt-10">
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

        {/* 7. AUTHORITATIVE FAQ SECTION */}
        <FAQSection />
      </div>
    </>
  );
}
