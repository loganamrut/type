import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// Use a fixed date for stability — update this when content actually changes.
// Using a dynamic new Date() causes the lastmod to change on every build,
// which wastes crawl budget by signaling "updated" even when nothing changed.
const LAST_MODIFIED = new Date('2026-09-25T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://typefacegen.com';

  const routes = [
    // Homepage — highest priority, updated most often
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    // Core tools — very high priority
    { path: '/font-pairing-generator/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/font-tester/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/typography-generator/', priority: 0.9, changeFrequency: 'weekly' as const },
    // Category pages
    { path: '/serif-typeface-generator/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/sans-serif-typeface-generator/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/display-typeface-generator/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/monospace-typeface-generator/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/script-typeface-generator/', priority: 0.8, changeFrequency: 'weekly' as const },
    // Use-case guides
    { path: '/typeface-for-logos/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-websites/', priority: 0.8, changeFrequency: 'weekly' as const },
    // New generator pages — high-value SEO targets
    { path: '/heading-font-generator/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/body-font-generator/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/google-font-generator/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/font-combination-generator/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/variable-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/bold-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/elegant-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/modern-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/minimalist-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/vintage-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/ui-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/poster-font-generator/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/font-generator-for-social-media/', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-print/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-presentations/', priority: 0.8, changeFrequency: 'weekly' as const },
    // Legal & info
    { path: '/about/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy/', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms/', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images:
      route.path === '/'
        ? [
            `${baseUrl}/images/how-typeface-generator-works.png`,
            `${baseUrl}/og-image.png`,
          ]
        : [`${baseUrl}/og-image.png`],
    videos:
      route.path === '/'
        ? [
            {
              title: 'How the Online Typeface Generator Works - Complete Video Walkthrough',
              thumbnail_loc: `${baseUrl}/images/how-typeface-generator-works.png`,
              description:
                'Step-by-step video walkthrough demonstrating how to test custom copy, compare 200+ open-source typefaces, customize typography metrics, and export production CSS code on TypefaceGen.',
              content_loc: `${baseUrl}/videos/how-typeface-generator-works.mp4`,
              player_loc: `${baseUrl}/#how-it-works`,
              duration: 20,
              publication_date: '2026-09-18T00:00:00Z',
            },
          ]
        : undefined,
  }));
}

