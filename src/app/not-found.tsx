import Link from "next/link";

export default function NotFound() {
  return (
    <main className="status-page">
      <Link href="/" className="status-brand">
        omthentic
      </Link>
      <p className="status-code">404</p>
      <h1>A little off the path.</h1>
      <p>We couldn’t find that page. Let’s get you back to the beginning.</p>
      <Link href="/" className="status-button">
        Back to Omthentic <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
