import { cn } from "@/lib/utils";
import { HeadingSection } from "./heading-section";

export function TMASection({className}:{className?: string}) {
    return (
        <div className={cn("flex flex-col gap-6 px-4 w-full max-w-[1440px]", className)}>
            <HeadingSection
                title="TELEGRAM MINI-APP"
            />
            <div className="flex flex-col gap-10">
                <p className="indent-28 max-w-[954px] text-2xl sm:text-[40px] font-dm-sans leading-9 text-white">
                    <span className="text-[#B6FF00]">Join Nymb's</span> Telegram mini-app <span className="text-[#B6FF00]">now</span>. Start
                    <span className="text-[#B6FF00]"> swiping, invite friends, complete tasks, battle players,</span> and
                    climb the leaderboards. <span className="text-[#B6FF00]">Every second counts. </span>
                    Start earning yours today.
                </p>
                <a
                    href="https://t.me/nymb_twa_bot/nymb"
                    target="_blank"
                    className="w-full sm:w-fit text-center text-lg font-pixel text-black px-4 py-4 rounded-none bg-linear-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] font-normal uppercase tracking-[0.12rem]"
                >
                    OPEN APP
                </a>
            </div>
        </div>
    );
}