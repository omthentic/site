"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const goals = ['Job Interviews', 'University Admissions Interview', 'Public Speaking', 'Client Meetings'];
const focuses = ['Content', 'Structure', 'Presentation'];
const strengths = [
  'Purposefulness','Encouragement','Wisdom','Sincerity','Responsibility','Enthusiasm','Kindness','Resilience','Respect','Tolerance','Mindfulness','Self-Discipline'
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>('');
  const [details, setDetails] = useState('');
  const [focus, setFocus] = useState<string>('');
  const [experience, setExperience] = useState('');
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([]);

  const toggleStrength = (s: string) => {
    setSelectedStrengths((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : prev.length < 3 ? [...prev, s] : prev
    );
  };

  async function submit() {
    await fetch('/api/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal, details, focus, experience, strengths: selectedStrengths }),
    });
    router.push('/dashboard');
  }

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-h4">Let’s personalize Omthentic</h1>

      {step === 1 && (
        <div className="bg-card rounded-xl border border-subtle p-5 space-y-4">
          <h2 className="text-h6">What is your current goal?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {goals.map((g) => (
              <button key={g} onClick={() => setGoal(g)}
                className={`p-3 rounded-lg border ${goal===g? 'gradient-primary text-white' : 'border-subtle bg-card'}`}>{g}</button>
            ))}
          </div>
          <input value={details} onChange={(e)=>setDetails(e.target.value)} placeholder="Add a bit more detail (industry, role, degree)"
            className="w-full mt-2 px-3 py-2 rounded-lg border border-subtle bg-transparent" />
          <div className="flex justify-end">
            <button disabled={!goal} className="btn-primary px-4 py-2" onClick={()=>setStep(2)}>Continue</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-card rounded-xl border border-subtle p-5 space-y-4">
          <h2 className="text-h6">Main focus for improving communication</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {focuses.map((f) => (
              <button key={f} onClick={() => setFocus(f)}
                className={`p-3 rounded-lg border ${focus===f? 'gradient-primary text-white' : 'border-subtle bg-card'}`}>{f}</button>
            ))}
          </div>
          <div className="flex justify-between">
            <button className="btn-secondary" onClick={()=>setStep(1)}>Back</button>
            <button disabled={!focus} className="btn-primary px-4 py-2" onClick={()=>setStep(3)}>Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-card rounded-xl border border-subtle p-5 space-y-4">
          <h2 className="text-h6">Speaking experience</h2>
          <input value={experience} onChange={(e)=>setExperience(e.target.value)} placeholder="e.g., 3 mock interviews, 1 panel interview"
            className="w-full px-3 py-2 rounded-lg border border-subtle bg-transparent" />
          <div className="flex justify-between">
            <button className="btn-secondary" onClick={()=>setStep(2)}>Back</button>
            <button className="btn-primary px-4 py-2" onClick={()=>setStep(4)}>Continue</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="bg-card rounded-xl border border-subtle p-5 space-y-4">
          <h2 className="text-h6">Pick your top 3 strengths</h2>
          <div className="grid sm:grid-cols-3 gap-2">
            {strengths.map((s) => (
              <button key={s} onClick={() => toggleStrength(s)}
                className={`px-3 py-2 rounded-full text-sm border ${selectedStrengths.includes(s)? 'gradient-primary text-white' : 'border-subtle bg-card'}`}>{s}</button>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <button className="btn-secondary" onClick={()=>setStep(3)}>Back</button>
            <button disabled={selectedStrengths.length<1} className="btn-primary px-4 py-2" onClick={submit}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
}


