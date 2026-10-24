import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./_components/Arrow";
import { Reveal } from "./_components/Reveal";
import { Invitation } from "./_components/Invitation";
import { principles, proof } from "./content";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero wrap" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span className="eyebrow">
            <span className="status-dot" /> A venture house for human potential
          </span>
          <span className="edition">A different starting point.</span>
        </div>
        <div className="hero-heading-row">
          <h1 id="hero-title">
            More human.
            <br />
            <span className="soft-word">By design.</span>
          </h1>
          <div className="hero-aside">
            <p>
              We build technology that helps you express who you are.
              <br />
              <strong>Because you are already enough.</strong>
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/companies">
                Explore our ventures <Arrow />
              </Link>
              <Link className="text-link" href="/vision">
                Our approach <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-image image-frame">
          <Image
            src="/images/forest.jpg"
            alt="Morning sunlight finding its way through a quiet forest"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 94vw"
            className="parallax-image"
          />
          <div className="image-shade" />
          <div className="hero-image-top">
            <span className="eyebrow">Rooted in what makes us human.</span>
            <span className="image-cross" aria-hidden="true">
              +
            </span>
          </div>
          <div className="hero-image-bottom">
            <span>
              Growth comes
              <br />
              from within.
            </span>
            <a
              href="#the-house"
              className="image-scroll"
              aria-label="Discover the Omthentic house"
            >
              <span>Discover our world</span>
              <span className="scroll-circle">↓</span>
            </a>
          </div>
        </div>
        <div className="image-caption">
          <span>Human nature. Our starting point.</span>
          <span>01 — The house</span>
        </div>
      </section>

      <section className="intro-section wrap section-space" id="the-house">
        <Reveal>
          <p className="eyebrow section-label">01 / Why we exist</p>
        </Reveal>
        <div>
          <Reveal as="h2" className="statement">
            The world doesn’t need
            <br />
            another version of you.
            <br />
            <span className="muted">It needs you.</span>
          </Reveal>
          <Reveal className="intro-bottom">
            <p>
              Omthentic is a home for ventures that help people think clearly,
              speak honestly, and show up as themselves. We pair years of
              working with people with thoughtfully built technology.
            </p>
            <Link className="text-link" href="/vision">
              Our point of view <Arrow diagonal />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="work-section section-space" id="ventures">
        <div className="wrap">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">02 / What we’re building</p>
              <h2>A belief, put to work.</h2>
            </div>
            <Link href="/companies" className="text-link">
              Explore our ventures <Arrow diagonal />
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/companies#interviewmd" className="venture-feature">
              <div className="venture-visual image-frame">
                <Image
                  src="/images/conversation.jpg"
                  alt="Two people having an attentive conversation across a table"
                  fill
                  sizes="(max-width: 760px) 100vw, 60vw"
                />
                <span className="venture-wordmark">
                  interview<span>md</span>
                  <span className="wordmark-plus">+</span>
                </span>
                <span className="venture-image-caption">
                  Confidence in your own voice.
                </span>
              </div>
              <div className="venture-copy">
                <div className="venture-category">
                  <span className="eyebrow">Our first venture</span>
                  <span className="live-label">
                    <span className="status-dot" /> Live
                  </span>
                </div>
                <div>
                  <h3>
                    Show up
                    <br />
                    as yourself.
                  </h3>
                  <p>
                    InterviewMD helps aspiring doctors find their voice in
                    medical school interviews. Real confidence, grounded in who
                    they already are.
                  </p>
                </div>
                <div className="venture-card-bottom">
                  <span>Discover InterviewMD</span>
                  <span className="small-round">
                    <Arrow diagonal />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
          <div className="proof-row">
            {proof.map((item) => (
              <Reveal key={item.label} className="proof-item">
                <p className="proof-value">
                  {item.value}
                  <span>{item.unit}</span>
                </p>
                <p>{item.label}</p>
              </Reveal>
            ))}
          </div>
          <p className="proof-note">
            The coaching experience behind InterviewMD.
          </p>
        </div>
      </section>

      <section className="approach-section wrap section-space">
        <Reveal className="approach-heading">
          <p className="eyebrow">03 / How we work</p>
          <h2>
            Better tools.
            <br />
            <span className="soft-word">More yourself.</span>
          </h2>
          <p>
            A few things we come back to, in every product and every decision.
          </p>
          <Link href="/vision#principles" className="text-link">
            The principles behind the work <Arrow diagonal />
          </Link>
        </Reveal>
        <div className="principle-list">
          {principles.map((item, i) => (
            <Reveal key={item.title}>
              <details className="principle" open={i === 0}>
                <summary>
                  <span className="principle-number">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <span className="expand-mark" aria-hidden="true" />
                </summary>
                <div className="principle-body">
                  <p>{item.body}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
      <Invitation />
    </main>
  );
}
