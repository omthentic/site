import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  asChild?: boolean;
}

interface ButtonAsChildProps {
  className?: string;
  children: ReactNode;
}

const variantClasses = {
  primary: 'bg-brand hover:bg-brand-hover active:bg-brand-active text-brand-foreground shadow-e2 hover:shadow-e3',
  secondary: 'bg-[var(--bg-subtle)] hover:bg-[var(--hover)] text-[var(--text)] border border-[var(--border)]',
  outline: 'border-2 border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--brand-foreground)]',
  ghost: 'text-[var(--text)] hover:bg-[var(--hover)] hover:text-[var(--brand)]',
  accent: 'bg-accent hover:bg-accent-hover text-accent-foreground shadow-e2',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Accessible button component with multiple variants
 * Includes keyboard navigation and focus-visible styling
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    fullWidth = false,
    className,
    disabled,
    asChild = false,
    ...props 
  }, ref) => {
    const buttonClasses = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2',
      'font-semibold rounded-md',
      'transition-smooth focus-visible:outline-none',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      // Variant and size
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && 'w-full',
      className
    );

    if (asChild && children) {
      // Clone the child element and pass through props
      const child = children as React.ReactElement<ButtonAsChildProps>;
      return (
        <>
          {React.cloneElement(child, {
            className: cn(buttonClasses, child.props.className),
          })}
        </>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

