import type { Metadata } from "next";
import Link from "next/link";
import { AlignmentField } from "../_components/AlignmentField";
import { Reveal } from "../_components/Reveal";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "Two instruments tuned to the same frequency. InterviewMD and Prepbond — the ventures of the Omthentic house.",
};

export default function CompaniesPage() {
  return (
    <>
      <section className="co-hero">
        <AlignmentField
          density={0.5}
          speed={0.8}
          pull={0.8}
          spread={1.2}
          style={{ position: "absolute", inset: 0, opacity: 0.45, zIndex: 0 }}
        />
        <div className="inner reveal is-in">
          <div className="eyebrow">
            <span className="dot" />
            III — Ventures
          </div>
          <h1>
            Two instruments
            <br />
            tuned to the same <em>frequency</em>.
          </h1>
          <p className="lede dim">
            Each company in the Omthentic house is a different way of asking the
            same question:{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              how do we help a person speak what is most true of them, and be met
              for it?
            </em>
          </p>
          <div className="co-jump">
            <a href="#interviewmd">
              <span className="ix">01</span> InterviewMD
            </a>
            <a href="#prepbond">
              <span className="ix">02</span> Prepbond
            </a>
            <a href="#future">
              <span className="ix">03</span> Forthcoming
            </a>
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="rule" />
      </div>

      <section className="co-block" id="interviewmd">
        <div className="co-grid">
          <Reveal as="aside" className="co-meta">
            <div className="co-id">Venture 01 · In operation</div>
            <h2 className="co-name">
              Interview<span className="ital">MD</span>
            </h2>
            <p className="co-tag">
              The interview practice for clinicians who have something true to
              say.
            </p>

            <dl className="co-specs">
              <div>
                <dt>Audience</dt>
                <dd>Residents, fellows, attendings</dd>
              </div>
              <div>
                <dt>Modality</dt>
                <dd>1:1 rehearsal &amp; voice coaching</dd>
              </div>
              <div>
                <dt>Founded</dt>
                <dd>2024</dd>
              </div>
              <div>
                <dt>Cohort</dt>
                <dd>
                  <em>~400</em> physicians
                </dd>
              </div>
              <div>
                <dt>Match rate</dt>
                <dd>
                  <em>97%</em> primary program
                </dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Open admissions</dd>
              </div>
            </dl>

            <a className="btn" href="#">
              <span>Visit InterviewMD</span>
              <span className="arrow" />
            </a>
          </Reveal>

          <Reveal className="co-body" delay={1}>
            <div className="group">
              <div className="label">The problem</div>
              <h2>
                Medicine taught you to <em>speak in code</em>.
              </h2>
              <p>
                Years of training to be precise, deferential, and clinical
                produce a voice that interviews well to other clinicians — and
                badly to the panel that decides where you train next.
              </p>
              <p className="dim">
                The interview is the one room where what you&apos;ve actually{" "}
                <em>lived</em> in medicine has to translate into language a
                stranger can be moved by. Most candidates lose the room before
                they have said a thing.
              </p>
            </div>

            <div className="group">
              <div className="label">The practice</div>
              <h2>
                We listen for the doctor <em>underneath</em> the answer.
              </h2>
              <p>
                Each candidate is paired with a coach for an eight-week practice.
                We don&apos;t write scripts. We surface the moments in your
                training that already contain the answer — the patient you
                can&apos;t stop thinking about, the call you remember most — and
                we help you learn to speak from there.
              </p>
              <p className="dim">
                By week six, you stop performing competence. You start being
                recognised.
              </p>
            </div>

            <div className="co-preview" aria-label="InterviewMD session preview">
              <div className="pv-head">
                <span>InterviewMD &nbsp;·&nbsp; Session 06 / 08</span>
                <span className="live">Listening</span>
              </div>
              <div className="imd-mock">
                <div className="imd-side">
                  <div className="imd-item">
                    <span>01</span>
                    <span className="pt">The patient you remember</span>
                  </div>
                  <div className="imd-item active">
                    <span>02</span>
                    <span className="pt">Why medicine</span>
                  </div>
                  <div className="imd-item">
                    <span>03</span>
                    <span className="pt">A failure you carry</span>
                  </div>
                  <div className="imd-item">
                    <span>04</span>
                    <span className="pt">What kind of doctor</span>
                  </div>
                </div>
                <div className="imd-main">
                  <div className="imd-q">
                    <span className="who">Prompt · 02</span>If I asked your
                    closest friend why you became a doctor, what would they say —
                    and where would they be wrong?
                  </div>
                  <div className="imd-trans">
                    &quot;She would say it&apos;s because of my grandmother. And
                    she&apos;s not wrong, but she&apos;s not <em>right</em>{" "}
                    either. My grandmother is why I noticed medicine. The reason
                    I stayed was a man in his thirties on the cardiology ward
                    who&hellip;
                    <span className="imd-cursor" />&quot;
                  </div>
                  <div className="imd-meter">
                    <span>Resonance</span>
                    <div className="bar" />
                    <span className="val">0.68</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group" style={{ marginTop: 64 }}>
              <div className="label">Why it belongs here</div>
              <h2>
                The interview is a <em>communication</em> problem disguised as a
                credential problem.
              </h2>
              <p className="dim">
                InterviewMD is the most concrete expression of the Omthentic
                thesis: that the highest-stakes moments in a life are won by
                people who have learned to <em>be</em> who they are out loud. We
                chose medicine first because the cost of mismatch is highest
                there — both for the doctor and for everyone they will go on to
                treat.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="co-block" id="prepbond">
        <div className="co-grid">
          <Reveal as="aside" className="co-meta">
            <div className="co-id">Venture 02 · Early access</div>
            <h2 className="co-name">
              Prep<span className="ital">bond</span>
            </h2>
            <p className="co-tag">
              A preparation companion for the version of yourself you are
              rehearsing toward.
            </p>

            <dl className="co-specs">
              <div>
                <dt>Audience</dt>
                <dd>Anyone facing a defining moment</dd>
              </div>
              <div>
                <dt>Modality</dt>
                <dd>Daily practice, voice + text</dd>
              </div>
              <div>
                <dt>Founded</dt>
                <dd>2025</dd>
              </div>
              <div>
                <dt>Cohort</dt>
                <dd>
                  <em>~120</em> in preview
                </dd>
              </div>
              <div>
                <dt>Sessions</dt>
                <dd>20-minute rituals</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Invitation only</dd>
              </div>
            </dl>

            <Link className="btn" href="/contact">
              <span>Request invitation</span>
              <span className="arrow" />
            </Link>
          </Reveal>

          <Reveal className="co-body" delay={1}>
            <div className="group">
              <div className="label">The premise</div>
              <h2>
                You don&apos;t prepare <em>for</em> a moment.
                <br />
                You prepare <em>into</em> it.
              </h2>
              <p>
                A speech, a hearing, a confession, a first day. Most preparation
                is a frantic accumulation of facts and lines. By the time the
                moment arrives you have rehearsed yourself out of your own body.
              </p>
              <p className="dim">
                Prepbond reverses the loop. It treats preparation as the slow
                rehearsal of a self — the version of you who can already meet
                what is coming, who has already been there in some quiet,
                recursive way.
              </p>
            </div>

            <div className="group">
              <div className="label">The ritual</div>
              <h2>Twenty minutes a day, until the day.</h2>
              <p>
                Each evening, Prepbond opens a single prompt. You speak. It
                listens. It returns, the next evening, with what you said and
                what it heard underneath. Over days the layers thin. By the
                morning of the moment, what you have rehearsed is not a script
                but a self.
              </p>
            </div>

            <div className="co-preview" aria-label="Prepbond ritual preview">
              <div className="pv-head">
                <span>Prepbond &nbsp;·&nbsp; Day 09 / 14</span>
                <span className="live">In session</span>
              </div>
              <div className="pb-mock">
                <div className="pb-circle-wrap">
                  <div className="pb-circle">
                    <div className="pb-inner">
                      <span className="num">09</span>
                      Listening
                    </div>
                  </div>
                </div>
                <div className="pb-prompts">
                  <div className="pb-prompt">
                    <span>
                      Yesterday you said:{" "}
                      <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                        &quot;I want them to take me seriously.&quot;
                      </em>
                    </span>
                    <span className="ix">D 08</span>
                  </div>
                  <div className="pb-prompt active">
                    <span>
                      Tonight — what would change if you didn&apos;t need them
                      to?
                    </span>
                    <span className="ix">D 09 · now</span>
                  </div>
                  <div className="pb-prompt" style={{ opacity: 0.55 }}>
                    <span className="dim italic">— sealed until tomorrow —</span>
                    <span className="ix">D 10</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group" style={{ marginTop: 64 }}>
              <div className="label">Why it belongs here</div>
              <h2>
                The most powerful technology
                <br />
                is the one that <em>changes the user</em>.
              </h2>
              <p className="dim">
                Prepbond is software that practices alongside you, and then
                leaves. It is the purest form of what Omthentic believes about
                machines: that the best of them are not destinations but
                rehearsal rooms — quiet, repeatable, dignifying.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="co-block" id="future">
        <div className="co-grid" style={{ gridTemplateColumns: "1fr" }}>
          <Reveal style={{ textAlign: "center", maxWidth: 880, margin: "0 auto" }}>
            <div className="co-id" style={{ color: "var(--ink-dim)" }}>
              Venture 03 · In incubation
            </div>
            <h2 className="co-name" style={{ opacity: 0.65, fontStyle: "italic" }}>
              — forthcoming —
            </h2>
            <p className="co-tag" style={{ marginLeft: "auto", marginRight: "auto" }}>
              A third instrument is being shaped. It will be announced when, and
              only when, the work can be honest about itself.
            </p>
            <p className="mono dim" style={{ marginTop: 32 }}>
              Listening &nbsp;·&nbsp; quietly &nbsp;·&nbsp; for some time
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
