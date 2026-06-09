"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        textAlign: "center",
        padding: "6rem 1.5rem",
        background: "#100806",
        color: "#f1e6d3",
        fontFamily: "'EB Garamond', Georgia, serif",
      }}
    >
      <div style={{ fontSize: 14, letterSpacing: "0.3em", color: "#d4a574" }}>
        ·  Ω  ·
      </div>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, margin: 0 }}>
        Something fell quiet.
      </h1>
      <p style={{ maxWidth: 460, color: "rgba(241,230,211,0.65)", fontSize: 18 }}>
        An error interrupted the page. Try again, or return to the index while we
        set it right.
      </p>
      <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
        <button
          onClick={() => reset()}
          style={{
            color: "#d4a574",
            background: "none",
            border: "1px solid rgba(212,165,116,0.4)",
            borderRadius: 2,
            padding: "8px 18px",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 16,
          }}
        >
          Try again
        </button>
        <Link
          href="/"
          style={{
            color: "#d4a574",
            borderBottom: "1px solid rgba(212,165,116,0.4)",
            paddingBottom: 2,
            textDecoration: "none",
            alignSelf: "center",
          }}
        >
          Back to the index
        </Link>
      </div>
      {error?.digest && (
        <div style={{ marginTop: 16, fontSize: 12, color: "rgba(241,230,211,0.4)" }}>
          Error ID: {error.digest}
        </div>
      )}
    </main>
  );
}
