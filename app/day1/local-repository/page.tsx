"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Cloud, Laptop, ArrowRight, Download, Upload, RefreshCw } from "lucide-react";

export default function LocalRepositoryPage() {
  return (
    <WorkshopLayout
      currentPath="/day1/local-repository"
      title="Local vs Remote Repositories"
      nextPath="/day1/exercise"
      nextTitle="Day 1 Exercise"
    >
      <div className="max-w-4xl mx-auto">
        {/* Concept Comparison */}
        <Slide title="The Two Worlds of Git">
          <p className="mb-8">
            Git is distributed, meaning you have a full copy of the project on your machine, and there's usually a central copy on the internet (GitHub).
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Local */}
            <div className="card bg-white border-slate-200 relative overflow-hidden group hover:border-blue-400 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Laptop size={100} className="text-blue-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Laptop size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Local Repo</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">✅ Lives on your computer</li>
                  <li className="flex items-center gap-2">✅ Works offline</li>
                  <li className="flex items-center gap-2">✅ Instant operations</li>
                  <li className="flex items-center gap-2">🔒 Private to you</li>
                </ul>
              </div>
            </div>

            {/* Remote */}
            <div className="card bg-white border-slate-200 relative overflow-hidden group hover:border-purple-400 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cloud size={100} className="text-purple-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                    <Cloud size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Remote Repo</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">✅ Lives on GitHub/GitLab</li>
                  <li className="flex items-center gap-2">✅ Needs internet</li>
                  <li className="flex items-center gap-2">✅ Backup of your code</li>
                  <li className="flex items-center gap-2">🌍 Public/Shared</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* Connecting */}
        <Slide title="Connecting Them">
          <p className="mb-6">
            To link your local folder to a GitHub repository, we use "remotes".
          </p>
          <div className="code-block">
            <code className="text-sm">
              # Add a remote named "origin"<br/>
              <span className="text-green-400">git remote add origin https://github.com/user/repo.git</span><br/><br/>
              # Verify it worked<br/>
              <span className="text-green-400">git remote -v</span>
            </code>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
            <strong>Note:</strong> "origin" is just a nickname for the URL. You could call it anything, but "origin" is the standard convention.
          </div>
        </Slide>

        {/* Sync Commands */}
        <Slide title="Syncing Commands">
          <div className="space-y-6">
            {/* Clone */}
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                <Download size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">git clone [url]</h3>
                <p className="text-slate-600 mb-2">Downloads an entire repository from the internet to your computer. Creates the folder for you.</p>
                <code className="text-xs bg-slate-200 px-2 py-1 rounded">git clone https://github.com/facebook/react.git</code>
              </div>
            </div>

            {/* Push */}
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-3 bg-white rounded-lg shadow-sm text-green-600">
                <Upload size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">git push</h3>
                <p className="text-slate-600 mb-2">Uploads your <strong>committed</strong> changes to the remote repository.</p>
                <code className="text-xs bg-slate-200 px-2 py-1 rounded">git push origin main</code>
              </div>
            </div>

            {/* Pull */}
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-3 bg-white rounded-lg shadow-sm text-purple-600">
                <RefreshCw size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">git pull</h3>
                <p className="text-slate-600 mb-2">Downloads new changes from the remote and merges them into your local files.</p>
                <code className="text-xs bg-slate-200 px-2 py-1 rounded">git pull origin main</code>
              </div>
            </div>
          </div>
        </Slide>

        {/* Visual Workflow */}
        <Slide title="The Full Cycle">
          <div className="flex items-center justify-between text-center px-4 py-8 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto">
            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-3 border border-slate-200">
                <Laptop size={32} className="text-slate-700" />
              </div>
              <span className="font-bold text-slate-900">You</span>
            </div>

            <div className="flex-1 px-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-0.5 bg-green-400 flex-1"></div>
                <span className="text-xs font-mono text-green-600 font-bold">git push</span>
                <ArrowRight size={16} className="text-green-500" />
                <div className="h-0.5 bg-green-400 flex-1"></div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-0.5 bg-blue-400 flex-1"></div>
                <ArrowRight size={16} className="text-blue-500 rotate-180" />
                <span className="text-xs font-mono text-blue-600 font-bold">git pull</span>
                <div className="h-0.5 bg-blue-400 flex-1"></div>
              </div>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-3 border border-slate-200">
                <Cloud size={32} className="text-slate-700" />
              </div>
              <span className="font-bold text-slate-900">GitHub</span>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
