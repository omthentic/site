'use client';

import React from 'react';

type Step = { step: string; title: string; desc: string };

export default function TimelineStep({ items }: { items: Step[] }) {
  return (
    <ol className="relative border-s border-[var(--border)] pl-6 space-y-6">
      {items.map((s, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-[var(--brand)]" />
          <div className="card-app">
            <div className="badge-app inline-block mb-2">{s.step}</div>
            <div className="text-xl font-bold text-[var(--text)] mt-1">{s.title}</div>
            <div className="text-sm text-[var(--text-muted)] mt-1">{s.desc}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}


