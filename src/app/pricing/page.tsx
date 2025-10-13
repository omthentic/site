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
    <div className="min-h-screen bg-[var(--bg)]">
      <ModernHeader />
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--text)] mb-4">Simple, fair pricing</h1>
          <p className="text-xl text-[var(--text-muted)]">Start free. Upgrade when you want deeper insights and full-length mock interviews.</p>
        </div>
      </section>
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`card-app ${t.highlight ? 'ring-2 ring-[var(--brand)] relative' : ''}`}>
              {t.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 badge-app">Most Popular</div>}
              <div className="text-lg font-semibold mb-1 text-[var(--text)]">{t.name}</div>
              <div className="text-4xl font-bold mb-1 text-[var(--text)]">{t.price}<span className="text-base font-medium text-[var(--text-muted)]">{t.period}</span></div>
              <ul className="space-y-2 my-4">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--success)]" />
                    <span className="text-[var(--text-muted)]">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={t.audience === 'b2b' ? '/company/contact' : '/sign-up'} className={`inline-block w-full text-center ${t.highlight ? 'button-primary' : 'button-secondary'}`}>{t.cta}</Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Comparison table */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-2">Compare Plans — Find Your Perfect Fit</h2>
            <p className="text-[var(--text-muted)]">Choose the plan that matches your goals — from getting started for free to unlocking unlimited practice and team-wide collaboration.</p>
          </div>
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
                { label: 'Guided Practice Plans', starter: '✅', pro: '✅', team: '✅' },
                { label: 'AI Coach Feedback', starter: '✅', pro: '✅ (Advanced metrics)', team: '✅ (Custom metrics)' },
                { label: 'Session Recording', starter: '5 per month', pro: 'Unlimited', team: 'Unlimited' },
                { label: 'Analytics Dashboard', starter: 'Basic', pro: 'Advanced (trend charts, exports)', team: 'Team & Cohort Analytics' },
                { label: 'Export & Share Feedback', starter: '❌', pro: '✅', team: '✅' },
                { label: 'Priority Support', starter: '❌', pro: '✅', team: '✅' },
                { label: 'Team Assignments & Tracking', starter: '❌', pro: '❌', team: '✅' },
                { label: 'Custom Content & Rubrics', starter: '❌', pro: '❌', team: '✅' },
                { label: 'Onboarding Session', starter: '❌', pro: '❌', team: '✅' },
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


