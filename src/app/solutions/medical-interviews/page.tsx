'use client';

import React from 'react';
import Link from 'next/link';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function MedicalInterviewsSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 pill mb-4">Pilot</div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Medical Entrance Interviews</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Practice authentic answers under pressure—guided by your AI Coach.</p>
          <div className="mt-6">
            <Link href="/onboarding" className="px-6 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-medium">Join the Pilot</Link>
          </div>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


