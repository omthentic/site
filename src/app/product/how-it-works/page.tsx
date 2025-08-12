'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">How it works</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">From self-awareness to real-world confidence, in three simple steps.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: 'Profile', copy: 'Complete a Charametrics assessment to reveal your unique character strengths.' },
            { title: 'Coach', copy: 'Your AI Coach personalises guidance around your strengths and growth priorities.' },
            { title: 'Practice', copy: 'Guided scenarios help you apply skills to conversations that matter most.' },
          ].map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{s.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{s.copy}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


