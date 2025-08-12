'use client';

import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Careers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">We’re a small team building tools that matter. Join us.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
        <div className="max-w-3xl mx-auto">No open roles right now. Say hello at careers@omthentic.com.</div>
      </section>
      <ModernFooter />
    </div>
  );
}


