'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, User, Repeat } from 'lucide-react';
import { copy } from '../lib/copy';
import { 
  fadeInUp, 
  staggerContainer, 
  hoverGlow, 
  iconRotate,
  iconPulse,
  getAnimation 
} from '../lib/animations';

const CoreFeatures = () => {
  const iconMap = {
    activity: Activity,
    user: User,
    repeat: Repeat
  };

  return (
    <section id="features" className="py-20 lg:py-32 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={getAnimation(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-h2 mb-6">
            {copy.features.heading}
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto leading-relaxed">
            {copy.features.subheading}
          </p>
        </motion.div>

        {/* Feature Grid with Staggered Animation */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {copy.features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={feature.title}
                className="bg-card rounded-2xl p-8 text-center group cursor-pointer relative overflow-hidden"
                variants={getAnimation(fadeInUp)}
                whileHover="hover"
                tabIndex={0}
                role="article"
                aria-label={feature.title}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Icon with enhanced animation */}
                <motion.div 
                  className="relative z-10 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-card group-hover:shadow-hover transition-all duration-300"
                  variants={hoverGlow}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: 'var(--shadow-hover), var(--shadow-glow)',
                  }}
                >
                  <motion.div
                    variants={iconPulse}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Title with enhanced typography */}
                <motion.h3 
                  className="text-h5 mb-4 group-hover:text-primary-600 transition-colors duration-300 relative z-10"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description with fade-in animation */}
                <motion.p 
                  className="text-body leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.description}
                </motion.p>

                {/* Hover indicator with enhanced animation */}
                <motion.div 
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                >
                  <motion.div 
                    className="w-12 h-1 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full mx-auto"
                    initial={{ scaleX: 0 }}
                    whileHover={{ 
                      scaleX: 1,
                      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                  />
                </motion.div>

                {/* Floating particles on hover */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-accent-300 rounded-full opacity-0 group-hover:opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ opacity: 0.6 }}
                />

                <motion.div
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary-300 rounded-full opacity-0 group-hover:opacity-40"
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  whileHover={{ opacity: 0.4 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA with enhanced animation */}
        <motion.div
          className="text-center mt-16"
          variants={getAnimation(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-primary text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-card transition-all duration-300 focus-ring group"
            variants={hoverGlow}
            whileHover="hover"
            whileTap="tap"
            aria-label="Try all features free"
          >
            <motion.span
              className="flex items-center space-x-2"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <span>Try All Features Free</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Activity className="w-5 h-5" />
              </motion.div>
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;