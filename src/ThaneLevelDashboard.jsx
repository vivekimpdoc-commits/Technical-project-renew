import React, { useState } from 'react';
import { Folder, ChevronDown, Clock } from 'lucide-react';
import './ThaneLevelDashboard.css';
import ProjectDetailsView from './ProjectDetailsView';

export default function ThaneLevelDashboard({ projects = [] }) {
  const [selectedStation, setSelectedStation] = useState('All Stations');
  const [selectedProject, setSelectedProject] = useState(null);

  // Dummy projects if none passed
  const displayProjects = projects.length > 0 ? projects : [
    { id: 1, name: 'आवाज से FIR ड्राफ्टिंग (Crime GPT/Copilot)', status: 'Active', date: '2026-07-01' },
    { id: 2, name: 'थाना डैशबोर्ड (Real-time Tracker)', status: 'Pending', date: '2026-07-05' },
    { id: 3, name: 'डिजिटल बीट बुक (Guardian AI)', status: 'Completed', date: '2026-06-20' },
    { id: 4, name: 'स्मार्ट इन्वेंटरी मैनेजर (Armoury AI)', status: 'New', date: '2026-07-08' },
    { id: 5, name: 'AI-आधारित मालखाना ट्रैकर (Inventory Monitor)', status: 'New', date: '2026-07-08' },
    { id: 6, name: 'AI-आधारित ड्यूटी रोस्टर (Smart Scheduling)', status: 'New', date: '2026-07-08' },
    { id: 7, name: 'स्मार्ट लॉकअप गार्ड (Safety AI)', status: 'New', date: '2026-07-08' },
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
          <button className="thane-tab active">Projects Menu</button>
          <button className="thane-tab">Resources</button>
          <button className="thane-tab">Reports</button>
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
        {displayProjects.map(proj => (
          <div key={proj.id} className="thane-project-card">
            <div className="thane-card-header">
              <Folder size={24} className="thane-folder-icon" />
              <span className={`thane-status-badge ${proj.status.toLowerCase()}`}>{proj.status}</span>
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
        ))}
      </div>
    </div>
  );
}
