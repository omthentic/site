'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function JobInterviewsSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Land Your Dream Job — Master Interviews with AI Coaching</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Personalised training that makes you memorable, confident, and aligned to the role you want.</p>
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-semibold shadow-lg hover:brightness-105">Start Preparing Today</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-center text-gray-800 dark:text-gray-200">
          <p className="text-lg">“The AI helped me find my voice — I finally landed my dream role.” — <span className="text-gray-600 dark:text-gray-400">[Name, Marketing Professional]</span></p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">The Right Words Can Open the Right Doors</h2>
            <p className="text-gray-700 dark:text-gray-300">In competitive job markets, cultural fit and communication skills matter as much as qualifications. Employers want confident, engaging, and clear communicators.</p>
          </div>
          <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-800 p-4 text-center text-sm text-gray-500 dark:text-gray-400">Graphic placeholder: candidate and recruiter handshake with stylised AI overlay</div>
        </div>
      </section>

      {/* Solution & Benefits */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Targeted practice that builds presence</h3>
            <p className="text-gray-700 dark:text-gray-300">Omthentic AI adapts to your strengths and growth areas, giving you focused interview practice that builds credibility and clarity — so you leave a lasting impression on recruiters and hiring managers.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Practice industry‑specific interview questions',
              'Get feedback on tone, clarity, and body language',
              'Learn to frame your experience as a compelling story',
              'Avoid rambling and over‑rehearsed answers',
            ].map((b) => (
              <div key={b} className="rounded-xl p-4 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (consistency with pilot) */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Complete your Charametrics profile', d: 'Reveal your unique character strengths.' },
              { t: 'Meet your tailored AI coach', d: 'Guidance tuned to your strengths and goals.' },
              { t: 'Practise, review, refine', d: 'Iterate with feedback until you interview with confidence.' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{s.t}</div>
                <div className="text-gray-700 dark:text-gray-300">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Make every interview your best yet.</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Start your tailored coaching today and move closer to the offer.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Start Preparing Today</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


