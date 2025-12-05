import { FaAngleDown } from "react-icons/fa";
import UnicornScene from "unicornstudio-react";
import HeroFallbackImage from "../../assets/hero/hero-fallback.png";
import timeIcon from "../../assets/hero/time.png";
import { cn } from "../../lib/utils";
import { FlickeringGrid } from "../flickering-grid";
import { Header } from "../header";
import { Button } from "../ui/button";
import { Reveal } from "../ui/text-reveal";

export function HeroSection({
  className,
  classNameContainer,
}: {
  className?: string;
  classNameContainer?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full h-screen flex flex-col justify-between overflow-hidden",
        className
      )}
    >
      <Header className="relative z-10 p-6 w-full max-w-[1440px] mx-auto" />
      <div className="absolute inset-0 size-full opacity-50">
        <UnicornScene
          showPlaceholderOnError
          showPlaceholderWhileLoading
          placeholder={HeroFallbackImage}
          jsonFilePath={"/webgl/hero.json"}
          scale={1}
          dpi={1}
          fps={60}
          production={true}
          lazyLoad={true}
          altText="WebGL hero scene"
          ariaLabel="Animated WebGL hero scene"
          className="absolute inset-0 size-full"
        />
      </div>
      <FlickeringGrid
        className="absolute top-2 left-2 size-full"
        squareSize={2}
        gridGap={10}
        color="#B6FF00"
        maxOpacity={0.3}
        flickerChance={0.1}
      />
      <div
        className={cn(
          "relative z-10 w-full p-6 sm:mb-20",
          classNameContainer
        )}
      >
        <div className="space-y-4 font-dm-sans font-[550]">
          <Reveal threshold={0}>
            <p className="text-4xl sm:text-7xl text-white font-dm-sans leading-[1.1] tracking-[-0.06em]">
              Nymb Ecosystem
            </p>
          </Reveal>


          <div className="inline-flex flex-wrap items-center gap-1 sm:gap-4 text-white">
            <Reveal threshold={0}>
              <p className="text-4xl sm:text-7xl w-full sm:w-fit">that turns</p>
            </Reveal>

            <Reveal threshold={0} className="inline-flex items-center gap-1">
              <img className="size-12 sm:size-max" src={timeIcon} alt="time" />
              <p className="text-4xl sm:text-7xl">time into value</p>
            </Reveal>
          </div>
        </div>

        <p className="max-w-[519px] text-[24px] font-inter leading-[1.4] tracking-[-0.03em] text-white mt-4">
          <Reveal threshold={0} duration={2}>
            Every minute of life becomes <span className="text-[#B6FF00]">real value</span>
          </Reveal>
          <Reveal threshold={0} duration={2}>
            through <span className="text-[#B6FF00]">gamification</span> and{" "}
            <span className="text-[#B6FF00]">tokenization.</span>
          </Reveal>
        </p>


        <Reveal threshold={0} duration={1} delay={1} className="mt-10 hidden sm:flex flex-row">
          <Button className="w-full sm:w-fit text-base sm:text-lg font-pixel text-black px-4 py-[26px] rounded-none bg-linear-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] font-normal uppercase tracking-[0.12rem]">
            Become our Partner
          </Button>
          <Button
            variant={"ghost"}
            className="text-base sm:w-fit w-full sm:text-lg font-pixel px-4 py-6 text-[#B6FF00] rounded-none border-2 border-[#B6FF00] font-normal uppercase tracking-[0.12rem] hover:bg-transparent hover:text-[#B6FF00]"
          >
            Presentation
          </Button>
        </Reveal>

        <div className="mt-10 flex flex-col sm:hidden">
          <Reveal threshold={0} className="flex" duration={1} delay={1}>
            <Button className="w-full sm:w-fit text-base sm:text-lg font-pixel text-black px-4 py-[26px] rounded-none bg-linear-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] font-normal uppercase tracking-[0.12rem]">
              Become our Partner
            </Button>
          </Reveal>
          <Reveal threshold={0} className="flex" duration={1} delay={1}>
            <Button
              variant={"ghost"}
              className="text-base sm:w-fit w-full sm:text-lg font-pixel px-4 py-6 text-[#B6FF00] rounded-none border-2 border-[#B6FF00] font-normal uppercase tracking-[0.12rem] hover:bg-transparent hover:text-[#B6FF00]"
            >
              Presentation
            </Button>
          </Reveal>
        </div>
      </div>

      <Button
        variant={"ghost"}
        className="hidden sm:flex absolute bottom-0 right-0 size-14 rounded-none border-2 border-[#B6FF00] text-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00]"
      >
        <FaAngleDown />
      </Button>
    </div>
  );
}
