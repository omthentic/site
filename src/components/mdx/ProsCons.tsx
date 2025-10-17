import { ReactNode } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface ProsConsProps {
  pros?: string[];
  cons?: string[];
  children?: ReactNode;
}

/**
 * Pros and Cons component for balanced comparisons
 * Usage in MDX:
 * <ProsCons
 *   pros={['Easy to use', 'Great performance', 'Well documented']}
 *   cons={['Expensive', 'Limited integrations']}
 * />
 */
export function ProsCons({ pros = [], cons = [], children }: ProsConsProps) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-6">
      {/* Pros */}
      {pros.length > 0 && (
        <div className="bg-success-bg border border-[var(--success)] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <ThumbsUp size={20} className="text-success" aria-hidden="true" />
            <h4 className="font-bold text-lg text-[var(--text)]">Pros</h4>
          </div>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-success-foreground">
                <span className="text-success font-bold mt-0.5">+</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cons */}
      {cons.length > 0 && (
        <div className="bg-error-bg border border-[var(--error)] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <ThumbsDown size={20} className="text-error" aria-hidden="true" />
            <h4 className="font-bold text-lg text-[var(--text)]">Cons</h4>
          </div>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-error-foreground">
                <span className="text-error font-bold mt-0.5">−</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
    </div>
  );
}

