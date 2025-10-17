import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx/utils';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://omthentic.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Static pages
  const staticPages = [
    '',
    '/how-it-works',
    '/individuals',
    '/schools',
    '/organisations',
    '/pricing',
    '/resources',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogPosts = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}

