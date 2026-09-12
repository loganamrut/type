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
    { path: '/serif-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/sans-serif-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/display-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/monospace-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/script-typeface-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-logos', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/typeface-for-websites', priority: 0.8, changeFrequency: 'weekly' as const },
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
