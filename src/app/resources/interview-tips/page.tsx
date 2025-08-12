'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

const tips = [
  'Lead with your answer; then give two reasons and an example.',
  'Pause for one breath after the question—buy clarity.',
  'Swap filler words for short bridging phrases.',
  'End with a forward‑looking sentence that ties back to fit.',
];

export default function InterviewTipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Interview Tips</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Quick, practical tactics you can apply today.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {tips.map((t) => (<li key={t}>{t}</li>))}
          </ul>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


