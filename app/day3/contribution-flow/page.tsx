"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { GitFork, Download, RefreshCw } from "lucide-react";

export default function ContributionFlowPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/contribution-flow"
      title="The Contribution Cycle"
      nextPath="/day3/writing-prs"
      nextTitle="Writing Great PRs"
    >
      <div className="max-w-4xl mx-auto">
        {/* Visual Flow */}
        <Slide title="The Standard Workflow">
          <p className="mb-6">
            Contributing to open source follows a specific pattern because you don't have permission to write directly to the main repository.
          </p>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
            <MermaidDiagram 
              chart={`sequenceDiagram
    participant You
    participant GitHub
    participant OriginalRepo

    Note over You, OriginalRepo: 1. Fork
    OriginalRepo->>GitHub: Fork to your account
    Note over You, GitHub: 2. Clone
    GitHub->>You: git clone
    Note over You: 3. Branch & Code
    You->>You: git checkout -b fix-bug
    You->>You: git commit
    Note over You, GitHub: 4. Push
    You->>GitHub: git push origin fix-bug
    Note over GitHub, OriginalRepo: 5. Pull Request
    GitHub->>OriginalRepo: Open PR
`} 
            />
          </div>
        </Slide>

        {/* Step 1: Fork */}
        <Slide title="1. Fork">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="mb-4">
                A fork is a copy of a repository that lives on <strong>your</strong> account. You have full control over it.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">
                Click the <span className="font-bold text-slate-900"><GitFork className="inline w-4 h-4" /> Fork</span> button in the top-right corner of the repository page.
              </div>
            </div>
          </div>
        </Slide>

        {/* Step 2: Clone */}
        <Slide title="2. Clone">
          <p className="mb-4">
            Download <strong>your fork</strong> to your computer.
          </p>
          <div className="code-block">
            <code className="text-sm">
              <span className="text-green-400">git clone https://github.com/YOUR-USERNAME/project.git</span>
            </code>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Make sure you clone YOUR version, not the original one!
          </p>
        </Slide>

        {/* Step 3: Sync */}
        <Slide title="Keeping it in Sync">
          <p className="mb-4">
            Your fork will get outdated as the original project moves forward. You need to link them.
          </p>
          <div className="space-y-4">
            <div className="bg-slate-900 p-4 rounded-xl font-mono text-sm shadow-lg">
              <div className="text-slate-500 mb-2"># Add the original repo as "upstream"</div>
              <div className="text-white mb-4">git remote add upstream https://github.com/ORIGINAL-OWNER/project.git</div>
              
              <div className="text-slate-500 mb-2"># Fetch latest changes</div>
              <div className="text-white mb-4">git fetch upstream</div>
              
              <div className="text-slate-500 mb-2"># Merge into your local main</div>
              <div className="text-white">git merge upstream/main</div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-3">
              <RefreshCw className="text-blue-600" />
              <p className="text-sm text-blue-800">
                Always sync your main branch before starting a new feature!
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
