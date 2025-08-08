'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getAnimation, fadeInUp, staggerContainer } from '../lib/animations';

const logos = [
  { name: 'Stanford', initials: 'SU' },
  { name: 'Harvard', initials: 'HU' },
  { name: 'Johns Hopkins', initials: 'JH' },
  { name: 'MIT', initials: 'MIT' },
  { name: 'Yale', initials: 'YU' },
];

export default function FeaturedIn() {
  return (
    <section className="py-14 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-caption text-secondary-body mb-8"
          variants={getAnimation(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Trusted by leading institutions
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {logos.map((l) => (
            <motion.div key={l.name} className="bg-card rounded-xl border border-subtle py-6">
              <span className="text-primary-heading font-semibold">{l.initials}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


