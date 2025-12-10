import { cn } from "@/lib/utils";
import { HeadingSection } from "../sections/heading-section";
import { Reveal } from "./text-reveal";
import type { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function HeadingWithDescription({
    title,
    navLink,
    description = "",
    highlightWords = [],
    hightlightColor = "#B6FF00",
    className,
    classNameContainer,
    children,
    hideParagraph = false,
}: {
    title: string;
    navLink?: string;
    description?: string;
    highlightWords?: string[];
    hightlightColor?: string;
    className?: string;
    classNameContainer?: string;
    children?: ReactNode;
    hideParagraph?: boolean;
}) {
    // функция для подсветки слов
    const getHighlightedText = (text: string, words: string[]) => {
        if (!words.length) return text;

        // создаем один regex для всех слов
        const regex = new RegExp(`(${words.join("|")})`, "g"); // case sensitive
        const parts = text.split(regex);

        return parts.map((part, idx) => {
            if (words.includes(part)) {
                return (
                    <span key={idx} style={{ color: hightlightColor }}>
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className={cn("flex flex-col w-full gap-6 sm:flex-row sm:justify-between", className)}>
            <HeadingSection className=" text-nowrap w-1/5" title={title} navLink={navLink} />
            <div className={cn("flex flex-col w-fit", classNameContainer)}>
                {!hideParagraph &&
                    <Reveal className="inline-flex justify-end w-full" threshold={0.2}>
                        <p aria-hidden className="indent-16 font-medium sm:indent-28 max-w-[954px] text-2xl sm:text-[48px] font-dm-sans leading-8 sm:leading-13 text-white sm:-mt-2">
                            {getHighlightedText(description, highlightWords)}
                        </p>
                    </Reveal>
                }
                {children}
            </div>
        </div>
    );
}


export function HeadingWithDescriptionTMA({
    title,
    navLink,
    hightlightColor = "#B6FF00",
    className,
    classNameContainer,
    children,
    hideParagraph = false,
}: {
    title: string;
    navLink?: string;
    hightlightColor?: string;
    className?: string;
    classNameContainer?: string;
    children?: ReactNode;
    hideParagraph?: boolean;
}) {
    const {ref, isIntersecting} = useIntersectionObserver();
    return (
        <div className={cn("flex flex-col w-full gap-6 sm:flex-row sm:justify-between", className)}>
            <HeadingSection className=" text-nowrap w-1/5" title={title} navLink={navLink} />
            <div className={cn("flex flex-col w-full", classNameContainer)}>
                {!hideParagraph &&
                    <p ref={ref} aria-hidden className="indent-16 font-medium sm:indent-28 max-w-[954px] text-2xl sm:text-[48px] font-dm-sans leading-8 sm:leading-13 text-white sm:-mt-2">
                        <span className={cn(isIntersecting, "text-anim-1")}>Join Nymb's Telegram mini-app now. Start</span>
                        <span className={cn(isIntersecting, "text-anim-2")}>swiping, invite friends, complete tasks, battle players, and</span>
                        <span className={cn(isIntersecting, "text-anim-3")}>climb the leaderboards. Every second counts.</span>
                        <span className={cn(isIntersecting, "text-anim-4")}>Start earning yours today.</span>
                    </p>
                }
                {children}
            </div>
        </div>
    );
}

// Join Nymb's Telegram mini-app now. Start
// swiping, invite friends, complete tasks, battle players, and
// climb the leaderboards. Every second counts.
// Start earning yours today.