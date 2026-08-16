import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-in">
          <div>
            <div className="brand">
              <BrandMark />
              Omthentic
            </div>
            <p className="tag">
              A parent house for aligned, authentic, communication-based
              technologies.
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>The house</h4>
              <Link href="/vision">Manifesto</Link>
              <Link href="/vision#principles">Principles</Link>
              <Link href="/vision#frameworks">Frameworks</Link>
              <Link href="/companies#whynow">Why now</Link>
            </div>
            <div className="foot-col">
              <h4>Ventures</h4>
              <Link href="/companies#ventures">Attune</Link>
              <Link href="/companies#ventures">Veridian</Link>
              <Link href="/companies#ventures">Lumen</Link>
              <Link href="/companies#ventures">Concord</Link>
            </div>
            <div className="foot-col">
              <h4>Connect</h4>
              <a href="mailto:invest@omthentic.ai">Investors</a>
              <a href="mailto:build@omthentic.ai">Builders</a>
              <Link href="/contact">Believers</Link>
              <a href="https://www.shanakajayakody.com/">Founder</a>
            </div>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 Omthentic. Built in resonance.</span>
          <span>Om · authentic · aligned</span>
        </div>
      </div>
    </footer>
  );
}
