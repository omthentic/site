import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../_components/Reveal";
import { VentureGlyph } from "../_components/VentureGlyph";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "The ventures Omthentic raises, why now is the moment, and the people assembled around the conviction.",
};

const ventures = [
  {
    name: "attune" as const,
    title: "Attune",
    desc: "Communication tools that read intention beyond words, so what you mean is what arrives.",
    tag: "Authentic comms",
  },
  {
    name: "veridian" as const,
    title: "Veridian",
    desc: "An identity layer for being genuinely yourself online, with presence you actually own.",
    tag: "Authentic identity",
  },
  {
    name: "lumen" as const,
    title: "Lumen",
    desc: "Reflective software for inner alignment, bringing attention back to what actually matters to you.",
    tag: "Aligned living",
  },
  {
    name: "concord" as const,
    title: "Concord",
    desc: "The shared foundation of models, infrastructure, and research every Omthentic venture is built on.",
    tag: "Core platform",
  },
];

const why = [
  {
    meta: "The threat",
    title: "Synthesis is everywhere",
    body: "When anything can be generated, every signal becomes suspect, and trust, the basis of all communication, is the first casualty.",
  },
  {
    meta: "The opening",
    title: "Realness becomes premium",
    body: "In a world of infinite copies, what is genuinely yours becomes priceless. The market for the authentic has never been larger.",
  },
  {
    meta: "The window",
    title: "The defaults are still forming",
    body: "The norms for how AI mediates human connection are being set right now. We intend to set them toward alignment, before they harden.",
  },
];

const team = [
  {
    glyph: "◈",
    name: "Founder Name",
    role: "Founder & Steward",
    body: "Holds the intention across every venture. Placeholder bio, replace with the real story.",
  },
  {
    glyph: "✦",
    name: "Co-founder Name",
    role: "Product & Design",
    body: "Translates the philosophy into things people can actually feel. Placeholder bio.",
  },
  {
    glyph: "◇",
    name: "Co-founder Name",
    role: "Engineering & Research",
    body: "Builds the source layer the ventures stand on. Placeholder bio.",
  },
  {
    glyph: "+",
    name: "You, perhaps",
    role: "Open invitation",
    body: "We are assembling the founding circle. If this resonates, the door is below.",
  },
];

export default function CompaniesPage() {
  return (
    <main>
      <section id="ventures">
        <div className="wrap">
          <div className="ventures-head">
            <div className="sec-head" style={{ marginBottom: 0, maxWidth: "54ch" }}>
              <Reveal className="eyebrow">The ventures</Reveal>
              <Reveal as="h2">One intention, many instruments.</Reveal>
              <Reveal as="p" className="lead">
                Omthentic is a parent company. Each venture is an independent
                company solving a different face of the same problem: how to keep
                human communication true as technology accelerates.
              </Reveal>
            </div>
            <Reveal className="mono-meta" style={{ paddingBottom: 6 }}>
              Placeholder names, swap for real ventures
            </Reveal>
          </div>

          <div className="venture-list">
            {ventures.map((v) => (
              <Reveal as="article" key={v.title} className="venture">
                <VentureGlyph name={v.name} />
                <div className="v-name">{v.title}</div>
                <div className="v-desc">{v.desc}</div>
                <div className="v-tag">{v.tag}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="whynow" id="whynow">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: "clamp(28px,4vh,44px)" }}>
            Why now
          </Reveal>
          <Reveal as="p" className="big">
            The same wave that makes inauthenticity infinite makes{" "}
            <span className="hl">authenticity</span> the rarest, most valuable
            thing a technology can offer.
          </Reveal>
          <div className="why-cols">
            {why.map((c, i) => (
              <Reveal key={c.title} className="col" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="mono-meta">{c.meta}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="team">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">Who we are</Reveal>
            <Reveal as="h2">Assembled around a conviction.</Reveal>
            <Reveal as="p" className="lead">
              We are builders, researchers, and people who have felt technology
              pull them away from themselves, and decided to build the antidote
              instead.
            </Reveal>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal
                key={`${m.name}-${i}`}
                className="member"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="avatar">{m.glyph}</div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.body}</p>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: "clamp(48px,7vh,80px)" }}>
            <Reveal>
              <Link href="/contact" className="btn btn-primary">
                Resonate with us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
