import { Header } from "@/components/creatix/header";
import { Hero } from "@/components/creatix/hero";
import { Stats } from "@/components/creatix/stats";
import { About } from "@/components/creatix/about";
import { Services } from "@/components/creatix/services";
import { Marquee } from "@/components/creatix/marquee";
import { Team } from "@/components/creatix/team";

import { SkillsMarquee } from "@/components/creatix/skills-marquee";
import { CTA } from "@/components/creatix/cta";
import { Footer } from "@/components/creatix/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Marquee />
      <Team />
      <SkillsMarquee />
      <CTA />
      <Footer />
    </main>
  );
}
