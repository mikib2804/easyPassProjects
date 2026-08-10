"use client";
import { techLogos } from "@/lib/techLogos";

const positions = [
  { left: "15%", top: "15%", size: 40, delay: "0s" },
  { left: "25%", top: "50%", size: 44, delay: "0.6s" },
  { left: "36%", top: "12%", size: 38, delay: "1s" },
  { left: "47%", top: "55%", size: 42, delay: "1.5s" },
  { left: "58%", top: "15%", size: 44, delay: "0.3s" },
  { left: "69%", top: "50%", size: 38, delay: "1.2s" },
  { left: "79%", top: "12%", size: 42, delay: "2s" },
  { left: "88%", top: "55%", size: 36, delay: "0.8s" },
  { left: "5%", top: "55%", size: 36, delay: "0.8s" },
];

export default function FloatingTechLogos() {
  return (
    <div className=" h-[8.5rem] w-full overflow-hidden">
      <div className="relative  h-full w-full overflow-hidden">
        {techLogos.map((tech, index) => {
          const position = positions[index];

          return (
            <a
              key={tech.title}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.title}
              className="group absolute"
              style={{
                left: position.left,
                top: position.top,
                animation: `floating-tech 4s ease-in-out ${position.delay} infinite`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-full border border-[#3178C6]/30 bg-background/80 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#3178C6]/70 group-hover:shadow-[0_0_20px_rgba(49,120,198,0.35)]"
                style={{
                  width: position.size,
                  height: position.size,
                }}
              >
                <img
                  src={tech.logo}
                  alt={`${tech.title} logo`}
                  className="size-5 object-contain"
                />
              </div>

              <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-background px-2 py-1 text-[10px] text-muted-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                {tech.title}
              </span>
            </a>
          );
        })}

        <style jsx>{`
          @keyframes floating-tech {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-6px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
