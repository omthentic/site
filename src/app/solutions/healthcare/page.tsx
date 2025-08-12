'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function HealthcareCommunicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Healthcare & Patient Communication</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Build trust, reduce anxiety, and improve outcomes with clear, compassionate conversations.</p>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


