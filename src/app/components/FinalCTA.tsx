'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Play } from 'lucide-react';

const FinalCTA = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const benefits = [
    'Start practicing immediately',
    'No credit card required',
    'Access to 500+ practice scenarios',
    'Instant AI feedback and coaching'
  ];

  const confettiPieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: ['#0052FF', '#6B5CFF', '#FFCC00', '#FF6B6B', '#4ECDC4'][i % 5],
    delay: Math.random() * 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-card rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-card rounded-full blur-xl" />
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-accent rounded-full blur-2xl" />
      </div>

      {/* Confetti Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {showConfetti && confettiPieces.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: piece.color,
              left: `${piece.x}%`,
              top: '20%',
            }}
            initial={{ y: 0, opacity: 0, rotate: 0, scale: 0 }}
            animate={{ 
              y: 600, 
              opacity: [0, 1, 1, 0], 
              rotate: 360, 
              scale: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: 2, 
              delay: piece.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/20 backdrop-blur-sm border border-foreground/30 text-white font-medium text-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Join 10,000+ confident communicators
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to speak with
          <br />
          <span className="relative">
            confidence?
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Start your free practice session now and experience the difference 
          AI-powered coaching can make in just minutes.
        </motion.p>

        {/* Benefits */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              className="flex items-center space-x-3 text-white/90"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm sm:text-base">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href={(process.env.NEXT_PUBLIC_APP_URL || 'https://app.omthentic.com') + '/sign-up'}
            className="bg-card text-foreground px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 group w-full sm:w-auto focus-ring"
            aria-label="Start practicing for free"
          >
            <span>Start Practicing Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          
          <motion.button
            className="bg-foreground/10 backdrop-blur-sm border-2 border-foreground/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-foreground/20 transition-all duration-300 flex items-center space-x-3 group w-full sm:w-auto focus-ring"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Watch 2-minute demo video"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Watch 2-Min Demo</span>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>10,000+ users this month</span>
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
        />
        <motion.div
          className="absolute top-1/3 right-12 w-4 h-4 bg-foreground/20 rounded-full blur-sm"
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
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-accent/20 rounded-full blur-sm"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
};

export default FinalCTA; 