import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { HeadingSection } from "../sections/heading-section";
import { TextReveal } from "./text-reveal";

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
                    <TextReveal className="inline-flex justify-end w-full" threshold={0.2}>
                        <p aria-hidden className="text-white font-medium max-w-[960px] text-2xl sm:text-[48px]" >
                            <span className="opacity-0 select-none touch-none">{"-----"}</span>{getHighlightedText(description, highlightWords)}
                        </p>
                    </TextReveal>
                }
                {children}
            </div>
        </div>
    );
}