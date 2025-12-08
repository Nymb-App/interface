import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";
import { HeadingSection } from "./heading-section";
import { HeadingWithDescription } from "../ui/heading-with-description";


interface NumbersWithSubtitleProps {
    value?: number;
    valueLabel?: string;
    subtitle?: string;
    threshold?: number; // добавим threshold
}

function NumbersWithSubtitle({
    value = 100,
    valueLabel = "B",
    subtitle,
    threshold = 1,
}: NumbersWithSubtitleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [startCount, setStartCount] = useState<boolean>(false);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.unobserve(element); // один раз
                }
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div ref={containerRef} className="flex flex-col gap-3">
            <CountUp
                start={0}
                end={startCount ? value : 0} // если ещё не видно, показываем 0
                duration={2}
                decimals={0}
                separator=" "
                prefix="$"
                suffix={valueLabel}
            >
                {({ countUpRef }) => (
                    <span
                        className="font-dm-sans text-6xl sm:text-7xl font-[550] text-[#B6FF00]"
                        ref={countUpRef}
                    />
                )}
            </CountUp>
            <p className="font-inter text-base sm:text-2xl font-light tracking-wide text-white">
                {subtitle}
            </p>
        </div>
    );
}

export function NumbersSection({ className }: { className?: string }) {
    return (
        <section className={cn("w-full px-8 flex flex-col gap-10 border-t border-white/10 pt-16 md:flex-row md:items-start md:justify-between", className)}>
            <HeadingWithDescription
                title="NUMBERS"
                hideParagraph
                classNameContainer="w-full"
            >
                <div className="inline-flex w-full max-w-[600px] justify-between">
                    <NumbersWithSubtitle value={460} subtitle="Industry" />
                    <NumbersWithSubtitle value={5} subtitle="Users" />
                </div>
            </HeadingWithDescription>
        </section>
    );
}