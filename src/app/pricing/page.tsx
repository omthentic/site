'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  { name: 'Starter', price: '$0', period: '/mo', features: ['10 sessions', 'Core metrics', 'Email support'], cta: 'Start Free', audience: 'b2c' },
  { name: 'Pro', price: '$19', period: '/mo', features: ['Unlimited sessions', 'Advanced metrics', 'Transcript export', 'Priority support'], cta: 'Start Free', highlight: true, audience: 'b2c' },
  { name: 'Team', price: 'Contact', period: '', features: ['Cohort spaces', 'Assignments', 'Coach review tools', 'Admin analytics'], cta: 'Talk to Us', audience: 'b2b' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Simple, fair pricing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Choose a plan that grows with your goals.</p>
        </div>
      </section>
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-2xl p-6 border ${t.highlight ? 'bg-gradient-to-br from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white border-transparent' : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'} `}>
              <div className="text-lg font-semibold mb-1">{t.name}</div>
              <div className="text-4xl font-bold mb-1">{t.price}<span className="text-base font-medium opacity-80">{t.period}</span></div>
              <ul className="space-y-2 my-4">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className={`w-5 h-5 ${t.highlight ? 'text-white' : 'text-green-500'}`} />
                    <span className={t.highlight ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={t.audience === 'b2b' ? '/company/contact' : '/sign-up'} className={`inline-block w-full text-center px-4 py-3 rounded-xl font-semibold ${t.highlight ? 'bg-white text-blue-600' : 'bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white'}`}>{t.cta}</Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Comparison table */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <th className="py-3"></th>
                <th className="py-3">Starter</th>
                <th className="py-3">Pro</th>
                <th className="py-3">Team</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-200">
              {[
                { label: 'Sessions per month', starter: '10', pro: 'Unlimited', team: 'Unlimited' },
                { label: 'Real-time feedback', starter: 'Core', pro: 'Advanced', team: 'Advanced + Coach Review' },
                { label: 'Analytics', starter: 'Basic', pro: 'Advanced', team: 'Org-wide' },
                { label: 'Collaboration', starter: '-', pro: '-', team: 'Cohorts & Assignments' },
              ].map((row) => (
                <tr key={row.label} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="py-3 pr-4 text-sm">{row.label}</td>
                  <td className="py-3">{row.starter}</td>
                  <td className="py-3">{row.pro}</td>
                  <td className="py-3">{row.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <ModernFooter />
    </div>
  );
}


