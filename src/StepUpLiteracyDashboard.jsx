import React, { useState } from 'react';
import { Folder, ChevronDown, Clock, Search, Layout, Code, Database, Activity, Server, Shield } from 'lucide-react';
import './ThaneLevelDashboard.css';
import Phase1Requirements from './Phase1Requirements';
import Phase2Requirements from './Phase2Requirements';
import Phase3Requirements from './Phase3Requirements';
import Phase4Requirements from './Phase4Requirements';
import Phase5Requirements from './Phase5Requirements';
import Phase6Requirements from './Phase6Requirements';
import Phase7Requirements from './Phase7Requirements';

export default function StepUpLiteracyDashboard() {
  const [selectedPhase, setSelectedPhase] = useState(null);
  // We don't need a station dropdown, but we'll keep the layout similar
  const phases = [
    { id: 1, name: '1. Requirements Gathering & Analysis', subtitle: 'ज़रूरतों को समझना और विश्लेषण', status: 'Phase 1', date: '2026-07-09', icon: Search, color: '#3b82f6' },
    { id: 2, name: '2. UI/UX Design', subtitle: 'डिजाइनिंग फेज', status: 'Phase 2', date: '2026-07-09', icon: Layout, color: '#10b981' },
    { id: 3, name: '3. Frontend Development', subtitle: 'फ्रंटेंड डेवलपमेंट', status: 'Phase 3', date: '2026-07-09', icon: Code, color: '#f59e0b' },
    { id: 4, name: '4. Backend Development', subtitle: 'बैकेंड डेवलपमेंट', status: 'Phase 4', date: '2026-07-09', icon: Database, color: '#ec4899' },
    { id: 5, name: '5. Testing & Quality Assurance (QA)', subtitle: 'टेस्टिंग और जांच', status: 'Phase 5', date: '2026-07-09', icon: Activity, color: '#8b5cf6' },
    { id: 6, name: '6. Deployment', subtitle: 'लाइव करना या लॉन्च', status: 'Phase 6', date: '2026-07-09', icon: Server, color: '#14b8a6' },
    { id: 7, name: '7. Maintenance & Support', subtitle: 'रखरखाव और सपोर्ट', status: 'Phase 7', date: '2026-07-09', icon: Shield, color: '#ef4444' },
  ];

  if (selectedPhase === 1) {
    return <Phase1Requirements onBack={() => setSelectedPhase(null)} />;
  }
  if (selectedPhase === 2) {
    return <Phase2Requirements onBack={() => setSelectedPhase(null)} />;
  }
  if (selectedPhase === 3) {
    return <Phase3Requirements onBack={() => setSelectedPhase(null)} />;
  }
  if (selectedPhase === 4) {
    return <Phase4Requirements onBack={() => setSelectedPhase(null)} />;
  }
  if (selectedPhase === 5) {
    return <Phase5Requirements onBack={() => setSelectedPhase(null)} />;
  }
  if (selectedPhase === 6) {
    return <Phase6Requirements onBack={() => setSelectedPhase(null)} />;
  }
  if (selectedPhase === 7) {
    return <Phase7Requirements onBack={() => setSelectedPhase(null)} />;
  }

  return (
    <div className="thane-dashboard-container">
      <div className="thane-header">
        <h2 className="thane-title">Step Up Literacy Software</h2>
        <p className="thane-subtitle">Phases of AI Project Lifecycle (एआई प्रोजेक्ट लाइफ साइकिल के मुख्य चरण)</p>
      </div>

      <div className="thane-menu-bar">
        <div className="thane-menu-tabs">
          <button className="thane-tab active">Lifecycle Phases (लाइफसाइकिल के चरण)</button>
        </div>
      </div>

      <div className="thane-projects-grid">
        {phases.map(phase => {
          const Icon = phase.icon;
          return (
            <div key={phase.id} className="thane-project-card" style={{
              borderTop: `4px solid ${phase.color}`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 10px 25px -5px ${phase.color}66, 0 0 20px ${phase.color}33`;
              e.currentTarget.style.borderColor = phase.color;
              e.currentTarget.style.zIndex = 10;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.zIndex = 1;
            }}>
              <div className="thane-card-header">
                <div style={{ background: `${phase.color}15`, padding: '0.6rem', borderRadius: '0.5rem', color: phase.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={24} />
                </div>
                <span className="thane-status-badge" style={{ background: `${phase.color}15`, color: phase.color, border: `1px solid ${phase.color}40`, fontWeight: 'bold' }}>{phase.status}</span>
              </div>
              <h3 className="thane-card-title">{phase.name}</h3>
              <p style={{ margin: '0.5rem 0', color: '#64748b', fontSize: '0.9rem' }}>{phase.subtitle}</p>
              <div className="thane-card-footer" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <span className="thane-date"><Clock size={14} /> {phase.date}</span>
                <button 
                  className="thane-view-btn"
                  onClick={() => setSelectedPhase(phase.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
