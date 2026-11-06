"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Varian Rasa", href: "#varian" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "Galeri", href: "#galeri" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "Cerita Brand", href: "#cerita-brand" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll-spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generalWaUrl = buildWhatsAppUrl(
    site.whatsapp,
    "Halo Es Puter Sari Rasa, saya ingin memesan es puter tradisional."
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-gold-400/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-maroon-700 rounded-lg p-1"
              aria-label="Beranda Es Puter Sari Rasa"
            >
              <div className="relative w-36 h-10 sm:w-44 sm:h-12 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={isScrolled ? "/images/logo.svg" : "/images/logo-white.svg"}
                  alt="Es Puter Sari Rasa Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? "bg-maroon-700 text-cream-50 font-semibold"
                          : "bg-gold-400 text-maroon-900 font-semibold shadow-glow"
                        : isScrolled
                        ? "text-maroon-900/80 hover:text-maroon-900 hover:bg-cream-200/60"
                        : "text-cream-50/90 hover:text-cream-50 hover:bg-maroon-900/40"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-soft focus:outline-none focus:ring-2 ${
                  isScrolled
                    ? "bg-maroon-700 hover:bg-maroon-500 text-cream-50 focus:ring-maroon-900"
                    : "bg-gold-400 hover:bg-gold-500 text-maroon-900 focus:ring-cream-50 shadow-glow"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Sekarang</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 ${
                isScrolled
                  ? "text-maroon-900 hover:bg-cream-200/80 focus:ring-maroon-700"
                  : "text-cream-50 hover:bg-maroon-900/50 focus:ring-gold-400"
              }`}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-maroon-900/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-cream-50 shadow-2xl p-6 flex flex-col justify-between border-l border-gold-400/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-cream-200">
                <div className="relative w-36 h-10">
                  <Image
                    src="/images/logo.svg"
                    alt="Logo Es Puter Sari Rasa"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-maroon-900 hover:bg-cream-200 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1.5" aria-label="Menu Mobile">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-maroon-900 font-medium hover:bg-cream-200 transition-colors flex items-center min-h-[44px]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-cream-200 flex flex-col gap-3">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-maroon-700 hover:bg-maroon-500 text-cream-50 font-semibold py-3 px-4 rounded-full shadow-soft transition-all min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pesan via WhatsApp</span>
              </a>
              <p className="text-center text-xs text-maroon-900/60">
                {site.tagline}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
