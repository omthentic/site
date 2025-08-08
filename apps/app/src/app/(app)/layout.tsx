import Link from 'next/link';
import { LayoutDashboard, Mic, FileText, Sparkles, Settings } from 'lucide-react';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const nav = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/onboarding', label: 'Onboarding', icon: Sparkles },
    { href: '/sign-in', label: 'Sign in', icon: FileText },
  ];

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr] bg-background">
      <aside className="hidden lg:flex flex-col border-r border-subtle bg-card">
        <div className="h-16 flex items-center px-5 border-b border-subtle">
          <Link href="/" className="text-h5">Omthentic</Link>
        </div>
        <nav className="p-3 space-y-1">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:shadow-hover border border-transparent hover:border-subtle">
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-3">
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg border-subtle border hover:shadow-hover">
            <Settings className="w-4 h-4" />
            <span className="text-sm">Settings</span>
          </Link>
        </div>
      </aside>
      <div className="min-h-screen flex flex-col">
        <header className="h-16 px-4 lg:px-6 border-b border-subtle bg-background flex items-center justify-between">
          <div className="lg:hidden font-semibold">Omthentic</div>
          <div className="flex items-center gap-3">
            <a href="/onboarding" className="hidden sm:inline-flex gradient-primary text-white px-4 py-2 rounded-lg font-medium">
              <Mic className="w-4 h-4 mr-2" /> Start practice
            </a>
            <div className="w-8 h-8 rounded-full bg-card border border-subtle" />
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}


