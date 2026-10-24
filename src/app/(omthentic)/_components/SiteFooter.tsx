import Link from "next/link";
import { Arrow } from "./Arrow";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <p>
            Technology moves forward.
            <br />
            Let’s make sure people do, too.
          </p>
          <div className="footer-links">
            <Link href="/vision">Our approach</Link>
            <Link href="/companies">Ventures</Link>
            <Link href="/contact">
              Get in touch <Arrow diagonal />
            </Link>
          </div>
        </div>
        <Link href="/" className="footer-wordmark" aria-label="Omthentic home">
          omthentic
        </Link>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Omthentic</span>
          <span>You are already enough.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
