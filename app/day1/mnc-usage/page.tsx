"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Globe, Server, Smartphone, Cpu, Code } from "lucide-react";

export default function MNCUsagePage() {
  return (
    <WorkshopLayout
      currentPath="/day1/mnc-usage"
      title="MNCs & Open Source"
      nextPath="/day1/installation"
      nextTitle="Installing Git"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Why Big Tech Loves Open Source</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Open source isn't just for hobbyists. It's the engine powering the world's largest technology companies.
            Meta, Google, and Apple don't just use open source; they depend on it for their survival and innovation.
          </p>
        </div>

        <div className="space-y-12">
          {/* Meta Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-blue-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Globe size={24} />
                <h2 className="text-2xl font-bold">Meta (Facebook)</h2>
              </div>
              <p className="text-blue-100">Building the web and AI infrastructure of the future.</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Code size={20} className="text-blue-600" /> Key Projects
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">React:</span> The world's most popular UI library.
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">PyTorch:</span> The framework powering modern AI research.
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">LLaMA:</span> Open-source Large Language Models.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Why they do it?</h3>
                  <p className="text-slate-600 mb-4">
                    Meta open-sources tools to accelerate innovation. By sharing React, they got thousands of engineers worldwide improving their internal tool for free.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="text-sm text-slate-500 italic">
                      "We believe that openness leads to better, safer, and faster innovation."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-red-500 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Server size={24} />
                <h2 className="text-2xl font-bold">Google</h2>
              </div>
              <p className="text-red-100">Organizing the world's information with open code.</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Cpu size={20} className="text-red-500" /> Key Projects
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">TensorFlow:</span> Machine learning for everyone.
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">Kubernetes:</span> The standard for cloud computing.
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">Android:</span> The world's most used mobile OS.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Why they do it?</h3>
                  <p className="text-slate-600 mb-4">
                    Google builds ecosystems. By open-sourcing Kubernetes, they ensured the cloud industry grew in a way that benefited their cloud services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Apple Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-800 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Smartphone size={24} />
                <h2 className="text-2xl font-bold">Apple</h2>
              </div>
              <p className="text-slate-300">Privacy, performance, and open foundations.</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Code size={20} className="text-slate-800" /> Key Projects
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">Swift:</span> A powerful language for iOS/macOS.
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-900">WebKit:</span> The engine behind Safari.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Why they do it?</h3>
                  <p className="text-slate-600 mb-4">
                    Even the most secretive company relies on open source. Swift was open-sourced to make it the dominant language for mobile development, attracting more developers to the Apple ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">The Takeaway</h3>
          <p className="text-blue-700 text-lg max-w-2xl mx-auto">
            When you learn Git and Open Source, you aren't just learning a tool. You are learning the 
            <strong> standard operating procedure</strong> of the entire software industry.
          </p>
        </div>
      </div>
    </WorkshopLayout>
  );
}
