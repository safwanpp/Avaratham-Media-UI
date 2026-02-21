"use client";
import { useEffect, useState } from "react";
import { Search, Menu, PenLine, Globe, ChevronDown, X } from "lucide-react";

const navLinks = [
  "Newspaper",
  "News",
  "World",
  "Business",
  "Art",
  "Lifestyle",
  "Sport",
  "Opinion",
  "Culture",
  "Politic",
  "Advertisement",
  "Job Portal",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f5f0e8] border-b border-[#c8b89a]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-2 border-b border-[#c8b89a]">
        <div className="md:flex hidden items-center gap-3 text-xs text-[#5a4a3a]">
          <Globe size={14} />
          {/* <span className="font-medium tracking-widest">PAPERIO</span> */}
          {/* <span className="text-[#8a7a6a]">✦</span> */}
          <span>
            {new Date().toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <TimeDisplay />
        </div>

        <h1 className="font-serif md:text-2xl text-xl font-bold tracking-wide text-[#1a1208]">
          Avaratham Media
        </h1>
        {/* <h1 className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-bold tracking-wide text-[#1a1208]">
          Avaratham Media
        </h1> */}

        <div className="flex items-center gap-3">
          {/* <button className="flex items-center gap-2 bg-[#1a1208] text-[#f5f0e8] text-xs font-medium px-4 py-2 rounded-full hover:bg-[#3a2a18] transition-colors">
            <PenLine size={13} />
            Write News
          </button> */}
          <div className="w-8 h-8 rounded-full bg-[#8a6a3a] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-700" />
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="flex items-center px-4 py-1 gap-1 overflow-x-auto scrollbar-none">
        <button
          className="md:hidden mr-2 text-[#5a4a3a]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="hidden md:flex items-center gap-0 text-xs font-medium text-[#3a2a18]">
          {navLinks.map((link, i) => (
            <button
              key={link}
              className={`px-3 py-2 hover:bg-[#e8dcc8] rounded transition-colors whitespace-nowrap flex items-center gap-1 ${i === 0 ? "font-semibold" : ""
                }`}
            >
              {link}
              {i === 0 && <ChevronDown size={12} />}
            </button>
          ))}
        </div>

        {/* <div className="ml-auto">
          <button
            className="p-2 hover:bg-[#e8dcc8] rounded-full transition-colors text-[#3a2a18]"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={16} />
          </button>
        </div> */}
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="px-6 py-3 border-t border-[#c8b89a] bg-[#ede8dc]">
          <input
            autoFocus
            placeholder="Search articles..."
            className="w-full bg-transparent text-sm text-[#1a1208] placeholder:text-[#8a7a6a] outline-none border-b border-[#8a7a6a] pb-1"
          />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col border-t border-[#c8b89a] bg-[#f5f0e8]">
          {navLinks.map((link) => (
            <button
              key={link}
              className="px-6 py-3 text-left text-sm text-[#3a2a18] hover:bg-[#e8dcc8] border-b border-[#e8dcc8] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function TimeDisplay() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-[#8a7a6a]">{time}</span>;
}