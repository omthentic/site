'use client';

import React from 'react';

type Person = { name: string; role: string };

export default function PeopleRow({ people }: { people: Person[] }) {
  return (
    <div className="bg-card rounded-2xl p-5 border border-subtle shadow-card">
      <div className="flex flex-col gap-3">
        {people.map((p) => (
          <div key={p.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
              <div>
                <div className="font-medium text-primary-heading">{p.name}</div>
                <div className="text-xs text-secondary-body">{p.role}</div>
              </div>
            </div>
            <div className="pill">Coach</div>
          </div>
        ))}
      </div>
    </div>
  );
}


