import { Sparkles, AlertCircle, ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export function Process() {
  return (
    <section
      id="proses"
      className="py-20 sm:py-28 bg-cream-200/50 text-maroon-900 relative"
      aria-label="Proses Pembuatan Es Puter"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pandan-600" />
            <span>Alur Produksi Higienis</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Dibuat dengan Ketelatenan & Cinta
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Dari pemilihan santan kelapa murni hingga siap sampai di tanganmu, setiap langkah kami kerjakan secara higienis dan terjaga.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {site.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-7 border-2 border-gold-400/30 hover:border-gold-400 shadow-soft transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-full bg-maroon-700 text-cream-50 font-bold flex items-center justify-center text-sm shadow-soft">
                    0{step.step}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cream-100 text-maroon-700 border border-gold-400/30">
                    {step.timing}
                  </span>
                </div>

                <h3 className="font-serif italic text-xl font-bold text-maroon-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm font-semibold text-pandan-600 mb-3">
                  {step.shortDesc}
                </p>

                <p className="text-xs text-maroon-900/75 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {/* Step connector arrow (desktop only) */}
              {idx < site.processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-gold-400">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Honest Production Note from Presentation */}
        <div className="mt-12 max-w-4xl mx-auto bg-maroon-900 text-cream-50 rounded-3xl p-6 sm:p-8 border border-gold-400/40 shadow-card flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-gold-400/20 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/40">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif italic text-lg sm:text-xl font-bold text-gold-400">
              Komitmen Pengemasan & Suhu Dingin
            </h4>
            <p className="text-sm text-cream-100/90 leading-relaxed">
              {site.processNote} Kami secara cermat menakar waktu perpindahan es dari tabung putar ke dalam cup dan kotak pendingin agar kamu menerima es puter dengan kesegaran maksimal.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
