"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { GitPullRequest, MessageSquare, CheckCircle } from "lucide-react";

export default function PullRequestsPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/pull-requests"
      title="Pull Requests (PRs)"
      nextPath="/day2/merge-conflicts"
      nextTitle="Merge Conflicts"
    >
      <div className="max-w-4xl mx-auto">
        {/* Concept */}
        <Slide title="The Heart of Collaboration">
          <p className="mb-6">
            A Pull Request (PR) is how you propose changes to a project. It's a request to "pull" your code into the main codebase. It allows for discussion and review before merging.
          </p>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-center">The PR Lifecycle</h3>
            <MermaidDiagram 
              chart={`sequenceDiagram
    participant Dev as Developer
    participant GH as GitHub
    participant Reviewer as Reviewer

    Dev->>GH: Push feature branch
    Dev->>GH: Open Pull Request
    GH->>Reviewer: Notify Reviewer
    Reviewer->>GH: Review Code
    alt Changes Requested
        Reviewer->>Dev: Request Changes
        Dev->>GH: Push Fixes
    else Approved
        Reviewer->>GH: Approve PR
    end
    GH->>GH: Merge to Main
`} 
            />
          </div>
        </Slide>

        {/* Anatomy of a PR */}
        <Slide title="Anatomy of a Great PR">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-900 mb-1">1. Clear Title</h4>
                <p className="text-sm text-slate-600">"Fix login button alignment" instead of "Fix css".</p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-900 mb-1">2. Description</h4>
                <p className="text-sm text-slate-600">Explain <strong>what</strong> changed and <strong>why</strong>. Include screenshots if it's a UI change.</p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-900 mb-1">3. Link Issues</h4>
                <p className="text-sm text-slate-600">Use "Closes #123" to automatically close related issues.</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 font-mono text-sm">
              <p className="text-slate-400 mb-2"># Example Description</p>
              <p className="font-bold text-slate-800">## Summary</p>
              <p className="text-slate-600 mb-4">Added a dark mode toggle to the settings page.</p>
              
              <p className="font-bold text-slate-800">## Changes</p>
              <ul className="list-disc list-inside text-slate-600 mb-4">
                <li>Created ThemeContext</li>
                <li>Added Toggle component</li>
                <li>Updated global CSS</li>
              </ul>

              <p className="font-bold text-slate-800">## Screenshots</p>
              <p className="text-blue-500">[Image attached]</p>
            </div>
          </div>
        </Slide>

        {/* Code Review */}
        <Slide title="Code Review Etiquette">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 shadow-sm">
                <GitPullRequest />
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Be Small</h3>
              <p className="text-sm text-blue-800">Keep PRs small. Large PRs are hard to review and prone to bugs.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-purple-600 shadow-sm">
                <MessageSquare />
              </div>
              <h3 className="font-bold text-purple-900 mb-2">Be Constructive</h3>
              <p className="text-sm text-purple-800">Reviewers: Ask questions, don't just demand changes. Be kind.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-green-600 shadow-sm">
                <CheckCircle />
              </div>
              <h3 className="font-bold text-green-900 mb-2">Be Responsive</h3>
              <p className="text-sm text-green-800">Authors: Reply to comments and push fixes quickly.</p>
            </div>
          </div>
        </Slide>
        {/* Quiz */}
        <Slide title="Check Your Understanding">
          <div className="space-y-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">1. What is the correct command to switch to a new branch named 'dev'?</h3>
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">git branch dev</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">git checkout dev</div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-green-500 bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                  git checkout -b dev
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">git switch -c dev</div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
