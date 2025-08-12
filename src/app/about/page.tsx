'use client';

import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Omthentic exists to help future doctors communicate clearly, confidently, and compassionately.</p>
        </div>
      </section>
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 space-y-4">
          <p>We combine best‑practice communication frameworks with delightful product design and AI feedback loops. The result is a practice experience that feels natural, fast and effective.</p>
          <p>We believe effective communication is at the heart of great care. Our goal is to make high‑quality interview practice accessible to everyone.</p>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


