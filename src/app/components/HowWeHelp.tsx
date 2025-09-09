'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, LayoutGrid, PlayCircle, MessageSquare } from 'lucide-react';

type Stage = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const stages: Stage[] = [
  {
    id: 1,
    title: 'Discover your unique character strengths',
    description:
      'Charametrics reveals your strengths and growth opportunities to guide your personalised coaching path.',
    image: '/images/charametrics results demo v1.0.png',
    icon: Sparkles,
  },
  {
    id: 2,
    title: 'Practice with accurately simulated scenarios',
    description:
      'Use our extensive scenario library with past questions and realistic prompts to build confidence.',
    image: '/images/platform scenario demo.png',
    icon: LayoutGrid,
  },
  {
    id: 3,
    title: 'Optimised practice that feels like the real thing',
    description:
      'A focused practice dashboard that mirrors real interviews—timers, recording, and structured prompts.',
    image: '/images/sample interview response ladya v1.0 copy.png',
    icon: PlayCircle,
  },
  {
    id: 4,
    title: 'Receive tailored, world-class feedback',
    description:
      'Get actionable, personalised feedback grounded in decades of coaching experience—instantly.',
    image: '/images/scenario feedback demo v1.0.png',
    icon: MessageSquare,
  },
];

export default function HowWeHelp() {
  const [active, setActive] = useState<number>(1);
  const current = stages.find((s) => s.id === active)!;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">How We Help</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Move through the journey from insight to confident delivery.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: stage selector */}
          <div className="lg:col-span-5 space-y-2">
            {stages.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full text-left rounded-xl border transition-all px-4 py-4 flex items-start gap-3 ${
                  active === s.id
                    ? 'border-cyan-300/60 dark:border-cyan-500/40 bg-cyan-50/50 dark:bg-cyan-900/10'
                    : 'border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40'
                }`}
              >
                <div className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{s.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{s.description}</div>
                </div>
              </button>
            ))}
          </div>

        {/* Right: preview image */}
          <div className="lg:col-span-7">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
            >
              <Image
                src={current.image}
                alt={current.title}
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </motion.div>

            <div className="mt-4 flex justify-center gap-2">
              {stages.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  aria-label={`Go to stage ${s.id}`}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    active === s.id ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


