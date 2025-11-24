"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Search, Tag, ExternalLink, CheckCircle } from "lucide-react";

export default function FindingProjectsPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/finding-projects"
      title="Finding Projects"
      nextPath="/day3/contribution-flow"
      nextTitle="Contribution Flow"
    >
      <div className="max-w-4xl mx-auto">
        {/* The Problem */}
        <Slide title="Where Do I Start?">
          <p className="mb-6">
            The hardest part of open source is finding that first issue to work on. You don't need to build a new operating system; you just need to fix a small bug.
          </p>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <Tag className="text-purple-600" size={32} />
            <div>
              <h3 className="font-bold text-purple-900 text-lg">The Magic Label: "good first issue"</h3>
              <p className="text-purple-800 text-sm">
                Maintainers use this label specifically for beginners. These tasks are usually well-defined, isolated, and not too complex.
              </p>
            </div>
          </div>
        </Slide>

        {/* Where to Look */}
        <Slide title="Where to Look">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-all group">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Search size={16} className="text-blue-500" /> GitHub Explore
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Your personalized feed on GitHub suggests repos based on your stars and languages.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-green-400 transition-all group">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ExternalLink size={16} className="text-green-500" /> Aggregators
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• goodfirstissue.dev</li>
                <li>• firstcontributions.github.io</li>
                <li>• up-for-grabs.net</li>
              </ul>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition-all group">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle size={16} className="text-orange-500" /> Projects You Use
              </h3>
              <p className="text-sm text-slate-600">
                Found a bug in a library you use? That is the <strong>best</strong> place to start contributing.
              </p>
            </div>
          </div>
        </Slide>

        {/* Etiquette */}
        <Slide title="Before You Code">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">1</div>
              <div>
                <h4 className="font-bold text-slate-900">Read CONTRIBUTING.md</h4>
                <p className="text-sm text-slate-600">Every project has rules. Read them first or your PR might be ignored.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">2</div>
              <div>
                <h4 className="font-bold text-slate-900">Check Existing PRs</h4>
                <p className="text-sm text-slate-600">Is someone else already working on it? Don't duplicate work.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">3</div>
              <div>
                <h4 className="font-bold text-slate-900">Ask for Assignment</h4>
                <p className="text-sm text-slate-600">Comment on the issue: "Hi, I'd like to work on this!" and wait for approval.</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
