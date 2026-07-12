import React, { useState } from 'react';
import { ArrowLeft, GitBranch, GitPullRequest, GitCommit, Globe, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function OpenSourceGit({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'version-control', title: 'Version Control (Git)', subtitle: 'Tracking Changes (बदलावों को ट्रैक करना)',
      icon: GitCommit, color: '#3b82f6',
      items: ['Why use Git instead of Google Drive?', 'git init, add, commit, status', 'Viewing history with git log', 'Undoing mistakes (reset, revert)', 'Understanding the staging area'],
      example: 'To keep a complete, time-stamped history of every change ever made to your codebase, allowing you to easily undo mistakes.',
      deepDive: [
        { heading: 'The Staging Area', text: 'Git has a unique concept called the staging area. Before you commit files to history, you "stage" them. This lets you group related changes into a single commit.' },
        { heading: 'Reverting vs Resetting', text: 'git revert creates a new commit that undoes changes safely (good for shared history). git reset rewrites history (good for local, unshared mistakes).' }
      ]
    },
    {
      id: 'branching', title: 'Branching Strategies', subtitle: 'Parallel Work (एक साथ काम करना)',
      icon: GitBranch, color: '#10b981',
      items: ['Creating branches (git checkout -b)', 'Feature Branches vs Main Branch', 'Git Flow Methodology', 'Trunk-Based Development', 'Switching contexts safely'],
      example: 'To allow multiple developers to work on completely different features simultaneously without breaking each other\'s code.',
      deepDive: [
        { heading: 'Feature Branches', text: 'Every new feature or bug fix gets its own branch (e.g., feature/login-page). Once completed, it is merged back into the main branch.' },
        { heading: 'Git Flow', text: 'A structured branching model that uses specific branches for features, releases, and hotfixes. Great for large teams with scheduled releases.' }
      ]
    },
    {
      id: 'collaboration', title: 'GitHub & Pull Requests', subtitle: 'Code Review (कोड को चेक करना)',
      icon: GitPullRequest, color: '#f59e0b',
      items: ['Pushing code to remote (GitHub/GitLab)', 'Opening a Pull Request (PR)', 'Conducting Code Reviews', 'Approving and Merging PRs', 'Resolving Merge Conflicts'],
      example: 'To facilitate teamwork by having peers review your code for bugs and style before it becomes part of the main product.',
      deepDive: [
        { heading: 'What is a Pull Request?', text: 'A PR is a request to "pull" your completed feature branch into the main branch. It provides a dedicated page for teammates to view the diffs and leave comments.' },
        { heading: 'Merge Conflicts', text: 'When two developers edit the same line of code, Git cannot automatically merge them. You must manually choose which changes to keep.' }
      ]
    },
    {
      id: 'open-source', title: 'Open Source Contribution', subtitle: 'Global Community (ग्लोबल कम्युनिटी)',
      icon: Globe, color: '#8b5cf6',
      items: ['What is Open Source?', 'Forking a repository', 'Cloning to local machine', 'Reading CONTRIBUTING.md', 'Creating your first open-source PR'],
      example: 'To collaborate with thousands of developers worldwide, build your portfolio, and give back to tools you use every day.',
      deepDive: [
        { heading: 'Forking vs Cloning', text: 'Cloning simply downloads a repository. Forking creates your own personal copy of someone else\'s project on GitHub so you can freely make changes and suggest them back via PR.' },
        { heading: 'Finding Projects', text: 'Look for repositories with tags like "good first issue" or "help wanted". These are specifically curated for beginners to make their first contribution.' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {selectedModule && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isPopupMaximized ? '1rem' : '2rem' }}>
          <div className="animate-fade-in" style={{ background: '#f8fafc', width: '100%', maxWidth: isPopupMaximized ? '98%' : '1000px', height: isPopupMaximized ? '96vh' : '75vh', overflowY: 'auto', borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button onClick={() => setIsPopupMaximized(!isPopupMaximized)} style={{ background: '#e2e8f0', color: '#0f172a', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}</button>
              <button onClick={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>✕ Close</button>
            </div>
            <ModuleDetail module={selectedModule} onBack={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} isMaximized={isPopupMaximized} />
          </div>
        </div>
      )}

      <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} /> Back to Masterclass
        </button>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><GitBranch size={32} color="#f59e0b" /> Open Source & Version Control (गिट और ओपन सोर्स)</h2>
        <p className="thane-subtitle">Mastering code collaboration, version control, and contributing to the global developer community.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderTop: `4px solid ${module.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}><module.icon size={24} /></div>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>{module.title}</h4>
              </div>
            </div>
            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', fontWeight: '500' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: module.color, flexShrink: 0 }}></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={(e) => { e.stopPropagation(); setSelectedModuleId(module.id); }} style={{ width: '100%', padding: '0.75rem', background: module.color, color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: `0 4px 10px ${module.color}66`, transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                ><BookOpen size={18} /> Click to View Detailed Modules</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
