import Icon from "./Icon";
import { whatsappUrl } from "../utils/links";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <span className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-lg hover:shadow-2xl transition-all">
        <Icon name="whatsapp" className="w-6 h-6" />
        <span className="hidden sm:inline">Agendar visita</span>
      </span>
    </a>
  );
}
