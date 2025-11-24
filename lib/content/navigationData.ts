// Navigation structure for the workshop
export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    title: "Day 1: Git Basics",
    path: "/day1",
    icon: "Terminal",
    children: [
      { title: "Why Version Control?", path: "/day1/version-control" },
      { title: "Installing Git", path: "/day1/installation" },
      { title: "First Commands", path: "/day1/first-commands" },
      { title: "Local Repository", path: "/day1/local-repository" },
      { title: "Practice Exercise", path: "/day1/exercise" },
    ],
  },
  {
    title: "Day 2: GitHub",
    path: "/day2",
    icon: "Code",
    children: [
      { title: "GitHub Interface", path: "/day2/github-intro" },
      { title: "Remote Repositories", path: "/day2/repositories" },
      { title: "Branching & Merging", path: "/day2/branching" },
      { title: "Pull Requests", path: "/day2/pull-requests" },
      { title: "Merge Conflicts", path: "/day2/merge-conflicts" },
      { title: "Practice Exercise", path: "/day2/exercise" },
    ],
  },
  {
    title: "Day 3: Open Source",
    path: "/day3",
    icon: "Rocket",
    children: [
      { title: "What is Open Source?", path: "/day3/intro" },
      { title: "Finding Projects", path: "/day3/finding-projects" },
      { title: "The Contribution Cycle", path: "/day3/contribution-flow" },
      { title: "Writing Great PRs", path: "/day3/writing-prs" },
      { title: "Practice Exercise", path: "/day3/exercise" },
    ],
  },
  {
    title: "Day 4: Career & Growth",
    path: "/day4",
    icon: "Users",
    children: [
      { title: "Building Your Brand", path: "/day4/branding" },
      { title: "Documentation", path: "/day4/documentation" },
      { title: "Community Etiquette", path: "/day4/etiquette" },
      { title: "Next Steps", path: "/day4/next-steps" },
    ],
  },
];

export const utilityPages: NavItem[] = [
  { title: "Command Cheat Sheet", path: "/cheat-sheet", icon: "BookOpen" },
  { title: "Glossary", path: "/glossary", icon: "Book" },
  { title: "Resources", path: "/resources", icon: "ExternalLink" },
  { title: "About", path: "/about", icon: "Info" },
];

// Helper function to flatten navigation for previous/next navigation
export function getAllPaths(): string[] {
  const paths: string[] = ["/"];
  
  navigationData.forEach((day) => {
    paths.push(day.path);
    day.children?.forEach((topic) => {
      paths.push(topic.path);
    });
  });
  
  return paths;
}

// Get previous and next page for navigation
export function getNavigationContext(currentPath: string): {
  previous: string | null;
  next: string | null;
} {
  const allPaths = getAllPaths();
  const currentIndex = allPaths.indexOf(currentPath);
  
  return {
    previous: currentIndex > 0 ? allPaths[currentIndex - 1] : null,
    next: currentIndex < allPaths.length - 1 ? allPaths[currentIndex + 1] : null,
  };
}
