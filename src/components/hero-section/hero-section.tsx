import bgImage from "../../assets/bg-image.png";
import settingsButton from "../../assets/settings-button.svg";
import { Container } from "../container";
import { Header } from "../header";

export function HeroSection() {
  return (
    <div className="relative w-full">
      <Container>
        <div className="min-h-screen overflow-hidden bg-black text-white">
          <img
            src={bgImage}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
            <Header />
            <main className="flex flex-1 items-center px-20 pb-12">
              <div className="max-w-[520px] space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[72px] font-medium leading-[1.1] tracking-[-0.06em]">
                      Nymb Ecosystem
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <p className="text-[72px] font-medium leading-[1.1] tracking-[-0.06em]">
                      that turns
                    </p>
                    <NymbTimeIcon />
                    <p className="text-[72px] font-medium leading-[1.1] tracking-[-0.06em]">
                      time into value
                    </p>
                  </div>
                </div>

                <p className="max-w-[519px] text-[24px] font-light leading-[1.4] tracking-[-0.03em] text-white/80">
                  Every minute of life becomes real value through gamification
                  and tokenization.
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] px-10 py-4 text-sm font-normal uppercase tracking-[0.25em] text-[#121312]">
                    Become our Partner
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border border-[#B6FF00] px-10 py-4 text-sm font-normal uppercase tracking-[0.25em] text-[#B6FF00]">
                    Presentation
                  </button>
                </div>
              </div>
            </main>
          </div>
          <button className="pointer-events-auto absolute bottom-0 right-0 m-0 h-14 w-14">
            <img
              src={settingsButton}
              alt="Settings"
              className="h-full w-full"
            />
          </button>
        </div>
      </Container>
    </div>
  );
}

const NymbTimeIcon = () => {
  return (
    <svg
      width="102"
      height="102"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="101.286" height="101.286" fill="url(#pattern0_2084_6505)" />
      <defs>
        <pattern
          id="pattern0_2084_6505"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></pattern>
        <image
          id="image0_2084_6505"
          width="1232"
          height="1232"
          preserveAspectRatio="none"
        />
      </defs>
    </svg>
  );
};
