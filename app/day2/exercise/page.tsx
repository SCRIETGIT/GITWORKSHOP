"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import TerminalWrapper from "@/components/Terminal/TerminalWrapper";
import { GitBranch, GitPullRequest, CheckCircle } from "lucide-react";

export default function Day2ExercisePage() {
  return (
    <WorkshopLayout
      currentPath="/day2/exercise"
      title="Day 2 Challenge"
      nextPath="/day3"
      nextTitle="Day 3: Open Source"
    >
      <div className="max-w-4xl mx-auto">
        <Slide title="Mission: The Feature Branch Workflow">
          <p className="mb-6">
            Simulate a real-world team workflow. You will create a feature branch, make changes, and pretend to merge them via Pull Request.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <GitBranch size={20} /> Goal
              </h3>
              <p className="text-sm text-blue-800">
                Add an "About" section to your project without touching the main branch directly.
              </p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
              <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                <GitPullRequest size={20} /> Skill
              </h3>
              <p className="text-sm text-purple-800">
                Mastering branching and the Pull Request lifecycle.
              </p>
            </div>
          </div>
        </Slide>

        <Slide title="Step 1: Create Branch">
          <p className="mb-4">Create a new branch named <code>feature/about-page</code>.</p>
          <div className="code-block">
            <code className="text-sm">
              <span className="text-green-400">git checkout -b feature/about-page</span>
            </code>
          </div>
        </Slide>

        <Slide title="Step 2: Make Changes">
          <p className="mb-4">Create a new file called <code>about.txt</code>.</p>
          <div className="code-block">
            <code className="text-sm">
              echo "This is the about page" {'>'} about.txt<br/>
              <span className="text-green-400">git add about.txt</span><br/>
              <span className="text-green-400">git commit -m "Add initial about page"</span>
            </code>
          </div>
        </Slide>

        <Slide title="Step 3: Push">
          <p className="mb-4">Push your new branch to GitHub.</p>
          <div className="code-block">
            <code className="text-sm">
              <span className="text-green-400">git push -u origin feature/about-page</span>
            </code>
          </div>
          <p className="mt-4 text-sm text-slate-600 italic">
            (If you don't have a remote set up, this command will fail. That's okay for this simulation!)
          </p>
        </Slide>

        <Slide title="Step 4: Cleanup (Merge)">
          <p className="mb-4">Pretend your PR was approved. Switch back to main and merge.</p>
          <div className="code-block">
            <code className="text-sm">
              git checkout main<br/>
              <span className="text-green-400">git merge feature/about-page</span><br/>
              git branch -d feature/about-page
            </code>
          </div>
        </Slide>

        <Slide title="Practice Terminal">
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-4">
              <TerminalWrapper initialCommands={["git init", "git commit --allow-empty -m 'Initial commit'"]} />
            </div>
          </div>
        </Slide>

        <Slide title="Checklist">
          <div className="grid gap-3">
            {[
              "Created a feature branch",
              "Switched to the feature branch",
              "Committed changes on the branch",
              "Merged back into main",
              "Deleted the feature branch"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
