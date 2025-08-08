'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Star, CheckCircle, Play } from 'lucide-react';

type Template = {
  id: string;
  label: string;
  tag: string;
  prompt: string;
  bullets: string[];
};

const templates: Template[] = [
  {
    id: 'pitch',
    label: 'Interview Pitch',
    tag: 'Popular',
    prompt:
      'Give us your 60‑second introduction: who you are, what you bring, and the impact you want to make.',
    bullets: [
      'Open with a clear role/identity',
      'One metric‑backed achievement',
      'Tie to what this team values',
    ],
  },
  {
    id: 'panel',
    label: 'Mock Panel',
    tag: 'New',
    prompt:
      'You are asked by a mixed panel: Why this role, and why now? Answer with context, motivation and fit.',
    bullets: ['Anchor to a real moment', 'Name two relevant strengths', 'End with the next step you seek'],
  },
  {
    id: 'star',
    label: 'STAR Answer',
    tag: 'Guided',
    prompt:
      'Describe a time you navigated a tough trade‑off. Use the STAR method: situation, task, action, result.',
    bullets: ['State the stakes', 'Show a concrete action', 'Quantify the outcome'],
  },
  {
    id: 'debrief',
    label: 'Debrief Review',
    tag: 'Coach‑verified',
    prompt:
      'Play back your most recent answer and call out one strength and one improvement for next time.',
    bullets: ['Name a specific strength', 'Pick one focus to improve', 'Set a practice cue'],
  },
];

export default function TemplatesExperience() {
  const [active, setActive] = React.useState<Template>(templates[0]);
  return (
    <div className="max-w-7xl mx-auto">
      {/* Selector */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t)}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all border ${
              active.id === t.id
                ? 'bg-gradient-primary text-white border-transparent shadow-hover'
                : 'bg-card text-primary-heading border-subtle hover:shadow-hover'
            }`}
            aria-pressed={active.id === t.id}
          >
            <span className="inline-flex items-center gap-2">
              <FileText className="w-4 h-4" /> {t.label}
            </span>
          </button>
        ))}
      </div>

      {/* Stage */}
      <div className="bg-card rounded-2xl border border-subtle shadow-card p-4 sm:p-6">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="space-y-3">
            <div className="pill inline-flex">{active.tag}</div>
            <h3 className="text-h5">{active.label}</h3>
            <p className="text-sm text-secondary-body">Open, customize, and practice in minutes.</p>
            <ul className="mt-3 space-y-2 text-sm text-secondary-body">
              {active.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" /> {b}
                </li>
              ))}
            </ul>
            <button className="btn-primary rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <Play className="w-4 h-4" /> Try this template
            </button>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-background rounded-xl border border-subtle p-4 sm:p-6 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center gap-2 pill">
                      <Star className="w-4 h-4" /> Prompt preview
                    </div>
                    <div className="tabular-nums text-xs text-secondary-body">00:00 / 02:00</div>
                  </div>
                  <p className="text-body text-primary-heading leading-relaxed">
                    {active.prompt}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


