'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, GraduationCap, Target, BookOpen, Award } from 'lucide-react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';
import Link from 'next/link';

const benefits = [
  { icon: GraduationCap, title: 'Early Foundations', description: 'Build communication habits before interviews start.' },
  { icon: BookOpen, title: 'MMI Basics', description: 'Learn ethical reasoning, structure, and pacing with guided reps.' },
  { icon: Target, title: 'Clear Storytelling', description: 'Craft and refine your motivations and experiences.' },
  { icon: Award, title: 'Confidence Practice', description: 'Short drills that remove filler words and steady your delivery.' },
];

const features = [
  'Beginner‑friendly practice flows',
  'Ethical and behavioral starter packs',
  'Feedback on pace, clarity, and filler words',
  'Goal trackers and streaks to keep you consistent',
];

export default function PreMedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              For Pre‑Med Students
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Start strong. Grow fast.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Learn the fundamentals of great interview communication—early.
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
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Clarity</div><div className="text-2xl font-bold">80%</div></div>
                <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Confidence</div><div className="text-2xl font-bold">Good</div></div>
                <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Filler</div><div className="text-2xl font-bold">Low</div></div>
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
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Beginner‑friendly modules</h3>
            <p className="text-gray-600 dark:text-gray-400">Short, guided reps for fast, steady progress</p>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Confidence compounds</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Start with little wins—keep stacking them</p>
          <Link href="/sign-up" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


