'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Smartphone, Star, Brain, Target, Mic } from 'lucide-react';
import NumberStat from './blocks/NumberStat';
import TrendCard from './blocks/TrendCard';
import PeopleRow from './blocks/PeopleRow';
import TimelineStep from './blocks/TimelineStep';
import WaitlistModal from './WaitlistModal';
import FeatureExperience from './FeatureExperience';
import TemplatesExperience from './TemplatesExperience';
import Header from './Header';
import Footer from './Footer';
import { getAnimation, fadeInUpScale, fadeInUp, staggerContainer } from '../lib/animations';

// Interactive block experience mirrored from revamp page

const templates = [
  { title: 'Interview Pitch', tag: 'Popular' },
  { title: 'Mock Panel', tag: 'New' },
  { title: 'STAR Answer', tag: 'Guided' },
  { title: 'Debrief Review', tag: 'Coach‑verified' },
];

const painPoints = [
  {
    icon: Brain,
    title: 'Interview Anxiety',
    desc: 'Nerves can derail even the most prepared candidate. Learn how to stay calm, think clearly, and present your best self.',
  },
  {
    icon: Target,
    title: 'Missed Opportunities',
    desc: 'Many talented students miss out on offers due to poor communication skills — even when they know the answers.',
  },
  {
    icon: Mic,
    title: 'Unpolished Delivery',
    desc: 'You have great ideas — but in a high-pressure interview, clear, confident articulation makes all the difference.',
  },
];

export default function RevampHome() {
  const [open, setOpen] = React.useState(false);
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
            Ace Your Medical School Interview with Confidence
          </h1>
          <p className="text-body-lg text-gray-200 text-contrast-glow max-w-2xl mx-auto mb-10">
            Personalised, AI-powered coaching that transforms your interview performance and gives you the competitive edge you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href={(process.env.NEXT_PUBLIC_APP_URL || 'https://app.omthentic.com') + '/sign-up'} className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring">
              Start Preparing Free <ArrowRight className="w-5 h-5" />
            </a>
            <a href={(process.env.NEXT_PUBLIC_APP_URL || 'https://app.omthentic.com') + '/sign-in'} className="btn-secondary bg-card rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring text-white border-white/50">
              <Play className="w-5 h-5" /> Sign in
            </a>
          </div>

          {/* Numbers strip */}
          <div className="mt-10 flex items-center justify-center gap-6 text-sm tabular-nums text-primary-heading dark:text-white/90">
            <div>10,000+ joined this month</div>
            <div className="hidden sm:block opacity-50">•</div>
            <div className="flex items-center gap-1"><Star className="w-4 h-4"/> 4.9/5 rating (2,847)</div>
          </div>
        </motion.div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-h3 text-primary-heading mb-3">Stop letting uncertainty hold you back</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {painPoints.map((item, idx) => (
              <motion.div
                key={item.title}
                className="group relative rounded-2xl border border-subtle bg-card/60 backdrop-blur-sm p-5 sm:p-6 overflow-hidden"
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(1200px 200px at 50% -10%, rgba(255,255,255,0.08), transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white mb-4">
                    {React.createElement(item.icon, { className: 'w-5 h-5' })}
                  </div>
                  <h3 className="text-h6 text-primary-heading mb-2">{item.title}</h3>
                  <p className="text-secondary-body text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE EXPERIENCE */}
      <section id="widgets" className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-h3 text-primary-heading mb-3">Experience the flow</h2>
            <p className="text-body text-secondary-body">Try the practice → feedback → coaching loop.</p>
          </div>
          <FeatureExperience />
        </div>
      </section>

      {/* TEMPLATES EXPERIENCE */}
      <section className="py-14 sm:py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-h3 mb-3">Start closer to the finish line</h2>
            <p className="text-body text-secondary-body">Templates tuned by coaches and verified by outcomes.</p>
          </div>
          <TemplatesExperience />
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
            <NumberStat countTo={10000} suffix="+" label="joined this month" />
            <NumberStat value="4.9/5" label="average rating" />
            <NumberStat value="85%" label="report higher confidence" />
            <NumberStat countTo={1000000} suffix="" label="goal by 2030" />
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
          <a href={(process.env.NEXT_PUBLIC_APP_URL || 'https://app.omthentic.com') + '/sign-up'} className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring">Try for free <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>

      <Footer />
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}


