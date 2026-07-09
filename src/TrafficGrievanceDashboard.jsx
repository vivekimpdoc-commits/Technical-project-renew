import React, { useState } from 'react';
import { ArrowLeft, Car, AlertTriangle, MessageSquare, ShieldAlert } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function TrafficGrievanceDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 423, 
      name: 'AI ट्रैफिक एक्सीडेंट \'प्रेडिक्टर\' (IoT आधारित)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: AlertTriangle,
      color: '#ef4444',
      description: 'सड़क की स्थिति, मौसम और पुराने एक्सीडेंट डेटा का विश्लेषण कर ब्लैक-स्पॉट्स (Black-spots) पर दुर्घटना की भविष्यवाणी करना।'
    },
    { 
      id: 424, 
      name: 'स्मार्ट चालान" रद्दीकरण (Grievance Bot)', 
      status: 'New', 
      date: '2026-07-09',
      icon: MessageSquare,
      color: '#3b82f6',
      description: 'गलत चालान कटने पर जनता द्वारा दी गई फोटो/वीडियो सबूतों को AI द्वारा चेक करके ऑटोमैटिक कैंसिलेशन की सिफारिश करना।'
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
            <Car size={28} />
            ट्रैफिक और नागरिक शिकायत निवारण
          </h2>
          <p className="thane-subtitle">Smart Traffic Management & Public Grievance Resolution Tools</p>
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
