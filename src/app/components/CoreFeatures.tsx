'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Star, TrendingUp, Activity, MessageCircle, Zap, BarChart3 } from 'lucide-react';

const CoreFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [fillerCount, setFillerCount] = useState(0);

  // Simulate filler word detection
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeFeature === 0) {
        setFillerCount(prev => (prev + Math.random() > 0.7 ? 1 : 0));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeFeature]);

  const features = [
    {
      id: 'feedback',
      title: 'Real-time Feedback',
      subtitle: 'Instant AI Analysis',
      description: 'Get immediate feedback on your speech patterns, filler words, and pace while you practice.',
      icon: Activity,
      color: 'from-blue-500 to-blue-600',
      component: <FeedbackWidget fillerCount={fillerCount} />
    },
    {
      id: 'charametrics',
      title: 'Charametrics™ Coaching',
      subtitle: 'Strength Analysis',
      description: 'Visualize your communication strengths and get personalized coaching recommendations.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      component: <CharametricsWidget />
    },
    {
      id: 'coach',
      title: 'Human Coach Layer',
      subtitle: 'Expert Guidance',
      description: 'Connect with professional coaches for personalized feedback and advanced techniques.',
      icon: User,
      color: 'from-green-500 to-green-600',
      component: <CoachWidget />
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
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
            Three powerful tools,{' '}
            <span className="text-gradient">one confident you</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our AI-powered platform combines real-time analysis, personalized coaching, 
            and expert guidance to transform how you communicate.
          </p>
        </motion.div>

        {/* Feature Navigation */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-1/3 space-y-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-white shadow-hover border-2 border-primary/20'
                    : 'bg-gray-50 hover:bg-white hover:shadow-card'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-card`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {feature.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Feature Widget Display */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200/50 min-h-[400px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {features[activeFeature].component}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Real-time Feedback Widget
const FeedbackWidget = ({ fillerCount }: { fillerCount: number }) => {
  const [waveformData, setWaveformData] = useState(Array(20).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveformData(prev => {
        const newData = [...prev.slice(1), Math.random() * 80 + 20];
        return newData;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Live Analysis</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-700">Recording</span>
        </div>
      </div>

      {/* Audio Waveform */}
      <div className="bg-gray-900 rounded-xl p-6 mb-6">
        <div className="flex items-end justify-center space-x-1 h-20">
          {waveformData.map((height, index) => (
            <motion.div
              key={index}
              className="w-2 bg-gradient-to-t from-accent to-primary rounded-full"
              style={{ height: `${height}%` }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-700">127</div>
          <div className="text-sm text-blue-700">Words/Min</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
          <MessageCircle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-700">{fillerCount}</div>
          <div className="text-sm text-yellow-700">Filler Words</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
          <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-700">Good</div>
          <div className="text-sm text-green-700">Pace</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          <strong>💡 Tip:</strong> Try to reduce &ldquo;um&rdquo; and &ldquo;uh&rdquo; for clearer communication. 
          Take brief pauses instead of using filler words.
        </p>
      </div>
    </div>
  );
};

// Charametrics Widget
const CharametricsWidget = () => {
  const strengths = [
    { label: 'Clarity', value: 85, color: 'stroke-blue-500' },
    { label: 'Confidence', value: 72, color: 'stroke-green-500' },
    { label: 'Engagement', value: 90, color: 'stroke-purple-500' },
    { label: 'Pace', value: 68, color: 'stroke-yellow-500' },
    { label: 'Authority', value: 78, color: 'stroke-red-500' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground mb-6">Your Communication Strengths</h3>
      
      {/* Radial Chart */}
      <div className="flex justify-center mb-8">
        <div className="relative w-64 h-64">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {strengths.map((strength, index) => {
              const radius = 35 - index * 6;
              const circumference = 2 * Math.PI * radius;
              const strokeDasharray = `${(strength.value / 100) * circumference} ${circumference}`;
              
              return (
                <motion.circle
                  key={strength.label}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="transparent"
                  strokeWidth="4"
                  className={strength.color}
                  strokeDasharray={strokeDasharray}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={{ strokeDasharray }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">78</div>
              <div className="text-sm text-gray-700">Overall Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Strength Breakdown */}
      <div className="space-y-3">
        {strengths.map((strength, index) => (
          <motion.div
            key={strength.label}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="font-medium text-foreground">{strength.label}</span>
            <div className="flex items-center space-x-3">
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${strength.color.replace('stroke-', 'bg-')}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${strength.value}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-800 w-8">
                {strength.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Coach Widget
const CoachWidget = () => {
  const coaches = [
    {
      name: 'Sarah Chen',
      role: 'Executive Coach',
      rating: 4.9,
      sessions: 127,
      avatar: '/api/placeholder/80/80',
      specialty: 'Leadership Communication',
    },
    {
      name: 'Marcus Johnson',
      role: 'Interview Expert',
      rating: 4.8,
      sessions: 89,
      avatar: '/api/placeholder/80/80',
      specialty: 'Technical Interviews',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground mb-6">Connect with Expert Coaches</h3>
      
      <div className="space-y-4">
        {coaches.map((coach, index) => (
          <motion.div
            key={coach.name}
            className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-card transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                {coach.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">{coach.name}</h4>
                <p className="text-gray-700 text-sm">{coach.role}</p>
                <p className="text-gray-600 text-xs">{coach.specialty}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold">{coach.rating}</span>
              </div>
              <p className="text-xs text-gray-600">{coach.sessions} sessions</p>
              <motion.button
                className="mt-2 px-4 py-2 bg-gradient-primary text-white text-xs rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Session
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-800 text-sm">
          <strong>✨ Premium Feature:</strong> Get personalized 1-on-1 coaching sessions 
          tailored to your specific communication goals and challenges.
        </p>
      </div>
    </div>
  );
};

export default CoreFeatures; 