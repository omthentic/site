"use client";

import { useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignalForm() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [ok, setOk] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const val = email.trim();
    if (!EMAIL.test(val)) {
      setOk(false);
      setNote("That frequency looks off. Check the email and try again.");
      return;
    }
    setOk(true);
    setNote("Signal received. We resonate back soon.");
    setEmail("");
  }

  return (
    <>
      <form className="join-form" onSubmit={onSubmit} noValidate>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@purpose.com"
          aria-label="Your email"
          autoComplete="email"
          required
        />
        <button type="submit" className="btn btn-primary">
          Send a signal
        </button>
      </form>
      <div className={`join-note${ok ? " ok" : ""}`} aria-live="polite">
        {note}
      </div>
    </>
  );
}
