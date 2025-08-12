'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Award, Users, Target, Brain, Clock } from 'lucide-react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import Link from 'next/link';

const reasons = [
  {
    icon: Brain,
    title: 'AI That Understands Medical Context',
    description: 'Our AI is trained specifically on medical interview scenarios, understanding the nuances of healthcare communication and professional expectations.',
  },
  {
    icon: Award,
    title: 'Proven Success Rate',
    description: '95% of our users report improved confidence and performance in their actual interviews, with many landing their dream positions.',
  },
  {
    icon: Users,
    title: 'Built by Medical Professionals',
    description: 'Created in collaboration with practicing physicians, residency directors, and medical educators who know what interviewers look for.',
  },
  {
    icon: Target,
    title: 'Personalized Learning Paths',
    description: 'Every practice session adapts to your strengths and weaknesses, ensuring you focus on areas that need the most improvement.',
  },
  {
    icon: Clock,
    title: 'Time-Efficient Practice',
    description: 'Get more done in less time with focused 15-minute sessions that fit into your busy medical school or residency schedule.',
  },
  {
    icon: Shield,
    title: 'Safe Space to Make Mistakes',
    description: 'Practice in a judgment-free environment where mistakes become learning opportunities, not career-limiting moments.',
  },
];

const comparison = [
  { feature: 'AI-Powered Feedback', omthentic: true, traditional: false, competitors: 'Limited' },
  { feature: 'Medical-Specific Training', omthentic: true, traditional: true, competitors: false },
  { feature: 'Available 24/7', omthentic: true, traditional: false, competitors: true },
  { feature: 'Personalized Practice Plans', omthentic: true, traditional: 'Manual', competitors: false },
  { feature: 'Real-Time Analysis', omthentic: true, traditional: false, competitors: false },
  { feature: 'Progress Tracking', omthentic: true, traditional: 'Limited', competitors: true },
  { feature: 'Specialty-Specific Questions', omthentic: true, traditional: 'Some', competitors: false },
  { feature: 'Peer Benchmarking', omthentic: true, traditional: false, competitors: false },
  { feature: 'Affordable Pricing', omthentic: true, traditional: false, competitors: 'Varies' },
];

const timeline = [
  { year: '2020', event: 'Founded by medical educators frustrated with traditional interview prep' },
  { year: '2021', event: 'Launched beta with 500 medical students' },
  { year: '2022', event: 'Expanded to residency and fellowship interviews' },
  { year: '2023', event: 'Reached 25,000 active users across 50 medical schools' },
  { year: '2024', event: 'Introduced AI coach and achieved 95% success rate' },
  { year: '2025', event: 'Leading platform for medical interview preparation globally' },
];

export default function WhyOmthentic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Why Choose Omthentic?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            We&rsquo;re not just another interview prep tool. We&rsquo;re your personal AI coach, 
            designed specifically for the unique challenges of medical interviews.
          </motion.p>
        </div>
      </section>

      {/* Key Reasons Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built Different, Built Better
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Here&rsquo;s what makes Omthentic the smart choice for your medical career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See the Difference
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              How Omthentic compares to other preparation methods
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Omthentic
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Traditional Coaching
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Other Apps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {comparison.map((item) => (
                  <tr key={item.feature}>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.omthentic === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : item.omthentic === false ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.omthentic}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.traditional === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : item.traditional === false ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.traditional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.competitors === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : item.competitors === false ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.competitors}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Building the future of medical interview preparation
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-20 text-right">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {item.year}
                  </span>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full" />
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of medical professionals who trust Omthentic for their interview success
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl shadow-blue-600/25"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/resources/success-stories"
              className="px-8 py-4 text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-all"
            >
              Read Success Stories →
            </Link>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}
