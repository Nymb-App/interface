import IgorIvanov from "../../assets/founders/igor-ivanov.png";
import VitaliiTereshchenko from "../../assets/founders/vitalii-tereshchenko.png";
import { Container } from "../container";
import { HeadingSection } from "../heading-section";
import { HeadingWithDescription } from "../ui/heading-with-description";

export function FoundersSection() {
  return (
    <section className="bg-black text-white">
      <Container>
        <div className="flex flex-col items-end gap-5 sm:gap-20">
          <HeadingWithDescription
            title='FOUNDERS'
            navLink='founders'
            description="We're not competing with
              the past - we're building what
              comes next. An ecosystem where
              content has value, users are co-owners,
              and time becomes the new digital currency."
            highlightWords={[
              "we're building",
              "next.",
              "ecosystem where content has value",
              "time",
              "new",
              "currency.",
            ]}
          />

          <div className="inline-flex items-center justify-center w-full gap-0 sm:gap-10">
            <AvatarCard
              image={IgorIvanov}
              title="Igor Ivanov"
              description="Founder"
            />
            <AvatarCard
              image={VitaliiTereshchenko}
              title="Vitalii Tereshchenko"
              description="CO - Founder"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AvatarCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <img
        className="h-auto max-w-44 sm:max-w-[320px]"
        src={image}
        alt="Avatar"
      />
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
