'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Waves, KeyRound, Sparkles } from 'lucide-react';

type FeatureCard = {
  title: string;
  description: string;
  icon: React.ElementType;
  accentFrom: string;
  accentTo: string;
};

const items: FeatureCard[] = [
  {
    title: 'Articulate With Clarity',
    description:
      'Tools to help you put your thoughts into words that feel aligned and true to you.',
    icon: MessageSquare,
    accentFrom: 'from-[#2D6FFF]/20',
    accentTo: 'to-[#19B9D0]/20',
  },
  {
    title: 'Unlock Aligned Opportunities',
    description:
      'Harness authentic communication to open doors for growth, connection, and collaboration.',
    icon: KeyRound,
    accentFrom: 'from-emerald-400/20',
    accentTo: 'to-cyan-400/20',
  },
  {
    title: 'Communicate With Confidence',
    description:
      'Our guidance and AI-driven insights help you show up as your best self in conversations that matter.',
    icon: Waves,
    accentFrom: 'from-indigo-400/20',
    accentTo: 'to-sky-400/20',
  },
  {
    title: 'Your Complete Toolkit for Authenticity',
    description:
      'From interviews to pitches, we bring together the tools you need to be understood and remembered.',
    icon: Sparkles,
    accentFrom: 'from-[#2D6FFF]/20',
    accentTo: 'to-emerald-400/20',
  },
];

export default function FeatureGridOmthentic() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-subtle)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)]">How We Help</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-2xl mx-auto">
            Practical, beautifully crafted tools that empower authentic communication in the moments that matter.
          </p>
        </div>

        {/* Mosaic grid: 2x2 with asymmetric heights like the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={'card-app overflow-hidden'}
            >
              {/* Abstract background */}
              <div
                className={
                  'absolute inset-0 pointer-events-none bg-gradient-to-br ' +
                  item.accentFrom +
                  ' via-transparent ' +
                  item.accentTo
                }
              />
              {/* Subtle grid overlay for depth */}
              <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06] pointer-events-none"
                   style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px', color: '#0f172a' }} />

              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand)] flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-muted)] max-w-prose">
                  {item.description}
                </p>

                {/* Animated accents */}
                <div className="pointer-events-none absolute -right-6 -bottom-6 w-40 h-40 rounded-full bg-gradient-to-tr from-[#19B9D0]/30 to-[#12D6C0]/30 blur-2xl animate-pulse" />
                <motion.div
                  className="pointer-events-none absolute left-6 bottom-6 h-6 w-20 rounded-full bg-gradient-to-r from-white/30 to-transparent"
                  initial={{ opacity: 0.2, x: -8 }}
                  animate={{ opacity: [0.2, 0.6, 0.2], x: [ -8, 8, -8 ] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* CTA */}
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


