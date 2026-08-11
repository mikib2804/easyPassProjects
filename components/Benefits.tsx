"use client";
import { BadgeCheck, MessageCircle, Star, Users } from "lucide-react";
import { Reveal } from "./Reveal"; import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
const icons=[Users,MessageCircle,BadgeCheck,Star];
export function Benefits(){const {text}=useLanguage();return <section id="benefits" className="section-wrap block-section"><Reveal><SectionHeading eyebrow={text.benefitsTag} title={text.benefitsTitle}/></Reveal><div className="benefit-grid">{text.benefits.map(([title,description],i)=>{const Icon=icons[i];return <Reveal key={title} delay={i*.08} className="benefit-item"><div className="benefit-icon"><Icon/></div><div><h3>{title}</h3><p>{description}</p></div></Reveal>})}</div></section>}
