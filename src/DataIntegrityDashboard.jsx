import React, { useState } from 'react';
import { ArrowLeft, Database, ShieldAlert, Link2, ScanSearch } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function DataIntegrityDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 421, 
      name: 'स्मार्ट "एविडेंस चैन" ब्लॉकचेन (AI + Blockchain)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: Link2,
      color: '#3b82f6',
      description: 'डिजिटल सबूतों (जैसे CCTV फुटेज, कॉल रिकॉर्ड्स) को ब्लॉकचेन पर सुरक्षित रखना ताकि कोई उनके साथ छेड़छाड़ न कर सके।'
    },
    { 
      id: 422, 
      name: 'एआई "बुलशिट" डिटेक्टर (Integrity Check)', 
      status: 'New', 
      date: '2026-07-09',
      icon: ScanSearch,
      color: '#ef4444',
      description: 'गवाहों के बयानों और रिपोर्टों में होने वाले अंतर्विरोधों (Contradictions) या झूठ को AI का इस्तेमाल कर तुरंत पकड़ना।'
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
          <ArrowLeft size={20} /> Back to Projects
        </button>
        <div>
          <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Database size={28} />
            डेटा सुरक्षा और पारदर्शिता
          </h2>
          <p className="thane-subtitle">Data Integrity, Evidence Security & System Transparency Tools</p>
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
