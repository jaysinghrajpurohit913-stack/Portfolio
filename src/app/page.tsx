import { Hero } from "@/components/hero/hero";
import { CurrentFocusSection } from "@/components/hero/current-focus-section";
import { ThreePillars } from "@/components/hero/three-pillars";
import { SelectedWork } from "@/components/projects/selected-work";
import { HowIBuild } from "@/components/hero/how-i-build";
import { EngineeringJourney } from "@/components/timeline/engineering-journey";
import { ExperienceTimeline } from "@/components/timeline/experience-timeline";
import { HomeContactCta } from "@/components/hero/home-contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentFocusSection />
      <ThreePillars />
      <SelectedWork />
      <HowIBuild />
      <EngineeringJourney />
      <ExperienceTimeline />
      <HomeContactCta />
    </>
  );
}
