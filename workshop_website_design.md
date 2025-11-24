# GitHub Workshop Teaching Website - Design Specifications

## Purpose
Interactive teaching platform to replace PPT slides during live workshop sessions. Should be projector-friendly, easy to navigate during teaching, and provide hands-on learning experience.

---

## Overall Design Philosophy
- **Theme**: Clean, distraction-free teaching interface
- **Presentation Mode**: Large text, high contrast for projector visibility
- **Navigation**: Keyboard shortcuts for instructor flow
- **Interactive**: Live code demos, terminal simulations, copy-paste friendly
- **Color Palette**: 
  - Background: Dark #0d1117 (easy on eyes for long sessions)
  - Code blocks: #161b22 with syntax highlighting
  - Accent: GitHub blue #58a6ff, Green #3fb950
  - High contrast text for visibility from back of hall

---

## Navigation Structure

### Main Navigation (Sidebar/Top Bar)
```
├── Day 1: Git Basics
│   ├── Why Version Control?
│   ├── Installing Git
│   ├── First Commands
│   ├── Local Repository
│   └── Practice Exercise
│
├── Day 2: GitHub
│   ├── GitHub Interface
│   ├── Remote Repositories
│   ├── Branching & Merging
│   ├── Pull Requests
│   ├── Merge Conflicts
│   └── Practice Exercise
│
├── Day 3: Open Source
│   ├── What is Open Source?
│   ├── Finding Projects
│   ├── Making Contributions
│   ├── Writing Good PRs
│   └── Practice Exercise
│
└── Day 4: Community (Optional)
    ├── Collaborative Projects
    ├── Best Practices
    ├── SCRIET GitHub Org
    └── Q&A Resources
```

### Instructor Controls
- **Keyboard Shortcuts**:
  - `→` or `Space`: Next slide/section
  - `←`: Previous slide/section
  - `Home`: Back to current day's start
  - `F`: Fullscreen mode
  - `P`: Presentation mode (hide sidebar)
  - `C`: Toggle code playground
  - `ESC`: Exit fullscreen
- **Progress Indicator**: Shows current position in workshop
- **Quick Jump Menu**: Click to jump to any section instantly

---

## Page Layout Components

### 1. **Split Screen Layout (Default)**
```
┌─────────────────────────────────────────┐
│  Sidebar/Nav    │   Main Content Area   │
│   (20%)         │        (80%)          │
│                 │                       │
│  - Day Topics   │   Teaching Content    │
│  - Section List │   - Explanations      │
│  - Progress     │   - Code Examples     │
│                 │   - Terminal Demos    │
└─────────────────────────────────────────┘
```

### 2. **Presentation Mode (Full Screen)**
```
┌─────────────────────────────────────────┐
│                                         │
│        Full Screen Content              │
│        (100% - no sidebar)              │
│                                         │
│        [Mini progress dots at bottom]   │
└─────────────────────────────────────────┘
```

---

## Content Section Templates

### Template 1: Concept Explanation
- **Large Heading**: Topic name (highly visible)
- **Key Points**: Bullet points with large text
- **Visual Aid**: Diagram/illustration/icon
- **Real-world Example**: Industry usage box
- **Next Step Button**: Clear navigation

### Template 2: Command Demonstration
- **Command Title**: What this does
- **Syntax Box**: Large, colorful code block
```bash
$ git init
Initialized empty Git repository
```
- **Explanation**: Line-by-line breakdown
- **Expected Output**: What students will see
- **Try It Button**: Links to practice area
- **Copy Button**: One-click copy command

### Template 3: Live Terminal Simulator
- **Interactive Terminal**: Browser-based terminal
- Students can type commands
- Shows real-time output
- Pre-loaded with example repository
- Reset button to start fresh
- **Instructor View**: Can broadcast commands to all screens (optional)

### Template 4: Visual Workflow
- **Flowchart/Diagram**: Git workflow visualization
- **Step-by-step Animation**: Show process flow
- **Interactive Hotspots**: Click areas for more info
- **Before/After Comparison**: Show state changes

### Template 5: Practice Exercise
- **Challenge Card**: 
  - Problem statement
  - Difficulty level indicator
  - Hints (collapsible)
  - Solution (hidden, can reveal)
- **Task Checklist**: Students can check off steps
- **Timer** (optional): For timed challenges

### Template 6: Code Comparison
- **Split View**:
  - Left: Wrong way / Before
  - Right: Right way / After
- **Syntax Highlighting**: Clear, readable code
- **Annotations**: Arrows, highlights, comments
- **Diff View**: GitHub-style change indicators

---

## Interactive Features

### 1. **Live Code Editor**
- **Monaco Editor** or **CodeMirror** integration
- Syntax highlighting for multiple languages
- Line numbers
- Theme matches website
- **Run Button**: Execute code (for HTML/JS demos)
- **Copy Button**: Copy entire code block
- **Download Button**: Save as file

### 2. **Terminal Emulator**
- **xterm.js** or similar
- Simulates bash/terminal
- Pre-configured Git environment
- Can execute safe Git commands
- Shows realistic output
- **Clear/Reset buttons**
- **Command History**: Up arrow to recall

### 3. **Progress Tracker**
- Visual indicator of workshop completion
- Checkmarks for covered topics
- Upcoming topics preview
- Time estimate per section

### 4. **Search Function**
- Quick search across all days
- Find specific commands
- Jump to relevant section
- Keyboard shortcut: `Ctrl+K` or `/`

### 5. **Cheat Sheet Panel**
- Slide-out panel with quick reference
- Common Git commands
- GitHub workflow reminders
- Copy individual commands
- Searchable/filterable

### 6. **Notes Section**
- Students can take notes (localStorage)
- Bookmark important slides
- Export notes as markdown
- Sync across devices (optional)

---

## Special Teaching Components

### 1. **"Stop and Try" Prompts**
- Highlighted box: "Time to practice!"
- Pause indicator for instructor
- Challenge for students to attempt
- Countdown timer option

### 2. **Common Mistakes Section**
- "⚠️ Watch Out" boxes
- Shows common errors
- How to fix them
- Prevention tips

### 3. **Pro Tips Boxes**
- 💡 Icon with helpful hints
- Industry best practices
- Keyboard shortcuts
- Efficiency tricks

### 4. **Real Company Examples**
- Cards showing how Meta, Google, Apple use Git/GitHub
- Open source projects showcase
- Links to actual repositories
- Success stories

### 5. **Live Git Graph Visualizer**
- Shows commit history as visual graph
- Updates as commands are taught
- Helps understand branching/merging
- Interactive: click nodes for details

### 6. **Comparison Tables**
- Git vs GitHub
- Forking vs Branching
- Merge vs Rebase
- Clear, visual comparisons

---

## Day-Specific Features

### Day 1 Features
- **Git Installation Guide**: OS-specific instructions
- **Configuration Checklist**: Setup verification
- **Basic Command Gallery**: Visual command reference
- **Repository Visualization**: Show .git folder concept

### Day 2 Features
- **GitHub UI Tour**: Annotated screenshots
- **PR Workflow Animation**: Step-by-step process
- **Merge Conflict Simulator**: Interactive resolution
- **Profile Building Guide**: Create awesome README

### Day 3 Features
- **Project Finder Tool**: Filter beginner-friendly repos
- **Contribution Checklist**: From fork to PR
- **Good vs Bad PR Examples**: Side-by-side comparison
- **Issue Template Generator**: Help write good issues

### Day 4 Features
- **Team Workflow Simulation**: Multi-person collaboration
- **Code Review Best Practices**: Examples and tips
- **SCRIET Org Setup**: Live demonstration area
- **Resources Library**: Links and further learning

---

## Responsive Design

### Projector Mode (Primary)
- **1920×1080** optimized
- Extra large text (minimum 24px body)
- High contrast colors
- No small UI elements
- Everything clickable is huge

### Laptop View (Instructor)
- Full controls visible
- Notes panel for instructor
- Student view preview
- Navigation shortcuts

### Mobile/Tablet (Student Reference)
- Simplified navigation
- Readable on phone
- Offline capable (PWA)
- Quick search access

---

## Instructor Dashboard Features

### Control Panel (Hidden from projection)
- **Section Timer**: Track time spent per topic
- **Student Pace Indicator**: Are they keeping up?
- **Next Up Preview**: See upcoming slide
- **Notes to Self**: Instructor reminders
- **Pause Overlay**: Big "BREAK" or "Q&A" screen

### Broadcasting Features (Advanced)
- Send commands to all student terminals
- Show/hide hints collectively
- Display student terminal on screen (with permission)
- Live poll: "Ready to move on?"

---

## Technical Features

### 1. **Offline Capable**
- Works without internet (PWA)
- All content cached
- Terminal simulation offline
- Essential for live workshop

### 2. **Copy-Paste Friendly**
- Every code block has copy button
- One-click copy commands
- Formatted for terminal use
- No hidden characters

### 3. **Keyboard First**
- All navigation via keyboard
- No mouse required for teaching
- Shortcuts displayed on hover
- Quick reference card

### 4. **Print Friendly**
- Can generate PDF of current section
- Print entire day's content
- Format optimized for paper
- Student handout generation

### 5. **Accessibility**
- Screen reader compatible
- High contrast mode
- Keyboard navigation
- Focus indicators
- ARIA labels

---

## Animation & Transitions

### Slide Transitions
- Smooth fade or slide (300ms)
- Direction indicates forward/back
- No jarring movements
- Can disable for performance

### Code Appearance
- Typing effect for live coding demos
- Syntax highlighting animates in
- Line-by-line reveal option
- Pause between lines

### Diagrams
- Step-by-step revelation
- Highlight current step
- Animate connections/arrows
- Replay button

### Minimal Distraction
- Animations enhance, not distract
- Can be disabled globally
- Subtle, professional
- Performance optimized

---

## Content Organization

### Each Topic Section Includes:
1. **Title Slide**: Topic name, big and clear
2. **Learning Objectives**: What they'll know after
3. **Concept Explanation**: Theory and why it matters
4. **Live Demo**: Instructor performs
5. **Command Reference**: Syntax and examples
6. **Practice Exercise**: Hands-on time
7. **Common Issues**: Troubleshooting
8. **Summary**: Key takeaways
9. **Quiz/Check** (optional): Quick understanding check

---

## UI Components Library

### Buttons
- **Primary Action**: "Try It Now", "Next Section"
- **Secondary**: "Copy", "Download", "Reset"
- **Danger**: "Clear All", "Reset Progress"
- All with hover states and keyboard focus

### Cards
- **Command Card**: Shows single Git command
- **Concept Card**: Explains one idea
- **Exercise Card**: Practice challenge
- **Resource Card**: External links

### Modals
- **Help Overlay**: Keyboard shortcuts
- **Settings**: Font size, theme adjustments
- **Search Results**: Find and jump
- **Glossary**: Term definitions

### Badges/Tags
- Difficulty: Beginner/Intermediate/Advanced
- Type: Command/Concept/Exercise
- Time: Estimated duration
- Status: Completed/Current/Upcoming

---

## Color Coding System

```
Commands:         Blue #58a6ff
File names:       Orange #ffa657
Success:          Green #3fb950
Errors:           Red #f85149
Warnings:         Yellow #d29922
Info:             Purple #bc8cff
Comments:         Gray #8b949e
```

---

## Typography

### Heading Sizes (for projector visibility)
```
H1 (Topic):       4rem (64px)
H2 (Subtopic):    3rem (48px)
H3 (Section):     2rem (32px)
Body:             1.5rem (24px)
Code:             1.25rem (20px) monospace
Small text:       1rem (16px) - minimal use
```

### Fonts
- **Headings**: Inter or Poppins (bold, clear)
- **Body**: System fonts (readable)
- **Code**: JetBrains Mono or Fira Code (ligatures)

---

## Must-Have Pages

1. **Welcome/Start Page**: Workshop overview, schedule
2. **Command Cheat Sheet**: Always accessible
3. **Glossary**: Git/GitHub terminology
4. **Troubleshooting**: Common issues and fixes
5. **Resources**: Links, documentation, communities
6. **About**: Organizers, contact info

---

## Performance Requirements

- Page load: < 2 seconds
- Transition: < 300ms
- No lag during teaching
- Works on college WiFi (or offline)
- Low memory footprint
- No external dependencies that could fail

---

## Testing Checklist

- [ ] Visible from back of Atal Sabhagar
- [ ] All shortcuts work
- [ ] Terminal commands execute correctly
- [ ] Copy buttons function
- [ ] Works without internet
- [ ] Projector resolution (1920×1080, 4:3 fallback)
- [ ] No dead links
- [ ] All code examples tested
- [ ] Mobile version functional
- [ ] Fast navigation during live teaching

---

## Export/Share Features

- **Generate PDF**: Of current day or entire workshop
- **Share Link**: Specific section URL
- **Student View Link**: Simplified version for attendees
- **Code Export**: Download all examples as zip
- **Print Handout**: One-page command reference

---

## Tech Stack Recommendations

- **Framework**: React or Next.js (component reusability)
- **Terminal**: xterm.js
- **Code Editor**: Monaco Editor (VS Code engine)
- **Animations**: Framer Motion (smooth, controllable)
- **Styling**: Tailwind CSS (rapid development)
- **Icons**: Lucide React
- **Diagrams**: Mermaid.js or D3.js
- **PWA**: Workbox (offline support)
- **Hosting**: Vercel/Netlify (fast deployment)

---

## Final Teaching-Focused Priorities

✅ **Visibility First**: Everything readable from back row
✅ **Keyboard Control**: Never touch mouse while teaching
✅ **Quick Navigation**: Jump anywhere in 2 seconds
✅ **Copy Everything**: No typing errors for students
✅ **Offline Ready**: No dependency on internet
✅ **Practice Built-in**: Hands-on without external tools
✅ **Professional Look**: Reflects industry standards
✅ **Distraction-Free**: Clean, focused learning experience