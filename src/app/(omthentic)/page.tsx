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
    title: "Communication-first",
    body: "We build at the source, where intention becomes expression, instead of adding to the noise of being online.",
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
  { name: "attune" as const, title: "Attune", body: "Communication tools that read intention beyond words.", tag: "Authentic comms" },
  { name: "veridian" as const, title: "Veridian", body: "An identity layer for being genuinely yourself online.", tag: "Authentic identity" },
  { name: "lumen" as const, title: "Lumen", body: "Reflective software for inner alignment and attention.", tag: "Aligned living" },
  { name: "concord" as const, title: "Concord", body: "The shared models, research, and infrastructure.", tag: "Core platform" },
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
          <Reveal className="eyebrow">Aligned authenticity</Reveal>
          <Reveal as="h1" className="wordmark" style={{ transitionDelay: ".1s" }}>
            Omthentic
          </Reveal>
          <Reveal as="p" className="orb-tag" style={{ transitionDelay: ".2s" }}>
            The discipline of meaning what you make, and making what you mean.
          </Reveal>
          <Reveal className="hero-cta" style={{ transitionDelay: ".3s" }}>
            <Link href="/contact" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link href="/vision" className="btn btn-ghost">
              Read the manifesto
            </Link>
          </Reveal>
          <Reveal className="orb-foot" style={{ transitionDelay: ".4s" }}>
            Four ventures · More forthcoming
          </Reveal>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <Reveal as="h2" className="intro-head">
            Technology in resonance with who you truly are.
          </Reveal>
          <Reveal as="p" className="lead" style={{ transitionDelay: ".1s" }}>
            Omthentic builds the companies that return communication to its
            source: aligned, authentic, alive. We make technologies that help
            people become more of who they already are.
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
              authentic human communication, and shares the philosophy,
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
            <Reveal as="h2">One intention, many instruments.</Reveal>
            <Reveal as="p" className="lead">
              Four independent companies on a shared foundation.{" "}
              <span style={{ color: "var(--accent)" }}>
                Names are placeholders, swap for the real ventures.
              </span>
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
