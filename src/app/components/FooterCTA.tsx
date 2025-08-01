'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target } from 'lucide-react';
import { copy } from '../lib/copy';

const FooterCTA = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-accent rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Micro-badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent font-medium text-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Users className="w-4 h-4 mr-2" />
          {copy.footerCTA.badge}
        </motion.div>

        {/* Dual-tone heading */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-white">
            {copy.footerCTA.headline}
          </span>
        </motion.h2>

        {/* Vision metric subtitle */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 leading-relaxed">
            {copy.footerCTA.subheading}
          </p>
          
          {/* Vision metric highlight */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold">
            <Target className="w-5 h-5 mr-2" />
            {copy.vision.metric}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-primary text-white px-10 py-5 rounded-lg font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 group mx-auto focus-ring"
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              boxShadow: "0 20px 40px rgba(0, 82, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={copy.footerCTA.cta}
          >
            <span>{copy.footerCTA.cta}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>{copy.stats.candidatesCoached} students joined this month</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9/5 rating (2,847 reviews)</span>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-8 w-6 h-6 bg-accent/30 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
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
          className="absolute top-1/3 right-12 w-4 h-4 bg-primary/30 rounded-full blur-sm"
          animate={{
            y: [0, 25, 0],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2],
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
      </div>
    </section>
  );
};

export default FooterCTA;