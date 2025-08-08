'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mic } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 gradient-hero">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md bg-card border border-subtle rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white shadow-md">
            <Mic className="w-6 h-6" />
          </div>
          <h1 className="text-h4 text-primary-heading mt-3">Create your account</h1>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Full name" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="Email" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full gradient-primary text-white rounded-lg py-2 font-medium shadow-hover">Sign Up</motion.button>
        </form>

        <p className="text-center text-sm text-secondary-body mt-5">
          Already have an account? <Link href="/sign-in" className="link">Sign in</Link>
        </p>
      </motion.div>
    </main>
  );
}

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mic } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 gradient-hero">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md bg-card border border-subtle rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white shadow-md">
            <Mic className="w-6 h-6" />
          </div>
          <h1 className="text-h4 text-primary-heading mt-3">Create your account</h1>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Full name" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="Email" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full gradient-primary text-white rounded-lg py-2 font-medium shadow-hover">Sign Up</motion.button>
        </form>

        <p className="text-center text-sm text-secondary-body mt-5">
          Already have an account? <Link href="/sign-in" className="link">Sign in</Link>
        </p>
      </motion.div>
    </main>
  );
}

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mic } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 gradient-hero">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md bg-card border border-subtle rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white shadow-md">
            <Mic className="w-6 h-6" />
          </div>
          <h1 className="text-h4 text-primary-heading mt-3">Create your account</h1>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Full name" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="Email" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full gradient-primary text-white rounded-lg py-2 font-medium shadow-hover">Sign Up</motion.button>
        </form>

        <p className="text-center text-sm text-secondary-body mt-5">
          Already have an account? <Link href="/sign-in" className="link">Sign in</Link>
        </p>
      </motion.div>
    </main>
  );
}


