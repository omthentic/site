'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Brain, Target, Users, Sparkles } from 'lucide-react';
import ModernHeader from './ModernHeader';
import ModernFooter from './ModernFooter';
import FeatureGridOmthentic from './FeatureGridOmthentic';
import HowWeHelp from './HowWeHelp';

export default function ModernHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <ModernHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/4K_Hero_Background_v2.1.mp4"
            className="w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Authentic Communication Technology
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              AI shouldn&rsquo;t replace your voice. It should help help you find it.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              Omthentic helps you say what you truly mean, in the moments that matter most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <Link
                href="https://app.omthentic.ai/auth/"
                className="button-primary inline-flex items-center justify-center gap-2"
              >
                Start Practicing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="relative z-20 flex justify-center pb-8">
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* App-Aligned Action Cards */}
      <section className="py-20 bg-[var(--bg-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-4">Your AI coach for medical interviews</h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Practice authentic scenarios, get actionable feedback, and track progress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Start Practicing Card */}
            <Link href="https://app.omthentic.ai/auth" className="card-app group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[var(--blue-600)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-2">Start Practicing</h3>
              <p className="text-[var(--text-muted)]">Begin with personal questions or medical scenarios</p>
            </Link>

            {/* Take Assessment Card */}
            <Link href="https://app.omthentic.ai/auth" className="card-app group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[var(--indigo-500)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-2">Take Assessment</h3>
              <p className="text-[var(--text-muted)]">Complete your character profile for personalized feedback</p>
            </Link>

            {/* Set Goals Card */}
            <Link href="https://app.omthentic.ai/auth" className="card-app group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[var(--success)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-2">Set Goals</h3>
              <p className="text-[var(--text-muted)]">Configure your daily practice goals and preferences</p>
            </Link>
          </div>

          {/* Quick Start Guide */}
          <div className="card-app max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--blue-100)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--blue-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)]">Quick Start Guide</h3>
            </div>
            <div className="space-y-4">
              {[
                'Complete your character assessment for personalized AI feedback',
                'Choose a practice mode: Personal Questions, Medical Scenarios, or Mock Interview',
                'Receive detailed AI feedback on Content, Structure, and Presentation',
                'Track your progress, earn points, and level up as you improve'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="stepper-indicator flex-shrink-0">{idx + 1}</div>
                  <p className="text-[var(--text-muted)] pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Scoring Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-4">How Our Scoring Works</h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Build confidence with practice that mirrors real interviews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--blue-600)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-2">Content (0-5)</h3>
              <p className="text-[var(--text-muted)]">Quality and relevance of your response.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--success)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-2">Structure (0-5)</h3>
              <p className="text-[var(--text-muted)]">Organization and clarity of your answer.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--indigo-500)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-2">Presentation (0-5)</h3>
              <p className="text-[var(--text-muted)]">Communication style and delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 sm:py-20 bg-[var(--bg-subtle)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why It Matters</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            In a world overflowing with noise and scripted interactions, genuine communication stands out. Whether it&rsquo;s acing a medical school interview, leading a high-stakes meeting, or having a heartfelt conversation, your ability to express yourself authentically is the bridge to opportunities that truly align with you.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Omthentic AI gives you that bridge by:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><Check className="w-5 h-5 mt-1 text-emerald-500" /> Revealing your unique character strengths through ShareTree&rsquo;s Charametrics.</li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 mt-1 text-emerald-500" /> Matching you with a personalised AI coach built around your strengths and growth areas.</li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 mt-1 text-emerald-500" /> Helping you prepare for the conversations that matter most.</li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
            When you speak from your true self, the right people and opportunities find you.
          </p>
        </div>
      </section>

      {/* How We Help: Toggleable stages */}
      <HowWeHelp />

      {/* Before vs After Comparison - ADDED HERE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">See the Difference</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the transformation from awkward interactions to confident, authentic communication.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
              <div className="relative p-6 h-full flex flex-col gap-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 w-max">Before</div>
                <div className="flex-1 rounded-xl bg-gray-100 dark:bg-gray-800 p-6">
                  <div className="text-gray-700 dark:text-gray-300 text-lg mb-2">Awkward, stressful conversation</div>
                  <div className="text-gray-500 dark:text-gray-400">Hesitant pauses, unclear intent, tension rising.</div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-3 text-red-700 dark:text-red-300">Misunderstood</div>
                  <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-3 text-yellow-700 dark:text-yellow-300">Scripted</div>
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3 text-gray-600 dark:text-gray-300">Anxious</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D6FFF]/15 via-[#19B9D0]/15 to-[#12D6C0]/15" />
              <div className="relative p-6 h-full flex flex-col gap-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 w-max">After</div>
                <div className="flex-1 rounded-xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-gray-900 dark:text-white text-lg mb-2">Confident, natural exchange</div>
                  <div className="text-gray-600 dark:text-gray-400">Clear intent, active listening, genuine connection.</div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-3 text-emerald-700 dark:text-emerald-300">Understood</div>
                  <div className="rounded-lg bg-cyan-50 dark:bg-cyan-900/20 p-3 text-cyan-700 dark:text-cyan-300">Authentic</div>
                  <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3 text-blue-700 dark:text-blue-300">Aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-subtle)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4 text-center">How It Works</h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto text-center mb-12">
            Choose a mode, answer 3–5 questions, and receive targeted feedback—no scheduling required.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-app">
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-600)] flex items-center justify-center mb-4"><Users className="w-6 h-6 text-white" /></div>
              <div className="text-xl font-semibold text-[var(--text)] mb-2">Profile</div>
              <div className="text-[var(--text-muted)]">Discover your unique character strengths with Charametrics, giving you deep self-awareness and clarity.</div>
            </div>
            <div className="card-app">
              <div className="w-12 h-12 rounded-xl bg-[var(--indigo-500)] flex items-center justify-center mb-4"><Brain className="w-6 h-6 text-white" /></div>
              <div className="text-xl font-semibold text-[var(--text)] mb-2">Tailored AI Coach</div>
              <div className="text-[var(--text-muted)]">Get matched with an AI-powered communication coach that understands your strengths and helps you grow where it matters most.</div>
            </div>
            <div className="card-app">
              <div className="w-12 h-12 rounded-xl bg-[var(--success)] flex items-center justify-center mb-4"><Target className="w-6 h-6 text-white" /></div>
              <div className="text-xl font-semibold text-[var(--text)] mb-2">Real-World Success</div>
              <div className="text-[var(--text-muted)]">Practice in safe, guided scenarios and bring those skills into real conversations—unlocking opportunities that align with your values and goals.</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Omthentic AI</h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <p><span className="font-semibold">Our Mission:</span> Our mission is to help every individual authentically express what they genuinely mean, in a way that&rsquo;s truly heard and understood—turning real self-expression into aligned opportunities for connection and growth.</p>
            <p>We&rsquo;re a purpose-built organisation that believes better conversations create a better world. By blending advanced AI with human insight, we help people navigate high-stakes moments with authenticity, confidence, and clarity.</p>
          </div>
        </div>
      </section>

      {/* Join the Pilot */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Join the Pilot</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Be one of the first to experience Omthentic AI through our Medical Entrance Interview Pilot Program.</p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 mt-1 text-emerald-500" /> Free personalised AI coaching based on your character strengths.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 mt-1 text-emerald-500" /> Practical, real-world tools for communicating authentically under pressure.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 mt-1 text-emerald-500" /> Early access to our platform and direct influence on its development.</li>
            </ul>
            <Link href="/onboarding" className="button-primary inline-flex items-center gap-2">
              Start Practicing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl p-5 bg-gradient-to-br from-[#2D6FFF]/10 via-[#19B9D0]/10 to-[#12D6C0]/10">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Coach Intro</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Your AI Coach</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Built around your Charametrics profile</div>
              </div>
              <div className="rounded-xl p-5 bg-gray-50 dark:bg-gray-800">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Practice</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Guided Scenarios</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Safe spaces to try hard conversations</div>
              </div>
              <div className="rounded-xl p-5 bg-gray-50 dark:bg-gray-800">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Feedback</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Clear, Actionable</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">From intent to delivery</div>
              </div>
              <div className="rounded-xl p-5 bg-gradient-to-br from-[#2D6FFF]/10 via-[#19B9D0]/10 to-[#12D6C0]/10">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Outcomes</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Aligned Opportunities</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Confidence for what matters</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">“When you speak your truth, the right opportunities listen.”</blockquote>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Join Omthentic AI and discover what&rsquo;s possible when you communicate authentically.</p>
          <Link href="/onboarding" className="button-primary inline-flex items-center gap-2">
            Start Practicing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}
