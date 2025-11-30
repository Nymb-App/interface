import Marquee from "react-fast-marquee";
import { Container } from "./container";
import { InstagramIconSvg } from "./icons/instagram-icon-svg";
import { TelegramIconSvg } from "./icons/telegram-icon-svg";
import { TwitterIconSvg } from "./icons/twitter-icon-svg";

export function Footer() {
  return (
    <footer>
      <div className="relative w-full overflow-hidden">
        <Marquee className="inline-flex whitespace-nowrap text-[145px]">
          <span className="mx-4">
            turns time into value turns time into value turns time into value
          </span>
        </Marquee>
      </div>
      <Container>
        <div className="mt-4 flex justify-between">
          <span>Nymb. All Rights Reserved 2025</span>
          <div className="flex gap-10">
            <InstagramIconSvg />
            <TwitterIconSvg />
            <TelegramIconSvg />
          </div>
        </div>
      </Container>
    </footer>
  );
}
