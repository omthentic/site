'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Stethoscope, Target, Clock, Award, Users, HeartPulse } from 'lucide-react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';
import Link from 'next/link';

const benefits = [
  { icon: Stethoscope, title: 'Specialty‑Aligned Scenarios', description: 'Practice behavioral and clinical judgment prompts tailored to your chosen specialty.' },
  { icon: Target, title: 'Program‑Specific Fit', description: 'Refine answers that showcase mission alignment, teamwork, and resilience.' },
  { icon: Clock, title: 'Efficient Reps', description: 'Short, targeted drills for busy rotations—see gains in under 15 minutes/day.' },
  { icon: Award, title: 'Polished Delivery', description: 'Improve structure, clarity, and confidence for panel and virtual formats.' },
];

const features = [
  'Mock program director panels with timeboxing',
  'Communication, empathy, and systems thinking scoring',
  'Clinical judgment vignettes and debriefs',
  'Structured frameworks (STAR, PACE, SPIKES overlays)',
  'Progress analytics and red‑flag detectors',
  'Recording library with self‑review workflows',
];

const testimonials = [
  { name: 'Amara N.', role: 'IM Resident, UCLA', content: 'The specialty‑aligned prompts and instant scoring helped me find crisp language fast.' },
  { name: 'Leo P.', role: 'EM Resident, Northwestern', content: 'Short reps fit my schedule. My cadence and clarity improved in under two weeks.' },
  { name: 'Priya R.', role: 'Peds Resident, UTSW', content: 'Felt ready for curveballs. Feedback was specific and actionable.' },
];

const stats = [
  { value: '88%', label: 'Match Confidence ↑' },
  { value: '20,000+', label: 'Resident Sessions' },
  { value: '4.9/5', label: 'Avg. Session Rating' },
  { value: '12m', label: 'Avg. Daily Practice' },
];

export default function ResidentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <HeartPulse className="w-4 h-4" />
              For Residents
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Interview with calm, clarity, and clinical poise
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Build answers that reflect judgment, empathy, and program fit. Practice fast, track measurable gains, and feel ready for anything.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up" className="px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                Watch Demo
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> No credit card</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Cancel anytime</div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm"><span className="text-gray-600 dark:text-gray-400">Format</span><span className="font-semibold text-gray-900 dark:text-white">Panel</span></div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Clarity</div><div className="text-2xl font-bold">86%</div></div>
                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Empathy</div><div className="text-2xl font-bold">82%</div></div>
                  <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Confidence</div><div className="text-2xl font-bold">Strong</div></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{s.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Everything you need to match with confidence</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Designed for rotations, sub‑Is and interviews</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] flex items-center justify-center"><b.icon className="w-6 h-6 text-white" /></div>
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{b.title}</div>
                  <div className="text-gray-600 dark:text-gray-400">{b.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Built for residency interviews</h3>
            <p className="text-gray-600 dark:text-gray-400">Clinical realism, soft‑skills scoring, and tight feedback loops</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Residents who made it happen</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Real stories, real progress</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-6">{t.content}</p>
                <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Be the calm in the room</h2>
          <p className="text-white/90 mb-8">Practice like you present—clear, confident, and composed</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up" className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-all shadow-xl">Start Free Trial</Link>
            <Link href="/pricing" className="px-8 py-4 text-white font-medium hover:text-white/80 transition-all">View Pricing →</Link>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


