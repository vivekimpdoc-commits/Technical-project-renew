import React, { useState } from 'react';
import { 
  ShieldAlert, Map, Bot, Scale, Cloud, GlobeLock
} from 'lucide-react';
import './ThaneLevelDashboard.css';
import CyberSecurityForensics from './CyberSecurityForensics';
import PredictivePolicing from './PredictivePolicing';
import AutonomousAgents from './AutonomousAgents';
import AIEthicsCompliance from './AIEthicsCompliance';
import EnterpriseCloud from './EnterpriseCloud';

export default function AdvancedAICyberDashboard() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { num: 1, id: 'cyber-forensics', title: 'AI Cyber Security & Forensics (साइबर सुरक्षा और फोरेंसिक)', desc: 'Deepfake Detection, Dark Web Monitoring, Zero-Trust', icon: ShieldAlert, color: '#ef4444' },
    { num: 2, id: 'predictive-policing', title: 'Predictive Policing & Analytics (प्रेडिक्टिव एनालिटिक्स)', desc: 'Crime Hotspots, Time-Series Forecasting, Drone AI', icon: Map, color: '#f59e0b' },
    { num: 3, id: 'autonomous-agents', title: 'Autonomous AI Agents (ऑटोनोमस AI एजेंट्स)', desc: 'Auto-FIR, Multi-Agent Systems, Robotics Integration', icon: Bot, color: '#8b5cf6' },
    { num: 4, id: 'ai-ethics', title: 'AI Ethics & Compliance (AI एथिक्स और कानूनी मान्यता)', desc: 'Explainable AI, Data Privacy, Bias Detection, Audits', icon: Scale, color: '#10b981' },
    { num: 5, id: 'enterprise-cloud', title: 'Enterprise Cloud Architecture (क्लाउड आर्किटेक्चर)', desc: 'Multi-Cloud, Edge Computing, Disaster Recovery', icon: Cloud, color: '#3b82f6' }
  ];

  if (selectedTopic === 1) return <CyberSecurityForensics onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 2) return <PredictivePolicing onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 3) return <AutonomousAgents onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 4) return <AIEthicsCompliance onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 5) return <EnterpriseCloud onBack={() => setSelectedTopic(null)} />;

  return (
    <div className="thane-dashboard-container" style={{ width: '100%' }}>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <GlobeLock size={32} color="#ef4444" />
          Advanced AI & Cyber Command
        </h2>
        <p className="thane-subtitle">World-class enterprise innovations, security, and next-generation AI systems</p>
      </div>

      <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--card-border)', marginTop: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-main)', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <GlobeLock size={28} color="#ef4444" />
          Choose an Advanced Module (एडवांस्ड मॉड्यूल चुनें)
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
                  background: 'var(--icon-bg)', borderRadius: '1rem', border: '1px solid var(--card-border)',
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
                  padding: '1rem', background: 'var(--card-bg)', borderRadius: '0.75rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)', color: step.color
                }}>
                  <Icon size={28} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: '700' }}>
                    {step.title}
                  </h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
