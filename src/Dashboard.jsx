import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, Users, FileSignature,
  Shield, LogOut, Menu, X, Lightbulb,
  UserCheck, LineChart, BrainCircuit, Clock4,
  CheckCircle, Medal, Radar, FileText,
  ShieldAlert, Database, Settings as SettingsIcon,
  Code, Briefcase, GitBranch, Network, GlobeLock, Landmark, Play, UserCog, BookOpen, GraduationCap, Presentation, Activity, Info, ChevronDown
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
import AICourseDashboard from './AICourseDashboard';
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
import ProjectPPTDashboard from './ProjectPPTDashboard';
import SoftwareMasterclassDashboard from './SoftwareMasterclassDashboard';
import MLOpsDashboard from './MLOpsDashboard';
import AdvancedAICyberDashboard from './AdvancedAICyberDashboard';
import Overview from './Overview';
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [stepUpSubTab, setStepUpSubTab] = useState('phases');
  const [members, setMembers] = useState([]);
  const [resetTriggers, setResetTriggers] = useState({
    'step-up': 0,
    'thane-level': 0,
    'district-level': 0,
    'masterclass': 0,
    'mlops': 0
  });
  const [expandedSections, setExpandedSections] = useState({
    Education: false,
    Operations: false,
    Administrative: false
  });
  
  const toggleSection = (sec) => {
    setExpandedSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'AI Driven Traffic Management', description: 'Using computer vision for real-time traffic light optimization at major intersections.', category: 'Innovation', status: 'New', date: '2026-07-06', impact: 'Reduce average wait times by 25% and decrease accidents.', resources: 'Camera feeds, AI Processing Unit, Cloud Storage.' },
    { id: 2, title: 'Cybercrime Reporting Portal', description: 'A simplified portal for citizens to quickly report digital fraud with evidence uploads.', category: 'Software Dev', status: 'Approved', date: '2026-07-05', impact: 'Increase reporting efficiency and citizen trust.', resources: 'Web hosting, Secure Database, Support Team.' }
  ]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const handleTabChange = (tab, subTab = 'phases') => {
    if (activeTab === tab) {
      setResetTriggers(prev => ({
        ...prev,
        [tab]: prev[tab] + 1
      }));
    } else {
      setActiveTab(tab);
      if (tab === 'step-up') {
        setStepUpSubTab(subTab);
      }
    }
    setIsMobileMenuOpen(false); // Close sidebar on mobile after select
  };

  React.useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  const navItems = [
    { id: 'overview', label: 'Overview (अवलोकन)', icon: Info, color: '#3b82f6', category: 'General' },
    { id: 'step-up', label: 'Step Up Literacy Software (स्टेप अप साक्षरता सॉफ्टवेयर)', icon: BookOpen, color: '#64748b', category: 'Education' },
    { id: 'ai-course', label: 'Artificial Intelligence (AI) Course (आर्टिफिशियल इंटेलिजेंस (AI) कोर्स)', icon: GraduationCap, color: '#3b82f6', category: 'Education' },
    { id: 'masterclass', label: 'Software Masterclass (सॉफ्टवेयर मास्टरक्लास)', icon: Code, color: '#0ea5e9', category: 'Education' },
    { id: 'mlops', label: 'AI Operations - MLOps (AI ऑपरेशन्स)', icon: Activity, color: '#8b5cf6', category: 'Operations' },
    { id: 'advanced-ai', label: 'Advanced AI & Cyber Command (एडवांस्ड AI)', icon: GlobeLock, color: '#10b981', category: 'Operations' },
    { id: 'police-functioning', label: 'Police Functioning (AI पुलिस की कार्यप्रणाली)', icon: BrainCircuit, color: '#f59e0b', category: 'Operations' },
    { id: 'thane-level', label: 'Thane Level (पुलिस थाना स्तर)', icon: Shield, color: '#ef4444', category: 'Administrative' },
    { id: 'district-level', label: 'District Level (जिला स्तर (SP/SSP कार्यालय))', icon: Building2, color: '#b91c1c', category: 'Administrative' },
    { id: 'project-ppt', label: 'Project PPT (प्रोजेक्ट पीपीटी)', icon: Presentation, color: '#475569', category: 'Administrative' }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header" style={{ position: 'relative' }}>
        <div className="header-title-container">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`} style={{ overflowY: 'auto', padding: '1.5rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* General Tab */}
          {navItems.filter(i => i.category === 'General').map((item) => (
            <div
              key={item.id}
              className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleTabChange(item.id)}
              style={{
                borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                background: activeTab === item.id ? `${item.color}15` : 'transparent',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                gap: '0.75rem',
                cursor: 'pointer',
                borderRadius: '0.5rem'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = '#f1f5f9';
                  e.currentTarget.style.borderLeft = `4px solid #cbd5e1`;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderLeft = '4px solid transparent';
                }
              }}
            >
              <div style={{
                background: activeTab === item.id ? `linear-gradient(135deg, ${item.color}, ${item.color}dd)` : `${item.color}15`,
                padding: '0.6rem',
                borderRadius: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeTab === item.id ? 'white' : item.color,
                boxShadow: activeTab === item.id ? `0 4px 12px ${item.color}66` : 'none',
                transform: activeTab === item.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <item.icon size={18} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              </div>
              <span style={{ 
                fontWeight: activeTab === item.id ? '700' : '500', 
                color: activeTab === item.id ? item.color : '#475569',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease'
              }}>
                {item.label}
              </span>
            </div>
          ))}

          {/* Group 1: Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div 
              onClick={() => toggleSection('Education')}
              style={{ 
                fontSize: '0.75rem', 
                fontWeight: '800', 
                color: '#2563eb', 
                background: '#2563eb10', 
                padding: '0.4rem 0.75rem', 
                borderRadius: '0.5rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }}></span>
                Education & IT Capacity
              </div>
              <ChevronDown size={14} style={{ transform: expandedSections.Education ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#2563eb' }} />
            </div>
            {expandedSections.Education && navItems.filter(i => i.category === 'Education').map((item) => (
              <div
                key={item.id}
                className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabChange(item.id)}
                style={{
                  borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                  background: activeTab === item.id ? `${item.color}15` : 'transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  borderRadius: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.borderLeft = `4px solid #cbd5e1`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderLeft = '4px solid transparent';
                  }
                }}
              >
                <div style={{
                  background: activeTab === item.id ? `linear-gradient(135deg, ${item.color}, ${item.color}dd)` : `${item.color}15`,
                  padding: '0.6rem',
                  borderRadius: '0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeTab === item.id ? 'white' : item.color,
                  boxShadow: activeTab === item.id ? `0 4px 12px ${item.color}66` : 'none',
                  transform: activeTab === item.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <item.icon size={18} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                </div>
                <span style={{ 
                  fontWeight: activeTab === item.id ? '700' : '500', 
                  color: activeTab === item.id ? item.color : '#475569',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Group 2: Operations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div 
              onClick={() => toggleSection('Operations')}
              style={{ 
                fontSize: '0.75rem', 
                fontWeight: '800', 
                color: '#0d9488', 
                background: '#0d948810', 
                padding: '0.4rem 0.75rem', 
                borderRadius: '0.5rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0d9488' }}></span>
                AI & Operations Command
              </div>
              <ChevronDown size={14} style={{ transform: expandedSections.Operations ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#0d9488' }} />
            </div>
            {expandedSections.Operations && navItems.filter(i => i.category === 'Operations').map((item) => (
              <div
                key={item.id}
                className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabChange(item.id)}
                style={{
                  borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                  background: activeTab === item.id ? `${item.color}15` : 'transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  borderRadius: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.borderLeft = `4px solid #cbd5e1`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderLeft = '4px solid transparent';
                  }
                }}
              >
                <div style={{
                  background: activeTab === item.id ? `linear-gradient(135deg, ${item.color}, ${item.color}dd)` : `${item.color}15`,
                  padding: '0.6rem',
                  borderRadius: '0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeTab === item.id ? 'white' : item.color,
                  boxShadow: activeTab === item.id ? `0 4px 12px ${item.color}66` : 'none',
                  transform: activeTab === item.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <item.icon size={18} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                </div>
                <span style={{ 
                  fontWeight: activeTab === item.id ? '700' : '500', 
                  color: activeTab === item.id ? item.color : '#475569',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Group 3: Administrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div 
              onClick={() => toggleSection('Administrative')}
              style={{ 
                fontSize: '0.75rem', 
                fontWeight: '800', 
                color: '#dc2626', 
                background: '#dc262610', 
                padding: '0.4rem 0.75rem', 
                borderRadius: '0.5rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#dc2626' }}></span>
                Administrative & Field Levels
              </div>
              <ChevronDown size={14} style={{ transform: expandedSections.Administrative ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#dc2626' }} />
            </div>
            {expandedSections.Administrative && navItems.filter(i => i.category === 'Administrative').map((item) => (
              <div
                key={item.id}
                className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabChange(item.id)}
                style={{
                  borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                  background: activeTab === item.id ? `${item.color}15` : 'transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  borderRadius: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.borderLeft = `4px solid #cbd5e1`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== item.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderLeft = '4px solid transparent';
                  }
                }}
              >
                <div style={{
                  background: activeTab === item.id ? `linear-gradient(135deg, ${item.color}, ${item.color}dd)` : `${item.color}15`,
                  padding: '0.6rem',
                  borderRadius: '0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeTab === item.id ? 'white' : item.color,
                  boxShadow: activeTab === item.id ? `0 4px 12px ${item.color}66` : 'none',
                  transform: activeTab === item.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <item.icon size={18} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                </div>
                <span style={{ 
                  fontWeight: activeTab === item.id ? '700' : '500', 
                  color: activeTab === item.id ? item.color : '#475569',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </aside>

        {/* Main Content Area */}
        <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto', width: '100%' }}>
          {activeTab === 'overview' && (
            <Overview onNavigate={(tabId, subTabId) => handleTabChange(tabId, subTabId)} />
          )}
          {activeTab === 'step-up' && (
            <StepUpLiteracyDashboard defaultTab={stepUpSubTab} resetTrigger={resetTriggers['step-up']} />
          )}
          {activeTab === 'ai-course' && (
            <AICourseDashboard />
          )}
          {activeTab === 'frontend' && (
            <FrontendDetails />
          )}
          {activeTab === 'police-functioning' && <PoliceFunctioningDashboard />}
          {activeTab === 'thane-level' && <ThaneLevelDashboard projects={projects} resetTrigger={resetTriggers['thane-level']} />}
          {activeTab === 'district-level' && <DistrictLevelDashboard resetTrigger={resetTriggers['district-level']} />}
          {activeTab === 'project-ppt' && <ProjectPPTDashboard />}
          {activeTab === 'masterclass' && <SoftwareMasterclassDashboard resetTrigger={resetTriggers['masterclass']} />}
          {activeTab === 'mlops' && <MLOpsDashboard resetTrigger={resetTriggers['mlops']} />}
          {activeTab === 'advanced-ai' && <AdvancedAICyberDashboard />}
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
