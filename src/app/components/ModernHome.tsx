'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Brain, Target, Users, BarChart3, Calendar, MessageSquare, Sparkles, Play, ChevronRight } from 'lucide-react';
import ModernHeader from './ModernHeader';
import ModernFooter from './ModernFooter';

const features = [
  {
    icon: Brain,
    title: 'AI Interview Coach',
    description: 'Get personalized feedback and coaching powered by advanced AI that understands medical context.',
  },
  {
    icon: Calendar,
    title: 'Structured Practice Plans',
    description: 'Follow proven practice schedules designed by medical education experts.',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Feedback',
    description: 'Instant analysis of your responses with actionable improvement suggestions.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and performance metrics.',
  },
  {
    icon: Users,
    title: 'Peer Comparison',
    description: 'See how you stack up against other medical students and residents.',
  },
  {
    icon: Target,
    title: 'Specialty-Specific',
    description: 'Tailored questions and scenarios for your chosen medical specialty.',
  },
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Resident, Johns Hopkins',
    content: 'Omthentic transformed my interview preparation. The AI feedback was incredibly detailed and helped me land my dream residency.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Medical Student, Stanford',
    content: 'The structured practice plans kept me on track. I went from nervous to confident in just 2 weeks.',
    rating: 5,
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Fellow, Mayo Clinic',
    content: 'The specialty-specific questions were spot-on. It felt like having a personal interview coach available 24/7.',
    rating: 5,
  },
];

const stats = [
  { value: '95%', label: 'Success Rate' },
  { value: '50K+', label: 'Students Trained' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '2M+', label: 'Practice Sessions' },
];

export default function ModernHome() {
  // const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Medical Interview Preparation
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              One platform for all your
              <span className="bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] bg-clip-text text-transparent"> medical interview </span>
              preparation
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Master your medical school and residency interviews with AI-powered coaching, real-time feedback, and proven practice methods. Built for future doctors by medical professionals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/sign-up"
                className="px-8 py-4 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white font-medium rounded-xl hover:brightness-105 transition-all shadow-xl flex items-center gap-2"
              >
                Try Omthentic for free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                7 days free trial
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Cancel anytime
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">85%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Confidence Score</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Sessions Completed</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4.8</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Average Score</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to ace your interview
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive tools designed specifically for medical professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by future doctors worldwide
            </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Join thousands who&rsquo;ve successfully prepared with Omthentic
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
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
            Start preparing smarter today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of medical students and residents who are acing their interviews
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl shadow-blue-600/25 flex items-center gap-2"
            >
              Try Omthentic for free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-all flex items-center gap-2"
            >
              View pricing
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}
