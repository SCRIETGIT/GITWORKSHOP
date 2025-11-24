"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationData } from "@/lib/content/navigationData";

interface NavigationButtonsProps {
  prevPath?: string;
  prevTitle?: string;
  nextPath?: string;
  nextTitle?: string;
}

export default function NavigationButtons({
  prevPath,
  prevTitle,
  nextPath,
  nextTitle,
}: NavigationButtonsProps) {
  const pathname = usePathname();

  // Flatten the navigation data to find prev/next if not provided
  const flatNav = navigationData.reduce((acc: any[], item) => {
    acc.push({ title: item.title, path: item.path });
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({ title: child.title, path: child.path });
      });
    }
    return acc;
  }, []);

  const currentIndex = flatNav.findIndex((item) => item.path === pathname);
  
  // Determine final Prev/Next values (Props take priority over auto-calc)
  const finalPrev = prevPath
    ? { path: prevPath, title: prevTitle || "Previous" }
    : currentIndex > 0
    ? flatNav[currentIndex - 1]
    : null;

  const finalNext = nextPath
    ? { path: nextPath, title: nextTitle || "Next" }
    : currentIndex < flatNav.length - 1
    ? flatNav[currentIndex + 1]
    : null;

  return (
    <div className="mt-16 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Previous Button */}
      {finalPrev ? (
        <Link
          href={finalPrev.path}
          className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Previous</div>
              <div className="font-bold text-slate-900 text-lg truncate group-hover:text-blue-700 transition-colors">
                {finalPrev.title}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="hidden md:block" /> // Spacer
      )}

      {/* Next Button */}
      {finalNext ? (
        <Link
          href={finalNext.path}
          className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden text-right"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 flex items-center justify-end gap-4 flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Next Lesson</div>
              <div className="font-bold text-slate-900 text-lg truncate group-hover:text-blue-700 transition-colors">
                {finalNext.title}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="hidden md:block" /> // Spacer
      )}
    </div>
  );
}
