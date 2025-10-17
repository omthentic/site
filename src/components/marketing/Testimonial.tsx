import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/Card';
import { Quote } from 'lucide-react';

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

/**
 * Testimonial component for social proof
 * Includes optional avatar, role, company, and rating
 */
export function Testimonial({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
  className,
}: TestimonialProps) {
  return (
    <Card variant="elevated" className={cn('relative', className)}>
      <CardContent className="pt-6">
        {/* Quote Icon */}
        <div className="absolute top-4 left-4 text-[var(--brand)] opacity-20">
          <Quote size={32} />
        </div>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={cn(
                  'w-5 h-5',
                  i < rating ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}

        {/* Quote */}
        <blockquote className="text-base text-[var(--text)] mb-6 relative z-10">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          {avatar && (
            <img
              src={avatar}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <div className="font-semibold text-sm text-[var(--text)]">
              {author}
            </div>
            {(role || company) && (
              <div className="text-sm text-[var(--text-secondary)]">
                {role}{role && company && ' at '}{company}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

