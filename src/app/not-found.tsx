import Link from "next/link";

export default function NotFound() {
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
        This page was never written.
      </h1>
      <p style={{ maxWidth: 460, color: "rgba(241,230,211,0.65)", fontSize: 18 }}>
        The path you followed leads nowhere we have built yet. Return to the
        beginning, and start again.
      </p>
      <Link
        href="/"
        style={{
          marginTop: 8,
          color: "#d4a574",
          borderBottom: "1px solid rgba(212,165,116,0.4)",
          paddingBottom: 2,
          textDecoration: "none",
        }}
      >
        Back to the index
      </Link>
    </main>
  );
}
