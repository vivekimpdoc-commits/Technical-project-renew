import React, { useState } from 'react';
import { ArrowLeft, Briefcase, UserCheck, Settings, Database, Activity, Layers, Terminal } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function CareerPathsRoles({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'frontend-dev',
      title: 'Frontend Developer',
      subtitle: 'UI/UX Specialist (यूज़र इंटरफ़ेस विशेषज्ञ)',
      icon: Terminal, 
      color: '#3b82f6',
      items: [
        'Transforms design (Figma) into code',
        'Ensures responsive & accessible UI',
        'Manages browser performance',
        'Works heavily with React, CSS, APIs',
        'Collaborates with designers & backend'
      ],
      example: 'To create visually appealing, accessible, and highly interactive user interfaces that run in the user\'s browser.',
      deepDive: [
        {
          heading: 'Core Responsibilities',
          text: 'A frontend developer focuses on everything the user sees and interacts with. They care about bundle sizes, render speeds, and accessibility (a11y).'
        },
        {
          heading: 'Career Progression',
          text: 'Junior Frontend Dev -> Mid-Level -> Senior Frontend Engineer -> UI Architect / Frontend Lead.'
        }
      ]
    },
    {
      id: 'backend-dev',
      title: 'Backend Developer',
      subtitle: 'Server & Logic (सर्वर और लॉजिक)',
      icon: Database,
      color: '#10b981',
      items: [
        'Builds APIs for frontend to consume',
        'Designs database schemas',
        'Ensures data security and auth',
        'Optimizes server response times',
        'Integrates third-party services'
      ],
      example: 'To build the robust, secure, and scalable engine that powers the application from behind the scenes.',
      deepDive: [
        {
          heading: 'Core Responsibilities',
          text: 'Writing server-side code (Node, Python, Java), managing database interactions, and ensuring the application can scale under load.'
        },
        {
          heading: 'Career Progression',
          text: 'Junior Backend Dev -> Mid-Level -> Senior Backend Engineer -> Software Architect.'
        }
      ]
    },
    {
      id: 'devops-sre',
      title: 'DevOps / SRE',
      subtitle: 'Infrastructure (इंफ्रास्ट्रक्चर मैनेजमेंट)',
      icon: Settings,
      color: '#f59e0b',
      items: [
        'Manages cloud servers (AWS, GCP)',
        'Builds CI/CD pipelines',
        'Automates deployments',
        'Monitors system health & uptime',
        'Handles incident response'
      ],
      example: 'To bridge the gap between development and operations, ensuring code is delivered rapidly, safely, and reliably.',
      deepDive: [
        {
          heading: 'DevOps vs SRE',
          text: 'DevOps is a philosophy of combining Dev and Ops. Site Reliability Engineering (SRE) implements DevOps using software engineering practices (Google\'s approach).'
        },
        {
          heading: 'Key Tools',
          text: 'Docker, Kubernetes, Terraform (Infrastructure as Code), Jenkins, Prometheus, and Grafana.'
        }
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager (PM)',
      subtitle: 'Vision & Strategy (प्रोडक्ट की दिशा तय करना)',
      icon: UserCheck,
      color: '#8b5cf6',
      items: [
        'Defines the product roadmap',
        'Prioritizes features & backlog',
        'Gathers user requirements',
        'Bridges tech, design, and business',
        'Measures product success (KPIs)'
      ],
      example: 'To ensure the engineering team is building the right thing that delivers real value to the business and users.',
      deepDive: [
        {
          heading: 'Core Responsibilities',
          text: 'PMs write User Stories, prioritize the Jira backlog, and decide what gets built next based on data and market research.'
        },
        {
          heading: 'Technical PM vs PM',
          text: 'A Technical Product Manager (TPM) has an engineering background and works closer with the architecture team on highly technical products (like APIs).'
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
          <Briefcase size={32} color="#10b981" />
          Career Paths & Roles (करियर विकल्प)
        </h2>
        <p className="thane-subtitle">Understanding the different engineering roles and their responsibilities.</p>
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
