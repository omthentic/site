'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DemoIndex() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-background-primary">
      <div className="max-w-sm w-full bg-card rounded-2xl border border-subtle shadow-card p-6">
        <div className="flex flex-col items-center mb-6">
          <Image src="/images/Omthentic Icon.svg" alt="Omthentic" width={64} height={64} />
          <h1 className="mt-4 text-h3">Omthentic</h1>
          <p className="text-secondary-body text-sm">Welcome back</p>
        </div>
        <form action="/demo/dashboard">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input className="w-full bg-background rounded-lg border border-subtle px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[color:var(--om-blue)]/60" placeholder="Enter your email" />
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input type="password" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 pr-9 mb-4 focus:outline-none focus:ring-2 focus:ring-[color:var(--om-blue)]/60" placeholder="Enter your password" />
          </div>
          <button className="btn-primary w-full py-3 rounded-xl">Sign In</button>
        </form>
        <p className="text-center text-xs text-secondary-body mt-4">Don’t have an account? <Link href="/demo/signup" className="link">Sign up</Link></p>
      </div>
    </main>
  );
}


