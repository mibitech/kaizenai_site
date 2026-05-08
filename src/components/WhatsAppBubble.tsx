import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5511XXXXXXXXX";

export function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-[0_0_30px_oklch(0.72_0.18_150/0.6)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.18_150)] opacity-60" style={{ animation: "pulse-ring 1.8s ease-out infinite" }} />
      <MessageCircle className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md glass px-3 py-1.5 text-sm opacity-0 transition-opacity group-hover:opacity-100">
        Fale conosco agora
      </span>
    </a>
  );
}

export { WHATSAPP };
