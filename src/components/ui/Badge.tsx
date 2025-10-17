import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'brand' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'full';
  className?: string;
}

const variantClasses = {
  default: 'bg-[var(--bg-subtle)] text-[var(--text)] border border-[var(--border)]',
  success: 'bg-success-bg text-success-foreground border border-[var(--success)]',
  warning: 'bg-warning-bg text-warning-foreground border border-[var(--warning)]',
  error: 'bg-error-bg text-error-foreground border border-[var(--error)]',
  info: 'bg-info-bg text-info-foreground border border-[var(--info)]',
  brand: 'bg-brand text-brand-foreground',
  accent: 'bg-accent text-accent-foreground',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

const roundedClasses = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  full: 'rounded-full',
};

/**
 * Badge component for labels, tags, and status indicators
 * Uses semantic colors with accessible contrast
 */
export function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  rounded = 'sm',
  className 
}: BadgeProps) {
  return (
    <span 
      className={cn(
        'inline-flex items-center justify-center font-semibold whitespace-nowrap',
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        className
      )}
    >
      {children}
    </span>
  );
}

