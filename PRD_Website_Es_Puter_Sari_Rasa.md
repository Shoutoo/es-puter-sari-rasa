# PRD — Website Company Profile "Es Puter Sari Rasa"

> Dokumen ini adalah instruksi lengkap untuk AI agent (Antigravity). Baca seluruh dokumen sebelum menulis kode. Kerjakan berurutan sesuai bagian **Rencana Eksekusi** (Bagian 12).

---

## 0. Instruksi Wajib untuk Agent (BACA PERTAMA)

Sebelum membuat satu pun komponen UI, lakukan langkah ini:

1. **Cari dan pasang skill desain UI/UX dari internet.** Gunakan browser/pencarian untuk menemukan dan membaca skill atau panduan desain frontend yang berkualitas, lalu terapkan selama pengerjaan. Kandidat yang disarankan (verifikasi dulu bahwa repositorinya masih ada dan terpercaya; jika tidak ada, cari alternatif setara):
   - Skill `frontend-design` dari repositori `anthropics/skills` di GitHub (panduan agar UI tidak terlihat generik/"AI slop").
   - Skill `ui-ux-pro-max` (repositori `nextlevelbuilder/ui-ux-pro-max-skill` di GitHub), berisi pola desain, palet, dan pasangan font.
   - Pedoman pendukung: Refactoring UI, Laws of UX (lawsofux.com), WCAG 2.2 AA, dan web.dev untuk performa.
2. Simpan skill yang dipakai di folder skill workspace (mis. `.agent/skills/`) dan **tulis ringkasan 10 baris** tentang prinsip yang akan diterapkan ke file `docs/design-principles.md`.
3. Jika ada konflik antara skill dari internet dan dokumen ini, **dokumen ini menang untuk identitas brand** (warna, logo, tone), skill menang untuk teknik eksekusi (layout, spacing, animasi, aksesibilitas).
4. Jangan mengarang data bisnis (alamat, nomor WA, harga). Semua data yang belum ada ditaruh sebagai **placeholder terpusat** di `src/content/site.ts` (lihat Bagian 9) dan diberi tanda `TODO`.

---

## 1. Ringkasan Produk

**Nama bisnis:** Es Puter Sari Rasa
**Jenis usaha:** UKM kuliner es tradisional (es puter), dikembangkan oleh Kelompok 1 sebagai proyek pengembangan usaha.
**Produk:** Es puter dalam cup kecil dengan hiasan daun pandan dan sendok mungil. Varian: **Stroberi, Cokelat, Original**.
**Tagline kemasan:** "Segar Dingin • Manis Legit • Daun Pandan" — *Tradisional*.
**Kanal promosi saat ini:** Instagram (akun bisnis, katalog poster digital, foto proses pembuatan).

**Masalah:** Produk awalnya dijual dengan cup polos tanpa identitas merek, dan jangkauan promosi masih terbatas pada media sosial.

**Solusi:** Website company profile satu halaman (landing page) yang memperkenalkan brand, memamerkan produk, menceritakan proses pembuatan, dan mengarahkan pengunjung untuk **memesan lewat WhatsApp** atau **mengikuti Instagram**.

## 2. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik |
|---|---|
| Membangun kredibilitas brand tradisional yang modern | Skor kesan visual, bounce rate < 55% |
| Mendorong pemesanan | Klik tombol "Pesan via WhatsApp" ≥ 8% dari pengunjung |
| Menambah pengikut Instagram | Klik ke Instagram ≥ 10% dari pengunjung |
| Mudah ditemukan | Tampil di Google untuk "es puter [kota]" (SEO lokal dasar) |
| Cepat di HP | Lighthouse Mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 |

**Non-goals (v1):** pembayaran online, akun pengguna, keranjang belanja, dashboard admin, multi-bahasa.

## 3. Target Pengguna

- **Utama:** Pelajar, mahasiswa, dan keluarga muda di sekitar lokasi usaha (usia 15–40), 90%+ mengakses lewat HP, datang dari Instagram atau Google Maps.
- **Sekunder:** Pemesan acara (arisan, ulang tahun, hajatan) yang ingin pesan jumlah banyak; calon reseller; dosen/penguji proyek yang menilai branding.

**Kebutuhan pengguna:** melihat varian rasa dan tampilan produk dengan cepat, tahu lokasi/cara memesan dalam satu ketukan, merasa produk higienis dan layak dipercaya.

## 4. Identitas Brand (diambil dari presentasi)

**Kepribadian:** hangat, nostalgia, segar, ramah, tradisional-tapi-modern. Bukan korporat dingin.

**Logo:** scoop es puter dengan daun pandan di atas cup dan sendok mungil, teks "Es Puter" (serif miring) + "SARI RASA" (kapital, jarak huruf lebar), garis tipis dan label "TRADISIONAL". Logo dipakai di latar marun. *Pemilik menyediakan file logo; jika belum, agent membuat placeholder SVG sederhana dan menandainya `TODO: ganti logo asli`.*

**Elemen visual khas dari kemasan:** bentuk lengkung (arch) di pinggir poster, bullet titik, bingkai garis tipis berwarna emas/krem, daun pandan sebagai ornamen.

### 4.1 Palet Warna (design tokens)

| Token | Hex | Pemakaian |
|---|---|---|
| `--maroon-900` | `#4A0E0E` | Teks gelap, footer |
| `--maroon-700` | `#6B1414` | Warna brand utama, hero, tombol utama |
| `--maroon-500` | `#8E2A2A` | Hover, aksen |
| `--cream-50` | `#FFF8EE` | Latar halaman utama |
| `--cream-200` | `#F6E7CF` | Latar section selang-seling, kartu |
| `--pink-300` | `#F2A7B8` | Aksen varian stroberi, badge, highlight |
| `--pandan-600` | `#4E7D45` | Aksen daun pandan, status positif |
| `--pandan-200` | `#CFE3C4` | Latar ornamen daun |
| `--choco-700` | `#5A3523` | Aksen varian cokelat |
| `--gold-400` | `#E8C27A` | Garis bingkai, detail kecil |

Aturan: kontras teks minimal 4.5:1. Teks badan memakai `--maroon-900` di atas `--cream-50`. Putih hanya di atas marun. Hindari gradien ungu/biru generik.

### 4.2 Tipografi

- **Display / judul:** serif miring bernuansa hangat, mis. **Fraunces** (italic) atau **Playfair Display Italic**, cocok dengan logo.
- **Isi / UI:** sans humanis, mis. **Plus Jakarta Sans** atau **DM Sans**.
- Muat lewat `next/font` (atau `font-display: swap`) dan subset Latin. Skala: 14 / 16 / 18 / 24 / 32 / 48 / 72 px, `clamp()` untuk judul hero.

### 4.3 Gaya Bahasa (copywriting)

Bahasa Indonesia santai, hangat, singkat. Contoh nada: "Dingin, manis, dan bikin kangen." Hindari klaim berlebihan dan jargon. Semua klaim harus bersumber dari data bisnis (jangan mengarang penghargaan atau angka penjualan).

## 5. Struktur Informasi (Sitemap)

Satu halaman scroll (`/`) dengan section berikut, ditambah halaman minimal `/404`.

1. **Navbar** (sticky, transparan lalu solid saat scroll)
2. **Hero**
3. **Tentang Kami** (cerita merek)
4. **Varian Rasa** (produk)
5. **Kenapa Sari Rasa** (keunggulan)
6. **Proses Pembuatan** (alur diputar)
7. **Galeri** (foto produk, kemasan, proses)
8. **Cara Pesan**
9. **Instagram / Media Sosial**
10. **Cerita & Perjalanan Brand** (sebelum → sesudah branding ulang)
11. **FAQ**
12. **Kontak & Lokasi**
13. **Footer**

Tombol WhatsApp mengambang (floating) tampil di seluruh halaman.

## 6. Spesifikasi Fitur per Section

### 6.1 Navbar
- Logo kiri, menu anchor (Tentang, Varian, Proses, Galeri, Cara Pesan, Kontak), tombol CTA "Pesan Sekarang" kanan.
- Mobile: hamburger yang membuka menu layar penuh dengan animasi halus; target sentuh ≥ 44px.
- Menandai section aktif saat scroll (scroll-spy).

### 6.2 Hero
- Latar `--maroon-700` dengan bentuk lengkung (arch) dan ornamen daun pandan.
- Headline serif miring besar, mis. "Es Puter Sari Rasa", subjudul: "Es puter tradisional dengan rasa yang bikin kangen." (boleh disesuaikan).
- Dua CTA: **Pesan via WhatsApp** (utama) dan **Lihat Varian Rasa** (sekunder).
- Visual: foto/ilustrasi cup es puter dengan scoop dan daun pandan; efek parallax ringan dan animasi masuk (fade + naik).
- Badge kecil: "Tradisional • Segar Dingin • Manis Legit".

### 6.3 Tentang Kami
- Cerita singkat: usaha es puter tradisional yang diputar hingga lembut, disajikan dalam cup kecil dengan daun pandan dan sendok mungil agar praktis dinikmati semua kalangan.
- Menyorot perjalanan: dari cup polos tanpa merek menjadi brand dengan identitas baru dan tiga varian rasa.
- Layout dua kolom (teks + foto), dengan bingkai garis emas tipis.

### 6.4 Varian Rasa (Produk)
- Tiga kartu: **Original, Stroberi, Cokelat**. Tiap kartu memuat foto cup, nama, deskripsi satu kalimat, warna aksen sendiri (pink untuk stroberi, cokelat untuk cokelat, krem untuk original), dan tombol "Pesan Rasa Ini" yang membuka WhatsApp dengan pesan terisi otomatis (mis. "Halo Sari Rasa, saya mau pesan es puter rasa Stroberi.").
- Harga: tampilkan hanya jika diisi di `site.ts`; jika kosong, tampilkan "Tanya harga via WhatsApp".
- Interaksi: hover mengangkat kartu, di mobile berupa carousel geser (scroll-snap).

### 6.5 Kenapa Sari Rasa (Keunggulan)
Tiga sampai empat poin dengan ikon, berbasis data nyata dari presentasi:
- Dibuat dengan cara diputar tradisional hingga tekstur lembut.
- Disajikan dalam cup praktis dengan daun pandan dan sendok mungil.
- Tiga pilihan rasa yang disukai berbagai kalangan.
- Kemasan dan identitas baru yang menarik.

### 6.6 Proses Pembuatan
- Timeline horizontal (vertikal di mobile): Siapkan bahan → Diputar hingga lembut → Dikemas cepat → Disajikan dingin.
- Catatan jujur dan menarik: es dikemas cepat agar tetap dingin dan tidak meleleh di cuaca panas (diambil dari bagian kendala di presentasi).
- Placeholder untuk foto/video proses dari Instagram.

### 6.7 Galeri
- Grid masonry dengan foto: produk, kemasan baru, proses pembuatan.
- Lightbox saat gambar diklik (navigasi keyboard, tombol tutup, swipe di mobile).
- Lazy loading, `next/image` atau `srcset`, format WebP/AVIF.

### 6.8 Cara Pesan
- Tiga langkah bergambar: **1) Pilih rasa → 2) Chat WhatsApp → 3) Ambil / diantar**.
- Tombol besar WhatsApp. Info pemesanan jumlah banyak (acara) dengan catatan "pesan H-1".
- Opsional: form kecil (nama, rasa, jumlah, tanggal) yang merangkai teks lalu membuka `wa.me` — **tanpa backend**.

### 6.9 Media Sosial
- Menampilkan 3 mockup tampilan Instagram (feed/profil) atau 6 kartu foto yang menaut ke akun Instagram.
- CTA "Ikuti @username" (placeholder handle di `site.ts`).
- Jangan embed API pihak ketiga yang berat. Pakai gambar statis agar cepat.

### 6.10 Perjalanan Brand (Before → After)
- Slider perbandingan interaktif (drag): **logo & kemasan lama (cup polos) vs terbaru**.
- Tiga poin makna logo: Scoop & Daun Pandan, Cup & Sendok Mungil, Warna & Huruf (marun, krem, merah muda, hijau pandan, serif miring).
- Menjadi bagian yang menonjolkan nilai proyek.

### 6.11 FAQ
Akordeon aksesibel (keyboard + ARIA). Contoh pertanyaan: Rasa apa saja? Bisa pesan banyak? Bagaimana cara pemesanan? Apakah bisa diantar? Es tahan berapa lama? Jawaban yang belum pasti ditandai `TODO`.

### 6.12 Kontak & Lokasi
- Alamat, jam buka, nomor WhatsApp, Instagram (semua dari `site.ts`).
- Peta: tautan/embed Google Maps ringan (lazy). Jika alamat belum ada, tampilkan placeholder.
- Tombol "Buka di Google Maps" dan "Chat WhatsApp".

### 6.13 Footer
Logo, tagline, tautan cepat, sosial media, hak cipta "© 2026 Es Puter Sari Rasa". Latar `--maroon-900`.

### 6.14 Tombol WhatsApp Mengambang
Pojok kanan bawah, muncul setelah scroll 300px, label "Pesan" di desktop dan hanya ikon di mobile. Tidak boleh menutupi konten penting atau footer.

## 7. Panduan UI/UX (Wajib Diikuti)

**Prinsip utama**
- *Mobile-first.* Desain dimulai dari 375px lalu naik ke 768, 1024, 1440px.
- *Satu tujuan per layar:* setiap section punya satu pesan dan paling banyak satu CTA utama.
- *Hierarki jelas:* judul serif besar, isi sans nyaman dibaca (16–18px, line-height 1.6, lebar baris ≤ 70 karakter).
- *Ritme visual:* selang-seling latar krem terang, krem hangat, dan marun agar scroll terasa hidup; beri jarak vertikal besar antar section (`py-20` sampai `py-28`).
- *Cerita, bukan template:* hindari tampilan "SaaS biru-ungu". Pakai bentuk lengkung, ornamen daun pandan, bingkai emas tipis, dan foto asli sebagai pusat perhatian.
- *Fokus ke makanan:* foto produk besar, tajam, hangat. Gunakan sudut membulat konsisten (mis. 16–24px) dan bayangan lembut berwarna marun transparan, bukan abu-abu keras.

**Animasi (Framer Motion / CSS)**
- Fade + translate-up saat masuk viewport, durasi 400–600ms, easing `easeOut`, stagger antar kartu.
- Hover kartu: naik 4–6px + bayangan lebih tegas. Ornamen daun bergoyang sangat halus (loop pelan).
- Wajib menghormati `prefers-reduced-motion` (matikan animasi non-esensial).

**Mikro-interaksi:** tombol dengan state hover/active/focus yang jelas, tombol WhatsApp berdenyut halus sekali saat pertama muncul, scroll halus ke anchor dengan offset navbar.

**Aksesibilitas (WCAG 2.2 AA):** kontras ≥ 4.5:1, fokus terlihat (outline gelap 2px + offset), alt text bermakna pada semua gambar, urutan heading logis (satu `h1`), tautan ber-label jelas, navigasi penuh dengan keyboard, area sentuh ≥ 44×44px.

**Performa:** gambar dioptimasi dan lazy-load (kecuali hero), font di-subset, tanpa library berat yang tidak perlu, hindari layout shift (tentukan ukuran gambar), total JS awal sekecil mungkin.

**Cek Anti-Generik (agent harus lolos sebelum selesai):** (1) halaman tidak bisa tertukar dengan template lain, (2) warna dan font sesuai Bagian 4, (3) ada minimal tiga elemen khas brand (arch, daun pandan, bingkai emas), (4) foto produk menjadi bintang, bukan ikon stok.

## 8. Rekomendasi Teknis

Agent boleh memilih alternatif jika lebih cocok, tetapi hasil akhir harus statis/ringan dan murah di-hosting.

- **Framework:** Next.js (App Router) + TypeScript, atau Astro jika ingin lebih ringan.
- **Styling:** Tailwind CSS dengan design tokens Bagian 4 di `tailwind.config` / CSS variables.
- **Animasi:** Framer Motion (atau CSS murni untuk yang sederhana).
- **Ikon:** Lucide React.
- **Deploy:** Vercel / Netlify / Cloudflare Pages (gratis). Output statis (`output: 'export'` bila memungkinkan).
- **Tanpa database dan backend** pada v1. Semua konten dari file `site.ts`.
- **SEO:** metadata per halaman, Open Graph image (poster Sari Rasa), `sitemap.xml`, `robots.txt`, JSON-LD `Restaurant`/`LocalBusiness` (isi hanya data yang tersedia), `lang="id"`.
- **Analitik (opsional):** Plausible atau Vercel Analytics; lacak klik tombol WhatsApp dan Instagram.

## 9. Konten & Data (Satu Sumber Kebenaran)

Buat `src/content/site.ts` berisi semua teks dan data agar pemilik mudah mengubahnya tanpa menyentuh komponen:

```ts
export const site = {
  name: "Es Puter Sari Rasa",
  tagline: "Es puter tradisional, segar dingin, manis legit.",
  whatsapp: "62XXXXXXXXXX",        // TODO: isi nomor WA (format 62...)
  instagram: "@TODO_username",     // TODO
  address: "TODO: alamat usaha",   // TODO
  openingHours: "TODO: jam buka",  // TODO
  mapsUrl: "",                     // TODO: tautan Google Maps
  flavors: [
    { id: "original", name: "Original", desc: "TODO", price: null, accent: "cream" },
    { id: "stroberi", name: "Stroberi", desc: "TODO", price: null, accent: "pink" },
    { id: "cokelat",  name: "Cokelat",  desc: "TODO", price: null, accent: "choco" },
  ],
};
```

**Aset yang perlu disiapkan pemilik** (letakkan di `public/images/`): logo terbaru (SVG/PNG transparan), logo lama, foto kemasan lama dan baru, foto ketiga varian, foto proses pembuatan, tangkapan layar Instagram. Jika belum ada, gunakan placeholder bertanda `TODO` dan jangan memakai foto stok yang menyesatkan.

## 10. Persyaratan Non-Fungsional

- Responsif sempurna 360px sampai 1920px; tidak ada scroll horizontal.
- Mendukung browser modern (2 versi terakhir Chrome, Safari, Firefox, Edge).
- Waktu muat < 2,5 detik (LCP) pada jaringan 4G.
- Semua teks bahasa Indonesia, tanda baca dan kapitalisasi konsisten.
- Kode rapi: komponen per section, tipe TypeScript, tanpa `any` yang tidak perlu, README berisi cara menjalankan dan cara mengganti konten.

## 11. Kriteria Penerimaan (Definition of Done)

- [ ] Semua 13 section tampil sesuai spesifikasi dan data berasal dari `site.ts`.
- [ ] Tombol WhatsApp (navbar, kartu rasa, cara pesan, floating) membuka chat dengan pesan terisi.
- [ ] Palet, font, dan elemen khas brand sesuai Bagian 4; lolos Cek Anti-Generik.
- [ ] Skill desain dari internet sudah dipasang dan ringkasan prinsip ada di `docs/design-principles.md`.
- [ ] Lighthouse Mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Diuji di lebar 375, 768, 1280px; navigasi keyboard berfungsi; `prefers-reduced-motion` dihormati.
- [ ] Tidak ada data bisnis fiktif; semua yang belum diketahui ditandai `TODO` dan dilaporkan.
- [ ] README dan langkah deploy tersedia.

## 12. Rencana Eksekusi untuk Agent

1. **Riset skill:** lakukan Bagian 0, tulis `docs/design-principles.md`.
2. **Setup proyek:** framework, Tailwind, font, design tokens, struktur folder, `site.ts`.
3. **Fondasi UI:** layout global, navbar, footer, tombol, kartu, section wrapper, animasi dasar.
4. **Bangun section** berurutan: Hero → Tentang → Varian → Keunggulan → Proses → Galeri → Cara Pesan → Media Sosial → Perjalanan Brand → FAQ → Kontak.
5. **Polesan:** animasi, mikro-interaksi, responsif, aksesibilitas, SEO, performa.
6. **QA:** jalankan Lighthouse, cek checklist Bagian 11, perbaiki.
7. **Laporan akhir:** daftar `TODO` yang perlu diisi pemilik, cara menjalankan, dan cara deploy.

**Jika ada yang ambigu**, ambil keputusan paling masuk akal yang konsisten dengan brand di Bagian 4, catat di `docs/decisions.md`, dan lanjutkan. Jangan berhenti hanya untuk bertanya hal kecil.

## 13. Lampiran: Ringkasan Sumber (dari Presentasi Pemilik)

- Es puter dibuat dengan cara diputar hingga lembut dan segar, disajikan dalam cup kecil dengan daun pandan dan sendok mungil.
- Sebelumnya dijual dengan cup polos tanpa merek; dikembangkan menjadi tiga varian (stroberi, cokelat, original) dengan identitas baru.
- Logo baru: scoop + daun pandan, cup + sendok mungil, warna marun/krem/merah muda/hijau pandan, serif miring.
- Promosi lewat Instagram: akun bisnis, katalog poster digital, foto proses pembuatan, feed dan story.
- Tantangan: menjaga es tetap dingin saat pengemasan di cuaca panas, diatasi dengan mengatur waktu pengemasan agar es segera dikemas dan dijual.
