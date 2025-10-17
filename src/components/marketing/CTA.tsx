import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface CTAProps {
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'gradient' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
  children?: ReactNode;
  className?: string;
}

const variantClasses = {
  default: 'bg-[var(--bg-subtle)]',
  gradient: 'bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] text-white',
  bordered: 'bg-[var(--bg)] border-2 border-[var(--brand)]',
};

const sizeClasses = {
  sm: 'py-12',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24 lg:py-32',
};

/**
 * Call-to-action block component
 * Features:
 * - Multiple variants (default, gradient, bordered)
 * - Flexible layout (centered or left-aligned)
 * - Primary and secondary actions
 * - Responsive sizing
 */
export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  size = 'md',
  centered = true,
  children,
  className,
}: CTAProps) {
  return (
    <section
      className={cn(
        'rounded-xl',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <Container>
        <div className={cn(
          'max-w-3xl',
          centered && 'mx-auto text-center'
        )}>
          <h2 
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold mb-6',
              variant === 'gradient' ? 'text-white' : 'text-[var(--text)]'
            )}
          >
            {title}
          </h2>

          {description && (
            <p 
              className={cn(
                'text-lg sm:text-xl mb-8',
                variant === 'gradient' ? 'text-white/90' : 'text-[var(--text-secondary)]'
              )}
            >
              {description}
            </p>
          )}

          {children && (
            <div className="mb-8">
              {children}
            </div>
          )}

          {(primaryAction || secondaryAction) && (
            <div className={cn(
              'flex flex-col sm:flex-row gap-4',
              centered && 'justify-center'
            )}>
              {primaryAction && (
                <Button
                  variant={variant === 'gradient' ? 'secondary' : 'primary'}
                  size="lg"
                  asChild
                >
                  <a href={primaryAction.href}>
                    {primaryAction.label}
                  </a>
                </Button>
              )}
              
              {secondaryAction && (
                <Button
                  variant={variant === 'gradient' ? 'ghost' : 'outline'}
                  size="lg"
                  asChild
                  className={variant === 'gradient' ? 'text-white hover:bg-white/10' : ''}
                >
                  <a href={secondaryAction.href}>
                    {secondaryAction.label}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

