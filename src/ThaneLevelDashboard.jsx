import React, { useState } from 'react';
import { Folder, ChevronDown, Clock, Mic, Activity, BookOpen, Package, Box, Calendar, Lock } from 'lucide-react';
import './ThaneLevelDashboard.css';
import ProjectDetailsView from './ProjectDetailsView';

export default function ThaneLevelDashboard({ projects = [] }) {
  const [selectedStation, setSelectedStation] = useState('All Stations');
  const [selectedProject, setSelectedProject] = useState(null);

  // Dummy projects if none passed
  const displayProjects = projects.length > 0 ? projects : [
    { id: 1, name: 'आवाज से FIR ड्राफ्टिंग (Crime GPT/Copilot)', status: 'Active', date: '2026-07-01', icon: Mic, color: '#3b82f6' },
    { id: 2, name: 'थाना डैशबोर्ड (Real-time Tracker)', status: 'Pending', date: '2026-07-05', icon: Activity, color: '#10b981' },
    { id: 3, name: 'डिजिटल बीट बुक (Guardian AI)', status: 'Completed', date: '2026-06-20', icon: BookOpen, color: '#f59e0b' },
    { id: 4, name: 'स्मार्ट इन्वेंटरी मैनेजर (Armoury AI)', status: 'New', date: '2026-07-08', icon: Package, color: '#ec4899' },
    { id: 5, name: 'AI-आधारित मालखाना ट्रैकर (Inventory Monitor)', status: 'New', date: '2026-07-08', icon: Box, color: '#8b5cf6' },
    { id: 6, name: 'AI-आधारित ड्यूटी रोस्टर (Smart Scheduling)', status: 'New', date: '2026-07-08', icon: Calendar, color: '#14b8a6' },
    { id: 7, name: 'स्मार्ट लॉकअप गार्ड (Safety AI)', status: 'New', date: '2026-07-08', icon: Lock, color: '#ef4444' },
  ];

  if (selectedProject) {
    return (
      <ProjectDetailsView 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <div className="thane-dashboard-container">
      <div className="thane-header">
        <h2 className="thane-title">Thane Level Operations</h2>
        <p className="thane-subtitle">Manage and monitor projects at the police station level</p>
      </div>

      <div className="thane-menu-bar">
        <div className="thane-menu-tabs">
          <button className="thane-tab active">Projects (परियोजनाएं)</button>
          <button className="thane-tab">Resources (संसाधन)</button>
          <button className="thane-tab">Reports (रिपोर्ट्स)</button>
        </div>
        
        <div className="thane-dropdown-wrapper">
          <label className="thane-dropdown-label">Station:</label>
          <div className="thane-select-container">
            <select 
              className="thane-select" 
              value={selectedStation} 
              onChange={(e) => setSelectedStation(e.target.value)}
            >
              <option value="All Stations">All Stations</option>
              <option value="Kotwali">Kotwali PS</option>
              <option value="Civil Lines">Civil Lines PS</option>
              <option value="Cantonment">Cantonment PS</option>
            </select>
            <ChevronDown size={16} className="thane-select-icon" />
          </div>
        </div>
      </div>

      <div className="thane-projects-grid">
        {displayProjects.map(proj => {
          const Icon = proj.icon || Folder;
          const projColor = proj.color || '#3b82f6';
          return (
            <div key={proj.id} className="thane-project-card" style={{
              borderTop: `4px solid ${projColor}`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 10px 25px -5px ${projColor}66, 0 0 20px ${projColor}33`;
              e.currentTarget.style.borderColor = projColor;
              e.currentTarget.style.zIndex = 10;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.zIndex = 1;
            }}>
              <div className="thane-card-header">
                <div style={{ background: `${projColor}15`, padding: '0.6rem', borderRadius: '0.5rem', color: projColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={24} />
                </div>
                <span className="thane-status-badge" style={{ background: `${projColor}15`, color: projColor, border: `1px solid ${projColor}40`, fontWeight: 'bold' }}>{proj.status}</span>
              </div>
              <h3 className="thane-card-title">{proj.name}</h3>
              <div className="thane-card-footer">
                <span className="thane-date"><Clock size={14} /> {proj.date}</span>
                <button 
                  className="thane-view-btn"
                  onClick={() => setSelectedProject(proj)}
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
