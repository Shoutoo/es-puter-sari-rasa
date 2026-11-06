import Image from "next/image";
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import { site } from "@/content/site";

export function SocialMedia() {
  return (
    <section
      id="sosial-media"
      className="py-20 sm:py-28 bg-cream-50 text-maroon-900 relative"
      aria-label="Media Sosial Instagram"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-gold-400/50 text-maroon-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Instagram className="w-3.5 h-3.5 text-maroon-700" />
            <span>Koneksi Komunitas</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-bold text-maroon-900">
            Ikuti Keseharian Kami di Instagram
          </h2>
          <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed">
            Dapatkan update seputar produksi harian, promo menarik, dan cerita di balik dapur Es Puter Sari Rasa.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        {/* Instagram Post Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {site.socialPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-gold-400/30 hover:border-gold-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Mockup Instagram Post Header */}
                <div className="p-4 flex items-center justify-between border-b border-cream-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-maroon-700 p-0.5 border border-gold-400 flex items-center justify-center">
                      <span className="text-xs">🍨</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-maroon-900">
                        {site.instagramHandle}
                      </p>
                      <p className="text-[10px] text-maroon-900/60">
                        Es Puter Sari Rasa
                      </p>
                    </div>
                  </div>
                  <Instagram className="w-4 h-4 text-maroon-700/60" />
                </div>

                {/* Post Image Container */}
                <div className="relative aspect-square w-full bg-cream-100 overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Likes and Stats */}
                <div className="p-4 pb-2 flex items-center gap-4 text-xs font-semibold text-maroon-900">
                  <div className="flex items-center gap-1.5 text-pink-500">
                    <Heart className="w-4 h-4 fill-current" />
                    <span>{post.likes} suka</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-maroon-900/70">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments} komentar</span>
                  </div>
                </div>

                {/* Caption and Tags */}
                <div className="px-4 pb-4 text-xs text-maroon-900/85 leading-relaxed">
                  <span className="font-bold text-maroon-900 mr-1.5">
                    {site.instagramHandle}
                  </span>
                  {post.caption}
                  <div className="mt-2 flex flex-wrap gap-1 text-[11px] text-pandan-600 font-medium">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow CTA Button */}
        <div className="text-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-maroon-700 via-maroon-500 to-maroon-700 hover:opacity-95 text-cream-50 font-bold px-8 py-4 rounded-full shadow-floating transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-4 focus:ring-maroon-700/40"
          >
            <Instagram className="w-5 h-5" />
            <span>Ikuti {site.instagramHandle} di Instagram</span>
            <ExternalLink className="w-4 h-4 text-gold-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
