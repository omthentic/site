"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Authentic Expression. Aligned Opportunities.</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">We empower individuals to articulate who they truly are—so they can connect deeply, pursue meaningful goals, and thrive, personally and professionally.</p>
          <div className="mt-8">
            <div className="h-56 sm:h-72 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Origin Story — Why We Exist</h2>
          <p>At Omthentic AI, we believe that every human voice holds the power to forge connection, reveal opportunity, and unlock potential. Yet, too often, people hold back—unsure of how to speak what they truly mean. That&rsquo;s where we come in.</p>
          <p>Our journey began when the founders, passionate about human connection and impact, recognised how misaligned communication can close doors, while authentic voice opens them. So we set out to build AI that listens to the person—not just their words.</p>
        </div>
      </section>

      {/* Who We Serve & What We Do */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Who we&rsquo;re here for</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Aspiring professionals preparing for critical conversations (job interviews, medical school entry)</li>
              <li>Students aiming to express themselves with clarity in high‑stakes scenarios</li>
              <li>Leaders and teams seeking more aligned, authentic dialogue</li>
              <li>Anyone who wants to be heard—and understood—for who they truly are</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What we do</h3>
            <p className="text-gray-700 dark:text-gray-300">We use ShareTree&rsquo;s Charametrics to reveal your unique character strengths, then pair you with an AI coach tailored to your style. You practice, receive feedback, and step into real conversations grounded in authenticity and growth.</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Character */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mission</div>
            <p className="text-gray-700 dark:text-gray-300">Our mission is to help every individual authentically express what they genuinely mean, in a way that&rsquo;s truly heard and understood—turning real self-expression into aligned opportunities for connection and growth.</p>
          </div>
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Vision</div>
            <p className="text-gray-700 dark:text-gray-300">By 2030, empower one million individuals to unlock aligned opportunities through authentic communication.</p>
          </div>
          <div className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Core Character</div>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Excellence: We craft every interaction with intention and care.</li>
              <li>Service: Uplifting others through their voice is our purpose.</li>
              <li>Innovation: We build AI that amplifies humanity&rsquo;s potential.</li>
            </ul>
            <div className="mt-3 text-gray-700 dark:text-gray-300">
              <span className="font-medium">Living our values (situationally):</span> Simplicity, Commitment, Cooperation, Enthusiasm.
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[{ t: 'Character Insight', d: 'Discover your profile through Charametrics.' }, { t: 'Tailored Coaching', d: 'Get matched with an AI coach designed for your strengths.' }, { t: 'Practice & Feedback', d: 'Refine your communication via scenario-based sessions.' }, { t: 'Real Results', d: 'Step into the moments that matter with clarity and authenticity.' }].map((c) => (
            <div key={c.t} className="rounded-2xl p-6 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{c.t}</div>
              <div className="text-gray-700 dark:text-gray-300">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Early Impact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-xl text-gray-900 dark:text-white">“Omthentic helped me say what I meant—clearly, confidently, and on purpose.” <span className="text-gray-600 dark:text-gray-400">— Pilot User, Med School Interview Prep</span></blockquote>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Meet Our Team</h3>
            <p className="text-gray-700 dark:text-gray-300">Founders (with photos, short bios, values alignment points)</p>
            <p className="text-gray-700 dark:text-gray-300 mt-3">Our culture: Rooted in excellence, fueled by service—founded on innovation and sustained with simplicity, commitment, cooperation, and enthusiasm.</p>
          </div>
          <div className="h-48 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Are you Omthentically Aligned to our Purpose?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Apply to join our team!</p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">Apply to Join</Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


