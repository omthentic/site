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
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Our Methodology — How We Measure Results</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">When we share performance statistics — like acceptance rates, improvement scores, or satisfaction ratings — we want you to know exactly what they mean.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sample Size</h2>
            <p>Unless otherwise noted, statistics are based on Omthentic AI users who completed at least 5 full practice sessions between [Start Date] and [End Date].</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Acceptance Rates</h2>
            <p>Calculated based on self-reported admissions outcomes from users who applied to programs in the relevant period.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Improvement Scores</h2>
            <p>Derived from Charametrics data, tracking performance from the first to the most recent session.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Satisfaction Ratings</h2>
            <p>Based on post-session feedback surveys where users rated their experience from 1 to 5.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Why It Matters</h2>
            <p>Transparency ensures our claims are reliable, reproducible, and ethically reported.</p>
          </div>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


