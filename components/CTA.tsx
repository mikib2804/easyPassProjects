"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";

const RECIPIENT_EMAIL = "hello@easypassprojects.com";
const EMAIL_SUBJECT = "New work message from EasyPassProjects website";

export function CTA() {
  const { text } = useLanguage();
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
            <span className="eyebrow">{text.ctaTag}</span>
              <h2>
              {text.ctaA}
                <br />
              <span className="gradient-text">{text.ctaB}</span>
              </h2>
              <p>
              {text.ctaText}
              </p>
            </div>
            <form className="cta-form" onSubmit={handleSubmit}>
              <label>
              <span>{text.email}</span>
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
              <span>{text.project}</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                placeholder={text.placeholder}
                  rows={5}
                  required
                />
              </label>
              <button className="button primary" type="submit">
              {text.send} <ArrowRight />
              </button>
            </form>
          </div>
        </GlowCard>
      </Reveal>
    </section>
  );
}
