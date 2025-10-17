import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Step component for numbered procedures and tutorials
 * Usage in MDX:
 * <Step number={1} title="Install dependencies">
 *   Run `npm install` to get started.
 * </Step>
 */
export function Step({ number, title, children, className }: StepProps) {
  return (
    <div className={cn('my-8 relative pl-16', className)}>
      {/* Step Number */}
      <div className="absolute left-0 top-0">
        <div className="w-12 h-12 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-bold text-xl shadow-e2">
          {number}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold mb-3 text-[var(--text)]">
          {title}
        </h3>
        <div className="prose prose-sm max-w-none text-[var(--text-secondary)]">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Steps container for multiple steps
 */
interface StepsProps {
  children: ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="my-8 space-y-8">
      {children}
    </div>
  );
}

