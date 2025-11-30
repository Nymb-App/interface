import { createFileRoute } from "@tanstack/react-router";
import { FoundersSection } from "../components/founders-section/founders-section";
import { HeroSection } from "../components/hero-section/hero-section";
import { MissionSection } from "../components/mission-section/mission-section";
import { NftSection } from "../components/nft-section/nft-section";

function HeroPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FoundersSection />
      <NftSection />
    </>
  );
}

export const Route = createFileRoute("/")({
  component: HeroPage,
});
