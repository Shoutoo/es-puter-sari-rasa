"use client";

import Image from "next/image";
import { MessageCircle, Sparkles, Tag } from "lucide-react";
import { site } from "@/content/site";
import { Flavor } from "@/types";
import { buildWhatsAppUrl } from "@/lib/utils";

const flavorImages: Record<string, string> = {
  original: "/images/cup-original.svg",
  stroberi: "/images/cup-strawberry.svg",
  cokelat: "/images/cup-chocolate.svg",
};

export function Flavors() {
  const getAccentCardStyle = (accent: Flavor["accent"]) => {
    switch (accent) {
      case "pink":
        return {
          cardBg: "bg-[#FFF2F5]",
          border: "border-pink-300",
          tagBg: "bg-pink-300 text-maroon-900",
          buttonBg: "bg-maroon-700 hover:bg-maroon-500 text-cream-50",
          accentLine: "bg-pink-400",
        };
      case "choco":
        return {
          cardBg: "bg-[#F7F1EB]",
          border: "border-[#D6BCAE]",
          tagBg: "bg-choco-700 text-cream-50",
          buttonBg: "bg-choco-700 hover:bg-maroon-900 text-cream-50",
          accentLine: "bg-choco-700",
        };
      case "cream":
      default:
        return {
          cardBg: "bg-[#FFF9EE]",
          border: "border-gold-400",
          tagBg: "bg-gold-400 text-maroon-900",
          buttonBg: "bg-maroon-700 hover:bg-maroon-500 text-cream-50",
          accentLine: "bg-gold-400",
        };
    }
  };

  return (
    <section
      id="varian"
      className="py-20 sm:py-28 bg-cream-200/60 text-maroon-900 relative"
      aria-label="Varian Rasa Produk"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pandan-600" />
            <span>Pilihan Rasa Favorit</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Tiga Sensasi Rasa Istimewa
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Dibuat dari bahan segar berkualitas dan santan kelapa murni. Pilih rasa favoritmu atau pesan komplit untuk dinikmati bersama teman dan keluarga!
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Flavor Cards Grid (Carousel on Mobile) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none">
          {site.flavors.map((flavor) => {
            const style = getAccentCardStyle(flavor.accent);
            const cupImg = flavorImages[flavor.id] || "/images/cup-original.svg";
            
            const message = `Halo Es Puter Sari Rasa, saya mau pesan es puter rasa ${flavor.name}.`;
            const waUrl = buildWhatsAppUrl(site.whatsapp, message);

            return (
              <div
                key={flavor.id}
                className={`min-w-[290px] sm:min-w-0 w-full snap-center rounded-3xl ${style.cardBg} border-2 ${style.border} shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative group`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  {flavor.badge ? (
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${style.tagBg}`}>
                      {flavor.badge}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-maroon-900/60 font-medium">
                    Cup Dingin Mungil
                  </span>
                </div>

                {/* Cup Visual */}
                <div className="relative w-full h-56 sm:h-64 my-2 flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={cupImg}
                      alt={`Cup Es Puter Sari Rasa Varian ${flavor.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content details */}
                <div className="space-y-3 mt-4 text-center sm:text-left">
                  <h3 className="font-serif italic text-2xl font-bold text-maroon-900">
                    {flavor.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-pandan-600">
                    {flavor.tagline}
                  </p>
                  <p className="text-sm text-maroon-900/80 leading-relaxed">
                    {flavor.desc}
                  </p>
                  
                  {/* Ingredients note */}
                  <p className="text-xs text-maroon-900/60 italic pt-1 border-t border-maroon-900/10">
                    Bahan: {flavor.notes}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="mt-6 pt-5 border-t border-maroon-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-xs text-maroon-900/60 flex items-center gap-1 justify-center sm:justify-start">
                      <Tag className="w-3.5 h-3.5 text-gold-400" />
                      <span>Harga</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-maroon-900">
                      {flavor.price !== null
                        ? `Rp ${flavor.price.toLocaleString("id-ID")} / cup`
                        : "Tanya harga via WhatsApp"}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 ${style.buttonBg} font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-all duration-200 shadow-soft focus:outline-none focus:ring-2`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pesan Rasa Ini</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe hint */}
        <div className="sm:hidden text-center mt-4">
          <p className="text-xs text-maroon-900/60">
            ← Geser untuk melihat varian rasa lainnya →
          </p>
        </div>

      </div>
    </section>
  );
}
