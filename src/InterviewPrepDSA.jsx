import React, { useState } from 'react';
import { ArrowLeft, Users, BrainCircuit, FileText, Layers, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function InterviewPrepDSA({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'dsa', title: 'Data Structures & Algorithms', subtitle: 'Coding Fundamentals (कोडिंग बेसिक्स)',
      icon: BrainCircuit, color: '#3b82f6',
      items: ['Arrays, Strings, & HashMaps', 'Linked Lists & Trees', 'Sorting & Searching Algorithms', 'Dynamic Programming (DP)', 'Big O Notation (Time/Space Complexity)'],
      example: 'To pass the technical coding rounds of top tech companies by demonstrating strong problem-solving skills and code efficiency.',
      deepDive: [
        { heading: 'Big O Notation', text: 'O(1) is instant. O(N) takes linear time. O(N^2) is a nested loop and usually bad. Understanding this is crucial for writing efficient code.' },
        { heading: 'HashMaps', text: 'The most powerful data structure in interviews. It allows O(1) lookups, turning many complex O(N^2) problems into simple O(N) solutions.' }
      ]
    },
    {
      id: 'system-design-interview', title: 'System Design Interviews', subtitle: 'Whiteboard Architecture (सिस्टम डिज़ाइन राउंड)',
      icon: Layers, color: '#10b981',
      items: ['Requirement Gathering (Scope)', 'Capacity Estimation (Math)', 'High-Level Design (HLD)', 'Deep Dives & Bottlenecks', 'Trade-offs (CAP Theorem)'],
      example: 'To prove you can architect large-scale systems (like "Design Netflix" or "Design WhatsApp") from scratch on a whiteboard.',
      deepDive: [
        { heading: 'Clarifying Requirements', text: 'Never start designing immediately. Always ask questions. E.g., "Design Twitter" - Are we focusing on the news feed or trending topics? How many DAU (Daily Active Users)?' },
        { heading: 'Discussing Trade-offs', text: 'There is no perfect system. Be prepared to explain why you chose a NoSQL database over SQL, and what the downsides of your choice are.' }
      ]
    },
    {
      id: 'behavioral', title: 'Behavioral Interviews (STAR)', subtitle: 'Soft Skills (सॉफ्ट स्किल्स)',
      icon: Users, color: '#f59e0b',
      items: ['Situation, Task, Action, Result (STAR)', 'Conflict Resolution Stories', 'Leadership & Mentorship', 'Handling Failures', 'Amazon Leadership Principles'],
      example: 'To show that you are a great team player, can handle stress, and fit into the company culture seamlessly.',
      deepDive: [
        { heading: 'The STAR Method', text: 'When asked "Tell me about a time you failed", structure your answer: Situation (context), Task (goal), Action (what YOU did), Result (metrics/outcome).' },
        { heading: 'Focus on "I", not "We"', text: 'While teamwork is great, interviewers want to know what YOUR specific contribution was to the project.' }
      ]
    },
    {
      id: 'resume-portfolio', title: 'Resume & Portfolio', subtitle: 'Getting Shortlisted (शॉर्टलिस्ट होना)',
      icon: FileText, color: '#8b5cf6',
      items: ['ATS-Friendly Resume Formats', 'Action Verbs & Quantified Results', 'GitHub Profile Optimization', 'Personal Portfolio Website', 'Cold Emailing & Referrals'],
      example: 'To get past automated resume screeners and catch the recruiter\'s eye in the crucial first 6 seconds of review.',
      deepDive: [
        { heading: 'Quantify Your Impact', text: 'Instead of "Fixed bugs", write "Reduced API response time by 40% (200ms to 120ms) by optimizing SQL queries and adding Redis caching."' },
        { heading: 'ATS (Applicant Tracking Systems)', text: 'Don\'t use complex multi-column resumes with graphics. Use a simple, single-column PDF so parsing bots can easily read your text.' }
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
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Users size={32} color="#ec4899" /> Interview Prep & DSA (इंटरव्यू तैयारी)</h2>
        <p className="thane-subtitle">A complete guide to cracking technical interviews at top software companies.</p>
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
