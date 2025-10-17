import { cn } from '@/lib/utils';

export interface Logo {
  name: string;
  src: string;
  href?: string;
}

interface LogoRowProps {
  logos: Logo[];
  title?: string;
  className?: string;
  grayscale?: boolean;
}

/**
 * Logo row component for displaying partner/client logos
 * Supports optional links and grayscale effect
 */
export function LogoRow({ 
  logos, 
  title = 'Trusted by leading organizations',
  className,
  grayscale = true,
}: LogoRowProps) {
  return (
    <div className={cn('py-12', className)}>
      {title && (
        <h3 className="text-center text-sm font-semibold text-[var(--text-muted)] mb-8 uppercase tracking-wide">
          {title}
        </h3>
      )}
      
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
        {logos.map((logo) => {
          const LogoImage = (
            <img
              src={logo.src}
              alt={logo.name}
              className={cn(
                'h-8 sm:h-10 w-auto object-contain',
                'transition-all duration-base',
                grayscale && 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
              )}
            />
          );

          if (logo.href) {
            return (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-sm"
                aria-label={logo.name}
              >
                {LogoImage}
              </a>
            );
          }

          return (
            <div key={logo.name}>
              {LogoImage}
            </div>
          );
        })}
      </div>
    </div>
  );
}

