import React, { useState } from 'react';
import { ArrowLeft, Package, Shield, Box, Network } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function DistrictAssetDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 205, 
      name: 'सेंट्रलाइज़्ड मालखाना और एविडेंस मैनेजमेंट (District Evidence Tracker)', 
      status: 'Active', 
      date: '2026-07-08',
      icon: Box,
      color: '#f59e0b',
      description: 'पूरे जिले के सभी मालखानों (केस प्रॉपर्टी) का एकीकृत डेटाबेस, कोर्ट हियरिंग और फॉरेंसिक लैब्स के एविडेंस ट्रैकिंग के साथ।'
    },
    { 
      id: 206, 
      name: 'डिस्ट्रिक्ट आर्मरी एंड लॉजिस्टिक्स मैनेजर (District Armoury AI)', 
      status: 'New', 
      date: '2026-07-08',
      icon: Shield,
      color: '#e11d48',
      description: 'जिले के सभी थानों और रिजर्व पुलिस लाइन्स के हथियारों, गोला-बारूद और दंगा-रोधी उपकरणों की लाइव इन्वेंट्री।'
    }
  ];

  if (selectedSubProject) {
    return (
      <ProjectDetailsView 
        project={selectedSubProject} 
        onBack={() => setSelectedSubProject(null)} 
      />
    );
  }

  return (
    <div className="thane-dashboard-container">
      <div className="thane-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <button 
          onClick={onBack} 
          className="thane-back-btn"
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
        <div>
          <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Package size={28} />
            ज़िला-स्तरीय एसेट और एविडेंस ट्रैकिंग
          </h2>
          <p className="thane-subtitle">Centralized tracking of case properties, evidence, weapons, and logistics across the district</p>
        </div>
      </div>

      <div className="thane-projects-grid" style={{ marginTop: '2rem' }}>
        {subProjects.map(proj => {
          const Icon = proj.icon;
          return (
            <div key={proj.id} className="thane-project-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="thane-card-header">
                <div style={{ background: `${proj.color}15`, padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <Icon size={24} color={proj.color} />
                </div>
                <span className={`thane-status-badge ${proj.status.toLowerCase()}`}>{proj.status}</span>
              </div>
              <h3 className="thane-card-title" style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{proj.name}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                {proj.description}
              </p>
              <div className="thane-card-footer" style={{ marginTop: 'auto' }}>
                <button 
                  className="thane-view-btn"
                  onClick={() => setSelectedSubProject(proj)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Open Dashboard
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
