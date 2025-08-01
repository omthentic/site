'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { copy } from '../lib/copy';
import { 
  fadeInUpScale, 
  quotationMark,
  floatingElement,
  getAnimation 
} from '../lib/animations';

const WhyExist = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          variants={getAnimation(fadeInUpScale)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-h2 mb-8">
            {copy.whyExist.heading}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-body-lg leading-relaxed">
              {copy.whyExist.description}
            </p>
          </div>
        </motion.div>

        {/* Enhanced Visual Treatment */}
        <motion.div
          className="relative"
          variants={getAnimation(fadeInUpScale)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Enhanced quote-style visual treatment with prominent gradient and border */}
          <motion.div 
            className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-8 lg:p-16 border-2 border-gradient-to-r from-primary-200 to-accent-200 shadow-xl"
            style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, #ffffff 50%, var(--accent-50) 100%)',
              borderImage: 'linear-gradient(135deg, var(--primary-200), var(--accent-200)) 1',
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: 'var(--shadow-xl)',
              transition: { duration: 0.3 }
            }}
          >
            {/* Enhanced Large quotation marks with animation */}
            <motion.div 
              className="absolute top-6 left-6 text-6xl text-primary-300 font-serif leading-none"
              variants={quotationMark}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              &ldquo;
            </motion.div>
            
            <div className="relative z-10 pt-8">
              <motion.blockquote 
                className="text-h4 font-medium leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 }
                }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Opportunities aren&rsquo;t lost for lack of knowledge;
                </motion.span>
                <br />
                <motion.span 
                  className="text-primary-600 relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.8 }
                  }}
                  viewport={{ once: true }}
                >
                  they&rsquo;re lost in how we communicate it.
                  {/* Underline animation */}
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ 
                      scaleX: 1,
                      transition: { duration: 0.8, delay: 1.2 }
                    }}
                    viewport={{ once: true }}
                  />
                </motion.span>
              </motion.blockquote>
              
              {/* Enhanced accent line with gradient */}
              <motion.div 
                className="w-24 h-1.5 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full mx-auto mb-8"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ 
                  scaleX: 1, 
                  opacity: 1,
                  transition: { duration: 0.6, delay: 1.0 }
                }}
                viewport={{ once: true }}
              />
              
              <motion.p 
                className="text-body-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 1.4 }
                }}
                viewport={{ once: true }}
              >
                We turn nerves into clarity so motivated candidates can realise their potential.
              </motion.p>
            </div>

            {/* Enhanced decorative quotation mark */}
            <motion.div 
              className="absolute bottom-6 right-6 text-6xl text-accent-300 font-serif leading-none rotate-180"
              variants={quotationMark}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              &rdquo;
            </motion.div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100 to-transparent" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-accent-100 to-transparent" />
            </div>
          </motion.div>

          {/* Enhanced floating accent elements with natural animations */}
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 bg-accent-200 rounded-full blur-sm opacity-60"
            variants={floatingElement}
            initial="initial"
            animate="animate"
            style={{
              animationPlayState: 'var(--animation-play-state, running)'
            }}
          />
          
          <motion.div
            className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary-200 rounded-full blur-sm opacity-50"
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              animationPlayState: 'var(--animation-play-state, running)'
            }}
          />

          {/* Additional floating elements for more dynamic feel */}
          <motion.div
            className="absolute top-1/4 -right-4 w-6 h-6 bg-accent-300 rounded-full opacity-40"
            animate={{
              y: [0, 25, 0],
              x: [0, -10, 0],
              scale: [1, 1.3, 1],
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

          <motion.div
            className="absolute bottom-1/3 -left-4 w-8 h-8 bg-primary-300 rounded-full opacity-30"
            animate={{
              y: [0, -15, 0],
              x: [0, 20, 0],
              scale: [1, 0.8, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            style={{
              animationPlayState: 'var(--animation-play-state, running)'
            }}
          />

          {/* Sparkle effects */}
          <motion.div
            className="absolute top-8 right-1/4 w-2 h-2 bg-accent-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            style={{
              animationPlayState: 'var(--animation-play-state, running)'
            }}
          />

          <motion.div
            className="absolute bottom-12 left-1/3 w-1.5 h-1.5 bg-primary-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
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