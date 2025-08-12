'use client';

import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

const entries = [
  { date: '2025‑08‑10', items: ['Interactive demo carousel', 'Mini‑widget recording with live levels', 'New Marketing pages'] },
  { date: '2025‑08‑05', items: ['Revamped hero and brand tokens', 'CTA improvements', 'Accessibility fixes'] },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Changelog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Highlights of what shipped recently.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {entries.map((e) => (
            <div key={e.date} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{e.date}</div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {e.items.map((i) => (<li key={i}>{i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


