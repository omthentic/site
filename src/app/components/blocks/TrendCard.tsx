'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TrendCard({ title, delta, good = true }: { title: string; delta: string; good?: boolean }) {
  return (
    <motion.div
      className="card-app"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-sm text-[var(--text-muted)] mb-2">{title}</div>
      <div className="text-2xl font-bold text-[var(--text)] tabular-nums">{delta}</div>
      <div className={`mt-2 text-xs font-medium ${good ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>{good ? 'Improving' : 'Needs attention'}</div>
    </motion.div>
  );
}


