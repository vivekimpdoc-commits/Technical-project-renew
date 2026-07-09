import React, { useState } from 'react';
import { BrainCircuit, Search, Video, Shield, FileText, Database, Folder, Clock, Car } from 'lucide-react';
import './ThaneLevelDashboard.css'; // Reusing the same grid CSS
import ProjectDetailsView from './ProjectDetailsView';
import CrimeForensicsDashboard from './CrimeForensicsDashboard';
import SmartSurveillanceDashboard from './SmartSurveillanceDashboard';
import FieldPolicingDashboard from './FieldPolicingDashboard';
import AdministrationDashboard from './AdministrationDashboard';
import DataIntegrityDashboard from './DataIntegrityDashboard';
import TrafficGrievanceDashboard from './TrafficGrievanceDashboard';

export default function PoliceFunctioningDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);

  const displayProjects = [
    { id: 301, name: 'अपराध जांच और डिजिटल फॉरेंसिक (Crime Investigation & Forensics)', status: 'Active', date: '2026-07-09', icon: Search },
    { id: 302, name: 'स्मार्ट सर्विलांस और वीडियो एनालिटिक्स (Smart Surveillance & AI Analytics)', status: 'Active', date: '2026-07-09', icon: Video },
    { id: 303, name: 'कानून व्यवस्था और फील्ड पुलिसिंग (Law Enforcement & Field Policing)', status: 'New', date: '2026-07-09', icon: Shield },
    { id: 304, name: 'प्रशासनिक कार्य और ऑटोमेशन (Police Administration & Automation)', status: 'Pending', date: '2026-07-09', icon: FileText },
    { id: 305, name: 'डेटा सुरक्षा और पारदर्शिता (Data Integrity & Transparency)', status: 'New', date: '2026-07-09', icon: Database },
    { id: 306, name: 'ट्रैफिक और नागरिक शिकायत निवारण (Traffic & Public Grievance)', status: 'Active', date: '2026-07-09', icon: Car },
  ];

  if (selectedProject?.id === 301) {
    return (
      <CrimeForensicsDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 302) {
    return (
      <SmartSurveillanceDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 303) {
    return (
      <FieldPolicingDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 304) {
    return (
      <AdministrationDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 305) {
    return (
      <DataIntegrityDashboard onBack={() => setSelectedProject(null)} />
    );
  }

  if (selectedProject?.id === 306) {
    return (
      <TrafficGrievanceDashboard onBack={() => setSelectedProject(null)} />
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
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <BrainCircuit size={28} />
          AI पुलिस की कार्यप्रणाली (Police Functioning)
        </h2>
        <p className="thane-subtitle">Overview of AI integrations in core police functions and departments</p>
      </div>

      <div className="thane-projects-grid" style={{ marginTop: '2rem' }}>
        {displayProjects.map(proj => {
          const Icon = proj.icon || Folder;
          return (
            <div key={proj.id} className="thane-project-card">
              <div className="thane-card-header">
                <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '0.5rem' }}>
                  <Icon size={24} className="thane-folder-icon" style={{ margin: 0 }} />
                </div>
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
          );
        })}
      </div>
    </div>
  );
}
