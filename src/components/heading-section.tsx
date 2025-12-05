import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export const HeadingSection = ({
    title,
    navLink,
    className,
    duration = 0.8,
    delay = 0,
    threshold = 0.2,
}: {
    title?: string,
    navLink?: string,
    className?: string,
    duration?: number,
    delay?: number,
    threshold?: number,
}) => {
    const ref = useRef<HTMLHeadingElement>(null);
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
            <h2
                ref={ref}
                id={navLink}
                className={cn("font-pixel text-white/40 sm:text-[#B6FF00] text-sm sm:text-base", className)}
                style={{
                    opacity: visible ? 1 : 0,
                    animation: visible ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards` : 'none',
                }}
            >
                {title}
            </h2>
        </>
    );
}