import React, { useState } from 'react';
import { ArrowLeft, GitBranch, GitPullRequest, GitCommit, GitMerge, Globe, Users, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function OpenSourceGit({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'version-control',
      title: 'Version Control (Git)',
      subtitle: 'Tracking Changes (बदलावों को ट्रैक करना)',
      icon: GitCommit,
      color: '#3b82f6',
      items: [
        'Why use Git instead of Google Drive?',
        'git init, add, commit, status',
        'Viewing history with git log',
        'Undoing mistakes (reset, revert)',
        'Understanding the staging area'
      ],
      example: 'To keep a complete, time-stamped history of every change ever made to your codebase, allowing you to easily undo mistakes.',
      deepDive: [
        {
          heading: 'The Staging Area',
          text: 'Git has a unique concept called the staging area. Before you commit files to history, you "stage" them. This lets you group related changes into a single commit.'
        },
        {
          heading: 'Reverting vs Resetting',
          text: 'git revert creates a new commit that undoes changes safely (good for shared history). git reset rewrites history (good for local, unshared mistakes).'
        }
      ]
    },
    {
      id: 'branching',
      title: 'Branching Strategies',
      subtitle: 'Parallel Work (एक साथ काम करना)',
      icon: GitBranch,
      color: '#10b981',
      items: [
        'Creating branches (git checkout -b)',
        'Feature Branches vs Main Branch',
        'Git Flow Methodology',
        'Trunk-Based Development',
        'Switching contexts safely'
      ],
      example: 'To allow multiple developers to work on completely different features simultaneously without breaking each other\'s code.',
      deepDive: [
        {
          heading: 'Feature Branches',
          text: 'Every new feature or bug fix gets its own branch (e.g., feature/login-page). Once completed, it is merged back into the main branch.'
        },
        {
          heading: 'Git Flow',
          text: 'A structured branching model that uses specific branches for features, releases, and hotfixes. Great for large teams with scheduled releases.'
        }
      ]
    },
    {
      id: 'collaboration',
      title: 'GitHub & Pull Requests',
      subtitle: 'Code Review (कोड को चेक करना)',
      icon: GitPullRequest,
      color: '#f59e0b',
      items: [
        'Pushing code to remote (GitHub/GitLab)',
        'Opening a Pull Request (PR)',
        'Conducting Code Reviews',
        'Approving and Merging PRs',
        'Resolving Merge Conflicts'
      ],
      example: 'To facilitate teamwork by having peers review your code for bugs and style before it becomes part of the main product.',
      deepDive: [
        {
          heading: 'What is a Pull Request?',
          text: 'A PR is a request to "pull" your completed feature branch into the main branch. It provides a dedicated page for teammates to view the diffs and leave comments.'
        },
        {
          heading: 'Merge Conflicts',
          text: 'When two developers edit the same line of code, Git cannot automatically merge them. You must manually choose which changes to keep.'
        }
      ]
    },
    {
      id: 'open-source',
      title: 'Open Source Contribution',
      subtitle: 'Global Community (ग्लोबल कम्युनिटी)',
      icon: Globe,
      color: '#8b5cf6',
      items: [
        'What is Open Source?',
        'Forking a repository',
        'Cloning to local machine',
        'Reading CONTRIBUTING.md',
        'Creating your first open-source PR'
      ],
      example: 'To collaborate with thousands of developers worldwide, build your portfolio, and give back to tools you use every day.',
      deepDive: [
        {
          heading: 'Forking vs Cloning',
          text: 'Cloning simply downloads a repository. Forking creates your own personal copy of someone else\'s project on GitHub so you can freely make changes and suggest them back via PR.'
        },
        {
          heading: 'Finding Projects',
          text: 'Look for repositories with tags like "good first issue" or "help wanted". These are specifically curated for beginners to make their first contribution.'
        }
      ]
    }
  ];

  if (selectedDetail) {
    return <ModuleDetail module={selectedDetail} onBack={() => setSelectedDetail(null)} />;
  }

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <button onClick={onBack} className="thane-back-btn" style={{ marginBottom: '1rem' }}>
        <ArrowLeft size={20} /> Back to Masterclass
      </button>

      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <GitBranch size={32} color="#f59e0b" />
          Open Source & Version Control (गिट और ओपन सोर्स)
        </h2>
        <p className="thane-subtitle">Mastering code collaboration, version control, and contributing to the global developer community.</p>
      </div>

      <div className="thane-projects-grid">
        {reqData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="thane-project-card" style={{ borderTop: `4px solid ${item.color}` }}>
              <div className="thane-card-header">
                <div className="thane-card-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="thane-card-title" style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#0f172a' }}>{item.title}</h3>
                  <div style={{ display: 'inline-block', backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`, padding: '0.3rem 0.6rem', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: '600', lineHeight: '1.3' }}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
              
              <div className="thane-card-content" style={{ marginTop: '1rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.items.map((li, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#475569', lineHeight: '1.4' }}>
                      <span style={{ minWidth: '6px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.color, marginTop: '0.4rem', flexShrink: 0 }}></span>
                      <span style={{ flex: 1 }}>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="thane-card-footer">
                <button 
                  className="thane-view-btn" 
                  onClick={() => setSelectedDetail(item)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Layers size={18} />
                  Click to View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
