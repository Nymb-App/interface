import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/footer";
import { FoundersSection } from "../components/founders-section/founders-section";
import { Journey } from "../components/founders-section/journey/journey";
import { HeroSection } from "../components/hero-section/hero-section";
import { MissionSection } from "../components/mission-section/mission-section";
import { NftSection } from "../components/nft-section/nft-section";

function HeroPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeroSection classNameContainer="max-w-[1440px] mx-auto" />
      <MissionSection />
      <FoundersSection />
      <Journey />
      <NftSection />
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HeroPage,
});
