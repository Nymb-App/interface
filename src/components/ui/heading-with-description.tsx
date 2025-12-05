import { HeadingSection } from "../heading-section";
import { Reveal } from "./text-reveal";

export function HeadingWithDescription({
    title,
    navLink,
    description = "",
    highlightWords = [],
    hightlightColor = "#B6FF00",
}: {
    title: string;
    navLink?: string;
    description?: string;
    highlightWords?: string[];
    hightlightColor?: string;
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
        <div className="flex flex-col w-full gap-6 sm:flex-row sm:justify-between">
            <HeadingSection title={title} navLink={navLink} />
            <Reveal threshold={0.2}>
                <p className="indent-28 max-w-[954px] text-2xl sm:text-[40px] font-dm-sans leading-8 text-white">
                    {getHighlightedText(description, highlightWords)}
                </p>
            </Reveal>
        </div>
    );
}