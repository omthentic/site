'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ArrowRight, Mic, BarChart3 } from 'lucide-react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import Link from 'next/link';

export default function AICoachPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 pill mb-4"><Brain className="w-4 h-4" /> AI Coach</div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Personalised coaching—instantly</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Real‑time feedback that improves clarity, confidence, and structure.</p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          {[{
            icon: Mic, title: 'Speak naturally', desc: 'Record short answers—no setup. Immediate capture with on‑screen guidance.'
          }, {
            icon: BarChart3, title: 'See your metrics', desc: 'Clarity, filler words and confidence visualised—session by session.'
          }, {
            icon: Sparkles, title: 'Apply tips fast', desc: 'Targeted suggestions rewrite your answer flow without the fluff.'
          }].map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-left">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] flex items-center justify-center mb-4"><c.icon className="w-6 h-6 text-white" /></div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{c.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Try it free</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Start a guided session and watch your answers tighten up in minutes.</p>
          <Link href="/sign-up" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Start Free Trial <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


