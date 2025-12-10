import { cn } from "@/lib/utils";
import { HeadingWithDescription, HeadingWithDescriptionTMA } from "@/components/ui/heading-with-description";

export function TMASection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "flex flex-col gap-6 px-8 w-full max-w-[1440px] mx-auto",
        className
      )}
    >
      <HeadingWithDescriptionTMA
        title="TELEGRAM MINI-APP"
        navLink="tma"
        className="mb-5"
        classNameContainer="gap-10"
      >
        <a
          href="https://t.me/nymb_twa_bot/nymb"
          target="_blank"
          className="w-full sm:w-fit text-center text-lg font-pixel text-black px-6 py-4 rounded-none bg-linear-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] font-normal uppercase tracking-[0.12rem]"
        >
          OPEN APP
        </a>
      </HeadingWithDescriptionTMA>
    </section>
  );
}
