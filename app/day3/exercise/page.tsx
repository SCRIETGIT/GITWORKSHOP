"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { GitPullRequest, Search, CheckCircle } from "lucide-react";

export default function Day3ExercisePage() {
  return (
    <WorkshopLayout
      currentPath="/day3/exercise"
      title="Day 3 Exercise: First Contribution"
      nextPath="/day4/branding"
      nextTitle="Day 4: Career & Growth"
      prevPath="/day3/writing-prs"
      prevTitle="Writing Great PRs"
    >
      <div className="max-w-4xl mx-auto">
        <Slide title="Mission: Contribute to the Workshop">
          <p className="mb-6 text-lg">
            Your task is to make a real contribution to a repository. We will simulate this by creating a Pull Request to add your name to the "Contributors" list.
          </p>

          <div className="mb-8 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-center text-sm uppercase tracking-wider">Visualizing Your Task</h3>
            <MermaidDiagram 
              chart={`sequenceDiagram
    participant You
    participant YourFork
    participant MainRepo

    Note over You, MainRepo: 1. Fork the Repo
    MainRepo->>YourFork: Fork created
    
    Note over You, YourFork: 2. Clone & Branch
    YourFork->>You: git clone
    You->>You: git checkout -b add-name
    
    Note over You: 3. Make Changes
    You->>You: echo "Name" >> contributors.md
    You->>You: git commit
    
    Note over You, YourFork: 4. Push
    You->>YourFork: git push origin add-name
    
    Note over YourFork, MainRepo: 5. Pull Request
    YourFork->>MainRepo: Open PR
`} 
            />
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-slate-900 text-slate-300 rounded-xl font-mono text-sm shadow-lg">
              <div className="flex gap-2 mb-4 border-b border-slate-700 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="mb-2"><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> git clone https://github.com/scriet/workshop-contributors.git</p>
              <p className="mb-2"><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> cd workshop-contributors</p>
              <p className="mb-2"><span className="text-green-400">➜</span> <span className="text-blue-400">workshop-contributors</span> <span className="text-yellow-400">(main)</span> git checkout -b add-lakshya</p>
              <p className="mb-2"><span className="text-green-400">➜</span> <span className="text-blue-400">workshop-contributors</span> <span className="text-yellow-400">(add-lakshya)</span> echo "- Lakshya Pandey" &gt;&gt; contributors.md</p>
              <p className="mb-2"><span className="text-green-400">➜</span> <span className="text-blue-400">workshop-contributors</span> <span className="text-yellow-400">(add-lakshya)</span> git add contributors.md</p>
              <p className="mb-2"><span className="text-green-400">➜</span> <span className="text-blue-400">workshop-contributors</span> <span className="text-yellow-400">(add-lakshya)</span> git commit -m "Add Lakshya to contributors"</p>
              <p className="mb-2"><span className="text-green-400">➜</span> <span className="text-blue-400">workshop-contributors</span> <span className="text-yellow-400">(add-lakshya)</span> git push origin add-lakshya</p>
            </div>
          </div>
        </Slide>

        <Slide title="Checklist">
          <div className="grid gap-4">
            <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <Search className="text-blue-500" />
              <span>Fork the repository</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <GitPullRequest className="text-purple-500" />
              <span>Create a new branch</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <CheckCircle className="text-green-500" />
              <span>Open a Pull Request</span>
            </div>
          </div>
        </Slide>

        <Slide title="Troubleshooting">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
              <h4 className="font-bold text-red-900 mb-2">Permission Denied (403)</h4>
              <p className="text-sm text-red-800 mb-2">
                You are trying to push to the <strong>original</strong> repository, not your fork.
              </p>
              <p className="text-xs font-mono bg-white p-2 rounded border border-red-200 text-red-700">
                git remote set-url origin https://github.com/YOUR-USERNAME/workshop-contributors.git
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
              <h4 className="font-bold text-yellow-900 mb-2">Authentication Failed</h4>
              <p className="text-sm text-yellow-800 mb-2">
                Password authentication was removed in 2021. You need a <strong>Personal Access Token (PAT)</strong> or SSH key.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
