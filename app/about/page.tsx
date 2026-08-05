import { AboutCtaSection } from "../components/about/AboutCtaSection";
import { AboutHero } from "../components/about/AboutHero";
import { JourneySection } from "../components/about/JourneySection";
import { LeadershipSection } from "../components/about/LeadershipSection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader activeLabel="About Us" />
      <AboutHero />
      <JourneySection />
      <LeadershipSection />
      <AboutCtaSection />
      <SiteFooter />
    </main>
  );
}
