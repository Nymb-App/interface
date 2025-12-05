import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import UnicornScene from "unicornstudio-react";
import journeyBg from "@/assets/journey-bg.png";
import plusImg from "@/assets/union.png";
import { Container } from "../../container";
import { PlusJourneyIconSvg } from "../../icons/plus-journey-icon-svg";

gsap.registerPlugin(ScrollTrigger);

const journeyHighlights = [
  {
    id: 1,
    lines: ["Integrating", "advertising networks"],
  },
  {
    id: 2,
    lines: ["Developing", "partnerships"],
  },
  {
    id: 3,
    lines: ["Entering", "new markets"],
  },
];

export function Journey({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pinEl = pinRef.current;
      const trackEl = horizontalRef.current;

      if (!pinEl || !trackEl) return;

      const getScrollDistance = () => {
        const slideCount = trackEl.children.length;
        if (slideCount <= 1) return 0;

        const viewportWidth = pinEl.offsetWidth || window.innerWidth;
        return Math.max(viewportWidth * (slideCount - 1), 0);
      };

      const distance = getScrollDistance();
      if (!distance) return;

      gsap.to(trackEl, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinEl,
          start: "center center",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          // anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className={cn("overflow-hidden", className)}>
      {/* Десктопная версия - горизонтальный скролл */}
      <div
        ref={pinRef}
        className="hidden md:flex relative items-center justify-center h-[760px]"
      >
        {/* Фон на всю ширину pinned-секции */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <UnicornScene
            showPlaceholderOnError
            showPlaceholderWhileLoading
            placeholder={journeyBg}
            jsonFilePath={"/webgl/warp-line.json"}
            width="100%"
            height="100%"
            scale={1}
            dpi={1}
            fps={60}
            production={false}
            lazyLoad={true}
            altText="WebGL huli net lazer journey scene"
            ariaLabel="Animated WebGL huli net lazer journey scene"
            className="rotate-90 min-w-[760px] min-h-[100vw]"
          />
        </div>
        <div className="relative z-10 w-full h-full">
          <div
            ref={horizontalRef}
            className="grid grid-flow-col auto-cols-[100vw] will-change-transform h-full"
          >
            {/* Первый блок - заголовок */}
            <div className="grid place-items-center px-8">
              <div className="space-y-26 text-center">
                <p className="text-[32px] sm:text-[80px] font-medium leading-none tracking-[-0.06em] text-white">
                  Even after
                  <br />
                  all key launches,
                </p>
                <p className="text-[32px] sm:text-[80px] font-medium leading-none tracking-[-0.06em] text-[#B6FF00]">
                  Nymb&apos;s journey
                  <br />
                  only begins.
                </p>
              </div>
            </div>

            {/* Блоки с highlights */}
            {journeyHighlights.map((item, index) => (
              <div
                key={index}
                className={cn("flex flex-col justify-center mb-[210px]", 'ml-100')}
              >
                <div className="flex flex-col justify-start">
                  <p className="font-dm-sans text-[48px] leading-[120%] tracking-[-0.06em] text-white">
                    {item.lines[0]}
                    <br />
                    {item.lines[1]}
                  </p>
                </div>
                <div className="relative h-[100px] w-[200px]">
                  <img
                    src={plusImg}
                    alt="+"
                    className="absolute w-full h-[200px] -left-[70px] top-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Мобильная версия - вертикальный список */}
      <div className="md:hidden relative py-[168px]">
        <Container>
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-8 px-4">
              <div className="space-y-2 text-center">
                <p className="text-[32px] font-medium leading-none tracking-[-0.06em] text-white">
                  Even after
                  <br />
                  all key launches,
                </p>
                <p className="text-[32px] font-medium leading-none tracking-[-0.06em] text-[#B6FF00]">
                  Nymb&apos;s journey
                  <br />
                  only begins.
                </p>
              </div>
            </div>

            {journeyHighlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 px-4"
              >
                <div className="flex max-w-[417px] items-center rounded-[999px] border border-[#B6FF00] bg-[#141C00] px-8 py-5 shadow-[0_0_60px_rgba(182,255,0,1)]">
                  <p className="text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.06em] text-white">
                    {item.lines[0]}
                    <br />
                    {item.lines[1]}
                  </p>
                </div>
                <PlusJourneyIconSvg />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
