'use client';

import React from 'react';

export default function NumberStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-subtle text-center shadow-card hover:shadow-hover transition-all">
      <div className="text-4xl font-extrabold text-primary-heading tabular-nums mb-2">{value}</div>
      <div className="text-secondary-body text-sm">{label}</div>
    </div>
  );
}


