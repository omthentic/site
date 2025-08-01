'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { copy } from '../lib/copy';

const CredibilityBand = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % copy.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % copy.testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + copy.testimonials.length) % copy.testimonials.length);
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary-body text-sm font-medium mb-8 tracking-wide uppercase">
            Trusted by leading medical schools
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex flex-col items-center space-y-2 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                tabIndex={0}
                role="img"
                aria-label={partner.name}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300`}>
                  <span className="text-white font-bold text-sm">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-secondary-body text-xs font-medium text-center">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-heading mb-4">
              Stories of Growth & Confidence
            </h2>
            <p className="text-secondary-body max-w-2xl mx-auto">
              Real students sharing how Articulate transformed their interview experience
            </p>
          </div>

          <div className="relative bg-card rounded-2xl p-8 lg:p-12 shadow-card">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-4xl text-primary/20">
              <Quote className="w-8 h-8" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="text-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Testimonial Quote */}
                <blockquote className="text-xl lg:text-2xl text-primary-heading font-medium leading-relaxed mb-8">
                  "{copy.testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-card">
                      {copy.testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-primary-heading">
                        {copy.testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-secondary-body text-sm">
                        {copy.testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-secondary-body text-xs">
                        {copy.testimonials[currentTestimonial].university}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Badge */}
                  <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm">
                    {copy.testimonials[currentTestimonial].improvement}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 focus-ring"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-secondary-body" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {copy.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus-ring ${
                      index === currentTestimonial
                        ? 'bg-primary w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 focus-ring"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-secondary-body" />
              </button>
            </div>

            {/* Auto-play indicator */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-xs text-secondary-body hover:text-primary transition-colors duration-300 focus-ring"
                aria-label={isAutoPlaying ? "Pause auto-advance" : "Resume auto-advance"}
              >
                {isAutoPlaying ? "⏸ Pause" : "▶ Play"} auto-advance
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilityBand;