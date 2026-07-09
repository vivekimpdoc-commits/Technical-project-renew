import React, { useState } from 'react';
import { ArrowLeft, FileText, Calendar, MessageCircle, Bot, FileDigit } from 'lucide-react';
import './ThaneLevelDashboard.css'; 
import ProjectDetailsView from './ProjectDetailsView';

export default function AdministrationDashboard({ onBack }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const subProjects = [
    { 
      id: 417, 
      name: 'AI आधारित "FIR समरी" बोट (Document Summarizer)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: FileDigit,
      color: '#3b82f6',
      description: 'लंबी और जटिल FIR या केस डायरी को पढ़ कर वरिष्ठ अधिकारियों के लिए कुछ सेकंड में उसका सारांश (Summary) तैयार करना।'
    },
    { 
      id: 418, 
      name: 'स्मार्ट ड्यूटी" रोस्टर (Optimization Algorithm)', 
      status: 'New', 
      date: '2026-07-09',
      icon: Calendar,
      color: '#10b981',
      description: 'त्योहारों, VIP मूवमेंट्स और अधिकारियों की छुट्टियों को ध्यान में रखकर AI द्वारा निष्पक्ष और सटीक ड्यूटी आवंटन।'
    },
    { 
      id: 419, 
      name: 'ऑटोमैटिक "समन" रिमाइंडर (WhatsApp Automation)', 
      status: 'Active', 
      date: '2026-07-09',
      icon: MessageCircle,
      color: '#8b5cf6',
      description: 'गवाहों, शिकायतकर्ताओं या आरोपियों को उनकी कोर्ट या थाने में पेशी की तारीख का ऑटोमैटिक WhatsApp रिमाइंडर भेजना।'
    },
    { 
      id: 420, 
      name: 'AI "हेल्प-डेस्क" चैटबॉट', 
      status: 'Pending', 
      date: '2026-07-09',
      icon: Bot,
      color: '#f59e0b',
      description: 'आम जनता के सामान्य सवालों (जैसे पासपोर्ट वेरिफिकेशन स्टेटस, FIR कॉपी कैसे लें) का 24/7 जवाब देने वाला इंटेलिजेंट चैटबॉट।'
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
            <FileText size={28} />
            प्रशासनिक कार्य और ऑटोमेशन
          </h2>
          <p className="thane-subtitle">Police Administration, Workflow Automation & Public Desk Tools</p>
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
