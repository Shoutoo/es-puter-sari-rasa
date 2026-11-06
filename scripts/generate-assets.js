const fs = require("fs");
const path = require("path");

const imgDir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Hero illustration
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%" fill="none">
  <defs>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E8C27A" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#6B1414" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#4A0E0E" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Halo aura -->
  <circle cx="300" cy="320" r="240" fill="url(#halo)"/>

  <!-- Ornaments: Pandan Leaves floating -->
  <g transform="translate(110, 140) rotate(-25)">
    <path d="M0 60 C-15 30 10 10 30 0 C30 25 25 45 0 60 Z" fill="#4E7D45" opacity="0.85"/>
    <path d="M12 55 L22 15" stroke="#CFE3C4" stroke-width="1.5" opacity="0.6"/>
  </g>
  <g transform="translate(460, 180) rotate(35)">
    <path d="M0 70 C-20 35 15 10 40 0 C40 30 30 50 0 70 Z" fill="#6DA663" opacity="0.9"/>
    <path d="M15 65 L28 18" stroke="#CFE3C4" stroke-width="1.5" opacity="0.6"/>
  </g>

  <!-- Main Cup with Filter -->
  <g filter="url(#shadow)">
    <!-- Base Plate/Mat -->
    <ellipse cx="300" cy="480" rx="170" ry="24" fill="#4A0E0E" opacity="0.25"/>

    <!-- Cup Body -->
    <path d="M190 310 L220 460 Q300 475 380 460 L410 310 Z" fill="#FFF8EE" stroke="#E8C27A" stroke-width="4"/>
    
    <!-- Cup Rim -->
    <ellipse cx="300" cy="310" rx="110" ry="16" fill="#F6E7CF" stroke="#E8C27A" stroke-width="4"/>

    <!-- Cup Label Emblem -->
    <rect x="235" y="345" width="130" height="75" rx="8" fill="#6B1414" stroke="#E8C27A" stroke-width="2"/>
    <text x="300" y="375" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#FFF8EE">Es Puter</text>
    <text x="300" y="398" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="13" fill="#E8C27A" letter-spacing="2">SARI RASA</text>
    <text x="300" y="412" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="7" fill="#CFE3C4" letter-spacing="1">TRADISIONAL</text>

    <!-- Ice Cream Scoops -->
    <circle cx="260" cy="270" r="55" fill="#5A3523"/>
    <circle cx="250" cy="260" r="45" fill="#6B3F2A" opacity="0.8"/>

    <!-- Strawberry Scoop -->
    <circle cx="340" cy="265" r="55" fill="#F2A7B8"/>
    <circle cx="330" cy="255" r="45" fill="#F9C5D1" opacity="0.7"/>

    <!-- Top Scoop (Original Santan Pandan) -->
    <circle cx="300" cy="225" r="62" fill="#FFF8EE" stroke="#ECD5B3" stroke-width="2"/>
    <circle cx="290" cy="210" r="50" fill="#FFFDF8"/>
    <path d="M260 250 Q290 270 340 250" stroke="#ECD5B3" stroke-width="3" fill="none"/>

    <!-- Fresh Pandan Leaf on Top -->
    <g transform="translate(295, 140)">
      <path d="M0 65 C-20 30 5 5 25 0 C25 25 15 45 0 65 Z" fill="#4E7D45"/>
      <path d="M0 65 C20 30 40 20 50 15 C35 35 20 50 0 65 Z" fill="#6DA663"/>
      <line x1="0" y1="65" x2="25" y2="5" stroke="#CFE3C4" stroke-width="1.5" opacity="0.7"/>
    </g>

    <!-- Mini Wooden Spoon -->
    <g transform="translate(370, 210) rotate(28)">
      <rect x="0" y="25" width="14" height="150" rx="6" fill="#ECD5B3" stroke="#C4A882" stroke-width="1.5"/>
      <ellipse cx="7" cy="22" rx="16" ry="24" fill="#FAF1DF" stroke="#C4A882" stroke-width="1.5"/>
    </g>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, "hero-ice-cream.svg"), heroSvg);

// Varian Cups
function createCup(name, scoopColor, scoopHighlight, flavorDetail) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" fill="none">
    <ellipse cx="200" cy="350" rx="100" ry="16" fill="#4A0E0E" opacity="0.1"/>
    <!-- Cup -->
    <path d="M125 190 L145 320 Q200 335 255 320 L275 190 Z" fill="#FFF8EE" stroke="#E8C27A" stroke-width="3"/>
    <ellipse cx="200" cy="190" rx="75" ry="12" fill="#F6E7CF" stroke="#E8C27A" stroke-width="3"/>
    <!-- Scoop -->
    <circle cx="200" cy="150" r="58" fill="${scoopColor}"/>
    <circle cx="190" cy="138" r="46" fill="${scoopHighlight}" opacity="0.75"/>
    ${flavorDetail}
    <!-- Label -->
    <rect x="155" y="225" width="90" height="55" rx="6" fill="#6B1414" stroke="#E8C27A" stroke-width="1.5"/>
    <text x="200" y="246" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="11" fill="#FFF8EE">Es Puter</text>
    <text x="200" y="262" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="10" fill="#E8C27A" letter-spacing="1">SARI RASA</text>
    <text x="200" y="273" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="7" fill="#FFF" letter-spacing="1">${name.toUpperCase()}</text>
    <!-- Spoon -->
    <g transform="translate(250, 130) rotate(25)">
      <rect x="0" y="15" width="10" height="110" rx="4" fill="#ECD5B3" stroke="#C4A882" stroke-width="1"/>
      <ellipse cx="5" cy="15" rx="11" ry="16" fill="#FAF1DF" stroke="#C4A882" stroke-width="1"/>
    </g>
  </svg>`;
}

fs.writeFileSync(path.join(imgDir, "cup-original.svg"), createCup("Original", "#FFF8EE", "#FFFFFF", `
  <!-- Pandan Leaf -->
  <g transform="translate(195, 85)">
    <path d="M0 45 C-12 20 5 5 18 0 C18 18 12 30 0 45 Z" fill="#4E7D45"/>
    <path d="M0 45 C12 20 28 15 35 10 C25 25 15 35 0 45 Z" fill="#6DA663"/>
  </g>
`));

fs.writeFileSync(path.join(imgDir, "cup-strawberry.svg"), createCup("Stroberi", "#F2A7B8", "#FBD3DC", `
  <!-- Strawberry accents -->
  <circle cx="180" cy="130" r="8" fill="#E53935" opacity="0.85"/>
  <circle cx="215" cy="140" r="7" fill="#E53935" opacity="0.85"/>
  <!-- Pandan Leaf -->
  <g transform="translate(195, 85)">
    <path d="M0 45 C-12 20 5 5 18 0 C18 18 12 30 0 45 Z" fill="#4E7D45"/>
    <path d="M0 45 C12 20 28 15 35 10 C25 25 15 35 0 45 Z" fill="#6DA663"/>
  </g>
`));

fs.writeFileSync(path.join(imgDir, "cup-chocolate.svg"), createCup("Cokelat", "#5A3523", "#744730", `
  <!-- Choco chips -->
  <rect x="175" y="125" width="8" height="8" rx="2" fill="#361D12"/>
  <rect x="210" y="135" width="9" height="7" rx="2" fill="#361D12"/>
  <!-- Pandan Leaf -->
  <g transform="translate(195, 85)">
    <path d="M0 45 C-12 20 5 5 18 0 C18 18 12 30 0 45 Z" fill="#4E7D45"/>
    <path d="M0 45 C12 20 28 15 35 10 C25 25 15 35 0 45 Z" fill="#6DA663"/>
  </g>
`));

// Before & After illustrations
const brandBeforeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="100%" height="100%" fill="none">
  <rect width="500" height="380" fill="#EDEAE3" rx="16"/>
  <ellipse cx="250" cy="310" rx="110" ry="16" fill="#000" opacity="0.08"/>
  <!-- Plain transparent plastic cup -->
  <path d="M170 140 L190 280 Q250 295 310 280 L330 140 Z" fill="#FFFFFF" fill-opacity="0.8" stroke="#B0B0B0" stroke-width="2"/>
  <ellipse cx="250" cy="140" rx="80" ry="14" fill="#E8E8E8" stroke="#B0B0B0" stroke-width="2"/>
  <!-- Plain generic scoop -->
  <circle cx="250" cy="110" r="58" fill="#F0ECE1" stroke="#D1CDC2" stroke-width="2"/>
  <!-- Badge: Polos Tanpa Merek -->
  <rect x="160" y="195" width="180" height="32" rx="6" fill="#757575"/>
  <text x="250" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">CUP POLOS TANPA LOGO</text>
  <text x="250" y="45" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#616161">KEMASAN LAMA (AWAL MULA)</text>
  <text x="250" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#757575">Belum memiliki identitas visual & jangkauan terbatas</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, "brand-before.svg"), brandBeforeSvg);

const brandAfterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="100%" height="100%" fill="none">
  <rect width="500" height="380" fill="#FAF1DF" rx="16"/>
  <ellipse cx="250" cy="310" rx="120" ry="18" fill="#4A0E0E" opacity="0.12"/>
  <!-- Modern branded cup -->
  <path d="M165 140 L185 280 Q250 295 315 280 L335 140 Z" fill="#FFF8EE" stroke="#E8C27A" stroke-width="3"/>
  <ellipse cx="250" cy="140" rx="85" ry="14" fill="#F6E7CF" stroke="#E8C27A" stroke-width="3"/>
  <!-- Creamy scoop -->
  <circle cx="250" cy="100" r="62" fill="#FFFDF8" stroke="#ECD5B3" stroke-width="2"/>
  <!-- Fresh Pandan -->
  <g transform="translate(245, 40)">
    <path d="M0 50 C-14 25 5 5 22 0 C22 22 15 35 0 50 Z" fill="#4E7D45"/>
    <path d="M0 50 C14 25 32 18 40 12 C30 30 18 40 0 50 Z" fill="#6DA663"/>
  </g>
  <!-- Wooden Spoon -->
  <g transform="translate(305, 85) rotate(26)">
    <rect x="0" y="15" width="12" height="120" rx="5" fill="#ECD5B3" stroke="#C4A882" stroke-width="1"/>
    <ellipse cx="6" cy="15" rx="13" ry="18" fill="#FAF1DF" stroke="#C4A882" stroke-width="1"/>
  </g>
  <!-- Official Sari Rasa Label -->
  <rect x="195" y="180" width="110" height="65" rx="8" fill="#6B1414" stroke="#E8C27A" stroke-width="2"/>
  <text x="250" y="204" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#FFF8EE">Es Puter</text>
  <text x="250" y="224" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="12" fill="#E8C27A" letter-spacing="2">SARI RASA</text>
  <text x="250" y="236" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="7" fill="#CFE3C4" letter-spacing="1">TRADISIONAL</text>
  <text x="250" y="45" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#6B1414">IDENTITAS RESMI BARU</text>
  <text x="250" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#4E7D45">Desain profesional, daun pandan & 3 varian rasa</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, "brand-after.svg"), brandAfterSvg);

// Gallery Items
const galleryItems = [
  { file: "gallery-original.svg", title: "Original Santan Pandan", color: "#FAF1DF", badge: "Original Klasik" },
  { file: "gallery-trio.svg", title: "Trio Tiga Varian", color: "#F6E7CF", badge: "3 Varian Rasa" },
  { file: "gallery-packaging.svg", title: "Kemasan Cup Higienis", color: "#FFF8EE", badge: "Kemasan Baru" },
  { file: "gallery-process.svg", title: "Proses Pemutaran Es", color: "#F0E4D2", badge: "Putaran Manual" },
  { file: "gallery-strawberry.svg", title: "Stroberi Manis Segar", color: "#FCE7EC", badge: "Varian Stroberi" },
  { file: "gallery-chocolate.svg", title: "Cokelat Legit Pekat", color: "#F4ECE6", badge: "Varian Cokelat" },
];

galleryItems.forEach(item => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%" fill="none">
    <rect width="600" height="450" fill="${item.color}" rx="16"/>
    <rect x="18" y="18" width="564" height="414" rx="12" stroke="#E8C27A" stroke-width="1.5" stroke-dasharray="6 4"/>
    <circle cx="300" cy="180" r="85" fill="#6B1414" opacity="0.08"/>
    <!-- Art Icon -->
    <circle cx="300" cy="175" r="48" fill="#6B1414"/>
    <text x="300" y="188" text-anchor="middle" font-family="sans-serif" font-size="34">🍨</text>
    <!-- Badge -->
    <rect x="200" y="245" width="200" height="34" rx="17" fill="#6B1414"/>
    <text x="300" y="267" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="#FFF8EE">${item.badge}</text>
    <text x="300" y="325" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="bold" font-size="22" fill="#4A0E0E">${item.title}</text>
    <text x="300" y="355" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#4E7D45">Es Puter Sari Rasa • Tradisional Berkualitas</text>
  </svg>`;
  fs.writeFileSync(path.join(imgDir, item.file), svg);
});

// Instagram Mockup Posts
[1, 2, 3].forEach(idx => {
  const postSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="100%" height="100%" fill="none">
    <rect width="450" height="450" fill="#FAF1DF" rx="16"/>
    <rect x="16" y="16" width="418" height="418" rx="12" stroke="#E8C27A" stroke-width="1.5"/>
    <circle cx="225" cy="190" r="95" fill="#6B1414" opacity="0.08"/>
    <circle cx="225" cy="185" r="50" fill="#6B1414"/>
    <text x="225" y="198" text-anchor="middle" font-size="36">🍨</text>
    <rect x="135" y="265" width="180" height="32" rx="16" fill="#6B1414"/>
    <text x="225" y="286" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF8EE">@esputersarirasa</text>
    <text x="225" y="335" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="16" fill="#4A0E0E">Momen Manis #${idx}</text>
  </svg>`;
  fs.writeFileSync(path.join(imgDir, "insta-post-" + idx + ".svg"), postSvg);
});

// Open Graph Image
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" fill="none">
  <rect width="1200" height="630" fill="#6B1414"/>
  <rect x="30" y="30" width="1140" height="570" rx="20" stroke="#E8C27A" stroke-width="3"/>
  <circle cx="950" cy="315" r="220" fill="#4A0E0E" opacity="0.4"/>
  <text x="100" y="220" font-family="Georgia, serif" font-style="italic" font-size="64" fill="#FFF8EE">Es Puter</text>
  <text x="100" y="290" font-family="sans-serif" font-weight="900" font-size="62" fill="#E8C27A" letter-spacing="6">SARI RASA</text>
  <line x1="100" y1="320" x2="650" y2="320" stroke="#E8C27A" stroke-width="3"/>
  <text x="100" y="370" font-family="sans-serif" font-weight="600" font-size="24" fill="#CFE3C4" letter-spacing="4">TRADISIONAL • SEGAR DINGIN • MANIS LEGIT</text>
  <text x="100" y="430" font-family="sans-serif" font-size="20" fill="#FAF1DF">Sensasi rasa santan pandan alami dalam kemasan cup praktis &amp; higienis.</text>
  <text x="950" y="340" text-anchor="middle" font-size="120">🍨</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, "og-image.svg"), ogSvg);

console.log("All graphic assets successfully created!");
