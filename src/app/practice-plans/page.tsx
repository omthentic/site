'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import Link from 'next/link';

const plans = [
  { name: '7‑Day Kickstart', desc: 'Short daily reps to build cadence and reduce fillers.', commitment: '10–15 min / day' },
  { name: '14‑Day Core', desc: 'MMI + panel mix, metrics tracking, and self‑review.', commitment: '15–20 min / day' },
  { name: '4‑Week Mastery', desc: 'Deep dives, frameworks, and mock interview blocks.', commitment: '30–40 min / day' },
];

export default function PracticePlansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 pill mb-4"><Calendar className="w-4 h-4" /> Practice Plans</div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Plans that fit your schedule</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Pick a plan, follow the steps, and watch your metrics climb.</p>
        </div>
      </section>
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-left">
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{p.name}</div>
              <div className="text-gray-600 dark:text-gray-400 mb-4">{p.desc}</div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><CheckCircle className="w-4 h-4 text-green-500" /> {p.commitment}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Link href="/sign-up" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Start Free Trial <ArrowRight className="w-5 h-5" /></Link>
      </section>
      <ModernFooter />
    </div>
  );
}


