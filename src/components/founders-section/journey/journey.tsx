import journeyBg from "../../../assets/journey-bg.png";
import { Container } from "../../container";

const journeyHighlights = [
  {
    id: 1,
    lines: ["Integrating", "advertising networks"],
  },
  {
    id: 2,
    lines: ["Developing", "partnerships"],
  },
  {
    id: 3,
    lines: ["Entering", "new markets"],
  },
];

export function Journey() {
  return (
    <div className="bg-black text-white">
      <div className="relative overflow-hidden">
        <img
          src={journeyBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.9)_100%)]" />

        <Container className="relative flex min-h-[666px] items-center overflow-hidden py-[168px]">
          <div className="flex w-full md:w-[200%]">
            <div className="flex w-full md:w-1/2 shrink-0 items-center justify-center px-4">
              <div className="space-y-2 text-center">
                <p className="text-[32px] md:text-[56px] lg:text-[80px] font-medium leading-none tracking-[-0.06em] text-white">
                  Even after
                  <br />
                  all key launches,
                </p>
                <p className="text-[32px] md:text-[56px] lg:text-[80px] font-medium leading-none tracking-[-0.06em] text-[#B6FF00]">
                  Nymb&apos;s journey
                  <br />
                  only begins.
                </p>
              </div>
            </div>

            <div className="hidden w-full md:flex md:w-1/2 shrink-0 items-center justify-center px-4">
              <div className="flex flex-col items-end gap-6">
                <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                  {journeyHighlights.map((item) => (
                    <div
                      key={item.id}
                      className="flex max-w-[417px] items-center rounded-[999px] border border-[#B6FF00] bg-[#141C00] px-8 py-5 shadow-[0_0_60px_rgba(182,255,0,1)]"
                    >
                      <p className="text-left text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.06em] text-white">
                        {item.lines[0]}
                        <br />
                        {item.lines[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
