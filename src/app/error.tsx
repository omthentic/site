"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main className="status-page">
      <Link href="/" className="status-brand">
        omthentic
      </Link>
      <p className="status-code">Something went wrong</p>
      <h1>Let’s try that again.</h1>
      <p>This page couldn’t load. Please retry or return to the home page.</p>
      <div className="status-actions">
        <button onClick={reset} className="status-button">
          Try again
        </button>
        <Link href="/">Back to home →</Link>
      </div>
    </main>
  );
}
