import { TheoryTopic } from '@/types/theory';

export const gitTheory: TheoryTopic = {
  topicId: 'git',
  topicName: 'Git',
  category: 'Tools & Cloud',
  description: 'Git version control system',
  sections: [
    {
      id: 'basics',
      title: 'Git Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Git?', content: 'Git is distributed version control system. Tracks changes in files. Enables collaboration. Features: branching, merging, history, distributed. Created by Linus Torvalds. Most popular VCS. Essential for software development.' },
        { id: 'q2', title: 'What is version control?', content: 'Version control tracks file changes over time. Enables: history, rollback, collaboration, branching. Types: centralized (SVN), distributed (Git). Git is distributed - each clone is full repository. Better for offline work and collaboration.' },
        { id: 'q3', title: 'What is a repository?', content: 'Repository (repo) contains project files and history. Local repo on your machine. Remote repo on server (GitHub, GitLab). Clone creates local copy. Contains: working directory, staging area, commit history. .git folder stores metadata.' },
        { id: 'q4', title: 'What is commit?', content: 'Commit saves snapshot of changes. Creates commit object with: changes, author, message, timestamp, parent commit. Unique hash (SHA-1). Immutable. Forms history chain. Commit message should be descriptive. Atomic commits are best practice.' },
        { id: 'q5', title: 'What is staging area?', content: 'Staging area (index) prepares changes for commit. git add stages files. git commit commits staged changes. Allows selective commits. Review before committing. Three areas: working directory, staging, repository.' },
        { id: 'q6', title: 'What is branch?', content: 'Branch is pointer to commit. Enables parallel development. Default branch: main/master. Create branches for features. Switch with git checkout or git switch. Merge branches together. Lightweight in Git.' },
        { id: 'q7', title: 'What is HEAD?', content: 'HEAD points to current branch/commit. Moves with commits. Detached HEAD: points directly to commit. Usually points to branch tip. Use to reference current position. Important for understanding Git state.' },
        { id: 'q8', title: 'What is remote?', content: 'Remote is reference to remote repository. Default: origin. Can have multiple remotes. git remote add adds remote. git fetch downloads from remote. git push uploads to remote. git pull fetches and merges.' },
        { id: 'q9', title: 'What is clone?', content: 'Clone creates local copy of remote repository. git clone <url> downloads entire history. Creates remote tracking. Sets up local repository. One-time operation. Use for: getting project, starting work.' },
        { id: 'q10', title: 'What is fork?', content: 'Fork creates copy of repository on GitHub/GitLab. Your own copy. Can modify independently. Contribute back via pull request. Common for open source. Different from clone (clone is local, fork is on platform).' }
      ]
    },
    {
      id: 'commands',
      title: 'Git Commands',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is git init?', content: 'git init initializes new repository. Creates .git directory. Sets up Git in current directory. First command for new project. Can initialize bare repository (--bare). Prepares directory for version control.' },
        { id: 'q12', title: 'What is git add?', content: 'git add stages files for commit. git add <file> stages specific file. git add . stages all changes. git add -A stages all including deletions. Moves files from working directory to staging. Prepares for commit.' },
        { id: 'q13', title: 'What is git commit?', content: 'git commit saves staged changes. Creates commit object. Requires message: git commit -m "message". Opens editor if no message. Creates snapshot. Moves HEAD forward. Forms history.' },
        { id: 'q14', title: 'What is git status?', content: 'git status shows repository state. Displays: modified files, staged files, untracked files, branch information. Helps understand current state. Run frequently. Shows what will be committed.' },
        { id: 'q15', title: 'What is git log?', content: 'git log shows commit history. Displays: commits, authors, dates, messages. Options: --oneline (compact), --graph (visual), --all (all branches), -n (limit). Navigate with space/q. Essential for viewing history.' },
        { id: 'q16', title: 'What is git diff?', content: 'git diff shows changes. git diff (working vs staged), git diff --staged (staged vs last commit), git diff <commit> (compare commits). Shows line-by-line changes. Useful for reviewing before commit.' },
        { id: 'q17', title: 'What is git branch?', content: 'git branch lists branches. git branch <name> creates branch. git branch -d deletes branch. git branch -a shows all branches. * indicates current branch. Manage branches with this command.' },
        { id: 'q18', title: 'What is git checkout?', content: 'git checkout switches branches/commits. git checkout <branch> switches branch. git checkout -b creates and switches. Can checkout files (discard changes). Replaced by git switch for branches. Versatile command.' },
        { id: 'q19', title: 'What is git merge?', content: 'git merge combines branches. Merges specified branch into current. Creates merge commit (if needed). Fast-forward if possible. Resolve conflicts if they occur. Integrates branch work.' },
        { id: 'q20', title: 'What is git rebase?', content: 'git rebase replays commits onto another branch. Creates linear history. git rebase <branch> rebases current onto branch. Interactive: git rebase -i. Rewrites history. Use carefully on shared branches.' }
      ]
    },
    {
      id: 'remote',
      title: 'Remote Operations',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is git push?', content: 'git push uploads commits to remote. git push <remote> <branch>. git push -u sets upstream. Pushes current branch. Requires authentication. Updates remote repository. Collaborators can see changes.' },
        { id: 'q22', title: 'What is git pull?', content: 'git pull fetches and merges. Combines git fetch + git merge. Downloads and integrates remote changes. Can cause merge conflicts. git pull --rebase uses rebase instead. Keeps local up to date.' },
        { id: 'q23', title: 'What is git fetch?', content: 'git fetch downloads from remote. Doesn\'t merge. Updates remote-tracking branches. Safe operation. Review before merging. Use git fetch then git merge/pull. See remote changes without affecting local.' },
        { id: 'q24', title: 'What is upstream branch?', content: 'Upstream branch is remote branch tracked by local branch. Set with -u flag. git branch --set-upstream-to sets tracking. Enables git pull/push without specifying remote/branch. Simplifies workflow.' },
        { id: 'q25', title: 'What is origin?', content: 'origin is default remote name. Points to repository you cloned from. Can have multiple remotes. git remote shows remotes. git remote -v shows URLs. Standard convention, can be renamed.' },
        { id: 'q26', title: 'What is pull request?', content: 'Pull request (PR) proposes changes. Created on GitHub/GitLab. Compares branches. Code review process. Discussion and approval. Merges into target branch. Collaboration workflow. Not Git command - platform feature.' },
        { id: 'q27', title: 'What is git remote?', content: 'git remote manages remotes. git remote add <name> <url> adds remote. git remote -v lists remotes. git remote remove deletes. Can have multiple remotes. Useful for: forks, multiple deployments.' },
        { id: 'q28', title: 'What is force push?', content: 'Force push overwrites remote history. git push --force. Dangerous - can lose commits. Use --force-with-lease (safer). Only on feature branches. Never on shared branches. Rewrites remote history.' },
        { id: 'q29', title: 'What is git clone options?', content: 'git clone <url> downloads repository. --depth 1 (shallow clone, no history). --branch <name> (specific branch). --single-branch (one branch only). Useful for: large repos, specific branches, faster cloning.' },
        { id: 'q30', title: 'What is remote-tracking branch?', content: 'Remote-tracking branch tracks remote branch. Updated by fetch/pull. Read-only local reference. Format: <remote>/<branch>. Example: origin/main. Shows remote state. Not your working branch.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Git',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is git stash?', content: 'git stash temporarily saves changes. git stash saves working changes. git stash pop applies and removes. git stash list shows stashes. Useful for: switching branches, saving work in progress. Doesn\'t commit changes.' },
        { id: 'q32', title: 'What is git reset?', content: 'git reset moves HEAD and branch. Types: --soft (keeps changes staged), --mixed (keeps changes unstaged), --hard (discards changes). Can reset to commits. Dangerous - can lose work. Use carefully.' },
        { id: 'q33', title: 'What is git revert?', content: 'git revert creates new commit undoing changes. Safer than reset. Doesn\'t rewrite history. Good for shared branches. git revert <commit> undoes specific commit. Preserves history.' },
        { id: 'q34', title: 'What is git cherry-pick?', content: 'git cherry-pick applies specific commit. Copies commit to current branch. Useful for: applying fixes, selective commits. git cherry-pick <commit>. Can pick multiple commits. Creates new commit.' },
        { id: 'q35', title: 'What is git rebase interactive?', content: 'Interactive rebase edits commit history. git rebase -i <commit>. Options: pick, reword, edit, squash, drop. Rewrites commits. Use before pushing. Powerful but dangerous. Clean up history.' },
        { id: 'q36', title: 'What is .gitignore?', content: '.gitignore excludes files from Git. Patterns: *, ?, **, !. Ignore: build files, dependencies, secrets, IDE files. Prevents committing unwanted files. Repository-specific or global. Essential for clean repos.' },
        { id: 'q37', title: 'What is git tag?', content: 'git tag marks specific points. Types: lightweight (pointer), annotated (object with metadata). git tag <name> creates tag. git tag -a creates annotated. Tags releases. git push --tags pushes tags.' },
        { id: 'q38', title: 'What is merge conflict?', content: 'Merge conflict occurs when Git can\'t auto-merge. Conflicting changes in same lines. Git marks conflicts in files. Resolve manually. Edit files, remove markers. git add to mark resolved. git commit completes merge.' },
        { id: 'q39', title: 'What is git bisect?', content: 'git bisect finds commit introducing bug. Binary search through history. Mark good and bad commits. Git checks out middle commit. Test and mark good/bad. Finds problematic commit. Useful for debugging.' },
        { id: 'q40', title: 'What is git submodule?', content: 'git submodule includes another repository. Nested repository. Points to specific commit. Useful for: shared libraries, dependencies. git submodule add adds submodule. Requires extra care. Alternative: package managers.' }
      ]
    },
    {
      id: 'workflow',
      title: 'Git Workflows',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is Git Flow?', content: 'Git Flow is branching model. Branches: main (production), develop (integration), feature/* (features), release/* (releases), hotfix/* (fixes). Structured workflow. Good for: releases, team coordination. More complex than needed for some projects.' },
        { id: 'q42', title: 'What is GitHub Flow?', content: 'GitHub Flow is simple workflow. Main branch always deployable. Create feature branch. Work and commit. Open pull request. Review and merge. Deploy. Simpler than Git Flow. Good for: continuous deployment, small teams.' },
        { id: 'q43', title: 'What is trunk-based development?', content: 'Trunk-based: work on main branch. Short-lived feature branches. Frequent integration. Continuous deployment. Simpler workflow. Requires: good tests, feature flags. Good for: small teams, fast iteration.' },
        { id: 'q44', title: 'What is feature branch?', content: 'Feature branch isolates feature work. Create from main. Develop feature. Merge back when done. Prevents breaking main. Enables parallel work. Standard practice. Delete after merge.' },
        { id: 'q45', title: 'What is code review?', content: 'Code review examines code before merge. Pull request enables review. Benefits: quality, knowledge sharing, catching bugs. Review: logic, style, tests, documentation. Important for team quality.' },
        { id: 'q46', title: 'What is continuous integration?', content: 'CI automatically tests on commits. Runs tests, linting, builds. Catches issues early. Prevents broken main. Tools: GitHub Actions, Jenkins, CircleCI. Essential for quality. Integrates with Git workflows.' },
        { id: 'q47', title: 'What is semantic versioning?', content: 'Semantic versioning: MAJOR.MINOR.PATCH. MAJOR: breaking changes. MINOR: new features (backward compatible). PATCH: bug fixes. Tags releases. Clear version meaning. Standard practice. Helps dependency management.' },
        { id: 'q48', title: 'What is commit message convention?', content: 'Commit message conventions standardize messages. Format: type(scope): subject. Types: feat, fix, docs, style, refactor, test, chore. Examples: "feat(auth): add login", "fix(api): resolve timeout". Improves history readability.' },
        { id: 'q49', title: 'What are Git best practices?', content: 'Best practices: commit often, meaningful messages, small commits, test before commit, use branches, review before merge, don\'t commit secrets, use .gitignore, keep main stable, document workflow, use tags for releases, backup important work.' },
        { id: 'q50', title: 'What is Git vs GitHub?', content: 'Git is version control tool (command-line). GitHub is platform hosting Git repositories. Git: local tool. GitHub: web service, collaboration features, pull requests, issues, CI/CD. Can use Git without GitHub. GitHub uses Git underneath.' }
      ]
    }
  ]
};
