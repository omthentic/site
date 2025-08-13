'use client';

import React from 'react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Named, specific stories that show how authentic communication creates outcomes.</p>
        </div>
      </section>
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">🎓 Sarah M.</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">Final‑Year Medical Student · University of Melbourne</div>
            <div className="mt-3 text-gray-700 dark:text-gray-300">
              <p><span className="font-semibold">Before:</span> Struggled with time‑limited MMI questions; scored 60% on mock interviews.</p>
              <p className="mt-1"><span className="font-semibold">After 3 Weeks:</span> Improved average score to 85%, gained confidence in structuring answers under pressure.</p>
              <p className="mt-1"><span className="font-semibold">Outcome:</span> Accepted into top‑choice residency program.</p>
              <p className="mt-3 italic">“The AI Coach was like having a practice partner on call 24/7. I could track exactly where I improved.”</p>
            </div>
          </div>
          {/* TODO: Add 2 more named stories to meet the minimum of three */}
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


