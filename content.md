# 🚀 Day 1 — Introduction to Git & Version Control

Software without version control is like writing an exam with no option to erase. One mistake and your future regrets multiply forever. Developers learned this the hard way — so we invented **Version Control**.

This day builds the foundation your whole workshop stands on. If attendees understand *why* version control matters, the commands they'll learn later will feel like superpowers, not syntax to memorize.

---

## 🧠 What is Version Control?

Imagine building a big project — a website, a machine-learning pipeline, an app — and suddenly you break something.
You scream internally. Then externally.
Now what? Start over? Rewrite everything? Pray?

Version Control solves this.

In simple terms:

> **Version Control tracks changes in files over time so you can revert, compare, experiment, collaborate, and never lose progress.**

Think of it like Google Docs for code — but more powerful, offline-friendly, branch-capable, history-preserving, and built for developers.

---

### Why version control is **non-negotiable** in real development?

| Without Version Control                           | With Version Control (Git)                |
| ------------------------------------------------- | ----------------------------------------- |
| Files named `final_v9_last_actual_final_fix.java` | One clean history — every change logged   |
| Fear of breaking code                             | Freedom to experiment safely              |
| Difficult team collaboration                      | Multiple developers merge code seamlessly |
| No backup & no rollback                           | Restore any version, any time             |
| Chaos grows as project scales                     | Structure, clarity, accountability        |

Version control doesn’t just store code; it stores *decisions*, *mistakes*, *improvements*, and *history*.
Like a time machine — but for your brain.

---

## 🌍 Why Big Tech & Open Source Runs on Git

Open source is the bloodstream of modern tech.
Nearly every MNC you admire survives, scales, and innovates because of collaborative development enabled by Git.

### How top companies use Git + Open Source

| Company | Example Open Source Projects | Why they open-source? |
|---|---|
| **Meta** | React, PyTorch, HHVM | Faster innovation, global contributions |
| **Google** | TensorFlow, Chromium, Protocol Buffers | Standardizing technology & attracting talent |
| **Apple** | Swift, WebKit | Community feedback + performance evolution |
| **Microsoft** | VS Code, Typescript, .NET | Ecosystem growth + developer adoption |

These aren’t hobby projects. They are billion-dollar ecosystems built in public, powered by developers contributing worldwide through **GitHub**.

> **Learning Git isn’t just a skill. It’s entry into the world’s largest collaborative engineering culture.**

---

## 🛠 Installing Git — Step by Step

Git runs on any OS — Linux, macOS, Windows.
You aren’t installing software. You’re installing a **lifestyle upgrade**.

### 1. Check if Git is already installed

```bash
git --version
```

If you see a version like `git version 2.x.x`, you're ready.
If not:

---

### 2. Install Git

#### 🧩 Windows

Download from official Git site
Run installer → keep defaults → enable Git Bash → done.

#### 🍎 macOS

```bash
brew install git
```

or install Xcode command line tools which includes Git:

```bash
xcode-select --install
```

#### 🐧 Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install git
```

#### 🐧 Linux (Fedora/RHEL)

```bash
sudo dnf install git
```

After installation:

```bash
git --version
```

If the command responds, you’ve unlocked Level 1.

---

## 🏠 Local vs Remote Repositories

A repository is just a **project folder tracked by Git**.

There are two kinds:

### 🔹 Local Repository

Lives inside your machine.
Used for tracking changes, experimenting, committing progress.

Example:

```bash
mkdir my-project
cd my-project
git init
```

Boom. That folder now remembers everything you do inside it.

---

### 🔹 Remote Repository

Hosted on platforms like **GitHub**, **GitLab**, **Bitbucket**.
Makes collaboration, backup & sharing easy.

Typical workflow:

1. Work locally
2. Commit changes
3. Push to remote (GitHub)
4. Collaborate & merge changes

```bash
git remote add origin <remote_url>
git push -u origin main
```

Remote = your project on the internet
Local   = your project on your computer
Git keeps them in sync like a heartbeat.

---

# Day 1 Summary

| Concept               | Why it Matters                          |
| --------------------- | --------------------------------------- |
| Version Control       | Saves you from code disasters           |
| Git                   | Fast, distributed VCS loved by industry |
| Open Source in MNCs   | Backbone of modern tech ecosystems      |
| Git Installation      | First step to hands-on development      |
| Local vs Remote Repos | Work locally, share globally            |

---

Day 1 gives the **philosophy of Git**.

# 🏗️ Day 2 — Core Git Workflow, GitHub Interface & Collaboration

Day 1 taught *why* Git exists.
Today we learn **how to use it like real developers**.

This is where commands, branches, collaboration, and open-source workflows come alive.

---

## 🔥 Essential Git Commands

These commands are the oxygen of Git. Use them daily.

| Command | Meaning | When to Use |
|---|---|
| `git init` | Create a new repository | Start tracking a project locally |
| `git add` | Stage changes for commit | After editing files — prepare to save |
| `git commit` | Save a snapshot of changes | Store progress with a message |
| `git clone` | Copy a repository from remote | Start working on any GitHub project |
| `git push` | Upload commits to remote repo | Share changes with others / backup |
| `git pull` | Download latest changes | Sync local repo with the remote |

---

### 🔹 `git init`

Turns a normal folder into a Git-tracked repository.

```bash
mkdir project
cd project
git init
```

A hidden `.git/` folder is created — this is your project’s memory storage.

---

### 🔹 `git add`

Stages files for commit.

```bash
git add file1.js
git add .
```

Think of staging as **putting files in a box to be stored in history**.

---

### 🔹 `git commit`

Stores the staged files as a permanent snapshot.

```bash
git commit -m "Add authentication module"
```

Commit messages matter. You're not writing a diary, you're documenting history.

---

### 🔹 `git clone`

Copies entire remote repository to your system.

```bash
git clone https://github.com/user/repo.git
```

---

### 🔹 `git push` & `git pull`

```bash
git push origin main
git pull origin main
```

Push: send your work to GitHub
Pull: download others' work into your repo

Simple logic — communication between **your laptop** and **the cloud**.

---

## 🖥️ Understanding the GitHub Interface

A GitHub repository contains:

| Section       | Purpose                           |
| ------------- | --------------------------------- |
| Code          | All source files                  |
| Issues        | Bug tracking and feature requests |
| Pull Requests | Code merging & review             |
| Actions       | CI/CD automation                  |
| Projects      | Kanban boards for planning        |
| Wiki          | Documentation guide               |
| Insights      | Analytics & contributor data      |

Navigation flow:

**Repo Home → Code → Branches → Pull Requests → Issues → Settings**

Once you know this map, even large open-source projects become readable.

---

## 🌿 Branching

Branches are parallel universes for your code.
You can experiment without touching the main project.

```bash
git branch feature-ui
git checkout feature-ui
```

or simply

```bash
git checkout -b feature-ui
```

Work on a feature → commit → push → open Pull Request.

---

## 🍴 Forking

Forking is **copying someone else’s repository into your GitHub account**.

```bash
Fork → Clone → Branch → Code → Commit → Push → Pull Request
```

Perfect for open-source contribution.

You do **not** need permission to fork.
You only need approval to merge your changes back.

---

## 🔄 Pull Requests (PRs)

A PR is a request to merge your changes into another branch or repo.

What it contains:

* Your commits
* Description of changes
* Code diffs
* Reviewer discussion

Workflow:

1. Push branch to GitHub
2. Click **New Pull Request**
3. Review → Approve → Merge

Pull Requests are the heart of collaboration.

---

## ⚔ Merge Conflicts

When two people change the same part of a file, Git gets confused.

Git marks conflict areas using:

```
<<<<<<< HEAD
your version
=======
their version
>>>>>>> other-branch
```

Resolve manually → stage → commit → merge again.

Merge conflict = two brains editing one sentence differently.
You must decide the correct final version.

---

## 🏢 Issues, Projects & Milestones

### ✔ Issues

Track bugs, enhancements, tasks.

```text
Title: Fix login timeout bug
Description: Debug OTP retry handler
Labels: bug, priority-high
```

### 📌 Projects

Kanban style boards:

```
To Do → In Progress → Done
```

Ideal for team task tracking.

### 🎯 Milestones

Group multiple issues under a single target release.

Example:

> Milestone: "v2.0 Feature Release"
> Contains: 14 issues, 7 PRs

---

## 🧑‍💻 Creating a Developer Profile

Your GitHub profile is your **resume' without HR filters**.

Steps:

1. Create repository named **`username/username`**
2. Add `README.md`
3. Include:

   * Skills
   * Projects
   * Tech stack
   * Contact links
   * Stats badges
   * A short introduction

Example README snippet:

```markdown
# Hi, I'm Lakshya 👋
Data Science + Software Engineering  
I build, break, and fix code to learn better.
```

A strong profile attracts recruiters, collaborators, and open-source maintainers.

---

# Day 2 Summary

| Topic               | Skills Gained                           |
| ------------------- | --------------------------------------- |
| Basic Commands      | init, add, commit, clone, push, pull    |
| Branching & Forking | Parallel development + open source      |
| Pull Requests       | Code review and merging                 |
| Merge Conflicts     | Resolving team-level code intersections |
| Issues & Projects   | Collaboration + workflow organization   |
| Developer Profile   | Personal branding in developer world    |

---

**Day 1 = philosophy**
**Day 2 = mechanics**

# 🌍 Day 3 — Getting Started with Open Source

Open Source is not just code on the internet. It’s a **global collaborative engineering culture**.
The world’s most important software — the tools that power companies, research labs, web servers, AI models — are mostly open source.

Today is the bridge from *learning Git* → *contributing to the real tech world*.

---

## 🧩 What is Open Source?

Open Source software is software whose source code is:

✔ public
✔ modifiable by anyone
✔ redistributable under a license

Meaning: You don't just use the software.
You can **read it, improve it, break it, fix it, evolve it**.

Compare:

| Proprietary Software      | Open Source Software               |
| ------------------------- | ---------------------------------- |
| Closed source             | Source code open to public         |
| Modifications not allowed | Anyone can contribute              |
| Controlled by one company | Built by the community             |
| Example: Windows          | Example: Linux, Git, Python, React |

Open Source is a **shared brain**, constantly improving because millions think together.

---

## 🏭 Real Industry Usage

Open source isn’t charity. Big tech relies on it because it accelerates innovation, reduces cost, and attracts global contributors.

### Examples

### 🔹 React — created & maintained by **Meta**

* Used by Facebook, Instagram, Netflix, Uber
* Open sourced so the community can improve UI development at scale
* Millions of developers contribute, find bugs, and create ecosystem libraries

### 🔹 TensorFlow — by **Google**

* Backbone of ML research & production
* Open source allows faster research evolution
* Universities & startups build on it, improving the tool

### 🔹 Kubernetes — by Google & CNCF

* Runs cloud deployments at global scale
* Used by Microsoft, Oracle, AWS, Shopify
* Community contributes new features weekly

These companies didn’t release open source projects out of kindness.
They did it because **a million brains are smarter than one company**.

---

## 🧭 Finding Beginner-Friendly Repositories

Not every open source repo is friendly. Some are cryptic jungles.
Your job is to find welcoming, well-tagged, beginner-compatible ones.

Look for labels like:

```
good first issue
beginner-friendly
help-wanted
documentation
easy-fix
```

Search places:

| Platform                    | 🔍 How to find beginner issues      |
| --------------------------- | ----------------------------------- |
| GitHub                      | Filter issues by `good-first-issue` |
| Open Source Guides          | curated lists of starter repos      |
| Google Summer of Code repos | beginner-structured projects        |
| Awesome-Lists on GitHub     | curated repository directories      |

Recommended starter repos:

| Repo Type   | Examples                               |
| ----------- | -------------------------------------- |
| Web Dev     | React, Vue, Next.js                    |
| ML/AI       | TensorFlow, Scikit-learn, Transformers |
| DevOps      | Kubernetes, Docker, Ansible            |
| Tools & CLI | Git, Neovim, Homebrew                  |

Start small. Fix documentation. Improve examples. Clean code formatting.
Every contribution counts.

---

## 🔥 How to Contribute to Real Projects (Step-by-Step)

This is the most valuable skill of the workshop.

```
Fork → Clone → Create Branch → Make Change → Commit → Push → Open PR → Review → Merge
```

### 1. Fork the repository

Copies repo to your account → gives you freedom to experiment.

### 2. Clone locally

```bash
git clone <repo-url>
```

### 3. Create a new branch

```bash
git checkout -b fix-typo-readme
```

### 4. Make changes

Code, fix bugs, add docs, improve examples.

### 5. Commit

```bash
git commit -m "Fix typo in installation guide"
```

### 6. Push

```bash
git push origin fix-typo-readme
```

### 7. Open Pull Request on GitHub

Describe changes clearly
Stay polite
Respond to review suggestions

A merged PR is your **real proof of contribution**.

---

## ✍️ Writing Good Documentation

Code without documentation is a locked treasure chest.
Open source projects survive because people can **understand** how to use them.

Good documentation includes:

| Element                 | Why it matters                          |
| ----------------------- | --------------------------------------- |
| Installation Steps      | Helps users get started immediately     |
| Examples & Tutorials    | Shows real usage, reduces confusion     |
| Code Comments           | Helps future contributors maintain code |
| Contribution Guidelines | Explains how to participate             |
| Changelog               | Tracks improvements across releases     |

DOCS ≠ boring text.
DOCS = pathways for community growth.

---

## 🛡 Maintaining Repositories

Maintainers are the backbone — they review PRs, triage issues, and shape project direction.

A good maintainer:

✔ merges useful PRs
✔ rejects harmful ones politely
✔ labels issues clearly
✔ keeps documentation clean
✔ ensures consistent coding style

Maintaining is leadership.
You don’t just write code — you manage a global community.

---

# Day 3 Summary

| Topic                | Skills Gained                                              |
| -------------------- | ---------------------------------------------------------- |
| What is Open Source? | Understand rights, licensing, community-driven development |
| Industry Usage       | How Meta, Google, Apple, etc rely on OSS                   |
| Finding Repositories | Learn to discover beginner-friendly issues                 |
| Contributing         | Fork, clone, branch, PR workflow                           |
| Documentation        | Write readable guides & tutorials                          |
| Maintaining Projects | Manage contributors + project life cycle                   |

---

Day 1 = Why Git matters
Day 2 = How Git works
Day 3 = How you join the global developer world



