import nftN1 from "../../assets/nft-n1.png";
import nftN2 from "../../assets/nft-n2.png";
import nftN3 from "../../assets/nft-n3.png";
import { cn } from "../../lib/utils";
import { Container } from "../container";
import { HeadingSection } from "../heading-section";

import NymbLogo from '../../assets/brand/logo.png';

const nftCards = [
  {
    id: "N1",
    leftLabel: "5 000 LEFT",
    titleTop: "Starting Your Journey",
    titleBottom: "Entry Point to NYMB Ecosystem",
    accent: "#B6FF00",
    image: nftN1,
    borderColor: "rgba(190, 255, 4, 0.3)",
  },
  {
    id: "N2",
    leftLabel: "250 LEFT",
    titleTop: "Growing Together",
    titleBottom: "Balanced Income & Opportunity",
    accent: "#35F4FF",
    image: nftN2,
    borderColor: "rgba(5, 148, 255, 0.4)",
  },
  {
    id: "N3",
    leftLabel: "100 LEFT",
    titleTop: "Leading the Revolution",
    titleBottom: "Maximum Share in Success",
    accent: "#FF3BFF",
    image: nftN3,
    borderColor: "rgba(255, 73, 255, 0.4)",
  },
];

const nftTableRows = [
  {
    label: "",
    values: ["$ 100 per nft", "$ 2 000 per nft", "$ 10 000 per nft"],
  },
  {
    label: "Supply",
    values: ["5 000", "250", "100"],
  },
  {
    label: "Lock Period",
    values: ["6 months", "6 months", "6 months"],
  },
  {
    label: "Income from Community Pool",
    values: ["10% Monthly Lottery", "20% Steady Payouts", "30% Steady Payouts"],
  },
  {
    label: "Annual Gains",
    values: ["Up to 60–180% when you hit", "15–45%", "42–126%"],
  },
  {
    label: "TGE Whitelist",
    values: [
      "Priority",
      "Bigger allocation + Priority",
      "VIP allocation + Priority",
    ],
  },
  {
    label: "Discounts Up to",
    values: ["10%", "15%", "40%"],
  },
  {
    label: "Staking Boost",
    values: ["+10%", "+25%", "+60%"],
  },
  {
    label: "DAO Power",
    values: ["Limited voting", "Standard voting", "VIP priority votes"],
  },
];

export function NftSection() {
  return (
    <section className="bg-black text-white">
      <Container className="py-[120px]">
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

          <div className="flex flex-col gap-10">
            <Card id={0} />
            <Card id={1} />
            <Card id={2} />
          </div>

          <div className="mt-10 grid grid-cols-2">
            <p className="text-xs font-normal uppercase tracking-[0.25em] text-[#B6FF00]">
              Telegram mini-app
            </p>
            <div>
              <p className="max-w-3xl text-[18px] md:text-[20px] leading-relaxed text-white">
                Join Nymb&apos;s Telegram mini-app now. Start swiping, invite
                friends, complete tasks, battle players, and climb the
                leaderboards.{" "}
                <span className="text-[#B6FF00]">Every second counts.</span>{" "}
                Start earning yours today.
              </p>
              <button className="mt-2 rounded-full bg-[#B6FF00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black">
                Open app
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
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
}:{
  id?: number,
  pricePerNFT?: number,
  supply?: number,
  lockPeriod?: number,
  income?: number,
  annualGains?: string,
  discount?: number,
  stakingBoost?: number,
}){
  return (
    <div className="flex flex-col">
      {/* Top card */}
      <div className=""></div>

      <div className={cn(
          "flex flex-col w-full border-l border-b",
          id === 0 && "border-[#B6FF00]",
          id === 1 && "border-[#35F4FF]",
          id === 2 && "border-[#FF3BFF]",
        )}
      >
        <div className="w-full font-pixel text-xl px-3 py-6 text-white text-center inline-flex items-baseline justify-center gap-1 bg-linear-to-r from-[#B6FF00]/15 to-[#B6FF00]/0">
          <span className="text-[#B6FF00]">$</span>
          {pricePerNft.toLocaleString('en-US')}
          <span className="font-dm-sans text-white/40 text-base">per nft</span>
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          {supply.toLocaleString('en-US')}
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          {lockPeriod.toLocaleString('en-US')}
          <span className="font-dm-sans text-white/40 text-base">when you hit</span>
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          <div className="inline-flex gap-2">
            <img className="size-6" src={NymbLogo} alt="Logo" />
            <span className="">Nymb</span>
          </div>
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          Priority
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          {discount.toLocaleString('en-US')}
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          {supply.toLocaleString('en-US')}
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          {supply.toLocaleString('en-US')}
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          {supply.toLocaleString('en-US')}
        </div>
        <div className="w-full font-dm-sans text-xl px-3 py-6 text-white flex flex-col">
          {supply.toLocaleString('en-US')}
        </div>
      </div>
    </div>
  )
}
