import Image from "next/image";
import { Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="tentang"
      className="py-20 sm:py-28 bg-cream-50 text-maroon-900 relative overflow-hidden"
      aria-label="Tentang Kami"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pandan-600" />
            <span>Cerita di Balik Kesegaran</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Dari Tradisi Rasa, Lahir Kesegaran Istimewa
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual with Gold Border Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-3 bg-cream-200/80 border-2 border-gold-400 shadow-card">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-gold-400/30">
                <Image
                  src="/images/gallery-packaging.svg"
                  alt="Es Puter Sari Rasa kemasan cup higienis berdaun pandan"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Small Info Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-maroon-700 text-cream-50 p-4 sm:p-5 rounded-2xl shadow-floating border border-gold-400 max-w-[220px]">
                <p className="font-serif italic text-gold-400 text-sm font-bold">
                  Resep Warisan
                </p>
                <p className="text-xs text-cream-100/90 mt-1 leading-snug">
                  100% Santan Kelapa Asli tanpa pemanis buatan berlebih.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-maroon-700">
              Menjaga Keaslian Es Puter Nusantara
            </h3>
            
            <p className="text-base sm:text-lg text-maroon-900/85 leading-relaxed">
              <strong>Es Puter Sari Rasa</strong> berawal dari kecintaan kami terhadap kuliner pencuci mulut tradisional Indonesia. Es puter yang sering disebut es dung-dung memiliki cita rasa gurih khas santan murni yang tidak bisa digantikan oleh es krim modern mana pun.
            </p>

            <p className="text-base sm:text-lg text-maroon-900/85 leading-relaxed">
              Sebelumnya, es ini diproduksi dalam wadah cup polos tanpa identitas dan hanya diedarkan secara terbatas. Melalui semangat pengembangan usaha, kami mempersembahkan wajah baru: <strong>Sari Rasa</strong>. Kami menyajikan es puter dalam kemasan cup higienis berhias irisan daun pandan wangi serta sendok mungil, membuat hidangan legendaris ini praktis dinikmati siapa saja, kapan saja.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-200/50 border border-gold-400/30">
                <CheckCircle2 className="w-5 h-5 text-pandan-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-maroon-900">
                  Diputar ritmis menghasilkan kristal es super lembut
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-200/50 border border-gold-400/30">
                <CheckCircle2 className="w-5 h-5 text-pandan-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-maroon-900">
                  Daun pandan asli memberikan aroma semerbak segar
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-200/50 border border-gold-400/30">
                <CheckCircle2 className="w-5 h-5 text-pandan-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-maroon-900">
                  Kemasan cup rapat & higienis untuk pesanan acara
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-200/50 border border-gold-400/30">
                <CheckCircle2 className="w-5 h-5 text-pandan-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-maroon-900">
                  Tersedia 3 varian rasa yang disukai berbagai generasi
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#varian"
                className="inline-flex items-center gap-2 text-maroon-700 hover:text-maroon-500 font-bold text-sm sm:text-base underline underline-offset-4 decoration-gold-400 hover:decoration-maroon-700 transition-colors"
              >
                <span>Jelajahi 3 varian rasa favorit kami</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
