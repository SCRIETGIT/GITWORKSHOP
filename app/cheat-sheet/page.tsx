"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

export default function CheatSheetPage() {
  return (
    <WorkshopLayout
      currentPath="/cheat-sheet"
      title="Git Cheat Sheet"
    >
      <div className="max-w-4xl mx-auto">
        <Slide title="Setup & Configuration">
          <CodeBlock
            code={`# Configure user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# View configuration
git config --list`}
            language="bash"
          />
        </Slide>

        <Slide title="Creating & Cloning">
          <CodeBlock
            code={`# Initialize new repository
git init

# Clone existing repository
git clone https://github.com/username/repo.git`}
            language="bash"
          />
        </Slide>

        <Slide title="Basic Workflow">
          <CodeBlock
            code={`# Check status
git status

# Stage files
git add filename.txt
git add .

# Commit changes
git commit -m "Your message"

# Push to remote
git push origin main`}
            language="bash"
          />
        </Slide>

        <Slide title="Branching">
          <CodeBlock
            code={`# List branches
git branch

# Create branch
git branch feature-name

# Switch branch
git checkout feature-name

# Create and switch (shortcut)
git checkout -b feature-name

# Delete branch
git branch -d feature-name`}
            language="bash"
          />
        </Slide>

        <Slide title="Remote Repositories">
          <CodeBlock
            code={`# View remotes
git remote -v

# Add remote
git remote add origin https://github.com/username/repo.git

# Pull changes
git pull origin main

# Push changes
git push origin main`}
            language="bash"
          />
        </Slide>

        <Slide title="History & Logs">
          <CodeBlock
            code={`# View commit history
git log

# Compact log
git log --oneline

# Visual graph view
git log --graph --oneline --all`}
            language="bash"
          />
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
