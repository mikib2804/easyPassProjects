"use client";
import { Palette, Rocket, ShieldCheck, Zap } from "lucide-react";
import { GlowCard } from "./GlowCard"; import { Reveal } from "./Reveal"; import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
const icons = [Rocket, Palette, ShieldCheck, Zap];
export function SpecialFeatures() { const {text}=useLanguage(); return <section id="about" className="section-wrap block-section"><Reveal><GlowCard className="feature-frame"><SectionHeading title={text.specialTitle} subtitle={text.specialText} /><div className="features-grid">{text.special.map(([title, description], i) => {const Icon=icons[i];return <article key={title} className="feature-item"><span className="number">0{i+1}</span><Icon className={i%2?"violet":"cyan"}/><h3>{title}</h3><p>{description}</p></article>})}</div></GlowCard></Reveal></section> }
