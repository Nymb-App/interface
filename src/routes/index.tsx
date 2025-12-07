import { createFileRoute } from "@tanstack/react-router";
import { TMASection } from "@/components/sections/tma-section";
import { Footer } from "@/components/footer";
import { FoundersSection } from "@/components/sections/founders-section";
import { Journey } from "@/components/sections/founders-section/journey/journey";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { NftSection } from "@/components/sections/nft-section/nft-section";
import { NumbersSection } from "@/components/sections/numbers-section";
import { IdeaSection } from "@/components/sections/idea-section";
import { PhasesSection } from "@/components/sections/phases-section";

function HeroPage() {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col overflow-x-hidden">
        <HeroSection classNameContainer="max-w-[1440px] mx-auto" />
        <MissionSection className="max-w-[1440px] mx-auto mt-20 sm:mt-28" />
        <NumbersSection className="max-w-[1440px] mx-auto mt-20 sm:mt-28" />
        <IdeaSection className="mt-10 sm:mt-28" />
        <PhasesSection />
        <FoundersSection className="max-w-[1440px] mx-auto sm:mt-18"/>
        <Journey className="mt-[50px]" />
        <NftSection className="mt-[50px]" />
        <TMASection className="mt-14 sm:mt-28" />
        <Footer className="mt-10" /> 
      </main>
    </>
  );
}

export const Route = createFileRoute("/")({
  component: HeroPage,
});
