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
    default: 'Medical School Interview Practice (MMI) | Omthentic',
    template: '%s | Omthentic',
  },
  description: 'Practise medical school interviews with 400+ MMI scenarios. Season Pass $97 for Oct–Jan. Built on 15+ years coaching 1,000+ students.',
  keywords: ['MMI', 'medical school interview', 'medical interview prep', 'interview practice', 'med school Australia', 'med school New Zealand', 'med school UK'],
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
    title: 'Medical School Interview Practice (MMI) | Omthentic',
    description: 'Practise medical school interviews with 400+ MMI scenarios. Season Pass $97 for Oct–Jan.',
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
    title: 'Medical School Interview Practice (MMI) | Omthentic',
    description: 'Practise medical school interviews with 400+ MMI scenarios. Season Pass $97 for Oct–Jan.',
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
    { label: 'Students', href: '/students' },
    { label: 'Parents', href: '/parents' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Resources', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  // Footer sections
  const footerSections: FooterLinkSection[] = [
    {
      title: 'Product',
      links: [
        { label: 'How it Works', href: '/#how-it-works' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'School Packs', href: '/product/school-packs' },
      ],
    },
    {
      title: 'For You',
      links: [
        { label: 'Students', href: '/students' },
        { label: 'Parents', href: '/parents' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Help Centre', href: '/help' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
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
        logo={<img src="/images/Omthentic Horizontal.svg" alt="Omthentic" className="h-10 sm:h-12 w-auto" />}
        links={navLinks}
        ctaLabel="Get the Season Pass"
        ctaHref="https://app.omthentic.ai"
        sticky
      />
      <main className="pb-20 md:pb-0">{children}</main>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="px-4 py-3">
          <a
            href="https://app.omthentic.ai"
            className="block w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-center py-3 px-6 rounded-full transition-colors touch-manipulation"
          >
            Season Pass $97 — Unlock now
          </a>
        </div>
      </div>
      
      <Footer
        logo={<img src="/images/Omthentic Horizontal.svg" alt="Omthentic" className="h-12 w-auto" />}
        sections={footerSections}
        socialLinks={socialLinks}
        legalLinks={legalLinks}
        description="Practise medical school interviews with instant feedback. Season Pass $97 for Oct–Jan."
      />
    </>
  );
}

