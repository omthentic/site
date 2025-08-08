'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Layers, Zap, Users, Wand2, Smartphone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAnimation, fadeInUpScale, fadeInUp, staggerContainer } from '../lib/animations';
import FeatureExperience from '../components/FeatureExperience';
import TemplatesExperience from '../components/TemplatesExperience';

const widgetCards = [
  { icon: Layers, title: 'Blocks', desc: 'Compose with polished, interactive building blocks.' },
  { icon: Zap, title: 'Motion', desc: 'Delightful micro‑interactions out of the box.' },
  { icon: Users, title: 'Collaboration', desc: 'Work together in real‑time with presence.' },
  { icon: Wand2, title: 'AI Assist', desc: 'Generate, remix and refine with an AI coach.' },
];

export default function Revamp() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden bg-background-primary">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#widgets" className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring">
              Start free <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="btn-secondary bg-card rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring text-white border-white/50">
              <Play className="w-5 h-5" /> Watch demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* FEATURE EXPERIENCE */}
      <section id="widgets" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-h3 text-primary-heading mb-3">Experience the flow</h2>
            <p className="text-body text-secondary-body">Try the practice → feedback → coaching loop.</p>
          </div>
          <FeatureExperience />
        </div>
      </section>

      {/* TEMPLATES EXPERIENCE */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-h3">Start closer to the finish line</h2>
            <p className="text-body text-secondary-body">Templates tuned by coaches and verified by outcomes.</p>
          </div>
          <TemplatesExperience />
        </div>
      </section>

      {/* MOBILE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 pill mb-4"><Smartphone className="w-4 h-4"/> Present anywhere</div>
          <h2 className="text-h3 mb-3">Made for every screen</h2>
          <p className="text-body text-secondary-body max-w-2xl mx-auto">Responsive, fast and accessible—so you can practice on the go.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
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


