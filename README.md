# Website Company Profile — Es Puter Sari Rasa

Website profil resmi dan landing page pemesanan untuk **Es Puter Sari Rasa**, kuliner es puter tradisional santan kelapa murni dengan sentuhan modern berdaun pandan segar.

Dibuat sesuai dokumen spesifikasi produk (**PRD_Website_Es_Puter_Sari_Rasa.md**) dengan arsitektur **Next.js 15 (App Router)**, **TypeScript**, dan **Tailwind CSS**.

---

## 🍨 Fitur & Struktur Halaman

Situs ini dibangun dalam satu halaman scroll interaktif (landing page) lengkap dengan 13 section utama:

1. **Navbar**: Sticky navigation bar dengan efek transparan-ke-solid, scroll-spy penanda section aktif, dan menu drawer mobile layar penuh (touch target ≥ 44px).
2. **Hero Section**: Desain lengkung (arch) tradisional warna merah marun, ornamen daun pandan bergerak lembut, visual scoop es puter, dan tombol aksi ganda (Pesan WhatsApp & Lihat Varian).
3. **Tentang Kami**: Narasi perjalanan usaha es puter dari cup polos tanpa merek hingga bertransformasi menjadi brand beridentitas matang.
4. **Varian Rasa**: Tiga kartu produk (Original Santan Pandan, Stroberi Manis Segar, Cokelat Legit) dengan tombol "Pesan Rasa Ini" yang otomatis membuka WhatsApp dengan teks terisi.
5. **Kenapa Sari Rasa (Keunggulan)**: 4 poin keunggulan utama (diputar tradisional, daun pandan asli, cup praktis higienis, ramah semua usia).
6. **Proses Pembuatan**: Alur produksi 4 tahap (Bahan Pilihan → Putar Tradisional → Kemas Cepat → Sajikan Dingin) disertai catatan jujur mengenai komitmen menjaga es tetap beku di cuaca hangat.
7. **Galeri Foto**: Grid dokumentasi dengan filter kategori (Semua, Produk, Kemasan, Proses) dan **Interactive Lightbox Modal** yang mendukung navigasi keyboard (Escape, Panah Kiri, Panah Kanan).
8. **Cara Pesan**: 3 langkah mudah serta **Formulir Rincian Pesanan WhatsApp Instan** (memilih varian, jumlah cup, tanggal acara) tanpa backend database.
9. **Media Sosial (Instagram)**: Mockup feed interaktif dan tombol aksi untuk mengikuti akun Instagram resmi.
10. **Perjalanan Brand (Before & After)**: Slider perbandingan interaktif geser (drag/touch) antara kemasan lama (cup polos) vs kemasan baru Sari Rasa, serta filosofi 3 elemen logo.
11. **FAQ (Tanya Jawab)**: Akordeon aksesibel sesuai standar ARIA untuk menjawab pertanyaan umum pelanggan.
12. **Kontak & Lokasi**: Informasi alamat lengkap, jam operasional, tautan chat WhatsApp, serta tautan langsung ke Google Maps.
13. **Footer**: Logo putih, ringkasan profil, navigasi cepat, dan hak cipta resmi.
14. **Tombol WhatsApp Mengambang (Floating Button)**: Tombol pemesanan cepat di pojok kanan bawah yang otomatis muncul setelah scroll 300px dengan animasi denyut halus (*soft pulse*).
15. **Halaman 404 Kustom**: Halaman error ramah pengguna dengan tombol kembali ke beranda.

---

## 🎨 Identitas Brand & Design Tokens

- **Maroon 900** (`#4A0E0E`): Teks gelap & footer
- **Maroon 700** (`#6B1414`): Warna brand utama & tombol primer
- **Maroon 500** (`#8E2A2A`): Hover & aksen aktif
- **Cream 50** (`#FFF8EE`): Latar belakang utama
- **Cream 200** (`#F6E7CF`): Latar kartu & section selang-seling
- **Pandan 600** (`#4E7D45`) & **Pandan 200** (`#CFE3C4`): Aksen kesegaran daun pandan
- **Strawberry Pink** (`#F2A7B8`): Aksen varian stroberi
- **Chocolate 700** (`#5A3523`): Aksen varian cokelat
- **Gold 400** (`#E8C27A`): Garis bingkai aksen dan ornamen halus
- **Tipografi**: Display judul menggunakan font serif miring (*Playfair Display Italic*), isi teks menggunakan sans humanis (*Plus Jakarta Sans*).

---

## 🛠️ Panduan Menjalankan Proyek Lokal

### 1. Prasyarat
Pastikan sudah terinstal **Node.js** (versi 18 ke atas) dan **npm**.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses alamat `http://localhost:3000`.

### 4. Build untuk Produksi
```bash
npm run build
npm run start
```

---

## 📝 Satu Sumber Kebenaran Data (`src/content/site.ts`)

Semua data bisnis, teks informasi, nomor WhatsApp, alamat, dan varian rasa terpusat di satu file:
`src/content/site.ts`

### 📌 Checklist TODO untuk Pemilik Usaha:
Buka file `src/content/site.ts` dan perbarui baris berikut:
- [ ] `whatsapp`: Masukkan nomor WhatsApp resmi aktif (format internasional tanpa tanda plus, misal: `"6281234567890"`).
- [ ] `instagramHandle`: Masukkan username Instagram resmi (misal: `"@esputersarirasa"`).
- [ ] `instagram`: Masukkan link profil Instagram bisnis Anda.
- [ ] `address`: Masukkan alamat lengkap gerai / tempat produksi.
- [ ] `openingHours`: Masukkan jadwal jam buka operasional usaha Anda.
- [ ] `mapsUrl`: Masukkan link tautan lokasi Google Maps usaha Anda.
- [ ] `flavors[].price`: Masukkan harga per cup jika sudah ditentukan nominalnya (ganti `null` menjadi angka, misal `5000`).

---

## 🚀 Panduan Hosting & Deploy ke Vercel

Repository ini telah dikonfigurasi dengan `vercel.json` dan arsitektur Next.js standar yang siap dideploy secara otomatis:

1. **Push ke GitHub**: Repository ini telah terhubung dan di-push ke GitHub akun Anda.
2. **Buka Vercel**: Masuk ke [https://vercel.com](https://vercel.com) menggunakan akun GitHub Anda.
3. **Import Project**: Klik tombol **"Add New..."** → **"Project"**, lalu pilih repository `es-puter-sari-rasa`.
4. **Deploy**: Klik tombol **"Deploy"**. Vercel akan otomatis mendeteksi konfigurasi Next.js dan mempublikasikan website Anda ke alamat `https://es-puter-sari-rasa.vercel.app` (atau domain kustom Anda).
5. **Continuous Deployment**: Setiap perubahan atau update teks di GitHub akan langsung di-deploy secara otomatis ke website live Anda!
