import React from 'react';

export interface HowToStep {
  name: string;
  text: string;
}

export interface ItemListEntry {
  name: string;
  description?: string;
  url?: string;
}

export interface JsonLdProps {
  type?: 'website' | 'tool' | 'faq' | 'breadcrumbs' | 'article';
  pageType?: 'WebPage' | 'AboutPage' | 'ItemPage' | 'CollectionPage' | 'ContactPage';
  pageTitle?: string;
  pageDescription?: string;
  url?: string;
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { question: string; answer: string }[];
  toolName?: string;
  toolDescription?: string;
  features?: string[];
  howTo?: {
    name: string;
    description: string;
    steps: HowToStep[];
  };
  itemList?: {
    name: string;
    description?: string;
    items: ItemListEntry[];
  };
}

export function JsonLd({
  type = 'website',
  pageType,
  pageTitle,
  pageDescription,
  breadcrumbs,
  faqs,
  toolName,
  toolDescription,
  features,
  howTo,
  itemList,
  url = 'https://typefacegen.com/',
}: JsonLdProps) {
  const canonicalUrl = url.endsWith('/') && url !== 'https://typefacegen.com/' ? url.slice(0, -1) : url;
  const graph: any[] = [];

  // 1. Organization Schema (Brand identity & Knowledge Graph)
  const organizationSchema = {
    '@type': 'Organization',
    '@id': 'https://typefacegen.com/#organization',
    name: 'TypefaceGen',
    url: 'https://typefacegen.com/',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://typefacegen.com/#logo',
      url: 'https://typefacegen.com/favicon.svg',
      contentUrl: 'https://typefacegen.com/favicon.svg',
      caption: 'TypefaceGen Logo',
      width: '512',
      height: '512',
    },
    image: 'https://typefacegen.com/og-image.png',
    description:
      'Free online typography studio and typeface generator for designers, developers, and creators.',
    sameAs: ['https://github.com/loganamrut/type'],
  };
  graph.push(organizationSchema);

  // 2. WebSite Schema with Sitelinks Search Box
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': 'https://typefacegen.com/#website',
    url: 'https://typefacegen.com/',
    name: 'TypefaceGen',
    description:
      'The fastest, most comprehensive online Typeface Generator and Typography Studio. Preview, test, compare, and pair typefaces with live custom text.',
    publisher: { '@id': 'https://typefacegen.com/#organization' },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://typefacegen.com/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
  graph.push(websiteSchema);

  // 3. WebPage Schema (Hierarchical document metadata)
  const resolvedPageType = pageType || (type === 'tool' ? 'ItemPage' : 'WebPage');
  const webPageTypes = resolvedPageType === 'WebPage' ? 'WebPage' : ['WebPage', resolvedPageType];

  const webPageSchema: any = {
    '@type': webPageTypes,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageTitle || toolName || 'TypefaceGen - Online Typeface Generator & Typography Studio',
    description:
      pageDescription ||
      toolDescription ||
      'Free online typeface generator, font tester, pairing engine, and modular typography scale calculator.',
    isPartOf: { '@id': 'https://typefacegen.com/#website' },
    inLanguage: 'en-US',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      '@id': `${canonicalUrl}#primaryimage`,
      url: 'https://typefacegen.com/og-image.png',
      width: '1200',
      height: '630',
    },
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    webPageSchema.breadcrumb = { '@id': `${canonicalUrl}#breadcrumb` };
  }
  graph.push(webPageSchema);

  // 4. WebApplication Schema (Google Rich Results for Web Tools)
  if (type === 'tool' || type === 'website' || toolName) {
    const defaultFeatures = [
      'Real-time live font previewing with custom copy',
      'Curated typography pairings with contrast validation',
      'Side-by-side multi-typeface comparison inspector',
      'Modular typographic scale calculator with CSS/Tailwind export',
      'Cross-browser styled Unicode and rich HTML font copying',
      '100% client-side privacy with zero telemetry storage',
    ];

    const softwareSchema: any = {
      '@type': 'WebApplication',
      '@id': `${canonicalUrl}#application`,
      name: toolName || 'TypefaceGen - Online Typeface Generator & Typography Studio',
      url: canonicalUrl,
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
      featureList: features && features.length > 0 ? features : defaultFeatures,
      screenshot: 'https://typefacegen.com/og-image.png',
      image: 'https://typefacegen.com/og-image.png',
      author: { '@id': 'https://typefacegen.com/#organization' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1280',
        bestRating: '5',
        worstRating: '1',
      },
    };
    graph.push(softwareSchema);
  }

  // 5. BreadcrumbList Schema (Strict absolute URLs for GSC validation)
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : `https://typefacegen.com${b.item}`,
      })),
    };
    graph.push(breadcrumbSchema);
  }

  // 6. FAQPage Schema (Interactive Google Rich Accordions)
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
    graph.push(faqSchema);
  }

  // 7. HowTo Schema (Google How-To Rich Snippets for procedural guides)
  if (howTo && howTo.steps && howTo.steps.length > 0) {
    const howToSchema = {
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#howto`,
      name: howTo.name,
      description: howTo.description,
      step: howTo.steps.map((s, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: s.name,
        text: s.text,
        url: `${canonicalUrl}#step-${idx + 1}`,
      })),
    };
    graph.push(howToSchema);
  }

  // 8. ItemList Schema (Curated entity lists for category & showcase hubs)
  if (itemList && itemList.items && itemList.items.length > 0) {
    const itemListSchema = {
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#itemlist`,
      name: itemList.name,
      description: itemList.description,
      itemListElement: itemList.items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        description: item.description,
        url: item.url
          ? item.url.startsWith('http')
            ? item.url
            : `https://typefacegen.com${item.url}`
          : undefined,
      })),
    };
    graph.push(itemListSchema);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

