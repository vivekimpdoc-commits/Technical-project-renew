import React, { useState } from 'react';
import { ArrowLeft, Search, Network, BrainCircuit, Phone, Glasses, Globe, MessageSquare } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function CrimeForensicsDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 401, 
      name: 'स्वायत्त "इन्वेस्टिगेशन लिंकर" (Autonomous Knowledge Graph)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: Network,
      color: '#3b82f6',
      description: 'विभिन्न FIR, क्राइम रिकॉर्ड्स और संदिग्धों के बीच छिपे हुए कनेक्शन को ऑटोमैटिकली लिंक करने वाला नॉलेज ग्राफ।'
    },
    { 
      id: 402, 
      name: 'AI "झूठ पकड़ने वाला" वीडियो एनालिटिक्स (Non-Invasive AI Polygraph)', 
      status: 'New', 
      date: '2026-07-09',
      icon: BrainCircuit,
      color: '#8b5cf6',
      description: 'पूछताछ के दौरान आरोपी के चेहरे के भाव (Micro-expressions) और पसीने का विश्लेषण करके झूठ पकड़ने वाला AI।'
    },
    { 
      id: 403, 
      name: 'AI "कॉल डेटा" एनालाइज़र (CDR Smart-Search)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: Phone,
      color: '#10b981',
      description: 'हजारों पन्नों के कॉल डिटेल्स रिकॉर्ड (CDR) का सेकंडों में विश्लेषण कर मुख्य संदिग्धों की लोकेशन और कनेक्शन ढूंढना।'
    },
    { 
      id: 404, 
      name: 'वर्चुअल रियलिटी" (VR) क्राइम सीन री-कंस्ट्रक्शन', 
      status: 'Pending', 
      date: '2026-07-09',
      icon: Glasses,
      color: '#f59e0b',
      description: 'अपराध स्थल (Crime Scene) का 3D मैप तैयार करना ताकि बाद में VR हेडसेट से अदालत या जांच के लिए मुआयना किया जा सके।'
    },
    { 
      id: 405, 
      name: 'Dark-Web स्थानीय भाषा मॉनिटरिंग', 
      status: 'New', 
      date: '2026-07-09',
      icon: Globe,
      color: '#ef4444',
      description: 'डार्क वेब पर हिंदी या स्थानीय भाषाओं में हो रही अवैध हथियारों या ड्रग्स की सौदेबाजी को स्कैन और डिकोड करना।'
    },
    { 
      id: 406, 
      name: 'AI लिप-रीडिंग" फॉर साइलेंट CCTV (Lip-Reading AI)', 
      status: 'Pending', 
      date: '2026-07-09',
      icon: MessageSquare,
      color: '#06b6d4',
      description: 'बिना ऑडियो वाले CCTV फुटेज में अपराधियों के होठों (Lips) को पढ़कर उनकी बातचीत का अनुमान लगाने वाला मॉडल।'
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
          <ArrowLeft size={20} /> Back to Projects
        </button>
        <div>
          <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Search size={28} />
            अपराध जांच और डिजिटल फॉरेंसिक
          </h2>
          <p className="thane-subtitle">Crime Investigation & Digital Forensics Advanced AI Modules</p>
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
