import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Callout, InlineNote, ProsCons, Step, Steps, BlockQuote } from '@/components/mdx';
import { getAllPosts, getPostBySlug, getSurroundingPosts, formatDate, extractTableOfContents } from '@/lib/mdx/utils';
import { generatePostMetadata, generatePostJSONLD } from '@/lib/seo/utils';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import type { PluggableList } from 'unified';

const mdxComponents = {
  Callout,
  InlineNote,
  ProsCons,
  Step,
  Steps,
  BlockQuote,
};

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm] as PluggableList,
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]] as PluggableList,
  },
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePostMetadata(post);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const { prev, next } = getSurroundingPosts(slug);
  const toc = extractTableOfContents(post.content);
  const jsonLd = generatePostJSONLD(post);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Hero */}
        <Section spacing="xl" background="subtle">
          <Container size="md">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-brand transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Resources
            </Link>

            <div className="space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="brand" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text)]">
                {post.frontmatter.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                <time dateTime={post.frontmatter.date}>
                  {formatDate(post.frontmatter.date)}
                </time>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readTime} min read
                </div>
                {post.frontmatter.author && (
                  <>
                    <span>•</span>
                    <span>By {post.frontmatter.author}</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                {post.frontmatter.description}
              </p>
            </div>
          </Container>
        </Section>

        {/* Content */}
        <Section spacing="lg">
          <Container size="md">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <aside className="lg:col-span-3">
                  <div className="lg:sticky lg:top-24">
                    <h2 className="text-sm font-semibold mb-4 text-[var(--text-muted)] uppercase tracking-wide">
                      On This Page
                    </h2>
                    <nav>
                      <ul className="space-y-2">
                        {toc.map((item) => (
                          <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                            <a
                              href={`#${item.id}`}
                              className="text-sm text-[var(--text-secondary)] hover:text-brand transition-colors"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </aside>
              )}

              {/* Main Content */}
              <div className={toc.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}>
                <div className="prose prose-lg max-w-none">
                  <MDXRemote 
                    source={post.content} 
                    components={mdxComponents}
                    options={mdxOptions}
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Navigation */}
        <Section spacing="lg" background="subtle">
          <Container size="md">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Previous Post */}
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group block p-6 rounded-lg border border-[var(--border)] hover:border-brand transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
                    <ArrowLeft size={16} />
                    Previous
                  </div>
                  <div className="font-semibold text-[var(--text)] group-hover:text-brand transition-colors">
                    {prev.frontmatter.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Next Post */}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group block p-6 rounded-lg border border-[var(--border)] hover:border-brand transition-colors text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-[var(--text-muted)] mb-2">
                    Next
                    <ArrowRight size={16} />
                  </div>
                  <div className="font-semibold text-[var(--text)] group-hover:text-brand transition-colors">
                    {next.frontmatter.title}
                  </div>
                </Link>
              )}
            </div>
          </Container>
        </Section>
      </article>
    </>
  );
}

