# Prompt for Google AI Studio (Gemini)

## Project Brief: GitHub & Open Source Workshop Teaching Website

I need you to create a complete, production-ready interactive teaching website for a GitHub & Open Source workshop. This website will **replace PowerPoint presentations** and be used during live workshop sessions at SCRIET, Meerut.

---

## Your Task

Build a fully functional, modern web application based on the provided design specifications and content. You have **full creative freedom** to:

✅ Modify the layout if it improves teaching experience
✅ Change or enhance features as you see fit
✅ Reorganize content for better flow
✅ Add additional interactive elements
✅ Improve animations and transitions
✅ Optimize for performance and usability
✅ Suggest and implement better UI/UX patterns
✅ Add features you think would help in teaching
✅ Modify color schemes if readability improves
✅ Change typography for better visibility

---

## Design Specifications

**Reference Document: `workshop_website_design.md`**

This document contains:
- Overall design philosophy (dark theme, GitHub-inspired)
- Navigation structure (4-day workshop outline)
- Page layout templates
- Interactive features required
- Instructor controls and keyboard shortcuts
- Special teaching components
- Responsive design requirements
- Technical specifications
- Animation guidelines

**Key Requirements from Design Doc:**
- **Projector-friendly**: Large text, high contrast (visible from back of hall)
- **Keyboard navigation**: Arrow keys, shortcuts for smooth teaching
- **Interactive terminal**: Browser-based terminal for live Git demos
- **Code editor**: Monaco/CodeMirror with syntax highlighting
- **Copy buttons**: On all code blocks
- **Offline-capable**: PWA for no-internet scenarios
- **Split-screen layout**: Sidebar navigation + main content
- **Presentation mode**: Fullscreen without distractions

---

## Content Specifications

**Reference Document: `workshop_content.md`**

This document contains the actual teaching material:
- Day 1: Git basics, version control concepts, installation
- Day 2: GitHub workflows, branching, pull requests, merge conflicts
- Day 3: Open source contribution, finding projects, making PRs
- Day 4: Community building, best practices, collaboration

**Content includes:**
- Explanations and theory
- Git commands with syntax
- Code examples
- Practice exercises
- Real-world industry examples
- Common mistakes and troubleshooting
- Pro tips and best practices

---

## Technical Implementation Guidelines

### Recommended Tech Stack (you can change if needed):
- **Framework**: React, Next.js, or vanilla HTML/CSS/JS
- **Styling**: Tailwind CSS or custom CSS
- **Terminal**: xterm.js or similar terminal emulator
- **Code Editor**: Monaco Editor (VS Code engine) or CodeMirror
- **Animations**: Framer Motion, CSS animations, or your choice
- **Icons**: Lucide, Hero Icons, or Font Awesome
- **Offline Support**: PWA with service workers

### Must-Have Features:
1. **Navigation System**
   - Sidebar with all topics
   - Keyboard shortcuts (→ next, ← previous, Home, F for fullscreen)
   - Progress indicator
   - Quick jump menu

2. **Interactive Terminal Emulator**
   - Execute safe Git commands in browser
   - Show realistic terminal output
   - Copy command button
   - Reset/clear functionality

3. **Live Code Editor**
   - Syntax highlighting
   - Line numbers
   - Copy and download buttons
   - Theme matching website

4. **Teaching Components**
   - Command cards with syntax
   - "Try It Now" practice prompts
   - Warning boxes for common mistakes
   - Pro tip callouts
   - Before/after comparisons

5. **Instructor Features**
   - Presentation mode toggle
   - Section timer
   - Notes panel (hidden from projection)
   - Keyboard-first navigation

6. **Responsive Design**
   - Optimized for 1920×1080 projector
   - Works on instructor laptop
   - Mobile-friendly for student reference

---

## Creative Freedom & Modifications

You are **encouraged** to:

### Layout Changes
- Improve the sidebar design
- Create a better navigation experience
- Add a floating control panel for instructors
- Design custom section transitions
- Create unique slide templates

### Feature Additions
- Add a global search functionality
- Implement a cheat sheet panel
- Create interactive Git graph visualizer
- Add progress tracking for students
- Include quiz/poll components
- Add code diff viewer
- Create animated diagrams

### Content Enhancements
- Rewrite sections for clarity
- Add more examples if needed
- Include visual aids and diagrams
- Create better exercise prompts
- Add more troubleshooting tips
- Include video embed placeholders

### UI/UX Improvements
- Better color contrast
- Improved typography hierarchy
- Smoother animations
- Better mobile experience
- Enhanced accessibility
- Dark/light mode toggle

### Technical Optimizations
- Faster load times
- Better code organization
- Improved performance
- Enhanced offline capability
- Better error handling

---

## Specific Guidelines

### For Projector Visibility:
- Minimum body text: 24px
- Minimum code text: 20px
- High contrast ratios (WCAG AAA)
- No tiny UI elements
- Large, obvious buttons

### For Teaching Flow:
- Smooth transitions between sections
- No loading delays
- Instant navigation
- Clear "current section" indicator
- Breadcrumb navigation

### For Student Experience:
- Easy to copy commands
- Clear exercise instructions
- Helpful error messages in terminal
- Obvious next steps
- Downloadable resources

---

## Expected Deliverables

Please provide:

1. **Complete Source Code**
   - Well-organized file structure
   - Clean, commented code
   - Ready to deploy

2. **All Four Days Content**
   - Day 1: Git Basics
   - Day 2: GitHub Workflows
   - Day 3: Open Source Contribution
   - Day 4: Community Building

3. **Interactive Features Working**
   - Terminal emulator functional
   - Code editor operational
   - Keyboard shortcuts implemented
   - Copy buttons on all code blocks

4. **Responsive & Accessible**
   - Works on projector (1920×1080)
   - Works on laptop
   - Works on mobile
   - Keyboard navigable

5. **Deployment Ready**
   - Optimized for production
   - PWA configured
   - Works offline
   - Fast loading

6. **Documentation**
   - Brief README with setup instructions
   - How to run locally
   - How to deploy
   - Keyboard shortcuts reference

---

## Design Inspiration & Style

**Look & Feel:**
- GitHub's dark theme aesthetic
- Modern, clean, professional
- Code-focused design
- Minimal but functional
- Developer-friendly

**Color Palette (can be modified):**
```
Primary Background: #0d1117
Secondary Background: #161b22
Card Background: #21262d
Border: #30363d
Text: #c9d1d9
Accent Blue: #58a6ff
Accent Green: #3fb950
```

**Typography (suggestions):**
- Headings: Inter, Poppins, or system fonts
- Body: System fonts
- Code: JetBrains Mono, Fira Code, or monospace

---

## Important Notes

### DO:
✅ Use your judgment to improve the design
✅ Add features that enhance teaching
✅ Simplify complex sections
✅ Create visual aids and diagrams
✅ Optimize for performance
✅ Make it beautiful and functional
✅ Think from instructor's perspective
✅ Consider student learning experience

### DON'T:
❌ Remove core features (terminal, code editor, navigation)
❌ Make text too small for projector
❌ Add unnecessary complexity
❌ Require internet connection for basic functionality
❌ Break keyboard navigation
❌ Ignore accessibility

---

## Context: Workshop Details

**Target Audience:** B.Tech students (IT, CS, EI) at SCRIET, Meerut
**Workshop Duration:** 3-4 days, 2-3 hours per day
**Venue:** ATAL SABHAGAR (large auditorium)
**Purpose:** Teach Git, GitHub, and open-source contribution
**Instructors:** 4 student organizers
**Goal:** Replace PowerPoint with interactive web experience

**Students will:**
- Follow along on their laptops
- Practice commands in real-time
- Learn by doing
- Build their first open-source contribution
- Create developer portfolios

---

## Success Criteria

The website is successful if:
- Instructor can teach entire workshop without PPT
- Students can easily follow along
- All commands are copy-pastable
- Terminal simulations work reliably
- Navigation is smooth during live teaching
- Content is clear and comprehensive
- Website works offline in the auditorium
- Looks professional and modern
- Actually helps students learn Git/GitHub

---

## Final Instructions

**Your approach:**
1. Review both markdown files thoroughly
2. Plan the architecture and component structure
3. Implement the core features first
4. Add interactive elements
5. Polish the UI/UX
6. Test all functionality
7. Optimize performance
8. Ensure offline capability

**Feel free to:**
- Ask questions if anything is unclear
- Suggest better approaches
- Redesign sections that don't work well
- Add your own creative touches
- Improve upon the provided specs

**Remember:** This is a teaching tool, not a marketing website. Prioritize:
1. Clarity and readability
2. Ease of navigation during teaching
3. Interactive learning features
4. Performance and reliability
5. Professional appearance

---

## Begin Implementation

Please create this website with full functionality. Use your best judgment to make it an excellent teaching tool. Show me what you can build! 🚀

If you need any clarifications or want to discuss specific features before building, let me know.