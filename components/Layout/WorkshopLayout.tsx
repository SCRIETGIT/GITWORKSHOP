"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Navigation/Sidebar";
import TopNavbar from "@/components/Navigation/TopNavbar";
import KeyboardNavigation from "@/components/Navigation/KeyboardNavigation";
import NavigationButtons from "@/components/Navigation/NavigationButtons";
import { Search, X } from "lucide-react";

interface WorkshopLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
  title?: string;
  nextPath?: string;
  nextTitle?: string;
  prevPath?: string;
  prevTitle?: string;
}

export default function WorkshopLayout({
  children,
  currentPath,
  title,
  nextPath,
  nextTitle,
  prevPath,
  prevTitle,
}: WorkshopLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed on mobile
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        setIsPresentationMode((prev) => !prev);
      }

      if (e.key === "/") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      
      if (e.key === "Escape") {
        if (isSearchOpen) {
          e.preventDefault();
          setIsSearchOpen(false);
        } else if (isPresentationMode) {
          e.preventDefault();
          setIsPresentationMode(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, isPresentationMode]);

  return (
    <>
      <KeyboardNavigation />
      
      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-32 px-4">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center border-b border-slate-200 p-4">
              <Search className="text-slate-400 mr-3" />
              <input 
                autoFocus
                type="text" 
                placeholder="Search workshop content..." 
                className="flex-1 outline-none text-lg text-slate-900 placeholder:text-slate-400"
              />
              <button onClick={() => setIsSearchOpen(false)} className="p-1 hover:bg-slate-100 rounded">
                <X className="text-slate-500" size={20} />
              </button>
            </div>
            <div className="p-4 bg-slate-50 text-center text-slate-500 text-sm py-12">
              Start typing to search...
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setIsSearchOpen(false)}></div>
        </div>
      )}

      {/* Exit Presentation Mode Button */}
      {isPresentationMode && (
        <button
          onClick={() => setIsPresentationMode(false)}
          className="fixed top-6 right-6 z-[100] p-3 bg-white/90 backdrop-blur shadow-lg rounded-full text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300 border border-slate-200 group"
          title="Exit Presentation Mode (Esc)"
        >
          <X size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      )}

      <div className="min-h-screen bg-slate-50 flex flex-col">
        {!isPresentationMode && (
          <TopNavbar 
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            onPresentationClick={() => setIsPresentationMode(true)}
            isSidebarOpen={isSidebarOpen}
          />
        )}
        
        <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
            isPresentationMode={isPresentationMode}
          />
          
          <main className={`flex-1 w-full min-w-0 transition-all duration-500 ease-in-out ${isPresentationMode ? 'max-w-none px-8 md:px-32 py-12' : ''}`}>
            <div className={`container mx-auto px-4 md:px-8 py-8 md:py-12 ${isPresentationMode ? 'max-w-5xl' : 'max-w-5xl'} pb-32 md:pb-32`}>
              {children}
            </div>
            {!isPresentationMode && (
              <NavigationButtons 
                nextPath={nextPath} 
                nextTitle={nextTitle} 
                prevPath={prevPath} 
                prevTitle={prevTitle} 
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
