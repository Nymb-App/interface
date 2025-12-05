import CountUp from 'react-countup';

import MissionImage from "../../assets/mission/Frame 2135556552.png";
import { Container } from "../container";
import { HeadingSection } from "../heading-section";
import { PhaseCarousel } from "./phase-carousel/phase-carousel";
import UnicornScene from 'unicornstudio-react';
import { FlickeringGrid } from '../flickering-grid';
import { cn } from '@/lib/utils';
import { HeadingWithDescription } from '../ui/heading-with-description';

export function MissionSection({className}:{className?: string}) {
  return (
    <section className={cn("bg-black text-white", className)}>
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex w-full flex-col">
            <HeadingWithDescription
              title='MISSION'
              navLink='mission'
              description='Bring meaning back to time spent online. To
                  make social media useful, rewarding, and alive again. We
                  integrate Web3 technology, tokenized rewards, and real-
                  world products into a seamless experience - where living,
                  creating, and connecting finally have tangible worth.'
              highlightWords={[
                "meaning",
                "time spent online.",
                "social media",
                "Web3 technology",
                "tangible worth.",
              ]}
            />

            <div className="mt-15 flex w-full flex-col gap-10 border-t border-white/10 pt-16 md:flex-row md:items-start md:justify-between">
              <HeadingSection
                title="NUMBERS"
              />
              <div className="inline-flex justify-between w-full max-w-[954px] gap-10">
                <NumbersWithSubtitle value={460} subtitle='Industry' />
                <NumbersWithSubtitle value={5} subtitle='Users' />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-8">
            <div className="relative w-full max-w-7xl h-[400px]">
              <FlickeringGrid
                className="absolute inset-0 top-2 size-full mask-[radial-gradient(ellipse_350px_250px_at_center,black_50%,transparent_100%)]"
                squareSize={2}
                gridGap={12}
                color="#b7ff01"
                maxOpacity={0.4}
                flickerChance={0.3}
              />
              <UnicornScene
                showPlaceholderOnError
                showPlaceholderWhileLoading
                placeholder={MissionImage}
                jsonFilePath={'/webgl/logo_1-step.json'}
                scale={1}
                dpi={1}
                fps={60}
                production={true}
                lazyLoad={true}
                altText="WebGL scene"
                ariaLabel="Animated WebGL scene"
                className='overflow-y-hidden absolute left-1/2 top-1/2 -translate-1/2 w-full max-h-[250px] mask-[linear-gradient(180deg,transparent_0%,black_10%,black_95%,transparent_100%)]'
              />
              <p className="relative top-16 max-w-[640px] text-center text-4xl sm:text-6xl font-dm-sans font-[550] text-white">
                <span className='text-[#B6FF00]'>1 idea</span> to make
                <br />
                every second count.
              </p>
            </div>
          </div>
        </div>
        <PhaseCarousel />
      </Container>
    </section>
  );
}


function NumbersWithSubtitle({
  value = 100,
  valueLabel = "B",
  subtitle,
}: {
  value?: number,
  valueLabel?: string,
  subtitle?: string,

}) {
  return (
    <CountUp
      start={0}
      end={value}
      duration={2}
      decimals={0}
      separator=" "
      prefix='$'
      suffix={valueLabel}
    >
      {({ countUpRef }) => (
        <div className='flex flex-col gap-3'>
          <span className='font-dm-sans text-6xl sm:text-7xl font-[550] text-[#B6FF00]' ref={countUpRef} />
          <span className='font-inter text-base sm:text-2xl font-light tracking-wide text-white'>{subtitle}</span>
        </div>
      )}
    </CountUp>
  );
}