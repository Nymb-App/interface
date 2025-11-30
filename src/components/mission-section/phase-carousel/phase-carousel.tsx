import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react";
import PhaseImage1 from "../../../assets/mission/phase-carousel/phase-1.png";
import PhaseImage2 from "../../../assets/mission/phase-carousel/phase-2.png";
import PhaseImage3 from "../../../assets/mission/phase-carousel/phase-3.png";
import { Container } from "../../container";

const phases = [
  {
    id: 1,
    phaseLabel: "[ Phase 1 ]",
    tag: "Now",
    titleLines: ["Mini-App", "in Telegram"],
    description:
      "Launching a Telegram minigame, gathering first users, and gamifying time",
    highlight: true,
    image: PhaseImage1,
  },
  {
    id: 2,
    phaseLabel: "[ Phase 2 ]",
    tag: null,
    titleLines: ["New Social", "Network"],
    description: "A future social network with activity tokenization",
    highlight: false,
    image: PhaseImage2,
  },
  {
    id: 3,
    phaseLabel: "[ Phase 3 ]",
    tag: null,
    titleLines: ["Physical", "Products"],
    description:
      "Linking digital experiences to physical objects (watches, merchandise, devices, etc.)",
    highlight: false,
    image: PhaseImage3,
  },
];

export function PhaseCarousel() {
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-black text-white">
      <Container className="py-8 md:py-16">
        <div className="flex flex-col items-center gap-10">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full max-w-[576px] md:max-w-none"
          >
            <CarouselContent className="-ml-6">
              {phases.map((phase) => (
                <CarouselItem
                  key={phase.id}
                  className="relative pl-6 pt-[60px]"
                >
                  <div className="absolute top-[-50px] right-[-15px] z-10">
                    <img src={phase.image} alt="" />
                  </div>
                  <div
                    className={`relative flex h-full flex-col gap-8 rounded-[32px] border px-10 py-10 ${phase.highlight ? "border-[#B6FF00]" : "border-white/10"} bg-[#070707]`}
                  >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full bg-[#D9D9D9]/10 blur-3xl" />
                    {!phase.highlight && (
                      <div className="pointer-events-none absolute -left-10 bottom-[-40px] h-[260px] w-[260px] rounded-[140px] bg-[#121312] opacity-80" />
                    )}

                    <div className="relative flex items-center gap-4 text-sm font-light uppercase tracking-[-0.03em] text-white/40">
                      <span>{phase.phaseLabel}</span>
                      {phase.tag && (
                        <span className="text-[#B6FF00]">{phase.tag}</span>
                      )}
                    </div>

                    <div className="relative flex flex-col gap-4">
                      <p className="text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.2] tracking-[-0.06em] text-white">
                        {phase.titleLines[0]}
                        <br />
                        {phase.titleLines[1]}
                      </p>
                      <p className="max-w-[496px] text-[18px] md:text-[20px] font-normal leading-[1.4] tracking-[-0.03em] text-white/70">
                        {phase.description}
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
                  className={`h-2 w-2 rounded-full transition-colors ${isActive ? "bg-[#B6FF00]" : "bg-white/10"}`}
                  aria-label={`Go to phase ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
