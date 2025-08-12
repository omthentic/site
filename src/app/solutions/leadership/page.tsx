'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function LeadershipSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Lead with Clarity, Inspire with Confidence</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Transform how you communicate with your team using AI-driven feedback tailored to your leadership style.</p>
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-semibold shadow-lg hover:brightness-105">Start Leadership Coaching</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">The leadership gap</h2>
          <p className="text-gray-700 dark:text-gray-300">Even great leaders struggle to consistently inspire and align their teams. Miscommunication leads to wasted effort, disengagement, and lost opportunities.</p>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Coaching for clarity and alignment</h3>
            <p className="text-gray-700 dark:text-gray-300">Omthentic AI coaches leaders to communicate in ways that motivate, unify, and empower. You&rsquo;ll refine your listening, speaking, and conflict‑resolution skills in simulated real‑world scenarios.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Deliver vision and strategy in ways that stick',
              'Build trust and rapport with every team interaction',
              'Handle difficult conversations with empathy and authority',
              'Adapt your style to different team personalities',
            ].map((b) => (
              <div key={b} className="rounded-xl p-4 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{b}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Complete your Charametrics profile', d: 'Reveal your leadership strengths and blind spots.' },
              { t: 'Meet your tailored AI coach', d: 'Guidance tuned to your style and team context.' },
              { t: 'Practise, review, refine', d: 'Scenario training for 1:1s, standups, feedback, and strategy.' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{s.t}</div>
                <div className="text-gray-700 dark:text-gray-300">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Lead with clarity, empathy, and momentum</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Start coaching today and level‑up your impact across every conversation.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Start Leadership Coaching</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


