import logoNymbWhite from "../assets/logo-nymb-white.svg";
import { SocialLinks } from "../lib/constants";
import { cn } from "../lib/utils";
import { ConnectButton } from "./connect-wallet";
import { InstagramIconSvg } from "@/assets/icons/instagram-icon-svg";
import { TelegramIconSvg } from "@/assets/icons/telegram-icon-svg";
import { TwitterIconSvg } from "@/assets/icons/twitter-icon-svg";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn("inline-flex items-center justify-between", className)}
    >
      <a href="#" className="h-10">
        <img src={logoNymbWhite} alt="Nymb" className="size-full" />
      </a>

      <div className="inline-flex items-center gap-12 text-white">
        <ul className="gap-8 font-pixel uppercase hidden lg:inline-flex">
          <li>
            <a href="#mission" className="transition hover:text-[#B6FF00]">mission</a>
          </li>
          <li>
            <a href="#phases" className="transition hover:text-[#B6FF00]">phases</a>
          </li>
          <li>
            <a href="#founders" className="transition hover:text-[#B6FF00]">founders</a>
          </li>
          <li>
            <a href="#nft" className="transition hover:text-[#B6FF00]">nft</a>
          </li>
        </ul>

        <div className="hidden sm:inline-flex items-center gap-6">
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

        <ConnectButton className="h-10 hidden sm:block" />
      </div>
    </header>
  );
}
