'use client';

import React from 'react';
import Link from 'next/link';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

const partners = [
  {
    name: 'ShareTree',
    href: 'https://sharetree.org',
    desc: 'A purpose‑driven movement advancing character, community and conscious culture. Their Charametrics framework empowers people and organisations to understand and express their strengths.'
  },
  {
    name: 'Med With Purpose',
    href: 'https://medwithpurpose.com',
    desc: 'Supporting aspiring and current healthcare professionals to thrive with clarity and compassion—building skills that align personal purpose with professional practice.'
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Partners</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">We collaborate with mission‑aligned organisations that amplify human potential and authentic communication.</p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{p.name}</h2>
                <Link href={p.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white">Visit</Link>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


