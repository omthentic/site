'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function FeedbackSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Turn Feedback into Growth — Without the Stress</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Deliver and receive feedback with clarity, empathy, and confidence.</p>
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-semibold shadow-lg hover:brightness-105">Start Coaching</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Why feedback goes wrong</h2>
          <p className="text-gray-700 dark:text-gray-300">Performance reviews often create anxiety, defensiveness, or confusion. Poorly delivered feedback can damage trust and morale.</p>
        </div>
      </section>

      {/* Solution & Benefits */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Coach conversations that build trust</h3>
            <p className="text-gray-700 dark:text-gray-300">Omthentic AI trains you to handle feedback conversations in ways that strengthen relationships and drive improvement.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Learn phrasing that motivates rather than discourages',
              'Build trust through transparency and respect',
              'Avoid miscommunication and defensiveness',
              'Improve listening skills when receiving feedback',
            ].map((b) => (
              <div key={b} className="rounded-xl p-4 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Complete your Charametrics profile', d: 'Understand your feedback style and strengths.' },
              { t: 'Meet your tailored AI coach', d: 'Practice scripts and strategies matched to your style.' },
              { t: 'Practise, review, refine', d: 'Role‑play tough scenarios and improve with feedback.' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{s.t}</div>
                <div className="text-gray-700 dark:text-gray-300">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Make feedback your team’s superpower</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Start coaching today and turn reviews into real growth.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Start Coaching</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


