import { HeadingWithDescription } from "@/components/ui/heading-with-description";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function MissionSection({ className }: { className?: string }) {
  // const [isVisible, setIsVisible] = useState(false);
  // const sectionRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  return (
    <section ref={sectionRef} className={cn("w-full px-8", className)}>
      <HeadingWithDescription title="MISSION" navLink="mission">
        <p
          className={cn(
            "font-medium max-w-[954px] text-2xl sm:text-[48px] font-dm-sans leading-8 sm:leading-13 text-white sm:-mt-2",
            !isIntersecting && "opacity-0"
          )}
        >
          {/* Desktop версия */}
          <span className="hidden sm:block">
            <span className="block overflow-hidden">
              <span className="block text-anim-1 indent-16 sm:indent-28">
                Bring <span className="text-[#B6FF00]">meaning</span> back to{" "}
                <span className="text-[#B6FF00]">time spent online.</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-2">
                To make <span className="text-[#B6FF00]">social media</span>{" "}
                useful, rewarding, and
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-3">
                alive again. We integrate{" "}
                <span className="text-[#B6FF00]">Web3 technology,</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-4">
                tokenized rewards, and real- world products
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-5">
                into a seamless experience - where living,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-6">
                creating, and connecting finally have{" "}
                <span className="text-[#B6FF00]">tangible worth.</span>
              </span>
            </span>
          </span>

          {/* Mobile версия */}
          <span className="block sm:hidden">
            <span className="block overflow-hidden">
              <span className="block text-anim-1 indent-16">
                Bring <span className="text-[#B6FF00]">meaning</span> back to
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-2">
                <span className="text-[#B6FF00]">time spent online.</span> To
                make <span className="text-[#B6FF00]">social</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-3">
                <span className="text-[#B6FF00]">media</span> useful, rewarding,
                and alive
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-4">
                again. We integrate <span className="text-[#B6FF00]">Web3</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-5">
                <span className="text-[#B6FF00]">technology,</span> tokenized
                rewards,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-6">
                and real-world products into a
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-7">
                seamless experience - where
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-8">
                living, creating, and connecting
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-anim-9">
                finally have{" "}
                <span className="text-[#B6FF00]">tangible worth.</span>
              </span>
            </span>
          </span>
        </p>
      </HeadingWithDescription>
    </section>
  );
}
