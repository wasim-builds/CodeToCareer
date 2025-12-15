import { TheoryTopic } from '@/types/theory';

export const anacondaTheory: TheoryTopic = {
  topicId: 'anaconda',
  topicName: 'Anaconda',
  category: 'Data & AI',
  description: 'Anaconda distribution, conda environments, package management, channels, and reproducible workflows.',
  sections: [
    {
      id: 'overview',
      title: 'Overview and Installation',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Anaconda?', content: 'A Python/R distribution with conda package manager, curated scientific packages, and tools like Jupyter.' },
        { id: 'q2', title: 'Miniconda vs Anaconda?', content: 'Miniconda is minimal with conda only; Anaconda bundles many scientific packages. Prefer Miniconda for lighter installs.' },
        { id: 'q3', title: 'Installation?', content: 'Use installer or script; add to PATH optionally; initialize shell (conda init); verify with conda --version.' },
        { id: 'q4', title: 'Conda vs pip?', content: 'conda manages packages and environments (including non-Python); pip manages Python packages. They can coexist; prefer conda for binaries.' },
        { id: 'q5', title: 'Base environment?', content: 'Default env created on install. Keep base clean; create project-specific envs to avoid dependency conflicts.' },
        { id: 'q6', title: 'Channels?', content: 'Package sources (defaults, conda-forge, bioconda). Priority affects resolution. Use conda-forge for breadth/consistency.' },
        { id: 'q7', title: 'Conda config?', content: 'conda config --show; edit .condarc for channels, channel_priority, env dirs, proxies, ssl verify.' },
        { id: 'q8', title: 'Platform support?', content: 'Windows, macOS, Linux; manage separate envs per platform. Some packages are platform-specific.' },
        { id: 'q9', title: 'Updating conda?', content: 'conda update conda; update regularly but pin when stability required; test updates in non-prod envs.' },
        { id: 'q10', title: 'Security considerations?', content: 'Use trusted channels; verify checksums; avoid running as root; restrict writable env locations.' }
      ]
    },
    {
      id: 'envs',
      title: 'Environments and Dependency Management',
      content: '',
      subsections: [
        { id: 'q11', title: 'Creating envs?', content: 'conda create -n name python=3.11 pkg1 pkg2; activate with conda activate name; deactivate to leave.' },
        { id: 'q12', title: 'Listing and removing?', content: 'conda env list to view; conda remove -n name --all to delete; conda list to see packages in env.' },
        { id: 'q13', title: 'Specifying Python version?', content: 'Pin Python on env creation; mixing many pins can cause conflicts—resolve by loosening constraints or using conda-forge.' },
        { id: 'q14', title: 'Environment files?', content: 'environment.yml captures dependencies/channels; conda env create -f environment.yml; export with conda env export --from-history.' },
        { id: 'q15', title: 'Reproducibility?', content: 'Use explicit specs via conda list --explicit; lockfiles (conda-lock) for exact versions; prefer from-history export to avoid cruft.' },
        { id: 'q16', title: 'Isolated builds?', content: 'Create per-project envs; avoid mixing CPU/GPU variants; use mamba for faster solves; avoid pip in base.' },
        { id: 'q17', title: 'Conflicts troubleshooting?', content: 'Relax pins, switch channels, use mamba, remove incompatible packages, review solver hints, and start from minimal spec.' },
        { id: 'q18', title: 'Mixing pip and conda?', content: 'Prefer conda packages first; if using pip, install after conda packages; record in requirements.txt; recreate carefully.' },
        { id: 'q19', title: 'Cloning envs?', content: 'conda create --name new --clone old to duplicate; useful for experiments without breaking main env.' },
        { id: 'q20', title: 'Virtual packages?', content: 'Conda detects system CUDA/OS features as virtual packages influencing dependency selection.' }
      ]
    },
    {
      id: 'packages',
      title: 'Packages, Channels, and Performance',
      content: '',
      subsections: [
        { id: 'q21', title: 'Installing packages?', content: 'conda install pkg; add -c channel if not in defaults; pin versions with =; use mamba for speed.' },
        { id: 'q22', title: 'CPU vs GPU builds?', content: 'Many libs have cuda-specific builds (e.g., pytorch, tensorflow). Match CUDA toolkit/drivers; prefer conda-forge for consistency.' },
        { id: 'q23', title: 'Custom channels/artifacts?', content: 'Host private channels (e.g., with Anaconda Server); authenticate via .condarc; manage access tokens securely.' },
        { id: 'q24', title: 'Channel priority?', content: 'strict/flexible/prioritized modes. strict prevents mixing lower-priority packages unless unavailable.' },
        { id: 'q25', title: 'Caching?', content: 'Conda caches packages in pkgs/; reuse across envs; clean with conda clean -a if space constrained.' },
        { id: 'q26', title: 'Performance tips?', content: 'Use mamba for faster solves, limit channels, avoid overconstraining, and keep envs lean.' },
        { id: 'q27', title: 'Downgrades?', content: 'Solver may downgrade to satisfy constraints; review plan before confirm; pin critical deps or use locks.' },
        { id: 'q28', title: 'Build vs run dependencies?', content: 'Conda packages separate build/run deps; ensures runtime consistency; inspect meta.yaml for details.' },
        { id: 'q29', title: 'Pip interoperability?', content: 'Use pip check after mixing; rebuild env if conflicts occur; prefer pure conda where possible.' },
        { id: 'q30', title: 'Private wheels?', content: 'Install via pip with extra-index-url; ensure native deps available in env; consider building conda packages instead.' }
      ]
    },
    {
      id: 'workflow',
      title: 'Workflow and Tooling',
      content: '',
      subsections: [
        { id: 'q31', title: 'Jupyter integration?', content: 'ipykernel per env; python -m ipykernel install --user --name env. Use nb_conda_kernels or VS Code kernel selection.' },
        { id: 'q32', title: 'Project isolation?', content: 'Create env per project; store environment.yml; use direnv/Makefile to automate activation; avoid polluting base.' },
        { id: 'q33', title: 'Recreating on CI?', content: 'Use conda env create -f env.yml; cache pkgs dir; prefer mamba for speed; pin OS image for reproducibility.' },
        { id: 'q34', title: 'Data science stacks?', content: 'Common bundles: numpy/pandas/scipy/scikit-learn/matplotlib/seaborn/jupyter; ensure compatible versions via channel consistency.' },
        { id: 'q35', title: 'Conda-build basics?', content: 'meta.yaml defines package; build with conda-build; upload to channel with anaconda upload; test in clean envs.' },
        { id: 'q36', title: 'Environment activation scripts?', content: 'Use conda activate hooks (etc/conda/activate.d) to set env vars or paths per env.' },
        { id: 'q37', title: 'Multiple Python versions?', content: 'Separate envs per major/minor version; install matching compilers/headers for building native extensions.' },
        { id: 'q38', title: 'GPU drivers and CUDA?', content: 'Install matching NVIDIA driver on host; conda cuda toolkit packages supply user-space libs; verify with nvidia-smi.' },
        { id: 'q39', title: 'Exporting to pip users?', content: 'Provide requirements.txt plus notes on conda alternatives; or publish wheels/conda packages for both users.' },
        { id: 'q40', title: 'Space management?', content: 'Prune unused envs; clean package cache; avoid duplicative large packages; consider mamba for lighter installs.' }
      ]
    },
    {
      id: 'best',
      title: 'Best Practices and Troubleshooting',
      content: '',
      subsections: [
        { id: 'q41', title: 'Locking dependencies?', content: 'Use conda-lock or explicit export; keep env files under version control; rebuild from locks in prod.' },
        { id: 'q42', title: 'Handling conflicts?', content: 'Start minimal, add packages gradually, try mamba, change channels, or recreate env from scratch if unsalvageable.' },
        { id: 'q43', title: 'Rolling back?', content: 'conda list --revisions; conda install --revision N to roll back env state after bad installs.' },
        { id: 'q44', title: 'Environment drift?', content: 'Pin versions, avoid ad-hoc installs, rebuild regularly, and use CI to test env recreation.' },
        { id: 'q45', title: 'Repro across OS?', content: 'Avoid OS-specific packages; use conda-forge when possible; consider containers for parity across platforms.' },
        { id: 'q46', title: 'Performance of solver?', content: 'Limit channels, avoid unnecessary pins, prefer mamba, and clean cache; reduce virtual packages variance.' },
        { id: 'q47', title: 'Security updates?', content: 'Update critical packages; track CVEs; rebuild envs with patched versions; avoid stale base env.' },
        { id: 'q48', title: 'Pip breakage?', content: 'If pip install breaks deps, reinstall from environment.yml or recreate env; keep pip installs minimal.' },
        { id: 'q49', title: 'Version pinning strategy?', content: 'Pin major/minor for stability; allow patch updates; freeze for production; document known-good sets.' },
        { id: 'q50', title: 'Sharing envs?', content: 'Commit env.yml/locks, include README with setup commands, specify channels, Python version, and platform notes.' }
      ]
    }
  ]
};
