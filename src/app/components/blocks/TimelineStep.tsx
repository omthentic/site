'use client';

import React from 'react';

type Step = { step: string; title: string; desc: string };

export default function TimelineStep({ items }: { items: Step[] }) {
  return (
    <ol className="relative border-s border-subtle pl-6 space-y-6">
      {items.map((s, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          <div className="bg-card rounded-xl p-4 border border-subtle shadow-card">
            <div className="text-xs text-secondary-body tabular-nums">{s.step}</div>
            <div className="text-h6 mt-1">{s.title}</div>
            <div className="text-sm text-secondary-body mt-1">{s.desc}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}


