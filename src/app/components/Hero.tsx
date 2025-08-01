'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { copy } from '../lib/copy';
import { 
  fadeInUpScale, 
  staggerContainer, 
  hoverGlow, 
  circularFloat, 
  figureEight, 
  floatingElement,
  getAnimation 
} from '../lib/animations';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-primary">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-60" />
      
      {/* Enhanced Background Pattern with Complex Animations */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl"
          variants={getAnimation(circularFloat)}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl"
          variants={getAnimation(figureEight)}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary rounded-full blur-3xl opacity-20"
          variants={getAnimation(floatingElement)}
          initial="initial"
          animate="animate"
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="text-center">
          {/* Badge with enhanced animation */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-600 font-medium text-sm mb-8 focus-ring"
            variants={getAnimation(fadeInUpScale)}
            tabIndex={0}
            role="banner"
            aria-label={copy.hero.badge}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary-500 rounded-full mr-2"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {copy.hero.badge}
          </motion.div>

          {/* Main Headline with enhanced typography and animation */}
          <motion.h1
            className="text-h1 mb-6 leading-tight"
            variants={getAnimation(fadeInUpScale)}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {copy.hero.headline}
            </motion.span>
          </motion.h1>

          {/* Purpose Statement with enhanced animation */}
          <motion.p
            className="text-body-lg mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={getAnimation(fadeInUpScale)}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              filter: 'blur(0px)',
              transition: { 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
          >
            {copy.hero.subheading}
          </motion.p>

          {/* CTA Buttons with enhanced hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={getAnimation(fadeInUpScale)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
          >
            <motion.button
              className="bg-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-card transition-all duration-300 flex items-center space-x-3 group w-full sm:w-auto focus-ring"
              variants={hoverGlow}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              aria-label={copy.hero.primaryCTA}
            >
              <span>{copy.hero.primaryCTA}</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button
              className="bg-card border-2 border-gray-200 hover:border-primary-300 text-primary-heading px-8 py-4 rounded-2xl font-semibold text-lg shadow-card transition-all duration-300 flex items-center space-x-3 group w-full sm:w-auto focus-ring"
              variants={hoverGlow}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              aria-label={copy.hero.secondaryCTA}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-5 h-5 fill-current" />
              </motion.div>
              <span>{copy.hero.secondaryCTA}</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Floating Elements with Complex Animations */}
      <motion.div
        className="absolute top-1/4 left-8 w-6 h-6 bg-accent-400 rounded-full opacity-60"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-12 w-8 h-8 bg-primary-300 rounded-full opacity-50"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 0.7, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-accent-300 rounded-full opacity-40"
        animate={{
          y: [0, -25, 0],
          x: [0, 25, 0],
          scale: [1, 1.5, 1],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />

      {/* Additional floating elements for more dynamic feel */}
      <motion.div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary-200 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-8 w-5 h-5 bg-accent-200 rounded-full opacity-35"
        animate={{
          y: [0, 35, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          animationPlayState: 'var(--animation-play-state, running)'
        }}
      />
    </section>
  );
};

export default Hero;