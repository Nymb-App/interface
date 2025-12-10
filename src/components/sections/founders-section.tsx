import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { HeadingWithDescription } from "@/components/ui/heading-with-description";
import IgorIvanov from "@/assets/sections/founders/igor-ivanov.webp";
import VitaliiTereshchenko from "@/assets/sections/founders/vitalii-tereshchenko.webp";

export function FoundersSection({ className }: { className?: string }) {
    return (
        <section className={cn("flex flex-col justify-between items-center gap-5 sm:gap-20 px-8 text-white w-full", className)}>
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
                classNameContainer="gap-6 sm:gap-20"
            >
                <div className="relative inline-flex items-center justify-around w-full sm:justify-start sm:gap-10">
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
            </HeadingWithDescription>
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
    className,
}: {
    image: string;
    title: string;
    description?: string;
    duration?: number;
    delay?: number;
    threshold?: number;
    className?: string;
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
                className={cn("flex flex-col gap-5", className)}
                style={{
                    opacity: visible ? 1 : 0,
                    animation: visible ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards` : 'none',
                }}
            >
                <img
                    className="h-auto max-w-40 rounded-[68px] sm:rounded-[120px] sm:max-w-[320px]"
                    src={image}
                    alt="Avatar"
                />
                <div className="w-full space-y-1">
                    <h3 className="font-dm-sans text-lg sm:text-3xl leading-[1.2] tracking-[-0.06em] text-white">
                        {title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-white/70">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}
