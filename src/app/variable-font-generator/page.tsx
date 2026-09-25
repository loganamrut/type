import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Variable Font Generator - Preview & Test Variable Fonts Online',
  description:
    'Preview and test variable fonts online with live weight, width, and optical-size axis controls. Explore 200+ variable typefaces with custom text and export CSS instantly — free.',
  keywords: [
    'variable font generator',
    'variable font preview',
    'variable font tester',
    'variable font CSS generator',
    'test variable fonts online',
    'variable font axes preview',
    'google variable fonts',
    'font weight axis preview',
    'variable font animation',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/variable-font-generator/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/variable-font-generator/',
    siteName: 'TypefaceGen',
    title: 'Variable Font Generator - Preview & Test Variable Fonts Online',
    description:
      'Preview and test variable fonts online with live weight and axis controls. Explore 200+ variable typefaces with custom text and export CSS instantly — free.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Variable Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Variable Font Generator - Preview & Test Variable Fonts Online',
    description: 'Preview and test variable fonts online with live axis controls. 200+ fonts, CSS export — free.',
    images: ['/og-image.png'],
  },
};

export default function VariableFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Variable Fonts' },
  ];

  const faqs = [
    {
      question: 'What is a variable font and how does it work?',
      answer:
        'A variable font is a single font file that contains an entire type family with infinite stylistic variations along one or more axes (such as weight, width, slant, or optical size). Using CSS font-variation-settings or custom properties, you can set any value along each axis — e.g. font-weight: 375 — instead of being limited to pre-defined weights like 400 or 700. This enables smooth typographic transitions, responsive weight scaling, and significant file-size savings.',
    },
    {
      question: 'What are the standard variable font axes?',
      answer:
        'The five registered OpenType variable font axes are: wght (Weight, 100–900), wdth (Width, condensed to expanded), ital (Italic, 0–1), slnt (Slant, degrees), and opsz (Optical Size, adjusts design for different pt sizes). Many fonts also include custom axes — e.g. Inter\'s Grade axis, Recursive\'s MONO axis (switching between proportional and monospace), and Amstelvar\'s extensive parametric axes.',
    },
    {
      question: 'Do variable fonts improve website performance?',
      answer:
        'Yes, significantly. A variable font replacing a 4-weight family (Regular, Medium, Bold, ExtraBold) can reduce total font payload by 50–80%. For example, Inter Variable is ~370 KB and replaces multiple separate weight files totalling 800+ KB. Additionally, variable fonts support subsetting, WOFF2 compression, and the display=swap performance attribute — all combining for measurable Core Web Vitals improvements.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Variable Font Generator - Preview & Test Variable Fonts Online"
        pageDescription="Preview and test variable fonts online with live weight, width, and optical-size axis controls. Explore variable typefaces with custom text and export CSS."
        toolName="TypefaceGen Variable Font Generator"
        toolDescription="Preview and test variable fonts online with live weight axis controls, custom text, and instant CSS export."
        url="https://typefacegen.com/variable-font-generator"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Variable Font Generator', item: 'https://typefacegen.com/variable-font-generator' },
        ]}
        faqs={faqs}
        howTo={{
          name: 'How to Use and Preview Variable Fonts',
          description: 'Test variable fonts and explore their weight axes with TypefaceGen.',
          steps: [
            { name: 'Enable Variable filter', text: 'Click the "Variable" toggle in the font filter bar to show only variable font families that support continuous weight axes.' },
            { name: 'Drag the Weight slider', text: 'Open typography controls and drag the Weight slider to any value between 100 and 900 — variable fonts render every fractional value, not just fixed weights.' },
            { name: 'Test your content', text: 'Type your actual headline or body text to evaluate how the variable font performs across your specific character set at any weight.' },
            { name: 'Preview optical sizing', text: 'Test the font at both small (14px) and large (72px) sizes — fonts with the opsz axis will automatically adjust stroke detail and spacing for optimal legibility at each scale.' },
            { name: 'Export CSS font-variation-settings', text: "Click Copy CSS to get the complete CSS including font-variation-settings: 'wght' 550 for precisely your chosen variable axis value." },
          ],
        }}
        features={[
          'Live variable font weight axis preview (100–900 continuous)',
          'Variable font filter to browse only variable-ready typefaces',
          'Real-time optical size rendering at any font size',
          'CSS font-variation-settings export with exact axis values',
          'Compare variable weights side-by-side in comparison mode',
        ]}
        itemList={{
          name: 'Top Variable Fonts for Web & UI Design',
          description: 'Most popular and versatile variable fonts on Google Fonts for modern web projects.',
          items: [
            { name: 'Inter Variable', description: 'The most widely used variable font — continuous weight axis from Thin to Black in a single optimized file.' },
            { name: 'Roboto Flex', description: "Google's Roboto as a full variable font with 12 axes including Grade, Optical Size, and Width." },
            { name: 'Plus Jakarta Sans', description: 'Geometric variable font with wght and ital axes popular in modern product design systems.' },
            { name: 'Bricolage Grotesque', description: 'Expressive variable display grotesque with weight and width axes for fluid editorial type.' },
            { name: 'Recursive', description: 'Technically ambitious variable font with MONO axis switching between proportional and monospace designs.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Variable Font Generator
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview and test variable fonts with live weight axis control. Drag from Thin (100) to Black (900),
          see continuous rendering, and export CSS <code>font-variation-settings</code> instantly — free.
        </p>
      </div>

      <TypefaceGenerator initialCategory="all" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Variable Fonts & CSS: The Complete Implementation Guide</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Variable fonts unlock new CSS capabilities for responsive, animated typography:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">CSS font-variation-settings</h3>
            <p className="text-zinc-600 leading-relaxed">
              Use <code className="bg-zinc-100 px-1 rounded">font-variation-settings: &apos;wght&apos; 650</code> to set exact intermediate weights unavailable in static fonts. Combine multiple axes: <code className="bg-zinc-100 px-1 rounded">&apos;wght&apos; 650, &apos;wdth&apos; 85</code>.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Responsive Weight Scaling</h3>
            <p className="text-zinc-600 leading-relaxed">
              Use CSS custom properties with media queries to fluidly scale font weight: thinner on mobile (400), heavier on desktop (600) for better visual weight at larger sizes — all without loading additional font files.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">CSS Animation</h3>
            <p className="text-zinc-600 leading-relaxed">
              Variable font axes are animatable with CSS transitions and keyframes: <code className="bg-zinc-100 px-1 rounded">transition: font-variation-settings 0.3s ease</code> enables smooth hover weight changes — impossible with static font families.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
