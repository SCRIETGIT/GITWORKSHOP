"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { AlertTriangle, Check, X } from "lucide-react";

export default function MergeConflictsPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/merge-conflicts"
      title="Handling Merge Conflicts"
      nextPath="/day2/exercise"
      nextTitle="Day 2 Exercise"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="Don't Panic!">
          <div className="flex items-center gap-6 p-6 bg-red-50 border border-red-100 rounded-xl mb-6">
            <AlertTriangle size={48} className="text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">What is a Conflict?</h3>
              <p className="text-red-800">
                A conflict happens when two people change the <strong>same line</strong> of the <strong>same file</strong> differently. Git doesn't know which one to pick, so it asks you to decide.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-center">Visualizing a Conflict</h3>
            <MermaidDiagram 
              chart={`gitGraph
       commit
       commit
       branch feature-A
       checkout feature-A
       commit id: "Change Line 10"
       checkout main
       commit id: "Also Change Line 10"
       merge feature-A type: REVERSE
`} 
            />
            <p className="text-center text-sm text-slate-500 mt-4">
              Both branches modified the same part of the code. Git stops and asks for help.
            </p>
          </div>
        </Slide>

        {/* Anatomy */}
        <Slide title="Anatomy of a Conflict">
          <p className="mb-4">Git adds special markers to the file to show you the conflicting changes.</p>
          <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm shadow-lg border border-slate-800">
            <div className="text-slate-500 mb-2">index.html</div>
            <div className="text-yellow-500">{'<<<<<<< HEAD'}</div>
            <div className="text-green-400 pl-4">{'<h1>Welcome to My Website</h1>'}</div>
            <div className="text-slate-500 text-xs pl-4">// This is what YOU have</div>
            <div className="text-yellow-500">=======</div>
            <div className="text-blue-400 pl-4">{'<h1>Welcome to Our Amazing Website</h1>'}</div>
            <div className="text-slate-500 text-xs pl-4">// This is what THEY have</div>
            <div className="text-yellow-500">{'>>>>>>> feature-new-header'}</div>
          </div>
        </Slide>

        {/* Resolution Steps */}
        <Slide title="How to Resolve">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">1</div>
              <div>
                <h4 className="font-bold text-slate-900">Open the file</h4>
                <p className="text-sm text-slate-600">Open the conflicting file in VS Code. It usually highlights conflicts for you.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">2</div>
              <div>
                <h4 className="font-bold text-slate-900">Decide</h4>
                <p className="text-sm text-slate-600">Choose which code is correct. Or combine them if both are needed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">3</div>
              <div>
                <h4 className="font-bold text-slate-900">Clean up</h4>
                <p className="text-sm text-slate-600">Delete the markers (<code>{'<<<<<<<'}</code>, <code>=======</code>, <code>{'>>>>>>>'}</code>). The file should look normal again.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">4</div>
              <div>
                <h4 className="font-bold text-slate-900">Commit</h4>
                <p className="text-sm text-slate-600">Stage the file (<code>git add</code>) and commit (<code>git commit</code>). You've resolved the conflict!</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
