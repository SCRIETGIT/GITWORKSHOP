"use client";

import Link from "next/link";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Users, BookOpen, Star, Rocket, ArrowRight } from "lucide-react";

export default function Day4Page() {
  return (
    <WorkshopLayout
      currentPath="/day4"
      title="Day 4: Career & Growth"
      nextPath="/day4/branding"
      nextTitle="Start Day 4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Community & Next Steps</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Turn your coding skills into a career. Build your personal brand, master documentation, and join the global community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/day4/branding" className="group card bg-white border-slate-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Star size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 1</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Developer Brand</h3>
            <p className="text-slate-600 mb-6">
              Your GitHub profile is your new resume. Learn how to optimize it to attract recruiters and collaborators.
            </p>
            <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
              Build Your Brand <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day4/documentation" className="group card bg-white border-slate-200 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <BookOpen size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 2</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Documentation</h3>
            <p className="text-slate-600 mb-6">
              Code is useless if no one knows how to use it. Master the art of writing READMEs and technical docs.
            </p>
            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              Write Docs <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day4/etiquette" className="group card bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 3</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Community Etiquette</h3>
            <p className="text-slate-600 mb-6">
              Open source is about people. Learn the unwritten rules of communication, kindness, and respect.
            </p>
            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              Learn Etiquette <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day4/next-steps" className="group card bg-white border-slate-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Rocket size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 4</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Next Steps</h3>
            <p className="text-slate-600 mb-6">
              The workshop is over, but your journey is just beginning. Resources, games, and paths to mastery.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Launch Career <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </WorkshopLayout>
  );
}
