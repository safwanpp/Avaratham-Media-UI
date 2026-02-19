import Header from "@/components/header";
import BreakingBanner from "@/components/breaking-banner";
import HeroSection from "@/components/hero-section";
import ArticleCard from "@/components/article-card";
import PopularArticles from "@/components/popular-articles";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import { Share2, ArrowRight } from "lucide-react";
import {
  heroArticle,
  featuredArticles,
  mainArticle,
  popularArticles,
  sidebarArticles,
  warArticle,
  designJobAd,
  composerJobAd,
} from "../data/article";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] font-sans">
      <BreakingBanner />
      <Header />

      <main className="max-w-[1280px] mx-auto px-4 py-6">
        {/* Primary grid: 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 mb-8">
          {/* Left column */}
          <div className="space-y-6">
            <ArticleCard article={featuredArticles[0]} size="md" />
          </div>

          {/* Center column - Hero */}
          <div className="space-y-4">
            <HeroSection article={heroArticle} />
            <PopularArticles items={popularArticles} badge="20 Now" />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <Sidebar items={sidebarArticles} />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 border-t border-[#c8b89a]" />
          <span className="text-[10px] uppercase tracking-widest text-[#8a7a6a] font-semibold">Latest Stories</span>
          <div className="flex-1 border-t border-[#c8b89a]" />
        </div>

        {/* Secondary grid: left articles + main article + right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6">
          {/* Left: small article + composer ad */}
          <div className="space-y-6">
            <ArticleCard article={featuredArticles[1]} size="md" />
            {/* Composer ad */}
            <div className="bg-gradient-to-br from-[#2a1a08] to-[#1a0e04] text-[#f5f0e8] rounded-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-amber-600 rounded-sm flex items-center justify-center text-xs font-bold">🎵</div>
                <div>
                  <div className="text-[9px] text-amber-400 uppercase tracking-widest font-bold">{composerJobAd.company}</div>
                  <div className="font-serif text-sm font-bold leading-snug">{composerJobAd.title}</div>
                </div>
              </div>
              <ol className="space-y-1 mb-4 list-decimal list-inside">
                {composerJobAd.requirements.map((req, i) => (
                  <li key={i} className="text-[10px] text-[#c8b89a]">{req}</li>
                ))}
              </ol>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors">
                Apply Now <ArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Center: main long article */}
          <div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-4 aspect-[16/9]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${mainArticle.image})` }}
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8a6a3a]">{mainArticle.category}</span>
                  <span className="text-[10px] text-[#8a7a6a]">•</span>
                  <span className="text-[10px] text-[#8a7a6a]">{mainArticle.author}</span>
                  <span className="text-[10px] text-[#8a7a6a]">•</span>
                  <span className="text-[10px] text-[#8a7a6a]">{mainArticle.date}</span>
                </div>
                <button className="text-[#8a7a6a] hover:text-[#1a1208] transition-colors">
                  <Share2 size={13} />
                </button>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1208] leading-tight group-hover:text-[#8a6a3a] transition-colors mb-4">
                {mainArticle.title}
              </h2>
              <p className="text-sm text-[#5a4a3a] leading-relaxed">{mainArticle.excerpt}</p>
              <button className="mt-4 flex items-center gap-2 text-xs font-bold text-[#8a6a3a] hover:text-[#5a3a1a] transition-colors uppercase tracking-wider">
                Continue Reading <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right: war article + design ad */}
          <div className="space-y-6">
            {/* War article */}
            <div className="group cursor-pointer border border-[#e8dcc8] rounded-sm overflow-hidden">
              <div className="relative overflow-hidden aspect-video">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${warArticle.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-400">{warArticle.category}</span>
                    <span className="text-[9px] text-white/60">•</span>
                    <span className="text-[9px] text-white/60">{warArticle.author}</span>
                  </div>
                  <h3 className="font-serif text-sm font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                    {warArticle.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Design job ad */}
            <div className="bg-[#1a1208] text-[#f5f0e8] rounded-sm p-4">
              <div className="text-amber-400 text-lg font-serif font-black mb-1 leading-tight">
                People ThaT Can Design
              </div>
              <div className="text-[10px] text-amber-600 font-bold uppercase tracking-widest mb-3">{designJobAd.company}</div>
              <ol className="space-y-1 mb-4 list-decimal list-inside">
                {designJobAd.requirements.map((req, i) => (
                  <li key={i} className="text-[10px] text-[#c8b89a]">{req}</li>
                ))}
              </ol>
              <button className="w-full text-center text-[10px] font-bold uppercase tracking-widest bg-amber-600 hover:bg-amber-500 text-white py-2 rounded-sm transition-colors">
                {designJobAd.cta}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}