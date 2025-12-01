"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { User, Star, Code, PenTool, Github } from "lucide-react";

export default function DeveloperProfilePage() {
  return (
    <WorkshopLayout
      currentPath="/day2/developer-profile"
      title="Creating a Developer Profile"
      nextPath="/day3"
      nextTitle="Day 3: Open Source"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Your Resume, But Better</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            In the modern tech world, your GitHub profile is your portfolio. It shows not just what you say you can do, but what you have actually done.
          </p>
        </div>

        {/* The Special Repo */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 mb-12 shadow-xl">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Star size={32} className="text-yellow-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">The Secret Feature</h2>
              <p className="text-slate-300 mb-6">
                GitHub has a hidden feature. If you create a repository with the <strong>exact same name as your username</strong>, 
                its README will appear on your profile page.
              </p>
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm border border-white/10">
                <span className="text-green-400">lakshya</span> / <span className="text-green-400">lakshya</span> is a ✨special✨ repository...
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">What to include?</h2>
            
            <div className="flex gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg h-fit"><User size={20}/></div>
              <div>
                <h3 className="font-bold text-slate-900">About Me</h3>
                <p className="text-sm text-slate-600">Who are you? What are you learning? What are your goals?</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 bg-teal-50 text-teal-600 rounded-lg h-fit"><Code size={20}/></div>
              <div>
                <h3 className="font-bold text-slate-900">Tech Stack</h3>
                <p className="text-sm text-slate-600">Languages, frameworks, and tools you know. Use icons/badges!</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg h-fit"><PenTool size={20}/></div>
              <div>
                <h3 className="font-bold text-slate-900">Projects</h3>
                <p className="text-sm text-slate-600">Highlight your best work with links and descriptions.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Github size={20}/> Example README.md
            </h3>
            <pre className="bg-white p-4 rounded-lg text-xs text-slate-600 overflow-x-auto border border-slate-200">
{`# Hi there, I'm Lakshya 👋

## 👨‍💻 About Me
- 🎓 B.Tech Student at SCRIET
- 🔭 Working on: React & Next.js
- 🌱 Learning: Cloud Computing

## 🛠 Tech Stack
![Python](...) ![React](...) ![Git](...)

## 📫 Connect
- LinkedIn: ...
- Twitter: ...
`}
            </pre>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6">
          <h3 className="font-bold text-yellow-800 mb-2">Pro Tip: Use Profile Generators</h3>
          <p className="text-yellow-700 text-sm">
            You don't have to write everything from scratch. Tools like <strong>GitHub Profile README Generator</strong> can help you create a stunning profile in minutes.
          </p>
        </div>
      </div>
    </WorkshopLayout>
  );
}
