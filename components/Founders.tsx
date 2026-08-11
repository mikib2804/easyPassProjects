"use client";
import { Github, Linkedin, Mail, UserRound } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { companyInfo } from "@/lib/infoData";
import FloatingTechLogos from "./FloatingTechLogos";
import { useLanguage } from "./LanguageProvider";
export function Founders() {
  const { text, language } = useLanguage();
  return (
    <section className="section-wrap block-section">
      <Reveal>
        <SectionHeading eyebrow={text.foundersTag} title={text.founders} />
      </Reveal>
      <div className="founders-grid">
        {companyInfo.map((f, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <GlowCard className="founder-card">
              <div className="avatar">
                <UserRound aria-hidden="true" />
                <span>
                  {language === "en"
                    ? f.founder.name.en
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : ""}
                </span>
              </div>
              <div className="relative h-[20.6rem] max-sm:h-[31rem]">
                <FloatingTechLogos />

                <h3>
                  {language === "en" ? f.founder.name.en : f.founder.name.he}
                </h3>
                <span className="role">
                  {language === "en" ? f.founder.role.en : f.founder.role.he}
                </span>
                <p>
                  {language === "en"
                    ? f.founder.description.en
                    : f.founder.description.he}
                </p>
                <p>
                  {language === "en"
                    ? f.founder.vision.en
                    : f.founder.vision.he}
                </p>
                <div className="socials">
                  <a
                    href={f.founder.socials.github}
                    aria-label={`${language === "en" ? f.founder.name.en : f.founder.name.he} on GitHub`}
                  >
                    <Github />
                  </a>
                  <a
                    href={f.founder.socials.linkedin}
                    aria-label={`${language === "en" ? f.founder.name.en : f.founder.name.he} on LinkedIn`}
                  >
                    <Linkedin />
                  </a>
                  <a
                    href={f.founder.socials.email}
                    aria-label={`Email ${language === "en" ? f.founder.name.en : f.founder.name.he}`}
                  >
                    <Mail />
                  </a>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        ))}
        {companyInfo.length > 1 && (
          <span className="founder-amp" aria-hidden="true">
            &amp;
          </span>
        )}
      </div>
    </section>
  );
}
