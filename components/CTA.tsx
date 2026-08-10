"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";

const RECIPIENT_EMAIL = "hello@easypassprojects.com";
const EMAIL_SUBJECT = "New work message from EasyPassProjects website";

export function CTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      "A new project inquiry was submitted from the EasyPassProjects website.",
      "",
      `Visitor email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="section-wrap cta-section">
      <Reveal>
        <GlowCard className="cta-card">
          <div className="cta-layout">
            <div className="cta-copy">
              <span className="eyebrow">YOUR NEXT IDEA STARTS HERE</span>
              <h2>
                Have an Idea?
                <br />
                <span className="gradient-text">Let&apos;s Build It.</span>
              </h2>
              <p>
                Tell us what you&apos;re imagining and we&apos;ll turn it into a
                real web application.
              </p>
            </div>
            <form className="cta-form" onSubmit={handleSubmit}>
              <label>
                <span>Your email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                <span>Tell us about your project</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="What would you like us to build?"
                  rows={5}
                  required
                />
              </label>
              <button className="button primary" type="submit">
                Send Project Message <ArrowRight />
              </button>
            </form>
          </div>
        </GlowCard>
      </Reveal>
    </section>
  );
}
