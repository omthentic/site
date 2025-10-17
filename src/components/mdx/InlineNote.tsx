import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InlineNoteProps {
  children: ReactNode;
  className?: string;
}

/**
 * Inline note component for subtle highlights within text
 * Usage in MDX:
 * This is regular text <InlineNote>with an inline note</InlineNote> continuing.
 */
export function InlineNote({ children, className }: InlineNoteProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5',
        'bg-[var(--bg-subtle)] border border-[var(--border)] rounded',
        'text-sm font-medium text-[var(--text)]',
        className
      )}
    >
      {children}
    </span>
  );
}

