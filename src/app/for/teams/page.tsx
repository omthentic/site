'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Presentation, BarChart3, Sparkles } from 'lucide-react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';
import Link from 'next/link';

const benefits = [
  { icon: Users, title: 'Cohort Onboarding', description: 'Spin up structured prep for cohorts with shared templates and analytics.' },
  { icon: Presentation, title: 'Coach Workflows', description: 'Assign modules, review recordings, and track progress over time.' },
  { icon: BarChart3, title: 'Team Insights', description: 'See aggregate strengths and gaps; target coaching where it matters.' },
  { icon: Sparkles, title: 'AI Assist at Scale', description: 'Instant feedback loops amplify human coaching—not replace it.' },
];

const features = [
  'Team spaces and role‑based permissions',
  'Assignment flows and deadlines',
  'Recording libraries and rubric scoring',
  'Analytics exports and progress dashboards',
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              For Teams
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Scale interview excellence across your cohort
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A modern program for universities, societies and training groups to elevate outcomes—consistently.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl flex items-center justify-center gap-2">
                Talk to us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                Watch Demo
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Cohort size</div><div className="text-2xl font-bold">50+</div></div>
                <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Avg. clarity</div><div className="text-2xl font-bold">+18%</div></div>
                <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Filler words</div><div className="text-2xl font-bold">−24%</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
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
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Program at a glance</h3>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to run high‑quality interview prep at scale</p>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Build a program that delivers outcomes</h2>
          <p className="text-white/90 mb-8">We partner with schools, societies and training programs</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-all shadow-xl">Talk to us</Link>
            <Link href="/pricing" className="px-8 py-4 text-white font-medium hover:text-white/80 transition-all">View Pricing →</Link>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


