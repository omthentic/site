import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../_components/Reveal";
import { Invitation } from "../_components/Invitation";
import { principles } from "../content";

export const metadata: Metadata = {
  alternates: { canonical: "/vision" },
  title: "Our approach",
  description:
    "You are already enough. The belief behind Omthentic and the principles that guide every venture we build.",
};

const vows = [
  [
    "A person, before a metric.",
    "We begin with a person’s life, not a target for engagement. A useful product should leave someone more capable when they close it.",
  ],
  [
    "Growth, from a good place.",
    "You can be whole and still have room to grow. We create from curiosity and possibility, without asking people to believe they are missing something.",
  ],
  [
    "Depth, before reach.",
    "Make something that matters deeply to one person. Understand why it works. Earn the right to bring it to more people.",
  ],
  [
    "Integrity, even when it costs.",
    "We will pass on a feature, a deal or an opportunity if it asks us to compromise the person using our work.",
  ],
];

export default function VisionPage() {
  return (
    <main id="main-content">
      <section className="wrap page-hero vision-hero">
        <p className="eyebrow">
          <span className="status-dot" /> Our point of view
        </p>
        <h1>
          You are
          <br />
          already <span className="soft-word">enough.</span>
        </h1>
        <div className="vision-hero-foot">
          <p>Four words. The starting point for everything we make.</p>
          <a href="#belief" className="text-link">
            Read our approach <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section className="vision-photo image-frame">
        <Image
          src="/images/forest.jpg"
          alt="Sunlight illuminating trees and new growth on the forest floor"
          fill
          priority
          sizes="100vw"
          className="parallax-image"
        />
        <div className="image-shade" />
        <p>Whole, and still growing.</p>
      </section>
      <section className="wrap manifesto-section section-space" id="belief">
        <Reveal>
          <p className="eyebrow">The belief</p>
          <p className="margin-note">
            Om, the oldest sound.
            <br />
            Authentic, the oldest promise.
          </p>
        </Reveal>
        <div className="manifesto-copy">
          <Reveal>
            <h2>
              You don’t need
              <br />
              to become someone else.
            </h2>
            <p className="large-copy">
              There is a familiar pressure to perform. To sound more impressive.
              To borrow someone else’s certainty. To show the version of
              yourself you think the room wants.
            </p>
            <p>
              We’ve seen what happens when that pressure lifts. The voice
              settles. The conversation changes. A person finds something more
              useful than a perfect answer: confidence in what they actually
              think.
            </p>
            <p>
              That is what we build for. Technology that helps you express what
              is already there, and gives you more room to act on it.
            </p>
          </Reveal>
          <Reveal className="manifesto-pullquote">
            <blockquote>
              You can already swim
              <br />
              across the river.
              <br />
              <span className="soft-word">We build the boat.</span>
            </blockquote>
            <p>
              The work is still yours. A good tool simply extends your reach.
            </p>
          </Reveal>
          <Reveal>
            <h3>Build to be needed less.</h3>
            <p>
              Our work succeeds when you carry the confidence with you. Into the
              interview. Into the next conversation. Into the part of life where
              the tool is no longer there.
            </p>
            <p>
              Every venture begins with that responsibility. We want the people
              who use our work to leave with more trust in themselves.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="principles-section section-space" id="principles">
        <div className="wrap">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">The practice</p>
              <h2>Belief becomes behavior.</h2>
            </div>
          </Reveal>
          <div className="vow-grid">
            {vows.map(([title, body], i) => (
              <Reveal className="vow" key={title}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap method-section section-space" id="frameworks">
        <Reveal>
          <p className="eyebrow">From belief to product</p>
          <h2>
            Keep the person
            <br />
            at the center.
          </h2>
        </Reveal>
        <div className="method-steps">
          {principles.map((p, i) => (
            <Reveal key={p.title} className="method-step">
              <span className="eyebrow">0{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Invitation />
    </main>
  );
}
