import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "The Omthentic manifesto, the principles every venture inherits, and the mental models we think with.",
};

const principles = [
  {
    num: "01",
    title: "Alignment before scale",
    body: "A misaligned thing that grows fast becomes a faster misalignment. We earn the right to scale by first being true.",
  },
  {
    num: "02",
    title: "The human is the point",
    body: "The person on the other side is the reason the system exists at all, ahead of engagement, retention, or any metric.",
  },
  {
    num: "03",
    title: "Authenticity is a technology",
    body: "Being real is the hardest thing to build, and the thing we choose to be best at.",
  },
  {
    num: "04",
    title: "Resonance over reach",
    body: "We would rather move one person to their core than touch a million on the surface. Depth is our distribution.",
  },
  {
    num: "05",
    title: "Build the source, not the noise",
    body: "Most software adds to the noise of being alive. We build at the source, where intention becomes expression.",
  },
  {
    num: "06",
    title: "Purpose compounds",
    body: "Small, aligned acts repeated over a long horizon outrun any sprint. We are building for decades, not quarters.",
  },
];

const models = [
  {
    meta: "Model · Signal & noise",
    title: "The Authenticity Gradient",
    body: "Every interaction sits somewhere between performance and presence. We design to move people one step toward presence.",
  },
  {
    meta: "Model · Alignment",
    title: "The Alignment Stack",
    body: "Intention → expression → interface → outcome. A feature is only finished when all four layers say the same thing.",
  },
  {
    meta: "Model · Time",
    title: "The Long Resonance",
    body: "We weigh decisions by how they sound in ten years, not how they spike this week. Compounding alignment is the only durable moat.",
  },
];

export default function VisionPage() {
  return (
    <main>
      <section className="manifesto" id="manifesto">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: "clamp(40px,8vh,80px)" }}>
            Manifesto
          </Reveal>
          <Reveal as="p" className="verse">
            We are surrounded by technology that fractures attention, flattens
            the voice, and quietly rewards the inauthentic.
          </Reveal>
          <Reveal as="p" className="verse">
            Technology is not the enemy. It is an amplifier, and most of it has
            been pointed at helping us hide: to look better than we are, to cover
            the quiet fear that we are not enough.
          </Reveal>
          <Reveal as="p" className="verse dim indent">
            We believe the opposite is possible.
          </Reveal>
          <Reveal as="p" className="verse">
            That a tool can return you to yourself, and amplify who you already
            are instead of compensating for who you fear you are not. That
            expression, at its source, is <span className="hl">resonance</span>:
            two beings vibrating in truth.
          </Reveal>
          <Reveal as="p" className="verse dim indent">
            Our name holds it: <span className="hl">Om</span>, the oldest sound,
            and <span className="hl">authentic</span>, the oldest promise.
          </Reveal>
          <Reveal as="p" className="verse">
            We start from one fact, that you are already enough, and build from
            there. Omthentic exists to build that conviction into software, and
            to raise the ventures brave enough to keep it sacred.
          </Reveal>
          <Reveal className="sig">
            <div className="mono-meta">The founding intention</div>
          </Reveal>
        </div>
      </section>

      <section id="principles">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">Principles &amp; beliefs</Reveal>
            <Reveal as="h2">What we hold true before we hold anything else.</Reveal>
            <Reveal as="p" className="lead">
              Every Omthentic venture inherits these constraints, the ones we
              protect even when it costs us.
            </Reveal>
          </div>
          <div className="principles-grid">
            {principles.map((p, i) => (
              <Reveal
                as="article"
                key={p.num}
                className="principle"
                style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
              >
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="frameworks">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">Mental models &amp; frameworks</Reveal>
            <Reveal as="h2">The instruments we think with.</Reveal>
            <Reveal as="p" className="lead">
              A shared set of models keeps a group of companies coherent. These
              are the lenses every team uses to decide what is worth building.
            </Reveal>
          </div>

          <div className="frame-wrap">
            <Reveal>
              <svg
                className="resonance-diagram"
                viewBox="0 0 400 400"
                role="img"
                aria-label="The Resonance Model: alignment radiating from self through voice and technology into the world"
              >
                <circle className="ring pulse-ring" cx="200" cy="200" r="180" stroke="var(--accent-line)" />
                <circle className="ring pulse-ring b" cx="200" cy="200" r="180" stroke="var(--accent-line)" />
                <circle className="ring pulse-ring c" cx="200" cy="200" r="180" stroke="var(--accent-line)" />
                <circle className="ring" cx="200" cy="200" r="180" />
                <circle className="ring" cx="200" cy="200" r="128" />
                <circle className="ring glow" cx="200" cy="200" r="76" />
                <circle className="core-dot" cx="200" cy="200" r="5" />
                <text className="lbl core" x="200" y="186" textAnchor="middle">Self</text>
                <text className="lbl" x="200" y="135" textAnchor="middle">Voice</text>
                <text className="lbl" x="200" y="83" textAnchor="middle">Technology</text>
                <text className="lbl" x="200" y="34" textAnchor="middle">World</text>
              </svg>
            </Reveal>
            <Reveal className="frame-copy" style={{ transitionDelay: ".1s" }}>
              <div className="mono-meta">Framework 01</div>
              <h2>The Resonance Model</h2>
              <p className="lead">
                Everything we build moves outward from the same center. When the
                self is aligned, the voice is true; when the voice is true,
                technology can carry it; when technology carries it faithfully,
                it changes the world without distorting the person. Break the
                chain anywhere and you get noise. Keep it whole and you get
                resonance.
              </p>
            </Reveal>
          </div>

          <div className="models">
            {models.map((m, i) => (
              <Reveal
                as="article"
                key={m.title}
                className="model"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mono-meta">{m.meta}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
