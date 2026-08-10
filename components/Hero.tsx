"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Atom, Braces, Hexagon, Wind } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { techLogos } from "@/lib/techLogos";
const tech = [
  { n: "React", I: Atom },
  { n: "TypeScript", I: Braces },
  { n: "Tailwind", I: Wind },
  { n: "Next.js", I: Hexagon },
  { n: "Node.js", I: Hexagon },
];

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero section-wrap">
      <motion.div
        className="hero-copy"
        initial={reduced ? false : "hidden"}
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.p
          className="eyebrow"
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
        >
          CUSTOM WEB APPLICATIONS
        </motion.p>
        <h1>
          {["We Build Web Apps", "That Make It Easy", "To Succeed"].map(
            (line, i) => (
              <motion.span
                key={line}
                className={i ? "gradient-text" : ""}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {line}
              </motion.span>
            ),
          )}
        </h1>
        <motion.p
          className="hero-description"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          At EasyPassProjects, we turn ideas into powerful, scalable, and
          beautiful web applications that drive results and growth.
        </motion.p>
        <motion.div
          className="hero-actions"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          <a href="#contact" className="button primary">
            Start Your Project <ArrowRight />
          </a>
          <a href="#services" className="button secondary">
            See Our Work
          </a>
        </motion.div>
        <motion.div
          className="tech-row"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {techLogos.map(({ title, href, logo }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <img
                src={logo}
                alt={`${title} logo`}
                width={20}
                height={20}
                className="shrink-0"
              />
              <span>{title}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={reduced ? false : { opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <HeroVisual />
      </motion.div>
    </section>
  );
}
