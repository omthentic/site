'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, BarChart3, Mic, Sparkles } from 'lucide-react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

const featureCards = [
  { icon: Brain, title: 'AI Coaching', desc: 'Personalised guidance that evaluates clarity, confidence and structure.' },
  { icon: Mic, title: 'Recording Studio', desc: 'Fast, lightweight capture built for short interview reps.' },
  { icon: BarChart3, title: 'Progress Analytics', desc: 'See improvement session‑by‑session with clean, interpretable metrics.' },
  { icon: Sparkles, title: 'Templates & Flows', desc: 'MMI, panel and behavioral flows ready to use and remix.' },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Everything you need to prepare</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Tools that make high‑quality practice feel simple and repeatable.</p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((f) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] flex items-center justify-center mb-4"><f.icon className="w-6 h-6 text-white" /></div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{f.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why it works</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {['Short feedback loops', 'Objective metrics', 'Guided structure', 'Realistic prompts'].map((i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-gray-700 dark:text-gray-300">{i}</span></div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


