"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle, Calendar, Users, Send, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function HowToOrder() {
  const [customerName, setCustomerName] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState("Semua Varian (Campur)");
  const [cupQuantity, setCupQuantity] = useState("10");
  const [eventDate, setEventDate] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  const handleCustomOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Halo Es Puter Sari Rasa, saya ingin memesan es puter dengan rincian berikut:\n\n`;
    if (customerName.trim()) text += `• Nama Pemesan: ${customerName.trim()}\n`;
    text += `• Pilihan Varian: ${selectedFlavor}\n`;
    text += `• Jumlah Pesanan: ${cupQuantity} cup\n`;
    if (eventDate) text += `• Tanggal Dibutuhkan: ${eventDate}\n`;
    if (orderNotes.trim()) text += `• Catatan Khusus: ${orderNotes.trim()}\n`;
    text += `\nMohon informasi total harga dan ketersediaannya. Terima kasih!`;

    const url = buildWhatsAppUrl(site.whatsapp, text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const steps = [
    {
      num: 1,
      title: "Pilih Varian & Jumlah",
      desc: "Tentukan varian rasa kesukaanmu (Original, Stroberi, Cokelat) serta jumlah cup yang kamu butuhkan.",
    },
    {
      num: 2,
      title: "Kirim Pesan via WhatsApp",
      desc: "Hubungi admin kami lewat WhatsApp resmi. Gunakan tombol cepat atau isi form pemesanan instan di bawah ini.",
    },
    {
      num: 3,
      title: "Konfirmasi & Diantar / Ambil",
      desc: "Admin akan mengonfirmasi pesananmu. Pesanan siap diantar dalam kondisi beku segar atau dapat diambil di lokasi.",
    },
  ];

  return (
    <section
      id="cara-pesan"
      className="py-20 sm:py-28 bg-cream-200/60 text-maroon-900 relative"
      aria-label="Panduan Pemesanan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pandan-600" />
            <span>Mudah & Cepat</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Cara Praktis Memesan
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Hanya butuh beberapa ketukan untuk menghadirkan kelezatan es puter tradisional di meja santapmu.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-white rounded-3xl p-8 border-2 border-gold-400/30 hover:border-gold-400 shadow-soft transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-maroon-700 text-cream-50 font-serif italic font-bold text-xl flex items-center justify-center mb-6 shadow-soft">
                  {st.num}
                </div>
                <h3 className="font-serif italic text-xl font-bold text-maroon-900 mb-3">
                  {st.title}
                </h3>
                <p className="text-sm text-maroon-900/80 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center gap-2 text-xs font-semibold text-pandan-600">
                <CheckCircle className="w-4 h-4 text-pandan-600" />
                <span>Langkah 0{st.num} Selesai Cepat</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Instant WhatsApp Order Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-gold-400 shadow-card">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon-700 bg-cream-200 px-3 py-1 rounded-full">
              Formulir WhatsApp Otomatis
            </span>
            <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-maroon-900">
              Buat Rincian Pesanan Instan
            </h3>
            <p className="text-xs sm:text-sm text-maroon-900/75">
              Isi data di bawah ini, lalu klik tombol kirim untuk langsung membuka chat WhatsApp dengan format teks yang sudah terangkai rapi.
            </p>
          </div>

          <form onSubmit={handleCustomOrderSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="custName" className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                  Nama Anda
                </label>
                <input
                  id="custName"
                  type="text"
                  placeholder="Mis. Kak Budi"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-gold-400/40 text-maroon-900 placeholder-maroon-900/40 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700"
                />
              </div>

              <div>
                <label htmlFor="flavorSelect" className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                  Pilihan Varian
                </label>
                <select
                  id="flavorSelect"
                  value={selectedFlavor}
                  onChange={(e) => setSelectedFlavor(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-gold-400/40 text-maroon-900 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700"
                >
                  <option value="Semua Varian (Campur)">Campur Semua Varian</option>
                  <option value="Original Santan Pandan">Original Santan Pandan</option>
                  <option value="Stroberi Manis Segar">Stroberi Manis Segar</option>
                  <option value="Cokelat Legit Lembut">Cokelat Legit Lembut</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cupQty" className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                  Jumlah Cup
                </label>
                <input
                  id="cupQty"
                  type="number"
                  min="1"
                  placeholder="Mis. 10"
                  value={cupQuantity}
                  onChange={(e) => setCupQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-gold-400/40 text-maroon-900 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                  Tanggal Dibutuhkan (Opsional)
                </label>
                <input
                  id="eventDate"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-gold-400/40 text-maroon-900 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700"
                />
              </div>
            </div>

            <div>
              <label htmlFor="orderNotes" className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                Catatan Tambahan
              </label>
              <textarea
                id="orderNotes"
                rows={2}
                placeholder="Contoh: Untuk acara arisan keluarga jam 13.00, minta sendok dilebihkan."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-gold-400/40 text-maroon-900 placeholder-maroon-900/40 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700 resize-none"
              />
            </div>

            {/* Bulk order advisory note */}
            <div className="p-4 rounded-2xl bg-cream-100 border border-gold-400/40 text-xs text-maroon-900/80 flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
              <span>
                <strong>Pesanan Acara Besar (H-1):</strong> Untuk pesanan di atas 50 cup (hajatan, arisan, ulang tahun), mohon hubungi kami minimal H-1 agar proses pemutaran es dipersiapkan dengan optimal.
              </span>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-maroon-700 hover:bg-maroon-500 text-cream-50 font-bold py-4 px-8 rounded-full shadow-floating transition-all duration-300 text-base min-h-[48px] focus:outline-none focus:ring-4 focus:ring-maroon-900/40"
            >
              <Send className="w-5 h-5" />
              <span>Kirim Rincian via WhatsApp</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

