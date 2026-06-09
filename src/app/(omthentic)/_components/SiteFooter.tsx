import Link from "next/link";
import { LiveTime } from "./LiveTime";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot-wordmark" aria-hidden="true">
        Omthentic.
      </div>
      <div className="foot-grid" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <h4>The house</h4>
          <p
            className="dim"
            style={{ maxWidth: "32ch", fontSize: 15, lineHeight: 1.55 }}
          >
            Omthentic is a quiet parent — a vessel for ventures that bring
            people more honestly into contact with themselves and each other.
          </p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li>
              <Link href="/">Index</Link>
            </li>
            <li>
              <Link href="/vision">Vision</Link>
            </li>
            <li>
              <Link href="/companies">Companies</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Ventures</h4>
          <ul>
            <li>
              <Link href="/companies#interviewmd">InterviewMD</Link>
            </li>
            <li>
              <Link href="/companies#prepbond">Prepbond</Link>
            </li>
            <li>
              <span className="dim">— forthcoming —</span>
            </li>
          </ul>
        </div>
        <div>
          <h4>Index</h4>
          <ul>
            <li>
              <span className="dim">Time</span> &nbsp; <LiveTime />
            </li>
            <li>
              <span className="dim">Locale</span> &nbsp; London · Global
            </li>
            <li>
              <span className="dim">Edition</span> &nbsp; MMXXVI
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div>© Omthentic · A house of aligned technologies</div>
        <div>v 0.1 · listening</div>
      </div>
    </footer>
  );
}
