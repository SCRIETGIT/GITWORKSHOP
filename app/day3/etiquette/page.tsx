"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Heart, MessageCircle, AlertTriangle, ThumbsUp } from "lucide-react";

export default function EtiquettePage() {
  return (
    <WorkshopLayout
      currentPath="/day3/etiquette"
      title="Community Etiquette"
      nextPath="/day3/next-steps"
      nextTitle="Next Steps"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="Open Source is About People">
          <p className="mb-6 text-lg">
            Behind every line of code is a human being. Most maintainers are volunteers working in their free time. Kindness is your most important tool.
          </p>
          <div className="bg-pink-50 border border-pink-100 rounded-xl p-6 flex items-center gap-4">
            <Heart className="text-pink-500" size={32} />
            <p className="text-pink-800 font-medium">
              "Treat others as you would like to be treated."
            </p>
          </div>
        </Slide>

        {/* Do's and Don'ts */}
        <Slide title="The Golden Rules">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <ThumbsUp size={20} /> Do This
              </h3>
              <ul className="space-y-3 text-sm text-green-800">
                <li>✅ <strong>Search First:</strong> Check if your issue already exists before posting.</li>
                <li>✅ <strong>Be Patient:</strong> It might take days or weeks for a reply.</li>
                <li>✅ <strong>Provide Context:</strong> Screenshots, logs, and steps to reproduce.</li>
                <li>✅ <strong>Say Thanks:</strong> Gratitude motivates maintainers.</li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 rounded-xl border border-red-100">
              <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertTriangle size={20} /> Don't Do This
              </h3>
              <ul className="space-y-3 text-sm text-red-800">
                <li>❌ <strong>"Plz fix":</strong> Don't demand fixes. You are not a customer.</li>
                <li>❌ <strong>Ghosting:</strong> Don't open a PR and then disappear.</li>
                <li>❌ <strong>Spamming:</strong> Don't comment "+1" or "Any update?" repeatedly.</li>
                <li>❌ <strong>Entitlement:</strong> Remember, you are getting this software for free.</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Code of Conduct */}
        <Slide title="Code of Conduct (CoC)">
          <p className="mb-4">
            Most projects have a <code>CODE_OF_CONDUCT.md</code> file. It defines acceptable behavior.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Zero Tolerance</h3>
            <p className="text-slate-600 text-sm mb-4">
              Harassment, discrimination, and trolling are never okay. Maintainers have the right to ban toxic users.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">Be Inclusive</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">Be Respectful</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">Be Professional</span>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
