import React, { useState } from 'react';
import { ArrowLeft, Briefcase, UserCheck, Settings, Database, Terminal, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function CareerPathsRoles({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'frontend-dev', title: 'Frontend Developer', subtitle: 'UI/UX Specialist (यूज़र इंटरफ़ेस विशेषज्ञ)',
      icon: Terminal, color: '#3b82f6',
      items: ['Transforms design (Figma) into code', 'Ensures responsive & accessible UI', 'Manages browser performance', 'Works heavily with React, CSS, APIs', 'Collaborates with designers & backend'],
      example: 'To create visually appealing, accessible, and highly interactive user interfaces that run in the user\'s browser.',
      deepDive: [
        { heading: 'Core Responsibilities', text: 'A frontend developer focuses on everything the user sees and interacts with. They care about bundle sizes, render speeds, and accessibility (a11y).' },
        { heading: 'Career Progression', text: 'Junior Frontend Dev -> Mid-Level -> Senior Frontend Engineer -> UI Architect / Frontend Lead.' }
      ]
    },
    {
      id: 'backend-dev', title: 'Backend Developer', subtitle: 'Server & Logic (सर्वर और लॉजिक)',
      icon: Database, color: '#10b981',
      items: ['Builds APIs for frontend to consume', 'Designs database schemas', 'Ensures data security and auth', 'Optimizes server response times', 'Integrates third-party services'],
      example: 'To build the robust, secure, and scalable engine that powers the application from behind the scenes.',
      deepDive: [
        { heading: 'Core Responsibilities', text: 'Writing server-side code (Node, Python, Java), managing database interactions, and ensuring the application can scale under load.' },
        { heading: 'Career Progression', text: 'Junior Backend Dev -> Mid-Level -> Senior Backend Engineer -> Software Architect.' }
      ]
    },
    {
      id: 'devops-sre', title: 'DevOps / SRE', subtitle: 'Infrastructure (इंफ्रास्ट्रक्चर मैनेजमेंट)',
      icon: Settings, color: '#f59e0b',
      items: ['Manages cloud servers (AWS, GCP)', 'Builds CI/CD pipelines', 'Automates deployments', 'Monitors system health & uptime', 'Handles incident response'],
      example: 'To bridge the gap between development and operations, ensuring code is delivered rapidly, safely, and reliably.',
      deepDive: [
        { heading: 'DevOps vs SRE', text: 'DevOps is a philosophy of combining Dev and Ops. Site Reliability Engineering (SRE) implements DevOps using software engineering practices (Google\'s approach).' },
        { heading: 'Key Tools', text: 'Docker, Kubernetes, Terraform (Infrastructure as Code), Jenkins, Prometheus, and Grafana.' }
      ]
    },
    {
      id: 'product-manager', title: 'Product Manager (PM)', subtitle: 'Vision & Strategy (प्रोडक्ट की दिशा तय करना)',
      icon: UserCheck, color: '#8b5cf6',
      items: ['Defines the product roadmap', 'Prioritizes features & backlog', 'Gathers user requirements', 'Bridges tech, design, and business', 'Measures product success (KPIs)'],
      example: 'To ensure the engineering team is building the right thing that delivers real value to the business and users.',
      deepDive: [
        { heading: 'Core Responsibilities', text: 'PMs write User Stories, prioritize the Jira backlog, and decide what gets built next based on data and market research.' },
        { heading: 'Technical PM vs PM', text: 'A Technical Product Manager (TPM) has an engineering background and works closer with the architecture team on highly technical products (like APIs).' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {selectedModule && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isPopupMaximized ? '1rem' : '2rem' }}>
          <div className="animate-fade-in" style={{ background: 'var(--icon-bg)', width: '100%', maxWidth: isPopupMaximized ? '98%' : '1000px', height: isPopupMaximized ? '96vh' : '75vh', overflowY: 'auto', borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button onClick={() => setIsPopupMaximized(!isPopupMaximized)} style={{ background: '#e2e8f0', color: 'var(--text-main)', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}</button>
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
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Briefcase size={32} color="#10b981" /> Career Paths & Roles (करियर विकल्प)</h2>
        <p className="thane-subtitle">Understanding the different engineering roles and their responsibilities.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--card-border)', borderTop: `4px solid ${module.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}><module.icon size={24} /></div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>{module.title}</h4>
              </div>
            </div>
            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{ background: 'var(--icon-bg)', border: '1px solid var(--card-border)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '500' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: module.color, flexShrink: 0 }}></div>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
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
