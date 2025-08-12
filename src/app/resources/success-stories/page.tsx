'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

const stories = [
  { name: 'Maya L.', outcome: 'Accepted to HMS', quote: 'I felt composed and clear. The drills made a huge difference.' },
  { name: 'Daniel R.', outcome: 'Matched EM', quote: 'Metrics showed exactly what to fix. Confidence went up fast.' },
  { name: 'Isha P.', outcome: 'Accepted to Stanford Med', quote: 'The structure and feedback loop were game‑changers.' },
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">A few snapshots of what learners achieved with Omthentic.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{s.outcome}</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">“{s.quote}”</p>
              <div className="text-sm text-gray-600 dark:text-gray-400">{s.name}</div>
            </div>
          ))}
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


