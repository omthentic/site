import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Omthentic — App',
  description: 'AI voice coach — product app',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-primary-body">
      {children}
    </div>
  );
}


