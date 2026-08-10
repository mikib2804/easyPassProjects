import { Palette, Rocket, ShieldCheck, Zap } from "lucide-react";
import { GlowCard } from "./GlowCard"; import { Reveal } from "./Reveal"; import { SectionHeading } from "./SectionHeading";
const items = [
  ["01", "Modern & Scalable", "We use modern technologies to build fast, secure and scalable applications.", Rocket],
  ["02", "Beautiful Design", "We create clean, modern interfaces that users love to interact with.", Palette],
  ["03", "Reliable & Secure", "Security and reliability are built into every application from day one.", ShieldCheck],
  ["04", "Fast Delivery", "We respect your time and deliver high-quality results on time.", Zap],
] as const;
export function SpecialFeatures() { return <section id="about" className="section-wrap block-section"><Reveal><GlowCard className="feature-frame"><SectionHeading title="What Makes Us Special" subtitle="We don't just write code — we build digital solutions tailored to your needs." /><div className="features-grid">{items.map(([num, title, text, Icon], i) => <article key={title} className="feature-item"><span className="number">{num}</span><Icon className={i % 2 ? "violet" : "cyan"} /><h3>{title}</h3><p>{text}</p></article>)}</div></GlowCard></Reveal></section>; }
