import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { MDXFrontmatter, MDXPost } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content/resources');

/**
 * Get all MDX posts
 */
export function getAllPosts(): MDXPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      return getPostBySlug(slug);
    })
    .filter((post): post is MDXPost => post !== null)
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });

  return posts;
}

/**
 * Get post by slug
 */
export function getPostBySlug(slug: string): MDXPost | null {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as MDXFrontmatter;
    const stats = readingTime(content);

    return {
      frontmatter: {
        ...frontmatter,
        slug: frontmatter.slug || slug,
      },
      content,
      slug: frontmatter.slug || slug,
      readTime: frontmatter.readTime || Math.ceil(stats.minutes),
      excerpt: frontmatter.description || content.slice(0, 160),
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): MDXPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.frontmatter.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap((post) => post.frontmatter.tags);
  return Array.from(new Set(tags)).sort();
}

/**
 * Get previous and next posts
 */
export function getSurroundingPosts(slug: string): {
  prev: MDXPost | null;
  next: MDXPost | null;
} {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);

  return {
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  };
}

/**
 * Extract table of contents from markdown content
 */
export function extractTableOfContents(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ id, title, level });
  }

  return headings;
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

