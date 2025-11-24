import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Terminal,
  Code,
  Rocket,
  Users,
  BookOpen,
  Book,
  ExternalLink,
  Info,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { navigationData, utilityPages } from "@/lib/content/navigationData";
import type { NavItem } from "@/lib/content/navigationData";

const iconMap: Record<string, any> = {
  Terminal,
  Code,
  Rocket,
  Users,
  BookOpen,
  Book,
  ExternalLink,
  Info,
};

export default function Sidebar({ isOpen, onClose, isPresentationMode = false }: { isOpen: boolean; onClose?: () => void; isPresentationMode?: boolean }) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(navigationData.map((item) => item.path))
  );

  const toggleSection = (path: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (path: string) => pathname === path;
  const isInSection = (sectionPath: string) => pathname.startsWith(sectionPath);

  const renderNavItem = (item: NavItem, level = 0) => {
    const Icon = item.icon ? iconMap[item.icon] : null;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.path);
    const active = isActive(item.path);
    const inSection = isInSection(item.path);

    return (
      <div key={item.path} className={level === 0 ? "mb-2" : ""}>
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleSection(item.path)}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all text-sm font-medium
                ${active ? "bg-blue-50 text-blue-700" : ""}
                ${inSection && !active ? "text-slate-900" : ""}
                ${!inSection && !active ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900" : ""}
              `}
            >
              {isExpanded ? (
                <ChevronDown size={16} className="text-slate-400" />
              ) : (
                <ChevronRight size={16} className="text-slate-400" />
              )}
              {Icon && <Icon size={18} className={inSection ? "text-blue-600" : "text-slate-400"} />}
              <span className="flex-1 text-left">
                {item.title}
              </span>
            </button>
          ) : (
            <Link
              href={item.path}
              onClick={onClose} // Close sidebar on mobile when link clicked
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all text-sm font-medium
                ${active ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" : ""}
                ${!active ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900" : ""}
                ${level > 0 ? "pl-11" : ""}
              `}
            >
              {Icon && level === 0 && <Icon size={18} />}
              <span className="flex-1 text-left">
                {item.title}
              </span>
            </Link>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="ml-2 pl-2 border-l border-slate-100 mt-1 space-y-0.5">
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-16 bottom-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out shadow-2xl
        md:sticky md:top-16 md:bottom-auto md:h-[calc(100vh-4rem)] md:z-0 md:shadow-none
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        ${isPresentationMode ? "md:hidden" : "md:translate-x-0 md:block"}
      `}>
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 p-4">
          {/* Mobile Header - Removed since navbar is visible */}
          
          <div className="mb-6">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
              Curriculum
            </p>
            <nav className="space-y-0.5">
              {navigationData.map((item) => renderNavItem(item))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
              Reference
            </p>
            <nav className="space-y-0.5">
              {utilityPages.map((item) => renderNavItem(item))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
