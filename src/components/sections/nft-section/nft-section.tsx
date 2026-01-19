import { useSectionReveal } from "@/hooks/use-section-reveal";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import UnicornScene from 'unicornstudio-react';
import { cn } from "@/lib/utils";

import { HeadingWithDescription } from "@/components/ui/heading-with-description";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import NymbLogo from '@/assets/brand/logo.png';
import nftN2Placeholder from "@/assets/nft-n2.png";
import nftN3Placeholder from "@/assets/nft-n3.png";
import nftN1Placeholder from "@/assets/nft-n1.png";

import { LuShieldCheck } from "react-icons/lu";
import { TransferTonButton } from "@/components/transfer-ton-button";
import { PRICE_PER_NFT_N1_USD, PRICE_PER_NFT_N2_USD, PRICE_PER_NFT_N3_USD, RECEIVER_ADDRESS } from "@/lib/constants";
import { usePricePerToken } from "@/hooks/use-price-per-token";



export function NftSection({ className }: { className?: string }) {
  const { ref: sectionRef, hasRevealed } = useSectionReveal({
    rootMargin: "300px",
    threshold: 0,
  });
  const {
    isError,
    isLoading,
    calculateTokenAmount,
  } = usePricePerToken();

  const {
    pricePerNftN1Ton,
    pricePerNftN2Ton,
    pricePerNftN3Ton,
  } = useMemo(() => {
    return {
      pricePerNftN1Ton: 0.05,
      pricePerNftN2Ton: 0.05,
      pricePerNftN3Ton: 0.05,
    }
    // if (isLoading || isError) {
    //   return {
    //     pricePerNftN1Ton: 50,
    //     pricePerNftN2Ton: 1000,
    //     pricePerNftN3Ton: 2000,
    //   };
    // }

    // return {
    //   pricePerNftN1Ton: calculateTokenAmount(PRICE_PER_NFT_N1_USD) ?? 50,
    //   pricePerNftN2Ton: calculateTokenAmount(PRICE_PER_NFT_N2_USD) ?? 1000,
    //   pricePerNftN3Ton: calculateTokenAmount(PRICE_PER_NFT_N3_USD) ?? 2000,
    // }
  }, [
    calculateTokenAmount,
    isLoading,
    isError,
  ]);

  return (
    <section ref={sectionRef} className={cn("text-white w-full", className)}>
      <div className="flex flex-col gap-20">
        <HeadingWithDescription
          title="NFT"
          navLink="nft"
          description="Become a strategic partner in Nymb
              through exclusive NFT ownership - unlocking equity
              rights, revenue sharing, priority access
              to drops, and boosted ecosystem rewards."
          highlightWords={[
            "partner",
            "Nymb",
            "exclusive NFT",
            "revenue sharing, priority access",
            "boosted",
            "rewards.",
          ]}
        />

        {/* Mobile version of cards */}
        <div className="w-full flex flex-col md:hidden gap-20">
          <CardMobile
            id={0}
            pricePerNft={PRICE_PER_NFT_N1_USD}
            pricePerNftTon={pricePerNftN1Ton}
            supply={5000}
            income={10}
            annualGains="Up to 60-180%"
            discount={10}
            stakingBoost={10}
            isActive={hasRevealed}
            comment={"nymb.mint?type=nft_n1"}
          />
          <CardMobile
            id={1}
            pricePerNft={PRICE_PER_NFT_N2_USD}
            pricePerNftTon={pricePerNftN2Ton}
            supply={250}
            income={20}
            annualGains="15-45%"
            discount={15}
            stakingBoost={25}
            isActive={hasRevealed}
            comment={"nymb.mint?type=nft_n2"}
          />
          <CardMobile
            id={2}
            pricePerNft={PRICE_PER_NFT_N3_USD}
            pricePerNftTon={pricePerNftN3Ton}
            supply={100}
            income={70}
            annualGains="42-126%"
            discount={40}
            stakingBoost={60}
            isActive={hasRevealed}
            comment={"nymb.mint?type=nft_n3"}
          />
        </div>

        {/* PC version of cards */}
        <div className="w-full hidden md:inline-flex mx-auto">
          <CardPCTitles className="mt-[430px]" delay={0.6} />

          <Card
            id={0}
            pricePerNft={PRICE_PER_NFT_N1_USD}
            pricePerNftTon={pricePerNftN1Ton}
            supply={5000}
            income={10}
            annualGains="Up to 60-180%"
            discount={10}
            stakingBoost={10}
            delay={0}
            comment={"nymb.mint?type=nft_n1"}
          />
          <Card
            id={1}
            pricePerNft={PRICE_PER_NFT_N2_USD}
            pricePerNftTon={pricePerNftN2Ton}
            supply={250}
            income={20}
            annualGains="15-45%"
            discount={15}
            stakingBoost={25}
            delay={0.3}
            isActive={hasRevealed}
            comment={"nymb.mint?type=nft_n2"}
          />
          <Card
            id={2}
            pricePerNft={PRICE_PER_NFT_N3_USD}
            pricePerNftTon={pricePerNftN3Ton}
            supply={100}
            income={70}
            annualGains="42-126%"
            discount={40}
            stakingBoost={60}
            delay={0.6}
            comment={"nymb.mint?type=nft_n3"}
          />
        </div>
      </div>
    </section>
  );
}

function CardPCTitles({
  className,
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
}: {
  className?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // анимация 1 раз
        }
      },
      {
        threshold, // ← контролируешь процент видимости
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <>
      <style>
        {`
          @keyframes fade-in {
              0% {
                  opacity: 0;
                  transform: translateY(10px);
              }
              100% {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
        `}
      </style>
      <div
        ref={ref}
        className={cn("flex flex-col w-full", className)}
        style={{
          opacity: visible ? 1 : 0,
          animation: visible
            ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards`
            : "none",
        }}
      >
        <Row className="px-0! pr-6! text-sm text-nowrap">Supply</Row>
        <Row className="px-0! pr-6! text-sm text-nowrap">
          Lock Period
          <span className="font-dm-sans text-white/40 text-xs">
            Tradeable After
          </span>
        </Row>
        <Row className="px-0! pr-6! text-sm text-nowrap">
          Income from
          <br />
          Community Pool
        </Row>
        <Row className="px-0! pr-6! text-sm mt-2 text-nowrap">Annual Gains</Row>
        <Row className="px-0! pr-6! text-sm mt-3 text-nowrap">Token Drops</Row>
        <Row className="px-0! pr-6! text-sm mt-3 text-nowrap">TGE Whitelist</Row>
        <Row className="px-0! pr-6! text-sm mt-3 text-nowrap">Discounts Up to</Row>
        <Row className="px-0! pr-6! text-sm text-nowrap">
          Staking Boost
          <span className="font-dm-sans text-white/40 text-xs text-nowrap">On Base</span>
        </Row>
        <Row className="px-0! pr-6! text-sm -mt-4 text-nowrap">DAO Power</Row>
      </div>
    </>
  );
}

function CardMobile({
  id = 0,
  pricePerNft = 100,
  pricePerNftTon = 20,
  supply = 5000,
  lockPeriod = 6,
  income = 10,
  annualGains = "Up to 60-180%",
  discount = 10,
  stakingBoost = 10,
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
  isActive = true,
  comment,
}: {
  id?: number;
  pricePerNft?: number;
  pricePerNftTon?: number;
  supply?: number;
  lockPeriod?: number;
  income?: number;
  annualGains?: string;
  discount?: number;
  stakingBoost?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  isActive?: boolean;
  comment?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [isAccordionOpened0, setAccordionOpened0] = useState(id === 0);


  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // анимация 1 раз
        }
      },
      {
        threshold, // ← контролируешь процент видимости
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);
  return (
    <>
      <style>
        {`
          @keyframes fade-in {
              0% {
                  opacity: 0;
                  transform: translateY(10px);
              }
              100% {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
        `}
      </style>
      <div
        ref={ref}
        className="relative flex flex-col w-full"
        style={{
          opacity: visible ? 1 : 0,
          animation: visible
            ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards`
            : "none",
        }}
      >
        {/* Top card */}
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={
              id === 0 ? nftN1Placeholder : id === 1 ? nftN2Placeholder : nftN3Placeholder
            }
          />
          <img
            src={
              id === 0
                ? nftN1Placeholder
                : id === 1
                  ? nftN2Placeholder
                  : nftN3Placeholder
            }
            alt="NFT card art"
            loading="lazy"
            className={cn(
              "absolute right-0 -top-8 w-[300px] h-auto z-50",
              id === 1 && "w-[280px] -top-12",
              id === 2 && "w-[210px] -top-18"
            )}
          />
        </picture>

        <div
          className={cn(
            "relative flex flex-col w-full overflow-hidden h-[254px] border",
            id === 0 && " border-[#B6FF00]/40",
            id === 1 && " -mt-5 border-[#35F4FF]/40",
            id === 2 && " -mt-10 border-[#FF3BFF]/40"
          )}
        >
          {isActive && (
            <UnicornScene
              showPlaceholderOnError
              showPlaceholderWhileLoading
              placeholder={
                id === 0
                  ? nftN1Placeholder
                  : id === 1
                    ? nftN2Placeholder
                    : nftN3Placeholder
              }
              jsonFilePath={`/webgl/nft-bg_n${id + 1}.json`}
              scale={1}
              dpi={1}
              fps={60}
              production={true}
              lazyLoad={true}
              altText="WebGL scene"
              ariaLabel="Animated WebGL scene"
              className="absolute w_[110%]"
            />
          )}
          <div className="absolute flex flex-col justify-between w-full h-full top-5 left-5">
            <span
              className={cn(
                "text-base font-pixel text-[#B6FF00]",
                id === 1 && "text-[#35F4FF]",
                id === 2 && "text-[#FF3BFF]"
              )}
            >
              {id === 0 ? "5 000 LEFT" : id === 1 ? "250 LEFT" : "100 LEFT"}
            </span>

            <div className="flex flex-col gap-4 w-full h-full justify-end pb-10">
              <h3
                className={cn(
                  "font-pixel text-6xl text-[#B6FF00]",
                  id === 1 && "text-[#35F4FF]",
                  id === 2 && "text-[#FF3BFF]"
                )}
              >
                N{id + 1}
              </h3>
              <p className="font- text-xl text-white tracking-tight">
                {id === 0 && (
                  <>
                    Starting Your Journey
                    <br />
                    Entry Point to NYMB Ecosystem
                  </>
                )}
                {id === 1 && (
                  <>
                    Growing Together
                    <br />
                    Balanced Income & Opportunity
                  </>
                )}
                {id === 2 && (
                  <>
                    Leading the Revolution
                    <br />
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
            <AccordionContent
              className={cn("flex flex-col w-full border border-white/15")}
            >
              <div className="inline-flex mt-3">
                <Row className="text-xs text-white/70">Supply</Row>
                <Row>{supply.toLocaleString("en-US")}</Row>
              </div>

              <div className="inline-flex">
                <Row className="text-xs text-white/70">
                  Lock Period
                  <span className="font-dm-sans text-white/40 text-xs">
                    Tradeable After
                  </span>
                </Row>
                <Row>
                  {lockPeriod.toLocaleString("en-US")}%
                  <span className="font-dm-sans text-white/40 text-xs">
                    month
                  </span>
                </Row>
              </div>

              <div className="inline-flex">
                <Row className="text-xs text-white/70">
                  Income from
                  <br />
                  Community Pool
                </Row>
                <Row>
                  {income.toLocaleString("en-US")}%
                  <span className="font-dm-sans text-white/40 text-xs">
                    when you hit
                  </span>
                </Row>
              </div>

              <div className="inline-flex items-center">
                <Row className="text-xs text-white/70">Anual gains</Row>
                <Row className="text-[#B6FF00]">
                  <span className="inline-flex items-center gap-1">
                    {annualGains}
                    {id > 0 ? (
                      <LuShieldCheck
                        fill="#B6FF00"
                        className="text-black text-lg"
                      />
                    ) : null}
                  </span>
                  {id === 0 ? (
                    <span className="font-dm-sans text-white/40 text-xs">
                      when you hit
                    </span>
                  ) : null}
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
                  {id === 0
                    ? "Priority"
                    : id === 1
                      ? "Bigger allocation"
                      : "VIP allocation"}
                  <span className="font-dm-sans text-white/40 text-xs">
                    Priority
                  </span>
                </Row>
              </div>

              <div className="inline-flex items-center">
                <Row className="text-xs text-white/70">Discount Up to</Row>
                <Row>{discount.toLocaleString("en-US")}%</Row>
              </div>

              <div className="inline-flex items-center">
                <Row className="text-xs text-white/70">
                  Staking Boost
                  <span className="font-dm-sans text-white/40 text-xs">
                    On Base
                  </span>
                </Row>
                <Row>+{stakingBoost.toLocaleString("en-US")}%</Row>
              </div>

              <div className="inline-flex items-center">
                <Row className="text-base text-white/70">DAO Power</Row>
                <Row className="pb-4">
                  {id === 0
                    ? "Limited voting"
                    : id === 1
                      ? "Standard voting"
                      : "VIP priority votes"}
                </Row>
              </div>
            </AccordionContent>

            <AccordionTrigger onClick={() => setAccordionOpened0(!isAccordionOpened0)} className="w-full border-l border-r border-white/15 text-white/70 rounded-none px-6">
              {!isAccordionOpened0 ? "View all plan features" : "Minimize"}
            </AccordionTrigger>
            <div className="w-full inline-flex justify-between">
              <div
                className={cn(
                  "w-full basis-1/2 font-pixel text-xl px-3 py-5 text-white inline-flex items-baseline gap-1 bg-linear-to-r from-[#B6FF00]/15 to-[#B6FF00]/0",
                  id === 0 && "from-[#B6FF00]/15 to-[#B6FF00]/0",
                  id === 1 && "from-[#35F4FF]/15 to-[#35F4FF]/0",
                  id === 2 && "from-[#FF3BFF]/15 to-[#FF3BFF]/0"
                )}
              >
                <span className="text-[#B6FF00]">$</span>
                {pricePerNft.toLocaleString("en-US")}
                <span className="font-dm-sans text-white/40 text-base">
                  per nft
                </span>
              </div>
              {/* <Button
                variant={"ghost"}
                className={cn(
                  "w-full basis-1/2 h-full font-pixel text-xl gap-1 rounded-none px-3 py-5 hover:bg-transparent cursor-pointer border",
                  id === 0 &&
                    "text-[#B6FF00] border-[#B6FF00] hover:text-[#B6FF00]",
                  id === 1 &&
                    "text-[#35F4FF] border-[#35F4FF] hover:text-[#35F4FF]",
                  id === 2 &&
                    "text-[#FF3BFF] border-[#FF3BFF] hover:text-[#FF3BFF]"
                )}
              >
                MINT N{id + 1}
              </Button> */}
              <TransferTonButton
                comment={comment}
                recipient={RECEIVER_ADDRESS}
                // amount={pricePerNft / (balance || 0)}
                amount={pricePerNftTon}
                connectWalletText={`MINT N${id + 1}`}
                className={cn(
                  "w-full basis-1/2 h-full font-pixel text-xl gap-1 rounded-none px-3 py-5 bg-transparent hover:bg-transparent cursor-pointer border",
                  id === 0 &&
                    "text-[#B6FF00] border-[#B6FF00] hover:text-[#B6FF00]",
                  id === 1 &&
                    "text-[#35F4FF] border-[#35F4FF] hover:text-[#35F4FF]",
                  id === 2 &&
                    "text-[#FF3BFF] border-[#FF3BFF] hover:text-[#FF3BFF]"
                )}
              >
                MINT N{id + 1}
              </TransferTonButton>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

function Card({
  id = 0,
  pricePerNft = 100,
  pricePerNftTon = 20,
  supply = 5000,
  lockPeriod = 6,
  income = 10,
  annualGains = "Up to 60-180%",
  discount = 10,
  stakingBoost = 10,
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
  isActive = true,
  comment,
}: {
  id?: number;
  pricePerNft?: number;
  pricePerNftTon?: number;
  supply?: number;
  lockPeriod?: number;
  income?: number;
  annualGains?: string;
  discount?: number;
  stakingBoost?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  isActive?: boolean;
  comment?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // анимация 1 раз
        }
      },
      {
        threshold, // ← контролируешь процент видимости
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);


  return (
    <>
      <style>
        {`
          @keyframes fade-in {
              0% {
                  opacity: 0;
                  transform: translateY(10px);
              }
              100% {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
        `}
      </style>
      <div
        ref={ref}
        className="relative flex flex-col w-full"
        style={{
          opacity: visible ? 1 : 0,
          animation: visible
            ? `fade-in ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards`
            : "none",
        }}
      >
        {/* Top card */}
        <img
          src={
            id === 0
              ? nftN1Placeholder
              : id === 1
                ? nftN2Placeholder
                : nftN3Placeholder
          }
          alt="Logo"
          className={cn(
            "absolute right-0 -top-8 w-[300px] h-auto z-50",
            id === 1 && "w-[280px] -top-12",
            id === 2 && "w-[210px] -top-18"
          )}
        />

        <div
          className={cn(
            "relative flex flex-col w-full overflow-hidden ",
            id === 0 &&
            "h-[348px] border-t border-l border-b border-[#B6FF00]/40",
            id === 1 &&
            "h-[368px] border-t border-l border-b -mt-5 border-[#35F4FF]/40",
            id === 2 && "h-[388px] border -mt-10 border-[#FF3BFF]/40"
          )}
        >
          {isActive && (
            <UnicornScene
              showPlaceholderOnError
              showPlaceholderWhileLoading
              placeholder={
                id === 0
                  ? nftN1Placeholder
                  : id === 1
                    ? nftN2Placeholder
                    : nftN3Placeholder
              }
              jsonFilePath={`/webgl/nft-bg_n${id + 1}.json`}
              scale={1}
              dpi={1}
              fps={60}
              production={true}
              lazyLoad={true}
              altText="WebGL scene"
              ariaLabel="Animated WebGL scene"
              className="absolute w-[110%]"
            />
          )}
          <div className="absolute flex flex-col justify-between w-full h-full top-5 left-5">
            <span
              className={cn(
                "text-base font-pixel text-[#B6FF00]",
                id === 1 && "text-[#35F4FF]",
                id === 2 && "text-[#FF3BFF]"
              )}
            >
              {id === 0 ? "5 000 LEFT" : id === 1 ? "250 LEFT" : "100 LEFT"}
            </span>

            <div className="flex flex-col gap-8 w-full h-full justify-end pb-10">
              <h3
                className={cn(
                  "font-pixel text-7xl text-[#B6FF00]",
                  id === 1 && "text-[#35F4FF]",
                  id === 2 && "text-[#FF3BFF]"
                )}
              >
                N{id + 1}
              </h3>
              <p className="font-medium font-dm-sans text-white">
                {id === 0 && (
                  <>
                    Starting Your Journey
                    <br />
                    Entry Point to NYMB Ecosystem
                  </>
                )}
                {id === 1 && (
                  <>
                    Growing Together
                    <br />
                    Balanced Income & Opportunity
                  </>
                )}
                {id === 2 && (
                  <>
                    Leading the Revolution
                    <br />
                    Maximum Share in Success
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div
          className={cn(
            "flex relative flex-col w-full border-l border-b",
            id === 0 && "border-[#B6FF00]",
            id === 1 && "border-[#35F4FF]",
            id === 2 && "border-[#FF3BFF]"
          )}
        >
          <div
            className={cn(
              "w-full font-pixel text-xl px-3 py-6 text-white text-center inline-flex items-baseline justify-center gap-1 bg-linear-to-r from-[#B6FF00]/15 to-[#B6FF00]/0",
              id === 0 && "from-[#B6FF00]/15 to-[#B6FF00]/0",
              id === 1 && "from-[#35F4FF]/15 to-[#35F4FF]/0",
              id === 2 && "from-[#FF3BFF]/15 to-[#FF3BFF]/0"
            )}
          >
            <span className="text-[#B6FF00]">$</span>
            {pricePerNft.toLocaleString("en-US")}
            <span className="font-dm-sans text-white/40 text-base">
              per nft
            </span>
          </div>
          <div>
            <Row>{supply.toLocaleString("en-US")}</Row>
            <Row>
              {lockPeriod.toLocaleString("en-US")}%
              <span className="font-dm-sans text-white/40 text-base">month</span>
            </Row>
            <Row>
              {income.toLocaleString("en-US")}%
              <span className="font-dm-sans text-white/40 text-base">
                when you hit
              </span>
            </Row>
            <Row>
              {annualGains}
              <span className="font-dm-sans text-white/40 text-base">
                when you hit
              </span>
            </Row>
            <Row>
              <div className="inline-flex items-center gap-2">
                <img className="size-6" src={NymbLogo} alt="Logo" />
                <span className="">Nymb</span>
              </div>
            </Row>
            <Row>
              {id === 0
                ? "Priority"
                : id === 1
                  ? "Bigger allocation"
                  : "VIP allocation"}
              <span className="font-dm-sans text-white/40 text-base">
                + Priority
              </span>
            </Row>
            <Row>{discount.toLocaleString("en-US")}%</Row>
            <Row>+{stakingBoost.toLocaleString("en-US")}%</Row>
            <Row className="pb-4">
              {id === 0
                ? "Limited voting"
                : id === 1
                  ? "Standard voting"
                  : "VIP priority votes"}
            </Row>

            {/* <Button
            variant={"ghost"}
            className={cn(
              "sticky bottom-0 w-full h-14 font-pixel text-xl gap-1 rounded-none bg-[#070707] hover:bg-transparent cursor-pointer",
              id === 0 &&
                "text-[#B6FF00] border-t border-l border-b border-[#B6FF00] hover:text-[#B6FF00]",
              id === 1 &&
                "text-[#35F4FF] border-t border-l border-b border-[#35F4FF] hover:text-[#35F4FF]",
              id === 2 &&
                "text-[#FF3BFF] border border-[#FF3BFF] hover:text-[#FF3BFF]"
            )}
          >
            MINT N{id + 1}
          </Button> */}
            <TransferTonButton
              comment={comment}
              recipient={RECEIVER_ADDRESS}
              // amount={pricePerNft / (balance || 0)}
              amount={pricePerNftTon}
              connectWalletText={`MINT N${id + 1}`}
              className={cn(
                "sticky bottom-0 w-full h-14 font-pixel text-xl gap-1 rounded-none bg-[#070707]! hover:bg-transparent cursor-pointer",
                id === 0 &&
                "text-[#B6FF00] border-t border-l border-b border-[#B6FF00] hover:text-[#B6FF00]",
                id === 1 &&
                "text-[#35F4FF] border-t border-l border-b border-[#35F4FF] hover:text-[#35F4FF]",
                id === 2 &&
                "text-[#FF3BFF] border border-[#FF3BFF] hover:text-[#FF3BFF]"
              )}
            >
              MINT N{id + 1}
            </TransferTonButton>
          </div>
        </div>
      </div>
    </>
  );
}

function Row({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "w-full font-dm-sans text-sm md:text-xl px-6 py-2 md:px-6 md:py-3 text-white flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}
