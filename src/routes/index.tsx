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
        <MissionSection className="max-w-[1440px] mx-auto mt-20 sm:mt-28" />
        <NumbersSection className="max-w-[1440px] mx-auto mt-20 sm:mt-28" />
        <IdeaSection className="sm:mt-28 overflow-x-clip" />
        <PhasesSection className="overflow-x-hidden" />
        <FoundersSection className="max-w-[1440px] mx-auto sm:mt-18" />
        <Journey className="mt-[50px]" />
        <NftSection className="mt-[50px] max-w-[1440px] mx-auto px-8" />
        <TMASection className="mt-14 sm:mt-28" />
        <Footer className="mt-10" />



        {/* <div className="h-[2000px] p-8 bg-neutral-900 text-white space-y-6">

          <div className="sticky top-6 bg-green-400 text-black px-4 py-2 rounded">
            Я липну к верху при скролле
          </div>

          <p className="mt-[600px]">
            Прокручивай вниз — когда липкий элемент дойдёт до верхней границы + top-6,
            он станет фиксированным.
          </p>

        </div> */}
      </main>
    </>
  );
}

export const Route = createFileRoute("/")({
  component: HeroPage,
});
