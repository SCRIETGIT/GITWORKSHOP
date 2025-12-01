"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Building2, Globe, Server, Shield } from "lucide-react";

export default function IndustryUsagePage() {
  return (
    <WorkshopLayout
      currentPath="/day3/industry-usage"
      title="Industry Usage"
      nextPath="/day3/finding-projects"
      nextTitle="Finding Projects"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Open Source in the Real World</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Open source isn't just about free software. It's a strategic asset for businesses. 
            From startups to Fortune 500s, everyone uses it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-lg mb-4">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Adoption</h3>
            <p className="text-slate-600">
              90% of companies use open source software in some form. It speeds up development and reduces costs.
            </p>
          </div>

          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-50 text-green-600 w-fit rounded-lg mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Security & Reliability</h3>
            <p className="text-slate-600">
              "Given enough eyeballs, all bugs are shallow." Open source code is audited by thousands of developers, making it often more secure than proprietary code.
            </p>
          </div>

          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-purple-50 text-purple-600 w-fit rounded-lg mb-4">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Infrastructure</h3>
            <p className="text-slate-600">
              The internet runs on Linux (Open Source). The cloud runs on Kubernetes (Open Source). AI runs on PyTorch/TensorFlow (Open Source).
            </p>
          </div>

          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-orange-50 text-orange-600 w-fit rounded-lg mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Global Collaboration</h3>
            <p className="text-slate-600">
              Innovation happens faster when the whole world works together. No single company can hire all the smartest people, but open source can leverage them.
            </p>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
}
