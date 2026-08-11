"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
const hrefs = ["#home", "#about", "#services", "#benefits", "#contact"];
export function Footer() {
  const { text } = useLanguage();
  const links = text.nav.map((label, index) => [label, hrefs[index]]);
  return (
    <footer className="footer section-wrap">
      <div>
        <Logo />
        <p>{text.footer}</p>
      </div>
      <nav aria-label="Footer navigation">
        {links.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="footer-social">
        <a href="#" aria-label="GitHub">
          <Github />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin />
        </a>
        <a href="mailto:hello@easypassprojects.com" aria-label="Email">
          <Mail />
        </a>
      </div>
      <div className="footer-copyright">
        <a href="#home" className="footer-copyright-link">
          © {new Date().getFullYear()} EasyPassProjects. {text.rights}
          <Image
            src="/easyPassProjects_noText.png"
            alt="EasyPassProjects logo"
            width={20}
            height={20}
          />
        </a>
      </div>
    </footer>
  );
}
