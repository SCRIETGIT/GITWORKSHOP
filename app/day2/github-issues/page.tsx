"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { CheckCircle2, Layout, Flag, AlertCircle, Clock } from "lucide-react";

export default function GitHubIssuesPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/github-issues"
      title="Issues, Projects & Milestones"
      nextPath="/day2/developer-profile"
      nextTitle="Developer Profile"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Managing Work on GitHub</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Code is only half the battle. Successful projects need organization. GitHub provides three powerful tools to manage the "what", "when", and "who" of software development.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Issues */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                <AlertCircle size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">1. Issues</h2>
                <p className="text-slate-500">The basic unit of work</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Issues track bugs, feature requests, and tasks. They are the "to-do list" of your repository.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What goes in an Issue?</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Bug reports (something is broken)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Feature requests (new ideas)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Questions or discussions</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">Key Features</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="font-mono bg-slate-200 px-1 rounded">Labels</span> Categorize (e.g., 'bug', 'help wanted')</li>
                  <li className="flex items-center gap-2"><span className="font-mono bg-slate-200 px-1 rounded">Assignees</span> Who is working on this?</li>
                  <li className="flex items-center gap-2"><span className="font-mono bg-slate-200 px-1 rounded">Mentions</span> @username to notify people</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                <Layout size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">2. Projects</h2>
                <p className="text-slate-500">Visualizing the workflow</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Projects are Kanban-style boards (like Trello) built right into GitHub. They help you visualize the status of multiple issues at once.
            </p>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-slate-200 bg-slate-50 text-center py-2 font-bold text-slate-600 text-sm">
                <div>To Do</div>
                <div>In Progress</div>
                <div>Done</div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-200 h-32 bg-white">
                <div className="p-2"><div className="bg-white border border-slate-200 p-2 rounded shadow-sm text-xs mb-2">Fix Login Bug</div></div>
                <div className="p-2"><div className="bg-white border border-slate-200 p-2 rounded shadow-sm text-xs mb-2">Design Home Page</div></div>
                <div className="p-2"><div className="bg-white border border-slate-200 p-2 rounded shadow-sm text-xs mb-2 line-through text-slate-400">Setup Repo</div></div>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-xl">
                <Flag size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">3. Milestones</h2>
                <p className="text-slate-500">Tracking deadlines and goals</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Milestones group issues and pull requests to track progress toward a specific goal, like "Version 1.0" or "Beta Launch".
            </p>
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900">v1.0 Release</span>
                <span className="text-sm text-slate-500 flex items-center gap-1"><Clock size={14}/> Due in 2 days</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-700">75% complete</span> • 3 open • 9 closed
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
}
