'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Calendar, Brain, Target, Clock, Users, Award, TrendingUp, BookOpen } from 'lucide-react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';
import Link from 'next/link';

const benefits = [
  {
    icon: Brain,
    title: 'Master MMI Scenarios',
    description: 'Practice Multiple Mini Interview stations with AI feedback on ethical reasoning and communication.',
  },
  {
    icon: Target,
    title: 'School-Specific Prep',
    description: 'Tailored questions for top medical schools including Harvard, Johns Hopkins, and Stanford.',
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Learn to deliver concise, impactful answers within strict interview time limits.',
  },
  {
    icon: Award,
    title: 'Stand Out from Peers',
    description: 'Develop unique responses that highlight your experiences and demonstrate genuine passion.',
  },
];

const features = [
  'Traditional interview question bank with 500+ verified questions',
  'MMI station simulations with ethical scenarios',
  'Panel interview practice mode',
  'Real-time feedback on verbal and non-verbal communication',
  'Progress tracking across all competencies',
  'Mock interview recordings for self-review',
  'Peer comparison and benchmarking',
  'Interview day preparation checklists',
];

const testimonials = [
  {
    name: 'Jessica Park',
    school: 'Harvard Medical School',
    content: 'Omthentic helped me prepare for every possible scenario. The MMI practice was especially valuable - I felt completely ready on interview day.',
    image: '/testimonials/jessica.jpg',
  },
  {
    name: 'David Chen',
    school: 'Johns Hopkins',
    content: 'The AI feedback was incredibly detailed. It helped me eliminate filler words and structure my answers better. Got accepted to 3 of my top 5 schools!',
    image: '/testimonials/david.jpg',
  },
  {
    name: 'Maria Rodriguez',
    school: 'Stanford Medicine',
    content: 'As a non-traditional applicant, I needed extra practice articulating my journey. Omthentic gave me the confidence I needed.',
    image: '/testimonials/maria.jpg',
  },
];

const stats = [
  { value: '92%', label: 'Acceptance Rate', description: 'of our users who complete the program' },
  { value: '15,000+', label: 'Medical Students', description: 'prepared with Omthentic' },
  { value: '4.9/5', label: 'Average Rating', description: 'from medical student users' },
  { value: '2 weeks', label: 'Average Prep Time', description: 'to interview confidence' },
];

export default function MedicalStudentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
              >
                <BookOpen className="w-4 h-4" />
                For Medical Students
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Your Path to Medical School Success
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              >
                Master traditional interviews, MMIs, and panel discussions with AI-powered coaching designed specifically for medical school applicants.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/sign-up"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                >
                  Watch Student Demo
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cancel anytime
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Interview Type</span>
                    <span className="font-semibold text-gray-900 dark:text-white">MMI Station</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "You witness a classmate cheating during an important exam. What would you do?"
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Ethical Reasoning</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-2 bg-green-500 rounded" />
                        ))}
                        <div className="w-8 h-2 bg-gray-300 dark:bg-gray-700 rounded" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Communication</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-8 h-2 bg-green-500 rounded" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Critical Thinking</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-2 bg-green-500 rounded" />
                        ))}
                        {[4, 5].map((i) => (
                          <div key={i} className="w-8 h-2 bg-gray-300 dark:bg-gray-700 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive preparation for every interview format
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Interview Preparation Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              All the tools and resources you need in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories from Medical Students
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join thousands who've successfully prepared with Omthentic
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.school}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your Medical School Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get instant access to our complete interview preparation platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-all shadow-xl"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 text-white font-medium hover:text-white/80 transition-all"
            >
              View Student Pricing →
            </Link>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}
