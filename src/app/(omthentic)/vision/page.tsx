import type { Metadata } from "next";
import { AlignmentField } from "../_components/AlignmentField";
import { Reveal } from "../_components/Reveal";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "What we are for. A long letter to the people who already suspect what we suspect.",
};

export default function VisionPage() {
  return (
    <>
      <section className="vision-hero">
        <AlignmentField className="field-bg" style={{ opacity: 0.6 }} />
        <div className="inner reveal is-in">
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot" />
            II — Vision
          </div>
          <h1>
            What we are <em>for</em>.
          </h1>
          <p>
            A long letter, written slowly, to the people who already suspect
            what we suspect.
          </p>
        </div>
      </section>

      <div className="shell">
        <div className="rule" />
      </div>

      <article className="manifesto">
        <Reveal as="section" className="stanza">
          <div className="num">i.</div>
          <div>
            <h3>The premise.</h3>
            <p>
              Most of what we call communication is performance — a costume worn
              so the world will let us in. Our species has built extraordinary
              technologies for the performance, and very few for the underneath.
            </p>
            <p>
              We think this is the central wound of the present moment: a
              civilization in which it is easier to be <em>seen</em> than to be{" "}
              <em>known</em>.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="stanza">
          <div className="num">ii.</div>
          <div>
            <h3>The wager.</h3>
            <p>
              That there is a different way to use machines. Not to amplify the
              costume, but to <em>quiet</em> it. Not to optimize the surface,
              but to thin it, until what is true underneath can pass through.
            </p>
            <p>
              We call this <em>aligned authenticity</em> — the practiced state
              of being whose outer expression and inner intention finally agree.
              Omthentic exists to make that state more available.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="stanza">
          <div className="num">iii.</div>
          <div>
            <h3>The instrument.</h3>
            <p>
              Each company in this house is a particular instrument for the same
              work. Not a brand portfolio. A set of tunings.
            </p>
            <p>
              <em>InterviewMD</em> helps clinicians speak the truth of their
              practice in a system that rewards the false. <em>Prepbond</em>{" "}
              helps a person prepare for a moment by becoming, in advance, the
              one who can meet it. Future ventures will sound different. The
              pitch beneath them will not.
            </p>
          </div>
        </Reveal>

        <Reveal as="p" className="pullquote">
          We build technology
          <br />
          that <em>remembers</em>
          <br />
          what it is for.
        </Reveal>

        <Reveal as="section" className="stanza">
          <div className="num">iv.</div>
          <div>
            <h3>The discipline.</h3>
            <p>
              We refuse the metrics that have ruined the discourse — engagement,
              dwell, churn, scroll. They measure the costume. We measure the
              meeting.
            </p>
            <p>
              A successful Omthentic product leaves its user{" "}
              <em>recognizing themselves</em> in a way they could not before —
              and then, often, putting the tool down. We are comfortable with
              this. Software in service of becoming is software that knows when
              to leave.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="stanza">
          <div className="num">v.</div>
          <div>
            <h3>The horizon.</h3>
            <p>
              We are building for the slow century. We assume nothing about
              scale and everything about depth. We hire the way a monastery
              accepts novices. We choose investors by who they would still be if
              their fund failed.
            </p>
            <p>
              If this sounds quiet, it is. If it sounds patient, it must be. The
              technologies that will be <em>worth</em> inheriting were never
              made in haste.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="stanza">
          <div className="num">vi.</div>
          <div>
            <h3>An invitation.</h3>
            <p>
              We do not need many people. We need the right ones — engineers who
              think like editors, designers who think like therapists, operators
              who think like gardeners. People who suspect the next decade of
              technology will be defined not by what it can do but by what it
              refuses to do.
            </p>
            <p>
              If something in this letter rang true, it is because you already
              knew it. Write to us. We are listening.
            </p>
          </div>
        </Reveal>

        <Reveal className="signature">
          <div className="glyph">·  Ω  ·</div>
          <div className="from">— The Stewards of Omthentic · MMXXVI</div>
        </Reveal>
      </article>
    </>
  );
}
