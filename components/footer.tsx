import { PenLine, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1208] text-[#f5f0e8]">
            {/* Big brand bar */}
            <div className="border-b border-[#3a2a18] px-6 py-6 flex items-center justify-between">
                <div>
                    <p className="text-[10px] text-[#8a7a6a] uppercase tracking-widest mb-1">We&apos;re Located At</p>
                    <p className="text-xs text-[#c8b89a]">7297 East Old Maple Boulevard, Suite 209-B, Washington</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-[#8a7a6a] uppercase tracking-widest mb-1">Contact</p>
                    <p className="text-xs text-[#c8b89a]">(123) 420-9421</p>
                </div>
            </div>

            <div className="relative px-6 py-8 overflow-hidden">
                <span className="absolute right-0 bottom-0 text-[120px] md:text-[180px] font-serif font-black text-[#2a1e0e] leading-none select-none pointer-events-none">
                    perio News
                </span>
                <div className="relative z-10 flex flex-wrap gap-8 text-xs text-[#8a7a6a]">
                    <a href="#" className="hover:text-[#f5f0e8] transition-colors">Terms &amp; Services</a>
                    <a href="#" className="hover:text-[#f5f0e8] transition-colors">Our Blog</a>
                    <a href="#" className="hover:text-[#f5f0e8] transition-colors">FAQ</a>
                    <a href="#" className="hover:text-[#f5f0e8] transition-colors">Our Stories</a>
                </div>
                <div className="relative z-10 mt-4">
                    <button className="flex items-center gap-2 bg-[#f5f0e8] text-[#1a1208] text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-100 transition-colors">
                        <PenLine size={13} />
                        Write News
                    </button>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#3a2a18] px-6 py-3 flex items-center justify-between text-[10px] text-[#5a4a3a]">
                <div className="flex items-center gap-2">
                    <Globe size={11} />
                    <span>All right reserved</span>
                    <span className="mx-1">©</span>
                    <span className="font-semibold text-[#8a7a6a]">Paperio News 2025</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <span>We&apos;re Located At</span>
                    <span className="text-[#8a7a6a]">7297 East Old Maple Boulevard, Suite 209-B, Washington</span>
                    <span className="text-[#8a7a6a]">(123) 420-9421</span>
                </div>
            </div>
        </footer>
    );
}