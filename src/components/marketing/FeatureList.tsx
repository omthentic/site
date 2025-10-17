import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Grid } from '@/components/ui/Grid';
import { Check } from 'lucide-react';

export interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'checkmarks';
  className?: string;
}

/**
 * Feature list component for displaying product features
 * Supports custom icons or checkmarks
 */
export function FeatureList({ 
  features, 
  columns = 3,
  variant = 'default',
  className 
}: FeatureListProps) {
  return (
    <Grid cols={columns} gap="lg" className={className}>
      {features.map((feature, index) => (
        <div 
          key={index}
          className={cn(
            'flex gap-4',
            variant === 'checkmarks' ? 'items-start' : 'items-start flex-col'
          )}
        >
          {/* Icon */}
          <div 
            className={cn(
              'flex-shrink-0',
              variant === 'checkmarks'
                ? 'w-6 h-6 flex items-center justify-center rounded-full bg-[var(--success-bg)] text-[var(--success)]'
                : 'w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--brand)] text-[var(--brand-foreground)]'
            )}
            aria-hidden="true"
          >
            {variant === 'checkmarks' ? (
              <Check size={16} strokeWidth={3} />
            ) : (
              feature.icon || <Check size={24} />
            )}
          </div>

          {/* Content */}
          <div className={cn(variant === 'checkmarks' && 'flex-1')}>
            <h3 className="font-semibold text-base mb-2 text-[var(--text)]">
              {feature.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </Grid>
  );
}

