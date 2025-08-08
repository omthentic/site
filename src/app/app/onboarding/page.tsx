'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

type Goal = 'job' | 'uni' | 'presentations' | 'social' | 'public-speaking' | 'leadership';
type Focus = 'content' | 'structure' | 'presentation';

interface FormState {
  goal?: Goal;
  industry?: string;
  role?: string;
  degree?: string;
  focus?: Focus;
  experience?: 'beginner' | 'intermediate' | 'advanced';
  strengths: string[];
}

const strengthsAll = [
  'Purposefulness','Encouragement','Wisdom','Sincerity','Responsibility','Enthusiasm','Kindness','Resilience','Respect','Tolerance','Mindfulness','Self-Discipline'
];

export default function Onboarding() {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState<FormState>({ strengths: [] });

  function next() { setStep(s => Math.min(s + 1, 6)); }
  function back() { setStep(s => Math.max(s - 1, 1)); }

  function toggleStrength(s: string) {
    setForm(prev => {
      const selected = prev.strengths.includes(s)
        ? prev.strengths.filter(x => x !== s)
        : prev.strengths.length < 3
          ? [...prev.strengths, s]
          : prev.strengths;
      return { ...prev, strengths: selected };
    });
  }

  async function submit() {
    await fetch('/api/onboarding', { method: 'POST', body: JSON.stringify(form) });
    next();
  }

  return (
    <main className="min-h-screen p-6 flex items-center justify-center bg-background">
      <div className="w-full max-w-3xl bg-card border border-subtle rounded-2xl shadow-lg overflow-hidden">
        <div className="h-1 gradient-primary" />
        <div className="p-6 sm:p-10">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-secondary-body">Step {step} of 6</p>
            <div className="h-2 w-40 bg-background rounded-full overflow-hidden">
              <div className="h-full gradient-primary" style={{ width: `${(step/6)*100}%` }} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <h2 className="text-h4 text-primary-heading mb-2">What is your current goal?</h2>
                <p className="text-secondary-body mb-5">Choose the main objective.</p>
                <div className="space-y-3">
                  {([
                    ['job','Job Interviews'],
                    ['uni','University Admissions Interview'],
                    ['presentations','Work Presentations'],
                    ['social','Social Conversations'],
                    ['public-speaking','Public Speaking'],
                    ['leadership','Leadership Communication'],
                  ] as [Goal,string][]).map(([value,label]) => (
                    <button key={value} onClick={() => setForm(f => ({...f, goal: value}))} className={`w-full text-left px-4 py-3 rounded-xl border transition ${form.goal===value?'border-transparent gradient-primary text-white':'border-subtle bg-background hover:shadow-hover'}`}>{label}</button>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <button className="btn-secondary" onClick={back}>Back</button>
                  <button className="btn-primary" onClick={next} disabled={!form.goal}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 2 && form.goal === 'job' && (
              <motion.div key="s2-job" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <h2 className="text-h4 text-primary-heading mb-2">Which industry and role?</h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <input className="bg-background border border-subtle rounded-lg px-3 py-2" placeholder="Industry (e.g., Tech)" value={form.industry||''} onChange={e=>setForm(f=>({...f,industry:e.target.value}))} />
                  <input className="bg-background border border-subtle rounded-lg px-3 py-2" placeholder="Role (e.g., Product Manager)" value={form.role||''} onChange={e=>setForm(f=>({...f,role:e.target.value}))} />
                </div>
                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={back}>Back</button>
                  <button className="btn-primary" onClick={next} disabled={!form.industry || !form.role}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 2 && form.goal === 'uni' && (
              <motion.div key="s2-uni" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <h2 className="text-h4 text-primary-heading mb-2">Which degree?</h2>
                <input className="bg-background border border-subtle rounded-lg px-3 py-2 mb-6 w-full" placeholder="Degree (e.g., Computer Science)" value={form.degree||''} onChange={e=>setForm(f=>({...f,degree:e.target.value}))} />
                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={back}>Back</button>
                  <button className="btn-primary" onClick={next} disabled={!form.degree}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <h2 className="text-h4 text-primary-heading mb-2">What is your main focus to improve?</h2>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {([
                    ['content','Content (what you say)'],
                    ['structure','Structure (how you organise it)'],
                    ['presentation','Presentation (how you deliver it)'],
                  ] as [Focus,string][]).map(([value,label]) => (
                    <button key={value} onClick={() => setForm(f => ({...f, focus: value}))} className={`px-4 py-3 rounded-xl border transition ${form.focus===value?'border-transparent gradient-primary text-white':'border-subtle bg-background hover:shadow-hover'}`}>{label}</button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={back}>Back</button>
                  <button className="btn-primary" onClick={next} disabled={!form.focus}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <h2 className="text-h4 text-primary-heading mb-2">How would you rate your speaking experience?</h2>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {(['beginner','intermediate','advanced'] as const).map(level => (
                    <button key={level} onClick={() => setForm(f => ({...f, experience: level}))} className={`px-4 py-3 rounded-xl border capitalize transition ${form.experience===level?'border-transparent gradient-primary text-white':'border-subtle bg-background hover:shadow-hover'}`}>{level.replace('-', ' ')}</button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={back}>Back</button>
                  <button className="btn-primary" onClick={next} disabled={!form.experience}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="s5" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <h2 className="text-h4 text-primary-heading mb-2">Select your top 3 character strengths</h2>
                <p className="text-secondary-body mb-4">Pick up to three that describe you best.</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {strengthsAll.map(s => (
                    <button key={s} onClick={() => toggleStrength(s)} className={`px-3 py-2 rounded-lg border text-sm transition ${form.strengths.includes(s)?'border-transparent gradient-primary text-white':'border-subtle bg-background hover:shadow-hover'}`}>{s}</button>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <button className="btn-secondary" onClick={back}>Back</button>
                  <button className="btn-primary" onClick={submit} disabled={form.strengths.length!==3}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div key="s6" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="text-center">
                <h2 className="text-h3 text-primary-heading mb-2">Meet your character coaches</h2>
                <p className="text-secondary-body mb-6">Curated for you based on your selections.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {['Coach Clarity','Coach Presence','Coach Impact'].map((c,i)=> (
                    <div key={c} className="bg-background border border-subtle rounded-xl p-4">
                      <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-primary-heading mb-1 text-center">{c}</h4>
                      <p className="text-xs text-secondary-body">Focus area {i+1}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}


