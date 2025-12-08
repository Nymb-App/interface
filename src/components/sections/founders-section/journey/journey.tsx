import { useSectionReveal } from "@/hooks/use-section-reveal";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import UnicornScene from "unicornstudio-react";
import journeyBg from "@/assets/journey-bg.png";
import plusImg from "@/assets/union.png";
import { Container } from "@/components/container";

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
  const { ref: revealRef, hasRevealed } = useSectionReveal({
    threshold: 0,
    rootMargin: "600px 0px 600px 0px",
    freezeOnceVisible: true,
  });

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
    <section
      ref={(node) => {
        sectionRef.current = node;
        revealRef(node);
      }}
      className={cn("overflow-hidden", className)}
    >
      {/* Десктопная версия - горизонтальный скролл */}
      <div
        ref={pinRef}
        className="hidden md:flex relative items-center justify-center h-[760px]"
      >
        {/* Фон на всю ширину pinned-секции */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {hasRevealed && (
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
              altText="WebGL lazer journey scene"
              ariaLabel="Animated WebGL lazer journey scene"
              className="rotate-90 min-w-[760px] min-h-[100vw]"
            />
          )}
        </div>
        <div className="relative z-10 w-full h-full">
          <div
            ref={horizontalRef}
            className="grid grid-flow-col auto-cols-[100vw] will-change-transform h-full"
          >
            {/* Первый блок - заголовок */}
            <div className="grid place-items-center px-8">
              <div className="space-y-26 text-center">
                <h2 className="text-[32px] sm:text-[80px] font-medium leading-none tracking-[-0.06em] text-white">
                  Even after
                  <br />
                  all key launches,
                </h2>
                <h2 className="text-[32px] sm:text-[80px] font-medium leading-none tracking-[-0.06em] text-[#B6FF00]">
                  Nymb&apos;s journey
                  <br />
                  only begins.
                </h2>
              </div>
            </div>

            {/* Блоки с highlights */}
            {journeyHighlights.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col justify-center mb-[210px]",
                  "ml-100"
                )}
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
      <div className="md:hidden relative mt-20">
        {/* Фон на всю ширину pinned-секции */}
        <div className="absolute -top-[345px] w-full flex items-center justify-center overflow-hidden">
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
            className="rotate-90 min-w-[800px] w-full min-h-[850px]"
          />
        </div>
        <Container className="relative">
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-8 px-4 max-sm:relative max-sm:top-[-25px]">
              <div className="space-y-10 text-center">
                <h2 className="text-[40px] font-[550] leading-none tracking-[-0.06em] text-white">
                  Even after
                  <br />
                  all key launches,
                </h2>
                <h2 className="text-[40px] font-[550] leading-none tracking-[-0.06em] text-[#B6FF00]">
                  Nymb&apos;s journey
                  <br />
                  only begins.
                </h2>
              </div>
            </div>

            <div className="-mt-10 flex flex-col gap-5">
              {journeyHighlights.map((item, index) => (
                <div
                  key={index}
                  className={cn("relative w-full flex flex-col justify-center items-center", index > 0 && "-mt-15")}
                >
                  <img
                    src={plusImg}
                    alt="+"
                    className="size-[180px] sm:size-[200px]"
                  />
                  <p className="font-[550] font-dm-sans text-center text-2xl text-white -mt-15">
                    {item.lines[0]}
                    <br />
                    {item.lines[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
