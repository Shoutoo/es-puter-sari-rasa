"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, AlertCircle } from "lucide-react";
import { site } from "@/content/site";

export function Faq() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-cream-50 text-maroon-900 relative"
      aria-label="Pertanyaan yang Sering Diajukan"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-pandan-600" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Punya pertanyaan seputar rasa, pengiriman, atau pesanan khusus? Temukan jawabannya di sini.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-4">
          {site.faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border-2 border-gold-400/30 overflow-hidden shadow-soft transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-maroon-700 rounded-2xl transition-colors hover:bg-cream-100/50"
                >
                  <span className="font-serif italic text-base sm:text-lg font-bold text-maroon-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-maroon-700 text-cream-50" : "text-maroon-900"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-6 pb-6 pt-2 text-sm sm:text-base text-maroon-900/85 leading-relaxed border-t border-cream-200/60"
                  >
                    <p>{faq.answer}</p>
                    {faq.isPending && (
                      <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Menunggu konfirmasi final pemilik usaha</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer note */}
        <div className="mt-10 text-center text-xs sm:text-sm text-maroon-900/70">
          Masih ada pertanyaan yang belum terjawab?{" "}
          <a
            href="#kontak"
            className="font-bold text-maroon-700 underline decoration-gold-400 hover:text-maroon-900"
          >
            Hubungi kontak WhatsApp kami secara langsung.
          </a>
        </div>

      </div>
    </section>
  );
}

