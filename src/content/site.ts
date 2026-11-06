import { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "Es Puter Sari Rasa",
  tagline: "Tradisional • Segar Dingin • Manis Legit",
  subTagline: "Es puter tradisional dengan sentuhan daun pandan segar yang bikin kangen.",
  description:
    "Website profil resmi Es Puter Sari Rasa. Es puter tradisional bertekstur lembut dengan varian rasa Original, Stroberi, dan Cokelat disajikan dalam cup praktis berdaun pandan.",
  keywords: [
    "es puter",
    "es puter sari rasa",
    "es dung dung",
    "es tradisional",
    "kuliner tradisional",
    "es puter cup",
    "pesan es puter acara",
    "es puter solo",
    "es puter indonesia"
  ],
  url: "https://es-puter-sari-rasa.vercel.app",

  // Data Kontak & Bisnis (TODO: Lengkapi dengan data asli pemilik usaha)
  whatsapp: "6281234567890", // TODO: Ganti dengan nomor WhatsApp aktif pemilik (format 62...)
  instagramHandle: "@esputersarirasa", // TODO: Ganti dengan username Instagram asli
  instagram: "https://instagram.com/TODO_username", // TODO: Ganti dengan tautan profil IG asli
  address: "TODO: Alamat gerai / tempat produksi usaha (mis. Jl. Slamet Riyadi No. XX, Surakarta)", // TODO: Isi alamat lengkap
  openingHours: "TODO: Setiap Hari 10.00 - 20.00 WIB (atau sesuai jam operasional)", // TODO: Isi jam operasional
  mapsUrl: "", // TODO: Tempelkan link Google Maps usaha bila sudah terdaftar di Google Maps
  email: "sarirasa.esputer@gmail.com", // TODO: Isi email bisnis

  // Varian Rasa Produk
  flavors: [
    {
      id: "original",
      name: "Original Santan Pandan",
      tagline: "Gurih santan kelapa murni dengan semerbak aroma pandan alami.",
      desc: "Varian klasik legendaris yang mengedepankan cita rasa santan kelapa gurih berpadu manis pas dan aroma daun pandan asli yang harum.",
      price: null, // TODO: Isi nominal harga per cup (mis. 5000) jika sudah final
      accent: "cream",
      colorHex: "#FAF1DF",
      bgLightHex: "#FFF8EE",
      badge: "Paling Favorit",
      notes: "Santan kelapa murni, gula tebu asli, daun pandan wangi.",
    },
    {
      id: "stroberi",
      name: "Stroberi Manis Segar",
      tagline: "Sensasi buah stroberi manis dengan kesegaran dingin alami.",
      desc: "Paduan rasa buah stroberi yang manis segar dengan kelembutan tekstur es puter, memberikan sentuhan ceria di setiap sendokannya.",
      price: null, // TODO: Isi nominal harga per cup jika sudah final
      accent: "pink",
      colorHex: "#F2A7B8",
      bgLightHex: "#FDF2F4",
      badge: "Varian Ceria",
      notes: "Ekstrak stroberi asli, santan lembut, pemanis alami.",
    },
    {
      id: "cokelat",
      name: "Cokelat Legit Lembut",
      tagline: "Kelezatan cokelat premium berpadu gurih lembut tradisional.",
      desc: "Bagi pecinta cokelat sejati, varian ini menghadirkan rasa kakao yang pekat, legit, dan lumer lembut di lidah bersama dinginnya es puter.",
      price: null, // TODO: Isi nominal harga per cup jika sudah final
      accent: "choco",
      colorHex: "#5A3523",
      bgLightHex: "#F8F1EB",
      badge: "Best Seller Anak Muda",
      notes: "Cokelat pilihan, susu, santan kelapa, taburan lembut.",
    },
  ],

  // 4 Poin Keunggulan (Kenapa Sari Rasa)
  advantages: [
    {
      id: "putar-tradisional",
      title: "Diputar Cara Tradisional",
      desc: "Proses pemutaran drum es secara konsisten menghasilkan tekstur butiran es yang sangat lembut dan lumer di mulut.",
      icon: "rotate-cw",
    },
    {
      id: "daun-pandan-asli",
      title: "Aroma Daun Pandan Alami",
      desc: "Disajikan cantik dengan hiasan irisan daun pandan segar yang memberikan aroma wangi khas tradisi Nusantara.",
      icon: "sparkles",
    },
    {
      id: "cup-sendok-praktis",
      title: "Cup Praktis & Higienis",
      desc: "Dikemas rapi dalam cup mungil bersegel lengkap dengan sendok kecil, siap dinikmati kapan saja tanpa repot.",
      icon: "package-check",
    },
    {
      id: "tiga-pilihan-rasa",
      title: "Tiga Rasa Ramah Semua Usia",
      desc: "Koleksi rasa Original, Stroberi, dan Cokelat yang memikat hati dari anak-anak, remaja, hingga orang tua.",
      icon: "heart",
    },
  ],

  // Alur Proses Pembuatan
  processSteps: [
    {
      step: 1,
      title: "Siapkan Bahan Pilihan",
      shortDesc: "Kelapa segar, daun pandan wangi, dan gula tebu alami diseleksi dengan higienis.",
      detail: "Bahan dasar direbus perlahan agar saripati santan dan aroma pandan menyatu sempurna menjadi adonan es puter.",
      timing: "Langkah Awal",
    },
    {
      step: 2,
      title: "Diputar Hingga Lembut",
      shortDesc: "Adonan dimasukkan tabung baja keliling es batu dan garam kasar, diputar ritmis.",
      detail: "Proses pendinginan perlahan sambil diputar menghasilkan kristal es mikroskopis bertekstur creamy alami tanpa bahan pengembang kimia.",
      timing: "Proses Inti",
    },
    {
      step: 3,
      title: "Pengemasan Cepat & Rapi",
      shortDesc: "Es dipindahkan ke cup dalam hitungan detik agar kualitas dingin tetap terjaga prima.",
      detail: "Dilengkapi irisan daun pandan segar, sendok mungil, lalu ditutup rapat dan disimpan dalam kotak pendingin higienis.",
      timing: "Kunci Kualitas",
    },
    {
      step: 4,
      title: "Disajikan Segar & Dingin",
      shortDesc: "Siap disantap langsung atau dikirimkan ke pelanggan untuk berbagai momen bahagia.",
      detail: "Cocok untuk santapan siang hari, suguhan acara keluarga, arisan, hingga pesta hajatan istimewa.",
      timing: "Momen Menikmati",
    },
  ],
  processNote:
    "Catatan Kualitas: Es puter dikemas secara cepat dan terjadwal agar tekstur dingin dan kelembutannya tetap sempurna di tengah cuaca hangat tropis.",

  // Galeri Foto & Kemasan
  gallery: [
    {
      id: "g1",
      title: "Cup Es Puter Original",
      category: "Produk",
      caption: "Sajian cup mungil Es Puter Original berhias daun pandan segar dan sendok kayu mungil.",
      alt: "Es puter original dalam cup kecil dengan daun pandan",
      imageSrc: "/images/gallery-original.svg",
      width: 600,
      height: 450,
    },
    {
      id: "g2",
      title: "Trio Varian Rasa",
      category: "Produk",
      caption: "Tiga cup varian rasa lengkap: Stroberi ceria, Original santan, dan Cokelat legit.",
      alt: "Tiga cup es puter sari rasa stroberi original cokelat",
      imageSrc: "/images/gallery-trio.svg",
      width: 600,
      height: 450,
    },
    {
      id: "g3",
      title: "Identitas Baru Kemasan",
      category: "Kemasan",
      caption: "Desain kemasan baru dengan logo resmi, lingkaran marun, dan detail ornamen emas.",
      alt: "Kemasan baru es puter sari rasa",
      imageSrc: "/images/gallery-packaging.svg",
      width: 600,
      height: 450,
    },
    {
      id: "g4",
      title: "Proses Pemutaran Es",
      category: "Proses",
      caption: "Putaran drum tradisional menghasilkan tekstur es yang lembut dan lumer sempurna.",
      alt: "Proses pembuatan es puter tradisional diputar",
      imageSrc: "/images/gallery-process.svg",
      width: 600,
      height: 450,
    },
    {
      id: "g5",
      title: "Varian Stroberi Dingin",
      category: "Produk",
      caption: "Varian stroberi dengan warna merah muda lembut dan sensasi buah manis segar.",
      alt: "Cup es puter rasa stroberi sari rasa",
      imageSrc: "/images/gallery-strawberry.svg",
      width: 600,
      height: 450,
    },
    {
      id: "g6",
      title: "Varian Cokelat Manis Gurih",
      category: "Produk",
      caption: "Kaya akan rasa cokelat pekat yang berpadu dengan gurih santan tradisional.",
      alt: "Cup es puter rasa cokelat sari rasa",
      imageSrc: "/images/gallery-chocolate.svg",
      width: 600,
      height: 450,
    },
  ],

  // Mockup Postingan Instagram
  socialPosts: [
    {
      id: "post-1",
      caption: "Cuaca panas paling pas ditemani segarnya Es Puter Sari Rasa Original! Wangi pandannya bikin rileks 🍃🍨",
      likes: 142,
      comments: 18,
      tags: ["#EsPuterSariRasa", "#KulinerTradisional", "#SegarDingin"],
      imageSrc: "/images/insta-post-1.svg",
    },
    {
      id: "post-2",
      caption: "Varian Stroberi vs Cokelat, kamu tim yang mana nih? Keduanya sama-sama legit dan lembut di lidah! ✨🍓🍫",
      likes: 215,
      comments: 34,
      tags: ["#VarianRasa", "#EsPuterModern", "#ManisLegit"],
      imageSrc: "/images/insta-post-2.svg",
    },
    {
      id: "post-3",
      caption: "Terima kasih pesanan 150 cup untuk acara arisan keluarga hari ini. Dikemas cepat dan sampai dalam keadaan beku sempurna! 🎉",
      likes: 189,
      comments: 12,
      tags: ["#PesananAcara", "#Hajatan", "#EsPuterCup"],
      imageSrc: "/images/insta-post-3.svg",
    },
  ],

  // Perjalanan Brand (Transformasi Sebelum & Sesudah)
  brandJourney: {
    beforeLabel: "Sebelum (Awal Mula)",
    beforeDesc:
      "Awalnya dijual menggunakan cup plastik polos tanpa label, merek belum dikenal, dan jangkauan promosi terbatas pada lingkaran pertemanan terdekat.",
    beforeImage: "/images/brand-before.svg",
    afterLabel: "Sesudah (Identitas Sari Rasa)",
    afterDesc:
      "Tampil percaya diri dengan identitas brand matang: logo terstandar, tiga varian rasa, cup berdaun pandan, kemasan higienis, dan media sosial terstruktur.",
    afterImage: "/images/brand-after.svg",
    logoMeanings: [
      {
        title: "Scoop Es & Daun Pandan",
        meaning: "Melambangkan keaslian resep es puter tradisional berbahan santan murni dan aroma wangi pandan alami tanpa perisa buatan berlebihan.",
        symbolism: "Keaslian & Kesegaran Alami",
      },
      {
        title: "Cup & Sendok Mungil",
        meaning: "Mewakili kepraktisan menikmati kuliner tradisional zaman dahulu dalam format modern yang mudah dibawa, higienis, dan ramah anak-anak.",
        symbolism: "Praktis & Higienis",
      },
      {
        title: "Warna Marun & Tipografi Serif",
        meaning: "Warna merah marun dan krem hangat mencerminkan kehangatan nostalgia, sedangkan huruf serif miring menegaskan nilai estetika klasik berkualitas.",
        symbolism: "Nostalgia & Kualitas",
      },
    ],
  },

  // FAQ (Pertanyaan Umum)
  faqs: [
    {
      id: "faq-1",
      question: "Apa saja varian rasa yang tersedia di Es Puter Sari Rasa?",
      answer:
        "Saat ini tersedia 3 varian rasa favorit: Original (santan gurih pandan alami), Stroberi (manis buah segar), dan Cokelat (legit lembut memikat).",
    },
    {
      id: "faq-2",
      question: "Apakah bisa memesan dalam jumlah banyak untuk acara (arisan/hajatan)?",
      answer:
        "Sangat bisa! Kami menerima pesanan cup untuk arisan, ulang tahun, syukuran, hingga pernikahan. Kami menyarankan pemesanan minimal H-1 atau H-2 sebelum acara agar persiapan lebih maksimal.",
    },
    {
      id: "faq-3",
      question: "Bagaimana cara melakukan pemesanan?",
      answer:
        "Pemesanan sangat mudah melalui WhatsApp resmi kami. Klik tombol 'Pesan via WhatsApp' di website ini, sebutkan varian rasa dan jumlah cup, lalu kami akan mengonfirmasi ketersediaan dan pengiriman.",
    },
    {
      id: "faq-4",
      question: "Apakah Es Puter Sari Rasa bisa diantar (delivery)?",
      answer:
        "TODO: Konfirmasi jangkauan pengiriman lokal pemilik (kami melayani pesan antar untuk area sekitar lokasi usaha dengan kemasan khusus pendingin).",
      isPending: true,
    },
    {
      id: "faq-5",
      question: "Berapa lama es puter dapat bertahan di suhu ruang?",
      answer:
        "Karena tidak menggunakan bahan pengawet atau pengembang kimia, di suhu ruang terbuka es puter bertahan sekitar 20-30 menit. Namun dalam coolbox tertutup es dapat bertahan beku hingga 3-4 jam.",
    },
    {
      id: "faq-6",
      question: "Berapa harga per cup Es Puter Sari Rasa?",
      answer:
        "TODO: Harga pasti dapat ditanyakan langsung melalui chat WhatsApp kami (kami juga menyediakan paket hemat khusus pemesanan jumlah besar).",
      isPending: true,
    },
  ],
};
