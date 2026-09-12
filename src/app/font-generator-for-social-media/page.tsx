import React from 'react';
import type { Metadata } from 'next';
import { TypefaceGenerator } from '@/components/TypefaceGenerator';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Font Generator for Social Media - Stylish Text Fonts Online',
  description:
    'Generate and preview stylish fonts for Instagram, TikTok, Twitter, YouTube, and all social media. Test 200+ expressive typefaces with custom text and copy CSS instantly.',
  keywords: [
    'font generator for social media',
    'social media font generator',
    'instagram font generator',
    'tiktok font generator',
    'fonts for social media posts',
    'stylish text font generator',
    'cool fonts for social media',
    'twitter font generator',
    'youtube channel font',
  ],
  alternates: {
    canonical: 'https://typefacegen.com/font-generator-for-social-media',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typefacegen.com/font-generator-for-social-media',
    siteName: 'TypefaceGen',
    title: 'Font Generator for Social Media - Stylish Text Fonts Online',
    description:
      'Generate and preview stylish fonts for Instagram, TikTok, Twitter, YouTube, and all social media. Test 200+ expressive typefaces with custom text and copy CSS instantly.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Social Media Font Generator - TypefaceGen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Generator for Social Media - Stylish Text Fonts Online',
    description: 'Preview stylish fonts for Instagram, TikTok, Twitter & more. Live custom text, 200+ fonts, copy CSS — free.',
    images: ['/og-image.png'],
  },
};

export default function SocialMediaFontGeneratorPage() {
  const breadcrumbs = [
    { label: 'Generators', href: '/' },
    { label: 'Social Media Fonts' },
  ];

  const faqs = [
    {
      question: 'What fonts work best for Instagram posts and stories?',
      answer:
        'Bold, high-contrast display fonts command attention in the Instagram feed. Condensed sans-serifs (like Bebas Neue), expressive display serifs (like Playfair Display), and script-inspired fonts (like Dancing Script) all perform strongly. For Instagram Stories and Reels, large text at 32px+ with heavy weight (700–900) ensures readability on mobile screens.',
    },
    {
      question: 'How do I use a custom font in social media graphics?',
      answer:
        'Use TypefaceGen to find your font, then download it via Google Fonts and install it on your computer. Open Canva, Adobe Express, Figma, or Photoshop, add the installed font, and create your graphic. Alternatively, many design tools include Google Fonts natively — type the font name in the font selector to use it directly.',
    },
    {
      question: 'What font size should social media post text be?',
      answer:
        'For maximum impact on social media: main headlines should be 48px–96px, supporting text 24px–36px, and captions 18px–22px. Always preview at the actual platform thumbnail size (e.g. 1080×1080px for Instagram square posts) to confirm text legibility at reduced display sizes on mobile feeds.',
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        type="tool"
        pageType="CollectionPage"
        pageTitle="Font Generator for Social Media - Stylish Text Fonts Online"
        pageDescription="Generate and preview stylish fonts for Instagram, TikTok, Twitter, YouTube, and all social media with live custom text."
        toolName="TypefaceGen Social Media Font Generator"
        toolDescription="Preview stylish, expressive fonts for social media posts, stories, and channels with live custom text and instant CSS export."
        url="https://typefacegen.com/font-generator-for-social-media"
        breadcrumbs={[
          { name: 'Home', item: 'https://typefacegen.com/' },
          { name: 'Font Generator for Social Media', item: 'https://typefacegen.com/font-generator-for-social-media' },
        ]}
        faqs={faqs}
        itemList={{
          name: 'Best Fonts for Social Media Posts',
          description: 'Expressive, attention-grabbing typefaces optimized for Instagram, TikTok, Twitter, and YouTube.',
          items: [
            { name: 'Bebas Neue', description: 'Tall condensed impact font dominating social media graphics and channel banners.' },
            { name: 'Oswald', description: 'Condensed sans-serif with strong presence in social media headlines and post overlays.' },
            { name: 'Dancing Script', description: 'Flowing script typeface for Instagram aesthetic quotes and story overlays.' },
            { name: 'Pacifico', description: 'Friendly retro script ideal for lifestyle brand social media and product labels.' },
            { name: 'Righteous', description: 'Bold, geometric display font with character for channel names and graphics.' },
          ],
        }}
      />

      <div className="space-y-1.5 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Font Generator for Social Media
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Preview bold, stylish, and expressive fonts for Instagram, TikTok, Twitter, YouTube, and every
          social media platform. Type your caption or brand name and find fonts that command attention.
        </p>
      </div>

      <TypefaceGenerator initialCategory="display" hideHeroTitle />

      <section className="pt-6 border-t border-zinc-200 space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-zinc-950">Social Media Typography: Platform-Specific Font Strategy</h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Different platforms reward different typographic approaches:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Instagram & TikTok</h3>
            <p className="text-zinc-600 leading-relaxed">
              High visual impact is essential. Use bold display fonts at 48px+ with tight letter-spacing. Contrast text against image backgrounds with shadow or colored overlay for thumb-stopping power.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">Twitter / X & LinkedIn</h3>
            <p className="text-zinc-600 leading-relaxed">
              Clean, professional readability wins. Stick to geometric or humanist sans-serifs for authority and clarity. Avoid decorative scripts — they reduce credibility in professional contexts.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200 rounded space-y-1">
            <h3 className="font-bold text-zinc-950">YouTube Thumbnails</h3>
            <p className="text-zinc-600 leading-relaxed">
              Thumbnails display at 168×94px in sidebar. Ultra-bold condensed sans-serifs (900 weight, tight tracking) with maximum contrast backgrounds maximize click-through rates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
