import { cn } from "../../lib/utils";

export const LinkButton = ({
  className,
  label,
}: {
  className?: string;
  label: string;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center bg-gradient-to-b from-[#ADFA4B] via-[#B6FF00] to-[#B6FF00] px-8 py-3 text-xs font-normal uppercase tracking-[0.3em] text-[#121312]",
        className
      )}
    >
      {label}
    </button>
  );
};
