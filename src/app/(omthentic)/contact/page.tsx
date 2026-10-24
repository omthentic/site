import type { Metadata } from "next";
import Image from "next/image";
import { Arrow } from "../_components/Arrow";
import { Reveal } from "../_components/Reveal";
import { contactEmail, founderUrl } from "../content";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Let’s talk",
  description:
    "Connect with Omthentic founder Shanaka Jayakody about building, backing or collaborating on technology for human potential.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="wrap page-hero contact-hero" id="join">
        <p className="eyebrow">
          <span className="status-dot" /> An open invitation
        </p>
        <h1>
          Good things start
          <br />
          with a <span className="soft-word">conversation.</span>
        </h1>
        <div className="contact-intro">
          <p>
            You might have an idea, a question, or a feeling that we should
            meet. That’s plenty to start with.
          </p>
        </div>
      </section>
      <section className="wrap contact-layout">
        <Reveal className="contact-photo image-frame">
          <Image
            src="/images/conversation.jpg"
            alt="Two people making time for a conversation"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 45vw"
          />
        </Reveal>
        <Reveal className="contact-content">
          <p className="eyebrow">A direct conversation</p>
          <h2>
            Meet the person
            <br />
            behind Omthentic.
          </h2>
          <p>
            Shanaka Jayakody is the founder of Omthentic. For collaborations,
            investment, or a conversation about InterviewMD, send him a note
            directly.
          </p>
          <a href={`mailto:${contactEmail}`} className="button button-dark">
            Email Shanaka <Arrow diagonal />
          </a>
          <a className="contact-link-note" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <a
            href={founderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link founder-profile-link"
          >
            Meet the founder <Arrow diagonal />
          </a>
          <div className="contact-topics">
            <p className="eyebrow">A few good reasons to talk</p>
            <details>
              <summary>
                Build with us{" "}
                <span className="expand-mark" aria-hidden="true" />
              </summary>
              <p>
                For engineers, designers and researchers interested in building
                tools that help people trust their own abilities. Tell Shanaka
                what you make and what you care about.
              </p>
            </details>
            <details>
              <summary>
                Back the work{" "}
                <span className="expand-mark" aria-hidden="true" />
              </summary>
              <p>
                For investors who want to understand the business, the coaching
                experience behind InterviewMD, and the long-term thinking behind
                Omthentic.
              </p>
            </details>
            <details>
              <summary>
                Explore a collaboration{" "}
                <span className="expand-mark" aria-hidden="true" />
              </summary>
              <p>
                For educators, coaches and people working on the same questions.
                Bring your context, your idea, or the problem you keep coming
                back to.
              </p>
            </details>
          </div>
        </Reveal>
      </section>
      <section className="wrap contact-closing">
        <Reveal>
          <p>
            No perfect pitch required.
            <br />
            <span className="soft-word">Just be yourself.</span>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
