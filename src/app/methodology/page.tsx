'use client';

import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Methodology</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">How we calculate outcomes and what our claims mean.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sample & Timeframe</h2>
            <p>Unless noted otherwise, metrics are calculated over sessions conducted in the last 6–12 months across our pilot cohorts.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Definitions</h2>
            <p>“Clarity” combines lexical diversity and structural coherence; “Confidence” blends pace stability and intonation range; “Filler words” measures common disfluencies per 100 words.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Attribution</h2>
            <p>Self‑reported outcomes (offers, promotions) are verified when possible. We separate correlation from causation and disclose confounders in detailed studies.</p>
          </div>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


