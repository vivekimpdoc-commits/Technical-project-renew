import React, { useState } from 'react';
import { ArrowLeft, Users, BrainCircuit, FileText, Briefcase, Video, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function InterviewPrepDSA({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      subtitle: 'Coding Fundamentals (कोडिंग बेसिक्स)',
      icon: BrainCircuit,
      color: '#3b82f6',
      items: [
        'Arrays, Strings, & HashMaps',
        'Linked Lists & Trees',
        'Sorting & Searching Algorithms',
        'Dynamic Programming (DP)',
        'Big O Notation (Time/Space Complexity)'
      ],
      example: 'To pass the technical coding rounds of top tech companies by demonstrating strong problem-solving skills and code efficiency.',
      deepDive: [
        {
          heading: 'Big O Notation',
          text: 'O(1) is instant. O(N) takes linear time. O(N^2) is a nested loop and usually bad. Understanding this is crucial for writing efficient code.'
        },
        {
          heading: 'HashMaps',
          text: 'The most powerful data structure in interviews. It allows O(1) lookups, turning many complex O(N^2) problems into simple O(N) solutions.'
        }
      ]
    },
    {
      id: 'system-design-interview',
      title: 'System Design Interviews',
      subtitle: 'Whiteboard Architecture (सिस्टम डिज़ाइन राउंड)',
      icon: Layers,
      color: '#10b981',
      items: [
        'Requirement Gathering (Scope)',
        'Capacity Estimation (Math)',
        'High-Level Design (HLD)',
        'Deep Dives & Bottlenecks',
        'Trade-offs (CAP Theorem)'
      ],
      example: 'To prove you can architect large-scale systems (like "Design Netflix" or "Design WhatsApp") from scratch on a whiteboard.',
      deepDive: [
        {
          heading: 'Clarifying Requirements',
          text: 'Never start designing immediately. Always ask questions. E.g., "Design Twitter" - Are we focusing on the news feed or trending topics? How many DAU (Daily Active Users)?'
        },
        {
          heading: 'Discussing Trade-offs',
          text: 'There is no perfect system. Be prepared to explain why you chose a NoSQL database over SQL, and what the downsides of your choice are.'
        }
      ]
    },
    {
      id: 'behavioral',
      title: 'Behavioral Interviews (STAR)',
      subtitle: 'Soft Skills (सॉफ्ट स्किल्स)',
      icon: Users,
      color: '#f59e0b',
      items: [
        'Situation, Task, Action, Result (STAR)',
        'Conflict Resolution Stories',
        'Leadership & Mentorship',
        'Handling Failures',
        'Amazon Leadership Principles'
      ],
      example: 'To show that you are a great team player, can handle stress, and fit into the company culture seamlessly.',
      deepDive: [
        {
          heading: 'The STAR Method',
          text: 'When asked "Tell me about a time you failed", structure your answer: Situation (context), Task (goal), Action (what YOU did), Result (metrics/outcome).'
        },
        {
          heading: 'Focus on "I", not "We"',
          text: 'While teamwork is great, interviewers want to know what YOUR specific contribution was to the project.'
        }
      ]
    },
    {
      id: 'resume-portfolio',
      title: 'Resume & Portfolio',
      subtitle: 'Getting Shortlisted (शॉर्टलिस्ट होना)',
      icon: FileText,
      color: '#8b5cf6',
      items: [
        'ATS-Friendly Resume Formats',
        'Action Verbs & Quantified Results',
        'GitHub Profile Optimization',
        'Personal Portfolio Website',
        'Cold Emailing & Referrals'
      ],
      example: 'To get past automated resume screeners and catch the recruiter\'s eye in the crucial first 6 seconds of review.',
      deepDive: [
        {
          heading: 'Quantify Your Impact',
          text: 'Instead of "Fixed bugs", write "Reduced API response time by 40% (200ms to 120ms) by optimizing SQL queries and adding Redis caching."'
        },
        {
          heading: 'ATS (Applicant Tracking Systems)',
          text: 'Don\'t use complex multi-column resumes with graphics. Use a simple, single-column PDF so parsing bots can easily read your text.'
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
          <Users size={32} color="#ec4899" />
          Interview Prep & DSA (इंटरव्यू तैयारी)
        </h2>
        <p className="thane-subtitle">A complete guide to cracking technical interviews at top software companies.</p>
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
