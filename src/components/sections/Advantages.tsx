import { RotateCw, Sparkles, Heart, PackageCheck } from "lucide-react";
import { site } from "@/content/site";

export function Advantages() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "rotate-cw":
        return <RotateCw className="w-7 h-7 text-gold-400" />;
      case "sparkles":
        return <Sparkles className="w-7 h-7 text-pandan-600" />;
      case "package-check":
        return <PackageCheck className="w-7 h-7 text-gold-400" />;
      case "heart":
      default:
        return <Heart className="w-7 h-7 text-pink-300" />;
    }
  };

  return (
    <section
      id="keunggulan"
      className="py-20 sm:py-28 bg-cream-50 text-maroon-900 relative"
      aria-label="Keunggulan Es Puter Sari Rasa"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pandan-600" />
            <span>Kualitas Terjamin</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Kenapa Memilih Sari Rasa?
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Kombinasi autentisitas cara kuno dan kemasan higienis modern yang memberikan pengalaman menikmati es tradisional terbaik.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {site.advantages.map((adv, idx) => (
            <div
              key={adv.id}
              className="bg-white rounded-3xl p-8 border-2 border-gold-400/30 hover:border-gold-400 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-cream-100 flex items-center justify-center mb-6 border border-gold-400/40">
                  {getIcon(adv.icon)}
                </div>

                {/* Index badge */}
                <span className="text-xs font-bold text-maroon-700/60 tracking-widest uppercase">
                  Poin 0{idx + 1}
                </span>

                <h3 className="font-serif italic text-xl font-bold text-maroon-900 mt-2 mb-3">
                  {adv.title}
                </h3>

                <p className="text-sm text-maroon-900/80 leading-relaxed">
                  {adv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center gap-2 text-xs font-medium text-pandan-600">
                <span className="w-2 h-2 rounded-full bg-pandan-600 inline-block" />
                <span>Standar Kualitas Sari Rasa</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

