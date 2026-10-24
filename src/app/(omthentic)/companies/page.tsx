import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../_components/Arrow";
import { Reveal } from "../_components/Reveal";
import { Invitation } from "../_components/Invitation";
import { proof } from "../content";

export const metadata: Metadata = {
  alternates: { canonical: "/companies" },
  title: "Ventures",
  description:
    "Meet InterviewMD, the first Omthentic venture. Medical school interview preparation grounded in fifteen years of working with people.",
};

export default function CompaniesPage() {
  return (
    <main id="main-content">
      <section className="wrap page-hero">
        <p className="eyebrow">
          <span className="status-dot" /> The ventures
        </p>
        <div className="page-title-row">
          <h1>
            One conviction.
            <br />
            <span className="soft-word">Real-world work.</span>
          </h1>
          <p>
            We earn the next venture by making the first one matter. Here’s
            where we’re starting.
          </p>
        </div>
      </section>
      <section className="wrap venture-detail" id="interviewmd">
        <Reveal className="venture-banner image-frame">
          <Image
            src="/images/conversation.jpg"
            alt="A thoughtful conversation between two people in a sunlit room"
            fill
            priority
            sizes="94vw"
          />
          <div className="image-shade" />
          <div className="venture-banner-content">
            <span className="eyebrow">Venture 01 / Medical education</span>
            <h2>
              interview<span>md</span>
              <sup>+</sup>
            </h2>
            <span className="live-label">
              <span className="status-dot" /> Live venture
            </span>
          </div>
        </Reveal>
        <div className="venture-story section-space">
          <Reveal>
            <p className="eyebrow">InterviewMD</p>
            <h2>
              Your story.
              <br />
              <span className="soft-word">Your own words.</span>
            </h2>
          </Reveal>
          <Reveal className="body-copy">
            <p className="large-copy">
              An interview is a conversation with a person. Preparation should
              help you become more comfortable being that person.
            </p>
            <p>
              InterviewMD helps aspiring doctors prepare for medical school
              interviews with genuine confidence in their character, experiences
              and ideas. It brings together fifteen years of coaching practice
              and technology that makes that practice more accessible.
            </p>
            <p>
              We help people move beyond rehearsed answers, understand what they
              have to say, and say it in their own words.
            </p>
            <Link href="/contact" className="text-link">
              Talk to us about InterviewMD <Arrow diagonal />
            </Link>
          </Reveal>
        </div>
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
      </section>
      <section className="founder-section section-space">
        <div className="wrap founder-grid">
          <Reveal>
            <p className="eyebrow">The person behind the work</p>
            <h2>
              It started with
              <br />
              <span className="soft-word">a conversation.</span>
            </h2>
          </Reveal>
          <Reveal className="body-copy">
            <p className="large-copy">
              “The moment a person stops trying to sound like someone they
              admire and finally sounds like themselves.”
            </p>
            <p>
              That moment is why Omthentic exists. Founder Shanaka Jayakody has
              spent fifteen years guiding students through some of the most
              important conversations of their lives. Omthentic carries that
              work forward.
            </p>
            <Link className="text-link" href="/shanaka-jayakody">
              Meet Shanaka Jayakody <Arrow diagonal />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="wrap horizon-section section-space">
        <Reveal>
          <p className="eyebrow">What comes next</p>
          <h2>
            More possibilities.
            <br />
            The same starting point.
          </h2>
        </Reveal>
        <Reveal>
          <p>
            The work can extend to other admissions, career interviews, and the
            wider challenge of expressing who you are. We’ll share those
            ventures when there’s something real to share.
          </p>
        </Reveal>
      </section>
      <Invitation />
    </main>
  );
}
