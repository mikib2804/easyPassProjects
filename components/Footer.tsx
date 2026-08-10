import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import Image from "next/image";
const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Benefits", "#benefits"],
  ["Contact", "#contact"],
];
export function Footer() {
  return (
    <footer className="footer section-wrap">
      <div>
        <Logo />
        <p>Building digital experiences made to last.</p>
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
        <a
          href="#home"
          className="footer-copyright-link"
        >
          © {new Date().getFullYear()} EasyPassProjects. All rights reserved.
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
