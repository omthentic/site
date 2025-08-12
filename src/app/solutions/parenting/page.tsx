'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function ParentingCommunicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Parenting Communication Training</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Tools and scenarios to navigate tough moments with empathy, clarity, and consistency.</p>
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-semibold shadow-lg hover:brightness-105">Start Now</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">When emotions run high</h2>
        <p className="text-gray-700 dark:text-gray-300">Parenting conversations can escalate quickly. Misunderstandings and inconsistent responses make tough moments harder for everyone.</p>
        </div>
      </section>

      {/* Solution & Benefits */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Guidance for calmer, clearer moments</h3>
            <p className="text-gray-700 dark:text-gray-300">Omthentic AI helps you prepare for real parenting scenarios so you can respond with empathy, set boundaries, and model healthy communication.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'De‑escalation phrasing for heated moments',
              'Consistent boundaries while staying connected',
              'Age‑appropriate conversations that build trust',
              'Listening skills that help your child feel understood',
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
              { t: 'Complete your Charametrics profile', d: 'Understand your parenting communication style.' },
              { t: 'Meet your tailored AI coach', d: 'Practice scenarios matched to your family context.' },
              { t: 'Practise, review, refine', d: 'Build habits that make tough moments easier.' },
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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Bring calm and connection to everyday conversations</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Start now with scenarios tailored to your family.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Start Now</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


