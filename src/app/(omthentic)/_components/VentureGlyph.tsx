type Name = "attune" | "veridian" | "lumen" | "concord";

const className = "glyph";

export function VentureGlyph({ name }: { name: Name }) {
  switch (name) {
    case "attune":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="20" stroke="var(--accent-line)" strokeWidth="1.2" />
          <path d="M14 24c4-7 16-7 20 0M14 24c4 7 16 7 20 0" stroke="var(--accent)" strokeWidth="1.2" />
        </svg>
      );
    case "veridian":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="8" y="8" width="32" height="32" rx="8" stroke="var(--accent-line)" strokeWidth="1.2" />
          <circle cx="24" cy="24" r="6" stroke="var(--accent)" strokeWidth="1.2" />
        </svg>
      );
    case "lumen":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 6v36M6 24h36" stroke="var(--accent-line)" strokeWidth="1.2" />
          <circle cx="24" cy="24" r="9" stroke="var(--accent)" strokeWidth="1.2" />
        </svg>
      );
    case "concord":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 8l14 8v16l-14 8-14-8V16z" stroke="var(--accent-line)" strokeWidth="1.2" />
          <path d="M24 8v32M10 16l28 16M38 16L10 32" stroke="var(--accent)" strokeWidth=".8" opacity=".7" />
        </svg>
      );
  }
}
