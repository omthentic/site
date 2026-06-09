"use client";

import { useState } from "react";

const concerns = [
  "InterviewMD",
  "Prepbond",
  "The house",
  "A new venture",
  "Joining",
  "Press",
  "Other",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pressed, setPressed] = useState<Record<string, boolean>>({
    Prepbond: true,
  });

  const toggle = (label: string) =>
    setPressed((p) => ({ ...p, [label]: !p[label] }));

  return (
    <form
      className={`form${sent ? " sent" : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {!sent && (
        <div
          className="form-body"
          style={{ display: "flex", flexDirection: "column", gap: 36 }}
        >
          <div className="field">
            <label htmlFor="cf-who">I am</label>
            <input
              id="cf-who"
              type="text"
              placeholder="A clinician · a founder · a writer · a friend"
            />
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input id="cf-name" type="text" placeholder="What you go by" />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Reach</label>
              <input
                id="cf-email"
                type="email"
                placeholder="email · phone · pigeon"
              />
            </div>
          </div>

          <div className="field">
            <label>This concerns</label>
            <div className="who-list">
              {concerns.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={pressed[c] ? "true" : "false"}
                  onClick={() => toggle(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label htmlFor="cf-msg">A letter</label>
            <textarea
              id="cf-msg"
              rows={6}
              placeholder="Begin anywhere. Be specific. Be slow."
            />
          </div>

          <div className="submit-row">
            <button type="submit" className="btn">
              <span>Send the letter</span>
              <span className="arrow" />
            </button>
            <div className="form-note">
              We do not sell, broadcast, or feed your message to anything we
              wouldn&apos;t read out loud.
            </div>
          </div>
        </div>
      )}

      {sent && (
        <div className="thanks">
          The letter is received.
          <br />
          We will sit with it.
        </div>
      )}
    </form>
  );
}
