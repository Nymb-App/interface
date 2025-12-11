import { cn } from "@/lib/utils";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/SplitText";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const Reveal = ({
  className,
  children,
  duration = 0.8,
  delay = 0.3,
  threshold = 0.2,
}: Props) => {
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
      <style>
        {`
          @keyframes reveal {
              0% {
                  transform: translate(0, 100%);
              }
              100% {
                  transform: translate(0, 0);
              }
          }
        `}
      </style>
      <div className="w-full overflow-hidden">
        <div
          ref={ref}
          className={cn("inline-block fill-mode-[backwards]", className)}
          style={{
            opacity: visible ? 100 : 0,
            animation: visible
              ? `reveal ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s backwards`
              : "none",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

gsap.registerPlugin(SplitText, CustomEase);

export const TextReveal = ({
  children,
  className,
  duration = 1,
  delay = 0,
  threshold = 0.2,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [readyToAnimate, setReadyToAnimate] = useState(threshold === 0);

  useEffect(() => {
    if (threshold === 0) return; // запуск сразу

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio >= threshold) {
          setReadyToAnimate(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!readyToAnimate) return;
    if (!ref.current) return;

    // 🎯 ВАЖНО: сплитим не div (inline-flex), а его ребёнка — <p> / <h1>
    const target =
      (ref.current.firstElementChild as HTMLElement | null) || ref.current;

    const split = new SplitText(target, {
      type: "lines",
    });

    const tl = gsap.timeline({
      delay,
      defaults: {
        ease: CustomEase.create("custom", "M0,0 C0,1 0.504,1 1,1 "),
      },
      onComplete: () => split.revert(),
    });

    tl.from(split.lines, {
      y: 80,
      opacity: 0,
      duration: duration,
      stagger: 0.1,
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, [readyToAnimate, delay, duration]);

  return (
    <span
      ref={ref}
      className={cn(className)}
      style={{ opacity: readyToAnimate ? 100 : 0 }}
    >
      {children}
    </span>
  );
};