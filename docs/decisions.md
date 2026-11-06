# Catatan Keputusan Desain & Arsitektur (Architectural Decisions)

## 1. Framework & Rendering
- **Pilihan:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v3.
- **Alasan:** Performa SSR/SSG prima, integrasi `next/font` (Google Fonts dengan zero layout shift), kemudahan deploy otomatis di Vercel, dan kompatibilitas ekosistem modern.

## 2. Palet Warna & Desain Token
- **Pilihan:** Sesuai PRD Bagian 4.1:
  - Maroon: `#4A0E0E` (900), `#6B1414` (700), `#8E2A2A` (500)
  - Cream: `#FFF8EE` (50), `#F6E7CF` (200)
  - Pandan: `#4E7D45` (600), `#CFE3C4` (200)
  - Strawberry Pink: `#F2A7B8` (300)
  - Chocolate: `#5A3523` (700)
  - Gold Accent: `#E8C27A` (400)
- **Implementasi:** Dikonfigurasikan sebagai CSS Custom Properties dan Tailwind theme color extensions.

## 3. Data Terpusat & Placeholder
- Seluruh teks, link media sosial, nomor telepon WhatsApp, daftar FAQ, alur proses, dan varian rasa didefinisikan di `src/content/site.ts`.
- Data yang menunggu input asli pemilik ditandai secara transparan dengan `TODO`.

## 4. Interaktivitas
- Before & After Slider dibuat dengan drag/touch interaktif murni tanpa dependensi eksternal berat.
- Lightbox Galeri mendukung keyboard navigation (Escape, Left, Right) dan touch.
- Form pemesanan cepat merangkai pesan otomatis WhatsApp via URL scheme `https://wa.me/...` tanpa backend database.
