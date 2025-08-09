import { ArrowUpRight, Mic, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cookies } from 'next/headers';

function readOnboarding() {
  try {
    const c = cookies().get('om:onboarding')?.value;
    if (!c) return null;
    const json = JSON.parse(Buffer.from(c, 'base64').toString('utf8')) as {
      goal?: string; focus?: string; strengths?: string[]; details?: string;
    };
    return json;
  } catch {
    return null;
  }
}

export default function Dashboard() {
  const onboarding = readOnboarding();
  const headline = onboarding?.goal
    ? `Welcome back${onboarding.strengths?.length ? ', ' + onboarding.strengths[0] : ''}`
    : 'Welcome back';
  const sub = onboarding?.goal
    ? `Focused on ${onboarding.goal}${onboarding.focus ? ' • ' + onboarding.focus : ''}`
    : 'Practice a prompt and get instant feedback.';
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-h4 mb-1">{headline}</h1>
        <p className="text-secondary-body">{sub}</p>
      </div>
      {/* Header metrics */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Confidence score', value: '74', suffix: '%', trend: '+4%' },
          { label: 'Avg. pace stability', value: '86', suffix: '%', trend: '+3%' },
          { label: 'Filler words / min', value: '3.1', suffix: '', trend: '-12%' },
        ].map((m) => (
          <div key={m.label} className="bg-card rounded-xl border border-subtle p-4">
            <div className="text-caption text-secondary-body">{m.label}</div>
            <div className="flex items-end justify-between mt-2">
              <div className="text-3xl font-semibold tabular-nums">{m.value}{m.suffix}</div>
              <div className="text-success text-sm">{m.trend}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="bg-card rounded-xl border border-subtle p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-h5 mb-1">Jump back in</h2>
          <p className="text-secondary-body">{sub}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/onboarding" className="gradient-primary text-white px-4 py-2 rounded-lg inline-flex items-center gap-2">
            <Mic className="w-4 h-4" /> Start practice
          </Link>
          <Link href="/templates" className="btn-secondary">Browse templates</Link>
        </div>
      </div>

      {/* Recent sessions */}
      <div className="bg-card rounded-xl border border-subtle p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-h6">Recent sessions</h3>
          <button className="text-sm link inline-flex items-center">View all <ArrowUpRight className="w-4 h-4 ml-1" /></button>
        </div>
        <div className="divide-y divide-gray-200/40">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">Interview practice #{i}</div>
                <div className="text-caption text-secondary-body">2 min • Confidence +12%</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="pill">Feedback ready</span>
                <button className="btn-secondary">Open</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border border-subtle p-5">
          <div className="flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4" /><h3 className="text-h6">Coach tip</h3></div>
          <p className="text-secondary-body">Try the STAR framework to structure answers. Keep Situation and Task short; spend time on Action and Result.</p>
        </div>
        <div className="bg-card rounded-xl border border-subtle p-5">
          <div className="flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4" /><h3 className="text-h6">Template to try</h3></div>
          <p className="text-secondary-body">“Tell me about yourself” — guided prompt with timing and checkpoints.</p>
          <Link href="/templates" className="link text-sm mt-2 inline-block">Use template</Link>
        </div>
      </div>
    </div>
  );
}


