"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Globe, Laptop, Key, Shield, User } from "lucide-react";

export default function GitHubIntroPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/github-intro"
      title="Understanding GitHub"
      nextPath="/day2/branching"
      nextTitle="Branching & Forking"
    >
      <div className="max-w-4xl mx-auto">
        {/* Git vs GitHub */}
        <Slide title="Git vs GitHub: What's the Difference?">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="text-slate-700" size={28} />
                <h3 className="text-xl font-bold text-slate-900">Git</h3>
              </div>
              <p className="text-slate-600 mb-4">
                The <strong>tool</strong> installed on your computer. It tracks changes locally.
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 text-sm text-slate-500">
                Like "Save" in a video game (Single Player).
              </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-400" size={28} />
                <h3 className="text-xl font-bold text-white">GitHub</h3>
              </div>
              <p className="text-slate-300 mb-4">
                The <strong>website</strong> where you upload your Git repositories.
              </p>
              <div className="bg-slate-800 p-3 rounded border border-slate-700 text-sm text-slate-400">
                Like "Cloud Save" or Multiplayer Servers.
              </div>
            </div>
          </div>
        </Slide>

        {/* Why GitHub */}
        <Slide title="Why Do We Need GitHub?">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🌍", title: "Collaboration", desc: "Work with anyone, anywhere in the world." },
              { icon: "💼", title: "Portfolio", desc: "Your public code is your resume for tech jobs." },
              { icon: "📦", title: "Open Source", desc: "Contribute to projects like React, VS Code, and Linux." },
              { icon: "🚀", title: "DevOps", desc: "Automate testing and deployment (CI/CD)." },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Slide>

        {/* Profile Setup */}
        <Slide title="Setting Up Your Profile">
          <div className="flex items-start gap-6">
            <div className="flex-1 space-y-4">
              <p>Your GitHub profile is your developer identity. Make it professional.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <User size={20} className="text-blue-600" />
                  <span className="text-slate-700"><strong>Photo:</strong> Use a clear, professional headshot.</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-xl">📝</span>
                  <span className="text-slate-700"><strong>Bio:</strong> "CS Student at SCRIET | React & Python Developer"</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-xl">📌</span>
                  <span className="text-slate-700"><strong>Pinned Repos:</strong> Showcase your best 4-6 projects.</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-1/3">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-lg transform rotate-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="w-24 h-3 bg-slate-200 rounded mb-1"></div>
                    <div className="w-16 h-2 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* SSH Keys */}
        <Slide title="Authentication: SSH Keys">
          <p className="mb-6">
            To push code without typing your password every time, we use SSH keys. It's like a digital ID card for your computer.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">1</span>
                Generate Key
              </h3>
              <div className="code-block">
                <code className="text-sm">ssh-keygen -t ed25519 -C "your.email@example.com"</code>
              </div>
              <p className="text-xs text-slate-500 mt-1">Press Enter to accept all defaults.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">2</span>
                Copy Key
              </h3>
              <div className="code-block">
                <code className="text-sm">
                  # Windows (PowerShell)<br/>
                  cat ~/.ssh/id_ed25519.pub | clip<br/><br/>
                  # Mac/Linux<br/>
                  cat ~/.ssh/id_ed25519.pub
                </code>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
              <Shield className="text-yellow-600 mt-1" />
              <div>
                <h4 className="font-bold text-yellow-800">Security Warning</h4>
                <p className="text-sm text-yellow-700">
                  Never share your <strong>private key</strong> (the file without .pub). Only share the public key!
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
