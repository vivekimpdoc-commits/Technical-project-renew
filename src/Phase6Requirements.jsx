import React, { useState } from 'react';
import { 
  ArrowLeft, Cloud, Server, Database, Shield, Activity, GitBranch, Terminal, ShieldAlert, Wrench, FileSignature, CheckCircle, Network, Layers, PenTool, BrainCircuit, RefreshCw
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase6Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Deployment Planning',
      subtitle: 'लॉन्च की योजना',
      icon: Server,
      color: '#3b82f6',
      items: [
        'Production Environment Setup',
        'Server, Network & Security Configuration',
        'Backup & Rollback Strategy',
        'Go-Live Plan'
      ]
    },
    {
      id: 2,
      title: 'Infrastructure & Environments',
      subtitle: 'सर्वर और सेटअप',
      icon: Cloud,
      color: '#10b981',
      items: [
        'On-Premise: App, Database, File, Backup Servers',
        'Cloud: Microsoft Azure, AWS, GCP',
        'Environments: DEV (Development), QA (Testing), UAT (Staging), PROD (Live)'
      ]
    },
    {
      id: 3,
      title: 'Version Control & Containerization',
      subtitle: 'कोड मैनेजमेंट',
      icon: GitBranch,
      color: '#f59e0b',
      items: [
        'Version Control: Git, Branching, Release Mgmt, Tagging',
        'Tools: Docker, Kubernetes',
        'Benefits: Easy Deployment, Scalability, Portability'
      ]
    },
    {
      id: 4,
      title: 'Database Deployment',
      subtitle: 'डेटाबेस सेटअप',
      icon: Database,
      color: '#ec4899',
      items: [
        'Database Migration & Schema Deployment',
        'Data Seeding & Index Creation',
        'Backup Before Deployment'
      ]
    },
    {
      id: 5,
      title: 'Security Configuration',
      subtitle: 'सर्वर सुरक्षा',
      icon: Shield,
      color: '#8b5cf6',
      items: [
        'SSL Certificate & HTTPS Configuration',
        'Firewall Rules & Network Security',
        'API Security & Identity Management',
        'Secret Management'
      ]
    },
    {
      id: 6,
      title: 'Monitoring & Logging',
      subtitle: 'निगरानी और लॉग्स',
      icon: Activity,
      color: '#14b8a6',
      items: [
        'Monitoring: CPU, Memory, Disk Space, API Performance',
        'Logging: Error Logs, Audit Logs, User Activity, Security Logs'
      ]
    },
    {
      id: 7,
      title: 'High Availability & Backup',
      subtitle: 'उपलब्धता और बैकअप',
      icon: Server,
      color: '#ef4444',
      items: [
        'Backup: Daily, Weekly Full, Database, File',
        'Disaster Recovery & Business Continuity Plan',
        'HA: Load Balancer, Multiple Servers, Auto Recovery'
      ]
    },
    {
      id: 8,
      title: 'Maintenance Activities',
      subtitle: 'रखरखाव के कार्य',
      icon: Wrench,
      color: '#f97316',
      items: [
        'Corrective: Bug Fixes, Security Patches',
        'Adaptive: OS & Dependency Updates',
        'Perfective: Performance Improvements, New Features',
        'Preventive: Monitoring, Health Checks'
      ]
    },
    {
      id: 9,
      title: 'Production Support',
      subtitle: 'लाइव सिस्टम सपोर्ट',
      icon: ShieldAlert,
      color: '#6366f1',
      items: [
        'Incident Management',
        'Problem & Change Management',
        'Release Management',
        'Service Desk Support'
      ]
    }
  ];

  const tools = [
    'GitHub', 'GitLab', 'Jenkins', 'Docker Hub', 'Kubernetes', 'Prometheus', 'Grafana'
  ];

  const deliverables = [
    'Infrastructure Architecture Document',
    'Deployment Guide & Server Config',
    'CI/CD Pipeline Configuration',
    'Backup & Recovery Plan',
    'Security Configuration Document',
    'Monitoring Dashboard',
    'Production Runbook & Maintenance Plan',
    'Go-Live Sign-off'
  ];

  const sdlcSteps = [
    '1. Requirements Gathering & Analysis',
    '2. UI/UX Design',
    '3. Frontend Development',
    '4. Backend Development',
    '5. Testing & Quality Assurance',
    '6. Deployment & DevOps',
    '7. Maintenance & Support',
    '8. Continuous Improvement'
  ];

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      
      {/* Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button 
          onClick={onBack} 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.75rem 1.5rem', background: 'white', 
            borderRadius: '0.75rem', border: '1px solid #e2e8f0',
            color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#2563eb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Phases
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Server size={28} color="#f97316" />
            Phase 6: Deployment, DevOps & Maintenance
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर को Production Environment में Install, Configure और Live करना।
          </p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon;
          return (
            <div key={box.id} style={{
              background: 'white', borderRadius: '1rem', padding: '1.5rem',
              border: '1px solid #e2e8f0', borderTop: `4px solid ${box.color}`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 25px ${box.color}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
            }}>
              {/* Header (Clickable) */}
              <div 
                onClick={() => setExpandedCard(expandedCard === box.id ? null : box.id)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: `${box.color}15`, padding: '0.75rem', borderRadius: '0.75rem', color: box.color }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.3' }}>{box.title}</h3>
                    <p style={{ margin: '0.2rem 0 0 0', color: '#64748b', fontSize: '0.85rem' }}>{box.subtitle}</p>
                  </div>
                </div>
                <span style={{ color: box.color, fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>
                  {expandedCard === box.id ? '−' : '+'}
                </span>
              </div>

              {/* Expanded Content */}
              {expandedCard === box.id && (
                <div className="animate-fade-in" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                    {box.items.map((item, idx) => (
                      <div key={idx} style={{ 
                        background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', 
                        borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Details Button */}
                  <button style={{
                    width: '100%', padding: '0.75rem', background: box.color, color: 'white',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem',
                    cursor: 'pointer', transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                  >
                    Click to View Details
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DevOps Workflows & Diagrams */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* CI/CD Pipeline */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><RefreshCw size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>CI/CD Pipeline</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginTop: '1rem' }}>
            <div style={{ background: '#f8fafc', color: '#334155', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #e2e8f0', width: '70%', textAlign: 'center' }}>Developer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#eff6ff', color: '#1e40af', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bfdbfe', width: '70%', textAlign: 'center' }}>Git Repository</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fde68a', width: '70%', textAlign: 'center' }}>Build Server</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fce7f3', color: '#9d174d', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fbcfe8', width: '70%', textAlign: 'center' }}>Automated Testing</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #c7d2fe', width: '70%', textAlign: 'center' }}>Deployment</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#dcfce7', color: '#166534', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bbf7d0', width: '70%', textAlign: 'center' }}>Production</div>
          </div>
        </div>

        {/* Deployment Architecture */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><Network size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Deployment Architecture</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ background: '#f1f5f9', color: '#334155', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center', border: '1px solid #cbd5e1' }}>Users</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fffbeb', color: '#b45309', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center', border: '1px solid #fde68a' }}>Load Balancer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#eff6ff', color: '#1d4ed8', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center', border: '1px solid #bfdbfe' }}>Web Server</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fdf4ff', color: '#a21caf', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center', border: '1px solid #f5d0fe' }}>Application Server</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#ecfdf5', color: '#047857', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center', border: '1px solid #a7f3d0' }}>Database Server</div>
          </div>
        </div>

        {/* AI Application Deployment */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#8b5cf615', padding: '0.75rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><BrainCircuit size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>AI Deployment Flow</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bae6fd' }}>Web Application</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f5f3ff', color: '#6d28d9', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #ddd6fe' }}>API Gateway</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fce7f3', color: '#be185d', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fbcfe8' }}>AI Model Server</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fef2f2', color: '#b91c1c', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fecaca' }}>Prediction Engine</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f0fdf4', color: '#15803d', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bbf7d0' }}>Database</div>
          </div>
          <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
            <strong style={{color:'#334155'}}>AI Infrastructure:</strong> GPU Server, Model Registry, Monitoring, Versioning, Retraining Pipeline
          </div>
        </div>

      </div>

      {/* Lists (Tools, Deliverables, SDLC) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        
        {/* Recommended Tools */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><PenTool size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>DevOps Tools</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map((tool, idx) => (
              <span key={idx} style={{ padding: '0.5rem 1rem', background: '#fdf2f8', color: '#be185d', border: '1px solid #fce7f3', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><FileSignature size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Deployment Deliverables</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: '#f0fdf4', borderRadius: '0.5rem', border: '1px solid #dcfce7' }}>
                <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0 }} />
                <span style={{ color: '#166534', fontSize: '0.85rem', fontWeight: '500' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Complete SDLC */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f59e0b15', padding: '0.75rem', borderRadius: '0.5rem', color: '#f59e0b' }}><Layers size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Complete SDLC Lifecycle</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {sdlcSteps.map((step, idx) => (
              <div key={idx} style={{ 
                padding: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold',
                color: idx === 5 || idx === 6 ? '#2563eb' : '#475569',
                background: idx === 5 || idx === 6 ? '#eff6ff' : 'transparent',
                borderRadius: '0.25rem'
              }}>
                {step}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
