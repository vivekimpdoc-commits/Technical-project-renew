import React, { useState } from 'react';
import { ArrowLeft, Users, ShieldCheck, Map, Network } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function DistrictResourceDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 203, 
      name: 'डिस्ट्रिक्ट फोर्स ऑप्टिमाइज़र (District Resource Allocator)', 
      status: 'Active', 
      date: '2026-07-08',
      icon: Users,
      color: '#3b82f6',
      description: 'पूरे जिले में पुलिस बल की तैनाती और रोस्टर को AI द्वारा ऑप्टिमाइज़ करने का मास्टर कंट्रोल पैनल।'
    },
    { 
      id: 204, 
      name: 'डिस्ट्रिक्ट बीट इंटेलिजेंस नेटवर्क (District Guardian AI)', 
      status: 'New', 
      date: '2026-07-08',
      icon: ShieldCheck,
      color: '#10b981',
      description: 'जिले के सभी बीट सिपाहियों के मोबाइल से आने वाले लाइव डेटा और हॉटस्पॉट प्रेडिक्शन का केंद्रीय डैशबोर्ड।'
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
          className="back-button"
          style={{ marginBottom: '1rem' }}
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
        <div>
          <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Users size={28} />
            डिस्ट्रिक्ट रिसोर्स और फोर्स मैनेजमेंट
          </h2>
          <p className="thane-subtitle">Centralized force deployment and beat intelligence tracking across the district</p>
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
