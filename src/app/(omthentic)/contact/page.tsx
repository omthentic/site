import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";
import { SignalForm } from "../_components/SignalForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Leave a frequency. Omthentic reaches the investors, builders, and early believers genuinely aligned with this.",
};

const channels = [
  {
    meta: "For investors",
    title: "Back the long resonance",
    body: "We share our thesis, structure, and the case for a house built on alignment.",
    href: "mailto:invest@omthentic.ai",
    label: "invest@omthentic.ai →",
  },
  {
    meta: "For builders",
    title: "Join the founding circle",
    body: "Engineers, designers, and researchers who want their work to mean something.",
    href: "mailto:build@omthentic.ai",
    label: "build@omthentic.ai →",
  },
  {
    meta: "For believers",
    title: "Walk with us early",
    body: "Follow the manifesto as it becomes real, and shape it while it is still soft.",
    href: "mailto:hello@omthentic.ai",
    label: "Join the circle →",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="join" id="join">
        <div className="wrap">
          <Reveal
            className="eyebrow"
            style={{ justifyContent: "center", display: "flex", marginBottom: "clamp(24px,3vh,36px)" }}
          >
            Resonate with us
          </Reveal>
          <Reveal as="h2">If something here moved you, that was the point.</Reveal>
          <Reveal as="p" className="lead">
            Leave a frequency. We will reach the people who are genuinely aligned
            with this: investors, builders, and early believers who feel the same
            pull.
          </Reveal>
          <Reveal>
            <SignalForm />
          </Reveal>

          <div className="channels">
            {channels.map((c, i) => (
              <Reveal
                key={c.title}
                className="channel"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mono-meta">{c.meta}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <a className="link" href={c.href}>
                  {c.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
