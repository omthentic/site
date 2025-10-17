import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface CalloutProps {
  children: ReactNode;
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertCircle,
};

const styles = {
  info: 'bg-info-bg border-[var(--info)] text-info-foreground',
  warning: 'bg-warning-bg border-[var(--warning)] text-warning-foreground',
  success: 'bg-success-bg border-[var(--success)] text-success-foreground',
  error: 'bg-error-bg border-[var(--error)] text-error-foreground',
};

/**
 * Callout component for highlighting important information
 * Usage in MDX:
 * <Callout type="info" title="Pro Tip">
 *   Your content here
 * </Callout>
 */
export function Callout({ children, type = 'info', title }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        'my-6 rounded-lg border-l-4 p-6',
        styles[type]
      )}
      role="note"
    >
      <div className="flex items-start gap-3">
        <Icon size={24} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          {title && (
            <div className="font-semibold mb-2 text-lg">
              {title}
            </div>
          )}
          <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

