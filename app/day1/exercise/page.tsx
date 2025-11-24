"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import TerminalWrapper from "@/components/Terminal/TerminalWrapper";
import { CheckCircle, Trophy } from "lucide-react";

export default function Day1ExercisePage() {
  return (
    <WorkshopLayout
      currentPath="/day1/exercise"
      title="Day 1 Challenge"
      nextPath="/day2"
      nextTitle="Day 2: GitHub"
    >
      <div className="max-w-4xl mx-auto">
        <Slide title="Mission: Build Your Portfolio Repo">
          <p className="mb-6 text-lg">
            Your task is to create a new Git repository for a personal portfolio website, add some files, and save your progress.
          </p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Trophy className="text-blue-600" /> Objective
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li>1. Initialize a new repository</li>
              <li>2. Create project files</li>
              <li>3. Stage and commit your changes</li>
              <li>4. Verify your history</li>
            </ul>
          </div>
        </Slide>

        <Slide title="Step 1: Setup">
          <p className="mb-4">Create a folder and initialize Git.</p>
          <div className="code-block">
            <code className="text-sm">
              mkdir my-portfolio<br/>
              cd my-portfolio<br/>
              <span className="text-green-400">git init</span>
            </code>
          </div>
        </Slide>

        <Slide title="Step 2: Create Content">
          <p className="mb-4">Create a <code>README.md</code> file with some content.</p>
          <div className="code-block">
            <code className="text-sm">
              # My Portfolio<br/><br/>
              ## About Me<br/>
              I am a student at SCRIET learning Git!<br/><br/>
              ## Skills<br/>
              - HTML<br/>
              - CSS<br/>
              - JavaScript
            </code>
          </div>
        </Slide>

        <Slide title="Step 3: Save Changes">
          <p className="mb-4">Stage your file and commit it.</p>
          <div className="code-block">
            <code className="text-sm">
              <span className="text-green-400">git add README.md</span><br/>
              <span className="text-green-400">git commit -m "Initial commit: Add README"</span>
            </code>
          </div>
        </Slide>

        <Slide title="Step 4: Verify">
          <p className="mb-4">Check that your commit was saved.</p>
          <div className="code-block">
            <code className="text-sm">
              <span className="text-green-400">git log --oneline</span>
            </code>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            You should see your commit hash and message appear!
          </p>
        </Slide>

        <Slide title="Interactive Terminal">
          <p className="mb-4">
            Use this terminal to practice the commands if you don't have Git installed yet.
          </p>
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-4">
              <TerminalWrapper />
            </div>
          </div>
        </Slide>

        <Slide title="Completion Checklist">
          <div className="grid gap-3">
            {[
              "Initialized a repository (git init)",
              "Created a file",
              "Staged the file (git add)",
              "Committed the file (git commit)",
              "Checked the log (git log)"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-green-500 group-hover:bg-green-50 transition-colors flex items-center justify-center">
                  <CheckCircle size={14} className="text-transparent group-hover:text-green-500 transition-colors" />
                </div>
                <span className="text-slate-700 font-medium group-hover:text-slate-900">{item}</span>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
