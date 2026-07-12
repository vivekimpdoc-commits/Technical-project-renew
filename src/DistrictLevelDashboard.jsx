import React, { useState } from 'react';
import { Folder, ChevronDown, Clock } from 'lucide-react';
import './ThaneLevelDashboard.css';
import ProjectDetailsView from './ProjectDetailsView';
import DLiccDashboard from './DLiccDashboard';
import DistrictResourceDashboard from './DistrictResourceDashboard';
import DistrictAssetDashboard from './DistrictAssetDashboard';
import DistrictSecurityDashboard from './DistrictSecurityDashboard';

export default function DistrictLevelDashboard({ resetTrigger }) {
  const [selectedStation, setSelectedStation] = useState('All Zones');
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    setSelectedProject(null);
  }, [resetTrigger]);

  React.useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [selectedStation, selectedProject]);

  const displayProjects = [
    { id: 101, name: 'डिस्ट्रिक्ट-लेवल इंटीग्रेटेड कमांड सेंटर (D-LICC)', status: 'Active', date: '2026-07-08' },
    { id: 102, name: 'डिस्ट्रिक्ट रिसोर्स और फोर्स मैनेजमेंट', status: 'New', date: '2026-07-08' },
    { id: 103, name: 'ज़िला-स्तरीय एसेट और एविडेंस ट्रैकिंग', status: 'Pending', date: '2026-07-08' },
    { id: 104, name: 'ज़िला सुरक्षा और कानून व्यवस्था', status: 'New', date: '2026-07-08' },
  ];

  if (selectedProject?.id === 101) {
    return (
      <DLiccDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 102) {
    return (
      <DistrictResourceDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 103) {
    return (
      <DistrictAssetDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 104) {
    return (
      <DistrictSecurityDashboard onBack={() => setSelectedProject(null)} />
    );
  }

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
        <h2 className="thane-title">District (SP/SSP Office) Level Operations</h2>
        <p className="thane-subtitle">Manage and monitor command centers and resources across the entire district</p>
      </div>

      <div className="thane-menu-bar">
        <div className="thane-menu-tabs">
          <button className="thane-tab active">Modules Menu</button>
          <button className="thane-tab">Global Resources</button>
          <button className="thane-tab">District Reports</button>
        </div>
        
        <div className="thane-dropdown-wrapper">
          <label className="thane-dropdown-label">Zone:</label>
          <div className="thane-select-container">
            <select 
              className="thane-select" 
              value={selectedStation} 
              onChange={(e) => setSelectedStation(e.target.value)}
            >
              <option value="All Zones">All Zones</option>
              <option value="North Zone">North Zone</option>
              <option value="South Zone">South Zone</option>
              <option value="Central Zone">Central Zone</option>
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
