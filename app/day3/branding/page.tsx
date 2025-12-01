"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Star, CheckCircle, User, Layout, BarChart } from "lucide-react";

export default function BrandingPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/branding"
      title="Building Your Developer Brand"
      nextPath="/day3/markdown-guide"
      nextTitle="Markdown Guide"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="GitHub is Your Resume">
          <p className="mb-6 text-lg">
            In the modern tech industry, recruiters look at your GitHub profile before your PDF resume. It proves you can actually build things.
          </p>
          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-xl border border-slate-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-700 rounded-full border-2 border-slate-600"></div>
              <div>
                <div className="h-4 w-32 bg-slate-700 rounded mb-2"></div>
                <div className="h-3 w-48 bg-slate-800 rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 bg-slate-800 rounded border border-slate-700"></div>
              ))}
            </div>
            <div className="flex gap-1">
              {[...Array(30)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${Math.random() > 0.5 ? 'bg-green-500' : 'bg-slate-800'}`}></div>
              ))}
            </div>
          </div>
        </Slide>

        {/* Checklist */}
        <Slide title="Profile Checklist">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <User className="text-blue-500" /> Basics
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Professional Photo</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Real Name</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Clear Bio ("Student at SCRIET")</li>
              </ul>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Star className="text-yellow-500" /> Content
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Pinned Repos (Best 4-6)</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Profile README</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> No Empty Forks</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Profile README */}
        <Slide title="The Secret Weapon: Profile README">
          <p className="mb-4">
            If you create a repository with the <strong>same name as your username</strong> (e.g., <code>lakshya/lakshya</code>), its README will appear on your profile page!
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">What to include:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🛠️</div>
                <h4 className="font-bold text-slate-900 text-sm">Tech Stack</h4>
                <p className="text-xs text-slate-500">Icons of languages you know</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="font-bold text-slate-900 text-sm">Learning</h4>
                <p className="text-xs text-slate-500">What you are studying now</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-bold text-slate-900 text-sm">Stats</h4>
                <p className="text-xs text-slate-500">Commit streaks & language usage</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Pro Tip */}
        <Slide title="Quality Over Quantity">
          <div className="flex items-start gap-4 p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
            <Star className="text-yellow-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Don't just fork everything!</h3>
              <p className="text-sm text-yellow-800">
                Recruiters know the difference between a project you built and a project you just clicked "Fork" on. 
                It's better to have 3 solid original projects than 50 empty forks.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
