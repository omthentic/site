'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Target, Sparkles } from 'lucide-react';
import { copy } from '../lib/copy';
import { 
  fadeInUpScale, 
  staggerContainer,
  buttonParticle,
  floatingElement,
  getAnimation 
} from '../lib/animations';

const FooterCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Generate particles on button hover
  const generateParticles = () => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }));
    setParticles(newParticles);
  };

  const clearParticles = () => {
    setParticles([]);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Animated overlay gradients */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-accent-900/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 200%',
            animationPlayState: 'var(--animation-play-state, running)'
          }}
        />
        
        {/* Animated mesh gradient */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(0, 82, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(18, 212, 160, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(0, 82, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(18, 212, 160, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(0, 82, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(18, 212, 160, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            animationPlayState: 'var(--animation-play-state, running)'
          }}
        />
      </div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-primary-400 rounded-full blur-2xl"
          variants={floatingElement}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-48 h-48 bg-accent-400 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            animationPlayState: 'var(--animation-play-state, running)'
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-300 rounded-full blur-xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            animationPlayState: 'var(--animation-play-state, running)'
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-accent-300 rounded-full blur-2xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            animationPlayState: 'var(--animation-play-state, running)'
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Micro-badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 text-accent-300 font-medium text-sm mb-8"
          variants={getAnimation(fadeInUpScale)}
        >
          <Users className="w-4 h-4 mr-2" />
          {copy.footerCTA.badge}
        </motion.div>

        {/* Dual-tone heading */}
        <motion.h2
          className="text-h1 mb-6 leading-tight text-white"
          variants={getAnimation(fadeInUpScale)}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          }}
        >
          {copy.footerCTA.headline}
        </motion.h2>

        {/* Vision metric subtitle */}
        <motion.div
          className="mb-12"
          variants={getAnimation(fadeInUpScale)}
        >
          <p className="text-body-lg text-gray-300 mb-6 leading-relaxed">
            {copy.footerCTA.subheading}
          </p>
          
          {/* Vision metric highlight with enhanced animation */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 font-semibold backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(0, 82, 255, 0.3)',
              borderColor: 'rgba(0, 82, 255, 0.5)',
            }}
            transition={{ duration: 0.3 }}
          >
            <Target className="w-5 h-5 mr-2" />
            {copy.vision.metric}
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Button with Particle Effects */}
        <motion.div
          className="mb-12 relative"
          variants={getAnimation(fadeInUpScale)}
        >
          <motion.button
            className="relative bg-gradient-primary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 flex items-center space-x-3 group mx-auto focus-ring overflow-hidden"
            variants={buttonParticle}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => {
              setIsHovered(true);
              generateParticles();
            }}
            onHoverEnd={() => {
              setIsHovered(false);
              clearParticles();
            }}
            aria-label={copy.footerCTA.cta}
          >
            {/* Button content */}
            <span className="relative z-10">{copy.footerCTA.cta}</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl opacity-0"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Particle effects */}
            <AnimatePresence>
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-2 h-2 bg-accent-300 rounded-full"
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: particle.x,
                    y: particle.y,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </AnimatePresence>

            {/* Sparkle effects */}
            <AnimatePresence>
              {isHovered && (
                <>
                  <motion.div
                    className="absolute top-2 right-4 text-accent-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-2 left-4 text-accent-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      rotate: [0, -180, -360],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                  >
                    <Sparkles className="w-3 h-3" />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Enhanced Trust indicators with delayed animation */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm"
          variants={getAnimation(fadeInUpScale)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold"
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {String.fromCharCode(64 + i)}
                </motion.div>
              ))}
            </div>
            <span>{copy.stats.candidatesCoached} students joined this month</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.svg 
                  key={i} 
                  className="w-4 h-4 text-accent-400 fill-current" 
                  viewBox="0 0 20 20"
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <span>4.9/5 rating (2,847 reviews)</span>
          </motion.div>
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-8 w-6 h-6 bg-accent-400/30 rounded-full blur-sm"
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
          className="absolute top-1/3 right-12 w-4 h-4 bg-primary-300/30 rounded-full blur-sm"
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
      </motion.div>
    </section>
  );
};

export default FooterCTA;