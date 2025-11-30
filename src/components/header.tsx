import logoNymbWhite from "../assets/logo-nymb-white.svg";
import { InstagramIconSvg } from "./icons/instagram-icon-svg";
import { TelegramIconSvg } from "./icons/telegram-icon-svg";
import { TwitterIconSvg } from "./icons/twitter-icon-svg";
import { LinkButton } from "./ui/link-button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-20 pt-6">
      <div className="mr-auto">
        <a href="#">
          <img src={logoNymbWhite} alt="Nymb" className="h-10 w-auto" />
        </a>
      </div>

      <div>
        <nav>
          <ul className="flex gap-12">
            <li>
              <a className="font-dm" href="#">
                mission
              </a>
            </li>
            <li>
              <a href="#">phases</a>
            </li>
            <li>
              <a href="#">founders</a>
            </li>
            <li>
              <a href="#">nft</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#B6FF00]">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6FF00]/60">
            <div className="h-[13px] w-[13px] rounded-full border border-[#B6FF00] border-t-0" />
          </div>
          <span>Every minute of life</span>
        </div> */}
      <div className="flex gap-10 ml-10">
        <a href="#">
          <InstagramIconSvg />
        </a>
        <a href="#">
          <TwitterIconSvg />
        </a>
        <a href="#">
          <TelegramIconSvg />
        </a>
      </div>
      <div className="ml-14">
        <LinkButton label="CONNECT" className="!rounded-none" />
      </div>
    </header>
  );
}
