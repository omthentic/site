'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { copy } from '../lib/copy';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-primary">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-60" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8 focus-ring"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            tabIndex={0}
            role="banner"
            aria-label={copy.hero.badge}
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            {copy.hero.badge}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {copy.hero.headline}
          </motion.h1>

          {/* Purpose Statement */}
          <motion.p
            className="text-xl lg:text-2xl text-secondary-body mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {copy.hero.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-card hover:shadow-hover transition-all duration-300 flex items-center space-x-3 group w-full sm:w-auto focus-ring"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={copy.hero.primaryCTA}
            >
              <span>{copy.hero.primaryCTA}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              className="bg-card border-2 border-gray-200 hover:border-primary text-primary-heading px-8 py-4 rounded-lg font-semibold text-lg shadow-card hover:shadow-hover transition-all duration-300 flex items-center space-x-3 group w-full sm:w-auto focus-ring"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(0, 82, 255, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              aria-label={copy.hero.secondaryCTA}
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{copy.hero.secondaryCTA}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements with reduced motion support */}
      <motion.div
        className="absolute top-1/4 left-8 w-4 h-4 bg-accent rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />
      <motion.div
        className="absolute top-1/3 right-12 w-6 h-6 bg-primary/40 rounded-full opacity-60"
        animate={{
          y: [0, 30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/60 rounded-full opacity-40"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />
    </section>
  );
};

export default Hero;