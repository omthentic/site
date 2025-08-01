'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Lightbulb } from 'lucide-react';
import { copy } from '../lib/copy';
import { 
  fadeInUp, 
  staggerContainer, 
  hoverGlow,
  iconPulse,
  tooltipAnimation,
  textReveal,
  getAnimation 
} from '../lib/animations';

const ValuesStrip = () => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [hoveredSituational, setHoveredSituational] = useState<string | null>(null);

  const iconMap = {
    star: Star,
    heart: Heart,
    lightbulb: Lightbulb
  };

  const colorMap = {
    Excellence: 'from-yellow-500 to-yellow-600',
    Service: 'from-red-500 to-red-600',
    Innovation: 'from-blue-500 to-blue-600'
  };

  return (
    <section className="py-16 lg:py-20 bg-card border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={getAnimation(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-h3 mb-4">
            Our Core Values
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        {/* Core Values Grid with Enhanced Interactivity */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {copy.coreValues.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            const colorClass = colorMap[value.name as keyof typeof colorMap];
            const isHovered = hoveredValue === value.name;
            
            return (
              <motion.div
                key={value.name}
                className="group text-center cursor-pointer relative overflow-hidden"
                variants={getAnimation(fadeInUp)}
                onHoverStart={() => setHoveredValue(value.name)}
                onHoverEnd={() => setHoveredValue(null)}
                whileHover={{ y: -6 }}
                tabIndex={0}
                role="article"
                aria-label={`${value.name}: ${value.description}`}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Icon Container with Complex Animation */}
                <motion.div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${colorClass} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-card group-hover:shadow-hover transition-all duration-300`}
                  variants={hoverGlow}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    boxShadow: 'var(--shadow-hover), var(--shadow-glow)',
                  }}
                  transition={{ 
                    rotate: { duration: 0.6, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                    boxShadow: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    variants={iconPulse}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Particle effects on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        <motion.div
                          className="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -20],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-400 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, 15],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                        />
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Value Name with Enhanced Animation */}
                <motion.h3 
                  className="text-h5 mb-3 group-hover:text-primary-600 transition-colors duration-300 relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {value.name}
                </motion.h3>

                {/* Description with Fade-in Animation */}
                <AnimatePresence mode="wait">
                  <motion.p 
                    className="text-body leading-relaxed relative z-10 px-4"
                    variants={textReveal}
                    initial="initial"
                    animate={isHovered ? "animate" : "initial"}
                    key={`${value.name}-${isHovered}`}
                  >
                    {value.description}
                  </motion.p>
                </AnimatePresence>

                {/* Enhanced Hover indicator */}
                <motion.div 
                  className="mt-6 h-1 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full mx-auto relative z-10"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: isHovered ? '3rem' : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Situational Values */}
        <motion.div
          className="pt-8 border-t border-gray-200/50"
          variants={getAnimation(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-h5 mb-3">
              Situational Values
            </h3>
            <p className="text-caption">
              Hover over each value to learn more
            </p>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {copy.situationalValues.map((value, index) => (
              <motion.div
                key={value.name}
                className="group relative"
                variants={getAnimation(fadeInUp)}
                onHoverStart={() => setHoveredSituational(value.name)}
                onHoverEnd={() => setHoveredSituational(null)}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div 
                  className="px-6 py-3 bg-accent-50 hover:bg-accent-100 border border-accent-200 hover:border-accent-300 rounded-full text-accent-600 font-medium text-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-card"
                  whileHover={{ 
                    boxShadow: 'var(--shadow-card)',
                    backgroundColor: 'var(--accent-100)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {value.name}
                </motion.div>

                {/* Enhanced Tooltip with Smooth Animation */}
                <AnimatePresence>
                  {hoveredSituational === value.name && (
                    <motion.div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-gray-900 text-white text-sm rounded-xl pointer-events-none whitespace-nowrap z-20 shadow-xl"
                      variants={tooltipAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {value.tooltip}
                      {/* Enhanced arrow */}
                      <motion.div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-gray-900"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: 0.1 }
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-accent-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesStrip;