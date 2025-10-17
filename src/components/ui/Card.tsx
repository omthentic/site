import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const variantClasses = {
  default: 'bg-[var(--bg-elev)] border border-[var(--border)] shadow-e2',
  elevated: 'bg-[var(--bg-elev)] shadow-e3',
  bordered: 'bg-[var(--bg)] border-2 border-[var(--border)]',
  interactive: 'bg-[var(--bg-elev)] border border-[var(--border)] shadow-e2 interactive-lift cursor-pointer hover:border-[var(--brand)]',
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Card component for content containers
 * Interactive variant includes hover states and animations
 */
export function Card({ 
  children, 
  variant = 'default', 
  padding = 'md',
  className,
  ...props 
}: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-lg',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card subcomponents for consistent structure
 */
export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-xl font-semibold', 'text-[var(--text)]', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-sm', 'text-[var(--text-secondary)]', className)}>
      {children}
    </p>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mt-6 flex items-center gap-3', className)}>
      {children}
    </div>
  );
}

