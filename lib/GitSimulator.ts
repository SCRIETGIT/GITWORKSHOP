// Git command simulator - simulates Git command execution with realistic output
export class GitSimulator {
  private currentBranch: string = "main";
  private stagedFiles: Set<string> = new Set();
  private commits: Array<{ hash: string; message: string; author: string; date: string }> = [];
  private files: Map<string, { content: string; modified: boolean }> = new Map();
  private remotes: Map <string, string> = new Map();
  private initialized: boolean = false;

  constructor() {
    // Initialize with README
    this.files.set("README.md", { content: "# My Project", modified: false });
  }

  execute(command: string): string {
    const parts = command.trim().split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    if (cmd === "echo") {
      const fullArgs = command.substring(5); // Get everything after "echo "
      if (fullArgs.includes(">>")) {
        const [content, file] = fullArgs.split(">>").map(s => s.trim());
        const cleanContent = content.replace(/^['"]|['"]$/g, "");
        const fileName = file;
        
        // Update or create file
        const existing = this.files.get(fileName);
        this.files.set(fileName, { 
          content: existing ? existing.content + "\n" + cleanContent : cleanContent,
          modified: true 
        });
        return "";
      } else if (fullArgs.includes(">")) {
        const [content, file] = fullArgs.split(">").map(s => s.trim());
        const cleanContent = content.replace(/^['"]|['"]$/g, "");
        const fileName = file;
        
        this.files.set(fileName, { content: cleanContent, modified: true });
        return "";
      }
      return fullArgs.replace(/^['"]|['"]$/g, "");
    }

    if (cmd === "ls") {
      return Array.from(this.files.keys()).join("  ");
    }

    if (cmd === "cd") {
      return ""; // Just pretend we changed directory
    }

    if (cmd === "mkdir") {
      return ""; // Just pretend we created a directory
    }

    if (cmd === "clear") {
      return ""; // Terminal handles this usually, but good to have
    }

    if (cmd !== "git") {
      return `bash: ${cmd}: command not found`;
    }

    const gitCommand = args[0];

    switch (gitCommand) {
      case "init":
        return this.gitInit();
      case "status":
        return this.gitStatus();
      case "add":
        return this.gitAdd(args.slice(1));
      case "commit":
        return this.gitCommit(args.slice(1));
      case "log":
        return this.gitLog(args.slice(1));
      case "branch":
        return this.gitBranch(args.slice(1));
      case "checkout":
        return this.gitCheckout(args.slice(1));
      case "remote":
        return this.gitRemote(args.slice(1));
      case "push":
        return this.gitPush(args.slice(1));
      case "pull":
        return this.gitPull(args.slice(1));
      case "clone":
        return this.gitClone(args.slice(1));
      case "config":
        return this.gitConfig(args.slice(1));
      case "diff":
        return this.gitDiff();
      case "help":
      case "--help":
        return this.gitHelp();
      case "--version":
        return "git version 2.39.0";
      default:
        return `git: '${gitCommand}' is not a git command. See 'git --help'.`;
    }
  }

  private gitInit(): string {
    if (this.initialized) {
      return "Reinitialized existing Git repository in ./.git/";
    }
    this.initialized = true;
    return "Initialized empty Git repository in ./.git/";
  }

  private gitStatus(): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    let output = `On branch ${this.currentBranch}\n`;

    if (this.commits.length === 0) {
      output += "No commits yet\n\n";
    }

    const modifiedFiles = Array.from(this.files.entries())
      .filter(([_, file]) => file.modified && !this.stagedFiles.has(_));
    const unstagedFiles = Array.from(this.files.keys())
      .filter((name) => !this.stagedFiles.has(name) && this.files.get(name)?.modified);

    if (this.stagedFiles.size > 0) {
      output += "Changes to be committed:\n";
      output += '  (use "git restore --staged <file>..." to unstage)\n';
      this.stagedFiles.forEach((file) => {
        output += `\t\x1b[32mnew file:   ${file}\x1b[0m\n`;
      });
      output += "\n";
    }

    if (unstagedFiles.length > 0) {
      output += "Changes not staged for commit:\n";
      output += '  (use "git add <file>..." to update what will be committed)\n';
      unstagedFiles.forEach((file) => {
        output += `\t\x1b[31mmodified:   ${file}\x1b[0m\n`;
      });
      output += "\n";
    }

    if (this.stagedFiles.size === 0 && unstagedFiles.length === 0 && this.commits.length > 0) {
      output += "nothing to commit, working tree clean\n";
    }

    return output;
  }

  private gitAdd(args: string[]): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    if (args.length === 0) {
      return "Nothing specified, nothing added.";
    }

    const file = args[0];
    if (file === ".") {
      // Stage all files
      this.files.forEach((_, filename) => {
        this.stagedFiles.add(filename);
      });
      return "";
    }

    if (this.files.has(file)) {
      this.stagedFiles.add(file);
      return "";
    }

    // Create new file if it doesn't exist
    this.files.set(file, { content: "", modified: true });
    this.stagedFiles.add(file);
    return "";
  }

  private gitCommit(args: string[]): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    if (this.stagedFiles.size === 0) {
      return "nothing to commit, working tree clean";
    }

    // Extract commit message
    let message = "Initial commit";
    const messageIndex = args.indexOf("-m");
    if (messageIndex !== -1 && args[messageIndex + 1]) {
      message = args.slice(messageIndex + 1).join(" ").replace(/['"]/g, "");
    }

    const hash = Math.random().toString(36).substring(2, 9);
    this.commits.push({
      hash,
      message,
      author: "Workshop User <user@example.com>",
      date: new Date().toISOString(),
    });

    const filesCommitted = this.stagedFiles.size;
    this.stagedFiles.forEach((file) => {
      const fileData = this.files.get(file);
      if (fileData) {
        fileData.modified = false;
      }
    });
    this.stagedFiles.clear();

    return `[${this.currentBranch} ${hash}] ${message}\n ${filesCommitted} file${filesCommitted > 1 ? "s" : ""} changed`;
  }

  private gitLog(args: string[]): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    if (this.commits.length === 0) {
      return "fatal: your current branch 'main' does not have any commits yet";
    }

    const oneline = args.includes("--oneline");
    let output = "";

    [...this.commits].reverse().forEach((commit) => {
      if (oneline) {
        output += `\x1b[33m${commit.hash}\x1b[0m ${commit.message}\n`;
      } else {
        output += `\x1b[33mcommit ${commit.hash}\x1b[0m\n`;
        output += `Author: ${commit.author}\n`;
        output += `Date:   ${new Date(commit.date).toUTCString()}\n\n`;
        output += `    ${commit.message}\n\n`;
      }
    });

    return output;
  }

  private gitBranch(args: string[]): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    if (args.length === 0) {
      return `* \x1b[32m${this.currentBranch}\x1b[0m`;
    }

    return `Created branch '${args[0]}'`;
  }

  private gitCheckout(args: string[]): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    if (args.length === 0) {
      return "fatal: You must specify a branch name";
    }

    const branchName = args[args.length - 1];
    const createBranch = args.includes("-b");

    if (createBranch) {
      this.currentBranch = branchName;
      return `Switched to a new branch '${branchName}'`;
    }

    this.currentBranch = branchName;
    return `Switched to branch '${branchName}'`;
  }

  private gitRemote(args: string[]): string {
    if (args.length === 0 || args[0] === "-v") {
      if (this.remotes.size === 0) {
        return "";
      }
      let output = "";
      this.remotes.forEach((url, name) => {
        output += `${name}\t${url} (fetch)\n`;
        output += `${name}\t${url} (push)\n`;
      });
      return output;
    }

    if (args[0] === "add" && args.length >= 3) {
      this.remotes.set(args[1], args[2]);
      return "";
    }

    return "usage: git remote [-v | --verbose]";
  }

  private gitPush(args: string[]): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    if (this.remotes.size === 0) {
      return "fatal: No configured push destination";
    }

    return `Pushing to origin...\nBranch '${this.currentBranch}' set up to track remote branch '${this.currentBranch}' from 'origin'.`;
  }

  private gitPull(args: string[]): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    return "Already up to date.";
  }

  private gitClone(args: string[]): string {
    if (args.length === 0) {
      return "fatal: You must specify a repository to clone.";
    }

    const url = args[0];
    const repoName = url.split("/").pop() || "repository";

    return `Cloning into '${repoName}'...\nremote: Enumerating objects: 10, done.\nremote: Counting objects: 100% (10/10), done.\nremote: Compressing objects: 100% (8/8), done.\nremote: Total 10 (delta 1), reused 10 (delta 1), pack-reused 0\nUnpacking objects: 100% (10/10), done.`;
  }

  private gitConfig(args: string[]): string {
    if (args.includes("--list")) {
      return "user.name=Workshop User\nuser.email=user@example.com\ncore.editor=vim";
    }

    if (args.length >= 2) {
      return ""; // Successfully set config
    }

    return "usage: git config [<options>]";
  }

  private gitDiff(): string {
    if (!this.initialized) {
      return "fatal: not a git repository (or any of the parent directories): .git";
    }

    return "No changes to display";
  }

  private gitHelp(): string {
    return `usage: git [--version] [--help] <command>

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   checkout  Switch branches or restore files
   commit    Record changes to the repository
   diff      Show changes between commits
   log       Show commit logs
   merge     Join two or more development histories

collaborate (see also: git help workflows)
   pull      Fetch from and integrate with another repository
   push      Update remote refs along with associated objects
   remote    Manage set of tracked repositories`;
  }

  reset(): void {
    this.currentBranch = "main";
    this.stagedFiles.clear();
    this.commits = [];
    this.files.clear();
    this.files.set("README.md", { content: "# My Project", modified: false });
    this.remotes.clear();
    this.initialized = false;
  }
}
