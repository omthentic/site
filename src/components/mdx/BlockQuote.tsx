import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface BlockQuoteProps {
  children: ReactNode;
  author?: string;
  role?: string;
  className?: string;
}

/**
 * Enhanced blockquote component for quotes and testimonials
 * Usage in MDX:
 * <BlockQuote author="Dr. Sarah Chen" role="Medical Resident">
 *   This platform transformed how I prepare for interviews.
 * </BlockQuote>
 */
export function BlockQuote({ children, author, role, className }: BlockQuoteProps) {
  return (
    <blockquote
      className={cn(
        'my-8 relative',
        'bg-[var(--bg-subtle)] border-l-4 border-[var(--brand)]',
        'rounded-lg p-6 pl-14',
        className
      )}
    >
      {/* Quote Icon */}
      <Quote 
        size={32} 
        className="absolute left-4 top-6 text-brand/20" 
        aria-hidden="true"
      />

      {/* Quote Content */}
      <div className="prose prose-lg max-w-none text-[var(--text)] italic [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>

      {/* Attribution */}
      {(author || role) && (
        <footer className="mt-4 pt-4 border-t border-[var(--border)]">
          {author && (
            <cite className="not-italic font-semibold text-[var(--text)]">
              {author}
            </cite>
          )}
          {role && (
            <div className="text-sm text-[var(--text-secondary)]">
              {role}
            </div>
          )}
        </footer>
      )}
    </blockquote>
  );
}

