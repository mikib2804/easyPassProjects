import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Founders } from "@/components/Founders";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { SpecialFeatures } from "@/components/SpecialFeatures";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <SpecialFeatures />
      <Founders />
      <Services />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}
