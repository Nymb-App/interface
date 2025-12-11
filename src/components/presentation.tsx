import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

import { RiCloseLargeLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { ChevronIcon } from "@/assets/icons/chevron";

import slide0 from "@/assets/presentation/slide-0.png";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

export function Presentation({ className }: { className?: string }) {
    const [api, setApi] = useState<CarouselApi | undefined>();
    const intervalRef = useRef<any | null>(null);

    const startAutoScroll = useCallback(() => {
        if (!api) return;
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 6000);
    }, [api]);

    const scrollNext = useCallback(() => {
        if (api.canScrollNext()) {
            api.scrollNext();
        }
    }, [api]);

    const scrollPrev = useCallback(() => {
        if (api.canScrollPrev()) {
            api.scrollPrev();
        }
    }, [api]);

    const stopAutoScroll = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (!api) return;
        // startAutoScroll();

        return () => {
            stopAutoScroll();
        };
    }, [api]);


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"ghost"}
                    className={cn("text-base sm:w-fit w-full sm:text-lg font-pixel px-4 py-6 text-[#B6FF00] rounded-none border-2 border-[#B6FF00] font-normal uppercase tracking-[0.12rem] hover:bg-transparent hover:text-[#B6FF00]", className)}
                >
                    Presentation
                </Button>
            </DialogTrigger>

            <DialogContent showCloseButton={false} className=" w-full h-full">
                <DialogHeader className="absolute top-0 right-0 size-14">
                    <DialogClose className="" asChild>
                        <Button
                            variant={"ghost"}
                            className="text-base size-full sm:text-lg font-pixel px-4 py-6 text-[#B6FF00] bg-[#070707] rounded-none border-l-2 border-b-2 border-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00]"
                        >
                            <RiCloseLargeLine className="size-8" />
                        </Button>
                    </DialogClose>
                </DialogHeader>

                {/* Content Carousel */}
                <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full max-w-[1200px] overflow-hidden">
                    <Carousel setApi={setApi} className="size-full">
                        <CarouselContent className="size-full">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CarouselItem
                                    className="relative size-full md:basis-full aspect-video ml-0"
                                    key={index}
                                >
                                    <img
                                        src={slide0}
                                        alt="Slide"
                                        className="absolute h-auto w-full"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>


                <DialogFooter
                    className="flex flex-row gap-0 absolute left-1/2 -translate-x-1/2 bottom-0 h-14 w-full sm:max-w-[248px]"
                >
                    <Button
                        onClick={scrollPrev}
                        variant={"ghost"}
                        className="basis-1/2 gap-3 text-lg size-full font-pixel px-4 py-6 text-[#B6FF00] bg-[#070707] rounded-none border-t-2 sm:border-l-2 border-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00]"
                    >
                        <ChevronIcon className="rotate-180 size-3" />
                        PREV
                    </Button>
                    <Button
                        onClick={scrollNext}
                        variant={"ghost"}
                        className="basis-1/2 gap-3 text-lg size-full font-pixel px-4 py-6 text-[#B6FF00] bg-[#070707] rounded-none border-l-2 border-t-2 sm:border-r-2 border-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00]"
                    >
                        NEXT
                        <ChevronIcon className="size-3" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );
}