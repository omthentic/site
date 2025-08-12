'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BriefcaseMedical, Users, Target, Award, Presentation } from 'lucide-react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';
import Link from 'next/link';

const benefits = [
  { icon: BriefcaseMedical, title: 'Career Transitions', description: 'Prepare for promotions, fellowships, and cross‑disciplinary moves.' },
  { icon: Presentation, title: 'Executive Presence', description: 'Sharpen structure, delivery, and stakeholder persuasion.' },
  { icon: Users, title: 'Team & Leadership', description: 'Demonstrate collaboration, coaching mindset, and systems thinking.' },
  { icon: Target, title: 'Role‑Specific Drills', description: 'Behavioral, leadership, and case prompts tailored to your role.' },
];

const features = [
  'Role‑specific prompt banks (lead clinician, educator, manager)',
  'Leadership and change‑management scenarios',
  'Measurable feedback on clarity, confidence, and brevity',
  'Recorded mock sessions and growth dashboards',
];

const testimonials = [
  { name: 'Clara H.', role: 'Nurse Practitioner', content: 'The coaching signals helped me deliver concise, confident answers.' },
  { name: 'Jordan K.', role: 'Clinical Manager', content: 'The leadership scenarios matched real interviews closely.' },
  { name: 'Samir D.', role: 'Physician Educator', content: 'Clear improvement every session—made storytelling feel natural.' },
];

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <BriefcaseMedical className="w-4 h-4" />
              For Healthcare Professionals
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Communicate leadership. Earn trust.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Interview preparation for clinicians, managers, and educators who lead teams and shape care.
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
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Clarity</div><div className="text-2xl font-bold">85%</div></div>
                <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Confidence</div><div className="text-2xl font-bold">Strong</div></div>
                <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4"><div className="text-xs text-gray-600 dark:text-gray-400">Brevity</div><div className="text-2xl font-bold">On‑point</div></div>
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
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Role‑specific practice modules</h3>
            <p className="text-gray-600 dark:text-gray-400">Behavioral and leadership drills that mirror hiring conversations</p>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Trusted by healthcare professionals</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Real progress in communication and leadership</p>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Advance your career with confidence</h2>
          <p className="text-white/90 mb-8">Practice leadership interviews the smart way</p>
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


