'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check } from 'lucide-react';

export interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

/**
 * Pricing table with monthly/yearly toggle
 * Features:
 * - Keyboard accessible toggle (Space/Enter)
 * - Highlighted tier support
 * - Responsive grid layout
 */
export function PricingTable({ tiers, className }: PricingTableProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  };

  // Calculate savings percentage
  const savings = tiers.length > 0 
    ? Math.round(((tiers[0].monthlyPrice * 12 - tiers[0].yearlyPrice) / (tiers[0].monthlyPrice * 12)) * 100)
    : 0;

  return (
    <div className={className}>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={cn(
          'text-sm font-medium transition-colors',
          !isYearly ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'
        )}>
          Monthly
        </span>
        
        <button
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          role="switch"
          aria-checked={isYearly}
          aria-label="Toggle between monthly and yearly pricing"
          className={cn(
            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-ring',
            isYearly ? 'bg-brand' : 'bg-[var(--border)]'
          )}
        >
          <span
            className={cn(
              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
              isYearly ? 'translate-x-6' : 'translate-x-1'
            )}
          />
        </button>

        <span className={cn(
          'text-sm font-medium transition-colors',
          isYearly ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'
        )}>
          Yearly
          {savings > 0 && (
            <Badge variant="success" size="sm" className="ml-2">
              Save {savings}%
            </Badge>
          )}
        </span>
      </div>

      {/* Pricing Cards */}
      <div className={cn(
        'grid gap-8',
        tiers.length === 2 && 'md:grid-cols-2 max-w-4xl mx-auto',
        tiers.length === 3 && 'md:grid-cols-2 lg:grid-cols-3',
        tiers.length >= 4 && 'md:grid-cols-2 lg:grid-cols-4'
      )}>
        {tiers.map((tier) => {
          const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
          const pricePerMonth = isYearly ? tier.yearlyPrice / 12 : tier.monthlyPrice;

          return (
            <Card
              key={tier.name}
              variant={tier.highlighted ? 'bordered' : 'default'}
              className={cn(
                'relative flex flex-col',
                tier.highlighted && 'border-[var(--brand)] border-2 shadow-e3'
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge variant="brand" rounded="full">
                    {tier.badge}
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[var(--text-muted)]">
                      {tier.currency || '$'}
                    </span>
                    <span className="text-4xl font-bold text-[var(--text)]">
                      {Math.round(pricePerMonth)}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      /month
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      {tier.currency || '$'}{price} billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        className="flex-shrink-0 text-[var(--success)] mt-0.5" 
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--text-secondary)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  fullWidth
                  asChild
                >
                  <a href={tier.ctaHref}>
                    {tier.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

