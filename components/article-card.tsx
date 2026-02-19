import { Share2 } from "lucide-react";

interface Article {
    id: number;
    title: string;
    excerpt?: string;
    category: string;
    author: string;
    date: string;
    image?: string;
    featured?: boolean;
    size?: "sm" | "md" | "lg";
}

export default function ArticleCard({ article, size = "md" }: { article: Article; size?: "sm" | "md" | "lg" }) {
    if (size === "lg") {
        return (
            <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-sm mb-3 aspect-[16/9]">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8a6a3a] bg-[#f0e8d4] px-2 py-0.5 rounded-sm">
                        {article.category}
                    </span>
                    <span className="text-[10px] text-[#8a7a6a]">•</span>
                    <span className="text-[10px] text-[#8a7a6a]">{article.author}</span>
                    <span className="text-[10px] text-[#8a7a6a]">•</span>
                    <span className="text-[10px] text-[#8a7a6a]">{article.date}</span>
                </div>
                <h2 className="font-serif text-xl font-bold text-[#1a1208] leading-snug group-hover:text-[#8a6a3a] transition-colors line-clamp-3">
                    {article.title}
                </h2>
                {article.excerpt && (
                    <p className="mt-2 text-xs text-[#5a4a3a] leading-relaxed line-clamp-4">{article.excerpt}</p>
                )}
            </div>
        );
    }

    if (size === "sm") {
        return (
            <div className="group flex items-start gap-3 cursor-pointer py-2 border-b border-[#e8dcc8] last:border-0">
                {article.image && (
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-sm">
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${article.image})` }}
                        />
                    </div>
                )}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-1">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8a6a3a]">{article.category}</span>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#1a1208] leading-snug group-hover:text-[#8a6a3a] transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                    <p className="text-[10px] text-[#8a7a6a] mt-0.5">{article.date} — {article.author}</p>
                </div>
            </div>
        );
    }

    // md - default
    return (
        <div className="group cursor-pointer border border-[#e8dcc8] rounded-sm p-4 hover:border-[#c8b89a] transition-colors bg-white/40">
            {article.image && (
                <div className="relative overflow-hidden rounded-sm mb-3 aspect-[4/3]">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${article.image})` }}
                    />
                </div>
            )}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8a6a3a]">{article.category}</span>
                    <span className="text-[10px] text-[#8a7a6a]">•</span>
                    <span className="text-[10px] text-[#8a7a6a]">{article.author}</span>
                    <span className="text-[10px] text-[#8a7a6a]">•</span>
                    <span className="text-[10px] text-[#8a7a6a]">{article.date}</span>
                </div>
                <button className="text-[#8a7a6a] hover:text-[#1a1208] transition-colors opacity-0 group-hover:opacity-100">
                    <Share2 size={13} />
                </button>
            </div>
            <h3 className="font-serif text-base font-bold text-[#1a1208] leading-snug group-hover:text-[#8a6a3a] transition-colors line-clamp-3">
                {article.title}
            </h3>
            {article.excerpt && (
                <p className="mt-2 text-xs text-[#5a4a3a] leading-relaxed line-clamp-3">{article.excerpt}</p>
            )}
        </div>
    );
}