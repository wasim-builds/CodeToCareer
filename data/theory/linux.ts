import { TheoryTopic } from '@/types/theory';

export const linuxTheory: TheoryTopic = {
  topicId: 'linux',
  topicName: 'Linux (Ubuntu/Fedora)',
  category: 'Tools & Cloud',
  description: 'Linux operating system administration',
  sections: [
    {
      id: 'basics',
      title: 'Linux Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Linux?', content: 'Linux is open-source Unix-like operating system. Kernel + distributions. Free and open source. Used in: servers, embedded, supercomputers, cloud. Most servers run Linux. Essential for developers.' },
        { id: 'q2', title: 'What is Linux distribution?', content: 'Linux distribution (distro) packages Linux kernel with software. Examples: Ubuntu, Fedora, Debian, CentOS, Arch. Different: package managers, defaults, philosophy. Choose based on needs.' },
        { id: 'q3', title: 'What is shell?', content: 'Shell is command interpreter. Types: Bash (default), Zsh, Fish. Interface to system. Execute commands. Scripting. Essential tool.' },
        { id: 'q4', title: 'What is terminal?', content: 'Terminal is text interface. Command-line interface (CLI). Execute commands. Powerful tool. Essential for Linux. Developer tool.' },
        { id: 'q5', title: 'What is file system hierarchy?', content: 'File system: / (root), /home (users), /etc (config), /var (variable), /usr (user programs), /bin (binaries), /opt (optional). Standard structure. Organized system.' },
        { id: 'q6', title: 'What are file permissions?', content: 'File permissions: read (r), write (w), execute (x). Users: owner, group, others. chmod changes permissions. chown changes owner. Security important. Access control.' },
        { id: 'q7', title: 'What is root user?', content: 'Root user has all permissions. Superuser. Dangerous if misused. Use sudo for temporary elevation. Avoid logging in as root. Security best practice.' },
        { id: 'q8', title: 'What is sudo?', content: 'sudo runs commands as another user (usually root). Temporary elevation. Safer than root login. Configure in /etc/sudoers. Security feature. Common practice.' },
        { id: 'q9', title: 'What is package manager?', content: 'Package manager installs software. Ubuntu/Debian: apt. Fedora: dnf/yum. Arch: pacman. Handles dependencies. Easy installation. System management.' },
        { id: 'q10', title: 'What is process?', content: 'Process is running program. Each has: PID (process ID), parent, state. ps shows processes. kill terminates. Process management. System operation.' }
      ]
    },
    {
      id: 'commands',
      title: 'Linux Commands',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is ls command?', content: 'ls lists directory contents. Options: -l (long), -a (all), -h (human), -R (recursive). Basic navigation. Essential command.' },
        { id: 'q12', title: 'What is cd command?', content: 'cd changes directory. cd .. (parent), cd ~ (home), cd - (previous). Navigation. Change location. Essential command.' },
        { id: 'q13', title: 'What is pwd command?', content: 'pwd shows current directory. Print working directory. Know your location. Navigation aid. Simple command.' },
        { id: 'q14', title: 'What is mkdir/rmdir?', content: 'mkdir creates directories, rmdir removes empty directories. -p creates parents. Directory management. File organization.' },
        { id: 'q15', title: 'What is cp/mv/rm?', content: 'cp copies files, mv moves/renames, rm removes. Options: -r (recursive), -f (force), -i (interactive). File operations. Essential commands.' },
        { id: 'q16', title: 'What is cat/less/more?', content: 'cat displays file, less/more page through file. View file contents. Different for large files. File viewing.' },
        { id: 'q17', title: 'What is grep?', content: 'grep searches text. Options: -i (ignore case), -r (recursive), -v (invert), -n (line numbers). Pattern matching. Powerful search.' },
        { id: 'q18', title: 'What is find?', content: 'find searches files. Syntax: find path -name pattern. Options: -type, -size, -mtime. Powerful search. File operations.' },
        { id: 'q19', title: 'What is chmod?', content: 'chmod changes permissions. Syntax: chmod 755 file or chmod u+x file. Numeric (755) or symbolic (u+x). Access control. Security important.' },
        { id: 'q20', title: 'What is ps/top/htop?', content: 'ps shows processes, top shows real-time, htop is enhanced top. Process monitoring. System information. Resource usage.' }
      ]
    },
    {
      id: 'system',
      title: 'System Administration',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is systemd?', content: 'systemd is init system and service manager. Manages services. Commands: systemctl start/stop/status. Service management. Modern Linux standard.' },
        { id: 'q22', title: 'What is service management?', content: 'Service management: systemctl start service, stop, restart, status, enable (start on boot), disable. Manage services. System administration. Essential skill.' },
        { id: 'q23', title: 'What is cron?', content: 'cron schedules tasks. crontab edits schedule. Format: minute hour day month weekday command. Automated tasks. Background jobs. System scheduling.' },
        { id: 'q24', title: 'What is log files?', content: 'Log files: /var/log/. systemd journal: journalctl. Application logs. System logs. Troubleshooting. Monitor system.' },
        { id: 'q25', title: 'What is disk management?', content: 'Disk management: df (disk free), du (disk usage), fdisk (partition), mount/umount (filesystems). Disk space. Storage management. System administration.' },
        { id: 'q26', title: 'What is user management?', content: 'User management: useradd (add user), usermod (modify), userdel (delete), passwd (password). Account management. System administration. Access control.' },
        { id: 'q27', title: 'What is network configuration?', content: 'Network: ifconfig/ip (interfaces), ping (test), netstat/ss (connections), iptables (firewall). Network management. Connectivity. System administration.' },
        { id: 'q28', title: 'What is firewall?', content: 'Firewall filters network traffic. iptables, firewalld, ufw. Allow/deny rules. Security important. Network protection. System security.' },
        { id: 'q29', title: 'What is SSH?', content: 'SSH (Secure Shell) remote access. Encrypted connection. ssh user@host. Key-based authentication. Remote administration. Essential tool.' },
        { id: 'q30', title: 'What is environment variables?', content: 'Environment variables: PATH, HOME, USER, etc. Set in: .bashrc, .profile, /etc/environment. System configuration. Application settings. Important for scripts.' }
      ]
    },
    {
      id: 'package-management',
      title: 'Package Management',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is apt (Ubuntu)?', content: 'apt is Ubuntu package manager. Commands: apt update, apt upgrade, apt install, apt remove, apt search. Software management. Easy installation.' },
        { id: 'q32', title: 'What is dnf/yum (Fedora)?', content: 'dnf/yum is Fedora package manager. Commands: dnf install, dnf update, dnf remove, dnf search. Software management. Red Hat family.' },
        { id: 'q33', title: 'What is snap?', content: 'snap is universal package format. Works across distributions. Isolated packages. Auto-updates. Modern packaging. Cross-distro.' },
        { id: 'q34', title: 'What is flatpak?', content: 'flatpak is application distribution. Sandboxed applications. Cross-distro. Modern packaging. Application isolation.' },
        { id: 'q35', title: 'What is repository?', content: 'Repository stores packages. Configured in /etc/apt/sources.list or /etc/yum.repos.d/. Official and third-party. Software source. Package management.' },
        { id: 'q36', title: 'What is dependency resolution?', content: 'Dependency resolution: packages depend on others. Package manager handles. Automatic installation. Resolves conflicts. Essential feature.' },
        { id: 'q37', title: 'What is package update?', content: 'Package update: update package lists, upgrade packages. Security updates important. Regular updates. System maintenance. Keep updated.' },
        { id: 'q38', title: 'What is source compilation?', content: 'Source compilation: download source, configure, make, make install. Manual installation. More control. Time-consuming. Alternative to packages.' },
        { id: 'q39', title: 'What is package verification?', content: 'Package verification: GPG signatures, checksums. Verify authenticity. Security important. Prevent tampering. Trust packages.' },
        { id: 'q40', title: 'What is package best practices?', content: 'Best practices: use official repos, verify packages, keep updated, understand dependencies, use package managers, avoid manual installs when possible, document custom installs.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Linux',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is shell scripting?', content: 'Shell scripting automates tasks. Bash scripts. Variables, loops, conditionals, functions. Automation tool. System administration. Powerful feature.' },
        { id: 'q42', title: 'What is process management?', content: 'Process management: ps (list), kill (terminate), jobs (background), fg/bg (foreground/background), nice/renice (priority). Control processes. System operation.' },
        { id: 'q43', title: 'What is system monitoring?', content: 'System monitoring: top/htop (processes), iotop (I/O), netstat/ss (network), df/du (disk), free (memory). Monitor resources. System health. Troubleshooting.' },
        { id: 'q44', title: 'What is backup?', content: 'Backup: rsync (sync), tar (archive), dd (disk copy), cron (schedule). Regular backups. Disaster recovery. Important practice. Data protection.' },
        { id: 'q45', title: 'What is virtualization?', content: 'Virtualization: KVM, VirtualBox, Docker. Run multiple systems. Isolation. Resource sharing. Modern computing. Cloud foundation.' },
        { id: 'q46', title: 'What is containerization?', content: 'Containerization: Docker, Podman. Application isolation. Lightweight. Portable. Modern deployment. Cloud native.' },
        { id: 'q47', title: 'What is Linux security?', content: 'Linux security: firewall, SELinux/AppArmor, updates, least privilege, SSH keys, disable root login, audit logs, encryption. Multiple layers. Important for production.' },
        { id: 'q48', title: 'What is performance tuning?', content: 'Performance tuning: optimize services, kernel parameters, resource limits, I/O scheduling, memory management. System optimization. Better performance. Production tuning.' },
        { id: 'q49', title: 'What is troubleshooting?', content: 'Troubleshooting: check logs, system status, resources, network, permissions, services. Systematic approach. Problem solving. Essential skill.' },
        { id: 'q50', title: 'What are Linux best practices?', content: 'Best practices: use package managers, keep updated, secure system, regular backups, monitor resources, use sudo not root, document changes, test in staging, follow conventions, learn continuously.' }
      ]
    }
  ]
};
