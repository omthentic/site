'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function LeadershipSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Leadership & Team Conversations</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Lead with clarity, empathy, and alignment—especially when it matters.</p>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


