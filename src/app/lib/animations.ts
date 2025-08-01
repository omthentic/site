// Central Animation Library for Chronicle Design System
// Reusable Framer Motion variants for consistent animations

import { Variants } from 'framer-motion';

// Fade in and move up animation
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Enhanced fade in up with scale
export const fadeInUpScale: Variants = {
  initial: {
    opacity: 0,
    y: 32,
    scale: 0.95,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.98,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Container for staggered child animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Fast stagger for quick reveals
export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

// Hover effect for cards and buttons
export const hoverEffect: Variants = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: 'var(--shadow-card)',
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: 'var(--shadow-hover)',
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Enhanced hover with glow effect
export const hoverGlow: Variants = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: 'var(--shadow-card)',
  },
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: 'var(--shadow-hover), var(--shadow-glow)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.97,
    y: -2,
    transition: {
      duration: 0.1,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -48,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: -24,
    transition: {
      duration: 0.3,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 48,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: 24,
    transition: {
      duration: 0.3,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Icon rotation animation
export const iconRotate: Variants = {
  initial: {
    rotate: 0,
  },
  hover: {
    rotate: 15,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    rotate: -5,
    transition: {
      duration: 0.1,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Icon scale pulse
export const iconPulse: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Floating animation for background elements
export const floatingElement: Variants = {
  initial: {
    y: 0,
    x: 0,
    rotate: 0,
  },
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Complex circular motion for floating elements
export const circularFloat: Variants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, 20, 0, -20, 0],
    y: [0, -20, -40, -20, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Figure-eight motion
export const figureEight: Variants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, 15, 0, -15, 0],
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Smooth slide transition for testimonials
export const slideTransition: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transition: {
      duration: 0.3,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  }),
};

// Tooltip animation
export const tooltipAnimation: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 5,
    transition: {
      duration: 0.15,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Badge entrance animation
export const badgeEntrance: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Quotation mark animation
export const quotationMark: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: -15,
  },
  animate: {
    opacity: 0.2,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.3,
    },
  },
};

// Button with particle effect preparation
export const buttonParticle: Variants = {
  initial: {
    scale: 1,
    boxShadow: 'var(--shadow-card)',
  },
  hover: {
    scale: 1.05,
    boxShadow: 'var(--shadow-hover), var(--shadow-glow)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

// Navigation dot animation
export const navDot: Variants = {
  initial: {
    scale: 1,
    backgroundColor: 'var(--gray-300)',
  },
  active: {
    scale: 1.2,
    backgroundColor: 'var(--primary-500)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: 'var(--gray-400)',
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Text reveal animation
export const textReveal: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Export animation presets for easy access
export const animationPresets = {
  fadeInUp,
  fadeInUpScale,
  staggerContainer,
  staggerContainerFast,
  hoverEffect,
  hoverGlow,
  slideInLeft,
  slideInRight,
  iconRotate,
  iconPulse,
  floatingElement,
  circularFloat,
  figureEight,
  slideTransition,
  tooltipAnimation,
  badgeEntrance,
  quotationMark,
  buttonParticle,
  navDot,
  textReveal,
};

// Utility function to get animation with reduced motion support
export const getAnimation = (animationVariant: Variants, respectReducedMotion = true) => {
  if (respectReducedMotion && typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Return simplified animation for reduced motion
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.01 } },
        exit: { opacity: 0, transition: { duration: 0.01 } },
      };
    }
  }
  return animationVariant;
};