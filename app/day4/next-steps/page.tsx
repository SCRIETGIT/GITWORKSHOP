"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import Link from "next/link";
import { Rocket, Gamepad2, Book, ArrowRight } from "lucide-react";

export default function NextStepsPage() {
  return (
    <WorkshopLayout
      currentPath="/day4/next-steps"
      title="Next Steps"
      nextPath="/"
      nextTitle="Back Home"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="The Journey Begins">
          <p className="mb-6 text-lg">
            Congratulations! You've completed the workshop. But Git is a skill you will refine for the rest of your career. Here is how to keep growing.
          </p>
          <div className="p-6 bg-blue-600 text-white rounded-xl shadow-lg text-center">
            <Rocket size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">You are now a Version Control User!</h3>
            <p className="text-blue-100">
              Go forth and commit code.
            </p>
          </div>
        </Slide>

        {/* Interactive Games */}
        <Slide title="Gamified Learning">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://learngitbranching.js.org/" target="_blank" className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="text-blue-500" />
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600">Learn Git Branching</h3>
              </div>
              <p className="text-sm text-slate-600">
                The best visual way to understand branching. Solve puzzles by typing Git commands.
              </p>
            </a>

            <a href="https://ohmygit.org/" target="_blank" className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-purple-400 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="text-purple-500" />
                <h3 className="font-bold text-slate-900 group-hover:text-purple-600">Oh My Git!</h3>
              </div>
              <p className="text-sm text-slate-600">
                An open source game that visualizes the internal structure of Git repositories in real-time.
              </p>
            </a>
          </div>
        </Slide>

        {/* Books & Docs */}
        <Slide title="Deep Dives">
          <div className="space-y-4">
            <a href="https://git-scm.com/book/en/v2" target="_blank" className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-all">
              <Book className="text-slate-600 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Pro Git Book</h4>
                <p className="text-sm text-slate-600">The official bible of Git. Completely free and extremely detailed.</p>
              </div>
            </a>
            
            <a href="https://docs.github.com/" target="_blank" className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-all">
              <Book className="text-slate-600 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">GitHub Docs</h4>
                <p className="text-sm text-slate-600">Guides for everything from GitHub Actions to Security.</p>
              </div>
            </a>
          </div>
        </Slide>

        {/* Final CTA */}
        <Slide title="Stay Connected">
          <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Join the SCRIET Community</h3>
            <p className="text-green-800 mb-8 max-w-lg mx-auto">
              Don't code alone. Share your projects, ask for help, and collaborate with your peers.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Back to Home <ArrowRight size={20} />
            </Link>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
