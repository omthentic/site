'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

export default function ProductOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 pill mb-4">Product</div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">The platform for authentic communication</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Profile your strengths, coach with AI, and practice for the moments that matter—confidently and clearly.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/get-started" className="px-6 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-medium">Get started</Link>
            <Link href="/product/how-it-works" className="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium">How it works</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[{ title: 'Profile', desc: 'Discover your unique character strengths using Charametrics to ground your growth in self-awareness.' }, { title: 'Tailored AI Coach', desc: 'An AI coach built around your strengths and growth areas to help you communicate what you truly mean.' }, { title: 'Real-world Practice', desc: 'Guided scenarios help you translate insight into confident, clear conversations.' }].map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{c.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


