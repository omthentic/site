'use client';

import { useState, FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface NewsletterFormProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => Promise<void>;
  className?: string;
}

/**
 * Newsletter signup form (stub)
 * Features:
 * - Email validation
 * - Loading states
 * - Success/error feedback
 * - Fully keyboard accessible
 */
export function NewsletterForm({
  title = 'Stay updated',
  description = 'Get the latest updates and news delivered to your inbox.',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  onSubmit,
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus('idle');
          }}
          placeholder={placeholder}
          disabled={loading}
          className={cn(
            'flex-1 px-4 py-3 rounded-md',
            'bg-[var(--bg)] border border-[var(--border)]',
            'text-[var(--text)] placeholder:text-[var(--text-muted)]',
            'focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors'
          )}
          aria-label="Email address"
          aria-invalid={status === 'error'}
          aria-describedby={status !== 'idle' ? 'newsletter-message' : undefined}
        />
        <Button 
          type="submit" 
          disabled={loading || !email}
          size="md"
        >
          {loading ? 'Subscribing...' : buttonText}
        </Button>
      </form>

      {/* Feedback Message */}
      {status !== 'idle' && (
        <p
          id="newsletter-message"
          className={cn(
            'mt-3 text-sm',
            status === 'success' && 'text-[var(--success)]',
            status === 'error' && 'text-[var(--error)]'
          )}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
}

