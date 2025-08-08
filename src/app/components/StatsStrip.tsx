'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Target } from 'lucide-react';
import { copy } from '../lib/copy';

const StatsStrip = () => {
  const stats = [
    {
      icon: Users,
      value: copy.stats.candidatesCoached,
      label: 'candidates coached',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      value: copy.stats.confidenceImprovement,
      label: 'report higher confidence',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      value: copy.stats.conversationsTarget,
      label: 'conversations by 2030',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-12 bg-background-primary border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-lg p-6 text-center hover:shadow-hover transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              tabIndex={0}
              role="article"
              aria-label={`${stat.value} ${stat.label}`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4 mx-auto shadow-card group-hover:shadow-hover transition-all duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="text-3xl lg:text-4xl font-bold text-primary-heading mb-2 group-hover:text-primary transition-colors duration-300 tabular-nums">
                {stat.value}
              </div>
              
              <div className="text-secondary-body text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* On track indicator */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm tabular-nums">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            On track for {copy.vision.shortForm}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsStrip;