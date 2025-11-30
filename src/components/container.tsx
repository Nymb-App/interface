import { cn } from "../lib/utils";

export function Container({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[1280px] w-full mx-auto px-4", className)}>
      {children}
    </div>
  );
}
