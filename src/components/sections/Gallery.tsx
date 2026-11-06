"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { GalleryItem } from "@/types";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ["Semua", "Produk", "Kemasan", "Proses"];

  const filteredItems =
    activeCategory === "Semua"
      ? site.gallery
      : site.gallery.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;

      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  const activeItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section
      id="galeri"
      className="py-20 sm:py-28 bg-cream-50 text-maroon-900 relative"
      aria-label="Galeri Foto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pandan-600" />
            <span>Dokumentasi Visual</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Galeri Es Puter Sari Rasa
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Intip kelezatan tampilan cup, detail kemasan baru, dan kehangatan proses tradisional yang kami hadirkan.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setSelectedItemIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] ${
                activeCategory === cat
                  ? "bg-maroon-700 text-cream-50 shadow-soft"
                  : "bg-cream-200 text-maroon-900 hover:bg-cream-300/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border-2 border-gold-400/30 hover:border-gold-400 shadow-soft hover:shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-maroon-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-cream-50/90 text-maroon-900 flex items-center justify-center shadow-soft">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cream-50/90 text-maroon-900 shadow-soft backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="p-5">
                <h3 className="font-serif italic text-lg font-bold text-maroon-900 group-hover:text-maroon-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-maroon-900/70 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Interactive Lightbox Modal */}
      {activeItem && selectedItemIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-maroon-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItemIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedItemIndex(null)}
            className="absolute top-6 right-6 text-cream-50 hover:text-gold-400 p-2 rounded-full bg-maroon-900/60 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-400 z-10"
            aria-label="Tutup pratinjau foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItemIndex(
                selectedItemIndex === 0
                  ? filteredItems.length - 1
                  : selectedItemIndex - 1
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-cream-50 hover:text-gold-400 p-3 rounded-full bg-maroon-900/60 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-400 z-10"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItemIndex(
                selectedItemIndex === filteredItems.length - 1
                  ? 0
                  : selectedItemIndex + 1
              );
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-cream-50 hover:text-gold-400 p-3 rounded-full bg-maroon-900/60 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-400 z-10"
            aria-label="Foto selanjutnya"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-cream-50 rounded-3xl overflow-hidden border-2 border-gold-400 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-maroon-950/20">
              <Image
                src={activeItem.imageSrc}
                alt={activeItem.alt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="p-6 bg-cream-50 border-t border-gold-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-maroon-700 uppercase tracking-widest bg-cream-200 px-3 py-1 rounded-full">
                  {activeItem.category}
                </span>
                <h3 className="font-serif italic text-2xl font-bold text-maroon-900 mt-2">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-maroon-900/80 mt-1">
                  {activeItem.caption}
                </p>
              </div>

              <div className="text-xs text-maroon-900/60 sm:text-right shrink-0">
                {selectedItemIndex + 1} dari {filteredItems.length} foto
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
