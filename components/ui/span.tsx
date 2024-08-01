import { cn } from "@/lib/utils";

const Span = (text: string, className?: string) => {
  return (
    <span
      className={cn(
        "relative rounded bg-muted px-[0.4rem] py-[0.4rem] font-mono text-lg font-semibold capitalize cursor-pointer",
        className
      )}
    >
      {text}
    </span>
  );
};

export { Span };
