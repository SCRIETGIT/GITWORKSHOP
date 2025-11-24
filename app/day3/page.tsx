"use client";

import Link from "next/link";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Globe, Search, GitPullRequest, PenTool, ArrowRight } from "lucide-react";

export default function Day3Page() {
  return (
    <WorkshopLayout
      currentPath="/day3"
      title="Day 3: Open Source Contribution"
      nextPath="/day3/intro"
      nextTitle="Start Day 3"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Open Source Contribution</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join the global community of developers. Learn how to find projects, contribute code, and build your reputation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/day3/intro" className="group card bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 1</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">What is Open Source?</h3>
            <p className="text-slate-600 mb-6">
              Understand the philosophy behind free software, different licenses (MIT vs GPL), and why it matters for your career.
            </p>
            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              Learn Philosophy <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/finding-projects" className="group card bg-white border-slate-200 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Search size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 2</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Finding Projects</h3>
            <p className="text-slate-600 mb-6">
              Don't know where to start? Learn how to find "Good First Issues" and beginner-friendly communities.
            </p>
            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              Find Issues <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/contribution-flow" className="group card bg-white border-slate-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <GitPullRequest size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 3</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">The Contribution Cycle</h3>
            <p className="text-slate-600 mb-6">
              Master the Fork → Clone → Branch → PR workflow. Learn how to sync your fork with the original repo.
            </p>
            <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
              Start Contributing <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/writing-prs" className="group card bg-white border-slate-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <PenTool size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 4</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Writing Great PRs</h3>
            <p className="text-slate-600 mb-6">
              Learn how to write descriptions that get your code merged. Understand code review etiquette.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Write PRs <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </WorkshopLayout>
  );
}
