import React, { useState } from 'react';
import { ArrowLeft, Bot, Mic, Cpu, Network, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function AutonomousAgents({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'auto-fir', title: 'Automated FIR & Legal Assistants', subtitle: 'Self-Drafting Documents (खुद टाइप होने वाली FIR)',
      icon: Mic, color: '#0ea5e9',
      items: ['Voice-to-Text Multi-lingual Processing', 'NLP for Legal Section Suggestion (IPC/BNS)', 'Auto-translation & Drafting', 'Sentiment & Urgency Analysis', 'Integration with Court Systems'],
      example: 'To allow citizens to speak their complaint in local dialects, while the AI instantly converts it into a legally accurate FIR draft with correct IPC/BNS sections.',
      deepDive: [
        { heading: 'Multi-lingual NLP', text: 'Using models like Bhashini or Whisper, the AI understands mixed languages (e.g., Hindi + English) and translates them into formal legal terminology instantly.' },
        { heading: 'Section Suggestion', text: 'Based on the keywords (e.g., "stolen", "knife", "night"), the AI searches its vector database of laws and suggests the exact legal sections to the investigating officer.' }
      ]
    },
    {
      id: 'multi-agent', title: 'Multi-Agent Systems', subtitle: 'AI Talking to AI (AI का आपस में बात करना)',
      icon: Network, color: '#8b5cf6',
      items: ['AutoGPT & BabyAGI Architectures', 'Task Delegation between AI Bots', 'Debate & Validation Mechanisms', 'Swarm Intelligence', 'API Integrations (Email, SMS, DB)'],
      example: 'To deploy a team of AI bots where Bot A gathers evidence, Bot B cross-checks it with criminal records, and Bot C writes the final report — all autonomously.',
      deepDive: [
        { heading: 'How Multi-Agent Works', text: 'Instead of one massive AI doing everything poorly, you have specialized mini-AIs. A "Manager AI" breaks a big problem into small tasks and assigns them to "Worker AIs".' },
        { heading: 'Debate Mechanism', text: 'To prevent hallucinations, two AI agents are prompted to debate a piece of evidence. A third "Judge AI" evaluates the debate before presenting the final conclusion to the human officer.' }
      ]
    },
    {
      id: 'robotics', title: 'Robotics & Physical AI', subtitle: 'AI in the Physical World (असली दुनिया में AI)',
      icon: Cpu, color: '#f59e0b',
      items: ['Bomb Disposal & Hazardous Material Bots', 'Boston Dynamics Spot for Patrol', 'Computer Vision for Navigation (SLAM)', 'Edge Computing on Robots', 'IoT Sensor Integration'],
      example: 'To send autonomous robots into dangerous situations (hostage crises, chemical spills, bomb threats) to gather intel without risking police lives.',
      deepDive: [
        { heading: 'SLAM (Simultaneous Localization and Mapping)', text: 'The algorithm that allows a robot to build a 3D map of an unknown building in real-time while simultaneously keeping track of where it is inside that map.' },
        { heading: 'Edge Computing', text: 'A robot deep underground might lose internet connection. It must have built-in GPUs (like NVIDIA Jetson) to process camera feeds and make autonomous decisions locally.' }
      ]
    },
    {
      id: 'osint-bots', title: 'OSINT Autonomous Bots', subtitle: 'Open Source Intelligence (खुफिया जानकारी जुटाना)',
      icon: Bot, color: '#10b981',
      items: ['Automated Social Media Scraping', 'Facial Recognition across the Web', 'Geolocation from Image Backgrounds', 'Network Graph Generation from Social Connections', 'Fake Account Detection'],
      example: 'To give a bot a suspect\'s photo, and have it autonomously scour the entire internet, social media, and forums to build a complete profile in 5 minutes.',
      deepDive: [
        { heading: 'Geolocation via AI', text: 'AI can analyze the background of a photo (shadows, tree types, mountain shapes, street signs) and pinpoint the exact GPS coordinates where the photo was taken.' },
        { heading: 'Fake Account Detection', text: 'Bots analyze posting frequency, follower graphs, and text sentiment to instantly flag bot networks or fake profiles spreading misinformation during riots.' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {selectedModule && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isPopupMaximized ? '1rem' : '2rem' }}>
          <div className="animate-fade-in" style={{ background: '#f8fafc', width: '100%', maxWidth: isPopupMaximized ? '98%' : '1000px', height: isPopupMaximized ? '96vh' : '75vh', overflowY: 'auto', borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button onClick={() => setIsPopupMaximized(!isPopupMaximized)} style={{ background: '#e2e8f0', color: '#0f172a', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}</button>
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
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Bot size={32} color="#8b5cf6" /> Autonomous AI Agents (ऑटोनोमस AI एजेंट्स)</h2>
        <p className="thane-subtitle">Next-generation AI that doesn't just answer questions, but autonomously executes complex physical and digital tasks.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderTop: `4px solid ${module.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}><module.icon size={24} /></div>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>{module.title}</h4>
              </div>
            </div>
            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', fontWeight: '500' }}>
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
