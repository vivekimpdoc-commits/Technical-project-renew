import React, { useState } from 'react';
import { Folder, ChevronDown, Clock, Search, Layout, Code, Database, Activity, Server, Shield } from 'lucide-react';
import './ThaneLevelDashboard.css';
import Phase1Requirements from './Phase1Requirements';
import Phase2Requirements from './Phase2Requirements';
import Phase3Requirements from './Phase3Requirements';
import Phase4Requirements from './Phase4Requirements';
import Phase5Requirements from './Phase5Requirements';

export default function StepUpLiteracyDashboard() {
  const [selectedPhase, setSelectedPhase] = useState(null);
  // We don't need a station dropdown, but we'll keep the layout similar
  const phases = [
    { id: 1, name: '1. Requirements Gathering & Analysis', subtitle: 'ज़रूरतों को समझना और विश्लेषण', status: 'Phase 1', date: '2026-07-09', icon: Search },
    { id: 2, name: '2. UI/UX Design', subtitle: 'डिजाइनिंग फेज', status: 'Phase 2', date: '2026-07-09', icon: Layout },
    { id: 3, name: '3. Frontend Development', subtitle: 'फ्रंटेंड डेवलपमेंट', status: 'Phase 3', date: '2026-07-09', icon: Code },
    { id: 4, name: '4. Backend Development', subtitle: 'बैकेंड डेवलपमेंट', status: 'Phase 4', date: '2026-07-09', icon: Database },
    { id: 5, name: '5. Testing & Quality Assurance (QA)', subtitle: 'टेस्टिंग और जांच', status: 'Phase 5', date: '2026-07-09', icon: Activity },
    { id: 6, name: '6. Deployment', subtitle: 'लाइव करना या लॉन्च', status: 'Phase 6', date: '2026-07-09', icon: Server },
    { id: 7, name: '7. Maintenance & Support', subtitle: 'रखरखाव और सपोर्ट', status: 'Phase 7', date: '2026-07-09', icon: Shield },
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
            <div key={phase.id} className="thane-project-card">
              <div className="thane-card-header">
                <Icon size={24} className="thane-folder-icon" />
                <span className="thane-status-badge active">{phase.status}</span>
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
