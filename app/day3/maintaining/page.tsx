"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Heart, Shield, Users, MessageSquare } from "lucide-react";

export default function MaintainingReposPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/maintaining"
      title="Maintaining Repositories"
      nextPath="/day3/branding"
      nextTitle="Building Your Brand"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Becoming a Maintainer</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Contributing is just the start. Maintaining a repository is leadership. It's about fostering a community, managing quality, and guiding a project's vision.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Responsibilities of a Maintainer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg h-fit"><Heart size={24}/></div>
                <div>
                  <h3 className="font-bold text-slate-900">Community Health</h3>
                  <p className="text-sm text-slate-600">Creating a welcoming environment. Enforcing Code of Conduct.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg h-fit"><Shield size={24}/></div>
                <div>
                  <h3 className="font-bold text-slate-900">Code Quality</h3>
                  <p className="text-sm text-slate-600">Reviewing PRs, ensuring tests pass, and keeping the codebase clean.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg h-fit"><Users size={24}/></div>
                <div>
                  <h3 className="font-bold text-slate-900">Triage</h3>
                  <p className="text-sm text-slate-600">Managing issues, labeling them, and prioritizing work.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg h-fit"><MessageSquare size={24}/></div>
                <div>
                  <h3 className="font-bold text-slate-900">Communication</h3>
                  <p className="text-sm text-slate-600">Responding to users, explaining decisions, and writing release notes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Best Practices for Beginners</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-white/20 p-1 rounded text-sm font-mono">README</span>
                <p className="text-slate-300">Have a clear README. If people don't know what your project does, they won't use it.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white/20 p-1 rounded text-sm font-mono">CONTRIBUTING.md</span>
                <p className="text-slate-300">Tell people how to contribute. Save yourself time by setting rules early.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white/20 p-1 rounded text-sm font-mono">Automate</span>
                <p className="text-slate-300">Use GitHub Actions to run tests automatically. Don't review broken code.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
}
