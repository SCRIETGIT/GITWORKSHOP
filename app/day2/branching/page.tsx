"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { GitBranch, GitMerge, Scissors } from "lucide-react";

export default function BranchingPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/branching"
      title="Branching & Merging"
      nextPath="/day2/pull-requests"
      nextTitle="Pull Requests"
    >
      <div className="max-w-4xl mx-auto">
        {/* Concept */}
        <Slide title="The Multiverse of Code">
          <p className="mb-6">
            Branching allows you to create a parallel version of your project. You can experiment, break things, and fix them without affecting the main working code.
          </p>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-center">Visualizing Branches</h3>
            <MermaidDiagram 
              chart={`gitGraph
     commit
     commit
     branch feature-login
     checkout feature-login
     commit
     commit
     checkout main
     merge feature-login
     commit
  `} 
            />
            <p className="text-center text-sm text-slate-500 mt-4">
              The <code>main</code> line continues safely while <code>feature-login</code> adds new code.
            </p>
          </div>
        </Slide>

        {/* Commands */}
        <Slide title="Essential Commands">
          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><GitBranch /></div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">Create & Switch</h3>
                <p className="text-sm text-slate-600 mb-2">Create a new branch and switch to it immediately.</p>
                <code className="text-xs bg-slate-900 text-green-400 px-3 py-2 rounded block">git checkout -b feature-name</code>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><GitMerge /></div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">Merge</h3>
                <p className="text-sm text-slate-600 mb-2">Combine changes from another branch into your current one.</p>
                <code className="text-xs bg-slate-900 text-green-400 px-3 py-2 rounded block">git merge feature-name</code>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg"><Scissors /></div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">Delete</h3>
                <p className="text-sm text-slate-600 mb-2">Remove a branch after it has been merged.</p>
                <code className="text-xs bg-slate-900 text-green-400 px-3 py-2 rounded block">git branch -d feature-name</code>
              </div>
            </div>
          </div>
        </Slide>

        {/* Best Practices */}
        <Slide title="Branching Strategy">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-900 mb-3">✅ Do This</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Name branches descriptively (e.g., <code>fix/login-bug</code>).</li>
                <li>• Keep branches short-lived (merge often).</li>
                <li>• Delete branches after merging.</li>
              </ul>
            </div>
            <div className="p-6 bg-red-50 rounded-xl border border-red-100">
              <h3 className="font-bold text-red-900 mb-3">❌ Avoid This</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Committing broken code to <code>main</code>.</li>
                <li>• Working on one "mega-branch" for months.</li>
                <li>• Naming branches "test", "temp", or "changes".</li>
              </ul>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
