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

  // Data Kontak & Bisnis Resmi
  whatsapp: "6289662711414",
  instagramHandle: "@sarirasa.esputerr_",
  instagram: "https://www.instagram.com/sarirasa.esputerr_/",
  address: "Jalan Merak 6 No 14, Gumunggung, Gilingan, Banjarsari, Surakarta 57134",
  openingHours: "Setiap Hari 10.00 - 20.00 WIB",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jalan+Merak+6+No+14+Gumunggung+Gilingan+Banjarsari+Surakarta+57134",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Jalan%20Merak%206%20No%2014%2C%20Gumunggung%2C%20Gilingan%2C%20Banjarsari%2C%20Surakarta%2C%20Jawa%20Tengah%2057134&t=&z=16&ie=UTF8&iwloc=&output=embed",
  email: "sarirasa.esputer@gmail.com",

  // Varian Rasa Produk (Menampilkan foto produk resolusi tinggi dengan hiasan daun pandan & sendok)
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
      desc: "Proses pemutaran tabung drum es dengan es batu dan garam kasar menghasilkan tekstur butiran es yang sangat lembut dan lumer di mulut.",
      icon: "rotate-cw",
    },
    {
      id: "daun-pandan-asli",
      title: "Aroma Daun Pandan Alami",
      desc: "Setiap cup disajikan cantik dengan hiasan irisan daun pandan segar asli yang memberikan aroma harum tradisi Nusantara.",
      icon: "sparkles",
    },
    {
      id: "cup-sendok-praktis",
      title: "Cup Praktis & Higienis",
      desc: "Dikemas rapi dalam cup mungil lengkap dengan sendok, siap dinikmati kapan saja dan sangat cocok untuk suguhan berbagai acara.",
      icon: "package-check",
    },
    {
      id: "tiga-pilihan-rasa",
      title: "Tiga Rasa Ramah Semua Usia",
      desc: "Pilihan rasa Original santan, Stroberi segar, dan Cokelat legit yang memikat hati dari anak-anak hingga orang dewasa.",
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
      detail: "Proses pendinginan perlahan sambil diputar menghasilkan kristal es mikroskopis bertekstur lembut alami tanpa bahan pengembang kimia.",
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

  // Galeri Foto & Kemasan (Foto Asli Dokumentasi Usaha & Produk)
  gallery: [
    {
      id: "g1",
      title: "Deretan Cup Es Puter Siap Saji",
      category: "Produk",
      caption: "Dokumentasi asli produksi cup Es Puter Sari Rasa dengan irisan daun pandan segar dan sendok mungil.",
      alt: "Foto asli deretan cup es puter sari rasa berdaun pandan",
      imageSrc: "/images/real-batch-cups.jpeg",
      width: 600,
      height: 450,
    },
    {
      id: "g2",
      title: "Tabung Putar Baja Tradisional",
      category: "Proses",
      caption: "Tabung drum baja tradisional di dalam ember pendingin dengan es dan garam kasar untuk memutar es puter.",
      alt: "Proses pembuatan es puter dengan tabung drum tradisional",
      imageSrc: "/images/real-process-1.jpeg",
      width: 600,
      height: 450,
    },
    {
      id: "g3",
      title: "Pengemasan Cepat & Higienis",
      category: "Proses",
      caption: "Tim bergotong-royong menyendok es puter langsung dari tabung putar ke dalam cup agar tidak meleleh.",
      alt: "Proses penuangan es puter ke dalam cup kecil",
      imageSrc: "/images/real-process-2.jpeg",
      width: 600,
      height: 450,
    },
    {
      id: "g4",
      title: "Trio Varian Rasa Lengkap",
      category: "Produk",
      caption: "Tiga cup varian rasa lengkap: Original santan pandan, Stroberi segar, dan Cokelat legit.",
      alt: "Trio varian es puter sari rasa",
      imageSrc: "/images/hero-trio.jpg",
      width: 600,
      height: 450,
    },
    {
      id: "g5",
      title: "Cup Varian Stroberi",
      category: "Produk",
      caption: "Penyajian cup es puter rasa buah stroberi yang manis dan segar dengan irisan daun pandan.",
      alt: "Cup es puter stroberi sari rasa",
      imageSrc: "/images/product-strawberry.jpg",
      width: 600,
      height: 450,
    },
    {
      id: "g6",
      title: "Cup Varian Cokelat",
      category: "Produk",
      caption: "Penyajian cup es puter cokelat legit dengan kelembutan santan dan aroma pandan alami.",
      alt: "Cup es puter cokelat sari rasa",
      imageSrc: "/images/product-chocolate.jpg",
      width: 600,
      height: 450,
    },
  ],

  // Mockup Postingan Instagram Menggunakan Foto Asli Akun @sarirasa.esputerr_
  socialPosts: [
    {
      id: "post-1",
      caption: "Produksi hari ini siap meluncur! Wangi pandan segarnya langsung tercium saat cup dibuka 🍃🍨",
      likes: 184,
      comments: 26,
      tags: ["#EsPuterSariRasa", "#KulinerTradisional", "#SegarDingin"],
      imageSrc: "/images/instagram-post-1.jpg",
    },
    {
      id: "post-2",
      caption: "Tabung putar tradisional dan cup siap saji dengan sendok dan daun pandan segar! ✨🍓🍫",
      likes: 247,
      comments: 39,
      tags: ["#VarianRasa", "#EsPuterModern", "#ManisLegit"],
      imageSrc: "/images/instagram-post-2.jpg",
    },
    {
      id: "post-3",
      caption: "Dibalik kelembutan Es Puter Sari Rasa, ada proses pemutaran dan pengemasan cepat agar kualitas es tetap beku sempurna! 🎉",
      likes: 203,
      comments: 17,
      tags: ["#PesananAcara", "#DapurSariRasa", "#EsPuterCup"],
      imageSrc: "/images/instagram-post-3.jpg",
    },
  ],

  // Perjalanan Brand (Transformasi Sebelum & Sesudah)
  brandJourney: {
    beforeLabel: "Sebelum (Awal Mula Usaha)",
    beforeDesc:
      "Awalnya dijual menggunakan wadah cup polos tanpa identitas merek yang jelas dan hanya diedarkan secara terbatas pada lingkaran terdekat.",
    beforeImage: "/images/real-batch-cups.jpeg",
    afterLabel: "Sesudah (Identitas Sari Rasa)",
    afterDesc:
      "Tampil percaya diri dengan identitas brand matang: logo terstandar, tiga varian rasa, cup berdaun pandan, kemasan higienis, dan media sosial terstruktur.",
    afterImage: "/images/hero-trio.jpg",
    logoMeanings: [
      {
        title: "Scoop Es & Daun Pandan",
        meaning: "Melambangkan keaslian resep es puter tradisional berbahan santan murni dan aroma wangi pandan alami tanpa perisa buatan berlebihan.",
        symbolism: "Keaslian & Kesegaran Alami",
      },
      {
        title: "Cup & Sendok Mungil",
        meaning: "Mewakili kepraktisan menikmati kuliner tradisional zaman dahulu dalam format modern yang mudah dibawa, higienis, dan ramah keluarga.",
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
        "Bisa! Kami melayani pesan antar (delivery) untuk wilayah Surakarta (Solo) dan sekitarnya dari gerai dapur kami di Jl. Merak 6 No. 14, Gumunggung, Gilingan, Banjarsari. Kami mengemas es dalam wadah khusus pendingin agar tetap dingin dan beku sempurna saat tiba.",
      isPending: false,
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
