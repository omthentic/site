'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

const steps = [
  { title: 'Pick a plan', desc: 'Choose Kickstart, Core, or Mastery.' },
  { title: 'Record a short answer', desc: '10–15s clips are enough to start.' },
  { title: 'Apply tips', desc: 'Use quick suggestions to tighten structure.' },
  { title: 'Repeat with purpose', desc: 'Track metrics and improve steadily.' },
];

export default function HowToUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">How to Use</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">A simple loop: practice → feedback → refine.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{s.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


