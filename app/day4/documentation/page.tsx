"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { BookOpen, FileText, Image, List } from "lucide-react";

export default function DocumentationPage() {
  return (
    <WorkshopLayout
      currentPath="/day4/documentation"
      title="Documentation"
      nextPath="/day4/etiquette"
      nextTitle="Community Etiquette"
    >
      <div className="max-w-4xl mx-auto">
        {/* Why it matters */}
        <Slide title="If it's not documented, it doesn't exist">
          <p className="mb-6 text-lg">
            You could write the best code in the world, but if no one knows how to install or use it, it's useless.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">The Perfect README Answers:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                What does this project do?
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                Why is it useful?
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                How do I install it?
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                How do I use it?
              </li>
            </ul>
          </div>
        </Slide>

        {/* Markdown Cheat Sheet */}
        <Slide title="Markdown Cheat Sheet">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText size={16} className="text-blue-500" /> Headers
              </h3>
              <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-600">
                # Heading 1<br/>
                ## Heading 2<br/>
                ### Heading 3
              </div>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <List size={16} className="text-green-500" /> Lists
              </h3>
              <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-600">
                - Item 1<br/>
                - Item 2<br/>
                &nbsp;&nbsp;- Subitem
              </div>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-purple-500" /> Emphasis
              </h3>
              <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-600">
                **Bold**<br/>
                *Italic*<br/>
                `Code`
              </div>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Image size={16} className="text-orange-500" /> Links & Images
              </h3>
              <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-600">
                [Link Text](url)<br/>
                ![Alt Text](image.jpg)
              </div>
            </div>
          </div>
        </Slide>

        {/* Tools */}
        <Slide title="Tools for Documentation">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <h4 className="font-bold text-slate-900">Mermaid.js</h4>
              <p className="text-xs text-slate-500 mt-1">Diagrams as code</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <h4 className="font-bold text-slate-900">Carbon</h4>
              <p className="text-xs text-slate-500 mt-1">Beautiful code screenshots</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <h4 className="font-bold text-slate-900">Badges</h4>
              <p className="text-xs text-slate-500 mt-1">shields.io status icons</p>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
