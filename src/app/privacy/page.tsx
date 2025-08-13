'use client';

import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">We respect your privacy. This page outlines how we handle data.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Data We Collect</h2>
            <p>Account info (name, email), session data (audio, transcripts, feedback metrics), and usage analytics to improve the product.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Retention</h2>
            <p>Session data retained up to 12 months by default for progress tracking. You can shorten or extend retention in your account settings when available.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Subprocessors</h2>
            <p>We use carefully vetted providers for hosting, storage, and analytics. For an up‑to‑date list, contact privacy@omthentic.com.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deletion Requests</h2>
            <p>Request deletion anytime at privacy@omthentic.com. We delete active data within 30 days and purge backups within 60 days.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact</h2>
            <p>Email <a href="mailto:privacy@omthentic.com" className="underline">privacy@omthentic.com</a> for privacy questions. For security disclosures, see our <a href="/trust/security" className="underline">Security page</a>.</p>
          </div>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


