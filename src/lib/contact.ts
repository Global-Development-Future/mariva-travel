import { siteConfig } from "@/config/site";

const whatsappMessage =
  "Bună ziua! Doresc o ofertă pentru transport persoane/colete pe ruta România - Europa.";

function toDigits(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, "");
}

export function getCallHref(): string {
  return `tel:${siteConfig.dispatchPhoneE164}`;
}

export function getWhatsAppBaseHref(): string {
  const phoneNumber = toDigits(siteConfig.whatsappPhoneE164);
  return `https://wa.me/${phoneNumber}`;
}

export function getWhatsAppHref(message: string = whatsappMessage): string {
  return `${getWhatsAppBaseHref()}?text=${encodeURIComponent(message)}`;
}
