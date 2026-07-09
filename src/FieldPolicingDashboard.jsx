import React, { useState } from 'react';
import { ArrowLeft, Shield, MapPin, Mic, Navigation, UserCheck, PhoneCall } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function FieldPolicingDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 412, 
      name: 'स्मार्ट "Naka" अलर्ट सिस्टम (Phone-to-Phone)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: MapPin,
      color: '#3b82f6',
      description: 'नाकाबंदी के दौरान एक चेकपोस्ट से दूसरे चेकपोस्ट तक सीधे स्मार्टफोन के जरिए संदिग्धों का रियल-टाइम अलर्ट भेजना।'
    },
    { 
      id: 413, 
      name: 'AI "बीट बुक" असिस्टेंट (Voice-to-Data App)', 
      status: 'New', 
      date: '2026-07-09',
      icon: Mic,
      color: '#10b981',
      description: 'बीट कॉन्स्टेबल द्वारा पेट्रोलिंग के दौरान वॉइस कमांड से सीधे डिजिटल लॉग और एंट्री दर्ज करना।'
    },
    { 
      id: 414, 
      name: 'स्मार्ट-फेंसिंग" (AI Invisible Jail)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: Navigation,
      color: '#8b5cf6',
      description: 'हिस्ट्रीशीटर या जमानत पर रिहा अपराधियों के लिए जियो-फेंसिंग (Geo-fencing), जिससे उनके क्षेत्र से बाहर जाते ही अलर्ट आए।'
    },
    { 
      id: 415, 
      name: 'ऑटोमैटिक "गुमशुदा" मैचिंग बोट (Social Media Scanner)', 
      status: 'Pending', 
      date: '2026-07-09',
      icon: UserCheck,
      color: '#f59e0b',
      description: 'सोशल मीडिया और विभिन्न थानों के डेटाबेस में लावारिस लाशों या बच्चों की फोटो का ऑटोमैटिक मिलान करना।'
    },
    { 
      id: 416, 
      name: 'शक्ति" AI (Women Safety Keyword Trigger)', 
      status: 'New', 
      date: '2026-07-09',
      icon: PhoneCall,
      color: '#ef4444',
      description: 'हेल्पलाइन कॉल पर "बचाओ" या अन्य पैनिक कीवर्ड सुनते ही कॉल को सीधे सबसे पास की पेट्रोलिंग कार (PRV) को ट्रांसफर करना।'
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
            <Shield size={28} />
            कानून व्यवस्था और फील्ड पुलिसिंग
          </h2>
          <p className="thane-subtitle">Law Enforcement, Field Operations & Public Safety Tools</p>
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
