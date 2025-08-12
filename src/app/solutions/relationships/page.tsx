'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function RelationshipsSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Speak from the Heart — And Be Heard</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Strengthen personal relationships through authentic, strengths-based conversations.</p>
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-semibold shadow-lg hover:brightness-105">Start Now</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">When connection gets hard</h2>
          <p className="text-gray-700 dark:text-gray-300">Misunderstandings and unresolved conflict can strain even the closest relationships.</p>
        </div>
      </section>

      {/* Solution & Benefits */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Conversations that bring you closer</h3>
            <p className="text-gray-700 dark:text-gray-300">Omthentic AI guides you through real-life scenarios to help you express yourself clearly, listen deeply, and connect meaningfully.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Improve emotional clarity and listening skills',
              'Resolve conflicts without escalation',
              'Strengthen bonds through genuine dialogue',
              'Adapt communication to different personalities',
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
              { t: 'Complete your Charametrics profile', d: 'Understand your communication style and strengths.' },
              { t: 'Meet your tailored AI coach', d: 'Practice with scenarios aligned to your relationships.' },
              { t: 'Practise, review, refine', d: 'Build skills that strengthen connection and trust.' },
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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Build connection through honest conversation</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Start coaching and bring your most authentic self to every relationship.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Start Now</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


