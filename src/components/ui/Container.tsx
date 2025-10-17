import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

const sizeClasses = {
  sm: 'max-w-container-sm',
  md: 'max-w-container-md',
  lg: 'max-w-container-lg',
  xl: 'max-w-container-xl',
  '2xl': 'max-w-container-2xl',
};

/**
 * Container component for consistent width constraints
 * Mobile-first with responsive padding
 */
export function Container({ 
  children, 
  size = 'xl', 
  className,
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component 
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8 w-full',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}

