'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TrendCard({ title, delta, good = true }: { title: string; delta: string; good?: boolean }) {
  return (
    <motion.div
      className="bg-card rounded-2xl p-5 border border-subtle shadow-card transition-all"
      whileHover={{ y: -6, boxShadow: 'var(--shadow-hover), var(--shadow-glow)' }}
    >
      <div className="text-sm text-secondary-body mb-2">{title}</div>
      <div className="text-2xl font-bold text-primary-heading tabular-nums">{delta}</div>
      <div className={`mt-2 text-xs font-medium ${good ? 'text-success' : 'text-danger'}`}>{good ? 'Improving' : 'Needs attention'}</div>
    </motion.div>
  );
}


