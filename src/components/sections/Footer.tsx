import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Instagram, Heart, ArrowUp } from "lucide-react";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const waUrl = buildWhatsAppUrl(
    site.whatsapp,
    "Halo Es Puter Sari Rasa, saya ingin bertanya seputar pemesanan."
  );

  return (
    <footer className="bg-maroon-900 text-cream-50 pt-16 pb-12 border-t-2 border-gold-400/40 relative overflow-hidden">
      {/* Decorative background blur circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pandan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cream-50/10">
          
          {/* Brand info (Col 1 - 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-48 h-14">
              <Image
                src="/images/logo-white.svg"
                alt="Logo Es Puter Sari Rasa"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-cream-100/80 max-w-sm leading-relaxed">
              {site.subTagline} Menghadirkan kembali kelezatan es puter legendaris dengan cita rasa santan murni dan aroma daun pandan segar.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-50/10 hover:bg-gold-400 hover:text-maroon-900 text-cream-50 flex items-center justify-center transition-all"
                aria-label="WhatsApp Sari Rasa"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-50/10 hover:bg-gold-400 hover:text-maroon-900 text-cream-50 flex items-center justify-center transition-all"
                aria-label="Instagram Sari Rasa"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6 - 8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif italic text-lg font-bold text-gold-400">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-100/75">
              <li>
                <a href="#tentang" className="hover:text-gold-400 transition-colors">
                  Tentang Usaha Kami
                </a>
              </li>
              <li>
                <a href="#varian" className="hover:text-gold-400 transition-colors">
                  3 Varian Rasa Pilihan
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-gold-400 transition-colors">
                  Keunggulan Kualitas
                </a>
              </li>
              <li>
                <a href="#proses" className="hover:text-gold-400 transition-colors">
                  Alur Pembuatan
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-gold-400 transition-colors">
                  Galeri Foto Produk
                </a>
              </li>
              <li>
                <a href="#cara-pesan" className="hover:text-gold-400 transition-colors">
                  Panduan Pemesanan
                </a>
              </li>
              <li>
                <a href="#cerita-brand" className="hover:text-gold-400 transition-colors">
                  Perjalanan Identitas Brand
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Operation Hours (Col 9 - 12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif italic text-lg font-bold text-gold-400">
              Gerai &amp; Layanan Pesanan
            </h4>
            <p className="text-xs sm:text-sm text-cream-100/80 leading-relaxed">
              <strong>Alamat:</strong> {site.address}
            </p>
            <p className="text-xs sm:text-sm text-cream-100/80 leading-relaxed">
              <strong>Jam Buka:</strong> {site.openingHours}
            </p>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-cream-50 uppercase tracking-wider"
              >
                <span>Pesan untuk acara hajatan / arisan</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-100/60">
          <p>© 2026 {site.name}. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-2">
            <span>Dibuat dengan rasa cinta &amp; santan murni</span>
            <Heart className="w-3.5 h-3.5 text-pink-300 fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
}

