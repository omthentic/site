import { getAllPosts } from '@/lib/mdx/utils';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://omthentic.ai';

export async function GET() {
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Omthentic Blog</title>
    <link>${SITE_URL}</link>
    <description>Communication training insights and resources</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      ${post.frontmatter.author ? `<author>${post.frontmatter.author}</author>` : ''}
      ${post.frontmatter.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

