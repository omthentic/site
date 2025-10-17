'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn, trapFocus } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface NavMenuProps {
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

/**
 * Responsive navigation menu with mobile drawer
 * Features:
 * - Desktop: Horizontal nav
 * - Mobile: Drawer with trap-focus
 * - Keyboard accessible (ESC to close, Tab trap)
 * - No layout shift (CLS optimized)
 */
export function NavMenu({ links, ctaLabel, ctaHref, className }: NavMenuProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  // Trap focus in mobile menu
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      cleanupRef.current = trapFocus(drawerRef.current);
      
      // Prevent body scroll when mobile menu open
      document.body.style.overflow = 'hidden';
      
      return () => {
        cleanupRef.current?.();
        document.body.style.overflow = '';
      };
    }
  }, [mobileOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn('hidden lg:flex items-center gap-8', className)}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'text-sm font-medium',
              'text-[var(--text-secondary)] hover:text-[var(--brand)]',
              'transition-colors focus-ring rounded-sm px-1'
            )}
            {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {link.label}
          </Link>
        ))}
        {ctaLabel && ctaHref && (
          <Button asChild size="sm">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={cn(
          'lg:hidden p-2 rounded-md',
          'text-[var(--text)] hover:bg-[var(--hover)]',
          'transition-colors focus-ring'
        )}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[var(--bg-overlay)] z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          
          {/* Drawer */}
          <div
            ref={drawerRef}
            id="mobile-nav"
            className={cn(
              'fixed top-0 right-0 bottom-0 w-full max-w-sm',
              'bg-[var(--bg)] border-l border-[var(--border)]',
              'z-50 lg:hidden',
              'flex flex-col',
              'animate-slide-up'
            )}
            role="dialog"
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <div className="flex justify-end p-4 border-b border-[var(--border)]">
              <button
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'p-2 rounded-md',
                  'text-[var(--text)] hover:bg-[var(--hover)]',
                  'transition-colors focus-ring'
                )}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-3 px-4 rounded-md',
                        'text-base font-medium',
                        'text-[var(--text)] hover:bg-[var(--hover)] hover:text-[var(--brand)]',
                        'transition-colors focus-ring'
                      )}
                      onClick={() => setMobileOpen(false)}
                      {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {ctaLabel && ctaHref && (
                <div className="mt-8">
                  <Button asChild fullWidth>
                    <Link href={ctaHref} onClick={() => setMobileOpen(false)}>
                      {ctaLabel}
                    </Link>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </>
      )}
    </>
  );
}

