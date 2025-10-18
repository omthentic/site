'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { NavMenu, NavLink } from './NavMenu';

interface HeaderProps {
  logo?: React.ReactNode;
  logoText?: string;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  sticky?: boolean;
}

/**
 * Sticky header component with scroll detection
 * Features:
 * - CLS optimized (height: 64px reserved)
 * - Scroll-based styling changes
 * - Accessible navigation
 * - Mobile responsive
 */
export function Header({ 
  logo, 
  logoText = 'Omthentic',
  links, 
  ctaLabel = 'Get Started',
  ctaHref = '/app/sign-up',
  sticky = true 
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        // Fixed height to prevent CLS
        'h-16',
        sticky && 'sticky top-0 z-30',
        'transition-colors duration-base',
        scrolled
          ? 'bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--border)] shadow-e1'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'flex items-center gap-2',
              'font-bold text-xl',
              'text-[var(--text)] hover:text-[var(--brand)]',
              'transition-colors focus-ring'
            )}
          >
            {logo || (
              <span className="text-[var(--brand)]">
                {logoText}
              </span>
            )}
          </Link>

          {/* Navigation */}
          <NavMenu 
            links={links} 
            ctaLabel={ctaLabel} 
            ctaHref={ctaHref} 
          />
        </div>
      </Container>
    </header>
  );
}

