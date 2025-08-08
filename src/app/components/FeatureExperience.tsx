'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Activity, Users, FileText, Play } from 'lucide-react';

type TabId = 'practice' | 'feedback' | 'coaching' | 'templates';

const tabs: { id: TabId; title: string; desc: string; icon: React.ElementType }[] = [
  { id: 'practice', title: 'Practice Loop', desc: 'Record → review → refine', icon: Mic },
  { id: 'feedback', title: 'Real‑time Feedback', desc: 'Scores & insights', icon: Activity },
  { id: 'coaching', title: 'Human Coaching', desc: 'Personalised tips', icon: Users },
  { id: 'templates', title: 'Scenario Templates', desc: 'MMI • Panel • STAR', icon: FileText },
];

export default function FeatureExperience() {
  const [active, setActive] = useState<TabId>('practice');
  return (
    <section className="py-6">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
        {tabs.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all border ${
              active === id
                ? 'bg-gradient-primary text-white border-transparent shadow-hover'
                : 'bg-card text-primary-heading border-subtle hover:shadow-hover'
            }`}
            aria-pressed={active === id}
          >
            <span className="inline-flex items-center gap-2">
              <Icon className="w-4 h-4" /> {title}
            </span>
          </button>
        ))}
      </div>

      {/* Stage */}
      <div className="bg-card rounded-2xl border border-subtle shadow-card p-4 sm:p-6 max-w-6xl mx-auto">
        {active === 'practice' && <PracticeStage />}
        {active === 'feedback' && <FeedbackStage />}
        {active === 'coaching' && <CoachingStage />}
        {active === 'templates' && <TemplatesStage />}
      </div>
    </section>
  );
}

// Practice mock: timer + record button
function PracticeStage() {
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    let t: ReturnType<typeof setInterval> | undefined;
    if (recording) t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => t && clearInterval(t);
  }, [recording]);

  return (
    <div className="grid lg:grid-cols-3 gap-6 items-center">
      <div className="lg:col-span-2">
        <div className="rounded-xl border border-subtle p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="pill tabular-nums">{String(Math.floor(elapsed / 60)).padStart(2, '0')}:{String(elapsed % 60).padStart(2, '0')}</div>
            <div className="text-xs text-secondary-body">2:00 limit</div>
          </div>
          <div className="h-24 sm:h-28 rounded-md bg-background relative overflow-hidden">
            {/* simple animated bars */}
            <div className="absolute inset-0 flex items-end gap-1 px-2">
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="w-1 rounded-sm"
                  animate={{ height: recording ? [6, 28, 8, 22, 10] : 8 }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.02 }}
                  style={{ background: 'var(--om-grad)' }}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              onClick={() => {
                setRecording((r) => !r);
                if (!recording) setElapsed(0);
              }}
              className="btn-primary rounded-full px-6 py-3 inline-flex items-center gap-2"
            >
              <Mic className="w-5 h-5" /> {recording ? 'Stop' : 'Start'} recording
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-h6">How it works</h3>
        <ul className="text-sm text-secondary-body space-y-2">
          <li>1. Read the prompt and press record</li>
          <li>2. Speak for up to two minutes</li>
          <li>3. Get instant feedback on confidence, clarity and pace</li>
        </ul>
      </div>
    </div>
  );
}

// Feedback mock: animated bars + tips
function FeedbackStage() {
  const scores = useMemo(
    () => [
      { name: 'Confidence', value: 82 },
      { name: 'Clarity', value: 76 },
      { name: 'Pace', value: 91 },
    ],
    []
  );

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        {scores.map((s, i) => (
          <div key={s.name} className="bg-background rounded-xl p-4 border border-subtle">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-secondary-body">{s.name}</div>
              <div className="tabular-nums font-semibold">{s.value}%</div>
            </div>
            <div className="h-2 rounded-full bg-card">
              <motion.div
                className="h-2 rounded-full"
                style={{ background: 'var(--om-grad)' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-background rounded-xl p-4 border border-subtle">
        <h3 className="font-semibold mb-2">Coaching tips</h3>
        <ul className="list-disc pl-5 text-sm text-secondary-body space-y-1">
          <li>Pause one beat after each key point</li>
          <li>Swap filler words with a reflective pause</li>
          <li>Keep pace between 140–160 wpm</li>
        </ul>
      </div>
    </div>
  );
}

// Coaching mock: chat bubbles
function CoachingStage() {
  const [messages, setMessages] = useState<string[]>([
    'Coach: Great structure. Try slowing your first sentence.',
    'You: Thanks! What about my examples?',
  ]);
  return (
    <div className="bg-background rounded-xl p-4 border border-subtle">
      <div className="space-y-3 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] rounded-xl px-3 py-2 ${m.startsWith('Coach') ? 'bg-card' : 'bg-gradient-primary text-white ml-auto'}`}>{m}</div>
        ))}
      </div>
      <button
        onClick={() => setMessages((arr) => [...arr, 'Coach: Add a concrete metric to your second example.'])}
        className="btn-secondary rounded-lg px-4 py-2"
      >
        Get tip
      </button>
    </div>
  );
}

// Templates mock: selectable chips + preview
function TemplatesStage() {
  const items = [
    { name: 'MMI: Ethical dilemma', text: 'A colleague shares a patient story outside the clinic. How do you respond?' },
    { name: 'Panel: Why medicine?', text: 'Share the turning point that led you to medicine.' },
    { name: 'Behavioral: Feedback', text: 'Describe a time you delivered difficult feedback. What happened?' },
  ];
  const [idx, setIdx] = useState(0);
  return (
    <div className="grid lg:grid-cols-3 gap-6 items-start">
      <div className="space-y-2">
        {items.map((it, i) => (
          <button
            key={it.name}
            onClick={() => setIdx(i)}
            className={`w-full text-left rounded-lg px-3 py-2 border transition-all ${
              idx === i ? 'bg-gradient-primary text-white border-transparent' : 'bg-card border-subtle hover:shadow-hover'
            }`}
          >
            {it.name}
          </button>
        ))}
      </div>
      <div className="lg:col-span-2 bg-background rounded-xl border border-subtle p-4">
        <h3 className="font-semibold mb-2">Prompt</h3>
        <p className="text-secondary-body">{items[idx].text}</p>
        <button className="mt-4 btn-primary rounded-lg px-4 py-2 inline-flex items-center gap-2"><Play className="w-4 h-4"/> Try this</button>
      </div>
    </div>
  );
}


