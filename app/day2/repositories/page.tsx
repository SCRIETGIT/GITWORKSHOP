"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { FolderPlus, FileText, Eye, EyeOff, Command } from "lucide-react";

export default function RepositoriesPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/repositories"
      title="Remote Repositories"
      nextPath="/day2/branching"
      nextTitle="Branching & Merging"
    >
      <div className="max-w-4xl mx-auto">
        {/* Creating Repo */}
        <Slide title="Creating a Repository">
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <p className="mb-4">
                A repository (repo) is where your project lives. It contains all your files and revision history.
              </p>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><FolderPlus size={20} /></div>
                  <div>
                    <span className="font-bold text-slate-900 block">1. New Repository</span>
                    <span className="text-sm text-slate-600">Click the + icon in the top right header.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-slate-100 text-slate-600 rounded-lg"><FileText size={20} /></div>
                  <div>
                    <span className="font-bold text-slate-900 block">2. Name & Description</span>
                    <span className="text-sm text-slate-600">Use a short, descriptive name (e.g., <code>workshop-demo</code>).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-slate-100 text-slate-600 rounded-lg"><Eye size={20} /></div>
                  <div>
                    <span className="font-bold text-slate-900 block">3. Visibility</span>
                    <span className="text-sm text-slate-600">Public (Open Source) or Private (Confidential).</span>
                  </div>
                </li>
              </ol>
            </div>
            <div className="hidden md:block w-1/3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Repo Checklist</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="text-blue-600" /> README.md
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="text-blue-600" /> .gitignore
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="text-blue-600" /> License
                </label>
              </div>
            </div>
          </div>
        </Slide>

        {/* Essential Files */}
        <Slide title="Essential Files">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-blue-600 mb-2">README.md</h3>
              <p className="text-sm text-slate-600">
                The front page. Explains <strong>what</strong> the project is and <strong>how</strong> to use it. Written in Markdown.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-orange-600 mb-2">.gitignore</h3>
              <p className="text-sm text-slate-600">
                Tells Git which files to <strong>ignore</strong> (e.g., node_modules, .env secrets, build folders).
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all">
              <h3 className="font-bold text-green-600 mb-2">LICENSE</h3>
              <p className="text-sm text-slate-600">
                Legal rules. Defines how others can use, modify, or distribute your code (e.g., MIT, Apache).
              </p>
            </div>
          </div>
        </Slide>

        {/* Connecting */}
        <Slide title="Connecting to Remote">
          <p className="mb-4">
            Once created, you need to link your local folder to the GitHub repo.
          </p>
          <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-300 shadow-lg">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
              <Command size={14} />
              <span>Terminal</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-slate-500"># 1. Add the remote URL</p>
                <p className="text-white">git remote add origin https://github.com/user/repo.git</p>
              </div>
              <div>
                <p className="text-slate-500"># 2. Rename branch to main (if needed)</p>
                <p className="text-white">git branch -M main</p>
              </div>
              <div>
                <p className="text-slate-500"># 3. Push your code</p>
                <p className="text-white">git push -u origin main</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-100">
            <strong>What is "-u"?</strong> It stands for "upstream". It tells Git to remember that your local <code>main</code> branch is linked to the <code>origin/main</code> branch, so you can just type <code>git push</code> next time.
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
