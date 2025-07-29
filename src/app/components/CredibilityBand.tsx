'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CredibilityBand = () => {
  const partners = [
    { name: 'MedWithPurpose', logo: 'M', color: 'from-blue-500 to-blue-600' },
    { name: 'ShareTree', logo: 'S', color: 'from-green-500 to-green-600' },
    { name: 'Stanford University', logo: 'SU', color: 'from-red-500 to-red-600' },
    { name: 'Harvard Business', logo: 'HB', color: 'from-purple-500 to-purple-600' },
    { name: 'MIT Innovation', logo: 'MIT', color: 'from-gray-600 to-gray-700' },
  ];

  const pressLogos = [
    { name: 'TechCrunch', logo: 'TC', color: 'from-green-600 to-green-700' },
    { name: 'Forbes', logo: 'F', color: 'from-blue-600 to-blue-700' },
    { name: 'Harvard Business Review', logo: 'HBR', color: 'from-red-600 to-red-700' },
    { name: 'Wired', logo: 'W', color: 'from-gray-700 to-gray-800' },
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '95%', label: 'Success Rate' },
    { number: '50K+', label: 'Practice Sessions' },
    { number: '4.9/5', label: 'User Rating' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm font-medium mb-8 tracking-wide uppercase">
            Trusted by leading organizations
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex flex-col items-center space-y-2 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-xl flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-gray-700 text-xs font-medium text-center">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl glow-subtle cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Press Coverage */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm font-medium mb-8 tracking-wide uppercase">
            Featured in
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {pressLogos.map((press, index) => (
              <motion.div
                key={press.name}
                className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${press.color} rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-card transition-all duration-300`}>
                  <span className="text-white font-bold text-sm">
                    {press.logo}
                  </span>
                </div>
                <span className="text-gray-800 font-semibold text-lg">
                  {press.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10 glow-primary cursor-pointer">
              <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                &ldquo;Articulate transformed how our students approach interview preparation. 
                The AI feedback is incredibly accurate and the improvement in confidence is remarkable.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-card hover:shadow-hover transition-all duration-300">
                  DR
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 dark:text-gray-800">Dr. Rachel Chen</div>
                  <div className="text-gray-600 dark:text-gray-600 text-sm">Career Services Director, Stanford University</div>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilityBand; 