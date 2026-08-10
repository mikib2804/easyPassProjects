import { Github, Linkedin, Mail, UserRound } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { companyInfo } from "@/lib/infoData";
import FloatingTechLogos from "./FloatingTechLogos";
const founders = companyInfo;
export function Founders() {
  return (
    <section className="section-wrap block-section">
      <Reveal>
        <SectionHeading
          eyebrow="THE PEOPLE BEHIND THE WORK"
          title="The Founders"
        />
      </Reveal>
      <div className="founders-grid">
        {founders.map((f, i) => (
          <Reveal key={f.founder.name} delay={i * 0.12}>
            <GlowCard className="founder-card">
              <div className="avatar">
                <UserRound aria-hidden="true" />
                <span>
                  {f.founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="relative h-[20.5rem]">
                <FloatingTechLogos />

                <h3>{f.founder.name}</h3>
                <span className="role">{f.founder.role}</span>
                <p>{f.founder.description}</p>
                <p>{f.founder.vision}</p>
                <div className="socials">
                  <a
                    href={f.founder.socials.github}
                    aria-label={`${f.founder.name} on GitHub`}
                  >
                    <Github />
                  </a>
                  <a
                    href={f.founder.socials.linkedin}
                    aria-label={`${f.founder.name} on LinkedIn`}
                  >
                    <Linkedin />
                  </a>
                  <a
                    href={f.founder.socials.email}
                    aria-label={`Email ${f.founder.name}`}
                  >
                    <Mail />
                  </a>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        ))}
        {founders.length > 1 && (
          <span className="founder-amp" aria-hidden="true">
            &amp;
          </span>
        )}
      </div>
    </section>
  );
}
