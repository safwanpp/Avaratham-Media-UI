interface SideItem {
    rank: number;
    title: string;
    date: string;
    author: string;
}

interface JobAd {
    title: string;
    company: string;
    requirements: string[];
    cta: string;
}

export default function Sidebar({ items, jobAd }: { items: SideItem[]; jobAd?: JobAd }) {
    return (
        <aside className="space-y-6">
            {/* Top news list */}
            <div className="border-l-2 border-[#8a6a3a] pl-4">
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.rank} className="group cursor-pointer">
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold text-[#8a6a3a] mt-0.5 w-4 flex-shrink-0">
                                    {String(item.rank).padStart(2, "0")}
                                </span>
                                <div>
                                    <h4 className="text-xs font-semibold text-[#1a1208] leading-snug group-hover:text-[#8a6a3a] transition-colors line-clamp-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-[9px] text-[#8a7a6a] mt-1">— {item.date}, {item.author}</p>
                                </div>
                            </div>
                            <div className="mt-2 border-b border-dashed border-[#e8dcc8]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Job/Ad widget */}
            {jobAd && (
                <div className="bg-[#1a1208] text-[#f5f0e8] rounded-sm p-4">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                        {jobAd.company}
                    </div>
                    <h4 className="font-serif text-base font-bold mb-3 leading-snug">{jobAd.title}</h4>
                    <ul className="space-y-1 mb-4">
                        {jobAd.requirements.map((req, i) => (
                            <li key={i} className="text-[10px] text-[#c8b89a] flex items-start gap-2">
                                <span className="text-amber-500 mt-0.5">→</span>
                                {req}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full text-center text-[10px] font-bold uppercase tracking-widest bg-amber-600 hover:bg-amber-500 text-white py-2 rounded-sm transition-colors">
                        {jobAd.cta}
                    </button>
                </div>
            )}
        </aside>
    );
}