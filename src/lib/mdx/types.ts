/**
 * MDX Content Types and Frontmatter Schema
 */

export interface MDXFrontmatter {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  readTime?: number; // Will be calculated if not provided
  date: string; // ISO 8601 format
  author?: string;
  image?: string;
  published?: boolean; // Default true
}

export interface MDXPost {
  frontmatter: MDXFrontmatter;
  content: string;
  slug: string;
  readTime: number;
  excerpt?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

