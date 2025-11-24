"use client";

import Link from "next/link";
import { Search, Github, Menu, Maximize, X } from "lucide-react";
import { useState } from "react";

export default function TopNavbar({ 
  onMenuClick, 
  onPresentationClick,
  isSidebarOpen = false
}: { 
  onMenuClick?: () => void;
  onPresentationClick?: () => void;
  isSidebarOpen?: boolean;
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 max-w-[1600px] mx-auto">
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={onMenuClick}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg md:hidden"
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all flex-shrink-0">
              G
            </div>
            <div className="flex flex-col justify-center gap-0.5">
              <h1 className="font-bold text-slate-900 text-base md:text-lg leading-none">GitHub Workshop</h1>
              <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider leading-none">SCRIET Meerut</p>
            </div>
          </Link>
        </div>

        {/* Middle: Search Bar */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className={`relative group transition-all ${isSearchFocused ? 'scale-105' : ''}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search documentation... (Press '/')"
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all shadow-inner"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-block border border-slate-300 rounded px-1.5 text-[10px] font-medium text-slate-500 bg-white">
                /
              </kbd>
            </div>
          </div>
        </div>

        {/* Right: Links & Socials */}
        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <Link href="/cheat-sheet" className="hover:text-blue-600 transition-colors">Cheat Sheet</Link>
          </nav>
          
          <div className="h-6 w-px bg-slate-200 hidden md:block"></div>

          <button
            onClick={onPresentationClick}
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all hidden md:block"
            title="Enter Presentation Mode (P)"
          >
            <Maximize size={20} />
          </button>

          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            title="View on GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
