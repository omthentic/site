'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function ProductRoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">What’s next</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">A transparent look at what we’re building to deepen authentic communication.</p>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[{ h: 'Pilot expansion', p: 'Beyond medical interviews into leadership and careers.' }, { h: 'Live co‑coaching', p: 'Blend human mentors with AI for complex moments.' }, { h: 'Deeper insights', p: 'Conversation intent mapping and alignment scores.' }, { h: 'Mobile', p: 'Practice and reflect anywhere.' }].map((r) => (
            <div key={r.h} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{r.h}</div>
              <div className="text-gray-600 dark:text-gray-400">{r.p}</div>
            </div>
          ))}
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


