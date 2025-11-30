import useEmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
  type EmblaPluginType,
} from "embla-carousel-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselContextValue = {
  api: EmblaCarouselType | undefined;
  viewportRef: (node: HTMLElement | null) => void;
};

const CarouselContext = React.createContext<CarouselContextValue | undefined>(
  undefined
);

export type CarouselApi = EmblaCarouselType;

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  setApi?: (api: EmblaCarouselType | undefined) => void;
};

export function Carousel({
  opts,
  plugins,
  setApi,
  className,
  children,
  ...props
}: CarouselProps) {
  const [viewportRef, api] = useEmblaCarousel(opts, plugins);

  React.useEffect(() => {
    if (!setApi) return;
    setApi(api);
  }, [api, setApi]);

  return (
    <CarouselContext.Provider value={{ api, viewportRef }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselContent must be used inside Carousel");
  }

  return (
    <div className="overflow-hidden" ref={context.viewportRef}>
      <div ref={ref} className={cn("flex -ml-4", className)} {...props} />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-[576px]",
      className
    )}
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

function useCarouselApi() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel navigation must be used inside Carousel");
  }
  return context.api;
}

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const api = useCarouselApi();

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => api?.scrollPrev()}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-black/80 disabled:opacity-40",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const api = useCarouselApi();

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => api?.scrollNext()}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-black/80 disabled:opacity-40",
        className
      )}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";
