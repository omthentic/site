import Link from "next/link";
import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";

export function Invitation() {
  return (
    <section className="invitation">
      <div className="wrap">
        <Reveal className="invitation-inner">
          <div>
            <p className="eyebrow">The next conversation</p>
            <h2>
              Build something
              <br />
              that matters.
            </h2>
          </div>
          <div className="invitation-aside">
            <p>
              For the builders, the backers, and the people who see things a
              little differently.
            </p>
            <Link
              href="/contact"
              className="round-link"
              aria-label="Start a conversation"
            >
              <Arrow diagonal />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
