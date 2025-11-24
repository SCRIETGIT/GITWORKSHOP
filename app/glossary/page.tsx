"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";

export default function GlossaryPage() {
  const terms = [
    { term: "Repository (Repo)", def: "A folder containing all your project files and revision history." },
    { term: "Commit", def: "A snapshot of your changes. Like a 'save point' in a game." },
    { term: "Stage (Index)", def: "The area where you prepare files before committing them." },
    { term: "Branch", def: "A parallel version of your code. Used to work on features in isolation." },
    { term: "Merge", def: "Combining changes from one branch into another." },
    { term: "Clone", def: "Downloading a copy of a remote repository to your local machine." },
    { term: "Fork", def: "A copy of someone else's repository on your own GitHub account." },
    { term: "Pull Request (PR)", def: "A request to merge your changes into the original repository." },
    { term: "Remote", def: "A version of your repository hosted on the internet (e.g., GitHub)." },
    { term: "Origin", def: "The default name for the remote repository you cloned from." },
    { term: "Upstream", def: "The original repository you forked from." },
    { term: "HEAD", def: "A pointer to the latest commit on your current branch." },
    { term: "Conflict", def: "When Git can't automatically merge changes because lines overlap." },
  ];

  return (
    <WorkshopLayout
      currentPath="/glossary"
      title="Git Glossary"
    >
      <div className="max-w-4xl mx-auto">
        <Slide title="Common Terminology">
          <p className="mb-6">
            Git has a lot of jargon. Here is a quick reference to help you speak the language.
          </p>
          <div className="grid gap-4">
            {terms.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all">
                <h3 className="font-bold text-blue-700 mb-1">{item.term}</h3>
                <p className="text-slate-600 text-sm">{item.def}</p>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
