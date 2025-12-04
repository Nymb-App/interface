import IgorIvanov from "../../assets/founders/igor-ivanov.png";
import VitaliiTereshchenko from "../../assets/founders/vitalii-tereshchenko.png";
import { Container } from "../container";
import { HeadingSection } from "../heading-section";
import { Journey } from "./journey/journey";

export function FoundersSection() {
  return (
    <section className="bg-black text-white">
      <Container >
        <div className="flex flex-col items-end gap-20">
          <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <HeadingSection
              title="FOUNDERS"
              navLink="founders"
            />
            <p className="indent-28 max-w-[954px] text-2xl sm:text-[40px] font-dm-sans leading-8 text-white">
              We're not competing with the past - <span className="text-[#B6FF00]">we're
                building</span> what comes next. <span className="text-[#B6FF00]">An ecosystem where content
                  has value</span>, users are co-owners, and <span className="text-[#B6FF00]">time</span> becomes the
              <span className="text-[#B6FF00]">new</span> digital <span className="text-[#B6FF00]">currency.</span>
            </p>
          </div>

          <div className="inline-flex items-center justify-center w-full gap-10 ">
            <AvatarCard image={IgorIvanov} title='Igor Ivanov' description="Founder"/>
            <AvatarCard image={VitaliiTereshchenko} title='Vitalii Tereshchenko' description="CO - Founder"/>
          </div>
        </div>
      </Container>
    </section>
  );
}


function AvatarCard({
  image,
  title,
  description
}: {
  image: string,
  title: string,
  description?: string
}) {
  return (
    <div className="flex flex-col gap-5">
      <img className="h-auto max-w-44 sm:max-w-[320px]" src={image} alt="Avatar" />
      <div className="w-full space-y-1">
        <h1 className="font-dm-sans text-lg sm:text-3xl leading-[1.2] tracking-[-0.06em] text-white">
          {title}
        </h1>
        <p className="font-inter text-xs sm:text-sm text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}