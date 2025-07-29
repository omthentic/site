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
    <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="text-3xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Stop letting fear hold you back
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
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
                  className="flex items-start space-x-4 p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl border border-gray-700/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shadow-md">
                    <pain.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {pain.title}
                    </h3>
                    <p className="text-gray-300 font-medium">
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
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200/50">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="font-semibold text-gray-900">Practice Session</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-700 font-medium">Live Feedback</span>
                </div>
              </div>

              {/* Video Mock */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-6 aspect-video border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl"
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
                  <div className="bg-black/90 rounded-lg p-3 border border-gray-800">
                    <p className="text-white text-sm font-medium">
                      &ldquo;Tell me about a challenging situation you&apos;ve handled...&rdquo;
                    </p>
                  </div>
                </div>

                {/* Audio Waveform */}
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-black/60 px-3 py-2 rounded-lg">
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
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-semibold text-gray-800">Real-time Analysis</span>
                  <span className="text-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">85% Confidence</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-lg font-bold text-green-600">12</div>
                    <div className="text-xs text-green-700 font-medium">Clear Points</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="text-lg font-bold text-yellow-600">3</div>
                    <div className="text-xs text-yellow-700 font-medium">Filler Words</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-lg font-bold text-blue-600">Good</div>
                    <div className="text-xs text-blue-700 font-medium">Pace</div>
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