'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, DollarSign, Award, Heart, Zap, Gift, Star, CheckCircle } from 'lucide-react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import Link from 'next/link';

const benefits = [
  {
    icon: DollarSign,
    title: 'Earn 30% Commission',
    description: 'Get recurring commissions for every referral that subscribes to Omthentic.',
  },
  {
    icon: Gift,
    title: 'Exclusive Perks',
    description: 'Free lifetime access to Omthentic Pro and early access to new features.',
  },
  {
    icon: Users,
    title: 'Build Your Network',
    description: 'Connect with other medical professionals and expand your influence.',
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Get featured on our website and social media as a top ambassador.',
  },
  {
    icon: Heart,
    title: 'Help Others Succeed',
    description: 'Make a real impact by helping fellow medical students ace their interviews.',
  },
  {
    icon: Zap,
    title: 'Marketing Support',
    description: 'Access to professional materials, templates, and promotional content.',
  },
];

const requirements = [
  'Active medical student, resident, or healthcare professional',
  'Genuine enthusiasm for helping others succeed',
  'Active on at least one social media platform',
  'Commitment to ethical promotion practices',
  'Willingness to provide feedback and insights',
];

const topAmbassadors = [
  { name: 'Dr. Sarah Chen', role: 'Resident, Johns Hopkins', referrals: 127, earnings: '$4,572' },
  { name: 'Michael Rodriguez', role: 'MS4, Harvard Medical', referrals: 89, earnings: '$3,204' },
  { name: 'Dr. Emily Watson', role: 'Fellow, Mayo Clinic', referrals: 76, earnings: '$2,736' },
  { name: 'David Park', role: 'MS3, Stanford', referrals: 64, earnings: '$2,304' },
];

const faqs = [
  {
    question: 'How much can I earn as an ambassador?',
    answer: 'You earn 30% recurring commission for every subscription. Most ambassadors earn $500-2000 per month, with top performers earning $5000+.',
  },
  {
    question: 'How do I track my referrals?',
    answer: "You'll get access to a personalized dashboard with real-time tracking of clicks, conversions, and earnings.",
  },
  {
    question: 'When do I get paid?',
    answer: 'Commissions are paid monthly via direct deposit or PayPal, with a minimum payout threshold of $50.',
  },
  {
    question: 'What support will I receive?',
    answer: "You'll get access to marketing materials, training resources, and direct support from our ambassador team.",
  },
  {
    question: 'Can international students apply?',
    answer: 'Yes! Our ambassador program is open to medical students and professionals worldwide.',
  },
];

export default function AmbassadorPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [social, setSocial] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4" />
            Ambassador Program
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Earn While You Help Others
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Succeed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Join our ambassador program and earn recurring commissions while helping fellow medical students 
            and professionals ace their interviews. Make a difference and get rewarded.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#apply"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl shadow-purple-600/25 flex items-center gap-2"
            >
              Become an Ambassador
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-all">
              Learn More →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Ambassadors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">$250K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Paid in Commissions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">30%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Commission Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">$1,500</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg Monthly Earnings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ambassador Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              More than just commissions - join a community making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Ambassadors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Top Performing Ambassadors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See what&rsquo;s possible when you join our program
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Ambassador
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Referrals
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Monthly Earnings
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {topAmbassadors.map((ambassador, index) => (
                    <tr key={ambassador.name}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{ambassador.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{ambassador.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-900 dark:text-white">
                        {ambassador.referrals}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">
                        {ambassador.earnings}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
                          <Star className="w-3 h-3" />
                          Elite
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Who Can Become an Ambassador?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We&rsquo;re looking for passionate individuals who want to make a difference
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              {requirements.map((req) => (
                <div key={req} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Apply to Become an Ambassador
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Fill out the form below and we&rsquo;ll review your application within 48 hours
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Dr. Jane Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Medical Student at Harvard Medical School"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Primary Social Media Platform
                </label>
                <input
                  type="text"
                  value={social}
                  onChange={(e) => setSocial(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Instagram @drjanesmith (5K followers)"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}
