import React from 'react';

interface JsonLdProps {
  type?: 'website' | 'tool' | 'faq' | 'breadcrumbs';
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { question: string; answer: string }[];
  toolName?: string;
  toolDescription?: string;
  url?: string;
}

export function JsonLd({
  type = 'website',
  breadcrumbs,
  faqs,
  toolName,
  toolDescription,
  url = 'https://typefacegen.com/',
}: JsonLdProps) {
  const schemas: any[] = [];

  // 1. Organization Schema (Google Search Central requirement)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TypefaceGen',
    url: 'https://typefacegen.com/',
    logo: 'https://typefacegen.com/favicon.svg',
    description:
      'Online typography studio and typeface generator for designers, developers, and creators.',
  };
  schemas.push(organizationSchema);

  // 2. WebSite Schema with Sitelinks Search Box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TypefaceGen',
    url: 'https://typefacegen.com/',
    description:
      'The fastest, most comprehensive online Typeface Generator and Typography Studio. Preview, test, compare, and pair typefaces with live custom text.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://typefacegen.com/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
  schemas.push(websiteSchema);

  // 3. WebApplication Schema (Google Rich Results for Tools)
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolName || 'TypefaceGen - Online Typeface Generator & Typography Studio',
    url: url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript and HTML5 canvas/web font support',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    description:
      toolDescription ||
      'Free online typeface generator, font tester, pairing engine, and modular typography scale calculator for designers and frontend engineers.',
  };
  schemas.push(softwareSchema);

  // 4. BreadcrumbList Schema (Ensures breadcrumb rich snippets in Google SERPs)
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : `https://typefacegen.com${b.item}`,
      })),
    };
    schemas.push(breadcrumbSchema);
  }

  // 5. FAQPage Schema (Enables interactive FAQ rich results in Google Search)
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
    schemas.push(faqSchema);
  }

  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
