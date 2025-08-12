'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function CoachPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Tailored AI Coach</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">A coach built around your character strengths, helping you speak from your true self.</p>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Personalised guidance</div>
            <div className="text-gray-600 dark:text-gray-400">Coaching aligns with your values and goals, emphasising clarity, empathy, and impact.</div>
          </div>
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Actionable feedback</div>
            <div className="text-gray-600 dark:text-gray-400">Clear next steps translate insight into better outcomes in real conversations.</div>
          </div>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


