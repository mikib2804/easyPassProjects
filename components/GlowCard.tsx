import { HTMLAttributes, ReactNode } from "react";

export function GlowCard({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={`glow-card ${className}`} {...props}><div className="glow-card-inner">{children}</div></div>;
}
