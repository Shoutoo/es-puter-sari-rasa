import { MapPin, Clock, MessageCircle, Instagram, Mail, ExternalLink, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Contact() {
  const waUrl = buildWhatsAppUrl(
    site.whatsapp,
    "Halo Es Puter Sari Rasa, saya ingin menanyakan lokasi dan pemesanan es puter."
  );

  const mapsQueryUrl = site.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Es Puter Solo")}`;

  return (
    <section
      id="kontak"
      className="py-20 sm:py-28 bg-cream-200/50 text-maroon-900 relative"
      aria-label="Kontak dan Lokasi Usaha"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-pandan-600" />
            <span>Kunjungi &amp; Hubungi</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Kontak &amp; Lokasi Dapur
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Kami siap menyambut kunjunganmu atau melayani pemesanan langsung melalui chat WhatsApp.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Contact Info and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold-400/40 shadow-card space-y-6">
              <h3 className="font-serif italic text-2xl font-bold text-maroon-900">
                Informasi Gerai
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-cream-100 flex items-center justify-center shrink-0 border border-gold-400/30 text-maroon-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-maroon-700">
                    Alamat Usaha
                  </p>
                  <p className="text-sm text-maroon-900/90 mt-1 leading-relaxed">
                    {site.address}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-cream-100 flex items-center justify-center shrink-0 border border-gold-400/30 text-maroon-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-maroon-700">
                    Jam Operasional
                  </p>
                  <p className="text-sm text-maroon-900/90 mt-1 leading-relaxed">
                    {site.openingHours}
                  </p>
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-cream-100 flex items-center justify-center shrink-0 border border-gold-400/30 text-pandan-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-maroon-700">
                    WhatsApp Resmi
                  </p>
                  <p className="text-sm text-maroon-900 font-semibold mt-1">
                    +{site.whatsapp}
                  </p>
                </div>
              </div>

              {/* Instagram Handle */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-cream-100 flex items-center justify-center shrink-0 border border-gold-400/30 text-pink-500">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-maroon-700">
                    Instagram Bisnis
                  </p>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-maroon-900 hover:text-maroon-700 font-semibold mt-1 inline-flex items-center gap-1"
                  >
                    <span>{site.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Button on left */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-maroon-700 hover:bg-maroon-500 text-cream-50 font-bold py-4 px-6 rounded-full shadow-floating transition-all duration-200 text-sm sm:text-base min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat WhatsApp Sekarang</span>
            </a>

          </div>

          {/* Right Column: Interactive Map Placeholder Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border-2 border-gold-400 shadow-card flex flex-col justify-between h-full">
              
              {/* Map Visual Wrapper */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-cream-100 border border-gold-400/30 flex flex-col items-center justify-center p-6 text-center">
                
                {/* Decorative map graphics */}
                <div className="w-20 h-20 rounded-full bg-maroon-700/10 flex items-center justify-center mb-4 border border-gold-400/40">
                  <MapPin className="w-10 h-10 text-maroon-700 animate-bounce" />
                </div>

                <h4 className="font-serif italic text-xl font-bold text-maroon-900 mb-2">
                  Peta Lokasi Es Puter Sari Rasa
                </h4>
                <p className="text-xs sm:text-sm text-maroon-900/75 max-w-md leading-relaxed mb-6">
                  {site.address}
                </p>

                <div className="inline-flex items-center gap-2 text-xs text-pandan-600 bg-pandan-200/60 px-3 py-1.5 rounded-full font-medium">
                  <span className="w-2 h-2 rounded-full bg-pandan-600" />
                  <span>Siap melayani take-away dan pesanan antar</span>
                </div>
              </div>

              {/* Map Action Button */}
              <div className="mt-5 pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-maroon-900/60 text-center sm:text-left">
                  Klik tombol untuk melihat rute petunjuk arah di aplikasi Google Maps.
                </span>
                <a
                  href={mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-200 hover:bg-gold-400 text-maroon-900 font-bold px-6 py-3 rounded-full transition-all text-xs sm:text-sm min-h-[44px]"
                >
                  <MapPin className="w-4 h-4 text-maroon-700" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

