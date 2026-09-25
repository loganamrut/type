import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all bots to crawl everything
        userAgent: '*',
        allow: '/',
        // Disallow Next.js internals — no SEO value, wastes crawl budget
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: 'https://typefacegen.com/sitemap.xml',
    host: 'https://typefacegen.com',
  };
}
