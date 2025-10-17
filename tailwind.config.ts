import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration for Omthentic
 * 
 * Note: Tailwind 4 uses CSS-first configuration via @theme in CSS files.
 * This config extends the CSS tokens with TypeScript type safety and
 * additional plugins/utilities.
 */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Use class strategy for dark mode
  theme: {
    extend: {
      // Font families (defined in tokens.css)
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      
      // Custom colors mapped to CSS variables
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          hover: 'var(--brand-hover)',
          active: 'var(--brand-active)',
          foreground: 'var(--brand-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          foreground: 'var(--accent-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          bg: 'var(--success-bg)',
          foreground: 'var(--success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          bg: 'var(--warning-bg)',
          foreground: 'var(--warning-foreground)',
        },
        error: {
          DEFAULT: 'var(--error)',
          bg: 'var(--error-bg)',
          foreground: 'var(--error-foreground)',
        },
        info: {
          DEFAULT: 'var(--info)',
          bg: 'var(--info-bg)',
          foreground: 'var(--info-foreground)',
        },
      },
      
      // Border radius tokens
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      
      // Box shadow (elevation) tokens
      boxShadow: {
        e1: 'var(--elevation-e1)',
        e2: 'var(--elevation-e2)',
        e3: 'var(--elevation-e3)',
        e4: 'var(--elevation-e4)',
        focus: 'var(--elevation-focus)',
      },
      
      // Animation durations
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
      
      // Transition timing functions
      transitionTimingFunction: {
        'ease-out': 'var(--ease-out)',
        'ease-in': 'var(--ease-in)',
        'ease-in-out': 'var(--ease-in-out)',
        spring: 'var(--ease-spring)',
      },
      
      // Container sizes
      maxWidth: {
        'container-xs': 'var(--container-xs)',
        'container-sm': 'var(--container-sm)',
        'container-md': 'var(--container-md)',
        'container-lg': 'var(--container-lg)',
        'container-xl': 'var(--container-xl)',
        'container-2xl': 'var(--container-2xl)',
      },
      
      // Z-index scale
      zIndex: {
        base: 'var(--z-base)',
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        fixed: 'var(--z-fixed)',
        'modal-backdrop': 'var(--z-modal-backdrop)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        tooltip: 'var(--z-tooltip)',
      },
      
      // Keyframe animations
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      animation: {
        'fade-in': 'fade-in var(--duration-base) var(--ease-out)',
        'slide-up': 'slide-up var(--duration-slow) var(--ease-out)',
        'scale-in': 'scale-in var(--duration-slow) var(--ease-spring)',
      },
    },
  },
  plugins: [],
};

export default config;

