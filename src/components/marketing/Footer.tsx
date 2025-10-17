import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export interface FooterLinkSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

interface FooterProps {
  logo?: React.ReactNode;
  logoText?: string;
  description?: string;
  sections: FooterLinkSection[];
  socialLinks?: Array<{
    label: string;
    href: string;
    icon: React.ReactNode;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    label: string;
    href: string;
  }>;
}

/**
 * Comprehensive footer component for marketing pages
 * Features:
 * - Multi-column link sections
 * - Social media links
 * - Copyright and legal links
 * - Fully keyboard accessible
 */
export function Footer({
  logo,
  logoText = 'Omthentic',
  description = 'Building the future of communication training.',
  sections,
  socialLinks = [],
  copyright,
  legalLinks = [],
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright || `© ${currentYear} ${logoText}. All rights reserved.`;

  return (
    <footer 
      className="bg-[var(--bg-subtle)] border-t border-[var(--border)]"
      role="contentinfo"
    >
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                {logo || (
                  <span className="font-bold text-2xl text-[var(--brand)]">
                    {logoText}
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                {description}
              </p>
              
              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.href}
                      href={social.href}
                      className={cn(
                        'w-10 h-10 flex items-center justify-center rounded-md',
                        'text-[var(--text-secondary)] hover:text-[var(--brand)]',
                        'hover:bg-[var(--hover)]',
                        'transition-colors focus-ring'
                      )}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Link Sections */}
            {sections.map((section) => (
              <div key={section.title} className="lg:col-span-2">
                <h3 className="font-semibold text-sm mb-4 text-[var(--text)]">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'text-sm',
                          'text-[var(--text-secondary)] hover:text-[var(--brand)]',
                          'transition-colors focus-ring rounded-sm'
                        )}
                        {...(link.external && { 
                          target: '_blank', 
                          rel: 'noopener noreferrer' 
                        })}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className={cn(
            'mt-12 pt-8 border-t border-[var(--border)]',
            'flex flex-col sm:flex-row justify-between items-center gap-4'
          )}>
            <p className="text-sm text-[var(--text-muted)]">
              {copyrightText}
            </p>
            
            {legalLinks.length > 0 && (
              <nav className="flex items-center gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm',
                      'text-[var(--text-muted)] hover:text-[var(--text-secondary)]',
                      'transition-colors focus-ring rounded-sm'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </Container>
      </Section>
    </footer>
  );
}

