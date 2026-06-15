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
    name: "interviewmd" as const,
    title: "InterviewMD",
    desc: "Helping people win the highest-stakes interviews by becoming genuinely themselves, not by performing a polished mask. First market: medical school admissions. Fifteen years of method, 1,000+ students, 14,000+ coaching hours, now amplified by AI.",
    tag: "Live · Venture 01",
  },
  {
    name: "attune" as const,
    title: "High-stakes interviews",
    desc: "The same method extended to every room where a person is tempted to perform instead of be: other admissions, then career interviews.",
    tag: "Horizon",
  },
  {
    name: "veridian" as const,
    title: "Authentic identity",
    desc: "Helping people be genuinely themselves, with presence and a voice they actually own.",
    tag: "Horizon",
  },
  {
    name: "concord" as const,
    title: "The shared foundation",
    desc: "The method, models, research, and infrastructure every Omthentic venture is built on.",
    tag: "Core",
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
    name: "Shanaka Jayakody",
    role: "Founder & Steward",
    body: "Fifteen years ago, refused to perform in his own medical interviews and was accepted to all of them. Has since guided 1,000+ students from rehearsed and robotic to confident and in flow. Holds the intention across every venture.",
  },
  {
    glyph: "✦",
    name: "The seat is open",
    role: "Product & Design",
    body: "Someone who can translate this philosophy into things people can actually feel. We name people here only when they are real.",
  },
  {
    glyph: "◇",
    name: "The seat is open",
    role: "Engineering & Research",
    body: "Someone who can build the source layer the ventures stand on without ever letting the tool become a mask.",
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
              <Reveal as="h2">One conviction, proven one venture at a time.</Reveal>
              <Reveal as="p" className="lead">
                Omthentic is a parent company. We earn each new venture by proving
                the last. One is live today, solving the same problem every future
                venture will: how to stay genuinely yourself when the pressure to
                perform is highest.
              </Reveal>
            </div>
            <Reveal className="mono-meta" style={{ paddingBottom: 6 }}>
              One venture live, the rest on the horizon
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
