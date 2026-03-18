import type { ComponentPropsWithoutRef } from "react";
import { getWhatsAppHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type WhatsAppButtonSize = "default" | "hero" | "bar";

type WhatsAppButtonProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
> & {
  label: string;
  size?: WhatsAppButtonSize;
  message?: string;
};

const sizeStyles: Record<WhatsAppButtonSize, string> = {
  default: "h-12 px-5 text-sm font-bold sm:text-base",
  hero: "h-14 px-6 text-sm font-extrabold sm:h-16 sm:px-8 sm:text-base",
  bar: "h-11 px-4 text-xs font-extrabold",
};

export function WhatsAppButton({
  label,
  size = "default",
  className,
  message,
  ...rest
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-[var(--whatsapp-500)] text-white shadow-[0_10px_22px_rgba(31,168,85,0.3)] transition hover:bg-[#188848] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2",
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {label}
    </a>
  );
}
