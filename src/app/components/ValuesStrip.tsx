'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Lightbulb } from 'lucide-react';
import { copy } from '../lib/copy';

const ValuesStrip = () => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-heading mb-4">
            Our Core Values
          </h2>
          <p className="text-secondary-body max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {copy.coreValues.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            const colorClass = colorMap[value.name as keyof typeof colorMap];
            
            return (
              <motion.div
                key={value.name}
                className="group text-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredValue(value.name)}
                onHoverEnd={() => setHoveredValue(null)}
                whileHover={{ y: -4 }}
                tabIndex={0}
                role="article"
                aria-label={`${value.name}: ${value.description}`}
              >
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-lg flex items-center justify-center mb-4 mx-auto shadow-card group-hover:shadow-hover transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value Name */}
                <h3 className="text-xl font-bold text-primary-heading mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.name}
                </h3>

                {/* Description */}
                <p className="text-secondary-body text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  className="mt-4 h-1 bg-accent rounded-full mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredValue === value.name ? '2rem' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Situational Values - Badges */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-primary-heading mb-2">
              Situational Values
            </h3>
            <p className="text-sm text-secondary-body">
              Hover over each value to learn more
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {copy.situationalValues.map((value, index) => (
              <motion.div
                key={value.name}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-full text-accent font-medium text-sm transition-all duration-300 cursor-pointer">
                  {value.name}
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {value.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesStrip;