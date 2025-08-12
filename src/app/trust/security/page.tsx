'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Security & Privacy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Your voice and data are protected. We use industry best practices and privacy by design.</p>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[{ h: 'Encryption', p: 'Data encrypted in transit and at rest.' }, { h: 'Access control', p: 'Role-based access and least privilege.' }, { h: 'Compliance', p: 'Committed to responsible AI and privacy standards.' }].map((b) => (
            <div key={b.h} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{b.h}</div>
              <div className="text-gray-600 dark:text-gray-400">{b.p}</div>
            </div>
          ))}
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


