"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import Link from "next/link";
import { Rocket, Gamepad2, Book, ArrowRight } from "lucide-react";

export default function NextStepsPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/next-steps"
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

        {/* SCRIET GitHub Organization */}
        <Slide title="SCRIET GitHub Organization">
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">scriet-meerut</h3>
              <p className="text-slate-600 mb-4">A centralized hub for student projects.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🌐</div>
                  <h4 className="font-bold text-slate-900 text-sm">Web Apps</h4>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-bold text-slate-900 text-sm">ML Projects</h4>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">📱</div>
                  <h4 className="font-bold text-slate-900 text-sm">Mobile Apps</h4>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-3">Benefits</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Showcase institutional talent
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Collaboration across batches
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Mentorship opportunities
                </li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Your Roadmap */}
        <Slide title="Your Roadmap">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">1</div>
              <div>
                <h4 className="font-bold text-slate-900">Week 1-2</h4>
                <p className="text-sm text-slate-600">First contribution (docs), Setup Profile</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">2</div>
              <div>
                <h4 className="font-bold text-slate-900">Month 1-3</h4>
                <p className="text-sm text-slate-600">3-5 contributions, 1 personal project</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">3</div>
              <div>
                <h4 className="font-bold text-slate-900">Month 3-6</h4>
                <p className="text-sm text-slate-600">Bigger contributions, Mentor others</p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl text-center">
              <h4 className="font-bold text-purple-900 mb-2">Upcoming Events</h4>
              <p className="text-sm text-purple-800">Hacktoberfest, Google Summer of Code, MLH Hackathons</p>
            </div>
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
