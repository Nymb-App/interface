import Marquee from "react-fast-marquee";
import { SocialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { InstagramIconSvg } from "@/assets/icons/instagram-icon-svg";
import { TelegramIconSvg } from "@/assets/icons/telegram-icon-svg";
import { TwitterIconSvg } from "@/assets/icons/twitter-icon-svg";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "w-full mb-8 sm:min-h-[295px] sm:mb-0 flex flex-col gap-10",
        className
      )}
    >
      <div className="relative w-full overflow-hidden">
        <Marquee className="overflow-hidden">
          <span className="text-[#B6FF00] mx-4 font-medium text-4xl sm:text-[145px]">
            turns time into value turns time into value turns time into value
          </span>
        </Marquee>
      </div>

      <div className="mt-4 flex flex-col-reverse justify-between sm:flex-row text-white px-8 w-full max-w-[1440px] gap-10 mx-auto">
        <span className="font-inter opacity-70 text-center">
          Nymb. All Rights Reserved 2025
        </span>
        <div className="flex gap-10 mx-auto sm:mx-0">
          <a
            href={SocialLinks.Instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open Nymb Instagram profile"
          >
            <InstagramIconSvg />
          </a>
          <a
            href={SocialLinks.Twitter}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open Nymb X (Twitter) profile"
          >
            <TwitterIconSvg />
          </a>
          <a
            href={SocialLinks.Telegram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open Nymb Telegram channel"
          >
            <TelegramIconSvg />
          </a>
        </div>
      </div>
    </footer>
  );
}
