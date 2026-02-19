"use client";
import { useEffect, useRef } from "react";

const headlines = [
    "Catastrophic Volcanic Eruption in Indonesia Forces Mass Evacuations",
    "Record-Breaking Sale: Rare Picasso Painting Fetches $150 Million",
    "Archaeologists Discover World's Largest and Oldest Tomb in Egypt",
    "Hurricane Fiona Makes Landfall in Florida",
    "NASA Confirms Discovery of Earth-Like Planet",
];

export default function BreakingBanner() {
    return (
        <div className="bg-[#8a2010] text-white text-[11px] font-medium flex items-center overflow-hidden">
            <div className="flex-shrink-0 bg-[#5a0e08] px-3 py-1.5 font-bold uppercase tracking-widest text-amber-300 text-[10px] whitespace-nowrap">
                Breaking
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...headlines, ...headlines].map((h, i) => (
                        <span key={i} className="inline-block px-8 py-1.5 opacity-90">
                            {h}
                            <span className="mx-4 text-amber-400">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}