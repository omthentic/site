import type { Metadata } from "next";
import { AlignmentField } from "../_components/AlignmentField";
import { ContactForm } from "../_components/ContactForm";
import { LiveTime } from "../_components/LiveTime";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "If something rang true, write. There is no front desk here — the same handful of people read every message.",
};

export default function ContactPage() {
  return (
    <main className="contact-wrap">
      <section className="contact-left">
        <AlignmentField
          density={0.5}
          speed={0.8}
          pull={0.8}
          spread={1.2}
          style={{ position: "absolute", inset: 0, opacity: 0.35, zIndex: 0 }}
        />

        <div>
          <div className="eyebrow">
            <span className="dot" />
            IV — Begin
          </div>
          <h1>
            If something rang true, <em>write</em>.
          </h1>
          <p className="lede">
            There is no front desk here. The same handful of people read every
            message. We reply when we can hold the reply with our whole
            attention — usually within a week.
          </p>
        </div>

        <div className="contact-channels">
          <div className="channel">
            <span className="ck">General</span>
            <a className="cv" href="mailto:hello@omthentic.com">
              hello@omthentic.com
              <em>For introductions, questions, and quiet correspondence.</em>
            </a>
          </div>
          <div className="channel">
            <span className="ck">Joining</span>
            <a className="cv" href="mailto:join@omthentic.com">
              join@omthentic.com
              <em>If you suspect your work belongs alongside ours.</em>
            </a>
          </div>
          <div className="channel">
            <span className="ck">Press</span>
            <a className="cv" href="mailto:press@omthentic.com">
              press@omthentic.com
              <em>We do interviews rarely, and on the record.</em>
            </a>
          </div>
          <div className="channel">
            <span className="ck">Locale</span>
            <span className="cv">
              London &nbsp;·&nbsp; Global
              <em>
                <LiveTime /> &nbsp;·&nbsp; the bell still rings here
              </em>
            </span>
          </div>
        </div>
      </section>

      <section className="contact-right">
        <h2>A letter</h2>
        <p className="formhead">No fields are required. Tell us what feels honest.</p>
        <ContactForm />
      </section>
    </main>
  );
}
