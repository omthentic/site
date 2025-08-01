'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { copy } from '../lib/copy';

const WhyExist = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-heading mb-8">
            {copy.whyExist.heading}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-secondary-body leading-relaxed">
              {copy.whyExist.description}
            </p>
          </div>
        </motion.div>

        {/* Visual Emphasis */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Quote-style visual treatment */}
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
            {/* Large quotation mark */}
            <div className="absolute top-4 left-4 text-6xl text-primary/20 font-serif leading-none">
              "
            </div>
            
            <div className="relative z-10 pt-8">
              <blockquote className="text-2xl lg:text-3xl font-medium text-primary-heading leading-relaxed mb-6">
                Opportunities aren't lost for lack of knowledge;
                <br />
                <span className="text-primary">they're lost in how we communicate it.</span>
              </blockquote>
              
              <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
              
              <p className="text-lg text-secondary-body">
                We turn nerves into clarity so motivated candidates can realise their potential.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 text-6xl text-accent/20 font-serif leading-none rotate-180">
              "
            </div>
          </div>

          {/* Floating accent elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-accent/30 rounded-full blur-sm"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
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
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-sm"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
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
      </div>
    </section>
  );
};

export default WhyExist;