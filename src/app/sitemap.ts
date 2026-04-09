import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gv.ventures';

  // 1. Static Pages
  const staticRoutes = [
    '',
    '/about-us',
    '/careers',
    '/contact',
    '/insights',
    '/team',
    '/our-capabilities',
    '/platform',
    '/privacy-policy',
    '/cookie-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Insight Pages from Sanity
  let insightRoutes: any[] = [];
  try {
    const insights = await client.fetch(groq`*[_type == "insight" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`);
    insightRoutes = insights.map((insight: any) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(insight._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Sitemap insight fetch failed:', error);
  }

  return [...staticRoutes, ...insightRoutes];
}
