import content from "@/content/site.json";
import { AboutDetailSection } from "../components/about/AboutDetailSection";
import { AboutHero } from "../components/about/AboutHero";
import { JourneySection } from "../components/about/JourneySection";
import { StrengthsSection } from "../components/about/StrengthsSection";
import { VisionMissionBand } from "../components/home/VisionMissionBand";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader activeLabel="About Us" />
      <AboutHero />
      <AboutDetailSection />
      <JourneySection />
      <StrengthsSection />
      <VisionMissionBand items={content.aboutPage.visionMission} />
      <SiteFooter />
    </main>
  );
}
