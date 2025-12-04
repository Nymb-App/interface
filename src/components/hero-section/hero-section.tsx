import { Button } from "../ui/button";
import { FaAngleDown } from "react-icons/fa";

import timeIcon from '../../assets/hero/time.png';
import { cn } from "../../lib/utils";

export function HeroSection({
  className,
  classNameContainer,
}: {
  className?: string,
  classNameContainer?: string,
}) {
  return (
    <div className={cn("w-full h-[calc(100vh-72px)] flex flex-col justify-end", className)}>
      <div className={cn("w-full px-4 mb-6 sm:mb-44", classNameContainer)}>
        <div className="space-y-4 font-dm-sans font-[550]">
          <p className="text-5xl sm:text-7xl text-white  font-dm-sans leading-[1.1] tracking-[-0.06em]">
            Nymb Ecosystem
          </p>

          <div className="inline-flex flex-wrap items-center gap-1 sm:gap-4 text-white">
            <p className="text-5xl sm:text-7xl w-full sm:w-fit">
              that turns
            </p>
            <img className="size-14 sm:size-max" src={timeIcon} alt="time" />
            <p className="text-5xl sm:text-7xl">
              time into value
            </p>
          </div>
        </div>

        <p className="max-w-[519px] text-[24px] font-inter leading-[1.4] tracking-[-0.03em] text-white mt-4">
          Every minute of life becomes <span className="text-[#B6FF00]">real value</span>
          <br />through <span className="text-[#B6FF00]">gamification</span> and <span className="text-[#B6FF00]">tokenization.</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row">
          <Button className="text-base sm:text-lg font-pixel text-black px-4 py-[26px] rounded-none bg-linear-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] font-normal uppercase tracking-[0.12rem]">
            Become our Partner
          </Button>
          <Button variant={'ghost'} className="text-base sm:text-lg font-pixel px-4 py-6 text-[#B6FF00] rounded-none border-2 border-[#B6FF00] font-normal uppercase tracking-[0.12rem] hover:bg-transparent hover:text-[#B6FF00]">
            Presentation
          </Button>
        </div>
      </div>

      <Button
        variant={'ghost'}
        className="hidden sm:flex absolute bottom-0 right-0 size-14 rounded-none border-2 border-[#B6FF00] text-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00]"
      >
        <FaAngleDown />
      </Button>
    </div>
  );
}