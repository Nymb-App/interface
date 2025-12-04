import nftN1 from "../../assets/nft-n1.png";
import nftN2 from "../../assets/nft-n2.png";
import nftN3 from "../../assets/nft-n3.png";
import { Container } from "../container";
import { Footer } from "../footer";
import { NftCard } from "./nft-card/nft-card";

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
            <p className="text-sm font-normal uppercase tracking-[-0.03em] text-[#B6FF00]">
              NFT
            </p>
            <p className="max-w-[954px] text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[1.2] tracking-[-0.06em] text-white">
              Become a strategic partner in Nymb through exclusive NFT ownership
              — unlocking equity rights, revenue sharing, priority access to
              drops, and boosted ecosystem rewards.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="relative overflow-x-auto">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_100%,rgba(182,255,0,0.24),transparent_60%),radial-gradient(circle_at_100%_0%,rgba(53,244,255,0.24),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(255,59,255,0.2),transparent_60%)]" />

              <div className="relative grid min-w-[1040px] gap-6 md:grid-cols-3">
                {nftCards.map((card) => (
                  <NftCard key={card.id} card={card} />
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[1040px] border-t border-white/10 pt-6">
                <div className="space-y-3 text-xs md:text-sm">
                  {nftTableRows.map((row) => (
                    <div
                      key={row.label || row.values.join("-")}
                      className="grid grid-cols-4 gap-x-10"
                    >
                      <div className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.25em] text-[#B6FF00]">
                        {row.label}
                      </div>
                      {row.values.map((value, index) => (
                        <div
                          key={index}
                          className="text-left text-[13px] md:text-sm text-white/80"
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-4 gap-x-10">
                  <div />
                  <button className="border border-[#B6FF00] px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.25em] text-[#B6FF00]">
                    MINT N1
                  </button>
                  <button className="border border-[#35F4FF] px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.25em] text-[#35F4FF]">
                    MINT N2
                  </button>
                  <button className="border border-[#FF3BFF] px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.25em] text-[#FF3BFF]">
                    MINT N3
                  </button>
                </div>
              </div>
            </div>
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
