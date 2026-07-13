import React, { useState } from 'react';
import { ArrowLeft, Map, Radar, Activity, Focus, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function PredictivePolicing({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'hotspot-mapping', title: 'Crime Hotspot Mapping', subtitle: 'Geospatial Intelligence (अपराध के हॉटस्पॉट)',
      icon: Map, color: '#f59e0b',
      items: ['GIS (Geographic Information Systems)', 'Kernel Density Estimation (KDE)', 'Risk Terrain Modeling', 'Real-time Patrol Routing', 'Overlaying Demographic Data'],
      example: 'To automatically direct police patrols to specific streets where AI calculates a 85% probability of a crime occurring in the next 4 hours.',
      deepDive: [
        { heading: 'Kernel Density Estimation', text: 'A statistical technique used to visualize the density of crimes over a geographical area. It creates the classic "heat map" showing red zones where crime is highly concentrated.' },
        { heading: 'Risk Terrain Modeling', text: 'Instead of just looking at past crimes, this model looks at environmental factors (e.g., proximity to bars, poorly lit streets, abandoned buildings) to predict future risks.' }
      ]
    },
    {
      id: 'time-series', title: 'Time-Series Forecasting', subtitle: 'Predicting the Future (भविष्यवाणी करना)',
      icon: Activity, color: '#0ea5e9',
      items: ['ARIMA & Prophet Models', 'LSTM Neural Networks for Time Data', 'Seasonality & Trend Analysis', 'Event-based Spikes (Festivals, Elections)', 'Resource Allocation Prediction'],
      example: 'To predict exactly how many police officers will be needed on a specific festival day based on 10 years of historical crime and crowd data.',
      deepDive: [
        { heading: 'Seasonality in Crime', text: 'Certain crimes follow strict time patterns. Burglaries might peak during summer holidays, while cyber frauds might peak during tax season. Time-series models map these exact patterns.' },
        { heading: 'LSTM (Long Short-Term Memory)', text: 'A type of neural network perfect for sequence data. It "remembers" long-term trends (like crime dropping over 5 years) while adjusting for short-term shocks (like a sudden local riot).' }
      ]
    },
    {
      id: 'drone-ai', title: 'Drone Surveillance Analytics', subtitle: 'Eyes in the Sky (ड्रोन द्वारा निगरानी)',
      icon: Radar, color: '#10b981',
      items: ['Real-time Crowd Density Estimation', 'Automated License Plate Recognition (ALPR)', 'Thermal Imaging for Night Tracking', 'Fleeing Suspect Trajectory Prediction', 'Swarm Drone Coordination'],
      example: 'To deploy a fleet of drones during a massive rally that autonomously calculates crowd density and detects stampede risks before they happen.',
      deepDive: [
        { heading: 'Crowd Density Estimation', text: 'Using Computer Vision models (like YOLOv8) running on the edge, the drone counts heads per square meter in real-time. If density crosses safe limits, command center is alerted.' },
        { heading: 'Thermal Tracking', text: 'In night operations (e.g., forest search for a suspect), thermal cameras feed heat signatures to an AI that instantly filters out animals and highlights human targets.' }
      ]
    },
    {
      id: 'graph-networks', title: 'Criminal Network Graphs', subtitle: 'Connecting the Dots (कनेक्शन खोजना)',
      icon: Focus, color: '#8b5cf6',
      items: ['Graph Databases (Neo4j)', 'Centrality Analysis (Finding the Boss)', 'Call Detail Record (CDR) Mapping', 'Financial Flow Networks', 'Link Prediction Algorithms'],
      example: 'To input 100,000 phone call records and have the AI instantly draw a map showing the hidden leader of an organized crime syndicate.',
      deepDive: [
        { heading: 'Graph Databases', text: 'Unlike SQL where data is in tables, Graph databases store data as Nodes (People) and Edges (Relationships). This makes finding a "friend of a friend" instant instead of taking minutes.' },
        { heading: 'Betweenness Centrality', text: 'An algorithm that identifies the person who acts as a bridge between different criminal cells. Arresting this one "hub" can dismantle the entire communication network.' }
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
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Map size={32} color="#f59e0b" /> Predictive Policing & Analytics (प्रेडिक्टिव एनालिटिक्स)</h2>
        <p className="thane-subtitle">Forecasting crime, analyzing geospatial data, and mapping criminal networks with AI.</p>
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
