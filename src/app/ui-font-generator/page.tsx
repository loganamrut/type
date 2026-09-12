import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'UI Font Generator - Best Fonts for App & Interface Design',
  description:
    'Preview and test the best fonts for UI design, mobile apps, and web interfaces. Find highly legible sans-serif typefaces optimized for screens and digital products. Free.',
  keywords: [
    'UI font generator',
    'fonts for UI design',
    'app font generator',
    'interface font generator',
    'best fonts for apps',
    'UI typography generator',
    'mobile app font preview',
    'web app fonts',
    'design system fonts',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/ui-font-generator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/ui-font-generator',
    siteName: 'TypefaceGen',
    title: 'UI Font Generator - Best Fonts for App & Interface Design',
    description:
      'Preview and test the best fonts for UI design, mobile apps, and web interfaces. Find highly legible typefaces optimized for screens and digital products.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'UI Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI Font Generator - Best Fonts for App & Interface Design',
    description: 'Preview the best UI fonts for apps and web interfaces. 200+ screen-optimized typefaces — free.',
    images: ['/og-image.png'],
  },
};

export default function UIFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'UI Fonts' },
  ];

  const faqs = [
    {
      question: 'What makes a font ideal for UI and app design?',
      answer:
        'UI fonts must excel at small sizes (11px–16px), maintain legibility across different screen densities (1x, 2x, 3x), and look neutral across diverse contexts. Key qualities: generous x-height, open apertures, consistent stroke weights, and large family with many weights (Light, Regular, Medium, SemiBold, Bold) for design system flexibility.',
    },
    {
      question: 'What is the difference between system fonts and Google Fonts for UI?',
      answer:
        "System fonts (San Francisco on Apple, Roboto on Android, Segoe UI on Windows) load instantly with zero network cost and are optimized for each platform's rendering engine. Custom Google Fonts offer unique brand identity but add network latency. For enterprise SaaS and native apps, system fonts often outperform web fonts for performance and cohesion.",
    },
    {
      question: 'What font size should UI buttons, labels, and captions use?',
      answer:
        'Standard UI type scale: Primary buttons (14px–16px, Medium/SemiBold), secondary labels (13px–14px, Regular), captions and metadata (11px–12px, Regular). Navigation labels (13px–14px, SemiBold). Body text in reading sections (15px–17px, Regular). Always maintain minimum 4.5:1 contrast ratio for WCAG AA accessibility compliance.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="UI Font Generator - Best Fonts for App & Interface Design"
        pageDescription="Preview and test the best fonts for UI design, mobile apps, and web interfaces. Find highly legible typefaces optimized for screens and digital products."
        toolName="TypefaceGen UI Font Generator"
        toolDescription="Preview and test screen-optimized fonts for UI design, mobile apps, and web interfaces with live custom text and CSS export."
        url="https://typefacegen.com/ui-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'UI Font Generator', item: 'https://typefacegen.com/ui-font-generator' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Fonts for UI & App Design',
          description: 'Screen-optimized typefaces for mobile apps, SaaS products, and web interfaces.',
          items: [
            { name: 'Inter', description: 'Purpose-built for UI — optically-sized strokes and wide spacing ensure legibility at 11px–72px.' },
            { name: 'DM Sans', description: 'Geometric low-contrast sans-serif popular in SaaS and startup product design systems.' },
            { name: 'Geist Sans', description: "Vercel's open-source UI font — clean, technical, and highly optimized for dashboard interfaces." },
            { name: 'Nunito Sans', description: 'Rounded, approachable sans-serif widely used in consumer apps and friendly UI contexts.' },
            { name: 'Figtree', description: 'Modern geometric sans-serif with excellent legibility for complex UI-dense products.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          UI Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Find the perfect font for your app, dashboard, or digital product. Preview screen-optimized
          sans-serif and humanist typefaces at UI sizes — labels, buttons, body, and captions.
        </p>
      </div>

      <TypefaceGenerator initialCategory="sans-serif" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">UI Typography Scale: Design System Standards</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            A systematic type scale ensures consistent, accessible hierarchy across every screen in your app:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Accessibility</h3>
            <p className="text-zinc-600 leading-relaxed">
              Minimum 4.5:1 contrast ratio for normal text (WCAG AA) and 3:1 for large text. Never render body text below 12px. Support system font-size scaling for users with visual impairments.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Multi-Weight Family</h3>
            <p className="text-zinc-600 leading-relaxed">
              A robust design system needs at least 5 weights: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700). Variable fonts like Inter cover all weights in one optimized file.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Responsive Scaling</h3>
            <p className="text-zinc-600 leading-relaxed">
              Use <code className="bg-zinc-100 px-1 rounded">clamp()</code> for fluid type scaling: <code className="bg-zinc-100 px-1 rounded">font-size: clamp(14px, 1.5vw, 18px)</code>. This scales smoothly between mobile and large desktop without breakpoint jumps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
