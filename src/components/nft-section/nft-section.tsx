import type { ReactNode } from "react";
import UnicornScene from 'unicornstudio-react';
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";


import { Container } from "../container";
import { HeadingSection } from "../heading-section";


import NymbLogo from '../../assets/brand/logo.png';
import nftN2Placeholder from "../../assets/nft-n2.png";
import nftN3Placeholder from "../../assets/nft-n3.png";
import nftN1Placeholder from "../../assets/nft-n1.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

import { LuShieldCheck } from "react-icons/lu";

export function NftSection({className}:{className?: string}) {
  return (
    <section className={cn("text-white", className)}>
      <Container>
        <div className="flex flex-col gap-20">
          <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <HeadingSection
              title="NFT"
              navLink="nft"
            />
            <p className="indent-28 max-w-[954px] text-2xl sm:text-[40px] font-dm-sans leading-7 text-white">
              Become a strategic <span className="text-[#B6FF00]">partner</span> in <span className="text-[#B6FF00]">Nymb </span>
              through <span className="text-[#B6FF00]">exclusive NFT</span> ownership - <span className="text-[#B6FF00]">unlocking </span>
              equity rights, <span className="text-[#B6FF00]">revenue sharing, priority access</span> to
              drops, and <span className="text-[#B6FF00]">boosted</span> ecosystem <span className="text-[#B6FF00]">rewards.</span>
            </p>
          </div>

          {/* Mobile version of cards */}
          <div className="w-full flex flex-col md:hidden gap-20">
            <CardMobile
              id={0}
              pricePerNft={100}
              supply={5000}
              income={10}
              annualGains="Up to 60-180%"
              discount={10}
              stakingBoost={10}
            />
            <CardMobile
              id={1}
              pricePerNft={2000}
              supply={250}
              income={20}
              annualGains="15-45%"
              discount={15}
              stakingBoost={25}
            />
            <CardMobile
              id={2}
              pricePerNft={5000}
              supply={100}
              income={70}
              annualGains="42-126%"
              discount={40}
              stakingBoost={60}
            />
          </div>

          {/* PC version of cards */}
          <div className="w-full hidden md:inline-flex">
            <CardPCTitles
              className="mt-[430px] max-w-[200px]"
            />

            <Card
              id={0}
              pricePerNft={100}
              supply={5000}
              income={10}
              annualGains="Up to 60-180%"
              discount={10}
              stakingBoost={10}
            />
            <Card
              id={1}
              pricePerNft={2000}
              supply={250}
              income={20}
              annualGains="15-45%"
              discount={15}
              stakingBoost={25}
            />
            <Card
              id={2}
              pricePerNft={5000}
              supply={100}
              income={70}
              annualGains="42-126%"
              discount={40}
              stakingBoost={60}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CardPCTitles({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      <Row className="text-base">
        Supply
      </Row>
      <Row className="text-base mt-1">
        Lock Period
        <span className="font-dm-sans text-white/40 text-base">Tradeable After</span>
      </Row>
      <Row className="text-base">
        Income from<br />
        Community Pool
      </Row >
      <Row className="text-base mt-3">
        Annual Gains
      </Row>
      <Row className="text-base mt-4.5">
        Token Drops
      </Row>
      <Row className="text-base mt-5">
        TGE Whitelist
      </Row>
      <Row className="text-base mt-3">
        Discounts Up to
      </Row>
      <Row className="text-base">
        Staking Boost
        <span className="font-dm-sans text-white/40 text-base">On Base</span>
      </Row>
      <Row className="text-base -mt-3.5">
        DAO Power
      </Row>
    </div>
  )
}

function CardMobile({
  id = 0,
  pricePerNft = 100,
  supply = 5000,
  lockPeriod = 6,
  income = 10,
  annualGains = 'Up to 60-180%',
  discount = 10,
  stakingBoost = 10,
}: {
  id?: number,
  pricePerNft?: number,
  supply?: number,
  lockPeriod?: number,
  income?: number,
  annualGains?: string,
  discount?: number,
  stakingBoost?: number,
}) {
  return (
    <div className="relative flex flex-col w-full">
      {/* Top card */}
      <img
        src={id === 0 ? nftN1Placeholder : id === 1 ? nftN2Placeholder : nftN3Placeholder}
        alt="Logo"
        className={cn("absolute right-0 -top-8 w-[300px] h-auto z-50",
          id === 1 && 'w-[280px] -top-12',
          id === 2 && 'w-[210px] -top-18'
        )}
      />

      <div
        className={cn(
          "relative flex flex-col w-full overflow-hidden h-[254px] border",
          id === 0 && ' border-[#B6FF00]/40',
          id === 1 && ' -mt-5 border-[#35F4FF]/40',
          id === 2 && ' -mt-10 border-[#FF3BFF]/40',
        )}
      >
        <UnicornScene
          showPlaceholderOnError
          showPlaceholderWhileLoading
          placeholder={
            id === 0 ? nftN1Placeholder :
              id === 1 ? nftN2Placeholder :
                nftN3Placeholder
          }
          jsonFilePath={`/webgl/nft-bg_n${id + 1}.json`}
          scale={1}
          dpi={1}
          fps={60}
          production={true}
          lazyLoad={true}
          altText="WebGL scene"
          ariaLabel="Animated WebGL scene"
          className='absolute w-[110%]'
        />
        <div className="absolute flex flex-col justify-between w-full h-full top-5 left-5">
          <span className={cn(
            "text-base font-pixel text-[#B6FF00]",
            id === 1 && 'text-[#35F4FF]',
            id === 2 && 'text-[#FF3BFF]'
          )}>
            {
              id === 0 ? "5 000 LEFT" :
                id === 1 ? "250 LEFT" :
                  "100 LEFT"
            }
          </span>

          <div className="flex flex-col gap-4 w-full h-full justify-end pb-10">
            <span className={cn(
              "font-pixel text-6xl text-[#B6FF00]",
              id === 1 && 'text-[#35F4FF]',
              id === 2 && 'text-[#FF3BFF]'
            )}>
              N{id + 1}
            </span>
            <p className="font-[550] text-xl font-dm-sans text-white">
              {id === 0 && (
                <>
                  Starting Your Journey<br />
                  Entry Point to NYMB Ecosystem
                </>
              )}
              {id === 1 && (
                <>
                  Growing Together<br />
                  Balanced Income & Opportunity
                </>
              )}
              {id === 2 && (
                <>
                  Leading the Revolution<br />
                  Maximum Share in Success
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={id === 0 ? "item-1" : undefined}
        defaultChecked={id === 0}
      >
        <AccordionItem defaultChecked={id === 0} value="item-1">
          <AccordionContent className={cn(
            "flex flex-col w-full border border-white/15"
          )}
          >
            <div className="inline-flex mt-3">
              <Row className="text-xs text-white/70">Supply</Row>
              <Row>{supply.toLocaleString('en-US')}</Row>
            </div>

            <div className="inline-flex">
              <Row className="text-xs text-white/70">
                Lock Period
                <span className="font-dm-sans text-white/40 text-xs">Tradeable After</span>
              </Row>
              <Row>
                {lockPeriod.toLocaleString('en-US')}%
                <span className="font-dm-sans text-white/40 text-xs">month</span>
              </Row>
            </div>

            <div className="inline-flex">
              <Row className="text-xs text-white/70">
                Income from<br/>
                Community Pool
              </Row>
              <Row>
                {income.toLocaleString('en-US')}%
                <span className="font-dm-sans text-white/40 text-xs">when you hit</span>
              </Row>
            </div>

            <div className="inline-flex items-center">
              <Row className="text-xs text-white/70">Anual gains</Row>
              <Row className="text-[#B6FF00]">
                <span className="inline-flex items-center gap-1">
                  {annualGains}
                  {id > 0 ? <LuShieldCheck fill="#B6FF00" className="text-black text-lg"/> : null}
                </span>
                {id === 0 ? <span className="font-dm-sans text-white/40 text-xs">when you hit</span> : null}
              </Row>
            </div>

            <div className="inline-flex items-center">
              <Row className="text-xs text-white/70">Token Drops</Row>
              <Row>
                <div className="inline-flex items-center gap-2">
                  <img className="size-6" src={NymbLogo} alt="Logo" />
                  <span className="">Nymb</span>
                </div>
              </Row>
            </div>

            <div className="inline-flex items-center">
              <Row className="text-xs text-white/70">TGE Whitelist</Row>
              <Row>
                {id === 0 ? "Priority" : id === 1 ? "Bigger allocation" : "VIP allocation"}
                <span className="font-dm-sans text-white/40 text-xs">Priority</span>
              </Row>
            </div>

            <div className="inline-flex items-center">
              <Row className="text-xs text-white/70">Discount Up to</Row>
              <Row>{discount.toLocaleString('en-US')}%</Row>
            </div>

            <div className="inline-flex items-center">
              <Row className="text-xs text-white/70">
                Staking Boost
                <span className="font-dm-sans text-white/40 text-xs">On Base</span>
              </Row>
              <Row>+{stakingBoost.toLocaleString('en-US')}%</Row>
            </div>

            <div className="inline-flex items-center">
              <Row className="text-base text-white/70">DAO Power</Row>
              <Row className="pb-4">
                {id === 0 ? "Limited voting" : id === 1 ? "Standard voting" : "VIP priority votes"}
              </Row>
            </div>
          </AccordionContent>

          <AccordionTrigger className="w-full border border-white/15 text-white/70 rounded-none px-6">
            Minimize
          </AccordionTrigger>
          <div className="w-full inline-flex justify-between">
            <div className={cn(
              "w-full basis-1/2 font-pixel text-xl px-3 py-5 text-white inline-flex items-baseline gap-1 bg-linear-to-r from-[#B6FF00]/15 to-[#B6FF00]/0",
              id === 0 && 'from-[#B6FF00]/15 to-[#B6FF00]/0',
              id === 1 && 'from-[#35F4FF]/15 to-[#35F4FF]/0',
              id === 2 && 'from-[#FF3BFF]/15 to-[#FF3BFF]/0',
            )}
            >
              <span className="text-[#B6FF00]">$</span>
              {pricePerNft.toLocaleString('en-US')}
              <span className="font-dm-sans text-white/40 text-base">per nft</span>
            </div>
            <Button
              variant={'ghost'}
              className={cn(
                "w-full basis-1/2 h-full font-pixel text-xl gap-1 rounded-none px-3 py-5 hover:bg-transparent cursor-pointer border",
                id === 0 && 'text-[#B6FF00] border-[#B6FF00] hover:text-[#B6FF00]',
                id === 1 && 'text-[#35F4FF] border-[#35F4FF] hover:text-[#35F4FF]',
                id === 2 && 'text-[#FF3BFF] border-[#FF3BFF] hover:text-[#FF3BFF]',
              )}
            >
              MINT N{id + 1}
            </Button>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

function Card({
  id = 0,
  pricePerNft = 100,
  supply = 5000,
  lockPeriod = 6,
  income = 10,
  annualGains = 'Up to 60-180%',
  discount = 10,
  stakingBoost = 10,
}: {
  id?: number,
  pricePerNft?: number,
  supply?: number,
  lockPeriod?: number,
  income?: number,
  annualGains?: string,
  discount?: number,
  stakingBoost?: number,
}) {
  return (
    <div className="relative flex flex-col w-full">
      {/* Top card */}
      <img
        src={id === 0 ? nftN1Placeholder : id === 1 ? nftN2Placeholder : nftN3Placeholder}
        alt="Logo"
        className={cn("absolute right-0 -top-8 w-[300px] h-auto z-50",
          id === 1 && 'w-[280px] -top-12',
          id === 2 && 'w-[210px] -top-18'
        )}
      />

      <div
        className={cn(
          "relative flex flex-col w-full overflow-hidden ",
          id === 0 && 'h-[348px] border-t border-l border-b border-[#B6FF00]/40',
          id === 1 && 'h-[368px] border-t border-l border-b -mt-5 border-[#35F4FF]/40',
          id === 2 && 'h-[388px] border -mt-10 border-[#FF3BFF]/40',
        )}
      >
        <UnicornScene
          showPlaceholderOnError
          showPlaceholderWhileLoading
          placeholder={
            id === 0 ? nftN1Placeholder :
              id === 1 ? nftN2Placeholder :
                nftN3Placeholder
          }
          jsonFilePath={`/webgl/nft-bg_n${id + 1}.json`}
          scale={1}
          dpi={1}
          fps={60}
          production={true}
          lazyLoad={true}
          altText="WebGL scene"
          ariaLabel="Animated WebGL scene"
          className='absolute w-[110%]'
        />
        <div className="absolute flex flex-col justify-between w-full h-full top-5 left-5">
          <span className={cn(
            "text-base font-pixel text-[#B6FF00]",
            id === 1 && 'text-[#35F4FF]',
            id === 2 && 'text-[#FF3BFF]'
          )}>
            {
              id === 0 ? "5 000 LEFT" :
                id === 1 ? "250 LEFT" :
                  "100 LEFT"
            }
          </span>

          <div className="flex flex-col gap-8 w-full h-full justify-end pb-10">
            <span className={cn(
              "font-pixel text-7xl text-[#B6FF00]",
              id === 1 && 'text-[#35F4FF]',
              id === 2 && 'text-[#FF3BFF]'
            )}>
              N{id + 1}
            </span>
            <p className="font-[550] font-dm-sans text-white">
              {id === 0 && (
                <>
                  Starting Your Journey<br />
                  Entry Point to NYMB Ecosystem
                </>
              )}
              {id === 1 && (
                <>
                  Growing Together<br />
                  Balanced Income & Opportunity
                </>
              )}
              {id === 2 && (
                <>
                  Leading the Revolution<br />
                  Maximum Share in Success
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className={cn(
        "flex flex-col w-full border-l border-b",
        id === 0 && "border-[#B6FF00]",
        id === 1 && "border-[#35F4FF]",
        id === 2 && "border-[#FF3BFF]",
      )}
      >
        <div className={cn(
          "w-full font-pixel text-xl px-3 py-6 text-white text-center inline-flex items-baseline justify-center gap-1 bg-linear-to-r from-[#B6FF00]/15 to-[#B6FF00]/0",
          id === 0 && 'from-[#B6FF00]/15 to-[#B6FF00]/0',
          id === 1 && 'from-[#35F4FF]/15 to-[#35F4FF]/0',
          id === 2 && 'from-[#FF3BFF]/15 to-[#FF3BFF]/0',
        )}
        >
          <span className="text-[#B6FF00]">$</span>
          {pricePerNft.toLocaleString('en-US')}
          <span className="font-dm-sans text-white/40 text-base">per nft</span>
        </div>
        <Row>
          {supply.toLocaleString('en-US')}
        </Row>
        <Row>
          {lockPeriod.toLocaleString('en-US')}%
          <span className="font-dm-sans text-white/40 text-base">month</span>
        </Row>
        <Row>
          {income.toLocaleString('en-US')}%
          <span className="font-dm-sans text-white/40 text-base">when you hit</span>
        </Row>
        <Row>
          {annualGains}
          <span className="font-dm-sans text-white/40 text-base">when you hit</span>
        </Row>
        <Row>
          <div className="inline-flex items-center gap-2">
            <img className="size-6" src={NymbLogo} alt="Logo" />
            <span className="">Nymb</span>
          </div>
        </Row>
        <Row>
          {id === 0 ? "Priority" : id === 1 ? "Bigger allocation" : "VIP allocation"}
          <span className="font-dm-sans text-white/40 text-base">+ Priority</span>
        </Row>
        <Row>
          {discount.toLocaleString('en-US')}%
        </Row>
        <Row>
          +{stakingBoost.toLocaleString('en-US')}%
        </Row>
        <Row className="pb-4">
          {id === 0 ? "Limited voting" : id === 1 ? "Standard voting" : "VIP priority votes"}
        </Row>

        <Button
          variant={'ghost'}
          className={cn(
            "w-full h-14 font-pixel text-xl gap-1 rounded-none  hover:bg-transparent cursor-pointer",
            id === 0 && 'text-[#B6FF00] border-t border-l border-b border-[#B6FF00] hover:text-[#B6FF00]',
            id === 1 && 'text-[#35F4FF] border-t border-l border-b border-[#35F4FF] hover:text-[#35F4FF]',
            id === 2 && 'text-[#FF3BFF] border border-[#FF3BFF] hover:text-[#FF3BFF]',
          )}
        >
          MINT N{id + 1}
        </Button>
      </div>

    </div>
  )
}

function Row({
  className,
  children
}: {
  className?: string,
  children: ReactNode
}) {
  return (
    <div className={cn("w-full font-dm-sans text-sm md:text-xl px-6 py-3 md:px-6 md:py-3 text-white flex flex-col", className)}>
      {children}
    </div>
  );
}
