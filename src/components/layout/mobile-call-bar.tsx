import { siteConfig } from "@/config/site";
import { CallDispatchButton } from "@/components/ui/call-dispatch-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/90 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_28px_rgba(18,31,51,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto max-w-screen-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-500)]">
          Dispecerat Mariva Travel
        </p>
        <p className="mt-1 truncate text-xs font-semibold text-[var(--ink-900)]">
          {siteConfig.dispatchPhoneDisplay} · WhatsApp {siteConfig.whatsappPhoneDisplay}
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <CallDispatchButton label="Sună Acum" size="bar" className="w-full" />
          <WhatsAppButton label="Mesaj WhatsApp" size="bar" className="w-full" />
        </div>
      </div>
    </div>
  );
}
