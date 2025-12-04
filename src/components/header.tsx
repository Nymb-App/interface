import logoNymbWhite from "../assets/logo-nymb-white.svg";
import { SocialLinks } from "../lib/constants";
import { cn } from "../lib/utils";
import { ConnectButton } from "./connect-wallet";
import { InstagramIconSvg } from "./icons/instagram-icon-svg";
import { TelegramIconSvg } from "./icons/telegram-icon-svg";
import { TwitterIconSvg } from "./icons/twitter-icon-svg";

export function Header({
  className,
}:{
  className?: string,
}) {
  return (
    <header className={cn("inline-flex items-center justify-between", className)}>
      <a href="#" className="h-10">
        <img src={logoNymbWhite} alt="Nymb" className="size-full" />
      </a>

      <div className="inline-flex items-center gap-12 text-white">
        <ul className="gap-8 font-pixel uppercase hidden lg:inline-flex">
          <li>
            <a href="#mission">mission</a>
          </li>
          <li>
            <a href="#phases">phases</a>
          </li>
          <li>
            <a href="#founders">founders</a>
          </li>
          <li>
            <a href="#nft">nft</a>
          </li>
        </ul>

        <div className="hidden sm:inline-flex items-center gap-6">
          <a href={SocialLinks.Instagram} target="_blank">
            <InstagramIconSvg />
          </a>
          <a href={SocialLinks.Twitter} target="_blank">
            <TwitterIconSvg />
          </a>
          <a href={SocialLinks.Telegram} target="_blank">
            <TelegramIconSvg />
          </a>
        </div>

        <ConnectButton className="h-10 hidden sm:block" />
      </div>
    </header>
  );
}
