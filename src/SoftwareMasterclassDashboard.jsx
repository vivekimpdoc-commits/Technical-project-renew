import React, { useState } from 'react';
import { 
  Code, Briefcase, GitBranch, Network, Users
} from 'lucide-react';
import './ThaneLevelDashboard.css';
import ModernTechStack from './ModernTechStack';
import CareerPathsRoles from './CareerPathsRoles';
import OpenSourceGit from './OpenSourceGit';
import SystemDesign from './SystemDesign';
import InterviewPrepDSA from './InterviewPrepDSA';

export default function SoftwareMasterclassDashboard({ resetTrigger }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  React.useEffect(() => {
    setSelectedTopic(null);
  }, [resetTrigger]);

  React.useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [selectedTopic]);

  const topics = [
    { num: 1, id: 'modern-tech', title: 'Modern Tech Stack (आधुनिक टेक्नोलॉजी)', desc: 'React, Node.js, SQL/NoSQL, Docker, AWS', icon: Code, color: '#3b82f6' },
    { num: 2, id: 'career-paths', title: 'Career Paths & Roles (करियर विकल्प)', desc: 'Frontend, Backend, DevOps, Data Engineer', icon: Briefcase, color: '#10b981' },
    { num: 3, id: 'open-source', title: 'Open Source & Git (ओपन सोर्स)', desc: 'Version Control, PRs, Code Review, CI/CD', icon: GitBranch, color: '#f59e0b' },
    { num: 4, id: 'system-design', title: 'System Design (सिस्टम डिज़ाइन)', desc: 'Load Balancing, Caching, Microservices, Scalability', icon: Network, color: '#8b5cf6' },
    { num: 5, id: 'interview-prep', title: 'Interview Prep & DSA (इंटरव्यू तैयारी)', desc: 'Data Structures, Algorithms, STAR method, Mock Interviews', icon: Users, color: '#ec4899' }
  ];

  if (selectedTopic === 1) return <ModernTechStack onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 2) return <CareerPathsRoles onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 3) return <OpenSourceGit onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 4) return <SystemDesign onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 5) return <InterviewPrepDSA onBack={() => setSelectedTopic(null)} />;

  return (
    <div className="thane-dashboard-container" style={{ width: '100%' }}>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Code size={32} color="#3b82f6" />
          Software Masterclass
        </h2>
        <p className="thane-subtitle">Advanced concepts, technologies, and career growth for modern software engineers</p>
      </div>

      <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', marginTop: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#0f172a', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Code size={28} color="#0ea5e9" />
          Choose a Masterclass Topic (विषय चुनें)
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {topics.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                onClick={() => setSelectedTopic(step.num)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem',
                  background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0',
                  borderLeft: `4px solid ${step.color}`, cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px -5px ${step.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  background: `${step.color}15`, color: step.color,
                  width: '48px', height: '48px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.15rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {step.title}
                    <span style={{ fontSize: '0.7rem', background: `${step.color}22`, color: step.color, padding: '0.15rem 0.6rem', borderRadius: '1rem', whiteSpace: 'nowrap' }}>Click to View</span>
                  </h4>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
