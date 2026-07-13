import React, { useState } from 'react';
import { ArrowLeft, Map, AlertTriangle, ShieldAlert, Video } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function DistrictSecurityDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 207, 
      name: 'प्रेडिक्टिव डिस्ट्रिक्ट पुलिसिंग (District Crime Mapping & Intelligence)', 
      status: 'Active', 
      date: '2026-07-08',
      icon: Map,
      color: '#3b82f6',
      description: 'जिले भर के क्राइम डेटा, हॉटस्पॉट्स और संदिग्ध गतिविधियों का AI-आधारित पूर्वानुमान और रियल-टाइम मैपिंग।'
    },
    { 
      id: 208, 
      name: 'डिस्ट्रिक्ट लॉकअप एंड प्रिजनर मॉनिटरिंग नेटवर्क (Central Safety AI)', 
      status: 'New', 
      date: '2026-07-08',
      icon: Video,
      color: '#8b5cf6',
      description: 'सभी थानों के लॉकअप का केंद्रीयकृत 24/7 CCTV AI मॉनिटरिंग, जो किसी भी आपातकालीन स्थिति में सीधा SP ऑफिस को अलर्ट करता है।'
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
            <ShieldAlert size={28} />
            ज़िला सुरक्षा और कानून व्यवस्था
          </h2>
          <p className="thane-subtitle">Centralized intelligence, crime prediction and prison monitoring network</p>
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
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
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
