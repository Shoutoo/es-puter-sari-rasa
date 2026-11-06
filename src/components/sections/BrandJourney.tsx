"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, Compass, Leaf, Utensils, Palette } from "lucide-react";
import { site } from "@/content/site";

export function BrandJourney() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const getMeaningIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Leaf className="w-6 h-6 text-pandan-600" />;
      case 1:
        return <Utensils className="w-6 h-6 text-gold-400" />;
      case 2:
      default:
        return <Palette className="w-6 h-6 text-maroon-700" />;
    }
  };

  return (
    <section
      id="cerita-brand"
      className="py-20 sm:py-28 bg-cream-200/50 text-maroon-900 relative"
      aria-label="Perjalanan Brand dan Transformasi"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-pandan-600" />
            <span>Transformasi Usaha</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Perjalanan &amp; Identitas Baru
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Dari kemasan cup plastik polos tanpa identitas menjadi merek yang terkonsep matang, ramah, dan bernilai jual tinggi.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Interactive Before & After Comparison Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-4">
            <p className="text-xs sm:text-sm font-semibold text-maroon-700 flex items-center justify-center gap-2">
              <MoveHorizontal className="w-4 h-4 text-gold-400" />
              <span>Geser slider untuk membandingkan kemasan Sebelum vs Sesudah</span>
            </p>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden border-2 border-gold-400 shadow-card select-none">
            {/* "After" Image (Underneath) */}
            <div className="absolute inset-0 w-full h-full bg-cream-100">
              <Image
                src={site.brandJourney.afterImage}
                alt="Kemasan Baru Es Puter Sari Rasa"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 z-10 bg-maroon-700 text-cream-50 text-xs font-bold px-3 py-1.5 rounded-full shadow-soft">
                {site.brandJourney.afterLabel}
              </div>
            </div>

            {/* "Before" Image (Clipped on Top) */}
            <div
              className="absolute inset-0 h-full overflow-hidden bg-neutral-200"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[280px] sm:min-w-[700px] lg:min-w-[900px]">
                <Image
                  src={site.brandJourney.beforeImage}
                  alt="Kemasan Lama Cup Polos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 z-10 bg-neutral-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-soft">
                {site.brandJourney.beforeLabel}
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold-400 shadow-[0_0_10px_rgba(232,194,122,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-maroon-700 border-2 border-gold-400 text-cream-50 flex items-center justify-center shadow-floating">
                <MoveHorizontal className="w-5 h-5 text-gold-400" />
              </div>
            </div>

            {/* Invisible Range Input for Full Accessibility & Drag */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Slider perbandingan kemasan sebelum dan sesudah"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* Descriptive labels under slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-2xl bg-white/70 border border-neutral-300">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1">
                {site.brandJourney.beforeLabel}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {site.brandJourney.beforeDesc}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gold-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-700 mb-1">
                {site.brandJourney.afterLabel}
              </h4>
              <p className="text-xs sm:text-sm text-maroon-900 leading-relaxed">
                {site.brandJourney.afterDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Logo Meaning */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-maroon-900">
              Makna di Balik Logo Sari Rasa
            </h3>
            <p className="text-xs sm:text-sm text-maroon-900/70 mt-1">
              Setiap goresan visual melambangkan komitmen terhadap tradisi, kepraktisan, dan kehangatan rasa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.brandJourney.logoMeanings.map((lm, idx) => (
              <div
                key={lm.title}
                className="bg-white rounded-3xl p-6 border-2 border-gold-400/30 hover:border-gold-400 shadow-soft transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cream-100 flex items-center justify-center mb-4 border border-gold-400/40">
                    {getMeaningIcon(idx)}
                  </div>
                  <span className="text-[11px] font-bold text-pandan-600 uppercase tracking-widest block mb-1">
                    {lm.symbolism}
                  </span>
                  <h4 className="font-serif italic text-lg font-bold text-maroon-900 mb-2">
                    {lm.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-maroon-900/80 leading-relaxed">
                    {lm.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

