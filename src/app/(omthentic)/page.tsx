import Link from "next/link";
import { ResonanceHero } from "./_components/ResonanceHero";
import { AlignmentField } from "./_components/AlignmentField";
import { Reveal } from "./_components/Reveal";

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <ResonanceHero
          className="hero-canvas"
          spawnInterval={1.7}
          grow={165}
          pulseRate={1.25}
        />

        <div className="hero-inner">
          <div className="hero-center reveal is-in">
            <h1 className="hero-wordmark">
              <span className="accent-lead">Om</span>
              <span className="om">thentic</span>
            </h1>
            <p className="hero-sub">
              Aligned&nbsp;authenticity — the discipline of meaning what you
              make, and making what you mean.
            </p>
          </div>

          <div className="hero-foot">
            <div className="col" style={{ textAlign: "center", margin: "0 auto" }}>
              <strong>Two ventures</strong>
              <br />
              InterviewMD · Prepbond
              <br />
              More forthcoming.
            </div>
          </div>
        </div>
      </header>

      <section className="section section--tall">
        <div className="shell">
          <div className="grid-12">
            <Reveal style={{ gridColumn: "2 / span 1" }}>
              <div className="eyebrow">II — Statement</div>
            </Reveal>
            <div style={{ gridColumn: "3 / span 9" }}>
              <Reveal as="p" className="display display-l">
                Every technology is a sentence the world will read. We build
                sentences that mean what they say.
              </Reveal>
              <Reveal
                as="p"
                className="lede"
                delay={2}
                style={{ marginTop: 56, color: "var(--ink-dim)" }}
              >
                Omthentic is the parent vessel for ventures that close the
                distance between intention and expression. We do not move fast.
                We move{" "}
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  into resonance
                </em>
                .
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="rule" />
      </div>

      <section className="section" id="ventures">
        <div className="shell">
          <div className="grid-12" style={{ marginBottom: 56 }}>
            <Reveal style={{ gridColumn: "2 / span 1" }}>
              <div className="eyebrow">III — Ventures</div>
            </Reveal>
            <Reveal style={{ gridColumn: "3 / span 8" }} delay={1}>
              <h2 className="display display-m" style={{ maxWidth: "22ch" }}>
                Each company is a frequency — a particular way of being heard.
              </h2>
            </Reveal>
          </div>

          <div className="shell-inner">
            <Reveal as={Link} className="co-card" href="/companies#interviewmd">
              <span className="num">01</span>
              <div>
                <div className="name">
                  Interview<span className="ital">MD</span>
                </div>
                <div className="desc">
                  An interview practice for clinicians — where what you&apos;ve
                  actually lived in medicine becomes the language you use to be
                  chosen.
                </div>
                <div className="meta">
                  <span>
                    <strong>Sector</strong> &nbsp; Medical careers
                  </span>
                  <span>
                    <strong>Phase</strong> &nbsp; In operation
                  </span>
                  <span>
                    <strong>Stewards</strong> &nbsp; 04
                  </span>
                </div>
              </div>
              <span className="visit">Enter →</span>
            </Reveal>

            <Reveal
              as={Link}
              className="co-card"
              delay={1}
              href="/companies#prepbond"
            >
              <span className="num">02</span>
              <div>
                <div className="name">
                  Prep<span className="ital">bond</span>
                </div>
                <div className="desc">
                  A preparation companion that bonds a person to the version of
                  themselves they&apos;re rehearsing toward. Quiet, recursive,
                  alive.
                </div>
                <div className="meta">
                  <span>
                    <strong>Sector</strong> &nbsp; Personal practice
                  </span>
                  <span>
                    <strong>Phase</strong> &nbsp; Early access
                  </span>
                  <span>
                    <strong>Stewards</strong> &nbsp; 03
                  </span>
                </div>
              </div>
              <span className="visit">Enter →</span>
            </Reveal>

            <Reveal className="co-card" delay={2} style={{ opacity: 0.55 }}>
              <span className="num">03</span>
              <div>
                <div className="name italic faint">— forthcoming —</div>
                <div className="desc">
                  A third venture is in incubation. We do not announce until the
                  work is honest.
                </div>
                <div className="meta">
                  <span>
                    <strong>Phase</strong> &nbsp; Listening
                  </span>
                </div>
              </div>
              <span className="visit dim">∅</span>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="rule" />
      </div>

      <section
        className="section"
        id="principles"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <AlignmentField
          className="bg-field"
          density={0.5}
          speed={0.8}
          pull={0.8}
          spread={1.2}
        />

        <div className="shell" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid-12" style={{ marginBottom: 56 }}>
            <Reveal style={{ gridColumn: "2 / span 1" }}>
              <div className="eyebrow">IV — Tenets</div>
            </Reveal>
            <Reveal style={{ gridColumn: "3 / span 8" }} delay={1}>
              <h2 className="display display-m" style={{ maxWidth: "24ch" }}>
                What we hold — five tenets that govern every line of code, every
                interaction, every hire.
              </h2>
            </Reveal>
          </div>

          <div style={{ margin: "0 auto", maxWidth: 1200 }}>
            {[
              {
                n: "i.",
                t: (
                  <>
                    <em>Alignment</em> precedes ability.
                  </>
                ),
                d: "A talented system that points the wrong direction is a sharper mistake. We choose the slow correctness of pointing true.",
                delay: 0,
              },
              {
                n: "ii.",
                t: (
                  <>
                    The product is the <em>person</em>.
                  </>
                ),
                d: "Our software's purpose is to leave the user more themselves than it found them. Tools are temporary. Becoming is the work.",
                delay: 1,
              },
              {
                n: "iii.",
                t: (
                  <>
                    Communication is <em>sacred infrastructure</em>.
                  </>
                ),
                d: "Every interface mediates how a soul meets the world. We treat it with the seriousness of architecture and the care of a letter.",
                delay: 2,
              },
              {
                n: "iv.",
                t: (
                  <>
                    Resonance over <em>reach</em>.
                  </>
                ),
                d: "A million people unmoved is a louder kind of silence. We measure ourselves by the depth of recognition we produce, not the volume.",
                delay: 3,
              },
              {
                n: "v.",
                t: (
                  <>
                    We build as if the future is <em>watching</em>.
                  </>
                ),
                d: "Because it is. The artifacts we make outlive our intentions; we hold ourselves to the standard of what will be inherited.",
                delay: 4,
              },
            ].map((p) => (
              <Reveal
                as="article"
                className="principle"
                key={p.n}
                delay={p.delay}
              >
                <div className="pn">{p.n}</div>
                <div>
                  <div className="pt">{p.t}</div>
                  <p className="pd">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="rule" />
      </div>

      <section className="section">
        <div className="shell">
          <div className="grid-12" style={{ marginBottom: 80 }}>
            <Reveal style={{ gridColumn: "2 / span 1" }}>
              <div className="eyebrow">V — Method</div>
            </Reveal>
            <Reveal style={{ gridColumn: "3 / span 8" }} delay={1}>
              <h2 className="display display-m" style={{ maxWidth: "24ch" }}>
                How a venture is born from this house — three movements, in
                order.
              </h2>
            </Reveal>
          </div>

          <div className="grid-12">
            {[
              {
                col: "3 / span 3",
                k: "01  /  Listen",
                h: "A held silence.",
                p: "Before code: time with the person whose problem we mean to honor. We do not move until the shape of the thing is clear to all who must carry it.",
                delay: 0,
              },
              {
                col: "6 / span 3",
                k: "02  /  Render",
                h: "The small honest object.",
                p: "We craft the first version as if it were the last — small, complete, and in possession of itself. Nothing extends until the core resonates.",
                delay: 1,
              },
              {
                col: "9 / span 3",
                k: "03  /  Release",
                h: "Into the right hands.",
                p: "We do not broadcast. We place. The earliest people to hold a venture set its grain forever; we choose them with the patience of an editor.",
                delay: 2,
              },
            ].map((m) => (
              <Reveal key={m.k} style={{ gridColumn: m.col }} delay={m.delay}>
                <div className="mono dim" style={{ marginBottom: 18 }}>
                  {m.k}
                </div>
                <h3
                  className="display display-m"
                  style={{
                    fontSize: "clamp(24px, 2.2vw, 36px)",
                    margin: "0 0 18px",
                  }}
                >
                  {m.h}
                </h3>
                <p className="dim" style={{ fontSize: 15, lineHeight: 1.6 }}>
                  {m.p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="rule" />
      </div>

      <section className="section" id="stewards">
        <div className="shell">
          <div className="grid-12" style={{ marginBottom: 80 }}>
            <Reveal style={{ gridColumn: "2 / span 1" }}>
              <div className="eyebrow">VI — Stewards</div>
            </Reveal>
            <Reveal style={{ gridColumn: "3 / span 8" }} delay={1}>
              <h2 className="display display-m" style={{ maxWidth: "24ch" }}>
                A small house. Each person here was chosen for the way they
                listen.
              </h2>
            </Reveal>
          </div>

          <div className="grid-12">
            {[
              {
                col: "3 / span 2",
                glyph: "a",
                name: "A. Renard",
                role: "Founder  ·  Director of Resonance",
                delay: 0,
                italic: false,
              },
              {
                col: "5 / span 2",
                glyph: "m",
                name: "M. Halász",
                role: "Architecture  ·  Practice",
                delay: 1,
                italic: false,
              },
              {
                col: "7 / span 2",
                glyph: "s",
                name: "S. Okonkwo",
                role: "Language  ·  Editorial",
                delay: 2,
                italic: false,
              },
              {
                col: "9 / span 2",
                glyph: "+",
                name: "A seat held",
                role: "For one we have not yet met",
                delay: 3,
                italic: true,
              },
            ].map((s) => (
              <Reveal
                key={s.name}
                className="steward"
                style={{ gridColumn: s.col }}
                delay={s.delay}
              >
                <div className="portrait">
                  <div className="glyph">{s.glyph}</div>
                </div>
                <div className={`sname${s.italic ? " italic dim" : ""}`}>
                  {s.name}
                </div>
                <div className="srole">{s.role}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="rule" />
      </div>

      <section
        className="section section--tall"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <AlignmentField
          className="bg-field"
          density={0.5}
          speed={0.8}
          pull={0.8}
          spread={1.2}
          style={{ opacity: 0.35 }}
        />
        <div className="shell" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid-12">
            <Reveal style={{ gridColumn: "2 / span 1" }}>
              <div className="eyebrow">VII — Invitation</div>
            </Reveal>
            <div style={{ gridColumn: "3 / span 9" }}>
              <Reveal
                as="p"
                className="display display-xl"
                style={{ maxWidth: "16ch" }}
              >
                If you recognize the work, you are already part of it.
              </Reveal>
              <Reveal
                delay={2}
                style={{
                  marginTop: 64,
                  display: "flex",
                  gap: 18,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Link className="btn" href="/contact">
                  <span>Begin a conversation</span>
                  <span className="arrow" />
                </Link>
                <Link className="link-arrow" href="/vision">
                  Read the full vision
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
