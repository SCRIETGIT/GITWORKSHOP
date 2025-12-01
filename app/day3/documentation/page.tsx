"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { BookOpen, FileText, List, Code } from "lucide-react";

export default function DocumentationPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/documentation"
      title="Writing Documentation"
      nextPath="/day3/maintaining"
      nextTitle="Maintaining Repositories"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Documentation is King</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Code tells the machine what to do. Documentation tells the human why it does it and how to use it. 
            Good documentation is the difference between a dead project and a thriving one.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Essential Files</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <BookOpen className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">README.md</h3>
                  <p className="text-slate-600 text-sm">The landing page of your project. Must answer: What is this? How do I install it? How do I use it?</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <FileText className="text-teal-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">CONTRIBUTING.md</h3>
                  <p className="text-slate-600 text-sm">The guide for contributors. Setup instructions, coding standards, and PR process.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <List className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">CHANGELOG.md</h3>
                  <p className="text-slate-600 text-sm">A history of changes. What's new in each version?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Tips for Great Docs</h2>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-center gap-2"><Code size={16}/> <strong>Show, Don't Tell:</strong> Use code snippets and examples.</li>
              <li className="flex items-center gap-2"><Code size={16}/> <strong>Keep it Simple:</strong> Write for beginners, not just experts.</li>
              <li className="flex items-center gap-2"><Code size={16}/> <strong>Update Often:</strong> Outdated docs are worse than no docs.</li>
            </ul>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
}
