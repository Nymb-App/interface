import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react"

export const Reveal = ({
    duration = 0.8,
    delay = 0.3,
    className,
    children,
    threshold = 0.2,
}:{
    duration?: number,
    delay?: number,
    className?: string,
    children?: ReactNode,
    threshold?: number,
}) => {
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
                        animation: visible ? `reveal ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s backwards` : 'none',
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    );
}