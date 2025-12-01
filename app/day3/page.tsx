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

          <Link href="/day3/industry-usage" className="group card bg-white border-slate-200 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 2</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Industry Usage</h3>
            <p className="text-slate-600 mb-6">
              See how companies like Meta, Google, and Apple rely on open source to build the future.
            </p>
            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              See Usage <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/finding-projects" className="group card bg-white border-slate-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Search size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 3</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Finding Projects</h3>
            <p className="text-slate-600 mb-6">
              Don't know where to start? Learn how to find "Good First Issues" and beginner-friendly communities.
            </p>
            <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
              Find Issues <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/contribution-flow" className="group card bg-white border-slate-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <GitPullRequest size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 4</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Contribution Flow</h3>
            <p className="text-slate-600 mb-6">
              Master the Fork → Clone → Branch → PR workflow. Learn how to sync your fork with the original repo.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Start Contributing <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/documentation" className="group card bg-white border-slate-200 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-red-50 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <PenTool size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 5</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Writing Documentation</h3>
            <p className="text-slate-600 mb-6">
              Code is useless if no one knows how to use it. Master the art of writing READMEs and technical docs.
            </p>
            <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
              Write Docs <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/maintaining" className="group card bg-white border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 6</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Maintaining Repos</h3>
            <p className="text-slate-600 mb-6">
              Become a leader. Learn how to manage a community, review PRs, and maintain a healthy project.
            </p>
            <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
              Lead Projects <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/branding" className="group card bg-white border-slate-200 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-pink-50 rounded-xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 7</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">Building Brand</h3>
            <p className="text-slate-600 mb-6">
              Your GitHub profile is your resume. Learn how to make it stand out.
            </p>
            <div className="flex items-center text-pink-600 font-semibold group-hover:translate-x-2 transition-transform">
              Build Brand <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/markdown-guide" className="group card bg-white border-slate-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-cyan-50 rounded-xl text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <PenTool size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 8</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">Markdown Guide</h3>
            <p className="text-slate-600 mb-6">
              Master Markdown to write beautiful documentation and comments.
            </p>
            <div className="flex items-center text-cyan-600 font-semibold group-hover:translate-x-2 transition-transform">
              Learn Markdown <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/etiquette" className="group card bg-white border-slate-200 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-yellow-50 rounded-xl text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 9</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">Etiquette</h3>
            <p className="text-slate-600 mb-6">
              Learn the unwritten rules of open source communication.
            </p>
            <div className="flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform">
              Learn Etiquette <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day3/next-steps" className="group card bg-white border-slate-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-green-50 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 10</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Next Steps</h3>
            <p className="text-slate-600 mb-6">
              Where to go from here? Resources, games, and community.
            </p>
            <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
              Move Forward <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </WorkshopLayout>
  );
}
