import { HeadingWithDescription } from "@/components/ui/heading-with-description";
import { cn } from "@/lib/utils";

export function MissionSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full px-8", className)}>
      <HeadingWithDescription
        title="MISSION"
        navLink="mission"
        description="Bring meaning back to time spent online. To
                  make social media useful, rewarding, and alive again. We
                  integrate Web3 technology, tokenized rewards, and real-
                  world products into a seamless experience - where living,
                  creating, and connecting finally have tangible worth."
        highlightWords={[
          "meaning",
          "time spent online.",
          "social media",
          "Web3 technology",
          "tangible worth.",
        ]}
      />
    </section>
  );
}
