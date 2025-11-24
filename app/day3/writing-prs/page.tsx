"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { PenTool, CheckCircle, XCircle, MessageSquare } from "lucide-react";

export default function WritingPRsPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/writing-prs"
      title="Writing Great PRs"
      nextPath="/day4"
      nextTitle="Day 4: Career & Growth"
    >
      <div className="max-w-4xl mx-auto">
        {/* The Pitch */}
        <Slide title="The Pitch">
          <p className="mb-6 text-lg">
            A Pull Request is a pitch. You are selling your code to the maintainer. If they don't understand it, they won't merge it.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">The PR Template</h3>
            <div className="font-mono text-sm text-slate-700 bg-white p-4 rounded border border-slate-200">
              <p className="font-bold text-blue-600">## Summary</p>
              <p className="mb-4">Briefly describe what you changed and why.</p>

              <p className="font-bold text-blue-600">## Changes</p>
              <ul className="list-disc list-inside mb-4">
                <li>Fixed bug in login form</li>
                <li>Added validation for email field</li>
                <li>Updated tests</li>
              </ul>

              <p className="font-bold text-blue-600">## Related Issue</p>
              <p>Closes #123</p>
            </div>
          </div>
        </Slide>

        {/* Good vs Bad */}
        <Slide title="Good vs Bad PRs">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle size={20} /> The Good PR
              </h3>
              <ul className="space-y-3 text-sm text-green-800">
                <li>✅ <strong>Small:</strong> Changes one thing well.</li>
                <li>✅ <strong>Focused:</strong> Doesn't include random formatting changes.</li>
                <li>✅ <strong>Tested:</strong> Includes tests for the new code.</li>
                <li>✅ <strong>Descriptive:</strong> Explains the "Why", not just the "What".</li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
              <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <XCircle size={20} /> The Bad PR
              </h3>
              <ul className="space-y-3 text-sm text-red-800">
                <li>❌ <strong>Huge:</strong> Changes 50 files at once.</li>
                <li>❌ <strong>Vague:</strong> Title is "Fix stuff".</li>
                <li>❌ <strong>Breaking:</strong> Changes API without warning.</li>
                <li>❌ <strong>Silent:</strong> No description or context provided.</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Handling Feedback */}
        <Slide title="Handling Feedback">
          <p className="mb-6">
            Code review is a conversation. Don't take it personally.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="text-blue-500 mb-2"><MessageSquare /></div>
              <h4 className="font-bold text-slate-900">Be Polite</h4>
              <p className="text-sm text-slate-600">"Thanks for the review!" goes a long way.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="text-purple-500 mb-2"><PenTool /></div>
              <h4 className="font-bold text-slate-900">Ask Questions</h4>
              <p className="text-sm text-slate-600">If you don't understand a comment, ask for clarification.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="text-green-500 mb-2"><CheckCircle /></div>
              <h4 className="font-bold text-slate-900">Iterate</h4>
              <p className="text-sm text-slate-600">Push fixes quickly to show you are engaged.</p>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
