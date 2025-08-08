import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omthentic Demo',
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}


