'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

/**
 * FAQ Accordion component with full keyboard support
 * Features:
 * - Enter/Space to toggle
 * - Arrow keys to navigate between items
 * - Smooth expand/collapse animations
 * - ARIA compliant
 */
export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(index);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      document.getElementById(`faq-button-${nextIndex}`)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = index === 0 ? items.length - 1 : index - 1;
      document.getElementById(`faq-button-${prevIndex}`)?.focus();
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={cn(
              'border border-[var(--border)] rounded-lg',
              'bg-[var(--bg-elev)]',
              'transition-colors',
              isOpen && 'border-[var(--brand)]'
            )}
          >
            {/* Question Button */}
            <button
              id={`faq-button-${index}`}
              onClick={() => toggle(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              className={cn(
                'w-full flex items-center justify-between gap-4',
                'p-6 text-left',
                'font-semibold text-base text-[var(--text)]',
                'focus-ring rounded-lg',
                'transition-colors'
              )}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={cn(
                  'flex-shrink-0 text-[var(--text-muted)]',
                  'transition-transform duration-base',
                  isOpen && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </button>

            {/* Answer Panel */}
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className={cn(
                'overflow-hidden transition-all duration-slow',
                isOpen ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="px-6 pb-6 text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

