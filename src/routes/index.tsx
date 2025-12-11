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
      <main className="w-full min-h-screen flex flex-col">
        <HeroSection classNameContainer="max-w-[1440px] mx-auto" />
        <MissionSection className="max-w-[1440px] mx-auto mt-20 sm:mt-28 px-6" />
        <NumbersSection className="max-w-[1440px] mx-auto mt-20 sm:mt-28 px-6" />
        <IdeaSection className="sm:mt-28 overflow-x-clip" />
        <PhasesSection className="overflow-x-hidden" />
        <FoundersSection className="max-w-[1440px] mx-auto sm:mt-18 px-6" />
        <Journey className="mt-[50px]" />
        <NftSection className="mt-[50px] max-w-[1440px] mx-auto px-6" />
        <TMASection className="mt-14 sm:mt-28 px-6" />
        <Footer className="mt-10" />

      </main>
    </>
  );
}

export const Route = createFileRoute("/")({
  component: HeroPage,
});
