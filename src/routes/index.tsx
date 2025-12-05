import { TMASection } from "@/components/tma-section";
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
      <MissionSection className="mt-20" />
      <FoundersSection />
      <Journey className="mt-[50px]" />
      <NftSection className="mt-[50px]" />
      <TMASection className="mt-14" />
      <Footer className="mt-10" />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HeroPage,
});
