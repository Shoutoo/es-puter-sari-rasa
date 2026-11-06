"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const waUrl = buildWhatsAppUrl(
    site.whatsapp,
    "Halo Es Puter Sari Rasa, saya ingin memesan es puter cup."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 transition-all duration-300 transform scale-100 animate-in fade-in">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pesan via WhatsApp (Membuka jendela baru)"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-floating transition-all duration-300 hover:scale-105 animate-soft-pulse focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:rotate-12 transition-transform duration-200" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Pesan via WhatsApp
        </span>
      </a>
    </div>
  );
}

