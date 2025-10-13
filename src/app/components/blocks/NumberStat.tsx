'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  value?: string; // static display
  label: string;
  countTo?: number; // optional animated counter
  suffix?: string;
  durationMs?: number;
};

export default function NumberStat({ value, label, countTo, suffix = '', durationMs = 1200 }: Props) {
  const [display, setDisplay] = useState<string>(value ?? '');
  const hasCount = typeof countTo === 'number';
  const started = useRef(false);

  useEffect(() => {
    if (!hasCount || started.current) return;
    started.current = true;
    const start = performance.now();
    const formatter = new Intl.NumberFormat(undefined);
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = Math.round((countTo as number) * eased);
      setDisplay(`${formatter.format(current)}${suffix}`);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [countTo, durationMs, hasCount, suffix]);

  return (
    <motion.div
      className="card-app text-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl font-extrabold text-[var(--text)] tabular-nums mb-3">
        {hasCount ? display : value}
      </div>
      <div className="text-[var(--text-muted)] text-sm font-medium">{label}</div>
    </motion.div>
  );
}


