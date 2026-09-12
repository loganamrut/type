import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://typefacegen.com';
  const currentDate = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/font-pairing-generator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/font-tester', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/typography-generator', priority: 0.9, changeFrequency: 'weekly' as const },
    // Category pages
    { path: '/serif-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/sans-serif-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/display-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/monospace-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/script-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    // Use-case guides
    { path: '/typeface-for-logos', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-websites', priority: 0.8, changeFrequency: 'weekly' as const },
    // New generator pages — high-value SEO targets
    { path: '/heading-font-generator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/body-font-generator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/google-font-generator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/font-combination-generator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/variable-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/bold-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/elegant-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/modern-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/minimalist-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/vintage-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/ui-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/poster-font-generator', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/font-generator-for-social-media', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-print', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-presentations', priority: 0.8, changeFrequency: 'weekly' as const },
    // Legal & info
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
  ];


  return routes.map((route) => ({
    url: route.path === '' ? `${baseUrl}/` : `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
