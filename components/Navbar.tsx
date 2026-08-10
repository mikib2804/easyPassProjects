"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Benefits", "#benefits"],
  ["Contact", "#contact"],
];
export function Navbar() {
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
          Start Your Project
          <ArrowRight size={17} />
        </a>
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
            Let&apos;s Build <ArrowRight size={17} />
          </a>
        </div>
      )}
    </header>
  );
}
