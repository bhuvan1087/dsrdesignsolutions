import { ClientsBand } from "./components/home/ClientsBand";
import { CoreValuesSection } from "./components/home/CoreValuesSection";
import { DivisionsSection } from "./components/home/DivisionsSection";
import { HomeAboutPreview } from "./components/home/HomeAboutPreview";
import { HomeHero } from "./components/home/HomeHero";
import { IndustriesSection } from "./components/home/IndustriesSection";
import { InsightsSection } from "./components/home/InsightsSection";
import { NetworkSection } from "./components/home/NetworkSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { VisionMissionBand } from "./components/home/VisionMissionBand";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";

export default function Home() {
  return (
    <main>
      <SiteHeader activeLabel="Home" contactHref="#contact-us" />
      <HomeHero />
      <HomeAboutPreview />
      <VisionMissionBand />
      <CoreValuesSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientsBand />
      <DivisionsSection />
      <NetworkSection />
      <InsightsSection />
      <SiteFooter homeLinks />
    </main>
  );
}
