import { createFileRoute } from "@tanstack/react-router";
import { FoundersSection } from "../components/founders-section/founders-section";
import { HeroSection } from "../components/hero-section/hero-section";
import { MissionSection } from "../components/mission-section/mission-section";
import { NftSection } from "../components/nft-section/nft-section";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function HeroPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header className="p-4 w-full max-w-[1440px] mx-auto" />

      <HeroSection classNameContainer="max-w-[1440px] mx-auto"/>
      <MissionSection />
      <FoundersSection />
      <NftSection />

      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HeroPage,
});
