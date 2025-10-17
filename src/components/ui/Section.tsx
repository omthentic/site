import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'subtle' | 'elevated';
  as?: 'section' | 'div' | 'article';
}

const spacingClasses = {
  none: '',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-20 lg:py-24',
  xl: 'py-20 sm:py-24 lg:py-32',
};

const backgroundClasses = {
  default: '',
  subtle: 'bg-[var(--bg-subtle)]',
  elevated: 'bg-[var(--bg-elev)]',
};

/**
 * Section component for consistent vertical spacing
 * Provides semantic HTML and background options
 */
export function Section({ 
  children, 
  className,
  spacing = 'lg',
  background = 'default',
  as: Component = 'section' 
}: SectionProps) {
  return (
    <Component 
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </Component>
  );
}

