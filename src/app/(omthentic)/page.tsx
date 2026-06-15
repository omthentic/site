import Link from "next/link";
import { Reveal } from "./_components/Reveal";
import { VentureGlyph } from "./_components/VentureGlyph";
import { SignalForm } from "./_components/SignalForm";
import { OrbHero } from "./_components/OrbHero";

const props = [
  {
    icon: (
      <svg className="ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="14" stroke="var(--accent-line)" strokeWidth="1.3" />
        <circle cx="18" cy="18" r="5" stroke="var(--accent)" strokeWidth="1.3" />
      </svg>
    ),
    title: "Aligned by design",
    body: "The human is the point, ahead of any metric. Every product moves people toward presence.",
  },
  {
    icon: (
      <svg className="ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M6 18c5-9 19-9 24 0M6 18c5 9 19 9 24 0" stroke="var(--accent)" strokeWidth="1.3" />
      </svg>
    ),
    title: "Amplify, never compensate",
    body: "Technology should express more of who you already are, not hide the gap between who you are and who you fear you must be.",
  },
  {
    icon: (
      <svg className="ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 5v26M5 18h26" stroke="var(--accent-line)" strokeWidth="1.3" />
        <circle cx="18" cy="18" r="7" stroke="var(--accent)" strokeWidth="1.3" />
      </svg>
    ),
    title: "Authenticity as a moat",
    body: "In a world of infinite copies, what is genuinely yours becomes priceless. We make realness the product.",
  },
];

const thesis = [
  {
    meta: "The threat",
    title: "Synthesis is everywhere",
    body: "When anything can be generated, every signal becomes suspect, and trust, the basis of communication, is the first casualty.",
  },
  {
    meta: "The opening",
    title: "Realness goes premium",
    body: "Scarcity flips. What is genuinely, verifiably yours becomes the thing people will pay for and stay for.",
  },
  {
    meta: "The window",
    title: "The defaults are forming",
    body: "The norms for how AI mediates connection are being set right now. We intend to set them toward alignment before they harden.",
  },
];

const ventures = [
  { name: "interviewmd" as const, title: "InterviewMD", body: "Helping people win the highest-stakes interviews by becoming genuinely themselves. First market: medical school admissions.", tag: "Live · Venture 01" },
  { name: "attune" as const, title: "High-stakes interviews", body: "The same method, extended to every room where a person is tempted to perform instead of be.", tag: "Horizon" },
  { name: "veridian" as const, title: "Authentic identity", body: "Helping people be genuinely themselves, with presence they actually own.", tag: "Horizon" },
  { name: "concord" as const, title: "The shared foundation", body: "The method, models, and research every venture is built on.", tag: "Core" },
];

const paths = [
  {
    meta: "For investors",
    title: "Back the long resonance",
    body: "The thesis, the structure, and the case for a house built on alignment over hype.",
    href: "mailto:invest@omthentic.ai",
    label: "invest@omthentic.ai →",
  },
  {
    meta: "For builders",
    title: "Join the founding circle",
    body: "Engineers, designers, researchers who want their work to actually mean something.",
    href: "mailto:build@omthentic.ai",
    label: "build@omthentic.ai →",
  },
  {
    meta: "For believers",
    title: "Walk with us early",
    body: "Follow the manifesto as it becomes real, and help shape it while it is still soft.",
    href: "/contact",
    label: "Join the circle →",
    internal: true,
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-orb">
        <OrbHero />
        <div className="orb-stage">
          <Reveal as="h1" className="wordmark">
            Omthentic
          </Reveal>
          <Reveal as="p" className="orb-tag" style={{ transitionDelay: ".1s" }}>
            You are already enough. We build the technology that helps you
            express it.
          </Reveal>
          <Reveal className="hero-cta" style={{ transitionDelay: ".2s" }}>
            <Link href="/contact" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link href="/vision" className="btn btn-ghost">
              Read the manifesto
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <Reveal as="h2" className="intro-head">
            Technology that amplifies who you are, not who you fear you are not.
          </Reveal>
          <Reveal as="p" className="lead" style={{ transitionDelay: ".1s" }}>
            Most technology is getting better at helping us hide. Omthentic
            builds the opposite: technology that amplifies who you already are
            instead of compensating for who you fear you are not. We start from
            one fact, that you are already enough, and build from there.
          </Reveal>
        </div>
      </section>

      <section id="what">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">What we are</Reveal>
            <Reveal as="h2">A house built on one conviction.</Reveal>
            <Reveal as="p" className="lead">
              Omthentic raises ventures that each protect a different face of
              authentic human expression, and shares the philosophy, method,
              research, and infrastructure between them.
            </Reveal>
          </div>
          <div className="props">
            {props.map((p, i) => (
              <Reveal
                as="article"
                key={p.title}
                className="prop"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {p.icon}
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="thesis" id="why">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: "clamp(26px,4vh,40px)" }}>
            Why now
          </Reveal>
          <Reveal as="p" className="big">
            The wave that makes inauthenticity infinite makes{" "}
            <span className="hl">authenticity</span> the most valuable thing a
            technology can offer.
          </Reveal>
          <div className="thesis-cols">
            {thesis.map((t, i) => (
              <Reveal key={t.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="mono-meta">{t.meta}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">The ventures</Reveal>
            <Reveal as="h2">One conviction, proven one venture at a time.</Reveal>
            <Reveal as="p" className="lead">
              One venture is live today. The rest we name only when they are real.
            </Reveal>
          </div>
          <div className="vstrip">
            {ventures.map((v, i) => (
              <Reveal
                as="article"
                key={v.title}
                className="vcard"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <VentureGlyph name={v.name} />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                <div className="t">{v.tag}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ways">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">Ways in</Reveal>
            <Reveal as="h2">Three doors into the same house.</Reveal>
          </div>
          <div className="paths">
            {paths.map((p, i) => (
              <Reveal key={p.title} className="path" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="mono-meta">{p.meta}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                {p.internal ? (
                  <Link className="link" href={p.href}>
                    {p.label}
                  </Link>
                ) : (
                  <a className="link" href={p.href}>
                    {p.label}
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="join" id="cta">
        <div className="wrap">
          <Reveal
            className="eyebrow"
            style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(22px,3vh,34px)" }}
          >
            Resonate with us
          </Reveal>
          <Reveal as="h2">If something here moved you, that was the point.</Reveal>
          <Reveal as="p" className="lead">
            Leave a frequency. We reach out to the people genuinely aligned with
            this.
          </Reveal>
          <Reveal>
            <SignalForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
