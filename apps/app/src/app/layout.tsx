import type { Metadata } from 'next';
import '../../../../../packages/ui/styles/globals.css';

export const metadata: Metadata = {
  title: 'Omthentic — App',
  description: 'AI voice coach — app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import '../../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Omthentic — App',
  description: 'AI voice coach — product app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-primary-body">{children}</body>
    </html>
  );
}

import '../../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Omthentic — App',
  description: 'AI voice coach — product app',
};

export default function RootAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-primary-body">{children}</body>
    </html>
  );
}


