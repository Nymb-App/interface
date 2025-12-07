export function NftCard({
  card,
}: {
  card: {
    id: string;
    leftLabel: string;
    titleTop: string;
    titleBottom: string;
    accent: string;
    image: string;
    borderColor?: string;
  };
}) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[32px] bg-[#070707]"
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: card.borderColor ?? "rgba(255,255,255,0.1)",
      }}
    >
      <div className="relative aspect-[367/348] w-full overflow-hidden rounded-[28px]">
        <img
          src={card.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
        <div className="relative flex h-full flex-col justify-between p-6">
          <p
            className="text-[11px] md:text-xs font-normal uppercase tracking-[-0.03em]"
            style={{ color: card.accent }}
          >
            {card.leftLabel}
          </p>
          <div className="space-y-2">
            <p
              className="text-[56px] md:text-[64px] lg:text-[72px] font-medium leading-none tracking-[-0.4em]"
              style={{ color: card.accent }}
            >
              {card.id}
            </p>
            <p className="max-w-[260px] text-[16px] md:text-[18px] font-medium leading-[1.2] tracking-[-0.06em] text-white">
              {card.titleTop}
              <br />
              {card.titleBottom}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
