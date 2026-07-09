import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, Users, FileSignature,
  Shield, LogOut, Menu, X, Lightbulb,
  UserCheck, LineChart, BrainCircuit, Clock4,
  CheckCircle, Medal, Radar, FileText,
  ShieldAlert, Database, Settings as SettingsIcon,
  History, Command, BookOpen, Activity, Layout
} from 'lucide-react';
import './index.css';
import ProjectTracker from './ProjectTracker';
import AllMembers from './AllMembers';
import ThaneLevelDashboard from './ThaneLevelDashboard';
import DistrictLevelDashboard from './DistrictLevelDashboard';
import PoliceFunctioningDashboard from './PoliceFunctioningDashboard';
import StepUpLiteracyDashboard from './StepUpLiteracyDashboard';
import FrontendDetails from './FrontendDetails';
import OfficerPerformance from './pages/OfficerPerformance';
import InvestigationAnalytics from './pages/InvestigationAnalytics';
import AIInvestigation from './pages/AIInvestigation';
import DelayAnalysis from './pages/DelayAnalysis';
import InvestigationQuality from './pages/InvestigationQuality';
import OfficerRanking from './pages/OfficerRanking';
import PredictiveIntelligence from './pages/PredictiveIntelligence';
import Reports from './pages/Reports';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import MasterData from './pages/MasterData';
import SettingsPage from './pages/Settings';
import AuditLogs from './pages/AuditLogs';
import AICommandCenter from './pages/AICommandCenter';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('step-up');
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'AI Driven Traffic Management', description: 'Using computer vision for real-time traffic light optimization at major intersections.', category: 'Innovation', status: 'New', date: '2026-07-06', impact: 'Reduce average wait times by 25% and decrease accidents.', resources: 'Camera feeds, AI Processing Unit, Cloud Storage.' },
    { id: 2, title: 'Cybercrime Reporting Portal', description: 'A simplified portal for citizens to quickly report digital fraud with evidence uploads.', category: 'Software Dev', status: 'Approved', date: '2026-07-05', impact: 'Increase reporting efficiency and citizen trust.', resources: 'Web hosting, Secure Database, Support Team.' }
  ]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close sidebar on mobile after select
  };

  const navItems = [
    { id: 'step-up', label: 'Step Up Literacy Software (स्टेप अप साक्षरता सॉफ्टवेयर)', icon: BookOpen },
    { id: 'police-functioning', label: 'Police Functioning (AI पुलिस की कार्यप्रणाली)', icon: BrainCircuit },
    { id: 'thane-level', label: 'Thane Level (पुलिस थाना स्तर)', icon: Shield },
    { id: 'district-level', label: 'District Level (जिला स्तर (SP/SSP कार्यालय))', icon: Building2 },
    { id: 'frontend', label: 'Frontend Design (फ्रंटएंड डिज़ाइन)', icon: Layout }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header" style={{ position: 'relative' }}>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="header-title-container">
          <Shield className="header-icon" size={32} />
          <h1 className="header-title">UP Police AI Investigation <span>(Command Center)</span></h1>
        </div>
        <p className="header-subtitle">Advanced Analytics & Investigative Intelligence Platform | Innovation - Integration - Implementation</p>

        {/* Logout Button */}
        <Link to="/" style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(255,255,255,0.1)',
          color: 'white',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '2rem',
          fontSize: '0.85rem',
          fontWeight: '600',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.2s'
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
        >
          <LogOut size={16} />
          Logout
        </Link>
      </header>

      {/* Dashboard Layout with Sidebar */}
      <div className="dashboard-layout">

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Sidebar */}
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`} style={{ overflowY: 'auto' }}>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleTabChange(item.id)}
            >
              <item.icon className="nav-icon" size={20} />
              {item.label}
            </div>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto', width: '100%' }}>
          {activeTab === 'step-up' && (
            <StepUpLiteracyDashboard />
          )}
          {activeTab === 'frontend' && (
            <FrontendDetails />
          )}
          {activeTab === 'police-functioning' && <PoliceFunctioningDashboard />}
          {activeTab === 'thane-level' && <ThaneLevelDashboard projects={projects} />}
          {activeTab === 'district-level' && <DistrictLevelDashboard />}
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <div className="footer-copyright" style={{ marginTop: '0', fontSize: '0.9rem', color: '#94a3b8' }}>
          © 2026 UP Police AI Investigation Command Center. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
