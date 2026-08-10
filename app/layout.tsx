import type { Metadata } from "next";
import "./globals.css";
import SnowfallBackground from "@/components/SnowfallBackground";

export const metadata: Metadata = {
  title: "EasyPassProjects | Custom Web Applications",
  description: "Premium custom web applications for people and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <SnowfallBackground />
        {children}
      </body>
    </html>
  );
}
