import { cn } from "@/lib/utils";
import { FlickeringGrid } from "../flickering-grid";

import LogoAssetImg from "@/assets/sections/idea/logo.png";

export function IdeaSection({ className }: { className?: string }) {
    return (
        <section className={cn("w-full min-h-[500px] px-8 flex flex-col justify-center items-center", className)}>
            <FlickeringGrid
                className="absolute  size-full mask-[radial-gradient(ellipse_350px_250px_at_center,black_50%,transparent_100%)]"
                squareSize={2}
                gridGap={12}
                color="#b7ff01"
                maxOpacity={0.4}
                flickerChance={0.3}
            />
            <img
                className="absolute min-w-[600px] max-w-[600px] -ml-48 sm:min-w-[900px] sm:max-w-[900px] sm:-ml-70"
                src={LogoAssetImg}
                alt="Logo"
            />

            <div className="relative top-10 text-center text-white text-[32px] font-medium leading-8 sm:text-[64px] sm:leading-15 sm:top-20">
                <p><span className="text-[#B6FF00]">1 idea</span> to make</p>
                <p>every second count</p>
            </div>
        </section>
    );
}