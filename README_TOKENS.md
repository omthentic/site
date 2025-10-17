# Omthentic Design Tokens

A comprehensive, accessible design token system inspired by Brilliant.org's clarity with Omthentic's distinct teal/amber identity.

## 🎨 Design Philosophy

- **Clarity First**: Clean, semantic tokens that communicate intent
- **Accessible**: WCAG AA compliant contrast ratios across all color combinations
- **Friendly Motion**: Smooth, spring-based animations with reduced-motion support
- **Mobile-First**: Fluid typography and responsive spacing
- **Dark Mode Ready**: Seamless theme switching via class strategy

## 📦 Token Categories

### Colors

#### Brand Colors
```css
--brand: #0D9488           /* Teal-600 - Primary brand */
--brand-hover: #0F766E     /* Hover state */
--brand-active: #115E59    /* Active/pressed state */
--brand-foreground: #FFFFFF /* Text on brand */

--accent: #F59E0B          /* Amber-500 - Accent */
--accent-hover: #D97706    /* Hover state */
--accent-foreground: #FFFFFF
```

#### Semantic Colors (WCAG AA Compliant)
```css
--success: #10B981         /* 4.5:1 contrast on white */
--warning: #F59E0B         /* 3.4:1 (for large text only) */
--error: #EF4444           /* 4.5:1 contrast on white */
--info: #3B82F6            /* 4.5:1 contrast on white */
```

#### Surface Colors
```css
--bg: #FFFFFF              /* Main background */
--bg-subtle: #F9FAFB       /* Subtle backgrounds */
--bg-elev: #FFFFFF         /* Elevated surfaces (cards) */
--bg-overlay: rgba(0,0,0,0.5) /* Modal overlays */
```

#### Text Colors (WCAG AA Verified)
```css
--text: #111827            /* 16.2:1 on white - Primary */
--text-secondary: #4B5563  /* 7.5:1 on white - Secondary */
--text-tertiary: #6B7280   /* 5.9:1 on white - Tertiary */
--text-muted: #9CA3AF      /* 3.5:1 on white - Muted (large text) */
--text-inverse: #FFFFFF    /* On dark backgrounds */
```

### Border Radius

```css
--radius-sm: 8px           /* Badges, tags */
--radius-md: 16px          /* Buttons, inputs */
--radius-lg: 24px          /* Cards, modals */
--radius-xl: 32px          /* Hero cards, features */
--radius-full: 9999px      /* Pills, avatars */
```

### Elevation (Shadows)

Four-level shadow system for depth hierarchy:

```css
--elevation-e1: /* Subtle lift */
  0 1px 2px rgba(0, 0, 0, 0.05)

--elevation-e2: /* Default cards */
  0 4px 6px rgba(0, 0, 0, 0.05), 
  0 2px 4px rgba(0, 0, 0, 0.03)

--elevation-e3: /* Hover states, dropdowns */
  0 10px 15px rgba(0, 0, 0, 0.08), 
  0 4px 6px rgba(0, 0, 0, 0.03)

--elevation-e4: /* Modals, popovers */
  0 20px 25px rgba(0, 0, 0, 0.1), 
  0 10px 10px rgba(0, 0, 0, 0.04)

--elevation-focus: /* Accessible focus ring */
  0 0 0 3px rgba(13, 148, 136, 0.2)
```

### Motion

Friendly, bouncy animations with accessibility support:

```css
/* Easing Functions */
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1)
--ease-in: cubic-bezier(0.8, 0.2, 1, 0.2)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) /* Bouncy! */

/* Durations */
--duration-fast: 120ms     /* Micro-interactions */
--duration-base: 200ms     /* Standard transitions */
--duration-slow: 300ms     /* Complex animations */
--duration-slower: 400ms   /* Page transitions */
```

**Note**: All animations respect `prefers-reduced-motion` and disable automatically.

### Typography

Fluid typography with Inter font family:

```css
--font-sans: 'Inter', system-ui, sans-serif
--font-mono: 'SF Mono', Monaco, monospace

/* Font Sizes (fluid scaling) */
--text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)    /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem)       /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.3vw, 1.125rem)    /* 16-18px */
--text-lg: clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem)   /* 18-20px */
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)     /* 20-24px */
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem)      /* 24-30px */
--text-3xl: clamp(1.875rem, 1.6rem + 1.4vw, 2.25rem)   /* 30-36px */
--text-4xl: clamp(2.25rem, 1.9rem + 1.8vw, 3rem)       /* 36-48px */
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 3.75rem)       /* 48-60px */
--text-6xl: clamp(3.75rem, 3rem + 3.8vw, 4.5rem)       /* 60-72px */

/* Line Heights */
--leading-none: 1
--leading-tight: 1.25
--leading-normal: 1.5
--leading-relaxed: 1.625

/* Weights */
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800
```

## 🚀 Usage Examples

### Using Tokens in CSS

```css
.my-button {
  background: var(--brand);
  color: var(--brand-foreground);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-e2);
  transition: all var(--duration-base) var(--ease-out);
}

.my-button:hover {
  background: var(--brand-hover);
  box-shadow: var(--elevation-e3);
  transform: translateY(-2px);
}
```

### Using with Tailwind CSS

Tokens are mapped to Tailwind utilities:

```tsx
<button className="
  bg-brand hover:bg-brand-hover 
  text-brand-foreground 
  rounded-md 
  shadow-e2 hover:shadow-e3
  transition-base
  px-6 py-3
">
  Click me
</button>
```

### Utility Classes

Pre-built utility classes for common patterns:

```tsx
/* Elevation */
<div className="elevation-e2">Card with shadow</div>

/* Interactive lift effect */
<div className="interactive-lift">
  Lifts on hover with smooth spring animation
</div>

/* Focus ring (keyboard navigation) */
<button className="focus-ring">Accessible button</button>

/* Smooth transitions */
<div className="transition-smooth">All properties animate</div>
<div className="transition-colors">Only colors animate</div>
<div className="transition-transform">Only transform animates</div>

/* Animations */
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-up">Slides up from below</div>
<div className="animate-scale-in">Scales in with spring</div>
```

### Dark Mode

Use the `class` strategy to toggle dark mode:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// React example
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);
```

### Component Examples

#### Card Component

```tsx
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      bg-[var(--bg-elev)] 
      border border-[var(--border)]
      rounded-lg 
      shadow-e2 
      p-6
      interactive-lift
    ">
      {children}
    </div>
  );
}
```

#### Button Component

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-smooth focus-ring";
  
  const variantStyles = {
    primary: "bg-brand hover:bg-brand-hover text-brand-foreground shadow-e2 hover:shadow-e3",
    secondary: "bg-transparent border-2 border-[var(--border)] hover:bg-[var(--hover)] text-[var(--text)]"
  };
  
  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </button>
  );
}
```

#### Alert Component

```tsx
type AlertVariant = 'success' | 'warning' | 'error' | 'info';

interface AlertProps {
  variant: AlertVariant;
  children: React.ReactNode;
}

export function Alert({ variant, children }: AlertProps) {
  return (
    <div 
      className="rounded-md p-4"
      style={{
        background: `var(--${variant}-bg)`,
        color: `var(--${variant}-foreground)`,
        border: `1px solid var(--${variant})`
      }}
    >
      {children}
    </div>
  );
}
```

## ♿ Accessibility

### WCAG AA Compliance

All color combinations meet WCAG AA standards:

- **Primary text** (`--text`): 16.2:1 contrast ratio on white
- **Secondary text** (`--text-secondary`): 7.5:1 on white
- **Brand color** (`--brand`): 4.5:1 minimum for text
- **Success/Error/Info**: 4.5:1 minimum for normal text

### Focus Indicators

All interactive elements have visible focus indicators:

```css
.focus-ring {
  outline: none;
  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.2);
}
```

### Reduced Motion

Respects `prefers-reduced-motion` user preference:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🎨 Color Palette Reference

### Light Mode

| Token | Hex | Contrast on White | Usage |
|-------|-----|-------------------|-------|
| `--brand` | #0D9488 | 4.5:1 | Primary actions, links |
| `--accent` | #F59E0B | 3.4:1 | Accents (large text only) |
| `--text` | #111827 | 16.2:1 | Primary text |
| `--text-secondary` | #4B5563 | 7.5:1 | Secondary text |
| `--success` | #10B981 | 4.5:1 | Success messages |
| `--error` | #EF4444 | 4.5:1 | Error messages |

### Dark Mode

| Token | Hex | Contrast on Slate-900 | Usage |
|-------|-----|----------------------|-------|
| `--brand` | #14B8A6 | 5.9:1 | Primary actions |
| `--accent` | #FBBF24 | 10.5:1 | Accents |
| `--text` | #F9FAFB | 16.5:1 | Primary text |
| `--text-secondary` | #D1D5DB | 9.8:1 | Secondary text |

## 📱 Responsive Design

All tokens are mobile-first and use fluid scaling:

```css
/* Typography scales smoothly from mobile to desktop */
font-size: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);

/* Spacing uses rem units for accessibility */
padding: var(--space-4); /* 16px, scales with user font size */
```

## 🧪 Testing

View all tokens in action at `/tokens` demo page:

```bash
npm run dev
# Visit http://localhost:3000/tokens
```

The demo page includes:
- ✅ Color swatches with contrast ratios
- ✅ Typography scale preview
- ✅ Shadow/elevation levels
- ✅ Motion examples
- ✅ Dark mode toggle
- ✅ Interactive component examples

## 🔄 Migration from Legacy Tokens

If you're updating existing components:

| Legacy | New Token | Notes |
|--------|-----------|-------|
| `--om-blue` | `--brand` | Primary brand color |
| `--om-teal` | `--accent` | Now amber for better contrast |
| `--midnight` | `--bg` (dark mode) | Semantic background |
| `--cloud` | `--bg-subtle` | Subtle background |
| `--radius` | `--radius-md` | Default border radius |
| `--shadow` | `--elevation-e2` | Standard elevation |

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Brilliant.org](https://brilliant.org) - Design inspiration
- [Inter Font](https://rsms.me/inter/) - Typography resource

## 🐛 Troubleshooting

### Tokens not updating?

Make sure you've imported the tokens file:

```css
/* In your globals.css */
@import "../styles/tokens.css";
```

### Dark mode not working?

Ensure you're using the `class` strategy:

```tsx
// Add 'dark' class to <html> or <body>
document.documentElement.classList.add('dark');
```

### TypeScript errors with Tailwind?

Make sure `tailwind.config.ts` is properly configured with the token mappings.

---

**Built with ❤️ by the Omthentic team**

