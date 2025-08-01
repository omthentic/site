// Chronicle Design System - Content Management
// Authentically Articulate Landing Page Copy

export const copy = {
  // New Narrative Elements
  purpose: "We create solutions that solve meaningful communication problems and empower growth for people who care.",
  
  vision: {
    metric: "Enable 1 million meaningful interviews by 2030",
    shortForm: "1 million meaningful conversations by 2030"
  },

  coreValues: [
    {
      name: "Excellence",
      description: "Delivering the highest quality in everything we do",
      icon: "star"
    },
    {
      name: "Service", 
      description: "Putting our users' success at the center of our mission",
      icon: "heart"
    },
    {
      name: "Innovation",
      description: "Continuously pushing the boundaries of what's possible",
      icon: "lightbulb"
    }
  ],

  situationalValues: [
    { name: "Simplicity", tooltip: "Making complex communication challenges accessible" },
    { name: "Cooperation", tooltip: "Working together to achieve meaningful outcomes" },
    { name: "Enthusiasm", tooltip: "Bringing energy and passion to every interaction" },
    { name: "Commitment", tooltip: "Dedicated to your communication growth journey" }
  ],

  // Credibility Statistics
  stats: {
    candidatesCoached: "10,000+",
    confidenceImprovement: "85%",
    conversationsTarget: "1M by 2030"
  },

  // Hero Section
  hero: {
    badge: "Future of authentic communication",
    headline: "Speak with confidence in every medical-school interview.",
    subheading: "Purpose-built to solve meaningful communication challenges and unlock your next opportunity.",
    primaryCTA: "Start Practicing Free",
    secondaryCTA: "Watch 60-sec demo"
  },

  // Why We Exist Section
  whyExist: {
    heading: "Why We Exist",
    description: "Opportunities aren't lost for lack of knowledge; they're lost in how we communicate it. We turn nerves into clarity so motivated candidates can realise their potential."
  },

  // Feature Grid
  features: {
    heading: "Three powerful tools, one confident you",
    subheading: "Our AI-powered platform combines real-time analysis, personalized coaching, and expert guidance to transform how you communicate.",
    items: [
      {
        title: "Real-time AI feedback",
        description: "Get instant analysis of your speech patterns, pace, and clarity while you practice.",
        icon: "activity"
      },
      {
        title: "Character-based coaching", 
        description: "Personalized guidance that adapts to your unique communication style and goals.",
        icon: "user"
      },
      {
        title: "Delightfully simple practice loop",
        description: "Effortless practice sessions that build confidence through consistent improvement.",
        icon: "repeat"
      }
    ]
  },

  // Footer CTA
  footerCTA: {
    badge: "Join 10,000+ students who've discovered their strengths",
    headline: "Ready to unlock your authentic voice?",
    subheading: "Help us reach one million meaningful conversations by 2030.",
    cta: "Start My Free Assessment"
  },

  // Testimonials
  testimonials: [
    {
      quote: "Articulate transformed how I approach interviews. The AI feedback helped me identify patterns I never noticed, and now I speak with genuine confidence.",
      author: "Sarah Chen",
      role: "Medical Student",
      university: "Stanford University",
      improvement: "Confidence increased by 40%"
    },
    {
      quote: "The character-based coaching was a game-changer. Instead of generic advice, I got personalized insights that actually matched my communication style.",
      author: "Marcus Johnson", 
      role: "Pre-med Student",
      university: "Harvard University",
      improvement: "Interview success rate: 90%"
    },
    {
      quote: "I went from dreading interviews to actually looking forward to them. The practice loop made improvement feel natural and achievable.",
      author: "Dr. Rachel Kim",
      role: "Resident Physician",
      university: "Johns Hopkins",
      improvement: "Reduced anxiety by 60%"
    }
  ],

  // Accessibility
  a11y: {
    skipToContent: "Skip to main content",
    menuToggle: "Toggle navigation menu",
    playVideo: "Play demonstration video",
    pauseVideo: "Pause demonstration video"
  }
} as const;

// Type exports for TypeScript support
export type CopyKeys = keyof typeof copy;
export type FeatureItem = typeof copy.features.items[0];
export type CoreValue = typeof copy.coreValues[0];
export type Testimonial = typeof copy.testimonials[0];