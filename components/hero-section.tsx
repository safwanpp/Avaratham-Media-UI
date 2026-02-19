import { Share2 } from "lucide-react";

interface HeroArticle {
    title: string;
    category: string;
    author: string;
    date: string;
    excerpt: string;
    image: string;
}

export default function HeroSection({ article }: { article: HeroArticle }) {
    return (
        <div className="relative group cursor-pointer overflow-hidden bg-[#1a1208] rounded-sm">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${article.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

            <div className="relative z-10 flex flex-col justify-end h-full min-h-[420px] p-6">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-sm">
                            {article.category}
                        </span>
                        <span className="text-[10px] text-white/60">•</span>
                        <span className="text-[10px] text-white/60">{article.author}</span>
                        <span className="text-[10px] text-white/60">•</span>
                        <span className="text-[10px] text-white/60">{article.date}</span>
                    </div>
                    <button className="text-white/50 hover:text-white transition-colors">
                        <Share2 size={14} />
                    </button>
                </div>

                <h1 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-3 group-hover:text-amber-100 transition-colors">
                    {article.title}
                </h1>

                <p className="text-sm text-white/70 leading-relaxed line-clamp-3">{article.excerpt}</p>
            </div>
        </div>
    );
}