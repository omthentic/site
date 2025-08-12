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
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Personalised AI interview training that adapts to your unique character strengths, helping you communicate with confidence and authenticity.</p>
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white rounded-lg font-semibold shadow-lg hover:brightness-105">Join the Pilot Now</Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Why many miss out</h2>
          <p className="text-gray-700 dark:text-gray-300">Medical school interviews aren&rsquo;t just about what you know — they&rsquo;re about how you connect, listen, and convey purpose. Many brilliant students miss out because their communication style isn&rsquo;t aligned to what interviewers value.</p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How Omthentic AI helps</h3>
            <p className="text-gray-700 dark:text-gray-300">Omthentic AI uses ShareTree&rsquo;s Charametrics technology to profile your strengths, then assigns you an AI coach tailored to your growth areas. You&rsquo;ll practise realistic interview scenarios, get instant feedback, and refine your performance with each session.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Build confidence in answering tough, unexpected questions',
              'Showcase your strengths authentically under pressure',
              'Improve tone, pace and presence with real‑time AI feedback',
              'Prepare for both panel and MMI‑style interviews',
              'Personalised strategies for ethical and scenario‑based questions',
            ].map((b) => (
              <div key={b} className="rounded-xl p-4 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{b}</div>
            ))}
          </div>
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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to ace your interview?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Join the Medical Entrance Interviews Pilot and start practising today.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Join the Pilot Now</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


