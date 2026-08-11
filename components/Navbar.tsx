"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

const hrefs = ["#home", "#about", "#services", "#benefits", "#contact"];
export function Navbar() {
  const { language, setLanguage, text } = useLanguage();
  const links = text.nav.map((label, index) => [label, hrefs[index]]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 30);
    onScroll();
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <Logo />
        <div className="desktop-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="button primary nav-cta">
          {text.build}
          <ArrowRight size={17} />
        </a>
        <div className="language-switch" aria-label="Select language"><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button><button className={language === "he" ? "active" : ""} onClick={() => setLanguage("he")}>עב</button></div>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="button primary">
            {text.build} <ArrowRight size={17} />
          </a>
        </div>
      )}
    </header>
  );
}
