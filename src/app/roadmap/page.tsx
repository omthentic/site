'use client';

import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

const roadmap = [
  { q: 'Q3 2025', items: ['Live coach sessions', 'Deeper rubric scoring', 'Collaboration notes'] },
  { q: 'Q4 2025', items: ['Mobile recorder v2', 'Coach marketplace (beta)', 'Program analytics'] },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Roadmap</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">A transparent look at what we’re building next.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {roadmap.map((r) => (
            <div key={r.q} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{r.q}</div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {r.items.map((i) => (<li key={i}>{i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


