export function BrandMark({
  className = "brand-mark",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" />
    </svg>
  );
}
