import { cn } from "@/lib/utils";
import type { ReactNode } from "react"

export const Reveal = ({
    duration = 0.8,
    delay = 0.3,
    className,
    children
}:{
    duration?: number,
    delay?: number,
    className?: string,
    children?: ReactNode,
}) => {
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
                    className={cn("inline-block fill-mode-[backwards] ", className)}
                    style={{
                        animation: `reveal ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s backwards`,
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    );
}

    // .animate-reveal {
                    //     animation: reveal ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s backwards;
                    // }