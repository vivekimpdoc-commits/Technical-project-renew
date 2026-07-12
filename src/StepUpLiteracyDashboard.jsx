import React, { useState } from 'react';
import { Folder, ChevronDown, Clock, Search, Layout, Code, Database, Activity, Server, Shield, Layers } from 'lucide-react';
import './ThaneLevelDashboard.css';
import Phase1Requirements from './Phase1Requirements';
import Phase2Requirements from './Phase2Requirements';
import Phase3Requirements from './Phase3Requirements';
import Phase4Requirements from './Phase4Requirements';
import Phase5Requirements from './Phase5Requirements';
import Phase6Requirements from './Phase6Requirements';
import Phase7Requirements from './Phase7Requirements';
import SDLCModels from './SDLCModels';
import TestingTypes from './TestingTypes';
import CICDPipeline from './CICDPipeline';
import ProjectManagementTools from './ProjectManagementTools';
import CloudComputing from './CloudComputing';
import SoftwareArchitecture from './SoftwareArchitecture';
import DevSecOps from './DevSecOps';
import MonitoringAnalytics from './MonitoringAnalytics';
import AIInSoftwareEngineering from './AIInSoftwareEngineering';

export default function StepUpLiteracyDashboard() {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [activeTab, setActiveTab] = useState('phases');
  const [selectedSdlcItem, setSelectedSdlcItem] = useState(null);
  const [selectedAdvancedItem, setSelectedAdvancedItem] = useState(null);

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

  if (selectedSdlcItem === 1) {
    return <SDLCModels onBack={() => setSelectedSdlcItem(null)} />;
  }
  if (selectedSdlcItem === 2) {
    return <TestingTypes onBack={() => setSelectedSdlcItem(null)} />;
  }
  if (selectedSdlcItem === 3) {
    return <CICDPipeline onBack={() => setSelectedSdlcItem(null)} />;
  }
  if (selectedSdlcItem === 4) {
    return <ProjectManagementTools onBack={() => setSelectedSdlcItem(null)} />;
  }

  if (selectedAdvancedItem === 1) {
    return <CloudComputing onBack={() => setSelectedAdvancedItem(null)} />;
  }
  if (selectedAdvancedItem === 2) {
    return <SoftwareArchitecture onBack={() => setSelectedAdvancedItem(null)} />;
  }
  if (selectedAdvancedItem === 3) {
    return <DevSecOps onBack={() => setSelectedAdvancedItem(null)} />;
  }
  if (selectedAdvancedItem === 4) {
    return <MonitoringAnalytics onBack={() => setSelectedAdvancedItem(null)} />;
  }
  if (selectedAdvancedItem === 5) {
    return <AIInSoftwareEngineering onBack={() => setSelectedAdvancedItem(null)} />;
  }

  return (
    <div className="thane-dashboard-container">
      <div className="thane-header">
        <h2 className="thane-title">Step Up Literacy Software</h2>
        <p className="thane-subtitle">Initial steps in software development(सॉफ्टवेयर डेवलपमेंट के शुरुआती चरण)</p>
      </div>

      <div className="thane-menu-bar">
        <div className="thane-menu-tabs">
          <button
            className={`thane-tab ${activeTab === 'phases' ? 'active-blue' : ''}`}
            onClick={() => setActiveTab('phases')}
          >
            Initial steps in software development(सॉफ्टवेयर डेवलपमेंट के शुरुआती चरण)
          </button>
          <button
            className={`thane-tab ${activeTab === 'sdlc' ? 'active-green' : ''}`}
            onClick={() => setActiveTab('sdlc')}
          >
            सॉफ्टवेयर डेवलपमेंट लाइफसाइकिल (SDLC)
          </button>
          <button
            className={`thane-tab ${activeTab === 'advanced' ? 'active-purple' : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            Advanced Software Engineering & Operations(नवीनतम SDLC दस्तावेज़)
          </button>
        </div>
      </div>

      {activeTab === 'phases' && (
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
      )}

      {activeTab === 'advanced' && (
        <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', marginTop: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', color: '#0f172a', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Server size={28} color="#8b5cf6" />
            Advanced Software Engineering & Operations (नवीनतम SDLC दस्तावेज़)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: 1, title: 'क्लाउड कंप्यूटिंग (Cloud Computing)', desc: 'AWS, Azure, GCP पर सॉफ्टवेयर को होस्ट और मैनेज करना।', color: '#0ea5e9' },
              { num: 2, title: 'सॉफ्टवेयर आर्किटेक्चर (Software Architecture)', desc: 'Microservices, Monolithic और Serverless आर्किटेक्चर डिज़ाइन।', color: '#8b5cf6' },
              { num: 3, title: 'साइबर सिक्योरिटी (DevSecOps)', desc: 'डेवलपमेंट के हर चरण में सिक्योरिटी (Security) को शामिल करना।', color: '#ef4444' },
              { num: 4, title: 'मॉनिटरिंग और लॉगिंग (Monitoring & Analytics)', desc: 'सर्वर हेल्थ, यूज़र एक्टिविटी और सिस्टम लॉग्स की निगरानी।', color: '#f59e0b' },
              { num: 5, title: 'एआई का इस्तेमाल (AI in Software Engineering)', desc: 'कोडिंग, टेस्टिंग और ऑपरेशन्स में AI टूल्स का प्रयोग।', color: '#10b981' }
            ].map((step) => (
              <div
                key={step.num}
                onClick={() => setSelectedAdvancedItem(step.num)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem',
                  background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0',
                  borderLeft: `4px solid ${step.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 4px 15px -3px ${step.color}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  background: `${step.color}15`, color: step.color,
                  width: '40px', height: '40px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0
                }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {step.title}
                    <span style={{ fontSize: '0.7rem', background: `${step.color}22`, color: step.color, padding: '0.1rem 0.5rem', borderRadius: '1rem' }}>Click to View</span>
                  </h4>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: '1.4' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'sdlc' && (
        <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', marginTop: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', color: '#0f172a', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} color="#3b82f6" />
            Complete Software Development Lifecycle (SDLC)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: 1, title: 'SDLC मॉडल्स (सॉफ्टवेयर बनाने के तरीके)', desc: 'Waterfall, Agile, Spiral जैसे सॉफ्टवेयर डेवलपमेंट मॉडल्स।', color: '#0ea5e9' },
              { num: 2, title: 'टेस्टिंग के प्रकार (Software Testing Types)', desc: 'यूनिट टेस्टिंग, इंटीग्रेशन, रिग्रेशन आदि।', color: '#f59e0b' },
              { num: 3, title: 'सीआई/सीडी पाइपलाइन (CI/CD Pipeline)', desc: 'सॉफ्टवेयर डेवलपमेंट और डिप्लॉयमेंट का ऑटोमेशन।', color: '#10b981' },
              { num: 4, title: 'प्रोजेक्ट मैनेजमेंट टूल्स (Project Management)', desc: 'Jira, Trello, Asana जैसे टीम मैनेजमेंट टूल्स।', color: '#ec4899' }
            ].map((step) => (
              <div
                key={step.num}
                onClick={() => {
                  if (step.num >= 1 && step.num <= 4) setSelectedSdlcItem(step.num);
                }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem',
                  background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0',
                  borderLeft: `4px solid ${step.color}`,
                  cursor: (step.num >= 1 && step.num <= 4) ? 'pointer' : 'default',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  if (step.num >= 1 && step.num <= 4) {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 4px 15px -3px ${step.color}66`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (step.num >= 1 && step.num <= 4) {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <div style={{
                  background: `${step.color}15`, color: step.color,
                  width: '40px', height: '40px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0
                }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {step.title}
                    {(step.num >= 1 && step.num <= 4) && (
                      <span style={{ fontSize: '0.7rem', background: `${step.color}22`, color: step.color, padding: '0.1rem 0.5rem', borderRadius: '1rem' }}>Click to View</span>
                    )}
                  </h4>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: '1.4' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
