# GitHub & Open Source Development Workshop
## Complete Workshop Content Guide

---

## Day 1: Introduction to Git & Version Control

### What is Version Control?

Version control is a system that records changes to files over time so you can recall specific versions later. Think of it as a "time machine" for your code.

**Why Version Control Matters:**
- Track every change made to your project
- Collaborate with multiple developers without conflicts
- Revert to previous versions if something breaks
- Understand who changed what and why
- Work on features independently without affecting main code

### Real-World Usage by Tech Giants

**Meta (Facebook):**
- Uses Git for managing billions of lines of code
- Thousands of engineers collaborate daily on the same codebase
- Open-sourced React, PyTorch, and many other projects

**Google:**
- Manages Android OS (one of the largest open-source projects)
- Hosts thousands of open-source projects
- Uses version control for Chrome, TensorFlow, Kubernetes

**Apple:**
- Uses Git for iOS, macOS development
- Contributes to Swift, WebKit, and other open-source projects
- Manages collaboration across global teams

**Why Companies Use Version Control:**
- Safe experimentation without breaking production code
- Clear audit trail of changes
- Efficient team collaboration across time zones
- Faster bug tracking and resolution

### Installing Git

**For Windows:**
1. Download Git from [git-scm.com](https://git-scm.com)
2. Run the installer
3. Use default settings (Git Bash is recommended)
4. Verify installation: Open terminal and type `git --version`

**For macOS:**
1. Install via Homebrew: `brew install git`
2. Or download from [git-scm.com](https://git-scm.com)
3. Verify: `git --version`

**For Linux:**
```bash
sudo apt-get update
sudo apt-get install git
```

**First-Time Configuration:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list
```

### Git Basics: Core Commands

#### 1. Creating a Repository (`git init`)

```bash
# Create a new project folder
mkdir my-first-project
cd my-first-project

# Initialize Git
git init
```

This creates a hidden `.git` folder that tracks all changes.

#### 2. Checking Status (`git status`)

```bash
git status
```

Shows:
- Which files are modified
- Which files are staged for commit
- Which files are untracked

#### 3. Adding Files (`git add`)

```bash
# Create a file
echo "# My First Project" > README.md

# Stage a specific file
git add README.md

# Stage all files
git add .

# Stage multiple specific files
git add file1.txt file2.txt
```

**The Staging Area:** Think of it as a "loading dock" where you prepare files before committing them.

#### 4. Committing Changes (`git commit`)

```bash
# Commit with a message
git commit -m "Add README file"

# Commit with detailed message (opens editor)
git commit
```

**Writing Good Commit Messages:**
- Start with a verb: "Add", "Fix", "Update", "Remove"
- Be specific: "Fix login button alignment" not "Fix bug"
- Keep first line under 50 characters
- Add details in the body if needed

#### 5. Viewing History (`git log`)

```bash
# View commit history
git log

# Compact view
git log --oneline

# View with graph
git log --graph --oneline --all
```

### Local vs Remote Repositories

**Local Repository:**
- Exists only on your computer
- Full history available offline
- You can commit without internet
- Private to you

**Remote Repository:**
- Hosted on platforms like GitHub, GitLab
- Accessible to collaborators
- Backup of your code
- Enables team collaboration

**Connecting Local to Remote:**
```bash
# Add remote repository
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v
```

### Essential Commands: Clone, Push, Pull

#### Git Clone
Download an existing repository to your computer:
```bash
git clone https://github.com/username/repository.git
cd repository
```

#### Git Push
Upload your local commits to remote:
```bash
# First time push
git push -u origin main

# Subsequent pushes
git push
```

#### Git Pull
Download and merge changes from remote:
```bash
git pull origin main
```

### Hands-On Exercise: Day 1

**Exercise: Create Your First Git Project**

1. Create a new folder and initialize Git
2. Create a `README.md` file with your name and project description
3. Create a simple `hello.py` or `hello.js` file
4. Stage and commit your changes
5. View your commit history
6. Modify the files and make another commit
7. Use `git log` to see your commits

**Challenge:**
Try using `git diff` to see what changed between commits.

---

## Day 2: Deep Dive into GitHub

### Understanding GitHub

GitHub is a cloud-based platform that hosts Git repositories and adds collaboration features like pull requests, issues, and project management.

**GitHub vs Git:**
- Git = Version control system (the tool)
- GitHub = Hosting service for Git repositories (the platform)

### Creating Your GitHub Account & Developer Profile

**Setting Up:**
1. Go to [github.com](https://github.com)
2. Sign up with your email
3. Choose a professional username (it appears in your portfolio)
4. Verify your email

**Building Your Developer Profile:**
- Add a profile picture
- Write a bio describing your interests
- Pin your best repositories
- Add links to portfolio/social media
- Enable GitHub profile README (special repository named `username/username`)

**Profile README Example:**
```markdown
# Hi, I'm [Your Name] 👋

## About Me
🎓 B.Tech Student at SCRIET, Meerut
💻 Interested in Web Development, AI, and Open Source
🌱 Currently learning React and Python
📫 Reach me at: your.email@example.com

## Tech Stack
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## GitHub Stats
![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true)
```

### Creating Your First Repository

**Via GitHub Website:**
1. Click "New" or "+" icon
2. Name your repository
3. Add description (important for discoverability)
4. Choose Public or Private
5. Initialize with README (recommended for beginners)
6. Add .gitignore (select language template)
7. Choose a license (MIT is popular for open source)

**Connecting Local Repository to GitHub:**
```bash
# Create local repo
git init
git add .
git commit -m "Initial commit"

# Add GitHub as remote
git remote add origin https://github.com/username/repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Branching: Working on Features Safely

**What is a Branch?**
A branch is an independent line of development. It allows you to work on features without affecting the main codebase.

**Default Branch:**
- Usually called `main` or `master`
- Contains production-ready code
- Protected from direct changes in professional settings

**Creating and Using Branches:**
```bash
# Create a new branch
git branch feature-login

# Switch to the branch
git checkout feature-login

# Create and switch in one command
git checkout -b feature-signup

# View all branches
git branch

# View remote branches too
git branch -a
```

**Branch Naming Conventions:**
- `feature/user-authentication`
- `bugfix/navbar-alignment`
- `hotfix/security-patch`
- `docs/update-readme`

**Merging Branches:**
```bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature-login

# Delete branch after merging
git branch -d feature-login
```

### Forking: Your Personal Copy

**What is a Fork?**
A fork is your personal copy of someone else's repository where you can freely experiment.

**When to Fork:**
- Contributing to open-source projects
- Creating your own version of a project
- Experimenting without affecting the original

**How to Fork:**
1. Go to any repository on GitHub
2. Click "Fork" button (top-right)
3. GitHub creates a copy under your account
4. Clone your fork to work locally

```bash
git clone https://github.com/your-username/forked-repo.git
```

**Keeping Your Fork Updated:**
```bash
# Add original repo as upstream
git remote add upstream https://github.com/original-owner/repo.git

# Fetch changes
git fetch upstream

# Merge into your main branch
git checkout main
git merge upstream/main
```

### Pull Requests: Proposing Changes

**What is a Pull Request (PR)?**
A pull request is a proposal to merge your changes into another branch or repository.

**Pull Request Workflow:**
1. Create a new branch for your feature
2. Make changes and commit them
3. Push branch to GitHub
4. Open Pull Request on GitHub
5. Team reviews your code
6. Make requested changes if needed
7. PR gets merged

**Creating a Pull Request:**
```bash
# Make changes in a new branch
git checkout -b improve-documentation
# ... make changes ...
git add .
git commit -m "Improve installation instructions"
git push origin improve-documentation
```

Then on GitHub:
1. Go to repository
2. Click "Pull requests" tab
3. Click "New pull request"
4. Select your branch
5. Add title and description
6. Click "Create pull request"

**Writing Good PR Descriptions:**
```markdown
## What does this PR do?
Improves the installation instructions in README

## Why is this change needed?
Current instructions were unclear for Windows users

## How to test?
1. Follow the updated instructions
2. Verify installation works

## Screenshots (if applicable)
[Add screenshots if UI changes]

Fixes #42
```

### Handling Merge Conflicts

**What is a Merge Conflict?**
Occurs when two branches modify the same part of a file differently.

**Example Conflict:**
```
<<<<<<< HEAD
This is my change
=======
This is their change
>>>>>>> feature-branch
```

**Resolving Conflicts:**
1. Open the conflicted file
2. Decide which changes to keep
3. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Stage the resolved file: `git add filename`
5. Complete the merge: `git commit`

**Best Practices to Avoid Conflicts:**
- Pull latest changes before starting work
- Make small, focused commits
- Communicate with team about who's working on what
- Use separate branches for different features

### GitHub Issues: Task Management

**What are Issues?**
Issues are used to track bugs, enhancements, tasks, and questions.

**Creating an Issue:**
1. Go to "Issues" tab
2. Click "New issue"
3. Add clear title
4. Provide detailed description
5. Add labels (bug, enhancement, documentation)
6. Assign to team members
7. Add to projects/milestones if applicable

**Issue Template Example:**
```markdown
**Bug Description:**
Login button doesn't work on mobile devices

**Steps to Reproduce:**
1. Open website on mobile
2. Click login button
3. Nothing happens

**Expected Behavior:**
Should open login modal

**Environment:**
- Device: iPhone 12
- Browser: Safari
- OS: iOS 15
```

**Using Labels:**
- `bug` - Something isn't working
- `enhancement` - New feature request
- `good first issue` - Good for newcomers
- `help wanted` - Need assistance
- `documentation` - Documentation improvements

### GitHub Projects & Milestones

**Projects:**
Kanban-style boards for organizing work.

**Columns Example:**
- To Do
- In Progress
- In Review
- Done

**Milestones:**
Group issues and PRs for releases or sprints.

Example: "v1.0 Release" milestone containing all issues needed for version 1.0.

### Hands-On Exercise: Day 2

**Exercise: Collaborative Workflow**

1. Create a new repository with README
2. Create a branch called `add-features`
3. Add a new file with some code
4. Commit and push the branch
5. Create a Pull Request
6. Create an issue describing a bug or feature
7. Practice resolving a merge conflict (instructor will guide)

**Pair Exercise:**
- Fork your partner's repository
- Make an improvement
- Submit a pull request to their repo

---

## Day 3: Getting Started with Open Source

### What is Open Source?

Open source software is code that is publicly accessible, allowing anyone to view, modify, and distribute it.

**Open Source ≠ Free Software (Always):**
- Open source focuses on practical benefits
- Free software focuses on ethical freedom
- Most projects are both

**The Four Freedoms:**
1. Freedom to run the program
2. Freedom to study how it works
3. Freedom to redistribute copies
4. Freedom to distribute modified versions

### Why Open Source Matters

**For Individuals:**
- Learn from real-world code
- Build public portfolio
- Network with developers worldwide
- Gain experience with large codebases
- Improve coding skills
- Get noticed by recruiters

**For Companies:**
- Faster innovation through community contributions
- Better code quality (many eyes catch bugs)
- Reduced development costs
- Industry-standard tools and libraries
- Talent recruitment pipeline

**For Society:**
- Transparency and security auditing
- Shared knowledge advancement
- Reduced digital divide
- Innovation accessibility

### Real-World Open Source Usage

**Linux:** Powers Android phones, servers, supercomputers, and IoT devices

**React:** Built by Meta, used by Netflix, Airbnb, Instagram

**TensorFlow:** Google's ML framework used in research and production

**VS Code:** Microsoft's editor used by millions of developers

**Kubernetes:** Container orchestration used by most cloud platforms

**WordPress:** Powers 40%+ of all websites

### Types of Open Source Licenses

**Permissive Licenses:**
- **MIT License:** Do almost anything, just keep copyright notice
- **Apache 2.0:** Similar to MIT, includes patent protection
- **BSD:** Very permissive, minimal restrictions

**Copyleft Licenses:**
- **GPL (GNU General Public License):** Modifications must also be open source
- **LGPL:** More lenient than GPL for libraries
- **AGPL:** GPL for network services

**Choosing a License:**
- Most beginners use MIT (simple and popular)
- Check project's ecosystem norms
- Use [choosealicense.com](https://choosealicense.com)

### Finding Beginner-Friendly Projects

**Where to Look:**

**GitHub Search:**
```
label:"good first issue" language:Python
label:"beginner-friendly"
label:"help wanted"
```

**Platforms:**
- [github.com/topics/good-first-issue](https://github.com/topics/good-first-issue)
- [goodfirstissue.dev](https://goodfirstissue.dev)
- [firsttimersonly.com](https://www.firsttimersonly.com)
- [up-for-grabs.net](https://up-for-grabs.net)

**What to Look For:**
- Active maintenance (recent commits)
- Welcoming community (check issue discussions)
- Clear contribution guidelines
- Good documentation
- Your language/framework
- 100-5000 stars (sweet spot for beginners)

### Understanding Project Structure

**Common Files:**

**README.md:**
- Project overview
- Installation instructions
- Usage examples
- Basic documentation

**CONTRIBUTING.md:**
- How to contribute
- Code style guidelines
- Pull request process
- Testing requirements

**CODE_OF_CONDUCT.md:**
- Community behavior expectations
- Reporting issues
- Consequences for violations

**LICENSE:**
- Legal terms for using/modifying code

**.gitignore:**
- Files Git should ignore
- Build artifacts, dependencies, secrets

**CHANGELOG.md:**
- Version history
- What changed in each release

### Making Your First Contribution

**Step-by-Step Process:**

**1. Find an Issue:**
- Look for "good first issue" label
- Read issue description carefully
- Check if anyone is already working on it
- Comment: "I'd like to work on this"

**2. Fork and Clone:**
```bash
# Fork on GitHub, then:
git clone https://github.com/your-username/project.git
cd project
```

**3. Create a Branch:**
```bash
git checkout -b fix-typo-in-readme
```

**4. Make Your Changes:**
- Follow project's code style
- Make focused, small changes
- Test your changes

**5. Commit Your Changes:**
```bash
git add .
git commit -m "Fix typo in installation section"
```

**6. Push to Your Fork:**
```bash
git push origin fix-typo-in-readme
```

**7. Create Pull Request:**
- Go to original repository
- Click "Compare & pull request"
- Fill in PR template
- Reference the issue: "Fixes #123"

**8. Respond to Feedback:**
- Maintainers may request changes
- Make updates in same branch
- Push again (PR updates automatically)
- Be patient and respectful

### Types of Contributions

**Not Just Code:**

**Documentation:**
- Fix typos and grammatical errors
- Improve clarity of instructions
- Add missing examples
- Translate to other languages

**Testing:**
- Report bugs with detailed reproduction steps
- Test features on different platforms
- Write test cases

**Design:**
- Improve UI/UX
- Create logos and graphics
- Design mockups for features

**Community:**
- Answer questions in issues
- Help newcomers get started
- Organize events and meetups
- Write blog posts or tutorials

### Writing Good Documentation

**README Essentials:**

```markdown
# Project Name

Brief description of what the project does

## Features
- Feature 1
- Feature 2
- Feature 3

## Installation

```bash
npm install project-name
```

## Quick Start

```javascript
const project = require('project-name');
project.doSomething();
```

## Documentation
Full documentation at [link]

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)

## License
MIT License - see [LICENSE](LICENSE)
```

**Documentation Tips:**
- Write for someone who knows nothing about your project
- Include code examples that actually work
- Use screenshots for visual features
- Keep it updated as project evolves
- Use clear, simple language

### Open Source Etiquette

**Do's:**
- Read contribution guidelines first
- Be respectful and professional
- Ask questions when unclear
- Test your changes thoroughly
- Keep PRs focused and small
- Be patient with reviews

**Don'ts:**
- Don't demand immediate responses
- Don't take criticism personally
- Don't submit untested code
- Don't ignore feedback
- Don't make massive PRs
- Don't claim others' work

**Communication Best Practices:**
- Use clear, concise language
- Provide context in issues/PRs
- Say thank you
- Accept that PRs may be rejected
- Learn from feedback

### Hands-On Exercise: Day 3

**Exercise: Make Your First Open Source Contribution**

**Option 1: Documentation Fix**
1. Find a project with documentation issues
2. Fork and fix typos or improve clarity
3. Submit a pull request

**Option 2: Code Contribution**
1. Search "good first issue" in Python/JavaScript
2. Find something manageable
3. Follow contribution process
4. Submit your PR

**Option 3: Create Your Own Project**
1. Create a useful tool or library
2. Add proper README, LICENSE
3. Add "good first issue" labels
4. Welcome contributors

---

## Day 4: Community Building & Next Steps

### Collaborative Project Development

**Team Workflow Best Practices:**

**Branch Strategy:**
- `main` - production-ready code
- `develop` - integration branch
- `feature/*` - new features
- `bugfix/*` - bug fixes
- `hotfix/*` - urgent production fixes

**Code Review Process:**
1. Create feature branch
2. Develop and test locally
3. Push and open PR
4. At least one team member reviews
5. Address feedback
6. Merge after approval

**Setting Up Branch Protection:**
- Go to Settings > Branches
- Add rule for `main` branch
- Require pull request reviews
- Require status checks to pass
- Prevent force pushes

### Maintaining Your Repository

**Good Maintenance Practices:**

**Regular Tasks:**
- Respond to issues within 48 hours
- Review PRs weekly
- Update dependencies regularly
- Keep documentation current
- Tag releases with version numbers

**Issue Triage:**
- Label new issues promptly
- Close duplicates politely
- Ask for more information when needed
- Prioritize by impact and effort

**Creating Issue Templates:**

Go to Settings > Issues > Set up templates

**Bug Report Template:**
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable

**Environment**
- OS:
- Browser:
- Version:
```

**Managing Releases:**
```bash
# Tag a release
git tag -a v1.0.0 -m "First stable release"
git push origin v1.0.0
```

On GitHub: Releases > Create new release

### Introducing SCRIET GitHub Organization

**What is a GitHub Organization?**
A shared account where students can collaborate on projects, build a portfolio together, and represent the institution.

**Benefits for SCRIET:**
- Centralized location for student projects
- Showcase institutional projects
- Easier collaboration across batches
- Build institution's tech reputation
- Create opportunities for mentorship

**Organization Structure:**
```
scriet-meerut/
├── student-projects/
│   ├── web-apps
│   ├── ml-projects
│   └── mobile-apps
├── club-repositories/
├── event-projects/
└── documentation/
```

**Getting Started:**
1. Create organization: github.com/organizations/new
2. Name it: `scriet-meerut` or similar
3. Add students as members
4. Create teams by department/year
5. Set up organization profile README

**Student Participation:**
- Create projects under organization
- Collaborate with peers across branches
- Contribute to institution-wide projects
- Showcase skills to recruiters

### Building Your Developer Portfolio

**What Makes a Strong Portfolio:**

**1. Pinned Repositories:**
Pin 6 best projects showing:
- Different skills
- Complete, working projects
- Good documentation
- Real-world usefulness

**2. Contribution Activity:**
- Regular commits (green squares)
- Open source contributions
- Meaningful commit messages

**3. Project Variety:**
- Personal projects
- Collaborative projects
- Open source contributions
- Hackathon projects

**4. Professional Profile:**
- Clear bio
- Professional photo
- Contact information
- Links to portfolio/LinkedIn

**Portfolio Project Ideas:**
- Build a web application
- Create a useful library/tool
- Contribute to popular open source projects
- Document your learning journey
- Create tutorial repositories
- Build something that solves your problem

### Continuing Your Open Source Journey

**Next Steps:**

**Week 1-2:**
- Make your first contribution (documentation is great)
- Set up GitHub profile properly
- Create one personal project

**Month 1-3:**
- Contribute to 3-5 different projects
- Build a substantial personal project
- Start building your portfolio

**Month 3-6:**
- Take on bigger contributions
- Mentor newcomers
- Consider maintaining a project
- Join open source communities

**Communities to Join:**
- **GitHub Discussions** on projects you use
- **Discord/Slack** channels for projects
- **Dev.to** - Write about your journey
- **Stack Overflow** - Help others
- **Reddit** - r/opensource, r/learnprogramming

**Events to Participate In:**
- **Hacktoberfest** (October) - Make 4 PRs, get swag
- **Google Summer of Code** - Paid summer internship
- **MLH Hackathons** - Student hackathons
- **Local Meetups** - Find tech communities nearby

### Resources for Continued Learning

**Official Documentation:**
- [git-scm.com/doc](https://git-scm.com/doc)
- [docs.github.com](https://docs.github.com)

**Interactive Learning:**
- [learngitbranching.js.org](https://learngitbranching.js.org)
- GitHub Skills: [skills.github.com](https://skills.github.com)

**Books & Guides:**
- "Pro Git" by Scott Chacon (free online)
- GitHub's guides and tutorials

**YouTube Channels:**
- Fireship
- Traversy Media
- The Net Ninja
- FreeCodeCamp

### Q&A and Workshop Wrap-Up

**Common Questions:**

**Q: How often should I commit?**
A: Commit when you complete a logical unit of work. Multiple small commits > one large commit.

**Q: What if my PR gets rejected?**
A: It's normal! Learn from feedback, improve, try again. Even experienced developers get PRs rejected.

**Q: How do I find time for open source?**
A: Start small. 30 minutes a week is enough. Quality > quantity.

**Q: Do I need to be an expert?**
A: No! Start with documentation, then small features. You learn by doing.

**Q: What if I break something?**
A: You can't break the main project. That's why you work in forks and branches. Maintainers review before merging.

**Q: How do I stay motivated?**
A: Find projects you actually use. Seeing your code help others is incredibly rewarding.

---

## Quick Reference Commands

### Essential Git Commands
```bash
# Initialize
git init

# Status
git status

# Stage files
git add filename
git add .

# Commit
git commit -m "message"

# Push
git push origin branch-name

# Pull
git pull origin branch-name

# Clone
git clone url

# Branches
git branch                  # list
git branch name            # create
git checkout name          # switch
git checkout -b name       # create and switch
git merge name             # merge
git branch -d name         # delete

# Remote
git remote -v
git remote add origin url

# History
git log
git log --oneline
```

### GitHub Workflow
```bash
# Fork → Clone → Branch → Change → Commit → Push → PR

git clone https://github.com/YOUR-USERNAME/PROJECT.git
cd PROJECT
git checkout -b fix-issue-123
# make changes
git add .
git commit -m "Fix: issue description"
git push origin fix-issue-123
# Create PR on GitHub
```

---

## Conclusion

This workshop is just the beginning. The real learning happens when you:
- Start contributing to real projects
- Build your own projects
- Help others in their journey
- Stay curious and keep learning

**Remember:**
- Every expert was once a beginner
- Small contributions matter
- The community is welcoming
- Your code can help thousands of people
- Start today, not tomorrow

**Stay Connected:**
- SCRIET GitHub Organization
- Workshop Discord/Slack (if created)
- Follow projects you contributed to
- Share your progress with peers

---

## Additional Resources

**Finding Projects:**
- https://goodfirstissue.dev
- https://up-for-grabs.net
- https://github.com/topics/good-first-issue

**Learning Git:**
- https://git-scm.com/book/en/v2
- https://learngitbranching.js.org

**GitHub Features:**
- https://docs.github.com
- https://skills.github.com

**Open Source Guides:**
- https://opensource.guide

**Communities:**
- Dev.to
- Hashnode
- Reddit: r/opensource
- Stack Overflow

---

**Workshop conducted by:**
Lakshya Pandey, Jayesh Gaur, Utsav Dubey, Keshari Nandan
B.Tech (IT, CS & EI), SCRIET Meerut

*Keep coding, keep contributing!* 🚀