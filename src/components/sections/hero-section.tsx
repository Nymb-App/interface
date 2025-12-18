import { FaAngleDown } from "react-icons/fa";
import UnicornScene from "unicornstudio-react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import HeroFallbackImage from "@/assets/hero/hero-fallback.png";
import timeIcon from "@/assets/hero/time.png";
import { FlickeringGrid } from "@/components/flickering-grid";
import { Header } from "@/components/header";
import { Reveal, TextReveal } from "@/components/ui/text-reveal";
import { Presentation } from "../presentation";

export function HeroSection({
  className,
  classNameContainer,
}: {
  className?: string;
  classNameContainer?: string;
}) {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative w-full h-screen flex flex-col justify-between overflow-hidden",
        className
      )}
    >
      <Header className="relative z-10 p-6 w-full max-w-[1440px] mx-auto" />
      {isIntersecting && (
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
      )}
      {isIntersecting && (
        <FlickeringGrid
          className="absolute top-2 left-2 size-full"
          squareSize={2}
          gridGap={10}
          color="#B6FF00"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
      )}
      <div
        className={cn("relative z-10 w-full p-6 sm:mb-20", classNameContainer)}
      >
        <div className="space-y-1 font-medium tracking-wide text-white text-[min(2.75rem,11.2vw)] sm:text-6xl md:text-7xl lg:text-[88px]">
          <TextReveal
            delay={0.5}
            className="w-full"
          >
            <h1 className="leading-tight">
              Nymb Ecosystem<br/>
              that turns{" "}
              <span className="inline-block align-middle">
                <img
                  src={timeIcon}
                  alt="time"
                  className="size-16 lg:size-max object-contain"
                />
              </span>
              {" "}time into value
            </h1>
          </TextReveal>

          {/* <TextReveal
            delay={0.5}
            className="w-full md:hidden"
          >
            <h1 className="leading-tight tracking-tight">
              Nymb Ecosystem<br/>
              that turns<br/>
              <span className="inline-block align-middle">
                <img
                  src={timeIcon}
                  alt="time"
                  className="size-14 lg:size-max object-contain"
                />
              </span>
              {" "}time into value
            </h1>
          </TextReveal> */}
        </div>

        {/* <p className="max-w-[519px] text-lg sm:text-2xl font-inter text-white mt-4">
          <Reveal threshold={0} duration={2}>
            Every minute of life becomes{" "}
            <span className="text-[#B6FF00]">real value</span>
          </Reveal>
          <Reveal threshold={0} duration={2}>
            through <span className="text-[#B6FF00]">gamification</span> and{" "}
            <span className="text-[#B6FF00]">tokenization.</span>
          </Reveal>
        </p> */}
          <TextReveal threshold={0} duration={2}>
            <p className="max-w-[519px] text-lg sm:text-2xl font-inter text-white mt-4">
                Every minute of life becomes{" "}
                <span className="text-[#B6FF00]">real value</span>{" "}
                through <span className="text-[#B6FF00]">gamification</span> and{" "}
                <span className="text-[#B6FF00]">tokenization.</span>
            </p>
          </TextReveal>

        <Reveal
          threshold={0}
          duration={1}
          delay={1}
          className="mt-10 hidden sm:flex flex-row"
        >
          <a href="#nft" className="w-full sm:w-fit text-base sm:text-lg font-pixel text-black px-4 py-3 rounded-none bg-linear-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] font-normal uppercase tracking-[0.12rem]">
            Become our Partner
          </a>
          <Presentation />
        </Reveal>

        <div className="mt-10 flex flex-col sm:hidden">
          <Reveal threshold={0} className="flex" duration={1} delay={1}>
            <a href="#nft" className="w-full sm:w-fit text-base text-center sm:text-lg font-pixel text-black px-4 py-3 rounded-none bg-linear-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] font-normal uppercase tracking-[0.12rem]">
              Become our Partner
            </a>
          </Reveal>
          <Reveal threshold={0} className="flex" duration={1} delay={1}>
            <Presentation />
          </Reveal>
        </div>
      </div>

      <a
        href="#mission"
        className="hidden sm:flex items-center justify-center absolute bottom-0 right-0 size-14 rounded-none border-l-2 border-t-2 border-[#B6FF00] text-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00]"
      >
        <FaAngleDown />
      </a>
    </div>
  );
}
