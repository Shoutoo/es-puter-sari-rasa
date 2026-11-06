import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white border border-gold-400/40 rounded-3xl p-8 shadow-card flex flex-col items-center">
        <div className="relative w-28 h-28 mb-6">
          <Image
            src="/images/logo.svg"
            alt="Logo Es Puter Sari Rasa"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xs font-bold tracking-widest text-maroon-700 uppercase bg-cream-200 px-3 py-1 rounded-full mb-3">
          404 — Halaman Tidak Ditemukan
        </span>
        <h1 className="font-serif italic font-bold text-3xl sm:text-4xl text-maroon-900 mb-3">
          Waduh, Esnya Meleleh!
        </h1>
        <p className="text-maroon-900/80 text-sm sm:text-base leading-relaxed mb-8">
          Halaman yang kamu cari belum tersedia atau sudah dipindahkan. Yuk kembali ke beranda untuk menikmati manis segarnya Es Puter Sari Rasa.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-500 text-cream-50 font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-maroon-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </main>
  );
}

