import { useSectionReveal } from "@/hooks/use-section-reveal";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import UnicornScene from "unicornstudio-react";
import journeyBg from "@/assets/journey-bg.png";
import plusImg from "@/assets/union.png";
import { Container } from "@/components/container";
import { Reveal } from "@/components/ui/text-reveal";

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
        x: () => -getScrollDistance() / 3,
        ease: "none",
        scrollTrigger: {
          trigger: pinEl,
          start: "center center",
          end: () => `+=${getScrollDistance() / 3}`,
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
      className={cn(className)}
    >
      {/* Десктопная версия - горизонтальный скролл */}
      <div
        ref={pinRef}
        className="hidden md:flex relative items-center justify-center h-screen"
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
        <div className="relative z-10 h-screen left-1/3">
          <div
            ref={horizontalRef}
            className="grid grid-flow-col auto-cols-[40vw] will-change-transform h-full"
          >
            {/* Первый блок - заголовок */}
            <div className="grid place-items-center px-8">
              <div className="space-y-26 text-center">
                <h2 className="text-[32px] sm:text-[80px] font-medium leading-none tracking-tight text-white text-nowrap">
                  <Reveal threshold={0.6}>Even after</Reveal>
                  <Reveal threshold={0.6}>all key launches,</Reveal>
                </h2>
                <h2 className="text-[32px] sm:text-[80px] font-medium leading-none tracking-tight text-[#B6FF00]">
                  <Reveal threshold={0.6}>Nymb&apos;s journey</Reveal>
                  <Reveal threshold={0.6}>only begins.</Reveal>
                </h2>
              </div>
            </div>

            {/* Блоки с highlights */}
            {/* {journeyHighlights.map((item, index) => (
              <JourneyItems
                key={index}
                text0={item.lines[0]}
                text1={item.lines[1]}
                className={"flex flex-col justify-center mb-[210px] ml-100"}
                isPc={true}
              />
            ))} */}
          </div>
        </div>
      </div>

      {/* Мобильная версия - вертикальный список */}
      <div className="md:hidden relative mt-20">
        {/* Фон на всю ширину pinned-секции */}
        <div className="absolute -top-[370px] w-full flex items-center justify-center overflow-hidden">
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
            altText="WebGL"
            ariaLabel="Animated WebGL"
            className="rotate-90 min-w-[800px] w-full min-h-[850px]"
          />
        </div>
        <Container className="relative">
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-8 px-4 max-sm:relative max-sm:top-[-25px]">
              <div className="space-y-10 text-center">
                <h2 className="text-[40px] font-medium leading-none tracking-[-0.06em] text-white">
                  <Reveal threshold={0.6}>Even after</Reveal>
                  <Reveal threshold={0.6}>all key launches,</Reveal>
                </h2>
                <h2 className="text-[40px] font-medium leading-none tracking-[-0.06em] text-[#B6FF00]">
                  <Reveal threshold={0.6}>Nymb&apos;s journey</Reveal>
                  <Reveal threshold={0.6}>only begins.</Reveal>
                </h2>
              </div>
            </div>

            <div className="-mt-10 flex flex-col gap-5">
              <style>
                {`
                  @keyframes fade-in {
                      0% {
                          opacity: 0;
                          transform: translateY(10px);
                      }
                      100% {
                          opacity: 1;
                          transform: translateY(0);
                      }
                  }
                `}
              </style>
              {journeyHighlights.map((item, index) => (
                <JourneyItems
                  threshold={0}
                  key={index}
                  text0={item.lines[0]}
                  text1={item.lines[1]}
                  className={cn(index > 0 && "-mt-15")}
                  isPc={false}
                />
                // <div
                //   key={index}
                //   className={cn("relative w-full flex flex-col justify-center items-center ", index > 0 && "-mt-15")}
                //   style={{
                //     opacity: visible ? 1 : 0,
                //     animation: visible
                //       ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards`
                //       : "none",
                //   }}
                // >
                //   <img
                //     src={plusImg}
                //     alt="+"
                //     className="size-[180px] sm:size-[200px]"
                //   />
                //   <p className="font-medium font-dm-sans text-center text-2xl text-white -mt-15">
                //     {item.lines[0]}
                //     <br />
                //     {item.lines[1]}
                //   </p>
                // </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}


function JourneyItems({
  className,
  duration = 0.8,
  delay = 0,
  threshold = 1,
  text0,
  text1,
  isPc = true,
}: {
  isPc?: boolean;
  className?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
  text0: string;
  text1: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // анимация 1 раз
        }
      },
      {
        threshold, // ← контролируешь процент видимости
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <>
      {/* Mobile */}
      <div
        ref={ref}
        className={cn("relative w-full flex flex-col justify-center items-center",
          isPc && 'hidden!',
          className
        )}
      >
        <img
          src={plusImg}
          alt="+"
          className="size-[180px] sm:size-[200px]"
        />
        <p className="font-medium font-dm-sans text-center text-2xl text-white -mt-15">
          {text0}
          <br />
          {text1}
        </p>
      </div>

      {/* PC */}
      <div
        ref={ref}
        className={cn(
          "flex flex-col justify-center mb-[210px] ml-100",
          !isPc && 'hidden!',
        )}
        style={{
          opacity: visible ? 1 : 0,
          animation: visible
            ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards`
            : "none",
        }}
      >
        <div className="flex flex-col justify-start">
          <p className="text-4xl mt-5 lg:mt-0 lg:text-[48px] leading-[120%] tracking-[-0.06em] text-white text-nowrap">
            {text0}
            <br />
            {text1}
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
    </>
  )
}
