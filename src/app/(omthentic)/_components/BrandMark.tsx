export function BrandMark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4.4" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="1.1" fill="var(--accent)" stroke="none" />
    </svg>
  );
}
