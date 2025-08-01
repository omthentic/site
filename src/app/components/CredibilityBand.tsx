'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { copy } from '../lib/copy';
import { 
  fadeInUp, 
  staggerContainer, 
  hoverEffect,
  slideTransition,
  navDot,
  badgeEntrance,
  getAnimation 
} from '../lib/animations';

const CredibilityBand = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % copy.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % copy.testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + copy.testimonials.length) % copy.testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const partners = [
    { name: 'Stanford University', logo: 'SU', color: 'from-red-500 to-red-600' },
    { name: 'Harvard University', logo: 'HU', color: 'from-blue-500 to-blue-600' },
    { name: 'Johns Hopkins', logo: 'JH', color: 'from-purple-500 to-purple-600' },
    { name: 'MIT', logo: 'MIT', color: 'from-gray-600 to-gray-700' },
    { name: 'Yale University', logo: 'YU', color: 'from-green-500 to-green-600' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By Universities */}
        <motion.div
          className="text-center mb-20"
          variants={getAnimation(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-caption mb-8 tracking-wide uppercase">
            Trusted by leading medical schools
          </p>
          
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex flex-col items-center space-y-2 cursor-pointer group"
                variants={getAnimation(fadeInUp)}
                whileHover={{ y: -4, scale: 1.05 }}
                tabIndex={0}
                role="img"
                aria-label={partner.name}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300`}
                  whileHover={{ 
                    rotate: 5,
                    boxShadow: 'var(--shadow-hover)'
                  }}
                >
                  <span className="text-white font-bold text-sm">
                    {partner.logo}
                  </span>
                </motion.div>
                <span className="text-caption text-center">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={getAnimation(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-h3 mb-4">
              Stories of Growth & Confidence
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Real students sharing how Articulate transformed their interview experience
            </p>
          </div>

          <motion.div 
            className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-card overflow-hidden"
            whileHover={{ boxShadow: 'var(--shadow-hover)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Quote Icon with enhanced animation */}
            <motion.div 
              className="absolute top-6 left-6 text-4xl text-primary-200"
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: { duration: 0.6, delay: 0.3 }
              }}
            >
              <Quote className="w-8 h-8" />
            </motion.div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                className="text-center pt-4"
                custom={direction}
                variants={slideTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Testimonial Quote */}
                <blockquote className="text-h5 font-medium leading-relaxed mb-8">
                  &ldquo;{copy.testimonials[currentTestimonial].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-card"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {copy.testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                    <div className="text-left">
                      <div className="font-semibold text-primary-heading">
                        {copy.testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-caption">
                        {copy.testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-caption-sm">
                        {copy.testimonials[currentTestimonial].university}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Badge with entrance animation */}
                  <motion.div 
                    className="px-4 py-2 bg-accent-50 border border-accent-200 rounded-full text-accent-600 font-medium text-sm"
                    variants={badgeEntrance}
                    initial="initial"
                    animate="animate"
                    key={`badge-${currentTestimonial}`}
                  >
                    {copy.testimonials[currentTestimonial].improvement}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 focus-ring group"
                whileHover={{ scale: 1.1, backgroundColor: 'var(--gray-200)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-secondary-body group-hover:text-primary-600 transition-colors duration-200" />
              </motion.button>

              {/* Enhanced Dots Indicator */}
              <div className="flex space-x-3">
                {copy.testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className="w-3 h-3 rounded-full transition-all duration-300 focus-ring"
                    variants={navDot}
                    initial="initial"
                    animate={index === currentTestimonial ? "active" : "initial"}
                    whileHover="hover"
                    style={{
                      backgroundColor: index === currentTestimonial ? 'var(--primary-500)' : 'var(--gray-300)'
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 focus-ring group"
                whileHover={{ scale: 1.1, backgroundColor: 'var(--gray-200)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-secondary-body group-hover:text-primary-600 transition-colors duration-200" />
              </motion.button>
            </div>

            {/* Enhanced Auto-play indicator */}
            <div className="text-center mt-4">
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-caption hover:text-primary-600 transition-colors duration-300 focus-ring px-2 py-1 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isAutoPlaying ? "Pause auto-advance" : "Resume auto-advance"}
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {isAutoPlaying ? "⏸ Pause" : "▶ Play"} auto-advance
                </motion.span>
              </motion.button>
            </div>

            {/* Progress indicator */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-primary-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ 
                width: isAutoPlaying ? "100%" : "0%",
                transition: { 
                  duration: isAutoPlaying ? 5 : 0.3,
                  ease: "linear"
                }
              }}
              key={`progress-${currentTestimonial}-${isAutoPlaying}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilityBand;