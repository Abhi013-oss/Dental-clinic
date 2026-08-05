import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { mainNavItems, treatmentNavItems } from '@/config/navigation.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const mainPages = mainNavItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: item.href === '/' ? 1.0 : 0.8,
  }));

  const treatmentPages = treatmentNavItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...mainPages, ...treatmentPages];
}
