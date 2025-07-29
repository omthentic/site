'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, AlertTriangle, Target, TrendingUp } from 'lucide-react';

const PainPromise = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Communication Anxiety',
      description: 'Feeling nervous and uncertain during important conversations',
    },
    {
      icon: Target,
      title: 'Missed Opportunities',
      description: 'Lost job offers and career growth due to poor interview performance',
    },
    {
      icon: TrendingUp,
      title: 'Inconsistent Performance',
      description: 'Great ideas but struggling to articulate them clearly and confidently',
    },
  ];

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control video playback
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Pain Points */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <motion.h2
                className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Stop letting fear hold you back
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Transform your biggest communication challenges into your greatest strengths
              </motion.p>
            </div>

            <div className="space-y-6">
              {painPoints.map((pain, index) => (
                                  <motion.div
                    key={pain.title}
                    className="group flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl glow-subtle cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/30 transition-colors duration-300">
                      <pain.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {pain.title}
                      </h3>
                      <p className="text-gray-700">
                        {pain.description}
                      </p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Product Mock + Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
                        {/* Main Product Interface */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl glow-primary border border-gray-200/50 dark:border-gray-700/50 p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="font-semibold text-gray-800">Practice Session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-700">Live Feedback</span>
                  </div>
              </div>

              {/* Video Mock */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-6 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
                    onClick={handlePlayToggle}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-primary" />
                    ) : (
                      <Play className="w-6 h-6 text-primary ml-1" />
                    )}
                  </motion.button>
                </div>
                
                {/* Captions */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 rounded-lg p-3">
                    <p className="text-white text-sm">
                      &ldquo;Tell me about a challenging situation you&apos;ve handled...&rdquo;
                    </p>
                  </div>
                </div>

                {/* Audio Waveform */}
                <div className="absolute top-4 left-4 flex items-center space-x-1">
                  <Volume2 className="w-4 h-4 text-white" />
                  <div className="flex items-center space-x-1">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-accent rounded-full"
                        style={{ height: Math.random() * 20 + 10 }}
                        animate={{
                          height: [10, Math.random() * 20 + 10, 10],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Real-time Feedback */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">Real-time Analysis</span>
                  <span className="text-sm text-primary font-semibold">85% Confidence</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-300">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">12</div>
                    <div className="text-xs text-green-800 dark:text-green-300">Clear Points</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors duration-300">
                    <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">3</div>
                    <div className="text-xs text-yellow-800 dark:text-yellow-300">Filler Words</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">Good</div>
                    <div className="text-xs text-blue-800 dark:text-blue-300">Pace</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPromise; 