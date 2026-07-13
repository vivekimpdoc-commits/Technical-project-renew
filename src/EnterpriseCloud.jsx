import React, { useState } from 'react';
import { ArrowLeft, Cloud, Server, Shield, Activity, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function EnterpriseCloud({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'multi-cloud', title: 'Multi-Cloud Strategy', subtitle: 'No Single Point of Failure (सर्वर क्रैश से बचाव)',
      icon: Cloud, color: '#3b82f6',
      items: ['AWS, Azure, & GCP Integration', 'Avoiding Vendor Lock-in', 'Global Traffic Routing', 'Cost Optimization across Clouds', 'Hybrid Cloud (On-Premises + Cloud)'],
      example: 'To ensure the police network stays online even if the entire Amazon Web Services (AWS) network goes down in India, by instantly failing over to Azure.',
      deepDive: [
        { heading: 'Hybrid Cloud', text: 'Highly sensitive data (like spy identities) stays on physical servers inside police headquarters (On-Premises). Less sensitive data (like traffic tickets) goes to the public cloud.' },
        { heading: 'Vendor Lock-in', text: 'If you build everything using AWS-specific tools, you can never leave AWS. Using open-source tools (like Kubernetes) allows you to move your entire system to Google Cloud in a day.' }
      ]
    },
    {
      id: 'disaster-recovery', title: 'Disaster Recovery', subtitle: 'Backup and Restore (बैकअप और रिकवरी)',
      icon: Activity, color: '#ef4444',
      items: ['RTO (Recovery Time Objective)', 'RPO (Recovery Point Objective)', 'Active-Active vs Active-Passive Deployments', 'Automated Database Backups', 'Chaos Engineering'],
      example: 'To guarantee that if a natural disaster destroys the primary data center, the entire system comes back online in another city within 5 minutes with zero data loss.',
      deepDive: [
        { heading: 'RTO and RPO', text: 'RTO: How long can the system be down? (e.g., 5 mins). RPO: How much data can we afford to lose? (e.g., 0 data lost). In police systems, both must be near zero.' },
        { heading: 'Chaos Engineering', text: 'Deliberately breaking things in production (like randomly turning off servers) to test if the automated recovery systems actually work. Made famous by Netflix\'s "Chaos Monkey".' }
      ]
    },
    {
      id: 'edge-computing', title: 'Edge Computing', subtitle: 'Processing Data Locally (लोकल प्रोसेसिंग)',
      icon: Server, color: '#10b981',
      items: ['Data Processing at the Source', 'Reducing Cloud Latency', 'Offline AI Capabilities', '5G Integration for IoT', 'Smart City Infrastructure'],
      example: 'To process CCTV camera footage directly on a chip inside the camera, instead of sending heavy video files to a central cloud server over a slow internet connection.',
      deepDive: [
        { heading: 'Why Edge Computing?', text: 'Sending 4K video from 10,000 cameras to the cloud requires massive bandwidth and causes delay. Edge computing processes the video locally and only sends an alert (e.g., "Gun detected") to the cloud.' },
        { heading: 'Offline Capabilities', text: 'If a remote police station loses internet connectivity, Edge servers allow them to still search local databases and run basic AI tasks until connection is restored.' }
      ]
    },
    {
      id: 'security-compliance', title: 'Cloud Security & Compliance', subtitle: 'Securing the Cloud (क्लाउड की सुरक्षा)',
      icon: Shield, color: '#f59e0b',
      items: ['End-to-End Encryption (AES-256)', 'Key Management Service (KMS)', 'DDoS Protection (Cloudflare/AWS Shield)', 'ISO 27001 Certification Standard', 'Data Residency (Data Localization)'],
      example: 'To ensure all investigative data remains strictly within the geographical borders of India and is mathematically impossible for anyone else to read.',
      deepDive: [
        { heading: 'Data Localization', text: 'Many countries mandate that government data must physically reside on servers within their borders. A World-Class cloud architecture strictly routes and stores data to comply with these laws.' },
        { heading: 'End-to-End Encryption', text: 'Data is encrypted on the officer\'s device and only decrypted on the receiver\'s device. Even the cloud provider (like Google or Amazon) cannot see what the data is.' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {selectedModule && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isPopupMaximized ? '1rem' : '2rem' }}>
          <div className="animate-fade-in" style={{ background: 'var(--icon-bg)', width: '100%', maxWidth: isPopupMaximized ? '98%' : '1000px', height: isPopupMaximized ? '96vh' : '75vh', overflowY: 'auto', borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button onClick={() => setIsPopupMaximized(!isPopupMaximized)} style={{ background: '#e2e8f0', color: 'var(--text-main)', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}</button>
              <button onClick={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>✕ Close</button>
            </div>
            <ModuleDetail module={selectedModule} onBack={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} isMaximized={isPopupMaximized} />
          </div>
        </div>
      )}

      <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} /> Back to Advanced AI Command
        </button>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Cloud size={32} color="#3b82f6" /> Enterprise Cloud Architecture (क्लाउड आर्किटेक्चर)</h2>
        <p className="thane-subtitle">Building robust, scalable, and highly available infrastructure for national-level deployment.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--card-border)', borderTop: `4px solid ${module.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}><module.icon size={24} /></div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>{module.title}</h4>
              </div>
            </div>
            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{ background: 'var(--icon-bg)', border: '1px solid var(--card-border)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '500' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: module.color, flexShrink: 0 }}></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={(e) => { e.stopPropagation(); setSelectedModuleId(module.id); }} style={{ width: '100%', padding: '0.75rem', background: module.color, color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: `0 4px 10px ${module.color}66`, transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                ><BookOpen size={18} /> Click to View Detailed Modules</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
