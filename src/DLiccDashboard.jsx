import React, { useState } from 'react';
import { ArrowLeft, Folder, Activity, BrainCircuit, ShieldCheck, Database, Network } from 'lucide-react';
import './ThaneLevelDashboard.css'; // Reusing the same grid CSS
import ProjectDetailsView from './ProjectDetailsView';

export default function DLiccDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 201, 
      name: 'डिस्ट्रिक्ट पुलिसिंग कमांड सेंटर (District Command Dashboard)', 
      status: 'Active', 
      date: '2026-07-08',
      icon: Activity,
      color: '#3b82f6',
      description: 'पूरे जिले के सभी थानों की रियल-टाइम रिपोर्ट और पेंडिंग केसेस का एकीकृत डैशबोर्ड।'
    },
    { 
      id: 202, 
      name: 'डिस्ट्रिक्ट क्राइम इंटेलिजेंस कॉपायलट (Crime GPT - Enterprise Edition)', 
      status: 'New', 
      date: '2026-07-08',
      icon: BrainCircuit,
      color: '#8b5cf6',
      description: 'जिले भर के क्राइम डेटा का विश्लेषण करने वाला AI, जो FIR पैटर्न्स और क्रिमिनल सिंडिकेट को ट्रैक करता है।'
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
            <Network size={28} />
            डिस्ट्रिक्ट-लेवल इंटीग्रेटेड कमांड सेंटर (D-LICC)
          </h2>
          <p className="thane-subtitle">Command Center operations & Intelligence tools for the District SP/SSP</p>
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
