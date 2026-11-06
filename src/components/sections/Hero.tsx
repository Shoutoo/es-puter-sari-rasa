import Image from "next/image";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Hero() {
  const waUrl = buildWhatsAppUrl(
    site.whatsapp,
    "Halo Es Puter Sari Rasa, saya ingin memesan es puter tradisional."
  );

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen bg-maroon-700 text-cream-50 pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex items-center"
      aria-label="Bagian Utama"
    >
      {/* Background Decorative Arch and Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[30px] border-gold-400 blur-sm" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full border-[20px] border-pandan-200 blur-sm" />
      </div>

      {/* Floating pandan leaf decorative elements */}
      <div className="hidden lg:block absolute top-32 left-12 animate-sway opacity-75 pointer-events-none">
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
          <path d="M0 90 C-20 45 15 15 45 0 C45 35 35 65 0 90 Z" fill="#CFE3C4" />
        </svg>
      </div>
      <div className="hidden lg:block absolute bottom-24 right-16 animate-sway opacity-60 pointer-events-none" style={{ animationDelay: "2s" }}>
        <svg width="50" height="75" viewBox="0 0 50 75" fill="none">
          <path d="M0 75 C-15 35 12 10 38 0 C38 30 30 55 0 75 Z" fill="#E8C27A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines and Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/60 border border-gold-400/50 backdrop-blur-sm text-gold-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{site.tagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif italic font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-[1.1] text-cream-50 tracking-tight">
              Es Puter <br className="hidden sm:inline" />
              <span className="text-gold-400 font-sans not-italic font-black tracking-normal uppercase block sm:inline sm:ml-2">
                Sari Rasa
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-cream-100/90 max-w-2xl font-normal leading-relaxed">
              {site.subTagline} Dibuat dari santan kelapa murni pilihan yang diputar lembut dengan cara tradisional, menghadirkan nostalgia manis legit di setiap sendokan cup mungilnya.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-500 text-maroon-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-floating hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gold-400/50 text-base"
              >
                <MessageCircle className="w-5 h-5 text-maroon-900" />
                <span>Pesan via WhatsApp</span>
              </a>

              <a
                href="#varian"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-maroon-900/40 text-cream-50 font-semibold px-7 py-4 rounded-full border-2 border-cream-50/40 hover:border-cream-50 transition-all duration-200 text-base"
              >
                <span>Lihat Varian Rasa</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Social Proof / Key Metric pill */}
            <div className="pt-4 flex items-center gap-6 text-xs sm:text-sm text-cream-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pandan-200 inline-block animate-pulse" />
                <span>Diputar Segar Tiap Hari</span>
              </div>
              <div className="h-4 w-px bg-gold-400/40" />
              <div>
                <span>Santan Murni & Pandan Asli</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Visual Arch Container */}
            <div className="relative w-72 h-80 sm:w-96 sm:h-[450px] lg:w-[420px] lg:h-[490px]">
              
              {/* Traditional Arch Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/80 to-maroon-900/40 rounded-arch border-2 border-gold-400/40 p-3 shadow-floating backdrop-blur-xs flex items-center justify-center">
                <div className="w-full h-full rounded-[148px_148px_16px_16px] border border-gold-400/30 p-2 flex flex-col justify-end pb-8">
                  <div className="bg-cream-50/10 backdrop-blur-sm rounded-2xl p-3 border border-cream-50/20 text-center">
                    <p className="font-serif italic text-gold-400 text-sm font-semibold">
                      Tradisi Dingin Nusantara
                    </p>
                    <p className="text-xs text-cream-100">
                      Disajikan dengan cup mungil & irisan daun pandan
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Floating Cup Illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full h-full transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/hero-ice-cream.svg"
                    alt="Es Puter Sari Rasa dalam cup dengan daun pandan dan sendok mungil"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
