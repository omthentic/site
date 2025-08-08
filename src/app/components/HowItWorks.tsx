'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Eye, Repeat, Play, ChevronRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'record',
      number: '01',
      title: 'Record',
      subtitle: 'Practice Your Response',
      description: 'Choose from hundreds of interview questions or practice scenarios. Record your response in a natural, pressure-free environment.',
      icon: Mic,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Real-time audio capture',
        'Video recording optional',
        'Unlimited practice sessions',
        'Question bank with 500+ scenarios'
      ],
      mockup: <RecordMockup />
    },
    {
      id: 'review',
      number: '02',
      title: 'Review',
      subtitle: 'Get Instant Analysis',
      description: 'Our AI analyzes your response for clarity, confidence, pace, and communication effectiveness. See detailed insights immediately.',
      icon: Eye,
      color: 'from-purple-500 to-purple-600',
      features: [
        'AI-powered speech analysis',
        'Confidence scoring',
        'Filler word detection',
        'Pace and tone insights'
      ],
      mockup: <ReviewMockup />
    },
    {
      id: 'refine',
      number: '03',
      title: 'Refine',
      subtitle: 'Improve & Perfect',
      description: 'Get personalized recommendations and coaching tips. Practice again with improved techniques until you master your communication.',
      icon: Repeat,
      color: 'from-green-500 to-green-600',
      features: [
        'Personalized improvement tips',
        'Progress tracking',
        'Performance comparisons',
        'Achievement milestones'
      ],
      mockup: <RefineMockup />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Master communication in{' '}
            <span className="text-gradient">three simple steps</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven methodology helps you build confidence through practice, 
            analysis, and continuous improvement.
          </p>
        </motion.div>

        {/* Step Navigation */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.button
                  className={`group flex items-center space-x-4 p-6 rounded-xl transition-all duration-300 focus-ring ${
                  activeStep === index
                    ? 'bg-card dark:bg-gray-800 glow-primary border-2 border-primary/20 dark:border-primary/40'
                    : 'bg-card/50 dark:bg-gray-800/50 hover:bg-card dark:hover:bg-gray-800 glow-subtle'
                }`}
                  onClick={() => setActiveStep(index)}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  aria-label={`Step ${step.number}: ${step.title} - ${step.subtitle}`}
                  aria-pressed={activeStep === index}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{step.number}</div>
                    <div className="text-xl font-bold text-gray-800 dark:text-gray-100">{step.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{step.subtitle}</div>
                  </div>
                </motion.button>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Column - Details */}
            <div className="space-y-6">
              <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="space-y-3">
                {steps[activeStep].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold glow-primary flex items-center space-x-3 group focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Try step ${steps[activeStep].number}: ${steps[activeStep].title}`}
              >
                <span>Try This Step</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>

            {/* Right Column - Mockup */}
            <div className="order-first lg:order-last">
              {steps[activeStep].mockup}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Record Step Mockup
const RecordMockup = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="bg-card dark:bg-gray-800 rounded-2xl glow-primary border border-gray-200/50 dark:border-gray-700/50 p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Practice Session</h4>
          <div className="text-sm text-gray-500 dark:text-gray-400">Question 1 of 5</div>
        </div>

        {/* Question */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300">
          <h5 className="text-blue-900 dark:text-blue-200 font-semibold mb-2">Interview Question</h5>
          <p className="text-blue-800 dark:text-blue-300">
            &ldquo;Tell me about a time when you had to overcome a significant challenge at work. 
            How did you approach it and what was the outcome?&rdquo;
          </p>
        </div>

        {/* Recording Interface */}
        <div className="text-center space-y-4">
          <motion.button
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 focus-ring ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 glow-accent'
                : 'bg-gradient-primary glow-primary'
            }`}
            onClick={() => setIsRecording(!isRecording)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isRecording ? 'Stop recording' : 'Start recording'}
          >
            {isRecording ? (
              <div className="w-6 h-6 bg-foreground rounded-sm" />
            ) : (
              <Mic className="w-8 h-8 text-white" />
            )}
          </motion.button>
          
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {isRecording ? 'Recording...' : 'Ready to Record'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {isRecording ? '00:23' : 'Click to start'}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between text-sm text-gray-400 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
          <span>Attempts: 1</span>
          <span>Best Score: --</span>
          <span>Time Limit: 2 min</span>
        </div>
      </div>
    </div>
  );
};

// Review Step Mockup
const ReviewMockup = () => {
  return (
    <div className="bg-card dark:bg-gray-800 rounded-2xl glow-primary border border-gray-200/50 dark:border-gray-700/50 p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Analysis Results</h4>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Analysis Complete</span>
          </div>
        </div>

        {/* Overall Score */}
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl glow-subtle cursor-pointer tabular-nums">
          <div className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-2">85</div>
          <div className="text-purple-600 dark:text-purple-400 font-medium">Overall Score</div>
          <div className="text-sm text-purple-500 dark:text-purple-400 mt-1">Great improvement!</div>
        </div>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-lg p-4 text-center glow-subtle cursor-pointer tabular-nums">
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">92</div>
            <div className="text-sm text-green-700 dark:text-green-400">Clarity</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4 text-center glow-subtle cursor-pointer tabular-nums">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">78</div>
            <div className="text-sm text-blue-700 dark:text-blue-400">Confidence</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-4 text-center glow-subtle cursor-pointer tabular-nums">
            <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">5</div>
            <div className="text-sm text-yellow-700 dark:text-yellow-400">Filler Words</div>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/30 rounded-lg p-4 text-center glow-subtle cursor-pointer tabular-nums">
            <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Good</div>
            <div className="text-sm text-indigo-700 dark:text-indigo-400">Pace</div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors duration-300">
          <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Insights</h5>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>✅ Strong opening with clear examples</li>
            <li>⚠️ Consider reducing &ldquo;um&rdquo; usage</li>
            <li>✅ Good use of STAR method</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Refine Step Mockup
const RefineMockup = () => {
  return (
    <div className="bg-card dark:bg-gray-800 rounded-2xl glow-primary border border-gray-200/50 dark:border-gray-700/50 p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Improvement Plan</h4>
          <div className="text-sm text-gray-500 dark:text-gray-400">Personalized for you</div>
        </div>

        {/* Progress Comparison */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-lg p-6 glow-subtle cursor-pointer tabular-nums">
          <h5 className="text-green-900 dark:text-green-200 font-semibold mb-4">Your Progress</h5>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">67</div>
              <div className="text-sm text-green-700 dark:text-green-400">First Attempt</div>
            </div>
            <ChevronRight className="w-6 h-6 text-green-500 dark:text-green-400" />
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">85</div>
              <div className="text-sm text-green-700 dark:text-green-400">Latest Score</div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-3">
          <h5 className="font-semibold text-gray-800 dark:text-gray-100">Recommended Actions</h5>
          
          <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-lg glow-subtle cursor-pointer">
            <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-blue-900 dark:text-blue-200">Practice Power Pauses</div>
              <div className="text-xs text-blue-800 dark:text-blue-300">Replace filler words with strategic pauses</div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/30 rounded-lg glow-subtle cursor-pointer">
            <Play className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-yellow-900 dark:text-yellow-200">Watch Example Response</div>
              <div className="text-xs text-yellow-800 dark:text-yellow-300">See how top performers handle this question</div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/30 rounded-lg glow-subtle cursor-pointer">
            <Repeat className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-purple-900 dark:text-purple-200">Practice Again</div>
              <div className="text-xs text-purple-800 dark:text-purple-300">Try once more with these improvements</div>
            </div>
          </div>
        </div>

        {/* Achievement */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-4 text-center glow-accent cursor-pointer">
          <div className="text-sm font-medium">🎉 Achievement Unlocked!</div>
          <div className="text-xs opacity-90">Consistent Improvement Streak</div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 