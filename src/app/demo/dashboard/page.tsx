'use client';

import React from 'react';
import Link from 'next/link';
import { questions } from '../../lib/questions';

export default function Dashboard() {
  return (
    <main className="min-h-screen px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-h3 mb-4">Questions</h1>
      <p className="text-secondary-body mb-6">Choose a prompt to practice. Each session will time you and generate feedback.</p>
      <ul className="space-y-3">
        {questions.map(q => (
          <li key={q.id} className="bg-card rounded-xl border border-subtle p-4 flex items-center justify-between">
            <div>
              <div className="font-medium text-primary-heading">{q.prompt}</div>
              <div className="text-xs text-secondary-body">{q.category}</div>
            </div>
            <Link href={`/demo/session/${q.id}`} className="btn-secondary px-4 py-2 rounded-lg">Practice</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


