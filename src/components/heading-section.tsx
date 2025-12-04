import { cn } from "../lib/utils";

export const HeadingSection = ({
    title,
    navLink,
    className,
}:{
    title?: string,
    navLink?: string,
    className?: string,
}) => {
    return (
    <h2
        id={navLink}
        className={cn("font-pixel text-white/40 sm:text-[#B6FF00] text-sm sm:text-base", className)}
    >
        {title}
    </h2>
);
}