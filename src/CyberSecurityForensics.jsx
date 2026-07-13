import React, { useState } from 'react';
import { ArrowLeft, ShieldAlert, ScanEye, Search, Lock, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function CyberSecurityForensics({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'deepfake', title: 'Deepfake Detection', subtitle: 'Spotting Fake Media (फर्जी वीडियो पकड़ना)',
      icon: ScanEye, color: '#ef4444',
      items: ['Facial Artifact Analysis', 'Voice Cloning Detection (Audio Forensics)', 'Pixel & Metadata Inconsistencies', 'AI-Generated Text Detection', 'Real-time Video Verification'],
      example: 'To analyze digital evidence in blackmail or misinformation cases and scientifically prove whether a video/audio is real or AI-generated.',
      deepDive: [
        { heading: 'How Deepfake Detection Works', text: 'AI models analyze invisible artifacts in video frames, like unnatural blinking patterns, mismatched shadows, and frequency domain anomalies that humans cannot see.' },
        { heading: 'Audio Forensics', text: 'With AI voice cloning becoming perfect, detection relies on spectrogram analysis to find synthetic frequency drops and unnatural breathing patterns.' }
      ]
    },
    {
      id: 'dark-web', title: 'Dark Web Monitoring', subtitle: 'Tracking Hidden Threats (छिपे हुए खतरों को ट्रैक करना)',
      icon: Search, color: '#f59e0b',
      items: ['Automated Onion Site Scraping', 'Credential Leak Detection', 'NLP for Crypto Transaction Tracking', 'Threat Actor Profiling', 'Underground Forum Alerting'],
      example: 'To preemptively stop cyber attacks and track illegal trade by deploying AI bots that constantly scan the hidden parts of the internet.',
      deepDive: [
        { heading: 'Scraping the Dark Web', text: 'Specialized AI bots traverse the Tor network to index illicit marketplaces, bypassing captchas and extracting data using NLP to identify drug and weapons sales.' },
        { heading: 'Crypto Tracking', text: 'Analyzing Bitcoin/Monero blockchain ledgers using graph theory to unmask the flow of illicit money and identify criminal wallets.' }
      ]
    },
    {
      id: 'zero-trust', title: 'Zero-Trust Architecture', subtitle: 'Enterprise Security (सख्त सुरक्षा नियम)',
      icon: Lock, color: '#3b82f6',
      items: ['"Never Trust, Always Verify"', 'Identity and Access Management (IAM)', 'Micro-Segmentation of Networks', 'Device Posture Checking', 'Continuous Authentication'],
      example: 'To ensure that even if a hacker breaches the outer network, they cannot access any sensitive police or investigative data.',
      deepDive: [
        { heading: 'The Zero-Trust Principle', text: 'Traditional security focuses on the perimeter (like a castle wall). Zero-Trust assumes the network is already compromised. Every single request, internal or external, must be heavily authenticated.' },
        { heading: 'Micro-segmentation', text: 'Splitting the network into tiny, secure zones. If a hacker breaches the HR server, they are physically blocked from reaching the Intelligence server.' }
      ]
    },
    {
      id: 'ai-threats', title: 'AI-Driven Threat Detection', subtitle: 'Smart Security (स्मार्ट सिक्योरिटी)',
      icon: ShieldAlert, color: '#10b981',
      items: ['Behavioral Anomaly Detection', 'DDoS Pattern Recognition', 'Automated Incident Response', 'Malware Signature Generation', 'Phishing Email Analysis'],
      example: 'To replace slow, rule-based firewalls with an AI that learns normal network behavior and instantly blocks hackers.',
      deepDive: [
        { heading: 'Behavioral Anomaly', text: 'If a police officer usually logs in from Delhi at 10 AM, but suddenly tries to download 50GB of data from Russia at 3 AM, the AI instantly locks the account.' },
        { heading: 'Automated Response', text: 'When a ransomware attack begins, the AI doesn\'t just send an alert. It automatically disconnects infected servers from the network in milliseconds, stopping the spread.' }
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
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><ShieldAlert size={32} color="#ef4444" /> AI Cyber Security & Forensics (साइबर सुरक्षा)</h2>
        <p className="thane-subtitle">Advanced digital forensics, deepfake detection, and enterprise zero-trust security architecture.</p>
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
