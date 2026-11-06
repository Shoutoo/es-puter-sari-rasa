import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Flavors } from "@/components/sections/Flavors";
import { Advantages } from "@/components/sections/Advantages";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { BrandJourney } from "@/components/sections/BrandJourney";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-cream-50 selection:bg-pink-300 selection:text-maroon-900">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Tentang Kami */}
        <About />

        {/* 4. Varian Rasa (Produk) */}
        <Flavors />

        {/* 5. Kenapa Sari Rasa (Keunggulan) */}
        <Advantages />

        {/* 6. Proses Pembuatan */}
        <Process />

        {/* 7. Galeri */}
        <Gallery />

        {/* 8. Cara Pesan */}
        <HowToOrder />

        {/* 9. Media Sosial Instagram */}
        <SocialMedia />

        {/* 10. Cerita & Perjalanan Brand (Before & After) */}
        <BrandJourney />

        {/* 11. FAQ */}
        <Faq />

        {/* 12. Kontak & Lokasi */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
