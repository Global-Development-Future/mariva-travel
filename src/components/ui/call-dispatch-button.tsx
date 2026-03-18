import type { ComponentPropsWithoutRef } from "react";
import { siteConfig } from "@/config/site";
import { getCallHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type CallButtonSize = "default" | "hero" | "bar";

type CallDispatchButtonProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
> & {
  label: string;
  size?: CallButtonSize;
};

const sizeStyles: Record<CallButtonSize, string> = {
  default: "h-12 px-5 text-sm font-bold sm:text-base",
  hero: "h-14 px-6 text-sm font-extrabold sm:h-16 sm:px-8 sm:text-base",
  bar: "h-11 px-4 text-xs font-extrabold",
};

export function CallDispatchButton({
  label,
  size = "default",
  className,
  ...rest
}: CallDispatchButtonProps) {
  return (
    <a
      href={getCallHref()}
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-[var(--signal-500)] text-[var(--ink-950)] shadow-[0_10px_22px_rgba(246,179,26,0.35)] transition hover:bg-[var(--signal-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-900)]",
        sizeStyles[size],
        className
      )}
      aria-label={`Sună la dispecerat: ${siteConfig.dispatchPhoneDisplay}`}
      {...rest}
    >
      {label}
    </a>
  );
}
