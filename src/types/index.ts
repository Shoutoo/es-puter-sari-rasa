export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  price: number | null;
  accent: "cream" | "pink" | "choco";
  colorHex: string;
  bgLightHex: string;
  badge?: string;
  notes: string;
}

export interface Advantage {
  id: string;
  title: string;
  desc: string;
  icon: "rotate-cw" | "sparkles" | "heart" | "package-check";
}

export interface ProcessStep {
  step: number;
  title: string;
  shortDesc: string;
  detail: string;
  timing: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Produk" | "Kemasan" | "Proses";
  caption: string;
  alt: string;
  imageSrc: string;
  width: number;
  height: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isPending?: boolean;
}

export interface SocialPost {
  id: string;
  caption: string;
  likes: number;
  comments: number;
  tags: string[];
  imageSrc: string;
}

export interface BrandJourneyPoint {
  title: string;
  meaning: string;
  symbolism: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  description: string;
  keywords: string[];
  url: string;
  whatsapp: string;
  instagram: string;
  instagramHandle: string;
  address: string;
  openingHours: string;
  mapsUrl: string;
  email: string;
  flavors: Flavor[];
  advantages: Advantage[];
  processSteps: ProcessStep[];
  processNote: string;
  gallery: GalleryItem[];
  faqs: FaqItem[];
  socialPosts: SocialPost[];
  brandJourney: {
    beforeLabel: string;
    beforeDesc: string;
    beforeImage: string;
    afterLabel: string;
    afterDesc: string;
    afterImage: string;
    logoMeanings: BrandJourneyPoint[];
  };
}
