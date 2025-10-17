import { Metadata } from 'next';
import { MDXPost } from '../mdx/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://omthentic.ai';
const SITE_NAME = 'Omthentic';

/**
 * Generate metadata for blog post
 */
export function generatePostMetadata(post: MDXPost): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = `${SITE_URL}/api/og?title=${encodeURIComponent(post.frontmatter.title)}`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: post.frontmatter.author ? [{ name: post.frontmatter.author }] : undefined,
    keywords: post.frontmatter.tags,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: post.frontmatter.author ? [post.frontmatter.author] : undefined,
      tags: post.frontmatter.tags,
      images: [
        {
          url: post.frontmatter.image || ogImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [post.frontmatter.image || ogImage],
      creator: '@omthentic',
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate JSON-LD for blog post
 */
export function generatePostJSONLD(post: MDXPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.image || `${SITE_URL}/api/og?title=${encodeURIComponent(post.frontmatter.title)}`,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: post.frontmatter.author || 'Omthentic Team',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/omthentic/logo-lockup.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.frontmatter.tags.join(', '),
  };
}

/**
 * Generate Organization JSON-LD
 */
export function generateOrganizationJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/omthentic/logo-lockup.svg`,
    description: 'AI-powered communication training platform',
    sameAs: [
      'https://twitter.com/omthentic',
      'https://linkedin.com/company/omthentic',
      'https://github.com/omthentic',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@omthentic.ai',
      contactType: 'Customer Service',
    },
  };
}

