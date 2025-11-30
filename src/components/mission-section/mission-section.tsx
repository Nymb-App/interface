import MissionImage from "../../assets/mission/Frame 2135556552.png";
import { Container } from "../container";
import { PhaseCarousel } from "./phase-carousel/phase-carousel";

export function MissionSection() {
  return (
    <section className="bg-black text-white">
      <Container className="py-[120px]">
        <div className="flex flex-col items-center gap-20">
          <div className="flex w-full flex-col gap-16">
            <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <p className="text-sm font-normal uppercase tracking-[-0.03em] text-[#B6FF00]">
                Mission
              </p>
              <p className="max-w-[954px] text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-none tracking-[-0.06em] text-white">
                Bring meaning back to time spent online. To make social media
                useful, rewarding, and alive again. We integrate Web3
                technology, tokenized rewards, and real-world products into a
                seamless experience &mdash; where living, creating, and
                connecting finally have tangible worth.
              </p>
            </div>

            <div className="flex w-full flex-col gap-10 border-t border-white/10 pt-16 md:flex-row md:items-start md:justify-between">
              <p className="text-sm font-normal uppercase tracking-[-0.03em] text-[#B6FF00]">
                Numbers
              </p>
              <div className="grid w-full max-w-[954px] gap-10 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-[56px] md:text-[72px] lg:text-[80px] font-medium leading-none tracking-[-0.06em] text-white">
                    $460B
                  </p>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px] font-light leading-none tracking-[-0.03em] text-white/80">
                    Industry
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[56px] md:text-[72px] lg:text-[80px] font-medium leading-none tracking-[-0.06em] text-white">
                    5B
                  </p>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px] font-light leading-none tracking-[-0.03em] text-white/80">
                    Users
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-8">
            <div className="relative w-full max-w-[804px] aspect-804/628 overflow-hidden rounded-[999px] bg-[radial-gradient(circle_at_50%_50%,rgba(7,7,7,0)_64%,rgba(7,7,7,1)_100%)]">
              {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(182,255,0,0.28),transparent_55%),radial-gradient(circle_at_70%_100%,rgba(182,255,0,0.16),transparent_60%)]" />
              <div className="absolute -left-20 top-1/4 h-[240px] w-[240px] rounded-full bg-[#D9D9D9]/20 blur-3xl" />
              <div className="absolute right-[-40px] bottom-[-40px] h-[260px] w-[260px] rounded-[140px] bg-[#121312]" /> */}
              <img src={MissionImage} alt="" />
            </div>
            <p className="max-w-[640px] text-center text-[32px] md:text-[48px] lg:text-[64px] font-medium leading-none tracking-[-0.06em] text-white">
              1 idea to make
              <br />
              every second count.
            </p>
          </div>
        </div>
        <PhaseCarousel />
      </Container>
    </section>
  );
}
