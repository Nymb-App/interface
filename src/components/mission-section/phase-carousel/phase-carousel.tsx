import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import PhaseImage1 from "../../../assets/mission/phase-carousel/phase-1.png";
import PhaseImage2 from "../../../assets/mission/phase-carousel/phase-2.png";
import PhaseImage3 from "../../../assets/mission/phase-carousel/phase-3.png";

const phases = [
  {
    id: 0,
    phaseLabel: "[ Phase 1 ]",
    tag: "Now",
    titleLines: ["Mini-App", "in Telegram"],
    description: [
      "Launching a Telegram minigame, gathering",
      "first users, and gamifying time",
    ],
    highlight: true,
    image: PhaseImage1,
  },
  {
    id: 1,
    phaseLabel: "[ Phase 2 ]",
    tag: null,
    titleLines: ["New Social", "Network"],
    description: [
      "A future social network with activity",
      "tokenization"
    ],
    highlight: false,
    image: PhaseImage2,
  },
  {
    id: 2,
    phaseLabel: "[ Phase 3 ]",
    tag: null,
    titleLines: ["Physical", "Products"],
    description: [
      "Linking digital experiences to physical objects",
      "(watches, merchandise, devices, etc.)",
    ],
    highlight: false,
    image: PhaseImage3,
  },
];

export function PhaseCarousel() {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);

  const intervalRef = useRef<any | null>(null);

  const startAutoScroll = useCallback(() => {
    if (!api) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);
  }, [api]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    startAutoScroll();

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
      stopAutoScroll();
    };
  }, [api]);

  return (
    <div
      onMouseEnter={stopAutoScroll}
      onTouchStart={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      onTouchEnd={startAutoScroll}
      onTouchCancel={startAutoScroll}
      className="flex flex-col items-center gap-6 mt-40 py-10 overflow-x-hidden select-none"
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="pl-5" >
          {phases.map((phase) => (
            <CarouselItem
              key={phase.id}
              className={cn('relative border-2 border-white/10 max-w-[300px] sm:max-w-none', phase.id === current && "border-[#B6FF00]")}
            >
              <img
                className={cn(
                  "absolute  z-10",
                  phase.id === 0 && "max-w-[200px] -top-15 -right-6",
                  phase.id === 1 && "max-w-[200px] -top-5 right-3",
                  phase.id === 2 && "top-0 right-3",
                )}
                src={phase.image}
                alt=""
              />
              <div
                className={cn('font-inter overflow-hidden relative flex-col flex gap-8 px-5 py-6 z-10')}
              >
                <div className="relative flex items-center gap-4 text-sm font-light uppercase tracking-[-0.03em] text-white/40">
                  <span>{phase.phaseLabel}</span>
                  {phase.tag && (
                    <span className="text-[#B6FF00]">{phase.tag}</span>
                  )}
                </div>

                <div className="relative flex flex-col gap-4">
                  <p className="font-dm-sans text-2xl text-white">
                    {phase.titleLines[0]}
                    <br />
                    {phase.titleLines[1]}
                  </p>
                  <p className="text-white/70 text-sm">
                    {phase.description[0]}
                    <br />
                    {phase.description[1]}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center gap-4">
        {phases.map((phase, index) => {
          const isActive = index === current;
          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={`size-2 transition-colors cursor-pointer ${isActive ? "bg-[#B6FF00]" : "bg-white/10"}`}
              aria-label={`Go to phase ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
