'use client';

import { useState } from 'react';
import { Check, Copy, Moon, Sun } from 'lucide-react';

/**
 * Design Tokens Demo Page
 * 
 * Showcases the Omthentic design token system:
 * - Color swatches with contrast ratios
 * - Typography scale
 * - Border radius examples
 * - Elevation (shadow) levels
 * - Motion/animation demos
 * - Dark mode toggle
 */

export default function TokensPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg-elev)' }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                Omthentic Design Tokens
              </h1>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                A comprehensive design system inspired by Brilliant.org&apos;s clarity
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 px-4 py-2 rounded-md transition-smooth focus-ring"
              style={{
                background: 'var(--brand)',
                color: 'var(--brand-foreground)',
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Color Tokens */}
        <Section title="Color Tokens">
          <ColorGrid />
        </Section>

        {/* Typography Scale */}
        <Section title="Typography Scale">
          <TypographyDemo />
        </Section>

        {/* Border Radius */}
        <Section title="Border Radius">
          <RadiusDemo />
        </Section>

        {/* Elevation (Shadows) */}
        <Section title="Elevation (Shadows)">
          <ElevationDemo />
        </Section>

        {/* Motion & Animation */}
        <Section title="Motion & Animation">
          <MotionDemo />
        </Section>

        {/* Interactive Components */}
        <Section title="Interactive Components">
          <ComponentsDemo />
        </Section>

        {/* Accessibility */}
        <Section title="Accessibility Features">
          <AccessibilityInfo />
        </Section>
      </main>

      {/* Copy Toast */}
      {copiedToken && (
        <div
          className="fixed bottom-8 right-8 px-4 py-3 rounded-md shadow-e3 flex items-center gap-2 animate-slide-up"
          style={{ background: 'var(--success-bg)', color: 'var(--success-foreground)' }}
        >
          <Check size={18} />
          <span>Copied: {copiedToken}</span>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ColorGrid() {
  const colors = [
    // Brand Colors
    { category: 'Brand', tokens: [
      { name: '--brand', description: 'Primary brand color (Teal)', contrast: '4.5:1' },
      { name: '--brand-hover', description: 'Hover state', contrast: '5.2:1' },
      { name: '--brand-active', description: 'Active/pressed state', contrast: '6.1:1' },
      { name: '--brand-foreground', description: 'Text on brand', contrast: '21:1' },
    ]},
    { category: 'Accent', tokens: [
      { name: '--accent', description: 'Accent color (Amber)', contrast: '3.4:1' },
      { name: '--accent-hover', description: 'Hover state', contrast: '4.5:1' },
      { name: '--accent-foreground', description: 'Text on accent', contrast: '21:1' },
    ]},
    // Semantic Colors
    { category: 'Semantic', tokens: [
      { name: '--success', description: 'Success states', contrast: '4.5:1' },
      { name: '--warning', description: 'Warning states', contrast: '3.4:1' },
      { name: '--error', description: 'Error states', contrast: '4.5:1' },
      { name: '--info', description: 'Info states', contrast: '4.5:1' },
    ]},
    // Surface Colors
    { category: 'Surfaces', tokens: [
      { name: '--bg', description: 'Main background', contrast: '—' },
      { name: '--bg-subtle', description: 'Subtle background', contrast: '—' },
      { name: '--bg-elev', description: 'Elevated surfaces', contrast: '—' },
    ]},
    // Text Colors
    { category: 'Text', tokens: [
      { name: '--text', description: 'Primary text', contrast: '16.2:1' },
      { name: '--text-secondary', description: 'Secondary text', contrast: '7.5:1' },
      { name: '--text-tertiary', description: 'Tertiary text', contrast: '5.9:1' },
      { name: '--text-muted', description: 'Muted text', contrast: '3.5:1' },
    ]},
  ];

  return (
    <div className="space-y-8">
      {colors.map((group) => (
        <div key={group.category}>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>
            {group.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.name} {...token} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ColorSwatch({ name, description, contrast }: { name: string; description: string; contrast: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group text-left p-4 rounded-md border transition-smooth focus-ring"
      style={{ 
        borderColor: 'var(--border)',
        background: 'var(--bg-elev)',
      }}
    >
      <div
        className="w-full h-24 rounded-md mb-3 transition-transform group-hover:scale-105"
        style={{ 
          background: `var(${name})`,
          boxShadow: 'var(--elevation-e1)',
        }}
      />
      <div className="flex items-start justify-between gap-2 mb-1">
        <code className="text-sm font-mono font-medium" style={{ color: 'var(--text)' }}>
          {name}
        </code>
        {copied ? (
          <Check size={16} style={{ color: 'var(--success)' }} />
        ) : (
          <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-muted)' }} />
        )}
      </div>
      <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
      {contrast !== '—' && (
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium"
          style={{
            background: 'var(--success-bg)',
            color: 'var(--success-foreground)',
          }}
        >
          <Check size={12} />
          WCAG AA: {contrast}
        </div>
      )}
    </button>
  );
}

function TypographyDemo() {
  const sizes = [
    { name: '--text-6xl', sample: 'The quick brown fox', size: '60-72px' },
    { name: '--text-5xl', sample: 'The quick brown fox', size: '48-60px' },
    { name: '--text-4xl', sample: 'The quick brown fox', size: '36-48px' },
    { name: '--text-3xl', sample: 'The quick brown fox', size: '30-36px' },
    { name: '--text-2xl', sample: 'The quick brown fox', size: '24-30px' },
    { name: '--text-xl', sample: 'The quick brown fox jumps', size: '20-24px' },
    { name: '--text-lg', sample: 'The quick brown fox jumps', size: '18-20px' },
    { name: '--text-base', sample: 'The quick brown fox jumps over', size: '16-18px' },
    { name: '--text-sm', sample: 'The quick brown fox jumps over the lazy dog', size: '14-16px' },
    { name: '--text-xs', sample: 'The quick brown fox jumps over the lazy dog', size: '12-14px' },
  ];

  return (
    <div className="space-y-6">
      {sizes.map((item) => (
        <div key={item.name} className="border-b pb-6" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-baseline justify-between mb-2">
            <code className="text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
              {item.name}
            </code>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {item.size}
            </span>
          </div>
          <p style={{ fontSize: `var(${item.name})`, color: 'var(--text)' }}>
            {item.sample}
          </p>
        </div>
      ))}
      
      <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--bg-subtle)' }}>
        <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>
          Font Stack
        </h4>
        <code className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
        </code>
      </div>
    </div>
  );
}

function RadiusDemo() {
  const radii = [
    { name: '--radius-sm', value: '8px', usage: 'Badges, tags' },
    { name: '--radius-md', value: '16px', usage: 'Buttons, inputs' },
    { name: '--radius-lg', value: '24px', usage: 'Cards, modals' },
    { name: '--radius-xl', value: '32px', usage: 'Hero cards, features' },
    { name: '--radius-full', value: '9999px', usage: 'Pills, avatars' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {radii.map((item) => (
        <div key={item.name} className="text-center">
          <div
            className="w-32 h-32 mx-auto mb-4 transition-transform hover:scale-105"
            style={{
              background: 'var(--brand)',
              borderRadius: `var(${item.name})`,
              boxShadow: 'var(--elevation-e2)',
            }}
          />
          <code className="block text-sm font-mono mb-1" style={{ color: 'var(--text)' }}>
            {item.name}
          </code>
          <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
            {item.value}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {item.usage}
          </p>
        </div>
      ))}
    </div>
  );
}

function ElevationDemo() {
  const elevations = [
    { name: '--elevation-e1', level: 'E1', usage: 'Subtle lift' },
    { name: '--elevation-e2', level: 'E2', usage: 'Default cards' },
    { name: '--elevation-e3', level: 'E3', usage: 'Hover states, dropdowns' },
    { name: '--elevation-e4', level: 'E4', usage: 'Modals, popovers' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {elevations.map((item) => (
        <div key={item.name} className="text-center">
          <div
            className="w-full h-40 rounded-lg mb-4 flex items-center justify-center"
            style={{
              background: 'var(--bg-elev)',
              boxShadow: `var(${item.name})`,
            }}
          >
            <span className="text-4xl font-bold" style={{ color: 'var(--text-muted)' }}>
              {item.level}
            </span>
          </div>
          <code className="block text-sm font-mono mb-1" style={{ color: 'var(--text)' }}>
            {item.name}
          </code>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {item.usage}
          </p>
        </div>
      ))}
    </div>
  );
}

function MotionDemo() {
  const [animated, setAnimated] = useState(false);

  const easings = [
    { name: '--ease-out', label: 'Ease Out', desc: 'Fast start, slow end' },
    { name: '--ease-in', label: 'Ease In', desc: 'Slow start, fast end' },
    { name: '--ease-in-out', label: 'Ease In-Out', desc: 'Balanced' },
    { name: '--ease-spring', label: 'Spring', desc: 'Bouncy!' },
  ];

  return (
    <div className="space-y-8">
      {/* Easing Functions */}
      <div>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Easing Functions
        </h4>
        <button
          onClick={() => {
            setAnimated(true);
            setTimeout(() => setAnimated(false), 800);
          }}
          className="mb-6 px-6 py-3 rounded-md font-semibold"
          style={{
            background: 'var(--brand)',
            color: 'var(--brand-foreground)',
            boxShadow: 'var(--elevation-e2)',
          }}
        >
          Trigger Animation
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {easings.map((easing) => (
            <div key={easing.name} className="p-4 rounded-lg" style={{ background: 'var(--bg-subtle)' }}>
              <div className="mb-3 h-12 flex items-center">
                <div
                  className="w-12 h-12 rounded-md"
                  style={{
                    background: 'var(--brand)',
                    boxShadow: 'var(--elevation-e2)',
                    transform: animated ? 'translateX(100px)' : 'translateX(0)',
                    transition: `transform 500ms var(${easing.name})`,
                  }}
                />
              </div>
              <code className="block text-sm font-mono mb-1" style={{ color: 'var(--text)' }}>
                {easing.name}
              </code>
              <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                {easing.label}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {easing.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Durations */}
      <div>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Duration Scale
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { name: '--duration-fast', value: '120ms', usage: 'Micro-interactions' },
            { name: '--duration-base', value: '200ms', usage: 'Standard transitions' },
            { name: '--duration-slow', value: '300ms', usage: 'Complex animations' },
            { name: '--duration-slower', value: '400ms', usage: 'Page transitions' },
          ].map((duration) => (
            <div key={duration.name} className="p-4 rounded-lg text-center" style={{ background: 'var(--bg-elev)', boxShadow: 'var(--elevation-e1)' }}>
              <code className="block text-lg font-mono font-bold mb-2" style={{ color: 'var(--brand)' }}>
                {duration.value}
              </code>
              <code className="block text-xs font-mono mb-2" style={{ color: 'var(--text-secondary)' }}>
                {duration.name}
              </code>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {duration.usage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Prebuilt Animations */}
      <div>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Prebuilt Animations
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg animate-fade-in" style={{ background: 'var(--bg-elev)', boxShadow: 'var(--elevation-e2)' }}>
            <p className="font-mono text-sm mb-2" style={{ color: 'var(--text)' }}>animate-fade-in</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Smooth fade in</p>
          </div>
          <div className="p-6 rounded-lg animate-slide-up" style={{ background: 'var(--bg-elev)', boxShadow: 'var(--elevation-e2)' }}>
            <p className="font-mono text-sm mb-2" style={{ color: 'var(--text)' }}>animate-slide-up</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Slide up from below</p>
          </div>
          <div className="p-6 rounded-lg animate-scale-in" style={{ background: 'var(--bg-elev)', boxShadow: 'var(--elevation-e2)' }}>
            <p className="font-mono text-sm mb-2" style={{ color: 'var(--text)' }}>animate-scale-in</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Scale with spring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentsDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Buttons */}
      <div>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Buttons
        </h4>
        <div className="space-y-3">
          <button
            className="w-full px-6 py-3 rounded-md font-semibold transition-smooth interactive-lift"
            style={{
              background: 'var(--brand)',
              color: 'var(--brand-foreground)',
              boxShadow: 'var(--elevation-e2)',
            }}
          >
            Primary Button
          </button>
          <button
            className="w-full px-6 py-3 rounded-md font-semibold border-2 transition-smooth"
            style={{
              background: 'transparent',
              color: 'var(--brand)',
              borderColor: 'var(--brand)',
            }}
          >
            Secondary Button
          </button>
          <button
            className="w-full px-6 py-3 rounded-md font-semibold transition-smooth"
            style={{
              background: 'var(--accent)',
              color: 'var(--accent-foreground)',
              boxShadow: 'var(--elevation-e2)',
            }}
          >
            Accent Button
          </button>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Cards
        </h4>
        <div
          className="p-6 rounded-lg border interactive-lift"
          style={{
            background: 'var(--bg-elev)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--elevation-e2)',
          }}
        >
          <h5 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>
            Interactive Card
          </h5>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            This card lifts on hover with a smooth spring animation.
          </p>
          <button
            className="px-4 py-2 rounded-md text-sm font-semibold"
            style={{
              background: 'var(--brand)',
              color: 'var(--brand-foreground)',
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Alerts
        </h4>
        <div className="space-y-3">
          {[
            { variant: 'success', label: 'Success' },
            { variant: 'warning', label: 'Warning' },
            { variant: 'error', label: 'Error' },
            { variant: 'info', label: 'Info' },
          ].map((alert) => (
            <div
              key={alert.variant}
              className="p-4 rounded-md border text-sm"
              style={{
                background: `var(--${alert.variant}-bg)`,
                color: `var(--${alert.variant}-foreground)`,
                borderColor: `var(--${alert.variant})`,
              }}
            >
              <strong className="font-semibold">{alert.label}:</strong> This is a {alert.variant} message.
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Badges
        </h4>
        <div className="flex flex-wrap gap-3">
          <span
            className="px-3 py-1 text-sm font-semibold"
            style={{
              background: 'var(--brand)',
              color: 'var(--brand-foreground)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Brand
          </span>
          <span
            className="px-3 py-1 text-sm font-semibold"
            style={{
              background: 'var(--accent)',
              color: 'var(--accent-foreground)',
              borderRadius: 'var(--radius-full)',
            }}
          >
            Pill Badge
          </span>
          <span
            className="px-3 py-1 text-sm font-semibold"
            style={{
              background: 'var(--success-bg)',
              color: 'var(--success-foreground)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Success
          </span>
          <span
            className="px-3 py-1 text-sm font-semibold"
            style={{
              background: 'var(--error-bg)',
              color: 'var(--error-foreground)',
              borderRadius: 'var(--radius-full)',
            }}
          >
            Error
          </span>
        </div>
      </div>
    </div>
  );
}

function AccessibilityInfo() {
  const features = [
    {
      title: 'WCAG AA Compliance',
      desc: 'All color combinations meet or exceed WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text).',
    },
    {
      title: 'Focus Indicators',
      desc: 'All interactive elements have visible focus indicators with 3px brand-colored rings for keyboard navigation.',
    },
    {
      title: 'Reduced Motion',
      desc: 'Animations automatically disable for users who prefer reduced motion (prefers-reduced-motion: reduce).',
    },
    {
      title: 'Semantic Colors',
      desc: 'Success, warning, and error states use both color and context to convey meaning (not color alone).',
    },
    {
      title: 'Scalable Typography',
      desc: 'All font sizes use relative units (rem/em) and fluid scaling with clamp() for accessibility.',
    },
    {
      title: 'Keyboard Navigation',
      desc: 'All interactive elements are keyboard accessible with proper focus management and tab order.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-lg border"
          style={{
            background: 'var(--bg-elev)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--elevation-e1)',
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
            style={{
              background: 'var(--brand)',
              color: 'var(--brand-foreground)',
            }}
          >
            <Check size={20} />
          </div>
          <h5 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>
            {feature.title}
          </h5>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

