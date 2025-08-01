'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, User, Repeat } from 'lucide-react';
import { copy } from '../lib/copy';

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-heading mb-6">
            {copy.features.heading}
          </h2>
          <p className="text-xl text-secondary-body max-w-3xl mx-auto leading-relaxed">
            {copy.features.subheading}
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {copy.features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={feature.title}
                className="bg-card rounded-lg p-8 text-center hover:shadow-hover transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                tabIndex={0}
                role="article"
                aria-label={feature.title}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center mb-6 mx-auto shadow-card group-hover:shadow-hover transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-heading mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-secondary-body leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-accent rounded-full mx-auto" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-card hover:shadow-hover transition-all duration-300 focus-ring"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Try all features free"
          >
            Try All Features Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;