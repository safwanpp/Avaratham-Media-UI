import { Share2 } from "lucide-react";

interface PopularItem {
    rank: number;
    title: string;
    date: string;
    author: string;
}

export default function PopularArticles({ items, badge }: { items: PopularItem[]; badge?: string }) {
    return (
        <div className="bg-white/50 border border-[#e8dcc8] rounded-sm p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-sm font-bold text-[#1a1208] uppercase tracking-wider">Popular Article Now</h3>
                {badge && (
                    <span className="text-[10px] font-bold text-white bg-amber-600 px-2 py-0.5 rounded-sm">
                        {badge}
                    </span>
                )}
            </div>

            <div className="space-y-3">
                {items.map((item) => (
                    <div key={item.rank} className="group flex items-start gap-3 cursor-pointer">
                        <span className="text-lg font-serif font-bold text-[#c8b89a] leading-none mt-0.5 w-5 flex-shrink-0">
                            {String(item.rank).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-[#1a1208] leading-snug group-hover:text-[#8a6a3a] transition-colors line-clamp-2">
                                {item.title}
                            </h4>
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-[9px] text-[#8a7a6a]">—</span>
                                <span className="text-[9px] text-[#8a7a6a]">{item.date},</span>
                                <span className="text-[9px] text-[#8a7a6a]">{item.author}</span>
                            </div>
                        </div>
                        <button className="text-[#c8b89a] hover:text-[#8a6a3a] transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0">
                            <Share2 size={11} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}