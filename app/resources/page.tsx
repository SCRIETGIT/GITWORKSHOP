"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { ExternalLink, Book, Video, Gamepad2 } from "lucide-react";

export default function ResourcesPage() {
  return (
    <WorkshopLayout
      currentPath="/resources"
      title="Resources"
    >
      <div className="max-w-4xl mx-auto">
        <Slide title="Official Documentation">
          <div className="space-y-4">
            <a href="https://git-scm.com/doc" target="_blank" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-2">
                  <Book size={20} /> Git SCM Docs
                </h3>
                <ExternalLink size={16} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-600">The official reference manual. Detailed and authoritative.</p>
            </a>
            
            <a href="https://docs.github.com/" target="_blank" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-purple-400 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 group-hover:text-purple-600 flex items-center gap-2">
                  <Book size={20} /> GitHub Docs
                </h3>
                <ExternalLink size={16} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-600">Guides for GitHub-specific features like Actions, Pages, and Security.</p>
            </a>
          </div>
        </Slide>

        <Slide title="Interactive Learning">
          <div className="space-y-4">
            <a href="https://learngitbranching.js.org/" target="_blank" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-green-400 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 group-hover:text-green-600 flex items-center gap-2">
                  <Gamepad2 size={20} /> Learn Git Branching
                </h3>
                <ExternalLink size={16} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-600">The best visual game for understanding Git branches.</p>
            </a>
            
            <a href="https://lab.github.com/" target="_blank" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 group-hover:text-orange-600 flex items-center gap-2">
                  <Gamepad2 size={20} /> GitHub Learning Lab
                </h3>
                <ExternalLink size={16} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-600">Bot-guided courses that run directly in your GitHub repositories.</p>
            </a>
          </div>
        </Slide>

        <Slide title="Video Tutorials">
          <div className="space-y-4">
            <a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-red-400 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 group-hover:text-red-600 flex items-center gap-2">
                  <Video size={20} /> Git & GitHub for Beginners (FreeCodeCamp)
                </h3>
                <ExternalLink size={16} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-600">A complete crash course video.</p>
            </a>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
