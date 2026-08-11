"use client";
import { Gauge, MonitorSmartphone, PanelsTopLeft, ShoppingCart } from "lucide-react";
import { GlowCard } from "./GlowCard"; import { Reveal } from "./Reveal"; import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
const icons=[PanelsTopLeft,ShoppingCart,MonitorSmartphone,Gauge];
export function Services(){const {text}=useLanguage();return <section id="services" className="section-wrap block-section"><Reveal><SectionHeading eyebrow={text.servicesTag} title={text.servicesTitle}/></Reveal><div className="card-grid">{text.services.map(([title,description],i)=>{const Icon=icons[i];return <Reveal key={title} delay={i*.08}><GlowCard className="service-card"><Icon/><h3>{title}</h3><p>{description}</p><span className="learn">{text.explore} <span>↗</span></span></GlowCard></Reveal>})}</div></section>}
