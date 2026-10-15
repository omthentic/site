import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';


export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/vision', '/companies', '/contact', '/shanaka-jayakody'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
