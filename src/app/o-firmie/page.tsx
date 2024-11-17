import { AboutSection } from "@/components/ui/AboutSection";
import { Hero } from "@/components/ui/Hero";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { TeamSection } from "@/components/ui/TeamSection";

export default function About() {
  return (
    <div className="pt-5 flex flex-col gap-5 ">
      <Hero />
      <div className="container mx-auto px-6 gap-8 flex-col flex py-16">
        <AboutSection />
        <ServicesSection />
        <TeamSection />
      </div>
    </div>
  );
}
