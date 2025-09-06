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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">How We Help</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Practical, beautifully crafted tools that empower authentic communication in the moments that matter.
          </p>
        </div>

        {/* Mosaic grid: 2x2 with asymmetric heights like the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={
                'relative rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 ' +
                (idx === 0 ? 'md:row-span-2' : '')
              }
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
              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-prose">
                  {item.description}
                </p>

                <div className="mt-6">
                  <button className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


