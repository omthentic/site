'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, EyeOff, Mic } from 'lucide-react';
import React from 'react';

export default function SignInPage() {
  const [show, setShow] = React.useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 gradient-hero">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card border border-subtle rounded-2xl shadow-lg p-8"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white shadow-md">
            <Mic className="w-6 h-6" />
          </div>
          <h1 className="text-h4 text-primary-heading mt-3">Welcome back</h1>
          <p className="text-secondary-body">Sign in to continue</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input type={show ? 'text' : 'password'} placeholder="Enter your password" className="w-full bg-background rounded-lg border border-subtle px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-body">
                {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full gradient-primary text-white rounded-lg py-2 font-medium shadow-hover">Sign In</motion.button>
        </form>

        <p className="text-center text-sm text-secondary-body mt-5">
          Don&apos;t have an account? <Link href="/app/sign-up" className="link">Sign up</Link>
        </p>
      </motion.div>
    </main>
  );
}


