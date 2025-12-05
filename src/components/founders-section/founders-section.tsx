import IgorIvanov from "@/assets/founders/igor-ivanov.png";
import VitaliiTereshchenko from "@/assets/founders/vitalii-tereshchenko.png";
import { Container } from "../container";
import { HeadingWithDescription } from "../ui/heading-with-description";
import { useEffect, useRef, useState } from "react";

export function FoundersSection() {
  return (
    <section className="bg-black text-white">
      <Container>
        <div className="flex flex-col items-end gap-5 sm:gap-20">
          <HeadingWithDescription
            title='FOUNDERS'
            navLink='founders'
            description="We're not competing with
              the past - we're building what
              comes next. An ecosystem where
              content has value, users are co-owners,
              and time becomes the new digital currency."
            highlightWords={[
              "we're building",
              "next.",
              "ecosystem where content has value",
              "time",
              "new",
              "currency.",
            ]}
          />

          <div className="inline-flex items-center justify-center w-full gap-0 sm:gap-10">
            <AvatarCard
              image={IgorIvanov}
              title="Igor Ivanov"
              description="Founder"
            />
            <AvatarCard
              image={VitaliiTereshchenko}
              title="Vitalii Tereshchenko"
              description="CO - Founder"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AvatarCard({
  image,
  title,
  description,
  duration = 0.8,
  delay = 0,
  threshold = 0.8,
}: {
  image: string;
  title: string;
  description?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
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
      <div
        ref={ref}
        className="flex flex-col gap-5"
        style={{
          opacity: visible ? 1 : 0,
          animation: visible ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards` : 'none',
        }}
      >
        <img
          className="h-auto max-w-44 sm:max-w-[320px]"
          src={image}
          alt="Avatar"
        />
        <div className="w-full space-y-1">
          <h1 className="font-dm-sans text-lg sm:text-3xl leading-[1.2] tracking-[-0.06em] text-white">
            {title}
          </h1>
          <p className="font-inter text-xs sm:text-sm text-white/70">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
