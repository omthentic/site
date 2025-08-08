'use client';

import React, { useState } from 'react';

type Props = { open: boolean; onClose: () => void };

export default function WaitlistModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      const json = await res.json();
      setStatus(json.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-card border border-subtle rounded-2xl shadow-card w-full max-w-md p-6">
        <h3 className="text-h5 mb-1">Join the waitlist</h3>
        <p className="text-secondary-body text-sm mb-4">Get early access and coaching updates.</p>
        {status === 'ok' ? (
          <div className="text-success">Thanks! You’re on the list.</div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--om-blue)]/60" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--om-blue)]/60" placeholder="jane@example.com" required />
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button type="button" onClick={onClose} className="btn-secondary px-4 py-2 rounded-lg">Cancel</button>
              <button type="submit" disabled={status==='loading'} className="btn-primary px-5 py-2 rounded-lg">{status==='loading' ? 'Joining…' : 'Join'}</button>
            </div>
            {status === 'error' && <div className="text-danger text-sm">Something went wrong. Please try again.</div>}
          </form>
        )}
      </div>
    </div>
  );
}


