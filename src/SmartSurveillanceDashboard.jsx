import React, { useState } from 'react';
import { ArrowLeft, Video, Car, BrainCircuit, Users, Shield, Camera } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function SmartSurveillanceDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 407, 
      name: 'एक-क्लिक "CCTV सारांश" (CCTV Summarizer)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: Video,
      color: '#3b82f6',
      description: 'घंटों की CCTV फुटेज को स्कैन करके 5 मिनट का सारांश तैयार करना, जिसमें केवल मुख्य इवेंट्स (इंसान/गाड़ी) हों।'
    },
    { 
      id: 408, 
      name: 'गाड़ी की पहचान" बिना नंबर प्लेट के (VMMR)', 
      status: 'New', 
      date: '2026-07-09',
      icon: Car,
      color: '#10b981',
      description: 'Vehicle Make and Model Recognition (VMMR) तकनीक जो बिना नंबर प्लेट के भी गाड़ी की बनावट और रंग से उसे पहचान सकती है।'
    },
    { 
      id: 409, 
      name: 'व्यवहार विश्लेषण" (Predictive Behavioral Analytics)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: BrainCircuit,
      color: '#8b5cf6',
      description: 'सड़क पर किसी व्यक्ति के असामान्य व्यवहार (जैसे बार-बार एक ही जगह घूमना या हथियार निकालना) को पहले से भांपना।'
    },
    { 
      id: 410, 
      name: 'AI "भीड़-मीटर" (Street Camera Plugin)', 
      status: 'Pending', 
      date: '2026-07-09',
      icon: Users,
      color: '#f59e0b',
      description: 'त्योहारों या रैलियों के दौरान भीड़ के घनत्व को मापना और भगदड़ जैसी स्थिति की चेतावनी देना।'
    },
    { 
      id: 411, 
      name: 'वर्दी और हेलमेट" डिटेक्टर (Simple Visual Auditor)', 
      status: 'New', 
      date: '2026-07-09',
      icon: Shield,
      color: '#ef4444',
      description: 'चौराहों पर चेकिंग के दौरान पुलिसकर्मियों की सही वर्दी और आम जनता के हेलमेट पहनने का स्वचालित ऑडिट।'
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
            <Camera size={28} />
            स्मार्ट सर्विलांस और वीडियो एनालिटिक्स
          </h2>
          <p className="thane-subtitle">Smart Surveillance & Advanced AI Video Analytics Modules</p>
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
