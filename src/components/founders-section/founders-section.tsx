import IgorIvanov from "../../assets/founders/igor-ivanov.png";
import VitaliiTereshchenko from "../../assets/founders/vitalii-tereshchenko.png";
import { Container } from "../container";
import { Journey } from "./journey/journey";

const founders = [
  {
    name: "Igor Ivanov",
    role: "Founder",
    image: IgorIvanov,
  },
  {
    name: "Vitalii Tereshchenko",
    role: "CO - Founder",
    image: VitaliiTereshchenko,
  },
];

export function FoundersSection() {
  return (
    <section className="bg-black text-white">
      <Container className="pt-[120px] pb-0">
        <div className="flex flex-col items-end gap-20">
          <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <p className="text-sm font-normal uppercase tracking-[-0.03em] text-[#B6FF00]">
              Founders
            </p>
            <p className="max-w-[954px] text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.2] tracking-[-0.06em] text-white">
              We&apos;re not competing with the past - we&apos;re building what
              comes next. An ecosystem where content has value, users are
              co-owners, and time becomes the new digital currency.
            </p>
          </div>

          <div className="flex w-full justify-end pr-[217px]">
            <div className="flex gap-10">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="flex w-[320px] flex-col items-end gap-4"
                >
                  <div className="h-[320px] w-[320px] overflow-hidden rounded-[32px] bg-[#000000]">
                    {/* <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_0%,rgba(182,255,0,0.12),transparent_55%),radial-gradient(circle_at_70%_100%,rgba(182,255,0,0.16),transparent_60%)] text-xs text-white/40">
                      photo
                    </div> */}
                    <img src={founder.image} alt="" />
                  </div>
                  <div className="w-full space-y-1 text-right">
                    <p className="text-[22px] md:text-[24px] lg:text-[28px] font-medium leading-[1.2] tracking-[-0.06em] text-white">
                      {founder.name}
                    </p>
                    <p className="text-[13px] md:text-sm font-normal leading-[1.4] tracking-[-0.03em] text-white/70">
                      {founder.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Journey />
      </Container>
    </section>
  );
}
