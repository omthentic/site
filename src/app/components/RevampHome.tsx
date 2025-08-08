'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Layers, Zap, Users, Wand2, Smartphone, Star } from 'lucide-react';
import NumberStat from './blocks/NumberStat';
import TrendCard from './blocks/TrendCard';
import PeopleRow from './blocks/PeopleRow';
import TimelineStep from './blocks/TimelineStep';
import Header from './Header';
import Footer from './Footer';
import { getAnimation, fadeInUpScale, fadeInUp, staggerContainer } from '../lib/animations';

const widgetCards = [
  { icon: Layers, title: 'Blocks', desc: 'Compose with polished, interactive building blocks.' },
  { icon: Zap, title: 'Motion', desc: 'Delightful micro‑interactions out of the box.' },
  { icon: Users, title: 'Collaboration', desc: 'Work together in real‑time with presence.' },
  { icon: Wand2, title: 'AI Assist', desc: 'Generate, remix and refine with an AI coach.' },
];

const templates = [
  { title: 'Interview Pitch', tag: 'Popular' },
  { title: 'Mock Panel', tag: 'New' },
  { title: 'STAR Answer', tag: 'Guided' },
  { title: 'Debrief Review', tag: 'Coach‑verified' },
];

export default function RevampHome() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[76vh] sm:min-h-[86vh] flex items-center justify-center overflow-hidden bg-background-primary">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center"
          variants={getAnimation(fadeInUpScale)}
          initial="initial"
          animate="animate"
        >
          <motion.div className="inline-flex items-center gap-2 pill mb-6" variants={getAnimation(fadeInUp)}>
            <Sparkles className="w-4 h-4" />
            Omthentic — future of practice
          </motion.div>

          <h1 className="text-h1 text-white text-contrast-glow mb-6" style={{ fontSize: 'clamp(2.75rem, 7.5vw, 4.25rem)' }}>
            Practice that feels effortless.
          </h1>
          <p className="text-body-lg text-gray-200 text-contrast-glow max-w-2xl mx-auto mb-10">
            Blocks, motion and guided workflows help you turn nerves into clarity—fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="#widgets" className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring">
              Start free <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="btn-secondary bg-card rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring text-white border-white/50">
              <Play className="w-5 h-5" /> Watch demo
            </button>
          </div>

          {/* Numbers strip */}
          <div className="mt-10 flex items-center justify-center gap-6 text-white/90 text-sm tabular-nums">
            <div>10,000+ joined this month</div>
            <div className="hidden sm:block opacity-50">•</div>
            <div className="flex items-center gap-1"><Star className="w-4 h-4"/> 4.9/5 rating (2,847)</div>
          </div>
        </motion.div>
      </section>

      {/* FEATURED BLOCKS */}
      <section id="widgets" className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h3 text-primary-heading mb-3">A new, easy way to create</h2>
            <p className="text-body text-secondary-body">Beautiful outputs from drag‑and‑drop blocks.</p>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {widgetCards.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-subtle">
                <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-h5 mb-2">{title}</h3>
                <p className="text-secondary-body text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEMPLATES SHOWCASE */}
      <section className="py-14 sm:py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h3 mb-3">Start closer to the finish line</h2>
            <p className="text-body text-secondary-body">Templates tuned by coaches and verified by outcomes.</p>
          </div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {templates.map((t) => (
              <motion.div key={t.title} className="bg-card rounded-2xl p-5 border border-subtle shadow-card hover:shadow-hover transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="pill">{t.tag}</div>
                </div>
                <h3 className="text-h5 mb-1">{t.title}</h3>
                <p className="text-secondary-body text-sm">Open, customize, and practice in minutes.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 pill mb-4"><Smartphone className="w-4 h-4"/> Present anywhere</div>
          <h2 className="text-h3 mb-3">Made for every screen</h2>
          <p className="text-body text-secondary-body max-w-2xl mx-auto">Responsive, fast and accessible—so you can practice on the go.</p>
        </div>
      </section>

      {/* NUMBERS + TRENDS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <NumberStat value="10,000+" label="joined this month" />
            <NumberStat value="4.9/5" label="average rating" />
            <NumberStat value="85%" label="report higher confidence" />
            <NumberStat value="1M" label="goal by 2030" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TrendCard title="Confidence score" delta="+12%" />
            <TrendCard title="Filler words" delta="-28%" good={true} />
            <TrendCard title="Pace stability" delta="+8%" />
          </div>
        </div>
      </section>

      {/* PEOPLE + TIMELINE */}
      <section className="py-14 sm:py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-h5 mb-4">Coaches & community</h3>
            <PeopleRow people={[
              { name: 'Sarah Chen', role: 'Coach' },
              { name: 'Marcus Johnson', role: 'Mentor' },
              { name: 'Dr. Rachel Kim', role: 'Advisor' },
            ]} />
          </div>
          <div>
            <h3 className="text-h5 mb-4">How it flows</h3>
            <TimelineStep items={[
              { step: 'Step 01', title: 'Record', desc: 'Practice with prompts and real-time guidance.' },
              { step: 'Step 02', title: 'Review', desc: 'Get instant analysis on clarity, pace and confidence.' },
              { step: 'Step 03', title: 'Refine', desc: 'Apply tips and repeat with improved technique.' },
            ]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 text-white text-contrast-glow mb-4">Start your story</h2>
          <p className="text-body-lg text-gray-200 text-contrast-glow mb-8">Join thousands building confidence with Omthentic.</p>
          <Link href="/" className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring">Try for free <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


