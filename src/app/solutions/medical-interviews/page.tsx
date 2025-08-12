"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';

export default function MedicalInterviewsSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 pill mb-4">Pilot</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Ace Your Medical School Interview — With Coaching Built for You</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Personalised AI interview training tailored to your character strengths, helping you communicate with confidence and authenticity.</p>
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-semibold shadow-lg hover:brightness-105">Join the Pilot Now</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Interviews Aren&rsquo;t Just About Knowledge — They&rsquo;re About Connection</h2>
            <p className="text-gray-700 dark:text-gray-300">Medical school interviews test your empathy, clarity, and purpose under pressure. Many brilliant candidates miss out because they can&rsquo;t showcase their authentic selves in the right way.</p>
          </div>
          <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-800 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
            Graphic placeholder: student and interviewer with subtle AI waveform between them
          </div>
        </div>
      </section>

      {/* How Omthentic AI Helps */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tailored Practice That Feels Like the Real Thing</h3>
            <p className="text-gray-700 dark:text-gray-300">Omthentic AI uses ShareTree&rsquo;s Charametrics technology to profile your strengths, then assigns you an AI coach tailored to your growth areas. You&rsquo;ll practise realistic interview scenarios, get instant feedback, and refine your performance with each session.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Master MMI & panel formats',
              'Build confidence for tough, unexpected questions',
              'Receive instant, actionable feedback',
              'Highlight your strengths naturally',
            ].map((b) => (
              <div key={b} className="rounded-xl p-4 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{b}</div>
            ))}
            <div className="rounded-xl p-4 border border-dashed bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 col-span-full">
              Graphic placeholder: Profile → AI Coach → Practice → Feedback → Mastery
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-center text-gray-800 dark:text-gray-200">
          <p className="text-lg">“I walked into my interview feeling calm, prepared, and genuinely myself.” — <span className="text-gray-600 dark:text-gray-400">[Name, Med Student]</span></p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Complete your Charametrics profile', d: 'Discover your unique character strengths.' },
              { t: 'Meet your tailored AI coach', d: 'Get guidance designed around your strengths and growth areas.' },
              { t: 'Practise, review, refine', d: 'Build interview‑readiness through feedback and iteration.' },
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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Secure your place in our limited pilot</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Take the first step toward your medical career.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Join the Pilot Now</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


