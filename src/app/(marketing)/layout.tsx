import { Metadata } from 'next';
import { Header } from '@/components/marketing/Header';
import { Footer, FooterLinkSection } from '@/components/marketing/Footer';
import { Twitter, Linkedin, Github } from 'lucide-react';

/**
 * SEO helper for generating Open Graph images
 */
export function getOGImage(title: string, description?: string): string {
  const params = new URLSearchParams();
  params.set('title', title);
  if (description) params.set('description', description);
  return `/api/og?${params.toString()}`;
}

/**
 * Default SEO metadata for marketing pages
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://omthentic.ai'),
  title: {
    default: 'Omthentic | Master Communication Skills',
    template: '%s | Omthentic',
  },
  description: 'Build confidence in high-stakes conversations with AI-powered practice and feedback.',
  keywords: ['communication skills', 'interview prep', 'AI coaching', 'feedback', 'practice'],
  authors: [{ name: 'Omthentic' }],
  creator: 'Omthentic',
  publisher: 'Omthentic',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Omthentic',
    title: 'Omthentic | Master Communication Skills',
    description: 'Build confidence in high-stakes conversations with AI-powered practice and feedback.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omthentic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omthentic | Master Communication Skills',
    description: 'Build confidence in high-stakes conversations with AI-powered practice and feedback.',
    images: ['/og-image.png'],
    creator: '@omthentic',
  },
  alternates: {
    canonical: '/',
  },
};

/**
 * Marketing layout with consistent header/footer
 * Includes SEO defaults and structured navigation
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Navigation links
  const navLinks = [
    { label: 'Product', href: '/product' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
  ];

  // Footer sections
  const footerSections: FooterLinkSection[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'How it Works', href: '/product/how-it-works' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Roadmap', href: '/roadmap' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Medical Interviews', href: '/solutions/medical-interviews' },
        { label: 'Job Interviews', href: '/solutions/job-interviews' },
        { label: 'Leadership', href: '/solutions/leadership' },
        { label: 'Relationships', href: '/solutions/relationships' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Guides', href: '/resources/guides' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Help Center', href: '/help' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Press', href: '/company/press' },
      ],
    },
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/omthentic', icon: <Twitter size={20} /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/omthentic', icon: <Linkedin size={20} /> },
    { label: 'GitHub', href: 'https://github.com/omthentic', icon: <Github size={20} /> },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
  ];

  return (
    <>
      <Header
        links={navLinks}
        ctaLabel="Get Started"
        ctaHref="/app/sign-up"
        sticky
      />
      <main>{children}</main>
      <Footer
        sections={footerSections}
        socialLinks={socialLinks}
        legalLinks={legalLinks}
        description="Build confidence in high-stakes conversations with AI-powered practice and feedback."
      />
    </>
  );
}

