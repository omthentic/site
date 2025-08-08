'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RefreshCw, Home } from 'lucide-react';
import { getAnimation, fadeInUpScale, floatingElement, figureEight } from './lib/animations';

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background-primary">
      {/* Brand gradient atmosphere */}
      <div className="absolute inset-0 gradient-hero opacity-90" />

      {/* Floating brand orbs */}
      <motion.div
        className="absolute -left-10 top-20 w-80 h-80 rounded-full blur-3xl"
        style={{ background: 'var(--gradient-primary)' }}
        variants={getAnimation(floatingElement)}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute -right-10 bottom-16 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'var(--gradient-accent)' }}
        variants={getAnimation(figureEight)}
        initial="initial"
        animate="animate"
      />

      <motion.section
        className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center"
        variants={getAnimation(fadeInUpScale)}
        initial="initial"
        animate="animate"
      >
        <div className="flex justify-center mb-8">
          <Image
            src="https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Icon.svg"
            alt="Omthentic icon"
            width={64}
            height={64}
            className="drop-shadow"
            priority
          />
        </div>

        <h1 className="text-h1 text-white text-contrast-glow mb-4">Lost your voice?</h1>
        <p className="text-body-lg text-gray-200 text-contrast-glow mb-10">
          We couldn’t find that page. Let’s get you back to where your story continues.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-2 focus-ring">
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button onClick={() => location.reload()} className="btn-secondary bg-card px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-2 focus-ring text-white border-white/50">
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </button>
        </div>

        <div className="mt-10 text-gray-300/80 text-sm">
          <span>404 • Page not found</span>
        </div>
      </motion.section>
    </main>
  );
}


